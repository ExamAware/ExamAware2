import { createHash } from 'node:crypto'
import {
  CONTROL_MAX_ARTIFACT_SIZE_BYTES,
  CONTROL_PROTOCOL_VERSION,
  createDeviceErrorReport,
  createEnrollDeviceRequest,
  createProctorCallRequest,
  enrollDeviceResponseSchema,
  type DeviceErrorReport,
  type DeviceIdentity,
  type EnrollDeviceResponse,
  type ProctorCallRequest
} from '@dsz-examaware/control-protocol'
import {
  ControlAgentError,
  normalizeControlServerUrl,
  validateControlWebSocketUrl,
  type ControlProblemDetails,
  type ControlRegistration
} from './controlTypes'

const CONTROL_API_RESPONSE_LIMIT_BYTES = 64 * 1024
const CONTROL_API_TIMEOUT_MS = 15_000
const DEVICE_ID_HEADER = 'x-device-id'
const DEVICE_CREDENTIAL_HEADER = 'x-device-credential'

export class ControlApiClient {
  constructor(private readonly fetchImpl: typeof fetch = fetch) {}

  async enroll(
    serverUrl: string,
    enrollmentCode: string,
    identity: DeviceIdentity
  ): Promise<ControlRegistration> {
    const normalizedServerUrl = normalizeControlServerUrl(serverUrl)
    const request = createEnrollDeviceRequest({
      enrollmentCode,
      ...identity,
      protocolVersion: CONTROL_PROTOCOL_VERSION
    })
    const response = await this.requestJson(
      new URL('/api/v1/device-enrollments', normalizedServerUrl),
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(request)
      }
    )
    try {
      const enrollment = enrollDeviceResponseSchema.parse(response) as EnrollDeviceResponse
      return {
        ...enrollment,
        websocketUrl: validateControlWebSocketUrl(enrollment.websocketUrl),
        serverUrl: normalizedServerUrl,
        enrolledAt: new Date().toISOString()
      }
    } catch (error) {
      if (error instanceof ControlAgentError) throw error
      throw new ControlAgentError(
        'control_api_invalid_response',
        '集控服务器返回了无效的设备注册响应',
        undefined,
        error
      )
    }
  }

  async reportError(registration: ControlRegistration, input: DeviceErrorReport): Promise<void> {
    const report = createDeviceErrorReport(input)
    await this.requestJson(
      new URL('/api/v1/device-errors', normalizeControlServerUrl(registration.serverUrl)),
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          [DEVICE_ID_HEADER]: registration.deviceId,
          [DEVICE_CREDENTIAL_HEADER]: registration.credential
        },
        body: JSON.stringify(report)
      }
    )
  }

  async callProctor(registration: ControlRegistration, input: ProctorCallRequest): Promise<void> {
    const call = createProctorCallRequest(input)
    await this.requestJson(
      new URL('/api/v1/proctor-calls', normalizeControlServerUrl(registration.serverUrl)),
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          [DEVICE_ID_HEADER]: registration.deviceId,
          [DEVICE_CREDENTIAL_HEADER]: registration.credential
        },
        body: JSON.stringify(call)
      }
    )
  }

  async downloadArtifact(
    registration: ControlRegistration,
    url: string
  ): Promise<{ bytes: Uint8Array; sha256: string }> {
    const serverUrl = new URL(normalizeControlServerUrl(registration.serverUrl))
    const artifactUrl = new URL(url)
    if (artifactUrl.origin !== serverUrl.origin) {
      throw new ControlAgentError(
        'control_artifact_origin_mismatch',
        '集控考试档案地址与已绑定服务器不一致'
      )
    }

    const controller = new AbortController()
    const timeout = setTimeout(
      () => controller.abort(new Error('control artifact request timeout')),
      CONTROL_API_TIMEOUT_MS
    )
    try {
      let response: Response
      try {
        response = await this.fetchImpl(artifactUrl, {
          method: 'GET',
          headers: {
            [DEVICE_ID_HEADER]: registration.deviceId,
            [DEVICE_CREDENTIAL_HEADER]: registration.credential
          },
          redirect: 'error',
          signal: controller.signal
        })
      } catch (error) {
        throw new ControlAgentError(
          controller.signal.aborted ? 'control_api_timeout' : 'control_api_unreachable',
          controller.signal.aborted ? '下载集控考试档案超时' : '无法下载集控考试档案',
          { url: artifactUrl.toString() },
          error
        )
      }
      if (!response.ok) {
        throw new ControlAgentError(
          'control_artifact_download_failed',
          `集控考试档案下载失败（HTTP ${response.status}）`
        )
      }

      const declaredLength = Number(response.headers.get('content-length') ?? 0)
      if (Number.isFinite(declaredLength) && declaredLength > CONTROL_MAX_ARTIFACT_SIZE_BYTES) {
        throw new ControlAgentError('control_api_response_too_large', '集控考试档案超过大小限制', {
          declaredLength,
          maxBytes: CONTROL_MAX_ARTIFACT_SIZE_BYTES
        })
      }
      if (!response.body) {
        throw new ControlAgentError('control_artifact_empty', '集控考试档案响应为空')
      }

      const reader = response.body.getReader()
      const chunks: Uint8Array[] = []
      const hash = createHash('sha256')
      let length = 0
      try {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          length += value.byteLength
          if (length > CONTROL_MAX_ARTIFACT_SIZE_BYTES) {
            await reader.cancel()
            throw new ControlAgentError(
              'control_api_response_too_large',
              '集控考试档案超过大小限制',
              { maxBytes: CONTROL_MAX_ARTIFACT_SIZE_BYTES }
            )
          }
          hash.update(value)
          chunks.push(value)
        }
      } finally {
        reader.releaseLock()
      }

      const bytes = new Uint8Array(length)
      let offset = 0
      for (const chunk of chunks) {
        bytes.set(chunk, offset)
        offset += chunk.byteLength
      }
      return { bytes, sha256: hash.digest('hex') }
    } finally {
      clearTimeout(timeout)
    }
  }

  private async requestJson(url: URL, init: RequestInit): Promise<unknown> {
    const controller = new AbortController()
    const timeout = setTimeout(
      () => controller.abort(new Error('control API request timeout')),
      CONTROL_API_TIMEOUT_MS
    )
    try {
      let response: Response
      try {
        response = await this.fetchImpl(url, {
          ...init,
          redirect: 'error',
          signal: controller.signal
        })
      } catch (error) {
        throw new ControlAgentError(
          controller.signal.aborted ? 'control_api_timeout' : 'control_api_unreachable',
          controller.signal.aborted ? '集控服务器请求超时' : '无法连接集控服务器',
          { url: url.toString() },
          error
        )
      }
      const text = await readLimitedText(response, CONTROL_API_RESPONSE_LIMIT_BYTES)
      const payload = parseJson(text)
      if (!response.ok) {
        const problem = parseProblemDetails(payload, response.status)
        throw new ControlAgentError(problem.code ?? 'control_api_rejected', problem.message, {
          status: problem.status,
          errors: problem.errors
        })
      }
      return payload
    } finally {
      clearTimeout(timeout)
    }
  }
}

async function readLimitedText(response: Response, maxBytes: number): Promise<string> {
  const declaredLength = Number(response.headers.get('content-length') ?? 0)
  if (Number.isFinite(declaredLength) && declaredLength > maxBytes) {
    throw new ControlAgentError('control_api_response_too_large', '集控服务器响应超过大小限制', {
      declaredLength,
      maxBytes
    })
  }
  if (!response.body) return ''
  const reader = response.body.getReader()
  const chunks: Uint8Array[] = []
  let length = 0
  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      length += value.byteLength
      if (length > maxBytes) {
        await reader.cancel()
        throw new ControlAgentError(
          'control_api_response_too_large',
          '集控服务器响应超过大小限制',
          {
            maxBytes
          }
        )
      }
      chunks.push(value)
    }
  } finally {
    reader.releaseLock()
  }
  const body = new Uint8Array(length)
  let offset = 0
  for (const chunk of chunks) {
    body.set(chunk, offset)
    offset += chunk.byteLength
  }
  return new TextDecoder().decode(body)
}

function parseJson(text: string): unknown {
  if (!text) return undefined
  try {
    return JSON.parse(text) as unknown
  } catch (error) {
    throw new ControlAgentError(
      'control_api_invalid_response',
      '集控服务器返回了无效的 JSON',
      undefined,
      error
    )
  }
}

function parseProblemDetails(payload: unknown, status: number): ControlProblemDetails {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return { status, message: `集控服务器返回 HTTP ${status}` }
  }
  const problem = payload as Record<string, unknown>
  return {
    status,
    code: typeof problem.code === 'string' ? problem.code : undefined,
    message:
      typeof problem.message === 'string'
        ? problem.message
        : typeof problem.detail === 'string'
          ? problem.detail
          : `集控服务器返回 HTTP ${status}`,
    errors: problem.errors
  }
}

<template>
  <transition name="proctor-alert">
    <div v-if="currentCall" class="proctor-call-overlay" role="alertdialog" aria-live="assertive">
      <div class="proctor-call-aura" />
      <section class="proctor-call-card">
        <div class="proctor-call-kicker">紧急考务提醒</div>
        <h2>考场呼叫巡考</h2>
        <div class="proctor-call-device">{{ currentCall.deviceDisplayName }}</div>
        <t-space class="proctor-call-meta" break-line>
          <t-tag v-if="currentCall.roomNumber" theme="warning" variant="light">
            考场 {{ currentCall.roomNumber }}
          </t-tag>
          <t-tag theme="danger" variant="light">
            {{ formatTime(currentCall.occurredAt) }}
          </t-tag>
          <t-tag v-if="pendingCalls.length > 1" theme="danger" variant="light">
            还有 {{ pendingCalls.length - 1 }} 个呼叫
          </t-tag>
        </t-space>
        <p v-if="currentCall.message" class="proctor-call-message">{{ currentCall.message }}</p>
        <p class="proctor-call-device-id">设备 ID：{{ currentCall.deviceId }}</p>
        <t-button
          v-if="canAcknowledge"
          class="proctor-call-action"
          theme="danger"
          size="large"
          :loading="acknowledging"
          @click="acknowledgeCurrent"
        >
          已响应，关闭提醒
        </t-button>
        <t-button v-else class="proctor-call-action" size="large" @click="dismissLocally">
          知道了
        </t-button>
      </section>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import { PROCTOR_CALL_EVENTS_PATH, proctorCallsApi } from '@/api/control/proctor-calls';
import type { ProctorCallView } from '@/api/control/types';
import { ApiError } from '@/api/http';
import { useSessionStore } from '@/store';

const session = useSessionStore();
const pendingCalls = ref<ProctorCallView[]>([]);
const acknowledging = ref(false);
const currentCall = computed(() => pendingCalls.value[0]);
const canAcknowledge = computed(() => ['admin', 'operator'].includes(session.user?.role ?? ''));
let eventSource: EventSource | undefined;

function enqueue(call: ProctorCallView) {
  if (pendingCalls.value.some((item) => item.id === call.id)) return;
  pendingCalls.value.push(call);
  pendingCalls.value.sort(
    (left, right) => Date.parse(left.occurredAt) - Date.parse(right.occurredAt)
  );
}

function formatTime(value: string) {
  return new Date(value).toLocaleString('zh-CN');
}

async function loadPending() {
  try {
    const result = await proctorCallsApi.listPending();
    pendingCalls.value = result.items;
  } catch (error) {
    if (!(error instanceof ApiError && error.status === 401)) {
      await MessagePlugin.error(error instanceof ApiError ? error.message : '巡考呼叫加载失败');
    }
  }
}

function connectEvents() {
  eventSource = new EventSource(PROCTOR_CALL_EVENTS_PATH, { withCredentials: true });
  eventSource.addEventListener('proctor-call', (event) => {
    try {
      enqueue(JSON.parse((event as MessageEvent<string>).data) as ProctorCallView);
    } catch {
      // Ignore malformed events; the next page load restores persisted pending calls.
    }
  });
}

async function acknowledgeCurrent() {
  const call = currentCall.value;
  if (!call || acknowledging.value) return;
  acknowledging.value = true;
  try {
    await proctorCallsApi.acknowledge(call.id);
    pendingCalls.value = pendingCalls.value.filter((item) => item.id !== call.id);
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '巡考呼叫确认失败');
    await loadPending();
  } finally {
    acknowledging.value = false;
  }
}

function dismissLocally() {
  const call = currentCall.value;
  if (!call) return;
  pendingCalls.value = pendingCalls.value.filter((item) => item.id !== call.id);
}

onMounted(() => {
  void loadPending();
  connectEvents();
});

onUnmounted(() => {
  eventSource?.close();
  eventSource = undefined;
});
</script>

<style scoped>
.proctor-call-overlay {
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: grid;
  place-items: center;
  overflow: hidden;
  padding: 32px;
  color: #fff;
  background:
    radial-gradient(circle at 20% 20%, rgba(255, 203, 107, 0.95), transparent 34%),
    radial-gradient(circle at 80% 72%, rgba(255, 59, 48, 0.9), transparent 38%),
    linear-gradient(135deg, #d4380d 0%, #ff7a00 48%, #c41d7f 100%);
}

.proctor-call-aura {
  position: absolute;
  width: min(78vw, 980px);
  aspect-ratio: 1;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  filter: blur(90px);
  animation: proctor-pulse 1.8s ease-in-out infinite alternate;
}

.proctor-call-card {
  position: relative;
  width: min(760px, 100%);
  padding: 56px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 28px;
  background: rgba(69, 13, 10, 0.48);
  box-shadow: 0 32px 100px rgba(60, 0, 0, 0.45);
  backdrop-filter: blur(24px);
}

.proctor-call-kicker {
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.28em;
}

.proctor-call-card h2 {
  margin: 0;
  font-size: clamp(40px, 6vw, 72px);
  line-height: 1.1;
}

.proctor-call-device {
  margin: 32px 0 20px;
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
}

.proctor-call-meta {
  justify-content: center;
}

.proctor-call-message {
  margin: 28px 0 0;
  font-size: 22px;
  line-height: 1.6;
}

.proctor-call-device-id {
  margin: 20px 0 32px;
  color: rgba(255, 255, 255, 0.72);
  font-family: monospace;
  overflow-wrap: anywhere;
}

.proctor-call-action {
  min-width: 220px;
}

.proctor-alert-enter-active,
.proctor-alert-leave-active {
  transition: opacity 0.25s ease;
}

.proctor-alert-enter-from,
.proctor-alert-leave-to {
  opacity: 0;
}

@keyframes proctor-pulse {
  from {
    transform: scale(0.92);
    opacity: 0.55;
  }
  to {
    transform: scale(1.08);
    opacity: 0.95;
  }
}

@media (max-width: 600px) {
  .proctor-call-overlay {
    padding: 16px;
  }

  .proctor-call-card {
    padding: 36px 20px;
  }
}
</style>

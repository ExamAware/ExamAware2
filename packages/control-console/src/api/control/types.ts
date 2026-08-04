import type {
  BroadcastShowCommand,
  ControlCommand,
  DeviceCapabilities,
  DeviceErrorReport,
  ManagedSetting
} from '@dsz-examaware/control-protocol';
import type { ExamConfig, ExamConfigIssue } from '@dsz-examaware/core';

export interface PageResponse<T> {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
}

export interface PartitionAssignment {
  nodeId: string;
  nodeName: string;
  parentId: string | null;
  dimensionId: string;
  dimensionKey: string;
  dimensionName: string;
}

export type DeviceLifecycleStatus = 'active' | 'revoked';
export type DeviceConnectionStatus = 'online' | 'offline' | 'never_connected' | 'revoked';

export interface DeviceView {
  id: string;
  schoolId: string;
  displayName: string;
  lifecycleStatus: DeviceLifecycleStatus;
  connectionStatus: DeviceConnectionStatus;
  platform: string | null;
  architecture: string | null;
  appVersion: string | null;
  protocolVersion: string | null;
  lastCapabilities: DeviceCapabilities | null;
  labels: string[];
  lastSeenAt: string | null;
  enrolledAt: string;
  updatedAt: string;
  partitions: PartitionAssignment[];
}

export type EnrollmentCodeStatus = 'active' | 'expired' | 'consumed' | 'revoked';

export interface EnrollmentCodeView {
  id: string;
  schoolId: string;
  displayName: string | null;
  partitionNodeIds: string[];
  maxUses: number;
  usedCount: number;
  expiresAt: string;
  createdAt: string;
  revokedAt: string | null;
  status: EnrollmentCodeStatus;
}

export interface CreatedEnrollmentCode extends EnrollmentCodeView {
  code: string;
}

export interface RotatedDeviceCredential {
  deviceId: string;
  credential: string;
  version: number;
}

export interface PartitionDimension {
  id: string;
  schoolId: string;
  key: string;
  name: string;
  description: string | null;
  allowMultiple: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PartitionNode {
  id: string;
  dimensionId: string;
  parentId: string | null;
  name: string;
  description: string | null;
  metadata: Record<string, string | number | boolean | null>;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface PartitionDimensionDetail extends PartitionDimension {
  nodes: PartitionNode[];
}

export interface PartitionTreeNode {
  value: string;
  label: string;
  children?: PartitionTreeNode[];
}

export interface ExamConfigVersion {
  id: string;
  examConfigId: string;
  version: number;
  content: ExamConfig;
  contentHash: string;
  validationIssues: ExamConfigIssue[];
  createdBy: string;
  createdAt: string;
}

export interface ExamConfigSummary {
  id: string;
  schoolId: string;
  name: string;
  latestVersion: number;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface ExamConfigDetail extends ExamConfigSummary {
  latest: ExamConfigVersion;
}

export type CommandTargetStatus =
  | 'pending'
  | 'delivered'
  | 'acknowledged'
  | 'succeeded'
  | 'failed'
  | 'expired';

export interface CommandTargetView {
  commandId: string;
  deviceId: string;
  status: CommandTargetStatus;
  deliveredAt: string | null;
  acknowledgedAt: string | null;
  completedAt: string | null;
  errorCode: string | null;
  errorMessage: string | null;
}

export interface CommandProgress {
  pending: number;
  delivered: number;
  acknowledged: number;
  succeeded: number;
  failed: number;
  expired: number;
}

export interface ControlCommandView {
  id: string;
  schoolId: string;
  commandType: ControlCommand['type'];
  command: ControlCommand;
  issuedBy: string;
  issuedAt: string;
  expiresAt: string;
  cancelledAt: string | null;
  targets: CommandTargetView[];
  progress: CommandProgress;
}

export interface DeviceErrorView extends Omit<DeviceErrorReport, 'code' | 'stack' | 'occurredAt'> {
  id: string;
  deviceId: string;
  code: string | null;
  stack: string | null;
  occurredAt: string;
  receivedAt: string;
}

export interface CommandTargetsInput {
  deviceIds: string[];
  partitionNodeIds: string[];
}

export interface CreateEnrollmentCodeInput {
  displayName?: string;
  partitionNodeIds: string[];
  expiresInMinutes: number;
  maxUses: number;
}

export interface CreatePartitionDimensionInput {
  key: string;
  name: string;
  description?: string;
  allowMultiple: boolean;
}

export interface CreatePartitionNodeInput {
  parentId?: string;
  name: string;
  description?: string;
  sortOrder?: number;
}

export interface PrepareExamDeploymentInput {
  examConfigId: string;
  version: number;
  targets: CommandTargetsInput;
  expiresInSeconds: number;
}

export interface ShowBroadcastInput {
  title: string;
  body: string;
  severity: BroadcastShowCommand['payload']['severity'];
  targets: CommandTargetsInput;
  expiresInSeconds: number;
}

export interface ApplyManagedSettingsInput {
  settings: ManagedSetting[];
  targets: CommandTargetsInput;
  expiresInSeconds: number;
}

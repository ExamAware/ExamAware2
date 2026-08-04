export const CONTROL_COMMAND_ERROR_CODES = {
  notFound: 'control_command_not_found',
  invalidCommand: 'invalid_control_command',
  invalidExpiry: 'invalid_command_expiry',
  emptyTargets: 'empty_command_targets',
  targetNotFound: 'command_target_not_found',
  targetRevoked: 'command_target_revoked',
  targetCapabilitiesUnknown: 'command_target_capabilities_unknown',
  targetCapabilitiesUnsupported: 'command_target_capabilities_unsupported',
  deviceNotTarget: 'device_not_command_target',
  resultAlreadyTerminal: 'command_result_already_terminal',
  expired: 'command_expired',
  partitionNotFound: 'partition_node_not_found',
  examVersionNotFound: 'exam_config_version_not_found',
  noReadyDevices: 'deployment_has_no_ready_devices',
  invalidManagedSettings: 'invalid_managed_settings',
  artifactExpired: 'artifact_expired',
  deviceNotDeploymentTarget: 'device_not_deployment_target',
  artifactNotFound: 'exam_config_artifact_not_found',
  notExamDeployment: 'not_exam_deployment'
} as const;

export type ControlCommandErrorCode =
  (typeof CONTROL_COMMAND_ERROR_CODES)[keyof typeof CONTROL_COMMAND_ERROR_CODES];

export const CONTROL_COMMAND_AUDIT = {
  issued: 'control-command.issued',
  resourceType: 'control-command'
} as const;

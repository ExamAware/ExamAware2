import type { BroadcastDismissCommand, BroadcastShowCommand } from '@dsz-examaware/control-protocol'
import type { ControlStatusSnapshot } from '@dsz-examaware/plugin-sdk'

export type ControlAgentEvent =
  | { type: 'state-changed'; snapshot: ControlStatusSnapshot }
  | { type: 'broadcast'; payload: BroadcastShowCommand['payload'] }
  | { type: 'broadcast-dismiss'; payload: BroadcastDismissCommand['payload'] }

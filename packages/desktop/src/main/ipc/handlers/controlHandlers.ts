import { ipcChannels } from '../../../shared/ipc/channels'
import { controlService } from '../../control/controlService'
import type { IpcRegistrar } from '../ipcRegistrar'

export function registerControlHandlers(ipc: IpcRegistrar) {
  ipc.handle(ipcChannels.control.getSnapshot, () => controlService.getStatus())
  ipc.handle(ipcChannels.control.enroll, (_event, input) => controlService.bind(input))
  ipc.handle(ipcChannels.control.clearEnrollment, () => controlService.unbind())
  ipc.handle(ipcChannels.control.callProctor, () => controlService.callProctor())
}

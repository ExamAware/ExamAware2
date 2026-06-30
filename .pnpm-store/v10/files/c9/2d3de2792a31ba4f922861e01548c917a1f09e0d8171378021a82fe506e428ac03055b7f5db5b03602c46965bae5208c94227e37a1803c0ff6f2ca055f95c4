import { Plugin, AppContext } from 'vue';
import { NotificationMethod, NotificationInfoMethod, NotificationWarningMethod, NotificationErrorMethod, NotificationSuccessMethod, NotificationCloseMethod, NotificationCloseAllMethod } from './type';
import './style';
interface ExtraApi {
    info: NotificationInfoMethod;
    success: NotificationSuccessMethod;
    warning: NotificationWarningMethod;
    error: NotificationErrorMethod;
    close: NotificationCloseMethod;
    closeAll: NotificationCloseAllMethod;
}
export type NotificationPluginType = Plugin & ExtraApi & NotificationMethod & {
    _context?: AppContext;
};
declare const NotificationPlugin: NotificationPluginType;
export declare const NotifyPlugin: NotificationPluginType;
export default NotificationPlugin;

import { Plugin, AppContext } from 'vue';
import { DialogMethod, DialogConfirmMethod, DialogAlertMethod } from './type';
interface ExtraApi {
    confirm: DialogConfirmMethod;
    alert: DialogAlertMethod;
}
export type DialogPluginType = Plugin & ExtraApi & DialogMethod & {
    _context?: AppContext;
};
export declare const DialogPlugin: DialogPluginType;
export default DialogPlugin;

import { AppContext, Plugin } from 'vue';
import type { MessageCloseAllMethod, MessageCloseMethod, MessageErrorMethod, MessageInfoMethod, MessageLoadingMethod, MessageMethod, MessageQuestionMethod, MessageSuccessMethod, MessageWarningMethod } from './type';
interface ExtraApi {
    info: MessageInfoMethod;
    success: MessageSuccessMethod;
    warning: MessageWarningMethod;
    error: MessageErrorMethod;
    question: MessageQuestionMethod;
    loading: MessageLoadingMethod;
    close: MessageCloseMethod;
    closeAll: MessageCloseAllMethod;
}
export type MessagePluginType = Plugin & ExtraApi & MessageMethod;
export declare const MessagePlugin: MessagePluginType & {
    _context?: AppContext;
};
export default MessagePlugin;

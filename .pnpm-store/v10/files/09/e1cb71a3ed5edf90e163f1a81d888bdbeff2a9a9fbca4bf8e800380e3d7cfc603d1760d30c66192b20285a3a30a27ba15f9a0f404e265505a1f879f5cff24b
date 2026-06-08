import { ButtonProps } from '../../button';
import { PopconfirmConfig, DialogConfig, DrawerConfig } from '../../config-provider';
import type { ClassName } from '../../common';
import type { TdDialogProps } from '../type';
export interface MixinsConfirmBtn {
    theme?: MixinsThemeType;
    className?: ClassName;
    confirmBtn: TdDialogProps['confirmBtn'];
    globalConfirm: PopconfirmConfig['confirm'] | DrawerConfig['confirm'] | DialogConfig['confirm'];
    globalConfirmBtnTheme?: PopconfirmConfig['confirmBtnTheme'] | DialogConfig['confirmBtnTheme'];
    size?: ButtonProps['size'];
    confirmLoading?: boolean;
}
export interface MixinsCancelBtn {
    className?: ClassName;
    cancelBtn: TdDialogProps['cancelBtn'];
    globalCancel: PopconfirmConfig['cancel'] | DrawerConfig['cancel'] | DialogConfig['cancel'];
    size?: ButtonProps['size'];
}
export type MixinsThemeType = keyof (PopconfirmConfig['confirmBtnTheme'] & DialogConfig['confirmBtnTheme']);
export interface BtnAction {
    confirmBtnAction: (e: MouseEvent) => void;
    cancelBtnAction: (e: MouseEvent) => void;
}
export declare function useAction(action: BtnAction): {
    getConfirmBtn: (options: MixinsConfirmBtn) => any;
    getCancelBtn: (options: MixinsCancelBtn) => any;
};

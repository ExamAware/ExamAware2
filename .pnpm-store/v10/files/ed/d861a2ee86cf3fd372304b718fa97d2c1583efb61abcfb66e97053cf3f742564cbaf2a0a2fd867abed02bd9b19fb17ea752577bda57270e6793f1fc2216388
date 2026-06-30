import { PropType } from 'vue';
import dayjs from 'dayjs';
import { EPickerCols } from 'tdesign-vue-next/cjs/common/js/time-picker/const';
import { TdTimePickerProps, TdTimeRangePickerProps } from '../type';
export declare const panelProps: () => {
    disabled: {
        default: boolean;
        type: BooleanConstructor;
        validator(v: boolean): boolean;
    };
    isFocus: {
        default: boolean;
        type: BooleanConstructor;
        validator(v: boolean): boolean;
    };
    value: {
        type: StringConstructor;
        default: string;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
    steps: {
        default: number[];
        type: PropType<Array<string | number>>;
    };
    isShowPanel: {
        default: boolean;
        type: BooleanConstructor;
        validator(v: boolean): boolean;
    };
    activeIndex: {
        type: NumberConstructor;
    };
    presets: {
        type: PropType<TdTimePickerProps["presets"] | TdTimeRangePickerProps["presets"]>;
    };
    hideDisabledTime: {
        type: BooleanConstructor;
        default: boolean;
    };
    disableTime: {
        type: FunctionConstructor;
    };
    isFooterDisplay: {
        type: BooleanConstructor;
        default: boolean;
        validator(v: boolean): boolean;
    };
};
export declare const panelColProps: () => {
    format: {
        type: StringConstructor;
        default: string;
    };
    cols: {
        type: PropType<Array<EPickerCols>>;
        default: () => EPickerCols[];
    };
    value: {
        type: StringConstructor;
        default: string;
    };
    range: {
        type: PropType<Array<dayjs.Dayjs>>;
        default: () => Array<dayjs.Dayjs>;
    };
    steps: {
        default: number[];
        type: PropType<Array<string | number>>;
    };
    hideDisabledTime: {
        type: BooleanConstructor;
        default: boolean;
    };
    disableTime: {
        type: FunctionConstructor;
    };
    localeMeridiems: {
        type: PropType<Array<string>>;
    };
};

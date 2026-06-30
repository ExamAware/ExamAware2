import { ComputedRef, Ref } from 'vue';
import type { TooltipProps } from '../../tooltip';
import type { TdSliderProps } from '../type';
export interface TooltipConfig {
    tooltipProps: boolean | TooltipProps;
    vertical: boolean;
    value: number;
    label: TdSliderProps['label'];
    position: string;
    range: boolean;
}
export declare const useSliderTooltip: (tooltipConfig: Ref<TooltipConfig>) => {
    tooltipRef: Ref<any>;
    tooltipProps: ComputedRef<TdSliderProps["tooltipProps"]>;
    toggleTooltip: (toState: boolean) => void;
    showTooltip: import("vue").WritableComputedRef<boolean>;
};

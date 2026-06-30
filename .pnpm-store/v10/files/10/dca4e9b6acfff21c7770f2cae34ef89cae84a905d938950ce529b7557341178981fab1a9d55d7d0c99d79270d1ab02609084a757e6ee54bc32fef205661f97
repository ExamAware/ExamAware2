import { InputProps } from '../input';
import { PopupProps } from '../popup';
import { SelectInputProps } from '../select-input';
import { SizeEnum } from '../common';
export interface TdColorPickerProps {
    borderless?: boolean;
    clearable?: boolean;
    colorModes?: Array<'monochrome' | 'linear-gradient'>;
    disabled?: boolean;
    enableAlpha?: boolean;
    enableMultipleGradient?: boolean;
    format?: 'HEX' | 'HEX8' | 'RGB' | 'RGBA' | 'HSL' | 'HSLA' | 'HSV' | 'HSVA' | 'CMYK' | 'CSS';
    inputProps?: InputProps;
    popupProps?: PopupProps;
    recentColors?: Array<string> | boolean | null;
    defaultRecentColors?: Array<string> | boolean | null;
    selectInputProps?: SelectInputProps;
    showPrimaryColorPreview?: boolean;
    size?: SizeEnum;
    swatchColors?: Array<string> | null | undefined;
    value?: string;
    defaultValue?: string;
    modelValue?: string;
    onChange?: (value: string, context: {
        color: ColorObject;
        trigger: ColorPickerChangeTrigger;
    }) => void;
    onClear?: (context: {
        e: MouseEvent;
    }) => void;
    onPaletteBarChange?: (context: {
        color: ColorObject;
    }) => void;
    onRecentColorsChange?: (value: Array<string>) => void;
}
export interface TdColorPickerPanelProps {
    colorModes?: Array<'monochrome' | 'linear-gradient'>;
    disabled?: boolean;
    enableAlpha?: boolean;
    enableMultipleGradient?: boolean;
    format?: 'HEX' | 'HEX8' | 'RGB' | 'RGBA' | 'HSL' | 'HSLA' | 'HSV' | 'HSVA' | 'CMYK' | 'CSS';
    recentColors?: Array<string> | boolean | null;
    defaultRecentColors?: Array<string> | boolean | null;
    selectInputProps?: SelectInputProps;
    showPrimaryColorPreview?: boolean;
    swatchColors?: Array<string> | null | undefined;
    value?: string;
    defaultValue?: string;
    modelValue?: string;
    onChange?: (value: string, context: {
        color: ColorObject;
        trigger: ColorPickerChangeTrigger;
    }) => void;
    onPaletteBarChange?: (context: {
        color: ColorObject;
    }) => void;
    onRecentColorsChange?: (value: Array<string>) => void;
}
export type ColorPickerChangeTrigger = 'palette-saturation-brightness' | 'palette-saturation' | 'palette-brightness' | 'palette-hue-bar' | 'palette-alpha-bar' | 'input' | 'preset' | 'recent';
export interface ColorObject {
    alpha: number;
    css: string;
    hex: string;
    hex8: string;
    hsl: string;
    hsla: string;
    hsv: string;
    hsva: string;
    rgb: string;
    rgba: string;
    saturation: number;
    value: number;
    isGradient: boolean;
    linearGradient?: string;
}

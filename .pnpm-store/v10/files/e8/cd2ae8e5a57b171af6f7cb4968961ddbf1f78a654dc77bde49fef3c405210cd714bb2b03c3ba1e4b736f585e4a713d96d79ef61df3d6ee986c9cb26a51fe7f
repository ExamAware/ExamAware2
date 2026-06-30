import Color from './color';
import type { ColorFormat } from './types';
export declare const initColorFormat: (format: ColorFormat, enableAlpha: boolean) => ColorFormat;
export declare const getColorFormatMap: (color: Color, type: "encode" | "decode") => {
    HEX: string;
    CMYK: string;
    RGB: string;
    RGBA: string;
    HSL: string;
    HSLA: string;
    HSV: string;
    HSVA: string;
    CSS: string;
    HEX8: string;
} | {
    HSV: import("tinycolor2").ColorFormats.HSVA;
    HSVA: import("tinycolor2").ColorFormats.HSVA;
    HSL: import("tinycolor2").ColorFormats.HSLA;
    HSLA: import("tinycolor2").ColorFormats.HSLA;
    RGB: {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    RGBA: {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    CMYK: {
        c: number;
        m: number;
        y: number;
        k: number;
    };
    CSS: {
        css: string;
    };
    HEX: {
        hex: string;
    };
    HEX8: {
        hex: string;
    };
};
export declare const getColorFormatOptions: (enableAlpha: boolean) => readonly ["HEX", "RGB", "HSL", "HSV", "CMYK", "CSS"] | ("HEX" | "RGB" | "HSL" | "HSV" | "CMYK" | "CSS" | "HEX8" | "RGBA" | "HSLA" | "HSVA")[];
export declare const getColorFormatInputs: (format: ColorFormat, enableAlpha: boolean) => import("@src/color-picker/utils").ColorInputProp[];

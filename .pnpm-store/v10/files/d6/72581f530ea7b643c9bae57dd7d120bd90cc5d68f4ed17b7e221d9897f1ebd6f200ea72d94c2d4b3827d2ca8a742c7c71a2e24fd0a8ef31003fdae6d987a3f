import type { Ecc, QrCode } from './qrcodegen';
export type Modules = ReturnType<QrCode['getModules']>;
export type Excavation = {
    x: number;
    y: number;
    w: number;
    h: number;
};
export type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';
export type CrossOrigin = 'anonymous' | 'use-credentials' | '' | undefined;
export type ERROR_LEVEL_MAPPED_TYPE = {
    [index in ErrorCorrectionLevel]: Ecc;
};
export type ImageSettings = {
    src: string;
    height: number;
    width: number;
    excavate: boolean;
    x?: number;
    y?: number;
    opacity?: number;
    crossOrigin?: CrossOrigin;
};

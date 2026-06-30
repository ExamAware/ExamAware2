import { ALPHA_FORMAT_MAP, FORMATS } from './constants';
export type BasicColorFormat = (typeof FORMATS)[number];
export type AlphaConvertibleFormat = keyof typeof ALPHA_FORMAT_MAP;
export type AlphaColorFormat = (typeof ALPHA_FORMAT_MAP)[AlphaConvertibleFormat];
export type ColorFormat = BasicColorFormat | AlphaColorFormat;
export interface ColorInputProp {
    key: string;
    min?: number;
    max?: number;
    type: 'input' | 'inputNumber';
    flex?: number;
    format?: Function;
}

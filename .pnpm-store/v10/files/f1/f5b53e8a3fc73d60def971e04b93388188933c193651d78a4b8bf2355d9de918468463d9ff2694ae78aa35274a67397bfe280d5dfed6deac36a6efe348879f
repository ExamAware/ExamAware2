export declare function omit(obj: Record<string, any>, fields: string[]): {
    [x: string]: any;
};
export declare function getValidAttrs<T extends Record<string, any>>(obj: T): Partial<T>;
export declare function removeEmptyAttrs<T extends Record<string, any>>(obj: T): Partial<T>;
export declare function getTabElementByValue(tabs: [], value: string): object;
export declare function firstUpperCase(str: string): string;
export type Gradients = {
    [percent: string]: string;
};
export type FromTo = {
    from: string;
    to: string;
};
export type LinearGradient = {
    direction?: string;
} & (Gradients | FromTo);
export declare function getBackgroundColor(color: string | string[] | LinearGradient): string;
export declare function getIEVersion(): number;
export declare function getFlexGapPolyFill(): boolean;
export declare function getCharacterLength(str: string): number;
export declare function getCharacterLength(str: string, maxCharacter?: number): {
    length: number;
    characters: string;
};
export declare function getUnicodeLength(str?: string): number;
export declare function limitUnicodeMaxLength(str?: string, maxLength?: number, oldStr?: string): string;
export declare function pxCompat(param: string | number): string;
export declare function calculateNodeSize(targetElement: HTMLElement): {
    paddingSize: number;
    borderSize: number;
    boxSizing: number;
    sizingStyle: string;
} | {
    paddingSize: number;
    borderSize: number;
    boxSizing: string;
    sizingStyle: string;
};

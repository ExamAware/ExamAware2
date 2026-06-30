import { ZXingModule } from "../core.js";
import { ZXingEnum } from "./enum.js";
export declare const textModes: readonly ["Plain", "ECI", "HRI", "Hex", "Escaped"];
export type TextMode = (typeof textModes)[number];
/**
 * @internal
 */
export type ZXingTextMode = Record<TextMode, ZXingEnum>;
export declare function textModeToZXingEnum<T extends "reader" | "full">(zxingModule: ZXingModule<T>, textMode: TextMode): ZXingEnum;
export declare function zxingEnumToTextMode(zxingEnum: ZXingEnum): TextMode;

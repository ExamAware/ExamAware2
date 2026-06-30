import { ZXingModule } from "../core.js";
import { ZXingEnum } from "./enum.js";
export declare const binarizers: readonly ["LocalAverage", "GlobalHistogram", "FixedThreshold", "BoolCast"];
export type Binarizer = (typeof binarizers)[number];
/**
 * @internal
 */
export type ZXingBinarizer = Record<Binarizer, ZXingEnum>;
export declare function binarizerToZXingEnum<T extends "reader" | "full">(zxingModule: ZXingModule<T>, binarizer: Binarizer): ZXingEnum;
export declare function zxingEnumToBinarizer(zxingEnum: ZXingEnum): Binarizer;

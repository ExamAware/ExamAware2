import { ZXingModule } from "../core.js";
import { ZXingEnum } from "./enum.js";
export declare const eanAddOnSymbols: readonly ["Ignore", "Read", "Require"];
export type EanAddOnSymbol = (typeof eanAddOnSymbols)[number];
/**
 * @internal
 */
export type ZXingEanAddOnSymbol = Record<EanAddOnSymbol, ZXingEnum>;
export declare function eanAddOnSymbolToZXingEnum<T extends "reader" | "full">(zxingModule: ZXingModule<T>, eanAddOnSymbol: EanAddOnSymbol): ZXingEnum;
export declare function zxingEnumToEanAddOnSymbol(zxingEnum: ZXingEnum): EanAddOnSymbol;

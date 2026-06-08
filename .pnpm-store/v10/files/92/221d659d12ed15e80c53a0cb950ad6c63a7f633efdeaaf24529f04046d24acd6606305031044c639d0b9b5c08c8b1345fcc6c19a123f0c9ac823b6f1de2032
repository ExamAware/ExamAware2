import { ZXingModule } from "../core.js";
import { ZXingEnum } from "./enum.js";
export declare const contentTypes: readonly ["Text", "Binary", "Mixed", "GS1", "ISO15434", "UnknownECI"];
export type ContentType = (typeof contentTypes)[number];
/**
 * @internal
 */
export type ZXingContentType = Record<ContentType, ZXingEnum>;
export declare function contentTypeToZXingEnum<T extends "reader" | "full">(zxingModule: ZXingModule<T>, contentType: ContentType): ZXingEnum;
export declare function zxingEnumToContentType(zxingEnum: ZXingEnum): ContentType;

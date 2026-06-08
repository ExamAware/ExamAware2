/// <reference types="emscripten" />
import { type ZXingReaderOptions, type ReaderOptions, type ZXingWriterOptions, type WriterOptions, type ZXingReadResult, type ReadResult, type ZXingWriteResult, type ZXingBinarizer, type ZXingCharacterSet, type ZXingContentType, type ZXingEanAddOnSymbol, type ZXingTextMode, type ZXingVector } from "./bindings/index.js";
export type ZXingModuleType = "reader" | "writer" | "full";
interface ZXingBaseModule extends EmscriptenModule {
    CharacterSet: ZXingCharacterSet;
}
/**
 * @internal
 */
export interface ZXingReaderModule extends ZXingBaseModule {
    Binarizer: ZXingBinarizer;
    ContentType: ZXingContentType;
    EanAddOnSymbol: ZXingEanAddOnSymbol;
    TextMode: ZXingTextMode;
    readBarcodesFromImage(bufferPtr: number, bufferLength: number, zxingReaderOptions: ZXingReaderOptions): ZXingVector<ZXingReadResult>;
    readBarcodesFromPixmap(bufferPtr: number, imgWidth: number, imgHeight: number, zxingReaderOptions: ZXingReaderOptions): ZXingVector<ZXingReadResult>;
}
/**
 * @internal
 */
export interface ZXingWriterModule extends ZXingBaseModule {
    writeBarcodeToImage(text: string, zxingWriterOptions: ZXingWriterOptions): ZXingWriteResult;
}
/**
 * @internal
 */
export interface ZXingFullModule extends ZXingReaderModule, ZXingWriterModule {
}
export type ZXingModule<T extends ZXingModuleType = ZXingModuleType> = T extends "reader" ? ZXingReaderModule : T extends "writer" ? ZXingWriterModule : T extends "full" ? ZXingFullModule : ZXingReaderModule | ZXingWriterModule | ZXingFullModule;
export type ZXingReaderModuleFactory = EmscriptenModuleFactory<ZXingReaderModule>;
export type ZXingWriterModuleFactory = EmscriptenModuleFactory<ZXingWriterModule>;
export type ZXingFullModuleFactory = EmscriptenModuleFactory<ZXingFullModule>;
export type ZXingModuleFactory<T extends ZXingModuleType = ZXingModuleType> = T extends "reader" ? ZXingReaderModuleFactory : T extends "writer" ? ZXingWriterModuleFactory : T extends "full" ? ZXingFullModuleFactory : ZXingReaderModuleFactory | ZXingWriterModuleFactory | ZXingFullModuleFactory;
export type ZXingModuleOverrides = Partial<EmscriptenModule>;
export declare function getZXingModuleWithFactory<T extends ZXingModuleType>(zxingModuleFactory: ZXingModuleFactory<T>, zxingModuleOverrides?: ZXingModuleOverrides): Promise<ZXingModule<T>>;
export declare function purgeZXingModule(): void;
export declare function setZXingModuleOverridesWithFactory<T extends ZXingModuleType>(zxingModuleFactory: ZXingModuleFactory<T>, zxingModuleOverrides: ZXingModuleOverrides): void;
export declare function readBarcodesFromImageFileWithFactory<T extends "reader" | "full">(zxingModuleFactory: ZXingModuleFactory<T>, imageFile: Blob | File, readerOptions?: ReaderOptions): Promise<ReadResult[]>;
export declare function readBarcodesFromImageDataWithFactory<T extends "reader" | "full">(zxingModuleFactory: ZXingModuleFactory<T>, imageData: ImageData, readerOptions?: ReaderOptions): Promise<ReadResult[]>;
export declare function writeBarcodeToImageFileWithFactory<T extends "writer" | "full">(zxingModuleFactory: ZXingModuleFactory<T>, text: string, writerOptions?: WriterOptions): Promise<import("./bindings/writeResult.js").WriteResult>;
export {};

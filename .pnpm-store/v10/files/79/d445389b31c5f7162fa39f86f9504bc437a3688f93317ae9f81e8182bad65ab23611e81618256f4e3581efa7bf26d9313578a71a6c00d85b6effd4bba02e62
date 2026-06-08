import { type ZXingReaderModule, type ZXingModuleOverrides } from "../core.js";
import type { ReaderOptions } from "../bindings/index.js";
export declare function getZXingModule(zxingModuleOverrides?: ZXingModuleOverrides): Promise<ZXingReaderModule>;
export declare function setZXingModuleOverrides(zxingModuleOverrides: ZXingModuleOverrides): void;
export declare function readBarcodesFromImageFile(imageFile: Blob | File, readerOptions?: ReaderOptions): Promise<import("../bindings/readResult.js").ReadResult[]>;
export declare function readBarcodesFromImageData(imageData: ImageData, readerOptions?: ReaderOptions): Promise<import("../bindings/readResult.js").ReadResult[]>;
export * from "../bindings/exposedReaderBindings.js";
export { purgeZXingModule, type ZXingReaderModule, type ZXingModuleOverrides, } from "../core.js";

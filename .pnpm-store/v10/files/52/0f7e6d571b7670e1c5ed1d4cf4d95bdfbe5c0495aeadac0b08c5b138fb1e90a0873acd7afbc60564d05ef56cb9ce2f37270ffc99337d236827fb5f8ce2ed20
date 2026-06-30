/**
 * The writer part API of this package is subject to change a lot.
 * Please track the status of [this issue](https://github.com/zxing-cpp/zxing-cpp/issues/332).
 *
 * @packageDocumentation
 */
import { type ZXingWriterModule, type ZXingModuleOverrides } from "../core.js";
import type { WriterOptions } from "../bindings/index.js";
export declare function getZXingModule(zxingModuleOverrides?: ZXingModuleOverrides): Promise<ZXingWriterModule>;
export declare function setZXingModuleOverrides(zxingModuleOverrides: ZXingModuleOverrides): void;
export declare function writeBarcodeToImageFile(text: string, writerOptions?: WriterOptions): Promise<import("../bindings/writeResult.js").WriteResult>;
export * from "../bindings/exposedWriterBindings.js";
export { purgeZXingModule, type ZXingWriterModule, type ZXingModuleOverrides, } from "../core.js";

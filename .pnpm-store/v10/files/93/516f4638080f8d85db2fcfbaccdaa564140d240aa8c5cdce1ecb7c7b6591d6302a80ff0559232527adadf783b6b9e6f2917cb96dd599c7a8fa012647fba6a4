/// <reference types="dom-webcodecs" />
import { type ZXingReaderModule } from "zxing-wasm/reader";
import { type BarcodeFormat, type ReadResultBarcodeFormat } from "./utils.js";
export { type BarcodeFormat } from "./utils.js";
export interface BarcodeDetectorOptions {
    formats?: BarcodeFormat[];
}
export interface Point2D {
    x: number;
    y: number;
}
export interface DetectedBarcode {
    boundingBox: DOMRectReadOnly;
    rawValue: string;
    format: ReadResultBarcodeFormat;
    cornerPoints: [Point2D, Point2D, Point2D, Point2D];
}
interface CustomEventMap {
    load: CustomEvent<ZXingReaderModule>;
    error: CustomEvent<unknown>;
}
type ChangeEventListener = <K extends keyof CustomEventMap>(type: K, callback: ((evt: CustomEventMap[K]) => void) | {
    handleEvent(evt: CustomEventMap[K]): void;
} | null, options?: boolean | AddEventListenerOptions | undefined) => void;
export interface BarcodeDetector {
    addEventListener: ChangeEventListener;
    removeEventListener: ChangeEventListener;
}
export declare class BarcodeDetector extends EventTarget {
    #private;
    constructor(barcodeDectorOptions?: BarcodeDetectorOptions);
    static getSupportedFormats(): Promise<readonly BarcodeFormat[]>;
    detect(image: ImageBitmapSourceWebCodecs): Promise<DetectedBarcode[]>;
}
export { setZXingModuleOverrides } from "zxing-wasm/reader";

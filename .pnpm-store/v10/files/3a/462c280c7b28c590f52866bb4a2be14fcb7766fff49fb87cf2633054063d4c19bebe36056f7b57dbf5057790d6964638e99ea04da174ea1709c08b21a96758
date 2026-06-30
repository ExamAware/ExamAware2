export declare const barcodeFormats: readonly ["Aztec", "Codabar", "Code128", "Code39", "Code93", "DataBar", "DataBarExpanded", "DataMatrix", "DXFilmEdge", "EAN-13", "EAN-8", "ITF", "Linear-Codes", "Matrix-Codes", "MaxiCode", "MicroQRCode", "None", "PDF417", "QRCode", "rMQRCode", "UPC-A", "UPC-E"];
/**
 * @internal
 */
export type BarcodeFormat = (typeof barcodeFormats)[number];
/**
 * Barcode formats that can be used in {@link ReaderOptions.formats | `ReaderOptions.formats`} to read barcodes.
 */
export type ReadInputBarcodeFormat = Exclude<BarcodeFormat, "None">;
/**
 * Barcode formats that can be used in {@link WriterOptions.format | `WriterOptions.format`} to write barcodes.
 */
export type WriteInputBarcodeFormat = Exclude<BarcodeFormat, "DataBar" | "DataBarExpanded" | "DXFilmEdge" | "MaxiCode" | "MicroQRCode" | "rMQRCode" | "None" | "Linear-Codes" | "Matrix-Codes">;
/**
 * Barcode formats that may be returned in {@link ReadResult.format} in read functions.
 */
export type ReadOutputBarcodeFormat = Exclude<BarcodeFormat, "Linear-Codes" | "Matrix-Codes">;
export declare function formatsToString(formats: BarcodeFormat[]): string;
export declare function formatsFromString(formatString: string): BarcodeFormat[];
export declare function formatFromString(format: string): BarcodeFormat;
export declare function normalizeFormatString(format: string): string;

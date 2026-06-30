/**
 * @internal
 */
export interface ZXingWriteResult {
    image: Uint8Array;
    /**
     * Encoding error.
     * If there's no error, this will be an empty string `""`.
     *
     * @see {@link WriteResult.error | `WriteResult.error`}
     */
    error: string;
    delete: () => void;
}
export interface WriteResult extends Omit<ZXingWriteResult, "image" | "delete"> {
    /**
     * The encoded barcode as an image blob.
     * If some error happens, this will be `null`.
     *
     * @see {@link WriteResult.error | `WriteResult.error`}
     */
    image: Blob | null;
}
export declare function zxingWriteResultToWriteResult(zxingWriteResult: ZXingWriteResult): WriteResult;

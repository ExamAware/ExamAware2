import { QrCode } from 'tdesign-vue-next/es/common/js/qrcode/qrcodegen';
import type { CrossOrigin, ErrorCorrectionLevel, Excavation, ImageSettings } from 'tdesign-vue-next/es/common/js/qrcode/types';
import { ComputedRef } from 'vue';
interface Options {
    value: string;
    level: ErrorCorrectionLevel;
    minVersion: number;
    includeMargin: boolean;
    marginSize?: number;
    imageSettings?: ImageSettings;
    size: number;
}
interface QRCodeResult {
    cells: ComputedRef<boolean[][]>;
    margin: ComputedRef<number>;
    numCells: ComputedRef<number>;
    calculatedImageSettings: ComputedRef<{
        x: number;
        y: number;
        h: number;
        w: number;
        excavation: Excavation | null;
        opacity: number;
        crossOrigin: CrossOrigin;
    }>;
    qrcode: ComputedRef<QrCode>;
}
export declare const useQRCode: (opt: Options) => QRCodeResult;
export default useQRCode;

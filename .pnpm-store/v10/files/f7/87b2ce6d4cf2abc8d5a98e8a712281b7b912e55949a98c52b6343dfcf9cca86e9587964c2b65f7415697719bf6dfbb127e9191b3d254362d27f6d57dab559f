import { CanvasHTMLAttributes, CSSProperties, SVGAttributes } from 'vue';
import type { ErrorCorrectionLevel, ImageSettings } from 'tdesign-vue-next/es/common/js/qrcode/types';
import { QRCodeConfig } from '@tdesign/components/config-provider/type';
import { StatusRenderInfo, TdQRCodeProps } from '../type';
export interface QRCodeSubComponent {
    value: string;
    size?: number;
    level?: ErrorCorrectionLevel;
    bgColor?: string;
    fgColor?: string;
    style?: CSSProperties;
    includeMargin?: boolean;
    marginSize?: number;
    imageSettings?: ImageSettings;
    title?: string;
    minVersion?: number;
}
export type QRCodeCanvas = QRCodeSubComponent & CanvasHTMLAttributes;
export type QRCodeSVG = QRCodeSubComponent & SVGAttributes;
export interface QRCodeStatus {
    locale: QRCodeConfig;
    classPrefix: string;
    onRefresh?: TdQRCodeProps['onRefresh'];
    statusRender?: TdQRCodeProps['statusRender'];
    status: StatusRenderInfo['status'];
}

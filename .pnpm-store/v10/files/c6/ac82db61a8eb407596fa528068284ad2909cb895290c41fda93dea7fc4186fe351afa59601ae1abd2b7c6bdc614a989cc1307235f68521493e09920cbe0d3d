import { WatermarkText, WatermarkImage, WatermarkLayout } from './type';
export default function generateBase64Url({ width, height, gapX, gapY, offsetLeft, offsetTop, rotate, alpha, watermarkContent, lineSpace, fontColor, layout, }: {
    width: number;
    height: number;
    gapX: number;
    gapY: number;
    offsetLeft: number;
    offsetTop: number;
    rotate: number;
    alpha: number;
    watermarkContent: WatermarkText | WatermarkImage | Array<WatermarkText | WatermarkImage>;
    lineSpace: number;
    fontColor?: string;
    layout?: WatermarkLayout;
}, onFinish: (url: string, backgroundSize?: {
    width: number;
}) => void): string;

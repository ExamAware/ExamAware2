import { TNode } from '../common';
export interface TdQRCodeProps {
    bgColor?: string;
    borderless?: boolean;
    color?: string;
    icon?: string;
    iconSize?: number | {
        width: number;
        height: number;
    };
    level?: 'L' | 'M' | 'Q' | 'H';
    size?: number;
    status?: QRStatus;
    statusRender?: TNode<StatusRenderInfo>;
    type?: 'canvas' | 'svg';
    value?: string;
    onRefresh?: () => void;
}
export type QRStatus = 'active' | 'expired' | 'loading' | 'scanned';
export type StatusRenderInfo = {
    status: QRStatus;
    onRefresh?: () => void;
};

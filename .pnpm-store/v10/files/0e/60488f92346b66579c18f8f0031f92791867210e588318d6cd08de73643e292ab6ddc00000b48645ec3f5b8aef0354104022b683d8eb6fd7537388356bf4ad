import { TNode, AttachNode } from '../common';
export interface TdImageViewerProps {
    attach?: AttachNode;
    closeBtn?: boolean | TNode;
    closeOnEscKeydown?: boolean;
    closeOnOverlay?: boolean;
    draggable?: boolean;
    imageReferrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';
    imageScale?: Partial<ImageScale>;
    images?: Array<string | File | ImageInfo>;
    index?: number;
    defaultIndex?: number;
    mode?: 'modal' | 'modeless';
    navigationArrow?: boolean | TNode;
    showOverlay?: boolean;
    title?: string | TNode;
    trigger?: TNode | TNode<{
        open: (index?: number) => void;
    }>;
    viewerScale?: ImageViewerScale;
    visible?: boolean;
    defaultVisible?: boolean;
    modelValue?: boolean;
    zIndex?: number;
    onClose?: (context: {
        trigger: 'close-btn' | 'overlay' | 'esc';
        e: MouseEvent | KeyboardEvent;
    }) => void;
    onDownload?: (url: string | File) => void;
    onIndexChange?: (index: number, context: {
        trigger: 'prev' | 'next' | 'current';
    }) => void;
}
export interface ImageScale {
    max: number;
    min: number;
    step: number;
    defaultScale: number;
}
export interface ImageInfo {
    mainImage: string | File;
    thumbnail?: string | File;
    download?: boolean;
    isSvg?: boolean;
}
export interface ImageViewerScale {
    minWidth: number;
    minHeight: number;
}

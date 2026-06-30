import { TNode, ImageEvent } from '../common';
export interface TdImageProps {
    alt?: string;
    error?: string | TNode;
    fallback?: string;
    fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
    gallery?: boolean;
    lazy?: boolean;
    loading?: string | TNode;
    overlayContent?: string | TNode;
    overlayTrigger?: 'always' | 'hover';
    placeholder?: string | TNode;
    position?: string;
    referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';
    shape?: 'circle' | 'round' | 'square';
    src?: string | File;
    srcset?: ImageSrcset;
    onError?: (context: {
        e: ImageEvent;
    }) => void;
    onLoad?: (context: {
        e: ImageEvent;
    }) => void;
}
export interface ImageSrcset {
    'image/avif': string;
    'image/webp': string;
}

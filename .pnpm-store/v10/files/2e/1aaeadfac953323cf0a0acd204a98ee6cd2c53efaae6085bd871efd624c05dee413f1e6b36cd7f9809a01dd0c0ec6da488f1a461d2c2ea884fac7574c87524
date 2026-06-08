import { ImageScale } from '../type';
interface InitTransform {
    translateX: number;
    translateY: number;
}
export declare function useDrag(initTransform: InitTransform): {
    transform: import("vue").Ref<{
        translateX: number;
        translateY: number;
    }>;
    mouseDownHandler: (e: MouseEvent) => void;
    resetTransform: () => void;
};
export declare function useMirror(): {
    mirror: import("vue").Ref<number>;
    onMirror: () => void;
    resetMirror: () => void;
};
export declare function useScale(imageScale: ImageScale): {
    scale: import("vue").Ref<number>;
    onZoomIn: import("lodash").DebouncedFuncLeading<() => void>;
    onZoomOut: import("lodash").DebouncedFuncLeading<() => void>;
    resetScale: () => void;
};
export declare function useRotate(): {
    rotate: import("vue").Ref<number>;
    onRotate: () => void;
    resetRotate: () => void;
};
export {};

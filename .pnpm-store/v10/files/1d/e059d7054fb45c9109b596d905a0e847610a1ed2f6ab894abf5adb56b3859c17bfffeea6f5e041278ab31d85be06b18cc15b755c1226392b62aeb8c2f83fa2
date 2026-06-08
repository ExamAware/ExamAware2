type scrollPosition = 'auto' | 'start' | 'center' | 'end';
export interface allElementDeps {
    activeTab?: HTMLElement;
    navsContainer?: HTMLElement;
    navsWrap?: HTMLElement;
    leftOperations?: HTMLElement;
    toLeftBtn?: HTMLElement;
    rightOperations?: HTMLElement;
    toRightBtn?: HTMLElement;
}
export declare function calculateOffset(depElement: allElementDeps, offset: number, scrollPosition: scrollPosition): number;
export declare function calcPrevOrNextOffset(elements: allElementDeps, offset: number, action: 'next' | 'prev'): number;
export declare function calcMaxOffset(elements: allElementDeps): number;
export declare function calcValidOffset(offset: number, maxOffset: number): number;
export {};

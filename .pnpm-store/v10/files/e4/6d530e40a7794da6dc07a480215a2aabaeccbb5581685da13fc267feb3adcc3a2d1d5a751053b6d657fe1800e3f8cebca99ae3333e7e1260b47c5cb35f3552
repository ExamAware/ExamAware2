type IAnyObject = Record<string, any>;
/**
 * Deep merge objects to the first one
 *
 * 深度合并对象到第一个对象
 *
 * @param originObject - The target object to merge into / 要合并到的目标对象
 * @param overrideObjects - Objects to merge from / 要合并的对象
 *
 * @returns Merged object / 合并后的对象
 *
 * @example
 * ```ts
 * const obj1 = { a: 1, b: { c: 2 } }
 * const obj2 = { b: { d: 3 }, e: 4 }
 * deepAssign(obj1, obj2) // { a: 1, b: { c: 2, d: 3 }, e: 4 }
 * ```
 */
export declare const deepAssign: <T extends IAnyObject, U extends IAnyObject = T, V extends Partial<T> & Partial<U> = T & U>(originObject: T, ...overrideObjects: (U | null | undefined)[]) => V;
export {};

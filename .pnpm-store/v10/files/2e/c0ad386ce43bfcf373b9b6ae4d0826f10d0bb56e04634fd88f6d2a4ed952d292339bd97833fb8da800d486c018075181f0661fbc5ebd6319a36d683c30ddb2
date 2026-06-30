import { entries, isArray, isPlainObject } from './helper.js';
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
export const deepAssign = (originObject, ...overrideObjects) => {
    if (overrideObjects.length === 0)
        return originObject;
    /** Object being merged */
    const assignObject = overrideObjects.shift();
    if (assignObject)
        entries(assignObject).forEach(([property, value]) => {
            if (property === '__proto__' || property === 'constructor')
                return;
            if (isPlainObject(originObject[property]) && isPlainObject(value))
                deepAssign(originObject[property], value);
            else if (isArray(value))
                originObject[property] = [...value];
            else if (isPlainObject(value))
                originObject[property] = {
                    ...value,
                };
            else
                originObject[property] = assignObject[property];
        });
    return deepAssign(originObject, ...overrideObjects);
};

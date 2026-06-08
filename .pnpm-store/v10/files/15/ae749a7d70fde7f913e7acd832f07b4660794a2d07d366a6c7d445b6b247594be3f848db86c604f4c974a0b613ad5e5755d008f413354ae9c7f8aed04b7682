declare const keyList: readonly ["SIZE", "STATUS"];
declare type CommonClassNameRecord<T extends readonly (keyof any)[]> = {
    [K in T[number]]: Record<string, string>;
};
export default function useCommonClassName(): CommonClassNameRecord<typeof keyList>;
export {};

interface DeprecatedLoggerOptions {
    options: Record<string, unknown>;
    old: string;
    new: string;
    msg?: string;
    scope?: string;
}
interface DroppedLoggerOptions {
    options: Record<string, unknown>;
    old: string;
    new?: string;
    msg?: string;
    scope?: string;
}
interface Converter {
    deprecatedLogger: (options: DeprecatedLoggerOptions) => void;
    droppedLogger: (options: DroppedLoggerOptions) => void;
}
declare const createConverter: (name: string) => Converter;

export { createConverter };
export type { Converter, DeprecatedLoggerOptions, DroppedLoggerOptions };

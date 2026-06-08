/**
 * Resolve the `:line-numbers` `:line-numbers=num` / `:no-line-numbers` mark from token info
 *
 * 从 token 信息中解析 `:line-numbers` `:line-numbers=num` / `:no-line-numbers` 标记
 *
 * @param info - Code block info string / 代码块信息字符串
 * @returns Line numbers configuration / 行号配置
 *  - `number` - Start line number / 起始行号
 *  - `true` - Enable line numbers / 启用行号
 *  - `false` - Disable line numbers / 禁用行号
 *  - `null` - No configuration found / 未找到配置
 *
 * @example
 * ```ts
 * resolveLineNumbers('js :line-numbers') // true
 * resolveLineNumbers('js :line-numbers=10') // 10
 * resolveLineNumbers('js :no-line-numbers') // false
 * resolveLineNumbers('js') // null
 * ```
 */
export declare const resolveLineNumbers: (info: string) => boolean | number | null;

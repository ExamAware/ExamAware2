/**
 * Resolve the `:collapsed-lines` `:collapsed-lines=num` / `:no-collapsed-lines` mark from token info
 *
 * 从 token 信息中解析 `:collapsed-lines` `:collapsed-lines=num` / `:no-collapsed-lines` 标记
 *
 * @param info - Code block info string / 代码块信息字符串
 * @returns Collapsed lines configuration / 折叠行配置
 *  - `number` - Start line number for collapsing / 折叠起始行号
 *  - `true` - Enable collapsed lines / 启用折叠行
 *  - `false` - Disable collapsed lines / 禁用折叠行
 *  - `null` - No configuration found / 未找到配置
 *
 * @example
 * ```ts
 * resolveCollapsedLines('js :collapsed-lines') // true
 * resolveCollapsedLines('js :collapsed-lines=20') // 20
 * resolveCollapsedLines('js :no-collapsed-lines') // false
 * resolveCollapsedLines('js') // null
 * ```
 */
export declare function resolveCollapsedLines(info: string): boolean | number | null;

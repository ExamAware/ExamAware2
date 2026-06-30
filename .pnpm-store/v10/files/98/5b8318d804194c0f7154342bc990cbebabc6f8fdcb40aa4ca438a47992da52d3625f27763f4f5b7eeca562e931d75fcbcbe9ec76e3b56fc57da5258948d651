import { PluginFunction, App } from 'vuepress/core';

interface SassPalettePluginOptions {
    /**
     * Identifier for palette, used to avoid duplicate registration.
     *
     * 调色板的唯一 ID，用于避免重复注册。
     */
    id: string;
    /**
     * User config file path, relative to source dir
     *
     * 用户配置文件路径，相对于源文件夹。
     *
     * @description This is the file where user set style variables.
     *
     * 这是用户设置样式变量的文件。
     *
     * @default `.vuepress/styles/${id}-config.scss`
     */
    config?: string;
    /**
     * Default config file path, should be absolute path.
     *
     * 默认的配置文件路径，应为绝对路径。
     *
     * @description This is the file you should use to provide default style values with `!default`.
     *
     * 这是你应该通过 `!default` 来提供默认样式变量的文件。
     *
     * @default "@vuepress/plugin-sass-palette/styles/default/config.scss"
     */
    defaultConfig?: string;
    /**
     * User palette file path, relative to source dir.
     *
     * 用户的调色板文件路径，相对于源文件夹。
     *
     * @description This is the file where user-controlled injected CSS variables. All the variables will be converted to kebab-case and injected.
     *
     * 这是用户控制注入 CSS 变量的文件。所有的变量会被转换为连字符格式然后被注入。
     *
     * @default `.vuepress/styles/${id}-palette.scss`
     */
    palette?: string;
    /**
     * Default palette file path, should be absolute path.
     *
     * 默认的调色板文件路径，应为绝对路径。
     *
     * @description This is the file you should use to provide default CSS variables with `!default`. All the variables will be converted to kebab-case and injected.
     *
     * 这是你应该通过 `!default` 来提供默认调色板值的文件。所有的变量会被转换为连字符格式然后被注入。
     */
    defaultPalette?: string;
    /**
     * Custom generator, used to generate derivative values with palette config
     *
     * 自定义的生成器，用于生成调色板配置的衍生值。
     *
     * @description You may want to provide a `$theme-color-light` based on `$theme-color`.
     *
     * 你可能想要根据 `$theme-color` 的值提供一个 `$theme-color-light`。
     */
    generator?: string;
    /**
     * User style file path, relative to source dir.
     *
     * 用户的样式文件路径，相对于源文件夹。
     */
    style?: string;
}

/**
 * Sass palette plugin
 *
 * Sass 调色板插件
 *
 * @description Plugin to provide palette and config file support for themes, allowing users to control theme colors and other style variables.
 *
 * 为主题提供调色板和配置文件支持的插件，允许用户控制主题颜色和其他样式变量。
 *
 * @example
 * ```ts
 * // Use with default options
 * export default {
 *   plugins: [
 *     sassPalettePlugin({
 *       id: "hope"
 *     })
 *   ]
 * }
 * ```
 */
declare const sassPalettePlugin: (options: SassPalettePluginOptions) => PluginFunction;

/**
 * Remove sass palette plugin with specific id
 *
 * 移除指定 ID 的 Sass 调色板插件
 *
 * @description Remove a sass palette plugin instance from app by id to avoid conflicts.
 *
 * 通过 ID 从应用中移除一个 Sass 调色板插件实例以避免冲突。
 *
 * @example
 * ```ts
 * // Remove palette plugin with id "hope"
 * removePalettePlugin(app, "hope")
 * ```
 */
declare const removePalettePlugin: (app: App, id: string) => void;

/**
 * Use sass palette plugin
 *
 * 使用 Sass 调色板插件
 *
 * @description Add sass palette plugin to app if not already registered with the same id.
 *
 * 如果具有相同 ID 的插件尚未注册，则将 Sass 调色板插件添加到应用中。
 *
 * @example
 * ```ts
 * // Use sass palette plugin with specific options
 * useSassPalettePlugin(app, {
 *   id: "hope",
 *   config: ".vuepress/styles/config.scss"
 * })
 * ```
 */
declare const useSassPalettePlugin: (app: App, options: SassPalettePluginOptions) => void;

export { removePalettePlugin, sassPalettePlugin, useSassPalettePlugin };
export type { SassPalettePluginOptions };

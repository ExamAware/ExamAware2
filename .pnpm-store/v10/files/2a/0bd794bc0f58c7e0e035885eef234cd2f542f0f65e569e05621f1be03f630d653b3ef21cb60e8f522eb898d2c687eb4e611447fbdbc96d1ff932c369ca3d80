import { container } from '@mdit/plugin-container';
import { ensureLeadingSlash } from '@vuepress/helper';
import { resolveLocalePath } from 'vuepress/shared';
import { cleanMarkdownEnv } from './cleanMarkdownEnv.js';
const CONTAINERS = [
    'info',
    'note',
    'tip',
    'warning',
    'caution',
    'important',
];
/**
 * Hint container markdown-it plugin
 *
 * 提示容器 markdown-it 插件
 *
 * @param md - markdown-it instance / markdown-it 实例
 * @param options - plugin options / 插件选项
 */
export const hint = (md, options = {}) => {
    CONTAINERS.forEach((name) => {
        md.use(container, {
            name,
            openRender: (tokens, index, _options, env) => {
                const token = tokens[index];
                // Resolve info (title)
                let info = token.info.trim().slice(name.length).trim();
                // Get locale
                if (!info) {
                    const { filePathRelative } = env;
                    const relativePath = ensureLeadingSlash(filePathRelative ?? '');
                    const localePath = resolveLocalePath(options, relativePath);
                    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                    info = options[localePath]?.[name];
                }
                else {
                    info = md.renderInline(info, cleanMarkdownEnv(env));
                }
                return `<div class="hint-container ${name}">\n<p class="hint-container-title">${info || name}</p>\n`;
            },
            closeRender: () => '</div>\n',
        });
    });
    // Compact with @vuepress/theme-default
    md.use(container, {
        name: 'danger',
        openRender: (tokens, index, _options, env) => {
            const token = tokens[index];
            // Resolve info (title)
            let info = token.info.trim().slice(6).trim();
            // Get locale
            if (!info) {
                const { filePathRelative } = env;
                const relativePath = ensureLeadingSlash(filePathRelative ?? '');
                const localePath = resolveLocalePath(options, relativePath);
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                info = options[localePath]?.caution;
            }
            else {
                info = md.renderInline(info, cleanMarkdownEnv(env));
            }
            return `<div class="hint-container caution">\n<p class="hint-container-title">${info || 'caution'}</p>\n`;
        },
        closeRender: () => '</div>\n',
    });
    md.use(container, {
        name: 'details',
        openRender: (tokens, index, _options, env) => {
            const token = tokens[index];
            // Resolve info (title)
            let info = token.info
                .trim()
                .slice(
            // Length of "details"
            7)
                .trim();
            // Get locale
            if (!info) {
                const { filePathRelative } = env;
                const relativePath = ensureLeadingSlash(filePathRelative ?? '');
                const localePath = resolveLocalePath(options, relativePath);
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                info = options[localePath]?.details;
            }
            else {
                info = md.renderInline(info, cleanMarkdownEnv(env));
            }
            return `<details class="hint-container details"><summary>${info || 'Details'}</summary>\n`;
        },
        closeRender: () => '</details>\n',
    });
};

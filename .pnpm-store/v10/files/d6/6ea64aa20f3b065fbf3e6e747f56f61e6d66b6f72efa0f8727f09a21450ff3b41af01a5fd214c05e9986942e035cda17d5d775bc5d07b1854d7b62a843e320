import { alert as _alert } from '@mdit/plugin-alert';
import { ensureLeadingSlash } from '@vuepress/helper';
import { resolveLocalePath } from 'vuepress/shared';
/**
 * GFM alert markdown-it plugin
 *
 * GFM 警告 markdown-it 插件
 *
 * @param md - markdown-it instance / markdown-it 实例
 * @param options - plugin options / 插件选项
 */
export const alert = (md, options = {}) => {
    md.use(_alert, {
        alertNames: ['important', 'note', 'tip', 'warning', 'caution', 'info'],
        openRender: (tokens, index) => `<div class="hint-container ${tokens[index].markup}">\n`,
        titleRender: (tokens, index, _options, env) => {
            const type = tokens[index].markup;
            const relativePath = ensureLeadingSlash(env.filePathRelative ?? '');
            const localePath = resolveLocalePath(options, relativePath);
            return `\
<p class="hint-container-title">${
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            options[localePath]?.[type] ||
                type}</p>
`;
        },
        closeRender: () => '</div>\n',
        deep: true,
    });
};

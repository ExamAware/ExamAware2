import { getDirname, path } from 'vuepress/utils';
import { prepareThemeData } from './prepareThemeData.js';
const __dirname = import.meta.dirname || getDirname(import.meta.url);
/**
 * Theme data plugin
 *
 * 主题数据插件
 *
 * @param options - Plugin options / 插件选项
 * @returns VuePress plugin / VuePress 插件
 */
export const themeDataPlugin = ({ themeData, }) => ({
    name: '@vuepress/plugin-theme-data',
    clientConfigFile: path.resolve(__dirname, '../client/config.js'),
    onPrepared: (app) => prepareThemeData(app, themeData),
});

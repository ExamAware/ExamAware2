import * as vue from 'vue';
import { ComputedRef } from 'vue';
import { PageFrontmatter } from 'vuepress/shared';

interface Article<T extends Record<string, unknown> = Record<string, unknown>> {
    /**
     * Article path
     *
     * 文章路径
     */
    path: string;
    /**
     * Article info
     *
     * 文章信息
     */
    info: T;
}
interface BlogCategoryData<T extends Record<string, unknown> = Record<string, unknown>> {
    /**
     * Category path
     *
     * 分类路径
     */
    path: string;
    /**
     * Only available when current route matches an item path
     *
     * 仅当当前路径和某个子项目匹配时可用
     */
    currentItems?: Article<T>[];
    /**
     * Category map
     *
     * 分类映射
     */
    map: Record<
    /**
     * Unique key under current category
     *
     * 当前分类下全局唯一的 key
     */
    string, {
        /**
         * Category path of the key
         *
         * 对应键值的分类路径
         */
        path: string;
        /**
         * Category items of the key
         *
         * 对应键值的项目
         */
        items: Article<T>[];
    }>;
}
interface BlogTypeData<T extends Record<string, unknown> = Record<string, unknown>> {
    /**
     * Type path
     *
     * 类别路径
     */
    path: string;
    /**
     * Items under current type
     *
     * 当前类别下的项目
     */
    items: Article<T>[];
}

declare const blogCategoryMap: Readonly<vue.Ref<{
    readonly [x: string]: {
        readonly [x: string]: {
            readonly path: string;
            readonly map: {
                readonly [x: string]: {
                    readonly path: string;
                    readonly indexes: readonly number[];
                };
            };
        };
    };
}, {
    readonly [x: string]: {
        readonly [x: string]: {
            readonly path: string;
            readonly map: {
                readonly [x: string]: {
                    readonly path: string;
                    readonly indexes: readonly number[];
                };
            };
        };
    };
}>>;
/**
 * Use blog category data
 *
 * 使用博客分类数据
 *
 * @description Get blog category data for current page or specified key
 *
 * 获取当前页面或指定键的博客分类数据
 *
 * @param key - Category key to get data for
 *
 * key - 要获取数据的分类键
 *
 * @returns Computed blog category data
 *
 * 返回计算的博客分类数据
 */
declare const useBlogCategory: <T extends Record<string, unknown> = Record<string, unknown>>(key?: string) => ComputedRef<BlogCategoryData<T>>;

declare const blogTypeMap: Readonly<vue.Ref<{
    readonly [x: string]: {
        readonly [x: string]: {
            readonly path: string;
            readonly indexes: readonly number[];
        };
    };
}, {
    readonly [x: string]: {
        readonly [x: string]: {
            readonly path: string;
            readonly indexes: readonly number[];
        };
    };
}>>;
/**
 * Use blog type data
 *
 * 使用博客类型数据
 *
 * @description Get blog type data for current page or specified key
 *
 * 获取当前页面或指定键的博客类型数据
 *
 * @param key - Type key to get data for
 *
 * key - 要获取数据的类型键
 *
 * @returns Computed blog type data
 *
 * 返回计算的博客类型数据
 */
declare const useBlogType: <T extends Record<string, unknown> = Record<string, unknown>>(key?: string) => ComputedRef<BlogTypeData<T>>;

interface BlogCategoryFrontmatterOptions {
    type: 'category';
    /**
     * Unique key for this category
     *
     * 分类的唯一键名
     */
    key: string;
    /**
     * Category name
     *
     * 分类名称
     *
     * @description Only available in category item pages
     *
     * 仅在分类子项页面中可用
     */
    name?: string;
}
interface BlogTypeFrontmatterOptions {
    type: 'type';
    /**
     * Unique key for this type
     *
     * 类型的唯一键名
     */
    key: string;
}
interface BlogPluginCategoryFrontmatter extends PageFrontmatter {
    blog: BlogCategoryFrontmatterOptions;
}
interface BlogPluginTypeFrontmatter extends PageFrontmatter {
    blog: BlogTypeFrontmatterOptions;
}
type BlogPluginFrontmatter = BlogPluginCategoryFrontmatter | BlogPluginTypeFrontmatter;

/**
 * Category configuration
 *
 * 分类配置
 */
interface CategoryConfig {
    /**
     * Category page path
     *
     * 分类页面路径
     */
    path: string;
    /**
     * Article indexes in this category
     *
     * 此分类中的文章索引
     */
    indexes: number[];
}
type CategoryLocaleMap = Record<
/** Category name */ string, CategoryConfig>;
/**
 * Category locale configuration
 *
 * 分类区域配置
 */
interface CategoryLocaleConfig {
    /**
     * Main page of category
     *
     * 分类主页面
     */
    path: string;
    /**
     * Category map for current locale
     *
     * 当前区域的分类映射
     */
    map: CategoryLocaleMap;
}
type CategoryMap = Record<
/** Locale Path */ string, CategoryLocaleConfig>;
type CategoriesMap = Record</** Category key */ string, CategoryMap>;
/**
 * Type locale configuration
 *
 * 类型区域配置
 */
interface TypeLocaleConfig {
    /**
     * Type page path
     *
     * 类型页面路径
     */
    path: string;
    /**
     * Article indexes in this type
     *
     * 此类型中的文章索引
     */
    indexes: number[];
}
type TypeMap = Record</** Locale Path */ string, TypeLocaleConfig>;
type TypesMap = Record</** Type key */ string, TypeMap>;

export { blogCategoryMap, blogTypeMap, useBlogCategory, useBlogType };
export type { Article, BlogCategoryData, BlogCategoryFrontmatterOptions, BlogPluginCategoryFrontmatter, BlogPluginFrontmatter, BlogPluginTypeFrontmatter, BlogTypeData, BlogTypeFrontmatterOptions, CategoriesMap, CategoryConfig, CategoryLocaleConfig, CategoryLocaleMap, CategoryMap, TypeLocaleConfig, TypeMap, TypesMap };

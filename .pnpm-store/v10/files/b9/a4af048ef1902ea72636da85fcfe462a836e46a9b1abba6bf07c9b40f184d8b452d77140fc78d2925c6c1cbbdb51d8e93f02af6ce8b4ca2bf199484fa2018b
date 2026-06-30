import { RequiredSlot } from '@vuepress/helper/client';
import { FunctionalComponent } from 'vue';
import { RouteLocationNormalizedLoaded } from 'vuepress/client';

interface IconBaseProps {
    name?: string;
    color?: string;
    ariaLabel?: string;
}
/**
 * Icon Base Component
 */
declare const IconBase: FunctionalComponent<IconBaseProps, Record<never, never>, {
    default: RequiredSlot;
}>;

declare const EnterFullScreenIcon: FunctionalComponent;
declare const CancelFullScreenIcon: FunctionalComponent;

declare const GitHubIcon: FunctionalComponent;
declare const GitLabIcon: FunctionalComponent;
declare const GiteeIcon: FunctionalComponent;
declare const BitbucketIcon: FunctionalComponent;
declare const SourceIcon: FunctionalComponent;
declare const RepoIcon: FunctionalComponent<{
    link?: string;
    type?: string;
}>;

declare const cyrb53: (content: string, seed?: number) => number;
declare const generateIndexFromHash: (content: string, total: number) => number;

/**
 * Get hash from path
 *
 * @param path link path
 */
declare const getHash: (path: string) => string;
declare const normalizePath: (path: string) => string;
/**
 * Whether the lick is active
 *
 * @param route Current route
 * @param link link path
 */
declare const isActiveLink: (route: RouteLocationNormalizedLoaded, link?: string) => boolean;

declare class Popup {
    private containerElement;
    private popupElements;
    constructor();
    emit(html: string, duration?: number): number;
    close(popupId?: number): void;
    destroy(): void;
}

type RepoType = "GitHub" | "GitLab" | "Gitee" | "Bitbucket" | null;
declare const resolveRepoLink: (repo: string) => string;
declare const resolveRepoType: (repo?: string) => RepoType;

declare const getSize: () => Record<"width" | "height" | "left" | "top", number>;
declare const openPopupWindow: (link: string, target?: string, features?: string[]) => void;

export { BitbucketIcon, CancelFullScreenIcon, EnterFullScreenIcon, GitHubIcon, GitLabIcon, GiteeIcon, IconBase, Popup, RepoIcon, SourceIcon, cyrb53, generateIndexFromHash, getHash, getSize, isActiveLink, normalizePath, openPopupWindow, resolveRepoLink, resolveRepoType };
export type { IconBaseProps, RepoType };

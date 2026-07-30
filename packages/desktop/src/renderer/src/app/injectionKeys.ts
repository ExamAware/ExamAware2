import type { InjectionKey } from 'vue'
import type { HomeButtonsRegistry } from './modules/homeButtons'
import type { PagesRegistry } from './modules/pages'
import type { SettingsRegistry } from './modules/settings'

export const homeButtonsKey: InjectionKey<HomeButtonsRegistry> = Symbol('homeButtons')
export const pagesKey: InjectionKey<PagesRegistry> = Symbol('pages')
export const settingsKey: InjectionKey<SettingsRegistry> = Symbol('settings')

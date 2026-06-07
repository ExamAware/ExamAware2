import type { BrowserWindowConstructorOptions } from 'electron';
import type { Component, Ref } from 'vue';
import type { ServiceProvideOptions, ServiceWatcherMeta } from '../../shared/services/registry';
import type { ServiceCollection, ServiceProvider } from './serviceCollection';
export type Awaitable<T> = T | Promise<T>;
export type Disposer = () => Awaitable<void>;
export type ServiceToken<T = unknown> = string | symbol | (new (...args: any[]) => T);
export interface InjectableClass<T = unknown> {
  new (...args: any[]): T;
  inject?: readonly ServiceToken[];
}
export type ServiceFactory<T> = (provider: ServiceProvider) => T;
export type ServiceFactoryOrValue<T> = ServiceFactory<T> | InjectableClass<T> | T;
export type ServiceLifetime = 'singleton' | 'scoped' | 'transient';
export interface ServiceDescriptor<T = unknown> {
  token: ServiceToken<T>;
  lifetime: ServiceLifetime;
  factory: ServiceFactory<T>;
}
export interface HostedService {
  start(): Awaitable<void>;
  stop(): Awaitable<void>;
}
export interface HostBuilderSettings {
  environment?: string;
  properties?: Record<string, unknown>;
}
export interface HostBuilderContext {
  ctx: PluginRuntimeContext;
  environmentName: string;
  properties: Map<string | symbol, unknown>;
  lifetime: PluginHostApplicationLifetime;
}
export interface PluginHostApplicationContext {
  ctx: PluginRuntimeContext;
  services: ServiceProvider;
  host: HostBuilderContext;
}
export type ConfigureServicesDelegate = (
  context: HostBuilderContext,
  services: ServiceCollection
) => Awaitable<void>;
export type ConfigureHostDelegate = (
  context: HostBuilderContext,
  app: PluginHostApplicationContext
) => Awaitable<void>;
export type PluginMiddleware = (
  app: PluginHostApplicationContext,
  next: () => Promise<void>
) => Awaitable<void>;
export interface HostExposureResolver<T = unknown> {
  token?: ServiceToken<T>;
  factory?: (provider: ServiceProvider) => T;
}
export interface ServiceAPI {
  provide: (name: string, value: unknown, options?: ServiceProvideOptions) => Disposer;
  inject: <T = unknown>(name: string, owner?: string) => T;
  injectAsync?: <T = unknown>(name: string, owner?: string) => Promise<T>;
  when?: <T = unknown>(
    name: string,
    cb: (svc: T, owner: string, meta: ServiceWatcherMeta) => void | (() => void)
  ) => Disposer;
  has: (name: string, owner?: string) => boolean;
}
export interface PluginLogger {
  info: (...args: any[]) => void;
  warn: (...args: any[]) => void;
  error: (...args: any[]) => void;
  debug?: (...args: any[]) => void;
}
export interface PluginSettingsAPI {
  all(): Record<string, any>;
  get<T = unknown>(key?: string, def?: T): T;
  set<T = unknown>(key: string, value: T): Promise<void>;
  patch(partial: Record<string, any>): Promise<void>;
  reset(): Promise<void>;
  onChange(listener: (config: Record<string, any>) => void): Disposer;
}
export interface PluginRpcApi {
  get: <T extends Record<string, any> = Record<string, any>>(token: string) => T;
  expose: (token: string, service: Record<string, any>) => Disposer;
  notify: (token: string, method: string, ...args: any[]) => void;
}
export interface PluginRuntimeContext {
  app: 'main' | 'renderer';
  logger: PluginLogger;
  config: Record<string, any>;
  settings: PluginSettingsAPI;
  rpc: PluginRpcApi;
  effect: (fn: () => void | Disposer | Promise<void | Disposer>) => void;
  services: ServiceAPI;
  windows?: {
    broadcast: (channel: string, payload?: any) => void;
  };
  ipc?: {
    registerChannel: (
      channel: string,
      handler: (event: unknown, ...args: any[]) => any
    ) => Disposer;
    invokeRenderer?: (channel: string, payload?: any) => void;
  };
  desktopApi?: unknown;
  ui?: {
    eaui: EauiAPI;
    tdesign?: TDesignUI;
  };
}
export interface EauiSignal<TArgs extends any[] = any[]> {
  connect: (fn: (...args: TArgs) => void) => Disposer;
  disconnect: (fn: (...args: TArgs) => void) => void;
}
export interface EauiWidget {
  readonly element: unknown;
  setVisible(visible: boolean): void;
  setEnabled(enabled: boolean): void;
  dispose(): void;
}
export interface TDesignButton extends EauiWidget {
  setText(text: string): void;
  setTheme(theme: 'default' | 'primary' | 'danger' | 'warning' | 'success'): void;
  setVariant(variant: 'base' | 'outline' | 'dashed' | 'text'): void;
  setSize(size: 'small' | 'medium' | 'large'): void;
  setShape(shape: 'rectangle' | 'square' | 'round' | 'circle'): void;
  setGhost(ghost: boolean): void;
  setBlock(block: boolean): void;
  setLoading(loading: boolean): void;
  clicked: EauiSignal<[unknown]>;
}
export interface TDesignButtonOptions {
  text?: string;
  theme?: 'default' | 'primary' | 'danger' | 'warning' | 'success';
  variant?: 'base' | 'outline' | 'dashed' | 'text';
  size?: 'small' | 'medium' | 'large';
  shape?: 'rectangle' | 'square' | 'round' | 'circle';
  ghost?: boolean;
  block?: boolean;
  loading?: boolean;
  disabled?: boolean;
}
export interface TDesignUI {
  createButton(options?: TDesignButtonOptions): TDesignButton;
  createDropdown(options?: TDesignDropdownOptions): TDesignDropdown;
  createTabs(options?: TDesignTabsOptions): TDesignTabs;
  createInput(options?: TDesignInputOptions): TDesignInput;
  createRadioGroup(options?: TDesignRadioGroupOptions): TDesignRadioGroup;
  createCheckboxGroup(options?: TDesignCheckboxGroupOptions): TDesignCheckboxGroup;
}
export interface TDesignDropdown extends EauiWidget {
  setOptions(options: TDesignDropdownItem[]): void;
  setLabel(label: string): void;
  setTrigger(trigger: 'hover' | 'click' | 'focus' | 'context-menu'): void;
  setPlacement(placement: string): void;
  setHideAfterItemClick(hide: boolean): void;
  setDisabled(disabled: boolean): void;
  clicked: EauiSignal<[unknown]>;
}
export interface TDesignDropdownItem {
  label: string;
  value: unknown;
  disabled?: boolean;
  divider?: boolean;
  theme?: 'default' | 'success' | 'warning' | 'error';
}
export interface TDesignDropdownOptions {
  label?: string;
  options?: TDesignDropdownItem[];
  trigger?: 'hover' | 'click' | 'focus' | 'context-menu';
  placement?: string;
  hideAfterItemClick?: boolean;
  disabled?: boolean;
}
export interface TDesignTabs extends EauiWidget {
  setTabs(tabs: TDesignTabItem[]): void;
  setValue(value: string | number): void;
  setPlacement(placement: 'left' | 'top' | 'bottom' | 'right'): void;
  setTheme(theme: 'normal' | 'card'): void;
  setSize(size: 'medium' | 'large'): void;
  setDisabled(disabled: boolean): void;
  changed: EauiSignal<[unknown]>;
}
export interface TDesignTabItem {
  label: string;
  value: string | number;
  disabled?: boolean;
}
export interface TDesignTabsOptions {
  tabs?: TDesignTabItem[];
  value?: string | number;
  placement?: 'left' | 'top' | 'bottom' | 'right';
  theme?: 'normal' | 'card';
  size?: 'medium' | 'large';
  disabled?: boolean;
}
export interface TDesignInput extends EauiWidget {
  setValue(value: string | number): void;
  value(): string | number;
  setPlaceholder(text: string): void;
  setStatus(status: 'default' | 'success' | 'warning' | 'error'): void;
  setSize(size: 'small' | 'medium' | 'large'): void;
  setType(
    type: 'text' | 'number' | 'url' | 'tel' | 'password' | 'search' | 'submit' | 'hidden'
  ): void;
  setClearable(clearable: boolean): void;
  setEnabled(enabled: boolean): void;
  changed: EauiSignal<[unknown]>;
  entered: EauiSignal<[unknown]>;
}
export interface TDesignInputOptions {
  value?: string | number;
  placeholder?: string;
  status?: 'default' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  type?: 'text' | 'number' | 'url' | 'tel' | 'password' | 'search' | 'submit' | 'hidden';
  clearable?: boolean;
  disabled?: boolean;
}
export interface TDesignRadioGroup extends EauiWidget {
  setOptions(options: TDesignRadioOption[]): void;
  setValue(value: string | number | boolean): void;
  setAllowUncheck(allow: boolean): void;
  setDisabled(disabled: boolean): void;
  changed: EauiSignal<[unknown]>;
}
export interface TDesignRadioOption {
  label: string;
  value: string | number | boolean;
  disabled?: boolean;
}
export interface TDesignRadioGroupOptions {
  options?: TDesignRadioOption[];
  value?: string | number | boolean;
  allowUncheck?: boolean;
  disabled?: boolean;
}
export interface TDesignCheckboxGroup extends EauiWidget {
  setOptions(options: TDesignCheckboxOption[]): void;
  setValue(values: Array<string | number | boolean>): void;
  setMax(max?: number): void;
  setDisabled(disabled: boolean): void;
  changed: EauiSignal<[unknown]>;
}
export interface TDesignCheckboxOption {
  label: string;
  value: string | number | boolean;
  disabled?: boolean;
  checkAll?: boolean;
}
export interface TDesignCheckboxGroupOptions {
  options?: TDesignCheckboxOption[];
  value?: Array<string | number | boolean>;
  max?: number;
  disabled?: boolean;
}
export interface EauiLayout extends EauiWidget {
  addWidget(widget: EauiWidget): void;
  removeWidget(widget: EauiWidget): void;
}
export interface EauiWindow extends EauiWidget {
  setLayout(layout: EauiLayout): void;
  show(): void;
  hide(): void;
  mountVue(component: Component, props?: Record<string, any>): Disposer;
}
export interface EauiLabel extends EauiWidget {
  setText(text: string): void;
}
export interface EauiButton extends EauiWidget {
  setText(text: string): void;
  clicked: EauiSignal<[]>;
}
export interface EauiLineEdit extends EauiWidget {
  text(): string;
  setText(text: string): void;
  bind(model: Ref<string>): void;
  model(): Ref<string>;
  textChanged: EauiSignal<[string]>;
}
export interface EauiCheckBox extends EauiWidget {
  isChecked(): boolean;
  setChecked(checked: boolean): void;
  stateChanged: EauiSignal<[boolean]>;
  setText(text: string): void;
  bind(model: Ref<boolean>): void;
  model(): Ref<boolean>;
}
export type EauiWindowCtor = new (options?: EauiWindowOptions) => EauiWindow;
export type EauiLabelCtor = new (text?: string) => EauiLabel;
export type EauiButtonCtor = new (text?: string) => EauiButton;
export type EauiLineEditCtor = new (text?: string) => EauiLineEdit;
export type EauiCheckBoxCtor = new (label?: string, checked?: boolean) => EauiCheckBox;
export type EauiVBoxLayoutCtor = new () => EauiLayout;
export type EauiHBoxLayoutCtor = new () => EauiLayout;
export interface CreateEauiWindowOptions {
  routeId?: string;
  electronWindow?: {
    width?: number;
    height?: number;
    title?: string;
    resizable?: boolean;
    fullscreenable?: boolean;
    show?: boolean;
    extraOptions?: BrowserWindowConstructorOptions;
  };
  buildUi: (ctx: PluginRuntimeContext) => void;
}
export interface EauiWindowOptions {
  title?: string;
  width?: number;
  height?: number;
  route?: string;
  hash?: string;
}
export interface EauiAPI {
  Window: EauiWindowCtor;
  Label: EauiLabelCtor;
  Button: EauiButtonCtor;
  LineEdit: EauiLineEditCtor;
  CheckBox: EauiCheckBoxCtor;
  VBoxLayout: EauiVBoxLayoutCtor;
  HBoxLayout: EauiHBoxLayoutCtor;
  createWindow(options?: EauiWindowOptions): EauiWindow;
  createLabel(text?: string): EauiLabel;
  createButton(text?: string): EauiButton;
  createLineEdit(text?: string): EauiLineEdit;
  createCheckBox(label?: string, checked?: boolean): EauiCheckBox;
  createVBoxLayout(): EauiLayout;
  createHBoxLayout(): EauiLayout;
  tdesign?: TDesignUI;
}
export interface PluginHostApplicationLifetime {
  onStarted(handler: () => Awaitable<void>): Disposer;
  onStopping(handler: () => Awaitable<void>): Disposer;
  onStopped(handler: () => Awaitable<void>): Disposer;
  notifyStarted(): Promise<void>;
  notifyStopping(): Promise<void>;
  notifyStopped(): Promise<void>;
}
export type HostExposure = {
  name: string;
  resolver: (provider: ServiceProvider) => unknown;
};
export type { ServiceCollection, ServiceProvider };
//# sourceMappingURL=types.d.ts.map

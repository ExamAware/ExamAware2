import type { ServiceProvideOptions, ServiceWatcherMeta } from '../../shared/services/registry'
import type { ServiceCollection, ServiceProvider } from './serviceCollection'

// 基础类型定义
export type Awaitable<T> = T | Promise<T> // 可以是同步值或Promise
export type Disposer = () => Awaitable<void> // 清理函数，返回void或Promise<void>

// 服务令牌，可以是字符串、符号或构造函数
export type ServiceToken<T = unknown> = string | symbol | (new (...args: any[]) => T)

// 可注入的类，带可选的inject属性声明依赖
export interface InjectableClass<T = unknown> {
  new (...args: any[]): T
  inject?: readonly ServiceToken[] // 依赖的令牌列表
}

// 服务工厂函数，从provider获取实例
export type ServiceFactory<T> = (provider: ServiceProvider) => T
// 服务实现，可以是工厂函数、构造函数或直接值
export type ServiceFactoryOrValue<T> = ServiceFactory<T> | InjectableClass<T> | T

// 服务生命周期：单例、作用域内单例、每次都新实例
export type ServiceLifetime = 'singleton' | 'scoped' | 'transient'

// 服务描述符，定义如何创建服务
export interface ServiceDescriptor<T = unknown> {
  token: ServiceToken<T>
  lifetime: ServiceLifetime
  factory: ServiceFactory<T> // 创建实例的工厂函数
}

// 托管服务接口，有启动和停止方法
export interface HostedService {
  start(): Awaitable<void>
  stop(): Awaitable<void>
}

// Host构建器设置
export interface HostBuilderSettings {
  environment?: string // 环境名，如'development'
  properties?: Record<string, unknown> // 额外属性
}

// Host构建器上下文，包含运行时上下文和配置
export interface HostBuilderContext {
  ctx: PluginRuntimeContext // 插件运行时上下文
  environmentName: string // 当前环境
  properties: Map<string | symbol, unknown> // 属性映射
  lifetime: PluginHostApplicationLifetime // 应用生命周期管理
}

// 插件应用上下文，包含服务提供者和上下文
export interface PluginHostApplicationContext {
  ctx: PluginRuntimeContext
  services: ServiceProvider
  host: HostBuilderContext
}

// 配置服务委托，在构建时注册服务
export type ConfigureServicesDelegate = (
  context: HostBuilderContext,
  services: ServiceCollection
) => Awaitable<void>

// 配置Host委托，在应用启动时执行
export type ConfigureHostDelegate = (
  context: HostBuilderContext,
  app: PluginHostApplicationContext
) => Awaitable<void>

// 中间件函数，包装应用逻辑
export type PluginMiddleware = (
  app: PluginHostApplicationContext,
  next: () => Promise<void>
) => Awaitable<void>

// 暴露服务解析器，可以通过令牌或工厂函数
export interface HostExposureResolver<T = unknown> {
  token?: ServiceToken<T> // 通过令牌暴露
  factory?: (provider: ServiceProvider) => T // 通过工厂函数暴露
}

// 服务API接口，插件用来注册和获取服务
export interface ServiceAPI {
  provide: (name: string, value: unknown, options?: ServiceProvideOptions) => Disposer
  inject: <T = unknown>(name: string, owner?: string) => T
  injectAsync?: <T = unknown>(name: string, owner?: string) => Promise<T>
  when?: <T = unknown>(
    name: string,
    cb: (svc: T, owner: string, meta: ServiceWatcherMeta) => void | (() => void)
  ) => Disposer
  has: (name: string, owner?: string) => boolean
}

// 插件日志接口
export interface PluginLogger {
  info: (...args: any[]) => void
  warn: (...args: any[]) => void
  error: (...args: any[]) => void
  debug?: (...args: any[]) => void
}

// 插件设置API，读写配置
export interface PluginSettingsAPI {
  all(): Record<string, any> // 获取所有配置
  get<T = unknown>(key?: string, def?: T): T // 获取单个配置项
  set<T = unknown>(key: string, value: T): Promise<void> // 设置配置项
  patch(partial: Record<string, any>): Promise<void> // 批量更新配置
  reset(): Promise<void> // 重置配置
  onChange(listener: (config: Record<string, any>) => void): Disposer // 监听配置变化
}

// 插件运行时上下文，插件的核心接口
export interface PluginRuntimeContext {
  app: 'main' | 'renderer' // 运行在主进程还是渲染进程
  logger: PluginLogger // 日志器
  config: Record<string, any> // 插件配置
  settings: PluginSettingsAPI // 设置API
  effect: (fn: () => void | Disposer | Promise<void | Disposer>) => void // 注册副作用清理
  services: ServiceAPI // 服务API
  windows?: {
    // 窗口操作（主进程）
    broadcast: (channel: string, payload?: any) => void
  }
  ipc?: {
    // IPC通信（主进程）
    registerChannel: (channel: string, handler: (event: unknown, ...args: any[]) => any) => Disposer
    invokeRenderer?: (channel: string, payload?: any) => void
  }
  desktopApi?: unknown // Desktop API（渲染进程）
  ui?: {
    eaui: EauiAPI // PyQt 风格 UI API（渲染进程）
  }
}

// eaui：简化 PyQt 风格 UI 类型定义（仅渲染进程可用）
export interface EauiSignal<TArgs extends any[] = any[]> {
  connect: (fn: (...args: TArgs) => void) => Disposer
  disconnect: (fn: (...args: TArgs) => void) => void
}

export interface EauiWidget {
  readonly element: HTMLElement
  setVisible(visible: boolean): void
  setEnabled(enabled: boolean): void
  dispose(): void
}

export interface EauiLayout extends EauiWidget {
  addWidget(widget: EauiWidget): void
  removeWidget(widget: EauiWidget): void
}

export interface EauiWindow extends EauiWidget {
  setLayout(layout: EauiLayout): void
  show(): void
  hide(): void
}

export interface EauiLabel extends EauiWidget {
  setText(text: string): void
}

export interface EauiButton extends EauiWidget {
  setText(text: string): void
  clicked: EauiSignal<[]> // click 信号
}

export interface EauiLineEdit extends EauiWidget {
  text(): string
  setText(text: string): void
  textChanged: EauiSignal<[string]>
}

export interface EauiCheckBox extends EauiWidget {
  isChecked(): boolean
  setChecked(checked: boolean): void
  stateChanged: EauiSignal<[boolean]>
  setText(text: string): void
}

export type EauiWindowCtor = new (options?: EauiWindowOptions) => EauiWindow
export type EauiLabelCtor = new (text?: string) => EauiLabel
export type EauiButtonCtor = new (text?: string) => EauiButton
export type EauiLineEditCtor = new (text?: string) => EauiLineEdit
export type EauiCheckBoxCtor = new (label?: string, checked?: boolean) => EauiCheckBox
export type EauiVBoxLayoutCtor = new () => EauiLayout
export type EauiHBoxLayoutCtor = new () => EauiLayout

export interface EauiWindowOptions {
  title?: string
  width?: number
  height?: number
}

export interface EauiAPI {
  Window: EauiWindowCtor
  Label: EauiLabelCtor
  Button: EauiButtonCtor
  LineEdit: EauiLineEditCtor
  CheckBox: EauiCheckBoxCtor
  VBoxLayout: EauiVBoxLayoutCtor
  HBoxLayout: EauiHBoxLayoutCtor
  createWindow(options?: EauiWindowOptions): EauiWindow
  createLabel(text?: string): EauiLabel
  createButton(text?: string): EauiButton
  createLineEdit(text?: string): EauiLineEdit
  createCheckBox(label?: string, checked?: boolean): EauiCheckBox
  createVBoxLayout(): EauiLayout
  createHBoxLayout(): EauiLayout
}

// 插件应用生命周期接口，管理启动/停止事件
export interface PluginHostApplicationLifetime {
  onStarted(handler: () => Awaitable<void>): Disposer // 监听启动事件
  onStopping(handler: () => Awaitable<void>): Disposer // 监听停止事件
  onStopped(handler: () => Awaitable<void>): Disposer // 监听已停止事件
  notifyStarted(): Promise<void> // 触发启动通知
  notifyStopping(): Promise<void> // 触发停止通知
  notifyStopped(): Promise<void> // 触发已停止通知
}

// 暴露的服务定义
export type HostExposure = {
  name: string // 服务名
  resolver: (provider: ServiceProvider) => unknown // 解析函数
}

// 重新导出类型，便于使用
export type { ServiceCollection, ServiceProvider }

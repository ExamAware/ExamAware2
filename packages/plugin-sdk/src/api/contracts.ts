import type {
  ExamConfig,
  ExamConfigValidationOptions,
  ExamConfigValidationResult
} from '@dsz-examaware/core';
import type { RpcClientProxy, RpcServiceToken } from '@dsz-examaware/rpc';
import type { Disposable, DisposableLike, PluginAwaitable } from './disposable';
import type { CommandHandler, CommandToken, EventToken, PluginServiceToken } from './tokens';

export interface PluginAppInfo {
  name: string;
  version: string;
  platform: string;
  packaged: boolean;
}

export interface AppApi {
  info(): Promise<PluginAppInfo>;
  getAutoStart(): Promise<boolean>;
  setAutoStart(enabled: boolean): Promise<boolean>;
  quit(): void;
}

export interface AppSettingsApi {
  all(): Promise<Readonly<Record<string, unknown>>>;
  get<T = unknown>(key: string, defaultValue?: T): Promise<T>;
  set(key: string, value: unknown): Promise<void>;
  patch(settings: Readonly<Record<string, unknown>>): Promise<void>;
  onChanged(listener: (settings: Readonly<Record<string, unknown>>) => void): Disposable;
}

export type ControlStatusState =
  | 'stopped'
  | 'unenrolled'
  | 'connecting'
  | 'authenticating'
  | 'online'
  | 'reconnecting'
  | 'authentication-failed'
  | 'incompatible'
  | 'connection-replaced';

export interface ControlStatusSnapshot {
  state: ControlStatusState;
  provider: 'builtin' | 'plugin';
  providerPlugin?: string;
  deviceId?: string;
  serverUrl?: string;
  connectedAt?: string;
  displayName?: string;
  lastError?: { code: string; message: string };
  managedSettingKeys: string[];
}

export interface ControlProvider {
  getStatus(): PluginAwaitable<Omit<ControlStatusSnapshot, 'provider' | 'providerPlugin'>>;
  onStatusChanged?(
    listener: (snapshot: Omit<ControlStatusSnapshot, 'provider' | 'providerPlugin'>) => void
  ): DisposableLike;
  bind(input: {
    serverUrl: string;
    enrollmentCode: string;
    displayName?: string;
  }): PluginAwaitable<Omit<ControlStatusSnapshot, 'provider' | 'providerPlugin'>>;
  unbind(): PluginAwaitable<Omit<ControlStatusSnapshot, 'provider' | 'providerPlugin'>>;
  callProctor(input: { occurredAt: string }): PluginAwaitable<void>;
}

export interface ManagedSettingInput {
  key: string;
  value: unknown;
}

export interface ControlApi {
  getStatus(): Promise<ControlStatusSnapshot>;
  onStatusChanged(listener: (snapshot: ControlStatusSnapshot) => void): Disposable;
  bind(input: {
    serverUrl: string;
    enrollmentCode: string;
    displayName?: string;
  }): Promise<ControlStatusSnapshot>;
  unbind(): Promise<ControlStatusSnapshot>;
  callProctor(input: { occurredAt: string }): Promise<void>;
  registerProvider(provider: ControlProvider): Disposable;
  useBuiltinProvider(): Promise<void>;
  applyManagedSettings(
    settings: readonly ManagedSettingInput[],
    options?: { replace?: boolean }
  ): Promise<void>;
  clearManagedSettings(keys?: readonly string[]): Promise<void>;
}

export type PlayerSource =
  | { kind: 'file'; path: string }
  | { kind: 'config'; config: ExamConfig }
  | { kind: 'json'; data: string }
  | { kind: 'url'; url: string; headers?: Readonly<Record<string, string>> };

export interface PlayerStartOptions {
  replaceExisting?: boolean;
  waitForReady?: boolean;
  readyTimeoutMs?: number;
  requestTimeoutMs?: number;
  maxBytes?: number;
  allowLocalNetwork?: boolean;
  validation?: ExamConfigValidationOptions;
  origin?: 'control';
  deploymentId?: string;
  window?: {
    fullscreen?: boolean;
    kiosk?: boolean;
    alwaysOnTop?: boolean;
    displayId?: string;
  };
}

export type PlayerSessionState =
  | 'preparing'
  | 'opening'
  | 'ready'
  | 'failed'
  | 'closing'
  | 'closed';

export interface PlayerSessionSnapshot {
  id: string;
  state: PlayerSessionState;
  source: PlayerSource['kind'];
  examName?: string;
  examCount?: number;
  windowId?: number;
  createdAt: number;
  origin?: 'control';
  deploymentId?: string;
  error?: { code: string; message: string; details?: unknown };
}

export interface PreparedPlayerSource {
  source: PlayerSource['kind'];
  config: ExamConfig;
  json: string;
  validation: ExamConfigValidationResult;
}

export interface PlayerSession extends Disposable {
  readonly id: string;
  snapshot(): Promise<PlayerSessionSnapshot | undefined>;
  focus(): Promise<void>;
  close(): Promise<void>;
  replaceSource(source: PlayerSource, options?: PlayerStartOptions): Promise<PlayerSession>;
}

export interface PlayerSessionEvent {
  session: PlayerSessionSnapshot;
  previousState?: PlayerSessionState;
}

export interface PlayerApi {
  prepare(source: PlayerSource, options?: PlayerStartOptions): Promise<PreparedPlayerSource>;
  start(source: PlayerSource, options?: PlayerStartOptions): Promise<PlayerSession>;
  startFromFile(path: string, options?: PlayerStartOptions): Promise<PlayerSession>;
  startFromConfig(config: ExamConfig, options?: PlayerStartOptions): Promise<PlayerSession>;
  startFromJson(data: string, options?: PlayerStartOptions): Promise<PlayerSession>;
  startFromUrl(url: string, options?: PlayerStartOptions): Promise<PlayerSession>;
  getSession(id: string): Promise<PlayerSession | undefined>;
  listSessions(): Promise<PlayerSessionSnapshot[]>;
  onSessionChanged(listener: (event: PlayerSessionEvent) => void): Disposable;
}

export interface ExamsApi {
  parse(input: string): ExamConfigValidationResult;
  validate(input: unknown, options?: ExamConfigValidationOptions): ExamConfigValidationResult;
  normalize(config: ExamConfig): ExamConfig;
  serialize(config: ExamConfig, pretty?: boolean): string;
}

export interface FileDialogFilter {
  name: string;
  extensions: string[];
}

export interface OpenFileOptions {
  title?: string;
  defaultPath?: string;
  filters?: FileDialogFilter[];
  multiple?: boolean;
  directories?: boolean;
}

export interface SaveFileOptions {
  title?: string;
  defaultPath?: string;
  filters?: FileDialogFilter[];
}

export interface FileStat {
  path: string;
  size: number;
  modifiedAt: number;
  kind: 'file' | 'directory' | 'other';
}

export interface FilesApi {
  open(options?: OpenFileOptions): Promise<string[]>;
  save(options?: SaveFileOptions): Promise<string | undefined>;
  readText(path: string): Promise<string>;
  readBytes(path: string): Promise<Uint8Array>;
  writeText(path: string, content: string): Promise<void>;
  writeBytes(path: string, content: Uint8Array): Promise<void>;
  exists(path: string): Promise<boolean>;
  stat(path: string): Promise<FileStat | undefined>;
  watch(path: string, listener: () => void): Disposable;
}

export interface PluginSettingsApi<TSettings extends object = Record<string, unknown>> {
  get(): Readonly<TSettings>;
  replace(settings: TSettings): Promise<void>;
  patch(settings: Partial<TSettings>): Promise<void>;
  reset(): Promise<void>;
  onChanged(listener: (settings: Readonly<TSettings>) => void): Disposable;
}

export interface PluginWindowOptions {
  id?: string;
  route?: string;
  title?: string;
  width?: number;
  height?: number;
  minWidth?: number;
  minHeight?: number;
  resizable?: boolean;
  fullscreenable?: boolean;
  modal?: boolean;
  show?: boolean;
}

export interface PluginWindowHandle extends Disposable {
  id: string;
  browserWindowId: number;
  focus(): Promise<void>;
  close(): Promise<void>;
}

export interface WindowsApi {
  open(options?: PluginWindowOptions): Promise<PluginWindowHandle>;
  get(id: string): Promise<PluginWindowHandle | undefined>;
  openMain(): void;
  openEditor(path?: string): void;
  openSettings(page?: string): void;
  openCast(): void;
  openLogs(): void;
  openPluginStore(): void;
}

export interface DialogMessageOptions {
  type?: 'none' | 'info' | 'error' | 'question' | 'warning';
  title?: string;
  message: string;
  detail?: string;
  buttons?: string[];
  defaultId?: number;
  cancelId?: number;
}

export interface DialogsApi {
  message(options: DialogMessageOptions): Promise<{ response: number; checkboxChecked?: boolean }>;
  openFile(options?: OpenFileOptions): Promise<string[]>;
  saveFile(options?: SaveFileOptions): Promise<string | undefined>;
}

export interface CommandRegistrationOptions {
  title?: string;
  description?: string;
  enabled?: () => boolean;
}

export interface CommandsApi {
  register<TArgs, TResult>(
    command: CommandToken<TArgs, TResult>,
    handler: CommandHandler<TArgs, TResult>,
    options?: CommandRegistrationOptions
  ): Disposable;
  execute<TArgs, TResult>(command: CommandToken<TArgs, TResult>, args: TArgs): Promise<TResult>;
  has(command: CommandToken<unknown, unknown>): boolean;
}

export interface EventsApi {
  on<TPayload>(event: EventToken<TPayload>, listener: (payload: TPayload) => void): Disposable;
  once<TPayload>(event: EventToken<TPayload>, listener: (payload: TPayload) => void): Disposable;
  emit<TPayload>(event: EventToken<TPayload>, payload: TPayload): void;
}

export interface NotificationsApi {
  show(options: {
    title?: string;
    message: string;
    level?: 'info' | 'success' | 'warning' | 'error';
    durationMs?: number;
  }): Promise<void>;
}

export interface TimeSyncSnapshot {
  now: number;
  offset: number;
  lastSyncTime: number;
  serverAddress: string;
  status: 'success' | 'error' | 'pending' | 'disabled';
  errorMessage?: string;
}

export interface TimeApi {
  now(): Promise<number>;
  info(): Promise<TimeSyncSnapshot>;
  synchronize(): Promise<TimeSyncSnapshot>;
  configure(config: Record<string, unknown>): Promise<Record<string, unknown>>;
  onChanged(listener: (snapshot: TimeSyncSnapshot) => void): Disposable;
}

export interface CastPeerInfo {
  id: string;
  name: string;
  host: string;
  port: number;
  lastSeen: number;
}

export interface CastShareInfo {
  id: string;
  examName: string;
  examCount: number;
  updatedAt: number;
  deviceName?: string;
}

export interface CastApi {
  peers(): Promise<CastPeerInfo[]>;
  localShares(): Promise<CastShareInfo[]>;
  peerShares(peerId: string): Promise<CastShareInfo[]>;
  getPeerConfig(peerId: string, shareId?: string): Promise<string | undefined>;
  send(peerId: string, source: PlayerSource): Promise<void>;
}

export type NetworkQueryValue = string | number | boolean | null | undefined;

export interface NetworkRequestOptions {
  baseUrl?: string;
  method?: string;
  headers?: Readonly<Record<string, string>>;
  query?: Readonly<Record<string, NetworkQueryValue | readonly NetworkQueryValue[]>>;
  body?: string | Uint8Array;
  json?: unknown;
  timeoutMs?: number;
  maxBytes?: number;
  allowLocalNetwork?: boolean;
}

export interface NetworkResponse {
  status: number;
  ok: boolean;
  url: string;
  headers: Readonly<Record<string, string>>;
  body: Uint8Array;
  text(): string;
  json<T = unknown>(): T;
}

export interface NetworkHttpClient {
  request(path: string, options?: NetworkRequestOptions): Promise<NetworkResponse>;
  get(path: string, options?: NetworkRequestOptions): Promise<NetworkResponse>;
  delete(path: string, options?: NetworkRequestOptions): Promise<NetworkResponse>;
  post(path: string, body?: unknown, options?: NetworkRequestOptions): Promise<NetworkResponse>;
  put(path: string, body?: unknown, options?: NetworkRequestOptions): Promise<NetworkResponse>;
  patch(path: string, body?: unknown, options?: NetworkRequestOptions): Promise<NetworkResponse>;
}

export interface NetworkApi extends NetworkHttpClient {
  getText(url: string, options?: NetworkRequestOptions): Promise<string>;
  getJson<T = unknown>(url: string, options?: NetworkRequestOptions): Promise<T>;
  createClient(defaults?: NetworkRequestOptions): NetworkHttpClient;
}

export type NetworkSocketState = 'connecting' | 'open' | 'closing' | 'closed' | 'error';

export interface WebSocketConnectOptions {
  headers?: Readonly<Record<string, string>>;
  protocols?: string | readonly string[];
  timeoutMs?: number;
  maxMessageBytes?: number;
  allowLocalNetwork?: boolean;
}

export interface WebSocketHandle extends Disposable {
  readonly state: NetworkSocketState;
  send(data: string | Uint8Array): Promise<void>;
  close(code?: number, reason?: string): Promise<void>;
  onMessage(listener: (data: string | Uint8Array) => void): Disposable;
  onStateChanged(listener: (state: NetworkSocketState, error?: string) => void): Disposable;
}

export interface TcpConnectOptions {
  host: string;
  port: number;
  tls?: boolean;
  serverName?: string;
  timeoutMs?: number;
  allowLocalNetwork?: boolean;
}

export interface TcpSocketHandle extends Disposable {
  readonly state: NetworkSocketState;
  write(data: string | Uint8Array): Promise<void>;
  end(data?: string | Uint8Array): Promise<void>;
  onData(listener: (data: Uint8Array) => void): Disposable;
  onStateChanged(listener: (state: NetworkSocketState, error?: string) => void): Disposable;
}

export interface UdpSocketAddress {
  address: string;
  port: number;
  family: 'IPv4' | 'IPv6';
}

export interface UdpSocketOptions {
  family?: 'udp4' | 'udp6';
  localAddress?: string;
  localPort?: number;
  allowLocalNetwork?: boolean;
}

export interface UdpMessage {
  data: Uint8Array;
  address: string;
  port: number;
  family: 'IPv4' | 'IPv6';
}

export interface UdpSocketHandle extends Disposable {
  readonly localAddress?: UdpSocketAddress;
  send(data: string | Uint8Array, port: number, host: string): Promise<void>;
  close(): Promise<void>;
  onMessage(listener: (message: UdpMessage) => void): Disposable;
  onError(listener: (message: string) => void): Disposable;
}

export interface SocketNetworkApi {
  connectWebSocket(url: string, options?: WebSocketConnectOptions): Promise<WebSocketHandle>;
  connectTcp(options: TcpConnectOptions): Promise<TcpSocketHandle>;
  createUdpSocket(options?: UdpSocketOptions): Promise<UdpSocketHandle>;
}

export interface HttpRouteRequest {
  method: string;
  path: string;
  query: Readonly<Record<string, string>>;
  headers: Readonly<Record<string, string | string[]>>;
  body: unknown;
}

export interface HttpRouteResponse {
  status?: number;
  headers?: Readonly<Record<string, string>>;
  body?: unknown;
}

export interface HttpRouteDefinition {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  path: string;
  summary?: string;
  description?: string;
  requireAuth?: boolean;
  handler(request: HttpRouteRequest): HttpRouteResponse | Promise<HttpRouteResponse>;
}

export interface HttpControlApi {
  baseUrl(): Promise<string>;
  configure(config: Record<string, unknown>): Promise<Record<string, unknown>>;
  restart(): Promise<void>;
}

export interface HttpApi extends HttpControlApi {
  registerRoute(route: HttpRouteDefinition): Disposable;
}

export interface DeepLinkPayload {
  raw: string;
  scheme: string;
  host: string;
  pathname: string;
  search: string;
  query: Readonly<Record<string, string>>;
}

export type DeepLinkRouteMatcher = string | RegExp | ((payload: DeepLinkPayload) => boolean);

export interface DeepLinkRouteOptions {
  host?: string;
  path?: DeepLinkRouteMatcher;
}

export interface DeepLinkMiddlewareContext {
  payload: DeepLinkPayload;
  handled: boolean;
}

export type DeepLinkMiddleware = (
  context: DeepLinkMiddlewareContext,
  next: () => Promise<void>
) => void | Promise<void>;

export interface DeepLinkClientApi {
  dispatch(url: string): Promise<void>;
  onOpened(listener: (payload: DeepLinkPayload) => void): Disposable;
}

export interface DeepLinksApi extends DeepLinkClientApi {
  register(
    path: string,
    handler: (payload: DeepLinkPayload) => boolean | Promise<boolean>
  ): Disposable;
  register(
    route: DeepLinkRouteOptions,
    handler: (payload: DeepLinkPayload) => boolean | Promise<boolean>
  ): Disposable;
  registerHost(
    host: string,
    handler: (payload: DeepLinkPayload) => boolean | Promise<boolean>
  ): Disposable;
  use(middleware: DeepLinkMiddleware): Disposable;
}

export interface PluginV2Logger {
  debug(message: string, ...details: unknown[]): void;
  info(message: string, ...details: unknown[]): void;
  warn(message: string, ...details: unknown[]): void;
  error(message: string, ...details: unknown[]): void;
}

export interface LoggingApi {
  createLogger(scope: string): PluginV2Logger;
  entries(): Promise<readonly unknown[]>;
}

export interface PluginInfo {
  name: string;
  displayName?: string;
  version: string;
  status: string;
  enabled: boolean;
  apiVersion: 1 | 2;
}

export interface PluginsApi {
  current(): PluginInfo;
  list(): Promise<PluginInfo[]>;
  enable(name: string): Promise<void>;
  disable(name: string): Promise<void>;
  reload(name: string): Promise<void>;
  uninstall(name: string): Promise<void>;
  installFromDirectory(path: string): Promise<PluginInfo>;
  installPackage(path: string): Promise<PluginInfo>;
  installFromRegistry(
    name: string,
    options?: { versionRange?: string; registry?: string }
  ): Promise<PluginInfo>;
}

export interface ServicesApi {
  provide<TService extends object>(
    token: PluginServiceToken<TService>,
    service: TService
  ): Disposable;
  use<TService extends object>(token: PluginServiceToken<TService>): Promise<TService>;
  has(token: PluginServiceToken<object>): boolean;
  rpc<TService extends object>(token: RpcServiceToken<TService>): RpcClientProxy<TService>;
  exposeRpc<TService extends object>(
    token: RpcServiceToken<TService>,
    service: TService
  ): Disposable;
}

export type PluginViewComponent = unknown | (() => Promise<unknown>);

export interface HomeContribution {
  id: string;
  label: string;
  icon: string;
  hint?: string;
  theme?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  order?: number;
  action(): void | Promise<void>;
}

export interface PageContribution {
  id: string;
  label: string;
  path: string;
  icon?: string;
  order?: number;
  component: PluginViewComponent;
}

export interface SettingsPageContribution {
  id: string;
  label: string;
  icon?: string;
  order?: number;
  component: PluginViewComponent;
}

export interface EditorPanelContribution {
  id: string;
  title: string;
  description?: string;
  order?: number;
  component: PluginViewComponent;
}

export interface PlayerToolbarContribution {
  id: string;
  label: string;
  icon?: PluginViewComponent;
  order?: number;
  tooltip?: string;
  action(): void | Promise<void>;
}

export interface ControlBindingContribution {
  id: string;
  component: PluginViewComponent;
}

export interface UiApi {
  home: { register(item: HomeContribution): Disposable };
  pages: { register(page: PageContribution): Disposable };
  settings: { registerPage(page: SettingsPageContribution): Promise<Disposable> };
  editor: {
    registerPanel(panel: EditorPanelContribution): Promise<Disposable>;
    presentView(view: EditorPanelContribution & { allowClose?: boolean }): Disposable;
    clearView(id?: string): void;
  };
  player: { registerToolbarItem(item: PlayerToolbarContribution): Disposable };
  control: { registerBindingView(view: ControlBindingContribution): Disposable };
  menus: {
    register(item: {
      id: string;
      label: string;
      command: CommandToken<unknown, unknown>;
      order?: number;
    }): Disposable;
  };
}

export interface ExamAwareCommonApi<TSettings extends object = Record<string, unknown>> {
  app: AppApi;
  appSettings: AppSettingsApi;
  player: PlayerApi;
  exams: ExamsApi;
  files: FilesApi;
  settings: PluginSettingsApi<TSettings>;
  windows: WindowsApi;
  dialogs: DialogsApi;
  commands: CommandsApi;
  events: EventsApi;
  notifications: NotificationsApi;
  time: TimeApi;
  cast: CastApi;
  network: NetworkApi;
  http: HttpControlApi;
  control: ControlApi;
  deepLinks: DeepLinkClientApi;
  logging: LoggingApi;
  plugins: PluginsApi;
  services: ServicesApi;
}

export interface ExamAwareMainApi<
  TSettings extends object = Record<string, unknown>
> extends ExamAwareCommonApi<TSettings> {
  network: NetworkApi & SocketNetworkApi;
  http: HttpApi;
  deepLinks: DeepLinksApi;
}

export interface ExamAwareRendererApi<
  TSettings extends object = Record<string, unknown>
> extends ExamAwareCommonApi<TSettings> {
  ui: UiApi;
}

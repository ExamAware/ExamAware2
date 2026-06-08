import * as vue0 from "vue";
import { App, ComponentInternalInstance, ComponentOptions, Ref, SuspenseBoundary, VNode } from "vue";
import * as vue_router0 from "vue-router";
import { RouteLocationNormalizedLoaded, RouteRecordNormalized } from "vue-router";
import { BirpcGroup, BirpcReturn } from "birpc";
import { ModuleNode } from "vite";

//#region src/client.d.ts
declare function setDevToolsClientUrl(url: string): void;
declare function getDevToolsClientUrl(): any;
//#endregion
//#region ../devtools-kit/src/types/app.d.ts
type App$1 = any;
type VueAppInstance = ComponentInternalInstance & {
  type: {
    _componentTag: string | undefined;
    components: Record<string, ComponentInternalInstance['type']>;
    __VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__: string;
    __isKeepAlive: boolean;
    devtools: {
      hide: boolean;
    };
    mixins: ComponentOptions[];
    extends: ComponentOptions;
    vuex: {
      getters: Record<string, unknown>;
    };
    computed: Record<string, unknown>;
  };
  __v_cache: Cache;
  __VUE_DEVTOOLS_NEXT_UID__: string;
  _isBeingDestroyed: boolean;
  _instance: VueAppInstance;
  _container: {
    _vnode: {
      component: VueAppInstance;
    };
  };
  isUnmounted: boolean;
  parent: VueAppInstance;
  appContext: {
    app: VueAppInstance & App$1 & {
      __VUE_DEVTOOLS_NEXT_APP_RECORD_ID__: string;
      __VUE_DEVTOOLS_NEXT_APP_RECORD__: AppRecord;
    };
  };
  __VUE_DEVTOOLS_NEXT_APP_RECORD__: AppRecord;
  suspense: SuspenseBoundary & {
    suspenseKey: string;
  };
  renderContext: Record<string, unknown>;
  devtoolsRawSetupState: Record<string, unknown>;
  setupState: Record<string, unknown>;
  provides: Record<string | symbol, unknown>;
  ctx: Record<string, unknown>;
} & App$1;
interface AppRecord {
  id: string;
  name: string;
  app?: App$1;
  version?: string;
  types?: Record<string, string | symbol>;
  instanceMap: Map<string, VueAppInstance>;
  perfGroupIds: Map<string, {
    groupId: number;
    time: number;
  }>;
  rootInstance: VueAppInstance;
  routerId?: string;
  iframe?: string;
}
//#endregion
//#region ../devtools-kit/src/types/command.d.ts
interface CustomCommandAction {
  type: 'url';
  /**
   * Url of the action, if set, execute the action will open the url
   */
  src: string;
}
interface CustomCommand {
  /**
   * The id of the command, should be unique
   */
  id: string;
  title: string;
  description?: string;
  /**
   * Order of the command, bigger number will be shown first
   * @default 0
   */
  order?: number;
  /**
   * Icon of the tab, support any Iconify icons, or a url to an image
   */
  icon?: string;
  /**
   * - action of the command
   * - __NOTE__: This will be ignored if `children` is set
   */
  action?: CustomCommandAction;
  /**
   * - children of action, if set, execute the action will show the children
   */
  children?: Omit<CustomCommand, 'children'>[];
}
//#endregion
//#region ../devtools-kit/src/types/inspector.d.ts
interface InspectorNodeTag {
  label: string;
  textColor: number;
  backgroundColor: number;
  tooltip?: string;
}
type EditStatePayload = {
  value: any;
  newKey?: string | null;
  remove?: undefined | false;
} | {
  value?: undefined;
  newKey?: undefined;
  remove: true;
};
interface CustomInspectorNode {
  id: string;
  label: string;
  children?: CustomInspectorNode[];
  tags?: InspectorNodeTag[];
  name?: string;
  file?: string;
}
interface CustomInspectorState {
  [key: string]: (StateBase | Omit<ComponentState, 'type'>)[];
}
//#endregion
//#region ../devtools-kit/src/types/component.d.ts
type ComponentInstance = any;
interface ComponentTreeNode {
  uid: string | number;
  id: string;
  name: string;
  renderKey: string | number;
  inactive: boolean;
  isFragment: boolean;
  hasChildren: boolean;
  children: ComponentTreeNode[];
  domOrder?: number[];
  consoleId?: string;
  isRouterView?: boolean;
  macthedRouteSegment?: string;
  tags: InspectorNodeTag[];
  autoOpen: boolean;
  meta?: any;
}
type ComponentBuiltinCustomStateTypes = 'function' | 'map' | 'set' | 'reference' | 'component' | 'component-definition' | 'router' | 'store';
interface ComponentCustomState extends ComponentStateBase {
  value: CustomState;
}
interface StateBase {
  key: string;
  value: any;
  editable?: boolean;
  objectType?: 'ref' | 'reactive' | 'computed' | 'other';
  raw?: string;
}
interface ComponentStateBase extends StateBase {
  type: string;
}
interface ComponentPropState extends ComponentStateBase {
  meta?: {
    type: string;
    required: boolean;
    /** Vue 1 only */
    mode?: 'default' | 'sync' | 'once';
  };
}
interface CustomState {
  _custom: {
    type: ComponentBuiltinCustomStateTypes | string;
    objectType?: string;
    display?: string;
    tooltip?: string;
    value?: any;
    abstract?: boolean;
    file?: string;
    uid?: number;
    readOnly?: boolean;
    /** Configure immediate child fields */
    fields?: {
      abstract?: boolean;
    };
    id?: any;
    actions?: {
      icon: string;
      tooltip?: string;
      action: () => void | Promise<void>;
    }[];
    /** internal */
    _reviveId?: number;
  };
}
type ComponentState = ComponentStateBase | ComponentPropState | ComponentCustomState;
interface InspectedComponentData {
  id: string;
  name: string;
  file: string;
  state: ComponentState[];
  functional?: boolean;
}
//#endregion
//#region ../devtools-kit/src/ctx/hook.d.ts
declare enum DevToolsV6PluginAPIHookKeys {
  VISIT_COMPONENT_TREE = "visitComponentTree",
  INSPECT_COMPONENT = "inspectComponent",
  EDIT_COMPONENT_STATE = "editComponentState",
  GET_INSPECTOR_TREE = "getInspectorTree",
  GET_INSPECTOR_STATE = "getInspectorState",
  EDIT_INSPECTOR_STATE = "editInspectorState",
  INSPECT_TIMELINE_EVENT = "inspectTimelineEvent",
  TIMELINE_CLEARED = "timelineCleared",
  SET_PLUGIN_SETTINGS = "setPluginSettings",
}
interface DevToolsV6PluginAPIHookPayloads {
  [DevToolsV6PluginAPIHookKeys.VISIT_COMPONENT_TREE]: {
    app: App$1;
    componentInstance: ComponentInstance;
    treeNode: ComponentTreeNode;
    filter: string;
  };
  [DevToolsV6PluginAPIHookKeys.INSPECT_COMPONENT]: {
    app: App$1;
    componentInstance: ComponentInstance;
    instanceData: InspectedComponentData;
  };
  [DevToolsV6PluginAPIHookKeys.EDIT_COMPONENT_STATE]: {
    app: App$1;
    inspectorId: string;
    nodeId: string;
    path: string[];
    type: string;
    state: EditStatePayload;
    set: (object: any, path?: string | (string[]), value?: any, cb?: (object: any, field: string, value: any) => void) => void;
  };
  [DevToolsV6PluginAPIHookKeys.GET_INSPECTOR_TREE]: {
    app: App$1;
    inspectorId: string;
    filter: string;
    rootNodes: CustomInspectorNode[];
  };
  [DevToolsV6PluginAPIHookKeys.GET_INSPECTOR_STATE]: {
    app: App$1;
    inspectorId: string;
    nodeId: string;
    state: CustomInspectorState;
  };
  [DevToolsV6PluginAPIHookKeys.EDIT_INSPECTOR_STATE]: {
    app: App$1;
    inspectorId: string;
    nodeId: string;
    path: string[];
    type: string;
    state: EditStatePayload;
    set: (object: any, path?: string | (string[]), value?: any, cb?: (object: any, field: string, value: any) => void) => void;
  };
  [DevToolsV6PluginAPIHookKeys.INSPECT_TIMELINE_EVENT]: {
    app: App$1;
    layerId: string;
    event: TimelineEvent;
    all?: boolean;
    data: any;
  };
  [DevToolsV6PluginAPIHookKeys.TIMELINE_CLEARED]: Record<string, never>;
  [DevToolsV6PluginAPIHookKeys.SET_PLUGIN_SETTINGS]: {
    app: App$1;
    pluginId: string;
    key: string;
    newValue: any;
    oldValue: any;
    settings: any;
  };
}
//#endregion
//#region ../devtools-kit/src/core/open-in-editor/index.d.ts
interface OpenInEditorOptions {
  baseUrl?: string;
  file?: string;
  line?: number;
  column?: number;
  host?: string;
}
//#endregion
//#region ../devtools-kit/src/types/router.d.ts
interface RouterInfo {
  currentRoute: RouteLocationNormalizedLoaded | null | Record<string, any>;
  routes: RouteRecordNormalized[];
}
//#endregion
//#region ../devtools-kit/src/types/tab.d.ts
type TabCategory = 'pinned' | 'app' | 'modules' | 'advanced';
type ModuleView = ModuleIframeView | ModuleVNodeView | ModuleSFCView;
interface ModuleIframeView {
  /**
   * Iframe view
   */
  type: 'iframe';
  /**
   * Url of the iframe
   */
  src: string;
  /**
   * Persist the iframe instance even if the tab is not active
   *
   * @default true
   */
  persistent?: boolean;
}
interface ModuleVNodeView {
  /**
   * Vue's VNode view
   */
  type: 'vnode';
  /**
   * Send vnode to the client, they must be static and serializable
   */
  vnode: VNode;
}
interface ModuleSFCView {
  /**
   * SFC view
   */
  type: 'sfc';
  /**
   * SFC component
   */
  sfc: string;
}
interface CustomTab {
  /**
   * The name of the tab, must be unique
   */
  name: string;
  /**
   * Icon of the tab, support any Iconify icons, or a url to an image
   */
  icon?: string;
  /**
   * Title of the tab
   */
  title: string;
  /**
   * Main view of the tab
   */
  view: ModuleView;
  /**
   * Category of the tab
   * @default 'app'
   */
  category?: TabCategory;
}
//#endregion
//#region ../devtools-kit/src/types/timeline.d.ts
interface TimelineEvent<TData = any, TMeta = any> {
  time: number;
  data: TData;
  logType?: 'default' | 'warning' | 'error';
  meta?: TMeta;
  groupId?: number | string;
  title?: string;
  subtitle?: string;
}
//#endregion
//#region ../devtools-kit/src/messaging/index.d.ts
declare function getRpcClient<R, L extends object = Record<string, never>>(): BirpcReturn<R, L>;
declare function getRpcServer<R, L extends object = Record<string, never>>(): BirpcGroup<R, L>;
declare function getViteRpcClient<R, L extends object = Record<string, never>>(): BirpcReturn<R, L>;
//#endregion
//#region src/rpc/global.d.ts
declare enum DevToolsMessagingEvents {
  INSPECTOR_TREE_UPDATED = "inspector-tree-updated",
  INSPECTOR_STATE_UPDATED = "inspector-state-updated",
  DEVTOOLS_STATE_UPDATED = "devtools-state-updated",
  ROUTER_INFO_UPDATED = "router-info-updated",
  TIMELINE_EVENT_UPDATED = "timeline-event-updated",
  INSPECTOR_UPDATED = "inspector-updated",
  ACTIVE_APP_UNMOUNTED = "active-app-updated",
  DESTROY_DEVTOOLS_CLIENT = "destroy-devtools-client",
  RELOAD_DEVTOOLS_CLIENT = "reload-devtools-client",
}
declare const functions: {
  on: (event: string, handler: Function) => void;
  off: (event: string, handler: Function) => void;
  once: (event: string, handler: Function) => void;
  emit: (event: string, ...args: any[]) => void;
  heartbeat: () => boolean;
  devtoolsState: () => {
    connected: boolean;
    clientConnected: boolean;
    vueVersion: string;
    tabs: CustomTab[];
    commands: CustomCommand[];
    vitePluginDetected: boolean;
    appRecords: {
      id: string;
      name: string;
      version: string | undefined;
      routerId: string | undefined;
      iframe: string | undefined;
    }[];
    activeAppRecordId: string;
    timelineLayersState: Record<string, boolean>;
  };
  getInspectorTree(payload: Pick<DevToolsV6PluginAPIHookPayloads[DevToolsV6PluginAPIHookKeys.GET_INSPECTOR_TREE], "inspectorId" | "filter">): Promise<string>;
  getInspectorState(payload: Pick<DevToolsV6PluginAPIHookPayloads[DevToolsV6PluginAPIHookKeys.GET_INSPECTOR_STATE], "inspectorId" | "nodeId">): Promise<string>;
  editInspectorState(payload: DevToolsV6PluginAPIHookPayloads[DevToolsV6PluginAPIHookKeys.EDIT_INSPECTOR_STATE]): Promise<void>;
  sendInspectorState(id: string): void;
  inspectComponentInspector(): Promise<string>;
  cancelInspectComponentInspector(): void;
  getComponentRenderCode(id: string): any;
  scrollToComponent(id: string): void;
  inspectDOM(id: string): void;
  getInspectorNodeActions(id: string): {
    icon: string;
    tooltip?: string;
    action: (nodeId: string) => void | Promise<void>;
  }[] | undefined;
  getInspectorActions(id: string): {
    icon: string;
    tooltip?: string;
    action: () => void | Promise<void>;
  }[] | undefined;
  updateTimelineLayersState(state: Record<string, boolean>): void;
  callInspectorNodeAction(inspectorId: string, actionIndex: number, nodeId: string): void;
  callInspectorAction(inspectorId: string, actionIndex: number): void;
  openInEditor(options: OpenInEditorOptions): void;
  checkVueInspectorDetected(): Promise<boolean>;
  enableVueInspector(): Promise<void>;
  toggleApp(id: string, options?: {
    inspectingComponent?: boolean;
  }): Promise<void>;
  updatePluginSettings(pluginId: string, key: string, value: string): void;
  getPluginSettings(pluginId: string): {
    options: Record<string, {
      label: string;
      description?: string;
    } & ({
      type: "boolean";
      defaultValue: boolean;
    } | {
      type: "choice";
      defaultValue: string | number;
      options: {
        value: string | number;
        label: string;
      }[];
      component?: "select" | "button-group";
    } | {
      type: "text";
      defaultValue: string;
    })> | null;
    values: any;
  };
  getRouterInfo(): RouterInfo;
  navigate(path: string): Promise<void | vue_router0.NavigationFailure | {} | undefined>;
  getMatchedRoutes(path: string): vue_router0.RouteRecordNormalized[];
  toggleClientConnected(state: boolean): void;
  getCustomInspector(): {
    id: string;
    label: string;
    logo: string;
    icon: string;
    packageName: string | undefined;
    homepage: string | undefined;
    pluginId: string;
  }[];
  getInspectorInfo(id: string): {
    id: string;
    label: string;
    logo: string | undefined;
    packageName: string | undefined;
    homepage: string | undefined;
    timelineLayers: {
      id: string;
      label: string;
      color: number;
    }[];
    treeFilterPlaceholder: string;
    stateFilterPlaceholder: string;
  } | undefined;
  highlighComponent(uid: string): Promise<any>;
  unhighlight(): Promise<any>;
  updateDevToolsClientDetected(params: Record<string, boolean>): void;
  initDevToolsServerListener(): void;
};
type RPCFunctions = typeof functions;
declare const rpc: {
  value: ReturnType<typeof getRpcClient<RPCFunctions>>;
  functions: ReturnType<typeof getRpcClient<RPCFunctions>>;
};
declare const rpcServer: {
  value: ReturnType<typeof getRpcServer<RPCFunctions>>;
  functions: ReturnType<typeof getRpcServer<RPCFunctions>>;
};
declare function onRpcConnected(callback: () => void): void;
declare function onRpcSeverReady(callback: () => void): void;
//#endregion
//#region src/rpc/types.d.ts
type AssetType = 'image' | 'font' | 'video' | 'audio' | 'text' | 'json' | 'wasm' | 'other';
interface AssetInfo {
  path: string;
  type: AssetType;
  publicPath: string;
  relativePath: string;
  filePath: string;
  size: number;
  mtime: number;
}
interface ImageMeta {
  width: number;
  height: number;
  orientation?: number;
  type?: string;
  mimeType?: string;
}
type AssetImporter = Pick<ModuleNode, 'url' | 'id'>;
interface AssetEntry {
  path: string;
  content: string;
  encoding?: BufferEncoding;
  override?: boolean;
}
interface CodeSnippet {
  code: string;
  lang: string;
  name: string;
  docs?: string;
}
interface ModuleInfo {
  id: string;
  plugins: {
    name: string;
    transform?: number;
    resolveId?: number;
  }[];
  deps: string[];
  virtual: boolean;
}
//#endregion
//#region src/rpc/vite.d.ts
declare const viteRpcFunctions: {
  on: (event: string, handler: Function) => void;
  off: (event: string, handler: Function) => void;
  once: (event: string, handler: Function) => void;
  emit: (event: string, ...args: any[]) => void;
  heartbeat: () => boolean;
};
type ViteRPCFunctions = typeof viteRpcFunctions & {
  getStaticAssets: () => Promise<AssetInfo[]>;
  getAssetImporters: (url: string) => Promise<AssetImporter[]>;
  getImageMeta: (filepath: string) => Promise<ImageMeta>;
  getTextAssetContent: (filepath: string, limit?: number) => Promise<string>;
  getRoot: () => Promise<string>;
  getGraphModules: () => Promise<ModuleInfo[]>;
};
declare const viteRpc: {
  value: ReturnType<typeof getViteRpcClient<ViteRPCFunctions>>;
  functions: ReturnType<typeof getViteRpcClient<ViteRPCFunctions>>;
};
declare function onViteRpcConnected(callback: () => void): void;
declare function createViteClientRpc(): void;
declare function createViteServerRpc(functions: Record<string, any>): void;
//#endregion
//#region src/vue-plugin/devtools-state.d.ts
interface DevToolsState {
  connected: boolean;
  clientConnected: boolean;
  vueVersion: string;
  tabs: CustomTab[];
  commands: CustomCommand[];
  vitePluginDetected: boolean;
  appRecords: AppRecord[];
  activeAppRecordId: string;
  timelineLayersState: Record<string, boolean>;
}
type DevToolsRefState = { [P in keyof DevToolsState]: Ref<DevToolsState[P]> };
declare function VueDevToolsVuePlugin(): {
  install(app: App): void;
};
declare function createDevToolsStateContext(): {
  getDevToolsState: () => void;
  connected: Ref<boolean, boolean>;
  clientConnected: Ref<boolean, boolean>;
  vueVersion: Ref<string, string>;
  tabs: Ref<{
    name: string;
    icon?: string | undefined;
    title: string;
    view: {
      type: "iframe";
      src: string;
      persistent?: boolean | undefined;
    } | {
      type: "vnode";
      vnode: vue0.VNode;
    } | {
      type: "sfc";
      sfc: string;
    };
    category?: ("app" | "pinned" | "modules" | "advanced") | undefined;
  }[], CustomTab[] | {
    name: string;
    icon?: string | undefined;
    title: string;
    view: {
      type: "iframe";
      src: string;
      persistent?: boolean | undefined;
    } | {
      type: "vnode";
      vnode: vue0.VNode;
    } | {
      type: "sfc";
      sfc: string;
    };
    category?: ("app" | "pinned" | "modules" | "advanced") | undefined;
  }[]>;
  commands: Ref<{
    id: string;
    title: string;
    description?: string | undefined;
    order?: number | undefined;
    icon?: string | undefined;
    action?: {
      type: "url";
      src: string;
    } | undefined;
    children?: {
      title: string;
      icon?: string | undefined;
      id: string;
      description?: string | undefined;
      order?: number | undefined;
      action?: {
        type: "url";
        src: string;
      } | undefined;
    }[] | undefined;
  }[], CustomCommand[] | {
    id: string;
    title: string;
    description?: string | undefined;
    order?: number | undefined;
    icon?: string | undefined;
    action?: {
      type: "url";
      src: string;
    } | undefined;
    children?: {
      title: string;
      icon?: string | undefined;
      id: string;
      description?: string | undefined;
      order?: number | undefined;
      action?: {
        type: "url";
        src: string;
      } | undefined;
    }[] | undefined;
  }[]>;
  vitePluginDetected: Ref<boolean, boolean>;
  appRecords: Ref<{
    id: string;
    name: string;
    app?: App$1;
    version?: string | undefined;
    types?: Record<string, string | symbol> | undefined;
    instanceMap: Map<string, any> & Omit<Map<string, any>, keyof Map<any, any>>;
    perfGroupIds: Map<string, {
      groupId: number;
      time: number;
    }> & Omit<Map<string, {
      groupId: number;
      time: number;
    }>, keyof Map<any, any>>;
    rootInstance: VueAppInstance;
    routerId?: string | undefined;
    iframe?: string | undefined;
  }[], AppRecord[] | {
    id: string;
    name: string;
    app?: App$1;
    version?: string | undefined;
    types?: Record<string, string | symbol> | undefined;
    instanceMap: Map<string, any> & Omit<Map<string, any>, keyof Map<any, any>>;
    perfGroupIds: Map<string, {
      groupId: number;
      time: number;
    }> & Omit<Map<string, {
      groupId: number;
      time: number;
    }>, keyof Map<any, any>>;
    rootInstance: VueAppInstance;
    routerId?: string | undefined;
    iframe?: string | undefined;
  }[]>;
  activeAppRecordId: Ref<string, string>;
  timelineLayersState: Ref<Record<string, boolean>, Record<string, boolean>>;
};
declare function useDevToolsState(): DevToolsRefState;
declare function onDevToolsConnected(fn: () => void): () => void;
declare function refreshCurrentPageData(): void;
//#endregion
export { AssetEntry, AssetImporter, AssetInfo, AssetType, CodeSnippet, DevToolsMessagingEvents, ImageMeta, ModuleInfo, RPCFunctions, ViteRPCFunctions, VueDevToolsVuePlugin, createDevToolsStateContext, createViteClientRpc, createViteServerRpc, functions, getDevToolsClientUrl, onDevToolsConnected, onRpcConnected, onRpcSeverReady, onViteRpcConnected, refreshCurrentPageData, rpc, rpcServer, setDevToolsClientUrl, useDevToolsState, viteRpc, viteRpcFunctions };
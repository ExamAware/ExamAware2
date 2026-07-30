export const PluginPermissions = {
  Player: {
    Start: 'player.start',
    Control: 'player.control',
    Observe: 'player.observe',
    Contribute: 'player.contribute'
  },
  Files: {
    Dialog: 'files.dialog',
    Read: 'files.read',
    Write: 'files.write',
    Watch: 'files.watch'
  },
  Windows: {
    Open: 'windows.open',
    Manage: 'windows.manage'
  },
  App: {
    Configure: 'app.configure',
    Quit: 'app.quit'
  },
  Ui: {
    Contribute: 'ui.contribute',
    Notify: 'ui.notify'
  },
  Network: {
    Http: 'network.http',
    Local: 'network.local'
  },
  Http: {
    Routes: 'http.routes',
    Configure: 'http.configure'
  },
  Cast: {
    Read: 'cast.read',
    Share: 'cast.share',
    Send: 'cast.send',
    Configure: 'cast.configure'
  },
  Time: {
    Read: 'time.read',
    Synchronize: 'time.synchronize',
    Configure: 'time.configure'
  },
  DeepLinks: {
    Register: 'deep-links.register',
    Dispatch: 'deep-links.dispatch'
  },
  Logging: {
    Read: 'logging.read',
    Configure: 'logging.configure'
  },
  Plugins: {
    Read: 'plugins.read',
    Manage: 'plugins.manage'
  },
  Services: {
    Provide: 'services.provide',
    Consume: 'services.consume'
  },
  Commands: {
    Register: 'commands.register',
    Execute: 'commands.execute'
  },
  Events: {
    Publish: 'events.publish',
    Subscribe: 'events.subscribe'
  }
} as const;

type DeepValue<T> = T extends string ? T : T extends object ? DeepValue<T[keyof T]> : never;

export type PluginPermission = DeepValue<typeof PluginPermissions>;

export const defaultPluginPermissions = [
  PluginPermissions.Time.Read,
  PluginPermissions.Logging.Read,
  PluginPermissions.Plugins.Read,
  PluginPermissions.Events.Subscribe
] as const satisfies readonly PluginPermission[];

export interface PluginPermissionApi {
  readonly granted: ReadonlySet<PluginPermission>;
  has(permission: PluginPermission): boolean;
  require(permission: PluginPermission): void;
}

export function isPluginPermission(value: string): value is PluginPermission {
  const all = Object.values(PluginPermissions).flatMap((group) => Object.values(group));
  return (all as readonly string[]).includes(value);
}

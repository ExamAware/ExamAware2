export type ServiceScope = 'main' | 'renderer';

export interface ServiceProvideOptions {
  default?: boolean;
  scope?: ServiceScope;
}

export interface ServiceWatcherMeta {
  scope: ServiceScope;
  isDefault: boolean;
}

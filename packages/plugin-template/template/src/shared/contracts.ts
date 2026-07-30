import { createPluginTokens } from '@dsz-examaware/plugin-sdk';

const tokens = createPluginTokens('__PLUGIN_NAMESPACE__');

export interface DemoSettings {
  demo?: {
    clicks?: number;
    message?: string;
  };
}

export interface HelloMessage {
  text: string;
  timestamp: number;
}

export interface BackService {
  getSomeLocalData(): Promise<{ message: string; at: string }>;
}

export const helloMessageService = tokens.service<HelloMessage>('hello-message');
export const backService = tokens.rpc<BackService>('back-service');

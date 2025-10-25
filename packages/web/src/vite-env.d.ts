/// <reference types="vite/client" />

// Allow importing .vue files without TS errors
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

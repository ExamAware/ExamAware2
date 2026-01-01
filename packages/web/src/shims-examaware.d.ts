declare module '@dsz-examaware/core' {
  export * from '../../../packages/core/src/index';
  export type { ExamConfig } from '../../../packages/core/src/types';
}

declare module '@dsz-examaware/player' {
  export * from '../../../packages/player/src/index';
  export { default as ExamPlayer } from '../../../packages/player/src/components/ExamPlayer.vue';
  export type {
    PlayerConfig,
    PlayerEventHandlers,
    PlayerToolbarItem,
    UIDensity
  } from '../../../packages/player/src/types';
}

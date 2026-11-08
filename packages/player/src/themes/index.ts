import {
  DEFAULT_PLAYER_THEME_ID,
  definePlayerTheme,
  type PlayerThemeDefinition
} from '../types/theme';
import DefaultPlayerTheme from './default/DefaultPlayerTheme.vue';
import TrainStationTheme from './train-station/TrainStationTheme.vue';

export const defaultPlayerTheme = definePlayerTheme({
  id: DEFAULT_PLAYER_THEME_ID,
  name: '默认主题',
  description: '左右分栏的经典考试信息布局',
  order: 0,
  component: DefaultPlayerTheme
});

export const trainStationPlayerTheme = definePlayerTheme({
  id: 'train-station',
  name: '火车站大屏',
  description: '黑蓝斑马时刻表、纯色块和无边框的全屏布局',
  order: 10,
  chrome: { actionBar: true, colorfulAlert: true, notice: true },
  component: TrainStationTheme
});

// train-station 仍在完善中，暂不注册到内置主题列表。
export const builtinPlayerThemes: readonly PlayerThemeDefinition[] = [defaultPlayerTheme];

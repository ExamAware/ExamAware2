import campus from './assets/backgrounds/campus.jpg';
import cover from './assets/backgrounds/cover.jpg';
import ODMG5a from './assets/backgrounds/ODMG5a.jpg';
import OHmjet from './assets/backgrounds/OHmjet.jpg';
import OShVTt from './assets/backgrounds/OShVTt.jpg';
import OVnqEB from './assets/backgrounds/OVnqEB.jpg';
import OcYCYK from './assets/backgrounds/OcYCYK.jpg';
import Oso47b from './assets/backgrounds/Oso47b.jpg';
import {
  DEFAULT_BACKGROUND_ID,
  normalizeSettings,
  type BaozhongExamClockSettings,
  type CustomBackground
} from '../shared/settings';

export interface BackgroundOption {
  id: string;
  name: string;
  url: string;
  author?: string;
  collection?: string;
  builtin: boolean;
}

export const BUILTIN_BACKGROUNDS: readonly BackgroundOption[] = [
  {
    id: 'campus',
    name: '宝中校园',
    url: campus,
    builtin: true
  },
  {
    id: 'cover',
    name: '考试时钟封面',
    url: cover,
    builtin: true
  },
  {
    id: 'Oso47b',
    name: '楼映云霞',
    author: '银河系-火星',
    collection: 'June25',
    url: Oso47b,
    builtin: true
  },
  {
    id: 'OVnqEB',
    name: '暮空灯语',
    author: '羊羽',
    collection: 'June25',
    url: OVnqEB,
    builtin: true
  },
  {
    id: 'OcYCYK',
    name: '碧海蓝天',
    author: 'Eatong',
    collection: 'May25',
    url: OcYCYK,
    builtin: true
  },
  {
    id: 'OShVTt',
    name: '柳影',
    author: 'sleepforever',
    collection: 'Mar25',
    url: OShVTt,
    builtin: true
  },
  {
    id: 'OHmjet',
    name: '钟意其云',
    author: '杨sy',
    collection: 'Nov24',
    url: OHmjet,
    builtin: true
  },
  {
    id: 'ODMG5a',
    name: '石中天',
    author: '氚',
    collection: 'Oct24',
    url: ODMG5a,
    builtin: true
  }
];

export const toCustomBackground = (item: CustomBackground): BackgroundOption => ({
  id: item.id,
  name: item.name,
  url: item.dataUrl,
  builtin: false
});

export const listBackgrounds = (settings: BaozhongExamClockSettings): BackgroundOption[] => {
  const normalized = normalizeSettings(settings);
  return [...BUILTIN_BACKGROUNDS, ...normalized.customBackgrounds!.map(toCustomBackground)];
};

export const resolveBackground = (settings: BaozhongExamClockSettings): BackgroundOption => {
  const backgrounds = listBackgrounds(settings);
  const normalized = normalizeSettings(settings);
  return (
    backgrounds.find((background) => background.id === normalized.backgroundId) ??
    backgrounds.find((background) => background.id === DEFAULT_BACKGROUND_ID) ??
    backgrounds[0]
  );
};

export const backgroundCredit = (background: BackgroundOption): string => {
  if (background.builtin) {
    if (background.author) {
      return `${background.author} · ${background.name}${background.collection ? ` (${background.collection})` : ''}`;
    }
    return background.name;
  }
  return `自定义 · ${background.name}`;
};

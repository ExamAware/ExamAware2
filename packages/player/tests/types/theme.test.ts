import { defineComponent, h } from 'vue';
import { describe, expect, it } from 'vitest';
import {
  DEFAULT_PLAYER_THEME_ID,
  normalizePlayerThemes,
  resolvePlayerTheme,
  type PlayerThemeDefinition
} from '../../src/types/theme';
import { builtinPlayerThemes, trainStationPlayerTheme } from '../../src/themes';

const component = defineComponent({
  setup: () => () => h('div')
});

const theme = (id: string, order?: number): PlayerThemeDefinition => ({
  id,
  name: id,
  order,
  component
});

describe('player theme resolution', () => {
  it('keeps the built-in theme first and follows external order', () => {
    const themes = normalizePlayerThemes([
      theme('late', 50),
      theme(DEFAULT_PLAYER_THEME_ID, 999),
      theme('early', -10)
    ]);

    expect(themes.map((item) => item.id)).toEqual([DEFAULT_PLAYER_THEME_ID, 'early', 'late']);
  });

  it('drops duplicate ids and keeps the first registration', () => {
    const first = theme('duplicate', 10);
    const second = { ...theme('duplicate', 1), name: 'second' };
    const themes = normalizePlayerThemes([first, second]);

    expect(themes).toHaveLength(1);
    expect(themes[0].name).toBe('duplicate');
  });

  it('keeps the unfinished train station theme out of the built-in list', () => {
    expect(trainStationPlayerTheme.chrome?.actionBar).toBe(true);
    expect(builtinPlayerThemes.map((item) => item.id)).toEqual([DEFAULT_PLAYER_THEME_ID]);
  });

  it('falls back to the built-in theme when the selected id is gone', () => {
    const themes = normalizePlayerThemes([
      theme(DEFAULT_PLAYER_THEME_ID, 0),
      theme('plugin:theme', 10)
    ]);

    expect(resolvePlayerTheme(themes, 'plugin:removed').id).toBe(DEFAULT_PLAYER_THEME_ID);
    expect(resolvePlayerTheme(themes, 'plugin:theme').id).toBe('plugin:theme');
  });
});

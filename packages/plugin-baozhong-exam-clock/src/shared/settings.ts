export interface CustomBackground {
  id: string;
  name: string;
  dataUrl: string;
}

export interface BaozhongExamClockSettings {
  backgroundId?: string;
  customBackgrounds?: CustomBackground[];
  coverOrigin?: string;
}

export const DEFAULT_BACKGROUND_ID = 'campus';

export const DEFAULT_COVER_ORIGIN = '宝鸡中学';

export const defaultSettings = (): BaozhongExamClockSettings => ({
  backgroundId: DEFAULT_BACKGROUND_ID,
  customBackgrounds: [],
  coverOrigin: DEFAULT_COVER_ORIGIN
});

export const normalizeSettings = (
  input: Readonly<BaozhongExamClockSettings> | undefined
): BaozhongExamClockSettings => ({
  backgroundId:
    typeof input?.backgroundId === 'string' && input.backgroundId.trim()
      ? input.backgroundId
      : DEFAULT_BACKGROUND_ID,
  customBackgrounds: Array.isArray(input?.customBackgrounds)
    ? input.customBackgrounds.filter(
        (item) =>
          item &&
          typeof item.id === 'string' &&
          typeof item.name === 'string' &&
          typeof item.dataUrl === 'string'
      )
    : [],
  coverOrigin:
    typeof input?.coverOrigin === 'string' && input.coverOrigin.trim()
      ? input.coverOrigin
      : DEFAULT_COVER_ORIGIN
});

import fontAwesomeCss from '../assets/fontawesome/all.min.css?inline';
import examClockCss from './examclock.css?inline';
import settingsCss from './settings.css?inline';

const injectStyle = (id: string, css: string): (() => void) => {
  const style = document.createElement('style');
  style.dataset.examawarePlugin = `baozhong-exam-clock-${id}`;
  style.textContent = css;
  document.head.appendChild(style);
  return () => style.remove();
};

/**
 * The host loads renderer entries as ES modules and does not auto-load Vite's
 * extracted CSS assets, so inject the ported styles explicitly and dispose them
 * with the plugin scope.
 */
export const installExamClockStyles = (): (() => void) =>
  injectStyle('theme', `${fontAwesomeCss}\n${examClockCss}`);

export const installSettingsStyles = (): (() => void) => injectStyle('settings', settingsCss);

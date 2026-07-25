// @vitest-environment jsdom

import { mount } from '@vue/test-utils';
import { afterEach, describe, expect, it, vi } from 'vitest';
import RingtoneFactoryView from '../src/renderer/RingtoneFactoryView.vue';

describe('RingtoneFactoryView', () => {
  afterEach(() => {
    document.body.innerHTML = '';
    vi.restoreAllMocks();
  });

  it('renders the complete factory form with the bundled Vue runtime', () => {
    vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => undefined);
    const wrapper = mount(RingtoneFactoryView, { attachTo: document.body });

    expect(wrapper.get('h1').text()).toBe('铃声工厂');
    expect(wrapper.text()).toContain('可以用来制作 .ea2r 铃声包');
    expect(wrapper.text()).toContain('0/3 音频 已载入');
    expect(wrapper.findAll('.sound-row')).toHaveLength(3);
    expect(wrapper.get('.page-footer').text()).toContain('生成铃声包');

    wrapper.unmount();
  });
});

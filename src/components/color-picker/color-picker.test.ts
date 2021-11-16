import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';

import '../../../dist/klik.js';
import type SlColorPicker from './color-picker';

describe('<klik-color-picker>', () => {
  it('should emit change and show correct color when the value changes', async () => {
    const el = await fixture<SlColorPicker>(html` <klik-color-picker></klik-color-picker> `);
    const trigger = el.shadowRoot.querySelector('[part="trigger"]') as HTMLElement;
    const changeHandler = sinon.spy();
    const color = 'rgb(255, 204, 0)';

    el.addEventListener('klik-change', changeHandler);
    el.value = color;

    await waitUntil(() => changeHandler.calledOnce);

    expect(changeHandler).to.have.been.calledOnce;
    expect(trigger.style.color).to.equal(color);
  });

  it('should render in a dropdown', async () => {
    const el = await fixture<SlColorPicker>(html` <klik-color-picker></klik-color-picker> `);
    const dropdown = el.shadowRoot.querySelector('klik-dropdown');

    expect(dropdown).to.exist;
  });

  it('should not render in a dropdown when inline is enabled', async () => {
    const el = await fixture<SlColorPicker>(html` <klik-color-picker inline></klik-color-picker> `);
    const dropdown = el.shadowRoot.querySelector('klik-dropdown');

    expect(dropdown).to.not.exist;
  });

  it('should show opacity slider when opacity is enabled', async () => {
    const el = await fixture<SlColorPicker>(html` <klik-color-picker opacity></klik-color-picker> `);
    const opacitySlider = el.shadowRoot.querySelector('[part*="opacity-slider"]') as HTMLElement;

    expect(opacitySlider).to.exist;
  });
});

import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';

import '../../../dist/klik.js';
import type SlRadio from './radio';
import type SlRadioGroup from '../radio-group/radio-group';

describe('<klik-radio>', () => {
  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<SlRadio>(html` <klik-radio disabled></klik-radio> `);
    const radio = el.shadowRoot?.querySelector('input');

    expect(radio.disabled).to.be.true;
  });

  it('should be valid by default', async () => {
    const el = await fixture<SlRadio>(html` <klik-radio></klik-radio> `);

    expect(el.invalid).to.be.false;
  });

  it('should fire klik-change when clicked', async () => {
    const el = await fixture<SlRadio>(html` <klik-radio></klik-radio> `);
    setTimeout(() => el.shadowRoot?.querySelector('input').click());
    const event = await oneEvent(el, 'klik-change');
    expect(event.target).to.equal(el);
    expect(el.checked).to.be.true;
  });

  it('should fire klik-change when toggled via keyboard - space', async () => {
    const el = await fixture<SlRadio>(html` <klik-radio></klik-radio> `);
    const input = el.shadowRoot?.querySelector('input');
    input.focus();
    setTimeout(() => sendKeys({ press: ' ' }));
    const event = await oneEvent(el, 'klik-change');
    expect(event.target).to.equal(el);
    expect(el.checked).to.be.true;
  });

  it('should fire klik-change when toggled via keyboard - arrow key', async () => {
    const radioGroup = await fixture<SlRadioGroup>(html`
      <klik-radio-group>
        <klik-radio id="radio-1"></klik-radio>
        <klik-radio id="radio-2"></klik-radio>
      </klik-radio-group>
    `);
    const radio1: SlRadio = radioGroup.querySelector('klik-radio#radio-1');
    const radio2: SlRadio = radioGroup.querySelector('klik-radio#radio-2');
    const input1 = radio1.shadowRoot?.querySelector('input');
    input1.focus();
    setTimeout(() => sendKeys({ press: 'ArrowRight' }));
    const event = await oneEvent(radio2, 'klik-change');
    expect(event.target).to.equal(radio2);
    expect(radio2.checked).to.be.true;
  });

  it('should not fire klik-change when checked is set by javascript', async () => {
    const el = await fixture<SlRadio>(html` <klik-radio></klik-radio> `);
    el.addEventListener('klik-change', () => expect.fail('event fired'));
    el.checked = true;
    await el.updateComplete;
    el.checked = false;
    await el.updateComplete;
  });
});

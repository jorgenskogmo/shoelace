import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';

import '../../../dist/klik.js';
import type SlSwitch from './switch';

describe('<klik-switch>', () => {
  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<SlSwitch>(html` <klik-switch disabled></klik-switch> `);
    const input = el.shadowRoot?.querySelector('input');

    expect(input.disabled).to.be.true;
  });

  it('should be valid by default', async () => {
    const el = await fixture<SlSwitch>(html` <klik-switch></klik-switch> `);

    expect(el.invalid).to.be.false;
  });

  it('should fire klik-change when clicked', async () => {
    const el = await fixture<SlSwitch>(html` <klik-switch></klik-switch> `);
    setTimeout(() => el.shadowRoot?.querySelector('input').click());
    const event = await oneEvent(el, 'klik-change');
    expect(event.target).to.equal(el);
    expect(el.checked).to.be.true;
  });

  it('should fire klik-change when toggled with spacebar', async () => {
    const el = await fixture<SlSwitch>(html` <klik-switch></klik-switch> `);
    el.focus();
    setTimeout(() => sendKeys({ press: ' ' }));
    const event = await oneEvent(el, 'klik-change');
    expect(event.target).to.equal(el);
    expect(el.checked).to.be.true;
  });

  // TODO - arrow key doesn't seem to be sending
  // TODO - test for left arrow too
  // it('should fire klik-change when toggled with the right arrow', async () => {
  //   const el = await fixture<SlSwitch>(html` <klik-switch></klik-switch> `);
  //   el.focus();
  //   setTimeout(() => sendKeys({ press: 'ArrowRight' }));
  //   const event = await oneEvent(el, 'klik-change');
  //   expect(event.target).to.equal(el);
  //   expect(el.checked).to.be.true;
  // });

  it('should not fire klik-change when checked is set by javascript', async () => {
    const el = await fixture<SlSwitch>(html` <klik-switch></klik-switch> `);
    el.addEventListener('klik-change', () => expect.fail('event fired'));
    el.checked = true;
    await el.updateComplete;
    el.checked = false;
    await el.updateComplete;
  });
});

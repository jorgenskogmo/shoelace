import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';

import '../../../dist/klik.js';
import type KlikCheckbox from './checkbox';

describe('<klik-checkbox>', () => {
  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<KlikCheckbox>(html` <klik-checkbox disabled></klik-checkbox> `);
    const checkbox = el.shadowRoot?.querySelector('input');

    expect(checkbox.disabled).to.be.true;
  });

  it('should be valid by default', async () => {
    const el = await fixture<KlikCheckbox>(html` <klik-checkbox></klik-checkbox> `);

    expect(el.invalid).to.be.false;
  });

  it('should fire klik-change when clicked', async () => {
    const el = await fixture<KlikCheckbox>(html` <klik-checkbox></klik-checkbox> `);
    setTimeout(() => el.shadowRoot?.querySelector('input').click());
    const event = await oneEvent(el, 'klik-change');
    expect(event.target).to.equal(el);
    expect(el.checked).to.be.true;
  });

  it('should fire klik-change when toggled via keyboard', async () => {
    const el = await fixture<KlikCheckbox>(html` <klik-checkbox></klik-checkbox> `);
    const input = el.shadowRoot?.querySelector('input');
    input.focus();
    setTimeout(() => sendKeys({ press: ' ' }));
    const event = await oneEvent(el, 'klik-change');
    expect(event.target).to.equal(el);
    expect(el.checked).to.be.true;
  });

  it('should not fire klik-change when checked is set by javascript', async () => {
    const el = await fixture<KlikCheckbox>(html` <klik-checkbox></klik-checkbox> `);
    el.addEventListener('klik-change', () => expect.fail('event fired'));
    el.checked = true;
    await el.updateComplete;
    el.checked = false;
    await el.updateComplete;
  });
});

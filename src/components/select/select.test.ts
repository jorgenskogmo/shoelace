import { expect, fixture, html, waitUntil, aTimeout } from '@open-wc/testing';
import sinon from 'sinon';

import '../../../dist/klik.js';
import type KlikSelect from './select';

describe('<klik-select>', () => {
  it('should emit klik-change when the value changes', async () => {
    const el = await fixture<KlikSelect>(html`
      <klik-select>
        <klik-menu-item value="option-1">Option 1</klik-menu-item>
        <klik-menu-item value="option-2">Option 2</klik-menu-item>
        <klik-menu-item value="option-3">Option 3</klik-menu-item>
      </klik-select>
    `);
    const changeHandler = sinon.spy();

    el.addEventListener('klik-change', changeHandler);
    el.value = 'option-2';
    await waitUntil(() => changeHandler.calledOnce);

    expect(changeHandler).to.have.been.calledOnce;
  });

  it('should  open the menu when any letter key is pressed with klik-select is on focus', async () => {
    const el = (await fixture(html`
      <klik-select>
        <klik-menu-item value="option-1">Option 1</klik-menu-item>
        <klik-menu-item value="option-2">Option 2</klik-menu-item>
        <klik-menu-item value="option-3">Option 3</klik-menu-item>
      </klik-select>
    `)) as SlSelect;
    const control = el.shadowRoot.querySelector('.select__control') as HTMLSelectElement;
    control.focus();
    const rKeyEvent = new KeyboardEvent('keydown', { key: 'r' });
    control.dispatchEvent(rKeyEvent);
    await aTimeout(100);
    expect(control.getAttribute('aria-expanded')).to.equal('true');
  });

  it('should not open the menu when ctrl + R is pressed with klik-select is on focus', async () => {
    const el = (await fixture(html`
      <klik-select>
        <klik-menu-item value="option-1">Option 1</klik-menu-item>
        <klik-menu-item value="option-2">Option 2</klik-menu-item>
        <klik-menu-item value="option-3">Option 3</klik-menu-item>
      </klik-select>
    `)) as SlSelect;
    const control = el.shadowRoot.querySelector('.select__control') as HTMLSelectElement;
    control.focus();
    const rKeyEvent = new KeyboardEvent('keydown', { key: 'r', ctrlKey: true });
    control.dispatchEvent(rKeyEvent);
    await aTimeout(100);
    expect(control.getAttribute('aria-expanded')).to.equal('false');
  });
});

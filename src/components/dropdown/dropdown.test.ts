import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';

import '../../../dist/klik.js';
import type SlDropdown from './dropdown';

describe('<klik-dropdown>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<SlDropdown>(html`
      <klik-dropdown open>
        <klik-button slot="trigger" caret>Toggle</klik-button>
        <klik-menu>
          <klik-menu-item>Item 1</klik-menu-item>
          <klik-menu-item>Item 2</klik-menu-item>
          <klik-menu-item>Item 3</klik-menu-item>
        </klik-menu>
      </klik-dropdown>
    `);
    const panel = el.shadowRoot?.querySelector('[part="panel"]') as HTMLElement;

    expect(panel.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<SlDropdown>(html`
      <klik-dropdown>
        <klik-button slot="trigger" caret>Toggle</klik-button>
        <klik-menu>
          <klik-menu-item>Item 1</klik-menu-item>
          <klik-menu-item>Item 2</klik-menu-item>
          <klik-menu-item>Item 3</klik-menu-item>
        </klik-menu>
      </klik-dropdown>
    `);
    const panel = el.shadowRoot?.querySelector('[part="panel"]') as HTMLElement;

    expect(panel.hidden).to.be.true;
  });

  it('should emit klik-show and klik-after-show when calling show()', async () => {
    const el = await fixture<SlDropdown>(html`
      <klik-dropdown>
        <klik-button slot="trigger" caret>Toggle</klik-button>
        <klik-menu>
          <klik-menu-item>Item 1</klik-menu-item>
          <klik-menu-item>Item 2</klik-menu-item>
          <klik-menu-item>Item 3</klik-menu-item>
        </klik-menu>
      </klik-dropdown>
    `);
    const panel = el.shadowRoot?.querySelector('[part="panel"]') as HTMLElement;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('klik-show', showHandler);
    el.addEventListener('klik-after-show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(panel.hidden).to.be.false;
  });

  it('should emit klik-hide and klik-after-hide when calling hide()', async () => {
    const el = await fixture<SlDropdown>(html`
      <klik-dropdown open>
        <klik-button slot="trigger" caret>Toggle</klik-button>
        <klik-menu>
          <klik-menu-item>Item 1</klik-menu-item>
          <klik-menu-item>Item 2</klik-menu-item>
          <klik-menu-item>Item 3</klik-menu-item>
        </klik-menu>
      </klik-dropdown>
    `);
    const panel = el.shadowRoot?.querySelector('[part="panel"]') as HTMLElement;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('klik-hide', hideHandler);
    el.addEventListener('klik-after-hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(panel.hidden).to.be.true;
  });

  it('should emit klik-show and klik-after-show when setting open = true', async () => {
    const el = await fixture<SlDropdown>(html`
      <klik-dropdown>
        <klik-button slot="trigger" caret>Toggle</klik-button>
        <klik-menu>
          <klik-menu-item>Item 1</klik-menu-item>
          <klik-menu-item>Item 2</klik-menu-item>
          <klik-menu-item>Item 3</klik-menu-item>
        </klik-menu>
      </klik-dropdown>
    `);
    const panel = el.shadowRoot?.querySelector('[part="panel"]') as HTMLElement;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('klik-show', showHandler);
    el.addEventListener('klik-after-show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(panel.hidden).to.be.false;
  });

  it('should emit klik-hide and klik-after-hide when setting open = false', async () => {
    const el = await fixture<SlDropdown>(html`
      <klik-dropdown open>
        <klik-button slot="trigger" caret>Toggle</klik-button>
        <klik-menu>
          <klik-menu-item>Item 1</klik-menu-item>
          <klik-menu-item>Item 2</klik-menu-item>
          <klik-menu-item>Item 3</klik-menu-item>
        </klik-menu>
      </klik-dropdown>
    `);
    const panel = el.shadowRoot?.querySelector('[part="panel"]') as HTMLElement;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('klik-hide', hideHandler);
    el.addEventListener('klik-after-hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(panel.hidden).to.be.true;
  });
});

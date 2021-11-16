import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';

import '../../../dist/klik.js';
import type SlTooltip from './tooltip';

describe('<klik-tooltip>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<SlTooltip>(html`
      <klik-tooltip content="This is a tooltip" open>
        <klik-button>Hover Me</klik-button>
      </klik-tooltip>
    `);
    const base = el.shadowRoot?.querySelector('[part="base"]') as HTMLElement;

    expect(base.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<SlTooltip>(html`
      <klik-tooltip content="This is a tooltip">
        <klik-button>Hover Me</klik-button>
      </klik-tooltip>
    `);
    const base = el.shadowRoot?.querySelector('[part="base"]') as HTMLElement;

    expect(base.hidden).to.be.true;
  });

  it('should emit klik-show and klik-after-show when calling show()', async () => {
    const el = await fixture<SlTooltip>(html`
      <klik-tooltip content="This is a tooltip">
        <klik-button>Hover Me</klik-button>
      </klik-tooltip>
    `);
    const base = el.shadowRoot?.querySelector('[part="base"]') as HTMLElement;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('klik-show', showHandler);
    el.addEventListener('klik-after-show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.false;
  });

  it('should emit klik-hide and klik-after-hide when calling hide()', async () => {
    const el = await fixture<SlTooltip>(html`
      <klik-tooltip content="This is a tooltip" open>
        <klik-button>Hover Me</klik-button>
      </klik-tooltip>
    `);
    const base = el.shadowRoot?.querySelector('[part="base"]') as HTMLElement;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('klik-hide', hideHandler);
    el.addEventListener('klik-after-hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.true;
  });

  it('should emit klik-show and klik-after-show when setting open = true', async () => {
    const el = await fixture<SlTooltip>(html`
      <klik-tooltip content="This is a tooltip">
        <klik-button>Hover Me</klik-button>
      </klik-tooltip>
    `);
    const base = el.shadowRoot?.querySelector('[part="base"]') as HTMLElement;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('klik-show', showHandler);
    el.addEventListener('klik-after-show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.false;
  });

  it('should emit klik-hide and klik-after-hide when setting open = false', async () => {
    const el = await fixture<SlTooltip>(html`
      <klik-tooltip content="This is a tooltip" open>
        <klik-button>Hover Me</klik-button>
      </klik-tooltip>
    `);
    const base = el.shadowRoot?.querySelector('[part="base"]') as HTMLElement;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('klik-hide', hideHandler);
    el.addEventListener('klik-after-hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.true;
  });
});

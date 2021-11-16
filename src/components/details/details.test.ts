import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';

import '../../../dist/klik.js';
import type SlDetails from './details';

describe('<klik-details>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<SlDetails>(html`
      <klik-details open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </klik-details>
    `);
    const body = el.shadowRoot?.querySelector('.details__body') as HTMLElement;

    expect(body.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<SlDetails>(html`
      <klik-details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </klik-details>
    `);
    const body = el.shadowRoot?.querySelector('.details__body') as HTMLElement;

    expect(body.hidden).to.be.true;
  });

  it('should emit klik-show and klik-after-show when calling show()', async () => {
    const el = await fixture<SlDetails>(html`
      <klik-details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </klik-details>
    `);
    const body = el.shadowRoot?.querySelector('.details__body') as HTMLElement;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('klik-show', showHandler);
    el.addEventListener('klik-after-show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.false;
  });

  it('should emit klik-hide and klik-after-hide when calling hide()', async () => {
    const el = await fixture<SlDetails>(html`
      <klik-details open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </klik-details>
    `);
    const body = el.shadowRoot?.querySelector('.details__body') as HTMLElement;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('klik-hide', hideHandler);
    el.addEventListener('klik-after-hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.true;
  });

  it('should emit klik-show and klik-after-show when setting open = true', async () => {
    const el = await fixture<SlDetails>(html`
      <klik-details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </klik-details>
    `);
    const body = el.shadowRoot?.querySelector('.details__body') as HTMLElement;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('klik-show', showHandler);
    el.addEventListener('klik-after-show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.false;
  });

  it('should emit klik-hide and klik-after-hide when setting open = false', async () => {
    const el = await fixture<SlDetails>(html`
      <klik-details open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </klik-details>
    `);
    const body = el.shadowRoot?.querySelector('.details__body') as HTMLElement;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('klik-hide', hideHandler);
    el.addEventListener('klik-after-hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.true;
  });

  it('should be the correct size after opening more than one instance', async () => {
    const el = await fixture<SlDetails>(html`
      <div>
        <klik-details>
          <div style="height: 200px;"></div>
        </klik-details>
        <klik-details>
          <div style="height: 400px;"></div>
        </klik-details>
      </div>
    `);
    const first = el.querySelectorAll('klik-details')[0];
    const second = el.querySelectorAll('klik-details')[1];
    const firstBody = first.shadowRoot?.querySelector('.details__body');
    const secondBody = second.shadowRoot?.querySelector('.details__body');

    await first.show();
    await second.show();

    expect(firstBody!.clientHeight).to.equal(200);
    expect(secondBody!.clientHeight).to.equal(400);
  });
});

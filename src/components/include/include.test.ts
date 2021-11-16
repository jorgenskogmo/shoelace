import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';

import '../../../dist/klik.js';
import type SlInclude from './include';

describe('<klik-include>', () => {
  it('should load content and emit klik-load', async () => {
    const el = await fixture<SlInclude>(
      html` <klik-include src="https://jsonplaceholder.typicode.com/posts/1"></klik-include> `
    );
    const loadHandler = sinon.spy();

    el.addEventListener('klik-load', loadHandler);
    await waitUntil(() => loadHandler.calledOnce);

    expect(el.innerHTML).to.contain('"id": 1');
    expect(loadHandler).to.have.been.calledOnce;
  });

  it('should emit klik-error when content cannot be loaded', async () => {
    const el = await fixture<SlInclude>(
      html` <klik-include src="https://jsonplaceholder.typicode.com/not-found"></klik-include> `
    );
    const loadHandler = sinon.spy();

    el.addEventListener('klik-error', loadHandler);
    await waitUntil(() => loadHandler.calledOnce);

    expect(loadHandler).to.have.been.calledOnce;
  });
});

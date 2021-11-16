import { expect, fixture, html, waitUntil } from '@open-wc/testing';
// import sinon from 'sinon';

import '../../../dist/klik.js';
import type SlMutationObserver from './mutation-observer';

describe('<klik-mutation-observer>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <klik-mutation-observer></klik-mutation-observer> `);

    expect(el).to.exist;
  });
});

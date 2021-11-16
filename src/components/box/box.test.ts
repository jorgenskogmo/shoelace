import { expect, fixture, html, waitUntil } from '@open-wc/testing';
// import sinon from 'sinon';

import '../../../dist/klik.js';
import type KlikBox from './box';

describe('<klik-box>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <klik-box></klik-box> `);

    expect(el).to.exist;
  });
});

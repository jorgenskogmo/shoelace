import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';

import '../../../dist/shoelace.js';
import type SlTextarea from './textarea';

describe('<klik-textarea>', () => {
  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<SlTextarea>(html` <klik-textarea disabled></klik-textarea> `);
    const textarea = el.shadowRoot?.querySelector('[part="textarea"]') as HTMLInputElement;

    expect(textarea.disabled).to.be.true;
  });

  it('should be valid by default', async () => {
    const el = await fixture<SlTextarea>(html` <klik-textarea></klik-textarea> `);

    expect(el.invalid).to.be.false;
  });

  it('should be invalid when required and empty', async () => {
    const el = await fixture<SlTextarea>(html` <klik-textarea required></klik-textarea> `);

    expect(el.invalid).to.be.true;
  });

  it('should be invalid when required and after removing disabled ', async () => {
    const el = await fixture<SlTextarea>(html` <klik-textarea disabled required></klik-textarea> `);

    el.disabled = false;
    await el.updateComplete;

    expect(el.invalid).to.be.true;
  });
});

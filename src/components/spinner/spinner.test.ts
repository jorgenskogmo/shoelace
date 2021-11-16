import { expect, fixture, html } from '@open-wc/testing';

import '../../../dist/klik.js';
import type KlikSpinner from './spinner';

describe('<klik-spinner>', () => {
  let el: KlikSpinner;

  describe('when provided no parameters', () => {
    before(async () => {
      el = await fixture<KlikSpinner>(html` <klik-spinner></klik-spinner> `);
    });

    it('should render a component that passes accessibility test.', async () => {
      await expect(el).to.be.accessible();
    });

    it('should defer updates to screen reader users via aria-live="polite".', async () => {
      // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
      const base = el.shadowRoot?.querySelector('[part="base"]') as SVGElement;
      await expect(base).have.attribute('aria-busy', 'true');
      await expect(base).have.attribute('aria-live', 'polite');
    });
  });
});

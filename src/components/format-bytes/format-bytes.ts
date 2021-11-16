import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { formatBytes } from '../../internal/number';

/**
 * @since 2.0
 * @status stable
 */
@customElement('klik-format-bytes')
export default class KlikFormatBytes extends LitElement {
  /** The number to format in bytes. */
  @property({ type: Number }) value = 0;

  /** The unit to display. */
  @property() unit: 'bytes' | 'bits' = 'bytes';

  /** The locale to use when formatting the number. */
  @property() locale: string;

  render() {
    return formatBytes(this.value, {
      unit: this.unit,
      locale: this.locale
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'klik-format-bytes': KlikFormatBytes;
  }
}

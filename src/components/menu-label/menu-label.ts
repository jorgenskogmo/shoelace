import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './menu-label.styles';

/**
 * @since 2.0
 * @status stable
 *
 * @slot - The menu label's content.
 *
 * @csspart base - The component's base wrapper.
 */
@customElement('klik-menu-label')
export default class SlMenuLabel extends LitElement {
  static styles = styles;

  render() {
    return html`
      <div part="base" class="menu-label">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'klik-menu-label': SlMenuLabel;
  }
}

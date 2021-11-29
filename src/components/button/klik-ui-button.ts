import { customElement } from 'lit/decorators.js';
import { css, unsafeCSS } from 'lit';
import SlButton from './button';
import styles from './button.styles';

/**
 * @since 2.0
 * @status stable
 *
 * @slot - The button's label.
 *
 * @csspart base - The base wrapper
 */
@customElement('klik-ui-button')
export default class KlikUiButton extends SlButton {
  private static notificationStyles = ['success', 'warning', 'danger'].map(notification => {
    const notificationCSS = unsafeCSS(notification);
    return css`
      .button--standard.button--${notificationCSS} {
        background-color: rgb(var(--sl-color-${notificationCSS}-200));
        border-color: rgb(var(--sl-color-${notificationCSS}-200));
        color: rgb(var(--sl-color-neutral-900));
      }
    `;
  });
  static styles = [
    styles,
    css`
      :host {
        cursor: wait;
      }

      .button {
        border-style: dotted;
        border-width: 2px;
      }

      .button--standard.button--default {
        color: #3277b3;
      }
    `,
    ...KlikUiButton.notificationStyles
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'klik-ui-button': KlikUiButton;
  }
}

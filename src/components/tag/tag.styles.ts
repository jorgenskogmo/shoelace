import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    cursor: default;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Type modifiers
   */

  .tag--primary {
    background-color: rgb(var(--klik-color-primary-50));
    border-color: rgb(var(--klik-color-primary-200));
    color: rgb(var(--klik-color-primary-800));
  }

  .tag--success {
    background-color: rgb(var(--klik-color-success-50));
    border-color: rgb(var(--klik-color-success-200));
    color: rgb(var(--klik-color-success-800));
  }

  .tag--neutral {
    background-color: rgb(var(--klik-color-neutral-50));
    border-color: rgb(var(--klik-color-neutral-200));
    color: rgb(var(--klik-color-neutral-800));
  }

  .tag--warning {
    background-color: rgb(var(--klik-color-warning-50));
    border-color: rgb(var(--klik-color-warning-200));
    color: rgb(var(--klik-color-warning-800));
  }

  .tag--danger {
    background-color: rgb(var(--klik-color-danger-50));
    border-color: rgb(var(--klik-color-danger-200));
    color: rgb(var(--klik-color-danger-800));
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--klik-button-font-size-small);
    height: calc(var(--klik-input-height-small) * 0.8);
    line-height: calc(var(--klik-input-height-small) - var(--klik-input-border-width) * 2);
    border-radius: var(--klik-input-border-radius-small);
    padding: 0 var(--klik-spacing-x-small);
  }

  .tag--small .tag__remove {
    margin-left: var(--klik-spacing-2x-small);
    margin-right: calc(-1 * var(--klik-spacing-3x-small));
  }

  .tag--medium {
    font-size: var(--klik-button-font-size-medium);
    height: calc(var(--klik-input-height-medium) * 0.8);
    line-height: calc(var(--klik-input-height-medium) - var(--klik-input-border-width) * 2);
    border-radius: var(--klik-input-border-radius-medium);
    padding: 0 var(--klik-spacing-small);
  }

  .tag__remove {
    margin-left: var(--klik-spacing-2x-small);
    margin-right: calc(-1 * var(--klik-spacing-2x-small));
  }

  .tag--large {
    font-size: var(--klik-button-font-size-large);
    height: calc(var(--klik-input-height-large) * 0.8);
    line-height: calc(var(--klik-input-height-large) - var(--klik-input-border-width) * 2);
    border-radius: var(--klik-input-border-radius-large);
    padding: 0 var(--klik-spacing-medium);
  }

  .tag__remove {
    margin-left: var(--klik-spacing-2x-small);
    margin-right: calc(-1 * var(--klik-spacing-x-small));
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--klik-border-radius-pill);
  }
`;

import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: rgb(var(--klik-surface-base-alt));
    border: solid var(--klik-panel-border-width) rgb(var(--klik-panel-border-color));
    border-top-width: calc(var(--klik-panel-border-width) * 3);
    border-radius: var(--klik-border-radius-medium);
    box-shadow: var(--box-shadow);
    font-family: var(--klik-font-sans);
    font-size: var(--klik-font-size-small);
    font-weight: var(--klik-font-weight-normal);
    line-height: 1.6;
    color: rgb(var(--klik-color-neutral-700));
    margin: inherit;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--klik-font-size-large);
  }

  .alert__icon ::slotted(*) {
    margin-left: var(--klik-spacing-large);
  }

  .alert--primary {
    border-top-color: rgb(var(--klik-color-primary-600));
  }

  .alert--primary .alert__icon {
    color: rgb(var(--klik-color-primary-600));
  }

  .alert--success {
    border-top-color: rgb(var(--klik-color-success-600));
  }

  .alert--success .alert__icon {
    color: rgb(var(--klik-color-success-600));
  }

  .alert--neutral {
    border-top-color: rgb(var(--klik-color-neutral-600));
  }

  .alert--neutral .alert__icon {
    color: rgb(var(--klik-color-neutral-600));
  }

  .alert--warning {
    border-top-color: rgb(var(--klik-color-warning-600));
  }

  .alert--warning .alert__icon {
    color: rgb(var(--klik-color-warning-600));
  }

  .alert--danger {
    border-top-color: rgb(var(--klik-color-danger-600));
  }

  .alert--danger .alert__icon {
    color: rgb(var(--klik-color-danger-600));
  }

  .alert__message {
    flex: 1 1 auto;
    padding: var(--klik-spacing-large);
    overflow: hidden;
  }

  .alert__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--klik-font-size-large);
    padding-right: var(--klik-spacing-medium);
  }
`;

import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
import { focusVisibleSelector } from '../../internal/focus-visible';

export default css`
  ${componentStyles}

  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--klik-font-sans);
    font-size: var(--klik-font-size-small);
    font-weight: var(--klik-font-weight-semibold);
    color: rgb(var(--klik-color-neutral-600));
    line-height: var(--klik-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--klik-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--klik-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: rgb(var(--klik-color-primary-600));
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: rgb(var(--klik-color-primary-500));
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: rgb(var(--klik-color-primary-600));
  }

  .breadcrumb-item__label${focusVisibleSelector} {
    outline: none;
    box-shadow: var(--klik-focus-ring);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-right: var(--klik-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-left: var(--klik-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--klik-spacing-x-small);
    user-select: none;
  }
`;

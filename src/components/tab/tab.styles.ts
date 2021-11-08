import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
import { focusVisibleSelector } from '../../internal/focus-visible';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--klik-font-sans);
    font-size: var(--klik-font-size-small);
    font-weight: var(--klik-font-weight-semibold);
    border-radius: var(--klik-border-radius-medium);
    color: rgb(var(--klik-color-neutral-600));
    padding: var(--klik-spacing-medium) var(--klik-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: rgb(var(--klik-color-primary-600));
  }

  .tab:focus {
    outline: none;
  }

  .tab${focusVisibleSelector}:not(.tab--disabled) {
    color: rgb(var(--klik-color-primary-600));
    box-shadow: inset var(--klik-focus-ring);
  }

  .tab.tab--active:not(.tab--disabled) {
    color: rgb(var(--klik-color-primary-600));
  }

  .tab.tab--closable {
    padding-right: var(--klik-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--klik-font-size-large);
    margin-left: var(--klik-spacing-2x-small);
  }

  .tab__close-button::part(base) {
    padding: var(--klik-spacing-3x-small);
  }
`;

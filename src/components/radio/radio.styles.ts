import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
import { focusVisibleSelector } from '../../internal/focus-visible';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .radio {
    display: inline-flex;
    align-items: center;
    font-family: var(--klik-input-font-family);
    font-size: var(--klik-input-font-size-medium);
    font-weight: var(--klik-input-font-weight);
    color: rgb(var(--klik-input-color));
    vertical-align: middle;
    cursor: pointer;
  }

  .radio__icon {
    display: inline-flex;
    width: var(--klik-toggle-size);
    height: var(--klik-toggle-size);
  }

  .radio__icon svg {
    width: 100%;
    height: 100%;
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--klik-toggle-size);
    height: var(--klik-toggle-size);
    border: solid var(--klik-input-border-width) rgb(var(--klik-input-border-color));
    border-radius: 50%;
    background-color: rgb(var(--klik-input-background-color));
    color: transparent;
    transition: var(--klik-transition-fast) border-color, var(--klik-transition-fast) background-color,
      var(--klik-transition-fast) color, var(--klik-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: rgb(var(--klik-input-border-color-hover));
    background-color: rgb(var(--klik-input-background-color-hover));
  }

  /* Focus */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__input${focusVisibleSelector} ~ .radio__control {
    border-color: rgb(var(--klik-input-border-color-focus));
    background-color: rgb(var(--klik-input-background-color-focus));
    box-shadow: 0 0 0 var(--klik-focus-ring-width) rgb(var(--klik-color-primary-500) / var(--klik-focus-ring-alpha));
  }

  /* Checked */
  .radio--checked .radio__control {
    color: rgb(var(--klik-color-neutral-0));
    border-color: rgb(var(--klik-color-primary-600));
    background-color: rgb(var(--klik-color-primary-600));
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: rgb(var(--klik-color-primary-500));
    background-color: rgb(var(--klik-color-primary-500));
  }

  /* Checked + focus */
  .radio.radio--checked:not(.radio--disabled) .radio__input${focusVisibleSelector} ~ .radio__control {
    border-color: rgb(var(--klik-color-primary-500));
    background-color: rgb(var(--klik-color-primary-500));
    box-shadow: 0 0 0 var(--klik-focus-ring-width) rgb(var(--klik-color-primary-500) / var(--klik-focus-ring-alpha));
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    line-height: var(--klik-toggle-size);
    margin-left: 0.5em;
    user-select: none;
  }
`;

import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
import { focusVisibleSelector } from '../../internal/focus-visible';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .checkbox {
    display: inline-flex;
    align-items: center;
    font-family: var(--klik-input-font-family);
    font-size: var(--klik-input-font-size-medium);
    font-weight: var(--klik-input-font-weight);
    color: rgb(var(--klik-input-color));
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--klik-toggle-size);
    height: var(--klik-toggle-size);
    border: solid var(--klik-input-border-width) rgb(var(--klik-input-border-color));
    border-radius: 2px;
    background-color: rgb(var(--klik-input-background-color));
    color: rgb(var(--klik-color-neutral-0));
    transition: var(--klik-transition-fast) border-color, var(--klik-transition-fast) background-color,
      var(--klik-transition-fast) color, var(--klik-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__control .checkbox__icon {
    display: inline-flex;
    width: var(--klik-toggle-size);
    height: var(--klik-toggle-size);
  }

  .checkbox__control .checkbox__icon svg {
    width: 100%;
    height: 100%;
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: rgb(var(--klik-input-border-color-hover));
    background-color: rgb(var(--klik-input-background-color-hover));
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled)
    .checkbox__input${focusVisibleSelector}
    ~ .checkbox__control {
    border-color: rgb(var(--klik-input-border-color-focus));
    background-color: rgb(var(--klik-input-background-color-focus));
    box-shadow: var(--klik-focus-ring);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: rgb(var(--klik-color-primary-600));
    background-color: rgb(var(--klik-color-primary-600));
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: rgb(var(--klik-color-primary-500));
    background-color: rgb(var(--klik-color-primary-500));
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input${focusVisibleSelector} ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled)
    .checkbox__input${focusVisibleSelector}
    ~ .checkbox__control {
    border-color: rgb(var(--klik-color-primary-500));
    background-color: rgb(var(--klik-color-primary-500));
    box-shadow: var(--klik-focus-ring);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    line-height: var(--klik-toggle-size);
    margin-left: 0.5em;
    user-select: none;
  }
`;

import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
import formControlStyles from '../../styles/form-control.styles';

export default css`
  ${componentStyles}
  ${formControlStyles}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--klik-input-font-family);
    font-weight: var(--klik-input-font-weight);
    letter-spacing: var(--klik-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--klik-transition-fast) color, var(--klik-transition-fast) border,
      var(--klik-transition-fast) box-shadow, var(--klik-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: rgb(var(--klik-input-background-color));
    border: solid var(--klik-input-border-width) rgb(var(--klik-input-border-color));
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: rgb(var(--klik-input-background-color-hover));
    border-color: rgb(var(--klik-input-border-color-hover));
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: rgb(var(--klik-input-background-color-focus));
    border-color: rgb(var(--klik-input-border-color-focus));
    box-shadow: var(--klik-focus-ring);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: rgb(var(--klik-input-color-focus));
  }

  .input--standard.input--disabled {
    background-color: rgb(var(--klik-input-background-color-disabled));
    border-color: rgb(var(--klik-input-border-color-disabled));
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: rgb(var(--klik-input-color-disabled));
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: rgb(var(--klik-input-placeholder-color-disabled));
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: rgb(var(--klik-input-filled-background-color));
    color: rgb(var(--klik-input-color));
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: rgb(var(--klik-input-filled-background-color-hover));
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: rgb(var(--klik-input-filled-background-color-focus));
    box-shadow: var(--klik-focus-ring);
  }

  .input--filled.input--disabled {
    background-color: rgb(var(--klik-input-filled-background-color-disabled));
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: rgb(var(--klik-input-color));
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--klik-input-height-large) rgb(var(--klik-input-background-color-hover)) inset !important;
    -webkit-text-fill-color: rgb(var(--klik-color-primary-500));
  }

  .input__control::placeholder {
    color: rgb(var(--klik-input-placeholder-color));
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: rgb(var(--klik-input-color-hover));
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(klik-icon),
  .input__suffix ::slotted(klik-icon) {
    color: rgb(var(--klik-input-icon-color));
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--klik-input-border-radius-small);
    font-size: var(--klik-input-font-size-small);
    height: var(--klik-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--klik-input-height-small) - var(--klik-input-border-width) * 2);
    margin: 0 var(--klik-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    margin-right: var(--klik-input-spacing-small);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-left: var(--klik-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-right: var(--klik-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--klik-input-border-radius-medium);
    font-size: var(--klik-input-font-size-medium);
    height: var(--klik-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--klik-input-height-medium) - var(--klik-input-border-width) * 2);
    margin: 0 var(--klik-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    margin-right: var(--klik-input-spacing-medium);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-left: var(--klik-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-right: var(--klik-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--klik-input-border-radius-large);
    font-size: var(--klik-input-font-size-large);
    height: var(--klik-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--klik-input-height-large) - var(--klik-input-border-width) * 2);
    margin: 0 var(--klik-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    margin-right: var(--klik-input-spacing-large);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-left: var(--klik-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-right: var(--klik-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--klik-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--klik-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--klik-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    font-size: inherit;
    color: rgb(var(--klik-input-icon-color));
    border: none;
    background: none;
    padding: 0;
    transition: var(--klik-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: rgb(var(--klik-input-icon-color-hover));
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }
`;

import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
import formControlStyles from '../../styles/form-control.styles';

export default css`
  ${componentStyles}
  ${formControlStyles}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--klik-input-font-family);
    font-weight: var(--klik-input-font-weight);
    line-height: var(--klik-line-height-normal);
    letter-spacing: var(--klik-input-letter-spacing);
    vertical-align: middle;
    transition: var(--klik-transition-fast) color, var(--klik-transition-fast) border,
      var(--klik-transition-fast) box-shadow, var(--klik-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: rgb(var(--klik-input-background-color));
    border: solid var(--klik-input-border-width) rgb(var(--klik-input-border-color));
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: rgb(var(--klik-input-background-color-hover));
    border-color: rgb(var(--klik-input-border-color-hover));
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: rgb(var(--klik-input-color-hover));
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: rgb(var(--klik-input-background-color-focus));
    border-color: rgb(var(--klik-input-border-color-focus));
    box-shadow: 0 0 0 var(--klik-focus-ring-width) rgb(var(--klik-color-primary-500) / var(--klik-focus-ring-alpha));
    color: rgb(var(--klik-input-color-focus));
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: rgb(var(--klik-input-color-focus));
  }

  .textarea--standard.textarea--disabled {
    background-color: rgb(var(--klik-input-background-color-disabled));
    border-color: rgb(var(--klik-input-border-color-disabled));
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: rgb(var(--klik-input-color-disabled));
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: rgb(var(--klik-input-placeholder-color-disabled));
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: rgb(var(--klik-input-filled-background-color));
    color: rgb(var(--klik-input-color));
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: rgb(var(--klik-input-filled-background-color-hover));
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: rgb(var(--klik-input-filled-background-color-focus));
    box-shadow: var(--klik-focus-ring);
  }

  .textarea--filled.textarea--disabled {
    background-color: rgb(var(--klik-input-filled-background-color-disabled));
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: rgb(var(--klik-input-color));
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: rgb(var(--klik-input-placeholder-color));
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--klik-input-border-radius-small);
    font-size: var(--klik-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--klik-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--klik-input-border-radius-medium);
    font-size: var(--klik-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--klik-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--klik-input-border-radius-large);
    font-size: var(--klik-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--klik-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
  }
`;

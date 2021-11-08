import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
import formControlStyles from '../../styles/form-control.styles';

export default css`
  ${componentStyles}
  ${formControlStyles}

  :host {
    display: block;
  }

  .select {
    display: block;
  }

  .select__control {
    display: inline-flex;
    align-items: center;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--klik-input-font-family);
    font-weight: var(--klik-input-font-weight);
    letter-spacing: var(--klik-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    transition: var(--klik-transition-fast) color, var(--klik-transition-fast) border,
      var(--klik-transition-fast) box-shadow;
    cursor: pointer;
  }

  .select__menu {
    max-height: 50vh;
    overflow: auto;
  }

  /* Standard selects */
  .select--standard .select__control {
    background-color: rgb(var(--klik-input-background-color));
    border: solid var(--klik-input-border-width) rgb(var(--klik-input-border-color));
    color: rgb(var(--klik-input-color));
  }

  .select--standard:not(.select--disabled) .select__control:hover {
    background-color: rgb(var(--klik-input-background-color-hover));
    border-color: rgb(var(--klik-input-border-color-hover));
    color: rgb(var(--klik-input-color-hover));
  }

  .select--standard.select--focused:not(.select--disabled) .select__control {
    background-color: rgb(var(--klik-input-background-color-focus));
    border-color: rgb(var(--klik-input-border-color-focus));
    box-shadow: var(--klik-focus-ring);
    outline: none;
    color: rgb(var(--klik-input-color-focus));
  }

  .select--standard.select--disabled .select__control {
    background-color: rgb(var(--klik-input-background-color-disabled));
    border-color: rgb(var(--klik-input-border-color-disabled));
    color: rgb(var(--klik-input-color-disabled));
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  /* Filled selects */
  .select--filled .select__control {
    border: none;
    background-color: rgb(var(--klik-input-filled-background-color));
    color: rgb(var(--klik-input-color));
  }

  .select--filled:hover:not(.select--disabled) .select__control {
    background-color: rgb(var(--klik-input-filled-background-color-hover));
  }

  .select--filled.select--focused:not(.select--disabled) .select__control {
    background-color: rgb(var(--klik-input-filled-background-color-focus));
    box-shadow: var(--klik-focus-ring);
  }

  .select--filled.select--disabled .select__control {
    background-color: rgb(var(--klik-input-filled-background-color-disabled));
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--disabled .select__tags,
  .select--disabled .select__clear {
    pointer-events: none;
  }

  .select__prefix {
    display: inline-flex;
    align-items: center;
    color: rgb(var(--klik-input-placeholder-color));
  }

  .select__label {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    user-select: none;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .select__label::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .select__clear {
    flex: 0 0 auto;
    width: 1.25em;
  }

  .select__suffix {
    display: inline-flex;
    align-items: center;
    color: rgb(var(--klik-input-placeholder-color));
  }

  .select__icon {
    flex: 0 0 auto;
    display: inline-flex;
    transition: var(--klik-transition-medium) transform ease;
  }

  .select--open .select__icon {
    transform: rotate(-180deg);
  }

  /* Placeholder */
  .select--placeholder-visible .select__label {
    color: rgb(var(--klik-input-placeholder-color));
  }

  .select--disabled.select--placeholder-visible .select__label {
    color: rgb(var(--klik-input-placeholder-color-disabled));
  }

  /* Tags */
  .select__tags {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: left;
    margin-left: var(--klik-spacing-2x-small);
  }

  /* Hidden input (for form control validation to show) */
  .select__hidden-select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }

  /*
   * Size modifiers
   */

  /* Small */
  .select--small .select__control {
    border-radius: var(--klik-input-border-radius-small);
    font-size: var(--klik-input-font-size-small);
    min-height: var(--klik-input-height-small);
  }

  .select--small .select__prefix ::slotted(*) {
    margin-left: var(--klik-input-spacing-small);
  }

  .select--small .select__label {
    margin: 0 var(--klik-input-spacing-small);
  }

  .select--small .select__clear {
    margin-right: var(--klik-input-spacing-small);
  }

  .select--small .select__suffix ::slotted(*) {
    margin-right: var(--klik-input-spacing-small);
  }

  .select--small .select__icon {
    margin-right: var(--klik-input-spacing-small);
  }

  .select--small .select__tags {
    padding-bottom: 2px;
  }

  .select--small .select__tags klik-tag {
    padding-top: 2px;
  }

  .select--small .select__tags klik-tag:not(:last-of-type) {
    margin-right: var(--klik-spacing-2x-small);
  }

  .select--small.select--has-tags .select__label {
    margin-left: 0;
  }

  /* Medium */
  .select--medium .select__control {
    border-radius: var(--klik-input-border-radius-medium);
    font-size: var(--klik-input-font-size-medium);
    min-height: var(--klik-input-height-medium);
  }

  .select--medium .select__prefix ::slotted(*) {
    margin-left: var(--klik-input-spacing-medium);
  }

  .select--medium .select__label {
    margin: 0 var(--klik-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-right: var(--klik-input-spacing-medium);
  }

  .select--medium .select__suffix ::slotted(*) {
    margin-right: var(--klik-input-spacing-medium);
  }

  .select--medium .select__icon {
    margin-right: var(--klik-input-spacing-medium);
  }

  .select--medium .select__tags {
    padding-bottom: 3px;
  }

  .select--medium .select__tags klik-tag {
    padding-top: 3px;
  }

  .select--medium .select__tags klik-tag:not(:last-of-type) {
    margin-right: var(--klik-spacing-2x-small);
  }

  .select--medium.select--has-tags .select__label {
    margin-left: 0;
  }

  /* Large */
  .select--large .select__control {
    border-radius: var(--klik-input-border-radius-large);
    font-size: var(--klik-input-font-size-large);
    min-height: var(--klik-input-height-large);
  }

  .select--large .select__prefix ::slotted(*) {
    margin-left: var(--klik-input-spacing-large);
  }

  .select--large .select__label {
    margin: 0 var(--klik-input-spacing-large);
  }

  .select--large .select__clear {
    margin-right: var(--klik-input-spacing-large);
  }

  .select--large .select__suffix ::slotted(*) {
    margin-right: var(--klik-input-spacing-large);
  }

  .select--large .select__icon {
    margin-right: var(--klik-input-spacing-large);
  }

  .select--large .select__tags {
    padding-bottom: 4px;
  }
  .select--large .select__tags klik-tag {
    padding-top: 4px;
  }

  .select--large .select__tags klik-tag:not(:last-of-type) {
    margin-right: var(--klik-spacing-2x-small);
  }

  .select--large.select--has-tags .select__label {
    margin-left: 0;
  }

  /*
   * Pill modifier
   */
  .select--pill.select--small .select__control {
    border-radius: var(--klik-input-height-small);
  }

  .select--pill.select--medium .select__control {
    border-radius: var(--klik-input-height-medium);
  }

  .select--pill.select--large .select__control {
    border-radius: var(--klik-input-height-large);
  }
`;

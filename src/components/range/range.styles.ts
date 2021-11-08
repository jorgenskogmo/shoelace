import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
import formControlStyles from '../../styles/form-control.styles';
import { focusVisibleSelector } from '../../internal/focus-visible';

export default css`
  ${componentStyles}
  ${formControlStyles}

  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: rgb(var(--klik-color-neutral-200));
    --track-color-inactive: rgb(var(--klik-color-neutral-200));
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--klik-input-height-medium);
    vertical-align: middle;
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: rgb(var(--klik-color-primary-600));
    border: solid var(--klik-input-border-width) rgb(var(--klik-color-primary-600));
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    transition: var(--klik-transition-fast) border-color, var(--klik-transition-fast) background-color,
      var(--klik-transition-fast) color, var(--klik-transition-fast) box-shadow, var(--klik-transition-fast) transform;
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: rgb(var(--klik-color-primary-500));
    border-color: rgb(var(--klik-color-primary-500));
  }

  .range__control:enabled${focusVisibleSelector}::-webkit-slider-thumb {
    background-color: rgb(var(--klik-color-primary-500));
    border-color: rgb(var(--klik-color-primary-500));
    box-shadow: var(--klik-focus-ring);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: rgb(var(--klik-color-primary-500));
    border-color: rgb(var(--klik-color-primary-500));
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: rgb(var(--klik-color-primary-600));
    border-color: rgb(var(--klik-color-primary-600));
    transition: var(--klik-transition-fast) border-color, var(--klik-transition-fast) background-color,
      var(--klik-transition-fast) color, var(--klik-transition-fast) box-shadow, var(--klik-transition-fast) transform;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: rgb(var(--klik-color-primary-500));
    border-color: rgb(var(--klik-color-primary-500));
  }

  .range__control:enabled${focusVisibleSelector}::-moz-range-thumb {
    background-color: rgb(var(--klik-color-primary-500));
    border-color: rgb(var(--klik-color-primary-500));
    box-shadow: var(--klik-focus-ring);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: rgb(var(--klik-color-primary-500));
    border-color: rgb(var(--klik-color-primary-500));
    cursor: grabbing;
  }

  /* States */
  .range__control${focusVisibleSelector} {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--klik-z-index-tooltip);
    left: 1px;
    border-radius: var(--klik-tooltip-border-radius);
    background-color: rgb(var(--klik-tooltip-background-color));
    font-family: var(--klik-tooltip-font-family);
    font-size: var(--klik-tooltip-font-size);
    font-weight: var(--klik-tooltip-font-weight);
    line-height: var(--klik-tooltip-line-height);
    color: rgb(var(--klik-tooltip-color));
    opacity: 0;
    padding: var(--klik-tooltip-padding);
    transition: var(--klik-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    margin-left: calc(-1 * var(--klik-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--klik-tooltip-arrow-size) solid rgb(var(--klik-tooltip-background-color));
    border-left: var(--klik-tooltip-arrow-size) solid transparent;
    border-right: var(--klik-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--klik-tooltip-arrow-size) solid rgb(var(--klik-tooltip-background-color));
    border-left: var(--klik-tooltip-arrow-size) solid transparent;
    border-right: var(--klik-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }
`;

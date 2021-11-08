import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip-positioner {
    position: absolute;
    z-index: var(--klik-z-index-tooltip);
    pointer-events: none;
  }

  .tooltip {
    max-width: var(--max-width);
    border-radius: var(--klik-tooltip-border-radius);
    background-color: rgb(var(--klik-tooltip-background-color));
    font-family: var(--klik-tooltip-font-family);
    font-size: var(--klik-tooltip-font-size);
    font-weight: var(--klik-tooltip-font-weight);
    line-height: var(--klik-tooltip-line-height);
    color: rgb(var(--klik-tooltip-color));
    padding: var(--klik-tooltip-padding);
  }

  .tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
  }

  .tooltip-positioner[data-popper-placement^='top'] .tooltip {
    transform-origin: bottom;
  }

  .tooltip-positioner[data-popper-placement^='bottom'] .tooltip {
    transform-origin: top;
  }

  .tooltip-positioner[data-popper-placement^='left'] .tooltip {
    transform-origin: right;
  }

  .tooltip-positioner[data-popper-placement^='right'] .tooltip {
    transform-origin: left;
  }

  /* Arrow + bottom */
  .tooltip-positioner[data-popper-placement^='bottom'] .tooltip:after {
    bottom: 100%;
    left: calc(50% - var(--klik-tooltip-arrow-size));
    border-bottom: var(--klik-tooltip-arrow-size) solid rgb(var(--klik-tooltip-background-color));
    border-left: var(--klik-tooltip-arrow-size) solid transparent;
    border-right: var(--klik-tooltip-arrow-size) solid transparent;
  }

  .tooltip-positioner[data-popper-placement='bottom-start'] .tooltip:after {
    left: var(--klik-tooltip-arrow-start-end-offset);
  }

  .tooltip-positioner[data-popper-placement='bottom-end'] .tooltip:after {
    right: var(--klik-tooltip-arrow-start-end-offset);
    left: auto;
  }

  /* Arrow + top */
  .tooltip-positioner[data-popper-placement^='top'] .tooltip:after {
    top: 100%;
    left: calc(50% - var(--klik-tooltip-arrow-size));
    border-top: var(--klik-tooltip-arrow-size) solid rgb(var(--klik-tooltip-background-color));
    border-left: var(--klik-tooltip-arrow-size) solid transparent;
    border-right: var(--klik-tooltip-arrow-size) solid transparent;
  }

  .tooltip-positioner[data-popper-placement='top-start'] .tooltip:after {
    left: var(--klik-tooltip-arrow-start-end-offset);
  }

  .tooltip-positioner[data-popper-placement='top-end'] .tooltip:after {
    right: var(--klik-tooltip-arrow-start-end-offset);
    left: auto;
  }

  /* Arrow + left */
  .tooltip-positioner[data-popper-placement^='left'] .tooltip:after {
    top: calc(50% - var(--klik-tooltip-arrow-size));
    left: 100%;
    border-left: var(--klik-tooltip-arrow-size) solid rgb(var(--klik-tooltip-background-color));
    border-top: var(--klik-tooltip-arrow-size) solid transparent;
    border-bottom: var(--klik-tooltip-arrow-size) solid transparent;
  }

  .tooltip-positioner[data-popper-placement='left-start'] .tooltip:after {
    top: var(--klik-tooltip-arrow-start-end-offset);
  }

  .tooltip-positioner[data-popper-placement='left-end'] .tooltip:after {
    top: auto;
    bottom: var(--klik-tooltip-arrow-start-end-offset);
  }

  /* Arrow + right */
  .tooltip-positioner[data-popper-placement^='right'] .tooltip:after {
    top: calc(50% - var(--klik-tooltip-arrow-size));
    right: 100%;
    border-right: var(--klik-tooltip-arrow-size) solid rgb(var(--klik-tooltip-background-color));
    border-top: var(--klik-tooltip-arrow-size) solid transparent;
    border-bottom: var(--klik-tooltip-arrow-size) solid transparent;
  }

  .tooltip-positioner[data-popper-placement='right-start'] .tooltip:after {
    top: var(--klik-tooltip-arrow-start-end-offset);
  }

  .tooltip-positioner[data-popper-placement='right-end'] .tooltip:after {
    top: auto;
    bottom: var(--klik-tooltip-arrow-start-end-offset);
  }
`;

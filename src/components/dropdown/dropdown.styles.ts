import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .dropdown {
    position: relative;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__positioner {
    position: absolute;
    z-index: var(--klik-z-index-dropdown);
  }

  .dropdown__panel {
    max-height: 75vh;
    font-family: var(--klik-font-sans);
    font-size: var(--klik-font-size-medium);
    font-weight: var(--klik-font-weight-normal);
    color: var(--color);
    background-color: rgb(var(--klik-panel-background-color));
    border: solid var(--klik-panel-border-width) rgb(var(--klik-panel-border-color));
    border-radius: var(--klik-border-radius-medium);
    box-shadow: var(--klik-shadow-large);
    overflow: auto;
    overscroll-behavior: none;
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    pointer-events: all;
  }

  .dropdown__positioner[data-popper-placement^='top'] .dropdown__panel {
    transform-origin: bottom;
  }

  .dropdown__positioner[data-popper-placement^='bottom'] .dropdown__panel {
    transform-origin: top;
  }

  .dropdown__positioner[data-popper-placement^='left'] .dropdown__panel {
    transform-origin: right;
  }

  .dropdown__positioner[data-popper-placement^='right'] .dropdown__panel {
    transform-origin: left;
  }
`;

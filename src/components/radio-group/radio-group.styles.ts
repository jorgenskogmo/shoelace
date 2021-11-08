import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .radio-group {
    border: solid var(--klik-panel-border-width) rgb(var(--klik-panel-border-color));
    border-radius: var(--klik-border-radius-medium);
    padding: var(--klik-spacing-large);
    padding-top: var(--klik-spacing-x-small);
  }

  .radio-group .radio-group__label {
    font-family: var(--klik-input-font-family);
    font-size: var(--klik-input-font-size-medium);
    font-weight: var(--klik-input-font-weight);
    color: rgb(var(--klik-input-color));
    padding: 0 var(--klik-spacing-2x-small);
  }

  ::slotted(klik-radio:not(:last-of-type)) {
    display: block;
    margin-bottom: var(--klik-spacing-2x-small);
  }

  .radio-group:not(.radio-group--has-fieldset) {
    border: none;
    padding: 0;
    margin: 0;
    min-width: 0;
  }

  .radio-group:not(.radio-group--has-fieldset) .radio-group__label {
    position: absolute;
    width: 0;
    height: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }
`;

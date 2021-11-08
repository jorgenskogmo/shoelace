import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .menu-label {
    font-family: var(--klik-font-sans);
    font-size: var(--klik-font-size-small);
    font-weight: var(--klik-font-weight-semibold);
    line-height: var(--klik-line-height-normal);
    letter-spacing: var(--klik-letter-spacing-normal);
    color: rgb(var(--klik-color-neutral-500));
    padding: var(--klik-spacing-2x-small) var(--klik-spacing-x-large);
    user-select: none;
  }
`;

import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .menu {
    padding: var(--klik-spacing-x-small) 0;
  }

  ::slotted(klik-divider) {
    --spacing: var(--klik-spacing-x-small);
  }
`;

import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --color: rgb(var(--klik-panel-border-color));
    --width: var(--klik-panel-border-width);
    --spacing: var(--klik-spacing-medium);
  }

  :host(:not([vertical])) .menu-divider {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    height: 100%;
  }

  :host([vertical]) .menu-divider {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`;

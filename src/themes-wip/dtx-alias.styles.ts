import { css } from 'lit';

/**
 * Map Globals to Aliasas
 *
 * Left-hand keys  : --dt-alias-*
 * Right-hand keys : --dt-global-* or hardcoded value
 *
 * */

export default css`
  :root {
    font-size: 16px;
    font-feature-settings: 'kern';
    -webkit-font-smoothing: antialiased;

    --dt-alias-fontfamily-sans: 'Cera Pro';
    --dt-alias-fontfamily-input: 'Cera Pro';

    --dt-alias-color-primary-interaction: var(--dt-global-klik-color-light-blue-500);
    --dt-alias-color-primary-interaction-hover: var(--dt-global-klik-color-light-blue-600);
    --dt-alias-color-primary-interaction-text: var(--dt-global-klik-color-white);
  }
`;

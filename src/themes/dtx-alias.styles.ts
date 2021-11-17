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
    --dt-alias-primary-interaction-color: var(--dt-global-color-light-blue-500);
    --dt-alias-primary-interaction-color-hover: var(--dt-global-color-light-blue-600);
    --dt-alias-primary-interaction-color-contrast: var(--dt-global-color-white);
  }
`;

import { css } from 'lit';

/**
 * Map Aliases to Component Styles
 *
 * Left-hand keys  : --klik-*
 * Right-hand keys : --dt-alias-*
 *
 * See dtx-defaults-* for keys to redefine/link
 */

export default css`
  :root {
    --dt-input-primary-interaction-color: var(--dt-alias-primary-interaction-color);
    --dt-input-primary-interaction-color-hover: var(--dt-alias-primary-interaction-color-hover);
    --dt-input-primary-interaction-color-contrast: var(--dt-alias-primary-interaction-color-contrast);

    --klik-button-text-color: var(--dt-global-color-white);

    /* Colors */
    --klik-color-neutral-50: var(--dt-global-klik-color-light-blue-50);
    --klik-color-neutral-100: var(--dt-global-klik-color-light-blue-100);
    --klik-color-neutral-200: var(--dt-global-klik-color-light-blue-200);
    --klik-color-neutral-300: var(--dt-global-klik-color-light-blue-300);
    --klik-color-neutral-400: var(--dt-global-klik-color-light-blue-400);
    --klik-color-neutral-500: var(--dt-global-klik-color-light-blue-500);
    --klik-color-neutral-600: var(--dt-global-klik-color-light-blue-600);
    --klik-color-neutral-700: var(--dt-global-klik-color-light-blue-700);
    --klik-color-neutral-800: var(--dt-global-klik-color-light-blue-800);
    --klik-color-neutral-900: var(--dt-global-klik-color-light-blue-900);
  }
`;

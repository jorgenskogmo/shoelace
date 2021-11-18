import { css } from 'lit';

/**
 * Map Aliases to Component Styles
 *
 * Left-hand keys  : --klik-*
 * Right-hand keys : --dt-alias-* (or --dt-global-* if used without alias layer)
 *
 * See dtx-defaults-* for keys to redefine/link
 */

export default css`
  :root {
    /* typo */
    --klik-font-sans: var(--dt-alias-fontfamily-sans);
    --klik-input-font-family: var(--dt-alias-fontfamily-input);

    /* primary interaction */
    --klik-color-primary-interaction: var(--dt-alias-color-primary-interaction);
    --klik-color-primary-interaction-hover: var(--dt-alias-color-primary-interaction-hover);
    --klik-color-primary-interaction-text: var(--dt-alias-color-primary-interaction-text);

    /* buttons */
    --klik-button-shadow: var(--dt-global-klikui-shadows-button);
    --klik-button-outline-background-hover: var(--dt-global-klik-color-slate-50);

    --klik-button-font-size-small: var(--klik-font-size-small);
    --klik-button-font-size-medium: 1.125rem; /* var(--klik-font-size-medium); */
    --klik-button-font-size-large: var(--klik-font-size-large);

    /* Colors
    --klik-color-neutral-0: 255 0 0;
    --klik-color-neutral-50: var(--dt-global-klik-color-light-blue-50);
    --klik-color-neutral-100: var(--dt-global-klik-color-light-blue-100);
    --klik-color-neutral-200: var(--dt-global-klik-color-light-blue-200);
    --klik-color-neutral-300: var(--dt-global-klik-color-light-blue-300);
    --klik-color-neutral-400: var(--dt-global-klik-color-light-blue-400);
    --klik-color-neutral-500: var(--dt-global-klik-color-light-blue-500);
    --klik-color-neutral-600: var(--dt-global-klik-color-light-blue-600);
    --klik-color-neutral-700: var(--dt-global-klik-color-light-blue-700);
    --klik-color-neutral-800: var(--dt-global-klik-color-light-blue-800);
    --klik-color-neutral-900: var(--dt-global-klik-color-light-blue-900);  */
  }
`;

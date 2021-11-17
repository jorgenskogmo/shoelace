import { css } from 'lit';

/**
 * A complete set of defaults for all exposed component keys
 *
 * To redefine a value, add the key(s) to dtx-map (and ideally dtx-alias)
 */

export default css`
  :root,
  :host,
  .klik-theme-light {
    /*
     * Buttons
    */

    --klik-button-outline-border-width: 2px;

    /*
     * Border radii
     */

    --klik-border-radius-small: 0.125rem; /* 2px */
    --klik-border-radius-medium: 0.25rem; /* 4px */
    --klik-border-radius-large: 0.5rem; /* 8px */
    --klik-border-radius-x-large: 1rem; /* 16px */

    --klik-border-radius-circle: 50%;
    --klik-border-radius-pill: 9999px;

    /*
     * Elevations
     */

    --klik-shadow-x-small: 0 1px 2px rgb(var(--klik-color-neutral-500) / 6%);
    --klik-shadow-small: 0 1px 2px rgb(var(--klik-color-neutral-500) / 12%);
    --klik-shadow-medium: 0 2px 4px rgb(var(--klik-color-neutral-500) / 12%);
    --klik-shadow-large: 0 2px 8px rgb(var(--klik-color-neutral-500) / 12%);
    --klik-shadow-x-large: 0 4px 16px rgb(var(--klik-color-neutral-500) / 12%);

    /*
     * Surfaces
     */

    --klik-surface-base: var(--klik-color-neutral-0);
    --klik-surface-base-alt: var(--klik-color-neutral-0);

    /*
     * Spacings
     */

    --klik-spacing-3x-small: 0.125rem; /* 2px */
    --klik-spacing-2x-small: 0.25rem; /* 4px */
    --klik-spacing-x-small: 0.5rem; /* 8px */
    --klik-spacing-small: 0.75rem; /* 12px */
    --klik-spacing-medium: 1rem; /* 16px */
    --klik-spacing-large: 1.25rem; /* 20px */
    --klik-spacing-x-large: 1.75rem; /* 28px */
    --klik-spacing-2x-large: 2.25rem; /* 36px */
    --klik-spacing-3x-large: 3rem; /* 48px */
    --klik-spacing-4x-large: 4.5rem; /* 72px */

    /*
     * Transitions
     */

    --klik-transition-x-slow: 1000ms;
    --klik-transition-slow: 500ms;
    --klik-transition-medium: 250ms;
    --klik-transition-fast: 150ms;
    --klik-transition-x-fast: 50ms;

    /*
     * Typography
     */

    /* Fonts */
    --klik-font-mono: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
    --klik-font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    --klik-font-serif: Georgia, 'Times New Roman', serif;

    /* Font sizes */
    --klik-font-size-2x-small: 0.625rem; /* 10px */
    --klik-font-size-x-small: 0.75rem; /* 12px */
    --klik-font-size-small: 0.875rem; /* 14px */
    --klik-font-size-medium: 1rem; /* 16px */
    --klik-font-size-large: 1.25rem; /* 20px */
    --klik-font-size-x-large: 1.5rem; /* 24px */
    --klik-font-size-2x-large: 2.25rem; /* 36px */
    --klik-font-size-3x-large: 3rem; /* 48px */
    --klik-font-size-4x-large: 4.5rem; /* 72px */

    /* Font weights */
    --klik-font-weight-light: 300;
    --klik-font-weight-normal: 400;
    --klik-font-weight-semibold: 500;
    --klik-font-weight-bold: 700;

    /* Letter spacings */
    --klik-letter-spacing-denser: -0.03em;
    --klik-letter-spacing-dense: -0.015em;
    --klik-letter-spacing-normal: normal;
    --klik-letter-spacing-loose: 0.075em;
    --klik-letter-spacing-looser: 0.15em;

    /* Line heights */
    --klik-line-height-denser: 1;
    --klik-line-height-dense: 1.4;
    --klik-line-height-normal: 1.8;
    --klik-line-height-loose: 2.2;
    --klik-line-height-looser: 2.6;

    /*
     * Forms
     */

    /* Focus rings */
    --klik-focus-ring-color: var(--klik-color-primary-500);
    --klik-focus-ring-width: 3px;
    --klik-focus-ring-alpha: 40%;
    --klik-focus-ring: 0 0 0 var(--klik-focus-ring-width)
      rgb(var(--klik-focus-ring-color) / var(--klik-focus-ring-alpha));

    /* Buttons */
    --klik-button-font-size-small: var(--klik-font-size-x-small);
    --klik-button-font-size-medium: var(--klik-font-size-small);
    --klik-button-font-size-large: var(--klik-font-size-medium);

    /* Inputs */
    --klik-input-height-small: 1.875rem; /* 30px */
    --klik-input-height-medium: 2.5rem; /* 40px */
    --klik-input-height-large: 3.125rem; /* 50px */

    --klik-input-background-color: var(--klik-color-neutral-0);
    --klik-input-background-color-hover: var(--klik-input-background-color);
    --klik-input-background-color-focus: var(--klik-input-background-color);
    --klik-input-background-color-disabled: var(--klik-color-neutral-100);
    --klik-input-border-color: var(--klik-color-neutral-300);
    --klik-input-border-color-hover: var(--klik-color-neutral-400);
    --klik-input-border-color-focus: var(--klik-color-primary-500);
    --klik-input-border-color-disabled: var(--klik-color-neutral-300);
    --klik-input-border-width: 1px;

    --klik-input-border-radius-small: var(--klik-border-radius-medium);
    --klik-input-border-radius-medium: var(--klik-border-radius-medium);
    --klik-input-border-radius-large: var(--klik-border-radius-medium);

    --klik-input-font-family: var(--klik-font-sans);
    --klik-input-font-weight: var(--klik-font-weight-normal);
    --klik-input-font-size-small: var(--klik-font-size-small);
    --klik-input-font-size-medium: var(--klik-font-size-medium);
    --klik-input-font-size-large: var(--klik-font-size-large);
    --klik-input-letter-spacing: var(--klik-letter-spacing-normal);

    --klik-input-color: var(--klik-color-neutral-700);
    --klik-input-color-hover: var(--klik-color-neutral-700);
    --klik-input-color-focus: var(--klik-color-neutral-700);
    --klik-input-color-disabled: var(--klik-color-neutral-900);
    --klik-input-icon-color: var(--klik-color-neutral-500);
    --klik-input-icon-color-hover: var(--klik-color-neutral-600);
    --klik-input-icon-color-focus: var(--klik-color-neutral-600);
    --klik-input-placeholder-color: var(--klik-color-neutral-500);
    --klik-input-placeholder-color-disabled: var(--klik-color-neutral-600);
    --klik-input-spacing-small: var(--klik-spacing-small);
    --klik-input-spacing-medium: var(--klik-spacing-medium);
    --klik-input-spacing-large: var(--klik-spacing-large);

    --klik-input-filled-background-color: var(--klik-color-neutral-100);
    --klik-input-filled-background-color-hover: var(--klik-color-neutral-100);
    --klik-input-filled-background-color-focus: var(--klik-color-neutral-0);
    --klik-input-filled-background-color-disabled: var(--klik-color-neutral-100);
    --klik-input-filled-color: var(--klik-color-neutral-800);
    --klik-input-filled-color-hover: var(--klik-color-neutral-800);
    --klik-input-filled-color-focus: var(--klik-color-neutral-700);
    --klik-input-filled-color-disabled: var(--klik-color-neutral-800);

    /* Labels */
    --klik-input-label-font-size-small: var(--klik-font-size-small);
    --klik-input-label-font-size-medium: var(--klik-font-size-medium);
    --klik-input-label-font-size-large: var(--klik-font-size-large);

    --klik-input-label-color: inherit;

    /* Help text */
    --klik-input-help-text-font-size-small: var(--klik-font-size-x-small);
    --klik-input-help-text-font-size-medium: var(--klik-font-size-small);
    --klik-input-help-text-font-size-large: var(--klik-font-size-medium);

    --klik-input-help-text-color: var(--klik-color-neutral-500);

    /* Toggles (checkboxes, radios, switches) */
    --klik-toggle-size: 1rem;

    /*
     * Overlays
     */

    --klik-overlay-background-color: var(--klik-color-blue-gray-500);
    --klik-overlay-opacity: 33%;

    /*
     * Panels
     */

    --klik-panel-background-color: var(--klik-surface-base-alt);
    --klik-panel-border-color: var(--klik-color-neutral-200);
    --klik-panel-border-width: 1px;

    /*
     * Tooltips
     */

    --klik-tooltip-border-radius: var(--klik-border-radius-medium);
    --klik-tooltip-background-color: var(--klik-color-neutral-800);
    --klik-tooltip-color: var(--klik-color-neutral-0);
    --klik-tooltip-font-family: var(--klik-font-sans);
    --klik-tooltip-font-weight: var(--klik-font-weight-normal);
    --klik-tooltip-font-size: var(--klik-font-size-small);
    --klik-tooltip-line-height: var(--klik-line-height-dense);
    --klik-tooltip-padding: var(--klik-spacing-2x-small) var(--klik-spacing-x-small);
    --klik-tooltip-arrow-size: 5px;
    --klik-tooltip-arrow-start-end-offset: 8px;

    /*
     * Z-indexes
     */

    --klik-z-index-drawer: 700;
    --klik-z-index-dialog: 800;
    --klik-z-index-dropdown: 900;
    --klik-z-index-toast: 950;
    --klik-z-index-tooltip: 1000;

    /**
     * Fallback Colors
     */

    /* Neutral */
    --klik-color-neutral-0: 255 255 255;
    --klik-color-neutral-50: 250 250 250;
    --klik-color-neutral-100: 244 244 245;
    --klik-color-neutral-200: 228 228 231;
    --klik-color-neutral-300: 212 212 216;
    --klik-color-neutral-400: 161 161 170;
    --klik-color-neutral-500: 113 113 122;
    --klik-color-neutral-600: 82 82 91;
    --klik-color-neutral-700: 63 63 70;
    --klik-color-neutral-800: 39 39 42;
    --klik-color-neutral-900: 24 24 27;
    --klik-color-neutral-950: 19 19 22;
    --klik-color-neutral-1000: 0 0 0;

    /* Success */
    --klik-color-success-50: 240 253 244;
    --klik-color-success-100: 220 252 231;
    --klik-color-success-200: 187 247 208;
    --klik-color-success-300: 134 239 172;
    --klik-color-success-400: 74 222 128;
    --klik-color-success-500: 34 197 94;
    --klik-color-success-600: 22 163 74;
    --klik-color-success-700: 21 128 61;
    --klik-color-success-800: 22 101 52;
    --klik-color-success-900: 20 83 45;
    --klik-color-success-950: 12 49 27;

    /* Warning */
    --klik-color-warning-50: 255 251 235;
    --klik-color-warning-100: 254 243 199;
    --klik-color-warning-200: 253 230 138;
    --klik-color-warning-300: 252 211 77;
    --klik-color-warning-400: 251 191 36;
    --klik-color-warning-500: 245 158 11;
    --klik-color-warning-600: 217 119 6;
    --klik-color-warning-700: 180 83 9;
    --klik-color-warning-800: 146 64 14;
    --klik-color-warning-900: 120 53 15;
    --klik-color-warning-950: 74 35 11;

    /* Danger */
    --klik-color-danger-50: 254 242 242;
    --klik-color-danger-100: 254 226 226;
    --klik-color-danger-200: 254 202 202;
    --klik-color-danger-300: 252 165 165;
    --klik-color-danger-400: 248 113 113;
    --klik-color-danger-500: 239 68 68;
    --klik-color-danger-600: 220 38 38;
    --klik-color-danger-700: 185 28 28;
    --klik-color-danger-800: 153 27 27;
    --klik-color-danger-900: 127 29 29;
    --klik-color-danger-950: 80 20 20;
  }
`;

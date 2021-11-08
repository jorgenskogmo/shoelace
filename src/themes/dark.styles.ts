import { css } from 'lit';

export default css`
  :host,
  .klik-theme-dark {
    /*
     * Color Primitives
     */

    /* Blue Gray */
    --klik-color-blue-gray-50: 20 26 40;
    --klik-color-blue-gray-100: 25 32 52;
    --klik-color-blue-gray-200: 34 45 63;
    --klik-color-blue-gray-300: 55 69 89;
    --klik-color-blue-gray-400: 75 89 109;
    --klik-color-blue-gray-500: 105 121 144;
    --klik-color-blue-gray-600: 153 168 189;
    --klik-color-blue-gray-700: 208 218 230;
    --klik-color-blue-gray-800: 231 237 245;
    --klik-color-blue-gray-900: 246 250 254;
    --klik-color-blue-gray-950: 253 255 255;

    /* Cool Gray */
    --klik-color-cool-gray-50: 21 26 39;
    --klik-color-cool-gray-100: 27 33 49;
    --klik-color-cool-gray-200: 35 45 59;
    --klik-color-cool-gray-300: 59 69 85;
    --klik-color-cool-gray-400: 79 89 103;
    --klik-color-cool-gray-500: 111 119 133;
    --klik-color-cool-gray-600: 161 168 180;
    --klik-color-cool-gray-700: 214 218 224;
    --klik-color-cool-gray-800: 234 236 240;
    --klik-color-cool-gray-900: 248 249 251;
    --klik-color-cool-gray-950: 254 255 255;

    /* Gray */
    --klik-color-gray-50: 28 28 31;
    --klik-color-gray-100: 33 33 37;
    --klik-color-gray-200: 43 43 46;
    --klik-color-gray-300: 67 67 74;
    --klik-color-gray-400: 86 86 95;
    --klik-color-gray-500: 118 118 127;
    --klik-color-gray-600: 166 166 175;
    --klik-color-gray-700: 217 217 221;
    --klik-color-gray-800: 233 233 236;
    --klik-color-gray-900: 249 249 250;
    --klik-color-gray-950: 255 255 255;

    /* True Gray */
    --klik-color-true-gray-50: 26 26 26;
    --klik-color-true-gray-100: 32 32 32;
    --klik-color-true-gray-200: 42 42 42;
    --klik-color-true-gray-300: 68 68 68;
    --klik-color-true-gray-400: 86 86 86;
    --klik-color-true-gray-500: 120 120 120;
    --klik-color-true-gray-600: 168 168 168;
    --klik-color-true-gray-700: 217 217 217;
    --klik-color-true-gray-800: 234 234 234;
    --klik-color-true-gray-900: 250 250 250;
    --klik-color-true-gray-950: 255 255 255;

    /* Warm Gray */
    --klik-color-warm-gray-50: 28 27 26;
    --klik-color-warm-gray-100: 38 34 32;
    --klik-color-warm-gray-200: 45 41 40;
    --klik-color-warm-gray-300: 72 68 64;
    --klik-color-warm-gray-400: 91 87 82;
    --klik-color-warm-gray-500: 125 118 112;
    --klik-color-warm-gray-600: 173 167 163;
    --klik-color-warm-gray-700: 219 216 214;
    --klik-color-warm-gray-800: 236 234 233;
    --klik-color-warm-gray-900: 250 250 249;
    --klik-color-warm-gray-950: 255 255 254;

    /* Red */
    --klik-color-red-50: 85 24 24;
    --klik-color-red-100: 132 34 33;
    --klik-color-red-200: 158 33 31;
    --klik-color-red-300: 191 35 32;
    --klik-color-red-400: 226 45 42;
    --klik-color-red-500: 245 74 72;
    --klik-color-red-600: 254 118 118;
    --klik-color-red-700: 255 170 170;
    --klik-color-red-800: 255 207 207;
    --klik-color-red-900: 255 231 231;
    --klik-color-red-950: 255 247 247;

    /* Orange */
    --klik-color-orange-50: 87 36 19;
    --klik-color-orange-100: 129 49 22;
    --klik-color-orange-200: 159 57 22;
    --klik-color-orange-300: 200 70 18;
    --klik-color-orange-400: 240 93 19;
    --klik-color-orange-500: 255 120 28;
    --klik-color-orange-600: 255 151 65;
    --klik-color-orange-700: 255 191 121;
    --klik-color-orange-800: 255 220 175;
    --klik-color-orange-900: 255 242 218;
    --klik-color-orange-950: 255 252 242;

    /* Amber */
    --klik-color-amber-50: 79 39 16;
    --klik-color-amber-100: 125 57 19;
    --klik-color-amber-200: 151 68 19;
    --klik-color-amber-300: 186 88 16;
    --klik-color-amber-400: 223 124 15;
    --klik-color-amber-500: 251 163 21;
    --klik-color-amber-600: 255 196 43;
    --klik-color-amber-700: 255 216 82;
    --klik-color-amber-800: 255 235 143;
    --klik-color-amber-900: 255 248 204;
    --klik-color-amber-950: 255 255 240;

    /* Yellow */
    --klik-color-yellow-50: 64 42 16;
    --klik-color-yellow-100: 118 67 22;
    --klik-color-yellow-200: 138 81 19;
    --klik-color-yellow-300: 166 102 14;
    --klik-color-yellow-400: 207 143 14;
    --klik-color-yellow-500: 240 184 20;
    --klik-color-yellow-600: 255 209 30;
    --klik-color-yellow-700: 255 229 76;
    --klik-color-yellow-800: 255 245 143;
    --klik-color-yellow-900: 255 254 200;
    --klik-color-yellow-950: 255 255 237;

    /* Lime */
    --klik-color-lime-50: 42 61 18;
    --klik-color-lime-100: 58 87 24;
    --klik-color-lime-200: 68 102 23;
    --klik-color-lime-300: 82 129 21;
    --klik-color-lime-400: 106 168 22;
    --klik-color-lime-500: 137 209 31;
    --klik-color-lime-600: 168 235 59;
    --klik-color-lime-700: 195 247 105;
    --klik-color-lime-800: 222 254 162;
    --klik-color-lime-900: 241 255 208;
    --klik-color-lime-950: 252 255 236;

    /* Green */
    --klik-color-green-50: 16 53 31;
    --klik-color-green-100: 25 87 49;
    --klik-color-green-200: 28 106 56;
    --klik-color-green-300: 29 133 65;
    --klik-color-green-400: 32 168 78;
    --klik-color-green-500: 43 202 99;
    --klik-color-green-600: 80 227 133;
    --klik-color-green-700: 139 244 177;
    --klik-color-green-800: 192 252 213;
    --klik-color-green-900: 225 255 236;
    --klik-color-green-950: 245 255 249;

    /* Emerald */
    --klik-color-emerald-50: 7 49 38;
    --klik-color-emerald-100: 13 82 63;
    --klik-color-emerald-200: 15 99 74;
    --klik-color-emerald-300: 16 125 91;
    --klik-color-emerald-400: 20 155 109;
    --klik-color-emerald-500: 29 190 134;
    --klik-color-emerald-600: 59 216 158;
    --klik-color-emerald-700: 115 236 188;
    --klik-color-emerald-800: 172 248 213;
    --klik-color-emerald-900: 214 255 234;
    --klik-color-emerald-950: 241 255 250;

    /* Teal */
    --klik-color-teal-50: 16 50 48;
    --klik-color-teal-100: 24 82 78;
    --klik-color-teal-200: 24 98 93;
    --klik-color-teal-300: 24 123 114;
    --klik-color-teal-400: 25 153 141;
    --klik-color-teal-500: 32 189 171;
    --klik-color-teal-600: 54 217 196;
    --klik-color-teal-700: 100 239 217;
    --klik-color-teal-800: 158 251 233;
    --klik-color-teal-900: 209 255 246;
    --klik-color-teal-950: 245 255 255;

    /* Cyan */
    --klik-color-cyan-50: 21 56 70;
    --klik-color-cyan-100: 28 82 103;
    --klik-color-cyan-200: 28 98 122;
    --klik-color-cyan-300: 25 121 149;
    --klik-color-cyan-400: 24 150 183;
    --klik-color-cyan-500: 26 187 217;
    --klik-color-cyan-600: 46 216 243;
    --klik-color-cyan-700: 109 237 254;
    --klik-color-cyan-800: 170 248 255;
    --klik-color-cyan-900: 212 255 255;
    --klik-color-cyan-950: 241 255 255;

    /* Sky */
    --klik-color-sky-50: 17 54 77;
    --klik-color-sky-100: 20 78 115;
    --klik-color-sky-200: 19 93 138;
    --klik-color-sky-300: 18 109 166;
    --klik-color-sky-400: 22 137 204;
    --klik-color-sky-500: 31 170 238;
    --klik-color-sky-600: 64 194 253;
    --klik-color-sky-700: 130 216 255;
    --klik-color-sky-800: 191 235 255;
    --klik-color-sky-900: 229 247 255;
    --klik-color-sky-950: 245 254 255;

    /* Blue */
    --klik-color-blue-50: 26 37 77;
    --klik-color-blue-100: 37 62 143;
    --klik-color-blue-200: 39 68 180;
    --klik-color-blue-300: 40 82 221;
    --klik-color-blue-400: 47 103 240;
    --klik-color-blue-500: 67 135 251;
    --klik-color-blue-600: 102 170 255;
    --klik-color-blue-700: 152 202 255;
    --klik-color-blue-800: 196 224 255;
    --klik-color-blue-900: 224 239 255;
    --klik-color-blue-950: 244 251 255;

    /* Indigo */
    --klik-color-indigo-50: 40 37 88;
    --klik-color-indigo-100: 54 50 134;
    --klik-color-indigo-200: 61 52 168;
    --klik-color-indigo-300: 73 60 207;
    --klik-color-indigo-400: 85 74 234;
    --klik-color-indigo-500: 105 106 246;
    --klik-color-indigo-600: 134 145 253;
    --klik-color-indigo-700: 170 185 255;
    --klik-color-indigo-800: 204 215 255;
    --klik-color-indigo-900: 229 236 255;
    --klik-color-indigo-950: 243 247 255;

    /* Violet */
    --klik-color-violet-50: 53 25 92;
    --klik-color-violet-100: 81 34 154;
    --klik-color-violet-200: 96 38 187;
    --klik-color-violet-300: 115 45 222;
    --klik-color-violet-400: 130 63 242;
    --klik-color-violet-500: 144 97 251;
    --klik-color-violet-600: 172 144 255;
    --klik-color-violet-700: 201 186 255;
    --klik-color-violet-800: 226 219 255;
    --klik-color-violet-900: 242 238 255;
    --klik-color-violet-950: 250 248 255;

    /* Purple */
    --klik-color-purple-50: 51 21 71;
    --klik-color-purple-100: 93 33 140;
    --klik-color-purple-200: 112 38 173;
    --klik-color-purple-300: 131 40 211;
    --klik-color-purple-400: 152 56 239;
    --klik-color-purple-500: 173 90 252;
    --klik-color-purple-600: 197 137 255;
    --klik-color-purple-700: 221 185 255;
    --klik-color-purple-800: 238 218 255;
    --klik-color-purple-900: 248 237 255;
    --klik-color-purple-950: 255 250 255;

    /* Fuchsia */

    --klik-color-fuchsia-50: 60 20 62;
    --klik-color-fuchsia-100: 117 31 122;
    --klik-color-fuchsia-200: 139 31 148;
    --klik-color-fuchsia-300: 167 35 180;
    --klik-color-fuchsia-400: 197 45 216;
    --klik-color-fuchsia-500: 222 76 244;
    --klik-color-fuchsia-600: 237 126 254;
    --klik-color-fuchsia-700: 245 176 255;
    --klik-color-fuchsia-800: 250 213 255;
    --klik-color-fuchsia-900: 255 237 255;
    --klik-color-fuchsia-950: 255 249 255;

    /* Pink */
    --klik-color-pink-50: 71 18 39;
    --klik-color-pink-100: 136 30 71;
    --klik-color-pink-200: 162 30 81;
    --klik-color-pink-300: 195 32 97;
    --klik-color-pink-400: 225 46 124;
    --klik-color-pink-500: 242 78 158;
    --klik-color-pink-600: 249 119 187;
    --klik-color-pink-700: 254 173 217;
    --klik-color-pink-800: 255 212 237;
    --klik-color-pink-900: 255 236 248;
    --klik-color-pink-950: 255 247 253;

    /* Rose */
    --klik-color-rose-50: 79 18 36;
    --klik-color-rose-100: 141 26 59;
    --klik-color-rose-200: 164 26 61;
    --klik-color-rose-300: 196 27 64;
    --klik-color-rose-400: 231 38 76;
    --klik-color-rose-500: 250 69 98;
    --klik-color-rose-600: 255 118 138;
    --klik-color-rose-700: 255 169 180;
    --klik-color-rose-800: 255 210 216;
    --klik-color-rose-900: 255 233 235;
    --klik-color-rose-950: 255 246 247;

    /*
     * Theme Tokens
     */

    /* Primary */
    --klik-color-primary-50: var(--klik-color-sky-50);
    --klik-color-primary-100: var(--klik-color-sky-100);
    --klik-color-primary-200: var(--klik-color-sky-200);
    --klik-color-primary-300: var(--klik-color-sky-300);
    --klik-color-primary-400: var(--klik-color-sky-400);
    --klik-color-primary-500: var(--klik-color-sky-500);
    --klik-color-primary-600: var(--klik-color-sky-600);
    --klik-color-primary-700: var(--klik-color-sky-700);
    --klik-color-primary-800: var(--klik-color-sky-800);
    --klik-color-primary-900: var(--klik-color-sky-900);
    --klik-color-primary-950: var(--klik-color-sky-950);

    /* Success */
    --klik-color-success-50: var(--klik-color-green-50);
    --klik-color-success-100: var(--klik-color-green-100);
    --klik-color-success-200: var(--klik-color-green-200);
    --klik-color-success-300: var(--klik-color-green-300);
    --klik-color-success-400: var(--klik-color-green-400);
    --klik-color-success-500: var(--klik-color-green-500);
    --klik-color-success-600: var(--klik-color-green-600);
    --klik-color-success-700: var(--klik-color-green-700);
    --klik-color-success-800: var(--klik-color-green-800);
    --klik-color-success-900: var(--klik-color-green-900);
    --klik-color-success-950: var(--klik-color-green-950);

    /* Warning */
    --klik-color-warning-50: var(--klik-color-amber-50);
    --klik-color-warning-100: var(--klik-color-amber-100);
    --klik-color-warning-200: var(--klik-color-amber-200);
    --klik-color-warning-300: var(--klik-color-amber-300);
    --klik-color-warning-400: var(--klik-color-amber-400);
    --klik-color-warning-500: var(--klik-color-amber-500);
    --klik-color-warning-600: var(--klik-color-amber-600);
    --klik-color-warning-700: var(--klik-color-amber-700);
    --klik-color-warning-800: var(--klik-color-amber-800);
    --klik-color-warning-900: var(--klik-color-amber-900);
    --klik-color-warning-950: var(--klik-color-amber-950);

    /* Danger */
    --klik-color-danger-50: var(--klik-color-red-50);
    --klik-color-danger-100: var(--klik-color-red-100);
    --klik-color-danger-200: var(--klik-color-red-200);
    --klik-color-danger-300: var(--klik-color-red-300);
    --klik-color-danger-400: var(--klik-color-red-400);
    --klik-color-danger-500: var(--klik-color-red-500);
    --klik-color-danger-600: var(--klik-color-red-600);
    --klik-color-danger-700: var(--klik-color-red-700);
    --klik-color-danger-800: var(--klik-color-red-800);
    --klik-color-danger-900: var(--klik-color-red-900);
    --klik-color-danger-950: var(--klik-color-red-950);

    /* Neutral */
    --klik-color-neutral-50: var(--klik-color-gray-50);
    --klik-color-neutral-100: var(--klik-color-gray-100);
    --klik-color-neutral-200: var(--klik-color-gray-200);
    --klik-color-neutral-300: var(--klik-color-gray-300);
    --klik-color-neutral-400: var(--klik-color-gray-400);
    --klik-color-neutral-500: var(--klik-color-gray-500);
    --klik-color-neutral-600: var(--klik-color-gray-600);
    --klik-color-neutral-700: var(--klik-color-gray-700);
    --klik-color-neutral-800: var(--klik-color-gray-800);
    --klik-color-neutral-900: var(--klik-color-gray-900);
    --klik-color-neutral-950: var(--klik-color-gray-950);

    /* Neutral one-offs */
    --klik-color-neutral-0: 24 24 27;
    --klik-color-neutral-1000: 255 255 255;

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

    --klik-shadow-x-small: 0 1px 2px rgb(0 0 0 / 12%);
    --klik-shadow-small: 0 1px 2px rgb(0 0 0 / 18%);
    --klik-shadow-medium: 0 2px 4px rgb(0 0 0 / 18%);
    --klik-shadow-large: 0 2px 8px rgb(0 0 0 / 18%);
    --klik-shadow-x-large: 0 4px 16px rgb(0 0 0 / 18%);

    /*
     * Surfaces
     */

    --klik-surface-base: var(--klik-color-neutral-0);
    --klik-surface-base-alt: var(--klik-color-neutral-50);

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

    /* Focus ring */
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
    --klik-input-background-color-hover: var(--klik-color-neutral-0);
    --klik-input-background-color-focus: var(--klik-color-neutral-0);
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

    --klik-overlay-background-color: 0 0 0;
    --klik-overlay-opacity: 67%;

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
     * Z-index tokens
     */

    --klik-z-index-drawer: 700;
    --klik-z-index-dialog: 800;
    --klik-z-index-dropdown: 900;
    --klik-z-index-toast: 950;
    --klik-z-index-tooltip: 1000;
  }
`;

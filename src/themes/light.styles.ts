import { css } from 'lit';

export default css`
  :root,
  :host,
  .klik-theme-light {
    /*
     * Color Primitives
     */

    /* Blue Gray */
    --klik-color-blue-gray-50: 248 250 252;
    --klik-color-blue-gray-100: 241 245 249;
    --klik-color-blue-gray-200: 226 232 240;
    --klik-color-blue-gray-300: 203 213 225;
    --klik-color-blue-gray-400: 148 163 184;
    --klik-color-blue-gray-500: 100 116 139;
    --klik-color-blue-gray-600: 71 85 105;
    --klik-color-blue-gray-700: 51 65 85;
    --klik-color-blue-gray-800: 30 41 59;
    --klik-color-blue-gray-900: 15 23 42;
    --klik-color-blue-gray-950: 10 16 30;

    /* Cool Gray */
    --klik-color-cool-gray-50: 249 250 251;
    --klik-color-cool-gray-100: 243 244 246;
    --klik-color-cool-gray-200: 229 231 235;
    --klik-color-cool-gray-300: 209 213 219;
    --klik-color-cool-gray-400: 156 163 175;
    --klik-color-cool-gray-500: 107 114 128;
    --klik-color-cool-gray-600: 75 85 99;
    --klik-color-cool-gray-700: 55 65 81;
    --klik-color-cool-gray-800: 31 41 55;
    --klik-color-cool-gray-900: 17 24 39;
    --klik-color-cool-gray-950: 12 17 29;

    /* Gray */
    --klik-color-gray-50: 250 250 250;
    --klik-color-gray-100: 244 244 245;
    --klik-color-gray-200: 228 228 231;
    --klik-color-gray-300: 212 212 216;
    --klik-color-gray-400: 161 161 170;
    --klik-color-gray-500: 113 113 122;
    --klik-color-gray-600: 82 82 91;
    --klik-color-gray-700: 63 63 70;
    --klik-color-gray-800: 39 39 42;
    --klik-color-gray-900: 24 24 27;
    --klik-color-gray-950: 19 19 22;

    /* True Gray */
    --klik-color-true-gray-50: 250 250 250;
    --klik-color-true-gray-100: 245 245 245;
    --klik-color-true-gray-200: 229 229 229;
    --klik-color-true-gray-300: 212 212 212;
    --klik-color-true-gray-400: 163 163 163;
    --klik-color-true-gray-500: 115 115 115;
    --klik-color-true-gray-600: 82 82 82;
    --klik-color-true-gray-700: 64 64 64;
    --klik-color-true-gray-800: 38 38 38;
    --klik-color-true-gray-900: 23 23 23;
    --klik-color-true-gray-950: 17 17 17;

    /* Warm Gray */
    --klik-color-warm-gray-50: 250 250 249;
    --klik-color-warm-gray-100: 245 245 244;
    --klik-color-warm-gray-200: 231 229 228;
    --klik-color-warm-gray-300: 214 211 209;
    --klik-color-warm-gray-400: 168 162 158;
    --klik-color-warm-gray-500: 120 113 108;
    --klik-color-warm-gray-600: 87 83 78;
    --klik-color-warm-gray-700: 68 64 60;
    --klik-color-warm-gray-800: 41 37 36;
    --klik-color-warm-gray-900: 28 25 23;
    --klik-color-warm-gray-950: 19 18 16;

    /* Red */
    --klik-color-red-50: 254 242 242;
    --klik-color-red-100: 254 226 226;
    --klik-color-red-200: 254 202 202;
    --klik-color-red-300: 252 165 165;
    --klik-color-red-400: 248 113 113;
    --klik-color-red-500: 239 68 68;
    --klik-color-red-600: 220 38 38;
    --klik-color-red-700: 185 28 28;
    --klik-color-red-800: 153 27 27;
    --klik-color-red-900: 127 29 29;
    --klik-color-red-950: 80 20 20;

    /* Orange */
    --klik-color-orange-50: 255 247 237;
    --klik-color-orange-100: 255 237 213;
    --klik-color-orange-200: 254 215 170;
    --klik-color-orange-300: 253 186 116;
    --klik-color-orange-400: 251 146 60;
    --klik-color-orange-500: 249 115 22;
    --klik-color-orange-600: 234 88 12;
    --klik-color-orange-700: 194 65 12;
    --klik-color-orange-800: 154 52 18;
    --klik-color-orange-900: 124 45 18;
    --klik-color-orange-950: 82 32 15;

    /* Amber */
    --klik-color-amber-50: 255 251 235;
    --klik-color-amber-100: 254 243 199;
    --klik-color-amber-200: 253 230 138;
    --klik-color-amber-300: 252 211 77;
    --klik-color-amber-400: 251 191 36;
    --klik-color-amber-500: 245 158 11;
    --klik-color-amber-600: 217 119 6;
    --klik-color-amber-700: 180 83 9;
    --klik-color-amber-800: 146 64 14;
    --klik-color-amber-900: 120 53 15;
    --klik-color-amber-950: 74 35 11;

    /* Yellow */
    --klik-color-yellow-50: 254 252 232;
    --klik-color-yellow-100: 254 249 195;
    --klik-color-yellow-200: 254 240 138;
    --klik-color-yellow-300: 253 224 71;
    --klik-color-yellow-400: 250 204 21;
    --klik-color-yellow-500: 234 179 8;
    --klik-color-yellow-600: 202 138 4;
    --klik-color-yellow-700: 161 98 7;
    --klik-color-yellow-800: 133 77 14;
    --klik-color-yellow-900: 113 63 18;
    --klik-color-yellow-950: 60 38 11;

    /* Lime */
    --klik-color-lime-50: 247 254 231;
    --klik-color-lime-100: 236 252 203;
    --klik-color-lime-200: 217 249 157;
    --klik-color-lime-300: 190 242 100;
    --klik-color-lime-400: 163 230 53;
    --klik-color-lime-500: 132 204 22;
    --klik-color-lime-600: 101 163 13;
    --klik-color-lime-700: 77 124 15;
    --klik-color-lime-800: 63 98 18;
    --klik-color-lime-900: 54 83 20;
    --klik-color-lime-950: 38 57 14;

    /* Green */
    --klik-color-green-50: 240 253 244;
    --klik-color-green-100: 220 252 231;
    --klik-color-green-200: 187 247 208;
    --klik-color-green-300: 134 239 172;
    --klik-color-green-400: 74 222 128;
    --klik-color-green-500: 34 197 94;
    --klik-color-green-600: 22 163 74;
    --klik-color-green-700: 21 128 61;
    --klik-color-green-800: 22 101 52;
    --klik-color-green-900: 20 83 45;
    --klik-color-green-950: 12 49 27;

    /* Emerald */
    --klik-color-emerald-50: 236 253 245;
    --klik-color-emerald-100: 209 250 229;
    --klik-color-emerald-200: 167 243 208;
    --klik-color-emerald-300: 110 231 183;
    --klik-color-emerald-400: 52 211 153;
    --klik-color-emerald-500: 16 185 129;
    --klik-color-emerald-600: 5 150 105;
    --klik-color-emerald-700: 4 120 87;
    --klik-color-emerald-800: 6 95 70;
    --klik-color-emerald-900: 6 78 59;
    --klik-color-emerald-950: 3 45 34;

    /* Teal */
    --klik-color-teal-50: 240 253 250;
    --klik-color-teal-100: 204 251 241;
    --klik-color-teal-200: 153 246 228;
    --klik-color-teal-300: 94 234 212;
    --klik-color-teal-400: 45 212 191;
    --klik-color-teal-500: 20 184 166;
    --klik-color-teal-600: 13 148 136;
    --klik-color-teal-700: 15 118 110;
    --klik-color-teal-800: 17 94 89;
    --klik-color-teal-900: 19 78 74;
    --klik-color-teal-950: 12 46 44;

    /* Cyan */
    --klik-color-cyan-50: 236 254 255;
    --klik-color-cyan-100: 207 250 254;
    --klik-color-cyan-200: 165 243 252;
    --klik-color-cyan-300: 103 232 249;
    --klik-color-cyan-400: 34 211 238;
    --klik-color-cyan-500: 6 182 212;
    --klik-color-cyan-600: 8 145 178;
    --klik-color-cyan-700: 14 116 144;
    --klik-color-cyan-800: 21 94 117;
    --klik-color-cyan-900: 22 78 99;
    --klik-color-cyan-950: 16 52 66;

    /* Sky */
    --klik-color-sky-50: 240 249 255;
    --klik-color-sky-100: 224 242 254;
    --klik-color-sky-200: 186 230 253;
    --klik-color-sky-300: 125 211 252;
    --klik-color-sky-400: 56 189 248;
    --klik-color-sky-500: 14 165 233;
    --klik-color-sky-600: 2 132 199;
    --klik-color-sky-700: 3 105 161;
    --klik-color-sky-800: 7 89 133;
    --klik-color-sky-900: 12 74 110;
    --klik-color-sky-950: 11 50 73;

    /* Blue */
    --klik-color-blue-50: 239 246 255;
    --klik-color-blue-100: 219 234 254;
    --klik-color-blue-200: 191 219 254;
    --klik-color-blue-300: 147 197 253;
    --klik-color-blue-400: 96 165 250;
    --klik-color-blue-500: 59 130 246;
    --klik-color-blue-600: 37 99 235;
    --klik-color-blue-700: 29 78 216;
    --klik-color-blue-800: 30 64 175;
    --klik-color-blue-900: 30 58 138;
    --klik-color-blue-950: 21 33 73;

    /* Indigo */
    --klik-color-indigo-50: 238 242 255;
    --klik-color-indigo-100: 224 231 255;
    --klik-color-indigo-200: 199 210 254;
    --klik-color-indigo-300: 165 180 252;
    --klik-color-indigo-400: 129 140 248;
    --klik-color-indigo-500: 99 102 241;
    --klik-color-indigo-600: 79 70 229;
    --klik-color-indigo-700: 67 56 202;
    --klik-color-indigo-800: 55 48 163;
    --klik-color-indigo-900: 49 46 129;
    --klik-color-indigo-950: 36 33 84;

    /* Violet */
    --klik-color-violet-50: 245 243 255;
    --klik-color-violet-100: 237 233 254;
    --klik-color-violet-200: 221 214 254;
    --klik-color-violet-300: 196 181 253;
    --klik-color-violet-400: 167 139 250;
    --klik-color-violet-500: 139 92 246;
    --klik-color-violet-600: 124 58 237;
    --klik-color-violet-700: 109 40 217;
    --klik-color-violet-800: 91 33 182;
    --klik-color-violet-900: 76 29 149;
    --klik-color-violet-950: 49 21 88;

    /* Purple */
    --klik-color-purple-50: 250 245 255;
    --klik-color-purple-100: 243 232 255;
    --klik-color-purple-200: 233 213 255;
    --klik-color-purple-300: 216 180 254;
    --klik-color-purple-400: 192 132 252;
    --klik-color-purple-500: 168 85 247;
    --klik-color-purple-600: 147 51 234;
    --klik-color-purple-700: 126 34 206;
    --klik-color-purple-800: 107 33 168;
    --klik-color-purple-900: 88 28 135;
    --klik-color-purple-950: 47 17 67;

    /* Fuchsia */
    --klik-color-fuchsia-50: 253 244 255;
    --klik-color-fuchsia-100: 250 232 255;
    --klik-color-fuchsia-200: 245 208 254;
    --klik-color-fuchsia-300: 240 171 252;
    --klik-color-fuchsia-400: 232 121 249;
    --klik-color-fuchsia-500: 217 70 239;
    --klik-color-fuchsia-600: 192 38 211;
    --klik-color-fuchsia-700: 162 28 175;
    --klik-color-fuchsia-800: 134 25 143;
    --klik-color-fuchsia-900: 112 26 117;
    --klik-color-fuchsia-950: 56 16 58;

    /* Pink */
    --klik-color-pink-50: 253 242 248;
    --klik-color-pink-100: 252 231 243;
    --klik-color-pink-200: 251 207 232;
    --klik-color-pink-300: 249 168 212;
    --klik-color-pink-400: 244 114 182;
    --klik-color-pink-500: 236 72 153;
    --klik-color-pink-600: 219 39 119;
    --klik-color-pink-700: 190 24 93;
    --klik-color-pink-800: 157 23 77;
    --klik-color-pink-900: 131 24 67;
    --klik-color-pink-950: 67 14 35;

    /* Rose */
    --klik-color-rose-50: 255 241 242;
    --klik-color-rose-100: 255 228 230;
    --klik-color-rose-200: 254 205 211;
    --klik-color-rose-300: 253 164 175;
    --klik-color-rose-400: 251 113 133;
    --klik-color-rose-500: 244 63 94;
    --klik-color-rose-600: 225 29 72;
    --klik-color-rose-700: 190 18 60;
    --klik-color-rose-800: 159 18 57;
    --klik-color-rose-900: 136 19 55;
    --klik-color-rose-950: 74 13 32;

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
    --klik-color-neutral-0: 255 255 255;
    --klik-color-neutral-1000: 0 0 0;

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
  }
`;

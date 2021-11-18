import { css } from 'lit';

export default css`
  :root {
    /*
     * Tailwind Color Primitives
     */

    /* Blue Gray */
    --dt-global-tw-color-blue-gray-50: 248 250 252;
    --dt-global-tw-color-blue-gray-100: 241 245 249;
    --dt-global-tw-color-blue-gray-200: 226 232 240;
    --dt-global-tw-color-blue-gray-300: 203 213 225;
    --dt-global-tw-color-blue-gray-400: 148 163 184;
    --dt-global-tw-color-blue-gray-500: 100 116 139;
    --dt-global-tw-color-blue-gray-600: 71 85 105;
    --dt-global-tw-color-blue-gray-700: 51 65 85;
    --dt-global-tw-color-blue-gray-800: 30 41 59;
    --dt-global-tw-color-blue-gray-900: 15 23 42;
    --dt-global-tw-color-blue-gray-950: 10 16 30;

    /* Cool Gray */
    --dt-global-tw-color-cool-gray-50: 249 250 251;
    --dt-global-tw-color-cool-gray-100: 243 244 246;
    --dt-global-tw-color-cool-gray-200: 229 231 235;
    --dt-global-tw-color-cool-gray-300: 209 213 219;
    --dt-global-tw-color-cool-gray-400: 156 163 175;
    --dt-global-tw-color-cool-gray-500: 107 114 128;
    --dt-global-tw-color-cool-gray-600: 75 85 99;
    --dt-global-tw-color-cool-gray-700: 55 65 81;
    --dt-global-tw-color-cool-gray-800: 31 41 55;
    --dt-global-tw-color-cool-gray-900: 17 24 39;
    --dt-global-tw-color-cool-gray-950: 12 17 29;

    /* Gray */
    --dt-global-tw-color-gray-50: 250 250 250;
    --dt-global-tw-color-gray-100: 244 244 245;
    --dt-global-tw-color-gray-200: 228 228 231;
    --dt-global-tw-color-gray-300: 212 212 216;
    --dt-global-tw-color-gray-400: 161 161 170;
    --dt-global-tw-color-gray-500: 113 113 122;
    --dt-global-tw-color-gray-600: 82 82 91;
    --dt-global-tw-color-gray-700: 63 63 70;
    --dt-global-tw-color-gray-800: 39 39 42;
    --dt-global-tw-color-gray-900: 24 24 27;
    --dt-global-tw-color-gray-950: 19 19 22;

    /* True Gray */
    --dt-global-tw-color-true-gray-50: 250 250 250;
    --dt-global-tw-color-true-gray-100: 245 245 245;
    --dt-global-tw-color-true-gray-200: 229 229 229;
    --dt-global-tw-color-true-gray-300: 212 212 212;
    --dt-global-tw-color-true-gray-400: 163 163 163;
    --dt-global-tw-color-true-gray-500: 115 115 115;
    --dt-global-tw-color-true-gray-600: 82 82 82;
    --dt-global-tw-color-true-gray-700: 64 64 64;
    --dt-global-tw-color-true-gray-800: 38 38 38;
    --dt-global-tw-color-true-gray-900: 23 23 23;
    --dt-global-tw-color-true-gray-950: 17 17 17;

    /* Warm Gray */
    --dt-global-tw-color-warm-gray-50: 250 250 249;
    --dt-global-tw-color-warm-gray-100: 245 245 244;
    --dt-global-tw-color-warm-gray-200: 231 229 228;
    --dt-global-tw-color-warm-gray-300: 214 211 209;
    --dt-global-tw-color-warm-gray-400: 168 162 158;
    --dt-global-tw-color-warm-gray-500: 120 113 108;
    --dt-global-tw-color-warm-gray-600: 87 83 78;
    --dt-global-tw-color-warm-gray-700: 68 64 60;
    --dt-global-tw-color-warm-gray-800: 41 37 36;
    --dt-global-tw-color-warm-gray-900: 28 25 23;
    --dt-global-tw-color-warm-gray-950: 19 18 16;

    /* Red */
    --dt-global-tw-color-red-50: 254 242 242;
    --dt-global-tw-color-red-100: 254 226 226;
    --dt-global-tw-color-red-200: 254 202 202;
    --dt-global-tw-color-red-300: 252 165 165;
    --dt-global-tw-color-red-400: 248 113 113;
    --dt-global-tw-color-red-500: 239 68 68;
    --dt-global-tw-color-red-600: 220 38 38;
    --dt-global-tw-color-red-700: 185 28 28;
    --dt-global-tw-color-red-800: 153 27 27;
    --dt-global-tw-color-red-900: 127 29 29;
    --dt-global-tw-color-red-950: 80 20 20;

    /* Orange */
    --dt-global-tw-color-orange-50: 255 247 237;
    --dt-global-tw-color-orange-100: 255 237 213;
    --dt-global-tw-color-orange-200: 254 215 170;
    --dt-global-tw-color-orange-300: 253 186 116;
    --dt-global-tw-color-orange-400: 251 146 60;
    --dt-global-tw-color-orange-500: 249 115 22;
    --dt-global-tw-color-orange-600: 234 88 12;
    --dt-global-tw-color-orange-700: 194 65 12;
    --dt-global-tw-color-orange-800: 154 52 18;
    --dt-global-tw-color-orange-900: 124 45 18;
    --dt-global-tw-color-orange-950: 82 32 15;

    /* Amber */
    --dt-global-tw-color-amber-50: 255 251 235;
    --dt-global-tw-color-amber-100: 254 243 199;
    --dt-global-tw-color-amber-200: 253 230 138;
    --dt-global-tw-color-amber-300: 252 211 77;
    --dt-global-tw-color-amber-400: 251 191 36;
    --dt-global-tw-color-amber-500: 245 158 11;
    --dt-global-tw-color-amber-600: 217 119 6;
    --dt-global-tw-color-amber-700: 180 83 9;
    --dt-global-tw-color-amber-800: 146 64 14;
    --dt-global-tw-color-amber-900: 120 53 15;
    --dt-global-tw-color-amber-950: 74 35 11;

    /* Yellow */
    --dt-global-tw-color-yellow-50: 254 252 232;
    --dt-global-tw-color-yellow-100: 254 249 195;
    --dt-global-tw-color-yellow-200: 254 240 138;
    --dt-global-tw-color-yellow-300: 253 224 71;
    --dt-global-tw-color-yellow-400: 250 204 21;
    --dt-global-tw-color-yellow-500: 234 179 8;
    --dt-global-tw-color-yellow-600: 202 138 4;
    --dt-global-tw-color-yellow-700: 161 98 7;
    --dt-global-tw-color-yellow-800: 133 77 14;
    --dt-global-tw-color-yellow-900: 113 63 18;
    --dt-global-tw-color-yellow-950: 60 38 11;

    /* Lime */
    --dt-global-tw-color-lime-50: 247 254 231;
    --dt-global-tw-color-lime-100: 236 252 203;
    --dt-global-tw-color-lime-200: 217 249 157;
    --dt-global-tw-color-lime-300: 190 242 100;
    --dt-global-tw-color-lime-400: 163 230 53;
    --dt-global-tw-color-lime-500: 132 204 22;
    --dt-global-tw-color-lime-600: 101 163 13;
    --dt-global-tw-color-lime-700: 77 124 15;
    --dt-global-tw-color-lime-800: 63 98 18;
    --dt-global-tw-color-lime-900: 54 83 20;
    --dt-global-tw-color-lime-950: 38 57 14;

    /* Green */
    --dt-global-tw-color-green-50: 240 253 244;
    --dt-global-tw-color-green-100: 220 252 231;
    --dt-global-tw-color-green-200: 187 247 208;
    --dt-global-tw-color-green-300: 134 239 172;
    --dt-global-tw-color-green-400: 74 222 128;
    --dt-global-tw-color-green-500: 34 197 94;
    --dt-global-tw-color-green-600: 22 163 74;
    --dt-global-tw-color-green-700: 21 128 61;
    --dt-global-tw-color-green-800: 22 101 52;
    --dt-global-tw-color-green-900: 20 83 45;
    --dt-global-tw-color-green-950: 12 49 27;

    /* Emerald */
    --dt-global-tw-color-emerald-50: 236 253 245;
    --dt-global-tw-color-emerald-100: 209 250 229;
    --dt-global-tw-color-emerald-200: 167 243 208;
    --dt-global-tw-color-emerald-300: 110 231 183;
    --dt-global-tw-color-emerald-400: 52 211 153;
    --dt-global-tw-color-emerald-500: 16 185 129;
    --dt-global-tw-color-emerald-600: 5 150 105;
    --dt-global-tw-color-emerald-700: 4 120 87;
    --dt-global-tw-color-emerald-800: 6 95 70;
    --dt-global-tw-color-emerald-900: 6 78 59;
    --dt-global-tw-color-emerald-950: 3 45 34;

    /* Teal */
    --dt-global-tw-color-teal-50: 240 253 250;
    --dt-global-tw-color-teal-100: 204 251 241;
    --dt-global-tw-color-teal-200: 153 246 228;
    --dt-global-tw-color-teal-300: 94 234 212;
    --dt-global-tw-color-teal-400: 45 212 191;
    --dt-global-tw-color-teal-500: 20 184 166;
    --dt-global-tw-color-teal-600: 13 148 136;
    --dt-global-tw-color-teal-700: 15 118 110;
    --dt-global-tw-color-teal-800: 17 94 89;
    --dt-global-tw-color-teal-900: 19 78 74;
    --dt-global-tw-color-teal-950: 12 46 44;

    /* Cyan */
    --dt-global-tw-color-cyan-50: 236 254 255;
    --dt-global-tw-color-cyan-100: 207 250 254;
    --dt-global-tw-color-cyan-200: 165 243 252;
    --dt-global-tw-color-cyan-300: 103 232 249;
    --dt-global-tw-color-cyan-400: 34 211 238;
    --dt-global-tw-color-cyan-500: 6 182 212;
    --dt-global-tw-color-cyan-600: 8 145 178;
    --dt-global-tw-color-cyan-700: 14 116 144;
    --dt-global-tw-color-cyan-800: 21 94 117;
    --dt-global-tw-color-cyan-900: 22 78 99;
    --dt-global-tw-color-cyan-950: 16 52 66;

    /* Sky */
    --dt-global-tw-color-sky-50: 240 249 255;
    --dt-global-tw-color-sky-100: 224 242 254;
    --dt-global-tw-color-sky-200: 186 230 253;
    --dt-global-tw-color-sky-300: 125 211 252;
    --dt-global-tw-color-sky-400: 56 189 248;
    --dt-global-tw-color-sky-500: 14 165 233;
    --dt-global-tw-color-sky-600: 2 132 199;
    --dt-global-tw-color-sky-700: 3 105 161;
    --dt-global-tw-color-sky-800: 7 89 133;
    --dt-global-tw-color-sky-900: 12 74 110;
    --dt-global-tw-color-sky-950: 11 50 73;

    /* Blue */
    --dt-global-tw-color-blue-50: 239 246 255;
    --dt-global-tw-color-blue-100: 219 234 254;
    --dt-global-tw-color-blue-200: 191 219 254;
    --dt-global-tw-color-blue-300: 147 197 253;
    --dt-global-tw-color-blue-400: 96 165 250;
    --dt-global-tw-color-blue-500: 59 130 246;
    --dt-global-tw-color-blue-600: 37 99 235;
    --dt-global-tw-color-blue-700: 29 78 216;
    --dt-global-tw-color-blue-800: 30 64 175;
    --dt-global-tw-color-blue-900: 30 58 138;
    --dt-global-tw-color-blue-950: 21 33 73;

    /* Indigo */
    --dt-global-tw-color-indigo-50: 238 242 255;
    --dt-global-tw-color-indigo-100: 224 231 255;
    --dt-global-tw-color-indigo-200: 199 210 254;
    --dt-global-tw-color-indigo-300: 165 180 252;
    --dt-global-tw-color-indigo-400: 129 140 248;
    --dt-global-tw-color-indigo-500: 99 102 241;
    --dt-global-tw-color-indigo-600: 79 70 229;
    --dt-global-tw-color-indigo-700: 67 56 202;
    --dt-global-tw-color-indigo-800: 55 48 163;
    --dt-global-tw-color-indigo-900: 49 46 129;
    --dt-global-tw-color-indigo-950: 36 33 84;

    /* Violet */
    --dt-global-tw-color-violet-50: 245 243 255;
    --dt-global-tw-color-violet-100: 237 233 254;
    --dt-global-tw-color-violet-200: 221 214 254;
    --dt-global-tw-color-violet-300: 196 181 253;
    --dt-global-tw-color-violet-400: 167 139 250;
    --dt-global-tw-color-violet-500: 139 92 246;
    --dt-global-tw-color-violet-600: 124 58 237;
    --dt-global-tw-color-violet-700: 109 40 217;
    --dt-global-tw-color-violet-800: 91 33 182;
    --dt-global-tw-color-violet-900: 76 29 149;
    --dt-global-tw-color-violet-950: 49 21 88;

    /* Purple */
    --dt-global-tw-color-purple-50: 250 245 255;
    --dt-global-tw-color-purple-100: 243 232 255;
    --dt-global-tw-color-purple-200: 233 213 255;
    --dt-global-tw-color-purple-300: 216 180 254;
    --dt-global-tw-color-purple-400: 192 132 252;
    --dt-global-tw-color-purple-500: 168 85 247;
    --dt-global-tw-color-purple-600: 147 51 234;
    --dt-global-tw-color-purple-700: 126 34 206;
    --dt-global-tw-color-purple-800: 107 33 168;
    --dt-global-tw-color-purple-900: 88 28 135;
    --dt-global-tw-color-purple-950: 47 17 67;

    /* Fuchsia */
    --dt-global-tw-color-fuchsia-50: 253 244 255;
    --dt-global-tw-color-fuchsia-100: 250 232 255;
    --dt-global-tw-color-fuchsia-200: 245 208 254;
    --dt-global-tw-color-fuchsia-300: 240 171 252;
    --dt-global-tw-color-fuchsia-400: 232 121 249;
    --dt-global-tw-color-fuchsia-500: 217 70 239;
    --dt-global-tw-color-fuchsia-600: 192 38 211;
    --dt-global-tw-color-fuchsia-700: 162 28 175;
    --dt-global-tw-color-fuchsia-800: 134 25 143;
    --dt-global-tw-color-fuchsia-900: 112 26 117;
    --dt-global-tw-color-fuchsia-950: 56 16 58;

    /* Pink */
    --dt-global-tw-color-pink-50: 253 242 248;
    --dt-global-tw-color-pink-100: 252 231 243;
    --dt-global-tw-color-pink-200: 251 207 232;
    --dt-global-tw-color-pink-300: 249 168 212;
    --dt-global-tw-color-pink-400: 244 114 182;
    --dt-global-tw-color-pink-500: 236 72 153;
    --dt-global-tw-color-pink-600: 219 39 119;
    --dt-global-tw-color-pink-700: 190 24 93;
    --dt-global-tw-color-pink-800: 157 23 77;
    --dt-global-tw-color-pink-900: 131 24 67;
    --dt-global-tw-color-pink-950: 67 14 35;

    /* Rose */
    --dt-global-tw-color-rose-50: 255 241 242;
    --dt-global-tw-color-rose-100: 255 228 230;
    --dt-global-tw-color-rose-200: 254 205 211;
    --dt-global-tw-color-rose-300: 253 164 175;
    --dt-global-tw-color-rose-400: 251 113 133;
    --dt-global-tw-color-rose-500: 244 63 94;
    --dt-global-tw-color-rose-600: 225 29 72;
    --dt-global-tw-color-rose-700: 190 18 60;
    --dt-global-tw-color-rose-800: 159 18 57;
    --dt-global-tw-color-rose-900: 136 19 55;
    --dt-global-tw-color-rose-950: 74 13 32;
  }
`;

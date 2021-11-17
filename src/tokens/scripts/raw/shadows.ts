import { tokens } from '@lego/klik-ui-tokens';

export const shadows = {
  '-2': 'inset 0px 1px 0px rgba(0, 0, 0, 0.1)',
  '-1': 'inset 0px 2px 0px rgba(0, 0, 0, 0.1)',
  '0': 'none',
  '1': '0px 1px 0px rgba(0, 0, 0, 0.1)',
  '2': '0px 2px 0px rgba(0, 0, 0, 0.1)',
  focusVisible: `0 0 0 2px ${tokens.colors.information['400']}`,
  button: '0px 1px 0px rgba(0, 0, 0, 0.1), inset 0px -1px 0px rgba(0, 0, 0, 0.15)',

  xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  outline: `0 0 0 2px ${tokens.colors.information['400']}`,
  inline: `inset 0 0 0 2px ${tokens.colors.information['400']}`,
  inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
  none: 'none',
  'dark-lg':
    'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px',
};

export type Shadows = typeof shadows;

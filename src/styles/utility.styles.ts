import { css } from 'lit';

export default css`
  .klik-scroll-lock {
    overflow: hidden !important;
  }

  .klik-toast-stack {
    position: fixed;
    top: 0;
    right: 0;
    z-index: var(--klik-z-index-toast);
    width: 28rem;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
  }

  .klik-toast-stack klik-alert {
    --box-shadow: var(--klik-shadow-large);
    margin: var(--klik-spacing-medium);
  }
`;

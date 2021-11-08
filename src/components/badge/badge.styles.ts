import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: var(--klik-font-size-x-small);
    font-weight: var(--klik-font-weight-semibold);
    letter-spacing: var(--klik-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--klik-border-radius-small);
    border: solid 1px rgb(var(--klik-color-neutral-0));
    white-space: nowrap;
    padding: 3px 6px;
    user-select: none;
    cursor: inherit;
  }

  /* Type modifiers */
  .badge--primary {
    background-color: rgb(var(--klik-color-primary-600));
    color: rgb(var(--klik-color-neutral-0));
  }

  .badge--success {
    background-color: rgb(var(--klik-color-success-600));
    color: rgb(var(--klik-color-neutral-0));
  }

  .badge--neutral {
    background-color: rgb(var(--klik-color-neutral-600));
    color: rgb(var(--klik-color-neutral-0));
  }

  .badge--warning {
    background-color: rgb(var(--klik-color-warning-600));
    color: rgb(var(--klik-color-neutral-0));
  }

  .badge--danger {
    background-color: rgb(var(--klik-color-danger-600));
    color: rgb(var(--klik-color-neutral-0));
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--klik-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: rgb(var(--klik-color-primary-600));
  }

  .badge--pulse.badge--success {
    --pulse-color: rgb(var(--klik-color-success-600));
  }

  .badge--pulse.badge--neutral {
    --pulse-color: rgb(var(--klik-color-neutral-600));
  }

  .badge--pulse.badge--warning {
    --pulse-color: rgb(var(--klik-color-warning-600));
  }

  .badge--pulse.badge--danger {
    --pulse-color: rgb(var(--klik-color-danger-600));
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;

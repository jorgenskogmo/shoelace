import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

const viewBoxSize = 36;
const viewBoxCenter = viewBoxSize / 2;

export default css`
  ${componentStyles}

  :host {
    display: inline-flex;
    width: 1rem;
    height: 1rem;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
    stroke: none;
    fill: currentColor;
  }

  .spinner circle {
    animation: spin 1600ms cubic-bezier(1, 0.005, 0.52, 0.99) infinite normal forwards;
    animation-delay: 0ms;
    fill: #fff;
  }
  .spinner circle.c0 {
    animation-delay: 0;
  }
  .spinner circle.c1 {
    animation-delay: 200ms;
  }
  .spinner circle.c2 {
    animation-delay: 400ms;
  }
  .spinner circle.c3 {
    animation-delay: 600ms;
  }

  @keyframes spin {
    25% {
      transform: translate(18px, 18px) scale(0.2);
      opacity: 0;
    }

    ,
    60% {
      transform: translate(18px, 18px);
      opacity: 1;
    }
  }
`;

/*
export default css`
  ${componentStyles}

  :host {
    --track-width: 2px;
    --track-color: rgb(var(--klik-color-neutral-500) / 20%);
    --indicator-color: rgb(var(--klik-color-primary-600));
    --speed: 2.5s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    transform-origin: 50% 50%;
    transform: rotate(90deg);
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      stroke-dasharray: 0.2em 3em;
      transform: rotate(0deg);
    }

    50% {
      stroke-dasharray: 2.2em 3em;
      transform: rotate(450deg);
    }

    100% {
      stroke-dasharray: 0.2em 3em;
      transform: rotate(1080deg);
    }
  }
`;
*/

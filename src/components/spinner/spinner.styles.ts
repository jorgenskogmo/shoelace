import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

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

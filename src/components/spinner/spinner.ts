import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './spinner.styles';

const viewBoxSize = 36;
const circleRadius = 7;
const circleCenterLeft = circleRadius;
const circleCenterRight = viewBoxSize - circleRadius;
const circleCenterTop = circleRadius;
const circleCenterBottom = viewBoxSize - circleRadius;

/**
 * @since 2.0
 * @status stable
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --track-width - The width of the track.
 * @cssproperty --track-color - The color of the track.
 * @cssproperty --indicator-color - The color of the indicator.
 * @cssproperty --speed - The time it takes for the spinner to complete one animation cycle.
 */
@customElement('klik-spinner')
export default class KlikSpinner extends LitElement {
  static styles = styles;

  render() {
    return html`
      <svg part="base" class="spinner" aria-busy="true" aria-live="polite" viewBox="0 0 36 36">
        <circle class="c0" cx="${circleCenterRight}px" cy="${circleCenterBottom}px" r="${circleRadius}"></circle>
        <circle class="c1" cx="${circleCenterRight}px" cy="${circleCenterTop}px" r="${circleRadius}"></circle>
        <circle class="c2" cx="${circleCenterLeft}px" cy="${circleCenterTop}px" r="${circleRadius}"></circle>
        <circle class="c3" cx="${circleCenterLeft}px" cy="${circleCenterBottom}px" r="${circleRadius}"></circle>
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'klik-spinner': KlikSpinner;
  }
}

/*
export default class KlikSpinner extends LitElement {
  static styles = styles;

  render() {
    return html`
      <svg part="base" class="spinner" aria-busy="true" aria-live="polite">
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'klik-spinner': KlikSpinner;
  }
}
*/

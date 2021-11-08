import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
import { focusVisibleSelector } from '../../internal/focus-visible';

export default css`
  ${componentStyles}

  :host {
    --height: var(--klik-toggle-size);
    --thumb-size: calc(var(--klik-toggle-size) + 4px);
    --width: calc(var(--height) * 2);

    display: inline-block;
  }

  .switch {
    display: inline-flex;
    align-items: center;
    font-family: var(--klik-input-font-family);
    font-size: var(--klik-input-font-size-medium);
    font-weight: var(--klik-input-font-weight);
    color: rgb(var(--klik-input-color));
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: rgb(var(--klik-color-neutral-400));
    border: solid var(--klik-input-border-width) rgb(var(--klik-color-neutral-400));
    border-radius: var(--height);
    transition: var(--klik-transition-fast) border-color, var(--klik-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: rgb(var(--klik-color-neutral-0));
    border-radius: 50%;
    border: solid var(--klik-input-border-width) rgb(var(--klik-color-neutral-400));
    transform: translateX(calc((var(--width) - var(--height)) / -2));
    transition: var(--klik-transition-fast) transform ease, var(--klik-transition-fast) background-color,
      var(--klik-transition-fast) border-color, var(--klik-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: rgb(var(--klik-color-neutral-400));
    border-color: rgb(var(--klik-color-neutral-400));
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: rgb(var(--klik-color-neutral-0));
    border-color: rgb(var(--klik-color-neutral-400));
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input${focusVisibleSelector} ~ .switch__control {
    background-color: rgb(var(--klik-color-neutral-400));
    border-color: rgb(var(--klik-color-neutral-400));
  }

  .switch:not(.switch--checked):not(.switch--disabled)
    .switch__input${focusVisibleSelector}
    ~ .switch__control
    .switch__thumb {
    background-color: rgb(var(--klik-color-neutral-0));
    border-color: rgb(var(--klik-color-primary-600));
    box-shadow: 0 0 0 var(--klik-focus-ring-width) rgb(var(--klik-color-primary-500) / var(--klik-focus-ring-alpha));
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: rgb(var(--klik-color-primary-600));
    border-color: rgb(var(--klik-color-primary-600));
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: rgb(var(--klik-color-neutral-0));
    border-color: rgb(var(--klik-color-primary-600));
    transform: translateX(calc((var(--width) - var(--height)) / 2));
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: rgb(var(--klik-color-primary-600));
    border-color: rgb(var(--klik-color-primary-600));
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: rgb(var(--klik-color-neutral-0));
    border-color: rgb(var(--klik-color-primary-600));
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input${focusVisibleSelector} ~ .switch__control {
    background-color: rgb(var(--klik-color-primary-600));
    border-color: rgb(var(--klik-color-primary-600));
  }

  .switch.switch--checked:not(.switch--disabled)
    .switch__input${focusVisibleSelector}
    ~ .switch__control
    .switch__thumb {
    background-color: rgb(var(--klik-color-neutral-0));
    border-color: rgb(var(--klik-color-primary-600));
    box-shadow: 0 0 0 var(--klik-focus-ring-width) rgb(var(--klik-color-primary-500) / var(--klik-focus-ring-alpha));
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    line-height: var(--height);
    margin-left: 0.5em;
    user-select: none;
  }
`;

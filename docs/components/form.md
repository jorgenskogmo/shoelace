# Form

[component-header:klik-form]

Forms collect data that can easily be processed and sent to a server.

All Shoelace components make use of a [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) to encapsulate markup, styles, and behavior. One caveat of this approach is that native `<form>` elements will not recognize Shoelace form controls.

This component solves that problem by serializing _both_ Shoelace form controls and native form controls when the form is submitted. The resulting form data is exposed in the `klik-submit` event as a [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) object in `event.detail.formData`. You can also find an array of form controls in `event.detail.formControls`.

Shoelace forms don't make use of `action` and `method` attributes and they don't submit the same way as native forms. To handle submission, you need to listen for the `klik-submit` event as shown in the example below and make an XHR request with the resulting form data.

```html preview
<klik-form class="form-overview">
  <klik-input name="name" type="text" label="Name"></klik-input>
  <br>
  <klik-select name="favorite" label="Select your favorite">
    <klik-menu-item value="birds">Birds</klik-menu-item>
    <klik-menu-item value="cats">Cats</klik-menu-item>
    <klik-menu-item value="dogs">Dogs</klik-menu-item>
  </klik-select>
  <br>
  <klik-checkbox name="agree" value="yes">
    I totally agree
  </klik-checkbox>
  <br><br>
  <klik-button submit>Submit</klik-button>
</klik-form>

<script>
  const form = document.querySelector('.form-overview');

  // Watch for the slSubmit event
  form.addEventListener('klik-submit', event => {
    const formData = event.detail.formData;
    let output = '';

    //
    // Example 1: Post data to a server and wait for a JSON response
    //
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });

    //
    // Example 2: Output all form control names + values
    //
    for (const entry of formData.entries()) {
      output += `${entry[0]}: ${entry[1]}\n`;
    }
    alert(output);

    //
    // Example 3: Get all form controls that were serialized as 
    // an array of HTML elements
    //
    console.log(event.detail.formControls);
  });
</script>
```

```jsx react
import { 
  SlButton,
  SlCheckbox, 
  SlForm, 
  SlInput,
  SlMenuItem, 
  SlSelect,
} from '@shoelace-style/shoelace/dist/react';

function handleSubmit(event) {
  const formData = event.detail.formData;
  let output = '';

  //
  // Example 1: Post data to a server and wait for a JSON response
  //
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(result => {
    console.log('Success:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  //
  // Example 2: Output all form control names + values
  //
  for (const entry of formData.entries()) {
    output += `${entry[0]}: ${entry[1]}\n`;
  }
  alert(output);

  //
  // Example 3: Get all form controls that were serialized as 
  // an array of HTML elements
  //
  console.log(event.detail.formControls);
}

const App = () => (
  <SlForm onSlSubmit={handleSubmit}>
    <SlInput name="name" type="text" label="Name" />
    <br />
    <SlSelect name="favorite" label="Select your favorite">
      <SlMenuItem value="birds">Birds</SlMenuItem>
      <SlMenuItem value="cats">Cats</SlMenuItem>
      <SlMenuItem value="dogs">Dogs</SlMenuItem>
    </SlSelect>
    <br />
    <SlCheckbox name="agree" value="yes">
      I totally agree
    </SlCheckbox>
    <br /><br />
    <SlButton submit>Submit</SlButton>
  </SlForm>
);
```

## Form Control Validation

Client-side validation can be enabled through the browser's [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation) for many form controls. You can enable it using props such as `required`, `pattern`, `minlength`, and `maxlength`. As the user interacts with the form control, the `invalid` attribute will reflect its validity based on its current value and the constraints that have been defined.

When a form control is invalid, the containing form will not be submitted. Instead, the browser will show the user a relevant error message. If you don't want to use client-side validation, you can suppress this behavior by adding `novalidate` to the `<klik-form>` element.

All form controls support validation, but not all validation props are available for every component. Refer to a component's documentation to see which validation props it supports.

!> Client-side validation can be used to improve the UX of forms, but it is not a replacement for server-side validation. **You should always validate and sanitize user input on the server!**

### Required Fields

To make a field required, use the `required` prop. The form will not be submitted if a required form control is empty.

```html preview
<klik-form class="input-validation-required">
  <klik-input name="name" label="Name" required></klik-input>
  <br>
  <klik-select label="Favorite Animal" clearable required>
    <klik-menu-item value="birds">Birds</klik-menu-item>
    <klik-menu-item value="cats">Cats</klik-menu-item>
    <klik-menu-item value="dogs">Dogs</klik-menu-item>
    <klik-menu-item value="other">Other</klik-menu-item>
  </klik-select>
  <br>
  <klik-textarea name="comment" label="Comment" required></klik-textarea>
  <br>
  <klik-checkbox required>Check me before submitting</klik-checkbox>
  <br><br>
  <klik-button type="primary" submit>Submit</klik-button>
</klik-form>

<script>
  const form = document.querySelector('.input-validation-required');
  form.addEventListener('klik-submit', () => alert('All fields are valid!'));
</script>
```

```jsx react
import { 
  SlButton,
  SlCheckbox, 
  SlForm, 
  SlInput,
  SlMenuItem, 
  SlSelect,
  SlTextarea
} from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlForm onSlSubmit={() => alert('All fields are valid!')}>
    <SlInput name="name" label="Name" required />
    <br />
    <SlSelect label="Favorite Animal" clearable required>
      <SlMenuItem value="birds">Birds</SlMenuItem>
      <SlMenuItem value="cats">Cats</SlMenuItem>
      <SlMenuItem value="dogs">Dogs</SlMenuItem>
      <SlMenuItem value="other">Other</SlMenuItem>
    </SlSelect>
    <br />
    <SlTextarea name="comment" label="Comment" required></SlTextarea>
    <br />
    <SlCheckbox required>Check me before submitting</SlCheckbox>
    <br /><br />
    <SlButton type="primary" submit>Submit</SlButton>
  </SlForm>
);
```

### Input Patterns

To restrict a value to a specific [pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern), use the `pattern` attribute. This example only allows the letters A-Z, so the form will not submit if a number or symbol is entered. This only works with `<klik-input>` elements.

```html preview
<klik-form class="input-validation-pattern">
  <klik-input name="letters" required label="Letters" pattern="[A-Za-z]+"></klik-input>
  <br>
  <klik-button type="primary" submit>Submit</klik-button>
</klik-form>

<script>
  const form = document.querySelector('.input-validation-pattern');
  form.addEventListener('klik-submit', () => alert('All fields are valid!'));
</script>
```

```jsx react
import { 
  SlButton,
  SlForm, 
  SlInput
} from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlForm onSlSubmit={() => alert('All fields are valid!')}>
    <SlInput name="letters" required label="Letters" pattern="[A-Za-z]+" />
    <br />
    <SlButton type="primary" submit>Submit</SlButton>
  </SlForm>
);
```

### Input Types

Some input types will automatically trigger constraints, such as `email` and `url`.

```html preview
<klik-form class="input-validation-type">
  <klik-input type="email" label="Email" placeholder="you@example.com" required></klik-input>
  <br>
  <klik-input type="url" label="URL" placeholder="https://example.com/" required></klik-input>
  <br>
  <klik-button type="primary" submit>Submit</klik-button>
</klik-form>

<script>
  const form = document.querySelector('.input-validation-type');
  form.addEventListener('klik-submit', () => alert('All fields are valid!'));
</script>
```

```jsx react
import { 
  SlButton,
  SlForm, 
  SlInput
} from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlForm onSlSubmit={() => alert('All fields are valid!')}>
    <SlInput type="email" label="Email" placeholder="you@example.com" required />
    <br />
    <SlInput type="url" label="URL" placeholder="https://example.com/" required />
    <br />
    <SlButton type="primary" submit>Submit</SlButton>
  </SlForm>
);
```

### Custom Validation

To create a custom validation error, use the `setCustomValidity` method. The form will not be submitted when this method is called with anything other than an empty string, and its message will be shown by the browser as the validation error. To make the input valid again, call the method a second time with an empty string as the argument.

```html preview
<klik-form class="input-validation-custom">
  <klik-input label="Type 'shoelace'" required></klik-input>
  <br>
  <klik-button type="primary" submit>Submit</klik-button>
</klik-form>

<script>
  const form = document.querySelector('.input-validation-custom');
  const input = form.querySelector('klik-input');

  form.addEventListener('klik-submit', () => alert('All fields are valid!'));
  input.addEventListener('klik-input', () => {
    if (input.value === 'shoelace') {
      input.setCustomValidity('');
    } else {
      input.setCustomValidity('Hey, you\'re supposed to type \'shoelace\' before submitting this!');
    }
  });
</script>
```

```jsx react
import { useRef, useState } from 'react';
import { 
  SlButton,
  SlForm, 
  SlInput
} from '@shoelace-style/shoelace/dist/react';

const App = () => {
  const input = useRef(null);
  const [value, setValue] = useState('');

  function handleInput(event) {
    setValue(event.target.value);

    if (event.target.value === 'shoelace') {
      input.current.setCustomValidity('');
    } else {
      input.current.setCustomValidity('Hey, you\'re supposed to type \'shoelace\' before submitting this!');
    }
  }

  return (
    <SlForm onSlSubmit={() => alert('All fields are valid!')}>
      <SlInput 
        ref={input}
        label="Type 'shoelace'" 
        required 
        value={value} 
        onSlInput={handleInput}
      />
      <br />
      <SlButton type="primary" submit>Submit</SlButton>
    </SlForm>
  );
};
```

### Custom Validation Styles

The `invalid` attribute reflects the form control's validity, so you can style invalid fields using the `[invalid]` selector. The example below demonstrates how you can give erroneous fields a different appearance. Type something other than "shoelace" to demonstrate this.

```html preview
<klik-input class="custom-input" required pattern="shoelace">
  <small slot="help-text">Please enter "shoelace" to continue</small>
</klik-input>

<style>
  .custom-input[invalid]:not([disabled])::part(label),
  .custom-input[invalid]:not([disabled])::part(help-text) {
    color: rgb(var(--klik-color-danger-600));
  }

  .custom-input[invalid]:not([disabled])::part(base) {      
    border-color: rgb(var(--klik-color-danger-500));
  } 

  .custom-input[invalid]:focus-within::part(base) {
    box-shadow: 0 0 0 var(--klik-focus-ring-width) rgb(var(--klik-color-danger-500) / var(--klik-focus-ring-alpha));
  }
</style>
```

```jsx react
import { SlInput } from '@shoelace-style/shoelace/dist/react';

const css = `
  .custom-input[invalid]:not([disabled])::part(label),
  .custom-input[invalid]:not([disabled])::part(help-text) {
    color: rgb(var(--klik-color-danger-600));
  }

  .custom-input[invalid]:not([disabled])::part(base) {      
    border-color: rgb(var(--klik-color-danger-500));
  } 

  .custom-input[invalid]:focus-within::part(base) {
    box-shadow: 0 0 0 var(--klik-focus-ring-width) rgb(var(--klik-color-danger-500) / var(--klik-focus-ring-alpha));
  }
`;

const App = () => (
  <>
    <SlInput className="custom-input" required pattern="shoelace">
      <small slot="help-text">Please enter "shoelace" to continue</small>
    </SlInput>

    <style>{css}</style>
  </>
);
```

### Third-party Validation

To opt out of the browser's built-in validation and use your own, add the `novalidate` attribute to the form. This will ignore all constraints and prevent the browser from showing its own warnings when form controls are invalid.

Remember that the `invalid` attribute on form controls reflects validity as defined by the [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation). You can set it initially, but the `invalid` attribute will update as the user interacts with the form control. As such, you should not rely on it to set invalid styles using a custom validation library.

Instead, toggle a class and target it in your stylesheet as shown below.

```html
<klik-form novalidate>
  <klik-input class="invalid"></klik-input>
</klik-form>

<style>
  klik-input.invalid {
    ...
  }
</style>
```

[component-metadata:klik-form]

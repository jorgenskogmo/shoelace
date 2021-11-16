# Vue

Vue [plays nice](https://custom-elements-everywhere.com/#vue) with custom elements, so you can use Klik in your Vue apps with ease.

## Installation

To add Klik to your Vue app, install the package from npm.

```bash
npm install @shoelace-style/shoelace
```

You'll need to tell Vue to ignore Klik components. This is pretty easy because they all start with `klik-`.

```js
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.config.compilerOptions.isCustomElement = tag => tag.startsWith('klik-');

app.mount('#app');
```

## Binding Complex Data

When binding complex data such as objects and arrays, use the `.prop` modifier to make Vue bind them as a property instead of an attribute.

```html
<klik-color-picker :swatches.prop="mySwatches" />
```

## Two-way Binding

One caveat is there's currently [no support for v-model on custom elements](https://github.com/vuejs/vue/issues/7830), but you can still achieve two-way binding manually.

```html
<!-- This doesn't work -->
<klik-input v-model="name">

<!-- This works, but it's a bit longer -->
<klik-input :value="name" @input="name = $event.target.value">
```

If that's too verbose for your liking, you can use a custom directive instead. [This utility](https://www.npmjs.com/package/@shoelace-style/vue-klik-model) adds a custom directive that will work just like `v-model` but for Klik components. To install it, use this command.

```bash
npm install @shoelace-style/vue-klik-model
```

Next, import the directive and enable it like this.

```js
import KlikModelDirective from '@shoelace-style/vue-klik-model';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.use(ShoelaceModelDirective);

app.config.compilerOptions.isCustomElement = tag => tag.startsWith('klik-');

app.mount('#app');
```

Now you can use the `v-klik-model` directive to keep your data in sync!

```html
<klik-input v-klik-model="name">
```

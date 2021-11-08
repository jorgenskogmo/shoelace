<div class="splash">
<div class="splash-start">

## Quick Start

Add the following code to your page.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@%VERSION%/dist/themes/light.css">
<script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@%VERSION%/dist/shoelace.js"></script>
```

Now you have access to all of Shoelace's components! Try adding a button:

```html
<klik-button>Click me</klik-button>
```

This will load all of Shoelace's components, but you should probably only load the ones you're actually using. To learn how, or for other ways to install Shoelace, refer to the [installation instructions](getting-started/installation).


## New to Web Components?

**TL;DR** – we finally have a way to create [our own HTML elements](https://html.spec.whatwg.org/multipage/custom-elements.html) and use them in any framework we want!

Thanks to the popularity of frameworks such as Angular, Vue, and React, component-driven development has become a part of our every day lives. Components help us encapsulate styles and behaviors into reusable building blocks. They make a lot of sense in terms of design, development, and testing.

Unfortunately, _framework-specific_ components fail us in a number of ways:

- You can only use them in the framework they're designed for 🔒
- Their lifespan is limited to that of the framework's ⏳
- New frameworks/versions can lead to breaking changes, requiring substantial effort to update components 😭

Web components solve these problems. They're [supported by all modern browsers](https://caniuse.com/#feat=custom-elementsv1), they're framework-agnostic, and they're [part of the standard](https://developer.mozilla.org/en-US/docs/Web/Web_Components), so we know they'll be supported for many years to come.

This is the technology that Shoelace is built on.

## What Problem Does This Solve?

Shoelace provides a collection of professionally designed, every day UI components built on a framework-agnostic technology. Why spend hundreds of hours (or more) building a design system from scratch? Why make a component library that only works with one framework?

With Shoelace, you can:

- Start building things faster (no need to roll your own buttons)
- Build multiple apps with different frameworks that all share the same UI
- Skip having to learn a new component library every time you switch frameworks

If your organization is looking to build a design system, [Shoelace will save you thousands of dollars](https://medium.com/eightshapes-llc/and-you-thought-buttons-were-easy-26eb5b5c1871).* All the foundational components you need are right here, ready to be customized for your brand. And since it's built on web standards, browsers will continue to support it for many years to come.

Whether you use Shoelace as a starting point for your organization's design system or for a fun personal project, there's no limit to what you can do with it.

<small>*Please consider giving back some of what you save by [supporting this project with a sponsorship](https://github.com/sponsors/claviska).</small>

## Browser Support

Shoelace is tested in the latest two versions of the following browsers.

<img src="/assets/images/chrome.png" alt="Chrome" width="64" height="64">
<img src="/assets/images/edge.png" alt="Edge" width="64" height="64">
<img src="/assets/images/firefox.png" alt="Firefox" width="64" height="64">
<img src="/assets/images/opera.png" alt="Opera" width="64" height="64">
<img src="/assets/images/safari.png" alt="Safari" width="64" height="64">

Critical bug fixes in earlier versions will be addressed based on their severity and impact.

If you need to support IE11 or pre-Chromium Edge, this library isn't for you. Although web components can (to some degree) be polyfilled for legacy browsers, supporting them is outside the scope of this project. If you're using Shoelace in such a browser, you're gonna have a bad time. ⛷

## License

Shoelace is designed in New Hampshire by [Cory LaViska](https://twitter.com/claviska). It's available under the terms of the MIT license.

Designing, developing, and supporting this library requires a lot of time, effort, and skill. If you're using this software to make a profit, I respectfully ask that you help [fund its development](https://github.com/sponsors/claviska) by becoming a sponsor.

👇 Your support is very much appreciated! 👇

<klik-button class="repo-button repo-button--sponsor" href="https://github.com/sponsors/claviska" target="_blank">
  <klik-icon name="heart"></klik-icon> Become a sponsor
</klik-button>

<klik-button class="repo-button repo-button--github" href="https://github.com/shoelace-style/shoelace/stargazers" target="_blank">
  <klik-icon name="github"></klik-icon> <span class="github-star-count">Star</span>
</klik-button>

<klik-button class="repo-button repo-button--twitter" href="https://twitter.com/shoelace_style" target="_blank">
  <klik-icon name="twitter"></klik-icon> Follow
</klik-button>

## Attribution

Special thanks to the following projects and individuals that help make Shoelace possible.

- Components are built with [LitElement](https://lit-element.polymer-project.org/)
- Component metadata is generated by the [Custom Elements Manifest Analyzer](https://github.com/open-wc/custom-elements-manifest)
- Documentation is powered by [Docsify](https://docsify.js.org/)
- CDN services are provided by [jsDelivr](https://www.jsdelivr.com/)
- Color primitives are derived from [Tailwind](https://tailwindcss.com/)
- Icons are courtesy of [Bootstrap Icons](https://icons.getbootstrap.com/)
- The homepage illustration is courtesy of [unDraw](https://undraw.co/)
- Positioning of menus, tooltips, et al is handled by [Popper.js](https://popper.js.org/)
- Animations are courtesy of [animate.css](https://animate.style/)
- QR codes are generated with [qr-creator](https://github.com/nimiq/qr-creator)
- Search is powered by [Lunr](https://lunrjs.com/)
- The Shoelace logo was designed with a single shoelace by [Adam K Olson](https://twitter.com/adamkolson)

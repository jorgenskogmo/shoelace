# Todo

**Compat**

- [x] Build test-page in HTML
- [ ] Build test-page in React
- [ ] Build test-page in Angular
- [ ] Build test-page in Vue



## Planning

- [ ] discuss whether we should remove or keep shoelace branding

**Shoelace sponsorship**
- [ ] update Cory
- [ ] update overview of hours -> how many will be free?
- [ ] speak to giovanni
- [ ] write wishlist to Cory (what do we need from him?)
- [ ] discuss rebranding with Cory


## Tooling

**Storybook**

The Storybook install seems rather invasive — can we do without?

- [ ] Stories can be repaced by the Docsify docs
- [ ] What to do with the nice color-checking tools?
- [ ] Chromatic can be replaced by Percy + Puppeteer, and (also) run locally _before_ push. ( -> We dont want green pushes that fails in CI)


**Packaging**

We want to support both npm packages (under our namespace),  
and the current js-cdn bundle (with the cool cherry picking!).

- [ ] Change package, so we can import from `@namespace/klik-ui/` and `@namespace/klik-ui/react` (instead of `@namespace/klik-ui/dist/react` etc)
- [ ] figure out GH publish npm stuff

**Testing**

- [ ] 
- [ ] auto generate 


## Resources

- [x] klik flags
- [x] klik icons
- [x] klik fonts

Create script that syncs icons and flags with figma


## Components

- [ ] obtain parity
- [ ] ensure compatibility
- [ ] extend with layout primitives: the good parts from style-props (maxW, breakpoints, spacing, direction etc)


## Styling

- [x] SL Defaults (light/dark)
- [ ] Override with klik defaults
- [ ] Agree on runtime-setable vars and alias them (colorScheme)
- [ ] hard-bake defaults into components (to minimize listings in :root)

- [ ] design-token import script
- [ ] build theme (decide what goes into the :root and 'css bundle')

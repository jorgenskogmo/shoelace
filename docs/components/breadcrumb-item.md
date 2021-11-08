# Breadcrumb Item

[component-header:klik-breadcrumb-item]

Breadcrumb Items are used inside [breadcrumbs](/components/breadcrumb) to represent different links.

```html preview
<klik-breadcrumb>
  <klik-breadcrumb-item>
    <klik-icon slot="prefix" name="house"></klik-icon>
    Home
  </klik-breadcrumb-item>
  <klik-breadcrumb-item>Clothing</klik-breadcrumb-item>
  <klik-breadcrumb-item>Shirts</klik-breadcrumb-item>
</klik-breadcrumb>
```

```jsx react
import { SlBreadcrumb, SlBreadcrumbItem, SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlBreadcrumb>
    <SlBreadcrumbItem>
      <SlIcon slot="prefix" name="house"></SlIcon>
      Home
    </SlBreadcrumbItem>
    <SlBreadcrumbItem>Clothing</SlBreadcrumbItem>
    <SlBreadcrumbItem>Shirts</SlBreadcrumbItem>
  </SlBreadcrumb>
);
```

?> Additional demonstrations can be found in the [breadcrumb examples](/components/breadcrumb).

[component-metadata:klik-breadcrumb-item]

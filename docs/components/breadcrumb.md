# Breadcrumb

[component-header:klik-breadcrumb]

Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.

Breadcrumbs are usually placed before a page's main content with the current page shown last to indicate the user's position in the navigation.

```html preview
<klik-breadcrumb>
  <klik-breadcrumb-item>Catalog</klik-breadcrumb-item>
  <klik-breadcrumb-item>Clothing</klik-breadcrumb-item>
  <klik-breadcrumb-item>Women's</klik-breadcrumb-item>
  <klik-breadcrumb-item>Shirts &amp; Tops</klik-breadcrumb-item>
</klik-breadcrumb>
```

```jsx react
import { SlBreadcrumb, SlBreadcrumbItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlBreadcrumb>
    <SlBreadcrumbItem>Catalog</SlBreadcrumbItem>
    <SlBreadcrumbItem>Clothing</SlBreadcrumbItem>
    <SlBreadcrumbItem>Women's</SlBreadcrumbItem>
    <SlBreadcrumbItem>Shirts &amp; Tops</SlBreadcrumbItem>
  </SlBreadcrumb>
);
```

## Examples

### Breadcrumb Links

By default, breadcrumb items are rendered as buttons so you can use them to navigate single-page applications. In this case, you'll need to add event listeners to handle clicks.

For websites, you'll probably want to use links instead. You can make any breadcrumb item a link by applying an `href` attribute to it. Now, when the user activates it, they'll be taken to the corresponding page — no event listeners required.

```html preview
<klik-breadcrumb>
  <klik-breadcrumb-item href="https://example.com/home">
    Homepage
  </klik-breadcrumb-item>

  <klik-breadcrumb-item href="https://example.com/home/services">
    Our Services
  </klik-breadcrumb-item>

  <klik-breadcrumb-item href="https://example.com/home/services/digital">
    Digital Media
  </klik-breadcrumb-item>

  <klik-breadcrumb-item href="https://example.com/home/services/digital/web-design">
    Web Design
  </klik-breadcrumb-item>
</klik-breadcrumb>
```

```jsx react
import { SlBreadcrumb, SlBreadcrumbItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlBreadcrumb>
    <SlBreadcrumbItem href="https://example.com/home">
      Homepage
    </SlBreadcrumbItem>

    <SlBreadcrumbItem href="https://example.com/home/services">
      Our Services
    </SlBreadcrumbItem>

    <SlBreadcrumbItem href="https://example.com/home/services/digital">
      Digital Media
    </SlBreadcrumbItem>

    <SlBreadcrumbItem href="https://example.com/home/services/digital/web-design">
      Web Design
    </SlBreadcrumbItem>
  </SlBreadcrumb>
);
```

### Custom Separators

Use the `separator` slot to change the separator that goes between breadcrumb items. Icons work well, but you can also use text or an image.

```html preview
<klik-breadcrumb>
  <klik-icon name="dot" slot="separator"></klik-icon>
  <klik-breadcrumb-item>First</klik-breadcrumb-item>
  <klik-breadcrumb-item>Second</klik-breadcrumb-item>
  <klik-breadcrumb-item>Third</klik-breadcrumb-item> 
</klik-breadcrumb>

<br>

<klik-breadcrumb>
  <klik-icon name="arrow-right" slot="separator"></klik-icon>
  <klik-breadcrumb-item>First</klik-breadcrumb-item>
  <klik-breadcrumb-item>Second</klik-breadcrumb-item>
  <klik-breadcrumb-item>Third</klik-breadcrumb-item> 
</klik-breadcrumb>

<br>

<klik-breadcrumb>
  <span slot="separator">/</span>
  <klik-breadcrumb-item>First</klik-breadcrumb-item>
  <klik-breadcrumb-item>Second</klik-breadcrumb-item>
  <klik-breadcrumb-item>Third</klik-breadcrumb-item> 
</klik-breadcrumb>
```

```jsx react
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import { SlBreadcrumb, SlBreadcrumbItem, SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlBreadcrumb>
      <klik-icon name="dot" slot="separator" />
      <SlBreadcrumbItem>First</SlBreadcrumbItem>
      <SlBreadcrumbItem>Second</SlBreadcrumbItem>
      <SlBreadcrumbItem>Third</SlBreadcrumbItem> 
    </SlBreadcrumb>

    <br />

    <SlBreadcrumb>
      <klik-icon name="arrow-right" slot="separator" />
      <SlBreadcrumbItem>First</SlBreadcrumbItem>
      <SlBreadcrumbItem>Second</SlBreadcrumbItem>
      <SlBreadcrumbItem>Third</SlBreadcrumbItem> 
    </SlBreadcrumb>

    <br />

    <SlBreadcrumb>
      <span slot="separator">/</span>
      <SlBreadcrumbItem>First</SlBreadcrumbItem>
      <SlBreadcrumbItem>Second</SlBreadcrumbItem>
      <SlBreadcrumbItem>Third</SlBreadcrumbItem> 
    </SlBreadcrumb>
  </>
);
```

### Prefixes

Use the `prefix` slot to add content before any breadcrumb item.

```html preview
<klik-breadcrumb>
  <klik-breadcrumb-item>
    <klik-icon slot="prefix" name="house"></klik-icon>
    Home
  </klik-breadcrumb-item>
  <klik-breadcrumb-item>Articles</klik-breadcrumb-item>
  <klik-breadcrumb-item>Traveling</klik-breadcrumb-item>
</klik-breadcrumb>
```

```jsx react
import { SlBreadcrumb, SlBreadcrumbItem, SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlBreadcrumb>
    <SlBreadcrumbItem>
      <klik-icon slot="prefix" name="house"></klik-icon>
      Home
    </SlBreadcrumbItem>
    <SlBreadcrumbItem>Articles</SlBreadcrumbItem>
    <SlBreadcrumbItem>Traveling</SlBreadcrumbItem>
  </SlBreadcrumb>
);
```

### Suffixes

Use the `suffix` slot to add content after any breadcrumb item.

```html preview
<klik-breadcrumb>
  <klik-breadcrumb-item>Documents</klik-breadcrumb-item>
  <klik-breadcrumb-item>Policies</klik-breadcrumb-item>
  <klik-breadcrumb-item>
    Security
    <klik-icon slot="suffix" name="shield-lock"></klik-icon>
  </klik-breadcrumb-item>
</klik-breadcrumb>
```

```jsx react
import { SlBreadcrumb, SlBreadcrumbItem, SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlBreadcrumb>
    <SlBreadcrumbItem>Documents</SlBreadcrumbItem>
    <SlBreadcrumbItem>Policies</SlBreadcrumbItem>
    <SlBreadcrumbItem>
      Security
      <SlIcon slot="suffix" name="shield-lock"></SlIcon>
    </SlBreadcrumbItem>
  </SlBreadcrumb>
);
```

### With Dropdowns

Dropdown menus can be placed in a prefix or suffix slot to provide additional options.

```html preview
<klik-breadcrumb>
  <klik-breadcrumb-item>Homepage</klik-breadcrumb-item>
  <klik-breadcrumb-item>Our Services</klik-breadcrumb-item>
  <klik-breadcrumb-item>Digital Media</klik-breadcrumb-item>
  <klik-breadcrumb-item>
    Web Design
    <klik-dropdown slot="suffix">
      <klik-button slot="trigger" size="small" circle>
        <klik-icon label="More options" name="three-dots"></klik-icon>
      </klik-button>
      <klik-menu>
        <klik-menu-item checked>Web Design</klik-menu-item>
        <klik-menu-item>Web Development</klik-menu-item>
        <klik-menu-item>Marketing</klik-menu-item>
      </klik-menu>
    </klik-dropdown>    
  </klik-breadcrumb-item>
</klik-breadcrumb>
```

```jsx react
import { 
  SlBreadcrumb, 
  SlBreadcrumbItem, 
  SlButton,
  SlDropdown,
  SlIcon,
  SlMenu,
  SlMenuItem
} from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlBreadcrumb>
    <SlBreadcrumbItem>Homepage</SlBreadcrumbItem>
    <SlBreadcrumbItem>Our Services</SlBreadcrumbItem>
    <SlBreadcrumbItem>Digital Media</SlBreadcrumbItem>
    <SlBreadcrumbItem>
      Web Design
      <SlDropdown slot="suffix">
        <SlButton slot="trigger" size="small" circle>
          <SlIcon label="More options" name="three-dots"></SlIcon>
        </SlButton>
        <SlMenu>
          <SlMenuItem checked>Web Design</SlMenuItem>
          <SlMenuItem>Web Development</SlMenuItem>
          <SlMenuItem>Marketing</SlMenuItem>
        </SlMenu>
      </SlDropdown>    
    </SlBreadcrumbItem>
  </SlBreadcrumb>
);
```

[component-metadata:klik-breadcrumb]

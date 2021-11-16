# Icon

[component-header:klik-icon]

Icons are symbols that can be used to represent various options within an application.

Shoelace comes bundled with over 1,300 icons courtesy of the [Bootstrap Icons](https://icons.getbootstrap.com/) project. These icons are part of the `default` icon library. If you prefer, you can register [custom icon libraries](#icon-libraries) as well.

Click or tap on an icon below to copy its name and use it like this.

```html
<klik-icon name="icon-name-here"></klik-icon>
```

<div class="icon-search">
  <div class="icon-search-controls">
    <klik-input placeholder="Search Icons" clearable>
      <klik-icon slot="prefix" name="search"></klik-icon>
    </klik-input>
    <klik-select value="outline">
      <klik-menu-item value="outline">Outlined</klik-menu-item>
      <klik-menu-item value="fill">Filled</klik-menu-item>
      <klik-menu-item value="all">All icons</klik-menu-item>
    </klik-select>
  </div>
  <div class="icon-list"></div>
  <input type="text" class="icon-copy-input">
</div>

## Examples

### Sizing

Icons are sized relative to the current font size. To change their size, set the `font-size` property on the icon itself or on a parent element as shown below.

```html preview
<div style="font-size: 32px;">
  <klik-icon name="exclamation-triangle"></klik-icon>
  <klik-icon name="archive"></klik-icon>
  <klik-icon name="battery-charging"></klik-icon>
  <klik-icon name="bell"></klik-icon>
  <klik-icon name="clock"></klik-icon>
  <klik-icon name="cloud"></klik-icon>
  <klik-icon name="download"></klik-icon>
  <klik-icon name="file-earmark"></klik-icon>
  <klik-icon name="flag"></klik-icon>
  <klik-icon name="heart"></klik-icon>
  <klik-icon name="image"></klik-icon>
  <klik-icon name="lightning"></klik-icon>
  <klik-icon name="mic"></klik-icon>
  <klik-icon name="search"></klik-icon>
  <klik-icon name="star"></klik-icon>
  <klik-icon name="trash"></klik-icon>
</div>
```

```jsx react
import { SlIcon } from '@lego/klik/dist/react';

const App = () => (
  <div style={{ fontSize: '32px' }}>
    <SlIcon name="exclamation-triangle" />
    <SlIcon name="archive" />
    <SlIcon name="battery-charging" />
    <SlIcon name="bell" />
    <SlIcon name="clock" />
    <SlIcon name="cloud" />
    <SlIcon name="download" />
    <SlIcon name="file-earmark" />
    <SlIcon name="flag" />
    <SlIcon name="heart" />
    <SlIcon name="image" />
    <SlIcon name="lightning" />
    <SlIcon name="mic" />
    <SlIcon name="search" />
    <SlIcon name="star" />
    <SlIcon name="trash" />
  </div>  
);
```

### Custom Icons

Custom icons can be loaded individually with the `src` attribute. Only SVGs on a local or CORS-enabled endpoint are supported. If you're using more than one custom icon, it might make sense to register a [custom icon library](#icon-libraries).

```html preview
<klik-icon src="https://shoelace.style/assets/images/shoe.svg" style="font-size: 8rem;"></klik-icon>
```


```jsx react
import { SlIcon } from '@lego/klik/dist/react';

const App = () => (
  <SlIcon src="https://shoelace.style/assets/images/shoe.svg" style={{ fontSize: '8rem' }}></SlIcon>
);
```

## Icon Libraries

You can register additional icons to use with the `<klik-icon>` component through icon libraries. Icon files can exist locally or on a CORS-enabled endpoint (e.g. a CDN). There is no limit to how many icon libraries you can register and there is no cost associated with registering them, as individual icons are only requested when they're used.

Shoelace ships with two built-in icon libraries, `default` and `system`. The [default icon library](#customizing-the-default-library) contains all of the icons in the Bootstrap Icons project. The [system icon library](#customizing-the-system-library) contains only a small subset of icons that are used internally by Klik components.

To register an additional icon library, use the `registerIconLibrary()` function that's exported from `utilities/icon-library.js`. At a minimum, you must provide a name and a resolver function. The resolver function translates an icon name to a URL where the corresponding SVG file exists. Refer to the examples below to better understand how it works.

If necessary, a mutator function can be used to mutate the SVG element before rendering. This is necessary for some libraries due to the many possible ways SVGs are crafted. For example, icons should ideally inherit the current text color via `currentColor`, so you may need to apply `fill="currentColor` or `stroke="currentColor"` to the SVG element using this function.

Here's an example that registers an icon library located in the `/assets/icons` directory.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('my-icons', {
    resolver: name => `/assets/icons/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>
```

To display an icon, set the `library` and `name` attributes of an `<klik-icon>` element.

```html
<!-- This will show the icon located at /assets/icons/smile.svg -->
<klik-icon library="my-icons" name="smile"></klik-icon>
```

If an icon is used before registration occurs, it will be empty initially but shown when registered.

The following examples demonstrate how to register a number of popular, open source icon libraries via CDN. Feel free to adapt the code as you see fit to use your own origin or naming conventions.

### Boxicons

This will register the [Boxicons](https://boxicons.com/) library using the jsDelivr CDN. This library has three variations: regular (`bx-*`), solid (`bxs-*`), and logos (`bxl-*`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Creative Commons 4.0 License](https://github.com/atisawd/boxicons#license).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('boxicons', {
    resolver: name => {
      let folder = 'regular';
      if (name.substring(0, 4) === 'bxs-') folder = 'solid';
      if (name.substring(0, 4) === 'bxl-') folder = 'logos';
      return `https://cdn.jsdelivr.net/npm/boxicons@2.0.5/svg/${folder}/${name}.svg`;
    },
    mutator:svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <klik-icon library="boxicons" name="bx-bot"></klik-icon>
  <klik-icon library="boxicons" name="bx-cookie"></klik-icon>
  <klik-icon library="boxicons" name="bx-joystick"></klik-icon>
  <klik-icon library="boxicons" name="bx-save"></klik-icon>
  <klik-icon library="boxicons" name="bx-server"></klik-icon>
  <klik-icon library="boxicons" name="bx-wine"></klik-icon>
  <br>
  <klik-icon library="boxicons" name="bxs-bot"></klik-icon>
  <klik-icon library="boxicons" name="bxs-cookie"></klik-icon>
  <klik-icon library="boxicons" name="bxs-joystick"></klik-icon>
  <klik-icon library="boxicons" name="bxs-save"></klik-icon>
  <klik-icon library="boxicons" name="bxs-server"></klik-icon>
  <klik-icon library="boxicons" name="bxs-wine"></klik-icon>
  <br>
  <klik-icon library="boxicons" name="bxl-apple"></klik-icon>
  <klik-icon library="boxicons" name="bxl-chrome"></klik-icon>
  <klik-icon library="boxicons" name="bxl-edge"></klik-icon>
  <klik-icon library="boxicons" name="bxl-firefox"></klik-icon>
  <klik-icon library="boxicons" name="bxl-opera"></klik-icon>
  <klik-icon library="boxicons" name="bxl-microsoft"></klik-icon>
</div>
```

### Feather Icons

This will register the [Feather Icons](https://feathericons.com/) library using the jsDelivr CDN.

Icons in this library are licensed under the [MIT License](https://github.com/feathericons/feather/blob/master/LICENSE).

```html preview
<div style="font-size: 24px;">
  <klik-icon library="feather" name="feather"></klik-icon>
  <klik-icon library="feather" name="pie-chart"></klik-icon>
  <klik-icon library="feather" name="settings"></klik-icon>
  <klik-icon library="feather" name="map-pin"></klik-icon>
  <klik-icon library="feather" name="printer"></klik-icon>
  <klik-icon library="feather" name="shopping-cart"></klik-icon>
</div>

<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('feather', {
    resolver: name => `https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/icons/${name}.svg`
  });
</script>
```

### Font Awesome

This will register the [Font Awesome Free](https://fontawesome.com/) library using the jsDelivr CDN. This library has three variations: regular (`far-*`), solid (`fas-*`), and brands (`fab-*`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Font Awesome Free License](https://github.com/FortAwesome/Font-Awesome/blob/master/LICENSE.txt). Some of the icons that appear on the Font Awesome website require a license and are therefore not available in the CDN.

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('fa', {
    resolver: name => {
      const filename = name.replace(/^fa[rbs]-/, '');
      let folder = 'regular';
      if (name.substring(0, 4) === 'fas-') folder = 'solid';
      if (name.substring(0, 4) === 'fab-') folder = 'brands';
      return `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/svgs/${folder}/${filename}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <klik-icon library="fa" name="far-bell"></klik-icon>
  <klik-icon library="fa" name="far-comment"></klik-icon>
  <klik-icon library="fa" name="far-hand-point-right"></klik-icon>
  <klik-icon library="fa" name="far-hdd"></klik-icon>
  <klik-icon library="fa" name="far-heart"></klik-icon>
  <klik-icon library="fa" name="far-star"></klik-icon>
  <br>
  <klik-icon library="fa" name="fas-archive"></klik-icon>
  <klik-icon library="fa" name="fas-book"></klik-icon>
  <klik-icon library="fa" name="fas-chess-knight"></klik-icon>
  <klik-icon library="fa" name="fas-dice"></klik-icon>
  <klik-icon library="fa" name="fas-pizza-slice"></klik-icon>
  <klik-icon library="fa" name="fas-scroll"></klik-icon>
  <br>
  <klik-icon library="fa" name="fab-apple"></klik-icon>
  <klik-icon library="fa" name="fab-chrome"></klik-icon>
  <klik-icon library="fa" name="fab-edge"></klik-icon>
  <klik-icon library="fa" name="fab-firefox"></klik-icon>
  <klik-icon library="fa" name="fab-opera"></klik-icon>
  <klik-icon library="fa" name="fab-microsoft"></klik-icon>    
</div>
```

### Heroicons

This will register the [Heroicons](https://heroicons.com/) library using the jsDelivr CDN.

Icons in this library are licensed under the [MIT License](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('heroicons', {
    resolver: name => `https://cdn.jsdelivr.net/npm/heroicons@0.4.2/outline/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <klik-icon library="heroicons" name="chat"></klik-icon>
  <klik-icon library="heroicons" name="cloud"></klik-icon>
  <klik-icon library="heroicons" name="cog"></klik-icon>
  <klik-icon library="heroicons" name="document-text"></klik-icon>
  <klik-icon library="heroicons" name="gift"></klik-icon>
  <klik-icon library="heroicons" name="volume-up"></klik-icon>
</div>
```

### Iconoir

This will register the [Iconoir](https://iconoir.com/) library using the jsDelivr CDN.

Icons in this library are licensed under the [MIT License](https://github.com/lucaburgio/iconoir/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('iconoir', {
    resolver: name => `https://cdn.jsdelivr.net/gh/lucaburgio/iconoir@latest/icons/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <klik-icon library="iconoir" name="check-circled-outline"></klik-icon>
  <klik-icon library="iconoir" name="drawer"></klik-icon>
  <klik-icon library="iconoir" name="keyframes"></klik-icon>
  <klik-icon library="iconoir" name="headset-help"></klik-icon>
  <klik-icon library="iconoir" name="color-picker"></klik-icon>
  <klik-icon library="iconoir" name="wifi"></klik-icon>
</div>
```

### Ionicons

This will register the [Ionicons](https://ionicons.com/) library using the jsDelivr CDN. This library has three variations: outline (default), filled (`*-filled`), and sharp (`*-sharp`). A mutator function is required to polyfill a handful of styles we're not including.

Icons in this library are licensed under the [MIT License](https://github.com/ionic-team/ionicons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('ionicons', {
    resolver: name => `https://cdn.jsdelivr.net/npm/ionicons@5.1.2/dist/ionicons/svg/${name}.svg`,
    mutator: svg => {
      svg.setAttribute('fill', 'currentColor');
      svg.setAttribute('stroke', 'currentColor');
      [...svg.querySelectorAll('.ionicon-fill-none')].map(el => el.setAttribute('fill', 'none'));
      [...svg.querySelectorAll('.ionicon-stroke-width')].map(el => el.setAttribute('stroke-width', '32px'));
    }
  });
</script>

<div style="font-size: 24px;">
  <klik-icon library="ionicons" name="alarm"></klik-icon>
  <klik-icon library="ionicons" name="american-football"></klik-icon>
  <klik-icon library="ionicons" name="bug"></klik-icon>
  <klik-icon library="ionicons" name="chatbubble"></klik-icon>
  <klik-icon library="ionicons" name="settings"></klik-icon>
  <klik-icon library="ionicons" name="warning"></klik-icon>
  <br>
  <klik-icon library="ionicons" name="alarm-outline"></klik-icon>
  <klik-icon library="ionicons" name="american-football-outline"></klik-icon>
  <klik-icon library="ionicons" name="bug-outline"></klik-icon>
  <klik-icon library="ionicons" name="chatbubble-outline"></klik-icon>
  <klik-icon library="ionicons" name="settings-outline"></klik-icon>
  <klik-icon library="ionicons" name="warning-outline"></klik-icon>
  <br>
  <klik-icon library="ionicons" name="alarm-sharp"></klik-icon>
  <klik-icon library="ionicons" name="american-football-sharp"></klik-icon>
  <klik-icon library="ionicons" name="bug-sharp"></klik-icon>
  <klik-icon library="ionicons" name="chatbubble-sharp"></klik-icon>
  <klik-icon library="ionicons" name="settings-sharp"></klik-icon>
  <klik-icon library="ionicons" name="warning-sharp"></klik-icon>
</div>
```

### Jam Icons

This will register the [Jam Icons](https://jam-icons.com/) library using the jsDelivr CDN. This library has two variations: regular (default) and filled (`*-f`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [MIT License](https://github.com/michaelampr/jam/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('jam', {
    resolver: name => `https://cdn.jsdelivr.net/npm/jam-icons@2.0.0/svg/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <klik-icon library="jam" name="calendar"></klik-icon>
  <klik-icon library="jam" name="camera"></klik-icon>
  <klik-icon library="jam" name="filter"></klik-icon>
  <klik-icon library="jam" name="leaf"></klik-icon>
  <klik-icon library="jam" name="picture"></klik-icon>
  <klik-icon library="jam" name="set-square"></klik-icon>
  <br>
  <klik-icon library="jam" name="calendar-f"></klik-icon>
  <klik-icon library="jam" name="camera-f"></klik-icon>
  <klik-icon library="jam" name="filter-f"></klik-icon>
  <klik-icon library="jam" name="leaf-f"></klik-icon>
  <klik-icon library="jam" name="picture-f"></klik-icon>
  <klik-icon library="jam" name="set-square-f"></klik-icon>
</div>
```

### Material Icons

This will register the [Material Icons](https://material.io/resources/icons/?style=baseline) library using the jsDelivr CDN. This library has three variations: outline (default), round (`*_round`), and sharp (`*_sharp`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/google/material-design-icons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('material', {
    resolver: name => {
      const match = name.match(/^(.*?)(_(round|sharp))?$/);
      return `https://cdn.jsdelivr.net/npm/@material-icons/svg@1.0.5/svg/${match[1]}/${match[3] || 'outline'}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <klik-icon library="material" name="notifications"></klik-icon>
  <klik-icon library="material" name="email"></klik-icon>
  <klik-icon library="material" name="delete"></klik-icon>
  <klik-icon library="material" name="volume_up"></klik-icon>
  <klik-icon library="material" name="settings"></klik-icon>
  <klik-icon library="material" name="shopping_basket"></klik-icon>
  <br>
  <klik-icon library="material" name="notifications_round"></klik-icon>
  <klik-icon library="material" name="email_round"></klik-icon>
  <klik-icon library="material" name="delete_round"></klik-icon>
  <klik-icon library="material" name="volume_up_round"></klik-icon>
  <klik-icon library="material" name="settings_round"></klik-icon>
  <klik-icon library="material" name="shopping_basket_round"></klik-icon>
  <br>
  <klik-icon library="material" name="notifications_sharp"></klik-icon>
  <klik-icon library="material" name="email_sharp"></klik-icon>
  <klik-icon library="material" name="delete_sharp"></klik-icon>
  <klik-icon library="material" name="volume_up_sharp"></klik-icon>
  <klik-icon library="material" name="settings_sharp"></klik-icon>
  <klik-icon library="material" name="shopping_basket_sharp"></klik-icon>
</div>
```

### Remix Icon

This will register the [Remix Icon](https://remixicon.com/) library using the jsDelivr CDN. This library groups icons by categories, so the name must include the category and icon separated by a slash, as well as the `-line` or `-fill` suffix as needed. A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/Remix-Design/RemixIcon/blob/master/License).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('remixicon', {
    resolver: name => {
      const match = name.match(/^(.*?)\/(.*?)?$/);
      match[1] = match[1].charAt(0).toUpperCase() + match[1].slice(1);
      return `https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/${match[1]}/${match[2]}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <klik-icon library="remixicon" name="business/cloud-line"></klik-icon>
  <klik-icon library="remixicon" name="design/brush-line"></klik-icon>
  <klik-icon library="remixicon" name="business/pie-chart-line"></klik-icon>
  <klik-icon library="remixicon" name="development/bug-line"></klik-icon>
  <klik-icon library="remixicon" name="media/image-line"></klik-icon>
  <klik-icon library="remixicon" name="system/alert-line"></klik-icon>
  <br>
  <klik-icon library="remixicon" name="business/cloud-fill"></klik-icon>
  <klik-icon library="remixicon" name="design/brush-fill"></klik-icon>
  <klik-icon library="remixicon" name="business/pie-chart-fill"></klik-icon>
  <klik-icon library="remixicon" name="development/bug-fill"></klik-icon>
  <klik-icon library="remixicon" name="media/image-fill"></klik-icon>
  <klik-icon library="remixicon" name="system/alert-fill"></klik-icon>  
</div>
```

### Unicons

This will register the [Unicons](https://iconscout.com/unicons) library using the jsDelivr CDN. This library has two variations: line (default) and solid (`*-s`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/Iconscout/unicons/blob/master/LICENSE). Some of the icons that appear on the Unicons website, particularly many of the solid variations, require a license and are therefore not available in the CDN.

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('unicons', {
    resolver: name => {
      const match = name.match(/^(.*?)(-s)?$/);
      return `https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.3/svg/${match[2] === '-s' ? 'solid' : 'line'}/${match[1]}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <klik-icon library="unicons" name="clock"></klik-icon>
  <klik-icon library="unicons" name="graph-bar"></klik-icon>
  <klik-icon library="unicons" name="padlock"></klik-icon>
  <klik-icon library="unicons" name="polygon"></klik-icon>
  <klik-icon library="unicons" name="rocket"></klik-icon>
  <klik-icon library="unicons" name="star"></klik-icon>
  <br>
  <klik-icon library="unicons" name="clock-s"></klik-icon>
  <klik-icon library="unicons" name="graph-bar-s"></klik-icon>
  <klik-icon library="unicons" name="padlock-s"></klik-icon>
  <klik-icon library="unicons" name="polygon-s"></klik-icon>
  <klik-icon library="unicons" name="rocket-s"></klik-icon>  
  <klik-icon library="unicons" name="star-s"></klik-icon>
</div>
```

### Customizing the Default Library

The default icon library contains over 1,300 icons courtesy of the [Bootstrap Icons](https://icons.getbootstrap.com/) project. These are the icons that display when you use `<klik-icon>` without the `library` attribute. If you prefer to have these icons resolve elsewhere or to a different icon library, register an icon library using the `default` name and a custom resolver.

This example will load the same set of icons from the jsDelivr CDN instead of your local assets folder.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('default', {
    resolver: name => `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.0.0/icons/${name}.svg`
  });
</script>
```

### Customizing the System Library

The system library contains only the icons used internally by Klik components. Unlike the default icon library, the system library does not rely on physical assets. Instead, its icons are hard-coded as data URIs into the resolver to ensure their availability.

If you want to change the icons Klik uses internally, you can register an icon library using the `system` name and a custom resolver. If you choose to do this, it's your responsibility to provide all of the icons that are required by components. You can reference `src/components/library.system.ts` for a complete list of system icons used by Klik.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('system', {
    resolver: name => `/path/to/custom/icons/${name}.svg`
  });
</script>
```

<!-- Supporting scripts and styles for the search utility -->
<script>
  fetch('/dist/assets/icons/icons.json')
    .then(res => res.json())  
    .then(icons => {
      const container = document.querySelector('.icon-search');
      const input = container.querySelector('klik-input');
      const select = container.querySelector('klik-select');
      const copyInput = container.querySelector('.icon-copy-input');
      const loader = container.querySelector('.icon-loader');
      const list = container.querySelector('.icon-list');
      const queue = [];
      let inputTimeout;

      // Generate icons
      icons.map(i => {
        const item = document.createElement('div');
        item.classList.add('icon-list-item');
        item.setAttribute('data-name', i.name);
        item.setAttribute('data-terms', [i.name, i.title, ...(i.tags || []), ...(i.categories || [])].join(' '));
        item.innerHTML = `
          <svg width="1em" height="1em" fill="currentColor">
            <use xlink:href="/assets/icons/sprite.svg#${i.name}"></use>
          </svg>      
        `;

        const tooltip = document.createElement('klik-tooltip');
        tooltip.content = i.name;
        
        tooltip.appendChild(item);
        list.appendChild(tooltip);

        item.addEventListener('click', () => {
          copyInput.value = i.name;
          copyInput.select();
          document.execCommand('copy');
          tooltip.content = 'Copied!';
          setTimeout(() => tooltip.content = i.name, 1000);
        });
      });

      // Filter as the user types
      input.addEventListener('klik-input', () => {
        clearTimeout(inputTimeout);
        inputTimeout = setTimeout(() => {
          [...list.querySelectorAll('.icon-list-item')].map(item => {
            const filter = input.value.toLowerCase();
            if (filter === '') {
              item.hidden = false;
            } else {
              const terms = item.getAttribute('data-terms').toLowerCase();
              item.hidden = terms.indexOf(filter) < 0;
            }
          });
        }, 250);
      });

      // Sort by type and remember preference
      const iconType = localStorage.getItem('klik-icon:type') || 'outline';
      select.value = iconType;
      list.setAttribute('data-type', select.value);
      select.addEventListener('klik-change', () => {
        list.setAttribute('data-type', select.value);
        localStorage.setItem('klik-icon:type', select.value);
      });
    });
</script>

<style>
  .icon-search {
    border: solid 1px rgb(var(--klik-panel-border-color));
    border-radius: var(--klik-border-radius-medium);
    padding: var(--klik-spacing-medium);
  }

  .icon-search [hidden] {
    display: none;
  }

  .icon-search-controls {
    display: flex;
  }

  .icon-search-controls klik-input {
    flex: 1 1 auto;
  }

  .icon-search-controls klik-select {
    width: 10rem;
    flex: 0 0 auto;
    margin-left: 1rem;
  }

  .icon-loader {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 30vh;
  }

  .icon-list {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    position: relative;
    margin-top: 1rem;
  }

  .icon-loader[hidden],
  .icon-list[hidden] {
    display: none;
  }

  .icon-list-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--klik-border-radius-medium);
    font-size: 24px;
    width: 2em;
    height: 2em;
    margin: 0 auto;
    cursor: copy;
    transition: var(--klik-transition-medium) all;
  }

  .icon-list-item:hover {
    background-color: rgb(var(--klik-color-primary-50));
    color: rgb(var(--klik-color-primary-600));
  }

  .icon-list[data-type="outline"] .icon-list-item[data-name$="-fill"] {
    display: none;
  }

  .icon-list[data-type="fill"] .icon-list-item:not([data-name$="-fill"]) {
    display: none;
  }

  .icon-copy-input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  @media screen and (max-width: 1000px) {
    .icon-list {
      grid-template-columns: repeat(8, 1fr);
    }

    .icon-list-item {
      font-size: 20px;
    }

    .icon-search-controls {
      display: block;
    }

    .icon-search-controls klik-select {
      width: auto;
      margin: 1rem 0 0 0;
    }
  }

  @media screen and (max-width: 500px) {
    .icon-list {
      grid-template-columns: repeat(4, 1fr);
    }    
  }
</style>

[component-metadata:klik-icon]

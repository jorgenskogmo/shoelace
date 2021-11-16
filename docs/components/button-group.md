# Button Group

[component-header:klik-button-group]

Button groups can be used to group related buttons into sections.

```html preview
<klik-button-group>
  <klik-button>Left</klik-button>
  <klik-button>Center</klik-button>
  <klik-button>Right</klik-button>
</klik-button-group>
```

```jsx react
import { SlButton, SlButtonGroup } from '@lego/klik/dist/react';

const App = () => (
  <SlButtonGroup>
    <SlButton>Left</SlButton>
    <SlButton>Center</SlButton>
    <SlButton>Right</SlButton>
  </SlButtonGroup>
);
```

## Examples

### Button Sizes

All button sizes are supported, but avoid mixing sizes within the same button group.

```html preview
<klik-button-group>
  <klik-button size="small">Left</klik-button>
  <klik-button size="small">Center</klik-button>
  <klik-button size="small">Right</klik-button>
</klik-button-group>

<br><br>

<klik-button-group>
  <klik-button size="medium">Left</klik-button>
  <klik-button size="medium">Center</klik-button>
  <klik-button size="medium">Right</klik-button>
</klik-button-group>

<br><br>

<klik-button-group>
  <klik-button size="large">Left</klik-button>
  <klik-button size="large">Center</klik-button>
  <klik-button size="large">Right</klik-button>
</klik-button-group>
```

```jsx react
import { SlButton, SlButtonGroup } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlButtonGroup>
      <SlButton size="small">Left</SlButton>
      <SlButton size="small">Center</SlButton>
      <SlButton size="small">Right</SlButton>
    </SlButtonGroup>

    <br /><br />

    <SlButtonGroup>
      <SlButton size="medium">Left</SlButton>
      <SlButton size="medium">Center</SlButton>
      <SlButton size="medium">Right</SlButton>
    </SlButtonGroup>

    <br /><br />

    <SlButtonGroup>
      <SlButton size="large">Left</SlButton>
      <SlButton size="large">Center</SlButton>
      <SlButton size="large">Right</SlButton>
    </SlButtonGroup>
  </>
);
```

### Theme Buttons

Theme buttons are supported through the button's `type` attribute.

```html preview
<klik-button-group>
  <klik-button type="primary">Left</klik-button>
  <klik-button type="primary">Center</klik-button>
  <klik-button type="primary">Right</klik-button>
</klik-button-group>

<br><br>

<klik-button-group>
  <klik-button type="success">Left</klik-button>
  <klik-button type="success">Center</klik-button>
  <klik-button type="success">Right</klik-button>
</klik-button-group>

<br><br>

<klik-button-group>
  <klik-button type="neutral">Left</klik-button>
  <klik-button type="neutral">Center</klik-button>
  <klik-button type="neutral">Right</klik-button>
</klik-button-group>

<br><br>

<klik-button-group>
  <klik-button type="warning">Left</klik-button>
  <klik-button type="warning">Center</klik-button>
  <klik-button type="warning">Right</klik-button>
</klik-button-group>

<br><br>

<klik-button-group>
  <klik-button type="danger">Left</klik-button>
  <klik-button type="danger">Center</klik-button>
  <klik-button type="danger">Right</klik-button>
</klik-button-group>
```

```jsx react
import { SlButton, SlButtonGroup } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlButtonGroup>
      <SlButton type="primary">Left</SlButton>
      <SlButton type="primary">Center</SlButton>
      <SlButton type="primary">Right</SlButton>
    </SlButtonGroup>

    <br /><br />

    <SlButtonGroup>
      <SlButton type="success">Left</SlButton>
      <SlButton type="success">Center</SlButton>
      <SlButton type="success">Right</SlButton>
    </SlButtonGroup>

    <br /><br />

    <SlButtonGroup>
      <SlButton type="neutral">Left</SlButton>
      <SlButton type="neutral">Center</SlButton>
      <SlButton type="neutral">Right</SlButton>
    </SlButtonGroup>

    <br /><br />

    <SlButtonGroup>
      <SlButton type="warning">Left</SlButton>
      <SlButton type="warning">Center</SlButton>
      <SlButton type="warning">Right</SlButton>
    </SlButtonGroup>

    <br /><br />

    <SlButtonGroup>
      <SlButton type="danger">Left</SlButton>
      <SlButton type="danger">Center</SlButton>
      <SlButton type="danger">Right</SlButton>
    </SlButtonGroup>
  </>
);
```

### Pill Buttons

Pill buttons are supported through the button's `pill` attribute.

```html preview
<klik-button-group>
  <klik-button size="small" pill>Left</klik-button>
  <klik-button size="small" pill>Center</klik-button>
  <klik-button size="small" pill>Right</klik-button>
</klik-button-group>

<br><br>

<klik-button-group>
  <klik-button size="medium" pill>Left</klik-button>
  <klik-button size="medium" pill>Center</klik-button>
  <klik-button size="medium" pill>Right</klik-button>
</klik-button-group>

<br><br>

<klik-button-group>
  <klik-button size="large" pill>Left</klik-button>
  <klik-button size="large" pill>Center</klik-button>
  <klik-button size="large" pill>Right</klik-button>
</klik-button-group>
```

```jsx react
import { SlButton, SlButtonGroup } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlButtonGroup>
      <SlButton size="small" pill>Left</SlButton>
      <SlButton size="small" pill>Center</SlButton>
      <SlButton size="small" pill>Right</SlButton>
    </SlButtonGroup>

    <br /><br />

    <SlButtonGroup>
      <SlButton size="medium" pill>Left</SlButton>
      <SlButton size="medium" pill>Center</SlButton>
      <SlButton size="medium" pill>Right</SlButton>
    </SlButtonGroup>

    <br /><br />

    <SlButtonGroup>
      <SlButton size="large" pill>Left</SlButton>
      <SlButton size="large" pill>Center</SlButton>
      <SlButton size="large" pill>Right</SlButton>
    </SlButtonGroup>
  </>
);
```

### Dropdowns in Button Groups

Dropdowns can be placed inside button groups as long as the trigger is an `<klik-button>` element.

```html preview
<klik-button-group> 
  <klik-button>Button</klik-button>
  <klik-button>Button</klik-button>
  <klik-dropdown>
    <klik-button slot="trigger" caret>Dropdown</klik-button>
    <klik-menu>
      <klik-menu-item>Item 1</klik-menu-item>
      <klik-menu-item>Item 2</klik-menu-item>
      <klik-menu-item>Item 3</klik-menu-item>
    </klik-menu>
  </klik-dropdown>
</klik-button-group>
```

```jsx react
import { 
  SlButton, 
  SlButtonGroup,
  SlDropdown,
  SlMenu,
  SlMenuItem,
} from '@lego/klik/dist/react';

const App = () => (
  <SlButtonGroup> 
    <SlButton>Button</SlButton>
    <SlButton>Button</SlButton>
    <SlDropdown>
      <SlButton slot="trigger" caret>Dropdown</SlButton>
      <SlMenu>
        <SlMenuItem>Item 1</SlMenuItem>
        <SlMenuItem>Item 2</SlMenuItem>
        <SlMenuItem>Item 3</SlMenuItem>
      </SlMenu>
    </SlDropdown>
  </SlButtonGroup>
);
```

### Split Buttons

Create a split button using a button and a dropdown.

```html preview
<klik-button-group> 
  <klik-button type="primary">Save</klik-button>
  <klik-dropdown placement="bottom-end">
    <klik-button slot="trigger" type="primary" caret></klik-button>
    <klik-menu>
      <klik-menu-item>Save</klik-menu-item>
      <klik-menu-item>Save as&hellip;</klik-menu-item>
      <klik-menu-item>Save all</klik-menu-item>
    </klik-menu>
  </klik-dropdown>
</klik-button-group>
```

```jsx react
import { 
  SlButton, 
  SlButtonGroup,
  SlDropdown,
  SlMenu,
  SlMenuItem,
} from '@lego/klik/dist/react';

const App = () => (
  <SlButtonGroup> 
    <SlButton type="primary">Save</SlButton>
    <SlDropdown placement="bottom-end">
      <SlButton slot="trigger" type="primary" caret></SlButton>
      <SlMenu>
        <SlMenuItem>Save</SlMenuItem>
        <SlMenuItem>Save as&hellip;</SlMenuItem>
        <SlMenuItem>Save all</SlMenuItem>
      </SlMenu>
    </SlDropdown>
  </SlButtonGroup>
);
```

### Tooltips in Button Groups

Buttons can be wrapped in tooltips to provide more detail when the user interacts with them.

```html preview
<klik-button-group>
  <klik-tooltip content="I'm on the left">
    <klik-button>Left</klik-button>
  </klik-tooltip>

  <klik-tooltip content="I'm in the middle">
    <klik-button>Center</klik-button>
  </klik-tooltip>

  <klik-tooltip content="I'm on the right">
    <klik-button>Right</klik-button>
  </klik-tooltip>
</klik-button-group>
```

```jsx react
import { 
  SlButton, 
  SlButtonGroup,
  SlTooltip
} from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlButtonGroup>
      <SlTooltip content="I'm on the left">
        <SlButton>Left</SlButton>
      </SlTooltip>

      <SlTooltip content="I'm in the middle">
        <SlButton>Center</SlButton>
      </SlTooltip>

      <SlTooltip content="I'm on the right">
        <SlButton>Right</SlButton>
      </SlTooltip>
    </SlButtonGroup>
  </>
);
```

### Toolbar Example

Create interactive toolbars with button groups.

```html preview
<div class="button-group-toolbar">
  <klik-button-group label="History">
    <klik-tooltip content="Undo">
      <klik-button><klik-icon name="arrow-counterclockwise"></klik-icon></klik-button>
    </klik-tooltip>
    <klik-tooltip content="Redo">
      <klik-button><klik-icon name="arrow-clockwise"></klik-icon></klik-button>
    </klik-tooltip>
  </klik-button-group>

  <klik-button-group label="Formatting">
    <klik-tooltip content="Bold">
      <klik-button><klik-icon name="type-bold"></klik-icon></klik-button>
    </klik-tooltip>
    <klik-tooltip content="Italic">
      <klik-button><klik-icon name="type-italic"></klik-icon></klik-button>
    </klik-tooltip>
    <klik-tooltip content="Underline">
      <klik-button><klik-icon name="type-underline"></klik-icon></klik-button>
    </klik-tooltip>
  </klik-button-group>

  <klik-button-group label="Alignment">
    <klik-tooltip content="Align Left">
      <klik-button><klik-icon name="justify-left"></klik-icon></klik-button>
    </klik-tooltip>
    <klik-tooltip content="Align Center">
      <klik-button><klik-icon name="justify"></klik-icon></klik-button>
    </klik-tooltip>
    <klik-tooltip content="Align Right">
      <klik-button><klik-icon name="justify-right"></klik-icon></klik-button>
    </klik-tooltip>
  </klik-button-group>
</div>

<style>
  .button-group-toolbar klik-button-group:not(:last-of-type) {
    margin-right: var(--klik-spacing-x-small);
  }
</style>
```

```jsx react
import { 
  SlButton, 
  SlButtonGroup,
  SlIcon,
  SlTooltip
} from '@lego/klik/dist/react';

const css = `
  .button-group-toolbar klik-button-group:not(:last-of-type) {
    margin-right: var(--klik-spacing-x-small);
  }
`;

const App = () => (
  <>
    <div className="button-group-toolbar">
      <SlButtonGroup label="History">
        <SlTooltip content="Undo">
          <SlButton><SlIcon name="arrow-counterclockwise"></SlIcon></SlButton>
        </SlTooltip>
        <SlTooltip content="Redo">
          <SlButton><SlIcon name="arrow-clockwise"></SlIcon></SlButton>
        </SlTooltip>
      </SlButtonGroup>

      <SlButtonGroup label="Formatting">
        <SlTooltip content="Bold">
          <SlButton><SlIcon name="type-bold"></SlIcon></SlButton>
        </SlTooltip>
        <SlTooltip content="Italic">
          <SlButton><SlIcon name="type-italic"></SlIcon></SlButton>
        </SlTooltip>
        <SlTooltip content="Underline">
          <SlButton><SlIcon name="type-underline"></SlIcon></SlButton>
        </SlTooltip>
      </SlButtonGroup>

      <SlButtonGroup label="Alignment">
        <SlTooltip content="Align Left">
          <SlButton><SlIcon name="justify-left"></SlIcon></SlButton>
        </SlTooltip>
        <SlTooltip content="Align Center">
          <SlButton><SlIcon name="justify"></SlIcon></SlButton>
        </SlTooltip>
        <SlTooltip content="Align Right">
          <SlButton><SlIcon name="justify-right"></SlIcon></SlButton>
        </SlTooltip>
      </SlButtonGroup>
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:klik-button-group]

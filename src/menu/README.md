## Demo

```html_demo
<!-- Lower left -->
<div style="position: relative;">
  <mdl-icon-button name="more_vert" id="demo-menu-lower-left"></mdl-icon-button>
  <mdl-menu target="demo-menu-lower-left">
    <mdl-menu-item>Some Action</mdl-menu-item>
    <mdl-menu-item>Another Action</mdl-menu-item>
    <mdl-menu-item disabled>Disabled Action</mdl-menu-item>
    <mdl-menu-item>Yet Another Action</mdl-menu-item>
  </mdl-menu>
</div>
```

```html_demo
<!-- Lower right -->
<div style="position: relative;">
  <mdl-icon-button name="more_vert" id="demo-menu-lower-right"></mdl-icon-button>
  <mdl-menu target="demo-menu-lower-right" align="right">
    <mdl-menu-item>Some Action</mdl-menu-item>
    <mdl-menu-item>Another Action</mdl-menu-item>
    <mdl-menu-item disabled>Disabled Action</mdl-menu-item>
    <mdl-menu-item>Yet Another Action</mdl-menu-item>
  </mdl-menu>
</div>
```

```html_demo
<!-- Top left -->
<div style="position: relative;">
  <mdl-icon-button name="more_vert" id="demo-menu-top-left"></mdl-icon-button>
  <mdl-menu target="demo-menu-top-left" valign="top">
    <mdl-menu-item>Some Action</mdl-menu-item>
    <mdl-menu-item>Another Action</mdl-menu-item>
    <mdl-menu-item disabled>Disabled Action</mdl-menu-item>
    <mdl-menu-item>Yet Another Action</mdl-menu-item>
  </mdl-menu>
</div>
```

```html_demo
<!-- Top right -->
<div style="position: relative;">
  <mdl-icon-button name="more_vert" id="demo-menu-top-right"></mdl-icon-button>
  <mdl-menu target="demo-menu-top-right" valign="top" align="right">
    <mdl-menu-item>Some Action</mdl-menu-item>
    <mdl-menu-item>Another Action</mdl-menu-item>
    <mdl-menu-item disabled>Disabled Action</mdl-menu-item>
    <mdl-menu-item>Yet Another Action</mdl-menu-item>
  </mdl-menu>
</div>
```

## Configuration options

| Element | Attribute | Type | Effect | Remarks |
|---------|-----------|------|--------|---------|
| mdl-menu | `align` | String (left, right) | Set the horizontal alignment  | Optional, default "left" |
| mdl-menu | `ripple` | Boolean | Apply the ripple effect  | Optional |
| mdl-menu | `target` | String | ID of the targeted element. A click on the targeted element will open the menu  | Required |
| mdl-menu | `valign` | String (top, bottom) | Set the vertical alignment  | Optional, default "bottom" |

## Demo

```html_demo
<!-- onchange -->
<div>
  <mdl-icon-toggle onchange="alert(event.target.checked);" name="format_bold"></mdl-switch>
</div>

<!-- ripple -->
<div>
<mdl-icon-toggle ripple name="format_italic"></mdl-icon-toggle>
</div>

<!-- checked -->
<div>
<mdl-icon-toggle checked name="face"></mdl-icon-toggle>
</div>

<!-- disabled -->
<div>
<mdl-icon-toggle disabled name="mood"></mdl-icon-toggle>
</div>
```

## Configuration options

| Attribute | Type | Effect | Remarks |
|-----------|------|--------|---------|
| `name` | String | Set the icon name" | Required |
| `checked` | Boolean | Defines the checkbox as "checked"  | Optional |
| `disabled` | Boolean | Defines the checkbox as "disabled" | Optional |
| `ripple` | Boolean | Applies the ripple effect | Optional |
| `onchange` | Function | Callback to receive the change event | Optional |

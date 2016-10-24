## Demo

```html_demo
<!-- onchange -->
<div>
  <mdl-icon-toggle onchange="alert(event.target.checked);">format_bold</mdl-switch>
</div>

<!-- ripple -->
<div>
<mdl-icon-toggle ripple>format_italic</mdl-icon-toggle>
</div>

<!-- checked -->
<div>
<mdl-icon-toggle checked>face</mdl-icon-toggle>
</div>

<!-- disabled -->
<div>
<mdl-icon-toggle disabled>mood</mdl-icon-toggle>
</div>
```

## Configuration options

| Attribute | Type | Effect | Remarks |
|-----------|------|--------|---------|
| `checked` | Boolean | Defines the checkbox as "checked"  | Optional |
| `disabled` | Boolean | Defines the checkbox as "disabled" | Optional |
| `ripple` | Boolean | Applies the ripple effect | Optional |
| `onchange` | Function | Callback to receive the change event | Optional |

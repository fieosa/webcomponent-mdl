## Demo

```html_demo
<mdl-switch onchange="alert(event.target.checked);"></mdl-switch>
<mdl-switch ripple checked>checked</mdl-switch>
<mdl-switch disabled>disabled</mdl-switch>
<mdl-switch disabled checked>disabled checked</mdl-switch>
```

## Configuration options

| Attribute | Type | Effect | Remarks |
|-----------|------|--------|---------|
| `checked` | Boolean | Defines the checkbox as "checked"  | Optional |
| `disabled` | Boolean | Defines the checkbox as "disabled" | Optional |
| `ripple` | Boolean | Applies the ripple effect | Optional |
| `onchange` | Function | Callback to receive the change event | Optional |

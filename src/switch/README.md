## Demo

```html_demo
<mdl-switch onchange="alert(event.target.checked);"></mdl-switch>
<mdl-switch ripple checked label="checked"></mdl-switch>
<mdl-switch disabled label="disabled"></mdl-switch>
<mdl-switch disabled checked label="disabled checked"></mdl-switch>
```

## Configuration options

| Attribute | Type | Effect | Remarks |
|-----------|------|--------|---------|
| `label` | String | Defines the label of the radio | Optional |
| `checked` | Boolean | Defines the checkbox as "checked"  | Optional |
| `disabled` | Boolean | Defines the checkbox as "disabled" | Optional |
| `ripple` | Boolean | Applies the ripple effect | Optional |
| `onchange` | Function | Callback to receive the change event | Optional |

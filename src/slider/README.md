## Demo

```html_demo
<mdl-slider id="test_slider" onchange="alert(event.target.value);" min="0" max="100" value="0"></mdl-slider>
<mdl-slider min="0" max="100" value="25"></mdl-slider>
```

## Configuration options

| Attribute | Type | Effect | Remarks |
|-----------|------|--------|---------|
| `max` | Number | Set the maximum value  | Required |
| `min` | Number | Set the minimum value | Required |
| `onchange` | Function | Callback taking 1 parameter, the Change Event. New value retrivable via `event.target.value`| Required when `value` is provided |
| `value` | Number | Set the initial/current value | Optional |

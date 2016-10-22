## Demo

```html_demo
<mdl-button
  href="http://www.baidu.com/"
  target="_blank"
  onclick="console.log('clicked baidu');"
  ripple raised primary>
  Go To Baidu
</mdl-button>
<mdl-button
  href="https://google.ca"
  target="_self"
  onclick="alert('clicked google');"
  ripple raised accent>
  Go To Google
</mdl-button>

<mdl-icon-button
  onclick="console.log('icon google');"
  name="mood"
  ripple raised accent>
</mdl-icon-button>
```

## Configuration options

| Attribute | Type | Effect | Remarks |
|-----------|------|--------|---------|
| `href` | String | Same as a tag | Optional |
| `target` | String | Same as a tag | Optional |
| `onclick` | Function | Same as a tag | Optional |
| `accent` | Boolean | Applies "accent" colors  | Optional |
| `colored` | Boolean | Applies "colored" colors | Optional |
| `name` | String | Set the icon name" | Optional, works only with "IconButton" |
| `primary` | Boolean | Applies "primary" colors | Optional |
| `raised` | Boolean | Applies "raised" button style | Optional, doesn\'t work with "FABButton" |
| `ripple` | Boolean | Applies "ripple" click effect | Optional |

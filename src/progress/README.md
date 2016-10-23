## Demo

<style>
  .html_demo mdl-progress {
    margin: 10px 0;
  }
</style>
```html_demo
<!-- Simple Progress Bar -->
<mdl-progress progress="44">
</mdl-progress>

<!-- Progress Bar with Indeterminate Progress -->
<mdl-progress indeterminate>
</mdl-progress>

<!-- Progress Bar with Buffering -->
<mdl-progress progress="33" buffer="87">
</mdl-progress>
```

## Configuration options

| Attribute | Type | Effect | Remarks |
|-----------|------|--------|---------|
| `buffer` | Number | Specify the buffer | Optional |
| `indeterminate` | Boolean | Set as indeterminate | Optional |
| `progress` | Number | Specify the progress value | Optional |

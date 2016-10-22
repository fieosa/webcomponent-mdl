## Demo

<style>
  .html_demo .demo {
    background-color: #FFD740;
    padding: 10px;
    margin: 10px 20px;
  }
</style>
```html_demo
<span id="ttl1" class="demo">top</span>
<mdl-tooltip for="ttl1" position="top">top tooltop</mdl-tooltip>

<span id="ttl2" class="demo">large bottom</span>
<mdl-tooltip for="ttl2" large position="bottom">large bottom tooltop</mdl-tooltip>

<span id="ttl3" class="demo">left</span>
<mdl-tooltip for="ttl3" position="left">left tooltop</mdl-tooltip>

<span id="ttl4" class="demo">large right</span>
<mdl-tooltip for="ttl4" large position="right">large right tooltop</mdl-tooltip>
```

## Configuration options

| Attribute | Type | Effect | Remarks |
|-----------|------|--------|---------|
| `large` | Boolean | Defines a large tooltip | Optional |
| `position` | String[left, right, top, bottom] | Specify the position of the tooltip | Optional |

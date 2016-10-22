## Demo

<style>
  .html_demo mdl-tabs {
    height: 250px;
  }
</style>
```html_demo
<mdl-tabs ripple>
  <mdl-tab-bar>
    <mdl-tab href="#starks-panel" active>Starks</mdl-tab>
    <mdl-tab href="#lannisters-panel">Lannisters</mdl-tab>
    <mdl-tab href="#targaryens-panel">Targaryens</mdl-tab>
  </mdl-tab-bar>

  <mdl-tab-panel id="starks-panel" active>
    <ul>
      <li>Eddard</li>
      <li>Catelyn</li>
      <li>Robb</li>
      <li>Sansa</li>
      <li>Brandon</li>
      <li>Arya</li>
      <li>Rickon</li>
    </ul>
  </mdl-tab-panel>
  <mdl-tab-panel id="lannisters-panel">
    <ul>
      <li>Tywin</li>
      <li>Cersei</li>
      <li>Jamie</li>
      <li>Tyrion</li>
    </ul>
  </mdl-tab-panel>
  <mdl-tab-panel id="targaryens-panel">
    <ul>
      <li>Viserys</li>
      <li>Daenerys</li>
    </ul>
  </mdl-tab-panel>
</mdl-tabs>
```

## Configuration options

| Element | Attribute | Type | Effect | Remarks |
|---------|-----------|------|--------|---------|
| mdl-tabs | `ripple` | Boolean   | Applies ripples effect on tabs | Optional |

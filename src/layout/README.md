## Demo

<style>
  .html_demo .mdl-layout__container {
    height: 300px;
    position: relative;
  }
</style>
```html_demo
<mdl-layout fixed-drawer>

  <mdl-header style="background-color: #3F51B5;">
    <mdl-header-row>
      <span class="mdl-layout-title">Title</span>
      <mdl-spacer></mdl-spacer>
      <mdl-navigation>
        <a href="">Link1</a>
        <a href="">Link2</a>
        <a href="">Link3</a>
        <a href="">Link4</a>
      </mdl-navigation>
      </mdl-header-row>
  </mdl-header>

  <mdl-drawer>
    <span class="mdl-layout-title">Title</span>
    <mdl-navigation>
      <a href="">Link</a>
      <a href="">Link</a>
      <a href="">Link</a>
      <a href="">Link</a>
    </mdl-navigation>
  </mdl-drawer>
  <mdl-content>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
  <mdl-content>
</mdl-layout>
```

## Configuration options

| Attribute | Effect | Remarks |
|-----------|--------|---------|
| `fixed-header` | Fixed header fixed to screen | Optional |
| `fixed-drawer` | Fixed drawer fixed to screen | Optional |
| `fixed-tabs` | Fixed tabs fixed to screen | Optional |

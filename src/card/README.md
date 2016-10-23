## Demo

```html_demo
<!-- Wide card with share menu button -->
<style>
  .demo-card-wide.mdl-card {
    width: 512px;
  }
  .demo-card-wide mdl-card-title {
    height: 176px;
    background: url('../assets/welcome_card.jpg');
  }
  .demo-card-wide mdl-card-title h2 {
    color: #fff;
  }
  .demo-card-wide mdl-card-title a {
    display: flex;
    align-self: flex-end;
    line-height: 32px;
  }
  .demo-card-wide > .mdl-card__menu {
    color: #fff;
  }
</style>
<mdl-card class="demo-card-wide" shadow="8">
  <mdl-card-title>
    Welcom to&nbsp;<a href="https://github.com/FIEOSA">FIEOSA</a>&nbsp;!
  </mdl-card-title>
  <mdl-card-text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Mauris sagittis pellentesque lacus eleifend lacinia...
  </mdl-card-text>
</mdl-card>
```

## Configuration options

| Element | Attribute | Type | Effect | Remarks |
|---------|-----------|------|--------|---------|
| mdl-card | `shadow` | Number | Defines the shadow depth | Optional, Default 0. Must be between 0 and 6 |

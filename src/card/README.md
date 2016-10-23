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
<mdl-card class="demo-card-wide" shadow="4">
  <mdl-card-title>
    Welcom to&nbsp;<a href="https://github.com/FIEOSA">FIEOSA</a>&nbsp;!
  </mdl-card-title>
  <mdl-card-text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Mauris sagittis pellentesque lacus eleifend lacinia...
  </mdl-card-text>
  <mdl-card-actions border">
    <mdl-button colored ripple>
      Get Started
    </mdl-icon-button>
  </mdl-card-actions>
  <mdl-card-menu>
    <mdl-icon-button ripple>
      <mdl-icon>share</mdl-icon>
    </mdl-icon-button ripple>
  </mdl-card-menu>

</mdl-card>
```

```html_demo
<!-- Wide card with share menu button -->
<style>
  .demo-card-event.mdl-card {
    width: 256px;
    height: 256px;
    background: #3E4EB8;
  }
  .demo-card-event > mdl-card-actions {
    border-color: rgba(255, 255, 255, 0.2);
  }
  .demo-card-event > mdl-card-title {
    align-items: flex-start;
  }
  .demo-card-event > mdl-card-title > h4 {
    color: #fff;
    margin-top: 0;
  }
  .demo-card-event > mdl-card-actions {
    display: flex;
    box-sizing:border-box;
    align-items: center;
  }
  .demo-card-event > mdl-card-actions > mdl-icon {
    padding-right: 10px;
  }
  .demo-card-event > mdl-card-title,
  .demo-card-event > mdl-card-actions,
  .demo-card-event > mdl-card-actions > mdl-button {
    color: #fff;
  }
</style>
<mdl-card class="demo-card-event" shadow="2">
  <mdl-card-title expand>
    <h4>
      Featured event:<br>
      May 24, 2016<br>
      7-11pm
    </h4>
  </mdl-card-title>
  <mdl-card-actions border>
    <mdl-button ripple>
      Add to Calendar
    </mdl-button>
    <mdl-spacer></mdl-spacer>
    <mdl-icon>
      event
    </mdl-icon>
  </mdl-card-actions>
</mdl-card>
```

## Configuration options

| Element | Attribute | Type | Effect | Remarks |
|---------|-----------|------|--------|---------|
| mdl-card | `shadow` | Number | Defines the shadow depth | Optional, Default 0. Must be between 0 and 6 |

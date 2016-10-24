## Demo

```html_demo
<!-- Simple list -->
<style>
.demo-list-action {
  width: 300px;
}
</style>

<mdl-list class="demo-list-action">
  <mdl-list-item>
    <mdl-list-item-content>
      Bryan Cranston
    </mdl-list-item-content>
  </mdl-list-item>
  <mdl-list-item>
    <mdl-list-item-content>
      Aaron Paul
    </mdl-list-item-content>
  </mdl-list-item>
  <mdl-list-item>
    <mdl-list-item-content>
      Bob Odenkirk
    </mdl-list-item-content>
  </mdl-list-item>
</mdl-list>
```

```html_demo
<!-- Icon List -->
<style>
.demo-list-action {
  width: 300px;
}
</style>

<mdl-list class="demo-list-action">
  <mdl-list-item>
    <mdl-list-item-content>
      <mdl-list-item-avatar>person</mdl-list-item-avatar>
      Bryan Cranston
    </mdl-list-item-content>
  </mdl-list-item>
  <mdl-list-item>
    <mdl-list-item-content>
      <mdl-list-item-avatar>person</mdl-list-item-avatar>
      Aaron Paul
    </mdl-list-item-content>
  </mdl-list-item>
  <mdl-list-item>
    <mdl-list-item-content>
      <mdl-list-item-avatar>person</mdl-list-item-avatar>
      Bob Odenkirk
    </mdl-list-item-content>
  </mdl-list-item>
</mdl-list>
```

```html_demo
<!-- List items with avatar and action -->
<style>
.demo-list-action {
  width: 300px;
}
</style>

<mdl-list class="demo-list-action">
  <mdl-list-item>
    <mdl-list-item-content>
      <mdl-list-item-avatar large>person</mdl-list-item-avatar>
      <span>Bryan Cranston</span>
    </mdl-list-item-content>
    <mdl-list-item-action>
      <a href="#"><mdl-icon>star</mdl-icon></a>
    </mdl-list-item-action>
  </mdl-list-item>
  <mdl-list-item>
    <mdl-list-item-content>
      <mdl-list-item-avatar large>person</mdl-list-item-avatar>
      <span>Aaron Paul</span>
    </mdl-list-item-content>
    <mdl-list-item-action>
      <a href="#"><mdl-icon>star</mdl-icon></a>
    </mdl-list-item-action>
  </mdl-list-item>
  <mdl-list-item>
    <mdl-list-item-content>
      <mdl-list-item-avatar large>person</mdl-list-item-avatar>
      <span>Bob Odenkirk</span>
    </mdl-list-item-content>
    <mdl-list-item-action>
      <a href="#"><mdl-icon>star</mdl-icon></a>
    </mdl-list-item-action>
  </mdl-list-item>
</mdl-list>
```

```html_demo
<!-- List with avatar and controls -->
<style>
.demo-list-control {
  width: 300px;
}
</style>

<mdl-list class="demo-list-control">
  <mdl-list-item>
    <mdl-list-item-content>
      <mdl-list-item-avatar large>person</mdl-list-item-avatar>
      <span>Bryan Cranston</span>
    </mdl-list-item-content>
    <mdl-list-item-action>
      <mdl-switch checked></mdl-switch>
    </mdl-list-item-action>
  </mdl-list-item>
  <mdl-list-item>
    <mdl-list-item-content>
      <mdl-list-item-avatar large>person</mdl-list-item-avatar>
      <span>Aaron Paul</span>
    </mdl-list-item-content>
    <mdl-list-item-action>
      <mdl-switch></mdl-switch>
    </mdl-list-item-action>
  </mdl-list-item>
  <mdl-list-item>
    <mdl-list-item-content>
      <mdl-list-item-avatar large>person</mdl-list-item-avatar>
      <span>Bob Odenkirk</span>
    </mdl-list-item-content>
    <mdl-list-item-action>
      <mdl-switch></mdl-switch>
    </mdl-list-item-action>
  </mdl-list-item>
</mdl-list>
```

```html_demo
<!-- List with avatar and controls -->
<style>
.demo-list-two {
  width: 300px;
}
</style>

<mdl-list class="demo-list-two">
  <mdl-list-item two-line>
    <mdl-list-item-content>
      <mdl-list-item-avatar large>person</mdl-list-item-avatar>
      <span>Bryan Cranston</span>
      <mdl-list-item-subtitle>62 Episodes</mdl-list-item-subtitle>
    </mdl-list-item-content>
    <mdl-list-item-action info="Actor">
      <a href="#"><mdl-icon>star</mdl-icon></a>
    </mdl-list-item-action>
  </mdl-list-item>
  <mdl-list-item two-line>
    <mdl-list-item-content>
      <mdl-list-item-avatar large>person</mdl-list-item-avatar>
      <span>Aaron Paul</span>
      <mdl-list-item-subtitle>62 Episodes</mdl-list-item-subtitle>
    </mdl-list-item-content>
    <mdl-list-item-action info="Actor">
      <a href="#"><mdl-icon>star</mdl-icon></a>
    </mdl-list-item-action>
  </mdl-list-item>
  <mdl-list-item two-line>
    <mdl-list-item-content>
      <mdl-list-item-avatar large>person</mdl-list-item-avatar>
      <span>Bob Odenkirk</span>
      <mdl-list-item-subtitle>62 Episodes</mdl-list-item-subtitle>
    </mdl-list-item-content>
    <mdl-list-item-action info="Actor">
      <a href="#"><mdl-icon>star</mdl-icon></a>
    </mdl-list-item-action>
  </mdl-list-item>
</mdl-list>
```

```html_demo
<!-- List with avatar and controls -->
<style>
.demo-list-three {
  width: 650px;
}
</style>

<mdl-list class="demo-list-three">
  <mdl-list-item three-line>
    <mdl-list-item-content>
      <mdl-list-item-avatar large>person</mdl-list-item-avatar>
      <span>Bryan Cranston</span>
      <mdl-list-item-subtitle large>Bryan Cranston played the role of Walter in Breaking Bad. He is also known
        for playing Hal in Malcom in the Middle.</mdl-list-item-subtitle>
    </mdl-list-item-content>
    <mdl-list-item-action>
      <a href="#"><mdl-icon>star</mdl-icon></a>
    </mdl-list-item-action>
  </mdl-list-item>
  <mdl-list-item three-line>
    <mdl-list-item-content>
      <mdl-list-item-avatar large>person</mdl-list-item-avatar>
      <span>Aaron Paul</span>
      <mdl-list-item-subtitle large>Aaron Paul played the role of Jesse in Breaking Bad. He also featured in
        the "Need For Speed" Movie.</mdl-list-item-subtitle>
    </mdl-list-item-content>
    <mdl-list-item-action>
      <a href="#"><mdl-icon>star</mdl-icon></a>
    </mdl-list-item-action>
  </mdl-list-item>
  <mdl-list-item three-line>
    <mdl-list-item-content>
      <mdl-list-item-avatar large>person</mdl-list-item-avatar>
      <span>Bob Odenkirk</span>
      <mdl-list-item-subtitle large>Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the
        character, Bob stars in his own show now, called "Better Call Saul".</mdl-list-item-subtitle>
    </mdl-list-item-content>
    <mdl-list-item-action>
      <a href="#"><mdl-icon>star</mdl-icon></a>
    </mdl-list-item-action>
  </mdl-list-item>
</mdl-list>
```

## Configuration options

| Element | Attribute | Type | Effect | Remarks |
|---------|-----------|------|--------|---------|
| mdl-list |  |  |  |  |
| mdl-list-item-content |  |  |  |  |
| mdl-list-item | `two-line` | Boolean | Set item to have 2 lines | Optional. Cannot be set alongside `threeline` |
| mdl-list-item | `three-line` | Boolean | Set item to have 3 lines | Optional. Cannot be set alongside `twoLine` |
| mdl-list-item-action | `info` | string | Set a small header above the action | Optional |
| mdl-list-item-avatar | `large` | Boolean | Larger size | Optional |
| mdl-list-item-subtitle | `large` | Boolean | Larger size | Optional |

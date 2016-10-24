## Demo

```html_demo
<!-- Basic Chip -->
<mdl-chip>
    <span class="mdl-chip__text">Basic Chip</span>
</mdl-chip>

<!-- Deletable Chip -->
<mdl-chip deletable>
  <mdl-chip-text>Deletable Chip</mdl-chip-text>
  <mdl-chip-action>
    <mdl-icon>cancel</mdl-icon>
  </mdl-chip-action>
</mdl-chip>

<!-- Button Chip -->
<mdl-chip tabindex="0">
  <mdl-chip-text>Button Chip</mdl-chip-text>
</mdl-chip>
```

```html_demo
<!-- Contact Chip -->
<mdl-chip>
  <mdl-chip-contact class="mdl-color--teal mdl-color-text--white">A</mdl-chip-contact>
  <mdl-chip-text>Contact Chip</mdl-chip-text>
</mdl-chip>

<!-- Deletable Contact Chip -->
<mdl-chip deletable>
  <mdl-chip-contact style="background: url('../assets/chip_contact.jpg') 0 0 / cover"></mdl-chip-contact>
  <mdl-chip-text>Deletable Contact Chip</mdl-chip-text>
  <mdl-chip-action>
    <mdl-icon>cancel</mdl-icon>
  </mdl-chip-action>
</mdl-chip>
```

## Configuration options

| Element | Attribute | Type | Effect | Remarks |
|---------|-----------|------|--------|---------|
| mdl-chip | `deletable` | Boolean | Set when delete button exists | Optional |
| mdl-chip | `tabindex` | String | If you need interactivity, set tabindex to any string | Optional |
| mdl-chip-contact | | | | |
| mdl-chip-text | | | | |
| mdl-chip-action | | | | |

## Demo

```html_demo
<mdl-button ripple raised primary onclick="showDialog()">Show Dialog</mdl-button>
<mdl-dialog>
  <mdl-dialog-title>
    <h4>Allow data collection?</h4>
  </mdl-dialog-title>
  <mdl-dialog-content>
    <p>
      Allowing us to collect data will let us get you the information you want faster.
    </p>
  </mdl-dialog-content>
  <mdl-dialog-actions>
    <mdl-button class="close">Disagree</mdl-button>
    <mdl-button primary raised>Agree</mdl-button>
  </mdl-dialog-actions>
</mdl-dialog>

<script>
  function showDialog() {
    var dialog = document.querySelector('mdl-dialog');
    dialog.open = true;
    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.open = false;
    });
  }
</script>
```

## Configuration options

| Element | Attribute | Type | Effect | Remarks |
|---------|-----------|------|--------|---------|
| mdl-dialog | `open` | Boolean | Set the open state of the dialog | Optional |
| mdl-dialog-title |  |  |  |  |
| mdl-dialog-content |  |  |  |  |
| mdl-dialog-actions | `full-width` | Boolean | Apply the full-width effect to all children of dialog actions | Optional |

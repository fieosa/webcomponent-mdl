## Demo

```html_demo
<mdl-button
  onclick="snackbarTest();"
  ripple raised primary>
  Show
</mdl-button>
<mdl-snackbar
  timeout="2500"
  onaction="alert('UNDO')"
  message="My message"
  action-text="UNDO">
</mdl-snackbar>
<script>
function snackbarTest() {
  var snacks = document.getElementsByTagName('mdl-snackbar');
  snacks[0].active = true;
}
</script>
```

## Configuration options

| Attribute | Type | Effect | Remarks |
|-----------|------|--------|---------|
| `message` | String | Specify the message to show. Show textContent If not set   | Optional |
| `action-text` | String | Specify the label of the action button  | Optional |
| `active` | Boolean | Set the snackbar visible | Required. Should be false when mounting the component |
| `onaction` | Function | Function to call when the action button is clicked  | Optional |
| `timeout` | Number | Defines the time (in ms) to show the snackbar | Optional. Default 2750 |

#### Text Numeric
```html_demo
<!-- Simple textfield -->
<mdl-textfield
  label="Text...">
</mdl-textfield>

<!-- Numeric textfield -->
<mdl-textfield
  pattern="-?[0-9]*(\.[0-9]+)?"
  error="Input is not a number!"
  label="Number...">
</mdl-textfield>
```
------

#### Text with floating label	Numeric with floating label
```html_demo
<!-- Textfield with floating label -->
<mdl-textfield
  label="Text..."
  floating-label>
</mdl-textfield>

<!-- Numeric Textfield with floating label -->
<mdl-textfield
  pattern="-?[0-9]*(\.[0-9]+)?"
  error="Input is not a number!"
  label="Number..."
  floating-label>
</mdl-textfield>
```
------

#### Multiple line	Expanding
```html_demo
<!-- Floating Multiline Textfield -->
<mdl-textfield
  rows= "3"
  label="Text lines...">
</mdl-textfield>

<!-- Expandable Textfield -->
<mdl-textfield
  expandable
  expandable-icon="search"
  label="Expandable Input">
</mdl-textfield>
```
------

## Configuration options

| Attribute | Type | Effect | Remarks |
|-----------|------|--------|---------|
| `disabled` | Boolean | Applies the disabled state | Optional |
| `error` | String | Specifies the error message | Optional |
| `expandable` | Boolean | Set the textfield as expandable | Optional |
| `expandable-icon` | String | Set the icon for the expandable textfield | Optional |
| `floating-label` | Boolean | Applies the floating label effect | Optional |
| `label` | String | Defines the input label | Required |
| `maxrows` | Number | Defines the max rows (multilines) | Optional |
| `pattern` | String | Defines the pattern to validate the value | Optional |
| `required` | Boolean | Set the textfield as required | Optional |
| `rows` | Number | Defines the number of rows (multiline) | Optional |
| `value` | String or Number | Defines the 'current' value | Optional |

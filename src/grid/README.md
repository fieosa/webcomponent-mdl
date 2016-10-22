## Demo

<style>
  .html_demo mdl-cell {
    box-sizing: border-box;
    background-color: #bdbdbd;
    height: 30px;
    padding-left: 8px;
    padding-top: 4px;
    color: #fff;
  }
</style>
```html_demo
<mdl-grid>
    <mdl-cell shadow="2" col="1">1</mdl-cell>
    <mdl-cell shadow="3" col="1">1</mdl-cell>
    <mdl-cell shadow="4" col="1">1</mdl-cell>
    <mdl-cell shadow="6" col="1">1</mdl-cell>
    <mdl-cell shadow="8" col="1">1</mdl-cell>
    <mdl-cell shadow="16" col="1">1</mdl-cell>
    <mdl-cell shadow="24" col="1">1</mdl-cell>
    <mdl-cell shadow="16" col="1">1</mdl-cell>
    <mdl-cell shadow="8" col="1">1</mdl-cell>
    <mdl-cell shadow="4" col="1">1</mdl-cell>
    <mdl-cell shadow="3" col="1">1</mdl-cell>
    <mdl-cell shadow="2" col="1">1</mdl-cell>
</mdl-grid>
<mdl-grid>
    <mdl-cell col="4">4</mdl-cell>
    <mdl-cell col="4">4</mdl-cell>
    <mdl-cell col="4">4</mdl-cell>
</mdl-grid>
<mdl-grid>
    <mdl-cell col="6">6</mdl-cell>
    <mdl-cell col="4">4</mdl-cell>
    <mdl-cell col="2">2</mdl-cell>
</mdl-grid>
<mdl-grid>
    <mdl-cell col="6" tablet="8">6 (8 tablet)</mdl-cell>
    <mdl-cell col="4" tablet="6">4 (6 tablet)</mdl-cell>
    <mdl-cell col="2" phone="4">2 (4 phone)</mdl-cell>
</mdl-grid>
```

## Configuration options

| Element | Attribute | Type | Effect | Remarks |
|---------|-----------|------|--------|---------|
| mdl-grid | `no-spacing` | Boolean | Removes the margins between the cells. | Optional |
| mdl-grid | `shadow` | Number | Defines the shadow depth | Optional, Default 0. Must be between 0 and 6 |
| mdl-cell | `align` | String[top, middle, bottom, stretch] | Set the cell alignment | Optional |
| mdl-cell | `col` | Number[1..12] | Set the column size | Required |
| mdl-cell | `hide-desktop` | Boolean | Hide the cell in desktop mode | Optional |
| mdl-cell | `hide-phone` | Boolean | Hide the cell in phone mode | Optional |
| mdl-cell | `hide-tablet` | Boolean | Hide the cell in tablet mode | Optional |
| mdl-cell | `offset` | Number[1..7] | Adds N columns of whitespace before the cell | Optional |
| mdl-cell | `offset-desktop` | Number[1..7] | Adds N columns of whitespace before the cell in desktop mode | Optional |
| mdl-cell | `offset-phone` | Number[1..7] | Adds N columns of whitespace before the cell in phone mode | Optional |
| mdl-cell | `offset-tablet` | Number[1..7] | Adds N columns of whitespace before the cell in tablet mode | Optional |
| mdl-cell | `phone` | Number[1..12] | Set the column size in phone mode | Optional |
| mdl-cell | `tablet` | Number[1..12] | Set the column size in tablet mode | Optional |
| mdl-cell | `shadow` | Number | Defines the shadow depth | Optional, Default 0. Must be between 0 and 6 |

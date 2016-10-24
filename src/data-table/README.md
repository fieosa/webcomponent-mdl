## Demo

```html_demo
<mdl-table shadow="4" selectable>
  <table>
    <thead>
      <tr>
        <th>Material</th>
        <th>Quantity</th>
        <th>Unit price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Acrylic (Transparent)</td>
        <td>25</td>
        <td>$2.90</td>
      </tr>
      <tr>
        <td>Plywood (Birch)</td>
        <td>50</td>
        <td>$1.25</td>
      </tr>
      <tr>
        <td>Laminate (Gold on Blue)</td>
        <td>10</td>
        <td>$2.35</td>
      </tr>
    </tbody>
  </table>
</mdl-table>
```

## Configuration options

| Element | Attribute | Type | Effect | Remarks |
|---------|-----------|------|--------|---------|
| mdl-table | `shadow` | Number | Defines the shadow depth | Optional, Default 0. Must be between 0 and 24 |
| mdl-table | `selectable` | Boolean | Defines if the table is selectable | Optional, Default false |

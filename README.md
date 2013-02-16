jQuery UI Markup
================

Use jQuery UI purely through HTML markup (data attributes). No extra Javascript needed.

Specify the interaction or the widget through the `data-ui` attribute and the options through `data-ui-<option>="value"` with option being a hyphenated option name (`data-ui-connect-with` instead of `connectWith`, for instance).

## Examples

### Datepicker

```html
<p>Date: <input type="text" data-ui="datepicker" /></p>
```

### Draggable

```html
<div data-ui="draggable" data-ui-cursor="move">
  <p>Drag me around</p>
</div>
```

### Sortable with Connected Lists

```html
<ul data-ui="sortable" data-ui-connect-with=".connectedSortable" class="connectedSortable">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
</ul>
 
<ul data-ui="sortable" data-ui-connect-with=".connectedSortable" class="connectedSortable">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
</ul>
```

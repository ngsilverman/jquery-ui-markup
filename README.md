jQuery UI Markup
================

Use jQuery UI purely through HTML markup (data attributes). No extra Javascript needed.

Specify the interaction, widget or effect through the `data-ui` attribute and the options through `data-ui-<option>="value"` with option being the hyphenated option name (`data-ui-connect-with` instead of `connectWith`, for instance).

**All the jQuery UI options of Boolean, Integer, Number or String type are available.**

## Extra Options

`data-ui-delay="<milliseconds>"` Adds a delay before the start of an effect (Add Class, Effect, Hide, Show or Toggle).

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

### Effect

```html
<div data-ui="effect" data-ui-effect="bounce" data-ui-duration="5000">
  <h3>Effect</h3>
  <p>
    Etiam libero neque, luctus a, eleifend nec, semper at, lorem. Sed pede.
    Nulla lorem metus, adipiscing ut, luctus sed, hendrerit vitae, mi.
  </p>
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

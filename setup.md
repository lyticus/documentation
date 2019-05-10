---
title: Setup
lang: en-US
---

# Setup

## NPM

```javascript
import Lyticus from "lyticus";
const lyticus = new Lyticus("your-property-id");
```

## CDN

```html
<script src="https://unpkg.com/lyticus"></script>
<script>
  var lyticus = new Lyticus("your-property-id");
</script>
```

## Constructor

```javascript
const lyticus = new Lyticus(propertyId, configuration);
```

- propertyId: string
- configuration: object

### configuration properties

#### development (boolean)

When set to true events will not be sent to the Lyticus servers.

```javascript
const lyticus = new Lyticus("your-property-id", {
  development: process.env.NODE_ENV === "dev"
});
```

#### getPath (function)

Enables you to override the way the path should be fetched.

##### Default implementation

```javascript
const lyticus = new Lyticus("your-property-id", {
  getPath: () => {
    return window.location.pathname;
  }
});
```

## Adding event listeners

Every time Lyticus tracks any thing, it also emits a `lyticus:track` event.

```javascript
document.addEventListener("lyticus:track", function(e) {
  console.log(e.detail);
});
```

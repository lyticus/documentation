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

#### historyMode (boolean)

When set to true, Lyticus will override the pushState-function of the browser to automatically track page views in your SPA.

```javascript
const lyticus = new Lyticus("your-property-id", {
  historyMode: true
});
```

#### development (boolean)

When set to true events will not be sent to the service but logged to the browser console instead.

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

##### Vue: computing route name from router

```javascript
const lyticus = new Lyticus("your-property-id", {
  getPath: () => {
    const route = router.currentRoute;
    if (!route || !route.name) {
      return window.location.pathname;
    }
    return route.name;
  }
});
```

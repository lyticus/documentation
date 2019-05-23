---
title: Tracker setup
lang: en-US
---

# Tracker setup

## Initialization

To able to send events you need to create a `lyticus` instance first.

### Bundler

```javascript
import Lyticus from "lyticus";
const lyticus = new Lyticus("your-website-id");
```

### CDN

```html
<script src="https://unpkg.com/lyticus"></script>
<script>
  var lyticus = new Lyticus("your-website-id");
</script>
```

## Configuration

You can configure your `lyticus` instance by passing it a configuration object.

```javascript
const lyticus = new Lyticus("your-website-id", configuration);
```

### configuration properties

#### cookies (boolean)

Default: true

When set to false, Lyticus will not create, update or read any cookies.

```javascript
const lyticus = new Lyticus("your-website-id", {
  cookies: false
});
```

#### development (boolean)

Default: false

When set to true events will not be sent to the Lyticus servers.

```javascript
const lyticus = new Lyticus("your-website-id", {
  development: process.env.NODE_ENV === "dev"
});
```

#### getPath (function)

Enables you to override the way the path should be fetched.

##### Default implementation

```javascript
const lyticus = new Lyticus("your-website-id", {
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

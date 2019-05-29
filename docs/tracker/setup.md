---
title: Tracker setup
lang: en-US
---

# Tracker setup

## Initialization

Before you can start sending events, you need to create a `lyticus` instance (JavaScript object).

It is through this `lyticus` instance that you will initiate all tracking.

::: warning
Make sure you initialize your instance with the correct website id.
:::

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

### Verification

::: tip
You can verify that your setup was successful by typing `__LYTICUS__` in your browsers' console.
Don't worry if the printed output does not expose all configuration properties, this is on purpose.
:::

## Configuration

You can customize your `lyticus` instance's default behavior by passing it a configuration object.

```javascript
const lyticus = new Lyticus("your-website-id", your-configuration-object);
```

The default configuration object looks as follows:

```javascript
const lyticus = new Lyticus("your-website-id", {
  cookies: true,
  development: false,
  getPath: () => {
    return window.location.pathname;
  }
});
```

If you don't pass a configuration object, the default above will be used.

If you pass a partial configuration object, it will be merged with the default above.

### Configuration properties

#### cookies

- Type: boolean
- Default: `true`

Determines whether Lyticus should create, update or read any tracking cookies.

::: warning
If you set this property to `false`, Lyticus will be unable to correctly determine certain metrics such as new customers and unique page views.
:::

#### development (boolean)

- Type: boolean
- Default: `false`

 When set to true events will not be sent to the Lyticus servers (ideal for development and testing environments).

#### getPath (function)

- Type: function
- Default: `() => window.location.pathname`

Enables you to override the way the path should be fetched.

This is particularly useful if you want to track routes with dynamic URL segments; you could, for instance, track a route such as `users/:userId` as `users-detail` to prevent tracking each userId as a separate path.

[Example: Using Vue route name instead of path](/tracker/integrations/vue.md#using-route-name-instead-of-path)

## Adding event listeners

Every time Lyticus tracks any thing, it also emits a `lyticus:track` event.

You can register event listeners to build things such as loggers, history views, etc...

```javascript
document.addEventListener("lyticus:track", function(e) {
  console.log(e.detail);
});
```

Our [Devtools extensions](/devtools) uses these events keep a log of all sent events.

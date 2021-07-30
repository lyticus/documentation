---
title: Nuxt integration
lang: en-US
---

# Nuxt integration

## Example projects (Github)

[lyticus-examples/nuxt](https://github.com/lyticus/examples/tree/master/nuxt)

## Configuration

1. Create a lyticus.js file in your plugins directory containing the following:

```javascript
import Vue from "vue";

import Lyticus from "lyticus";

export default ({ app }) => {
  // Create Lyticus instance
  const lyticus = new Lyticus("your-website-id", {
    development: process.env.NODE_ENV === "development",
  });

  // Add $lyticus to the Vue prototype (makes its methods easily accessible from within your components)
  Vue.prototype.$lyticus = lyticus;

  // Track the navigator
  lyticus.trackNavigator();

  // Every time the route changes (fired on initialization too)
  app.router.afterEach((to, from) => {
    lyticus.trackPage(to.path);
  });
};
```

2. Update your nuxt.config.js file:

```javascript
export default {
  plugins: [{ src: "~/plugins/lyticus.js", mode: "client" }],
};
```

## Tracking events inside components

See [Vue integration](/tracker/integrations/vue.md#tracking-events-inside-components).

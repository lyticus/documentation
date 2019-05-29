---
title: Nuxt integration
lang: en-US
---

# Nuxt integration

## Example projects (Github)

- [lyticus-examples/nuxt/spa-mode/](https://github.com/byteboomers/lyticus-examples/tree/master/nuxt/spa-mode)

## Configuration

1. Create a lyticus.js file in the root of your project containing the following:

```javascript
import Lyticus from "lyticus";

const lyticus = new Lyticus("your-website-id", {
  development: process.env.NODE_ENV === "development"
});

export default lyticus;
```

2. Create a lyticus.js file in your plugins directory containing the following:

```javascript
import Vue from "vue";

import lyticus from "~/lyticus";

// Track the navigator
lyticus.trackNavigator();

/*
Add $lyticus to the Vue prototype
This makes its methods easily accessible from within your components
*/
Vue.prototype.$lyticus = lyticus;
```

3. Create a lyticus.js file in your middleware directory containing the following:

```javascript
import lyticus from "~/lyticus";

export default ({ route }) => {
  lyticus.trackPage(route.path);
};
```

4. Update your nuxt.config.js file:

```javascript
export default {
  mode: "spa",
  plugins: ["~/plugins/lyticus.js"],
  router: {
    middleware: ["lyticus"]
  }
};
```

## Tracking events inside components

See [Vue integration](/tracker/integrations/vue.md#tracking-events-inside-components).

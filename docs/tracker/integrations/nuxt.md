---
title: Nuxt integration
lang: en-US
---

# Nuxt integration

::: tip
Lyticus has been tested with Nuxt version 2.6.3.
:::

Add the following lyticus.js file to your middleware directory:

```javascript
import Lyticus from "lyticus";

const lyticus = new Lyticus("your-website-id", {
  development: process.env.NODE_ENV === "development"
});

lyticus.trackNavigator();

export default ({ route }) => {
  lyticus.trackPage(route.path);
};
```

Add the following to your nuxt.config.js file:

```javascript
  router: {
    middleware: ["lyticus"]
  },
```

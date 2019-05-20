---
title: VuePress integration
lang: en-US
---

# VuePress integration

::: tip
Lyticus has been tested with VuePress version 1.0.0-alpha.48.
:::

Add the following to your .vuepress/enhanceApp.js file:

```javascript
import Lyticus from "lyticus";

export default ({ router }) => {
  if (typeof window !== "undefined") {
    const lyticus = new Lyticus("your-website-id", {
      development: process.env.NODE_ENV === "development"
    });
    lyticus.trackNavigator();
    router.afterEach(to => {
      lyticus.trackPage(to.fullPath);
    });
  }
};
```

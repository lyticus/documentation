---
title: VuePress integration
lang: en-US
---

# VuePress integration

## Example project (Github)

- [lyticus-examples/vuepress/v1](https://github.com/byteboomers/lyticus-examples/tree/master/vuepress/v1)
## Configuration

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

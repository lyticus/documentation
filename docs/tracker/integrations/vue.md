---
title: Vue integration
lang: en-US
---

# Vue integration

::: tip
Lyticus has been tested with Vue version 2.6.10.
:::

## Example configuration

_main.js_

```javascript
import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";

import Lyticus from "lyticus";

// Create Lyticus instance
const lyticus = new Lyticus("your-website-id", {
  development: process.env.NODE_ENV === "development"
});

// Track the navigator
lyticus.trackNavigator();

// Start history mode to automatically track page views
lyticus.startHistoryMode();

/*
Add $lyticus to the Vue prototype
This makes its methods easily accessible from within your components
*/
Vue.prototype.$lyticus = lyticus;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
```

## Development mode

```javascript
const lyticus = new Lyticus("your-website-id", {
  development: process.env.NODE_ENV === "development"
});
```

## Tracking page views

### Option 1: via the router's global navigation guard

```javascript
const lyticus = new Lyticus("you-website-id");
router.afterEach(() => {
  lyticus.trackPage();
});
```

### Option 2: via startHistoryMode

```javascript
const lyticus = new Lyticus("you-website-id");
lyticus.startHistoryMode();
```

### Using route name instead of path

```javascript
const lyticus = new Lyticus("your-website-id", {
  getPath: () => {
    const resolved = router.resolve(window.location.pathname);
    const route = resolved.route;
    if (!route || !route.name) {
      return window.location.pathname;
    }
    return route.name;
  }
});
```

## Tracking events inside components

Adding `$lyticus` to the `Vue` prototype enables you to call Lyticus methods from within your components.

_main.js_

```javascript
const lyticus = new Lyticus("you-website-id");
Vue.prototype.$lyticus = lyticus;
```

_MyComponent.vue_

```vue
<template>
  <button @click="onRedButtonClick">Hello</button>
</template>

<script>
export default {
  methods: {
    onRedButtonClick() {
      this.$lyticus.trackClick("red-button");
    }
  }
};
</script>
```

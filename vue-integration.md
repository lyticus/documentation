---
title: Vue integration
lang: en-US
---

# Vue integration

::: tip
Lyticus has been tested with Vue version 2.6.10 and above.
:::

## Example configuration

*main.js*
```javascript
import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";

import Lyticus from "lyticus";

// Create Lyticus instance
const lyticus = new Lyticus("your-property-id", {
  development: process.env.NODE_ENV === "development",
  getPath: () => {
    const route = router.currentRoute;
    if (!route || !route.name) {
      return window.location.pathname;
    }
    return route.name;
  }
});

// Track the navigator
lyticus.trackNavigator();

// Automatically track route changes
router.afterEach(() => {
  lyticus.trackPage();
});

/*
(OPTIONAL)
Adding $lyticus to the Vue prototype enables you to call Lyticus methods from within your components
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
const lyticus = new Lyticus("your-property-id", {
  development: process.env.NODE_ENV === "development"
});
```

## Tracking page views

### Option 1: via the router's global navigation guard

```javascript
const lyticus = new Lyticus("you-property-id");
router.afterEach(() => {
  lyticus.trackPage();
});
```

### Option 2: via history mode

```javascript
const lyticus = new Lyticus("you-property-id", {
  historyMode: true
});
lyticus.trackPage(); // You still need to track the initial page view yourself
```

### Using route name instead of path

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

## Tracking events inside components

Adding `$lyticus` to the `Vue` prototype enables you to call Lyticus methods from within your components.

*main.js*
```javascript
const lyticus = new Lyticus("you-property-id");
Vue.prototype.$lyticus = lyticus;
```

*MyComponent.vue*
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

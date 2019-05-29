---
title: Vue integration
lang: en-US
---

# Vue integration

## Example projects (Github)

- [lyticus-examples/vue/history-mode](https://github.com/byteboomers/lyticus-examples/tree/master/vue/history-mode)
- [lyticus-examples/vue/global-navigation-guard](https://github.com/byteboomers/lyticus-examples/tree/master/vue/global-navigation-guard)

## Example configuration

_main.js_

```javascript
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Lyticus from "lyticus";

// Create Lyticus instance
const lyticus = new Lyticus("your-website-id", {
  development: process.env.NODE_ENV === "development",
  // Optional: use route name instead of path
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

## Tracking page views

### Modes

#### History Mode

```javascript
const lyticus = new Lyticus("you-website-id");
lyticus.startHistoryMode();
```

#### Global router navigation guard

```javascript
const lyticus = new Lyticus("you-website-id");
router.afterEach(() => {
  lyticus.trackPage();
});
```

### Using route name instead of path

```javascript
const lyticus = new Lyticus("your-website-id", {
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

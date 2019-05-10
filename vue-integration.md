---
title: Vue integration
lang: en-US
---

# Vue integration

Add the following to your main.js file:

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
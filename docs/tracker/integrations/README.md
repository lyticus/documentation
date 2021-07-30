---
title: Integrations introduction
lang: en-US
---

# Integrations introduction

In this section you will find various recipes detailing how to integrate Lyticus with your favorite framework.

## Example projects (Github)

### React

[lyticus-examples/react](https://github.com/lyticus/examples/tree/master/react)

### Angular

[lyticus-examples/angular](https://github.com/lyticus/examples/tree/master/angular)

### Vue

[lyticus-examples/vue](https://github.com/lyticus/examples/tree/master/vue)

### Nuxt

[lyticus-examples/nuxt](https://github.com/lyticus/examples/tree/master/nuxt)

### VuePress

[lyticus-examples/vuepress](https://github.com/lyticus/examples/tree/master/vuepress)

## Generic SPA integration

::: warning
In order for _startHistoryMode()_ to work, your router of choice must use the HTML5 History API and not a hash URL.

- Vue router: [history mode](https://router.vuejs.org/guide/essentials/history-mode.html)
- React router: [BrowserRouter](https://reacttraining.com/react-router/web/api/BrowserRouter)
- Angular: [PathLocationStrategy](https://angular.io/api/common/PathLocationStrategy)
  :::

If your favorite SPA framework is not (yet) listed, you can use the following snippet to integrate Lyticus.

```javascript
const lyticus = new Lyticus("your-website-id");
lyticus.trackNavigator();
lyticus.startHistoryMode();
```

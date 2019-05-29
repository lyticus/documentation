---
title: Integrations introduction
lang: en-US
---

# Integrations introduction

In this section you will find various recipes detailing how to integrate Lyticus with your favorite framework.

## Generic SPA integration

::: warning
In order for _startHistoryMode()_ to work, your router of choice must use the HTML5 History API and not a hash URL.

- Vue router: [history mode](https://router.vuejs.org/guide/essentials/history-mode.html)
- React router: [BrowserRouter](https://reacttraining.com/react-router/web/api/BrowserRouter)
- Angular: [PathLocationStrategy](https://router.vuejs.org/guide/essentials/history-mode.html)
  :::

If your favorite SPA framework is not (yet) listed, you can use the following snippet to integrate Lyticus.

```javascript
const lyticus = new Lyticus("your-website-id");
lyticus.trackNavigator();
lyticus.startHistoryMode();
```

## Example projects (Github)

### Vue

- [lyticus-examples/vue/history-mode](https://github.com/byteboomers/lyticus-examples/tree/master/vue/history-mode)
- [lyticus-examples/vue/global-navigation-guard](https://github.com/byteboomers/lyticus-examples/tree/master/vue/global-navigation-guard)

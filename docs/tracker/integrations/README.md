---
title: Integrations introduction
lang: en-US
---

# Integrations introduction

In this section you will find various recipes detailing how to integrate Lyticus with your favorite framework.

## Generic SPA integration

::: warning
In order for _startHistoryMode()_ to work, your router of choice must use the HTML5 history API and not a hash url.

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

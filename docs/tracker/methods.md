---
title: Tracker methods
lang: en-US
---

# Tracker methods

## trackNavigator

Tracks the navigator's details.

### Example

```javascript
lyticus.trackNavigator();
```

## trackPage

Tracks a page view.

### Example

```javascript
lyticus.trackPage();
```

## trackClick

Tracks a click.

### Example

```javascript
lyticus.trackClick("green-button");
```

## trackOutboundClick

Tracks an outbound click and redirects to the specified address.

### Example

```javascript
lyticus.trackOutboundClick("red-button", "https://www.google.com");
```

## startHistoryMode

::: warning
In order for _startHistoryMode()_ to work, your router of choice must use the HTML5 history API and not a hash url.

- Vue router: [history mode](https://router.vuejs.org/guide/essentials/history-mode.html)
- React router: [BrowserRouter](https://reacttraining.com/react-router/web/api/BrowserRouter)
- Angular: [PathLocationStrategy](https://router.vuejs.org/guide/essentials/history-mode.html)
  :::

Overrides the pushState method of the browser to automatically track page views in your SPA.

```javascript
lyticus.startHistoryMode();
```

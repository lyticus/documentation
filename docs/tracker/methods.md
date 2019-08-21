---
title: Tracker methods
lang: en-US
---

# Tracker methods

## Tracking navigator details

The `trackNavigator` method tracks the navigator's details.

### Example

```javascript
lyticus.trackNavigator();
```

### Arguments

_None_

### Information sent

- The windows' inner width.
- The navigator's language.
- The navigator's user agent (used to determine both the operating system and browser).

## Tracking page views

The `trackPage` method tracks a page view and, if applicable, its referrer(s).

### Example

```javascript
lyticus.trackPage();
```

### Arguments

```javascript
lyticus.trackPage(
  path // optional string
);
```

### Information sent

- The path (result of `getPath()`, can be overridden via the optional `path` argument).
- The referrer, if applicable, extracted from the `Referer` header.
- The URL referrer, if applicable, extracted from the following special query parameters: `referrer`, `ref`, `source`, `utm_source`.

## Tracking clicks

The `trackClick` method tracks a click.

### Example

```javascript
lyticus.trackClick("green-button");
```

### Arguments

```javascript
lyticus.trackClick(
  value, // required string
  path // optional string
);
```

### Information sent

- A value identifying the clicked element.
- The path (result of `getPath()`, can be overridden via the optional `path` argument).

## Tracking outbound clicks

The `trackOutboundClick` method tracks a click and redirects to the specified address.

### Example

```javascript
lyticus.trackOutboundClick("google-button", "https://www.google.com");
```

### Arguments

```javascript
lyticus.trackOutboundClick(
  value, // required string
  url, // required string
  path // optional string
);
```

### Information sent

- A value identifying the clicked element
- The path (result of `getPath()`, can be overridden via the optional `path` argument).

The URL value is not implicitly tracked.

## Tracking via data attributes

Lyticus provides various event listeners that allow you to declaratively track events via data attributes.

### Clicks

**lyticus.clickTracker()** processes click events, if the target element of the event contains a _data-track-click_ attribute then it will automatically track the click event with the value of this attribute.

#### Example

```javascript
window.addEventListener("click", lyticus.clickTracker());
```

```html
<button data-track-click="buy">Buy</button>
<button data-track-click="sell">Sell</button>
<button data-track-click="discard">Discard</button>
```

Which is the equivalent of:

```html
<button onclick="lyticus.trackClick('buy')">Buy</button>
<button onclick="lyticus.trackClick('sell')">Sell</button>
<button onclick="lyticus.trackClick('discard')">Discard</button>
```

## History mode (SPA tracking)

The `startHistoryMode` method enhances the pushState method of the browser to automatically track page views in your SPA.

`startHistoryMode` returns a boolean indicating whether history mode was successfully started.

[Learn more](/tracker/integrations/#generic-spa-integration).

Use `stopHistoryMode` to stop automatically tracking page views.

### Example

```javascript
lyticus.startHistoryMode();
```

### Arguments

_None_

::: warning
In order for _startHistoryMode()_ to work, your router of choice must use the HTML5 History API and not a hash URL.

- Vue router: [history mode](https://router.vuejs.org/guide/essentials/history-mode.html)
- React router: [BrowserRouter](https://reacttraining.com/react-router/web/api/BrowserRouter)
- Angular: [PathLocationStrategy](https://angular.io/api/common/PathLocationStrategy)
  :::

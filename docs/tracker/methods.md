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

## History mode (SPA tracking)

The `startHistoryMode` method overrides the pushState method of the browser to automatically track page views in your SPA.

[Learn more](/tracker/integrations/#generic-spa-integration).

### Example

```javascript
lyticus.startHistoryMode();
```

### Arguments

*None*

::: warning
In order for _startHistoryMode()_ to work, your router of choice must use the HTML5 History API and not a hash URL.

- Vue router: [history mode](https://router.vuejs.org/guide/essentials/history-mode.html)
- React router: [BrowserRouter](https://reacttraining.com/react-router/web/api/BrowserRouter)
- Angular: [PathLocationStrategy](https://angular.io/api/common/PathLocationStrategy)
:::



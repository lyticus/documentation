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

Override the pushState method of the browser to automatically track page views in your SPA.

```javascript
lyticus.startHistoryMode();
```

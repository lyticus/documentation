---
title: React integration
lang: en-US
---

# React integration

## Example project (Github)

- [lyticus-examples/react/browser-router](https://github.com/byteboomers/lyticus-examples/tree/master/react/browser-router)

## Example configuration

```jsx
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Lyticus from "lyticus";

// Create Lyticus instance
const lyticus = new Lyticus("your-website-id", {
  development: process.env.NODE_ENV === "development"
});

// Track the navigator
lyticus.trackNavigator();

// Start history mode to automatically track page views
lyticus.startHistoryMode();

function App() {
  return (
    <Router>
      <div><Link to="/">Home</Link></div>
      <div><Link to="/about">About</Link></div>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
    <h1>Home</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maiores
      incidunt aliquid sequi expedita qui, nostrum eum minus, harum inventore
      blanditiis optio sit tempora atque voluptas quos. Ad, itaque voluptas.
    </p>
    <button
      onClick={() => lyticus.trackClick('yellow-button')}
      style={{ background: 'yellow' }}
    >
      Yellow button
    </button>
    </div>
  );
}

function About() {
  return (
    <div>
    <h1>About</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maiores
      incidunt aliquid sequi expedita qui, nostrum eum minus, harum inventore
      blanditiis optio sit tempora atque voluptas quos. Ad, itaque voluptas.
    </p>
    <button
      onClick={() => lyticus.trackClick('cyan-button')}
      style={{ background: 'cyan' }}
    >
      Cyan button
    </button>
  </div>
  );
}

export default App;
```
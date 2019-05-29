---
title: Angular integration
lang: en-US
---

# Angular integration

## Example project (Github)

- [lyticus-examples/angular/path-location-strategy](https://github.com/byteboomers/lyticus-examples/tree/master/angular/path-location-strategy)

## Configuration

1. Create a lyticus.service.ts file containing the following:

```ts
import { Injectable } from "@angular/core";

import Lyticus from "lyticus";

@Injectable({
  providedIn: "root"
})
export class LyticusService {
  lyticus;

  constructor() {
    // Create Lyticus instance
    this.lyticus = new Lyticus("your-website-id");
    // Track the navigator
    this.lyticus.trackNavigator();
    // Start history mode to automatically track page views
    this.lyticus.startHistoryMode();
  }

  // Expose instance method to track clicks
  trackClick(value) {
    this.lyticus.trackClick(value);
  }
}
```

2. Import the service into your components to track click events:

```ts
import { Component } from "@angular/core";
import { LyticusService } from "../../lyticus.service";

@Component({
  selector: "home",
  template: `
    <div>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        maiores incidunt aliquid sequi expedita qui, nostrum eum minus, harum
        inventore blanditiis optio sit tempora atque voluptas quos. Ad, itaque
        voluptas.
      </p>
      <button (click)="onClick()" style="background: yellow">
        Yellow button
      </button>
    </div>
  `
})
export class HomeViewComponent {
  constructor(private lyticus: LyticusService) {}
  onClick() {
    this.lyticus.trackClick("yellow-button");
  }
}
```

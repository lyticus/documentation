import Lyticus from "lyticus";
import * as Sentry from "@sentry/browser";
import * as Integrations from "@sentry/integrations";

export default ({ Vue, router }) => {
  if (typeof window !== "undefined") {
    // Lyticus
    const lyticus = new Lyticus("-JX6EGyCq1HTtiOFYzOOt", {
      development: process.env.NODE_ENV === "development"
    });
    lyticus.trackNavigator();
    router.afterEach(to => {
      lyticus.trackPage(to.fullPath);
    });
    // Sentry
    if (process.env.NODE_ENV !== "development") {
      Sentry.init({
        dsn: "https://a8d6df7825194e3187f92cfe7e88890a@sentry.io/1475730",
        integrations: [new Integrations.Vue({ Vue, attachProps: true })]
      });
    }
  }
};

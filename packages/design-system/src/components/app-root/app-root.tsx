import { Component, h } from "@stencil/core";
import "@stencil/router";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <stencil-router id="router-main">
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
              <stencil-route component="page-not-found" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}

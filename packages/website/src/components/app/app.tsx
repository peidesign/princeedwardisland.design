import { Component, h } from "@stencil/core";
import "@stencil/router";

@Component({
  tag: "peid-app",
  styleUrl: "app.css",
  shadow: true
})
export class App {
  render() {
    return (
      <div>
        {/* TODO: app header */}
        <main>
          {/* TODO: card UI */}
          <stencil-router id="router-main">
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="peid-homepage" exact={true} />
              <stencil-route component="peid-page-not-found" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}

import { Component, h } from "@stencil/core";
import "@stencil/router";

@Component({
  tag: "peid-design-system",
  styleUrl: "index.css",
  shadow: true
})
export class StyleGuide {
  render() {
    return (
      <stencil-router id="router-main">
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/" component="app-home" exact={true} />
          <stencil-route url="/profile/:name" component="app-profile" />
          <stencil-route component="page-not-found" />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}

import { Component, h } from "@stencil/core";
import "@stencil/router";
//import "@peidesign/design-system";

@Component({
  tag: "peid-website",
  styleUrl: "index.css",
  shadow: true
})
export class Website {
  render() {
    return (
      <stencil-router id="router-main">
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/" component="peid-homepage" exact={true} />
          <stencil-route component="peid-page-not-found" />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}

import "@stencil/router";
import { Component, h } from "@stencil/core";

@Component({
  tag: "peid-website-router",
  shadow: true
})
export class WebsiteRouter {
  render() {
    return (
      <stencil-router id="router-main">
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/blog" component="peid-page-not-found" />
          <stencil-route url="/" component="peid-page-home" exact={true} />
          <stencil-route component="peid-page-not-found" />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}

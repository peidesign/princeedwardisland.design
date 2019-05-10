import "@stencil/router";
import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "peid-website",
  styleUrl: "index.css",
  shadow: true
})
export class Website {
  render() {
    return (
      <peid-service-blog>
        <peid-website-router />
      </peid-service-blog>
    );
  }
}

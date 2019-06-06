import "@stencil/router";
import { Component, h } from "@stencil/core";

@Component({
  tag: "peid-website",
  styleUrl: "index.css",
  shadow: true
})
export class Website {
  render() {
    return (
        <peid-website-router />
    );
  }
}

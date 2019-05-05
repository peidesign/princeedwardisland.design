import { Component, h, getAssetPath } from "@stencil/core";

@Component({
  tag: "peid-logo",
  styleUrl: "logo.css",
  shadow: true
})
export class Logo {
  render() {
    return <peid-img src={getAssetPath("logo.svg")} />;
  }
}

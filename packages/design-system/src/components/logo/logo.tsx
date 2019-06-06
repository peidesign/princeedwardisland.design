import { Component, h } from "@stencil/core";

@Component({
  tag: "peid-logo",
  styleUrl: "logo.css",
  assetsDirs: ["./"],
  shadow: true
})
export class Logo {
  render() {
    return <peid-img src="/build/logo.svg" />;
  }
}

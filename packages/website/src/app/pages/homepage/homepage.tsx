import { Component, h } from "@stencil/core";

@Component({
  tag: "peid-page-home",
  styleUrls: ["homepage.css", "../../../global/app.css"],
  shadow: true
})
export class Homepage {
  render() {
    return [
      <peid-hero heading="Prince Edward Island Design" />,
      <peid-card>
        <p class="peid-text-purple-9">Hello world, I'm a slot!</p>
      </peid-card>
    ];
  }
}

import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "peid-hero",
  styleUrl: "hero.css",
  shadow: true
})
export class Hero {
  /**
   * The current title of the page
   */
  @Prop() heading: string;

  render() {
    return (
      <div class="hero peid-bg-color-purple-9">
        <peid-logo />
        <slot name="start" />
        <h1>{this.heading}</h1>
        <slot name="end" />
      </div>
    );
  }
}

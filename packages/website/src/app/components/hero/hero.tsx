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
  @Prop() title: string;

  render() {
    return (
      <div class="hero">
        <peid-logo />
        <slot name="start" />
        <h1>{this.title}</h1>
        <slot name="end" />
      </div>
    );
  }
}

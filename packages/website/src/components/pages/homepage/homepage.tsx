import { Component, h } from "@stencil/core";

@Component({
  tag: "peid-homepage",
  styleUrl: "homepage.css",
  shadow: true
})
export class Homepage {
  private names = ["Stencil", "Chris", "Kaela"];

  render() {
    return (
      <div class="app-home">
        <p>
          Welcome to the Stencil App Starter. You can use this starter to build
          entire apps all with web components using Stencil! Check out our docs
          on <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        {this.names.map(name => (
          <stencil-route-link url={`/profile/${name}`}>
            <button>{name}'s Profile</button>
          </stencil-route-link>
        ))}
      </div>
    );
  }
}

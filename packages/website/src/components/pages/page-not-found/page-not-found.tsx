import { Component, Prop, h } from "@stencil/core";
import { MatchResults } from "@stencil/router";

@Component({
  tag: "peid-page-not-found",
  styleUrl: "page-not-found.css",
  shadow: true
})
export class PageNotFound {
  @Prop() match: MatchResults;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return "";
  }

  render() {
    if (this.match && this.match.params.name) {
      return (
        <div class="page-not-found">
          <p>Page not found</p>
        </div>
      );
    }
  }
}

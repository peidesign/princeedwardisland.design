import "@stencil/router";
import { Component, h, Prop } from "@stencil/core";
import BlogService, { Post } from "../../services/blog/blog.service";

@Component({
  tag: "peid-website-router",
  shadow: true
})
export class WebsiteRouter {
  @Prop({ reflect: true }) postIndex: string[];
  @Prop({ reflect: true }) posts: Map<string, Post>;

  render() {
    return (
      <stencil-router id="router-main">
        <stencil-route-switch scrollTopOffset={0}>
          {this.postIndex.map(url => (
            <stencil-route
              url={url.replace(".json", "/")}
              component="peid-page-post"
              componentProps={{ url: url }}
            />
          ))}
          <stencil-route url="/blog" component="peid-page-not-found" />
          <stencil-route url="/" component="peid-page-home" exact={true} />
          <stencil-route component="peid-page-not-found" />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}

BlogService.injectProps(WebsiteRouter, ["postIndex", "posts"]);

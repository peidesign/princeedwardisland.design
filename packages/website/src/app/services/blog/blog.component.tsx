import {
  Build,
  Component,
  Element,
  h,
  Method,
  Prop,
  State,
  Watch
} from "@stencil/core";
import {
  RouterHistory,
  LocationSegments,
  injectHistory
} from "@stencil/router";
import { default as BlogService, BlogState, Post } from "./blog.service";

@Component({
  tag: "peid-service-blog",
  shadow: true
})
export class BlogServiceComponent {
  private postIndex: string[] = [];
  private posts: Map<string, Post> = new Map();

  @Element() el: HTMLElement;

  @Prop() history: RouterHistory;
  @Prop() location: LocationSegments;

  @State() state: BlogState;

  @Watch("location")
  async locationChangedHandler(
    newValue: LocationSegments,
    oldValue: LocationSegments
  ) {
    if (oldValue || Build.isDev) {
      const cleanPathName = newValue.pathname.endsWith("/")
        ? newValue.pathname.slice(0, newValue.pathname.length - 1)
        : newValue.pathname;
      const newPath = cleanPathName + ".json";
      const contentPath = "/content" + newPath;
      const isFetchable = this.postIndex.indexOf(newPath) > -1;
      const hasBeenFetched = this.posts.has(newPath);

      if (isFetchable) {
        if (!hasBeenFetched) {
          const post = await this.getData(contentPath);

          this.posts.set(newPath, post);
        }

        this.state = { ...this.state };
      }
    }
  }

  @Method()
  async getData(url: string) {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  }

  // Only load the index on initial load; pre-rendering means any initial page
  // load will already have the necessary data?
  async componentWillLoad() {
    const contentIndex = await this.getData("/content/index.json");

    this.postIndex = contentIndex["blog"];

    this.state = { postIndex: this.postIndex, posts: this.posts };
  }

  render() {
    return (
      <BlogService.Provider state={this.state}>
        <slot />
      </BlogService.Provider>
    );
  }
}

injectHistory(BlogServiceComponent);

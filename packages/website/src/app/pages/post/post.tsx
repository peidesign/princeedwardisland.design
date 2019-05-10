import { Component, h, Prop } from "@stencil/core";
import BlogService, { Post } from "../../services/blog/blog.service";

@Component({
  tag: "peid-page-post",
  styleUrls: ["post.css", "../../../global/app.css"],
  shadow: true
})
export class PostPage implements Post {
  title;
  description;
  content;
  data;

  @Prop() url: string;
  @Prop() posts: Map<string, Post>;

  componentWillLoad() {
    const post = this.posts.get(this.url);

    this.title = post.title;
    this.description = post.description;
    this.content = post.content;
    this.data = post;
  }

  render() {
    return [
      <h1>{this.title}</h1>,
      <p>{this.description}</p>,
      <p>
        Posted on <time dateTime={this.data.date}>{this.data.date}</time>
      </p>,
      <div innerHTML={this.content} />,
      <p>All data:</p>,
      <pre>{JSON.stringify(this.data)}</pre>
    ];
  }
}

BlogService.injectProps(PostPage, ["posts"]);

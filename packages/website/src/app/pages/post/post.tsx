import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "peid-page-post",
  styleUrls: ["post.css", "../../../global/app.css"],
  shadow: true
})
export class PostPage {
  title;
  description;
  content;
  data;

  @Prop() url: string;

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

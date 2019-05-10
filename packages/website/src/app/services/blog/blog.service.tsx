import { h } from "@stencil/core";
import { createProviderConsumer } from "@stencil/state-tunnel";

export interface Post {
  url: string;
  title: string;
  description?: string;
  content?: string;
}

export interface BlogState {
  postIndex: string[];
  posts: Map<string, Post>;
  current?: string;
}

export default createProviderConsumer<BlogState>(
  { postIndex: null, posts: null },
  (subscribe, child) => (
    <context-consumer subscribe={subscribe} renderer={child} />
  )
);

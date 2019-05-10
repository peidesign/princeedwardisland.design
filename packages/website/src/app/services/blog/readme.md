# peid-blog-service



<!-- Auto Generated Below -->


## Methods

### `getData() => Promise<({ slug: string; pageTitle: string; description: string; body?: undefined; } | { slug: string; pageTitle: string; body: string; description?: undefined; })[]>`



#### Returns

Type: `Promise<({ slug: string; pageTitle: string; description: string; body?: undefined; } | { slug: string; pageTitle: string; body: string; description?: undefined; })[]>`




## Dependencies

### Used by

 - [peid-website](../..)

### Depends on

- [peid-service-markdown](../markdown)

### Graph
```mermaid
graph TD;
  peid-service-blog --> peid-service-markdown
  peid-website --> peid-service-blog
  style peid-service-blog fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

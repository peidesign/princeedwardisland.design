# app-root



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [peid-service-blog](services/blog)
- [peid-website-router](components/router)

### Graph
```mermaid
graph TD;
  peid-website --> peid-service-blog
  peid-website --> peid-website-router
  peid-service-blog --> peid-service-markdown
  peid-website-router --> stencil-route
  peid-website-router --> stencil-router
  peid-website-router --> stencil-route-switch
  style peid-website fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

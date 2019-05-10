# P.E.I Design's Design System

A modular, performant design system for [P.E.I Design][peidesign] built using [Stencil.js][stenciljs].

- 🎁 Everyting in-the-box, no installation or configuration necessary
- 💯 Framework agnostic
- 🏗 Modular building blocks using web components
- ⚛ Atomic CSS
- 🎨 Completely themeable using CSS custom properties

<!-- TODO: netlify status for website -->
<!-- TODO: github actions status for deploy -->
<!-- TODO: NPM status -->

## Quick start

P.E.I Design's design system can be used without any installation, anywhere HTML works, by using the source from unpkg by dropping the following into your HTML:

```
<link rel="stylesheet" type="text/css" href="https://unpkg.com/@peidesign/design-system/dist/css/peid-design-system.min.css">
<script type="module" src="https://unpkg.com/@peidesign/design-system/dist/components/index.mjs"></script>
<script nomodule src="https://unpkg.com/@peidesign/design-system/dist/components/index.js"></script>
```

## Customization

P.E.I Design's design system can be completely customized from within your application using CSS custom properties.

It allows for:

- **Design token customization**: the base building blocks of the entire system are comprised of CSS custom properties, which form the basis of all atomic CSS classes and component styles.
- **Component customization**: each component has it's own set of CSS custom properties, which handles the appearance for that component.

### Design tokens

Design token variables are customized by overriding them in the `:root` selector of your application's primary stylesheet:

```
:root {
  --peid-color-red-0: red;
}
```

All design tokens variables can be found at [`./src/global/tokens/`][./src/global/tokens/].

### Components

Components can be customized by targetting the component selector and overriding the default variables in your application's stylesheets. E.g, for the `peid-card` component:

```
peid-card {
    --background: red;
}
```

All component variables can be found with the components, which are found at [./src/components/].

## Installation

First, you'll need to ensure you have [NodeJS LTS and NPM](https://nodejs.org/en/download/) installed. You can do so by running the following on the command line:

```
node --version
npm --version
```

Once confirmed, run the following from your command line to clone the repository:

```
git clone https://github.com/peidesign/peidesign
```

Then install the project dependencies:

```
cd peidesign
npm install
```

## Usage

### Running in development

To start a development server, run:

```
npm start
```

### Generating a production build

To generate a production build, run:

```
npm run build
```

The built site will be located in the `www/` folder.

[peidesignwebsite]: https://princeedwardisland.design

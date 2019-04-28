# P.E.I Design's Design System

A modular, performant design system for [P.E.I Design][peidesign] built using [Stencil.js][stenciljs].

- 💯 Framework agnostic
- 🎁 In-the-box, no installation or configuration necessary
- 🏗 Modular building blocks

<!-- TODO: netlify status for website -->
<!-- TODO: github actions status for deploy -->
<!-- TODO: NPM status -->

## Quick start

P.E.I Design's design system can be used without any installation, anywhere HTML works, by using the source from unpkg by dropping the following into your HTML:

<!-- TODO: proper unpkg links -->

```
<script type="module" src="">
<script nomodule src="">
```

## Installation

First, you'll need to ensure you have [NodeJS LTS and NPM](https://nodejs.org/en/download/) installed. You can do so by running the following on the command line:

```
node --version
npm --version
```

Once confirmed, run the following from your command line to clone the repository:

```
git clone https://github.com/peidesign/website
```

Then install the project dependencies:

```
cd website
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

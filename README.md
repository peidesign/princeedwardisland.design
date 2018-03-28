# PEI Design Website


## Installation
First, you'll need [NodeJS](https://nodejs.org/en/download/)

Then, from your command line clone the repository:

```
git clone https://github.com/peidesign/website
```

Then, cd into the directory:

```
cd website
```

And then install the dependencies:

```
npx install
```

## Usage

### Running in development
To start a development server, run:

`npx develop`

### Generating a production build
To generate a production build, run:

```
npx build
```

The built site will be located in the `public/` folder.


## Configuration
This project uses GatsbyJS, with a custom Webpack configuration, custom PostCSS configuration, and the TailwindCSS atomic design framework.

### Gatsby
To configure Gatsby, open up `gatsby.config.js` in your favorite text editor.

[See their docs for more info.](https://www.gatsbyjs.org/docs/gatsby-config/)

### Webpack
To configure Webpack, open up `gatsby-node.js` in your favorite text editor.

[See their docs for more info.](https://www.gatsbyjs.org/docs/add-custom-webpack-config/)

### PostCSS
To configure the PostCSS build process, open up `postcss.config.js` in your favorite text editor.

[See their docs for more info.](https://github.com/michael-ciniawsky/postcss-load-config#usage)

### TailwindCSS
To configure Tailwind's utility class setup, naming conventions, and values, open up `tailwind.js` in your favorite text editor.

[See their docs for more info.](https://tailwindcss.com/docs/what-is-tailwind/)

## Project Structure
The project is laid out as follows:

```
|- dist                   - Where the built site goes
|- src/                   - Where the source files go
|--- components/          - Reusuable components
|--- layouts/             - Layouts for specific page/content-types
|--- pages/               - Single pages
|--- utils/               - Javascript utilities that make doing things easier
|- gatsby-config.js       - The site's config file
|- gatsby-node.js         - Configures Gatsby's underlying features
|- postcss.config.js      - Configures the CSS build process
𝖫- tailwind.js            - Configures the CSS framework the site uses
```

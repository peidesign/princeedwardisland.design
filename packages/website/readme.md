# P.E.I Design Website

The website and/or progressive web app (PWA) for [P.E.I Design][peidesignwebsite]

[![Netlify Status](https://api.netlify.com/api/v1/badges/5d2a3eea-dfb8-4cfa-af4e-6dd9030c87ec/deploy-status)](https://app.netlify.com/sites/peidesign/deploys)

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

# Sneak website

> Developed by Richard Lasso Ledesma 

## Repository

1. Download:
>You will find a main branch with its respective commits, the branches were worked locally.

Main Branch:
```bash
git clone https://github.com/lassorichard/sneak_test.git
```

### Installation

[Node.js](https://nodejs.org/) v12.17.0+ its required to start development.

Install Gulp.js
```bash
$ npm install --global gulp-cli
```

Install dependencies/devDependencies and start a local server.

```bash
$ cd sneak_test
$ npm i || npm install
$ npm start || gulp
```


## Relevant information

1. Mobile First as a fundamental basis in the development of the project.
2. Used semantic tags based on HTML5 standards
3. SCSS was used as style preprocessor, the different .scss components are organized in the following location app/scss
4. Mixins used:

> Breakpoints:

```bash
$bp-mobile: 400px;
$bp-tablet: 768px;
$bp-desktop: 1024px;
$bp-huge: 1200px;
```
> Breakpoint example:

```bash
@inlude from(tablet) {
 //styles
}
```

```bash
$base-font-size: 16px;
```
> Mixins fonts, convert px to rem:

```bash
@inlude font-size(20px)
rendered: font-size: 20px; and font-size: 1.25rem;
```

5. The methodology used for the sass preprocessor was BEM (Block, Element, Modifier)
6. In the project CSS Flexbox was used and in small proportions CSS Gridbox was also used.
7. The items in the "portfolio layout" were loaded by a Json in the following location app/products.json
8. The menu animation was developed thanks to the integration of CSS and JS.
9. Tags were created for the positioning of the web page in search engines.

## Tech stack

HTML5

CSS3

SASS

ES6

JS

GULP

### I appreciate your time reading this document.

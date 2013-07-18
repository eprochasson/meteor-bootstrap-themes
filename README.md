# Bootstrap in Less, with Themes
## Twitter's Bootstrap+Themes Packaged for Meteor, using Less

[Bootstrap](http://twitter.github.com/bootstrap) The sleek, intuitive, and powerful front-end framework for faster and easier web development.

## How is this different from the official Meteor Bootstrap package?

The official package contains the compiled CSS files, meaning you don't get all the LESSy goodness like mixins, variables, etc that makes customizing Bootstrap super awesome. This unofficial package contains the source less files, but modified so that they can be loaded properly by Meteor's `less` package.

## How to install 

1. `npm install -g meteorite` (if not already installed)
2. `mrt add less`
3. `mrt add bootstrap-themes`
4. Create a .less file anywhere in your project to be served to the client and add `@import "/.meteor/meteorite/packages/meteor-bootstrap-themes/lib/themes/<theme>/<theme>.importless";` or `@import "/.meteor/meteorite/packages/meteor-bootstrap-themes/lib/less/bootstrap.importless";` for vanilla bootstrap.

Themes available:
- cerulean

## Meteor-Bootstrap-Themes License

MIT

## Twitter's Bootstrap License

See their [License](https://github.com/twitter/bootstrap)
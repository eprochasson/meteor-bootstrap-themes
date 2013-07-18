# Bootstrap in Less, with Themes
## Twitter's Bootstrap+Themes Packaged for Meteor, using Less

This package is a fork of https://github.com/ianserlin/meteor-bootstrap-less introducing themes (and actually working -- I think).

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
- amelia
- cosmo
- cyborg
- flatly
- superhero
- slate

## How to add a new theme?

1. Fork this repo.
2. Create a folder under theme with the name

3. Pick your theme on [Bootswatch](http://bootswatch.com/). Copy variables.less as variables.lessimport, bootswatch.less as <theme_name>.lessimport.
4. Edit variables.less and remove the @iconSpritePath & @iconWhiteSpritePath variable (as they are defiend in bootstrap)
5. Add
 @import "../../less/bootstrap.lessimport";
 @import "variables.lessimport";
at the beginning of the <template_name>.lessimport file.
6. Submit a pull request.

Please do not add non-free themes/themes under a non-free license.

## License stuff

This package is licensed with the MIT license. [Twitter's Bootstrap License](https://github.com/twitter/bootstrap). Themes downloaded from [Bootswatch](http://bootswatch.com/)

## Contributors
- Original package from https://github.com/ianserlin/meteor-bootstrap-less
- [Emmanuel Prochasson](https://github.com/eprochasson/)
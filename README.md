# Bootstrap in Less, with Themes
## Twitter's Bootstrap+Themes Packaged for Meteor, using Less

This package is a fork of https://github.com/ianserlin/meteor-bootstrap-less introducing themes.

[Bootstrap](http://twitter.github.com/bootstrap) The sleek, intuitive, and powerful front-end framework for faster and easier web development.

## How is this different from the official Meteor Bootstrap package?

The official package contains the compiled CSS files, meaning you don't get all the LESSy goodness like mixins, variables, etc that makes customizing Bootstrap super awesome. This unofficial package contains the source less files, but modified so that they can be loaded properly by Meteor's `less` package.

Also, it includes (some of) the Bootstrap Themes so that you can pick one out of the box, then tune it with your own LESS stylesheet. Whoop Whoop!


## How to install 

1. `npm install -g meteorite` (if not already installed)
2. `mrt add less`
3. `mrt add bootstrap-themes`
4. Create a .less file anywhere in your project to be served to the client and add `@import "/packages/meteor-bootstrap-themes/lib/themes/<theme>/<theme>.lessimport";` or `@import "/packages/meteor-bootstrap-themes/lib/less/bootstrap.lessimport";` for vanilla bootstrap.

also, make sure to remove bootstrap if installed, otherwise the .js gets loaded twice with unpredictable results:
5. `meteor remove bootstrap`

Themes available:
- cerulean
- amelia
- cosmo
- cyborg
- flatly
- superhero
- slate


## Meteorite version < pre-0.6.0

Previous version of Meteorite stored the packages in .meteor/meteorite/, in which case you need to change the `@import` path to `@import "/.meteor/meteorite/packages/meteor-bootstrap-themes/lib/themes/<theme>/<theme>.lessimport";`




## How to add a new theme?

1. Fork this repo.
2. Create a folder under theme with the name of the theme.
3. Put in there the less file for the theme, make sure to change the extension to .lessimport.
4. Remove the @iconSpritePath & @iconWhiteSpritePath variable definition if any (as they are defiend in bootstrap)
5. Add `@import "../../less/bootstrap.lessimport";` (and then other file you need to import for this theme, say `@import "variables.lessimport";`) at the beginning of the <template_name>.lessimport file.
6. Submit a pull request.

Please do not add non-free themes/themes under a non-free license.

## License stuff

This package is licensed with the MIT license. [Twitter's Bootstrap License](https://github.com/twitter/bootstrap). Themes downloaded from [Bootswatch](http://bootswatch.com/)

## Contributors
- Original package from https://github.com/ianserlin/meteor-bootstrap-less
- [Emmanuel Prochasson](https://github.com/eprochasson/)
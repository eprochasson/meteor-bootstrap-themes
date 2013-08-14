var path = Npm.require('path');

Package.describe({
  summary: "Twitter's Bootstrap Packaged for Meteor, with Themes, using Less"
});

Package.on_use(function (api) {
  api.use(['less'], 'client');

  api.add_files(path.join('lib', 'js', 'bootstrap.js'), 'client');
  api.add_files(path.join('lib', 'img', 'glyphicons-halflings.png'), 'client');
  api.add_files(path.join('lib', 'img', 'glyphicons-halflings-white.png'), 'client');
});

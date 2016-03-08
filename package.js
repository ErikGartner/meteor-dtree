Package.describe({
  name: 'smoiz:dtree',
  version: '1.2.2',
  // Brief, one-line summary of the package.
  summary: 'A Meteor package wrapper for my graph library dTree.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ErikGartner/meteor-dtree',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('stevezhu:lodash@4.5.1');
  api.use('d3js:d3@3.5.8');
  api.addFiles('dTree.min.js', ['client', 'server']);
  api.addFiles('client.js', ['client']);
  api.addFiles('server.js', ['server']);
  api.export('dTree', ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('smoiz:dtree');
  api.addFiles('tests/dtree-tests.js', ['client', 'server']);
});

Package.describe({
  name: 'orbyt:financejs',
  version: '0.0.5',
  // Brief, one-line summary of the package.
  summary: 'This is financejs for Meteor. Financejs helps with common finance calculations. ',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('financejs.js', 'client');
  api.use('jquery');
  api.export('Finance', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('orbyt:financejs');
  api.addFiles('financejs-tests.js');
});

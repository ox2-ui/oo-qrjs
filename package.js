Package.describe({
  name: 'ox2:qrjs',
  version: '1.1.3_1',
  // Brief, one-line summary of the package.
  summary: 'TESTING_DO_NOT_USE',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

var C = 'client';
var S = 'server';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.addFiles('lib/qr.js', C);
  api.addFiles('lib/export.js', C);
  api.export('qr', C);

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('ox2:qrjs');
  api.addFiles('tests/package-tests.js');
});

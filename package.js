var riotVersion = "2.2.4";

Package.describe({
  name: 'nisargshah100m:meteor-riot',
  version: '0.0.1',
  summary: 'Riot integration for Meteor',
  git: 'nisargshah100:meteor-riot',
  documentation: 'README.md'
});

Npm.depends({
  "riot": riotVersion,
  'riot-router': '0.6.2'
});

Package.registerBuildPlugin({
  name: "compileRiot",
  use: [],
  sources: [
    'meteor-riot.js'
  ],
  npmDependencies: {
    "riot": riotVersion
  }
});


Package.onUse(function(api) {
  var nodeModulesDir = '.npm/package/node_modules/';
  api.versionsFrom('1.1.0.3');
  api.addFiles (nodeModulesDir + 'riot/riot.min.js' , 'client');
  api.addFiles (nodeModulesDir + 'riot-router/lib/router.min.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('nisargshah100m:meteor-riot');
  api.addFiles('meteor-riot-tests.js');
});

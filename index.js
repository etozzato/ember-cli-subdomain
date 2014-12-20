/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-subdomain',

  config: function(/* environment, appConfig */) {
    var ENV = {
      subdomainMapping: {
        '': 'default',
        'www': 'default'
      }
    }
    return ENV;
  }

};

import Ember from 'ember';
import ENV from '../config/environment';

var urlChecker = Ember.Object.extend({

  subdomain: function(){
    var regexParse = new RegExp('[a-z\-0-9]{2,63}\.[a-z\.]{2,5}$');
    var urlParts = regexParse.exec(this.get('hostname'));
    if(urlParts)
      return this.normalize(this.get('hostname').replace(urlParts[0],'').slice(0, -1));
    else
      return this.normalize('');
  }.property('hostname'),

  hostname: function(){
    if( this.get('customURI') ){
      return this.get('customURI');
    } else {
      return window.location.hostname;
    }
  }.property('customURI'),

  normalize: function (subdomain) {
    return ENV.subdomainMapping[subdomain] || subdomain
  },

  customURI: '',

});

export default {
  name: 'subdomain',
  initialize: function(container, application) {
    container.register('url-checker:main', urlChecker);
    application.inject('route', 'urlChecker', 'url-checker:main');
    application.inject('controller', 'urlChecker', 'url-checker:main');
  },
  urlChecker
};

# ember-cli-subdomain

This simple add-on adds  `subdomain detection` to an Ember application.

## Options

This add-on is configured via your applications `config/environment.js` file. Only one property is
used from your projects configuration:

* `subdomainMapping` -- A javascript hash of subdomains you *may want* to map a unified, default value:

The default `subdomainMapping` value is:

```javascript
//config/environment.js
subdomainMapping: {
  '': 'default',
  'www': 'default'
}
```

## Usage

The initialization of the add-on makes it available to the route and controller:

```
initialize: function(container, application) {
  container.register('url-checker:main', urlChecker);
  application.inject('route', 'urlChecker', 'url-checker:main');
  application.inject('controller', 'urlChecker', 'url-checker:main');
}
```

Use the method `subdomain` of the injected `urlChecker` for your magics...

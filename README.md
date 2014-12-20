# ember-cli-subdomain

This simple addon adds  `subdomain detection` to an Ember application.

## Options

This addon is configured via your applications `config/environment.js` file. Only one property is
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

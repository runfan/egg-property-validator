# egg-property-validator

[![Greenkeeper badge](https://badges.greenkeeper.io/runfan/egg-property-validator.svg)](https://greenkeeper.io/)

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-property-validator.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-property-validator
[travis-image]: https://img.shields.io/travis/runfan/egg-property-validator.svg?style=flat-square
[travis-url]: https://travis-ci.org/runfan/egg-property-validator
[codecov-image]: https://img.shields.io/codecov/c/github/runfan/egg-property-validator.svg?style=flat-square
[codecov-url]: https://codecov.io/github/runfan/egg-property-validator?branch=master
[david-image]: https://img.shields.io/david/runfan/egg-property-validator.svg?style=flat-square
[david-url]: https://david-dm.org/runfan/egg-property-validator
[snyk-image]: https://snyk.io/test/npm/egg-property-validator/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-property-validator
[download-image]: https://img.shields.io/npm/dm/egg-property-validator.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-property-validator

<!--
Description here.
-->

see [property-validator](https://github.com/nettofarah/property-validator#).
## Install

```bash
$ npm i egg-property-validator --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.propertyValidator = {
  enable: true,
  package: 'egg-property-validator',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.propertyValidator = {
  isTheUltimateAnswer(propertyName) {
  // and then return a function that takes the
  // actual object you want to validate
    return function(subject) {
      const value = subject[propertyName];
      const isAnswer = value === 42;
      // Make sure your function returns `result`, `message`
      // and `field`
      return {
        result: isAnswer,
        message: value + ' is not the Answer to the Ultimate Question of Life, The Universe, and Everything',
        field: propertyName,
      };
    };
  },
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->
see [app/extend/validation.js](app/extend/validation.js)
## Questions & Suggestions

Please open an issue [here](https://github.com/runfan/egg/issues).

## License

[MIT](LICENSE)

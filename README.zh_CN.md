# egg-property-validator

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

## 依赖说明

### 依赖的 egg 版本

egg-property-validator 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

### 依赖的插件
<!--

如果有依赖其它插件，请在这里特别说明。如

- security
- multipart

-->

## 开启插件

```js
// config/plugin.js
exports.propertyValidator = {
  enable: true,
  package: 'egg-property-validator',
};
```

## 使用场景

- Why and What: 校验参数规则
- How: 
see [app/extend/validation.js](app/extend/validation.js) 自定义校验规则

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [egg issues](https://github.com/runfan/egg/issues) 异步交流。

## License

[MIT](LICENSE)

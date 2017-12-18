'use strict';

const path = require('path');
const validator = require('property-validator');

module.exports = app => {
  app.coreLogger.info('[egg-property-validator] begin start');
  const start = Date.now();
  app.validator = validator;

  const initValidation = app.loader.loadFile(path.join(__dirname, 'app/extend/validation.js'));
  const validation = app.loader.loadFile(path.join(app.config.baseDir, 'app/extend/validation.js'));
  Object.assign(app.validator, initValidation, validation);
  app.coreLogger.info('[egg-property-validator] started use %d ms', Date.now() - start);
};

'use strict';

module.exports = {
  compare(srcProp, distProp) {
    return function(subject) {
      const srcValue = subject[srcProp];
      const distValue = subject[distProp];
      const isAnswer = srcValue === distValue;
      // Make sure your function returns `result`, `message`
      // and `field`
      return {
        result: isAnswer,
        message: `"${srcProp}" should equal to "${distProp}"`,
        field: srcProp,
      };
    };
  },
  // Your function will receive a property name as its argument
  isCNMobile(propertyName) {
  // and then return a function that takes the
  // actual object you want to validate
    return function(subject) {
      const value = subject[propertyName];
      const isAnswer = /(\+86)?1[1-9]\d{9}/.test(value);
      // Make sure your function returns `result`, `message`
      // and `field`
      return {
        result: isAnswer,
        message: `"${propertyName}" value ${value} should be a china mobile phone number`,
        field: propertyName,
      };
    };
  },
};

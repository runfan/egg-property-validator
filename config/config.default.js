'use strict';

/**
 * egg-property-validator default config
 * @member Config#propertyValidator
 * @property {String} SOME_KEY - some description
 */
exports.propertyValidator = {
  // Your function will receive a property name as its argument
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

'use strict';

module.exports = {
  /**
   * Retrieve Validator Object
   * @member {Validator} Application#validator
   */
  get validator() {
    return this.app.validator;
  },
};

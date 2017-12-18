'use strict';

const { Controller } = require('egg');
class UserController extends Controller {
  constructor(ctx) {
    super(ctx);
    const { compare, presence, isEmail } = ctx.validator;
    this.createRule = [
      presence('username'),
      isEmail('username'),
      presence('password'),
      compare('password', 're-password'),
    ];
  }
  async create(ctx) {
    try {
      ctx.validator.assert(ctx.request.body, this.createRule);
      ctx.body = ctx.request.body;
    } catch (error) {
      ctx.throw(422, 'Validation Failed', {
        code: 'invalid_param',
        errors: error.errors,
      });
    }
  }
  async test_cn(ctx) {
    const res = ctx.validator.validate(ctx.request.body, this.createRule);
    if (res.valid) {
      ctx.throw(422, 'Validation Failed', {
        code: 'invalid_param',
        errors: res.errors,
      });
    }
    ctx.body = ctx.request.body;
  }
}
module.exports = UserController;

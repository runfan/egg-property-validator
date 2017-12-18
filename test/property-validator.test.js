'use strict';

const mock = require('egg-mock');
const assert = require('power-assert');

describe('test/property-validator.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/property-validator-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  describe('validator init', () => {
    it('app validate associate init success', () => {
      assert(app.validator);
      assert(app.validator.isCNMobile);
    });
    it('ctx validator associate init success', () => {
      const ctx = app.mockContext();
      assert(ctx.validator);
      assert(ctx.validator.isCNMobile);
    });
  });


  describe('get', () => {
    it('should return invalid_param when body empty', () => {
      return app.httpRequest()
        .get('/users.json')
        .type('json')
        .expect(422)
        .expect(res => {
          assert(res.body.code === 'invalid_param');
          assert(res.body.message === 'Validation Failed');
          assert.deepEqual(res.body.errors, [
            { field: 'username', message: '"username" required' },
            { field: 'username', message: '"username" should look like an email address' },
            { field: 'password', message: '"password" required' },
          ]);
        });
    });

    it('should all pass', () => {
      return app.httpRequest()
        .get('/users.json')
        .send({
          username: 'foo@gmail.com',
          password: '123456',
          're-password': '123456',
        })
        .expect({
          username: 'foo@gmail.com',
          password: '123456',
          're-password': '123456',
        })
        .expect(200);
    });

  });

  describe('post', () => {
    it('should return invalid_param when body empty', () => {
      app.mockCsrf();
      return app.httpRequest()
        .post('/users.json')
        .expect(422)
        .expect(res => {
          assert(res.body.code === 'invalid_param');
          assert(res.body.message === 'Validation Failed');
          assert.deepEqual(res.body.errors, [
            { field: 'username', message: '"username" required' },
            { field: 'username', message: '"username" should look like an email address' },
            { field: 'password', message: '"password" required' },
          ]);
        });
    });

    it('should return invalid_param when length invaild', () => {
      app.mockCsrf();
      return app.httpRequest()
        .post('/users.json')
        .send({
          username: 'foo',
          password: '12345',
        })
        .expect(422)
        .expect(res => {
          assert(res.body.code === 'invalid_param');
          assert(res.body.message === 'Validation Failed');
          assert.deepEqual(res.body.errors, [
            { field: 'username', message: '"username" should look like an email address' },
            { field: 'password', message: '"password" should equal to "re-password"' },
          ]);
        });
    });

    it('should return invalid_param when password not equal to re-password', () => {
      app.mockCsrf();
      return app.httpRequest()
        .post('/users.json')
        .send({
          username: 'foo@gmail.com',
          password: '123456',
          're-password': '123123',
        })
        .expect(422)
        .expect(res => {
          assert(res.body.code === 'invalid_param');
          assert(res.body.message === 'Validation Failed');
          assert.deepEqual(res.body.errors, [
            { field: 'password', message: '"password" should equal to "re-password"' },
          ]);
        });
    });

    it('should return invalid_param when username invaild', () => {
      app.mockCsrf();
      return app.httpRequest()
        .post('/users.json')
        .send({
          username: '.foo@test.com',
          password: '1234567',
          're-password': '1234567',
        })
        .expect(422)
        .expect(res => {
          assert(res.body.code === 'invalid_param');
          assert(res.body.message === 'Validation Failed');
          assert.deepEqual(res.body.errors, [
            { field: 'username', message: '"username" should look like an email address' },
          ]);
        });
    });

    it('should all pass', () => {
      app.mockCsrf();
      return app.httpRequest()
        .post('/users.json')
        .send({
          username: 'foo@gmail.com',
          password: '123456',
          're-password': '123456',
        })
        .expect({
          username: 'foo@gmail.com',
          password: '123456',
          're-password': '123456',
        })
        .expect(200);
    });
  });

});

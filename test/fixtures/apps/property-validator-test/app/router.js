'use strict';

module.exports = app => {
  const { router, controller } = app;

  router.get('/users.json', controller.user.create);
  router.post('/users.json', controller.user.create);

  router.get('/users_cn.json', controller.user.test_cn);
  router.post('/users_cn.json', controller.user.test_cn);
};

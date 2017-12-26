const loader = require('../index');
const Koa = require('koa');
const app = new Koa();
const request = require('supertest');
const path = require('path');

describe('loader', () => {
  it('should load thrift', done => {
    const options = {
      thrift: path.resolve(__dirname, './thrift')
    };
    loader(app.context, options);
    app.use((ctx, next) => {
      const value = ctx.thrift.testService.test();
      expect(value).toEqual('test');
    });
    request(app.listen())
      .get('/')
      .expect(404, done);
  });

});

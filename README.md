# koa-context-loader
[![NPM version][npm-image]][npm-url]
[![build status](https://img.shields.io/travis/forthedamn/koa-context-loader.svg)](https://travis-ci.org/forthedamn/koa-context-loader)
[![code coverage](https://img.shields.io/codecov/c/github/forthedamn/koa-context-loader.svg)](https://codecov.io/gh/forthedamn/koa-context-loader)
[![license](https://img.shields.io/github/license/forthedamn/koa-context-loader.svg)](LICENSE)

[npm-image]: https://img.shields.io/npm/v/koa-context-loader.svg?style=flat-square
[npm-url]: https://npmjs.org/package/koa-context-loader

> load file module into app.context


## Install


```sh
npm install koa-context-loader

yarn add koa-context-loader
```


## Usage


```js
// ./service/user.js

module.exports = {
  getUserId() {
    return 123;
  }
}

// ./app.js
const Koa = require('koa');
const app = new Koa();
const loader = require('koa-context-loader');
const path = require('path');

const options = {
  service: path.resolve(__dirname, './service'),
  alias: 'path'
}

loader(app.context, options)

app.use((ctx, next) => {
  // ctx[alias][filename][export_method]
  const id = ctx.service.user.getUserId(); // id:123
});

```

### API

#### options {alias: keyof options, path: string}

```
options = {
  alias: path
}
```

> path must be absolute




const loading = require('loading');
const is = require('is-type-of');
const assert = require('assert');

/**
 * loader
 * @param {obj} context {...}
 * @param {obj} options = {
 *  alias: 'path',
 *  service: '/service'
 *  controller: '/controller'
 * }
 */
function loader(context, options) {
  assert(context && is.object(context), 'context should be an object!');
  assert(options && is.object(options), 'options must be an object!');

  Object.keys(options).forEach((alias) => {
    loading(options[alias]).into(context, alias);
  });
}

module.exports = loader;

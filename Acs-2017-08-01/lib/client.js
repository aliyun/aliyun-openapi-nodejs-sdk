
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-08-01';
    super(config);
  }

  /**
   * @param {String} Type - type. required.
   * @param {String} Data - data. optional.
   */
  consleServiceExecutor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('ConsleServiceExecutor', params, options);
  }

  /**
   * @param {String} Type - type. required.
   * @param {String} Data - data. optional.
   */
  consoleServiceExecutor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('ConsoleServiceExecutor', params, options);
  }

}

module.exports = Client;

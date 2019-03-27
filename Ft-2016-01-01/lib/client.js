
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-01-01';
    super(config);
  }

  /**
   * @param {String} QueryParam - queryParam. optional.
   * @param {String} BodyParam - bodyParam. optional.
   */
  testRpcApi(params = {}, options = {}) {
    return this.request('TestRpcApi', params, options);
  }

}

module.exports = Client;

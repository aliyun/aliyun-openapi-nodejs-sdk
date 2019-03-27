
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-01-01';
    super(config);
  }

  /**
   * @param {String} QueryParam - queryParam. optional.
   * @param {String} BodyParam - bodyParam. optional.
   */
  innerApi(params = {}, options = {}) {
    return this.request('InnerApi', params, options);
  }

}

module.exports = Client;

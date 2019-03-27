
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-12-28';
    super(config);
  }

  /**
   * @param {String} data - data. required.
   */
  payBack(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('PayBack', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  refund(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('Refund', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  verify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('Verify', params, options);
  }

}

module.exports = Client;

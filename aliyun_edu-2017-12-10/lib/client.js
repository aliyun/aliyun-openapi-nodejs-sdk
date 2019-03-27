
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-12-10';
    super(config);
  }

  /**
   * @param {String} data - data. required.
   */
  refund(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    options.method = 'POST';
    return this.request('Refund', params, options);
  }

  /**
   * @param {String} data - data. optional.
   */
  validateOrder(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('ValidateOrder', params, options);
  }

  /**
   * @param {String} data - data. optional.
   */
  payOrderCallback(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('payOrderCallback', params, options);
  }

}

module.exports = Client;

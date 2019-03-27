
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-11-16';
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
  payValid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('PayValid', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  refundCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('RefundCallback', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  specComplete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('SpecComplete', params, options);
  }

}

module.exports = Client;

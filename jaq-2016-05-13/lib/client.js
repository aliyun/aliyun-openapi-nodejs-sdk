
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-05-13';
    super(config);
  }

  /**
   * @param {String} data - data. required.
   */
  checkBill(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CheckBill', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  payBill(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('PayBill', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  refundBill(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('RefundBill', params, options);
  }

}

module.exports = Client;

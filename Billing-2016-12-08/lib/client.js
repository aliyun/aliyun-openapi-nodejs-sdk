
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-12-08';
    super(config);
  }

  /**
   * @param {String} findInstanceBillDetailByRequest - findInstanceBillDetailByRequest. required.
   */
  findInstanceBillDetailBy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'findInstanceBillDetailByRequest')) {
      throw new TypeError('parameter "findInstanceBillDetailByRequest" is required');
    }

    return this.request('FindInstanceBillDetailBy', params, options);
  }

  /**
   * @param {String} voBillPayCallbackMessage - voBillPayCallbackMessage. required.
   */
  notifyPay(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'voBillPayCallbackMessage')) {
      throw new TypeError('parameter "voBillPayCallbackMessage" is required');
    }

    return this.request('NotifyPay', params, options);
  }

}

module.exports = Client;


'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-12-29';
    super(config);
  }

  /**
   * @param {String} orderId - orderId. optional.
   */
  getOrderIdByCheckBeforePay(params = {}, options = {}) {
    return this.request('GetOrderIdByCheckBeforePay', params, options);
  }

  /**
   * @param {String} orderId - orderId. optional.
   */
  getOrderIdByQueryPurchase(params = {}, options = {}) {
    return this.request('GetOrderIdByQueryPurchase', params, options);
  }

}

module.exports = Client;

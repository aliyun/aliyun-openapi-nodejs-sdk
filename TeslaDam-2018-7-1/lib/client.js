
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-7-1';
    super(config);
  }

  /**
   * @param {String} Host - host. required.
   * @param {String} Reason - reason. required.
   * @param {String} Remark - remark. required.
   */
  createOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Host')) {
      throw new TypeError('parameter "Host" is required');
    }

    if (!hasOwnProperty(params, 'Reason')) {
      throw new TypeError('parameter "Reason" is required');
    }

    if (!hasOwnProperty(params, 'Remark')) {
      throw new TypeError('parameter "Remark" is required');
    }

    return this.request('CreateOrder', params, options);
  }

}

module.exports = Client;

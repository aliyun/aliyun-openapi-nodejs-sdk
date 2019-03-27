
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-11-11';
    super(config);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} data - data. required.
   */
  orderRefundCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('OrderRefundCallback', params, options);
  }

}

module.exports = Client;

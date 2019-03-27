
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-03-16';
    super(config);
  }

  /**
   * @param {String} data - data. required.
   */
  buyChargingService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('BuyChargingService', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  finishPurchase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('FinishPurchase', params, options);
  }

}

module.exports = Client;

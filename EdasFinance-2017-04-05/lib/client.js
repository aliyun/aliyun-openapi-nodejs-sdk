
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-04-05';
    super(config);
  }

  /**
   * @param {String} data - data. required.
   */
  edasFinanceProduce(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    options.method = 'POST';
    return this.request('EdasFinanceProduce', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  edasFinanceRefund(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    options.method = 'POST';
    return this.request('EdasFinanceRefund', params, options);
  }

}

module.exports = Client;

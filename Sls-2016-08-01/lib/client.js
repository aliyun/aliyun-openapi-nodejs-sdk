
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-08-01';
    super(config);
  }

  /**
   * @param {String} Bid - bid. required.
   * @param {Long} AliUid - aliUid. required.
   */
  openAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('OpenAccount', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  orderSucceededCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('OrderSucceededCallback', params, options);
  }

}

module.exports = Client;

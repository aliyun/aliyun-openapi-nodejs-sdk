
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-09-06';
    super(config);
  }

  /**
   * @param {String} DamagedIdsStr - damagedIdsStr. required.
   * @param {String} Month - month. required.
   * @param {Long} AliUid - aliUid. required.
   */
  applyCoupon(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DamagedIdsStr')) {
      throw new TypeError('parameter "DamagedIdsStr" is required');
    }

    if (!hasOwnProperty(params, 'Month')) {
      throw new TypeError('parameter "Month" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    options.method = 'POST';
    return this.request('ApplyCoupon', params, options);
  }

}

module.exports = Client;

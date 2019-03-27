
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-08-16';
    super(config);
  }

  /**
   * @param {String} data - data. required.
   */
  edasRefund(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    options.method = 'POST';
    return this.request('EdasRefund', params, options);
  }

}

module.exports = Client;

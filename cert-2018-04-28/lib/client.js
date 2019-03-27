
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-04-28';
    super(config);
  }

  /**
   * @param {String} Type - type. required.
   * @param {String} Value - value. required.
   */
  orderSearch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Value')) {
      throw new TypeError('parameter "Value" is required');
    }

    return this.request('OrderSearch', params, options);
  }

}

module.exports = Client;


'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-01-25';
    super(config);
  }

  /**
   * @param {String} data - data. required.
   */
  fillCommodityInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('FillCommodityInfo', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  fillInstanceId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('FillInstanceId', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  saveOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('SaveOrder', params, options);
  }

}

module.exports = Client;

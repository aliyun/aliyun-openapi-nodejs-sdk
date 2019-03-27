
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-01-26';
    super(config);
  }

  /**
   * @param {String} popMethodStr - popMethodStr. required.
   * @param {String} paramStr - paramStr. required.
   */
  popHandlerProxy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'popMethodStr')) {
      throw new TypeError('parameter "popMethodStr" is required');
    }

    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('PopHandlerProxy', params, options);
  }

}

module.exports = Client;

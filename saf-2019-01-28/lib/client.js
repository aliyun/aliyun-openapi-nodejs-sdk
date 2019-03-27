
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2019-01-28';
    super(config);
  }

  /**
   * @param {String} ServiceParameters - serviceParameters. required.
   * @param {String} Service - service. required.
   */
  executeRequest(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceParameters')) {
      throw new TypeError('parameter "ServiceParameters" is required');
    }

    if (!hasOwnProperty(params, 'Service')) {
      throw new TypeError('parameter "Service" is required');
    }

    return this.request('ExecuteRequest', params, options);
  }

}

module.exports = Client;

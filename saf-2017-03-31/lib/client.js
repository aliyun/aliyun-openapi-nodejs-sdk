
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-03-31';
    super(config);
  }

  /**
   * @param {String} Service - service. required.
   * @param {String} ServiceParameters - serviceParameters. optional.
   */
  executeRequest(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Service')) {
      throw new TypeError('parameter "Service" is required');
    }

    return this.request('ExecuteRequest', params, options);
  }

}

module.exports = Client;

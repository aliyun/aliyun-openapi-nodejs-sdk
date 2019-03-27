
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-02-01';
    super(config);
  }

  /**
   * @param {Integer} DataSize - dataSize. optional.
   */
  apiFlowControl(params = {}, options = {}) {
    return this.request('ApiFlowControl', params, options);
  }

}

module.exports = Client;

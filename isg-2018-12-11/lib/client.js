
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-12-11';
    super(config);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} Target - target. optional.
   * @param {Json} Params - params. optional.
   */
  callServiceGateway(params = {}, options = {}) {
    return this.request('CallServiceGateway', params, options);
  }

}

module.exports = Client;

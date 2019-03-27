
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-03-16';
    super(config);
  }

  /**
   * @param {String} Request - request. required.
   */
  getNluPlusResponse(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Request')) {
      throw new TypeError('parameter "Request" is required');
    }

    return this.request('GetNluPlusResponse', params, options);
  }

}

module.exports = Client;

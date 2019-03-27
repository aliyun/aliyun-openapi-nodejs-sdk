
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-06-26';
    super(config);
  }

  /**
   * @param {String} RequestJson - requestJson. required.
   */
  submitBizRequest(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequestJson')) {
      throw new TypeError('parameter "RequestJson" is required');
    }

    return this.request('SubmitBizRequest', params, options);
  }

}

module.exports = Client;

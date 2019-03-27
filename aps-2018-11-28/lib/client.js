
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-11-28';
    super(config);
  }

  /**
   * @param {String} AliyunPk - aliyunPk. optional.
   * @param {String} RequestId - requestId. optional.
   */
  getPartnerInfoWithProgram(params = {}, options = {}) {
    return this.request('GetPartnerInfoWithProgram', params, options);
  }

}

module.exports = Client;

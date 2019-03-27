
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-10-01';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. required.
   * @param {String} TargetSubUserAccountId - targetSubUserAccountId. required.
   */
  generateSubUserMiniLoginToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessKeyId')) {
      throw new TypeError('parameter "AccessKeyId" is required');
    }

    if (!hasOwnProperty(params, 'TargetSubUserAccountId')) {
      throw new TypeError('parameter "TargetSubUserAccountId" is required');
    }

    return this.request('GenerateSubUserMiniLoginToken', params, options);
  }

}

module.exports = Client;

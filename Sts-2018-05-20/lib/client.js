
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-05-20';
    super(config);
  }

  /**
   * @param {String} OriginalAccessKeyId - OriginalAccessKeyId. required.
   * @param {String} OriginalSecurityToken - OriginalSecurityToken. required.
   */
  regenerateTokenForInternal(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OriginalAccessKeyId')) {
      throw new TypeError('parameter "OriginalAccessKeyId" is required');
    }

    if (!hasOwnProperty(params, 'OriginalSecurityToken')) {
      throw new TypeError('parameter "OriginalSecurityToken" is required');
    }

    return this.request('RegenerateTokenForInternal', params, options);
  }

}

module.exports = Client;

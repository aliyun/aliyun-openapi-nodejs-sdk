
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-12-29';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SignName - signName. required.
   * @param {String} TemplateCode - templateCode. required.
   * @param {String} RecNum - recNum. required.
   * @param {String} ParamString - paramString. required.
   */
  singleSendSms(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SignName')) {
      throw new TypeError('parameter "SignName" is required');
    }

    if (!hasOwnProperty(params, 'TemplateCode')) {
      throw new TypeError('parameter "TemplateCode" is required');
    }

    if (!hasOwnProperty(params, 'RecNum')) {
      throw new TypeError('parameter "RecNum" is required');
    }

    if (!hasOwnProperty(params, 'ParamString')) {
      throw new TypeError('parameter "ParamString" is required');
    }

    return this.request('SingleSendSms', params, options);
  }

}

module.exports = Client;

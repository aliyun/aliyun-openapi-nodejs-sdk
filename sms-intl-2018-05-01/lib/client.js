
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-05-01';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MessageId - messageId. required.
   */
  queryMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MessageId')) {
      throw new TypeError('parameter "MessageId" is required');
    }

    return this.request('QueryMessage', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} To - to. required.
   * @param {String} From - from. optional.
   * @param {String} Message - message. required.
   * @param {String} Type - type. optional.
   */
  sendMessageToGlobe(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'To')) {
      throw new TypeError('parameter "To" is required');
    }

    if (!hasOwnProperty(params, 'Message')) {
      throw new TypeError('parameter "Message" is required');
    }

    return this.request('SendMessageToGlobe', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} To - to. required.
   * @param {String} From - from. optional.
   * @param {String} TemplateCode - templateCode. required.
   * @param {String} TemplateParam - templateParam. optional.
   * @param {String} SmsUpExtendCode - smsUpExtendCode. optional.
   */
  sendMessageWithTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'To')) {
      throw new TypeError('parameter "To" is required');
    }

    if (!hasOwnProperty(params, 'TemplateCode')) {
      throw new TypeError('parameter "TemplateCode" is required');
    }

    return this.request('SendMessageWithTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MessageId - messageId. required.
   * @param {String} ConversionDate - conversionDate. required.
   */
  smsConversion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MessageId')) {
      throw new TypeError('parameter "MessageId" is required');
    }

    if (!hasOwnProperty(params, 'ConversionDate')) {
      throw new TypeError('parameter "ConversionDate" is required');
    }

    return this.request('SmsConversion', params, options);
  }

}

module.exports = Client;

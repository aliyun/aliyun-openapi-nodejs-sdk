
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-03-23';
    super(config);
  }

  /**
   * @param {String} MteeCode - mteeCode. required.
   * @param {String} CodeType - codeType. required.
   * @param {String} IdType - idType. required.
   * @param {String} UserId - userId. required.
   * @param {String} Collina - collina. optional.
   * @param {String} UmidToken - umidToken. optional.
   * @param {String} Ip - ip. optional.
   * @param {String} Email - email. optional.
   * @param {String} Phone - phone. optional.
   */
  findRisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MteeCode')) {
      throw new TypeError('parameter "MteeCode" is required');
    }

    if (!hasOwnProperty(params, 'CodeType')) {
      throw new TypeError('parameter "CodeType" is required');
    }

    if (!hasOwnProperty(params, 'IdType')) {
      throw new TypeError('parameter "IdType" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('FindRisk', params, options);
  }

  /**
   * @param {String} RequestId - requestId. optional.
   * @param {String} MteeCode - mteeCode. required.
   * @param {String} CodeType - codeType. required.
   * @param {String} IdType - idType. required.
   * @param {String} UserId - userId. required.
   * @param {String} ChannelType - channelType. required.
   * @param {String} BizId - bizId. optional.
   * @param {String} EventId - eventId. optional.
   * @param {String} MessageReiver - messageReiver. optional.
   * @param {Integer} TimeInterval - timeInterval. optional.
   */
  sendVerifyCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MteeCode')) {
      throw new TypeError('parameter "MteeCode" is required');
    }

    if (!hasOwnProperty(params, 'CodeType')) {
      throw new TypeError('parameter "CodeType" is required');
    }

    if (!hasOwnProperty(params, 'IdType')) {
      throw new TypeError('parameter "IdType" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ChannelType')) {
      throw new TypeError('parameter "ChannelType" is required');
    }

    return this.request('SendVerifyCode', params, options);
  }

  /**
   * @param {String} RequestId - requestId. optional.
   * @param {String} MteeCode - mteeCode. required.
   * @param {String} CodeType - codeType. required.
   * @param {String} IdType - idType. required.
   * @param {String} UserId - userId. required.
   * @param {String} ChannelType - channelType. required.
   * @param {String} VerifyCode - verifyCode. required.
   * @param {String} UmidToken - umidToken. optional.
   * @param {String} Collina - collina. optional.
   * @param {String} Ip - ip. optional.
   */
  validateVerifyCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MteeCode')) {
      throw new TypeError('parameter "MteeCode" is required');
    }

    if (!hasOwnProperty(params, 'CodeType')) {
      throw new TypeError('parameter "CodeType" is required');
    }

    if (!hasOwnProperty(params, 'IdType')) {
      throw new TypeError('parameter "IdType" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ChannelType')) {
      throw new TypeError('parameter "ChannelType" is required');
    }

    if (!hasOwnProperty(params, 'VerifyCode')) {
      throw new TypeError('parameter "VerifyCode" is required');
    }

    return this.request('ValidateVerifyCode', params, options);
  }

}

module.exports = Client;

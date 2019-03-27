
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-08-04';
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
   * @param {String} Umid - umid. optional.
   * @param {Json} Extend - extend. optional.
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
   * @param {String} Type - type. required.
   * @param {String} DataType - dataType. required.
   * @param {String} DataValue - dataValue. required.
   * @param {String} QueryLike - queryLike. required.
   * @param {Json} Extend - extend. optional.
   */
  queryNameList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    if (!hasOwnProperty(params, 'DataValue')) {
      throw new TypeError('parameter "DataValue" is required');
    }

    if (!hasOwnProperty(params, 'QueryLike')) {
      throw new TypeError('parameter "QueryLike" is required');
    }

    return this.request('QueryNameList', params, options);
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
   * @param {Json} MessageParameters - messageParameters. optional.
   * @param {Json} Extend - extend. optional.
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
   * @param {Json} Extend - extend. optional.
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

  /**
   * @param {String} AppKey - appKey. required.
   * @param {String} SignTime - signTime. required.
   * @param {String} Sign - sign. required.
   * @param {String} MteeCode - mteeCode. required.
   * @param {String} CodeType - codeType. required.
   * @param {String} IdType - idType. required.
   * @param {String} UserId - userId. required.
   * @param {String} ChannelType - channelType. required.
   * @param {String} VerifyResult - verifyResult. required.
   * @param {String} UmidToken - umidToken. optional.
   * @param {String} Collina - collina. optional.
   * @param {String} Ip - ip. optional.
   * @param {Json} Extend - extend. optional.
   */
  writeUssc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'SignTime')) {
      throw new TypeError('parameter "SignTime" is required');
    }

    if (!hasOwnProperty(params, 'Sign')) {
      throw new TypeError('parameter "Sign" is required');
    }

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

    if (!hasOwnProperty(params, 'VerifyResult')) {
      throw new TypeError('parameter "VerifyResult" is required');
    }

    return this.request('WriteUssc', params, options);
  }

}

module.exports = Client;

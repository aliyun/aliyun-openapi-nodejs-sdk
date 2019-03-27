
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-05-25';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Format - Format. optional.
   * @param {String} RegionId - RegionId. optional.
   * @param {String} Signature - Signature. optional.
   * @param {String} SignatureMethod - SignatureMethod. optional.
   * @param {String} SignatureNonce - SignatureNonce. optional.
   * @param {String} SignatureVersion - SignatureVersion. optional.
   * @param {String} Timestamp - Timestamp. optional.
   * @param {String} Version - Version. optional.
   * @param {String} SignatureType - SignatureType. optional.
   * @param {String} PhoneNumber - PhoneNumber. required.
   * @param {String} BizId - BizId. optional.
   * @param {String} SendDate - SendDate. required.
   * @param {Long} PageSize - PageSize. required.
   * @param {Long} CurrentPage - CurrentPage. required.
   * @param {String} OwnerId - OwnerId. optional.
   * @param {String} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - ResourceOwnerAccount. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   */
  querySendDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    if (!hasOwnProperty(params, 'SendDate')) {
      throw new TypeError('parameter "SendDate" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('QuerySendDetails', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Format - Format. optional.
   * @param {String} RegionId - RegionId. optional.
   * @param {String} Signature - Signature. optional.
   * @param {String} SignatureMethod - SignatureMethod. optional.
   * @param {String} SignatureNonce - SignatureNonce. optional.
   * @param {String} SignatureVersion - SignatureVersion. optional.
   * @param {String} Timestamp - Timestamp. optional.
   * @param {String} Version - Version. optional.
   * @param {String} SignatureType - SignatureType. optional.
   * @param {String} PhoneNumberJson - PhoneNumberJson. required.
   * @param {String} SignNameJson - SignNameJson. required.
   * @param {String} TemplateCode - TemplateCode. required.
   * @param {String} templateParamJson - templateParamJson. optional.
   * @param {String} TemplateParamJson - TemplateParamJson. optional.
   * @param {String} SmsUpExtendCodeJson - SmsUpExtendCodeJson. optional.
   * @param {String} OwnerId - OwnerId. optional.
   * @param {String} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - ResourceOwnerAccount. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   */
  sendBatchSms(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhoneNumberJson')) {
      throw new TypeError('parameter "PhoneNumberJson" is required');
    }

    if (!hasOwnProperty(params, 'SignNameJson')) {
      throw new TypeError('parameter "SignNameJson" is required');
    }

    if (!hasOwnProperty(params, 'TemplateCode')) {
      throw new TypeError('parameter "TemplateCode" is required');
    }

    return this.request('SendBatchSms', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Format - Format. optional.
   * @param {String} PhoneNumbers - PhoneNumbers. required.
   * @param {String} RegionId - RegionId. optional.
   * @param {String} Signature - Signature. optional.
   * @param {String} SignatureMethod - SignatureMethod. optional.
   * @param {String} SignatureNonce - SignatureNonce. optional.
   * @param {String} SignatureVersion - SignatureVersion. optional.
   * @param {String} SignName - SignName. required.
   * @param {String} TemplateCode - TemplateCode. required.
   * @param {String} TemplateParam - TemplateParam. optional.
   * @param {String} OutId - OutId. optional.
   * @param {String} SmsUpExtendCode - SmsUpExtendCode. optional.
   * @param {String} Timestamp - Timestamp. optional.
   * @param {String} Version - Version. optional.
   * @param {String} SignatureType - SignatureType. optional.
   * @param {String} OwnerId - OwnerId. optional.
   * @param {String} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - ResourceOwnerAccount. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   */
  sendSms(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhoneNumbers')) {
      throw new TypeError('parameter "PhoneNumbers" is required');
    }

    if (!hasOwnProperty(params, 'SignName')) {
      throw new TypeError('parameter "SignName" is required');
    }

    if (!hasOwnProperty(params, 'TemplateCode')) {
      throw new TypeError('parameter "TemplateCode" is required');
    }

    return this.request('SendSms', params, options);
  }

}

module.exports = Client;

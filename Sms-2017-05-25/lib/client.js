
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

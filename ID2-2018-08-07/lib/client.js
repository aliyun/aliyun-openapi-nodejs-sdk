
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-08-07';
    super(config);
  }

  /**
   * @param {String} OriginUser - originUser. required.
   * @param {String} ApiVersion - apiVersion. required.
   * @param {Integer} OriginApiType - originApiType. required.
   * @param {String} RegionCode - regionCode. required.
   * @param {String} Id2 - id2. required.
   * @param {String} DeviceAuthCode - deviceAuthCode. required.
   * @param {String} DeviceExtra - deviceExtra. optional.
   * @param {String} Data - data. required.
   * @param {String} DeviceChallenge - deviceChallenge. required.
   * @param {String} ServerExtra - serverExtra. optional.
   * @param {String} ProductKey - productKey. required.
   */
  deliveryGetServerAuthCodeAndEncryptData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OriginUser')) {
      throw new TypeError('parameter "OriginUser" is required');
    }

    if (!hasOwnProperty(params, 'ApiVersion')) {
      throw new TypeError('parameter "ApiVersion" is required');
    }

    if (!hasOwnProperty(params, 'OriginApiType')) {
      throw new TypeError('parameter "OriginApiType" is required');
    }

    if (!hasOwnProperty(params, 'RegionCode')) {
      throw new TypeError('parameter "RegionCode" is required');
    }

    if (!hasOwnProperty(params, 'Id2')) {
      throw new TypeError('parameter "Id2" is required');
    }

    if (!hasOwnProperty(params, 'DeviceAuthCode')) {
      throw new TypeError('parameter "DeviceAuthCode" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    if (!hasOwnProperty(params, 'DeviceChallenge')) {
      throw new TypeError('parameter "DeviceChallenge" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    options.method = 'POST';
    return this.request('DeliveryGetServerAuthCodeAndEncryptData', params, options);
  }

  /**
   * @param {Integer} OriginApiType - originApiType. required.
   * @param {String} ApiVersion - apiVersion. required.
   * @param {String} OriginUser - originUser. required.
   * @param {String} RegionCode - regionCode. required.
   * @param {String} DeviceAuthCode - deviceAuthCode. required.
   */
  deliveryOtpGetId2(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OriginApiType')) {
      throw new TypeError('parameter "OriginApiType" is required');
    }

    if (!hasOwnProperty(params, 'ApiVersion')) {
      throw new TypeError('parameter "ApiVersion" is required');
    }

    if (!hasOwnProperty(params, 'OriginUser')) {
      throw new TypeError('parameter "OriginUser" is required');
    }

    if (!hasOwnProperty(params, 'RegionCode')) {
      throw new TypeError('parameter "RegionCode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceAuthCode')) {
      throw new TypeError('parameter "DeviceAuthCode" is required');
    }

    options.method = 'POST';
    return this.request('DeliveryOtpGetId2', params, options);
  }

  /**
   * @param {Integer} OriginApiType - originApiType. required.
   * @param {String} ApiVersion - apiVersion. required.
   * @param {String} OriginUser - originUser. required.
   * @param {String} RegionCode - regionCode. required.
   * @param {String} Id2 - id2. required.
   * @param {String} AuthCode - authCode. required.
   * @param {String} Extra - extra. optional.
   * @param {String} ProductKey - productKey. required.
   */
  deliveryVerify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OriginApiType')) {
      throw new TypeError('parameter "OriginApiType" is required');
    }

    if (!hasOwnProperty(params, 'ApiVersion')) {
      throw new TypeError('parameter "ApiVersion" is required');
    }

    if (!hasOwnProperty(params, 'OriginUser')) {
      throw new TypeError('parameter "OriginUser" is required');
    }

    if (!hasOwnProperty(params, 'RegionCode')) {
      throw new TypeError('parameter "RegionCode" is required');
    }

    if (!hasOwnProperty(params, 'Id2')) {
      throw new TypeError('parameter "Id2" is required');
    }

    if (!hasOwnProperty(params, 'AuthCode')) {
      throw new TypeError('parameter "AuthCode" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    options.method = 'POST';
    return this.request('DeliveryVerify', params, options);
  }

  /**
   * @param {Integer} OriginApiType - originApiType. required.
   * @param {String} ApiVersion - apiVersion. required.
   * @param {String} OriginUser - originUser. required.
   * @param {String} RegionCode - regionCode. required.
   * @param {String} Id2 - id2. required.
   * @param {String} AuthCode - AuthCode. required.
   * @param {String} Extra - extra. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} Data - data. required.
   */
  deliveryVerifyAndEncrypt(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OriginApiType')) {
      throw new TypeError('parameter "OriginApiType" is required');
    }

    if (!hasOwnProperty(params, 'ApiVersion')) {
      throw new TypeError('parameter "ApiVersion" is required');
    }

    if (!hasOwnProperty(params, 'OriginUser')) {
      throw new TypeError('parameter "OriginUser" is required');
    }

    if (!hasOwnProperty(params, 'RegionCode')) {
      throw new TypeError('parameter "RegionCode" is required');
    }

    if (!hasOwnProperty(params, 'Id2')) {
      throw new TypeError('parameter "Id2" is required');
    }

    if (!hasOwnProperty(params, 'AuthCode')) {
      throw new TypeError('parameter "AuthCode" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    options.method = 'POST';
    return this.request('DeliveryVerifyAndEncrypt', params, options);
  }

}

module.exports = Client;

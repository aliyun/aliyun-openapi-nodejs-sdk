
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-07-07';
    super(config);
  }

  /**
   * @param {String} RequestId - requestId. optional.
   * @param {String} Id2 - id2. optional.
   * @param {String} Extra - extra. optional.
   * @param {String} License - license. optional.
   * @param {String} ApiVersion - apiVersion. optional.
   * @param {String} AuthCode - authCode. optional.
   */
  activate(params = {}, options = {}) {
    return this.request('Activate', params, options);
  }

  /**
   * @param {String} ProductKey - productKey. optional.
   * @param {String} Id2 - id2. optional.
   * @param {String} DeviceExtra - deviceExtra. optional.
   * @param {String} Data - data. optional.
   * @param {String} DeviceChallenge - deviceChallenge. optional.
   * @param {String} ServerExtra - serverExtra. optional.
   * @param {String} ApiVersion - apiVersion. optional.
   * @param {String} DeviceAuthCode - deviceAuthCode. optional.
   * @param {String} RequestId - requestId. optional.
   */
  getServerAuthCodeAndEncryptData(params = {}, options = {}) {
    return this.request('GetServerAuthCodeAndEncryptData', params, options);
  }

  /**
   * @param {String} Id2 - id2. optional.
   * @param {String} ApiVersion - apiVersion. optional.
   * @param {String} RequestId - requestId. optional.
   */
  getServerRandom(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('GetServerRandom', params, options);
  }

  /**
   * @param {String} ApiVersion - apiVersion. optional.
   * @param {String} DeviceAuthCode - deviceAuthCode. optional.
   * @param {String} RequestId - requestId. optional.
   */
  otpGetId2(params = {}, options = {}) {
    return this.request('OtpGetId2', params, options);
  }

  /**
   * @param {String} RequestId - requestId. optional.
   * @param {String} Id2 - id2. optional.
   * @param {String} Extra - extra. optional.
   * @param {String} ApiVersion - apiVersion. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} AuthCode - authCode. optional.
   */
  verify(params = {}, options = {}) {
    return this.request('Verify', params, options);
  }

  /**
   * @param {String} AuthCode - authCode. optional.
   * @param {String} RequestId - requestId. optional.
   * @param {String} Extra - extra. optional.
   * @param {String} Data - data. optional.
   * @param {String} ApiVersion - apiVersion. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} Id2 - id2. optional.
   */
  verifyAndEncrypt(params = {}, options = {}) {
    return this.request('VerifyAndEncrypt', params, options);
  }

}

module.exports = Client;

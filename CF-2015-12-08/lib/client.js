
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-12-08';
    super(config);
  }

  /**
   * @param {String} AccessKey - accessKey. required.
   * @param {String} Token - token. required.
   * @param {String} SessionId - sessionId. required.
   * @param {String} RemoteIp - remoteIp. required.
   * @param {String} Sig - sig. required.
   * @param {String} AppKey - appKey. required.
   */
  authenticate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessKey')) {
      throw new TypeError('parameter "AccessKey" is required');
    }

    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    if (!hasOwnProperty(params, 'SessionId')) {
      throw new TypeError('parameter "SessionId" is required');
    }

    if (!hasOwnProperty(params, 'RemoteIp')) {
      throw new TypeError('parameter "RemoteIp" is required');
    }

    if (!hasOwnProperty(params, 'Sig')) {
      throw new TypeError('parameter "Sig" is required');
    }

    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('Authenticate', params, options);
  }

  /**
   * @param {String} AppKey - appKey. required.
   * @param {String} EventId - eventId. required.
   * @param {Integer} UserFeedback - userFeedback. required.
   * @param {String} CustomerDecision - customerDecision. required.
   * @param {String} AliDecision - aliDecision. required.
   * @param {String} DenyReason - denyReason. required.
   * @param {String} Timestamp - timestamp. required.
   * @param {String} AppToken - appToken. required.
   */
  cfAccountFeedback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    if (!hasOwnProperty(params, 'UserFeedback')) {
      throw new TypeError('parameter "UserFeedback" is required');
    }

    if (!hasOwnProperty(params, 'CustomerDecision')) {
      throw new TypeError('parameter "CustomerDecision" is required');
    }

    if (!hasOwnProperty(params, 'AliDecision')) {
      throw new TypeError('parameter "AliDecision" is required');
    }

    if (!hasOwnProperty(params, 'DenyReason')) {
      throw new TypeError('parameter "DenyReason" is required');
    }

    if (!hasOwnProperty(params, 'Timestamp')) {
      throw new TypeError('parameter "Timestamp" is required');
    }

    if (!hasOwnProperty(params, 'AppToken')) {
      throw new TypeError('parameter "AppToken" is required');
    }

    return this.request('CfAccountFeedback', params, options);
  }

  /**
   * @param {String} AppKey - appKey. required.
   * @param {String} SceneId - sceneId. required.
   * @param {String} Ip - ip. required.
   * @param {String} PhoneNumber - phoneNumber. required.
   * @param {String} Trans - trans. optional.
   * @param {String} Timestamp - timestamp. required.
   * @param {String} AppToken - appToken. required.
   */
  cfAccountQuery(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'SceneId')) {
      throw new TypeError('parameter "SceneId" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    if (!hasOwnProperty(params, 'Timestamp')) {
      throw new TypeError('parameter "Timestamp" is required');
    }

    if (!hasOwnProperty(params, 'AppToken')) {
      throw new TypeError('parameter "AppToken" is required');
    }

    return this.request('CfAccountQuery', params, options);
  }

  /**
   * @param {String} SerialNo - serialNo. required.
   * @param {String} TokenId - tokenId. required.
   * @param {String} SceneId - sceneId. required.
   * @param {Long} TimeStamp - timeStamp. required.
   * @param {String} Trans - trans. optional.
   * @param {String} AppKey - appKey. required.
   */
  querySimple(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SerialNo')) {
      throw new TypeError('parameter "SerialNo" is required');
    }

    if (!hasOwnProperty(params, 'TokenId')) {
      throw new TypeError('parameter "TokenId" is required');
    }

    if (!hasOwnProperty(params, 'SceneId')) {
      throw new TypeError('parameter "SceneId" is required');
    }

    if (!hasOwnProperty(params, 'TimeStamp')) {
      throw new TypeError('parameter "TimeStamp" is required');
    }

    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('QuerySimple', params, options);
  }

}

module.exports = Client;

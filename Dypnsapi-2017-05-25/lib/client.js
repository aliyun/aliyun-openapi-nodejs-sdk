
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SchemeName - schemeName. required.
   * @param {String} AppName - appName. required.
   * @param {String} OsType - osType. required.
   * @param {String} PackName - packName. optional.
   * @param {String} PackSign - packSign. optional.
   * @param {String} BundleId - bundleId. optional.
   */
  createVerifyScheme(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SchemeName')) {
      throw new TypeError('parameter "SchemeName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'OsType')) {
      throw new TypeError('parameter "OsType" is required');
    }

    options.method = 'POST';
    return this.request('CreateVerifyScheme', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SceneCode - sceneCode. required.
   * @param {String} AccessCode - accessCode. required.
   * @param {String} PhoneNumber - phoneNumber. required.
   * @param {String} OutId - outId. optional.
   */
  gatewayVerify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SceneCode')) {
      throw new TypeError('parameter "SceneCode" is required');
    }

    if (!hasOwnProperty(params, 'AccessCode')) {
      throw new TypeError('parameter "AccessCode" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    return this.request('GatewayVerify', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SceneCode - sceneCode. required.
   * @param {String} SdkVersion - sdkVersion. required.
   * @param {String} PhoneNumber - phoneNumber. required.
   */
  gatewayVerifyInitialization(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SceneCode')) {
      throw new TypeError('parameter "SceneCode" is required');
    }

    if (!hasOwnProperty(params, 'SdkVersion')) {
      throw new TypeError('parameter "SdkVersion" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    return this.request('GatewayVerifyInitialization', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Since - since. required.
   * @param {String} PhoneNumber - phoneNumber. required.
   */
  twiceTelVerify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Since')) {
      throw new TypeError('parameter "Since" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    return this.request('TwiceTelVerify', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AccessCode - accessCode. required.
   * @param {String} PhoneNumber - phoneNumber. required.
   * @param {String} OutId - outId. optional.
   */
  verifyMobile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessCode')) {
      throw new TypeError('parameter "AccessCode" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    options.method = 'POST';
    return this.request('VerifyMobile', params, options);
  }

}

module.exports = Client;

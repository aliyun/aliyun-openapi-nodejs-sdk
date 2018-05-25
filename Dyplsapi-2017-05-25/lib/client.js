
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
   * @param {String} PoolKey - poolKey. optional.
   * @param {String} PhoneNoA - phoneNoA. required.
   * @param {String} PhoneNoB - phoneNoB. required.
   * @param {String} PhoneNoX - phoneNoX. optional.
   * @param {String} Expiration - expireDate. required.
   * @param {String} ExpectCity - expectCity. optional.
   * @param {Boolean} IsRecordingEnabled - needRecord. optional.
   * @param {String} OutId - outId. optional.
   */
  bindAxb(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhoneNoA')) {
      throw new TypeError('parameter "PhoneNoA" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNoB')) {
      throw new TypeError('parameter "PhoneNoB" is required');
    }

    if (!hasOwnProperty(params, 'Expiration')) {
      throw new TypeError('parameter "Expiration" is required');
    }

    return this.request('BindAxb', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PoolKey - poolKey. optional.
   * @param {String} PhoneNoA - phoneNoA. required.
   * @param {String} PhoneNoB - phoneNoB. optional.
   * @param {String} PhoneNoX - phoneNoX. optional.
   * @param {String} Expiration - expireDate. required.
   * @param {String} ExpectCity - expectCity. optional.
   * @param {Boolean} IsRecordingEnabled - needRecord. optional.
   * @param {String} NoType - noType. optional.
   * @param {String} OutId - outId. optional.
   */
  bindAxn(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhoneNoA')) {
      throw new TypeError('parameter "PhoneNoA" is required');
    }

    if (!hasOwnProperty(params, 'Expiration')) {
      throw new TypeError('parameter "Expiration" is required');
    }

    return this.request('BindAxn', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PoolKey - poolKey. optional.
   * @param {String} PhoneNoA - phoneNoA. required.
   * @param {String} Extension - extension. optional.
   * @param {String} PhoneNoB - phoneNoB. optional.
   * @param {String} PhoneNoX - phoneNoX. optional.
   * @param {String} Expiration - expireDate. required.
   * @param {String} ExpectCity - expectCity. optional.
   * @param {Boolean} IsRecordingEnabled - needRecord. optional.
   * @param {String} OutId - outId. optional.
   */
  bindAxnExtension(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhoneNoA')) {
      throw new TypeError('parameter "PhoneNoA" is required');
    }

    if (!hasOwnProperty(params, 'Expiration')) {
      throw new TypeError('parameter "Expiration" is required');
    }

    return this.request('BindAxnExtension', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PoolKey - poolKey. optional.
   * @param {String} ProductType - productType. optional.
   * @param {String} CallId - callId. required.
   * @param {String} CallTime - callTime. optional.
   */
  queryRecordFileDownloadUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CallId')) {
      throw new TypeError('parameter "CallId" is required');
    }

    return this.request('QueryRecordFileDownloadUrl', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PoolKey - poolKey. optional.
   * @param {String} ProductType - productType. optional.
   * @param {String} SubsId - subsId. required.
   * @param {String} PhoneNoX - phoneNoX. required.
   */
  querySubscriptionDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubsId')) {
      throw new TypeError('parameter "SubsId" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNoX')) {
      throw new TypeError('parameter "PhoneNoX" is required');
    }

    return this.request('QuerySubscriptionDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PoolKey - poolKey. optional.
   * @param {String} ProductType - productType. optional.
   * @param {String} SubsId - subsId. required.
   * @param {String} SecretNo - secretNo. required.
   */
  unbindSubscription(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubsId')) {
      throw new TypeError('parameter "SubsId" is required');
    }

    if (!hasOwnProperty(params, 'SecretNo')) {
      throw new TypeError('parameter "SecretNo" is required');
    }

    return this.request('UnbindSubscription', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PoolKey - poolKey. optional.
   * @param {String} ProductType - productType. optional.
   * @param {String} SubsId - subsId. required.
   * @param {String} PhoneNoX - phoneNoX. required.
   * @param {String} PhoneNoA - phoneNoA. optional.
   * @param {String} PhoneNoB - phoneNoB. optional.
   * @param {String} Expiration - expireDate. optional.
   * @param {String} OperateType - operateType. required.
   */
  updateSubscription(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubsId')) {
      throw new TypeError('parameter "SubsId" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNoX')) {
      throw new TypeError('parameter "PhoneNoX" is required');
    }

    if (!hasOwnProperty(params, 'OperateType')) {
      throw new TypeError('parameter "OperateType" is required');
    }

    return this.request('UpdateSubscription', params, options);
  }

}

module.exports = Client;

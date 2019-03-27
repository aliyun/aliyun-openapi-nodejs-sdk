
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
   * @param {String} PhoneNoB - phoneNoB. optional.
   * @param {String} PhoneNoX - phoneNoX. optional.
   * @param {String} Expiration - expireDate. required.
   * @param {String} ExpectCity - expectCity. optional.
   * @param {Boolean} IsRecordingEnabled - needRecord. optional.
   * @param {String} OutId - outId. optional.
   * @param {String} OutOrderId - outOrderId. optional.
   */
  bindAxb(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhoneNoA')) {
      throw new TypeError('parameter "PhoneNoA" is required');
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
   * @param {String} GroupId - groupId. required.
   * @param {String} PhoneNoB - phoneNoB. optional.
   * @param {String} PhoneNoX - phoneNoX. optional.
   * @param {String} Expiration - expireDate. required.
   * @param {String} ExpectCity - expectCity. optional.
   * @param {Boolean} IsRecordingEnabled - needRecord. optional.
   * @param {String} OutId - outId. optional.
   * @param {String} OutOrderId - outOrderId. optional.
   */
  bindAxg(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhoneNoA')) {
      throw new TypeError('parameter "PhoneNoA" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'Expiration')) {
      throw new TypeError('parameter "Expiration" is required');
    }

    return this.request('BindAxg', params, options);
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
   * @param {String} OutOrderId - outOrderId. optional.
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
   * @param {String} OutOrderId - outOrderId. optional.
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
   * @param {String} PoolKey - poolKey. required.
   * @param {Long} SpecId - specId. required.
   * @param {String} City - city. required.
   * @param {String} SecretNo - secretNo. optional.
   * @param {Boolean} DisplayPool - displayPool. optional.
   */
  buySecretNo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PoolKey')) {
      throw new TypeError('parameter "PoolKey" is required');
    }

    if (!hasOwnProperty(params, 'SpecId')) {
      throw new TypeError('parameter "SpecId" is required');
    }

    if (!hasOwnProperty(params, 'City')) {
      throw new TypeError('parameter "City" is required');
    }

    return this.request('BuySecretNo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PoolKey - poolKey. required.
   * @param {String} Name - name. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} Numbers - numbers. optional.
   */
  createAxgGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PoolKey')) {
      throw new TypeError('parameter "PoolKey" is required');
    }

    return this.request('CreateAxgGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PoolKey - poolKey. required.
   * @param {Long} GroupId - groupId. required.
   * @param {String} OperateType - operateType. required.
   * @param {String} Numbers - numbers. required.
   */
  operateAxgGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PoolKey')) {
      throw new TypeError('parameter "PoolKey" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'OperateType')) {
      throw new TypeError('parameter "OperateType" is required');
    }

    if (!hasOwnProperty(params, 'Numbers')) {
      throw new TypeError('parameter "Numbers" is required');
    }

    return this.request('OperateAxgGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PoolKey - poolKey. optional.
   * @param {String} SubsId - subsId. required.
   * @param {String} CallNo - callNo. optional.
   */
  queryCallStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubsId')) {
      throw new TypeError('parameter "SubsId" is required');
    }

    return this.request('QueryCallStatus', params, options);
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
   * @param {Long} SpecId - specId. required.
   * @param {String} City - city. required.
   * @param {String} SecretNo - secretNo. optional.
   */
  querySecretNoRemain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SpecId')) {
      throw new TypeError('parameter "SpecId" is required');
    }

    if (!hasOwnProperty(params, 'City')) {
      throw new TypeError('parameter "City" is required');
    }

    return this.request('QuerySecretNoRemain', params, options);
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
   * @param {String} PoolKey - poolKey. required.
   * @param {String} SecretNo - secretNo. required.
   */
  releaseSecretNo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PoolKey')) {
      throw new TypeError('parameter "PoolKey" is required');
    }

    if (!hasOwnProperty(params, 'SecretNo')) {
      throw new TypeError('parameter "SecretNo" is required');
    }

    return this.request('ReleaseSecretNo', params, options);
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
   * @param {String} GroupId - groupId. optional.
   * @param {String} CallRestrict - callRestrict. optional.
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

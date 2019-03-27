
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
   * @param {String} PhoneNumber - phoneNumber. required.
   * @param {String} Grade - grade. required.
   * @param {String} IsProvince - isProvince. optional.
   * @param {String} Scope - scope. optional.
   * @param {String} Reason - reason. optional.
   * @param {String} OutId - outId. required.
   */
  charge(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    if (!hasOwnProperty(params, 'Grade')) {
      throw new TypeError('parameter "Grade" is required');
    }

    if (!hasOwnProperty(params, 'OutId')) {
      throw new TypeError('parameter "OutId" is required');
    }

    return this.request('Charge', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PhoneNumber - phoneNumber. required.
   * @param {Long} OfferId - offerId. required.
   * @param {String} Reason - reason. optional.
   * @param {String} OutId - outId. required.
   */
  chargeByOffer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    if (!hasOwnProperty(params, 'OfferId')) {
      throw new TypeError('parameter "OfferId" is required');
    }

    if (!hasOwnProperty(params, 'OutId')) {
      throw new TypeError('parameter "OutId" is required');
    }

    return this.request('ChargeByOffer', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} Vendor - vendor. required.
   * @param {Integer} ChannelType - channelType. required.
   * @param {String} Province - province. optional.
   */
  queryCdpOffer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Vendor')) {
      throw new TypeError('parameter "Vendor" is required');
    }

    if (!hasOwnProperty(params, 'ChannelType')) {
      throw new TypeError('parameter "ChannelType" is required');
    }

    return this.request('QueryCdpOffer', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OutId - outId. required.
   */
  queryChargeDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OutId')) {
      throw new TypeError('parameter "OutId" is required');
    }

    return this.request('QueryChargeDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PhoneNumber - phoneNumber. optional.
   */
  queryGrades(params = {}, options = {}) {
    return this.request('QueryGrades', params, options);
  }

}

module.exports = Client;

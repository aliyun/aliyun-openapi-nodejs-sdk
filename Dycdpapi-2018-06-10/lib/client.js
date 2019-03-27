
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-06-10';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} OfferId - offerId. required.
   * @param {String} PhoneNumber - phoneNumber. required.
   * @param {String} OutOrderId - outOrderId. required.
   * @param {Long} MaxPrice - maxPrice. optional.
   * @param {String} ParamList - paramList. optional.
   * @param {String} Reason - reason. optional.
   */
  createCdpOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OfferId')) {
      throw new TypeError('parameter "OfferId" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    if (!hasOwnProperty(params, 'OutOrderId')) {
      throw new TypeError('parameter "OutOrderId" is required');
    }

    return this.request('CreateCdpOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Vendor - vendor. optional.
   * @param {String} ChannelType - channelType. required.
   * @param {String} Province - province. optional.
   */
  queryCdpOffer(params = {}, options = {}) {
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
   * @param {Long} OfferId - offerId. required.
   */
  queryCdpOfferById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OfferId')) {
      throw new TypeError('parameter "OfferId" is required');
    }

    return this.request('QueryCdpOfferById', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OutOrderId - outOrderId. required.
   */
  queryCdpOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OutOrderId')) {
      throw new TypeError('parameter "OutOrderId" is required');
    }

    return this.request('QueryCdpOrder', params, options);
  }

}

module.exports = Client;


'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-11-21';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ProductId - productId. required.
   * @param {String} PhoneNumber - phoneNumber. required.
   * @param {String} OutOrderId - outOrderId. required.
   * @param {String} TbOrderId - tbOrderId. optional.
   * @param {String} ParamList - paramList. optional.
   */
  createOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductId')) {
      throw new TypeError('parameter "ProductId" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    if (!hasOwnProperty(params, 'OutOrderId')) {
      throw new TypeError('parameter "OutOrderId" is required');
    }

    return this.request('CreateOrder', params, options);
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
  queryCustomerSalePrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ChannelType')) {
      throw new TypeError('parameter "ChannelType" is required');
    }

    return this.request('QueryCustomerSalePrice', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PhoneNumber - phoneNumber. optional.
   * @param {String} OutOrderId - outOrderId. required.
   */
  queryOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OutOrderId')) {
      throw new TypeError('parameter "OutOrderId" is required');
    }

    return this.request('QueryOrder', params, options);
  }

}

module.exports = Client;

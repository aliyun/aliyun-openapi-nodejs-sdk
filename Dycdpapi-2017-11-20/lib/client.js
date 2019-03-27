
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-11-20';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} phone - phoneNumber. optional.
   * @param {String} orderId - transferId. required.
   * @param {String} ResultCode - resultCode. required.
   * @param {String} ResultMsg - resultMessage. optional.
   * @param {String} ResponseId - responseId. optional.
   */
  notifyRechargeResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'orderId')) {
      throw new TypeError('parameter "orderId" is required');
    }

    if (!hasOwnProperty(params, 'ResultCode')) {
      throw new TypeError('parameter "ResultCode" is required');
    }

    return this.request('NotifyRechargeResult', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PhoneNumber - phoneNumber. required.
   * @param {String} TransferId - transferId. required.
   * @param {String} ResultCode - resultCode. required.
   * @param {String} ResultMessage - resultMessage. optional.
   */
  orderNotice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    if (!hasOwnProperty(params, 'TransferId')) {
      throw new TypeError('parameter "TransferId" is required');
    }

    if (!hasOwnProperty(params, 'ResultCode')) {
      throw new TypeError('parameter "ResultCode" is required');
    }

    return this.request('OrderNotice', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} productId - productId. required.
   * @param {Boolean} available - available. required.
   */
  productAvailableOrNot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'productId')) {
      throw new TypeError('parameter "productId" is required');
    }

    if (!hasOwnProperty(params, 'available')) {
      throw new TypeError('parameter "available" is required');
    }

    return this.request('ProductAvailableOrNot', params, options);
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
  querySupplierSalePrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ChannelType')) {
      throw new TypeError('parameter "ChannelType" is required');
    }

    return this.request('QuerySupplierSalePrice', params, options);
  }

}

module.exports = Client;

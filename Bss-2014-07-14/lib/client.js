
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2014-07-14';
    super(config);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  createOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('CreateOrder', params, options);
  }

  /**
   */
  describeCashDetail(params = {}, options = {}) {
    return this.request('DescribeCashDetail', params, options);
  }

  /**
   * @param {String} CouponNumber - couponNumber. optional.
   */
  describeCouponDetail(params = {}, options = {}) {
    return this.request('DescribeCouponDetail', params, options);
  }

  /**
   * @param {String} Status - status. optional.
   * @param {String} StartDeliveryTime - startDeliveryTime. optional.
   * @param {String} EndDeliveryTime - endDeliveryTime. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNum - pageNum. optional.
   */
  describeCouponList(params = {}, options = {}) {
    return this.request('DescribeCouponList', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  openCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('OpenCallback', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  queryForCssOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('QueryForCssOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceType - resourceType. required.
   * @param {String} ResourceId - resourceId. required.
   * @param {String} BusinessStatus - businessStatus. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  setResourceBusinessStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'BusinessStatus')) {
      throw new TypeError('parameter "BusinessStatus" is required');
    }

    return this.request('SetResourceBusinessStatus', params, options);
  }

  /**
   * @param {String} ownerId - ownerId. required.
   * @param {String} productCode - productCode. required.
   */
  subscriptionCreateOrderApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ownerId')) {
      throw new TypeError('parameter "ownerId" is required');
    }

    if (!hasOwnProperty(params, 'productCode')) {
      throw new TypeError('parameter "productCode" is required');
    }

    return this.request('SubscriptionCreateOrderApi', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  vnoBatchRefundOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('vnoBatchRefundOrder', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  vnoPayCallBackNotify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('vnoPayCallBackNotify', params, options);
  }

}

module.exports = Client;

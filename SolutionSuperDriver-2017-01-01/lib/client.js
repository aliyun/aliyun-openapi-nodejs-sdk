
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-01-01';
    super(config);
  }

  /**
   * @param {String} AccessKey - accessKey. required.
   * @param {String} SecretKey - secretKey. required.
   * @param {String} UserId - userId. optional.
   * @param {String} BuyerId - buyerId. required.
   * @param {String} PayerId - payerId. optional.
   * @param {String} ChildId - childId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RequestId - requestId. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} Param - param. required.
   * @param {Integer} InnerVersion - innerVersion. optional.
   */
  checkPlanInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessKey')) {
      throw new TypeError('parameter "AccessKey" is required');
    }

    if (!hasOwnProperty(params, 'SecretKey')) {
      throw new TypeError('parameter "SecretKey" is required');
    }

    if (!hasOwnProperty(params, 'BuyerId')) {
      throw new TypeError('parameter "BuyerId" is required');
    }

    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'Param')) {
      throw new TypeError('parameter "Param" is required');
    }

    return this.request('CheckPlanInstance', params, options);
  }

  /**
   * @param {String} AccessKey - accessKey. required.
   * @param {String} SecretKey - secretKey. required.
   * @param {String} UserId - userId. optional.
   * @param {String} BuyerId - buyerId. required.
   * @param {String} PayerId - payerId. optional.
   * @param {String} ChildId - childId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RequestId - requestId. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} Param - param. required.
   * @param {Integer} InnerVersion - innerVersion. optional.
   */
  createOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessKey')) {
      throw new TypeError('parameter "AccessKey" is required');
    }

    if (!hasOwnProperty(params, 'SecretKey')) {
      throw new TypeError('parameter "SecretKey" is required');
    }

    if (!hasOwnProperty(params, 'BuyerId')) {
      throw new TypeError('parameter "BuyerId" is required');
    }

    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'Param')) {
      throw new TypeError('parameter "Param" is required');
    }

    return this.request('CreateOrder', params, options);
  }

  /**
   * @param {String} AccessKey - accessKey. required.
   * @param {String} SecretKey - secretKey. required.
   * @param {String} UserId - userId. optional.
   * @param {String} BuyerId - buyerId. required.
   * @param {String} PayerId - payerId. optional.
   * @param {String} ChildId - childId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RequestId - requestId. optional.
   * @param {String} Param - param. required.
   * @param {Integer} InnerVersion - innerVersion. optional.
   */
  describePrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessKey')) {
      throw new TypeError('parameter "AccessKey" is required');
    }

    if (!hasOwnProperty(params, 'SecretKey')) {
      throw new TypeError('parameter "SecretKey" is required');
    }

    if (!hasOwnProperty(params, 'BuyerId')) {
      throw new TypeError('parameter "BuyerId" is required');
    }

    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'Param')) {
      throw new TypeError('parameter "Param" is required');
    }

    return this.request('DescribePrice', params, options);
  }

  /**
   * @param {String} PayerId - payerId. optional.
   * @param {String} AccessKey - accessKey. required.
   * @param {String} SecretKey - secretKey. required.
   * @param {String} UserId - userId. optional.
   * @param {String} BuyerId - buyerId. required.
   * @param {String} ChildId - childId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RequestId - requestId. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} Param - param. required.
   * @param {Integer} InnerVersion - innerVersion. optional.
   */
  getOrderListByInstanceId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessKey')) {
      throw new TypeError('parameter "AccessKey" is required');
    }

    if (!hasOwnProperty(params, 'SecretKey')) {
      throw new TypeError('parameter "SecretKey" is required');
    }

    if (!hasOwnProperty(params, 'BuyerId')) {
      throw new TypeError('parameter "BuyerId" is required');
    }

    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'Param')) {
      throw new TypeError('parameter "Param" is required');
    }

    return this.request('GetOrderListByInstanceId', params, options);
  }

  /**
   * @param {String} AccessKey - accessKey. required.
   * @param {String} SecretKey - secretKey. required.
   * @param {String} UserId - userId. optional.
   * @param {String} BuyerId - buyerId. required.
   * @param {String} PayerId - payerId. optional.
   * @param {String} ChildId - childId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RequestId - requestId. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} planItemId - planItemId. required.
   */
  getPlanItemSpecification(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessKey')) {
      throw new TypeError('parameter "AccessKey" is required');
    }

    if (!hasOwnProperty(params, 'SecretKey')) {
      throw new TypeError('parameter "SecretKey" is required');
    }

    if (!hasOwnProperty(params, 'BuyerId')) {
      throw new TypeError('parameter "BuyerId" is required');
    }

    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'planItemId')) {
      throw new TypeError('parameter "planItemId" is required');
    }

    return this.request('GetPlanItemSpecification', params, options);
  }

  /**
   * @param {String} PayerId - payerId. optional.
   * @param {String} AccessKey - accessKey. required.
   * @param {String} SecretKey - secretKey. required.
   * @param {String} UserId - userId. optional.
   * @param {String} BuyerId - buyerId. required.
   * @param {String} ChildId - childId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RequestId - requestId. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {Long} planId - planId. required.
   * @param {Boolean} needItemSpecification - needItemSpecification. optional.
   * @param {String} RegionCode - regionCode. optional.
   */
  getPlanSpecification(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessKey')) {
      throw new TypeError('parameter "AccessKey" is required');
    }

    if (!hasOwnProperty(params, 'SecretKey')) {
      throw new TypeError('parameter "SecretKey" is required');
    }

    if (!hasOwnProperty(params, 'BuyerId')) {
      throw new TypeError('parameter "BuyerId" is required');
    }

    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'planId')) {
      throw new TypeError('parameter "planId" is required');
    }

    return this.request('GetPlanSpecification', params, options);
  }

}

module.exports = Client;

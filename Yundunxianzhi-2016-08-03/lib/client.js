
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-08-03';
    super(config);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   */
  fetchReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('FetchReport', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  inputProjectInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('InputProjectInfo', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  massPayBack(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('MassPayBack', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  massValidOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('MassValidOrder', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  mlpsCheckOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('MlpsCheckOrder', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  mlpsComplementCommodity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('MlpsComplementCommodity', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  mlpsProduce(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('MlpsProduce', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  mlpsRefundCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('MlpsRefundCallback', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {String} CommodityCode - commodityCode. optional.
   * @param {String} OrderType - orderType. optional.
   * @param {Integer} Duration - duration. optional.
   * @param {String} PricingCycle - pricingCycle. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} Price - type. required.
   */
  recharge(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'Price')) {
      throw new TypeError('parameter "Price" is required');
    }

    return this.request('Recharge', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  refundCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('RefundCallback', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  rewardPayBack(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('RewardPayBack', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  rewardValidOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('RewardValidOrder', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  securityServiceCheckOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('SecurityServiceCheckOrder', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  securityServiceComplementCommodity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('SecurityServiceComplementCommodity', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  securityServiceProduce(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('SecurityServiceProduce', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  securityServiceRefundCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('SecurityServiceRefundCallback', params, options);
  }

}

module.exports = Client;

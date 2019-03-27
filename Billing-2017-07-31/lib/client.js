
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-07-31';
    super(config);
  }

  /**
   * @param {String} SetTag - setTag. optional.
   * @param {String} CommoditySetCode - commoditySetCode. required.
   * @param {String} CommodityCode - commodityCode. required.
   * @param {String} ArticleItemCode - articleItemCode. required.
   */
  addBillCommoditySet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CommoditySetCode')) {
      throw new TypeError('parameter "CommoditySetCode" is required');
    }

    if (!hasOwnProperty(params, 'CommodityCode')) {
      throw new TypeError('parameter "CommodityCode" is required');
    }

    if (!hasOwnProperty(params, 'ArticleItemCode')) {
      throw new TypeError('parameter "ArticleItemCode" is required');
    }

    return this.request('AddBillCommoditySet', params, options);
  }

  /**
   * @param {String} SetTag - setTag. optional.
   * @param {String} CommoditySetCode - commoditySetCode. required.
   * @param {String} CommodityCode - commodityCode. required.
   * @param {String} ArticleItemCode - articleItemCode. required.
   */
  deleteBillCommoditySet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CommoditySetCode')) {
      throw new TypeError('parameter "CommoditySetCode" is required');
    }

    if (!hasOwnProperty(params, 'CommodityCode')) {
      throw new TypeError('parameter "CommodityCode" is required');
    }

    if (!hasOwnProperty(params, 'ArticleItemCode')) {
      throw new TypeError('parameter "ArticleItemCode" is required');
    }

    return this.request('DeleteBillCommoditySet', params, options);
  }

  /**
   * @param {String} SetTag - setTag. required.
   * @param {String} CommoditySetCode - commoditySetCode. required.
   * @param {String} CommodityCode - commodityCode. required.
   * @param {String} ArticleItemCode - articleItemCode. required.
   */
  findBillCommoditySetInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SetTag')) {
      throw new TypeError('parameter "SetTag" is required');
    }

    if (!hasOwnProperty(params, 'CommoditySetCode')) {
      throw new TypeError('parameter "CommoditySetCode" is required');
    }

    if (!hasOwnProperty(params, 'CommodityCode')) {
      throw new TypeError('parameter "CommodityCode" is required');
    }

    if (!hasOwnProperty(params, 'ArticleItemCode')) {
      throw new TypeError('parameter "ArticleItemCode" is required');
    }

    return this.request('FindBillCommoditySetInfo', params, options);
  }

  /**
   * @param {String} SetTag - setTag. required.
   * @param {String} CommoditySetCode - commoditySetCode. optional.
   * @param {String} CommodityCode - commodityCode. optional.
   * @param {String} ArticleItemCode - articleItemCode. optional.
   */
  findCommoditySetCodeByCommodity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SetTag')) {
      throw new TypeError('parameter "SetTag" is required');
    }

    return this.request('FindCommoditySetCodeByCommodity', params, options);
  }

  /**
   * @param {String} SetTag - setTag. required.
   * @param {String} CommoditySetCode - commoditySetCode. required.
   * @param {Integer} PageIndex - pageIndex. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  findPagedBillCommoditySetInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SetTag')) {
      throw new TypeError('parameter "SetTag" is required');
    }

    if (!hasOwnProperty(params, 'CommoditySetCode')) {
      throw new TypeError('parameter "CommoditySetCode" is required');
    }

    return this.request('FindPagedBillCommoditySetInfo', params, options);
  }

}

module.exports = Client;

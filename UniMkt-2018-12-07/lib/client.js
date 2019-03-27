
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-12-07';
    super(config);
  }

  /**
   * @param {String} FlowId - flowId. required.
   * @param {String} CreateTime - createTime. required.
   * @param {String} CataloguePrice - cataloguePrice. optional.
   * @param {String} DiscountRate - discountRate. optional.
   * @param {Integer} MarketCount - marketCount. optional.
   * @param {String} FromUserId - fromUserId. optional.
   * @param {String} ToUserId - toUserId. required.
   * @param {String} Amount - amount. required.
   * @param {String} ProxyUserId - proxyUserId. required.
   * @param {String} ProxyUserNick - proxyUserNick. optional.
   * @param {String} ActualAmount - actualAmount. optional.
   * @param {String} Balance - balance. optional.
   * @param {String} PreDebit - preDebit. optional.
   * @param {String} AccuAmount - accuAmount. optional.
   * @param {String} AccuActualAmount - accuActualAmount. optional.
   * @param {String} OperateName - operateName. required.
   * @param {String} FromAccountNo - fromAccountNo. optional.
   * @param {String} ToAccountNo - toAccountNo. required.
   */
  accountOperate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FlowId')) {
      throw new TypeError('parameter "FlowId" is required');
    }

    if (!hasOwnProperty(params, 'CreateTime')) {
      throw new TypeError('parameter "CreateTime" is required');
    }

    if (!hasOwnProperty(params, 'ToUserId')) {
      throw new TypeError('parameter "ToUserId" is required');
    }

    if (!hasOwnProperty(params, 'Amount')) {
      throw new TypeError('parameter "Amount" is required');
    }

    if (!hasOwnProperty(params, 'ProxyUserId')) {
      throw new TypeError('parameter "ProxyUserId" is required');
    }

    if (!hasOwnProperty(params, 'OperateName')) {
      throw new TypeError('parameter "OperateName" is required');
    }

    if (!hasOwnProperty(params, 'ToAccountNo')) {
      throw new TypeError('parameter "ToAccountNo" is required');
    }

    options.method = 'POST';
    return this.request('AccountOperate', params, options);
  }

  /**
   * @param {String} UserId - userId. required.
   * @param {String} AccountNo - accountNo. required.
   * @param {String} ProxyUserId - proxyUserId. required.
   * @param {String} ProxyUserNick - proxyUserNick. optional.
   * @param {String} BrandUserId - brandUserId. required.
   * @param {String} BrandUserNick - brandUserNick. required.
   * @param {String} ContactName - contactName. required.
   * @param {String} ContactPhone - contactPhone. required.
   * @param {String} Industry - industry. optional.
   */
  brandMessageMigrate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AccountNo')) {
      throw new TypeError('parameter "AccountNo" is required');
    }

    if (!hasOwnProperty(params, 'ProxyUserId')) {
      throw new TypeError('parameter "ProxyUserId" is required');
    }

    if (!hasOwnProperty(params, 'BrandUserId')) {
      throw new TypeError('parameter "BrandUserId" is required');
    }

    if (!hasOwnProperty(params, 'BrandUserNick')) {
      throw new TypeError('parameter "BrandUserNick" is required');
    }

    if (!hasOwnProperty(params, 'ContactName')) {
      throw new TypeError('parameter "ContactName" is required');
    }

    if (!hasOwnProperty(params, 'ContactPhone')) {
      throw new TypeError('parameter "ContactPhone" is required');
    }

    options.method = 'POST';
    return this.request('BrandMessageMigrate', params, options);
  }

  /**
   * @param {String} AlipayUid - alipayUid. optional.
   * @param {String} ChannelId - channelId. optional.
   * @param {String} CommodityId - commodityId. optional.
   * @param {String} DeviceCode - deviceCode. optional.
   * @param {String} HolderId - holderId. optional.
   * @param {String} OuterCode - outerCode. optional.
   * @param {String} QueryStr - queryStr. optional.
   * @param {Float} SalePrice - salePrice. optional.
   * @param {String} V - v. optional.
   * @param {String} PromotionId - promotionId. optional.
   * @param {String} DeviceType - deviceType. optional.
   */
  createOrderProxy(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('CreateOrderProxy', params, options);
  }

  /**
   * @param {String} CommodityId - commodityId. optional.
   */
  getImageUrl(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('GetImageUrl', params, options);
  }

  /**
   * @param {String} UrlId - urlId. optional.
   * @param {String} AlipayOpenId - alipayOpenId. optional.
   * @param {String} ChannelId - channelId. optional.
   * @param {String} Extra - extra. optional.
   * @param {String} OuterCode - outerCode. optional.
   */
  popUpQuery(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('PopUpQuery', params, options);
  }

  /**
   * @param {String} UrlId - urlId. optional.
   * @param {String} AlipayOpenId - alipayOpenId. optional.
   * @param {String} ChannelId - channelId. optional.
   * @param {String} Extra - extra. optional.
   * @param {String} OuterCode - outerCode. optional.
   */
  popUpQuery2(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('PopUpQuery2', params, options);
  }

  /**
   * @param {Integer} Age - age. optional.
   * @param {Integer} ApplyPrice - applyPrice. optional.
   * @param {String} BizResult - bizResult. optional.
   * @param {String} BizType - bizType. optional.
   * @param {String} BrandNick - brandNick. optional.
   * @param {String} BrandUserId - brandUserId. optional.
   * @param {String} ChannelId - channelId. optional.
   * @param {String} Cid - cid. optional.
   * @param {String} CommodityId - commodityId. optional.
   * @param {String} DeviceCode - deviceCode. optional.
   * @param {String} DeviceType - deviceType. optional.
   * @param {String} HolderId - holderId. optional.
   * @param {String} OuterCode - outerCode. optional.
   * @param {String} Phase - phase. optional.
   * @param {String} ProxyUserId - proxyUserId. optional.
   * @param {String} QueryStr - queryStr. optional.
   * @param {Integer} SalePrice - salePrice. optional.
   * @param {String} Sex - sex. optional.
   * @param {String} TaskId - taskId. optional.
   * @param {String} V - v. optional.
   * @param {String} AlipayOpenId - alipayOpenId. optional.
   */
  scanCodeNotification(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('ScanCodeNotification', params, options);
  }

  /**
   * @param {String} TaskId - taskId. required.
   * @param {String} Name - name. required.
   * @param {String} PayType - payType. required.
   * @param {String} BrandUserId - brandUserId. required.
   * @param {String} BrandUserNick - brandUserNick. required.
   * @param {String} ProxyUserId - proxyUserId. required.
   * @param {String} ProxyUserNick - proxyUserNick. optional.
   * @param {String} Quota - quota. required.
   * @param {String} QuotaPerDay - quotaPerDay. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Status - status. required.
   * @param {String} BizType - bizType. optional.
   */
  servingPlanMigrate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'PayType')) {
      throw new TypeError('parameter "PayType" is required');
    }

    if (!hasOwnProperty(params, 'BrandUserId')) {
      throw new TypeError('parameter "BrandUserId" is required');
    }

    if (!hasOwnProperty(params, 'BrandUserNick')) {
      throw new TypeError('parameter "BrandUserNick" is required');
    }

    if (!hasOwnProperty(params, 'ProxyUserId')) {
      throw new TypeError('parameter "ProxyUserId" is required');
    }

    if (!hasOwnProperty(params, 'Quota')) {
      throw new TypeError('parameter "Quota" is required');
    }

    if (!hasOwnProperty(params, 'QuotaPerDay')) {
      throw new TypeError('parameter "QuotaPerDay" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    options.method = 'POST';
    return this.request('ServingPlanMigrate', params, options);
  }

}

module.exports = Client;

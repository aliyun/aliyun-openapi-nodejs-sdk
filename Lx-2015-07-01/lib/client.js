
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-07-01';
    super(config);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  addCommdity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('AddCommdity', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  applyCouponByFixedAmount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('ApplyCouponByFixedAmount', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  bindGroupOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('BindGroupOrder', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  cancelOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('CancelOrder', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  checkCanTransfer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('CheckCanTransfer', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  checkCreateOrderParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('CheckCreateOrderParam', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  checkPayOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('CheckPayOrder', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  checkRestartAccountBalanceApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('CheckRestartAccountBalanceApi', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  cleanCart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('CleanCart', params, options);
  }

  /**
   * @param {String} ParamStr - paramStr. required.
   */
  confirmDowngradeOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ParamStr')) {
      throw new TypeError('parameter "ParamStr" is required');
    }

    return this.request('ConfirmDowngradeOrder', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  countOrderIdsByExtendedParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('CountOrderIdsByExtendedParam', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  countOrders(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('CountOrders', params, options);
  }

  /**
   * @param {String} ParamStr - paramStr. required.
   */
  createMultiProductOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ParamStr')) {
      throw new TypeError('parameter "ParamStr" is required');
    }

    return this.request('CreateMultiProductOrder', params, options);
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
   * @param {String} paramStr - paramStr. required.
   */
  describeCashDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('DescribeCashDetail', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  describeReservedInstancePrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('DescribeReservedInstancePrice', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  displayConfigurationList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('DisplayConfigurationList', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  displayContractList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('DisplayContractList', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  displayQuotationList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('DisplayQuotationList', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  doLowbandwidthRefundApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('DoLowbandwidthRefundApi', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  ecsTransfer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('EcsTransfer', params, options);
  }

  /**
   * @param {String} Invoker - invoker. optional.
   * @param {String} Mpk - mpk. optional.
   * @param {String} Pk - pk. optional.
   * @param {String} Type - type. optional.
   */
  fillAgAccountAction(params = {}, options = {}) {
    return this.request('FillAgAccountAction', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  getArticleById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('GetArticleById', params, options);
  }

  /**
   * @param {String} ParamStr - paramStr. required.
   */
  getArticleEnv(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ParamStr')) {
      throw new TypeError('parameter "ParamStr" is required');
    }

    return this.request('GetArticleEnv', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  getCandidatiesAccountList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('GetCandidatiesAccountList', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  getCommodityByContion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('GetCommodityByContion', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  getCommodityForBuy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('GetCommodityForBuy', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  getCommodityForModify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('GetCommodityForModify', params, options);
  }

  /**
   * @param {String} ParamStr - paramStr. required.
   */
  getCommodityWithPipInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ParamStr')) {
      throw new TypeError('parameter "ParamStr" is required');
    }

    return this.request('GetCommodityWithPipInfo', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  getCouponDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('GetCouponDetail', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  getEndTimeByinstId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('GetEndTimeByinstId', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  getLastPurchaseRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('GetLastPurchaseRecord', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  getListOrderDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('GetListOrderDetail', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  getOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('GetOrder', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  getOrderDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('GetOrderDetail', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  isCanTempUpgrade(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('IsCanTempUpgrade', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  isServiceOfBid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('IsServiceOfBid', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  isSupportSyncPay(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('IsSupportSyncPay', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  listCoupons(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('ListCoupons', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  listOrders(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('ListOrders', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  listPurchases(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('ListPurchases', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  mergePay(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('MergePay', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  modifyCart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('ModifyCart', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  modifyReservedInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('ModifyReservedInstance', params, options);
  }

  /**
   * @param {String} ParamStr - paramStr. required.
   */
  notifyPipApproveResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ParamStr')) {
      throw new TypeError('parameter "ParamStr" is required');
    }

    options.method = 'POST';
    return this.request('NotifyPipApproveResult', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  operateResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('OperateResource', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  payOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('PayOrder', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  queryBpInstanceInfoList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('QueryBpInstanceInfoList', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  queryCashDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('QueryCashDetail', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  queryForComponent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('QueryForComponent', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  queryForOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('QueryForOrder', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  queryGroupOrderList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('QueryGroupOrderList', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  queryLowbandwidthPriceApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('QueryLowbandwidthPriceApi', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  queryOrderIdsByExtendedParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('QueryOrderIdsByExtendedParam', params, options);
  }

  /**
   * @param {String} ParamStr - paramStr. required.
   */
  queryPrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ParamStr')) {
      throw new TypeError('parameter "ParamStr" is required');
    }

    return this.request('QueryPrice', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  queryRefundPrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('QueryRefundPrice', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  queryShopPrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('QueryShopPrice', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  refundOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('RefundOrder', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  revisedOrderPriceAndModule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('RevisedOrderPriceAndModule', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  saveSellsInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('SaveSellsInfo', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  saveUserRelation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('SaveUserRelation', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  showCartInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('ShowCartInfo', params, options);
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
   * @param {String} bid - bid. required.
   * @param {Long} aliuid - aliuid. required.
   * @param {String} callerType - callerType. required.
   * @param {String} ownerId - ownerId. required.
   * @param {String} productCode - productCode. required.
   * @param {String} RequestId - requestId. required.
   */
  subscriptionCreateOrderInnerApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'bid')) {
      throw new TypeError('parameter "bid" is required');
    }

    if (!hasOwnProperty(params, 'aliuid')) {
      throw new TypeError('parameter "aliuid" is required');
    }

    if (!hasOwnProperty(params, 'callerType')) {
      throw new TypeError('parameter "callerType" is required');
    }

    if (!hasOwnProperty(params, 'ownerId')) {
      throw new TypeError('parameter "ownerId" is required');
    }

    if (!hasOwnProperty(params, 'productCode')) {
      throw new TypeError('parameter "productCode" is required');
    }

    if (!hasOwnProperty(params, 'RequestId')) {
      throw new TypeError('parameter "RequestId" is required');
    }

    return this.request('SubscriptionCreateOrderInnerApi', params, options);
  }

  /**
   * @param {String} FromApp - fromApp. required.
   * @param {String} Token - token. required.
   * @param {Boolean} NeedCallback - needCallback. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CommodityCode - commodityCode. required.
   * @param {String} SpecCode - specCode. required.
   * @param {Long} CurrentOwnerId - currentOwnerId. required.
   * @param {Long} CurrentBuyerId - currentBuyerId. required.
   * @param {Long} TransferTargetBuyerId - transferTargetBuyerId. required.
   * @param {Long} TransferTargetOwnerId - transferTargetOwnerId. required.
   */
  transferResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CommodityCode')) {
      throw new TypeError('parameter "CommodityCode" is required');
    }

    if (!hasOwnProperty(params, 'SpecCode')) {
      throw new TypeError('parameter "SpecCode" is required');
    }

    if (!hasOwnProperty(params, 'CurrentOwnerId')) {
      throw new TypeError('parameter "CurrentOwnerId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentBuyerId')) {
      throw new TypeError('parameter "CurrentBuyerId" is required');
    }

    if (!hasOwnProperty(params, 'TransferTargetBuyerId')) {
      throw new TypeError('parameter "TransferTargetBuyerId" is required');
    }

    if (!hasOwnProperty(params, 'TransferTargetOwnerId')) {
      throw new TypeError('parameter "TransferTargetOwnerId" is required');
    }

    return this.request('TransferResource', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  updateOrderParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('UpdateOrderParam', params, options);
  }

  /**
   * @param {String} ParamStr - paramStr. required.
   */
  validateRuleForCreateOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ParamStr')) {
      throw new TypeError('parameter "ParamStr" is required');
    }

    return this.request('ValidateRuleForCreateOrder', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  createArticle(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('createArticle', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  createItem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('createItem', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  createItemModule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('createItemModule', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  delAttrConstraint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('delAttrConstraint', params, options);
  }

  /**
   * @param {String} Pk - pk. optional.
   * @param {String} Bid - bid. optional.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. optional.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   * @param {String} TaskExtraData - taskExtraData. optional.
   * @param {String} GmtWakeup - gmtWakeup. optional.
   */
  doCheckResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    return this.request('doCheckResource', params, options);
  }

  /**
   * @param {String} Pk - pk. optional.
   * @param {String} Bid - bid. optional.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. optional.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   * @param {String} TaskExtraData - taskExtraData. optional.
   * @param {String} GmtWakeup - gmtWakeup. optional.
   */
  doLogicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    return this.request('doLogicalDeleteResource', params, options);
  }

  /**
   * @param {String} Pk - pk. optional.
   * @param {String} Bid - bid. optional.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. optional.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   * @param {String} TaskExtraData - taskExtraData. optional.
   * @param {String} GmtWakeup - gmtWakeup. optional.
   */
  doPhysicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    return this.request('doPhysicalDeleteResource', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  getArticleByCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('getArticleByCode', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  getAttrConstraintDTOs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('getAttrConstraintDTOs', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  getItem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('getItem', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  getItemByCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('getItemByCode', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  getItemById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('getItemById', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  getItemSaleConditions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('getItemSaleConditions', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  getItemsByArticleId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('getItemsByArticleId', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  getTimeStampForECS(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('getTimeStampForECS', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  listByItemId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('listByItemId', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  prePublishArticle(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('prePublishArticle', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  publishArticle(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('publishArticle', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  publishAttrConstraint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('publishAttrConstraint', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  queryArticles(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('queryArticles', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  saveAttrConstraintList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('saveAttrConstraintList', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  saveItemSaleConditions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('saveItemSaleConditions', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  savePricePlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('savePricePlan', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  unPublishArticle(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('unPublishArticle', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  updateArticle(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('updateArticle', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  updateItem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('updateItem', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  updateItemModule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('updateItemModule', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  versionPublishGlobal(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('versionPublishGlobal', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  versionSyncGlobal(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('versionSyncGlobal', params, options);
  }

}

module.exports = Client;

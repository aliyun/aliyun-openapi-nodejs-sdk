
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-12-14';
    super(config);
  }

  /**
   * @param {Long} InvoiceAmount - invoiceAmount. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {Long} CustomerId - customerId. required.
   * @param {Long} AddressId - addressId. required.
   * @param {Integer} InvoicingType - invoicingType. optional.
   * @param {Integer} ProcessWay - processWay. optional.
   * @param {String} ApplyUserNick - applyUserNick. required.
   * @param {RepeatList} SelectedIds - selectedIds. required.
   * @param {Boolean} InvoiceByAmount - invoiceByAmount. optional.
   * @param {Long} callerUid - callerUid. optional.
   * @param {Long} callerBid - callerBid. optional.
   */
  applyInvoice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InvoiceAmount')) {
      throw new TypeError('parameter "InvoiceAmount" is required');
    }

    if (!hasOwnProperty(params, 'CustomerId')) {
      throw new TypeError('parameter "CustomerId" is required');
    }

    if (!hasOwnProperty(params, 'AddressId')) {
      throw new TypeError('parameter "AddressId" is required');
    }

    if (!hasOwnProperty(params, 'ApplyUserNick')) {
      throw new TypeError('parameter "ApplyUserNick" is required');
    }

    if (!hasOwnProperty(params, 'SelectedIds')) {
      throw new TypeError('parameter "SelectedIds" is required');
    }

    return this.request('ApplyInvoice', params, options);
  }

  /**
   * @param {String} OrderId - orderId. required.
   * @param {Long} OwnerId - ownerId. optional.
   */
  cancelOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    return this.request('CancelOrder', params, options);
  }

  /**
   * @param {Long} Uid - uid. required.
   * @param {String} Bid - bid. required.
   * @param {String} AdjustType - adjustType. required.
   * @param {String} Amount - amount. required.
   * @param {String} Currency - currency. required.
   * @param {String} BusinessType - businessType. required.
   * @param {String} Source - source. required.
   * @param {String} OutBizId - outBizId. required.
   * @param {String} ExtendMap - extendMap. optional.
   */
  changeConsumeAmount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'AdjustType')) {
      throw new TypeError('parameter "AdjustType" is required');
    }

    if (!hasOwnProperty(params, 'Amount')) {
      throw new TypeError('parameter "Amount" is required');
    }

    if (!hasOwnProperty(params, 'Currency')) {
      throw new TypeError('parameter "Currency" is required');
    }

    if (!hasOwnProperty(params, 'BusinessType')) {
      throw new TypeError('parameter "BusinessType" is required');
    }

    if (!hasOwnProperty(params, 'Source')) {
      throw new TypeError('parameter "Source" is required');
    }

    if (!hasOwnProperty(params, 'OutBizId')) {
      throw new TypeError('parameter "OutBizId" is required');
    }

    return this.request('ChangeConsumeAmount', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProductType - productType. optional.
   * @param {String} SubscriptionType - subscriptionType. required.
   * @param {Integer} Period - period. optional.
   * @param {String} ProductCode - productCode. required.
   * @param {String} InstanceId - instanceId. required.
   */
  convertChargeType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubscriptionType')) {
      throw new TypeError('parameter "SubscriptionType" is required');
    }

    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ConvertChargeType', params, options);
  }

  /**
   * @param {String} ProductCode - productCode. required.
   * @param {RepeatList} Parameter - parameter. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProductType - productType. optional.
   * @param {String} SubscriptionType - subscriptionType. required.
   * @param {Integer} Period - period. optional.
   * @param {String} RenewalStatus - renewalStatus. optional.
   * @param {Integer} RenewPeriod - renewPeriod. optional.
   */
  createInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'SubscriptionType')) {
      throw new TypeError('parameter "SubscriptionType" is required');
    }

    return this.request('CreateInstance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProductCode - productCode. optional.
   * @param {String} PackageType - packageType. optional.
   * @param {String} EffectiveDate - effectiveDate. optional.
   * @param {String} Specification - specification. optional.
   * @param {Integer} Duration - duration. optional.
   * @param {String} PricingCycle - pricingCycle. optional.
   */
  createResourcePackage(params = {}, options = {}) {
    return this.request('CreateResourcePackage', params, options);
  }

  /**
   * @param {Long} Uid - uid. required.
   * @param {String} Bid - bid. required.
   * @param {String} Amount - amount. required.
   * @param {String} Currency - currency. required.
   * @param {String} OutBizId - outBizId. optional.
   */
  createUserQuota(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Amount')) {
      throw new TypeError('parameter "Amount" is required');
    }

    if (!hasOwnProperty(params, 'Currency')) {
      throw new TypeError('parameter "Currency" is required');
    }

    return this.request('CreateUserQuota', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProductCode - productCode. required.
   * @param {String} ProductType - productType. optional.
   * @param {String} SubscriptionType - subscriptionType. required.
   */
  describePricingModule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'SubscriptionType')) {
      throw new TypeError('parameter "SubscriptionType" is required');
    }

    return this.request('DescribePricingModule', params, options);
  }

  /**
   * @param {String} ProductCode - productCode. optional.
   */
  describeResourcePackageProduct(params = {}, options = {}) {
    return this.request('DescribeResourcePackageProduct', params, options);
  }

  /**
   * @param {String} ProductCode - productCode. required.
   * @param {Long} OwnerId - ownerId. required.
   */
  enableBillGeneration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('EnableBillGeneration', params, options);
  }

  /**
   * @param {String} OrderId - orderId. required.
   * @param {Long} OwnerId - ownerId. optional.
   */
  getOrderDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    return this.request('GetOrderDetail', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProductCode - productCode. required.
   * @param {String} ProductType - productType. optional.
   * @param {String} SubscriptionType - subscriptionType. required.
   * @param {String} Region - region. optional.
   * @param {RepeatList} ModuleList - moduleList. required.
   */
  getPayAsYouGoPrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'SubscriptionType')) {
      throw new TypeError('parameter "SubscriptionType" is required');
    }

    if (!hasOwnProperty(params, 'ModuleList')) {
      throw new TypeError('parameter "ModuleList" is required');
    }

    return this.request('GetPayAsYouGoPrice', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProductCode - productCode. optional.
   * @param {String} PackageType - packageType. optional.
   * @param {String} EffectiveDate - effectiveDate. optional.
   * @param {String} Specification - specification. optional.
   * @param {Integer} Duration - duration. optional.
   * @param {String} PricingCycle - pricingCycle. optional.
   */
  getResourcePackagePrice(params = {}, options = {}) {
    return this.request('GetResourcePackagePrice', params, options);
  }

  /**
   * @param {String} ServicePeriodUnit - servicePeriodUnit. optional.
   * @param {String} SubscriptionType - subscriptionType. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProductCode - productCode. required.
   * @param {String} OrderType - orderType. required.
   * @param {Integer} ServicePeriodQuantity - servicePeriodQuantity. optional.
   * @param {String} ProductType - productType. optional.
   * @param {String} Region - region. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {RepeatList} ModuleList - moduleList. required.
   * @param {Integer} Quantity - quantity. optional.
   */
  getSubscriptionPrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubscriptionType')) {
      throw new TypeError('parameter "SubscriptionType" is required');
    }

    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'OrderType')) {
      throw new TypeError('parameter "OrderType" is required');
    }

    if (!hasOwnProperty(params, 'ModuleList')) {
      throw new TypeError('parameter "ModuleList" is required');
    }

    return this.request('GetSubscriptionPrice', params, options);
  }

  /**
   * @param {String} ProductCode - productCode. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProductType - productType. optional.
   * @param {String} SubscriptionType - subscriptionType. required.
   * @param {String} ModifyType - modifyType. required.
   * @param {String} InstanceId - instanceId. optional.
   * @param {RepeatList} Parameter - parameter. optional.
   */
  modifyInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'SubscriptionType')) {
      throw new TypeError('parameter "SubscriptionType" is required');
    }

    if (!hasOwnProperty(params, 'ModifyType')) {
      throw new TypeError('parameter "ModifyType" is required');
    }

    return this.request('ModifyInstance', params, options);
  }

  /**
   */
  queryAccountBalance(params = {}, options = {}) {
    return this.request('QueryAccountBalance', params, options);
  }

  /**
   * @param {Long} Uid - uid. required.
   * @param {String} Bid - bid. optional.
   * @param {String} ItemCodes - itemCodes. required.
   */
  queryAccountBookList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'ItemCodes')) {
      throw new TypeError('parameter "ItemCodes" is required');
    }

    return this.request('QueryAccountBookList', params, options);
  }

  /**
   * @param {String} Region - region. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} ProductCode - productCode. optional.
   * @param {String} ProductType - productType. optional.
   * @param {String} SubscriptionType - subscriptionType. optional.
   * @param {String} InstanceIDs - instanceIDs. optional.
   * @param {String} EndTimeStart - endTimeStart. optional.
   * @param {String} EndTimeEnd - endTimeEnd. optional.
   * @param {String} CreateTimeStart - createTimeStart. optional.
   * @param {String} CreateTimeEnd - createTimeEnd. optional.
   * @param {String} RenewStatus - renewStatus. optional.
   */
  queryAvailableInstances(params = {}, options = {}) {
    return this.request('QueryAvailableInstances', params, options);
  }

  /**
   * @param {Long} Uid - uid. required.
   * @param {String} Bid - bid. required.
   * @param {String} ItemCodes - itemCodes. optional.
   */
  queryAvaliableQuota(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('QueryAvaliableQuota', params, options);
  }

  /**
   * @param {String} BillingCycle - billingCycle. required.
   * @param {String} Type - type. optional.
   * @param {String} ProductCode - productCode. optional.
   * @param {String} ProductType - productType. optional.
   * @param {String} SubscriptionType - subscriptionType. optional.
   * @param {Boolean} IsHideZeroCharge - isHideZeroCharge. optional.
   * @param {Boolean} IsDisplayLocalCurrency - isDisplayLocalCurrency. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryBill(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BillingCycle')) {
      throw new TypeError('parameter "BillingCycle" is required');
    }

    return this.request('QueryBill', params, options);
  }

  /**
   * @param {String} BillingCycle - billingCycle. required.
   * @param {String} ProductCode - productCode. optional.
   * @param {String} ProductType - productType. optional.
   * @param {String} SubscriptionType - subscriptionType. optional.
   */
  queryBillOverview(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BillingCycle')) {
      throw new TypeError('parameter "BillingCycle" is required');
    }

    return this.request('QueryBillOverview', params, options);
  }

  /**
   * @param {String} ExpiryTimeEnd - expiryTimeEnd. optional.
   * @param {String} ExpiryTimeStart - expiryTimeStart. optional.
   * @param {Boolean} EffectiveOrNot - effectiveOrNot. optional.
   */
  queryCashCoupons(params = {}, options = {}) {
    return this.request('QueryCashCoupons', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {Long} callerUid - callerUid. optional.
   * @param {Long} callerBid - callerBid. optional.
   */
  queryCustomerAddressList(params = {}, options = {}) {
    return this.request('QueryCustomerAddressList', params, options);
  }

  /**
   * @param {Long} Uid - uid. required.
   * @param {String} PrimaryAccount - primaryAccount. required.
   * @param {String} Status - status. optional.
   * @param {String} BusinessType - businessType. optional.
   */
  queryEnduserStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'PrimaryAccount')) {
      throw new TypeError('parameter "PrimaryAccount" is required');
    }

    return this.request('QueryEnduserStatus', params, options);
  }

  /**
   * @param {Integer} Type - type. optional.
   * @param {String} OutBizId - outBizId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Long} StartAmount - startAmount. optional.
   * @param {Long} EndAmount - endAmount. optional.
   * @param {String} StartBizTime - startBizTime. optional.
   * @param {String} EndBizTime - endBizTime. optional.
   * @param {RepeatList} BizTypeList - bizTypeList. optional.
   * @param {Integer} SortType - sortType. optional.
   * @param {String} StartSearchTime - startSearchTime. optional.
   * @param {String} EndSearchTime - endSearchTime. optional.
   * @param {String} BillCycle - billCycle. optional.
   * @param {Long} callerUid - callerUid. optional.
   * @param {Long} callerBid - callerBid. optional.
   */
  queryEvaluateList(params = {}, options = {}) {
    return this.request('QueryEvaluateList', params, options);
  }

  /**
   * @param {String} BillingCycle - billingCycle. required.
   * @param {String} ProductCode - productCode. optional.
   * @param {String} ProductType - productType. optional.
   * @param {String} SubscriptionType - subscriptionType. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {Boolean} IsBillingItem - isBillingItem. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Boolean} IsHideZeroCharge - isHideZeroCharge. optional.
   */
  queryInstanceBill(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BillingCycle')) {
      throw new TypeError('parameter "BillingCycle" is required');
    }

    return this.request('QueryInstanceBill', params, options);
  }

  /**
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} BillingCycle - billingCycle. required.
   * @param {String} ProductCode - productCode. optional.
   * @param {String} ProductType - productType. optional.
   * @param {String} SubscriptionType - subscriptionType. optional.
   */
  queryInstanceGaapCost(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BillingCycle')) {
      throw new TypeError('parameter "BillingCycle" is required');
    }

    return this.request('QueryInstanceGaapCost', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {Long} callerUid - callerUid. optional.
   * @param {Long} callerBid - callerBid. optional.
   */
  queryInvoicingCustomerList(params = {}, options = {}) {
    return this.request('QueryInvoicingCustomerList', params, options);
  }

  /**
   * @param {String} BillingCycle - billingCycle. required.
   */
  queryMonthlyBill(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BillingCycle')) {
      throw new TypeError('parameter "BillingCycle" is required');
    }

    return this.request('QueryMonthlyBill', params, options);
  }

  /**
   * @param {String} ProductCode - productCode. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} BillingCycle - billingCycle. required.
   * @param {String} ProductType - productType. optional.
   * @param {String} SubscriptionType - subscriptionType. optional.
   */
  queryMonthlyInstanceConsumption(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BillingCycle')) {
      throw new TypeError('parameter "BillingCycle" is required');
    }

    return this.request('QueryMonthlyInstanceConsumption', params, options);
  }

  /**
   * @param {String} CreateTimeEnd - createTimeEnd. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} ProductCode - productCode. optional.
   * @param {String} ProductType - productType. optional.
   * @param {String} SubscriptionType - subscriptionType. optional.
   * @param {String} OrderType - orderType. optional.
   * @param {String} PaymentStatus - paymentStatus. optional.
   * @param {String} CreateTimeStart - createTimeStart. optional.
   * @param {Long} OwnerId - ownerId. optional.
   */
  queryOrders(params = {}, options = {}) {
    return this.request('QueryOrders', params, options);
  }

  /**
   * @param {String} ExpiryTimeEnd - expiryTimeEnd. optional.
   * @param {String} ExpiryTimeStart - expiryTimeStart. optional.
   * @param {Boolean} EffectiveOrNot - effectiveOrNot. optional.
   */
  queryPrepaidCards(params = {}, options = {}) {
    return this.request('QueryPrepaidCards', params, options);
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
   * @param {String} SubscriptionType - subscriptionType. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProductCode - productCode. required.
   * @param {String} ProductType - productType. optional.
   * @param {String} ModuleCode - moduleCode. optional.
   */
  queryPriceList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubscriptionType')) {
      throw new TypeError('parameter "SubscriptionType" is required');
    }

    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    return this.request('QueryPriceList', params, options);
  }

  /**
   * @param {Boolean} QueryTotalCount - queryTotalCount. optional.
   * @param {Integer} PageNum - pageNum. required.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryProductList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    return this.request('QueryProductList', params, options);
  }

  /**
   * @param {String} ExpiryTimeStart - expiryTimeStart. optional.
   * @param {String} ExpiryTimeEnd - expiryTimeEnd. optional.
   * @param {Boolean} EffectiveOrNot - effectiveOrNot. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryRedeem(params = {}, options = {}) {
    return this.request('QueryRedeem', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProductCode - productCode. optional.
   * @param {String} ExpiryTimeStart - expiryTimeStart. optional.
   * @param {String} ExpiryTimeEnd - expiryTimeEnd. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryResourcePackageInstances(params = {}, options = {}) {
    return this.request('QueryResourcePackageInstances', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {String} BillingCycle - billingCycle. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Type - type. optional.
   * @param {String} ProductCode - productCode. optional.
   * @param {String} ProductType - productType. optional.
   * @param {String} SubscriptionType - subscriptionType. optional.
   * @param {Boolean} IsHideZeroCharge - isHideZeroCharge. optional.
   */
  querySettlementBill(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BillingCycle')) {
      throw new TypeError('parameter "BillingCycle" is required');
    }

    return this.request('QuerySettlementBill', params, options);
  }

  /**
   * @param {Long} Uid - uid. required.
   * @param {String} Bid - bid. required.
   * @param {String} AlarmType - alarmType. required.
   * @param {String} AlarmThresholds - alarmThresholds. optional.
   */
  queryUserAlarmThreshold(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'AlarmType')) {
      throw new TypeError('parameter "AlarmType" is required');
    }

    return this.request('QueryUserAlarmThreshold', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} Table - table. required.
   * @param {String} DataType - dataType. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Marker - marker. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryUserOmsData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Table')) {
      throw new TypeError('parameter "Table" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('QueryUserOmsData', params, options);
  }

  /**
   * @param {String} ProductCode - productCode. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} RenewPeriod - renewPeriod. required.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} ProductType - productType. optional.
   * @param {Long} OwnerId - ownerId. optional.
   */
  renewInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RenewPeriod')) {
      throw new TypeError('parameter "RenewPeriod" is required');
    }

    return this.request('RenewInstance', params, options);
  }

  /**
   * @param {Long} Uid - uid. required.
   * @param {String} PrimaryAccount - primaryAccount. required.
   * @param {String} Status - status. required.
   * @param {String} BusinessType - businessType. required.
   */
  setEnduserStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'PrimaryAccount')) {
      throw new TypeError('parameter "PrimaryAccount" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    if (!hasOwnProperty(params, 'BusinessType')) {
      throw new TypeError('parameter "BusinessType" is required');
    }

    return this.request('SetEnduserStatus', params, options);
  }

  /**
   * @param {Integer} RenewalPeriod - renewalPeriod. optional.
   * @param {String} InstanceIDs - instanceIDs. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProductCode - productCode. optional.
   * @param {String} ProductType - productType. optional.
   * @param {String} SubscriptionType - subscriptionType. optional.
   * @param {String} RenewalPeriodUnit - renewalPeriodUnit. optional.
   * @param {String} RenewalStatus - renewalStatus. required.
   */
  setRenewal(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceIDs')) {
      throw new TypeError('parameter "InstanceIDs" is required');
    }

    if (!hasOwnProperty(params, 'RenewalStatus')) {
      throw new TypeError('parameter "RenewalStatus" is required');
    }

    return this.request('SetRenewal', params, options);
  }

  /**
   * @param {Long} Uid - uid. required.
   * @param {String} Bid - bid. required.
   * @param {String} AlarmType - alarmType. required.
   * @param {String} AlarmThresholds - alarmThresholds. optional.
   */
  setUserAlarmThreshold(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'AlarmType')) {
      throw new TypeError('parameter "AlarmType" is required');
    }

    return this.request('SetUserAlarmThreshold', params, options);
  }

  /**
   * @param {Long} Uid - uid. required.
   * @param {String} Bid - bid. required.
   * @param {String} Amount - amount. required.
   * @param {String} Currency - currency. optional.
   * @param {String} OutBizId - outBizId. optional.
   */
  setUserQuota(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Amount')) {
      throw new TypeError('parameter "Amount" is required');
    }

    return this.request('SetUserQuota', params, options);
  }

  /**
   * @param {String} SubscribeBucket - subscribeBucket. required.
   * @param {String} SubscribeType - subscribeType. optional.
   */
  subscribeBillToOSS(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubscribeBucket')) {
      throw new TypeError('parameter "SubscribeBucket" is required');
    }

    return this.request('SubscribeBillToOSS', params, options);
  }

  /**
   * @param {String} SubscribeBucket - subscribeBucket. required.
   * @param {Long} BucketOwnerId - bucketOwnerId. optional.
   * @param {RepeatList} SubscribeType - subscribeType. optional.
   */
  subscribeDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubscribeBucket')) {
      throw new TypeError('parameter "SubscribeBucket" is required');
    }

    return this.request('SubscribeDetail', params, options);
  }

  /**
   * @param {String} SubscribeBucket - subscribeBucket. required.
   * @param {Long} BucketOwnerId - bucketOwnerId. optional.
   * @param {RepeatList} SubscribeType - subscribeType. optional.
   */
  subscribeExportToOSS(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubscribeBucket')) {
      throw new TypeError('parameter "SubscribeBucket" is required');
    }

    return this.request('SubscribeExportToOSS', params, options);
  }

  /**
   * @param {String} SubscribeType - subscribeType. required.
   */
  unsubscribeBillToOSS(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubscribeType')) {
      throw new TypeError('parameter "SubscribeType" is required');
    }

    return this.request('UnsubscribeBillToOSS', params, options);
  }

  /**
   */
  unsubscribeExportToOSS(params = {}, options = {}) {
    return this.request('UnsubscribeExportToOSS', params, options);
  }

}

module.exports = Client;

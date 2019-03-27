
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-06-20';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Integer} Type - type. optional.
   * @param {String} Phones - phones. optional.
   */
  addOrDeleteFlowCloudDialupPhones(params = {}, options = {}) {
    return this.request('AddOrDeleteFlowCloudDialupPhones', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} ProductId - productId. optional.
   * @param {String} ProductName - productName. optional.
   * @param {String} RuleType - ruleType. optional.
   * @param {RepeatList} RuleItem - ruleItems. optional.
   */
  addOrUpdateFlowCloudDispatchRule(params = {}, options = {}) {
    return this.request('AddOrUpdateFlowCloudDispatchRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} InvoiceTitle - invoiceTitle. optional.
   * @param {String} TaxNo - taxNo. optional.
   * @param {String} TaxAddressPhone - taxAddressPhone. optional.
   * @param {String} TaxBankNo - taxBankNo. optional.
   * @param {String} Receiver - receiver. optional.
   * @param {String} Province - province. optional.
   * @param {String} City - city. optional.
   * @param {String} County - county. optional.
   * @param {String} Street - street. optional.
   * @param {String} StreetAddress - streetAddress. optional.
   * @param {String} Telephone - telephone. optional.
   * @param {String} BillMonth - billMonth. optional.
   */
  applyFlowCloudCommissionInvoice(params = {}, options = {}) {
    return this.request('ApplyFlowCloudCommissionInvoice', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} CustId - custId. optional.
   * @param {Long} SuppId - suppId. optional.
   * @param {Long} BillMonth - billMonth. optional.
   * @param {String} InvoiceTitle - invoiceTitle. optional.
   * @param {String} TaxNo - taxNo. optional.
   * @param {String} TaxAddressPhone - taxAddressPhone. optional.
   * @param {String} TaxBankNo - taxBankNo. optional.
   * @param {String} Receiver - receiver. optional.
   * @param {String} Province - province. optional.
   * @param {String} City - city. optional.
   * @param {String} County - county. optional.
   * @param {String} Street - street. optional.
   * @param {String} StreetAddress - streetAddress. optional.
   * @param {String} Telephone - telephone. optional.
   */
  applyFlowCloudMonthAccountBillInvoice(params = {}, options = {}) {
    return this.request('ApplyFlowCloudMonthAccountBillInvoice', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Integer} Result - result. optional.
   * @param {String} PayMoney - payMoney. optional.
   * @param {String} CompensationMoney - compensationMoney. optional.
   * @param {String} Remark - remark. optional.
   * @param {RepeatList} GameOrderId - gameOrderIds. optional.
   */
  approveGameOrder(params = {}, options = {}) {
    return this.request('ApproveGameOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Integer} AuditStatus - auditStatus. optional.
   * @param {String} Description - description. optional.
   * @param {String} Applications - applications. optional.
   */
  auditFlowCloudApplications(params = {}, options = {}) {
    return this.request('AuditFlowCloudApplications', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} Id - id. optional. default: dycdp.
   */
  cancelPlayerGameInfo(params = {}, options = {}) {
    return this.request('CancelPlayerGameInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {RepeatList} GameOrderId - gameOrderIds. optional.
   */
  cancelPublishGameOrder(params = {}, options = {}) {
    return this.request('CancelPublishGameOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} Scopes - scopes. required.
   */
  cancelQuotePriceApply(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Scopes')) {
      throw new TypeError('parameter "Scopes" is required');
    }

    return this.request('CancelQuotePriceApply', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} Param - param. optional.
   */
  changeFlowCloudChannelAvailability(params = {}, options = {}) {
    return this.request('ChangeFlowCloudChannelAvailability', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Integer} UseFlg - useFlg. optional.
   * @param {RepeatList} UserOrderIdList - userOrderIdList. optional.
   */
  changeFlowCloudCustOrder(params = {}, options = {}) {
    return this.request('ChangeFlowCloudCustOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} Discounts - discounts. optional.
   * @param {RepeatList} OfferId - offerIds. optional.
   */
  changeFlowCloudDiscount(params = {}, options = {}) {
    return this.request('ChangeFlowCloudDiscount', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {RepeatList} Offer - offers. optional.
   */
  checkFlowCloudApplicationInSubmit(params = {}, options = {}) {
    return this.request('CheckFlowCloudApplicationInSubmit', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} UserNick - userNick. optional.
   * @param {String} Name - name. optional.
   */
  checkPlayerAccountInfo(params = {}, options = {}) {
    return this.request('CheckPlayerAccountInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} BillMonth - billMonth. optional.
   */
  comfirmFlowCloudCommissionInvoice(params = {}, options = {}) {
    return this.request('ComfirmFlowCloudCommissionInvoice', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} CustId - custId. optional.
   * @param {Long} SuppId - suppId. optional.
   * @param {Long} BillMonth - billMonth. optional.
   */
  comfirmFlowCloudReceiveInvoice(params = {}, options = {}) {
    return this.request('ComfirmFlowCloudReceiveInvoice', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   */
  commitQuotePriceInfo(params = {}, options = {}) {
    return this.request('CommitQuotePriceInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} data - data. required.
   */
  completeOrderInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CompleteOrderInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} ProdId - prodId. required.
   * @param {Long} BusOffer - busOffer. optional.
   * @param {String} BusOffers - busOffers. optional.
   */
  createAlicomProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProdId')) {
      throw new TypeError('parameter "ProdId" is required');
    }

    return this.request('CreateAlicomProduct', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} ContactName - contactName. required.
   * @param {String} ContactPhone - contactPhone. required.
   * @param {String} ContactEmail - contactEmail. required.
   * @param {String} Company - company. required.
   * @param {String} Appname - appname. required.
   * @param {String} Apptype - apptype. required.
   */
  createDflowInviteCustInf(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ContactName')) {
      throw new TypeError('parameter "ContactName" is required');
    }

    if (!hasOwnProperty(params, 'ContactPhone')) {
      throw new TypeError('parameter "ContactPhone" is required');
    }

    if (!hasOwnProperty(params, 'ContactEmail')) {
      throw new TypeError('parameter "ContactEmail" is required');
    }

    if (!hasOwnProperty(params, 'Company')) {
      throw new TypeError('parameter "Company" is required');
    }

    if (!hasOwnProperty(params, 'Appname')) {
      throw new TypeError('parameter "Appname" is required');
    }

    if (!hasOwnProperty(params, 'Apptype')) {
      throw new TypeError('parameter "Apptype" is required');
    }

    return this.request('CreateDflowInviteCustInf', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   */
  createFlowCloudSupplier(params = {}, options = {}) {
    return this.request('CreateFlowCloudSupplier', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} PayAccount - payAccount. optional.
   * @param {Integer} Type - type. optional.
   */
  createFlowCloudWithHoldUrl(params = {}, options = {}) {
    return this.request('CreateFlowCloudWithHoldUrl', params, options);
  }

  /**
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   */
  createLogicalDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('CreateLogicalDelete', params, options);
  }

  /**
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   */
  createPhysicalDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('CreatePhysicalDelete', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} ProdId - prodId. required.
   */
  createProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProdId')) {
      throw new TypeError('parameter "ProdId" is required');
    }

    return this.request('CreateProduct', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {RepeatList} RuleId - ruleIds. optional.
   */
  deleteFlowCloudDispatchRule(params = {}, options = {}) {
    return this.request('DeleteFlowCloudDispatchRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {RepeatList} GameOrderId - gameOrderIds. optional.
   */
  deleteGameOrder(params = {}, options = {}) {
    return this.request('DeleteGameOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} ActionName - actionName. optional.
   * @param {Long} BillMonth - billMonth. optional.
   * @param {String} BizType - bizType. optional.
   * @param {Long} ApplyAmount - applyAmount. optional.
   * @param {String} Seq - seq. optional.
   * @param {Long} NewSettleAmount - newSettleAmount. optional.
   * @param {String} Reason - reason. optional.
   * @param {Boolean} Accept - accept. optional.
   * @param {String} FileKey - fileKey. optional.
   * @param {Long} Status - status. optional.
   * @param {String} SettleMode - settleMode. optional.
   * @param {String} Files - fileJson. optional.
   * @param {Boolean} NeedEncrypt - needEncrypt. optional.
   * @param {Long} AuditType - auditType. optional.
   */
  doHfqCommonAction(params = {}, options = {}) {
    return this.request('DoHfqCommonAction', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Integer} UserType - userType. optional.
   * @param {Long} CustId - custId. optional.
   * @param {Long} SuppId - suppId. optional.
   * @param {String} StartDate - startDate. optional.
   * @param {String} EndDate - endDate. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  downloadFlowCloudAccountRechargeRecords(params = {}, options = {}) {
    return this.request('DownloadFlowCloudAccountRechargeRecords', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} CustId - custId. optional.
   * @param {Long} SuppId - suppId. optional.
   * @param {String} Vendor - vendor. optional.
   * @param {String} Grade - grade. optional.
   * @param {String} ChannelType - channelType. optional.
   * @param {String} Province - province. optional.
   * @param {String} UseEff - useEff. optional.
   * @param {String} UseLimit - useLimit. optional.
   * @param {String} UseScene - useScene. optional.
   * @param {String} Right - right. optional.
   * @param {String} SpecialDiscount - specialDiscount. optional.
   * @param {String} FlowType - flowType. optional.
   * @param {Integer} Type - type. optional.
   * @param {Integer} UseStatus - useStatus. optional.
   * @param {Integer} OfferStatus - offerStatus. optional.
   */
  downloadFlowCloudCustProductsOrder(params = {}, options = {}) {
    return this.request('DownloadFlowCloudCustProductsOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} CustId - custId. optional.
   * @param {Long} SuppId - suppId. optional.
   * @param {String} Vendor - vendor. optional.
   * @param {String} Grade - grade. optional.
   * @param {String} ChannelType - channelType. optional.
   * @param {String} Province - province. optional.
   * @param {String} UseEff - useEff. optional.
   * @param {String} UseLimit - useLimit. optional.
   * @param {String} UseScene - useScene. optional.
   * @param {String} Right - right. optional.
   * @param {String} SpecialDiscount - specialDiscount. optional.
   * @param {String} FlowType - flowType. optional.
   * @param {Integer} Type - type. optional.
   * @param {Integer} UseStatus - useStatus. optional.
   */
  downloadFlowCloudSupplierProductOn(params = {}, options = {}) {
    return this.request('DownloadFlowCloudSupplierProductOn', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} UserId - userId. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Integer} Status - status. optional.
   */
  downloadGamePlayOrders(params = {}, options = {}) {
    return this.request('DownloadGamePlayOrders', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} CustId - custId. optional.
   * @param {String} OrderId - orderId. optional.
   */
  flowCloudSuppRefund(params = {}, options = {}) {
    return this.request('FlowCloudSuppRefund', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} Channels - channels. optional.
   */
  loadOldQuotePrice(params = {}, options = {}) {
    return this.request('LoadOldQuotePrice', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {RepeatList} OfferId - offerIds. optional.
   * @param {String} OffReason - offReason. optional.
   */
  offFlowCloudSuppShelf(params = {}, options = {}) {
    return this.request('OffFlowCloudSuppShelf', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} Discounts - discounts. optional.
   * @param {RepeatList} Id - ids. optional.
   */
  onFlowCloudSuppShelf(params = {}, options = {}) {
    return this.request('OnFlowCloudSuppShelf', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} Id - ids. optional.
   * @param {String} Status - status. optional. default: dycdp.
   */
  onOrOffshelfPlayersInfo(params = {}, options = {}) {
    return this.request('OnOrOffshelfPlayersInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} data - data. required.
   */
  orderSucceededCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('OrderSucceededCallback', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   */
  preLoadOldQuotePrice(params = {}, options = {}) {
    return this.request('PreLoadOldQuotePrice', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {RepeatList} GameOrderId - gameOrderIds. optional.
   */
  publishGameOrder(params = {}, options = {}) {
    return this.request('PublishGameOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  queryAllPlayerInfo(params = {}, options = {}) {
    return this.request('QueryAllPlayerInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. required.
   */
  queryBizCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProdCode')) {
      throw new TypeError('parameter "ProdCode" is required');
    }

    return this.request('QueryBizCount', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} UpOperator - upOperator. optional.
   * @param {String} ChannelType - channelType. optional.
   * @param {String} Province - province. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryCdpOfferList(params = {}, options = {}) {
    return this.request('QueryCdpOfferList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} TaskId - taskId. required.
   */
  queryCdpSaasSendingProgress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('QueryCdpSaasSendingProgress', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} TaskId - taskId. optional.
   * @param {String} TaskName - taskName. optional.
   * @param {String} Status - status. optional.
   * @param {String} BizType - bizType. optional. default: CDP.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryCdpSaasTaskList(params = {}, options = {}) {
    return this.request('QueryCdpSaasTaskList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} PhoneNum - phoneNum. optional.
   * @param {String} RechargeStatus - rechargeStatus. optional.
   * @param {String} EndDate - endDate. required.
   * @param {String} StartDate - startDate. required.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   */
  queryChargeDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    return this.request('QueryChargeDetails', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   */
  queryChargeDetailsDownLoadUrl(params = {}, options = {}) {
    return this.request('QueryChargeDetailsDownLoadUrl', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} BillMonth - billMonth. optional.
   * @param {String} Status - status. optional.
   */
  queryCommissionInfo(params = {}, options = {}) {
    return this.request('QueryCommissionInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   */
  queryCustInfo(params = {}, options = {}) {
    return this.request('QueryCustInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   */
  queryDflowDownLoadOrderList(params = {}, options = {}) {
    return this.request('QueryDflowDownLoadOrderList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} QueryStartTime - queryStartTime. optional.
   * @param {String} QueryEndTime - queryEndTime. optional.
   * @param {Long} CustId - custId. optional.
   */
  queryDflowDownLoadUrl(params = {}, options = {}) {
    return this.request('QueryDflowDownLoadUrl', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} ContactName - contactName. optional.
   * @param {String} ContactPhone - contactPhone. optional.
   * @param {String} ContactEmail - contactEmail. optional.
   * @param {String} Company - company. optional.
   * @param {String} Appname - appname. optional.
   * @param {String} Apptype - apptype. optional.
   */
  queryDflowInviteCustInf(params = {}, options = {}) {
    return this.request('QueryDflowInviteCustInf', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Long} CustId - custId. optional.
   * @param {String} Phone - phone. optional.
   * @param {String} GradeId - gradeId. optional.
   * @param {String} OrderStatus - orderStatus. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   */
  queryDflowOrderList(params = {}, options = {}) {
    return this.request('QueryDflowOrderList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   */
  queryDflowProductList(params = {}, options = {}) {
    return this.request('QueryDflowProductList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   */
  queryFlowAccountBillUrls(params = {}, options = {}) {
    return this.request('QueryFlowAccountBillUrls', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} FromBillDay - fromBillDay. optional.
   * @param {String} ToBillDay - toBillDay. optional.
   */
  queryFlowAccountDayBillUrls(params = {}, options = {}) {
    return this.request('QueryFlowAccountDayBillUrls', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} Vendor - vendor. optional.
   * @param {String} ChannelType - channelType. optional.
   * @param {String} Province - province. optional.
   * @param {String} UseEff - useEff. optional.
   * @param {String} UseLimit - useLimit. optional.
   * @param {String} UseScene - useScene. optional.
   * @param {String} Right - right. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryFlowCdpOfferListNew(params = {}, options = {}) {
    return this.request('QueryFlowCdpOfferListNew', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} CustId - custId. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Vendor - vendor. optional.
   * @param {String} Province - province. optional.
   */
  queryFlowCloudAbnormalOrder(params = {}, options = {}) {
    return this.request('QueryFlowCloudAbnormalOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} CustId - custId. optional.
   * @param {Long} SuppId - suppId. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Vendor - vendor. optional.
   * @param {String} Province - province. optional.
   */
  queryFlowCloudAbnormalOrderIdList(params = {}, options = {}) {
    return this.request('QueryFlowCloudAbnormalOrderIdList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Integer} UserType - userType. optional.
   * @param {Long} CustId - custId. optional.
   * @param {Long} SuppId - suppId. optional.
   * @param {Long} BillMonth - billMonth. optional.
   */
  queryFlowCloudAccountBillUrls(params = {}, options = {}) {
    return this.request('QueryFlowCloudAccountBillUrls', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Integer} UserType - userType. optional.
   * @param {Long} CustId - custId. optional.
   * @param {Long} SuppId - suppId. optional.
   * @param {Long} BillMonth - billMonth. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryFlowCloudAccountBills(params = {}, options = {}) {
    return this.request('QueryFlowCloudAccountBills', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} CustId - custId. optional.
   * @param {String} SuppId - suppId. optional.
   * @param {Integer} UserType - userType. optional.
   * @param {String} FromBillDay - fromBillDay. optional.
   * @param {String} ToBillDay - toBillDay. optional.
   */
  queryFlowCloudAccountDayBillUrls(params = {}, options = {}) {
    return this.request('QueryFlowCloudAccountDayBillUrls', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Integer} UserType - userType. optional.
   * @param {Long} CustId - custId. optional.
   * @param {Long} SuppId - suppId. optional.
   * @param {String} StartDate - startDate. optional.
   * @param {String} EndDate - endDate. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryFlowCloudAccountRechargeRecords(params = {}, options = {}) {
    return this.request('QueryFlowCloudAccountRechargeRecords', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Integer} UserType - userType. optional.
   * @param {Long} CustId - custId. optional.
   * @param {Long} SuppId - suppId. optional.
   * @param {String} AccountStatus - accountStatus. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryFlowCloudAccounts(params = {}, options = {}) {
    return this.request('QueryFlowCloudAccounts', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   */
  queryFlowCloudBaseProductEnums(params = {}, options = {}) {
    return this.request('QueryFlowCloudBaseProductEnums', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} Vendor - vendor. optional.
   * @param {String} ChannelType - channelType. optional.
   * @param {String} Province - province. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryFlowCloudChannelAvailability(params = {}, options = {}) {
    return this.request('QueryFlowCloudChannelAvailability', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} PhoneNum - phoneNum. optional.
   * @param {String} OrderStatus - orderStatus. optional.
   * @param {String} StartDate - startDate. optional.
   * @param {String} EndDate - endDate. optional.
   * @param {String} OrderType - orderType. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryFlowCloudChargeRecords(params = {}, options = {}) {
    return this.request('QueryFlowCloudChargeRecords', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} SuppId - suppId. optional.
   * @param {String} Vendor - vendor. optional.
   * @param {String} Grade - grade. optional.
   * @param {String} ChannelType - channelType. optional.
   * @param {String} Province - province. optional.
   * @param {String} UseEff - useEff. optional.
   * @param {String} UseLimit - useLimit. optional.
   * @param {String} UseScene - useScene. optional.
   * @param {String} Right - right. optional.
   * @param {Integer} SpecialDiscount - specialDiscount. optional.
   * @param {String} FlowType - flowType. optional.
   * @param {Integer} OfferStatus - offerStatus. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryFlowCloudCustBeOrderedOffer(params = {}, options = {}) {
    return this.request('QueryFlowCloudCustBeOrderedOffer', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   */
  queryFlowCloudCustEmail(params = {}, options = {}) {
    return this.request('QueryFlowCloudCustEmail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} SuppId - suppId. optional.
   * @param {String} Type - type. optional.
   * @param {String} NoAlicom - noAlicom. optional.
   */
  queryFlowCloudCustInfo(params = {}, options = {}) {
    return this.request('QueryFlowCloudCustInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} CustId - custId. optional.
   * @param {String} OrderId - orderId. optional.
   * @param {String} OutOrderId - outOrderId. optional.
   * @param {String} Vendor - vendor. optional.
   * @param {String} Province - province. optional.
   * @param {Integer} Status - status. optional.
   * @param {Integer} Grade - grade. optional.
   * @param {String} Phone - phone. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryFlowCloudCustOrder(params = {}, options = {}) {
    return this.request('QueryFlowCloudCustOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} CustId - custId. optional.
   * @param {Long} SuppId - suppId. optional.
   * @param {String} Vendor - vendor. optional.
   * @param {String} Grade - grade. optional.
   * @param {String} ChannelType - channelType. optional.
   * @param {String} Province - province. optional.
   * @param {String} UseEff - useEff. optional.
   * @param {String} UseLimit - useLimit. optional.
   * @param {String} UseScene - useScene. optional.
   * @param {String} Right - right. optional.
   * @param {String} SpecialDiscount - specialDiscount. optional.
   * @param {String} FlowType - flowType. optional.
   * @param {Integer} Type - type. optional.
   * @param {Integer} UseStatus - useStatus. optional.
   * @param {Integer} SuppUseStatus - suppUseStatus. optional.
   * @param {Integer} OfferStatus - offerStatus. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryFlowCloudCustOrderInfos(params = {}, options = {}) {
    return this.request('QueryFlowCloudCustOrderInfos', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} CustId - custId. optional.
   * @param {Long} SuppId - suppId. optional.
   * @param {String} Status - status. optional.
   * @param {String} OfferStatus - offerStatus. optional.
   * @param {String} Vendor - vendor. optional.
   * @param {String} Grade - grade. optional.
   * @param {String} ChannelType - channelType. optional.
   * @param {String} Province - province. optional.
   * @param {String} UseEff - useEff. optional.
   * @param {String} UseLimit - useLimit. optional.
   * @param {String} UseScene - useScene. optional.
   * @param {String} Right - right. optional.
   * @param {String} SpecialDiscount - specialDiscount. optional.
   * @param {String} FlowType - flowType. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryFlowCloudCustomerApplications(params = {}, options = {}) {
    return this.request('QueryFlowCloudCustomerApplications', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   */
  queryFlowCloudCustomerLogisticsInfo(params = {}, options = {}) {
    return this.request('QueryFlowCloudCustomerLogisticsInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryFlowCloudDialupPhones(params = {}, options = {}) {
    return this.request('QueryFlowCloudDialupPhones', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} RuleId - ruleId. optional.
   */
  queryFlowCloudDispatchRuleItems(params = {}, options = {}) {
    return this.request('QueryFlowCloudDispatchRuleItems', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryFlowCloudDispatchRules(params = {}, options = {}) {
    return this.request('QueryFlowCloudDispatchRules', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   */
  queryFlowCloudDySuppFlag(params = {}, options = {}) {
    return this.request('QueryFlowCloudDySuppFlag', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   */
  queryFlowCloudIsHidden(params = {}, options = {}) {
    return this.request('QueryFlowCloudIsHidden', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Integer} UserType - userType. optional.
   * @param {Long} CustId - custId. optional.
   * @param {Long} SuppId - suppId. optional.
   * @param {Long} BillMonth - billMonth. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryFlowCloudMonthAccountBills(params = {}, options = {}) {
    return this.request('QueryFlowCloudMonthAccountBills', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} BizType - bizType. optional.
   */
  queryFlowCloudOSSConfig(params = {}, options = {}) {
    return this.request('QueryFlowCloudOSSConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} OrderId - orderId. optional.
   * @param {String} ReturnStatus - returnStatus. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryFlowCloudReturnDetails(params = {}, options = {}) {
    return this.request('QueryFlowCloudReturnDetails', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} OrderId - orderId. optional.
   */
  queryFlowCloudReturnFailReason(params = {}, options = {}) {
    return this.request('QueryFlowCloudReturnFailReason', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} PhoneNum - phoneNum. optional.
   * @param {String} ReturnStatus - returnStatus. optional.
   * @param {String} StartDate - startDate. optional.
   * @param {String} EndDate - endDate. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryFlowCloudReturnRecords(params = {}, options = {}) {
    return this.request('QueryFlowCloudReturnRecords', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} OfferId - offerId. optional.
   */
  queryFlowCloudSpecialVisiable(params = {}, options = {}) {
    return this.request('QueryFlowCloudSpecialVisiable', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   */
  queryFlowCloudSuppBaseInfo(params = {}, options = {}) {
    return this.request('QueryFlowCloudSuppBaseInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} CustId - custId. optional.
   * @param {Long} SuppId - suppId. optional.
   * @param {Integer} Type - type. optional.
   */
  queryFlowCloudSuppConfig(params = {}, options = {}) {
    return this.request('QueryFlowCloudSuppConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Integer} Type - type. optional.
   */
  queryFlowCloudSuppContactInfo(params = {}, options = {}) {
    return this.request('QueryFlowCloudSuppContactInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} CustId - custId. optional.
   * @param {String} Type - type. optional.
   */
  queryFlowCloudSuppInfo(params = {}, options = {}) {
    return this.request('QueryFlowCloudSuppInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   */
  queryFlowCloudSuppLogisticsInfo(params = {}, options = {}) {
    return this.request('QueryFlowCloudSuppLogisticsInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} Vendor - vendor. optional.
   * @param {String} ChannelType - channelType. optional.
   * @param {String} Province - province. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryFlowCloudSuppQuotePriceInfo(params = {}, options = {}) {
    return this.request('QueryFlowCloudSuppQuotePriceInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   */
  queryFlowCloudSuppQuotePriceStatistics(params = {}, options = {}) {
    return this.request('QueryFlowCloudSuppQuotePriceStatistics', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Integer} SuppId - suppId. optional.
   * @param {Integer} Type - type. optional.
   * @param {String} Vendor - vendor. optional.
   * @param {String} ChannelType - channelType. optional.
   * @param {String} Province - province. optional.
   */
  queryFlowCloudSuppSlaInfo(params = {}, options = {}) {
    return this.request('QueryFlowCloudSuppSlaInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} CustId - custId. optional.
   * @param {Long} SuppId - suppId. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} OfferStatus - offerStatus. optional.
   * @param {String} Vendor - vendor. optional.
   * @param {String} Grade - grade. optional.
   * @param {String} ChannelType - channelType. optional.
   * @param {String} Province - province. optional.
   * @param {String} UseEff - useEff. optional.
   * @param {String} UseLimit - useLimit. optional.
   * @param {String} UseScene - useScene. optional.
   * @param {String} Right - right. optional.
   * @param {String} SpecialDiscount - specialDiscount. optional.
   * @param {String} FlowType - flowType. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryFlowCloudSupplierApplications(params = {}, options = {}) {
    return this.request('QueryFlowCloudSupplierApplications', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} Vendor - vendor. optional.
   * @param {String} Grade - grade. optional.
   * @param {String} ChannelType - channelType. optional.
   * @param {String} Province - province. optional.
   * @param {String} UseEff - useEff. optional.
   * @param {String} UseLimit - useLimit. optional.
   * @param {String} UseScene - useScene. optional.
   * @param {String} Right - right. optional.
   * @param {Integer} SpecialDiscount - specialDiscount. optional.
   * @param {String} FlowType - flowType. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} VisibleType - visibleType. optional.
   */
  queryFlowCloudSupplierProductOff(params = {}, options = {}) {
    return this.request('QueryFlowCloudSupplierProductOff', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} Vendor - vendor. optional.
   * @param {String} Grade - grade. optional.
   * @param {String} ChannelType - channelType. optional.
   * @param {String} Province - province. optional.
   * @param {String} UseEff - useEff. optional.
   * @param {String} UseLimit - useLimit. optional.
   * @param {String} UseScene - useScene. optional.
   * @param {String} Right - right. optional.
   * @param {Integer} SpecialDiscount - specialDiscount. optional.
   * @param {String} FlowType - flowType. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} VisibleType - visibleType. optional.
   */
  queryFlowCloudSupplierProductOn(params = {}, options = {}) {
    return this.request('QueryFlowCloudSupplierProductOn', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} FlagType - flagType. required.
   */
  queryFlowCloudVMFlag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FlagType')) {
      throw new TypeError('parameter "FlagType" is required');
    }

    return this.request('QueryFlowCloudVMFlag', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} VersionNo - versionNo. optional.
   */
  queryFlowCloudVersionInfo(params = {}, options = {}) {
    return this.request('QueryFlowCloudVersionInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} ProductId - productId. required.
   */
  queryGameEnums(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductId')) {
      throw new TypeError('parameter "ProductId" is required');
    }

    return this.request('QueryGameEnums', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Integer} BizType - bizType. optional.
   */
  queryGameInvitationInfo(params = {}, options = {}) {
    return this.request('QueryGameInvitationInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} GameOrderId - gameOrderId. optional.
   */
  queryGameOrder(params = {}, options = {}) {
    return this.request('QueryGameOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   */
  queryGameOrderStatistic(params = {}, options = {}) {
    return this.request('QueryGameOrderStatistic', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Integer} StatusFlag - statusFlag. optional.
   * @param {String} GameOrderId - gameOrderId. optional.
   * @param {String} TbOrderId - tbOrderId. optional.
   * @param {String} PlayerPhone - playerPhone. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Integer} Status - status. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryGameOrders(params = {}, options = {}) {
    return this.request('QueryGameOrders', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   */
  queryGamePlayGames(params = {}, options = {}) {
    return this.request('QueryGamePlayGames', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} BizType - bizType. optional.
   */
  queryGamePlayOSSConfig(params = {}, options = {}) {
    return this.request('QueryGamePlayOSSConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   */
  queryGamePlayOrderStatistic(params = {}, options = {}) {
    return this.request('QueryGamePlayOrderStatistic', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} UserId - userId. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Integer} Status - status. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryGamePlayOrders(params = {}, options = {}) {
    return this.request('QueryGamePlayOrders', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} ItemId - itemId. optional.
   * @param {Long} PropertyId - propertyId. optional.
   * @param {Long} SkuId - skuId. optional.
   */
  queryGamePlaySellerItemSku(params = {}, options = {}) {
    return this.request('QueryGamePlaySellerItemSku', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} ItemId - itemId. optional.
   */
  queryGamePlaySellerItems(params = {}, options = {}) {
    return this.request('QueryGamePlaySellerItems', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryGames(params = {}, options = {}) {
    return this.request('QueryGames', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} ProdId - prodId. required.
   * @param {Long} BusOffer - busOffer. optional.
   */
  queryOpenStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProdId')) {
      throw new TypeError('parameter "ProdId" is required');
    }

    return this.request('QueryOpenStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  queryPlayerAttributes(params = {}, options = {}) {
    return this.request('QueryPlayerAttributes', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} Id - id. optional.
   */
  queryPlayerInfo(params = {}, options = {}) {
    return this.request('QueryPlayerInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  queryPlayerInfoStatistic(params = {}, options = {}) {
    return this.request('QueryPlayerInfoStatistic', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Name - name. optional.
   * @param {String} PlayerStatus - playerStatus. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   */
  queryPlayerInfos(params = {}, options = {}) {
    return this.request('QueryPlayerInfos', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} Vendor - vendor. optional.
   * @param {String} FlowType - flowType. optional.
   * @param {String} Grade - grade. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Status - status. optional.
   * @param {String} OrderField - orderField. optional.
   * @param {String} OrderType - orderType. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryPreFlowBuyRecords(params = {}, options = {}) {
    return this.request('QueryPreFlowBuyRecords', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} Vendor - vendor. optional.
   * @param {String} FlowType - flowType. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryPreFlowRemaining(params = {}, options = {}) {
    return this.request('QueryPreFlowRemaining', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} Vendor - vendor. optional.
   * @param {String} FlowType - flowType. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Month - month. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryPreFlowUsed(params = {}, options = {}) {
    return this.request('QueryPreFlowUsed', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} Vendor - vendor. optional.
   * @param {String} ChannelType - channelType. optional.
   * @param {String} Province - province. optional.
   * @param {Integer} Status - status. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryQuotePriceApply(params = {}, options = {}) {
    return this.request('QueryQuotePriceApply', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   */
  queryQuotePriceCondition(params = {}, options = {}) {
    return this.request('QueryQuotePriceCondition', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {Long} TaskId - taskId. required.
   * @param {Long} TaskInstanceId - taskInstanceId. optional.
   * @param {String} BizType - bizType. required.
   * @param {String} IndexCol - indexCol. optional.
   * @param {Long} Result - result. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageNo - pageNo. required.
   */
  querySaasRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'BizType')) {
      throw new TypeError('parameter "BizType" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    return this.request('QuerySaasRecord', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   */
  querySuppQuotePriceHidden(params = {}, options = {}) {
    return this.request('QuerySuppQuotePriceHidden', params, options);
  }

  /**
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   * @param {Long} Level - level. optional.
   * @param {String} Url - url. optional.
   * @param {String} Prompt - prompt. optional.
   */
  queryUserDeleteStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('QueryUserDeleteStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} CustId - custId. optional.
   * @param {String} PayAmount - payAmount. optional.
   * @param {String} Remark - remark. optional.
   */
  rechargeFlowCloudAccount(params = {}, options = {}) {
    return this.request('RechargeFlowCloudAccount', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {Long} DetailPkId - detailPkId. required.
   * @param {Long} TaskId - taskId. required.
   * @param {Long} TaskInstanceId - taskInstanceId. optional.
   * @param {String} BizType - bizType. optional.
   */
  retrySaasRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DetailPkId')) {
      throw new TypeError('parameter "DetailPkId" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('RetrySaasRecord', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} PayMoney - payMoney. optional.
   * @param {String} CompensationMoney - compensationMoney. optional.
   * @param {String} Remark - remark. optional.
   * @param {RepeatList} GameOrderId - gameOrderIds. optional.
   */
  revokeGameOrder(params = {}, options = {}) {
    return this.request('RevokeGameOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Integer} Flag - flag. optional.
   * @param {String} GameOrderId - gameOrderId. optional.
   * @param {String} TbOrderId - tbOrderId. optional.
   * @param {Long} ProductId - productId. optional.
   * @param {String} GameChannel - gameChannel. optional.
   * @param {String} GameSection - gameSection. optional.
   * @param {String} GameServer - gameServer. optional.
   * @param {String} RoleName - roleName. optional.
   * @param {String} GameAccount - gameAccount. optional.
   * @param {String} GamePassword - gamePassword. optional.
   * @param {String} PlayerPhone - playerPhone. optional.
   * @param {String} CustomerQq - customerQq. optional.
   * @param {String} Title - title. optional.
   * @param {String} Price - price. optional.
   * @param {String} SecurityDeposit - securityDeposit. optional.
   * @param {String} EfficiencyDeposit - efficiencyDeposit. optional.
   * @param {String} PracticeDay - practiceDay. optional.
   * @param {String} PracticeHour - practiceHour. optional.
   * @param {String} Requirement - requirement. optional.
   * @param {String} OrderRemark - orderRemark. optional.
   */
  saveGameOrder(params = {}, options = {}) {
    return this.request('SaveGameOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {RepeatList} EmailInfo - emailInfos. optional.
   */
  setFlowCloudCustEmail(params = {}, options = {}) {
    return this.request('SetFlowCloudCustEmail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Boolean} IsHidden - isHidden. optional.
   */
  setFlowCloudIsHidden(params = {}, options = {}) {
    return this.request('SetFlowCloudIsHidden', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} SpecifyDiscount - specifyDiscount. optional.
   * @param {RepeatList} UserOrderIdList - userOrderIdList. optional.
   */
  setFlowCloudSpecDiscount(params = {}, options = {}) {
    return this.request('SetFlowCloudSpecDiscount', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {RepeatList} Customer - customers. optional.
   * @param {RepeatList} Offer - offers. optional.
   * @param {Integer} VisibleType - visibleType. optional.
   */
  setFlowCloudSpecialVisiable(params = {}, options = {}) {
    return this.request('SetFlowCloudSpecialVisiable', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} OpenUrl - openUrl. optional.
   * @param {String} OpenMode - openMode. optional.
   * @param {String} QueryUrl - queryUrl. optional.
   * @param {String} ResaleFlg - resaleFlg. optional.
   * @param {Long} CustId - custId. optional.
   * @param {String} Sign - sign. optional.
   * @param {String} Ext - ext. optional.
   * @param {Integer} Type - type. optional.
   * @param {String} CallbackUrl - callbackUrl. optional.
   * @param {String} PayType - payType. optional.
   * @param {String} PayAccount - payAccount. optional.
   * @param {String} PayId - payId. optional.
   */
  setFlowCloudSuppConfig(params = {}, options = {}) {
    return this.request('SetFlowCloudSuppConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {RepeatList} ContactInfos - contactInfos. optional.
   */
  setFlowCloudSuppContactInfo(params = {}, options = {}) {
    return this.request('SetFlowCloudSuppContactInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {RepeatList} Offer - offers. optional.
   * @param {String} Remark - remark. optional.
   */
  setFlowCloudSuppOfferRemark(params = {}, options = {}) {
    return this.request('SetFlowCloudSuppOfferRemark', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Integer} Type - type. optional.
   * @param {RepeatList} ProductIds - productIds. optional.
   * @param {String} Discount - discount. optional.
   * @param {String} SlaId - slaId. optional.
   * @param {String} Remark - remark. optional.
   */
  setFlowCloudSuppQuotePriceInfo(params = {}, options = {}) {
    return this.request('SetFlowCloudSuppQuotePriceInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} Vendor - vendor. optional.
   * @param {String} ChannelType - channelType. optional.
   * @param {String} Province - province. optional.
   * @param {String} SuccessRate - successRate. optional.
   * @param {String} RechargeSeconds - rechargeSeconds. optional.
   * @param {String} BlockOrderRate - blockOrderRate. optional.
   * @param {String} TimeoutRate - timeoutRate. optional.
   * @param {String} RefundRate - refundRate. optional.
   * @param {String} OffselfHours - offselfHours. optional.
   */
  setFlowCloudSuppSlaInfo(params = {}, options = {}) {
    return this.request('SetFlowCloudSuppSlaInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} UserNick - userNick. optional. default: dycdp.
   * @param {String} Name - name. optional.
   */
  setPlayerAccountInfo(params = {}, options = {}) {
    return this.request('SetPlayerAccountInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} UserNick - userNick. optional.
   * @param {String} Nick - nick. optional.
   * @param {String} Gender - gender. optional.
   * @param {String} Phone - phone. optional.
   * @param {String} PlayerImage - playerImage. optional.
   * @param {String} PlayerVoice - playerVoice. optional.
   * @param {String} PlayerIdentity - playerIdentity. optional.
   * @param {String} PlayerAttribute - playerAttribute. optional.
   * @param {String} PlayerOthers - playerOthers. optional.
   */
  setPlayerBaseInfo(params = {}, options = {}) {
    return this.request('SetPlayerBaseInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} UserNick - userNick. optional.
   * @param {String} GameInfos - gameInfos. optional.
   */
  setPlayerGameInfo(params = {}, options = {}) {
    return this.request('SetPlayerGameInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {RepeatList} Offer - offers. optional.
   */
  submitFlowCloudApplication(params = {}, options = {}) {
    return this.request('SubmitFlowCloudApplication', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} OrderId - orderId. optional.
   * @param {String} FileKeys - fileKeys. optional.
   */
  submitFlowCloudOrderReturn(params = {}, options = {}) {
    return this.request('SubmitFlowCloudOrderReturn', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} CustId - custId. optional.
   * @param {Long} SuppId - suppId. optional.
   * @param {Long} BillMonth - billMonth. optional.
   * @param {String} ExpressCompany - expressCompany. optional.
   * @param {String} ExpressNo - expressNo. optional.
   */
  submitFlowCloudPostInfo(params = {}, options = {}) {
    return this.request('SubmitFlowCloudPostInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Integer} BizType - bizType. required.
   * @param {String} ContactName - contactName. optional.
   * @param {String} ContactPhone - contactPhone. optional.
   * @param {String} ContactEmail - contactEmail. optional.
   * @param {String} Company - company. optional.
   * @param {String} PlatformA - platformA. optional.
   * @param {String} PlatformB - platformB. optional.
   * @param {String} PlatformC - platformC. optional.
   * @param {String} PlatformD - platformD. optional.
   * @param {String} PlatformE - platformE. optional.
   */
  submitGameInvitationInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizType')) {
      throw new TypeError('parameter "BizType" is required');
    }

    return this.request('SubmitGameInvitationInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} Scopes - scopes. required.
   * @param {String} Remark - remark. optional.
   */
  submitQuotePriceApply(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Scopes')) {
      throw new TypeError('parameter "Scopes" is required');
    }

    return this.request('SubmitQuotePriceApply', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Long} CustId - custId. optional.
   * @param {Long} SuppId - suppId. optional.
   * @param {String} CreditValue - creditValue. optional.
   */
  updateFlowCloudAccountCredit(params = {}, options = {}) {
    return this.request('UpdateFlowCloudAccountCredit', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {String} data - data. required.
   */
  validateOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('ValidateOrder', params, options);
  }

}

module.exports = Client;

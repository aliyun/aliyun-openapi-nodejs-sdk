
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
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} Name - name. required.
   * @param {String} Province - province. required.
   * @param {String} City - city. required.
   * @param {String} Area - area. optional.
   * @param {String} Town - town. optional.
   * @param {String} Address - address. required.
   * @param {String} PostCode - postCode. required.
   * @param {String} MobilePhone - mobilePhone. required.
   * @param {String} IsDefault - isDefault. required.
   */
  createAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Province')) {
      throw new TypeError('parameter "Province" is required');
    }

    if (!hasOwnProperty(params, 'City')) {
      throw new TypeError('parameter "City" is required');
    }

    if (!hasOwnProperty(params, 'Address')) {
      throw new TypeError('parameter "Address" is required');
    }

    if (!hasOwnProperty(params, 'PostCode')) {
      throw new TypeError('parameter "PostCode" is required');
    }

    if (!hasOwnProperty(params, 'MobilePhone')) {
      throw new TypeError('parameter "MobilePhone" is required');
    }

    if (!hasOwnProperty(params, 'IsDefault')) {
      throw new TypeError('parameter "IsDefault" is required');
    }

    return this.request('CreateAddress', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} Amount - amount. required.
   */
  createAlicomCash(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Amount')) {
      throw new TypeError('parameter "Amount" is required');
    }

    return this.request('CreateAlicomCash', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} ProdId - prodId. required.
   * @param {Long} BusOffer - busOffer. required.
   */
  createAlicomProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProdId')) {
      throw new TypeError('parameter "ProdId" is required');
    }

    if (!hasOwnProperty(params, 'BusOffer')) {
      throw new TypeError('parameter "BusOffer" is required');
    }

    return this.request('CreateAlicomProduct', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} VoucherIds - voucherIds. required.
   * @param {String} VoucherNos - voucherNos. required.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   */
  createAlicomVoucher(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VoucherIds')) {
      throw new TypeError('parameter "VoucherIds" is required');
    }

    if (!hasOwnProperty(params, 'VoucherNos')) {
      throw new TypeError('parameter "VoucherNos" is required');
    }

    return this.request('CreateAlicomVoucher', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} Amount - amount. required.
   */
  createAliyunCash(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Amount')) {
      throw new TypeError('parameter "Amount" is required');
    }

    return this.request('CreateAliyunCash', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Message - message. required.
   */
  createConsoleAlert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Message')) {
      throw new TypeError('parameter "Message" is required');
    }

    return this.request('CreateConsoleAlert', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} ItemName - itemName. optional.
   * @param {String} BillCycle - billCycle. optional.
   * @param {String} ItemId - itemId. optional.
   * @param {String} SubjectItemId - subjectItemId. optional.
   */
  createDailyBillDetailInfoOssUrl(params = {}, options = {}) {
    return this.request('CreateDailyBillDetailInfoOssUrl', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} ItemName - itemName. optional.
   * @param {String} BillId - billId. optional.
   * @param {String} BillCycle - billCycle. optional.
   * @param {String} ItemId - itemId. optional.
   * @param {String} SubjectItemId - subjectItemId. optional.
   */
  createDayBillDetailInfoOssUrl(params = {}, options = {}) {
    return this.request('CreateDayBillDetailInfoOssUrl', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} InvoiceType - invoiceType. optional.
   * @param {String} InvoiceAcquisitionMod - invoiceAcquisitionMod. optional.
   * @param {Long} AddressId - addressId. optional.
   * @param {Long} BillingCycle - billingCycle. optional.
   */
  createInvoice(params = {}, options = {}) {
    return this.request('CreateInvoice', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} BizType - bizType. required.
   * @param {String} CallbackUrl - callbackUrl. required.
   */
  createMessageCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizType')) {
      throw new TypeError('parameter "BizType" is required');
    }

    if (!hasOwnProperty(params, 'CallbackUrl')) {
      throw new TypeError('parameter "CallbackUrl" is required');
    }

    return this.request('CreateMessageCallback', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} Url - url. optional.
   * @param {String} Content - content. optional.
   * @param {String} Method - method. optional.
   * @param {String} BizType - bizType. optional.
   */
  createMessageCallbackTest(params = {}, options = {}) {
    return this.request('CreateMessageCallbackTest', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} QueueType - queueType. optional.
   * @param {String} Region - region. optional.
   */
  createMessageQueue(params = {}, options = {}) {
    return this.request('CreateMessageQueue', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   */
  createMigrateDayuCust(params = {}, options = {}) {
    return this.request('CreateMigrateDayuCust', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   */
  createMnsMigratingTag(params = {}, options = {}) {
    return this.request('CreateMnsMigratingTag', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} ItemName - itemName. optional.
   * @param {String} BillCycle - billCycle. optional.
   * @param {String} ItemID - itemId. optional.
   * @param {String} SubjectItemId - subjectItemId. optional.
   */
  createMonthlyBillInfoOssUrl(params = {}, options = {}) {
    return this.request('CreateMonthlyBillInfoOssUrl', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
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
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} BusiType - busiType. required.
   * @param {String} AttrKey - attrKey. required.
   * @param {String} AttrValue - attrValue. required.
   */
  createUserAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BusiType')) {
      throw new TypeError('parameter "BusiType" is required');
    }

    if (!hasOwnProperty(params, 'AttrKey')) {
      throw new TypeError('parameter "AttrKey" is required');
    }

    if (!hasOwnProperty(params, 'AttrValue')) {
      throw new TypeError('parameter "AttrValue" is required');
    }

    return this.request('CreateUserAttribute', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {Integer} HeaderType - headerType. optional.
   * @param {Integer} TaxpayerType - taxpayerType. optional.
   * @param {String} Title - title. optional.
   * @param {String} TaxNum - taxNum. optional.
   * @param {String} RegAddress - regAddress. optional.
   * @param {String} RegPhone - regPhone. optional.
   * @param {String} BankName - bankName. optional.
   * @param {String} BankAccount - bankAccount. optional.
   */
  createUserInvoice(params = {}, options = {}) {
    return this.request('CreateUserInvoice', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} BillCycle - billCycle. optional.
   */
  createVmsChildBillInfoOssUrl(params = {}, options = {}) {
    return this.request('CreateVmsChildBillInfoOssUrl', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} BillCycle - billCycle. optional.
   */
  createVmsDetailBillInfoListOssUrl(params = {}, options = {}) {
    return this.request('CreateVmsDetailBillInfoListOssUrl', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} BizType - bizType. optional.
   * @param {Integer} DailyWarningLimit - dailyWarningLimit. optional.
   * @param {Integer} DailyHaltLimit - dailyHaltLimit. optional.
   * @param {Integer} MonthlyWarningLimit - monthlyWarningLimit. optional.
   * @param {Integer} MonthlyHaltLimit - monthlyHaltLimit. optional.
   */
  createWarningThreshold(params = {}, options = {}) {
    return this.request('CreateWarningThreshold', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {Long} Id - id. required.
   */
  deleteAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteAddress', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} BizType - bizType. required.
   */
  deleteMessageCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizType')) {
      throw new TypeError('parameter "BizType" is required');
    }

    return this.request('DeleteMessageCallback', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} QueueType - queueType. optional.
   */
  deleteMessageQueue(params = {}, options = {}) {
    return this.request('DeleteMessageQueue', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   */
  getVmsChildBillFileName(params = {}, options = {}) {
    return this.request('GetVmsChildBillFileName', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} FileName - fileName. optional.
   */
  getVmsChildBillInfoOssUrl(params = {}, options = {}) {
    return this.request('GetVmsChildBillInfoOssUrl', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   */
  queryAcctBalance(params = {}, options = {}) {
    return this.request('QueryAcctBalance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} QueryType - queryType. optional.
   */
  queryAcctVouchers(params = {}, options = {}) {
    return this.request('QueryAcctVouchers', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   */
  queryAlicomBalance(params = {}, options = {}) {
    return this.request('QueryAlicomBalance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   */
  queryAliyunBalance(params = {}, options = {}) {
    return this.request('QueryAliyunBalance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   * @param {Integer} PageSize - PageSize. optional. default: 20.
   */
  queryAliyunVoucherList(params = {}, options = {}) {
    return this.request('QueryAliyunVoucherList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   */
  queryAmountAlarm(params = {}, options = {}) {
    return this.request('QueryAmountAlarm', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} StartDate - startDate. required.
   * @param {String} EndDate - endDate. required.
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryApplyInvoices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryApplyInvoices', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} BillCycle - billCycle. required.
   * @param {String} DrTypes - drTypes. required.
   */
  queryBillDetailUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BillCycle')) {
      throw new TypeError('parameter "BillCycle" is required');
    }

    if (!hasOwnProperty(params, 'DrTypes')) {
      throw new TypeError('parameter "DrTypes" is required');
    }

    return this.request('QueryBillDetailUrl', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   */
  queryBillInvoices(params = {}, options = {}) {
    return this.request('QueryBillInvoices', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   */
  queryCustInfo(params = {}, options = {}) {
    return this.request('QueryCustInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} ItemName - itemName. optional.
   * @param {String} ItemId - itemId. optional.
   * @param {String} SubjectItemId - subjectItemId. optional.
   * @param {String} BillCycle - billCycle. optional.
   */
  queryDailyBillInfoLeaf(params = {}, options = {}) {
    return this.request('QueryDailyBillInfoLeaf', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} StartDate - startDate. optional.
   * @param {String} EndDate - endDate. optional.
   * @param {String} ItemId - itemId. optional.
   */
  queryDayBill(params = {}, options = {}) {
    return this.request('QueryDayBill', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} StartDate - startDate. optional.
   * @param {String} EndDate - endDate. optional.
   * @param {String} ItemId - itemId. optional.
   */
  queryDayBillDownLoadUrl(params = {}, options = {}) {
    return this.request('QueryDayBillDownLoadUrl', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} ItemName - itemName. optional.
   * @param {String} BillId - billId. optional.
   * @param {String} ItemId - itemId. optional.
   * @param {String} SubjectItemId - subjectItemId. optional.
   * @param {String} BillCycle - billCycle. optional.
   */
  queryDayBillInfo(params = {}, options = {}) {
    return this.request('QueryDayBillInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   */
  queryDayuMigrateStatus(params = {}, options = {}) {
    return this.request('QueryDayuMigrateStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {Long} BusiDocId - busiDocId. required.
   * @param {String} InvoiceNo - invoiceNo. required.
   * @param {String} InvoiceCode - invoiceCode. required.
   */
  queryEinvoiceData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BusiDocId')) {
      throw new TypeError('parameter "BusiDocId" is required');
    }

    if (!hasOwnProperty(params, 'InvoiceNo')) {
      throw new TypeError('parameter "InvoiceNo" is required');
    }

    if (!hasOwnProperty(params, 'InvoiceCode')) {
      throw new TypeError('parameter "InvoiceCode" is required');
    }

    return this.request('QueryEinvoiceData', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   */
  queryInvoiceBalance(params = {}, options = {}) {
    return this.request('QueryInvoiceBalance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {Long} BusiDocId - busiDocId. required.
   * @param {String} InvoiceNo - invoiceNo. required.
   * @param {String} InvoiceCode - invoiceCode. required.
   * @param {Long} InvoiceId - invoiceId. optional.
   */
  queryLogisticInvoice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BusiDocId')) {
      throw new TypeError('parameter "BusiDocId" is required');
    }

    if (!hasOwnProperty(params, 'InvoiceNo')) {
      throw new TypeError('parameter "InvoiceNo" is required');
    }

    if (!hasOwnProperty(params, 'InvoiceCode')) {
      throw new TypeError('parameter "InvoiceCode" is required');
    }

    return this.request('QueryLogisticInvoice', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} BizType - bizType. optional.
   * @param {String} CallbackUrl - callbackUrl. optional.
   */
  queryMessageCallback(params = {}, options = {}) {
    return this.request('QueryMessageCallback', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} BizType - bizType. optional.
   */
  queryMessageCallbackInfo(params = {}, options = {}) {
    return this.request('QueryMessageCallbackInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} QueueTypes - queueTypes. optional.
   */
  queryMessageQueue(params = {}, options = {}) {
    return this.request('QueryMessageQueue', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} BillCycle - billCycle. optional.
   * @param {Boolean} IsChildBill - isChildBill. optional.
   */
  queryMonthlyBillDownLoadUrl(params = {}, options = {}) {
    return this.request('QueryMonthlyBillDownLoadUrl', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} BillCycle - billCycle. optional.
   */
  queryMonthlyBillInfo(params = {}, options = {}) {
    return this.request('QueryMonthlyBillInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} ItemName - itemName. optional.
   * @param {String} ItemId - itemId. optional.
   * @param {String} SubjectItemId - subjectItemId. optional.
   * @param {String} BillCycle - billCycle. optional.
   */
  queryMonthlyBillInfoLeaf(params = {}, options = {}) {
    return this.request('QueryMonthlyBillInfoLeaf', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} ItemName - itemName. optional.
   * @param {String} ItemId - itemId. optional.
   * @param {String} SubjectItemId - subjectItemId. optional.
   * @param {String} BillCycle - billCycle. optional.
   */
  queryMonthlyBillInfoLeafALL(params = {}, options = {}) {
    return this.request('QueryMonthlyBillInfoLeafALL', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
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
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} QueryType - queryType. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Status - status. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   */
  queryTransferDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'QueryType')) {
      throw new TypeError('parameter "QueryType" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('QueryTransferDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   */
  queryUserAddressList(params = {}, options = {}) {
    return this.request('QueryUserAddressList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} UserAttBizTypeValue - userAttBizTypeValue. required.
   */
  queryUserAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserAttBizTypeValue')) {
      throw new TypeError('parameter "UserAttBizTypeValue" is required');
    }

    return this.request('QueryUserAttribute', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   */
  queryUserInvoices(params = {}, options = {}) {
    return this.request('QueryUserInvoices', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} BizType - bizType. optional. default: SMS.
   */
  queryWarningThreshold(params = {}, options = {}) {
    return this.request('QueryWarningThreshold', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} Name - name. optional.
   * @param {String} Province - province. optional.
   * @param {String} City - city. optional.
   * @param {String} Area - area. optional.
   * @param {String} Town - town. optional.
   * @param {String} Address - address. optional.
   * @param {String} PostCode - postCode. optional.
   * @param {String} MobilePhone - mobilePhone. optional.
   * @param {String} IsDefault - isDefault. optional.
   * @param {Long} Id - id. required.
   */
  updateAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateAddress', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {Long} Amount - amount. required.
   * @param {Integer} OperType - operType. required.
   */
  updateAmountAlarm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Amount')) {
      throw new TypeError('parameter "Amount" is required');
    }

    if (!hasOwnProperty(params, 'OperType')) {
      throw new TypeError('parameter "OperType" is required');
    }

    return this.request('UpdateAmountAlarm', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {Long} Id - id. required.
   */
  updateDefaultAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateDefaultAddress', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {Long} Id - id. required.
   * @param {Integer} HeaderType - headerType. required.
   * @param {Integer} TaxpayerType - taxpayerType. required.
   * @param {String} Title - title. required.
   * @param {String} TaxNum - taxNum. optional.
   * @param {String} RegAddress - regAddress. optional.
   * @param {String} RegPhone - regPhone. optional.
   * @param {String} BankName - bankName. optional.
   * @param {String} BankAccount - bankAccount. optional.
   */
  updateUserInvoice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'HeaderType')) {
      throw new TypeError('parameter "HeaderType" is required');
    }

    if (!hasOwnProperty(params, 'TaxpayerType')) {
      throw new TypeError('parameter "TaxpayerType" is required');
    }

    if (!hasOwnProperty(params, 'Title')) {
      throw new TypeError('parameter "Title" is required');
    }

    return this.request('UpdateUserInvoice', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: cloudcomm.
   * @param {String} Name - name. optional.
   * @param {String} Province - province. optional.
   * @param {String} City - city. optional.
   * @param {String} Area - area. optional.
   * @param {String} Town - town. optional.
   * @param {String} Address - address. optional.
   * @param {String} PostCode - postCode. optional.
   * @param {String} Numbers - numbers. optional.
   * @param {String} ResultCode - resultCode. optional.
   * @param {String} ResultMsg - resultMsg. optional.
   * @param {Integer} SourceType - sourceType. optional.
   */
  upload170ManageStopData(params = {}, options = {}) {
    return this.request('Upload170ManageStopData', params, options);
  }

}

module.exports = Client;

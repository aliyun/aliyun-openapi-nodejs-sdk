
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-07-03';
    super(config);
  }

  /**
   * @param {Long} AliyunPk - aliyunPk. required.
   * @param {Long} EndUserPk - endUserPk. required.
   * @param {String} DebtQuota - debtQuota. required.
   */
  clearOutstandingBalance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunPk')) {
      throw new TypeError('parameter "AliyunPk" is required');
    }

    if (!hasOwnProperty(params, 'EndUserPk')) {
      throw new TypeError('parameter "EndUserPk" is required');
    }

    if (!hasOwnProperty(params, 'DebtQuota')) {
      throw new TypeError('parameter "DebtQuota" is required');
    }

    return this.request('ClearOutstandingBalance', params, options);
  }

  /**
   * @param {RepeatList} CreateNormalAccountInfoList - createNormalAccountInfoList. required.
   */
  createNormalAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CreateNormalAccountInfoList')) {
      throw new TypeError('parameter "CreateNormalAccountInfoList" is required');
    }

    return this.request('CreateNormalAccount', params, options);
  }

  /**
   * @param {Long} Uid - endUserPk. required.
   * @param {String} DeductAmount - debtQuota. required.
   */
  deductOutstandingBalance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'DeductAmount')) {
      throw new TypeError('parameter "DeductAmount" is required');
    }

    return this.request('DeductOutstandingBalance', params, options);
  }

  /**
   * @param {Long} Uid - uid. optional.
   * @param {String} UserType - userType. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  getAccountInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetAccountInfo', params, options);
  }

  /**
   * @param {Long} AliyunPk - aliyunPk. required.
   * @param {RepeatList} GetAssociationStatusList - getAssociationStatus. required.
   */
  getAssociationStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunPk')) {
      throw new TypeError('parameter "AliyunPk" is required');
    }

    if (!hasOwnProperty(params, 'GetAssociationStatusList')) {
      throw new TypeError('parameter "GetAssociationStatusList" is required');
    }

    return this.request('GetAssociationStatus', params, options);
  }

  /**
   * @param {Long} AliyunPk - aliyunPk. required.
   * @param {Long} BillId - orderNo. required.
   * @param {Long} Hid - userId. required.
   */
  getBillDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunPk')) {
      throw new TypeError('parameter "AliyunPk" is required');
    }

    if (!hasOwnProperty(params, 'BillId')) {
      throw new TypeError('parameter "BillId" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    return this.request('GetBillDetail', params, options);
  }

  /**
   * @param {Long} AliyunPk - aliyunPk. required.
   * @param {Long} RamUid - ramUid. optional.
   * @param {String} InstId - instId. optional.
   * @param {Long} PayStatus - payStatus. optional.
   * @param {String} StartDate - startDate. required.
   * @param {String} EndDate - endDate. required.
   * @param {Integer} IsStronger - isStronger. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  getBillList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunPk')) {
      throw new TypeError('parameter "AliyunPk" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetBillList', params, options);
  }

  /**
   * @param {Long} Uid - endUserPk. required.
   */
  getCreditInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('GetCreditInfo', params, options);
  }

  /**
   * @param {Long} AliyunPk - aliyunPk. required.
   * @param {Long} RamUid - ramUid. optional.
   * @param {String} CustomerName - customerName. optional.
   * @param {String} CustomerAccount - customerAccount. optional.
   * @param {Integer} CustomerStatus - customerStatus. optional.
   * @param {String} Start - start. optional.
   * @param {String} End - end. optional.
   * @param {String} CustomerGcLevel - customerGcLevel. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  getCustomerList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunPk')) {
      throw new TypeError('parameter "AliyunPk" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetCustomerList', params, options);
  }

  /**
   * @param {String} Date - billTime. required.
   * @param {String} BillOwner - userType. required.
   * @param {String} BillType - billType. required.
   */
  getDailyBill(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Date')) {
      throw new TypeError('parameter "Date" is required');
    }

    if (!hasOwnProperty(params, 'BillOwner')) {
      throw new TypeError('parameter "BillOwner" is required');
    }

    if (!hasOwnProperty(params, 'BillType')) {
      throw new TypeError('parameter "BillType" is required');
    }

    return this.request('GetDailyBill', params, options);
  }

  /**
   * @param {Long} AliyunPk - aliyunPk. required.
   * @param {String} BillTime - billTime. required.
   * @param {String} UserType - userType. required.
   * @param {String} BillType - billType. required.
   */
  getDailyBillList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunPk')) {
      throw new TypeError('parameter "AliyunPk" is required');
    }

    if (!hasOwnProperty(params, 'BillTime')) {
      throw new TypeError('parameter "BillTime" is required');
    }

    if (!hasOwnProperty(params, 'UserType')) {
      throw new TypeError('parameter "UserType" is required');
    }

    if (!hasOwnProperty(params, 'BillType')) {
      throw new TypeError('parameter "BillType" is required');
    }

    return this.request('GetDailyBillList', params, options);
  }

  /**
   * @param {Long} AliyunPk - aliyunPk. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} PublicIpAddresse - publicIpAddresse. required.
   * @param {Integer} Tag - tag. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} Ak - ak. required.
   * @param {String} Sk - sk. required.
   */
  getInstanceList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunPk')) {
      throw new TypeError('parameter "AliyunPk" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PublicIpAddresse')) {
      throw new TypeError('parameter "PublicIpAddresse" is required');
    }

    if (!hasOwnProperty(params, 'Tag')) {
      throw new TypeError('parameter "Tag" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'Ak')) {
      throw new TypeError('parameter "Ak" is required');
    }

    if (!hasOwnProperty(params, 'Sk')) {
      throw new TypeError('parameter "Sk" is required');
    }

    return this.request('GetInstanceList', params, options);
  }

  /**
   * @param {RepeatList} InviteStatusList - getAssociationStatus. required.
   */
  getInviteStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InviteStatusList')) {
      throw new TypeError('parameter "InviteStatusList" is required');
    }

    return this.request('GetInviteStatus', params, options);
  }

  /**
   * @param {Long} Uid - uid. required.
   * @param {String} MonthBillTime - monthBillTime. required.
   * @param {String} MonthUserType - monthUserType. required.
   * @param {String} MonthBillType - monthBillType. required.
   */
  getMonthBillList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'MonthBillTime')) {
      throw new TypeError('parameter "MonthBillTime" is required');
    }

    if (!hasOwnProperty(params, 'MonthUserType')) {
      throw new TypeError('parameter "MonthUserType" is required');
    }

    if (!hasOwnProperty(params, 'MonthBillType')) {
      throw new TypeError('parameter "MonthBillType" is required');
    }

    return this.request('GetMonthBillList', params, options);
  }

  /**
   * @param {String} Month - monthBillTime. required.
   * @param {String} BillOwner - monthUserType. required.
   * @param {String} BillType - monthBillType. required.
   */
  getMonthlyBill(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Month')) {
      throw new TypeError('parameter "Month" is required');
    }

    if (!hasOwnProperty(params, 'BillOwner')) {
      throw new TypeError('parameter "BillOwner" is required');
    }

    if (!hasOwnProperty(params, 'BillType')) {
      throw new TypeError('parameter "BillType" is required');
    }

    return this.request('GetMonthlyBill', params, options);
  }

  /**
   * @param {Long} AliyunPk - aliyunPk. required.
   * @param {Long} OrderNo - orderNo. required.
   */
  getOrderDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunPk')) {
      throw new TypeError('parameter "AliyunPk" is required');
    }

    if (!hasOwnProperty(params, 'OrderNo')) {
      throw new TypeError('parameter "OrderNo" is required');
    }

    return this.request('GetOrderDetail', params, options);
  }

  /**
   * @param {Long} AliyunPk - aliyunPk. required.
   * @param {Long} RamUid - ramUid. optional.
   * @param {Long} OrderId - orderId. optional.
   * @param {Long} Status - status. optional.
   * @param {String} StartDate - startDate. required.
   * @param {String} EndDate - endDate. required.
   * @param {Integer} TimeType - timeType. required.
   * @param {Integer} IsStronger - isStronger. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  getOrderList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunPk')) {
      throw new TypeError('parameter "AliyunPk" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    if (!hasOwnProperty(params, 'TimeType')) {
      throw new TypeError('parameter "TimeType" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetOrderList', params, options);
  }

  /**
   * @param {Long} AliyunPk - aliyunPk. required.
   * @param {Long} RamUid - ramUid. optional.
   * @param {String} CustomerName - customerName. optional.
   * @param {String} CustomerAccount - customerAccount. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  getShareAccountList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunPk')) {
      throw new TypeError('parameter "AliyunPk" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetShareAccountList', params, options);
  }

  /**
   * @param {Long} AliyunPk - aliyunPk. required.
   * @param {Long} RamUid - ramUid. optional.
   * @param {String} CustomerName - customerName. optional.
   * @param {String} CustomerAccount - customerAccount. optional.
   * @param {String} ExitOnGoingProject - exitOnGoingProject. optional.
   * @param {String} CustomerType - customerType. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  getShareCustomerList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunPk')) {
      throw new TypeError('parameter "AliyunPk" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetShareCustomerList', params, options);
  }

  /**
   * @param {Long} Uid - uid. optional.
   * @param {String} UserType - userType. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  getSubAccountInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserType')) {
      throw new TypeError('parameter "UserType" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetSubAccountInfo', params, options);
  }

  /**
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  getUnassociatedCustomer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetUnassociatedCustomer', params, options);
  }

  /**
   * @param {RepeatList} AccountInfoList - createNormalAccountInfoList. required.
   */
  inviteSubAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccountInfoList')) {
      throw new TypeError('parameter "AccountInfoList" is required');
    }

    return this.request('InviteSubAccount', params, options);
  }

  /**
   * @param {RepeatList} ReportCustomerInfoList - reportCustomerInfoList. required.
   */
  reportCustomer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReportCustomerInfoList')) {
      throw new TypeError('parameter "ReportCustomerInfoList" is required');
    }

    return this.request('ReportCustomer', params, options);
  }

  /**
   * @param {Long} InviteId - cid. required.
   */
  resendEmail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InviteId')) {
      throw new TypeError('parameter "InviteId" is required');
    }

    return this.request('ResendEmail', params, options);
  }

  /**
   * @param {String} AccountNickname - customNick. optional.
   * @param {String} Remark - fxDescription. optional.
   * @param {Long} Uid - uid. required.
   */
  setAccountInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('SetAccountInfo', params, options);
  }

  /**
   * @param {Long} AliyunPk - aliyunPk. required.
   * @param {Long} EndUserPk - endUserPk. required.
   * @param {String} Quota - quota. required.
   */
  setCreditLimit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunPk')) {
      throw new TypeError('parameter "AliyunPk" is required');
    }

    if (!hasOwnProperty(params, 'EndUserPk')) {
      throw new TypeError('parameter "EndUserPk" is required');
    }

    if (!hasOwnProperty(params, 'Quota')) {
      throw new TypeError('parameter "Quota" is required');
    }

    return this.request('SetCreditLimit', params, options);
  }

  /**
   * @param {Long} Uid - endUserPk. required.
   * @param {Long} CreditStatus - accounStatus. required.
   */
  setCreditLimitStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'CreditStatus')) {
      throw new TypeError('parameter "CreditStatus" is required');
    }

    return this.request('SetCreditLimitStatus', params, options);
  }

  /**
   * @param {Long} Uid - endUserPk. required.
   * @param {String} CreditLine - quota. required.
   */
  setCreditLine(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'CreditLine')) {
      throw new TypeError('parameter "CreditLine" is required');
    }

    return this.request('SetCreditLine', params, options);
  }

  /**
   * @param {Long} Uid - endUserPk. required.
   * @param {Long} CreditStatus - accounStatus. required.
   */
  setCreditStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'CreditStatus')) {
      throw new TypeError('parameter "CreditStatus" is required');
    }

    return this.request('SetCreditStatus', params, options);
  }

  /**
   * @param {Long} Uid - endUserPk. required.
   * @param {String} WarningValue - warningValue. required.
   */
  setWarningThreshold(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'WarningValue')) {
      throw new TypeError('parameter "WarningValue" is required');
    }

    return this.request('SetWarningThreshold', params, options);
  }

  /**
   * @param {Long} Uid - endUserPk. required.
   * @param {String} ShutdownPolicy - shutdownStatus. required.
   */
  setZeroCreditShutdownPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'ShutdownPolicy')) {
      throw new TypeError('parameter "ShutdownPolicy" is required');
    }

    return this.request('SetZeroCreditShutdownPolicy', params, options);
  }

  /**
   * @param {Long} Uid - endUserPk. required.
   * @param {String} ShutdownPolicy - shutdownStatus. required.
   */
  setZeroCreditShutdownStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'ShutdownPolicy')) {
      throw new TypeError('parameter "ShutdownPolicy" is required');
    }

    return this.request('SetZeroCreditShutdownStatus', params, options);
  }

}

module.exports = Client;

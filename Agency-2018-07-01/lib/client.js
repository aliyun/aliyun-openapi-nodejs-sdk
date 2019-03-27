
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-07-01';
    super(config);
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
   * @param {Long} Uid - endUserPk. required.
   */
  getCreditInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('GetCreditInfo', params, options);
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
   * @param {RepeatList} InviteStatusList - getAssociationStatus. required.
   */
  getInviteStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InviteStatusList')) {
      throw new TypeError('parameter "InviteStatusList" is required');
    }

    return this.request('GetInviteStatus', params, options);
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

}

module.exports = Client;

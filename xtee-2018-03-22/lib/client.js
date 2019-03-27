
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-03-22';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Code - serviceParameters.code. required.
   * @param {String} StartDate - startDate. optional.
   * @param {String} EndDate - endDate. optional.
   * @param {String} Degree - degree. optional.
   */
  describeExcuteNum(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Code')) {
      throw new TypeError('parameter "Code" is required');
    }

    return this.request('DescribeExcuteNum', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} actionType - actionType. required.
   */
  describeInitKycFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'actionType')) {
      throw new TypeError('parameter "actionType" is required');
    }

    return this.request('DescribeInitKycFlow', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeKycFlowOssInit(params = {}, options = {}) {
    return this.request('DescribeKycFlowOssInit', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeKycFlowOssUploadCallback(params = {}, options = {}) {
    return this.request('DescribeKycFlowOssUploadCallback', params, options);
  }

  /**
   * @param {String} Service - service. required.
   * @param {String} ServiceParameters - serviceParameters. optional.
   */
  executeRequest(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Service')) {
      throw new TypeError('parameter "Service" is required');
    }

    options.method = 'POST';
    return this.request('ExecuteRequest', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {String} ProductCode - productCode. required.
   * @param {String} BizCode - bizCode. required.
   */
  getUserWarnSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'BizCode')) {
      throw new TypeError('parameter "BizCode" is required');
    }

    return this.request('GetUserWarnSetting', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} actionType - actionType. required.
   * @param {String} companyRegistCountry - companyRegistCountry. optional.
   * @param {String} companyName - companyName. optional.
   * @param {String} companyRegistId - companyRegistId. optional.
   * @param {String} companyRegistAddress - companyRegistAddress. optional.
   * @param {String} companyRegistFile - companyRegistFile. optional.
   * @param {String} accountCertificationType - accountCertificationType. optional.
   * @param {String} certificationFile - certificationFile. optional.
   * @param {String} accountBankCardNo - accountBankCardNo. optional.
   * @param {String} accountBankBillFile - accountBankBillFile. optional.
   */
  kycFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'actionType')) {
      throw new TypeError('parameter "actionType" is required');
    }

    return this.request('KycFlow', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  kycFlowOssInit(params = {}, options = {}) {
    return this.request('KycFlowOssInit', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  kycFlowOssUploadCallback(params = {}, options = {}) {
    return this.request('KycFlowOssUploadCallback', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} actionType - actionType. required.
   * @param {String} companyRegistCountry - companyRegistCountry. optional.
   * @param {String} companyName - companyName. optional.
   * @param {String} companyRegistId - companyRegistId. optional.
   * @param {String} companyRegistAddress - companyRegistAddress. optional.
   * @param {String} companyRegistFile - companyRegistFile. optional.
   * @param {String} accountCertificationType - accountCertificationType. optional.
   * @param {String} certificationFile - certificationFile. optional.
   * @param {String} accountBankCardNo - accountBankCardNo. optional.
   * @param {String} accountBankBillFile - accountBankBillFile. optional.
   */
  kycFlowUpload(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'actionType')) {
      throw new TypeError('parameter "actionType" is required');
    }

    return this.request('KycFlowUpload', params, options);
  }

  /**
   * @param {Long} Id - id. optional.
   * @param {String} GmtSetting - gmtSetting. optional.
   * @param {Long} UserId - userId. required.
   * @param {String} BizCode - bizCode. required.
   * @param {String} ProductCode - productCode. required.
   * @param {Long} Limit - limit. required.
   * @param {Long} WarnNum - warnNum. required.
   * @param {String} Operator - operator. optional.
   * @param {String} Memo - memo. optional.
   */
  setWarnNum(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'BizCode')) {
      throw new TypeError('parameter "BizCode" is required');
    }

    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'Limit')) {
      throw new TypeError('parameter "Limit" is required');
    }

    if (!hasOwnProperty(params, 'WarnNum')) {
      throw new TypeError('parameter "WarnNum" is required');
    }

    return this.request('SetWarnNum', params, options);
  }

}

module.exports = Client;

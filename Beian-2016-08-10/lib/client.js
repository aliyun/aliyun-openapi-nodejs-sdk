
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-08-10';
    super(config);
  }

  /**
   * @param {String} CallId - callId. required.
   * @param {String} ReportNewIPInfoDTO - reportNewIPInfoDTO. required.
   */
  addNewIPReportToGuanju(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CallId')) {
      throw new TypeError('parameter "CallId" is required');
    }

    if (!hasOwnProperty(params, 'ReportNewIPInfoDTO')) {
      throw new TypeError('parameter "ReportNewIPInfoDTO" is required');
    }

    return this.request('AddNewIPReportToGuanju', params, options);
  }

  /**
   * @param {String} Domain - ym. required.
   * @param {Json} Domains - yms. optional.
   * @param {String} Caller - caller. required.
   */
  aliyunL3L4SuccessStatusByYm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    return this.request('AliyunL3L4SuccessStatusByYm', params, options);
  }

  /**
   * @param {String} Domain - ym. required.
   * @param {Json} Domains - yms. optional.
   * @param {String} Caller - caller. optional.
   */
  aliyunSuccessStatusByYm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('AliyunSuccessStatusByYm', params, options);
  }

  /**
   * @param {String} Url - url. optional.
   * @param {String} Message - message. optional.
   * @param {String} GmtWakeup - gmtWakeup. optional.
   * @param {Long} Hid - hid. optional.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. optional.
   * @param {String} Country - country. optional.
   * @param {String} Bid - bid. optional.
   * @param {String} Pk - pk. required.
   * @param {String} Prompt - prompt. optional.
   * @param {Boolean} Success - success. optional.
   * @param {String} TaskExtraData - taskExtraData. optional.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   * @param {Integer} Level - level. optional.
   */
  beiAnAccountCheckResourceDeleteService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    options.method = 'POST';
    return this.request('BeiAnAccountCheckResourceDeleteService', params, options);
  }

  /**
   * @param {String} Invoker - invoker. optional.
   * @param {String} Country - country. optional.
   * @param {String} GmtWakeup - gmtWakeup. optional.
   * @param {Long} Hid - hid. optional.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   * @param {String} Message - message. optional.
   * @param {String} Pk - pk. optional.
   * @param {Boolean} Success - success. optional.
   * @param {String} TaskExtraData - taskExtraData. optional.
   * @param {String} Bid - bid. optional.
   */
  beiAnAccountLogicalDeleteService(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('BeiAnAccountLogicalDeleteService', params, options);
  }

  /**
   * @param {String} Invoker - invoker. optional.
   * @param {String} Country - country. optional.
   * @param {String} GmtWakeup - gmtWakeup. optional.
   * @param {Long} Hid - hid. optional.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Bid - bid. optional.
   * @param {String} Message - message. optional.
   * @param {String} Pk - pk. optional.
   * @param {Boolean} Success - success. optional.
   * @param {String} TaskExtraData - taskExtraData. optional.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   */
  beiAnAccountPhysicalDeleteService(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('BeiAnAccountPhysicalDeleteService', params, options);
  }

  /**
   * @param {String} Domain - ym. optional.
   * @param {Json} Domains - yms. required.
   */
  checkBlacklistDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domains')) {
      throw new TypeError('parameter "Domains" is required');
    }

    return this.request('CheckBlacklistDomain', params, options);
  }

  /**
   * @param {String} CallId - callId. required.
   * @param {String} ReportIPInfo - reportIPInfo. required.
   */
  deleteIPReportToGuanju(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CallId')) {
      throw new TypeError('parameter "CallId" is required');
    }

    if (!hasOwnProperty(params, 'ReportIPInfo')) {
      throw new TypeError('parameter "ReportIPInfo" is required');
    }

    return this.request('DeleteIPReportToGuanju', params, options);
  }

  /**
   * @param {String} Ip - ip. required.
   * @param {String} Remark - remark. optional.
   * @param {Integer} CheckType - checkType. required.
   * @param {String} Caller - caller. required.
   */
  deleteUnbeianIpCheckType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'CheckType')) {
      throw new TypeError('parameter "CheckType" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    return this.request('DeleteUnbeianIpCheckType', params, options);
  }

  /**
   * @param {Json} paramMap - paramMap. required.
   */
  findAliyunIdFromIcpbaBroker(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramMap')) {
      throw new TypeError('parameter "paramMap" is required');
    }

    return this.request('FindAliyunIdFromIcpbaBroker', params, options);
  }

  /**
   * @param {String} Domain - ym. required.
   * @param {Json} Domains - yms. optional.
   * @param {String} Caller - caller. optional.
   */
  getIcpcenterBaseInfoByYM(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('GetIcpcenterBaseInfoByYM', params, options);
  }

  /**
   * @param {String} Domain - ym. required.
   * @param {Json} Domains - yms. optional.
   */
  getIcpcenterDBResultByYM(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('GetIcpcenterDBResultByYM', params, options);
  }

  /**
   * @param {String} Domain - ym. optional.
   * @param {Json} Domains - yms. required.
   */
  getIcpcenterDBResultsByYM(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domains')) {
      throw new TypeError('parameter "Domains" is required');
    }

    return this.request('GetIcpcenterDBResultsByYM', params, options);
  }

  /**
   * @param {String} Domain - ym. required.
   * @param {Json} Domains - yms. optional.
   * @param {String} Caller - caller. required.
   */
  getIcpcenterL3L4InfoByYM(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    return this.request('GetIcpcenterL3L4InfoByYM', params, options);
  }

  /**
   * @param {String} Domain - ym. required.
   * @param {Json} Domains - yms. optional.
   * @param {String} Caller - caller. optional.
   */
  getTopDomainByDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('GetTopDomainByDomain', params, options);
  }

  /**
   * @param {String} Domain - ym. required.
   * @param {Json} Domains - yms. optional.
   * @param {String} Caller - caller. required.
   */
  guanjuStatuByYm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    return this.request('GuanjuStatuByYm', params, options);
  }

  /**
   * @param {String} Ip - ip. required.
   * @param {String} Remark - remark. optional.
   * @param {Integer} CheckType - checkType. required.
   * @param {String} Caller - caller. required.
   */
  insertUnbeianIpCheckType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'CheckType')) {
      throw new TypeError('parameter "CheckType" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    return this.request('InsertUnbeianIpCheckType', params, options);
  }

  /**
   * @param {String} OssPath - ossPath. required.
   * @param {Integer} CommandType - commandType. required.
   * @param {String} EnterpriseId - enterpriseId. required.
   */
  issueCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OssPath')) {
      throw new TypeError('parameter "OssPath" is required');
    }

    if (!hasOwnProperty(params, 'CommandType')) {
      throw new TypeError('parameter "CommandType" is required');
    }

    if (!hasOwnProperty(params, 'EnterpriseId')) {
      throw new TypeError('parameter "EnterpriseId" is required');
    }

    return this.request('IssueCommand', params, options);
  }

  /**
   * @param {String} Domain - ym. required.
   * @param {Json} Domains - yms. optional.
   * @param {String} Caller - caller. optional.
   */
  jiwStatusByYm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('JiwStatusByYm', params, options);
  }

  /**
   * @param {String} CallId - callId. required.
   * @param {String} ReportIPInfo - reportIPInfo. required.
   */
  modifyIPReportToGuanju(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CallId')) {
      throw new TypeError('parameter "CallId" is required');
    }

    if (!hasOwnProperty(params, 'ReportIPInfo')) {
      throw new TypeError('parameter "ReportIPInfo" is required');
    }

    return this.request('ModifyIPReportToGuanju', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} QueryProduct - queryProduct. required.
   * @param {String} Caller - caller. required.
   */
  query5DaysRefundResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'QueryProduct')) {
      throw new TypeError('parameter "QueryProduct" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    return this.request('Query5DaysRefundResult', params, options);
  }

  /**
   * @param {String} CallId - callId. required.
   * @param {String} ReportIPInfo - reportIPInfo. required.
   */
  queryIPReportToGuanju(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CallId')) {
      throw new TypeError('parameter "CallId" is required');
    }

    if (!hasOwnProperty(params, 'ReportIPInfo')) {
      throw new TypeError('parameter "ReportIPInfo" is required');
    }

    return this.request('QueryIPReportToGuanju', params, options);
  }

  /**
   * @param {String} OssPath - ossPath. required.
   */
  uploadReplyCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OssPath')) {
      throw new TypeError('parameter "OssPath" is required');
    }

    return this.request('UploadReplyCommand', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Product - product. required.
   * @param {String} Caller - caller. required.
   */
  queryRefundResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Product')) {
      throw new TypeError('parameter "Product" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    return this.request('queryRefundResult', params, options);
  }

}

module.exports = Client;

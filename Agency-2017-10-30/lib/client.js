
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-10-30';
    super(config);
  }

  /**
   * @param {String} invoker - invoker. required.
   * @param {Boolean} interrupt - interrupt. optional.
   * @param {String} pk - pk. required.
   * @param {String} accountTraceId - accountTraceId. required.
   * @param {String} emailTemplate - emailTemplate. optional.
   * @param {String} emailTemplateParamsJsonString - emailTemplateParamsJsonString. optional.
   * @param {String} smsTemplate - smsTemplate. optional.
   * @param {String} smsTemplateParamsJsonString - smsTemplateParamsJsonString. optional.
   */
  doDefineRegisterNotification(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'invoker')) {
      throw new TypeError('parameter "invoker" is required');
    }

    if (!hasOwnProperty(params, 'pk')) {
      throw new TypeError('parameter "pk" is required');
    }

    if (!hasOwnProperty(params, 'accountTraceId')) {
      throw new TypeError('parameter "accountTraceId" is required');
    }

    return this.request('DoDefineRegisterNotification', params, options);
  }

  /**
   * @param {Long} Uid - uid. required.
   */
  findAvailableInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('FindAvailableInstances', params, options);
  }

  /**
   * @param {Long} Uid - uid. required.
   * @param {String} Month - month. required.
   */
  getMonthDetailLink(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Month')) {
      throw new TypeError('parameter "Month" is required');
    }

    return this.request('GetMonthDetailLink', params, options);
  }

  /**
   * @param {Long} Uid - uid. required.
   */
  queryFxUserDebts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('QueryFxUserDebts', params, options);
  }

  /**
   * @param {Integer} TansferScene - tansferScene. required.
   * @param {String} TransferUid - transferUid. required.
   */
  transferFxResellerToUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TansferScene')) {
      throw new TypeError('parameter "TansferScene" is required');
    }

    if (!hasOwnProperty(params, 'TransferUid')) {
      throw new TypeError('parameter "TransferUid" is required');
    }

    return this.request('TransferFxResellerToUser', params, options);
  }

  /**
   * @param {Integer} TansferScene - tansferScene. required.
   * @param {String} ParentUid - parentUid. required.
   * @param {String} TransferUid - transferUid. required.
   * @param {Integer} ShutdownStatus - shutdownStatus. required.
   * @param {Integer} QuotaAmount - quotaAmount. required.
   */
  transferFxUserToReseller(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TansferScene')) {
      throw new TypeError('parameter "TansferScene" is required');
    }

    if (!hasOwnProperty(params, 'ParentUid')) {
      throw new TypeError('parameter "ParentUid" is required');
    }

    if (!hasOwnProperty(params, 'TransferUid')) {
      throw new TypeError('parameter "TransferUid" is required');
    }

    if (!hasOwnProperty(params, 'ShutdownStatus')) {
      throw new TypeError('parameter "ShutdownStatus" is required');
    }

    if (!hasOwnProperty(params, 'QuotaAmount')) {
      throw new TypeError('parameter "QuotaAmount" is required');
    }

    return this.request('TransferFxUserToReseller', params, options);
  }

  /**
   * @param {Integer} TansferScene - tansferScene. required.
   * @param {String} ParentUid - parentUid. required.
   * @param {String} TransferUid - transferUid. required.
   * @param {Integer} ShutdownStatus - shutdownStatus. required.
   * @param {Integer} QuotaAmount - quotaAmount. required.
   * @param {String} OperaterOrganization - operaterOrganization. required.
   * @param {String} Operater - operater. required.
   * @param {String} OperaterEmpid - operaterEmpid. required.
   * @param {String} OperateReason - operateReason. required.
   */
  transferReplaceReseller(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TansferScene')) {
      throw new TypeError('parameter "TansferScene" is required');
    }

    if (!hasOwnProperty(params, 'ParentUid')) {
      throw new TypeError('parameter "ParentUid" is required');
    }

    if (!hasOwnProperty(params, 'TransferUid')) {
      throw new TypeError('parameter "TransferUid" is required');
    }

    if (!hasOwnProperty(params, 'ShutdownStatus')) {
      throw new TypeError('parameter "ShutdownStatus" is required');
    }

    if (!hasOwnProperty(params, 'QuotaAmount')) {
      throw new TypeError('parameter "QuotaAmount" is required');
    }

    if (!hasOwnProperty(params, 'OperaterOrganization')) {
      throw new TypeError('parameter "OperaterOrganization" is required');
    }

    if (!hasOwnProperty(params, 'Operater')) {
      throw new TypeError('parameter "Operater" is required');
    }

    if (!hasOwnProperty(params, 'OperaterEmpid')) {
      throw new TypeError('parameter "OperaterEmpid" is required');
    }

    if (!hasOwnProperty(params, 'OperateReason')) {
      throw new TypeError('parameter "OperateReason" is required');
    }

    return this.request('TransferReplaceReseller', params, options);
  }

  /**
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
  doCheckResource(params = {}, options = {}) {
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

    return this.request('doCheckResource', params, options);
  }

}

module.exports = Client;

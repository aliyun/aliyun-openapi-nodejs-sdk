
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-12-07';
    super(config);
  }

  /**
   * @param {Long} AppId - appId. required.
   * @param {Integer} Duration - duration. required.
   * @param {Boolean} IsAutoPay - isAutoPay. required.
   */
  appDeferOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'Duration')) {
      throw new TypeError('parameter "Duration" is required');
    }

    if (!hasOwnProperty(params, 'IsAutoPay')) {
      throw new TypeError('parameter "IsAutoPay" is required');
    }

    return this.request('AppDeferOrder', params, options);
  }

  /**
   * @param {Integer} Duration - duration. required.
   * @param {Boolean} IsAutoPay - isAutoPay. required.
   * @param {String} SuiteType - suiteType. required.
   * @param {String} BId - bid. optional. default: ace4eweb.
   */
  appOrderEweb(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Duration')) {
      throw new TypeError('parameter "Duration" is required');
    }

    if (!hasOwnProperty(params, 'IsAutoPay')) {
      throw new TypeError('parameter "IsAutoPay" is required');
    }

    if (!hasOwnProperty(params, 'SuiteType')) {
      throw new TypeError('parameter "SuiteType" is required');
    }

    return this.request('AppOrderEweb', params, options);
  }

  /**
   * @param {Long} AppId - appId. required.
   */
  appRestart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('AppRestart', params, options);
  }

  /**
   * @param {Long} AppId - appId. required.
   */
  appStart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('AppStart', params, options);
  }

  /**
   * @param {Long} AppId - appId. required.
   */
  appStop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('AppStop', params, options);
  }

  /**
   * @param {Long} AppId - appId. required.
   * @param {String} NewPassword - newPassword. required.
   */
  changeFtpPasswd(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'NewPassword')) {
      throw new TypeError('parameter "NewPassword" is required');
    }

    return this.request('ChangeFtpPasswd', params, options);
  }

  /**
   * @param {Long} AppId - appId. required.
   */
  checkAppState(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('CheckAppState', params, options);
  }

  /**
   * @param {String} OrderId - orderId. required.
   */
  checkOrderState(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    return this.request('CheckOrderState', params, options);
  }

  /**
   * @param {String} AppId - appId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   */
  describeAppLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeAppLogs', params, options);
  }

  /**
   * @param {Long} AppId - appId. required.
   */
  domainBeianIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DomainBeianIp', params, options);
  }

  /**
   * @param {Long} AppId - appId. required.
   * @param {String} OutterDomain - outterDomain. required.
   */
  domainBind(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'OutterDomain')) {
      throw new TypeError('parameter "OutterDomain" is required');
    }

    return this.request('DomainBind', params, options);
  }

  /**
   * @param {Long} AppId - appId. required.
   * @param {String} OutterDomain - outterDomain. required.
   */
  domainCheck(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'OutterDomain')) {
      throw new TypeError('parameter "OutterDomain" is required');
    }

    return this.request('DomainCheck', params, options);
  }

  /**
   * @param {Long} AppId - appId. required.
   * @param {String} OutterDomain - outterDomain. required.
   */
  domainUnbind(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'OutterDomain')) {
      throw new TypeError('parameter "OutterDomain" is required');
    }

    return this.request('DomainUnbind', params, options);
  }

  /**
   * @param {Long} AppId - appId. required.
   */
  getAppInfoByAppId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('GetAppInfoByAppId', params, options);
  }

  /**
   * @param {String} OrderId - orderId. required.
   */
  getAppInfoByOrderId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    return this.request('GetAppInfoByOrderId', params, options);
  }

  /**
   * @param {Long} AppId - appId. required.
   */
  getDiskInfoByAppId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('GetDiskInfoByAppId', params, options);
  }

  /**
   * @param {String} BId - bid. optional. default: ace4eweb.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageNo - pageNo. required.
   */
  getEwebAppInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    return this.request('GetEwebAppInfo', params, options);
  }

  /**
   * @param {Long} AppId - appId. required.
   */
  getFtpInfoByAppId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('GetFtpInfoByAppId', params, options);
  }

  /**
   * @param {Long} AppId - appId. required.
   */
  getIndexInfoByAppId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('GetIndexInfoByAppId', params, options);
  }

  /**
   * @param {Long} AppId - appId. required.
   * @param {String} Item - item. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} CurPage - curPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  getMonitorData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'Item')) {
      throw new TypeError('parameter "Item" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('GetMonitorData', params, options);
  }

  /**
   * @param {Long} AppId - appId. required.
   */
  getRdsExtend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('GetRdsExtend', params, options);
  }

  /**
   * @param {Long} AppId - appId. required.
   * @param {String} HomePages - homePages. required.
   */
  setIndexInfoByAppId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'HomePages')) {
      throw new TypeError('parameter "HomePages" is required');
    }

    return this.request('SetIndexInfoByAppId', params, options);
  }

}

module.exports = Client;

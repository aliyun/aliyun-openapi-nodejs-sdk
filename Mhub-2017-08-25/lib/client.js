
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-08-25';
    super(config);
  }

  /**
   * @param {String} AppKey - appKey. required.
   * @param {String} OsType - osType. optional. default: 2.
   */
  buildSDKConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('BuildSDKConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} ProductId - ProductId. required.
   * @param {String} Name - name. required.
   * @param {Integer} Type - type. optional.
   * @param {String} BundleId - bundleId. optional.
   * @param {String} PackageName - packageName. optional.
   */
  createApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductId')) {
      throw new TypeError('parameter "ProductId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateApp', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Name - name. required.
   * @param {Integer} IndustryId - industryId. optional.
   * @param {String} IconName - iconName. optional.
   * @param {String} EncodedIcon - encodedIcon. optional.
   */
  createProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateProduct', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppKey - appKey. required.
   */
  deleteApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('DeleteApp', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} ProductId - productId. required.
   */
  deleteProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductId')) {
      throw new TypeError('parameter "ProductId" is required');
    }

    return this.request('DeleteProduct', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} TaskId - taskId. required.
   */
  downloadPackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('DownloadPackage', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} ProductId - productId. required.
   * @param {String} Page - page. optional. default: 1.
   * @param {String} PageSize - pageSize. optional. default: 100.
   */
  listApps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductId')) {
      throw new TypeError('parameter "ProductId" is required');
    }

    return this.request('ListApps', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   * @param {Boolean} Simple - simple. optional.
   */
  listProducts(params = {}, options = {}) {
    return this.request('ListProducts', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppKey - appKey. required.
   * @param {String} Name - name. optional.
   * @param {Integer} IndustryId - industryId. optional.
   * @param {String} BundleId - bundleId. optional.
   * @param {String} PackageName - packageName. optional.
   */
  modifyApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('ModifyApp', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} ProductId - productId. required.
   * @param {String} Name - name. required.
   * @param {Integer} IndustryId - industryId. optional.
   * @param {String} EncodedIcon - encodedIcon. optional.
   * @param {String} IconName - iconName. optional.
   * @param {Boolean} RemoveIcon - removeIcon. optional.
   */
  modifyProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductId')) {
      throw new TypeError('parameter "ProductId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('ModifyProduct', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} ProductID - productID. required.
   * @param {String} OS - os. required.
   */
  packSDK(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductID')) {
      throw new TypeError('parameter "ProductID" is required');
    }

    if (!hasOwnProperty(params, 'OS')) {
      throw new TypeError('parameter "OS" is required');
    }

    return this.request('PackSDK', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppKey - appKey. required.
   */
  queryAppInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('QueryAppInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppKey - appKey. required.
   */
  queryAppSecurityInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('QueryAppSecurityInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} ProductID - productID. required.
   */
  queryLastestVersionInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductID')) {
      throw new TypeError('parameter "ProductID" is required');
    }

    return this.request('QueryLastestVersionInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  queryPackHistories(params = {}, options = {}) {
    return this.request('QueryPackHistories', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} TaskId - taskId. required.
   */
  queryPackInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('QueryPackInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} ProductId - productId. required.
   */
  queryProductInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductId')) {
      throw new TypeError('parameter "ProductId" is required');
    }

    return this.request('QueryProductInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  queryUserNoticeStatus(params = {}, options = {}) {
    return this.request('QueryUserNoticeStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} ProductID - productID. required.
   * @param {String} OS - os. required.
   */
  queryVersionInfos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductID')) {
      throw new TypeError('parameter "ProductID" is required');
    }

    if (!hasOwnProperty(params, 'OS')) {
      throw new TypeError('parameter "OS" is required');
    }

    return this.request('QueryVersionInfos', params, options);
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
  spiCheckResource(params = {}, options = {}) {
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

    return this.request('SpiCheckResource', params, options);
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
   */
  spiLogicalDeleteResource(params = {}, options = {}) {
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

    return this.request('SpiLogicalDeleteResource', params, options);
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
   */
  spiPhysicalDeleteResource(params = {}, options = {}) {
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

    return this.request('SpiPhysicalDeleteResource', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} Mode - mode. required.
   * @param {String} DeviceToken - deviceToken. required.
   * @param {String} BundleId - bundleId. required.
   * @param {String} EncodedCert - encodedCert. optional.
   * @param {String} Password - password. optional.
   */
  testFlight(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'Mode')) {
      throw new TypeError('parameter "Mode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceToken')) {
      throw new TypeError('parameter "DeviceToken" is required');
    }

    if (!hasOwnProperty(params, 'BundleId')) {
      throw new TypeError('parameter "BundleId" is required');
    }

    return this.request('TestFlight', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} CertMode - certMode. required.
   * @param {String} EncodedCert - encodedCert. required.
   * @param {String} Password - password. required.
   * @param {String} BundleId - bundleId. required.
   * @param {Boolean} IsCommit - isCommit. required.
   */
  verifyCert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'CertMode')) {
      throw new TypeError('parameter "CertMode" is required');
    }

    if (!hasOwnProperty(params, 'EncodedCert')) {
      throw new TypeError('parameter "EncodedCert" is required');
    }

    if (!hasOwnProperty(params, 'Password')) {
      throw new TypeError('parameter "Password" is required');
    }

    if (!hasOwnProperty(params, 'BundleId')) {
      throw new TypeError('parameter "BundleId" is required');
    }

    if (!hasOwnProperty(params, 'IsCommit')) {
      throw new TypeError('parameter "IsCommit" is required');
    }

    return this.request('VerifyCert', params, options);
  }

}

module.exports = Client;

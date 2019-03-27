
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-02-01';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppName - appName. required.
   * @param {Integer} IndustryId - industryId. optional.
   * @param {String} Description - description. optional.
   */
  createApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('CreateApp', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppName - appName. required.
   * @param {Integer} IndustryId - industryId. optional.
   * @param {String} Description - description. optional.
   * @param {Integer} Visible - visible. optional.
   */
  createCloudApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('CreateCloudApp', params, options);
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
   */
  listApps(params = {}, options = {}) {
    return this.request('ListApps', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppKey - appKey. required.
   * @param {String} AppName - appName. optional.
   * @param {Integer} IndustryId - industryId. optional.
   * @param {String} Description - description. optional.
   */
  modifyApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('ModifyApp', params, options);
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
   * @param {String} AppKey - appKey. required.
   */
  queryAppStatistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('QueryAppStatistics', params, options);
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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppKey - appKey. required.
   */
  resetAppSecret(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('ResetAppSecret', params, options);
  }

}

module.exports = Client;

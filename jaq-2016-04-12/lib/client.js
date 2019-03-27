
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-04-12';
    super(config);
  }

  /**
   * @param {String} AppInfoBatch - appInfoBatch. required.
   */
  batchScanMalware(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppInfoBatch')) {
      throw new TypeError('parameter "AppInfoBatch" is required');
    }

    return this.request('BatchScanMalware', params, options);
  }

  /**
   * @param {String} AppInfoBatch - appInfoBatch. required.
   */
  batchScanPlugin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppInfoBatch')) {
      throw new TypeError('parameter "AppInfoBatch" is required');
    }

    return this.request('BatchScanPlugin', params, options);
  }

  /**
   * @param {String} AppInfo - appInfo. required.
   * @param {String} Channel - channel. optional.
   * @param {String} Enhance - enhance. optional.
   */
  diyShield(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppInfo')) {
      throw new TypeError('parameter "AppInfo" is required');
    }

    return this.request('DiyShield', params, options);
  }

  /**
   * @param {String} ItemId - itemId. required.
   * @param {String} Language - language. optional.
   * @param {String} Country - country. optional.
   */
  getRiskDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ItemId')) {
      throw new TypeError('parameter "ItemId" is required');
    }

    return this.request('GetRiskDetail', params, options);
  }

  /**
   * @param {String} ItemId - itemId. required.
   * @param {String} Language - language. optional.
   * @param {String} Country - country. optional.
   */
  getRiskDetail4Batch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ItemId')) {
      throw new TypeError('parameter "ItemId" is required');
    }

    return this.request('GetRiskDetail4Batch', params, options);
  }

  /**
   * @param {String} ItemId - itemId. required.
   */
  getRiskSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ItemId')) {
      throw new TypeError('parameter "ItemId" is required');
    }

    return this.request('GetRiskSummary', params, options);
  }

  /**
   * @param {String} ItemId - itemId. required.
   */
  getShieldResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ItemId')) {
      throw new TypeError('parameter "ItemId" is required');
    }

    return this.request('GetShieldResult', params, options);
  }

  /**
   * @param {String} AppInfo - appInfo. required.
   * @param {String} ExtParam - extParam. optional.
   */
  scanFake(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppInfo')) {
      throw new TypeError('parameter "AppInfo" is required');
    }

    return this.request('ScanFake', params, options);
  }

  /**
   * @param {String} AppInfo - appInfo. required.
   * @param {String} ExtParam - extParam. optional.
   */
  scanMalware(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppInfo')) {
      throw new TypeError('parameter "AppInfo" is required');
    }

    return this.request('ScanMalware', params, options);
  }

  /**
   * @param {String} AppInfo - appInfo. required.
   * @param {String} ExtParam - extParam. optional.
   */
  scanVuln(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppInfo')) {
      throw new TypeError('parameter "AppInfo" is required');
    }

    return this.request('ScanVuln', params, options);
  }

  /**
   * @param {String} AppInfo - appInfo. required.
   * @param {String} Channel - channel. optional.
   */
  shield(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppInfo')) {
      throw new TypeError('parameter "AppInfo" is required');
    }

    return this.request('Shield', params, options);
  }

}

module.exports = Client;

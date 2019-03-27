
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2019-01-25';
    super(config);
  }

  /**
   * @param {String} FssIdType - fssIdType. required.
   * @param {String} FssId - fssId. required.
   * @param {String} FssReportType - fssReportType. required.
   * @param {String} FssAccessKey - fssAccessKey. required.
   * @param {String} FssSign - fssSign. required.
   */
  getReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FssIdType')) {
      throw new TypeError('parameter "FssIdType" is required');
    }

    if (!hasOwnProperty(params, 'FssId')) {
      throw new TypeError('parameter "FssId" is required');
    }

    if (!hasOwnProperty(params, 'FssReportType')) {
      throw new TypeError('parameter "FssReportType" is required');
    }

    if (!hasOwnProperty(params, 'FssAccessKey')) {
      throw new TypeError('parameter "FssAccessKey" is required');
    }

    if (!hasOwnProperty(params, 'FssSign')) {
      throw new TypeError('parameter "FssSign" is required');
    }

    options.method = 'POST';
    return this.request('GetReport', params, options);
  }

  /**
   */
  getSoftwareFilePatternUrl(params = {}, options = {}) {
    return this.request('GetSoftwareFilePatternUrl', params, options);
  }

  /**
   * @param {String} FssRequestId - fssRequestId. optional.
   * @param {String} FssTaskUUID - fssTaskUUID. optional.
   * @param {String} FssResult - fssResult. optional.
   * @param {String} FssReportUrl - fssReportUrl. optional.
   * @param {String} FssNotifyType - fssNotifyType. optional.
   * @param {String} FssNotifyInterface - fssNotifyInterface. optional.
   */
  notifyScanResult(params = {}, options = {}) {
    return this.request('NotifyScanResult', params, options);
  }

  /**
   * @param {RepeatList} FileList - fileList. required.
   */
  querySoftwareVuln(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileList')) {
      throw new TypeError('parameter "FileList" is required');
    }

    return this.request('QuerySoftwareVuln', params, options);
  }

  /**
   * @param {String} FssVendor - fssVendor. required.
   * @param {String} FssProduct - fssProduct. required.
   * @param {String} FssVersion - fssVersion. required.
   * @param {String} FssUrl - fssUrl. required.
   * @param {String} FssAccessKey - fssAccessKey. required.
   * @param {String} FssRescan - fssRescan. required.
   * @param {String} FssNotifyType - fssNotifyType. optional.
   * @param {String} FssNotifyInterface - fssNotifyInterface. optional.
   * @param {String} FssSign - fssSign. required.
   */
  scanFirmware(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FssVendor')) {
      throw new TypeError('parameter "FssVendor" is required');
    }

    if (!hasOwnProperty(params, 'FssProduct')) {
      throw new TypeError('parameter "FssProduct" is required');
    }

    if (!hasOwnProperty(params, 'FssVersion')) {
      throw new TypeError('parameter "FssVersion" is required');
    }

    if (!hasOwnProperty(params, 'FssUrl')) {
      throw new TypeError('parameter "FssUrl" is required');
    }

    if (!hasOwnProperty(params, 'FssAccessKey')) {
      throw new TypeError('parameter "FssAccessKey" is required');
    }

    if (!hasOwnProperty(params, 'FssRescan')) {
      throw new TypeError('parameter "FssRescan" is required');
    }

    if (!hasOwnProperty(params, 'FssSign')) {
      throw new TypeError('parameter "FssSign" is required');
    }

    options.method = 'POST';
    return this.request('ScanFirmware', params, options);
  }

}

module.exports = Client;

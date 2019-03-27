
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-08-24';
    super(config);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} DomainNames - domainNames. optional.
   * @param {String} ScanLabel - scanLabel. optional.
   * @param {String} MarkLabel - markLabel. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  describeCdnImagePornScanData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeCdnImagePornScanData', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} DomainNames - domainNames. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  describeCdnImagePornStatData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeCdnImagePornStatData', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} DomainNames - domainNames. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  exportCdnImagePornScanViolationData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('ExportCdnImagePornScanViolationData', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Ids - ids. required.
   * @param {String} MarkLabel - markLabel. required.
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  markCdnImagePornData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    if (!hasOwnProperty(params, 'MarkLabel')) {
      throw new TypeError('parameter "MarkLabel" is required');
    }

    return this.request('MarkCdnImagePornData', params, options);
  }

}

module.exports = Client;

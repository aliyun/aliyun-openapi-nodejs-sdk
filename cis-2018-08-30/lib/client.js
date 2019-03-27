
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-08-30';
    super(config);
  }

  /**
   * @param {String} ClusterUid - clusterUid. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ClusterRegionId - clusterRegionId. required.
   */
  createClusterOverviewReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterUid')) {
      throw new TypeError('parameter "ClusterUid" is required');
    }

    if (!hasOwnProperty(params, 'ClusterRegionId')) {
      throw new TypeError('parameter "ClusterRegionId" is required');
    }

    return this.request('CreateClusterOverviewReport', params, options);
  }

  /**
   * @param {String} ClusterUid - clusterUid. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ClusterRegionId - clusterRegionId. optional.
   */
  getClusterBasicInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterUid')) {
      throw new TypeError('parameter "ClusterUid" is required');
    }

    return this.request('GetClusterBasicInfo', params, options);
  }

  /**
   * @param {String} ReportUid - reportUid. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ClusterRegionId - clusterRegionId. optional.
   */
  getClusterConfigurationCheckResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReportUid')) {
      throw new TypeError('parameter "ReportUid" is required');
    }

    return this.request('GetClusterConfigurationCheckResult', params, options);
  }

  /**
   * @param {String} ReportUid - reportUid. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ClusterRegionId - clusterRegionId. optional.
   */
  getClusterOverviewReportSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReportUid')) {
      throw new TypeError('parameter "ReportUid" is required');
    }

    return this.request('GetClusterOverviewReportSummary', params, options);
  }

  /**
   * @param {String} ReportUid - reportUid. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ClusterRegionId - clusterRegionId. optional.
   */
  getClusterResourceCheckResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReportUid')) {
      throw new TypeError('parameter "ReportUid" is required');
    }

    return this.request('GetClusterResourceCheckResult', params, options);
  }

  /**
   * @param {String} ClusterUid - clusterUid. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} PageNo - pageNo. optional.
   * @param {String} PageSize - pageSize. optional.
   * @param {String} ClusterRegionId - clusterRegionId. optional.
   */
  listClusterOverviewReportSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterUid')) {
      throw new TypeError('parameter "ClusterUid" is required');
    }

    return this.request('ListClusterOverviewReportSummary', params, options);
  }

}

module.exports = Client;


'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-11-09';
    super(config);
  }

  /**
   * @param {String} TenantId - tenantId. optional.
   * @param {String} OdpsProject - odpsProject. optional.
   * @param {String} AliyunAccountId - aliyunAccountId. optional.
   * @param {String} OdpsProject - odpsProject. optional.
   * @param {String} CrowdId - crowdId. optional.
   * @param {String} CrowdName - crowdName. optional.
   * @param {String} CrowdTableName - crowdTableName. optional.
   * @param {Json} BrandIdList - brandIdList. optional.
   */
  pushCrowd(params = {}, options = {}) {
    return this.request('PushCrowd', params, options);
  }

  /**
   * @param {String} TenantId - tenantId. optional.
   * @param {String} OdpsProject - odpsProject. optional.
   * @param {String} AliyunAccountId - aliyunAccountId. optional.
   * @param {String} RequestId - requestId. optional.
   */
  queryAccountBrand(params = {}, options = {}) {
    return this.request('QueryAccountBrand', params, options);
  }

  /**
   * @param {String} TenantId - tenantId. optional.
   * @param {String} OdpsProject - odpsProject. optional.
   * @param {String} AliyunAccountId - aliyunAccountId. optional.
   * @param {String} CrowdId - crowdId. optional.
   */
  queryAnalysisReport(params = {}, options = {}) {
    return this.request('QueryAnalysisReport', params, options);
  }

  /**
   * @param {String} TenantId - tenantId. optional.
   * @param {String} OdpsProject - odpsProject. optional.
   * @param {String} AliyunAccountId - aliyunAccountId. optional.
   * @param {String} CrowdId - crowdId. optional.
   */
  queryCrowdInsightFileUrl(params = {}, options = {}) {
    return this.request('QueryCrowdInsightFileUrl', params, options);
  }

  /**
   * @param {String} TenantId - tenantId. optional.
   * @param {String} OdpsProject - odpsProject. optional.
   * @param {String} AliyunAccountId - aliyunAccountId. optional.
   * @param {String} TaskId - taskId. optional.
   */
  queryTaskProcess(params = {}, options = {}) {
    return this.request('QueryTaskProcess', params, options);
  }

}

module.exports = Client;

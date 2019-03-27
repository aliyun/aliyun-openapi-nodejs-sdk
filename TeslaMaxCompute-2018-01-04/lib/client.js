
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-01-04';
    super(config);
  }

  /**
   * @param {String} Cluster - cluster. required.
   * @param {Integer} PageNum - page_num. required.
   * @param {Integer} PageSize - page_size. required.
   * @param {String} Status - status. optional.
   * @param {String} Region - region. optional.
   */
  getClusterInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Cluster')) {
      throw new TypeError('parameter "Cluster" is required');
    }

    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetClusterInstance', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Cluster - cluster. optional.
   * @param {String} QuotaName - quota_name. optional.
   * @param {String} QuotaId - quota_id. optional.
   */
  getInstancesStatusCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    return this.request('GetInstancesStatusCount', params, options);
  }

  /**
   * @param {String} Project - project. required.
   * @param {Integer} PageNum - page_num. required.
   * @param {Integer} PageSize - page_size. required.
   * @param {String} Status - status. optional.
   * @param {String} Region - region. optional.
   */
  getProjectInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetProjectInstance', params, options);
  }

  /**
   * @param {String} Cluster - cluster. required.
   * @param {Integer} EndTime - etime. required.
   * @param {String} QuotaName - quota_name. required.
   * @param {String} Region - region. optional.
   * @param {Integer} StartTime - stime. required.
   */
  getQuotaHistoryInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Cluster')) {
      throw new TypeError('parameter "Cluster" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'QuotaName')) {
      throw new TypeError('parameter "QuotaName" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    return this.request('GetQuotaHistoryInfo', params, options);
  }

  /**
   * @param {String} Cluster - cluster. required.
   * @param {String} QuotaId - quota_id. optional.
   * @param {Integer} PageNum - page_num. required.
   * @param {Integer} PageSize - page_size. required.
   * @param {String} Status - status. optional.
   * @param {String} Region - region. optional.
   * @param {String} QuotaName - quota_name. optional.
   */
  getQuotaInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Cluster')) {
      throw new TypeError('parameter "Cluster" is required');
    }

    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetQuotaInstance', params, options);
  }

  /**
   * @param {String} User - user. required.
   * @param {Integer} PageNum - page_num. required.
   * @param {Integer} PageSize - page_size. required.
   * @param {String} Status - status. optional.
   * @param {String} Region - region. optional.
   */
  getUserInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'User')) {
      throw new TypeError('parameter "User" is required');
    }

    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetUserInstance', params, options);
  }

  /**
   */
  listUserQuotas(params = {}, options = {}) {
    return this.request('ListUserQuotas', params, options);
  }

  /**
   * @param {String} RegionName - region. optional.
   */
  queryCustomerSaleInfo(params = {}, options = {}) {
    return this.request('QueryCustomerSaleInfo', params, options);
  }

  /**
   */
  queryResourceInventory(params = {}, options = {}) {
    return this.request('QueryResourceInventory', params, options);
  }

  /**
   */
  queryTopology(params = {}, options = {}) {
    return this.request('QueryTopology', params, options);
  }

}

module.exports = Client;

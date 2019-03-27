
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-11-30';
    super(config);
  }

  /**
   * @param {String} Cluster - cluster. required.
   * @param {Integer} PageNum - page_num. required.
   * @param {Integer} PageSize - page_size. required.
   * @param {String} Status - status. optional.
   */
  getClusterInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Cluster')) {
      throw new TypeError('parameter "Cluster" is required');
    }

    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetClusterInfo', params, options);
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
   */
  getProjectInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetProjectInfo', params, options);
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
   * @param {String} QuotaId - quota_id. required.
   * @param {Integer} PageNum - page_num. required.
   * @param {Integer} PageSize - page_size. required.
   * @param {String} Status - status. optional.
   */
  getQuotaInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Cluster')) {
      throw new TypeError('parameter "Cluster" is required');
    }

    if (!hasOwnProperty(params, 'QuotaId')) {
      throw new TypeError('parameter "QuotaId" is required');
    }

    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetQuotaInfo', params, options);
  }

  /**
   * @param {String} Cluster - cluster. required.
   * @param {String} QuotaId - quota_id. required.
   * @param {Integer} PageNum - page_num. required.
   * @param {Integer} PageSize - page_size. required.
   * @param {String} Status - status. optional.
   */
  getQuotaInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Cluster')) {
      throw new TypeError('parameter "Cluster" is required');
    }

    if (!hasOwnProperty(params, 'QuotaId')) {
      throw new TypeError('parameter "QuotaId" is required');
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
   */
  getUserInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'User')) {
      throw new TypeError('parameter "User" is required');
    }

    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetUserInfo', params, options);
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

}

module.exports = Client;

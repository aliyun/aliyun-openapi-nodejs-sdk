
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-05-24';
    super(config);
  }

  /**
   * @param {String} opAccountName - opAccountName. optional. default: unknow.
   * @param {String} accountName - accountName. optional. default: unknow.
   * @param {Long} reportId - reportId. required.
   */
  cRDeleteReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'reportId')) {
      throw new TypeError('parameter "reportId" is required');
    }

    options.method = 'POST';
    return this.request('CRDeleteReport', params, options);
  }

  /**
   * @param {String} opAccountName - opAccountName. optional. default: unknow.
   * @param {String} accountName - accountName. optional. default: unknow.
   * @param {Long} reportId - reportId. required.
   */
  cRGetReportDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'reportId')) {
      throw new TypeError('parameter "reportId" is required');
    }

    return this.request('CRGetReportDetail', params, options);
  }

  /**
   * @param {String} opAccountName - opAccountName. optional. default: unknow.
   * @param {String} accountName - accountName. optional. default: unknow.
   * @param {String} tableGroup - tableGroup. required.
   * @param {Integer} currentPage - currentPage. required.
   * @param {Integer} pageSize - pageSize. required.
   */
  cRGetReportList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'tableGroup')) {
      throw new TypeError('parameter "tableGroup" is required');
    }

    if (!hasOwnProperty(params, 'currentPage')) {
      throw new TypeError('parameter "currentPage" is required');
    }

    if (!hasOwnProperty(params, 'pageSize')) {
      throw new TypeError('parameter "pageSize" is required');
    }

    return this.request('CRGetReportList', params, options);
  }

  /**
   * @param {String} opAccountName - opAccountName. optional. default: unknow.
   * @param {String} accountName - accountName. optional. default: unknow.
   * @param {String} tableGroup - tableGroup. required.
   */
  cRGetTableGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'tableGroup')) {
      throw new TypeError('parameter "tableGroup" is required');
    }

    return this.request('CRGetTableGroup', params, options);
  }

  /**
   * @param {String} opAccountName - opAccountName. optional. default: unknow.
   * @param {String} accountName - accountName. optional. default: unknow.
   * @param {Long} tableId - tableId. required.
   */
  cRGetTableTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'tableId')) {
      throw new TypeError('parameter "tableId" is required');
    }

    return this.request('CRGetTableTemplate', params, options);
  }

  /**
   * @param {String} opAccountName - opAccountName. optional. default: unkown.
   * @param {String} accountName - accountName. optional. default: unkown.
   */
  cRGetVersion(params = {}, options = {}) {
    return this.request('CRGetVersion', params, options);
  }

  /**
   * @param {String} opAccountName - opAccountName. optional. default: unknow.
   * @param {String} accountName - accountName. optional. default: unknow.
   * @param {Long} tableId - tableId. required.
   * @param {String} queryCriteria - queryCriteria. required.
   * @param {Long} limitSize - limitSize. required.
   */
  cRPreviewReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'tableId')) {
      throw new TypeError('parameter "tableId" is required');
    }

    if (!hasOwnProperty(params, 'queryCriteria')) {
      throw new TypeError('parameter "queryCriteria" is required');
    }

    if (!hasOwnProperty(params, 'limitSize')) {
      throw new TypeError('parameter "limitSize" is required');
    }

    return this.request('CRPreviewReport', params, options);
  }

  /**
   * @param {String} opAccountName - opAccountName. optional. default: unknow.
   * @param {String} accountName - accountName. optional. default: unknow.
   * @param {Long} reportId - reportId. required.
   * @param {Long} limitSize - limitSize. optional. default: 0.
   */
  cRQueryReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'reportId')) {
      throw new TypeError('parameter "reportId" is required');
    }

    return this.request('CRQueryReport', params, options);
  }

  /**
   * @param {String} opAccountName - opAccountName. optional. default: unknow.
   * @param {String} accountName - accountName. optional. default: unknow.
   * @param {Long} reportId - reportId. required.
   * @param {Long} tableId - tableId. required.
   * @param {String} reportName - reportName. required.
   * @param {String} reportTag - reportTag. required.
   * @param {String} queryCriteria - queryCriteria. required.
   */
  cRSaveReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'reportId')) {
      throw new TypeError('parameter "reportId" is required');
    }

    if (!hasOwnProperty(params, 'tableId')) {
      throw new TypeError('parameter "tableId" is required');
    }

    if (!hasOwnProperty(params, 'reportName')) {
      throw new TypeError('parameter "reportName" is required');
    }

    if (!hasOwnProperty(params, 'reportTag')) {
      throw new TypeError('parameter "reportTag" is required');
    }

    if (!hasOwnProperty(params, 'queryCriteria')) {
      throw new TypeError('parameter "queryCriteria" is required');
    }

    options.method = 'POST';
    return this.request('CRSaveReport', params, options);
  }

}

module.exports = Client;

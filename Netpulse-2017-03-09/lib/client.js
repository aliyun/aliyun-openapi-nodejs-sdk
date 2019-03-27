
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-03-09';
    super(config);
  }

  /**
   * @param {String} GroupByField - groupByField. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} FilterField - filterField. optional.
   * @param {String} FilterValue - filterValue. optional.
   */
  getDist(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupByField')) {
      throw new TypeError('parameter "GroupByField" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('GetDist', params, options);
  }

  /**
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} PeakGt - peakGt. required.
   * @param {String} CurrentPage - currentPage. required.
   * @param {String} PageSize - pageSize. required.
   */
  getReports(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'PeakGt')) {
      throw new TypeError('parameter "PeakGt" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetReports', params, options);
  }

}

module.exports = Client;


'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-11-11';
    super(config);
  }

  /**
   * @param {String} AppToken - appToken. required.
   * @param {Long} DatasetId - datasetId. required.
   * @param {String} Sign - sign. optional.
   * @param {Integer} PageNum - page. optional.
   * @param {Integer} PageSize - sizePerPage. optional.
   * @param {Boolean} NeedTotalCount - needTotalCount. optional.
   * @param {String} FilterQueryJsonParam - filterQueryJsonParam. optional.
   * @param {String} OrderByField - orderByField. optional.
   * @param {String} OrderBy - orderBy. optional.
   */
  queryDataByPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppToken')) {
      throw new TypeError('parameter "AppToken" is required');
    }

    if (!hasOwnProperty(params, 'DatasetId')) {
      throw new TypeError('parameter "DatasetId" is required');
    }

    return this.request('QueryDataByPop', params, options);
  }

}

module.exports = Client;

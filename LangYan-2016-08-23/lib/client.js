
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-08-23';
    super(config);
  }

  /**
   * @param {String} Cassify - classify. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNum - pageNum. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  getFaultInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetFaultInfo', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  getFaultInfoID(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetFaultInfoID', params, options);
  }

}

module.exports = Client;

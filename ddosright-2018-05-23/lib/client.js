
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-05-23';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} RightName - rightName. optional.
   * @param {Integer} CurrentPage - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Integer} RightStatus - status. optional.
   */
  describeUserRights(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeUserRights', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} UserRightId - userRightId. required.
   */
  withdrawUserRight(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserRightId')) {
      throw new TypeError('parameter "UserRightId" is required');
    }

    return this.request('WithdrawUserRight', params, options);
  }

}

module.exports = Client;

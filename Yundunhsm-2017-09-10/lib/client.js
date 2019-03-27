
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-09-10';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {String} RegionNo - regionNo. optional.
   */
  describeInstance(params = {}, options = {}) {
    return this.request('DescribeInstance', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {String} RegionNo - regionNo. optional.
   */
  queryInstance(params = {}, options = {}) {
    return this.request('QueryInstance', params, options);
  }

}

module.exports = Client;

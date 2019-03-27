
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-12-21';
    super(config);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} AliUid - aliUid. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {RepeatList} InstanceIdList - instanceIds. optional.
   * @param {RepeatList} IpList - vips. optional.
   */
  describeInstancePage(params = {}, options = {}) {
    return this.request('DescribeInstancePage', params, options);
  }

}

module.exports = Client;

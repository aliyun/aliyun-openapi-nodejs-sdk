
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-04-28';
    super(config);
  }

  /**
   */
  queryEventCount(params = {}, options = {}) {
    return this.request('QueryEventCount', params, options);
  }

  /**
   * @param {RepeatList} InstanceIdList - instanceIdList. required.
   * @param {String} EcsRegionId - ecsRegionId. optional.
   */
  queryOverviewCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceIdList')) {
      throw new TypeError('parameter "InstanceIdList" is required');
    }

    return this.request('QueryOverviewCount', params, options);
  }

  /**
   * @param {String} RequestId - RequestId. required.
   */
  queryOverviewList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequestId')) {
      throw new TypeError('parameter "RequestId" is required');
    }

    return this.request('QueryOverviewList', params, options);
  }

}

module.exports = Client;

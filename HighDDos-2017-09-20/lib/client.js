
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-09-20';
    super(config);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Long} EndDateMillis - endDateMillis. optional.
   * @param {String} Domain - domain. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Long} StartDateMillis - startDateMillis. optional.
   * @param {Integer} Page - page. optional.
   */
  describeCcEvents(params = {}, options = {}) {
    return this.request('DescribeCcEvents', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Long} EndDateMillis - endDateMillis. optional.
   * @param {String} Domain - domain. optional.
   * @param {Long} StartDateMillis - startDateMillis. optional.
   */
  describeCcFlow(params = {}, options = {}) {
    return this.request('DescribeCcFlow', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} EndDateMillis - endDateMillis. optional.
   * @param {Long} StartDateMillis - startDateMillis. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} Page - page. optional.
   * @param {String} Ip - vip. optional.
   */
  describeDdosEvents(params = {}, options = {}) {
    return this.request('DescribeDdosEvents', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} EndDateMillis - endDateMillis. optional.
   * @param {String} StartDateMillis - startDateMillis. optional.
   * @param {String} Ip - vip. optional.
   */
  describeDdosFlow(params = {}, options = {}) {
    return this.request('DescribeDdosFlow', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - orderInstanceId. required.
   */
  describeDomainList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeDomainList', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  describeSimpleInstanceList(params = {}, options = {}) {
    return this.request('DescribeSimpleInstanceList', params, options);
  }

}

module.exports = Client;

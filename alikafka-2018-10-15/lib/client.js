
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-10-15';
    super(config);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {String} RegionId - _regionId. required.
   */
  createConsumerGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    options.method = 'POST';
    return this.request('CreateConsumerGroup', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Topic - topic. required.
   * @param {String} Remark - remark. required.
   * @param {String} RegionId - _regionId. required.
   * @param {Integer} OrderType - orderType. optional.
   */
  createTopic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    if (!hasOwnProperty(params, 'Remark')) {
      throw new TypeError('parameter "Remark" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    options.method = 'POST';
    return this.request('CreateTopic', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RegionId - _regionId. required.
   * @param {String} CurrentPage - currentPage. optional. default: 1.
   * @param {String} PageSize - pageSize. optional. default: 10000.
   */
  getConsumerList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    options.method = 'POST';
    return this.request('GetConsumerList', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {String} RegionId - _regionId. required.
   */
  getConsumerProgress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    options.method = 'POST';
    return this.request('GetConsumerProgress', params, options);
  }

  /**
   * @param {String} RegionId - _regionId. required.
   */
  getInstanceList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    options.method = 'POST';
    return this.request('GetInstanceList', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CurrentPage - currentPage. optional. default: 1.
   * @param {String} PageSize - pageSize. optional. default: 10000.
   * @param {String} RegionId - _regionId. optional.
   */
  getTopicList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    options.method = 'POST';
    return this.request('GetTopicList', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Topic - topic. required.
   */
  getTopicStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    options.method = 'POST';
    return this.request('GetTopicStatus', params, options);
  }

}

module.exports = Client;

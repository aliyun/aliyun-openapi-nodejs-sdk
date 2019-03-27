
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-12-30';
    super(config);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} access_key_id - AccessKeyId. optional.
   * @param {String} InstanceName - InstanceName. required.
   */
  deleteInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceName')) {
      throw new TypeError('parameter "InstanceName" is required');
    }

    options.method = 'POST';
    return this.request('DeleteInstance', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} access_key_id - AccessKeyId. optional.
   * @param {String} InstanceName - InstanceName. required.
   * @param {RepeatList} TagInfo - TagList. optional.
   */
  deleteTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceName')) {
      throw new TypeError('parameter "InstanceName" is required');
    }

    options.method = 'POST';
    return this.request('DeleteTags', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} access_key_id - AccessKeyId. optional.
   * @param {String} InstanceName - InstanceName. required.
   */
  getInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceName')) {
      throw new TypeError('parameter "InstanceName" is required');
    }

    return this.request('GetInstance', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} access_key_id - AccessKeyId. optional.
   * @param {String} InstanceName - InstanceName. required.
   * @param {String} ClusterType - ClusterType. optional.
   * @param {String} Description - Description. optional.
   * @param {RepeatList} TagInfo - TagList. optional.
   */
  insertInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceName')) {
      throw new TypeError('parameter "InstanceName" is required');
    }

    options.method = 'POST';
    return this.request('InsertInstance', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} access_key_id - AccessKeyId. optional.
   * @param {String} InstanceName - InstanceName. required.
   * @param {RepeatList} TagInfo - TagList. optional.
   */
  insertTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceName')) {
      throw new TypeError('parameter "InstanceName" is required');
    }

    options.method = 'POST';
    return this.request('InsertTags', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} access_key_id - AccessKeyId. optional.
   * @param {Long} PageNum - PageNum. optional.
   * @param {Long} PageSize - PageSize. optional.
   * @param {RepeatList} TagInfo - TagList. optional.
   */
  listInstance(params = {}, options = {}) {
    return this.request('ListInstance', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} access_key_id - AccessKeyId. optional.
   * @param {String} InstanceName - InstanceName. optional.
   * @param {Long} PageNum - PageNum. optional.
   * @param {Long} PageSize - PageSize. optional.
   * @param {RepeatList} TagInfo - TagList. optional.
   */
  listTags(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('ListTags', params, options);
  }

}

module.exports = Client;

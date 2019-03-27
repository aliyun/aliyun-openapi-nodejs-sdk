
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-10-26';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceName - InstanceName. required.
   */
  getInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceName')) {
      throw new TypeError('parameter "InstanceName" is required');
    }

    return this.request('GetInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceName - InstanceName. required.
   * @param {String} ClusterType - ClusterType. optional.
   * @param {String} Description - Description. optional.
   */
  insertInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceName')) {
      throw new TypeError('parameter "InstanceName" is required');
    }

    options.method = 'POST';
    return this.request('InsertInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   */
  listInstance(params = {}, options = {}) {
    return this.request('ListInstance', params, options);
  }

}

module.exports = Client;

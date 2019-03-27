
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2013-09-12';
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
   */
  deleteUser(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('DeleteUser', params, options);
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
   */
  getUser(params = {}, options = {}) {
    return this.request('GetUser', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceName - InstanceName. required.
   * @param {String} ClusterName - ClusterName. optional.
   * @param {Integer} WriteCapacity - WriteCapacity. optional.
   * @param {Integer} ReadCapacity - ReadCapacity. optional.
   * @param {Integer} EntityQuota - EntityQuota. optional.
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
   * @param {Integer} InstanceQuota - InstanceQuota. optional.
   * @param {String} Description - Description. optional.
   */
  insertUser(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('InsertUser', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   */
  listInstance(params = {}, options = {}) {
    return this.request('ListInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceName - InstanceName. required.
   * @param {Integer} WriteCapacity - WriteCapacity. optional.
   * @param {Integer} ReadCapacity - ReadCapacity. optional.
   * @param {Integer} EntityQuota - EntityQuota. optional.
   * @param {String} Description - Description. optional.
   */
  updateInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceName')) {
      throw new TypeError('parameter "InstanceName" is required');
    }

    options.method = 'POST';
    return this.request('UpdateInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Integer} InstanceQuota - InstanceQuota. optional.
   * @param {String} Description - Description. optional.
   */
  updateUser(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('UpdateUser', params, options);
  }

}

module.exports = Client;

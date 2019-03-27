
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-06-03';
    super(config);
  }

  /**
   * @param {String} TOKEN - _token_. optional. default: bl0kuL9n0KBz35d2.
   * @param {String} RegionId - RegionId. required.
   * @param {String} PackageId - PackageId. required.
   */
  createInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'PackageId')) {
      throw new TypeError('parameter "PackageId" is required');
    }

    options.method = 'POST';
    return this.request('CreateInstance', params, options);
  }

  /**
   * @param {String} TOKEN - _token_. optional. default: bl0kuL9n0KBz35d2.
   * @param {String} RegionId - RegionId. required.
   * @param {String} InstanceId - InstanceId. required.
   */
  deleteInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    options.method = 'POST';
    return this.request('DeleteInstance', params, options);
  }

  /**
   * @param {String} TOKEN - _token_. optional. default: bl0kuL9n0KBz35d2.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} InstanceType - instanceType. optional.
   */
  describeInstances(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('DescribeInstances', params, options);
  }

  /**
   * @param {String} TOKEN - _token_. optional. default: bl0kuL9n0KBz35d2.
   * @param {String} InstanceId - HpcInstanceId. required.
   * @param {String} NewPassword - Password. required.
   */
  modifyJumpserverPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'NewPassword')) {
      throw new TypeError('parameter "NewPassword" is required');
    }

    options.method = 'POST';
    return this.request('ModifyJumpserverPassword', params, options);
  }

  /**
   * @param {String} TOKEN - _token_. optional. default: bl0kuL9n0KBz35d2.
   * @param {String} RegionId - RegionId. optional. default: cn-hangzhou.
   * @param {String} InstanceId - HpcInstanceId. required.
   */
  rebootInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    options.method = 'POST';
    return this.request('RebootInstance', params, options);
  }

  /**
   * @param {String} TOKEN - _token_. optional. default: bl0kuL9n0KBz35d2.
   * @param {String} RegionId - RegionId. optional. default: cn-hangzhou.
   * @param {String} InstanceId - HpcInstanceId. required.
   * @param {Integer} Force - force. optional.
   */
  rebootJumpserver(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    options.method = 'POST';
    return this.request('RebootJumpserver', params, options);
  }

  /**
   * @param {String} TOKEN - _token_. optional. default: bl0kuL9n0KBz35d2.
   * @param {String} RegionId - RegionId. optional. default: cn-hangzhou.
   * @param {String} InstanceId - HpcInstanceId. required.
   * @param {Integer} Force - force. optional.
   */
  startJumpserver(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    options.method = 'POST';
    return this.request('StartJumpserver', params, options);
  }

  /**
   * @param {String} TOKEN - _token_. optional. default: bl0kuL9n0KBz35d2.
   * @param {String} RegionId - RegionId. optional. default: cn-hangzhou.
   * @param {String} InstanceId - HpcInstanceId. required.
   * @param {Integer} Force - force. optional.
   */
  stopJumpserver(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    options.method = 'POST';
    return this.request('StopJumpserver', params, options);
  }

}

module.exports = Client;

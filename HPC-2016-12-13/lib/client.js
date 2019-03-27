
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-12-13';
    super(config);
  }

  /**
   * @param {String} TOKEN - _token_. optional. default: bl0kuL9n0KBz35d2.
   * @param {String} RegionId - regionId. required.
   * @param {String} SourceIp - SourceIp. required.
   * @param {String} Policy - Policy. optional. default: accept.
   * @param {String} Priority - Priority. required.
   * @param {String} NicType - LocalIPType. optional. default: intranet.
   */
  authorizeSecurityGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SourceIp')) {
      throw new TypeError('parameter "SourceIp" is required');
    }

    if (!hasOwnProperty(params, 'Priority')) {
      throw new TypeError('parameter "Priority" is required');
    }

    options.method = 'POST';
    return this.request('AuthorizeSecurityGroup', params, options);
  }

  /**
   * @param {String} TOKEN - _token_. optional. default: bl0kuL9n0KBz35d2.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceId - InstanceId. optional.
   * @param {String} InstanceType - InstanceType. optional.
   */
  describeInstances(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('DescribeInstances', params, options);
  }

  /**
   * @param {String} TOKEN - _token_. optional. default: bl0kuL9n0KBz35d2.
   * @param {String} RegionId - regionId. required.
   */
  describeInstancesInSecurityGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    options.method = 'POST';
    return this.request('DescribeInstancesInSecurityGroup', params, options);
  }

  /**
   * @param {String} TOKEN - _token_. optional. default: bl0kuL9n0KBz35d2.
   * @param {String} RegionId - regionId. required.
   * @param {String} NicType - LocalIPType. optional. default: intranet.
   */
  describeSecurityGroupAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    options.method = 'POST';
    return this.request('DescribeSecurityGroupAttribute', params, options);
  }

  /**
   * @param {String} TOKEN - _token_. optional. default: bl0kuL9n0KBz35d2.
   * @param {String} RegionId - regionId. optional. default: cn-beijing.
   * @param {String} InstanceId - HpcInstanceId. required.
   * @param {String} NewPassword - Password. required.
   */
  modifyInstancePassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'NewPassword')) {
      throw new TypeError('parameter "NewPassword" is required');
    }

    options.method = 'POST';
    return this.request('ModifyInstancePassword', params, options);
  }

  /**
   * @param {String} TOKEN - _token_. optional. default: bl0kuL9n0KBz35d2.
   * @param {String} RegionId - regionId. optional.
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
   * @param {String} RegionId - regionId. optional.
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
   * @param {String} RegionId - regionId. optional.
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
   * @param {String} RegionId - regionId. required.
   * @param {String} SourceIp - SourceIp. required.
   * @param {String} Policy - Policy. optional. default: accept.
   * @param {String} Priority - Priority. required.
   * @param {String} NicType - LocalIPType. optional. default: intranet.
   */
  revokeSecurityGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SourceIp')) {
      throw new TypeError('parameter "SourceIp" is required');
    }

    if (!hasOwnProperty(params, 'Priority')) {
      throw new TypeError('parameter "Priority" is required');
    }

    options.method = 'POST';
    return this.request('RevokeSecurityGroup', params, options);
  }

  /**
   * @param {String} TOKEN - _token_. optional. default: bl0kuL9n0KBz35d2.
   * @param {String} RegionId - regionId. optional.
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
   * @param {String} RegionId - regionId. optional.
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


'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-01-11';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} VpcId - vpcInstanceId. required.
   * @param {String} VSwitchId - vSwitchId. required.
   * @param {String} Ip - ip. required.
   */
  configNetwork(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'VSwitchId')) {
      throw new TypeError('parameter "VSwitchId" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('ConfigNetwork', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} WhiteList - whiteList. required.
   */
  configWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'WhiteList')) {
      throw new TypeError('parameter "WhiteList" is required');
    }

    return this.request('ConfigWhiteList', params, options);
  }

  /**
   * @param {String} ClientToken - clientToken. required.
   * @param {Integer} Period - duration. optional. default: 1.
   * @param {String} PeriodUnit - pricingCycle. optional. default: Month.
   * @param {String} HsmDeviceType - hsmDeviceType. required.
   * @param {String} HsmOem - hsmOem. required.
   * @param {String} ZoneId - zoneNo. required.
   * @param {Integer} Quantity - quantity. optional. default: 1.
   * @param {String} ResourceOwnerId - ownerId. optional.
   */
  createInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'HsmDeviceType')) {
      throw new TypeError('parameter "HsmDeviceType" is required');
    }

    if (!hasOwnProperty(params, 'HsmOem')) {
      throw new TypeError('parameter "HsmOem" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    return this.request('CreateInstance', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {Integer} CurrentPage - currentPage. optional. default: 1.
   * @param {Integer} HsmStatus - status. optional.
   * @param {String} InstanceId - instanceId. optional.
   */
  describeInstances(params = {}, options = {}) {
    return this.request('DescribeInstances', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Remark - remark. required.
   */
  modifyInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Remark')) {
      throw new TypeError('parameter "Remark" is required');
    }

    return this.request('ModifyInstance', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ResourceOwnerId - ownerId. optional.
   */
  releaseInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ReleaseInstance', params, options);
  }

  /**
   * @param {String} ClientToken - clientToken. required.
   * @param {Integer} Period - duration. optional. default: 1.
   * @param {String} PeriodUnit - pricingCycle. optional. default: Month.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ResourceOwnerId - ownerId. optional.
   */
  renewInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('RenewInstance', params, options);
  }

}

module.exports = Client;

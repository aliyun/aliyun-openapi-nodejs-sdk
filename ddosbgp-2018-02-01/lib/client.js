
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-02-01';
    super(config);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {Integer} Type - type. required.
   * @param {String} RegionCode - region. required.
   * @param {Integer} IpCount - ipCount. required.
   * @param {Integer} BaseBandwidth - baseBandwidth. required.
   * @param {Integer} ElasticBandwidth - bandwidth. required.
   * @param {Integer} Duration - duration. required.
   * @param {Integer} Quantity - quantity. required.
   * @param {Boolean} AutoRenew - autoRenew. optional. default: false.
   * @param {Integer} AutoRenewPeriod - autoRenewPeriod. optional.
   */
  createInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'RegionCode')) {
      throw new TypeError('parameter "RegionCode" is required');
    }

    if (!hasOwnProperty(params, 'IpCount')) {
      throw new TypeError('parameter "IpCount" is required');
    }

    if (!hasOwnProperty(params, 'BaseBandwidth')) {
      throw new TypeError('parameter "BaseBandwidth" is required');
    }

    if (!hasOwnProperty(params, 'ElasticBandwidth')) {
      throw new TypeError('parameter "ElasticBandwidth" is required');
    }

    if (!hasOwnProperty(params, 'Duration')) {
      throw new TypeError('parameter "Duration" is required');
    }

    if (!hasOwnProperty(params, 'Quantity')) {
      throw new TypeError('parameter "Quantity" is required');
    }

    return this.request('CreateInstances', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} Duration - duration. required.
   */
  renewInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Duration')) {
      throw new TypeError('parameter "Duration" is required');
    }

    return this.request('RenewInstance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} IpCount - ipCount. required.
   * @param {Integer} BaseBandwidth - baseBandwidth. required.
   * @param {Integer} ElasticBandwidth - bandwidth. required.
   */
  upgradeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'IpCount')) {
      throw new TypeError('parameter "IpCount" is required');
    }

    if (!hasOwnProperty(params, 'BaseBandwidth')) {
      throw new TypeError('parameter "BaseBandwidth" is required');
    }

    if (!hasOwnProperty(params, 'ElasticBandwidth')) {
      throw new TypeError('parameter "ElasticBandwidth" is required');
    }

    return this.request('UpgradeInstance', params, options);
  }

}

module.exports = Client;

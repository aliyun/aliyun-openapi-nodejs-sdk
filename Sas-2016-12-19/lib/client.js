
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-12-19';
    super(config);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {Integer} Duration - duration. required.
   * @param {String} PricingCycle - pricingCycle. required.
   * @param {String} VersionCode - versionCode. required.
   * @param {Integer} BuyNumber - buyNumber. required.
   * @param {Boolean} IsAutoRenew - autoRenew. optional.
   * @param {Integer} AutoRenewDuration - autoRenewPeriod. optional.
   */
  createInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'Duration')) {
      throw new TypeError('parameter "Duration" is required');
    }

    if (!hasOwnProperty(params, 'PricingCycle')) {
      throw new TypeError('parameter "PricingCycle" is required');
    }

    if (!hasOwnProperty(params, 'VersionCode')) {
      throw new TypeError('parameter "VersionCode" is required');
    }

    if (!hasOwnProperty(params, 'BuyNumber')) {
      throw new TypeError('parameter "BuyNumber" is required');
    }

    return this.request('CreateInstance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   */
  getInstanceCount(params = {}, options = {}) {
    return this.request('GetInstanceCount', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  refundInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('RefundInstance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} Duration - duration. required.
   * @param {String} PricingCycle - pricingCycle. required.
   * @param {Integer} BuyNumber - buyNumber. required.
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

    if (!hasOwnProperty(params, 'PricingCycle')) {
      throw new TypeError('parameter "PricingCycle" is required');
    }

    if (!hasOwnProperty(params, 'BuyNumber')) {
      throw new TypeError('parameter "BuyNumber" is required');
    }

    return this.request('RenewInstance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} VersionCode - versionCode. required.
   * @param {Integer} BuyNumber - buyNumber. required.
   */
  upgradeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'VersionCode')) {
      throw new TypeError('parameter "VersionCode" is required');
    }

    if (!hasOwnProperty(params, 'BuyNumber')) {
      throw new TypeError('parameter "BuyNumber" is required');
    }

    return this.request('UpgradeInstance', params, options);
  }

}

module.exports = Client;

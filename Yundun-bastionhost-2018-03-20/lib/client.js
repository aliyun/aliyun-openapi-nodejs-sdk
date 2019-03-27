
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-03-20';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} CommodityCode - commodityCode. optional. default: bastionhost.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CustomName - customName. required.
   */
  modifyCustomName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CustomName')) {
      throw new TypeError('parameter "CustomName" is required');
    }

    return this.request('ModifyCustomName', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} CommodityCode - commodityCode. optional. default: bastionhost.
   * @param {String} InstanceId - instanceId. required.
   */
  modifyPlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyPlan', params, options);
  }

}

module.exports = Client;

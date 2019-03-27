
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-04-11';
    super(config);
  }

  /**
   * @param {String} RefundType - refundType. required.
   * @param {RepeatList} OrderId - orderIds. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CommodityCode - commodityCode. required.
   */
  refundCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RefundType')) {
      throw new TypeError('parameter "RefundType" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CommodityCode')) {
      throw new TypeError('parameter "CommodityCode" is required');
    }

    options.method = 'POST';
    return this.request('RefundCallback', params, options);
  }

}

module.exports = Client;

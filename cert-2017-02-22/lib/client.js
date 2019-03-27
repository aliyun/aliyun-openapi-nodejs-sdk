
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-02-22';
    super(config);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {String} CommodityCode - commodityCode. optional.
   * @param {String} OrderType - orderType. optional.
   * @param {Integer} Duration - duration. required.
   * @param {String} PricingCycle - pricingCycle. optional.
   * @param {String} Brand - brand. required.
   * @param {String} CertType - certType. required.
   * @param {Integer} DomainCount - domainCount. required.
   * @param {String} DomainType - domainType. required.
   */
  vBizOrderSuccessCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'Duration')) {
      throw new TypeError('parameter "Duration" is required');
    }

    if (!hasOwnProperty(params, 'Brand')) {
      throw new TypeError('parameter "Brand" is required');
    }

    if (!hasOwnProperty(params, 'CertType')) {
      throw new TypeError('parameter "CertType" is required');
    }

    if (!hasOwnProperty(params, 'DomainCount')) {
      throw new TypeError('parameter "DomainCount" is required');
    }

    if (!hasOwnProperty(params, 'DomainType')) {
      throw new TypeError('parameter "DomainType" is required');
    }

    return this.request('VBizOrderSuccessCallback', params, options);
  }

}

module.exports = Client;

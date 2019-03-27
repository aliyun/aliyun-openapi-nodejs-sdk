
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
   * @param {String} PurchaseProduct - product. required.
   * @param {String} PurchaseVersion - version. required.
   * @param {String} PurchaseApiName - apiName. required.
   */
  apiReadyToSell(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PurchaseProduct')) {
      throw new TypeError('parameter "PurchaseProduct" is required');
    }

    if (!hasOwnProperty(params, 'PurchaseVersion')) {
      throw new TypeError('parameter "PurchaseVersion" is required');
    }

    if (!hasOwnProperty(params, 'PurchaseApiName')) {
      throw new TypeError('parameter "PurchaseApiName" is required');
    }

    return this.request('ApiReadyToSell', params, options);
  }

  /**
   * @param {String} PurchaseProduct - product. required.
   * @param {String} PurchaseVersion - version. required.
   * @param {String} PurchaseApiName - apiName. required.
   */
  describePurchasedApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PurchaseProduct')) {
      throw new TypeError('parameter "PurchaseProduct" is required');
    }

    if (!hasOwnProperty(params, 'PurchaseVersion')) {
      throw new TypeError('parameter "PurchaseVersion" is required');
    }

    if (!hasOwnProperty(params, 'PurchaseApiName')) {
      throw new TypeError('parameter "PurchaseApiName" is required');
    }

    return this.request('DescribePurchasedApi', params, options);
  }

  /**
   * @param {String} PurchaseProduct - product. required.
   * @param {String} PurchaseVersion - version. required.
   * @param {String} PurchaseApiName - apiName. required.
   * @param {Long} Quota - quota. required.
   * @param {String} ServiceDate - serviceDate. optional.
   * @param {String} BillingType - billingType. required.
   * @param {String} OrgCode - orgCode. optional.
   * @param {String} Channel - channel. required.
   */
  purchaseApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PurchaseProduct')) {
      throw new TypeError('parameter "PurchaseProduct" is required');
    }

    if (!hasOwnProperty(params, 'PurchaseVersion')) {
      throw new TypeError('parameter "PurchaseVersion" is required');
    }

    if (!hasOwnProperty(params, 'PurchaseApiName')) {
      throw new TypeError('parameter "PurchaseApiName" is required');
    }

    if (!hasOwnProperty(params, 'Quota')) {
      throw new TypeError('parameter "Quota" is required');
    }

    if (!hasOwnProperty(params, 'BillingType')) {
      throw new TypeError('parameter "BillingType" is required');
    }

    if (!hasOwnProperty(params, 'Channel')) {
      throw new TypeError('parameter "Channel" is required');
    }

    return this.request('PurchaseApi', params, options);
  }

  /**
   * @param {String} PurchaseProduct - product. required.
   * @param {String} PurchaseVersion - version. required.
   * @param {String} PurchaseApiName - apiName. required.
   * @param {String} Channel - channel. required.
   */
  resumePurchasedApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PurchaseProduct')) {
      throw new TypeError('parameter "PurchaseProduct" is required');
    }

    if (!hasOwnProperty(params, 'PurchaseVersion')) {
      throw new TypeError('parameter "PurchaseVersion" is required');
    }

    if (!hasOwnProperty(params, 'PurchaseApiName')) {
      throw new TypeError('parameter "PurchaseApiName" is required');
    }

    if (!hasOwnProperty(params, 'Channel')) {
      throw new TypeError('parameter "Channel" is required');
    }

    return this.request('ResumePurchasedApi', params, options);
  }

  /**
   * @param {String} PurchaseProduct - product. required.
   * @param {String} PurchaseVersion - version. required.
   * @param {String} PurchaseApiName - apiName. required.
   * @param {String} Channel - channel. required.
   */
  stopPurchasedApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PurchaseProduct')) {
      throw new TypeError('parameter "PurchaseProduct" is required');
    }

    if (!hasOwnProperty(params, 'PurchaseVersion')) {
      throw new TypeError('parameter "PurchaseVersion" is required');
    }

    if (!hasOwnProperty(params, 'PurchaseApiName')) {
      throw new TypeError('parameter "PurchaseApiName" is required');
    }

    if (!hasOwnProperty(params, 'Channel')) {
      throw new TypeError('parameter "Channel" is required');
    }

    return this.request('StopPurchasedApi', params, options);
  }

}

module.exports = Client;

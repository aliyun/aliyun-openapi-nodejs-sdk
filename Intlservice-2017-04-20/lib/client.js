
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-04-20';
    super(config);
  }

  /**
   * @param {String} data - requestData. required.
   */
  findUserCreditInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('FindUserCreditInfo', params, options);
  }

  /**
   * @param {Long} Aliuid - aliuid. required.
   * @param {String} ArticleCode - articleCode. required.
   * @param {String} RequestId - requestId. optional.
   * @param {String} ResourceType - productCode. optional.
   * @param {String} BillingTag - offering. optional.
   * @param {String} ChargeType - chargeType. optional.
   */
  findUserProductCreditInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Aliuid')) {
      throw new TypeError('parameter "Aliuid" is required');
    }

    if (!hasOwnProperty(params, 'ArticleCode')) {
      throw new TypeError('parameter "ArticleCode" is required');
    }

    return this.request('FindUserProductCreditInfo', params, options);
  }

}

module.exports = Client;

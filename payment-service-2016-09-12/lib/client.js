
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-09-12';
    super(config);
  }

  /**
   * @param {Long} HavanaId - userId. required.
   */
  checkUserWithPaymentMethod(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'HavanaId')) {
      throw new TypeError('parameter "HavanaId" is required');
    }

    return this.request('CheckUserWithPaymentMethod', params, options);
  }

  /**
   * @param {String} CountryCode - CountryCode. required.
   * @param {String} Bid - bid. required.
   */
  getCompanyEntityByCountryCodeBid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CountryCode')) {
      throw new TypeError('parameter "CountryCode" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('GetCompanyEntityByCountryCodeBid', params, options);
  }

  /**
   * @param {Long} HavanaId - userId. required.
   */
  getUserDefaultPaymentMethod(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'HavanaId')) {
      throw new TypeError('parameter "HavanaId" is required');
    }

    return this.request('GetUserDefaultPaymentMethod', params, options);
  }

}

module.exports = Client;

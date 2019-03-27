
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-09-05';
    super(config);
  }

  /**
   * @param {Long} ReferralUserKp - referralUserKp. required.
   * @param {String} ReferralCode - referralCode. required.
   */
  doRecommendRebate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReferralUserKp')) {
      throw new TypeError('parameter "ReferralUserKp" is required');
    }

    if (!hasOwnProperty(params, 'ReferralCode')) {
      throw new TypeError('parameter "ReferralCode" is required');
    }

    return this.request('DoRecommendRebate', params, options);
  }

}

module.exports = Client;

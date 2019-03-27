
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-04-19';
    super(config);
  }

  /**
   * @param {String} data - data. required.
   */
  aegis4ShareVmFillCommodity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('Aegis4ShareVmFillCommodity', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  aegis4ShareVmPayCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('Aegis4ShareVmPayCallback', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  cloudFwCompletedParamValid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CloudFwCompletedParamValid', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  cloudFwFillCommodity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CloudFwFillCommodity', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  cloudFwPayCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CloudFwPayCallback', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  cloudFwRefundCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CloudFwRefundCallback', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  completedParamValid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CompletedParamValid', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  fillCommodity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('FillCommodity', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  payCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('PayCallback', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  refundCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('RefundCallback', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  vipAegisBagCompletedParamValid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('VipAegisBagCompletedParamValid', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  vipAegisBagFillCommodity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('VipAegisBagFillCommodity', params, options);
  }

}

module.exports = Client;

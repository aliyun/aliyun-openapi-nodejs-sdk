
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-03-16';
    super(config);
  }

  /**
   * @param {String} data - data. required.
   */
  checkOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CheckOrder', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  completeCommodity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CompleteCommodity', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  completeOrderParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CompleteOrderParam', params, options);
  }

  /**
   */
  getEventsCount(params = {}, options = {}) {
    return this.request('GetEventsCount', params, options);
  }

  /**
   */
  isSasServiceOpening(params = {}, options = {}) {
    return this.request('IsSasServiceOpening', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  produce(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('Produce', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  sasRefundCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('SasRefundCallback', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  sasRefundCheckCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('SasRefundCheckCallback', params, options);
  }

}

module.exports = Client;

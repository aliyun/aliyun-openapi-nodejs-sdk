
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-04-28';
    super(config);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  checkOrderBeforePay(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('CheckOrderBeforePay', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  createOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('CreateOrder', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  getSpecifications(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('GetSpecifications', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  queryForCssOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('QueryForCssOrder', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  queryForOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('QueryForOrder', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  queryInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('QueryInstance', params, options);
  }

}

module.exports = Client;

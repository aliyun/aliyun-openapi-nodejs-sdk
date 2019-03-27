
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-09-01';
    super(config);
  }

  /**
   * @param {String} data - data. required.
   */
  buyChargingService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('BuyChargingService', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  finishPurchase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('FinishPurchase', params, options);
  }

  /**
   * @param {String} Data - data. required.
   */
  insertUserUsedLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    return this.request('InsertUserUsedLog', params, options);
  }

  /**
   * @param {String} Data - data. required.
   */
  listProductOfSingleServiceByAliuid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    return this.request('ListProductOfSingleServiceByAliuid', params, options);
  }

  /**
   * @param {String} Data - data. required.
   */
  popTest(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    return this.request('PopTest', params, options);
  }

  /**
   * @param {String} Data - data. required.
   */
  queryPackageAndRemainder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    return this.request('QueryPackageAndRemainder', params, options);
  }

  /**
   * @param {String} Data - data. required.
   */
  queryProductOfPackServiceByAliuid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    return this.request('QueryProductOfPackServiceByAliuid', params, options);
  }

  /**
   * @param {String} Data - data. required.
   */
  queryProductRemainderByAliuid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    return this.request('QueryProductRemainderByAliuid', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  refundPurchase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('RefundPurchase', params, options);
  }

}

module.exports = Client;

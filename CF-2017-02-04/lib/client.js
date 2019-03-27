
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-02-04';
    super(config);
  }

  /**
   * @param {String} data - cssProduceJSON. required.
   */
  cFMonthlyPayment(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CFMonthlyPayment', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  cFRefund(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CFRefund', params, options);
  }

  /**
   * @param {String} data - cssProduceJSON. required.
   */
  monthlyPaymentCheckOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('MonthlyPaymentCheckOrder', params, options);
  }

}

module.exports = Client;

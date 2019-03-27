
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-06-06';
    super(config);
  }

  /**
   * @param {String} Country - country. optional.
   * @param {String} Prompt - prompt. optional.
   * @param {Long} Hid - hid. optional.
   * @param {Long} Level - level. optional.
   * @param {String} Message - message. optional.
   * @param {String} Invoker - invoker. optional.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   * @param {String} Bid - bid. optional.
   * @param {Boolean} Success - success. optional.
   * @param {String} GmtWakeup - gmtWakeup. optional.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} TaskExtraData - taskExtraData. optional.
   * @param {String} Pk - pk. optional.
   * @param {String} Url - url. optional.
   */
  checkResource(params = {}, options = {}) {
    return this.request('CheckResource', params, options);
  }

  /**
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. optional.
   * @param {String} Pk - pk. optional.
   * @param {String} Bid - bid. optional.
   * @param {Long} Hid - hid. optional.
   * @param {String} Country - country. optional.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   * @param {String} TaskExtraData - taskExtraData. optional.
   * @param {String} GmtWakeup - gmtWakeup. optional.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   */
  logicalDeleteResource(params = {}, options = {}) {
    return this.request('LogicalDeleteResource', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  orderRefund(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('OrderRefund', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  orderSucceededCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('OrderSucceededCallback', params, options);
  }

  /**
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. optional.
   * @param {String} Pk - pk. optional.
   * @param {String} Bid - bid. optional.
   * @param {Long} Hid - hid. optional.
   * @param {String} Country - country. optional.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   * @param {String} TaskExtraData - taskExtraData. optional.
   * @param {String} GmtWakeup - gmtWakeup. optional.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   */
  physicalDeleteResource(params = {}, options = {}) {
    return this.request('PhysicalDeleteResource', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  verifyOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('VerifyOrder', params, options);
  }

}

module.exports = Client;

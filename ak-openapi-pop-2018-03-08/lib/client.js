
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-03-08';
    super(config);
  }

  /**
   * @param {String} Pk - pk. optional.
   * @param {String} Bid - bid. optional.
   * @param {String} Hid - hid. optional.
   * @param {String} Country - country. optional.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   * @param {String} TaskExtraData - taskExtraData. optional.
   * @param {String} GmtWakeup - gmtWakeup. optional.
   * @param {String} Invoker - invoker. optional.
   * @param {String} Interrupt - interrupt. optional.
   * @param {String} Promote - promote. optional.
   * @param {String} Url - url. optional.
   * @param {String} Level - level. optional.
   * @param {String} Message - message. optional.
   * @param {String} Success - success. optional.
   */
  doCheckResource(params = {}, options = {}) {
    return this.request('doCheckResource', params, options);
  }

  /**
   * @param {String} Pk - pk. optional.
   * @param {String} Bid - bid. optional.
   * @param {String} Hid - hid. optional.
   * @param {String} Country - country. optional.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   * @param {String} TaskExtraData - taskExtraData. optional.
   * @param {String} GmtWakeup - gmtWakeup. optional.
   * @param {String} Invoker - invoker. optional.
   * @param {String} Interrupt - interrupt. optional.
   * @param {String} Message - message. optional.
   * @param {String} Success - success. optional.
   */
  doPhysicalDeleteResource(params = {}, options = {}) {
    return this.request('doPhysicalDeleteResource', params, options);
  }

}

module.exports = Client;


'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2019-02-10';
    super(config);
  }

  /**
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. optional.
   * @param {Boolean} Success - success. optional.
   * @param {String} AgAccountType - agAccountType. optional.
   * @param {String} Mpk - mpk. optional.
   * @param {String} Pk - pk. optional.
   * @param {String} TraceNo - traceNo. optional.
   * @param {String} Status - status. optional.
   * @param {String} ErrorMsg - errorMsg. optional.
   */
  asyncCreateAccountNotice(params = {}, options = {}) {
    return this.request('AsyncCreateAccountNotice', params, options);
  }

  /**
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. optional.
   * @param {Boolean} Success - success. optional.
   * @param {String} AgAccountType - agAccountType. optional.
   * @param {String} Mpk - mpk. optional.
   * @param {String} Pk - pk. optional.
   * @param {String} TraceNo - traceNo. optional.
   * @param {String} OldLoginEmail - oldLoginEmail. optional.
   * @param {String} NewLoginEmail - newLoginEmail. optional.
   * @param {String} Status - status. optional.
   * @param {String} ErrorMsg - errorMsg. optional.
   */
  asyncPromoteAccountNotice(params = {}, options = {}) {
    return this.request('AsyncPromoteAccountNotice', params, options);
  }

}

module.exports = Client;

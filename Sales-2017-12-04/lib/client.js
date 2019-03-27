
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-12-04';
    super(config);
  }

  /**
   * @param {String} serviceName - serviceName. optional.
   * @param {String} methodName - methodName. optional.
   * @param {String} paramsJson - paramsJson. optional.
   */
  popProxyService(params = {}, options = {}) {
    return this.request('PopProxyService', params, options);
  }

  /**
   * @param {String} serviceName - serviceName. optional.
   * @param {String} methodName - methodName. optional.
   * @param {String} paramsJson - paramsJson. optional.
   */
  popProxyServiceForSearch(params = {}, options = {}) {
    return this.request('PopProxyServiceForSearch', params, options);
  }

}

module.exports = Client;

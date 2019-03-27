
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-06-01';
    super(config);
  }

  /**
   * @param {String} AccountId - accountId. required.
   * @param {String} AccountOperateIp - clientIp. required.
   * @param {String} ApplicationId - applicationName. required.
   */
  delete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccountId')) {
      throw new TypeError('parameter "AccountId" is required');
    }

    if (!hasOwnProperty(params, 'AccountOperateIp')) {
      throw new TypeError('parameter "AccountOperateIp" is required');
    }

    if (!hasOwnProperty(params, 'ApplicationId')) {
      throw new TypeError('parameter "ApplicationId" is required');
    }

    return this.request('Delete', params, options);
  }

  /**
   * @param {String} AccountId - accountId. required.
   * @param {String} AccountOperateIp - clientIp. optional.
   * @param {String} ApplicationId - applicationName. required.
   * @param {String} Content - content. required.
   */
  publish(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccountId')) {
      throw new TypeError('parameter "AccountId" is required');
    }

    if (!hasOwnProperty(params, 'ApplicationId')) {
      throw new TypeError('parameter "ApplicationId" is required');
    }

    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    return this.request('Publish', params, options);
  }

}

module.exports = Client;

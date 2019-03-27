
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-07-03';
    super(config);
  }

  /**
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {String} ProductId - productId. required.
   * @param {String} AbToken - abToken. required.
   */
  activateLicense(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'ProductId')) {
      throw new TypeError('parameter "ProductId" is required');
    }

    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    return this.request('ActivateLicense', params, options);
  }

  /**
   * @param {String} InstanceUuid - instanceId. required.
   * @param {String} AbToken - abToken. required.
   * @param {Long} Aliuid - aliuid. required.
   * @param {String} Ids - ids. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeEcs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    if (!hasOwnProperty(params, 'Aliuid')) {
      throw new TypeError('parameter "Aliuid" is required');
    }

    return this.request('DescribeEcs', params, options);
  }

  /**
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {String} AbToken - abToken. required.
   * @param {String} KeyId - keyId. required.
   * @param {String} DeviceId - deviceId. required.
   */
  getLicense(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    if (!hasOwnProperty(params, 'KeyId')) {
      throw new TypeError('parameter "KeyId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    return this.request('GetLicense', params, options);
  }

}

module.exports = Client;


'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-04-01';
    super(config);
  }

  /**
   * @param {String} Channel - channel. optional.
   * @param {String} Domain - domain. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SourceIps - sourceIps. required.
   */
  addDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SourceIps')) {
      throw new TypeError('parameter "SourceIps" is required');
    }

    return this.request('AddDomain', params, options);
  }

  /**
   * @param {String} Channel - channel. optional.
   * @param {String} Domain - domain. required.
   * @param {String} InstanceId - instanceId. required.
   */
  deleteDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DeleteDomain', params, options);
  }

  /**
   * @param {String} Channel - channel. optional.
   * @param {Boolean} ContainDomain - containDomain. optional. default: false.
   * @param {Boolean} ContainDetail - containVipDetail. optional. default: false.
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Limit - limit. optional. default: 4.
   */
  describeInstances(params = {}, options = {}) {
    return this.request('DescribeInstances', params, options);
  }

  /**
   * @param {String} Channel - channel. optional.
   * @param {String} Domain - domain. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SourceIps - sourceIps. required.
   */
  updateDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SourceIps')) {
      throw new TypeError('parameter "SourceIps" is required');
    }

    return this.request('UpdateDomain', params, options);
  }

}

module.exports = Client;

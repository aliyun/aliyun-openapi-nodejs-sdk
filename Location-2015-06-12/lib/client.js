
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-06-12';
    super(config);
  }

  /**
   * @param {String} Id - id. required.
   * @param {String} ServiceCode - serviceCode. required.
   * @param {String} Password - password. optional. default: locationpopapi.
   */
  describeEndpoint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'ServiceCode')) {
      throw new TypeError('parameter "ServiceCode" is required');
    }

    return this.request('DescribeEndpoint', params, options);
  }

  /**
   * @param {String} Id - id. required.
   * @param {String} ServiceCode - serviceCode. required.
   * @param {String} Type - type. optional.
   */
  describeEndpoints(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'ServiceCode')) {
      throw new TypeError('parameter "ServiceCode" is required');
    }

    return this.request('DescribeEndpoints', params, options);
  }

  /**
   * @param {String} Password - password. optional. default: locationpopapi.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} Password - password. optional. default: locationpopapi.
   */
  describeServices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeServices', params, options);
  }

  /**
   * @param {String} Namespace - namespace. optional.
   * @param {String} Id - id. optional.
   * @param {String} SerivceCode - serivceCode. optional.
   */
  listEndpoints(params = {}, options = {}) {
    return this.request('ListEndpoints', params, options);
  }

  /**
   * @param {String} Ip - ip. required.
   */
  listEndpointsByIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('ListEndpointsByIp', params, options);
  }

}

module.exports = Client;

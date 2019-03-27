
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-10-09';
    super(config);
  }

  /**
   * @param {String} Ak - ak. required.
   * @param {String} Sk - sk. required.
   * @param {String} SecurityToken - stsToken. required.
   * @param {String} RegionNo - regionId. required.
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {String} AbToken - abToken. required.
   * @param {Long} Aliuid - aliuid. required.
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  describeMachines(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ak')) {
      throw new TypeError('parameter "Ak" is required');
    }

    if (!hasOwnProperty(params, 'Sk')) {
      throw new TypeError('parameter "Sk" is required');
    }

    if (!hasOwnProperty(params, 'SecurityToken')) {
      throw new TypeError('parameter "SecurityToken" is required');
    }

    if (!hasOwnProperty(params, 'RegionNo')) {
      throw new TypeError('parameter "RegionNo" is required');
    }

    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    if (!hasOwnProperty(params, 'Aliuid')) {
      throw new TypeError('parameter "Aliuid" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeMachines', params, options);
  }

  /**
   * @param {String} AbToken - abToken. required.
   * @param {String} InstanceUuid - instanceUuid. required.
   */
  describeRegions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {String} AbToken - abToken. required.
   * @param {String} UserName - userName. required.
   */
  needMfa(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    return this.request('NeedMfa', params, options);
  }

}

module.exports = Client;


'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-08-08';
    super(config);
  }

  /**
   * @param {Integer} SourceType - sourceType. required.
   */
  getRegionConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceType')) {
      throw new TypeError('parameter "SourceType" is required');
    }

    return this.request('GetRegionConfig', params, options);
  }

  /**
   * @param {String} EnterpriseId - enterpriseId. required.
   */
  getRegionConfigByEnterpriseId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EnterpriseId')) {
      throw new TypeError('parameter "EnterpriseId" is required');
    }

    return this.request('GetRegionConfigByEnterpriseId', params, options);
  }

  /**
   * @param {Integer} SourceType - sourceType. required.
   * @param {Integer} CommandType - commandType. required.
   * @param {String} CommandContent - commandContent. required.
   */
  issuedCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceType')) {
      throw new TypeError('parameter "SourceType" is required');
    }

    if (!hasOwnProperty(params, 'CommandType')) {
      throw new TypeError('parameter "CommandType" is required');
    }

    if (!hasOwnProperty(params, 'CommandContent')) {
      throw new TypeError('parameter "CommandContent" is required');
    }

    return this.request('IssuedCommand', params, options);
  }

}

module.exports = Client;

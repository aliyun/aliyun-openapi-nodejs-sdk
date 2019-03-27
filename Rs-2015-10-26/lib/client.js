
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-10-26';
    super(config);
  }

  /**
   * @param {String} ParamStr - paramStr. required.
   */
  batchGetConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ParamStr')) {
      throw new TypeError('parameter "ParamStr" is required');
    }

    return this.request('BatchGetConfig', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  getConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('GetConfig', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  getConfigById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('GetConfigById', params, options);
  }

  /**
   * @param {String} ParamStr - paramStr. required.
   */
  getConfigList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ParamStr')) {
      throw new TypeError('parameter "ParamStr" is required');
    }

    return this.request('GetConfigList', params, options);
  }

  /**
   * @param {String} ParamStr - paramStr. required.
   */
  getSpecificConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ParamStr')) {
      throw new TypeError('parameter "ParamStr" is required');
    }

    return this.request('GetSpecificConfig', params, options);
  }

}

module.exports = Client;


'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-12-12';
    super(config);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} Definition - definition. required.
   * @param {String} Parameters - parameters. optional.
   * @param {String} Data - data. optional.
   * @param {Boolean} Sync - isSync. optional.
   */
  invokeDefinition(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Definition')) {
      throw new TypeError('parameter "Definition" is required');
    }

    return this.request('InvokeDefinition', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} AppName - appName. required.
   * @param {String} FlowName - flowName. required.
   * @param {String} FlowVersion - flowVersion. optional.
   * @param {String} Parameters - parameters. optional.
   * @param {String} Data - data. optional.
   * @param {Boolean} Sync - isSync. optional.
   * @param {String} LoginAliyunidTicket - aliyunLoginTicket. optional.
   */
  invokeFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'FlowName')) {
      throw new TypeError('parameter "FlowName" is required');
    }

    return this.request('InvokeFlow', params, options);
  }

}

module.exports = Client;

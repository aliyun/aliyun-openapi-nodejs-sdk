
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-01-15';
    super(config);
  }

  /**
   * @param {String} data - data. required.
   * @param {String} product - product. optional.
   * @param {String} version - version. optional.
   * @param {String} action - action. optional.
   * @param {String} regionId - regionId. optional.
   * @param {String} domain - domain. optional.
   */
  fillInstanceParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('FillInstanceParam', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {String} product - product. optional.
   * @param {String} version - version. optional.
   * @param {String} action - action. optional.
   * @param {String} regionId - regionId. optional.
   * @param {String} domain - domain. optional.
   */
  produceInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('ProduceInstance', params, options);
  }

}

module.exports = Client;

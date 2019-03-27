
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-08-13';
    super(config);
  }

  /**
   * @param {String} AppToken - appToken. optional.
   * @param {Long} DatasetId - datasetId. optional.
   * @param {Json} Params - params. optional.
   * @param {Json} Pc - pc. optional.
   * @param {Json} Order - order. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} Sign - sign. optional.
   */
  datasetServiceHsf(params = {}, options = {}) {
    return this.request('DatasetServiceHsf', params, options);
  }

}

module.exports = Client;

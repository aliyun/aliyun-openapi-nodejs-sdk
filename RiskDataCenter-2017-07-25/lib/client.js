
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-07-25';
    super(config);
  }

  /**
   * @param {Json} Parameters - parameters. required.
   */
  invoke(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Parameters')) {
      throw new TypeError('parameter "Parameters" is required');
    }

    return this.request('Invoke', params, options);
  }

  /**
   * @param {String} Code - code. required.
   * @param {Json} Data - data. required.
   */
  queryData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Code')) {
      throw new TypeError('parameter "Code" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    return this.request('QueryData', params, options);
  }

}

module.exports = Client;

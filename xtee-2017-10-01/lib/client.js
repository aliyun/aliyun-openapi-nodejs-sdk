
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-10-01';
    super(config);
  }

  /**
   * @param {String} Code - code. required.
   * @param {Json} Data - data. required.
   */
  invoke(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Code')) {
      throw new TypeError('parameter "Code" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    return this.request('Invoke', params, options);
  }

}

module.exports = Client;


'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-09-19';
    super(config);
  }

  /**
   */
  getPopGenericServiceData(params = {}, options = {}) {
    return this.request('GetPopGenericServiceData', params, options);
  }

}

module.exports = Client;

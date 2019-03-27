
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2019-02-28';
    super(config);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   */
  createToken(params = {}, options = {}) {
    return this.request('CreateToken', params, options);
  }

}

module.exports = Client;

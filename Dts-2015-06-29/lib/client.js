
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-06-29';
    super(config);
  }

  /**
   * @param {String} guid - guid. required.
   */
  drcGuidRouteApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'guid')) {
      throw new TypeError('parameter "guid" is required');
    }

    return this.request('drcGuidRouteApi', params, options);
  }

}

module.exports = Client;

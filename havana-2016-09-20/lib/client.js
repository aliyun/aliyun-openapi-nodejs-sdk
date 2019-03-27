
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-09-20';
    super(config);
  }

  /**
   * @param {String} FindKeyword - findKeyword. optional.
   * @param {Integer} FindMethod - findMethod. optional.
   */
  queryHavanaAccountInfo(params = {}, options = {}) {
    return this.request('QueryHavanaAccountInfo', params, options);
  }

}

module.exports = Client;

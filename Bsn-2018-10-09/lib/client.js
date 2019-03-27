
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-10-09';
    super(config);
  }

  /**
   * @param {Long} Aliuid - aliUid. required.
   * @param {String} ResourceId - resourceId. required.
   */
  vhostBindBsn(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Aliuid')) {
      throw new TypeError('parameter "Aliuid" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    return this.request('VhostBindBsn', params, options);
  }

  /**
   * @param {Long} Aliuid - aliUid. optional.
   * @param {String} ResourceId - resourceId. optional.
   */
  vhostListBsnInfo(params = {}, options = {}) {
    return this.request('VhostListBsnInfo', params, options);
  }

}

module.exports = Client;

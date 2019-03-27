
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-04-17';
    super(config);
  }

  /**
   * @param {String} Pk - pk. optional.
   * @param {String} Bid - bid. optional.
   * @param {Long} Hid - hid. optional.
   * @param {String} Country - country. optional.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   * @param {String} TaskExtraData - taskExtraData. optional.
   * @param {String} GmtWakeup - gmtWakeup. optional.
   */
  checkResource(params = {}, options = {}) {
    return this.request('CheckResource', params, options);
  }

  /**
   * @param {String} Pk - pk. optional.
   * @param {String} Bid - bid. optional.
   * @param {Long} Hid - hid. optional.
   * @param {String} Country - country. optional.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   * @param {String} TaskExtraData - taskExtraData. optional.
   * @param {String} GmtWakeup - gmtWakeup. optional.
   */
  logicalDeleteResource(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('LogicalDeleteResource', params, options);
  }

  /**
   * @param {String} Pk - pk. optional.
   * @param {String} Bid - bid. optional.
   * @param {Long} Hid - hid. optional.
   * @param {String} Country - country. optional.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   * @param {String} TaskExtraData - taskExtraData. optional.
   * @param {String} GmtWakeup - gmtWakeup. optional.
   */
  physicalDeleteResource(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('PhysicalDeleteResource', params, options);
  }

}

module.exports = Client;

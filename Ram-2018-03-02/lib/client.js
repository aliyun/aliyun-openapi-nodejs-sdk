
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-03-02';
    super(config);
  }

  /**
   * @param {String} Pk - Pk. optional.
   * @param {String} Bid - Bid. optional.
   * @param {String} Hid - Hid. optional.
   * @param {String} Country - Country. optional.
   * @param {String} TaskIdentifier - TaskIdentifier. optional.
   * @param {String} TaskExtraData - TaskExtraData. optional.
   * @param {String} GmtWakeup - GmtWakeup. optional.
   */
  checkResource(params = {}, options = {}) {
    return this.request('CheckResource', params, options);
  }

  /**
   * @param {String} Pk - Pk. optional.
   * @param {String} Bid - Bid. optional.
   * @param {String} Hid - Hid. optional.
   * @param {String} Country - Country. optional.
   * @param {String} TaskIdentifier - TaskIdentifier. optional.
   * @param {String} TaskExtraData - TaskExtraData. optional.
   * @param {String} GmtWakeup - GmtWakeup. optional.
   */
  physicalDeleteResource(params = {}, options = {}) {
    return this.request('PhysicalDeleteResource', params, options);
  }

}

module.exports = Client;

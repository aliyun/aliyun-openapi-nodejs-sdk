
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
   * @param {String} Pk - pk. optional.
   * @param {String} Bid - bid. optional.
   * @param {String} Hid - hid. optional.
   * @param {String} Contry - contry. optional.
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
   * @param {String} Hid - hid. optional.
   * @param {String} Contry - contry. optional.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   * @param {String} TaskExtraData - taskExtraData. optional.
   * @param {String} GmtWakeup - gmtWakeup. optional.
   */
  physicalDeleteResource(params = {}, options = {}) {
    return this.request('PhysicalDeleteResource', params, options);
  }

}

module.exports = Client;


'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-01-01';
    super(config);
  }

  /**
   * @param {String} Pk - pk. required.
   * @param {Long} Hid - hid. optional.
   * @param {String} Bid - bid. optional.
   * @param {String} Country - country. optional.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   */
  checkResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    return this.request('CheckResource', params, options);
  }

  /**
   * @param {String} Pk - pk. required.
   * @param {Long} Hid - hid. optional.
   * @param {String} Bid - bid. optional.
   * @param {String} Country - country. optional.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   */
  logicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    return this.request('LogicalDeleteResource', params, options);
  }

  /**
   * @param {String} Pk - pk. required.
   * @param {Long} Hid - hid. optional.
   * @param {String} Bid - bid. optional.
   * @param {String} Country - country. optional.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   */
  physicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    return this.request('PhysicalDeleteResource', params, options);
  }

}

module.exports = Client;

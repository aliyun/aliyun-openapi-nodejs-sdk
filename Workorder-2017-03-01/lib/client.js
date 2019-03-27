
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-03-01';
    super(config);
  }

  /**
   * @param {Long} Kp - kp. required.
   * @param {String} Security - security. required.
   */
  logicalDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Kp')) {
      throw new TypeError('parameter "Kp" is required');
    }

    if (!hasOwnProperty(params, 'Security')) {
      throw new TypeError('parameter "Security" is required');
    }

    return this.request('LogicalDelete', params, options);
  }

  /**
   * @param {Long} Kp - kp. required.
   * @param {String} Security - security. optional.
   */
  physicalDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Kp')) {
      throw new TypeError('parameter "Kp" is required');
    }

    return this.request('PhysicalDelete', params, options);
  }

}

module.exports = Client;

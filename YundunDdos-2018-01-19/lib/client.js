
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-01-19';
    super(config);
  }

  /**
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   * @param {String} Id - id. required.
   * @param {String} Key - key. required.
   */
  huiGuiQueryResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UpStream')) {
      throw new TypeError('parameter "UpStream" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Key')) {
      throw new TypeError('parameter "Key" is required');
    }

    return this.request('HuiGuiQueryResult', params, options);
  }

  /**
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   */
  huiGuiQueryStaff(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UpStream')) {
      throw new TypeError('parameter "UpStream" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    return this.request('HuiGuiQueryStaff', params, options);
  }

  /**
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   * @param {String} Id - id. required.
   * @param {String} Dip - dip. required.
   * @param {String} Key - key. required.
   * @param {String} Region - region. optional.
   */
  huiGuiRequestTest(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UpStream')) {
      throw new TypeError('parameter "UpStream" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Dip')) {
      throw new TypeError('parameter "Dip" is required');
    }

    if (!hasOwnProperty(params, 'Key')) {
      throw new TypeError('parameter "Key" is required');
    }

    return this.request('HuiGuiRequestTest', params, options);
  }

}

module.exports = Client;

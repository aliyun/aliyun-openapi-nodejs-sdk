
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-05-24';
    super(config);
  }

  /**
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   * @param {String} Ip - ip. required.
   * @param {Integer} Zone - zone. required.
   */
  liandunAddBlackhole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UpStream')) {
      throw new TypeError('parameter "UpStream" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'Zone')) {
      throw new TypeError('parameter "Zone" is required');
    }

    return this.request('LiandunAddBlackhole', params, options);
  }

  /**
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   * @param {String} Ip - ip. required.
   */
  liandunDelBlackhole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UpStream')) {
      throw new TypeError('parameter "UpStream" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('LiandunDelBlackhole', params, options);
  }

  /**
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   */
  liandunListBlackhole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UpStream')) {
      throw new TypeError('parameter "UpStream" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    return this.request('LiandunListBlackhole', params, options);
  }

}

module.exports = Client;

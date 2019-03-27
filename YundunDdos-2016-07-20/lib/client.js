
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-07-20';
    super(config);
  }

  /**
   * @param {String} Ip - ip. required.
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   * @param {Integer} Port - port. optional. default: 0.
   * @param {Integer} Duration - duration. optional. default: 2.
   * @param {Integer} Size - size. optional. default: 64.
   * @param {Integer} InOut - inout. optional. default: 0.
   * @param {Integer} PacketType - packet_type. optional. default: 11.
   */
  capCapture(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'UpStream')) {
      throw new TypeError('parameter "UpStream" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    return this.request('CapCapture', params, options);
  }

  /**
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   * @param {String} Ip - ip. required.
   * @param {Integer} Netmask - netmask. optional. default: 32.
   * @param {Integer} Zone - zone. required.
   */
  yundiAddBlackhole(params = {}, options = {}) {
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

    return this.request('YundiAddBlackhole', params, options);
  }

  /**
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   * @param {String} Ip - ip. required.
   * @param {Integer} Netmask - netmask. optional. default: 32.
   */
  yundiDelBlackhole(params = {}, options = {}) {
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

    return this.request('YundiDelBlackhole', params, options);
  }

  /**
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   * @param {String} Domain - domain. required.
   */
  yundiDnsFlush(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UpStream')) {
      throw new TypeError('parameter "UpStream" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('YundiDnsFlush', params, options);
  }

  /**
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   */
  yundiListBlackhole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UpStream')) {
      throw new TypeError('parameter "UpStream" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    return this.request('YundiListBlackhole', params, options);
  }

}

module.exports = Client;

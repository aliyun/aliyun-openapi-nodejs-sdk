
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-11-28';
    super(config);
  }

  /**
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   * @param {String} Ip - ip. required.
   * @param {String} StartTime - start_time. optional.
   * @param {Integer} Duration - duration. optional. default: 60.
   */
  rrdGetFlow(params = {}, options = {}) {
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

    return this.request('RrdGetFlow', params, options);
  }

}

module.exports = Client;

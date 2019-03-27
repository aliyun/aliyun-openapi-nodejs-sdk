
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-06-26';
    super(config);
  }

  /**
   * @param {String} Ip - ip. required.
   * @param {Integer} SensType - sensType. optional.
   * @param {Integer} BusinessType - businessType. optional.
   * @param {String} RequestUrl - requestUrl. optional.
   * @param {String} UserAgent - ua. optional.
   * @param {String} DeviceIdMd5 - didMd5. optional.
   * @param {String} Os - os. optional.
   * @param {Integer} DeviceType - deviceType. optional.
   * @param {Integer} ConnectionType - connectionType. optional.
   * @param {Integer} Carrier - carrier. optional.
   */
  getIpHumanClientProbability(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('GetIpHumanClientProbability', params, options);
  }

}

module.exports = Client;

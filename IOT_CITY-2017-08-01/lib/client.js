
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-08-01';
    super(config);
  }

  /**
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} DeviceEventList - data. required.
   */
  updateDeviceEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'DeviceEventList')) {
      throw new TypeError('parameter "DeviceEventList" is required');
    }

    return this.request('UpdateDeviceEvent', params, options);
  }

  /**
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} DeviceInfo - data. required.
   */
  updateDeviceInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'DeviceInfo')) {
      throw new TypeError('parameter "DeviceInfo" is required');
    }

    return this.request('UpdateDeviceInfo', params, options);
  }

  /**
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} OnlineState - data. required.
   * @param {Long} Time - time. required.
   */
  updateDeviceOnlineState(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'OnlineState')) {
      throw new TypeError('parameter "OnlineState" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    return this.request('UpdateDeviceOnlineState', params, options);
  }

  /**
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} DeviceStatus - data. required.
   */
  updateDeviceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'DeviceStatus')) {
      throw new TypeError('parameter "DeviceStatus" is required');
    }

    return this.request('UpdateDeviceStatus', params, options);
  }

  /**
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} DeviceStatusList - data. required.
   */
  updateDeviceStatusList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'DeviceStatusList')) {
      throw new TypeError('parameter "DeviceStatusList" is required');
    }

    return this.request('UpdateDeviceStatusList', params, options);
  }

}

module.exports = Client;

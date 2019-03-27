
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-02-11';
    super(config);
  }

  /**
   * @param {String} DeviceName - deviceName. required.
   * @param {String} GroupId - groupId. required.
   */
  moPenAddGroupMember(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    options.method = 'POST';
    return this.request('MoPenAddGroupMember', params, options);
  }

  /**
   * @param {String} DeviceName - deviceName. required.
   * @param {String} OrderKey - orderKey. required.
   */
  moPenBindIsv(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'OrderKey')) {
      throw new TypeError('parameter "OrderKey" is required');
    }

    options.method = 'POST';
    return this.request('MoPenBindIsv', params, options);
  }

  /**
   * @param {Integer} DeviceType - type. required.
   * @param {String} DeviceName - deviceName. required.
   */
  moPenCreateDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceType')) {
      throw new TypeError('parameter "DeviceType" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    options.method = 'POST';
    return this.request('MoPenCreateDevice', params, options);
  }

  /**
   * @param {String} GroupId - groupId. required.
   */
  moPenDeleteGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    options.method = 'POST';
    return this.request('MoPenDeleteGroup', params, options);
  }

  /**
   * @param {Long} GroupId - groupId. required.
   * @param {String} DeviceName - deviceName. required.
   */
  moPenDeleteGroupMember(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    options.method = 'POST';
    return this.request('MoPenDeleteGroupMember', params, options);
  }

  /**
   * @param {Long} CanvasId - canvasId. required.
   * @param {Integer} StartX - startX. required.
   * @param {Integer} StartY - startY. required.
   * @param {Integer} EndX - endX. required.
   * @param {Integer} EndY - endY. required.
   * @param {String} JsonConf - jsonConf. required.
   * @param {String} ExportType - exportType. required.
   */
  moPenDoRecognize(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CanvasId')) {
      throw new TypeError('parameter "CanvasId" is required');
    }

    if (!hasOwnProperty(params, 'StartX')) {
      throw new TypeError('parameter "StartX" is required');
    }

    if (!hasOwnProperty(params, 'StartY')) {
      throw new TypeError('parameter "StartY" is required');
    }

    if (!hasOwnProperty(params, 'EndX')) {
      throw new TypeError('parameter "EndX" is required');
    }

    if (!hasOwnProperty(params, 'EndY')) {
      throw new TypeError('parameter "EndY" is required');
    }

    if (!hasOwnProperty(params, 'JsonConf')) {
      throw new TypeError('parameter "JsonConf" is required');
    }

    if (!hasOwnProperty(params, 'ExportType')) {
      throw new TypeError('parameter "ExportType" is required');
    }

    options.method = 'POST';
    return this.request('MoPenDoRecognize', params, options);
  }

  /**
   * @param {String} Creator - creator. required.
   */
  moPenFindGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Creator')) {
      throw new TypeError('parameter "Creator" is required');
    }

    options.method = 'POST';
    return this.request('MoPenFindGroup', params, options);
  }

  /**
   * @param {String} DeviceName - deviceName. required.
   * @param {String} SessionId - sessionId. required.
   * @param {Integer} PageId - pageId. optional.
   * @param {Integer} Status - status. optional.
   */
  moPenQueryCanvas(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'SessionId')) {
      throw new TypeError('parameter "SessionId" is required');
    }

    options.method = 'POST';
    return this.request('MoPenQueryCanvas', params, options);
  }

  /**
   * @param {String} DeviceName - deviceName. required.
   * @param {String} Payload - payload. required.
   */
  moPenSendMqttMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'Payload')) {
      throw new TypeError('parameter "Payload" is required');
    }

    options.method = 'POST';
    return this.request('MoPenSendMqttMessage', params, options);
  }

  /**
   * @param {String} Creator - creator. required.
   */
  mopenCreateGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Creator')) {
      throw new TypeError('parameter "Creator" is required');
    }

    options.method = 'POST';
    return this.request('MopenCreateGroup', params, options);
  }

}

module.exports = Client;

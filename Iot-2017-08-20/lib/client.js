
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-08-20';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} TopicFullName - topicFullName. required.
   * @param {String} SubscribeId - subscribeId. required.
   * @param {String} ExtInfo - extInfo. required.
   */
  createAppSubInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicFullName')) {
      throw new TypeError('parameter "TopicFullName" is required');
    }

    if (!hasOwnProperty(params, 'SubscribeId')) {
      throw new TypeError('parameter "SubscribeId" is required');
    }

    if (!hasOwnProperty(params, 'ExtInfo')) {
      throw new TypeError('parameter "ExtInfo" is required');
    }

    return this.request('CreateAppSubInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} TopicFullName - topicFullName. required.
   * @param {Integer} Operation - operation. required.
   */
  createTopicTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicFullName')) {
      throw new TypeError('parameter "TopicFullName" is required');
    }

    if (!hasOwnProperty(params, 'Operation')) {
      throw new TypeError('parameter "Operation" is required');
    }

    return this.request('CreateTopicTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} AppName - appName. required.
   * @param {String} TopicFullName - topicFullName. required.
   */
  deleteAppSubInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'TopicFullName')) {
      throw new TypeError('parameter "TopicFullName" is required');
    }

    return this.request('DeleteAppSubInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} TopicFullName - topicFullName. required.
   */
  deleteDeviceSubInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'TopicFullName')) {
      throw new TypeError('parameter "TopicFullName" is required');
    }

    return this.request('DeleteDeviceSubInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} TemplateId - templateId. required.
   */
  deleteTopicTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('DeleteTopicTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} DeviceStatus - deviceStatus. required.
   */
  enableDisableDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'DeviceStatus')) {
      throw new TypeError('parameter "DeviceStatus" is required');
    }

    return this.request('EnableDisableDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  kickDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('KickDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} AppName - appName. required.
   */
  queryAppSubInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('QueryAppSubInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  queryDeviceSession(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('QueryDeviceSession', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  queryDeviceSubInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('QueryDeviceSubInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UniMsgId - uniMsgId. required.
   */
  queryMessageInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UniMsgId')) {
      throw new TypeError('parameter "UniMsgId" is required');
    }

    return this.request('QueryMessageInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} TemplateKey - templateKey. required.
   */
  queryTopicTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateKey')) {
      throw new TypeError('parameter "TemplateKey" is required');
    }

    return this.request('QueryTopicTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Date - date. required.
   * @param {Integer} MaxResult - maxResult. required.
   * @param {String} NextToken - nextToken. optional.
   */
  queryUserMessageCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Date')) {
      throw new TypeError('parameter "Date" is required');
    }

    if (!hasOwnProperty(params, 'MaxResult')) {
      throw new TypeError('parameter "MaxResult" is required');
    }

    return this.request('QueryUserMessageCount', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} DeviceInfoPayload - deviceInfoPayload. required.
   */
  updateDeviceInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'DeviceInfoPayload')) {
      throw new TypeError('parameter "DeviceInfoPayload" is required');
    }

    return this.request('UpdateDeviceInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} OnlineState - onlineState. required.
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

    return this.request('UpdateDeviceOnlineState', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} AsAddress - asAddress. required.
   * @param {String} ProtocolType - protocolType. required.
   * @param {String} Status - status. required.
   */
  updateDeviceSession(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'AsAddress')) {
      throw new TypeError('parameter "AsAddress" is required');
    }

    if (!hasOwnProperty(params, 'ProtocolType')) {
      throw new TypeError('parameter "ProtocolType" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('UpdateDeviceSession', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} DeviceStatusPayload - deviceStatusPayload. required.
   */
  updateDeviceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'DeviceStatusPayload')) {
      throw new TypeError('parameter "DeviceStatusPayload" is required');
    }

    return this.request('UpdateDeviceStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} DeviceStatusList - deviceStatusList. required.
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

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} TopicName - topicName. required.
   * @param {Integer} Operation - operation. required.
   */
  updateDeviceSubInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'TopicName')) {
      throw new TypeError('parameter "TopicName" is required');
    }

    if (!hasOwnProperty(params, 'Operation')) {
      throw new TypeError('parameter "Operation" is required');
    }

    return this.request('UpdateDeviceSubInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} TopicFullName - topicFullName. required.
   * @param {Integer} Operation - operation. required.
   * @param {Long} TemplateId - templateId. required.
   */
  updateTopicTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicFullName')) {
      throw new TypeError('parameter "TopicFullName" is required');
    }

    if (!hasOwnProperty(params, 'Operation')) {
      throw new TypeError('parameter "Operation" is required');
    }

    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('UpdateTopicTemplate', params, options);
  }

}

module.exports = Client;


'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-08-27';
    super(config);
  }

  /**
   * @param {String} Devices - devices. required.
   * @param {Long} AppId - appId. required.
   */
  batchGetDevicesInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Devices')) {
      throw new TypeError('parameter "Devices" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('BatchGetDevicesInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} ClientKey - clientKey. required.
   * @param {String} KeyType - keyType. required.
   * @param {String} TagName - tagName. required.
   */
  bindTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'ClientKey')) {
      throw new TypeError('parameter "ClientKey" is required');
    }

    if (!hasOwnProperty(params, 'KeyType')) {
      throw new TypeError('parameter "KeyType" is required');
    }

    if (!hasOwnProperty(params, 'TagName')) {
      throw new TypeError('parameter "TagName" is required');
    }

    return this.request('BindTag', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {Long} MessageId - messageId. required.
   */
  cancelPush(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'MessageId')) {
      throw new TypeError('parameter "MessageId" is required');
    }

    return this.request('CancelPush', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} Devices - devices. required.
   */
  getDeviceInfos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'Devices')) {
      throw new TypeError('parameter "Devices" is required');
    }

    return this.request('GetDeviceInfos', params, options);
  }

  /**
   * @param {Long} AppKey - appKey. required.
   * @param {String} DeviceId - deviceId. required.
   * @param {Integer} Page - page. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listDevicePushRecords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListDevicePushRecords', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   */
  listTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('ListTags', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} Target - target. required.
   * @param {String} TargetValue - targetValue. required.
   * @param {Integer} Type - type. required.
   * @param {Integer} DeviceType - deviceType. required.
   * @param {String} Title - title. required.
   * @param {String} Body - body. required.
   * @param {String} Summary - summary. optional.
   * @param {Boolean} StoreOffline - storeOffline. optional.
   * @param {String} PushTime - pushTime. optional.
   * @param {String} ExpireTime - expireTime. optional.
   * @param {String} AndroidActivity - androidActivity. optional.
   * @param {String} XiaomiActivity - xiaomiActivity. optional.
   * @param {String} AndroidOpenUrl - androidOpenUrl. optional.
   * @param {String} AndroidExtParameters - androidExtParameters. optional.
   * @param {String} AndroidOpenType - androidOpenType. optional.
   * @param {String} AndroidMusic - androidMusic. optional.
   * @param {Boolean} Remind - remind. optional.
   * @param {String} iOSMusic - iOSMusic. optional.
   * @param {Integer} iOSBadge - iOSBadge. optional.
   * @param {String} iOSTitle - iOSTitle. optional.
   * @param {String} iOSSubtitle - iOSSubtitle. optional.
   * @param {String} iOSNotificationCategory - iOSNotificationCategory. optional.
   * @param {Boolean} iOSMutableContent - iOSMutableContent. optional.
   * @param {String} iOSExtParameters - iOSExtParameters. optional.
   * @param {String} ApnsEnv - apnsEnv. optional.
   */
  push(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'Target')) {
      throw new TypeError('parameter "Target" is required');
    }

    if (!hasOwnProperty(params, 'TargetValue')) {
      throw new TypeError('parameter "TargetValue" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'DeviceType')) {
      throw new TypeError('parameter "DeviceType" is required');
    }

    if (!hasOwnProperty(params, 'Title')) {
      throw new TypeError('parameter "Title" is required');
    }

    if (!hasOwnProperty(params, 'Body')) {
      throw new TypeError('parameter "Body" is required');
    }

    return this.request('Push', params, options);
  }

  /**
   * @param {Long} AppId - appId. required.
   * @param {Integer} SendType - sendType. required.
   * @param {String} Accounts - account. optional.
   * @param {String} DeviceIds - deviceId. optional.
   * @param {String} PushContent - contentBase64. required.
   */
  pushByteMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'SendType')) {
      throw new TypeError('parameter "SendType" is required');
    }

    if (!hasOwnProperty(params, 'PushContent')) {
      throw new TypeError('parameter "PushContent" is required');
    }

    return this.request('PushByteMessage', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} Target - target. required.
   * @param {String} TargetValue - targetValue. required.
   * @param {String} Message - body. required.
   */
  pushMessageToAndroid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'Target')) {
      throw new TypeError('parameter "Target" is required');
    }

    if (!hasOwnProperty(params, 'TargetValue')) {
      throw new TypeError('parameter "TargetValue" is required');
    }

    if (!hasOwnProperty(params, 'Message')) {
      throw new TypeError('parameter "Message" is required');
    }

    return this.request('PushMessageToAndroid', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} Target - target. required.
   * @param {String} TargetValue - targetValue. required.
   * @param {String} Summary - summary. optional.
   * @param {String} Message - message. required.
   */
  pushMessageToiOS(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'Target')) {
      throw new TypeError('parameter "Target" is required');
    }

    if (!hasOwnProperty(params, 'TargetValue')) {
      throw new TypeError('parameter "TargetValue" is required');
    }

    if (!hasOwnProperty(params, 'Message')) {
      throw new TypeError('parameter "Message" is required');
    }

    return this.request('PushMessageToiOS', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} Target - target. required.
   * @param {String} TargetValue - targetValue. required.
   * @param {String} Summary - summary. required.
   * @param {String} Title - title. required.
   * @param {String} AndroidExtParameters - androidExtParameters. optional.
   */
  pushNoticeToAndroid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'Target')) {
      throw new TypeError('parameter "Target" is required');
    }

    if (!hasOwnProperty(params, 'TargetValue')) {
      throw new TypeError('parameter "TargetValue" is required');
    }

    if (!hasOwnProperty(params, 'Summary')) {
      throw new TypeError('parameter "Summary" is required');
    }

    if (!hasOwnProperty(params, 'Title')) {
      throw new TypeError('parameter "Title" is required');
    }

    return this.request('PushNoticeToAndroid', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} Target - target. required.
   * @param {String} TargetValue - targetValue. required.
   * @param {String} Summary - summary. required.
   * @param {String} Env - env. required.
   * @param {String} Ext - ext. required.
   * @param {String} iOSExtParameters - iOSExtParameters. optional.
   */
  pushNoticeToiOS(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'Target')) {
      throw new TypeError('parameter "Target" is required');
    }

    if (!hasOwnProperty(params, 'TargetValue')) {
      throw new TypeError('parameter "TargetValue" is required');
    }

    if (!hasOwnProperty(params, 'Summary')) {
      throw new TypeError('parameter "Summary" is required');
    }

    if (!hasOwnProperty(params, 'Env')) {
      throw new TypeError('parameter "Env" is required');
    }

    if (!hasOwnProperty(params, 'Ext')) {
      throw new TypeError('parameter "Ext" is required');
    }

    return this.request('PushNoticeToiOS', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Granularity - granularity. required.
   */
  queryAppPushStat(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Granularity')) {
      throw new TypeError('parameter "Granularity" is required');
    }

    return this.request('QueryAppPushStat', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} DeviceType - deviceType. required.
   * @param {String} QueryType - queryType. required.
   */
  queryDeviceStat(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'DeviceType')) {
      throw new TypeError('parameter "DeviceType" is required');
    }

    if (!hasOwnProperty(params, 'QueryType')) {
      throw new TypeError('parameter "QueryType" is required');
    }

    return this.request('QueryDeviceStat', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {Long} MessageId - messageId. required.
   */
  queryPushStat(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'MessageId')) {
      throw new TypeError('parameter "MessageId" is required');
    }

    return this.request('QueryPushStat', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} ClientKey - clientKey. required.
   * @param {String} KeyType - keyType. required.
   */
  queryTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'ClientKey')) {
      throw new TypeError('parameter "ClientKey" is required');
    }

    if (!hasOwnProperty(params, 'KeyType')) {
      throw new TypeError('parameter "KeyType" is required');
    }

    return this.request('QueryTags', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  queryUniqueDeviceStat(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('QueryUniqueDeviceStat', params, options);
  }

  /**
   * @param {Long} AppId - appId. required.
   * @param {String} DeviceId - deviceId. required.
   * @param {String} RpcContent - requestBase64Byte. required.
   * @param {Integer} TimeOut - timeout. required.
   */
  revertRpc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    if (!hasOwnProperty(params, 'RpcContent')) {
      throw new TypeError('parameter "RpcContent" is required');
    }

    if (!hasOwnProperty(params, 'TimeOut')) {
      throw new TypeError('parameter "TimeOut" is required');
    }

    return this.request('RevertRpc', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} ClientKey - clientKey. required.
   * @param {String} KeyType - keyType. required.
   * @param {String} TagName - tagName. required.
   */
  unbindTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'ClientKey')) {
      throw new TypeError('parameter "ClientKey" is required');
    }

    if (!hasOwnProperty(params, 'KeyType')) {
      throw new TypeError('parameter "KeyType" is required');
    }

    if (!hasOwnProperty(params, 'TagName')) {
      throw new TypeError('parameter "TagName" is required');
    }

    return this.request('UnbindTag', params, options);
  }

}

module.exports = Client;

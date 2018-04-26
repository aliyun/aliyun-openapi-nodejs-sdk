
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-08-01';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} DeviceId - deviceId. required.
   * @param {String} AliasName - aliasName. required.
   */
  bindAlias(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    if (!hasOwnProperty(params, 'AliasName')) {
      throw new TypeError('parameter "AliasName" is required');
    }

    return this.request('BindAlias', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} DeviceId - deviceId. required.
   * @param {String} PhoneNumber - phoneNumber. required.
   */
  bindPhone(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    return this.request('BindPhone', params, options);
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
   * @param {String} DeviceToken - deviceToken. required.
   * @param {String} Pass - pass. required.
   * @param {String} Body - Body. optional.
   * @param {Boolean} IsDevCert - isDevCert. required.
   */
  certPreflight(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceToken')) {
      throw new TypeError('parameter "DeviceToken" is required');
    }

    if (!hasOwnProperty(params, 'Pass')) {
      throw new TypeError('parameter "Pass" is required');
    }

    if (!hasOwnProperty(params, 'IsDevCert')) {
      throw new TypeError('parameter "IsDevCert" is required');
    }

    return this.request('CertPreflight', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} DeviceId - deviceId. required.
   */
  checkDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    return this.request('CheckDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} DeviceIds - deviceIds. required.
   */
  checkDevices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceIds')) {
      throw new TypeError('parameter "DeviceIds" is required');
    }

    return this.request('CheckDevices', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppName - appName. required.
   * @param {Integer} IndustryId - industryId. optional.
   * @param {String} Description - description. optional.
   */
  createApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('CreateApp', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   */
  deleteApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('DeleteApp', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  listApps(params = {}, options = {}) {
    return this.request('ListApps', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} PushType - pushType. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} Page - page. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  listPushRecords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'PushType')) {
      throw new TypeError('parameter "PushType" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('ListPushRecords', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  listSummaryApps(params = {}, options = {}) {
    return this.request('ListSummaryApps', params, options);
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
   * @param {String} PackageName - packageName. optional.
   * @param {String} DevCertKey - devCertKey. optional.
   * @param {String} DevCertPass - devCertPass. optional.
   * @param {String} ProductCertKey - productCertKey. optional.
   * @param {String} ProductCertPass - productCertPass. optional.
   * @param {String} BundleId - bundleId. optional.
   */
  modifyAppConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('ModifyAppConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} XmAppSecretKey - xmAppSecretKey. optional.
   * @param {String} HwAppKey - hwAppKey. optional.
   * @param {String} HwAppSecretKey - hwAppSecretKey. optional.
   * @param {String} GcmToken - gcmToken. optional.
   */
  modifyAppExtensions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('ModifyAppExtensions', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} PushType - pushType. required.
   * @param {String} DeviceType - deviceType. required.
   * @param {String} Target - target. required.
   * @param {String} TargetValue - targetValue. required.
   * @param {String} Title - title. optional.
   * @param {String} Body - body. required.
   * @param {String} JobKey - jobKey. optional.
   * @param {Integer} SendSpeed - sendSpeed. optional.
   * @param {Boolean} StoreOffline - storeOffline. optional.
   * @param {String} PushTime - pushTime. optional.
   * @param {String} ExpireTime - expireTime. optional.
   * @param {String} iOSApnsEnv - iOSApnsEnv. optional.
   * @param {Boolean} iOSRemind - iOSRemind. optional.
   * @param {String} iOSRemindBody - iOSRemindBody. optional.
   * @param {Integer} iOSBadge - iOSBadge. optional.
   * @param {Boolean} iOSBadgeAutoIncrement - iOSBadgeAutoIncrement. optional.
   * @param {Boolean} iOSSilentNotification - iOSSilentNotification. optional.
   * @param {String} iOSMusic - iOSMusic. optional.
   * @param {String} iOSSubtitle - iOSSubtitle. optional.
   * @param {String} iOSNotificationCategory - iOSNotificationCategory. optional.
   * @param {Boolean} iOSMutableContent - iOSMutableContent. optional.
   * @param {String} iOSExtParameters - iOSExtParameters. optional.
   * @param {String} AndroidNotifyType - androidNotifyType. optional.
   * @param {String} AndroidOpenType - androidOpenType. optional.
   * @param {String} AndroidActivity - androidActivity. optional.
   * @param {String} AndroidMusic - androidMusic. optional.
   * @param {String} AndroidOpenUrl - androidOpenUrl. optional.
   * @param {String} AndroidXiaoMiActivity - androidXiaoMiActivity. optional.
   * @param {String} AndroidXiaoMiNotifyTitle - androidXiaoMiNotifyTitle. optional.
   * @param {String} AndroidXiaoMiNotifyBody - androidXiaoMiNotifyBody. optional.
   * @param {String} AndroidPopupActivity - androidPopupActivity. optional.
   * @param {String} AndroidPopupTitle - androidPopupTitle. optional.
   * @param {String} AndroidPopupBody - androidPopupBody. optional.
   * @param {Integer} AndroidNotificationBarType - androidNotificationBarType. optional.
   * @param {Integer} AndroidNotificationBarPriority - androidNotificationBarPriority. optional.
   * @param {String} AndroidExtParameters - androidExtParameters. optional.
   * @param {Boolean} AndroidRemind - androidRemind. optional.
   * @param {String} AndroidNotificationChannel - androidNotificationChannel. optional.
   * @param {String} SmsTemplateName - smsTemplateName. optional.
   * @param {String} SmsSignName - smsSignName. optional.
   * @param {String} SmsParams - smsParams. optional.
   * @param {Integer} SmsDelaySecs - smsDelaySecs. optional.
   * @param {Integer} SmsSendPolicy - smsSendPolicy. optional.
   */
  push(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'PushType')) {
      throw new TypeError('parameter "PushType" is required');
    }

    if (!hasOwnProperty(params, 'DeviceType')) {
      throw new TypeError('parameter "DeviceType" is required');
    }

    if (!hasOwnProperty(params, 'Target')) {
      throw new TypeError('parameter "Target" is required');
    }

    if (!hasOwnProperty(params, 'TargetValue')) {
      throw new TypeError('parameter "TargetValue" is required');
    }

    if (!hasOwnProperty(params, 'Body')) {
      throw new TypeError('parameter "Body" is required');
    }

    return this.request('Push', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} Target - target. required.
   * @param {String} TargetValue - targetValue. required.
   * @param {String} Title - title. required.
   * @param {String} Body - body. required.
   * @param {String} JobKey - jobKey. optional.
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

    if (!hasOwnProperty(params, 'Title')) {
      throw new TypeError('parameter "Title" is required');
    }

    if (!hasOwnProperty(params, 'Body')) {
      throw new TypeError('parameter "Body" is required');
    }

    return this.request('PushMessageToAndroid', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} Target - target. required.
   * @param {String} TargetValue - targetValue. required.
   * @param {String} Title - title. required.
   * @param {String} Body - body. required.
   * @param {String} JobKey - jobKey. optional.
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

    if (!hasOwnProperty(params, 'Title')) {
      throw new TypeError('parameter "Title" is required');
    }

    if (!hasOwnProperty(params, 'Body')) {
      throw new TypeError('parameter "Body" is required');
    }

    return this.request('PushMessageToiOS', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} Target - target. required.
   * @param {String} TargetValue - targetValue. required.
   * @param {String} Title - title. required.
   * @param {String} Body - body. required.
   * @param {String} JobKey - jobKey. optional.
   * @param {String} ExtParameters - extParameters. optional.
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

    if (!hasOwnProperty(params, 'Title')) {
      throw new TypeError('parameter "Title" is required');
    }

    if (!hasOwnProperty(params, 'Body')) {
      throw new TypeError('parameter "Body" is required');
    }

    return this.request('PushNoticeToAndroid', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} Target - target. required.
   * @param {String} TargetValue - targetValue. required.
   * @param {String} ApnsEnv - apnsEnv. required.
   * @param {String} Title - title. optional.
   * @param {String} Body - body. required.
   * @param {String} JobKey - jobKey. optional.
   * @param {String} ExtParameters - extParameters. optional.
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

    if (!hasOwnProperty(params, 'ApnsEnv')) {
      throw new TypeError('parameter "ApnsEnv" is required');
    }

    if (!hasOwnProperty(params, 'Body')) {
      throw new TypeError('parameter "Body" is required');
    }

    return this.request('PushNoticeToiOS', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} DeviceId - deviceId. required.
   */
  queryAliases(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    return this.request('QueryAliases', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   */
  queryAppConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('QueryAppConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   */
  queryAppInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('QueryAppInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   */
  queryAppSecurityInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('QueryAppSecurityInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} DeviceId - deviceId. required.
   */
  queryDeviceInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    return this.request('QueryDeviceInfo', params, options);
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
   * @param {String} Account - account. required.
   */
  queryDevicesByAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'Account')) {
      throw new TypeError('parameter "Account" is required');
    }

    return this.request('QueryDevicesByAccount', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} Alias - alias. required.
   */
  queryDevicesByAlias(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'Alias')) {
      throw new TypeError('parameter "Alias" is required');
    }

    return this.request('QueryDevicesByAlias', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} MessageId - messageId. required.
   */
  queryPushDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'MessageId')) {
      throw new TypeError('parameter "MessageId" is required');
    }

    return this.request('QueryPushDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} PushType - pushType. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} Page - page. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  queryPushList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'PushType')) {
      throw new TypeError('parameter "PushType" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('QueryPushList', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Granularity - granularity. required.
   */
  queryPushStatByApp(params = {}, options = {}) {
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

    return this.request('QueryPushStatByApp', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {Long} MessageId - messageId. required.
   */
  queryPushStatByMsg(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'MessageId')) {
      throw new TypeError('parameter "MessageId" is required');
    }

    return this.request('QueryPushStatByMsg', params, options);
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
   * @param {String} Granularity - granularity. required.
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

    if (!hasOwnProperty(params, 'Granularity')) {
      throw new TypeError('parameter "Granularity" is required');
    }

    return this.request('QueryUniqueDeviceStat', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} TagName - tagName. required.
   */
  removeTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'TagName')) {
      throw new TypeError('parameter "TagName" is required');
    }

    return this.request('RemoveTag', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SmsTemplateName - smsTemplateName. required.
   * @param {String} SmsSign - smsSign. required.
   * @param {String} SmsTemplateParams - smsTemplateParams. optional.
   * @param {String} SmsReceiver - smsReceiver. required.
   */
  testSms(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SmsTemplateName')) {
      throw new TypeError('parameter "SmsTemplateName" is required');
    }

    if (!hasOwnProperty(params, 'SmsSign')) {
      throw new TypeError('parameter "SmsSign" is required');
    }

    if (!hasOwnProperty(params, 'SmsReceiver')) {
      throw new TypeError('parameter "SmsReceiver" is required');
    }

    return this.request('TestSms', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {Long} MessageId - messageId. required.
   * @param {String} DeviceId - deviceId. optional.
   */
  tracePush(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'MessageId')) {
      throw new TypeError('parameter "MessageId" is required');
    }

    return this.request('TracePush', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} DeviceId - deviceId. required.
   * @param {String} AliasName - aliasName. optional.
   * @param {Boolean} UnbindAll - unbindAll. optional.
   */
  unbindAlias(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    return this.request('UnbindAlias', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} DeviceId - deviceId. required.
   */
  unbindPhone(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    return this.request('UnbindPhone', params, options);
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

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} FileItem - fileItem. required.
   * @param {Boolean} IsDevCert - isDevCert. required.
   */
  uploadAppCert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'FileItem')) {
      throw new TypeError('parameter "FileItem" is required');
    }

    if (!hasOwnProperty(params, 'IsDevCert')) {
      throw new TypeError('parameter "IsDevCert" is required');
    }

    return this.request('UploadAppCert', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppKey - appKey. required.
   * @param {String} CertPass - certPass. required.
   * @param {Boolean} IsDevCert - isDevCert. required.
   */
  validateAppCert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'CertPass')) {
      throw new TypeError('parameter "CertPass" is required');
    }

    if (!hasOwnProperty(params, 'IsDevCert')) {
      throw new TypeError('parameter "IsDevCert" is required');
    }

    return this.request('ValidateAppCert', params, options);
  }

}

module.exports = Client;

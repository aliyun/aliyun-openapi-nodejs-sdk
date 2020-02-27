
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-12-12';
    super(config);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - domain. required.
   * @param {String} AppName - app. required.
   * @param {String} StreamName - stream. required.
   * @param {String} SourceUrl - source_url. required.
   * @param {String} StartTime - start_time. required.
   * @param {String} EndTime - end_time. required.
   */
  addVsPullStreamInfoConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    if (!hasOwnProperty(params, 'SourceUrl')) {
      throw new TypeError('parameter "SourceUrl" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('AddVsPullStreamInfoConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DirectoryId - directoryId. required.
   * @param {String} DeviceId - deviceId. required.
   */
  batchBindDirectories(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DirectoryId')) {
      throw new TypeError('parameter "DirectoryId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    return this.request('BatchBindDirectories', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} TemplateId - templateId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceType - instanceType. required.
   * @param {Boolean} ApplyAll - applyAll. optional.
   * @param {Boolean} Replace - replace. optional.
   */
  batchBindTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    return this.request('BatchBindTemplate', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} TemplateId - templateId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceType - instanceType. required.
   * @param {Boolean} ApplyAll - applyAll. optional.
   * @param {Boolean} Replace - replace. optional.
   */
  batchBindTemplates(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    return this.request('BatchBindTemplates', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   */
  batchDeleteDevices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('BatchDeleteDevices', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainNames - DomainNames. required.
   * @param {String} FunctionNames - FunctionNames. required.
   */
  batchDeleteVsDomainConfigs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainNames')) {
      throw new TypeError('parameter "DomainNames" is required');
    }

    if (!hasOwnProperty(params, 'FunctionNames')) {
      throw new TypeError('parameter "FunctionNames" is required');
    }

    return this.request('BatchDeleteVsDomainConfigs', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - host. required.
   * @param {String} Channel - channel. required.
   * @param {String} LiveStreamType - type. required.
   * @param {String} Oneshot - oneshot. optional.
   * @param {String} ControlStreamAction - action. optional. default: forbid.
   * @param {String} ResumeTime - abstime_end. optional.
   */
  batchForbidVsStream(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Channel')) {
      throw new TypeError('parameter "Channel" is required');
    }

    if (!hasOwnProperty(params, 'LiveStreamType')) {
      throw new TypeError('parameter "LiveStreamType" is required');
    }

    return this.request('BatchForbidVsStream', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - host. required.
   * @param {String} Channel - channel. required.
   * @param {String} LiveStreamType - type. required.
   * @param {String} ControlStreamAction - action. optional. default: resume.
   */
  batchResumeVsStream(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Channel')) {
      throw new TypeError('parameter "Channel" is required');
    }

    if (!hasOwnProperty(params, 'LiveStreamType')) {
      throw new TypeError('parameter "LiveStreamType" is required');
    }

    return this.request('BatchResumeVsStream', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainNames - DomainNames. required.
   * @param {String} Functions - Functions. required.
   */
  batchSetVsDomainConfigs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainNames')) {
      throw new TypeError('parameter "DomainNames" is required');
    }

    if (!hasOwnProperty(params, 'Functions')) {
      throw new TypeError('parameter "Functions" is required');
    }

    return this.request('BatchSetVsDomainConfigs', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   */
  batchStartDevices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('BatchStartDevices', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   */
  batchStartStreams(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('BatchStartStreams', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   * @param {String} StartTime - startTime. optional.
   */
  batchStopDevices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('BatchStopDevices', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   * @param {String} StartTime - startTime. optional.
   */
  batchStopStreams(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('BatchStopStreams', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DirectoryId - directoryId. required.
   * @param {String} DeviceId - deviceId. required.
   */
  batchUnbindDirectories(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DirectoryId')) {
      throw new TypeError('parameter "DirectoryId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    return this.request('BatchUnbindDirectories', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} TemplateId - templateId. optional.
   * @param {String} TemplateType - templateType. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceType - instanceType. required.
   */
  batchUnbindTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    return this.request('BatchUnbindTemplate', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} TemplateId - templateId. optional.
   * @param {String} TemplateType - templateType. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceType - instanceType. required.
   */
  batchUnbindTemplates(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    return this.request('BatchUnbindTemplates', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DirectoryId - directoryId. required.
   * @param {String} DeviceId - deviceId. required.
   */
  bindDirectory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DirectoryId')) {
      throw new TypeError('parameter "DirectoryId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    return this.request('BindDirectory', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} TemplateId - templateId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceType - instanceType. required.
   * @param {Boolean} ApplyAll - applyAll. optional.
   * @param {Boolean} Replace - replace. optional.
   */
  bindTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    return this.request('BindTemplate', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   * @param {String} Iris - iris. optional.
   * @param {String} Focus - focus. optional.
   */
  continuousAdjust(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ContinuousAdjust', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   * @param {String} Pan - pan. optional.
   * @param {String} Tilt - tilt. optional.
   * @param {String} Zoom - zoom. optional.
   */
  continuousMove(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ContinuousMove', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} ParentId - parentId. optional.
   * @param {String} DirectoryId - directoryId. optional.
   * @param {String} Type - type. required.
   * @param {Boolean} AutoStart - autoStart. optional.
   * @param {String} GbId - gbId. optional.
   * @param {String} Ip - ip. optional.
   * @param {Long} Port - port. optional.
   * @param {String} Url - url. optional.
   * @param {String} Username - username. optional.
   * @param {String} Password - password. optional.
   * @param {String} Vendor - vendor. optional.
   * @param {String} Dsn - dsn. optional.
   * @param {String} Longitude - longitude. optional.
   * @param {String} Latitude - latitude. optional.
   * @param {Boolean} AutoPos - autoPos. optional.
   * @param {Long} PosInterval - posInterval. optional.
   * @param {String} Params - params. optional.
   */
  createDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('CreateDevice', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} ParentId - parentId. required.
   */
  createDirectory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ParentId')) {
      throw new TypeError('parameter "ParentId" is required');
    }

    return this.request('CreateDirectory', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} App - app. optional.
   * @param {String} Region - region. optional.
   * @param {String} InProtocol - inProtocol. required.
   * @param {String} OutProtocol - outProtocol. optional.
   * @param {String} PushDomain - pushDomain. optional.
   * @param {String} PlayDomain - playDomain. optional.
   * @param {Boolean} LazyPull - lazyPull. optional.
   * @param {String} Callback - callback. optional.
   */
  createGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'InProtocol')) {
      throw new TypeError('parameter "InProtocol" is required');
    }

    return this.request('CreateGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} StreamId - streamId. required.
   * @param {String} TemplateId - templateId. required.
   * @param {String} Type - type. required.
   * @param {String} FileFormat - fileFormat. required.
   * @param {String} OssBucket - ossBucket. required.
   * @param {String} OssObject - ossObject. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Long} Height - height. optional.
   * @param {Long} Width - width. optional.
   */
  createRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StreamId')) {
      throw new TypeError('parameter "StreamId" is required');
    }

    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'FileFormat')) {
      throw new TypeError('parameter "FileFormat" is required');
    }

    if (!hasOwnProperty(params, 'OssBucket')) {
      throw new TypeError('parameter "OssBucket" is required');
    }

    if (!hasOwnProperty(params, 'OssObject')) {
      throw new TypeError('parameter "OssObject" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('CreateRecord', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} DeviceId - deviceId. optional.
   * @param {Boolean} Enabled - enabled. optional.
   */
  createStream(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('CreateStream', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   */
  createStreamSnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('CreateStreamSnapshot', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} SubscriberName - SubscriberName. required.
   */
  createSubscriber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubscriberName')) {
      throw new TypeError('parameter "SubscriberName" is required');
    }

    return this.request('CreateSubscriber', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} Type - type. required.
   * @param {String} Region - region. optional.
   * @param {String} OssBucket - ossBucket. optional.
   * @param {String} OssEndpoint - ossEndpoint. optional.
   * @param {String} OssFilePrefix - ossFilePrefix. optional.
   * @param {String} Trigger - trigger. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Long} Interval - interval. optional.
   * @param {Long} Retention - retention. optional.
   * @param {String} FileFormat - fileFormat. optional.
   * @param {String} JpgOverwrite - jpgOverwrite. optional.
   * @param {String} JpgSequence - jpgSequence. optional.
   * @param {String} JpgOnDemand - jpgOnDemand. optional.
   * @param {String} Mp4 - mp4. optional.
   * @param {String} Flv - flv. optional.
   * @param {String} HlsM3u8 - hlsM3u8. optional.
   * @param {String} HlsTs - hlsTs. optional.
   * @param {String} Callback - callback. optional.
   * @param {String} TransConfigsJSON - transConfigsJSON. optional.
   */
  createTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('CreateTemplate', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   */
  deleteDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteDevice', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   */
  deleteDirectory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteDirectory', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   */
  deleteGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   * @param {String} PresetId - presetId. required.
   */
  deletePreset(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'PresetId')) {
      throw new TypeError('parameter "PresetId" is required');
    }

    return this.request('DeletePreset', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   */
  deleteRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteRecord', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   */
  deleteStream(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteStream', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   */
  deleteTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteTemplate', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - domain. required.
   * @param {String} AppName - app. required.
   * @param {String} StreamName - stream. required.
   */
  deleteVsPullStreamInfoConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    return this.request('DeleteVsPullStreamInfoConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - DomainName. required.
   * @param {String} ConfigId - ConfigId. required.
   */
  deleteVsSpecificConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'ConfigId')) {
      throw new TypeError('parameter "ConfigId" is required');
    }

    return this.request('DeleteVsSpecificConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - domain. required.
   */
  deleteVsStreamsNotifyUrlConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DeleteVsStreamsNotifyUrlConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. optional.
   */
  describeAccountStat(params = {}, options = {}) {
    return this.request('DescribeAccountStat', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   * @param {Boolean} IncludeStats - includeStats. optional.
   * @param {Boolean} IncludeDirectory - includeDirectory. optional.
   */
  describeDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeDevice', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   * @param {Long} PageSize - pageSize. optional.
   * @param {Long} PageNum - pageNum. optional.
   */
  describeDeviceChannels(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeDeviceChannels', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   * @param {String} ClientIp - clientIp. optional.
   * @param {Long} Expire - expire. optional.
   */
  describeDeviceGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeDeviceGateway', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. optional.
   * @param {String} Name - name. optional.
   * @param {String} Type - type. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} ParentId - parentId. optional.
   * @param {String} DirectoryId - directoryId. optional.
   * @param {String} GbId - gbId. optional.
   * @param {String} Status - status. optional.
   * @param {String} Vendor - vendor. optional.
   * @param {String} SortBy - sortBy. optional.
   * @param {String} SortDirection - sortDirection. optional.
   * @param {Long} PageSize - pageSize. optional.
   * @param {Long} PageNum - pageNum. optional.
   * @param {Boolean} IncludeStats - includeStats. optional.
   * @param {Boolean} IncludeDirectory - includeDirectory. optional.
   */
  describeDevices(params = {}, options = {}) {
    return this.request('DescribeDevices', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} ParentId - parentId. optional.
   * @param {String} SortBy - sortBy. optional.
   * @param {String} SortDirection - sortDirection. optional.
   * @param {Long} PageSize - pageSize. optional.
   * @param {Long} PageNum - pageNum. optional.
   * @param {Boolean} NoPagination - noPagination. optional.
   */
  describeDirectories(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DescribeDirectories', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   */
  describeDirectory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeDirectory', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   * @param {Boolean} IncludeStats - includeStats. optional.
   */
  describeGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. optional.
   * @param {String} Name - name. optional.
   * @param {String} Region - region. optional.
   * @param {String} InProtocol - inProtocol. optional.
   * @param {String} Status - status. optional.
   * @param {String} SortBy - sortBy. optional.
   * @param {String} SortDirection - sortDirection. optional.
   * @param {Long} PageSize - pageSize. optional.
   * @param {Long} PageNum - pageNum. optional.
   * @param {Boolean} IncludeStats - includeStats. optional.
   */
  describeGroups(params = {}, options = {}) {
    return this.request('DescribeGroups', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   */
  describePresets(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribePresets', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   */
  describeRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeRecord', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   */
  describeRecordURL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeRecordURL', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Type - type. required.
   * @param {String} StreamId - streamId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} SortBy - sortBy. optional.
   * @param {String} SortDirection - sortDirection. optional.
   * @param {Long} PageSize - pageSize. optional.
   * @param {Long} PageNum - pageNum. optional.
   */
  describeRecords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'StreamId')) {
      throw new TypeError('parameter "StreamId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeRecords', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   */
  describeStream(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeStream', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   * @param {String} Type - type. optional. default: live.
   * @param {String} OutProtocol - outProtocol. required.
   * @param {String} OutHostType - outHostType. optional. default: host.
   * @param {String} Location - location. optional. default: edge.
   * @param {Boolean} Auth - auth. optional. default: true.
   * @param {String} AuthKey - authKey. optional.
   * @param {Long} Expire - expire. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {String} Transcode - transcode. optional.
   */
  describeStreamURL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'OutProtocol')) {
      throw new TypeError('parameter "OutProtocol" is required');
    }

    return this.request('DescribeStreamURL', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   */
  describeStreamVodList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeStreamVodList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} DeviceId - deviceId. optional.
   * @param {String} ParentId - parentId. optional.
   * @param {String} Name - name. optional.
   * @param {String} Domain - domain. optional.
   * @param {String} App - app. optional.
   * @param {String} SortBy - sortBy. optional.
   * @param {String} SortDirection - sortDirection. optional.
   * @param {Long} PageSize - pageSize. optional.
   * @param {Long} PageNum - pageNum. optional.
   */
  describeStreams(params = {}, options = {}) {
    return this.request('DescribeStreams', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   */
  describeTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeTemplate', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. optional.
   * @param {String} Type - type. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} SortBy - sortBy. optional.
   * @param {String} SortDirection - sortDirection. optional.
   * @param {Long} PageSize - pageSize. optional.
   * @param {Long} PageNum - pageNum. optional.
   */
  describeTemplates(params = {}, options = {}) {
    return this.request('DescribeTemplates', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Url - url. required.
   * @param {String} TxId - txid. optional.
   */
  describeVodStreamURL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Url')) {
      throw new TypeError('parameter "Url" is required');
    }

    return this.request('DescribeVodStreamURL', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - host. required.
   * @param {String} AppName - app. required.
   * @param {String} StreamName - streams. required.
   */
  describeVsBlackListByStreamName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    return this.request('DescribeVsBlackListByStreamName', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} CertName - CertName. required.
   */
  describeVsCertificateDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CertName')) {
      throw new TypeError('parameter "CertName" is required');
    }

    return this.request('DescribeVsCertificateDetail', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - DomainName. optional.
   */
  describeVsCertificateList(params = {}, options = {}) {
    return this.request('DescribeVsCertificateList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeVsDomainBpsData(params = {}, options = {}) {
    return this.request('DescribeVsDomainBpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - domain. required.
   */
  describeVsDomainCertificateInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeVsDomainCertificateInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - domainName. required.
   */
  describeVsDomainCname(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeVsDomainCname', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - DomainName. required.
   * @param {String} FunctionNames - FunctionNames. required.
   */
  describeVsDomainConfigs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'FunctionNames')) {
      throw new TypeError('parameter "FunctionNames" is required');
    }

    return this.request('DescribeVsDomainConfigs', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - DomainName. required.
   */
  describeVsDomainDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeVsDomainDetail', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeVsDomainRecordData(params = {}, options = {}) {
    return this.request('DescribeVsDomainRecordData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeVsDomainReqBpsData(params = {}, options = {}) {
    return this.request('DescribeVsDomainReqBpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeVsDomainReqTrafficData(params = {}, options = {}) {
    return this.request('DescribeVsDomainReqTrafficData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeVsDomainSnapshotData(params = {}, options = {}) {
    return this.request('DescribeVsDomainSnapshotData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeVsDomainTrafficData(params = {}, options = {}) {
    return this.request('DescribeVsDomainTrafficData', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   */
  describeVsInstanceStatus(params = {}, options = {}) {
    return this.request('DescribeVsInstanceStatus', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - domain. required.
   */
  describeVsPullStreamInfoConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeVsPullStreamInfoConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Language - language. optional.
   */
  describeVsRegions(params = {}, options = {}) {
    return this.request('DescribeVsRegions', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   */
  describeVsServiceStatus(params = {}, options = {}) {
    return this.request('DescribeVsServiceStatus', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - host. required.
   * @param {String} AppName - app. optional.
   * @param {String} StreamName - streams. optional.
   * @param {String} StartTime - start_time. optional.
   * @param {String} EndTime - end_time. optional.
   * @param {String} OrderBy - order_by. optional.
   * @param {Integer} PageSize - rows. optional. default: 2000.
   * @param {Integer} PageNum - page. optional. default: 1.
   */
  describeVsStreamBlackList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeVsStreamBlackList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - Vhost. required.
   * @param {String} AppName - App. required.
   * @param {String} StreamName - Vname. required.
   * @param {String} StartTime - StartTime. optional.
   * @param {String} EndTime - EndTime. optional.
   */
  describeVsStreamPublishPlayData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    return this.request('DescribeVsStreamPublishPlayData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - host. required.
   * @param {String} AppName - app. optional.
   * @param {String} StreamName - name. optional.
   * @param {String} Field - field. required.
   * @param {String} StartTime - start_time. optional.
   * @param {String} EndTime - end_time. optional.
   * @param {String} QueryType - query_type. optional.
   * @param {String} StreamType - stream_type. optional.
   * @param {Integer} PageSize - rows. optional. default: 2000.
   * @param {Integer} PageNumber - page. optional. default: 1.
   */
  describeVsStreamUniversalAppStreams(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Field')) {
      throw new TypeError('parameter "Field" is required');
    }

    return this.request('DescribeVsStreamUniversalAppStreams', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - domain. required.
   */
  describeVsStreamsNotifyUrlConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeVsStreamsNotifyUrlConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - host. required.
   * @param {String} AppName - app. optional.
   * @param {String} StreamName - name. optional.
   * @param {Integer} PageSize - rows. optional. default: 2000.
   * @param {Integer} PageNum - page. optional. default: 1.
   * @param {String} StreamType - stream_type. optional.
   * @param {String} StartTime - start_time. optional.
   * @param {String} EndTime - end_time. optional.
   * @param {String} QueryType - query_type. optional.
   * @param {String} OrderBy - order_by. optional.
   */
  describeVsStreamsOnlineList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeVsStreamsOnlineList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - host. required.
   * @param {String} AppName - app. optional.
   * @param {String} StreamName - streamname. optional.
   * @param {String} StartTime - start_time. required.
   * @param {String} EndTime - end_time. required.
   * @param {Integer} PageSize - rows. optional. default: 2000.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {String} StreamType - type. optional.
   * @param {String} QueryType - query_type. optional.
   * @param {String} OrderBy - order_by. optional.
   */
  describeVsStreamsPublishList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeVsStreamsPublishList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} StartTime - StartTime. required.
   * @param {String} EndTime - EndTime. required.
   * @param {String} DomainSwitch - switch. optional.
   * @param {String} DomainName - vhost. optional.
   */
  describeVsUpPeakPublishStreamData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeVsUpPeakPublishStreamData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Stream - stream. required.
   * @param {String} StartTime - start_time. optional.
   * @param {String} EndTime - end_time. optional.
   */
  describeVsUpVideoAudioInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Stream')) {
      throw new TypeError('parameter "Stream" is required');
    }

    return this.request('DescribeVsUpVideoAudioInfo', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   */
  describeVsUserResourcePackage(params = {}, options = {}) {
    return this.request('DescribeVsUserResourcePackage', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - host. required.
   * @param {String} AppName - app. required.
   * @param {String} StreamName - name. required.
   * @param {String} LiveStreamType - type. required.
   * @param {String} Oneshot - oneshot. optional.
   * @param {String} ControlStreamAction - action. optional. default: forbid.
   * @param {String} ResumeTime - abstime_end. optional.
   */
  forbidVsStream(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    if (!hasOwnProperty(params, 'LiveStreamType')) {
      throw new TypeError('parameter "LiveStreamType" is required');
    }

    return this.request('ForbidVsStream', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   * @param {String} PresetId - presetId. required.
   */
  gotoPreset(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'PresetId')) {
      throw new TypeError('parameter "PresetId" is required');
    }

    return this.request('GotoPreset', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} ParentId - parentId. optional.
   * @param {String} DirectoryId - directoryId. optional.
   * @param {String} Type - type. optional.
   * @param {Boolean} AutoStart - autoStart. optional.
   * @param {String} GbId - gbId. optional.
   * @param {String} Ip - ip. optional.
   * @param {Long} Port - port. optional.
   * @param {String} Url - url. optional.
   * @param {String} Username - username. optional.
   * @param {String} Password - password. optional.
   * @param {String} Vendor - vendor. optional.
   * @param {String} Longitude - longitude. optional.
   * @param {String} Latitude - latitude. optional.
   * @param {Boolean} AutoPos - autoPos. optional.
   * @param {Long} PosInterval - posInterval. optional.
   * @param {String} Params - params. optional.
   */
  modifyDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ModifyDevice', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   * @param {String} Channels - channels. required.
   */
  modifyDeviceChannels(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Channels')) {
      throw new TypeError('parameter "Channels" is required');
    }

    return this.request('ModifyDeviceChannels', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   */
  modifyDirectory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ModifyDirectory', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} Region - region. optional.
   * @param {String} InProtocol - inProtocol. optional.
   * @param {String} OutProtocol - outProtocol. optional.
   * @param {Boolean} Enabled - enabled. optional.
   * @param {String} PushDomain - pushDomain. optional.
   * @param {String} PlayDomain - playDomain. optional.
   * @param {Boolean} LazyPull - lazyPull. optional.
   * @param {String} Callback - callback. optional.
   */
  modifyGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ModifyGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   * @param {String} StreamId - streamId. optional.
   * @param {String} TemplateId - templateId. optional.
   * @param {String} Type - type. optional.
   * @param {String} FileFormat - fileFormat. optional.
   * @param {String} OssBucket - ossBucket. optional.
   * @param {String} OssObject - ossObject. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Long} Height - height. optional.
   * @param {Long} Width - width. optional.
   */
  modifyRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ModifyRecord', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   * @param {String} GroupId - groupId. optional.
   * @param {String} DeviceId - deviceId. optional.
   * @param {Boolean} Enabled - enabled. optional.
   */
  modifyStream(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ModifyStream', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} Region - region. optional.
   * @param {String} OssBucket - ossBucket. optional.
   * @param {String} OssEndpoint - ossEndpoint. optional.
   * @param {String} OssFilePrefix - ossFilePrefix. optional.
   * @param {String} Trigger - trigger. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Long} Interval - interval. optional.
   * @param {Long} Retention - retention. optional.
   * @param {String} FileFormat - fileFormat. optional.
   * @param {String} JpgOverwrite - jpgOverwrite. optional.
   * @param {String} JpgSequence - jpgSequence. optional.
   * @param {String} JpgOnDemand - jpgOnDemand. optional.
   * @param {String} Mp4 - mp4. optional.
   * @param {String} Flv - flv. optional.
   * @param {String} HlsM3u8 - hlsM3u8. optional.
   * @param {String} HlsTs - hlsTs. optional.
   * @param {String} Callback - callback. optional.
   * @param {String} TransConfigsJSON - transConfigsJSON. optional.
   */
  modifyTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ModifyTemplate', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - host. required.
   * @param {String} AppName - app. required.
   * @param {String} StreamName - name. required.
   * @param {String} LiveStreamType - type. required.
   * @param {String} ControlStreamAction - action. optional. default: resume.
   */
  resumeVsStream(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    if (!hasOwnProperty(params, 'LiveStreamType')) {
      throw new TypeError('parameter "LiveStreamType" is required');
    }

    return this.request('ResumeVsStream', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   * @param {String} PresetId - presetId. required.
   */
  setPreset(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'PresetId')) {
      throw new TypeError('parameter "PresetId" is required');
    }

    return this.request('SetPreset', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - DomainName. required.
   * @param {String} SSLProtocol - SSLProtocol. required.
   * @param {String} CertName - CertName. optional.
   * @param {String} CertType - CertType. optional.
   * @param {String} SSLPub - SSLPub. optional.
   * @param {String} SSLPri - SSLPri. optional.
   * @param {String} Region - Region. optional.
   * @param {String} ForceSet - ForceSet. optional.
   */
  setVsDomainCertificate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'SSLProtocol')) {
      throw new TypeError('parameter "SSLProtocol" is required');
    }

    return this.request('SetVsDomainCertificate', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - domain. required.
   * @param {String} NotifyUrl - notify_url. required.
   * @param {String} AuthType - sign_method. optional.
   * @param {String} AuthKey - sign_secret. optional.
   */
  setVsStreamsNotifyUrlConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'NotifyUrl')) {
      throw new TypeError('parameter "NotifyUrl" is required');
    }

    return this.request('SetVsStreamsNotifyUrlConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   */
  startDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('StartDevice', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. optional.
   * @param {String} PlayDomain - playDomain. optional.
   * @param {String} App - app. optional.
   * @param {String} Name - name. optional.
   */
  startRecordStream(params = {}, options = {}) {
    return this.request('StartRecordStream', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   */
  startStream(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('StartStream', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   * @param {String} Url - url. required.
   * @param {String} Transcode - transcode. optional.
   */
  startTransferStream(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Url')) {
      throw new TypeError('parameter "Url" is required');
    }

    return this.request('StartTransferStream', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   * @param {Boolean} Iris - iris. optional.
   * @param {Boolean} Focus - focus. optional.
   */
  stopAdjust(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('StopAdjust', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   * @param {String} StartTime - startTime. optional.
   */
  stopDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('StopDevice', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   * @param {Boolean} Pan - pan. optional.
   * @param {Boolean} Tilt - tilt. optional.
   * @param {Boolean} Zoom - zoom. optional.
   */
  stopMove(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('StopMove', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. optional.
   * @param {String} PlayDomain - playDomain. optional.
   * @param {String} App - app. optional.
   * @param {String} Name - name. optional.
   */
  stopRecordStream(params = {}, options = {}) {
    return this.request('StopRecordStream', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   * @param {String} StartTime - startTime. optional.
   */
  stopStream(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('StopStream', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   * @param {String} Transcode - transcode. optional.
   */
  stopTransferStream(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('StopTransferStream', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   */
  syncCatalogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('SyncCatalogs', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DirectoryId - directoryId. required.
   * @param {String} DeviceId - deviceId. required.
   */
  unbindDirectory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DirectoryId')) {
      throw new TypeError('parameter "DirectoryId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    return this.request('UnbindDirectory', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} TemplateId - templateId. optional.
   * @param {String} TemplateType - templateType. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceType - instanceType. required.
   */
  unbindTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    return this.request('UnbindTemplate', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Id - id. required.
   */
  unlockDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UnlockDevice', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} DomainName - domain. required.
   * @param {String} AppName - app. required.
   * @param {String} StreamName - stream. required.
   * @param {String} SourceUrl - source_url. required.
   * @param {String} StartTime - start_time. required.
   * @param {String} EndTime - end_time. required.
   */
  updateVsPullStreamInfoConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    if (!hasOwnProperty(params, 'SourceUrl')) {
      throw new TypeError('parameter "SourceUrl" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('UpdateVsPullStreamInfoConfig', params, options);
  }

}

module.exports = Client;

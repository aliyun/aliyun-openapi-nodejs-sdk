
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-11-01';
    super(config);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AppUid - appUid. required.
   * @param {String} AppRequestId - appRequestId. optional.
   * @param {String} AppTargetUid - appTargetUid. required.
   * @param {String} UserData - userData. optional.
   */
  acceptLinkMic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    if (!hasOwnProperty(params, 'AppTargetUid')) {
      throw new TypeError('parameter "AppTargetUid" is required');
    }

    return this.request('AcceptLinkMic', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {Integer} Enable - enable. required.
   * @param {Integer} CallbackMode - callbackMode. required.
   * @param {String} CallbackUri - callbackUri. optional.
   * @param {Integer} AuthSwitch - authSwitch. optional.
   * @param {String} AuthKey - authKey. optional.
   * @param {String} EventTypes - eventTypes. required.
   */
  addAppCallbackConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'Enable')) {
      throw new TypeError('parameter "Enable" is required');
    }

    if (!hasOwnProperty(params, 'CallbackMode')) {
      throw new TypeError('parameter "CallbackMode" is required');
    }

    if (!hasOwnProperty(params, 'EventTypes')) {
      throw new TypeError('parameter "EventTypes" is required');
    }

    return this.request('AddAppCallbackConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterId - casterId. required.
   * @param {String} ComponentName - componentName. optional.
   * @param {String} LocationId - locationId. required.
   * @param {String} ComponentType - componentType. required.
   * @param {String} Effect - effect. optional.
   * @param {String} ComponentLayer - componentLayer. required.
   * @param {String} TextLayerContent - textLayerContent. optional.
   * @param {String} ImageLayerContent - imageLayerContent. optional.
   * @param {String} CaptionLayerContent - captionLayerContent. optional.
   */
  addCasterComponent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    if (!hasOwnProperty(params, 'LocationId')) {
      throw new TypeError('parameter "LocationId" is required');
    }

    if (!hasOwnProperty(params, 'ComponentType')) {
      throw new TypeError('parameter "ComponentType" is required');
    }

    if (!hasOwnProperty(params, 'ComponentLayer')) {
      throw new TypeError('parameter "ComponentLayer" is required');
    }

    return this.request('AddCasterComponent', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterId - casterId. required.
   * @param {String} EpisodeType - episodeType. required.
   * @param {String} EpisodeName - episodeName. optional.
   * @param {String} ResourceId - resourceId. optional.
   * @param {RepeatList} ComponentId - componentIds. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} SwitchType - switchType. required.
   */
  addCasterEpisode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    if (!hasOwnProperty(params, 'EpisodeType')) {
      throw new TypeError('parameter "EpisodeType" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'SwitchType')) {
      throw new TypeError('parameter "SwitchType" is required');
    }

    return this.request('AddCasterEpisode', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - tokenId. required.
   * @param {String} DomainName - domainName. required.
   * @param {RepeatList} Item - items. required.
   * @param {String} StartTime - startTime. required.
   * @param {Integer} RepeatNum - repeatNum. required.
   * @param {String} SideOutputUrl - sideOutputUrl. required.
   * @param {String} CallbackUrl - callbackUrl. required.
   */
  addCasterEpisodeGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Item')) {
      throw new TypeError('parameter "Item" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'RepeatNum')) {
      throw new TypeError('parameter "RepeatNum" is required');
    }

    if (!hasOwnProperty(params, 'SideOutputUrl')) {
      throw new TypeError('parameter "SideOutputUrl" is required');
    }

    if (!hasOwnProperty(params, 'CallbackUrl')) {
      throw new TypeError('parameter "CallbackUrl" is required');
    }

    return this.request('AddCasterEpisodeGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - tokenId. required.
   * @param {String} Content - content. required.
   */
  addCasterEpisodeGroupContent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    return this.request('AddCasterEpisodeGroupContent', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterId - casterId. required.
   * @param {RepeatList} VideoLayer - videoLayers. required.
   * @param {RepeatList} AudioLayer - audioLayers. required.
   * @param {RepeatList} BlendList - blendList. required.
   * @param {RepeatList} MixList - mixList. required.
   */
  addCasterLayout(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    if (!hasOwnProperty(params, 'VideoLayer')) {
      throw new TypeError('parameter "VideoLayer" is required');
    }

    if (!hasOwnProperty(params, 'AudioLayer')) {
      throw new TypeError('parameter "AudioLayer" is required');
    }

    if (!hasOwnProperty(params, 'BlendList')) {
      throw new TypeError('parameter "BlendList" is required');
    }

    if (!hasOwnProperty(params, 'MixList')) {
      throw new TypeError('parameter "MixList" is required');
    }

    return this.request('AddCasterLayout', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterId - casterId. required.
   * @param {RepeatList} Episode - episodes. required.
   */
  addCasterProgram(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    if (!hasOwnProperty(params, 'Episode')) {
      throw new TypeError('parameter "Episode" is required');
    }

    return this.request('AddCasterProgram', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} CasterId - casterId. required.
   * @param {String} ResourceName - resourceName. required.
   * @param {String} LocationId - locationId. optional.
   * @param {String} LiveStreamUrl - liveStreamUrl. optional.
   * @param {String} MaterialId - materialId. optional.
   * @param {String} VodUrl - vodUrl. optional.
   * @param {Integer} BeginOffset - beginOffset. optional.
   * @param {Integer} EndOffset - endOffset. optional.
   * @param {Integer} RepeatNum - repeatNum. optional.
   * @param {Integer} PtsCallbackInterval - ptsCallbackInterval. optional.
   */
  addCasterVideoResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceName')) {
      throw new TypeError('parameter "ResourceName" is required');
    }

    return this.request('AddCasterVideoResource', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} Domain - domain. required.
   * @param {String} App - app. required.
   * @param {String} Template - template. required.
   * @param {String} TemplateType - type. required.
   * @param {Integer} Height - height. required.
   * @param {Integer} Width - width. required.
   * @param {Integer} FPS - fps. required.
   * @param {Integer} VideoBitrate - bitrate. required.
   * @param {Integer} AudioBitrate - a-bitrate. optional.
   * @param {String} Gop - gop. optional.
   * @param {Integer} Profile - profile. optional.
   */
  addCustomLiveStreamTranscode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'App')) {
      throw new TypeError('parameter "App" is required');
    }

    if (!hasOwnProperty(params, 'Template')) {
      throw new TypeError('parameter "Template" is required');
    }

    if (!hasOwnProperty(params, 'TemplateType')) {
      throw new TypeError('parameter "TemplateType" is required');
    }

    if (!hasOwnProperty(params, 'Height')) {
      throw new TypeError('parameter "Height" is required');
    }

    if (!hasOwnProperty(params, 'Width')) {
      throw new TypeError('parameter "Width" is required');
    }

    if (!hasOwnProperty(params, 'FPS')) {
      throw new TypeError('parameter "FPS" is required');
    }

    if (!hasOwnProperty(params, 'VideoBitrate')) {
      throw new TypeError('parameter "VideoBitrate" is required');
    }

    return this.request('AddCustomLiveStreamTranscode', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} VodTranscodeGroupId - vodTranscodeGroupId. required.
   * @param {Integer} OnDemand - onDemand. optional.
   */
  addIlvbRecordConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'VodTranscodeGroupId')) {
      throw new TypeError('parameter "VodTranscodeGroupId" is required');
    }

    return this.request('AddIlvbRecordConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} TemplateId - templateId. required.
   * @param {String} TemplateName - templateName. required.
   * @param {String} TemplateDescription - templateDescription. required.
   * @param {String} TemplateType - templateType. optional.
   * @param {Integer} Height - height. required.
   * @param {Integer} Width - width. required.
   * @param {Integer} VideoBitRate - videoBitRate. required.
   * @param {Integer} AudioBitRate - audioBitRate. required.
   * @param {Integer} Fps - fps. required.
   * @param {Integer} Gop - gop. required.
   * @param {Boolean} DefaultUseTemplate - defaultUseTemplate. optional.
   */
  addIlvbTranscodeConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    if (!hasOwnProperty(params, 'TemplateName')) {
      throw new TypeError('parameter "TemplateName" is required');
    }

    if (!hasOwnProperty(params, 'TemplateDescription')) {
      throw new TypeError('parameter "TemplateDescription" is required');
    }

    if (!hasOwnProperty(params, 'Height')) {
      throw new TypeError('parameter "Height" is required');
    }

    if (!hasOwnProperty(params, 'Width')) {
      throw new TypeError('parameter "Width" is required');
    }

    if (!hasOwnProperty(params, 'VideoBitRate')) {
      throw new TypeError('parameter "VideoBitRate" is required');
    }

    if (!hasOwnProperty(params, 'AudioBitRate')) {
      throw new TypeError('parameter "AudioBitRate" is required');
    }

    if (!hasOwnProperty(params, 'Fps')) {
      throw new TypeError('parameter "Fps" is required');
    }

    if (!hasOwnProperty(params, 'Gop')) {
      throw new TypeError('parameter "Gop" is required');
    }

    return this.request('AddIlvbTranscodeConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} OssEndpoint - ossEndpoint. required.
   * @param {String} OssBucket - ossBucket. required.
   * @param {RepeatList} RecordFormat - recordFormat. required.
   * @param {String} StreamName - streamName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Integer} OnDemand - onDemand. optional.
   */
  addLiveAppRecordConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'OssEndpoint')) {
      throw new TypeError('parameter "OssEndpoint" is required');
    }

    if (!hasOwnProperty(params, 'OssBucket')) {
      throw new TypeError('parameter "OssBucket" is required');
    }

    if (!hasOwnProperty(params, 'RecordFormat')) {
      throw new TypeError('parameter "RecordFormat" is required');
    }

    return this.request('AddLiveAppRecordConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {Integer} TimeInterval - timeInterval. required.
   * @param {String} OssEndpoint - ossEndpoint. required.
   * @param {String} OssBucket - ossBucket. required.
   * @param {String} OverwriteOssObject - overwriteOssObject. optional.
   * @param {String} SequenceOssObject - sequenceOssObject. optional.
   */
  addLiveAppSnapshotConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'TimeInterval')) {
      throw new TypeError('parameter "TimeInterval" is required');
    }

    if (!hasOwnProperty(params, 'OssEndpoint')) {
      throw new TypeError('parameter "OssEndpoint" is required');
    }

    if (!hasOwnProperty(params, 'OssBucket')) {
      throw new TypeError('parameter "OssBucket" is required');
    }

    return this.request('AddLiveAppSnapshotConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} NotifyUrl - notifyUrl. required.
   */
  addLiveDetectNotifyConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'NotifyUrl')) {
      throw new TypeError('parameter "NotifyUrl" is required');
    }

    return this.request('AddLiveDetectNotifyConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} LiveDomainType - webSiteType. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} Region - region. required.
   * @param {String} CheckUrl - checkUrl. optional.
   * @param {String} Scope - scope. optional.
   * @param {String} TopLevelDomain - topLevelDomain. optional.
   */
  addLiveDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LiveDomainType')) {
      throw new TypeError('parameter "LiveDomainType" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    return this.request('AddLiveDomain', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} PushDomain - pushDomain. required.
   * @param {String} PullDomain - pullDomain. required.
   */
  addLiveDomainMapping(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PushDomain')) {
      throw new TypeError('parameter "PushDomain" is required');
    }

    if (!hasOwnProperty(params, 'PullDomain')) {
      throw new TypeError('parameter "PullDomain" is required');
    }

    return this.request('AddLiveDomainMapping', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} PlayDomain - in_domain. required.
   * @param {String} PullDomain - out_domain. required.
   */
  addLiveDomainPlayMapping(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PlayDomain')) {
      throw new TypeError('parameter "PlayDomain" is required');
    }

    if (!hasOwnProperty(params, 'PullDomain')) {
      throw new TypeError('parameter "PullDomain" is required');
    }

    return this.request('AddLiveDomainPlayMapping', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} Template - template. required.
   */
  addLiveEditConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'Template')) {
      throw new TypeError('parameter "Template" is required');
    }

    return this.request('AddLiveEditConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} NotifyUrl - notifyUrl. required.
   */
  addLiveEditNotifyConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'NotifyUrl')) {
      throw new TypeError('parameter "NotifyUrl" is required');
    }

    return this.request('AddLiveEditNotifyConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CanvasId - canvasId. required.
   * @param {String} CanvasConfig - canvasConfig. required.
   * @param {Integer} CanvasWidth - canvasWidth. required.
   * @param {Integer} CanvasHeight - canvasHeight. required.
   */
  addLiveEditorCanvas(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CanvasId')) {
      throw new TypeError('parameter "CanvasId" is required');
    }

    if (!hasOwnProperty(params, 'CanvasConfig')) {
      throw new TypeError('parameter "CanvasConfig" is required');
    }

    if (!hasOwnProperty(params, 'CanvasWidth')) {
      throw new TypeError('parameter "CanvasWidth" is required');
    }

    if (!hasOwnProperty(params, 'CanvasHeight')) {
      throw new TypeError('parameter "CanvasHeight" is required');
    }

    return this.request('AddLiveEditorCanvas', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   */
  addLiveEditorConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('AddLiveEditorConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} NotifyUrl - notifyUrl. required.
   */
  addLiveEditorNotifyConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'NotifyUrl')) {
      throw new TypeError('parameter "NotifyUrl" is required');
    }

    return this.request('AddLiveEditorNotifyConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} Template - template. required.
   */
  addLiveMixConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'Template')) {
      throw new TypeError('parameter "Template" is required');
    }

    return this.request('AddLiveMixConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} NotifyUrl - notifyUrl. required.
   */
  addLiveMixNotifyConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'NotifyUrl')) {
      throw new TypeError('parameter "NotifyUrl" is required');
    }

    return this.request('AddLiveMixNotifyConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} StreamName - streamName. required.
   * @param {String} SourceUrl - sourceUrl. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  addLivePullStreamInfoConfig(params = {}, options = {}) {
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

    return this.request('AddLivePullStreamInfoConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} NotifyUrl - notifyUrl. required.
   * @param {Boolean} NeedStatusNotify - needStatusNotify. optional. default: false.
   * @param {String} OnDemandUrl - onDemandUrl. optional.
   */
  addLiveRecordNotifyConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'NotifyUrl')) {
      throw new TypeError('parameter "NotifyUrl" is required');
    }

    return this.request('AddLiveRecordNotifyConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} StreamName - streamName. optional.
   * @param {String} VodTranscodeGroupId - vodTranscodeGroupId. required.
   * @param {Integer} CycleDuration - cycleDuration. optional.
   * @param {String} AutoCompose - autoCompose. optional.
   * @param {String} ComposeVodTranscodeGroupId - composeVodTranscodeGroupId. optional.
   */
  addLiveRecordVodConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'VodTranscodeGroupId')) {
      throw new TypeError('parameter "VodTranscodeGroupId" is required');
    }

    return this.request('AddLiveRecordVodConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} OssEndpoint - ossEndpoint. required.
   * @param {String} OssBucket - ossBucket. required.
   * @param {String} OssObject - ossObject. optional.
   * @param {RepeatList} Scene - scenes. optional.
   * @param {Integer} Interval - interval. optional.
   */
  addLiveSnapshotDetectPornConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'OssEndpoint')) {
      throw new TypeError('parameter "OssEndpoint" is required');
    }

    if (!hasOwnProperty(params, 'OssBucket')) {
      throw new TypeError('parameter "OssBucket" is required');
    }

    return this.request('AddLiveSnapshotDetectPornConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} Domain - domain. required.
   * @param {String} App - app. required.
   * @param {String} Template - template. required.
   */
  addLiveStreamTranscode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'App')) {
      throw new TypeError('parameter "App" is required');
    }

    if (!hasOwnProperty(params, 'Template')) {
      throw new TypeError('parameter "Template" is required');
    }

    return this.request('AddLiveStreamTranscode', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} StreamName - streamName. required.
   * @param {String} MixDomainName - mixDomainName. required.
   * @param {String} MixAppName - mixAppName. required.
   * @param {String} MixStreamName - mixStreamName. required.
   */
  addMultipleStreamMixService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    if (!hasOwnProperty(params, 'MixDomainName')) {
      throw new TypeError('parameter "MixDomainName" is required');
    }

    if (!hasOwnProperty(params, 'MixAppName')) {
      throw new TypeError('parameter "MixAppName" is required');
    }

    if (!hasOwnProperty(params, 'MixStreamName')) {
      throw new TypeError('parameter "MixStreamName" is required');
    }

    return this.request('AddMultipleStreamMixService', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {Integer} Group - group. required.
   * @param {String} DomainName - domain. required.
   * @param {String} AppName - app. required.
   * @param {String} StreamName - stream_name. required.
   * @param {String} Flag - flag. required.
   */
  addPrivateLineConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Group')) {
      throw new TypeError('parameter "Group" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    if (!hasOwnProperty(params, 'Flag')) {
      throw new TypeError('parameter "Flag" is required');
    }

    return this.request('AddPrivateLineConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domain. required.
   * @param {String} AppName - app. required.
   * @param {String} StreamName - stream. required.
   * @param {String} Text - text. required.
   * @param {String} Pattern - pattern. required.
   * @param {Integer} Repeat - repeat. required.
   * @param {Integer} Delay - delay. required.
   */
  addTrancodeSEI(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    if (!hasOwnProperty(params, 'Text')) {
      throw new TypeError('parameter "Text" is required');
    }

    if (!hasOwnProperty(params, 'Pattern')) {
      throw new TypeError('parameter "Pattern" is required');
    }

    if (!hasOwnProperty(params, 'Repeat')) {
      throw new TypeError('parameter "Repeat" is required');
    }

    if (!hasOwnProperty(params, 'Delay')) {
      throw new TypeError('parameter "Delay" is required');
    }

    return this.request('AddTrancodeSEI', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   */
  allowAllSendMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    return this.request('AllowAllSendMessage', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   */
  allowPushStream(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    return this.request('AllowPushStream', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AppUid - appUid. required.
   * @param {String} ForbidAppUid - banAppUid. required.
   */
  allowRoomChat(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    if (!hasOwnProperty(params, 'ForbidAppUid')) {
      throw new TypeError('parameter "ForbidAppUid" is required');
    }

    return this.request('AllowRoomChat', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AppUid - appUid. required.
   */
  allowSendMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AllowSendMessage', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - AppId. required.
   * @param {String} AppUid - AppUserId. required.
   * @param {String} BoardId - BoardId. required.
   */
  applyBoardToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    if (!hasOwnProperty(params, 'BoardId')) {
      throw new TypeError('parameter "BoardId" is required');
    }

    return this.request('ApplyBoardToken', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - AppId. required.
   */
  applyRecordToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('ApplyRecordToken', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AppUid - appUid. required.
   */
  applyToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('ApplyToken', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainNames - domainNames. required.
   * @param {String} FunctionNames - functionNames. required.
   */
  batchDeleteLiveDomainConfigs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainNames')) {
      throw new TypeError('parameter "DomainNames" is required');
    }

    if (!hasOwnProperty(params, 'FunctionNames')) {
      throw new TypeError('parameter "FunctionNames" is required');
    }

    return this.request('BatchDeleteLiveDomainConfigs', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainNames - domainNames. required.
   * @param {String} Functions - functions. required.
   */
  batchSetLiveDomainConfigs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainNames')) {
      throw new TypeError('parameter "DomainNames" is required');
    }

    if (!hasOwnProperty(params, 'Functions')) {
      throw new TypeError('parameter "Functions" is required');
    }

    return this.request('BatchSetLiveDomainConfigs', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainNames - domainNames. required.
   */
  batchStartLiveDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainNames')) {
      throw new TypeError('parameter "DomainNames" is required');
    }

    return this.request('BatchStartLiveDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainNames - domainNames. required.
   */
  batchStopLiveDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainNames')) {
      throw new TypeError('parameter "DomainNames" is required');
    }

    return this.request('BatchStopLiveDomain', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AppUid - appUid. required.
   * @param {String} CancelRequestId - cancelRequestId. required.
   * @param {String} AppTargetUid - appTargetUid. required.
   * @param {String} UserData - userData. optional.
   */
  cancelLinkMic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    if (!hasOwnProperty(params, 'CancelRequestId')) {
      throw new TypeError('parameter "CancelRequestId" is required');
    }

    if (!hasOwnProperty(params, 'AppTargetUid')) {
      throw new TypeError('parameter "AppTargetUid" is required');
    }

    return this.request('CancelLinkMic', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - Domain. required.
   */
  checkSnapshotStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('CheckSnapshotStatus', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - AppId. required.
   * @param {String} BoardId - BoardId. required.
   */
  completeBoard(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'BoardId')) {
      throw new TypeError('parameter "BoardId" is required');
    }

    return this.request('CompleteBoard', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - AppId. required.
   * @param {String} RecordId - RecordId. required.
   * @param {String} EndTime - EndTime. required.
   */
  completeBoardRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RecordId')) {
      throw new TypeError('parameter "RecordId" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('CompleteBoardRecord', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterName - casterName. required.
   * @param {String} SrcCasterId - srcCasterId. required.
   * @param {String} ClientToken - tokenId. required.
   */
  copyCaster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterName')) {
      throw new TypeError('parameter "CasterName" is required');
    }

    if (!hasOwnProperty(params, 'SrcCasterId')) {
      throw new TypeError('parameter "SrcCasterId" is required');
    }

    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    return this.request('CopyCaster', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterId - casterId. required.
   * @param {String} FromSceneId - fromSceneId. required.
   * @param {String} ToSceneId - toSceneId. required.
   */
  copyCasterSceneConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    if (!hasOwnProperty(params, 'FromSceneId')) {
      throw new TypeError('parameter "FromSceneId" is required');
    }

    if (!hasOwnProperty(params, 'ToSceneId')) {
      throw new TypeError('parameter "ToSceneId" is required');
    }

    return this.request('CopyCasterSceneConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppName - appName. required.
   * @param {String} AppType - appType. required.
   * @param {String} ClientToken - clientToken. required.
   * @param {String} PlayDomain - playDomain. optional.
   * @param {String} PushDomain - pushDomain. optional.
   * @param {String} RtcAppId - rtcAppId. optional.
   * @param {Boolean} DefaultTranscode - defaultTranscode. optional.
   */
  createApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'AppType')) {
      throw new TypeError('parameter "AppType" is required');
    }

    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    return this.request('CreateApp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - AppId. required.
   * @param {String} AppUid - AppUserId. required.
   */
  createBoard(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('CreateBoard', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - AppId. optional.
   */
  createBoardApp(params = {}, options = {}) {
    return this.request('CreateBoardApp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterName - casterName. optional.
   * @param {String} ClientToken - tokenId. required.
   * @param {Integer} NormType - normType. required.
   * @param {String} ChargeType - chargeType. required.
   * @param {String} PurchaseTime - purchaseTime. optional.
   * @param {String} ExpireTime - expireTime. optional.
   * @param {String} CasterTemplate - casterTemplate. optional.
   */
  createCaster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'NormType')) {
      throw new TypeError('parameter "NormType" is required');
    }

    if (!hasOwnProperty(params, 'ChargeType')) {
      throw new TypeError('parameter "ChargeType" is required');
    }

    return this.request('CreateCaster', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Version - version. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} CasterId - casterId. required.
   * @param {String} ClientToken - tokenId. optional.
   * @param {String} SceneName - sceneName. optional.
   * @param {Integer} OutputType - outputType. required.
   */
  createCasterScene(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    if (!hasOwnProperty(params, 'OutputType')) {
      throw new TypeError('parameter "OutputType" is required');
    }

    return this.request('CreateCasterScene', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} StreamName - streamName. required.
   * @param {String} OssEndpoint - ossEndpoint. required.
   * @param {String} OssBucket - ossBucket. required.
   * @param {String} OssObject - ossObject. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  createLiveStreamRecordIndexFiles(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    if (!hasOwnProperty(params, 'OssEndpoint')) {
      throw new TypeError('parameter "OssEndpoint" is required');
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

    return this.request('CreateLiveStreamRecordIndexFiles', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AnchorId - anchorId. required.
   * @param {String} TemplateIds - templateIds. optional.
   * @param {Boolean} UseAppTranscode - useAppTranscode. optional.
   */
  createRoom(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'AnchorId')) {
      throw new TypeError('parameter "AnchorId" is required');
    }

    return this.request('CreateRoom', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
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
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Group - resourceGroupId. optional.
   * @param {String} DomainNames - domainName. optional.
   * @param {String} Dimension - dimension. required.
   * @param {String} TaskName - name. optional.
   */
  createUsageDetailDataExportTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Dimension')) {
      throw new TypeError('parameter "Dimension" is required');
    }

    return this.request('CreateUsageDetailDataExportTask', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   */
  deleteApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DeleteApp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - AppId. required.
   * @param {String} BoardId - BoardId. required.
   */
  deleteBoard(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'BoardId')) {
      throw new TypeError('parameter "BoardId" is required');
    }

    return this.request('DeleteBoard', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterId - casterId. required.
   */
  deleteCaster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    return this.request('DeleteCaster', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterId - casterId. required.
   * @param {String} ComponentId - componentId. required.
   */
  deleteCasterComponent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    if (!hasOwnProperty(params, 'ComponentId')) {
      throw new TypeError('parameter "ComponentId" is required');
    }

    return this.request('DeleteCasterComponent', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterId - casterId. required.
   * @param {String} EpisodeId - episodeId. required.
   */
  deleteCasterEpisode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    if (!hasOwnProperty(params, 'EpisodeId')) {
      throw new TypeError('parameter "EpisodeId" is required');
    }

    return this.request('DeleteCasterEpisode', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProgramId - programId. required.
   */
  deleteCasterEpisodeGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProgramId')) {
      throw new TypeError('parameter "ProgramId" is required');
    }

    return this.request('DeleteCasterEpisodeGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterId - casterId. required.
   * @param {String} LayoutId - layoutId. required.
   */
  deleteCasterLayout(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    if (!hasOwnProperty(params, 'LayoutId')) {
      throw new TypeError('parameter "LayoutId" is required');
    }

    return this.request('DeleteCasterLayout', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterId - casterId. required.
   */
  deleteCasterProgram(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    return this.request('DeleteCasterProgram', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Version - version. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} CasterId - casterId. required.
   * @param {String} sceneId - sceneId. required.
   */
  deleteCasterScene(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    if (!hasOwnProperty(params, 'sceneId')) {
      throw new TypeError('parameter "sceneId" is required');
    }

    return this.request('DeleteCasterScene', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterId - casterId. required.
   * @param {String} SceneId - sceneId. required.
   * @param {String} Type - type. required.
   */
  deleteCasterSceneConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    if (!hasOwnProperty(params, 'SceneId')) {
      throw new TypeError('parameter "SceneId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('DeleteCasterSceneConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterId - casterId. required.
   * @param {String} ResourceId - resourceId. required.
   */
  deleteCasterVideoResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    return this.request('DeleteCasterVideoResource', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   */
  deleteIlvbRecordConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DeleteIlvbRecordConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} TemplateId - templateId. required.
   */
  deleteIlvbTranscodeConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('DeleteIlvbTranscodeConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} StreamName - streamName. optional.
   */
  deleteLiveAppRecordConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('DeleteLiveAppRecordConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   */
  deleteLiveAppSnapshotConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('DeleteLiveAppSnapshotConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   */
  deleteLiveDetectNotifyConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DeleteLiveDetectNotifyConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   */
  deleteLiveDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DeleteLiveDomain', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} PushDomain - pushDomain. required.
   * @param {String} PullDomain - pullDomain. required.
   */
  deleteLiveDomainMapping(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PushDomain')) {
      throw new TypeError('parameter "PushDomain" is required');
    }

    if (!hasOwnProperty(params, 'PullDomain')) {
      throw new TypeError('parameter "PullDomain" is required');
    }

    return this.request('DeleteLiveDomainMapping', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} PlayDomain - in_domain. required.
   * @param {String} PullDomain - out_domain. required.
   */
  deleteLiveDomainPlayMapping(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PlayDomain')) {
      throw new TypeError('parameter "PlayDomain" is required');
    }

    if (!hasOwnProperty(params, 'PullDomain')) {
      throw new TypeError('parameter "PullDomain" is required');
    }

    return this.request('DeleteLiveDomainPlayMapping', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   */
  deleteLiveEditConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('DeleteLiveEditConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   */
  deleteLiveEditNotifyConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DeleteLiveEditNotifyConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CanvasId - canvasId. required.
   */
  deleteLiveEditorCanvas(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CanvasId')) {
      throw new TypeError('parameter "CanvasId" is required');
    }

    return this.request('DeleteLiveEditorCanvas', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   */
  deleteLiveEditorConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('DeleteLiveEditorConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   */
  deleteLiveEditorNotifyConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DeleteLiveEditorNotifyConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domain. required.
   * @param {String} AppName - app. required.
   */
  deleteLiveLazyPullStreamInfoConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('DeleteLiveLazyPullStreamInfoConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   */
  deleteLiveMixConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('DeleteLiveMixConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   */
  deleteLiveMixNotifyConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DeleteLiveMixNotifyConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} StreamName - streamName. required.
   */
  deleteLivePullStreamInfoConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    return this.request('DeleteLivePullStreamInfoConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   */
  deleteLiveRecordNotifyConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DeleteLiveRecordNotifyConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} StreamName - streamName. optional.
   */
  deleteLiveRecordVodConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('DeleteLiveRecordVodConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   */
  deleteLiveSnapshotDetectPornConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('DeleteLiveSnapshotDetectPornConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} ConfigId - configId. required.
   */
  deleteLiveSpecificConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'ConfigId')) {
      throw new TypeError('parameter "ConfigId" is required');
    }

    return this.request('DeleteLiveSpecificConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} Domain - domain. required.
   * @param {String} App - app. required.
   * @param {String} Template - template. required.
   */
  deleteLiveStreamTranscode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'App')) {
      throw new TypeError('parameter "App" is required');
    }

    if (!hasOwnProperty(params, 'Template')) {
      throw new TypeError('parameter "Template" is required');
    }

    return this.request('DeleteLiveStreamTranscode', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domain. required.
   */
  deleteLiveStreamsNotifyUrlConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DeleteLiveStreamsNotifyUrlConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domain. required.
   * @param {String} StreamName - stream_name. required.
   * @param {String} AppName - app. required.
   * @param {String} Flag - flag. required.
   */
  deletePrivateLineConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'Flag')) {
      throw new TypeError('parameter "Flag" is required');
    }

    return this.request('DeletePrivateLineConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   */
  deleteRoom(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    return this.request('DeleteRoom', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   */
  describeAppCallbackConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DescribeAppCallbackConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. optional.
   * @param {String} RegionName - regionName. optional.
   * @param {String} Order - order. optional.
   */
  describeApps(params = {}, options = {}) {
    return this.request('DescribeApps', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - host. required.
   * @param {String} AppName - app. required.
   * @param {String} StreamName - streams. required.
   */
  describeBlackListByStreamName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    return this.request('DescribeBlackListByStreamName', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - AppId. required.
   * @param {String} StartTime - FromTS. required.
   * @param {String} EndTime - EndTS. optional.
   * @param {String} BoardId - BoardId. required.
   */
  describeBoardEvents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'BoardId')) {
      throw new TypeError('parameter "BoardId" is required');
    }

    return this.request('DescribeBoardEvents', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - AppId. required.
   * @param {String} BoardId - BoardId. required.
   */
  describeBoardSnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'BoardId')) {
      throw new TypeError('parameter "BoardId" is required');
    }

    return this.request('DescribeBoardSnapshot', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - AppId. required.
   * @param {Integer} PageNum - PageNum. required.
   * @param {Integer} PageSize - PageSize. required.
   */
  describeBoards(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeBoards', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} CasterId - casterId. required.
   */
  describeCasterChannels(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    return this.request('DescribeCasterChannels', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterId - casterId. required.
   * @param {String} ComponentId - componentId. optional.
   */
  describeCasterComponents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    return this.request('DescribeCasterComponents', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} CasterId - casterId. required.
   */
  describeCasterConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    return this.request('DescribeCasterConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterId - casterId. required.
   * @param {String} LayoutId - layoutId. optional.
   */
  describeCasterLayouts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    return this.request('DescribeCasterLayouts', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterId - casterId. required.
   * @param {String} EpisodeId - episodeId. optional.
   * @param {String} EpisodeType - episodeType. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Integer} PageNum - page. optional.
   * @param {Integer} PageSize - rows. optional.
   * @param {Integer} Status - status. optional.
   */
  describeCasterProgram(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    return this.request('DescribeCasterProgram', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterId - casterId. required.
   */
  describeCasterRtcInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    return this.request('DescribeCasterRtcInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} CasterId - casterId. required.
   * @param {String} SceneId - sceneId. required.
   */
  describeCasterSceneAudio(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    if (!hasOwnProperty(params, 'SceneId')) {
      throw new TypeError('parameter "SceneId" is required');
    }

    return this.request('DescribeCasterSceneAudio', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterId - casterId. required.
   * @param {String} SceneId - sceneId. optional.
   */
  describeCasterScenes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    return this.request('DescribeCasterScenes', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} CasterId - casterId. required.
   */
  describeCasterStreamUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    return this.request('DescribeCasterStreamUrl', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} CasterId - casterId. required.
   */
  describeCasterVideoResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    return this.request('DescribeCasterVideoResources', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} CasterId - casterId. optional.
   * @param {String} CasterName - casterName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Integer} PageNum - page. optional.
   * @param {Integer} PageSize - rows. optional.
   * @param {Integer} Status - status. optional.
   */
  describeCasters(params = {}, options = {}) {
    return this.request('DescribeCasters', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - AppId. required.
   * @param {String} BoardId - BoardId. required.
   */
  describeClientCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'BoardId')) {
      throw new TypeError('parameter "BoardId" is required');
    }

    return this.request('DescribeClientCount', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - AppId. required.
   * @param {String} BoardId - BoardId. required.
   * @param {Integer} PageNum - PageNum. required.
   * @param {Integer} PageSize - PageSize. required.
   */
  describeClientList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'BoardId')) {
      throw new TypeError('parameter "BoardId" is required');
    }

    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeClientList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Area - area. optional. default: CN.
   * @param {String} Field - field. required.
   * @param {String} Interval - interval. optional.
   */
  describeDomainUsageData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Field')) {
      throw new TypeError('parameter "Field" is required');
    }

    return this.request('DescribeDomainUsageData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} Order - order. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeForbidPushStreamRoomList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DescribeForbidPushStreamRoomList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeForbidRoomChatList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    return this.request('DescribeForbidRoomChatList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domain. optional.
   * @param {String} Time - time. required.
   */
  describeHlsLiveStreamRealTimeBpsData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    return this.request('DescribeHlsLiveStreamRealTimeBpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   */
  describeIlvbRecordConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DescribeIlvbRecordConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AppUid - appUid. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeIlvbRecordList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeIlvbRecordList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. optional.
   */
  describeIlvbRegions(params = {}, options = {}) {
    return this.request('DescribeIlvbRegions', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} Order - order. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeIlvbTranscodeConfigList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DescribeIlvbTranscodeConfigList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   */
  describeLikeInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    return this.request('DescribeLikeInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AppUid - appUid. required.
   */
  describeLinkMicInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('DescribeLinkMicInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domain. required.
   * @param {String} BizType - biz_type. required.
   * @param {RepeatList} Scenes - scenes. required.
   * @param {RepeatList} Tasks - tasks. required.
   */
  describeLiveAudit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'BizType')) {
      throw new TypeError('parameter "BizType" is required');
    }

    if (!hasOwnProperty(params, 'Scenes')) {
      throw new TypeError('parameter "Scenes" is required');
    }

    if (!hasOwnProperty(params, 'Tasks')) {
      throw new TypeError('parameter "Tasks" is required');
    }

    return this.request('DescribeLiveAudit', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DomainName - host. required.
   * @param {String} AppName - app. optional.
   * @param {String} Field - field. optional.
   * @param {String} StartTime - start_time. optional.
   * @param {String} EndTime - end_time. optional.
   * @param {String} OrderBy - order_by. optional.
   * @param {Integer} PageSize - rows. optional. default: 2000.
   * @param {Integer} PageNumber - page. optional. default: 1.
   */
  describeLiveBlackListAppStreams(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveBlackListAppStreams', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} CertName - certName. required.
   */
  describeLiveCertificateDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CertName')) {
      throw new TypeError('parameter "CertName" is required');
    }

    return this.request('DescribeLiveCertificateDetail', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. optional.
   */
  describeLiveCertificateList(params = {}, options = {}) {
    return this.request('DescribeLiveCertificateList', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   */
  describeLiveDetectNotifyConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveDetectNotifyConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Version - version. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domain. required.
   * @param {String} AppName - app. required.
   * @param {String} StreamName - stream. required.
   * @param {String} Scene - scene. required.
   * @param {RepeatList} Rate - rate. optional.
   * @param {RepeatList} Label - label. optional.
   * @param {RepeatList} Suggestion - suggestion. optional.
   * @param {Integer} StartTime - start_time. required.
   * @param {Integer} EndTime - end_time. required.
   * @param {String} Order - order. optional.
   * @param {Integer} PageNum - page_num. optional.
   * @param {Integer} PageSize - page_size. optional.
   */
  describeLiveDetectResultDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    if (!hasOwnProperty(params, 'Scene')) {
      throw new TypeError('parameter "Scene" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeLiveDetectResultDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Version - version. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domain. required.
   * @param {String} AppName - app. optional.
   * @param {String} StreamName - stream. optional.
   * @param {String} Scene - scene. required.
   * @param {RepeatList} Label - label. optional.
   * @param {RepeatList} Suggestion - suggestion. optional.
   * @param {Integer} StartTime - start_time. required.
   * @param {Integer} EndTime - end_time. required.
   * @param {String} Order - order. optional.
   * @param {Integer} PageNum - page_num. optional.
   * @param {Integer} PageSize - page_size. optional.
   */
  describeLiveDetectResultDigest(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Scene')) {
      throw new TypeError('parameter "Scene" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeLiveDetectResultDigest', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DiamondDataId - diamondDataId. required.
   * @param {String} QueryValueType - queryValueType. required.
   * @param {String} QueryValue - queryValue. optional.
   */
  describeLiveDiamondValue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiamondDataId')) {
      throw new TypeError('parameter "DiamondDataId" is required');
    }

    if (!hasOwnProperty(params, 'QueryValueType')) {
      throw new TypeError('parameter "QueryValueType" is required');
    }

    return this.request('DescribeLiveDiamondValue', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeLiveDomainBpsData(params = {}, options = {}) {
    return this.request('DescribeLiveDomainBpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domainName. required.
   */
  describeLiveDomainCname(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveDomainCname', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} FunctionNames - functionNames. required.
   */
  describeLiveDomainConfigs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'FunctionNames')) {
      throw new TypeError('parameter "FunctionNames" is required');
    }

    return this.request('DescribeLiveDomainConfigs', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   */
  describeLiveDomainDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveDomainDetail', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - pkvalue. required.
   * @param {String} QueryTime - time. required.
   */
  describeLiveDomainFrameRateAndBitRateData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'QueryTime')) {
      throw new TypeError('parameter "QueryTime" is required');
    }

    return this.request('DescribeLiveDomainFrameRateAndBitRateData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   */
  describeLiveDomainHitRateData(params = {}, options = {}) {
    return this.request('DescribeLiveDomainHitRateData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeLiveDomainHttpCodeData(params = {}, options = {}) {
    return this.request('DescribeLiveDomainHttpCodeData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {Long} PageSize - pageSize. optional. default: 300.
   * @param {Long} PageNumber - pageIndex. optional. default: 1.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeLiveDomainLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveDomainLog', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - host. required.
   */
  describeLiveDomainMapping(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveDomainMapping', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeLiveDomainMax95BpsData(params = {}, options = {}) {
    return this.request('DescribeLiveDomainMax95BpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domain. required.
   * @param {String} QueryTime - time. optional.
   */
  describeLiveDomainOnlineUserNum(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveDomainOnlineUserNum', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   */
  describeLiveDomainOriginBpsData(params = {}, options = {}) {
    return this.request('DescribeLiveDomainOriginBpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   */
  describeLiveDomainOriginTrafficData(params = {}, options = {}) {
    return this.request('DescribeLiveDomainOriginTrafficData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeLiveDomainPvUvData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveDomainPvUvData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} TimeMerge - timeMerge. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} FixTimeGap - fixTimeGap. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeLiveDomainQpsData(params = {}, options = {}) {
    return this.request('DescribeLiveDomainQpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domainName. required.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeLiveDomainRealTimeBpsData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveDomainRealTimeBpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeLiveDomainRealTimeHttpCodeData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveDomainRealTimeHttpCodeData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeLiveDomainRealTimeTrafficData(params = {}, options = {}) {
    return this.request('DescribeLiveDomainRealTimeTrafficData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domain. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} RecordType - type. optional.
   */
  describeLiveDomainRecordData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeLiveDomainRecordData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeLiveDomainRegionData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveDomainRegionData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domain. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeLiveDomainSnapshotData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeLiveDomainSnapshotData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - Vhost. required.
   * @param {String} QueryTime - QueryTime. optional.
   * @param {Integer} PageSize - Limit. optional. default: 1000.
   * @param {Integer} PageNumber - Page. optional. default: 1.
   */
  describeLiveDomainStreamPublishPlayData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveDomainStreamPublishPlayData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeLiveDomainTrafficData(params = {}, options = {}) {
    return this.request('DescribeLiveDomainTrafficData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domain. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeLiveDomainTranscodeData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeLiveDomainTranscodeData', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. required.
   */
  describeLiveDomains(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeLiveDomains', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   */
  describeLiveEditConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveEditConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   */
  describeLiveEditNotifyConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveEditNotifyConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   */
  describeLiveEditorConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveEditorConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   */
  describeLiveEditorNotifyConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveEditorNotifyConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   */
  describeLiveEditorTranscodeTemplates(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('DescribeLiveEditorTranscodeTemplates', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domain. required.
   * @param {String} AppName - app. optional.
   */
  describeLiveLazyPullStreamConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveLazyPullStreamConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} BusinessLocationType - businessLocationType. optional.
   * @param {String} Names - names. optional.
   * @param {String} FilterOr - filterOr. optional.
   * @param {String} Language - language. optional.
   * @param {String} PhysicalLocationStatus - physicalLocationStatus. optional.
   * @param {String} Bid - bid. optional.
   * @param {String} Filters - filters. optional.
   * @param {Integer} Depth - depth. optional.
   */
  describeLiveLocations(params = {}, options = {}) {
    return this.request('DescribeLiveLocations', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   */
  describeLiveMixConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveMixConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   */
  describeLiveMixNotifyConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveMixNotifyConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   */
  describeLivePullStreamConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLivePullStreamConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. optional.
   * @param {String} StreamName - streamName. optional.
   * @param {Integer} PageNum - pageNum. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} Order - order. optional. default: asc.
   */
  describeLiveRecordConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveRecordConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   */
  describeLiveRecordNotifyConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveRecordNotifyConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. optional.
   * @param {String} StreamName - streamName. optional.
   * @param {Long} PageNum - pageNum. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   */
  describeLiveRecordVodConfigs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveRecordVodConfigs', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   */
  describeLiveRegions(params = {}, options = {}) {
    return this.request('DescribeLiveRegions', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourcePackageNames - resourcePackageNames. optional.
   */
  describeLiveResourcePackage(params = {}, options = {}) {
    return this.request('DescribeLiveResourcePackage', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - Vhost. required.
   * @param {String} Room - RewriteKey. required.
   * @param {String} StartTime - StartTime. optional.
   * @param {String} EndTime - EndTime. optional.
   */
  describeLiveRoomPublishPlayData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Room')) {
      throw new TypeError('parameter "Room" is required');
    }

    return this.request('DescribeLiveRoomPublishPlayData', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   */
  describeLiveService(params = {}, options = {}) {
    return this.request('DescribeLiveService', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Version - version. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domain. required.
   * @param {String} AppName - app. optional.
   */
  describeLiveShiftStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveShiftStatus', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. optional.
   * @param {Integer} PageNum - pageNum. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} Order - order. optional. default: asc.
   */
  describeLiveSnapshotConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveSnapshotConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. optional.
   * @param {Integer} PageNum - pageNum. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} Order - order. optional. default: asc.
   */
  describeLiveSnapshotDetectPornConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveSnapshotDetectPornConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} PullDomain - outdomain. required.
   */
  describeLiveSpecificDomainMapping(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PullDomain')) {
      throw new TypeError('parameter "PullDomain" is required');
    }

    return this.request('DescribeLiveSpecificDomainMapping', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DomainName - host. required.
   * @param {String} AppName - app. optional.
   * @param {String} Field - field. required.
   * @param {String} Online - online. required.
   * @param {String} StartTime - start_time. optional.
   * @param {String} EndTime - end_time. optional.
   * @param {String} StreamType - stream_type. optional.
   * @param {String} Type - type. optional.
   * @param {String} OrderBy - order_by. optional.
   * @param {Integer} PageSize - rows. optional. default: 2000.
   * @param {Integer} PageNumber - page. optional. default: 1.
   */
  describeLiveStreamAppStreams(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Field')) {
      throw new TypeError('parameter "Field" is required');
    }

    if (!hasOwnProperty(params, 'Online')) {
      throw new TypeError('parameter "Online" is required');
    }

    return this.request('DescribeLiveStreamAppStreams', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. optional.
   * @param {String} StreamName - streamName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeLiveStreamBitRateData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveStreamBitRateData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - host. required.
   * @param {String} AppName - app. optional.
   * @param {String} StreamName - streams. optional.
   * @param {String} StartTime - start_time. optional.
   * @param {String} EndTime - end_time. optional.
   * @param {String} OrderBy - order_by. optional.
   * @param {Integer} PageSize - rows. optional. default: 2000.
   * @param {Integer} PageNum - page. optional. default: 1.
   */
  describeLiveStreamBlackList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveStreamBlackList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domain. required.
   * @param {String} QueryTime - time. required.
   */
  describeLiveStreamCheatData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'QueryTime')) {
      throw new TypeError('parameter "QueryTime" is required');
    }

    return this.request('DescribeLiveStreamCheatData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - host. required.
   */
  describeLiveStreamCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveStreamCount', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {String} StreamPath - path. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} DomainName - domain. required.
   */
  describeLiveStreamData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveStreamData', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} StreamName - streamName. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeLiveStreamHistoryUserNum(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeLiveStreamHistoryUserNum', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. optional.
   * @param {String} StreamName - streamName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeLiveStreamOnlineUserNum(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveStreamOnlineUserNum', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - Vhost. required.
   * @param {String} AppName - App. required.
   * @param {String} StreamName - Vname. required.
   * @param {String} StartTime - StartTime. optional.
   * @param {String} EndTime - EndTime. optional.
   */
  describeLiveStreamPublishPlayData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    return this.request('DescribeLiveStreamPublishPlayData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domain. required.
   * @param {String} QueryTime - time. optional.
   * @param {String} LowDelay - lowdelay. optional.
   * @param {String} AlignQueryTime - align. optional.
   */
  describeLiveStreamRealTimeBpsData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveStreamRealTimeBpsData', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} StreamName - streamName. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeLiveStreamRecordContent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeLiveStreamRecordContent', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} StreamName - streamName. required.
   * @param {String} RecordId - recordId. required.
   */
  describeLiveStreamRecordIndexFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    if (!hasOwnProperty(params, 'RecordId')) {
      throw new TypeError('parameter "RecordId" is required');
    }

    return this.request('DescribeLiveStreamRecordIndexFile', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} StreamName - streamName. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageNum - pageNum. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} Order - order. optional. default: asc.
   */
  describeLiveStreamRecordIndexFiles(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeLiveStreamRecordIndexFiles', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} StreamName - streamName. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} Limit - limit. optional. default: 10.
   * @param {String} Order - order. optional. default: asc.
   */
  describeLiveStreamSnapshotInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeLiveStreamSnapshotInfo', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainTranscodeName - domainTranscodeName. required.
   */
  describeLiveStreamTranscodeInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainTranscodeName')) {
      throw new TypeError('parameter "DomainTranscodeName" is required');
    }

    return this.request('DescribeLiveStreamTranscodeInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
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
  describeLiveStreamUniversalAppStreams(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Field')) {
      throw new TypeError('parameter "Field" is required');
    }

    return this.request('DescribeLiveStreamUniversalAppStreams', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {Integer} PageNum - pageNum. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 2000.
   */
  describeLiveStreamsBlockList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveStreamsBlockList', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeLiveStreamsControlHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeLiveStreamsControlHistory', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} StreamName - streamName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeLiveStreamsFrameRateAndBitRateData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('DescribeLiveStreamsFrameRateAndBitRateData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domain. required.
   */
  describeLiveStreamsNotifyUrlConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveStreamsNotifyUrlConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - host. required.
   * @param {String} AppName - app. optional.
   * @param {String} StreamName - name. optional.
   * @param {Integer} PageSize - rows. optional. default: 2000.
   * @param {Integer} PageNum - page. optional. default: 1.
   * @param {String} StreamType - stream_type. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} QueryType - query_type. optional.
   * @param {String} OrderBy - order_by. optional.
   */
  describeLiveStreamsOnlineList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveStreamsOnlineList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - DomainName. required.
   * @param {String} QueryTime - QueryTime. optional.
   */
  describeLiveStreamsPublishAndOnlineData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveStreamsPublishAndOnlineData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
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
  describeLiveStreamsPublishList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeLiveStreamsPublishList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Long} Limit - limit. optional. default: 20.
   */
  describeLiveTopDomainsByFlow(params = {}, options = {}) {
    return this.request('DescribeLiveTopDomainsByFlow', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domainName. required.
   * @param {Long} PageSize - pageSize. optional. default: 300.
   * @param {Long} PageNumber - pageIndex. optional. default: 1.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeLiveTranscodeLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeLiveTranscodeLog', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} Stream - stream. required.
   * @param {String} StartTime - start_time. optional.
   * @param {String} EndTime - end_time. optional.
   */
  describeLiveUpVideoAudioInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Stream')) {
      throw new TypeError('parameter "Stream" is required');
    }

    return this.request('DescribeLiveUpVideoAudioInfo', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} LiveDomainType - liveDomainType. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {String} DomainName - domainName. optional.
   * @param {String} RegionName - regionName. optional.
   * @param {String} DomainSearchType - domainSearchType. optional.
   * @param {String} DomainStatus - domainStatus. optional.
   */
  describeLiveUserDomains(params = {}, options = {}) {
    return this.request('DescribeLiveUserDomains', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   */
  describeLiveUserQuota(params = {}, options = {}) {
    return this.request('DescribeLiveUserQuota', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   */
  describePlayInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    return this.request('DescribePlayInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domain. required.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describePrivateLineArea(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribePrivateLineArea', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domain. required.
   * @param {String} StreamName - stream_name. optional.
   * @param {String} Flag - flag. optional.
   * @param {String} AppName - app. optional.
   * @param {Integer} PageNum - pageNum. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describePrivateLineConfigs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribePrivateLineConfigs', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AppUid - appUid. required.
   */
  describePushInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('DescribePushInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - AppId. required.
   * @param {String} RecordId - RecordId. required.
   */
  describeRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RecordId')) {
      throw new TypeError('parameter "RecordId" is required');
    }

    return this.request('DescribeRecord', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - AppId. required.
   * @param {Integer} PageNum - PageNum. required.
   * @param {Integer} PageSize - PageSize. required.
   * @param {String} RecordState - RecordState. optional.
   */
  describeRecords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeRecords', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   */
  describeRoomChatHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    return this.request('DescribeRoomChatHistory', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   */
  describeRoomInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    return this.request('DescribeRoomInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} Order - order. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeRoomKickoutUserList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    return this.request('DescribeRoomKickoutUserList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. optional.
   * @param {String} AnchorId - anchorId. optional.
   * @param {Integer} RoomStatus - streamStatus. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Order - order. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeRoomList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DescribeRoomList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} Order - order. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeRoomMessages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    return this.request('DescribeRoomMessages', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   */
  describeRoomStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    return this.request('DescribeRoomStatus', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AppUid - appUid. required.
   */
  describeRoomTokenId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('DescribeRoomTokenId', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} SubscriberId - SubscriberId. required.
   * @param {Integer} PageNum - PageNum. optional.
   * @param {Integer} PageSize - PageSize. optional.
   */
  describeSubscribeList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubscriberId')) {
      throw new TypeError('parameter "SubscriberId" is required');
    }

    return this.request('DescribeSubscribeList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domainName. required.
   * @param {Long} PageSize - pageSize. optional. default: 300.
   * @param {Long} PageNumber - pageIndex. optional. default: 1.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeTranscodeLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeTranscodeLog', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} StartTime - StartTime. required.
   * @param {String} EndTime - EndTime. required.
   * @param {String} DomainSwitch - switch. optional.
   * @param {String} DomainName - vhost. optional.
   */
  describeUpBpsPeakData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeUpBpsPeakData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} StartTime - StartTime. required.
   * @param {String} EndTime - EndTime. required.
   * @param {String} Line - line. required.
   * @param {String} DomainSwitch - switch. optional.
   * @param {String} DomainName - vhost. optional.
   */
  describeUpBpsPeakOfLine(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Line')) {
      throw new TypeError('parameter "Line" is required');
    }

    return this.request('DescribeUpBpsPeakOfLine', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} StartTime - StartTime. required.
   * @param {String} EndTime - EndTime. required.
   * @param {String} DomainSwitch - switch. optional.
   * @param {String} DomainName - vhost. optional.
   */
  describeUpPeakPublishStreamData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeUpPeakPublishStreamData', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   */
  describeUserBillingInfo(params = {}, options = {}) {
    return this.request('DescribeUserBillingInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   */
  describeUserLiveStatus(params = {}, options = {}) {
    return this.request('DescribeUserLiveStatus', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} PageSize - pageSize. optional.
   * @param {String} PageNumber - pageIndex. optional.
   */
  describeUserUsageDetailDataExportTask(params = {}, options = {}) {
    return this.request('DescribeUserUsageDetailDataExportTask', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} TemplateId - templateId. required.
   */
  disableDefaultIlvbTranscodeConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('DisableDefaultIlvbTranscodeConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AppUid - appUid. required.
   */
  downMic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('DownMic', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} StreamName - streamName. required.
   * @param {RepeatList} Picture - picture. required.
   */
  editScreenPictures(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    if (!hasOwnProperty(params, 'Picture')) {
      throw new TypeError('parameter "Picture" is required');
    }

    return this.request('EditScreenPictures', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} StreamName - streamName. required.
   * @param {RepeatList} Text - text. required.
   */
  editScreenTexts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    if (!hasOwnProperty(params, 'Text')) {
      throw new TypeError('parameter "Text" is required');
    }

    return this.request('EditScreenTexts', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterId - casterId. required.
   * @param {String} SceneId - sceneId. required.
   */
  effectCasterUrgent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    if (!hasOwnProperty(params, 'SceneId')) {
      throw new TypeError('parameter "SceneId" is required');
    }

    return this.request('EffectCasterUrgent', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterId - casterId. required.
   * @param {String} SceneId - sceneId. required.
   * @param {String} ResourceId - resourceId. required.
   */
  effectCasterVideoResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    if (!hasOwnProperty(params, 'SceneId')) {
      throw new TypeError('parameter "SceneId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    return this.request('EffectCasterVideoResource', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} TemplateId - templateId. required.
   */
  enableDefaultIlvbTranscodeConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('EnableDefaultIlvbTranscodeConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AppUid - appUid. required.
   * @param {String} UserRole - userRole. required.
   * @param {String} SessionId - sessionId. optional.
   */
  enterRoom(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    if (!hasOwnProperty(params, 'UserRole')) {
      throw new TypeError('parameter "UserRole" is required');
    }

    return this.request('EnterRoom', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} ExpireTime - expireTime. optional.
   */
  forbidAllSendMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    return this.request('ForbidAllSendMessage', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - host. required.
   * @param {String} AppName - app. required.
   * @param {String} StreamName - name. required.
   * @param {String} LiveStreamType - type. required.
   * @param {String} Oneshot - oneshot. optional.
   * @param {String} ControlStreamAction - action. optional. default: forbid.
   * @param {String} ResumeTime - abstime_end. optional.
   */
  forbidLiveStream(params = {}, options = {}) {
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

    return this.request('ForbidLiveStream', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} UserData - userData. optional.
   * @param {String} EndTime - endTime. optional.
   */
  forbidPushStream(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    return this.request('ForbidPushStream', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AppUid - appUid. required.
   * @param {String} ForbidAppUid - banAppUid. required.
   * @param {String} EndTime - endTime. optional.
   */
  forbidRoomChat(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    if (!hasOwnProperty(params, 'ForbidAppUid')) {
      throw new TypeError('parameter "ForbidAppUid" is required');
    }

    return this.request('ForbidRoomChat', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AppUid - appUid. required.
   * @param {String} ExpireTime - expireTime. optional.
   */
  forbidSendMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('ForbidSendMessage', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ImageUrl - imageUrl. required.
   * @param {String} SceneList - sceneList. required.
   */
  imageDetection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageUrl')) {
      throw new TypeError('parameter "ImageUrl" is required');
    }

    if (!hasOwnProperty(params, 'SceneList')) {
      throw new TypeError('parameter "SceneList" is required');
    }

    return this.request('ImageDetection', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ImageUrl - imageUrl. required.
   */
  imagePornDetection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageUrl')) {
      throw new TypeError('parameter "ImageUrl" is required');
    }

    return this.request('ImagePornDetection', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - AppId. required.
   * @param {String} AppUid - AppUserId. required.
   * @param {String} BoardId - BoardId. required.
   */
  joinBoard(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    if (!hasOwnProperty(params, 'BoardId')) {
      throw new TypeError('parameter "BoardId" is required');
    }

    return this.request('JoinBoard', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AppUid - appUid. required.
   * @param {String} AppOptionInfo - appOptionInfo. optional.
   * @param {Integer} UserRole - userRole. required.
   */
  joinRoom(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    if (!hasOwnProperty(params, 'UserRole')) {
      throw new TypeError('parameter "UserRole" is required');
    }

    return this.request('JoinRoom', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AppUid - appUid. required.
   * @param {String} OpAppUid - opAppUid. required.
   * @param {String} UserData - userData. required.
   * @param {String} EndTime - endTime. required.
   */
  kickOut(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    if (!hasOwnProperty(params, 'OpAppUid')) {
      throw new TypeError('parameter "OpAppUid" is required');
    }

    if (!hasOwnProperty(params, 'UserData')) {
      throw new TypeError('parameter "UserData" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('KickOut', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AppUid - appUid. required.
   * @param {String} AppTargetUid - appTargetUid. required.
   * @param {String} UserData - userData. optional.
   * @param {String} EndTime - endTime. optional.
   */
  kickoutLinkMic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    if (!hasOwnProperty(params, 'AppTargetUid')) {
      throw new TypeError('parameter "AppTargetUid" is required');
    }

    return this.request('KickoutLinkMic', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. optional.
   * @param {String} AppUid - appUid. required.
   */
  leaveRoom(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('LeaveRoom', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {Integer} Count - count. optional.
   */
  like(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    return this.request('Like', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AppUid - appUid. required.
   * @param {String} AppTargetUid - appTargetUid. required.
   * @param {String} UserData - userData. optional.
   */
  linkMic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    if (!hasOwnProperty(params, 'AppTargetUid')) {
      throw new TypeError('parameter "AppTargetUid" is required');
    }

    return this.request('LinkMic', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domain. required.
   * @param {String} TaskID - task_id. required.
   * @param {String} DataID - data_id. optional.
   * @param {String} URL - url. optional.
   * @param {String} Label - label. optional.
   * @param {String} Note - note. optional.
   */
  liveDetectFeedback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'TaskID')) {
      throw new TypeError('parameter "TaskID" is required');
    }

    return this.request('LiveDetectFeedback', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} AppName - appName. optional.
   * @param {String} AppType - appType. optional.
   * @param {String} PushDomain - pushDomain. optional.
   * @param {String} PlayDomain - playDomain. optional.
   * @param {String} RtcAppId - rtcAppId. optional.
   * @param {Boolean} DefaultTranscode - defaultTranscode. optional.
   */
  modifyApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('ModifyApp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterId - casterId. required.
   * @param {String} ComponentId - componentId. required.
   * @param {String} ComponentName - componentName. optional.
   * @param {String} ComponentType - componentType. optional.
   * @param {String} Effect - effect. optional.
   * @param {String} ComponentLayer - componentLayer. optional.
   * @param {String} TextLayerContent - textLayerContent. optional.
   * @param {String} ImageLayerContent - imageLayerContent. optional.
   * @param {String} CaptionLayerContent - captionLayerContent. optional.
   */
  modifyCasterComponent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    if (!hasOwnProperty(params, 'ComponentId')) {
      throw new TypeError('parameter "ComponentId" is required');
    }

    return this.request('ModifyCasterComponent', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterId - casterId. required.
   * @param {String} EpisodeId - episodeId. required.
   * @param {String} EpisodeName - episodeName. optional.
   * @param {String} ResourceId - resourceId. optional.
   * @param {RepeatList} ComponentId - componentIds. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} SwitchType - switchType. optional.
   */
  modifyCasterEpisode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    if (!hasOwnProperty(params, 'EpisodeId')) {
      throw new TypeError('parameter "EpisodeId" is required');
    }

    return this.request('ModifyCasterEpisode', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterId - casterId. required.
   * @param {String} LayoutId - layoutId. required.
   * @param {RepeatList} VideoLayer - videoLayers. required.
   * @param {RepeatList} AudioLayer - audioLayers. required.
   * @param {RepeatList} BlendList - blendList. required.
   * @param {RepeatList} MixList - mixList. required.
   */
  modifyCasterLayout(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    if (!hasOwnProperty(params, 'LayoutId')) {
      throw new TypeError('parameter "LayoutId" is required');
    }

    if (!hasOwnProperty(params, 'VideoLayer')) {
      throw new TypeError('parameter "VideoLayer" is required');
    }

    if (!hasOwnProperty(params, 'AudioLayer')) {
      throw new TypeError('parameter "AudioLayer" is required');
    }

    if (!hasOwnProperty(params, 'BlendList')) {
      throw new TypeError('parameter "BlendList" is required');
    }

    if (!hasOwnProperty(params, 'MixList')) {
      throw new TypeError('parameter "MixList" is required');
    }

    return this.request('ModifyCasterLayout', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterId - casterId. required.
   * @param {RepeatList} Episode - episodes. required.
   */
  modifyCasterProgram(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    if (!hasOwnProperty(params, 'Episode')) {
      throw new TypeError('parameter "Episode" is required');
    }

    return this.request('ModifyCasterProgram', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} CasterId - casterId. required.
   * @param {String} ResourceId - resourceId. required.
   * @param {String} ResourceName - resourceName. optional.
   * @param {String} LiveStreamUrl - liveStreamUrl. optional.
   * @param {String} MaterialId - materialId. optional.
   * @param {String} VodUrl - vodUrl. optional.
   * @param {Integer} BeginOffset - beginOffset. optional.
   * @param {Integer} EndOffset - endOffset. optional.
   * @param {Integer} RepeatNum - repeatNum. optional.
   * @param {Integer} PtsCallbackInterval - ptsCallbackInterval. optional.
   */
  modifyCasterVideoResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    return this.request('ModifyCasterVideoResource', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} StreamName - streamName. required.
   * @param {String} LayoutConfig - layoutConfig. required.
   */
  modifyLiveEditorLayout(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    if (!hasOwnProperty(params, 'LayoutConfig')) {
      throw new TypeError('parameter "LayoutConfig" is required');
    }

    return this.request('ModifyLiveEditorLayout', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} InternetChargeType - billingTag. required.
   */
  modifyLiveService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InternetChargeType')) {
      throw new TypeError('parameter "InternetChargeType" is required');
    }

    return this.request('ModifyLiveService', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} InternetChargeType - category. required.
   */
  openLiveService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InternetChargeType')) {
      throw new TypeError('parameter "InternetChargeType" is required');
    }

    return this.request('OpenLiveService', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Version - version. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domain. required.
   * @param {String} AppName - app. optional.
   * @param {Integer} Duration - duration. required.
   * @param {Integer} Vision - vision. optional.
   */
  openLiveShift(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Duration')) {
      throw new TypeError('parameter "Duration" is required');
    }

    return this.request('OpenLiveShift', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} data - data. required.
   */
  orderModifySucceededCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('OrderModifySucceededCallback', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} data - data. required.
   */
  orderSucceededCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('OrderSucceededCallback', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} data - data. required.
   */
  payOrderCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('PayOrderCallback', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AppUid - appUid. required.
   * @param {String} SessionId - sessionId. optional.
   */
  quitRoom(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('QuitRoom', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} Command - action. required.
   * @param {String} DomainName - domain. required.
   * @param {String} AppName - app. required.
   * @param {String} StreamName - stream. required.
   */
  realTimeRecordCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Command')) {
      throw new TypeError('parameter "Command" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    return this.request('RealTimeRecordCommand', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} Command - Action. required.
   * @param {String} DomainName - Domain. required.
   * @param {String} AppName - App. required.
   * @param {String} StreamName - Stream. required.
   * @param {Integer} Mode - Mode. optional.
   * @param {Integer} Interval - Interval. optional.
   */
  realTimeSnapshotCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Command')) {
      throw new TypeError('parameter "Command" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    return this.request('RealTimeSnapshotCommand', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AppUid - appUid. required.
   * @param {String} AppRequestId - appRequestId. optional.
   * @param {String} AppTargetUid - appTargetUid. required.
   * @param {String} UserData - userData. optional.
   */
  rejectLinkMic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    if (!hasOwnProperty(params, 'AppTargetUid')) {
      throw new TypeError('parameter "AppTargetUid" is required');
    }

    return this.request('RejectLinkMic', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AppUid - appUid. required.
   * @param {String} OpAppUid - opAppUid. required.
   */
  relieveKickout(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    if (!hasOwnProperty(params, 'OpAppUid')) {
      throw new TypeError('parameter "OpAppUid" is required');
    }

    return this.request('RelieveKickout', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} StreamName - streamName. required.
   * @param {String} MixDomainName - mixDomainName. required.
   * @param {String} MixAppName - mixAppName. required.
   * @param {String} MixStreamName - mixStreamName. required.
   */
  removeMultipleStreamMixService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    if (!hasOwnProperty(params, 'MixDomainName')) {
      throw new TypeError('parameter "MixDomainName" is required');
    }

    if (!hasOwnProperty(params, 'MixAppName')) {
      throw new TypeError('parameter "MixAppName" is required');
    }

    if (!hasOwnProperty(params, 'MixStreamName')) {
      throw new TypeError('parameter "MixStreamName" is required');
    }

    return this.request('RemoveMultipleStreamMixService', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AppUid - appUid. required.
   * @param {String} AppRequestId - appRequestId. optional.
   * @param {String} AppTargetUid - appTargetUid. required.
   * @param {String} UserData - userData. optional.
   */
  requestLinkMic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    if (!hasOwnProperty(params, 'AppTargetUid')) {
      throw new TypeError('parameter "AppTargetUid" is required');
    }

    return this.request('RequestLinkMic', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} LiveStreamType - liveStreamType. required.
   * @param {String} AppName - appName. required.
   * @param {String} StreamName - streamName. required.
   */
  resumeLiveStream(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'LiveStreamType')) {
      throw new TypeError('parameter "LiveStreamType" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    return this.request('ResumeLiveStream', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} AppUid - appUid. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} Content - content. required.
   * @param {String} UserData - data. optional.
   */
  sendRoomChat(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    return this.request('SendRoomChat', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AppUid - appUid. optional.
   * @param {String} Data - data. required.
   * @param {Integer} Priority - priority. optional.
   */
  sendRoomNotification(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    return this.request('SendRoomNotification', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AppUid - appUid. required.
   * @param {String} ToAppUid - toAppUid. required.
   * @param {String} Data - data. required.
   * @param {Integer} Priority - priority. optional.
   */
  sendRoomUserNotification(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    if (!hasOwnProperty(params, 'ToAppUid')) {
      throw new TypeError('parameter "ToAppUid" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    return this.request('SendRoomUserNotification', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - AppId. required.
   * @param {String} AuthKey - AuthKey. optional.
   * @param {String} AuthSwitch - AuthSwitch. optional.
   * @param {Integer} CallbackEnable - CallbackEnable. required.
   * @param {String} CallbackUri - CallbackUri. optional.
   * @param {String} CallbackEvents - CallbackEvents. optional.
   */
  setBoardCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'CallbackEnable')) {
      throw new TypeError('parameter "CallbackEnable" is required');
    }

    return this.request('SetBoardCallback', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} CasterId - casterId. required.
   * @param {String} ChannelId - channelId. required.
   * @param {String} ResourceId - resourceId. required.
   * @param {Integer} SeekOffset - seekOffset. optional.
   * @param {Integer} PlayStatus - playStatus. optional.
   */
  setCasterChannel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    return this.request('SetCasterChannel', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} CasterId - casterId. required.
   * @param {String} CasterName - casterName. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} TranscodeConfig - transcodeConfig. optional.
   * @param {String} RecordConfig - recordConfig. optional.
   * @param {Float} Delay - delay. optional.
   * @param {String} UrgentMaterialId - urgentMaterialId. optional.
   * @param {String} SideOutputUrl - sideOutputUrl. optional.
   * @param {String} CallbackUrl - callbackUrl. optional.
   * @param {Integer} ProgramEffect - programEffect. optional.
   * @param {String} ProgramName - programName. optional.
   * @param {Integer} ChannelEnable - channelEnable. optional.
   */
  setCasterConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    return this.request('SetCasterConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} CasterId - casterId. required.
   * @param {String} SceneId - sceneId. required.
   * @param {String} LayoutId - layoutId. optional.
   * @param {RepeatList} ComponentId - componentIds. optional.
   */
  setCasterSceneConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    if (!hasOwnProperty(params, 'SceneId')) {
      throw new TypeError('parameter "SceneId" is required');
    }

    return this.request('SetCasterSceneConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} CertName - certName. optional.
   * @param {String} SSLProtocol - sslProtocol. required.
   * @param {String} SSLPub - sslPub. optional.
   * @param {String} SSLPri - sslPri. optional.
   */
  setLiveDomainCertificate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'SSLProtocol')) {
      throw new TypeError('parameter "SSLProtocol" is required');
    }

    return this.request('SetLiveDomainCertificate', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} StreamName - streamName. required.
   * @param {String} LayoutConfig - layoutConfig. required.
   * @param {Integer} ClearSideOutput - clearSideOutput. optional.
   */
  setLiveEditorScene(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    if (!hasOwnProperty(params, 'LayoutConfig')) {
      throw new TypeError('parameter "LayoutConfig" is required');
    }

    return this.request('SetLiveEditorScene', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domain. required.
   * @param {String} AppName - app. required.
   * @param {String} PullDomainName - pull_domain. required.
   * @param {String} PullAppName - pull_app. optional.
   * @param {String} PullProtocol - pull_protocol. required.
   * @param {String} PullAuthType - pull_auth_type. optional.
   * @param {String} PullAuthKey - pull_auth_key. optional.
   */
  setLiveLazyPullStreamInfoConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'PullDomainName')) {
      throw new TypeError('parameter "PullDomainName" is required');
    }

    if (!hasOwnProperty(params, 'PullProtocol')) {
      throw new TypeError('parameter "PullProtocol" is required');
    }

    return this.request('SetLiveLazyPullStreamInfoConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Version - version. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domain. required.
   */
  setLiveShiftAuth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('SetLiveShiftAuth', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Version - version. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domain. required.
   * @param {String} AppName - app. optional.
   * @param {String} MethodName - method. required.
   * @param {Integer} Vision - value. optional.
   */
  setLiveShiftVision(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'MethodName')) {
      throw new TypeError('parameter "MethodName" is required');
    }

    return this.request('SetLiveShiftVision', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domain. required.
   * @param {String} NotifyUrl - notify_url. required.
   * @param {String} AuthType - sign_method. optional.
   * @param {String} AuthKey - sign_secret. optional.
   */
  setLiveStreamsNotifyUrlConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'NotifyUrl')) {
      throw new TypeError('parameter "NotifyUrl" is required');
    }

    return this.request('SetLiveStreamsNotifyUrlConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   */
  setUserDomainAuthClose(params = {}, options = {}) {
    return this.request('SetUserDomainAuthClose', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - AppId. required.
   * @param {String} BoardId - BoardId. required.
   * @param {String} StartTime - StartTime. required.
   */
  startBoardRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'BoardId')) {
      throw new TypeError('parameter "BoardId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    return this.request('StartBoardRecord', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterId - casterId. required.
   */
  startCaster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    return this.request('StartCaster', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterId - casterId. required.
   * @param {String} SceneId - sceneId. required.
   */
  startCasterScene(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    if (!hasOwnProperty(params, 'SceneId')) {
      throw new TypeError('parameter "SceneId" is required');
    }

    return this.request('StartCasterScene', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AppUid - appUid. required.
   */
  startIlvbRealTimeRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('StartIlvbRealTimeRecord', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   */
  startLiveDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('StartLiveDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} StreamName - streamName. required.
   * @param {String} TranscodeTemplate - transcodeTemplate. required.
   * @param {String} SidePushUrl - sidePushUrl. optional.
   * @param {Float} SideDelay - sideDelay. optional.
   * @param {String} SecondaryStreamName - secondaryStreamName. optional.
   * @param {String} SecondaryTranscodeTemplate - secondaryTranscodeTemplate. optional.
   */
  startLiveEditor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    if (!hasOwnProperty(params, 'TranscodeTemplate')) {
      throw new TypeError('parameter "TranscodeTemplate" is required');
    }

    return this.request('StartLiveEditor', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domain. required.
   * @param {String} AppName - app. required.
   * @param {String} StreamName - stream. required.
   * @param {String} TokenId - tokenid. required.
   * @param {String} InputUrl - inputUrl. required.
   * @param {Integer} Interval - interval. optional.
   * @param {String} OssBucket - ossBucket. optional.
   * @param {String} OssEndpoint - ossEndpoint. optional.
   * @param {String} OssUserId - ossUserid. optional.
   * @param {String} OssRamRole - ossRam. optional.
   */
  startLiveIndex(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    if (!hasOwnProperty(params, 'TokenId')) {
      throw new TypeError('parameter "TokenId" is required');
    }

    if (!hasOwnProperty(params, 'InputUrl')) {
      throw new TypeError('parameter "InputUrl" is required');
    }

    return this.request('StartLiveIndex', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} MainDomainName - mainDomainName. required.
   * @param {String} MainAppName - mainAppName. required.
   * @param {String} MainStreamName - mainStreamName. required.
   * @param {String} MixDomainName - mixDomainName. required.
   * @param {String} MixAppName - mixAppName. required.
   * @param {String} MixStreamName - mixStreamName. required.
   * @param {String} MixTemplate - mixTemplate. required.
   * @param {String} MixType - mixType. required.
   */
  startMixStreamsService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MainDomainName')) {
      throw new TypeError('parameter "MainDomainName" is required');
    }

    if (!hasOwnProperty(params, 'MainAppName')) {
      throw new TypeError('parameter "MainAppName" is required');
    }

    if (!hasOwnProperty(params, 'MainStreamName')) {
      throw new TypeError('parameter "MainStreamName" is required');
    }

    if (!hasOwnProperty(params, 'MixDomainName')) {
      throw new TypeError('parameter "MixDomainName" is required');
    }

    if (!hasOwnProperty(params, 'MixAppName')) {
      throw new TypeError('parameter "MixAppName" is required');
    }

    if (!hasOwnProperty(params, 'MixStreamName')) {
      throw new TypeError('parameter "MixStreamName" is required');
    }

    if (!hasOwnProperty(params, 'MixTemplate')) {
      throw new TypeError('parameter "MixTemplate" is required');
    }

    if (!hasOwnProperty(params, 'MixType')) {
      throw new TypeError('parameter "MixType" is required');
    }

    return this.request('StartMixStreamsService', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} StreamName - streamName. required.
   * @param {String} MixTemplate - mixTemplate. required.
   */
  startMultipleStreamMixService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    if (!hasOwnProperty(params, 'MixTemplate')) {
      throw new TypeError('parameter "MixTemplate" is required');
    }

    return this.request('StartMultipleStreamMixService', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} StreamName - streamName. required.
   * @param {String} SourceType - type. required.
   * @param {String} SourceUrl - url. required.
   */
  startStreamIntercut(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    if (!hasOwnProperty(params, 'SourceType')) {
      throw new TypeError('parameter "SourceType" is required');
    }

    if (!hasOwnProperty(params, 'SourceUrl')) {
      throw new TypeError('parameter "SourceUrl" is required');
    }

    return this.request('StartStreamIntercut', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterId - casterId. required.
   */
  stopCaster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    return this.request('StopCaster', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CasterId - casterId. required.
   * @param {String} SceneId - sceneId. required.
   */
  stopCasterScene(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    if (!hasOwnProperty(params, 'SceneId')) {
      throw new TypeError('parameter "SceneId" is required');
    }

    return this.request('StopCasterScene', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AppUid - appUid. required.
   */
  stopIlvbRealTimeRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('StopIlvbRealTimeRecord', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   */
  stopLiveDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('StopLiveDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} StreamName - streamName. required.
   */
  stopLiveEditor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    return this.request('StopLiveEditor', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domain. required.
   * @param {String} AppName - app. required.
   * @param {String} StreamName - stream. required.
   * @param {String} TaskId - taskid. required.
   */
  stopLiveIndex(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('StopLiveIndex', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} MainDomainName - mainDomainName. required.
   * @param {String} MainAppName - mainAppName. required.
   * @param {String} MainStreamName - mainStreamName. required.
   * @param {String} MixDomainName - mixDomainName. required.
   * @param {String} MixAppName - mixAppName. required.
   * @param {String} MixStreamName - mixStreamName. required.
   */
  stopMixStreamsService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MainDomainName')) {
      throw new TypeError('parameter "MainDomainName" is required');
    }

    if (!hasOwnProperty(params, 'MainAppName')) {
      throw new TypeError('parameter "MainAppName" is required');
    }

    if (!hasOwnProperty(params, 'MainStreamName')) {
      throw new TypeError('parameter "MainStreamName" is required');
    }

    if (!hasOwnProperty(params, 'MixDomainName')) {
      throw new TypeError('parameter "MixDomainName" is required');
    }

    if (!hasOwnProperty(params, 'MixAppName')) {
      throw new TypeError('parameter "MixAppName" is required');
    }

    if (!hasOwnProperty(params, 'MixStreamName')) {
      throw new TypeError('parameter "MixStreamName" is required');
    }

    return this.request('StopMixStreamsService', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} StreamName - streamName. required.
   */
  stopMultipleStreamMixService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    return this.request('StopMultipleStreamMixService', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} StreamName - streamName. required.
   */
  stopStreamIntercut(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    return this.request('StopStreamIntercut', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} SubscriberId - SubscriberId. required.
   * @param {String} StreamId - StreamId. required.
   * @param {String} UserData - UserData. optional.
   */
  subscribeStream(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubscriberId')) {
      throw new TypeError('parameter "SubscriberId" is required');
    }

    if (!hasOwnProperty(params, 'StreamId')) {
      throw new TypeError('parameter "StreamId" is required');
    }

    return this.request('SubscribeStream', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} SubscriberId - SubscriberId. required.
   * @param {String} StreamId - StreamId. required.
   */
  unSubscribeStream(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubscriberId')) {
      throw new TypeError('parameter "SubscriberId" is required');
    }

    if (!hasOwnProperty(params, 'StreamId')) {
      throw new TypeError('parameter "StreamId" is required');
    }

    return this.request('UnSubscribeStream', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AppUid - appUid. required.
   * @param {String} AppTargetUid - appTargetUid. required.
   * @param {String} UserData - userData. optional.
   */
  unkickoutLinkMic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    if (!hasOwnProperty(params, 'AppTargetUid')) {
      throw new TypeError('parameter "AppTargetUid" is required');
    }

    return this.request('UnkickoutLinkMic', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AppUid - appUid. required.
   * @param {String} UserData - userData. optional.
   */
  unlinkMic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('UnlinkMic', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} AppUid - appUid. required.
   */
  upMic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('UpMic', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {Integer} Enable - enable. required.
   * @param {Integer} CallbackMode - callbackMode. required.
   * @param {String} CallbackUri - callbackUri. optional.
   * @param {Integer} AuthSwitch - authSwitch. optional.
   * @param {String} AuthKey - authKey. optional.
   * @param {String} EventTypes - eventTypes. required.
   */
  updateAppCallbackConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'Enable')) {
      throw new TypeError('parameter "Enable" is required');
    }

    if (!hasOwnProperty(params, 'CallbackMode')) {
      throw new TypeError('parameter "CallbackMode" is required');
    }

    if (!hasOwnProperty(params, 'EventTypes')) {
      throw new TypeError('parameter "EventTypes" is required');
    }

    return this.request('UpdateAppCallbackConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - AppId. required.
   * @param {String} BoardData - BoardData. required.
   */
  updateBoard(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'BoardData')) {
      throw new TypeError('parameter "BoardData" is required');
    }

    return this.request('UpdateBoard', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - AppId. required.
   * @param {String} AuthKey - AuthKey. optional.
   * @param {String} AuthSwitch - AuthSwitch. optional.
   * @param {Integer} CallbackEnable - CallbackEnable. required.
   * @param {String} CallbackUri - CallbackUri. optional.
   * @param {String} CallbackEvents - CallbackEvents. optional.
   */
  updateBoardCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'CallbackEnable')) {
      throw new TypeError('parameter "CallbackEnable" is required');
    }

    return this.request('UpdateBoardCallback', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} CasterId - casterId. required.
   * @param {String} SceneId - sceneId. required.
   * @param {Integer} FollowEnable - followEnable. optional.
   * @param {RepeatList} AudioLayer - audioLayers. optional.
   * @param {RepeatList} MixList - mixList. optional.
   */
  updateCasterSceneAudio(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    if (!hasOwnProperty(params, 'SceneId')) {
      throw new TypeError('parameter "SceneId" is required');
    }

    return this.request('UpdateCasterSceneAudio', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} CasterId - casterId. required.
   * @param {String} SceneId - sceneId. required.
   * @param {String} LayoutId - layoutId. required.
   * @param {RepeatList} ComponentId - componentIds. optional.
   */
  updateCasterSceneConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasterId')) {
      throw new TypeError('parameter "CasterId" is required');
    }

    if (!hasOwnProperty(params, 'SceneId')) {
      throw new TypeError('parameter "SceneId" is required');
    }

    if (!hasOwnProperty(params, 'LayoutId')) {
      throw new TypeError('parameter "LayoutId" is required');
    }

    return this.request('UpdateCasterSceneConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} VodTranscodeGroupId - vodTranscodeGroupId. required.
   * @param {Integer} OnDemand - onDemand. optional.
   */
  updateIlvbRecordConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'VodTranscodeGroupId')) {
      throw new TypeError('parameter "VodTranscodeGroupId" is required');
    }

    return this.request('UpdateIlvbRecordConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} TemplateId - templateId. required.
   * @param {String} TemplateName - templateName. required.
   * @param {String} TemplateDescription - templateDescription. required.
   * @param {String} TemplateType - templateType. required.
   * @param {Integer} Height - height. required.
   * @param {Integer} Width - width. required.
   * @param {Integer} VideoBitRate - videoBitRate. required.
   * @param {Integer} AudioBitRate - audioBitRate. required.
   * @param {Integer} Fps - fps. required.
   * @param {Integer} Gop - gop. required.
   * @param {Boolean} DefaultUseTemplate - defaultUseTemplate. required.
   */
  updateIlvbTranscodeConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    if (!hasOwnProperty(params, 'TemplateName')) {
      throw new TypeError('parameter "TemplateName" is required');
    }

    if (!hasOwnProperty(params, 'TemplateDescription')) {
      throw new TypeError('parameter "TemplateDescription" is required');
    }

    if (!hasOwnProperty(params, 'TemplateType')) {
      throw new TypeError('parameter "TemplateType" is required');
    }

    if (!hasOwnProperty(params, 'Height')) {
      throw new TypeError('parameter "Height" is required');
    }

    if (!hasOwnProperty(params, 'Width')) {
      throw new TypeError('parameter "Width" is required');
    }

    if (!hasOwnProperty(params, 'VideoBitRate')) {
      throw new TypeError('parameter "VideoBitRate" is required');
    }

    if (!hasOwnProperty(params, 'AudioBitRate')) {
      throw new TypeError('parameter "AudioBitRate" is required');
    }

    if (!hasOwnProperty(params, 'Fps')) {
      throw new TypeError('parameter "Fps" is required');
    }

    if (!hasOwnProperty(params, 'Gop')) {
      throw new TypeError('parameter "Gop" is required');
    }

    if (!hasOwnProperty(params, 'DefaultUseTemplate')) {
      throw new TypeError('parameter "DefaultUseTemplate" is required');
    }

    return this.request('UpdateIlvbTranscodeConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {Integer} TimeInterval - timeInterval. optional.
   * @param {String} OssEndpoint - ossEndpoint. optional.
   * @param {String} OssBucket - ossBucket. optional.
   * @param {String} OverwriteOssObject - overwriteOssObject. optional.
   * @param {String} SequenceOssObject - sequenceOssObject. optional.
   */
  updateLiveAppSnapshotConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('UpdateLiveAppSnapshotConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} NotifyUrl - notifyUrl. required.
   */
  updateLiveDetectNotifyConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'NotifyUrl')) {
      throw new TypeError('parameter "NotifyUrl" is required');
    }

    return this.request('UpdateLiveDetectNotifyConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} Sources - sources. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  updateLiveDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('UpdateLiveDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} NotifyUrl - notifyUrl. required.
   */
  updateLiveEditNotifyConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'NotifyUrl')) {
      throw new TypeError('parameter "NotifyUrl" is required');
    }

    return this.request('UpdateLiveEditNotifyConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CanvasId - canvasId. required.
   * @param {String} CanvasConfig - canvasConfig. required.
   */
  updateLiveEditorCanvas(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CanvasId')) {
      throw new TypeError('parameter "CanvasId" is required');
    }

    if (!hasOwnProperty(params, 'CanvasConfig')) {
      throw new TypeError('parameter "CanvasConfig" is required');
    }

    return this.request('UpdateLiveEditorCanvas', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} NotifyUrl - notifyUrl. required.
   */
  updateLiveEditorNotifyConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'NotifyUrl')) {
      throw new TypeError('parameter "NotifyUrl" is required');
    }

    return this.request('UpdateLiveEditorNotifyConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} NotifyUrl - notifyUrl. required.
   */
  updateLiveMixNotifyConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'NotifyUrl')) {
      throw new TypeError('parameter "NotifyUrl" is required');
    }

    return this.request('UpdateLiveMixNotifyConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} DomainName - domain. required.
   * @param {String} AppName - app. required.
   * @param {String} StreamName - stream. required.
   * @param {String} SourceUrl - source_url. required.
   * @param {String} StartTime - start_time. required.
   * @param {String} EndTime - end_time. required.
   */
  updateLivePullStreamInfoConfig(params = {}, options = {}) {
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

    return this.request('UpdateLivePullStreamInfoConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} NotifyUrl - notifyUrl. optional.
   * @param {String} OnDemandUrl - onDemandUrl. optional.
   * @param {Boolean} NeedStatusNotify - needStatusNotify. optional.
   */
  updateLiveRecordNotifyConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('UpdateLiveRecordNotifyConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} OssEndpoint - ossEndpoint. optional.
   * @param {String} OssBucket - ossBucket. optional.
   * @param {String} OssObject - ossObject. optional.
   * @param {Integer} Interval - interval. optional.
   * @param {RepeatList} Scene - scenes. optional.
   */
  updateLiveSnapshotDetectPornConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('UpdateLiveSnapshotDetectPornConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   * @param {String} AppId - appId. required.
   * @param {String} RoomId - roomId. required.
   * @param {String} TemplateIds - templateIds. optional.
   * @param {Boolean} UseDefaultTranscode - useDefaultTranscode. optional.
   */
  updateRoomIlvbTranscodeConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RoomId')) {
      throw new TypeError('parameter "RoomId" is required');
    }

    return this.request('UpdateRoomIlvbTranscodeConfig', params, options);
  }

}

module.exports = Client;

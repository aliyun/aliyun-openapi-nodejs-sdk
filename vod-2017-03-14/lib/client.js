
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-03-14';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ProductCode - productCode. required.
   * @param {String} APIProxyName - apiProxyName. required.
   * @param {String} APIProxyParam - apiProxyParam. required.
   */
  aPIProxy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'APIProxyName')) {
      throw new TypeError('parameter "APIProxyName" is required');
    }

    if (!hasOwnProperty(params, 'APIProxyParam')) {
      throw new TypeError('parameter "APIProxyParam" is required');
    }

    return this.request('APIProxy', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TemplateName - templateName. required.
   * @param {String} TemplateType - templateType. required.
   * @param {String} TemplateConfig - templateConfig. required.
   */
  addAITemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateName')) {
      throw new TypeError('parameter "TemplateName" is required');
    }

    if (!hasOwnProperty(params, 'TemplateType')) {
      throw new TypeError('parameter "TemplateType" is required');
    }

    if (!hasOwnProperty(params, 'TemplateConfig')) {
      throw new TypeError('parameter "TemplateConfig" is required');
    }

    return this.request('AddAITemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {Integer} State - state. optional.
   * @param {String} PlayKey - apiKey. required.
   * @param {String} ExpireTime - expireTime. optional.
   * @param {String} SignVersion - signVersion. required.
   * @param {String} Channel - channel. required.
   * @param {String} Description - description. required.
   * @param {String} ClientVersion - clientVersion. required.
   * @param {String} Source - source. required.
   */
  addApiAuth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PlayKey')) {
      throw new TypeError('parameter "PlayKey" is required');
    }

    if (!hasOwnProperty(params, 'SignVersion')) {
      throw new TypeError('parameter "SignVersion" is required');
    }

    if (!hasOwnProperty(params, 'Channel')) {
      throw new TypeError('parameter "Channel" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'ClientVersion')) {
      throw new TypeError('parameter "ClientVersion" is required');
    }

    if (!hasOwnProperty(params, 'Source')) {
      throw new TypeError('parameter "Source" is required');
    }

    return this.request('AddApiAuth', params, options);
  }

  /**
   * @param {String} AppName - appName. optional.
   * @param {String} ContractNo - contractNo. optional.
   * @param {String} BundleId - bundleId. optional.
   * @param {String} PackageName - packageName. optional.
   * @param {String} LicenseSignature - signature. optional.
   * @param {String} Type - type. required.
   * @param {String} Feature - feature. optional.
   * @param {String} ExpiredOn - expiredOn. required.
   * @param {String} SdkIds - sdkIds. optional.
   * @param {Long} CustomerId - customerId. optional.
   * @param {Long} AccountId - accountId. optional.
   * @param {Long} LicenseId - licenseId. optional.
   * @param {String} CreateTime - createTime. optional.
   * @param {String} Status - status. optional.
   */
  addAppLicense(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'ExpiredOn')) {
      throw new TypeError('parameter "ExpiredOn" is required');
    }

    return this.request('AddAppLicense', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TemplateIds - templateIds. required.
   * @param {String} Status - status. required.
   */
  addAudioConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateIds')) {
      throw new TypeError('parameter "TemplateIds" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('AddAudioConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Codec - codec. required.
   * @param {String} Bitrate - bitrate. required.
   * @param {String} Channel - channel. optional.
   * @param {String} Remove - remove. optional.
   * @param {String} Name - name. required.
   * @param {String} Muxer - muxer. required.
   * @param {String} Status - status. required.
   * @param {String} Type - type. required.
   * @param {String} IsDefault - isDefault. required.
   */
  addAudioTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Codec')) {
      throw new TypeError('parameter "Codec" is required');
    }

    if (!hasOwnProperty(params, 'Bitrate')) {
      throw new TypeError('parameter "Bitrate" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Muxer')) {
      throw new TypeError('parameter "Muxer" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'IsDefault')) {
      throw new TypeError('parameter "IsDefault" is required');
    }

    return this.request('AddAudioTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserList - userList. required.
   */
  addAuthCheckWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserList')) {
      throw new TypeError('parameter "UserList" is required');
    }

    return this.request('AddAuthCheckWhiteList', params, options);
  }

  /**
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} CateName - cateName. required.
   * @param {Long} ParentId - parentId. optional.
   */
  addCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CateName')) {
      throw new TypeError('parameter "CateName" is required');
    }

    return this.request('AddCategory', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaFileId - mediaFileId. required.
   * @param {String} CompanionResourceType - companionResourceType. required.
   * @param {String} CompanionResourceConfig - companionResourceConfig. required.
   * @param {String} ResourceName - resourceName. optional.
   * @param {String} ResourceTags - resourceTags. optional.
   */
  addCompanionresourceInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaFileId')) {
      throw new TypeError('parameter "MediaFileId" is required');
    }

    if (!hasOwnProperty(params, 'CompanionResourceType')) {
      throw new TypeError('parameter "CompanionResourceType" is required');
    }

    if (!hasOwnProperty(params, 'CompanionResourceConfig')) {
      throw new TypeError('parameter "CompanionResourceConfig" is required');
    }

    return this.request('AddCompanionresourceInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} Video - video. required.
   * @param {String} Audio - audio. required.
   * @param {String} TransConfig - transConfig. optional.
   * @param {String} MuxConfig - muxConfig. optional.
   * @param {String} Container - container. required.
   * @param {String} Definition - definition. required.
   * @param {String} UseWaterMark - useWaterMark. optional.
   * @param {String} Encrypt - encrypt. optional.
   * @param {String} Condition - templateCondition. optional.
   * @param {String} NarrowBand - narrowBand. optional.
   */
  addCustomTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Video')) {
      throw new TypeError('parameter "Video" is required');
    }

    if (!hasOwnProperty(params, 'Audio')) {
      throw new TypeError('parameter "Audio" is required');
    }

    if (!hasOwnProperty(params, 'Container')) {
      throw new TypeError('parameter "Container" is required');
    }

    if (!hasOwnProperty(params, 'Definition')) {
      throw new TypeError('parameter "Definition" is required');
    }

    return this.request('AddCustomTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} Configs - configs. optional.
   */
  addCustomTemplateAndGroup(params = {}, options = {}) {
    return this.request('AddCustomTemplateAndGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} DomainType - domainType. optional.
   * @param {Boolean} EnableDomain - enableDomain. optional.
   * @param {String} SourceType - sourceType. optional.
   * @param {Integer} SourcePort - sourcePort. optional.
   * @param {String} Sources - sources. optional.
   * @param {String} PlayRegion - playRegion. optional.
   * @param {String} Priorities - priorities. optional.
   */
  addDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('AddDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} RefererType - refererType. required.
   * @param {String} RefererList - refererList. required.
   */
  addDomainReferer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'RefererType')) {
      throw new TypeError('parameter "RefererType" is required');
    }

    if (!hasOwnProperty(params, 'RefererList')) {
      throw new TypeError('parameter "RefererList" is required');
    }

    return this.request('AddDomainReferer', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Title - title. required.
   * @param {String} Description - description. optional.
   * @param {String} Timeline - timeline. optional.
   * @param {String} CoverUrl - coverUrl. optional.
   * @param {Float} Duration - duration. optional.
   */
  addEditingProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Title')) {
      throw new TypeError('parameter "Title" is required');
    }

    return this.request('AddEditingProject', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} CustomerId - customerId. required.
   * @param {String} StreamName - streamName. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} TranscodeGroupId - transcodeGroupId. optional.
   * @param {String} ResourceInfo - resourceInfo. optional.
   * @param {String} FileUrl - fileUrl. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Title - title. optional.
   * @param {String} Tags - tags. optional.
   */
  addLiveStreamVideo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CustomerId')) {
      throw new TypeError('parameter "CustomerId" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'FileUrl')) {
      throw new TypeError('parameter "FileUrl" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('AddLiveStreamVideo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} FileUrl - fileUrl. optional.
   * @param {String} Title - title. required.
   * @param {String} Tags - tags. optional.
   * @param {Integer} Privilege - publicType. optional.
   * @param {String} IP - createIp. optional.
   * @param {Long} FileSize - fileSize. optional.
   * @param {Long} Duration - duration. optional.
   * @param {String} FileName - fileName. required.
   * @param {String} FileMd5 - fileMd5. optional.
   * @param {String} Description - description. optional.
   * @param {String} CoverURL - coverUrl. optional.
   * @param {Integer} CateId - cateId. optional.
   * @param {String} MediaWorkflowId - mediaWorkflowId. optional.
   * @param {String} MediaWorkflowUserData - mediaWorkflowUserData. optional.
   * @param {String} MediaWorkflowRunId - mediaWorkflowRunId. optional.
   */
  addMediaInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Title')) {
      throw new TypeError('parameter "Title" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    return this.request('AddMediaInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Tag - tag. required.
   * @param {String} MediaId - mediaId. required.
   */
  addMediaTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Tag')) {
      throw new TypeError('parameter "Tag" is required');
    }

    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('AddMediaTag', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} YKCloudVid - ykCloudVid. required.
   * @param {String} MediaId - mediaId. required.
   * @param {String} YKVideoId - ykVideoId. optional.
   */
  addMidYKVid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'YKCloudVid')) {
      throw new TypeError('parameter "YKCloudVid" is required');
    }

    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('AddMidYKVid', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  addOriginTemplate(params = {}, options = {}) {
    return this.request('AddOriginTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CustomerId - customerId. required.
   */
  addPipeline(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CustomerId')) {
      throw new TypeError('parameter "CustomerId" is required');
    }

    return this.request('AddPipeline', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} NewAccountAkId - newAccountAkId. required.
   * @param {String} NewAccountAkSecret - newAccountAkSecret. required.
   * @param {Long} NewAccountUserId - newAccountUserId. required.
   * @param {String} NewAccountLoginName - newAccountLoginName. required.
   * @param {String} NewAccountRegionId - newAccountRegionId. required.
   * @param {Integer} MaxBucketLimit - maxBucketLimit. optional.
   * @param {String} Commands - commands. optional.
   */
  addProductAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NewAccountAkId')) {
      throw new TypeError('parameter "NewAccountAkId" is required');
    }

    if (!hasOwnProperty(params, 'NewAccountAkSecret')) {
      throw new TypeError('parameter "NewAccountAkSecret" is required');
    }

    if (!hasOwnProperty(params, 'NewAccountUserId')) {
      throw new TypeError('parameter "NewAccountUserId" is required');
    }

    if (!hasOwnProperty(params, 'NewAccountLoginName')) {
      throw new TypeError('parameter "NewAccountLoginName" is required');
    }

    if (!hasOwnProperty(params, 'NewAccountRegionId')) {
      throw new TypeError('parameter "NewAccountRegionId" is required');
    }

    return this.request('AddProductAccount', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Time - time. required.
   * @param {String} Height - height. required.
   * @param {String} Width - width. required.
   * @param {String} Number - num. required.
   */
  addSnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    if (!hasOwnProperty(params, 'Height')) {
      throw new TypeError('parameter "Height" is required');
    }

    if (!hasOwnProperty(params, 'Width')) {
      throw new TypeError('parameter "Width" is required');
    }

    if (!hasOwnProperty(params, 'Number')) {
      throw new TypeError('parameter "Number" is required');
    }

    return this.request('AddSnapshot', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} StorageType - storageType. required.
   * @param {String} StorageRegion - storageRegion. required.
   * @param {String} StorageLocation - storageLocation. optional.
   */
  addStorage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StorageType')) {
      throw new TypeError('parameter "StorageType" is required');
    }

    if (!hasOwnProperty(params, 'StorageRegion')) {
      throw new TypeError('parameter "StorageRegion" is required');
    }

    return this.request('AddStorage', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Name - name. required.
   * @param {String} ToNeedTranscode - toNeedTranscode. required.
   */
  addTemplateGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ToNeedTranscode')) {
      throw new TypeError('parameter "ToNeedTranscode" is required');
    }

    return this.request('AddTemplateGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} PolicyInfoList - policyInfoList. required.
   * @param {String} Source - source. required.
   * @param {Long} AuthTimestamp - authTimestamp. required.
   * @param {String} AuthInfo - authInfo. required.
   */
  addThirdPartPlayPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PolicyInfoList')) {
      throw new TypeError('parameter "PolicyInfoList" is required');
    }

    if (!hasOwnProperty(params, 'Source')) {
      throw new TypeError('parameter "Source" is required');
    }

    if (!hasOwnProperty(params, 'AuthTimestamp')) {
      throw new TypeError('parameter "AuthTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'AuthInfo')) {
      throw new TypeError('parameter "AuthInfo" is required');
    }

    return this.request('AddThirdPartPlayPolicy', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Muxer - muxer. required.
   * @param {String} Resolution - resolution. required.
   * @param {String} Detail - detail. required.
   * @param {String} Name - name. required.
   * @param {String} VideoBitrate - videoBitrate. required.
   * @param {String} VideoCodec - videoCodec. required.
   * @param {String} AudioBitrate - audioBitrate. required.
   * @param {String} AudioCodec - audioCodec. required.
   */
  addTranscodeTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Muxer')) {
      throw new TypeError('parameter "Muxer" is required');
    }

    if (!hasOwnProperty(params, 'Resolution')) {
      throw new TypeError('parameter "Resolution" is required');
    }

    if (!hasOwnProperty(params, 'Detail')) {
      throw new TypeError('parameter "Detail" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'VideoBitrate')) {
      throw new TypeError('parameter "VideoBitrate" is required');
    }

    if (!hasOwnProperty(params, 'VideoCodec')) {
      throw new TypeError('parameter "VideoCodec" is required');
    }

    if (!hasOwnProperty(params, 'AudioBitrate')) {
      throw new TypeError('parameter "AudioBitrate" is required');
    }

    if (!hasOwnProperty(params, 'AudioCodec')) {
      throw new TypeError('parameter "AudioCodec" is required');
    }

    return this.request('AddTranscodeTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Tag - tag. required.
   * @param {String} MediaId - mediaId. required.
   */
  addVideoTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Tag')) {
      throw new TypeError('parameter "Tag" is required');
    }

    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('AddVideoTag', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} Sources - sources. required.
   * @param {String} CheckUrl - checkUrl. optional.
   * @param {String} Scope - scope. optional.
   */
  addVodDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Sources')) {
      throw new TypeError('parameter "Sources" is required');
    }

    return this.request('AddVodDomain', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Name - name. required.
   * @param {String} TemplateType - templateType. required.
   * @param {String} SubTemplateType - subTemplateType. optional.
   * @param {String} TemplateConfig - templateConfig. required.
   */
  addVodTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'TemplateType')) {
      throw new TypeError('parameter "TemplateType" is required');
    }

    if (!hasOwnProperty(params, 'TemplateConfig')) {
      throw new TypeError('parameter "TemplateConfig" is required');
    }

    return this.request('AddVodTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} HorizontalOffet - horizontalOffet. optional.
   * @param {String} HorizontalOffset - horizontalOffset. optional.
   * @param {String} VerticalOffset - verticalOffset. optional.
   * @param {String} Position - position. optional.
   * @param {String} Type - type. optional.
   * @param {String} Bucket - bucket. optional.
   * @param {String} Object - object. optional.
   * @param {String} Name - name. required.
   * @param {String} Width - width. optional.
   * @param {String} Height - height. optional.
   * @param {String} Active - active. optional.
   * @param {String} ScreenMode - screenMode. optional.
   * @param {Integer} VideoWidth - videoWidth. optional.
   * @param {Integer} VideoHeight - videoHeight. optional.
   * @param {String} WatermarkConfig - watermarkConfig. optional.
   * @param {String} FileUrl - fileUrl. optional.
   * @param {Integer} ScreenWidth - screenWidth. optional.
   * @param {Integer} ScreenHeight - screenHeight. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   */
  addWatermark(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('AddWatermark', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} WatermarkGroupName - watermarkGroupName. required.
   */
  addWatermarkGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WatermarkGroupName')) {
      throw new TypeError('parameter "WatermarkGroupName" is required');
    }

    return this.request('AddWatermarkGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} WatermarkType - watermarkType. required.
   * @param {String} WatermarkConfig - watermarkConfig. required.
   * @param {String} WatermarkName - watermarkName. optional.
   * @param {String} MediaFileId - watermarkFileId. optional.
   */
  addWatermarkInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WatermarkType')) {
      throw new TypeError('parameter "WatermarkType" is required');
    }

    if (!hasOwnProperty(params, 'WatermarkConfig')) {
      throw new TypeError('parameter "WatermarkConfig" is required');
    }

    return this.request('AddWatermarkInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} WatermarkGroupId - watermarkGroupId. required.
   * @param {String} WatermarkIds - watermarkIds. required.
   */
  addWatermarkRelation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WatermarkGroupId')) {
      throw new TypeError('parameter "WatermarkGroupId" is required');
    }

    if (!hasOwnProperty(params, 'WatermarkIds')) {
      throw new TypeError('parameter "WatermarkIds" is required');
    }

    return this.request('AddWatermarkRelation', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Data - data. required.
   * @param {String} Cookie - cookie. optional.
   */
  assumeExperienceRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    return this.request('AssumeExperienceRole', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Source - source. required.
   * @param {String} ClientId - clientId. required.
   * @param {String} BusinessType - businessType. required.
   * @param {String} TerminalType - terminalType. required.
   * @param {String} DeviceModel - deviceModel. required.
   * @param {String} AppVersion - appVersion. required.
   * @param {Long} AuthTimestamp - authTimestamp. required.
   * @param {String} AuthInfo - authInfo. required.
   * @param {String} Prefix - prefix. optional.
   */
  assumeOssRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Source')) {
      throw new TypeError('parameter "Source" is required');
    }

    if (!hasOwnProperty(params, 'ClientId')) {
      throw new TypeError('parameter "ClientId" is required');
    }

    if (!hasOwnProperty(params, 'BusinessType')) {
      throw new TypeError('parameter "BusinessType" is required');
    }

    if (!hasOwnProperty(params, 'TerminalType')) {
      throw new TypeError('parameter "TerminalType" is required');
    }

    if (!hasOwnProperty(params, 'DeviceModel')) {
      throw new TypeError('parameter "DeviceModel" is required');
    }

    if (!hasOwnProperty(params, 'AppVersion')) {
      throw new TypeError('parameter "AppVersion" is required');
    }

    if (!hasOwnProperty(params, 'AuthTimestamp')) {
      throw new TypeError('parameter "AuthTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'AuthInfo')) {
      throw new TypeError('parameter "AuthInfo" is required');
    }

    return this.request('AssumeOssRole', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientId - clientId. required.
   * @param {String} BusinessType - businessType. required.
   * @param {String} TerminalType - terminalType. required.
   * @param {String} DeviceModel - deviceModel. required.
   * @param {String} AppVersion - appVersion. required.
   * @param {Long} AuthTimestamp - authTimestamp. required.
   * @param {String} AuthInfo - authInfo. required.
   */
  assumeSlsRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientId')) {
      throw new TypeError('parameter "ClientId" is required');
    }

    if (!hasOwnProperty(params, 'BusinessType')) {
      throw new TypeError('parameter "BusinessType" is required');
    }

    if (!hasOwnProperty(params, 'TerminalType')) {
      throw new TypeError('parameter "TerminalType" is required');
    }

    if (!hasOwnProperty(params, 'DeviceModel')) {
      throw new TypeError('parameter "DeviceModel" is required');
    }

    if (!hasOwnProperty(params, 'AppVersion')) {
      throw new TypeError('parameter "AppVersion" is required');
    }

    if (!hasOwnProperty(params, 'AuthTimestamp')) {
      throw new TypeError('parameter "AuthTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'AuthInfo')) {
      throw new TypeError('parameter "AuthInfo" is required');
    }

    return this.request('AssumeSlsRole', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {Long} SdkCode - sdkCode. optional.
   * @param {Long} LicenseVersion - licenseVersion. required.
   * @param {Long} Platform - platform. required.
   * @param {String} BundleId - bundleId. optional.
   * @param {String} PackageName - packageName. optional.
   * @param {String} LicenseSignature - signature. optional.
   * @param {String} Nonce - nonce. required.
   * @param {Long} Time - time. required.
   * @param {String} Sign - sign. required.
   * @param {String} SdkVersion - sdkVersion. optional.
   * @param {Long} SdkVersionCode - sdkVersionCode. optional.
   */
  authorizeAppLicense(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LicenseVersion')) {
      throw new TypeError('parameter "LicenseVersion" is required');
    }

    if (!hasOwnProperty(params, 'Platform')) {
      throw new TypeError('parameter "Platform" is required');
    }

    if (!hasOwnProperty(params, 'Nonce')) {
      throw new TypeError('parameter "Nonce" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    if (!hasOwnProperty(params, 'Sign')) {
      throw new TypeError('parameter "Sign" is required');
    }

    return this.request('AuthorizeAppLicense', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainNames - domainNames. required.
   * @param {String} Functions - functions. required.
   */
  batchSetVodDomainConfigs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainNames')) {
      throw new TypeError('parameter "DomainNames" is required');
    }

    if (!hasOwnProperty(params, 'Functions')) {
      throw new TypeError('parameter "Functions" is required');
    }

    return this.request('BatchSetVodDomainConfigs', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainNames - domainNames. required.
   */
  batchStartVodDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainNames')) {
      throw new TypeError('parameter "DomainNames" is required');
    }

    return this.request('BatchStartVodDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainNames - domainNames. required.
   */
  batchStopVodDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainNames')) {
      throw new TypeError('parameter "DomainNames" is required');
    }

    return this.request('BatchStopVodDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  categoryTree(params = {}, options = {}) {
    return this.request('CategoryTree', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VideoIds - mediaIds. required.
   * @param {String} CheckStatus - checkState. required.
   * @param {String} CheckReason - checkReason. optional.
   */
  checkVideo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoIds')) {
      throw new TypeError('parameter "VideoIds" is required');
    }

    if (!hasOwnProperty(params, 'CheckStatus')) {
      throw new TypeError('parameter "CheckStatus" is required');
    }

    return this.request('CheckVideo', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} product - product. optional.
   * @param {String} version - version. optional.
   * @param {String} action - action. optional.
   * @param {String} regionId - regionId. optional.
   * @param {String} domain - domain. optional.
   * @param {String} data - data. optional.
   */
  completeOrderParam(params = {}, options = {}) {
    return this.request('CompleteOrderParam', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. required.
   * @param {String} Command - command. required.
   */
  controlVodService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'Command')) {
      throw new TypeError('parameter "Command" is required');
    }

    return this.request('ControlVodService', params, options);
  }

  /**
   * @param {String} AuditContent - auditContent. required.
   */
  createAudit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AuditContent')) {
      throw new TypeError('parameter "AuditContent" is required');
    }

    return this.request('CreateAudit', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} KmsRegionId - kmsRegionId. optional.
   */
  createKMSServiceKey(params = {}, options = {}) {
    return this.request('CreateKMSServiceKey', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createOrder(params = {}, options = {}) {
    return this.request('CreateOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Title - title. optional.
   * @param {String} BusinessType - mediaType. required.
   * @param {String} MediaExt - mediaExt. required.
   * @param {String} FileName - originalFileName. optional.
   * @param {String} Tags - tags. optional.
   * @param {Long} CateId - cateId. optional.
   * @param {String} StorageLocation - storageLocation. optional.
   * @param {String} Description - description. optional.
   * @param {String} FileSize - fileSize. optional.
   * @param {String} UserData - userData. optional.
   */
  createUploadAttachedMedia(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BusinessType')) {
      throw new TypeError('parameter "BusinessType" is required');
    }

    if (!hasOwnProperty(params, 'MediaExt')) {
      throw new TypeError('parameter "MediaExt" is required');
    }

    return this.request('CreateUploadAttachedMedia', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Title - title. optional.
   * @param {String} ImageType - imageType. required.
   * @param {String} ImageExt - imageExt. optional.
   * @param {String} OriginalFileName - originalFileName. optional.
   * @param {String} Tags - tags. optional.
   * @param {String} StorageLocation - storageLocation. optional.
   * @param {Long} CateId - cateId. optional.
   * @param {String} UserData - userData. optional.
   * @param {String} Description - description. optional.
   */
  createUploadImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageType')) {
      throw new TypeError('parameter "ImageType" is required');
    }

    return this.request('CreateUploadImage', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CoverURL - coverUrl. optional.
   * @param {String} Description - description. optional.
   * @param {String} FileName - fileName. required.
   * @param {Long} FileSize - fileSize. required.
   * @param {String} Title - title. required.
   * @param {String} CreateTime - createTime. optional.
   * @param {Integer} CateId - cateId. optional.
   * @param {String} Tags - tags. optional.
   */
  createUploadMaterial(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    if (!hasOwnProperty(params, 'FileSize')) {
      throw new TypeError('parameter "FileSize" is required');
    }

    if (!hasOwnProperty(params, 'Title')) {
      throw new TypeError('parameter "Title" is required');
    }

    return this.request('CreateUploadMaterial', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} BusinessType - businessType. required.
   * @param {String} FileExtension - fileExtension. required.
   * @param {String} MediaId - mediaId. optional.
   * @param {String} UserData - userData. optional.
   */
  createUploadMediaFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BusinessType')) {
      throw new TypeError('parameter "BusinessType" is required');
    }

    if (!hasOwnProperty(params, 'FileExtension')) {
      throw new TypeError('parameter "FileExtension" is required');
    }

    return this.request('CreateUploadMediaFile', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} CoverURL - coverUrl. optional.
   * @param {String} Description - description. optional.
   * @param {String} FileName - fileName. required.
   * @param {Long} FileSize - fileSize. optional.
   * @param {String} IP - createIp. optional.
   * @param {String} Title - title. required.
   * @param {Long} CateId - cateId. optional.
   * @param {String} Tags - tags. optional.
   * @param {String} UserData - userData. optional.
   * @param {String} TemplateGroupId - templateGroupId. optional.
   * @param {String} WorkflowId - workflowId. optional.
   * @param {String} StorageLocation - storageLocation. optional.
   */
  createUploadVideo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    if (!hasOwnProperty(params, 'Title')) {
      throw new TypeError('parameter "Title" is required');
    }

    return this.request('CreateUploadVideo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Group - resourceGroupId. optional.
   * @param {String} DomainNames - domainName. optional.
   * @param {String} Dimension - dimension. required.
   * @param {String} TaskName - name. optional.
   */
  createVodUserUsageDetailDataExportTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Dimension')) {
      throw new TypeError('parameter "Dimension" is required');
    }

    return this.request('CreateVodUserUsageDetailDataExportTask', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TemplateId - templateId. required.
   */
  deleteAITemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('DeleteAITemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  deleteAudioConfig(params = {}, options = {}) {
    return this.request('DeleteAudioConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TemplateId - templateId. required.
   */
  deleteAudioTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('DeleteAudioTemplate', params, options);
  }

  /**
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} CateId - cateId. required.
   */
  deleteCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CateId')) {
      throw new TypeError('parameter "CateId" is required');
    }

    return this.request('DeleteCategory', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CompanionResourceIds - companionResourceIds. required.
   */
  deleteCompanionresourceInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanionResourceIds')) {
      throw new TypeError('parameter "CompanionResourceIds" is required');
    }

    return this.request('DeleteCompanionresourceInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} TemplateIds - templateIds. required.
   */
  deleteCustomTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateIds')) {
      throw new TypeError('parameter "TemplateIds" is required');
    }

    return this.request('DeleteCustomTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} UserId - customerId. required.
   */
  deleteCustomTemplateAndGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('DeleteCustomTemplateAndGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DomainName - domainName. required.
   */
  deleteDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DeleteDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} RefererIdList - refererIdList. required.
   */
  deleteDomainReferer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'RefererIdList')) {
      throw new TypeError('parameter "RefererIdList" is required');
    }

    return this.request('DeleteDomainReferer', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ProjectIds - projectIdStr. required.
   */
  deleteEditingProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectIds')) {
      throw new TypeError('parameter "ProjectIds" is required');
    }

    return this.request('DeleteEditingProject', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DeleteImageType - deleteImageType. required.
   * @param {String} ImageURLs - imageURLs. optional.
   * @param {String} ImageIds - imageIds. optional.
   * @param {String} VideoId - videoId. optional.
   * @param {String} ImageType - imageType. optional.
   */
  deleteImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeleteImageType')) {
      throw new TypeError('parameter "DeleteImageType" is required');
    }

    return this.request('DeleteImage', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} UserId - customerId. required.
   */
  deleteInitCustomTemplateInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('DeleteInitCustomTemplateInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} MaterialIds - materialIdStr. required.
   * @param {Boolean} Force - force. optional.
   */
  deleteMaterial(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MaterialIds')) {
      throw new TypeError('parameter "MaterialIds" is required');
    }

    return this.request('DeleteMaterial', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VideoIds - mediaIdStr. required.
   */
  deleteMediaInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoIds')) {
      throw new TypeError('parameter "VideoIds" is required');
    }

    return this.request('DeleteMediaInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Tag - tag. required.
   * @param {String} MediaId - mediaId. required.
   */
  deleteMediaTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Tag')) {
      throw new TypeError('parameter "Tag" is required');
    }

    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('DeleteMediaTag', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} AppId - appId. required.
   */
  deleteMessageCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DeleteMessageCallback', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} VideoIds - mediaIdStr. required.
   * @param {Boolean} Force - force. optional.
   */
  deleteMezzanines(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoIds')) {
      throw new TypeError('parameter "VideoIds" is required');
    }

    return this.request('DeleteMezzanines', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} YkVid - ykVid. required.
   */
  deleteMidYKVid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'YkVid')) {
      throw new TypeError('parameter "YkVid" is required');
    }

    return this.request('DeleteMidYKVid', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} StorageLocation - storageLocation. required.
   */
  deleteStorage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StorageLocation')) {
      throw new TypeError('parameter "StorageLocation" is required');
    }

    return this.request('DeleteStorage', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobIds - jobIds. required.
   * @param {String} VideoId - mediaId. required.
   */
  deleteStream(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobIds')) {
      throw new TypeError('parameter "JobIds" is required');
    }

    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    return this.request('DeleteStream', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} GroupId - groupId. required.
   */
  deleteTemplateGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DeleteTemplateGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} VideoIds - mediaIdStr. required.
   */
  deleteVideo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoIds')) {
      throw new TypeError('parameter "VideoIds" is required');
    }

    return this.request('DeleteVideo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Tag - tag. required.
   * @param {String} MediaId - mediaId. required.
   */
  deleteVideoTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Tag')) {
      throw new TypeError('parameter "Tag" is required');
    }

    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('DeleteVideoTag', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  deleteVodDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DeleteVodDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} ConfigId - configId. required.
   */
  deleteVodSpecificConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'ConfigId')) {
      throw new TypeError('parameter "ConfigId" is required');
    }

    return this.request('DeleteVodSpecificConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VodTemplateId - vodTemplateId. required.
   */
  deleteVodTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VodTemplateId')) {
      throw new TypeError('parameter "VodTemplateId" is required');
    }

    return this.request('DeleteVodTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} WatermarkId - watertempId. required.
   */
  deleteWatermark(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WatermarkId')) {
      throw new TypeError('parameter "WatermarkId" is required');
    }

    return this.request('DeleteWatermark', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} WatermarkGroupId - watermarkGroupId. required.
   */
  deleteWatermarkGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WatermarkGroupId')) {
      throw new TypeError('parameter "WatermarkGroupId" is required');
    }

    return this.request('DeleteWatermarkGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} WatermarkIds - watermarkIds. required.
   * @param {String} DelEmptyGroup - delEmptyGroup. optional.
   */
  deleteWatermarkInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WatermarkIds')) {
      throw new TypeError('parameter "WatermarkIds" is required');
    }

    return this.request('DeleteWatermarkInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} WatermarkGroupId - watermarkGroupId. required.
   * @param {String} WatermarkIds - watermarkIds. required.
   */
  deleteWatermarkRelation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WatermarkGroupId')) {
      throw new TypeError('parameter "WatermarkGroupId" is required');
    }

    if (!hasOwnProperty(params, 'WatermarkIds')) {
      throw new TypeError('parameter "WatermarkIds" is required');
    }

    return this.request('DeleteWatermarkRelation', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ProductCode - productCode. required.
   * @param {String} APIProxyName - apiProxyName. required.
   * @param {String} APIProxyParam - apiProxyParam. required.
   */
  describeCDNRefreshTasks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'APIProxyName')) {
      throw new TypeError('parameter "APIProxyName" is required');
    }

    if (!hasOwnProperty(params, 'APIProxyParam')) {
      throw new TypeError('parameter "APIProxyParam" is required');
    }

    return this.request('DescribeCDNRefreshTasks', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} LogDay - logDay. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Long} PageSize - pageSize. optional.
   * @param {Long} PageNo - pageNumber. optional.
   */
  describeCdnDomainLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeCdnDomainLogs', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeCdnRefreshQuota(params = {}, options = {}) {
    return this.request('DescribeCdnRefreshQuota', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} TimeMerge - timeMerge. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} LocationNameEn - locationNameEn. optional.
   * @param {String} IspNameEn - ispNameEn. optional.
   */
  describeDomainBpsData(params = {}, options = {}) {
    return this.request('DescribeDomainBpsData', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} TimeMerge - timeMerge. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} LocationNameEn - locationNameEn. optional.
   * @param {String} IspNameEn - ispNameEn. optional.
   */
  describeDomainFlowData(params = {}, options = {}) {
    return this.request('DescribeDomainFlowData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} BizDate - bizdate. required.
   * @param {Long} PageNo - pageNum. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional.
   */
  describePlayTopVideos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizDate')) {
      throw new TypeError('parameter "BizDate" is required');
    }

    return this.request('DescribePlayTopVideos', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describePlayUserAvg(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribePlayUserAvg', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describePlayUserTotal(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribePlayUserTotal', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} VideoId - videoId. required.
   */
  describePlayVideoStatis(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    return this.request('DescribePlayVideoStatis', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} VideoType - videoType. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeUserAvgCountByDay(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoType')) {
      throw new TypeError('parameter "VideoType" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeUserAvgCountByDay', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} VideoType - videoType. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeUserAvgTimeByDay(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoType')) {
      throw new TypeError('parameter "VideoType" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeUserAvgTimeByDay', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} VideoType - videoType. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeUserTimeRangeByDay(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoType')) {
      throw new TypeError('parameter "VideoType" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeUserTimeRangeByDay', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} VideoType - videoType. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeUserUvByDay(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoType')) {
      throw new TypeError('parameter "VideoType" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeUserUvByDay', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Version - version. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} VideoType - videoType. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeUserUvByDayTest(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoType')) {
      throw new TypeError('parameter "VideoType" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeUserUvByDayTest', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   */
  describeUserVodStatus(params = {}, options = {}) {
    return this.request('DescribeUserVodStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} VideoType - videoType. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeUserVvByDay(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoType')) {
      throw new TypeError('parameter "VideoType" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeUserVvByDay', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} Videoid - videoid. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeUserVvByVideoid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Videoid')) {
      throw new TypeError('parameter "Videoid" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeUserVvByVideoid', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} VideoType - videoType. required.
   * @param {String} Bizdate - bizdate. required.
   */
  describeUserVvTopByDay(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoType')) {
      throw new TypeError('parameter "VideoType" is required');
    }

    if (!hasOwnProperty(params, 'Bizdate')) {
      throw new TypeError('parameter "Bizdate" is required');
    }

    return this.request('DescribeUserVvTopByDay', params, options);
  }

  /**
   */
  describeVideoStatisByDay(params = {}, options = {}) {
    return this.request('DescribeVideoStatisByDay', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} CertName - certName. required.
   */
  describeVodCertificateDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CertName')) {
      throw new TypeError('parameter "CertName" is required');
    }

    return this.request('DescribeVodCertificateDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. optional.
   */
  describeVodCertificateList(params = {}, options = {}) {
    return this.request('DescribeVodCertificateList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeVodDomainBpsData(params = {}, options = {}) {
    return this.request('DescribeVodDomainBpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domain. required.
   */
  describeVodDomainCertificateInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeVodDomainCertificateInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   */
  describeVodDomainCname(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeVodDomainCname', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} FunctionNames - functionNames. required.
   */
  describeVodDomainConfigs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'FunctionNames')) {
      throw new TypeError('parameter "FunctionNames" is required');
    }

    return this.request('DescribeVodDomainConfigs', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   */
  describeVodDomainDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeVodDomainDetail', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeVodDomainHitRateData(params = {}, options = {}) {
    return this.request('DescribeVodDomainHitRateData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   */
  describeVodDomainHttpCodeData(params = {}, options = {}) {
    return this.request('DescribeVodDomainHttpCodeData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeVodDomainISPData(params = {}, options = {}) {
    return this.request('DescribeVodDomainISPData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {Long} PageSize - pageSize. optional. default: 300.
   * @param {Long} PageNumber - pageIndex. optional. default: 1.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeVodDomainLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeVodDomainLog', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeVodDomainPvData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeVodDomainPvData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeVodDomainQpsData(params = {}, options = {}) {
    return this.request('DescribeVodDomainQpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeVodDomainRealTimeBpsData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeVodDomainRealTimeBpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeVodDomainRealTimeByteHitRateData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeVodDomainRealTimeByteHitRateData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeVodDomainRealTimeHttpCodeData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeVodDomainRealTimeHttpCodeData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeVodDomainRealTimeQpsData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeVodDomainRealTimeQpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeVodDomainRealTimeReqHitRateData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeVodDomainRealTimeReqHitRateData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeVodDomainRealTimeSrcBpsData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeVodDomainRealTimeSrcBpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeVodDomainRealTimeSrcTrafficData(params = {}, options = {}) {
    return this.request('DescribeVodDomainRealTimeSrcTrafficData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeVodDomainRealTimeTrafficData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeVodDomainRealTimeTrafficData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeVodDomainRegionData(params = {}, options = {}) {
    return this.request('DescribeVodDomainRegionData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   */
  describeVodDomainSrcBpsData(params = {}, options = {}) {
    return this.request('DescribeVodDomainSrcBpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   */
  describeVodDomainSrcTrafficData(params = {}, options = {}) {
    return this.request('DescribeVodDomainSrcTrafficData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} SortBy - sortBy. optional.
   * @param {String} Percent - percent. optional. default: false.
   */
  describeVodDomainTopReferVisit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeVodDomainTopReferVisit', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} SortBy - sortBy. optional.
   * @param {String} Percent - percent. optional. default: false.
   */
  describeVodDomainTopUrlVisit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeVodDomainTopUrlVisit', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeVodDomainTrafficData(params = {}, options = {}) {
    return this.request('DescribeVodDomainTrafficData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Type - type. optional.
   * @param {String} Area - area. optional. default: CN.
   * @param {String} Field - field. required.
   */
  describeVodDomainUsageData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Field')) {
      throw new TypeError('parameter "Field" is required');
    }

    return this.request('DescribeVodDomainUsageData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeVodDomainUvData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeVodDomainUvData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeVodDomainsUsageByDay(params = {}, options = {}) {
    return this.request('DescribeVodDomainsUsageByDay', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   */
  describeVodRefreshQuota(params = {}, options = {}) {
    return this.request('DescribeVodRefreshQuota', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} TaskId - taskId. optional.
   * @param {String} ObjectPath - content. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {String} ObjectType - taskType. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} Status - taskStatusStr. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  describeVodRefreshTasks(params = {}, options = {}) {
    return this.request('DescribeVodRefreshTasks', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   */
  describeVodService(params = {}, options = {}) {
    return this.request('DescribeVodService', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Product - product. optional. default: vod.
   * @param {Long} Limit - limit. optional. default: 20.
   */
  describeVodTopDomainsByFlow(params = {}, options = {}) {
    return this.request('DescribeVodTopDomainsByFlow', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} Dimension - dimension. required.
   * @param {String} Area - area. optional.
   */
  describeVodUserBillPrediction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Dimension')) {
      throw new TypeError('parameter "Dimension" is required');
    }

    return this.request('DescribeVodUserBillPrediction', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {String} DomainName - domainName. optional.
   * @param {String} DomainStatus - domainStatus. optional.
   * @param {String} DomainSearchType - domainSearchType. optional.
   * @param {String} CdnType - webSiteType. optional.
   * @param {Boolean} CheckDomainShow - checkDomainShow. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} FuncId - funcId. optional.
   * @param {String} FuncFilter - funcFilter. optional.
   */
  describeVodUserDomains(params = {}, options = {}) {
    return this.request('DescribeVodUserDomains', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   */
  describeVodUserQuota(params = {}, options = {}) {
    return this.request('DescribeVodUserQuota', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   */
  describeVodUserResourcePackage(params = {}, options = {}) {
    return this.request('DescribeVodUserResourcePackage', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} PageSize - pageSize. optional.
   * @param {String} PageNumber - pageIndex. optional.
   */
  describeVodUserUsageDetailDataExportTask(params = {}, options = {}) {
    return this.request('DescribeVodUserUsageDetailDataExportTask', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   */
  displayAIAuditSwitch(params = {}, options = {}) {
    return this.request('DisplayAIAuditSwitch', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VideoId - videoId. required.
   * @param {String} EditType - editType. required.
   * @param {String} EditConfig - editConfig. required.
   */
  editVideoIndexFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    if (!hasOwnProperty(params, 'EditType')) {
      throw new TypeError('parameter "EditType" is required');
    }

    if (!hasOwnProperty(params, 'EditConfig')) {
      throw new TypeError('parameter "EditConfig" is required');
    }

    return this.request('EditVideoIndexFile', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} PersonName - personName. required.
   * @param {String} PersonId - personId. optional.
   * @param {String} PersonLibrary - personLibrary. optional.
   * @param {String} Category - category. optional.
   * @param {String} ImageIds - imageIds. optional.
   */
  faceRegistration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PersonName')) {
      throw new TypeError('parameter "PersonName" is required');
    }

    return this.request('FaceRegistration', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} CustomerId - customerId. required.
   * @param {String} StreamName - streamName. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} AppName - appName. required.
   * @param {String} AutoCompose - autoCompose. optional.
   * @param {String} TranscodeGroupId - transcodeGroupId. optional.
   */
  finishLiveStreamRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CustomerId')) {
      throw new TypeError('parameter "CustomerId" is required');
    }

    if (!hasOwnProperty(params, 'StreamName')) {
      throw new TypeError('parameter "StreamName" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('FinishLiveStreamRecord', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AppIdentification - appIdentification. required.
   * @param {String} AppDecryptKey - appDecryptKey. required.
   */
  generateDownloadSecretKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppIdentification')) {
      throw new TypeError('parameter "AppIdentification" is required');
    }

    if (!hasOwnProperty(params, 'AppDecryptKey')) {
      throw new TypeError('parameter "AppDecryptKey" is required');
    }

    return this.request('GenerateDownloadSecretKey', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobId - jobId. required.
   */
  getAIMediaAuditJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('GetAIMediaAuditJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Types - types. required.
   */
  getAIService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Types')) {
      throw new TypeError('parameter "Types" is required');
    }

    return this.request('GetAIService', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {String} StartTimeUTC - startTimeUTC. optional.
   * @param {String} EndTimeUTC - endTimeUTC. optional.
   * @param {String} Level - level. required.
   * @param {String} Type - type. required.
   * @param {String} Division - division. optional.
   */
  getAIStatis(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Level')) {
      throw new TypeError('parameter "Level" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('GetAIStatis', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TemplateId - templateId. required.
   */
  getAITemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('GetAITemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {Long} LicenseId - licenseId. required.
   */
  getAppLicense(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LicenseId')) {
      throw new TypeError('parameter "LicenseId" is required');
    }

    return this.request('GetAppLicense', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {Long} CustomerId - customerId. optional.
   * @param {Long} AccountId - accountId. optional.
   * @param {String} ContractNo - contractNo. optional.
   * @param {String} AppName - appName. optional.
   * @param {String} BundleId - bundleId. optional.
   * @param {String} PackageName - packageName. optional.
   * @param {String} Type - type. optional.
   * @param {String} SdkIds - sdkIds. optional.
   * @param {String} Feature - feature. optional.
   * @param {String} Status - status. optional.
   * @param {Long} PageNo - pageNo. optional.
   * @param {Long} PageSize - pageSize. optional.
   * @param {String} StartCreationTime - startCreationTime. optional.
   * @param {String} EndCreationTime - endCreationTime. optional.
   * @param {String} StartExpiredTime - startExpiredTime. optional.
   * @param {String} EndExpiredTime - endExpiredTime. optional.
   * @param {String} SortBy - sortBy. optional.
   */
  getAppLicenseList(params = {}, options = {}) {
    return this.request('GetAppLicenseList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TemplateId - templateId. required.
   */
  getAudioTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('GetAudioTemplate', params, options);
  }

  /**
   * @param {String} VideoId - mediaId. required.
   * @param {Long} PageNo - pageNo. optional.
   * @param {Long} PageSize - pageSize. optional.
   * @param {String} SortBy - sortBy. optional.
   */
  getAuditHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    return this.request('GetAuditHistory', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} VideoId - videoId. required.
   */
  getAuditResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    return this.request('GetAuditResult', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} MediaId - mediaId. required.
   * @param {Integer} PageNo - pageNo. optional.
   */
  getAuditResultDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('GetAuditResultDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} VideoIds - videoIds. required.
   * @param {String} Formats - formats. optional.
   * @param {Long} AuthTimeout - authTimeout. optional.
   * @param {String} Rand - rand. optional.
   * @param {String} AuthInfo - authInfo. optional.
   * @param {String} Channel - channel. optional.
   * @param {String} PlayerVersion - playerVersion. optional.
   * @param {String} OutputType - outputType. optional.
   * @param {String} StreamType - streamType. optional.
   * @param {String} ReAuthInfo - reAuthInfo. optional.
   */
  getBatchPlayInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoIds')) {
      throw new TypeError('parameter "VideoIds" is required');
    }

    return this.request('GetBatchPlayInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} UserId - userId. required.
   */
  getBucketListInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('GetBucketListInner', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Level - level. optional.
   */
  getCDNStatis(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('GetCDNStatis', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {String} StartTimeUTC - startTimeUTC. optional.
   * @param {String} EndTimeUTC - endTimeUTC. optional.
   * @param {String} Level - level. optional.
   * @param {String} LevelRule - levelRule. optional.
   * @param {String} DomainName - domainName. optional.
   */
  getCDNStatisSum(params = {}, options = {}) {
    return this.request('GetCDNStatisSum', params, options);
  }

  /**
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {Long} CateId - cateId. optional.
   * @param {Long} PageNo - pageNo. optional.
   * @param {Long} PageSize - pageSize. optional.
   * @param {String} SortBy - sortBy. optional.
   */
  getCategories(params = {}, options = {}) {
    return this.request('GetCategories', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  getCategoryList(params = {}, options = {}) {
    return this.request('GetCategoryList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  getCategoryTree(params = {}, options = {}) {
    return this.request('GetCategoryTree', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  getCheckChannel(params = {}, options = {}) {
    return this.request('GetCheckChannel', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CompanionResourceId - companionResourceId. required.
   */
  getCompanionresourceInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanionResourceId')) {
      throw new TypeError('parameter "CompanionResourceId" is required');
    }

    return this.request('GetCompanionresourceInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TemplateId - templateId. required.
   */
  getCustomTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('GetCustomTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  getCustomerConfig(params = {}, options = {}) {
    return this.request('GetCustomerConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  getCustomerTranscodeConf(params = {}, options = {}) {
    return this.request('GetCustomerTranscodeConf', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TemplateType - templateType. required.
   */
  getDefaultAITemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateType')) {
      throw new TypeError('parameter "TemplateType" is required');
    }

    return this.request('GetDefaultAITemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DomainName - domainName. required.
   */
  getDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('GetDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} DomainName - domainName. required.
   */
  getDomainAuth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('GetDomainAuth', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} DomainName - domainName. required.
   * @param {Long} UserId - userId. required.
   */
  getDomainAuthInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('GetDomainAuthInner', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  getDomainList(params = {}, options = {}) {
    return this.request('GetDomainList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DomainType - domainType. required.
   * @param {Long} UserId - userId. required.
   */
  getDomainListInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainType')) {
      throw new TypeError('parameter "DomainType" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('GetDomainListInner', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} DomainName - domainName. required.
   */
  getDomainSecurity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('GetDomainSecurity', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ProjectId - projectId. required.
   */
  getEditingProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetEditingProject', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Status - states. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} SortBy - sortBy. optional.
   */
  getEditingProjectList(params = {}, options = {}) {
    return this.request('GetEditingProjectList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Type - type. required.
   */
  getEditingProjectMaterials(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('GetEditingProjectMaterials', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ImageId - mediaId. required.
   * @param {Long} AuthTimeout - authTimeout. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   */
  getImageInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    return this.request('GetImageInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {String} StartTimeUTC - startTimeUTC. optional.
   * @param {String} EndTimeUTC - endTimeUTC. optional.
   * @param {String} Level - level. optional.
   * @param {String} Division - division. optional.
   */
  getMTSStatis(params = {}, options = {}) {
    return this.request('GetMTSStatis', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MaterialId - materialId. required.
   */
  getMaterial(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MaterialId')) {
      throw new TypeError('parameter "MaterialId" is required');
    }

    return this.request('GetMaterial', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Integer} CateId - cateId. optional.
   * @param {String} Status - states. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} SortBy - sortBy. optional.
   * @param {String} Type - type. optional.
   * @param {String} Source - source. optional.
   */
  getMaterialList(params = {}, options = {}) {
    return this.request('GetMaterialList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaId - mediaId. required.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   */
  getMediaAuditResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('GetMediaAuditResult', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaId - mediaId. required.
   * @param {Integer} PageNo - pageNo. required.
   */
  getMediaAuditResultDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    return this.request('GetMediaAuditResultDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaId - mediaId. required.
   */
  getMediaAuditResultTimeline(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('GetMediaAuditResultTimeline', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} MediaId - mediaId. required.
   */
  getMediaDNAResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('GetMediaDNAResult', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VideoId - mediaId. required.
   */
  getMediaInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    return this.request('GetMediaInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} CateId - cateId. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} SortBy - sortBy. optional.
   */
  getMediaInfoList(params = {}, options = {}) {
    return this.request('GetMediaInfoList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobId - jobId. optional.
   * @param {String} PlayURL - playURL. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   */
  getMediaStream(params = {}, options = {}) {
    return this.request('GetMediaStream', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} AppId - appId. optional.
   */
  getMessageCallback(params = {}, options = {}) {
    return this.request('GetMessageCallback', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   */
  getMessageCallbackEventList(params = {}, options = {}) {
    return this.request('GetMessageCallbackEventList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} VideoId - videoId. required.
   * @param {Long} AuthTimeout - authTimeout. optional.
   * @param {String} OutputType - outputType. optional.
   * @param {String} AdditionType - additionType. optional.
   */
  getMezzanineInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    return this.request('GetMezzanineInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} YkVid - ykVid. required.
   */
  getMidYKVid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'YkVid')) {
      throw new TypeError('parameter "YkVid" is required');
    }

    return this.request('GetMidYKVid', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {String} StartTimeUTC - startTimeUTC. optional.
   * @param {String} EndTimeUTC - endTimeUTC. optional.
   * @param {String} Level - level. required.
   * @param {String} Division - division. optional.
   */
  getOSSFlowStatis(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Level')) {
      throw new TypeError('parameter "Level" is required');
    }

    return this.request('GetOSSFlowStatis', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {String} StartTimeUTC - startTimeUTC. optional.
   * @param {String} EndTimeUTC - endTimeUTC. optional.
   * @param {String} Level - level. optional.
   * @param {String} Division - division. optional.
   */
  getOSSStatis(params = {}, options = {}) {
    return this.request('GetOSSStatis', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} StorageRegion - storageRegion. optional.
   * @param {String} Prefix - prefix. optional.
   * @param {String} MaxKeys - maxKeys. optional.
   */
  getPersonalStorageList(params = {}, options = {}) {
    return this.request('GetPersonalStorageList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} SignVersion - signVersion. required.
   * @param {String} Channel - channel. required.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   */
  getPlayChannelKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SignVersion')) {
      throw new TypeError('parameter "SignVersion" is required');
    }

    if (!hasOwnProperty(params, 'Channel')) {
      throw new TypeError('parameter "Channel" is required');
    }

    return this.request('GetPlayChannelKey', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {Integer} State - state. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   */
  getPlayChannelList(params = {}, options = {}) {
    return this.request('GetPlayChannelList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} VideoId - videoId. required.
   * @param {String} Formats - formats. optional.
   * @param {Long} AuthTimeout - authTimeout. optional.
   * @param {String} Rand - rand. optional.
   * @param {String} AuthInfo - authInfo. optional.
   * @param {String} Channel - channel. optional.
   * @param {String} PlayerVersion - playerVersion. optional.
   * @param {String} OutputType - outputType. optional.
   * @param {String} StreamType - streamType. optional.
   * @param {String} ReAuthInfo - reAuthInfo. optional.
   * @param {String} Definition - definition. optional.
   * @param {String} ResultType - resultType. optional.
   * @param {String} PlayConfig - playConfig. optional.
   */
  getPlayInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    return this.request('GetPlayInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Type - type. required.
   * @param {String} Level - level. optional.
   */
  getPlayStatis(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('GetPlayStatis', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   */
  getServiceStatus(params = {}, options = {}) {
    return this.request('GetServiceStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} StorageLocation - storageLocation. optional.
   */
  getStorageInfo(params = {}, options = {}) {
    return this.request('GetStorageInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {String} StorageRegion - storageRegion. optional.
   * @param {String} StorageType - storageType. optional.
   * @param {String} StorageStatus - storageStatus. optional.
   * @param {String} Division - division. optional.
   */
  getStorageList(params = {}, options = {}) {
    return this.request('GetStorageList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   */
  getStorageRegionList(params = {}, options = {}) {
    return this.request('GetStorageRegionList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} GroupId - groupId. required.
   */
  getTemplateGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('GetTemplateGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} ContentId - contentId. required.
   * @param {String} Source - source. required.
   * @param {Long} AuthTimestamp - authTimestamp. required.
   * @param {String} AuthInfo - authInfo. required.
   */
  getThirdPartPlayPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ContentId')) {
      throw new TypeError('parameter "ContentId" is required');
    }

    if (!hasOwnProperty(params, 'Source')) {
      throw new TypeError('parameter "Source" is required');
    }

    if (!hasOwnProperty(params, 'AuthTimestamp')) {
      throw new TypeError('parameter "AuthTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'AuthInfo')) {
      throw new TypeError('parameter "AuthInfo" is required');
    }

    return this.request('GetThirdPartPlayPolicy', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  getTotalStatis(params = {}, options = {}) {
    return this.request('GetTotalStatis', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} VideoId - mediaId. required.
   */
  getTranscodeInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    return this.request('GetTranscodeInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Source - source. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} BusinessType - businessType. optional.
   * @param {String} TerminalType - terminalType. optional.
   * @param {String} DeviceModel - deviceModel. optional.
   * @param {String} AppVersion - appVersion. optional.
   * @param {Long} AuthTimestamp - authTimestamp. required.
   * @param {String} AuthInfo - authInfo. required.
   * @param {String} UploadInfoList - uploadInfoList. required.
   * @param {Long} UserId - userId. optional.
   * @param {String} UploadAddress - uploadAddress. optional.
   */
  getUploadProgress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AuthTimestamp')) {
      throw new TypeError('parameter "AuthTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'AuthInfo')) {
      throw new TypeError('parameter "AuthInfo" is required');
    }

    if (!hasOwnProperty(params, 'UploadInfoList')) {
      throw new TypeError('parameter "UploadInfoList" is required');
    }

    return this.request('GetUploadProgress', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Integer} FileType - fileType. required.
   * @param {String} ImageExt - imageExt. optional.
   */
  getUploadSTSToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileType')) {
      throw new TypeError('parameter "FileType" is required');
    }

    return this.request('GetUploadSTSToken', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} UserId - userId. required.
   */
  getUserInfoInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('GetUserInfoInner', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VideoId - videoId. required.
   * @param {String} AuthInfo - authInfo. optional.
   */
  getVideoConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    return this.request('GetVideoConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} MediaId - mediaId. required.
   */
  getVideoDNAResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('GetVideoDNAResult', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VideoId - mediaId. required.
   * @param {String} ResultTypes - resultTypes. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   */
  getVideoInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    return this.request('GetVideoInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VideoIds - mediaIds. required.
   */
  getVideoInfos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoIds')) {
      throw new TypeError('parameter "VideoIds" is required');
    }

    return this.request('GetVideoInfos', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} CateId - cateId. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} SortBy - sortBy. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  getVideoList(params = {}, options = {}) {
    return this.request('GetVideoList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VideoId - videoId. required.
   * @param {Long} AuthInfoTimeout - authInfoTimeout. optional.
   * @param {String} ReAuthInfo - reAuthInfo. optional.
   * @param {String} PlayConfig - playConfig. optional.
   */
  getVideoPlayAuth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    return this.request('GetVideoPlayAuth', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Channel - channel. required.
   * @param {Long} ClientTS - clientTS. required.
   * @param {String} ClientVersion - clientVersion. required.
   * @param {String} PlaySign - playSign. required.
   * @param {String} SignVersion - signVersion. required.
   * @param {String} VideoId - mediaId. required.
   */
  getVideoPlayInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Channel')) {
      throw new TypeError('parameter "Channel" is required');
    }

    if (!hasOwnProperty(params, 'ClientTS')) {
      throw new TypeError('parameter "ClientTS" is required');
    }

    if (!hasOwnProperty(params, 'ClientVersion')) {
      throw new TypeError('parameter "ClientVersion" is required');
    }

    if (!hasOwnProperty(params, 'PlaySign')) {
      throw new TypeError('parameter "PlaySign" is required');
    }

    if (!hasOwnProperty(params, 'SignVersion')) {
      throw new TypeError('parameter "SignVersion" is required');
    }

    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    return this.request('GetVideoPlayInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Channel - channel. required.
   * @param {Long} ClientTS - clientTS. required.
   * @param {String} ClientVersion - clientVersion. required.
   * @param {String} PlaySign - playSign. required.
   * @param {String} SignVersion - signVersion. required.
   * @param {String} VideoId - mediaId. required.
   */
  getVideoPlayInfoForCloud(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Channel')) {
      throw new TypeError('parameter "Channel" is required');
    }

    if (!hasOwnProperty(params, 'ClientTS')) {
      throw new TypeError('parameter "ClientTS" is required');
    }

    if (!hasOwnProperty(params, 'ClientVersion')) {
      throw new TypeError('parameter "ClientVersion" is required');
    }

    if (!hasOwnProperty(params, 'PlaySign')) {
      throw new TypeError('parameter "PlaySign" is required');
    }

    if (!hasOwnProperty(params, 'SignVersion')) {
      throw new TypeError('parameter "SignVersion" is required');
    }

    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    return this.request('GetVideoPlayInfoForCloud', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VodTemplateId - vodTemplateId. required.
   */
  getVodTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VodTemplateId')) {
      throw new TypeError('parameter "VodTemplateId" is required');
    }

    return this.request('GetVodTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} WatermarkId - watertempId. required.
   */
  getWatermark(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WatermarkId')) {
      throw new TypeError('parameter "WatermarkId" is required');
    }

    return this.request('GetWatermark', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} PageNo - pageNo. optional.
   * @param {Long} PageSize - pageSize. optional.
   */
  getWatermarkGroup(params = {}, options = {}) {
    return this.request('GetWatermarkGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} WatermarkId - watermarkId. required.
   */
  getWatermarkInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WatermarkId')) {
      throw new TypeError('parameter "WatermarkId" is required');
    }

    return this.request('GetWatermarkInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  getWatermarkSwitch(params = {}, options = {}) {
    return this.request('GetWatermarkSwitch', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  getWatermarks(params = {}, options = {}) {
    return this.request('GetWatermarks', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} UserId - customerId. required.
   * @param {String} GroupId - groupId. optional.
   * @param {String} WorkFlowId - workFlowId. optional.
   */
  initCustomerWithSystemTemplateAndGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('InitCustomerWithSystemTemplateAndGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} UserId - userId. required.
   * @param {Boolean} FlushConfig - flushConfig. optional.
   */
  initCustomerWorkFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('InitCustomerWorkFlow', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserList - userList. required.
   */
  initEditing(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserList')) {
      throw new TypeError('parameter "UserList" is required');
    }

    return this.request('InitEditing', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} UserId - customerId. required.
   */
  initSystemTemplateGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('InitSystemTemplateGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} PayType - payType. required.
   * @param {String} BillType - billType. required.
   * @param {String} ChargeDuration - chargeDuration. required.
   * @param {String} OrderType - orderType. required.
   */
  initVodService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PayType')) {
      throw new TypeError('parameter "PayType" is required');
    }

    if (!hasOwnProperty(params, 'BillType')) {
      throw new TypeError('parameter "BillType" is required');
    }

    if (!hasOwnProperty(params, 'ChargeDuration')) {
      throw new TypeError('parameter "ChargeDuration" is required');
    }

    if (!hasOwnProperty(params, 'OrderType')) {
      throw new TypeError('parameter "OrderType" is required');
    }

    return this.request('InitVodService', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} AIASRJobIds - jobIds. required.
   */
  listAIASRJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AIASRJobIds')) {
      throw new TypeError('parameter "AIASRJobIds" is required');
    }

    return this.request('ListAIASRJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} JobIds - jobIds. required.
   */
  listAIJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobIds')) {
      throw new TypeError('parameter "JobIds" is required');
    }

    return this.request('ListAIJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  listAIStatisType(params = {}, options = {}) {
    return this.request('ListAIStatisType', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TemplateType - templateType. required.
   */
  listAITemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateType')) {
      throw new TypeError('parameter "TemplateType" is required');
    }

    return this.request('ListAITemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} AIVideoCategoryJobIds - jobIds. required.
   */
  listAIVideoCategoryJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AIVideoCategoryJobIds')) {
      throw new TypeError('parameter "AIVideoCategoryJobIds" is required');
    }

    return this.request('ListAIVideoCategoryJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} AIVideoCensorJobIds - jobIds. required.
   */
  listAIVideoCensorJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AIVideoCensorJobIds')) {
      throw new TypeError('parameter "AIVideoCensorJobIds" is required');
    }

    return this.request('ListAIVideoCensorJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} AIVideoCoverJobIds - jobIds. required.
   */
  listAIVideoCoverJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AIVideoCoverJobIds')) {
      throw new TypeError('parameter "AIVideoCoverJobIds" is required');
    }

    return this.request('ListAIVideoCoverJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} AIVideoFaceRecogJobIds - jobIds. required.
   */
  listAIVideoFaceRecogJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AIVideoFaceRecogJobIds')) {
      throw new TypeError('parameter "AIVideoFaceRecogJobIds" is required');
    }

    return this.request('ListAIVideoFaceRecogJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} AIVideoPornRecogJobIds - jobIds. required.
   */
  listAIVideoPornRecogJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AIVideoPornRecogJobIds')) {
      throw new TypeError('parameter "AIVideoPornRecogJobIds" is required');
    }

    return this.request('ListAIVideoPornRecogJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} AIVideoSummaryJobIds - jobIds. required.
   */
  listAIVideoSummaryJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AIVideoSummaryJobIds')) {
      throw new TypeError('parameter "AIVideoSummaryJobIds" is required');
    }

    return this.request('ListAIVideoSummaryJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} AIVideoTagJobIds - jobIds. required.
   */
  listAIVideoTagJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AIVideoTagJobIds')) {
      throw new TypeError('parameter "AIVideoTagJobIds" is required');
    }

    return this.request('ListAIVideoTagJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} AIVideoTerrorismRecogJobIds - jobIds. required.
   */
  listAIVideoTerrorismRecogJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AIVideoTerrorismRecogJobIds')) {
      throw new TypeError('parameter "AIVideoTerrorismRecogJobIds" is required');
    }

    return this.request('ListAIVideoTerrorismRecogJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  listAllCategory(params = {}, options = {}) {
    return this.request('ListAllCategory', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  listAudioConfig(params = {}, options = {}) {
    return this.request('ListAudioConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  listAudioTemplate(params = {}, options = {}) {
    return this.request('ListAudioTemplate', params, options);
  }

  /**
   * @param {String} SecurityGroupName - securityGroupName. optional.
   */
  listAuditSecurityIp(params = {}, options = {}) {
    return this.request('ListAuditSecurityIp', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DomainName - domainName. required.
   */
  listCertificate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('ListCertificate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CompanionResourceType - companionResourceType. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} PageNo - pageNo. optional.
   * @param {String} PageSize - pageSize. optional.
   */
  listCompanionresourceInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanionResourceType')) {
      throw new TypeError('parameter "CompanionResourceType" is required');
    }

    return this.request('ListCompanionresourceInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} GroupId - groupId. required.
   */
  listCustomTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('ListCustomTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} RefererType - refererType. required.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listDomainReferer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'RefererType')) {
      throw new TypeError('parameter "RefererType" is required');
    }

    return this.request('ListDomainReferer', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} StreamName - streamName. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} AppName - appName. optional.
   * @param {String} QueryType - queryType. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} SortBy - sortBy. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  listLiveRecordVideo(params = {}, options = {}) {
    return this.request('ListLiveRecordVideo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VideoId - videoId. required.
   * @param {String} SnapshotType - snapshotType. optional.
   * @param {String} AuthTimeout - authTimeout. optional.
   * @param {String} PageSize - pageSize. optional.
   * @param {String} PageNo - pageNo. optional.
   */
  listSnapshots(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    return this.request('ListSnapshots', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {Boolean} IsContainsTemplates - containTemplates. optional.
   */
  listTemplateGroup(params = {}, options = {}) {
    return this.request('ListTemplateGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TemplateType - templateType. required.
   */
  listVodTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateType')) {
      throw new TypeError('parameter "TemplateType" is required');
    }

    return this.request('ListVodTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} WatermarkType - watermarkType. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} PageNo - pageNo. optional.
   * @param {String} PageSize - pageSize. optional.
   */
  listWatermarkInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WatermarkType')) {
      throw new TypeError('parameter "WatermarkType" is required');
    }

    return this.request('ListWatermarkInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} product - product. optional.
   * @param {String} version - version. optional.
   * @param {String} action - action. optional.
   * @param {String} regionId - regionId. optional.
   * @param {String} domain - domain. optional.
   * @param {String} data - data. optional.
   */
  modify(params = {}, options = {}) {
    return this.request('Modify', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   */
  notifyInitResource(params = {}, options = {}) {
    return this.request('NotifyInitResource', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} data - data. required.
   */
  notifyProduce(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('NotifyProduce', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceRealOwnerId - resourceRealOwnerId. optional.
   */
  openService(params = {}, options = {}) {
    return this.request('OpenService', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  openVodService(params = {}, options = {}) {
    return this.request('OpenVodService', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} product - product. optional.
   * @param {String} version - version. optional.
   * @param {String} action - action. optional.
   * @param {String} regionId - regionId. optional.
   * @param {String} domain - domain. optional.
   * @param {String} data - data. optional.
   */
  payOrderCallback(params = {}, options = {}) {
    return this.request('PayOrderCallback', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} ObjectPath - objectPath. required.
   */
  preloadVodObjectCaches(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ObjectPath')) {
      throw new TypeError('parameter "ObjectPath" is required');
    }

    return this.request('PreloadVodObjectCaches', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProjectId - projectId. required.
   */
  produceEditingProjectVideo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('ProduceEditingProjectVideo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} data - data. required.
   */
  queryOrderParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('QueryOrderParam', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} CustomerId - customerId. required.
   * @param {String} TranscodeGroupId - transcodeGroupId. required.
   * @param {String} StorageLocation - storageLocation. optional.
   */
  queryUploadInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CustomerId')) {
      throw new TypeError('parameter "CustomerId" is required');
    }

    if (!hasOwnProperty(params, 'TranscodeGroupId')) {
      throw new TypeError('parameter "TranscodeGroupId" is required');
    }

    return this.request('QueryUploadInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CustomerId - customerId. required.
   */
  refreshMaterialWorkFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CustomerId')) {
      throw new TypeError('parameter "CustomerId" is required');
    }

    return this.request('RefreshMaterialWorkFlow', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MaterialId - materialId. required.
   */
  refreshUploadMaterialToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MaterialId')) {
      throw new TypeError('parameter "MaterialId" is required');
    }

    return this.request('RefreshUploadMaterialToken', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VideoId - mediaId. required.
   */
  refreshUploadToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    return this.request('RefreshUploadToken', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} VideoId - mediaId. required.
   */
  refreshUploadVideo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    return this.request('RefreshUploadVideo', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} ObjectPath - objectPath. required.
   * @param {String} ObjectType - objectType. optional. default: File.
   */
  refreshVodObjectCaches(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ObjectPath')) {
      throw new TypeError('parameter "ObjectPath" is required');
    }

    return this.request('RefreshVodObjectCaches', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CustomerId - customerId. required.
   */
  refreshWorkFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CustomerId')) {
      throw new TypeError('parameter "CustomerId" is required');
    }

    return this.request('RefreshWorkFlow', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} MediaId - mediaId. required.
   * @param {String} FileName - fileName. optional.
   * @param {String} FileUrl - fileUrl. optional.
   * @param {String} Snapshot - snapshot. optional.
   */
  releaseFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('ReleaseFile', params, options);
  }

  /**
   * @param {String} Source - source. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} BusinessType - businessType. required.
   * @param {String} TerminalType - terminalType. required.
   * @param {String} DeviceModel - deviceModel. required.
   * @param {String} AppVersion - appVersion. required.
   * @param {Long} AuthTimestamp - authTimestamp. required.
   * @param {String} AuthInfo - authInfo. required.
   * @param {String} FileName - fileName. required.
   * @param {Long} FileSize - fileSize. required.
   * @param {String} FileCreateTime - fileCreateTime. required.
   * @param {String} FileHash - fileHash. required.
   * @param {Float} UploadRatio - uploadRatio. optional.
   * @param {String} UploadId - uploadId. required.
   * @param {Integer} DonePartsCount - donePartsCount. optional.
   * @param {Integer} TotalPart - totalPart. optional.
   * @param {Long} PartSize - partSize. required.
   * @param {String} UploadPoint - uploadPoint. required.
   * @param {Long} UserId - userId. optional.
   * @param {String} VideoId - videoId. optional.
   * @param {String} UploadAddress - uploadAddress. optional.
   */
  reportUploadProgress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BusinessType')) {
      throw new TypeError('parameter "BusinessType" is required');
    }

    if (!hasOwnProperty(params, 'TerminalType')) {
      throw new TypeError('parameter "TerminalType" is required');
    }

    if (!hasOwnProperty(params, 'DeviceModel')) {
      throw new TypeError('parameter "DeviceModel" is required');
    }

    if (!hasOwnProperty(params, 'AppVersion')) {
      throw new TypeError('parameter "AppVersion" is required');
    }

    if (!hasOwnProperty(params, 'AuthTimestamp')) {
      throw new TypeError('parameter "AuthTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'AuthInfo')) {
      throw new TypeError('parameter "AuthInfo" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    if (!hasOwnProperty(params, 'FileSize')) {
      throw new TypeError('parameter "FileSize" is required');
    }

    if (!hasOwnProperty(params, 'FileCreateTime')) {
      throw new TypeError('parameter "FileCreateTime" is required');
    }

    if (!hasOwnProperty(params, 'FileHash')) {
      throw new TypeError('parameter "FileHash" is required');
    }

    if (!hasOwnProperty(params, 'UploadId')) {
      throw new TypeError('parameter "UploadId" is required');
    }

    if (!hasOwnProperty(params, 'PartSize')) {
      throw new TypeError('parameter "PartSize" is required');
    }

    if (!hasOwnProperty(params, 'UploadPoint')) {
      throw new TypeError('parameter "UploadPoint" is required');
    }

    return this.request('ReportUploadProgress', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   * @param {Long} Level - level. optional.
   * @param {String} Url - url. optional.
   * @param {String} Prompt - prompt. optional.
   */
  sPICheckResourceAction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('SPICheckResourceAction', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   */
  sPILogicalDeleteResourceAction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('SPILogicalDeleteResourceAction', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   */
  sPIPhysicalDeleteResourceAction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('SPIPhysicalDeleteResourceAction', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} Status - state. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} SortBy - sortBy. optional.
   * @param {String} Title - title. optional.
   */
  searchEditingProject(params = {}, options = {}) {
    return this.request('SearchEditingProject', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Integer} CateId - cateId. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} Status - state. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} SortBy - sortBy. optional.
   * @param {String} Type - type. optional.
   * @param {String} Source - source. optional.
   * @param {String} Title - title. optional.
   */
  searchMaterial(params = {}, options = {}) {
    return this.request('SearchMaterial', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} SearchType - searchType. optional.
   * @param {String} Fields - fields. optional.
   * @param {String} Match - match. optional.
   * @param {String} SortBy - sortBy. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} ScrollToken - scrollToken. optional.
   * @param {String} ResultTypes - resultTypes. optional.
   * @param {String} SessionId - sessionId. optional.
   */
  searchMedia(params = {}, options = {}) {
    return this.request('SearchMedia', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} CateId - cateId. optional.
   * @param {String} Title - title. optional.
   * @param {String} KeyWord - keyWord. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} SortBy - sortBy. optional.
   * @param {String} Status - state. optional.
   */
  searchMediaInfo(params = {}, options = {}) {
    return this.request('SearchMediaInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} CateId - cateId. optional.
   * @param {String} Title - title. optional.
   * @param {String} KeyWord - keyWord. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} SortBy - sortBy. optional.
   * @param {String} Status - state. optional.
   * @param {String} MediaType - type. optional.
   * @param {String} ResultTypes - resultTypes. optional.
   * @param {String} PlayRand - playRand. optional.
   * @param {String} Source - source. optional.
   * @param {String} ApiVersion - version. optional.
   * @param {String} ScrollToken - lastItem. optional.
   * @param {String} PreprocessStatus - preprocessStatus. optional.
   * @param {String} StorageLocation - storageLocation. optional.
   * @param {String} VideoId - videoId. optional.
   */
  searchVideo(params = {}, options = {}) {
    return this.request('SearchVideo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Operation - operation. required.
   * @param {String} Types - types. required.
   */
  setAIService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Operation')) {
      throw new TypeError('parameter "Operation" is required');
    }

    if (!hasOwnProperty(params, 'Types')) {
      throw new TypeError('parameter "Types" is required');
    }

    return this.request('SetAIService', params, options);
  }

  /**
   * @param {String} SecurityGroupName - securityGroupName. optional.
   * @param {String} Ips - ips. required.
   * @param {String} OperateMode - operateMode. optional.
   */
  setAuditSecurityIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ips')) {
      throw new TypeError('parameter "Ips" is required');
    }

    return this.request('SetAuditSecurityIp', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ProductCode - productCode. required.
   * @param {String} APIProxyName - apiProxyName. required.
   * @param {String} APIProxyParam - apiProxyParam. required.
   */
  setCDNDomainServerCertificate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'APIProxyName')) {
      throw new TypeError('parameter "APIProxyName" is required');
    }

    if (!hasOwnProperty(params, 'APIProxyParam')) {
      throw new TypeError('parameter "APIProxyParam" is required');
    }

    return this.request('SetCDNDomainServerCertificate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ProductCode - productCode. required.
   * @param {String} APIProxyName - apiProxyName. required.
   * @param {String} APIProxyParam - apiProxyParam. required.
   */
  setCDNForceRedirectConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'APIProxyName')) {
      throw new TypeError('parameter "APIProxyName" is required');
    }

    if (!hasOwnProperty(params, 'APIProxyParam')) {
      throw new TypeError('parameter "APIProxyParam" is required');
    }

    return this.request('SetCDNForceRedirectConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} ReferType - referType. required.
   * @param {String} ReferList - referList. optional.
   * @param {String} AllowEmpty - allowEmpty. optional.
   */
  setCDNReferer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'ReferType')) {
      throw new TypeError('parameter "ReferType" is required');
    }

    return this.request('SetCDNReferer', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Channel - channel. required.
   * @param {String} LegalSwitch - legalSwitch. optional.
   */
  setCheckChannel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Channel')) {
      throw new TypeError('parameter "Channel" is required');
    }

    return this.request('SetCheckChannel', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DownloadSwitch - downloadSwitch. optional.
   * @param {String} MetricConfig - metricConfig. optional.
   * @param {String} AIConfig - aIConfig. optional.
   */
  setCustomerConfig(params = {}, options = {}) {
    return this.request('SetCustomerConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TemplateId - templateId. required.
   */
  setDefaultAITemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('SetDefaultAITemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} DomainName - domainName. required.
   */
  setDefaultPlayDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('SetDefaultPlayDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} GroupId - groupId. required.
   */
  setDefaultTemplateGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('SetDefaultTemplateGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} StorageLocation - storageLocation. required.
   */
  setDefaultUploadStorage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StorageLocation')) {
      throw new TypeError('parameter "StorageLocation" is required');
    }

    return this.request('SetDefaultUploadStorage', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VodTemplateId - vodTemplateId. required.
   */
  setDefaultVodTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VodTemplateId')) {
      throw new TypeError('parameter "VodTemplateId" is required');
    }

    return this.request('SetDefaultVodTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} WatermarkId - watertempId. required.
   */
  setDefaultWatermark(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WatermarkId')) {
      throw new TypeError('parameter "WatermarkId" is required');
    }

    return this.request('SetDefaultWatermark', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} Key1 - key1. required.
   * @param {String} Key2 - key2. optional.
   * @param {String} Timeout - timeout. optional.
   */
  setDomainAuth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Key1')) {
      throw new TypeError('parameter "Key1" is required');
    }

    return this.request('SetDomainAuth', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} RefererSwitch - refererSwitch. optional.
   * @param {String} AuthSwitch - authSwitch. optional.
   */
  setDomainSecurity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('SetDomainSecurity', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} MaterialIds - materialIds. required.
   */
  setEditingProjectMaterials(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'MaterialIds')) {
      throw new TypeError('parameter "MaterialIds" is required');
    }

    return this.request('SetEditingProjectMaterials', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} PrivateOssAuth - privateOssAuth. required.
   */
  setL2OssKeyConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'PrivateOssAuth')) {
      throw new TypeError('parameter "PrivateOssAuth" is required');
    }

    return this.request('SetL2OssKeyConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} CallbackSwitch - callbackSwitch. optional.
   * @param {String} CallbackType - callbackType. optional.
   * @param {String} CallbackURL - callbackURL. required.
   * @param {String} EventTypeList - eventTypeList. optional.
   * @param {String} AuthSwitch - authSwitch. optional.
   * @param {String} AuthKey - authKey. optional.
   * @param {String} MnsEndpoint - mnsEndpoint. optional.
   * @param {String} MnsQueueName - mnsQueueName. optional.
   * @param {String} AppId - appId. optional.
   */
  setMessageCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CallbackURL')) {
      throw new TypeError('parameter "CallbackURL" is required');
    }

    return this.request('SetMessageCallback', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} StorageLocation - storageLocation. required.
   * @param {String} StorageACL - storageACL. required.
   */
  setStorageACL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StorageLocation')) {
      throw new TypeError('parameter "StorageLocation" is required');
    }

    if (!hasOwnProperty(params, 'StorageACL')) {
      throw new TypeError('parameter "StorageACL" is required');
    }

    return this.request('SetStorageACL', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} PropertyName - propertyName. required.
   * @param {String} PropertyValue - propertyValue. required.
   */
  setTemplateGroupProperty(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'PropertyName')) {
      throw new TypeError('parameter "PropertyName" is required');
    }

    if (!hasOwnProperty(params, 'PropertyValue')) {
      throw new TypeError('parameter "PropertyValue" is required');
    }

    return this.request('SetTemplateGroupProperty', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} CertName - certName. optional.
   * @param {String} SSLProtocol - sslProtocol. required.
   * @param {String} SSLPub - sslPub. optional.
   * @param {String} SSLPri - sslPri. optional.
   * @param {String} Region - region. optional.
   */
  setVodDomainCertificate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'SSLProtocol')) {
      throw new TypeError('parameter "SSLProtocol" is required');
    }

    return this.request('SetVodDomainCertificate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DomainName - domainName. required.
   */
  startDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('StartDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   */
  startVodDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('StartVodDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DomainName - domainName. required.
   */
  stopDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('StopDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   */
  stopVodDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('StopVodDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} MediaId - mediaId. required.
   * @param {String} AIASRConfig - config. optional.
   * @param {String} UserData - userData. optional.
   */
  submitAIASRJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('SubmitAIASRJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} MediaId - mediaId. required.
   * @param {String} Types - types. optional.
   * @param {String} Config - config. optional.
   * @param {String} UserData - userData. optional.
   * @param {String} MediaType - mediaType. optional.
   */
  submitAIJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('SubmitAIJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaId - mediaId. required.
   * @param {String} TemplateId - templateId. optional.
   */
  submitAIMediaAuditJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('SubmitAIMediaAuditJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} MediaId - mediaId. required.
   * @param {String} AIVideoCategoryConfig - config. optional.
   * @param {String} UserData - userData. optional.
   */
  submitAIVideoCategoryJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('SubmitAIVideoCategoryJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} MediaId - mediaId. required.
   * @param {String} AIVideoCensorConfig - config. optional.
   * @param {String} UserData - userData. optional.
   */
  submitAIVideoCensorJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('SubmitAIVideoCensorJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} MediaId - mediaId. required.
   * @param {String} AIVideoCoverConfig - config. optional.
   * @param {String} UserData - userData. optional.
   */
  submitAIVideoCoverJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('SubmitAIVideoCoverJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} MediaId - mediaId. required.
   * @param {String} AIVideoFaceRecogConfig - config. optional.
   * @param {String} UserData - userData. optional.
   */
  submitAIVideoFaceRecogJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('SubmitAIVideoFaceRecogJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} MediaId - mediaId. required.
   * @param {String} AIVideoPornRecogConfig - config. optional.
   * @param {String} UserData - userData. optional.
   */
  submitAIVideoPornRecogJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('SubmitAIVideoPornRecogJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} MediaId - mediaId. required.
   * @param {String} AIVideoSummaryConfig - config. optional.
   * @param {String} UserData - userData. optional.
   */
  submitAIVideoSummaryJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('SubmitAIVideoSummaryJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} MediaId - mediaId. required.
   * @param {String} AIVideoTagConfig - config. optional.
   * @param {String} UserData - userData. optional.
   */
  submitAIVideoTagJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('SubmitAIVideoTagJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} MediaId - mediaId. required.
   * @param {String} AIVideoTerrorismRecogConfig - config. optional.
   * @param {String} UserData - userData. optional.
   */
  submitAIVideoTerrorismRecogJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('SubmitAIVideoTerrorismRecogJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Type - type. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Long} RecentNumber - recentNumber. optional.
   */
  submitDNAInitializationJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('SubmitDNAInitializationJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VideoId - videoId. required.
   * @param {String} PreprocessType - preprocessType. required.
   */
  submitPreprocessJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    if (!hasOwnProperty(params, 'PreprocessType')) {
      throw new TypeError('parameter "PreprocessType" is required');
    }

    return this.request('SubmitPreprocessJobs', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VideoId - mediaId. required.
   * @param {Long} SpecifiedOffsetTime - time. optional.
   * @param {String} Width - width. optional.
   * @param {String} Height - height. optional.
   * @param {Long} Count - num. optional.
   * @param {Long} Interval - interval. optional.
   * @param {String} SpriteSnapshotConfig - spriteConfig. optional.
   * @param {String} SnapshotTemplateId - snapshotTemplateId. optional.
   */
  submitSnapshotJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    return this.request('SubmitSnapshotJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VideoId - mediaId. required.
   * @param {String} TemplateGroupId - groupId. required.
   * @param {String} PipelineId - pipelineId. optional.
   * @param {String} EncryptConfig - encryptConfig. optional.
   * @param {String} OverrideParams - overrideParams. optional.
   */
  submitTranscodeJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    if (!hasOwnProperty(params, 'TemplateGroupId')) {
      throw new TypeError('parameter "TemplateGroupId" is required');
    }

    return this.request('SubmitTranscodeJobs', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Status - isOpen. required.
   */
  switchWatermark(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('SwitchWatermark', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VideoIds - videoIds. required.
   */
  syncMaterial(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoIds')) {
      throw new TypeError('parameter "VideoIds" is required');
    }

    return this.request('SyncMaterial', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} VideoId - videoId. optional.
   * @param {String} VideoInfo - videoInfo. optional.
   * @param {String} MezzanineInfo - mezzanineInfo. optional.
   * @param {String} StreamInfos - streamInfos. optional.
   */
  transferMediaData(params = {}, options = {}) {
    return this.request('TransferMediaData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TemplateId - templateId. required.
   * @param {String} TemplateName - templateName. required.
   * @param {String} TemplateConfig - templateConfig. required.
   */
  updateAITemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    if (!hasOwnProperty(params, 'TemplateName')) {
      throw new TypeError('parameter "TemplateName" is required');
    }

    if (!hasOwnProperty(params, 'TemplateConfig')) {
      throw new TypeError('parameter "TemplateConfig" is required');
    }

    return this.request('UpdateAITemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {Integer} State - state. optional.
   * @param {String} ExpireTime - expireTime. optional.
   * @param {String} SignVersion - signVersion. required.
   * @param {String} Channel - channel. required.
   * @param {String} Description - description. optional.
   * @param {String} ClientVersion - clientVersion. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   */
  updateApiAuth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SignVersion')) {
      throw new TypeError('parameter "SignVersion" is required');
    }

    if (!hasOwnProperty(params, 'Channel')) {
      throw new TypeError('parameter "Channel" is required');
    }

    return this.request('UpdateApiAuth', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {Long} LicenseId - licenseId. required.
   * @param {String} ContractNo - contractNo. optional.
   * @param {String} AppName - appName. optional.
   * @param {String} BundleId - bundleId. optional.
   * @param {String} PackageName - packageName. optional.
   * @param {String} LicenseSignature - signature. optional.
   * @param {String} Type - type. optional.
   * @param {String} Feature - feature. optional.
   * @param {String} Status - status. optional.
   * @param {String} ExpiredOn - expiredOn. optional.
   * @param {String} SdkIds - sdkIds. optional.
   * @param {Long} CustomerId - customerId. optional.
   * @param {Long} AccountId - accountId. optional.
   */
  updateAppLicense(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LicenseId')) {
      throw new TypeError('parameter "LicenseId" is required');
    }

    return this.request('UpdateAppLicense', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TemplateIds - templateIds. required.
   * @param {String} Status - status. required.
   */
  updateAudioConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateIds')) {
      throw new TypeError('parameter "TemplateIds" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('UpdateAudioConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Codec - codec. required.
   * @param {String} Bitrate - bitrate. required.
   * @param {String} Channel - channel. optional.
   * @param {String} Remove - remove. optional.
   * @param {String} Name - name. required.
   * @param {String} Muxer - muxer. required.
   * @param {String} Status - status. required.
   * @param {String} Type - type. required.
   * @param {String} IsDefault - isDefault. required.
   * @param {String} TemplateId - templateId. required.
   */
  updateAudioTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Codec')) {
      throw new TypeError('parameter "Codec" is required');
    }

    if (!hasOwnProperty(params, 'Bitrate')) {
      throw new TypeError('parameter "Bitrate" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Muxer')) {
      throw new TypeError('parameter "Muxer" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'IsDefault')) {
      throw new TypeError('parameter "IsDefault" is required');
    }

    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('UpdateAudioTemplate', params, options);
  }

  /**
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} CateName - cateName. required.
   * @param {Long} CateId - cateId. required.
   */
  updateCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CateName')) {
      throw new TypeError('parameter "CateName" is required');
    }

    if (!hasOwnProperty(params, 'CateId')) {
      throw new TypeError('parameter "CateId" is required');
    }

    return this.request('UpdateCategory', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} CateName - cateName. required.
   * @param {String} CateId - cateId. required.
   */
  updateCategoryName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CateName')) {
      throw new TypeError('parameter "CateName" is required');
    }

    if (!hasOwnProperty(params, 'CateId')) {
      throw new TypeError('parameter "CateId" is required');
    }

    return this.request('UpdateCategoryName', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} Video - video. required.
   * @param {String} Audio - audio. required.
   * @param {String} TransConfig - transConfig. optional.
   * @param {String} MuxConfig - muxConfig. optional.
   * @param {String} Container - container. required.
   * @param {String} Definition - definition. required.
   * @param {String} UseWaterMark - useWaterMark. optional.
   * @param {String} Encrypt - encrypt. optional.
   * @param {String} Condition - templateCondition. optional.
   * @param {String} TemplateId - templateId. required.
   * @param {String} NarrowBand - narrowBand. optional.
   */
  updateCustomTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Video')) {
      throw new TypeError('parameter "Video" is required');
    }

    if (!hasOwnProperty(params, 'Audio')) {
      throw new TypeError('parameter "Audio" is required');
    }

    if (!hasOwnProperty(params, 'Container')) {
      throw new TypeError('parameter "Container" is required');
    }

    if (!hasOwnProperty(params, 'Definition')) {
      throw new TypeError('parameter "Definition" is required');
    }

    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('UpdateCustomTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} Configs - configs. optional.
   */
  updateCustomTemplateAndGroup(params = {}, options = {}) {
    return this.request('UpdateCustomTemplateAndGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Title - title. optional.
   * @param {String} Timeline - timeline. optional.
   * @param {String} Description - description. optional.
   * @param {String} CoverUrl - coverUrl. optional.
   * @param {Float} Duration - duration. optional.
   */
  updateEditingProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('UpdateEditingProject', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ProjectIds - editingProjectIds. required.
   * @param {String} Status - state. required.
   */
  updateEditingProjectStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectIds')) {
      throw new TypeError('parameter "ProjectIds" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('UpdateEditingProjectStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} UpdateContent - updateContent. required.
   */
  updateImageInfos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UpdateContent')) {
      throw new TypeError('parameter "UpdateContent" is required');
    }

    return this.request('UpdateImageInfos', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} MaterialId - materialId. required.
   * @param {String} Title - title. optional.
   * @param {String} Description - description. optional.
   * @param {String} Tags - tags. optional.
   * @param {String} CoverUrl - coverUrl. optional.
   * @param {Integer} CateId - cateId. optional.
   */
  updateMaterial(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MaterialId')) {
      throw new TypeError('parameter "MaterialId" is required');
    }

    return this.request('UpdateMaterial', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} MaterialIds - materialIds. required.
   * @param {String} Status - state. required.
   */
  updateMaterialStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MaterialIds')) {
      throw new TypeError('parameter "MaterialIds" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('UpdateMaterialStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} MediaId - mediaId. required.
   * @param {String} CateId - cateId. required.
   */
  updateMediaCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    if (!hasOwnProperty(params, 'CateId')) {
      throw new TypeError('parameter "CateId" is required');
    }

    return this.request('UpdateMediaCategory', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} FileUrl - fileUrl. optional.
   * @param {String} VideoId - mediaId. required.
   * @param {String} Title - title. optional.
   * @param {String} Tags - tags. optional.
   * @param {Integer} Privilege - publicType. optional.
   * @param {String} Password - password. optional.
   * @param {String} Description - description. optional.
   * @param {String} CoverURL - coverUrl. optional.
   * @param {Integer} CateId - cateId. optional.
   * @param {Long} Duration - duration. optional.
   * @param {String} MediaWorkflowId - mediaWorkflowId. optional.
   * @param {String} MediaWorkflowUserData - mediaWorkflowUserData. optional.
   * @param {String} MediaWorkflowRunId - mediaWorkflowRunId. optional.
   */
  updateMediaInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    return this.request('UpdateMediaInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VideoId - mediaId. required.
   * @param {String} status - state. required.
   */
  updateMediaInfoStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    if (!hasOwnProperty(params, 'status')) {
      throw new TypeError('parameter "status" is required');
    }

    return this.request('UpdateMediaInfoStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Time - time. required.
   * @param {String} Height - height. optional.
   * @param {String} Width - width. optional.
   * @param {String} Number - num. required.
   * @param {String} Interval - interval. optional.
   * @param {String} SnapshotId - snapshotId. required.
   */
  updateSnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    if (!hasOwnProperty(params, 'Number')) {
      throw new TypeError('parameter "Number" is required');
    }

    if (!hasOwnProperty(params, 'SnapshotId')) {
      throw new TypeError('parameter "SnapshotId" is required');
    }

    return this.request('UpdateSnapshot', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TranscodeIds - transcodeIds. required.
   * @param {String} EncryptTemplateIds - encryptIds. optional.
   * @param {String} CustomerId - customerId. required.
   */
  updateSpecifyCustomerTemplateConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TranscodeIds')) {
      throw new TypeError('parameter "TranscodeIds" is required');
    }

    if (!hasOwnProperty(params, 'CustomerId')) {
      throw new TypeError('parameter "CustomerId" is required');
    }

    return this.request('UpdateSpecifyCustomerTemplateConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Name - name. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} ToNeedTranscode - toNeedTranscode. optional.
   */
  updateTemplateGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('UpdateTemplateGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TemplateGroupId - groupId. required.
   * @param {Long} UserId - userId. required.
   * @param {String} IsLocked - locked. optional.
   * @param {String} GroupName - name. optional.
   */
  updateTemplateGroupDaemon(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateGroupId')) {
      throw new TypeError('parameter "TemplateGroupId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('UpdateTemplateGroupDaemon', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ids - ids. required.
   * @param {String} EncryptTemplayeIds - encryptIds. optional.
   */
  updateTranscodeConf(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ids')) {
      throw new TypeError('parameter "ids" is required');
    }

    return this.request('UpdateTranscodeConf', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Muxer - muxer. optional.
   * @param {String} Resolution - resolution. optional.
   * @param {String} Detail - detail. optional.
   * @param {String} Name - name. optional.
   * @param {String} VideoBitrate - videoBitrate. optional.
   * @param {String} VideoCodec - videoCodec. optional.
   * @param {String} AudioBitrate - audioBitrate. optional.
   * @param {String} AudioCodec - audioCodec. optional.
   */
  updateTranscodeTemplate(params = {}, options = {}) {
    return this.request('UpdateTranscodeTemplate', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} VideoId - mediaId. required.
   * @param {String} Title - title. optional.
   * @param {String} Tags - tags. optional.
   * @param {String} Description - description. optional.
   * @param {String} CoverURL - coverUrl. optional.
   * @param {Long} CateId - cateId. optional.
   * @param {String} DownloadSwitch - downloadSwitch. optional.
   * @param {Long} FileSize - fileSize. optional.
   * @param {String} Duration - duration. optional.
   * @param {String} Status - status. optional.
   * @param {String} MediaType - type. optional.
   * @param {String} Source - source. optional.
   */
  updateVideoInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    return this.request('UpdateVideoInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} UpdateContent - updateContent. required.
   */
  updateVideoInfos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UpdateContent')) {
      throw new TypeError('parameter "UpdateContent" is required');
    }

    return this.request('UpdateVideoInfos', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VideoId - mediaId. required.
   * @param {String} status - state. required.
   */
  updateVideoStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    if (!hasOwnProperty(params, 'status')) {
      throw new TypeError('parameter "status" is required');
    }

    return this.request('UpdateVideoStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} Sources - sources. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} TopLevelDomain - topLevelDomain. optional.
   */
  updateVodDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('UpdateVodDomain', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VodTemplateId - vodTemplateId. required.
   * @param {String} Name - name. optional.
   * @param {String} TemplateConfig - templateConfig. optional.
   */
  updateVodTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VodTemplateId')) {
      throw new TypeError('parameter "VodTemplateId" is required');
    }

    return this.request('UpdateVodTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} HorizontalOffet - horizontalOffet. optional.
   * @param {String} HorizontalOffset - horizontalOffset. optional.
   * @param {String} VerticalOffset - verticalOffset. optional.
   * @param {String} Position - position. optional.
   * @param {String} Type - type. optional.
   * @param {String} Bucket - bucket. optional.
   * @param {String} Object - object. optional.
   * @param {String} Name - name. optional.
   * @param {String} Width - width. optional.
   * @param {String} Height - height. optional.
   * @param {String} WatermarkId - watertempId. optional.
   * @param {String} ScreenMode - screenMode. optional.
   * @param {Integer} VideoWidth - videoWidth. optional.
   * @param {Integer} VideoHeight - videoHeight. optional.
   * @param {String} WatermarkConfig - watermarkConfig. optional.
   * @param {String} FileUrl - fileUrl. optional.
   * @param {Integer} ScreenWidth - screenWidth. optional.
   * @param {Integer} ScreenHeight - screenHeight. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   */
  updateWatermark(params = {}, options = {}) {
    return this.request('UpdateWatermark', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} WatermarkGroupId - watermarkGroupId. required.
   * @param {String} WatermarkGroupName - watermarkGroupName. optional.
   * @param {Boolean} IsDefault - isDefault. optional.
   */
  updateWatermarkGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WatermarkGroupId')) {
      throw new TypeError('parameter "WatermarkGroupId" is required');
    }

    return this.request('UpdateWatermarkGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} WatermarkType - watermarkType. required.
   * @param {String} WatermarkConfig - watermarkConfig. required.
   * @param {String} WatermarkId - watermarkId. required.
   * @param {String} MediaFileId - watermarkFileId. optional.
   * @param {String} WatermarkName - watermarkName. optional.
   */
  updateWatermarkInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WatermarkType')) {
      throw new TypeError('parameter "WatermarkType" is required');
    }

    if (!hasOwnProperty(params, 'WatermarkConfig')) {
      throw new TypeError('parameter "WatermarkConfig" is required');
    }

    if (!hasOwnProperty(params, 'WatermarkId')) {
      throw new TypeError('parameter "WatermarkId" is required');
    }

    return this.request('UpdateWatermarkInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} UploadURLs - uploadURLs. required.
   * @param {String} TemplateGroupId - templateGroupId. optional.
   * @param {String} StorageLocation - storageLocation. optional.
   * @param {String} UploadMetadatas - uploadMetadatas. optional.
   * @param {String} Priority - priority. optional.
   * @param {String} MessageCallback - messageCallback. optional.
   */
  uploadMediaByURL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UploadURLs')) {
      throw new TypeError('parameter "UploadURLs" is required');
    }

    return this.request('UploadMediaByURL', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  userExist(params = {}, options = {}) {
    return this.request('UserExist', params, options);
  }

}

module.exports = Client;


'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-03-21';
    super(config);
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
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} Configs - configs. optional.
   */
  addCustomTemplateAndGroupConsole(params = {}, options = {}) {
    return this.request('AddCustomTemplateAndGroupConsole', params, options);
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
   * @param {String} CoverURL - coverUrl. optional.
   */
  addEditingProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Title')) {
      throw new TypeError('parameter "Title" is required');
    }

    return this.request('AddEditingProject', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} MaterialIds - materialIds. required.
   * @param {String} MaterialType - materialType. required.
   */
  addEditingProjectMaterials(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'MaterialIds')) {
      throw new TypeError('parameter "MaterialIds" is required');
    }

    if (!hasOwnProperty(params, 'MaterialType')) {
      throw new TypeError('parameter "MaterialType" is required');
    }

    return this.request('AddEditingProjectMaterials', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} MediaId - mediaId. optional.
   * @param {String} MediaURL - mediaURL. optional.
   * @param {String} MediaType - mediaType. optional.
   * @param {String} MediaSequences - mediaSequences. optional.
   */
  addMediaSequences(params = {}, options = {}) {
    return this.request('AddMediaSequences', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} StorageType - storageType. optional.
   * @param {String} StorageRegion - storageRegion. optional.
   * @param {String} StorageLocation - storageLocation. optional.
   * @param {String} ResourceRealOwnerId - resourceRealOwnerId. optional.
   */
  addStorage(params = {}, options = {}) {
    return this.request('AddStorage', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Name - name. optional.
   * @param {String} TranscodeTemplateList - transcodeTemplateList. optional.
   * @param {String} TranscodeTemplateGroupId - transcodeTemplateGroupId. optional.
   */
  addTranscodeTemplateGroup(params = {}, options = {}) {
    return this.request('AddTranscodeTemplateGroup', params, options);
  }

  /**
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
   * @param {String} Type - type. required.
   * @param {String} Name - name. required.
   * @param {String} WatermarkConfig - watermarkConfig. required.
   * @param {String} FileUrl - fileUrl. optional.
   */
  addWatermark(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'WatermarkConfig')) {
      throw new TypeError('parameter "WatermarkConfig" is required');
    }

    return this.request('AddWatermark', params, options);
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
   * @param {String} FileName - fileName. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   */
  addWatermarkConsole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('AddWatermarkConsole', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Name - name. required.
   * @param {String} ActionList - actionList. required.
   */
  addWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ActionList')) {
      throw new TypeError('parameter "ActionList" is required');
    }

    return this.request('AddWorkflow', params, options);
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} IdentityType - identityType. required.
   * @param {String} IdentityName - identityName. required.
   * @param {String} AppId - appId. optional.
   * @param {String} PolicyNames - policyNames. required.
   */
  attachAppPolicyToIdentity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IdentityType')) {
      throw new TypeError('parameter "IdentityType" is required');
    }

    if (!hasOwnProperty(params, 'IdentityName')) {
      throw new TypeError('parameter "IdentityName" is required');
    }

    if (!hasOwnProperty(params, 'PolicyNames')) {
      throw new TypeError('parameter "PolicyNames" is required');
    }

    return this.request('AttachAppPolicyToIdentity', params, options);
  }

  /**
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} Command - command. optional.
   */
  controlVodAppService(params = {}, options = {}) {
    return this.request('ControlVodAppService', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} AppName - AppName. optional.
   * @param {String} Description - Description. optional.
   * @param {String} Products - Products. optional.
   */
  createAppInfo(params = {}, options = {}) {
    return this.request('CreateAppInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PolicyName - policyName. required.
   * @param {String} PolicyValue - policyValue. required.
   * @param {String} Description - description. optional.
   */
  createAppPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PolicyName')) {
      throw new TypeError('parameter "PolicyName" is required');
    }

    if (!hasOwnProperty(params, 'PolicyValue')) {
      throw new TypeError('parameter "PolicyValue" is required');
    }

    return this.request('CreateAppPolicy', params, options);
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaMetaDatas - mediaMetaDatas. required.
   * @param {String} TemplateGroupId - templateGroupId. optional.
   * @param {String} UserData - userData. optional.
   */
  createMedia(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaMetaDatas')) {
      throw new TypeError('parameter "MediaMetaDatas" is required');
    }

    return this.request('CreateMedia', params, options);
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
   * @param {String} MediaExt - mediaExt. optional.
   * @param {String} FileName - originalFileName. optional.
   * @param {String} FileSize - fileSize. optional.
   * @param {String} Tags - tags. optional.
   * @param {Long} CateId - cateId. optional.
   * @param {String} StorageLocation - storageLocation. optional.
   * @param {String} Description - description. optional.
   * @param {String} UserData - userData. optional.
   * @param {String} CateIds - CateIds. optional.
   */
  createUploadAttachedMedia(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BusinessType')) {
      throw new TypeError('parameter "BusinessType" is required');
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
   * @param {String} AppId - appId. optional.
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CoverURL - coverUrl. optional.
   * @param {String} Description - description. optional.
   * @param {String} FileName - fileName. required.
   * @param {Long} FileSize - fileSize. optional.
   * @param {String} IP - createIp. optional.
   * @param {String} Title - title. required.
   * @param {Long} CateId - cateId. optional.
   * @param {String} Tags - tags. optional.
   * @param {String} TranscodeMode - transcodeMode. optional.
   * @param {String} UserData - userData. optional.
   * @param {String} TemplateGroupId - templateGroupId. optional.
   * @param {String} WorkflowId - workflowId. optional.
   * @param {String} StorageLocation - storageLocation. optional.
   * @param {String} CustomMediaInfo - customMediaInfo. optional.
   * @param {String} AppId - appId. optional.
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
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} AppId - appId. optional.
   */
  deleteAppInfo(params = {}, options = {}) {
    return this.request('DeleteAppInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PolicyNames - policyNames. required.
   */
  deleteAppPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PolicyNames')) {
      throw new TypeError('parameter "PolicyNames" is required');
    }

    return this.request('DeleteAppPolicy', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaIds - mediaIds. optional.
   */
  deleteAttachedMedia(params = {}, options = {}) {
    return this.request('DeleteAttachedMedia', params, options);
  }

  /**
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
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
   * @param {String} GroupId - groupId. optional.
   * @param {String} TemplateIds - templateIds. required.
   */
  deleteCustomTemplateConsole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateIds')) {
      throw new TypeError('parameter "TemplateIds" is required');
    }

    return this.request('DeleteCustomTemplateConsole', params, options);
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
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} MaterialIds - materialIds. required.
   * @param {String} MaterialType - materialType. required.
   */
  deleteEditingProjectMaterials(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'MaterialIds')) {
      throw new TypeError('parameter "MaterialIds" is required');
    }

    if (!hasOwnProperty(params, 'MaterialType')) {
      throw new TypeError('parameter "MaterialType" is required');
    }

    return this.request('DeleteEditingProjectMaterials', params, options);
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
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} MaterialIds - materialIdStr. required.
   */
  deleteMaterial(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MaterialIds')) {
      throw new TypeError('parameter "MaterialIds" is required');
    }

    return this.request('DeleteMaterial', params, options);
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
  deleteTemplateGroupConsole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DeleteTemplateGroupConsole', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TranscodeTemplateGroupId - transcodeTemplateGroupId. required.
   * @param {String} TranscodeTemplateIds - transcodeTemplateIdList. optional.
   * @param {String} ForceDelGroup - forceDelGroup. optional.
   */
  deleteTranscodeTemplateGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TranscodeTemplateGroupId')) {
      throw new TypeError('parameter "TranscodeTemplateGroupId" is required');
    }

    return this.request('DeleteTranscodeTemplateGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TranscodeTemplateGroupId - transcodeTemplateGroupId. required.
   * @param {String} TranscodeTemplateIdList - transcodeTemplateIdList. required.
   */
  deleteTranscodeTemplates(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TranscodeTemplateGroupId')) {
      throw new TypeError('parameter "TranscodeTemplateGroupId" is required');
    }

    if (!hasOwnProperty(params, 'TranscodeTemplateIdList')) {
      throw new TypeError('parameter "TranscodeTemplateIdList" is required');
    }

    return this.request('DeleteTranscodeTemplates', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VideoIds - mediaIdStr. required.
   */
  deleteVideo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoIds')) {
      throw new TypeError('parameter "VideoIds" is required');
    }

    return this.request('DeleteVideo', params, options);
  }

  /**
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} WatermarkId - watertempId. required.
   */
  deleteWatermarkConsole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WatermarkId')) {
      throw new TypeError('parameter "WatermarkId" is required');
    }

    return this.request('DeleteWatermarkConsole', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} WorkflowId - workflowId. required.
   */
  deleteWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WorkflowId')) {
      throw new TypeError('parameter "WorkflowId" is required');
    }

    return this.request('DeleteWorkflow', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceRealOwnerId - resourceRealOwnerId. optional.
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
   * @param {String} ResourceRealOwnerId - resourceRealOwnerId. optional.
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
   * @param {String} ResourceRealOwnerId - resourceRealOwnerId. optional.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeRefreshQuota(params = {}, options = {}) {
    return this.request('DescribeRefreshQuota', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} TaskId - taskId. optional.
   * @param {String} ObjectPath - objectPath. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} ObjectType - objectType. optional.
   * @param {String} Status - status. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   */
  describeRefreshTasks(params = {}, options = {}) {
    return this.request('DescribeRefreshTasks', params, options);
  }

  /**
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   */
  describeUserVodStatus(params = {}, options = {}) {
    return this.request('DescribeUserVodStatus', params, options);
  }

  /**
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
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeVodDomainRealTimeSrcTrafficData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   */
  describeVodRefreshQuota(params = {}, options = {}) {
    return this.request('DescribeVodRefreshQuota', params, options);
  }

  /**
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   */
  describeVodUserQuota(params = {}, options = {}) {
    return this.request('DescribeVodUserQuota', params, options);
  }

  /**
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
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} IdentityType - identityType. required.
   * @param {String} IdentityName - identityName. required.
   * @param {String} AppId - appId. optional.
   * @param {String} PolicyNames - policyNames. required.
   */
  detachAppPolicyFromIdentity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IdentityType')) {
      throw new TypeError('parameter "IdentityType" is required');
    }

    if (!hasOwnProperty(params, 'IdentityName')) {
      throw new TypeError('parameter "IdentityName" is required');
    }

    if (!hasOwnProperty(params, 'PolicyNames')) {
      throw new TypeError('parameter "PolicyNames" is required');
    }

    return this.request('DetachAppPolicyFromIdentity', params, options);
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} AppIds - appIds. optional.
   */
  getAppInfos(params = {}, options = {}) {
    return this.request('GetAppInfos', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PolicyNames - policyNames. required.
   */
  getAppPolicies(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PolicyNames')) {
      throw new TypeError('parameter "PolicyNames" is required');
    }

    return this.request('GetAppPolicies', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaIds - mediaIds. required.
   * @param {Long} AuthTimeout - authTimeout. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} OutputType - outputType. optional.
   */
  getAttachedMediaInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaIds')) {
      throw new TypeError('parameter "MediaIds" is required');
    }

    return this.request('GetAttachedMediaInfo', params, options);
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
   * @param {String} VideoId - videoId. optional.
   * @param {String} MediaId - mediaId. optional.
   * @param {String} MediaType - mediaType. optional.
   */
  getAuditResult(params = {}, options = {}) {
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
   * @param {String} StartStatisTime - startStatisTime. required.
   * @param {String} EndStatisTime - endStatisTime. required.
   * @param {String} Level - level. optional.
   */
  getCDNStatisSum(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartStatisTime')) {
      throw new TypeError('parameter "StartStatisTime" is required');
    }

    if (!hasOwnProperty(params, 'EndStatisTime')) {
      throw new TypeError('parameter "EndStatisTime" is required');
    }

    return this.request('GetCDNStatisSum', params, options);
  }

  /**
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
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
   */
  getCustomerConfig(params = {}, options = {}) {
    return this.request('GetCustomerConfig', params, options);
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
   * @param {String} ProjectId - projectId. required.
   * @param {String} Type - type. optional.
   * @param {String} MaterialType - materialType. optional.
   */
  getEditingProjectMaterials(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
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
   * @param {String} OutputType - outputType. optional.
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
   * @param {String} VideoId - videoId. required.
   * @param {Long} AuthTimeout - authTimeout. optional.
   * @param {Boolean} PreviewSegment - previewSegment. optional.
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
   * @param {String} Level - level. optional.
   * @param {String} StartTimeUTC - startTimeUTC. optional.
   * @param {String} EndTimeUTC - endTimeUTC. optional.
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
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
  getTemplateGroupConsole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('GetTemplateGroupConsole', params, options);
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
   * @param {String} VideoIds - videoIds. required.
   */
  getTranscodeSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoIds')) {
      throw new TypeError('parameter "VideoIds" is required');
    }

    return this.request('GetTranscodeSummary', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TranscodeTaskId - transcodeProcessId. required.
   */
  getTranscodeTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TranscodeTaskId')) {
      throw new TypeError('parameter "TranscodeTaskId" is required');
    }

    return this.request('GetTranscodeTask', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TranscodeTemplateGroupId - transcodeTemplateGroupId. required.
   */
  getTranscodeTemplateGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TranscodeTemplateGroupId')) {
      throw new TypeError('parameter "TranscodeTemplateGroupId" is required');
    }

    return this.request('GetTranscodeTemplateGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobIds - jobIds. optional.
   * @param {String} UploadURLs - uploadUrls. optional.
   */
  getURLUploadInfos(params = {}, options = {}) {
    return this.request('GetURLUploadInfos', params, options);
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
   * @param {String} StorageLocation - storageLocation. optional.
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} WatermarkId - watertempId. required.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   */
  getWatermarkConsole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WatermarkId')) {
      throw new TypeError('parameter "WatermarkId" is required');
    }

    return this.request('GetWatermarkConsole', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   */
  getWatermarksConsole(params = {}, options = {}) {
    return this.request('GetWatermarksConsole', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} WorkflowId - workflowId. required.
   */
  getWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WorkflowId')) {
      throw new TypeError('parameter "WorkflowId" is required');
    }

    return this.request('GetWorkflow', params, options);
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} AppName - appName. optional.
   * @param {String} Products - products. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listAppInfo(params = {}, options = {}) {
    return this.request('ListAppInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} IdentityType - identityType. optional.
   * @param {String} IdentityName - identityName. optional.
   * @param {String} AppId - appId. optional.
   */
  listAppPoliciesForIdentity(params = {}, options = {}) {
    return this.request('ListAppPoliciesForIdentity', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PolicyType - policyType. optional.
   * @param {Long} PageNo - pageNo. optional.
   * @param {Long} PageSize - pageSize. optional.
   */
  listAppPolicy(params = {}, options = {}) {
    return this.request('ListAppPolicy', params, options);
  }

  /**
   * @param {String} SecurityGroupName - securityGroupName. optional.
   */
  listAuditSecurityIp(params = {}, options = {}) {
    return this.request('ListAuditSecurityIp', params, options);
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
   * @param {Boolean} IsContainsTemplates - containTemplates. optional.
   */
  listTemplateGroup(params = {}, options = {}) {
    return this.request('ListTemplateGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {Boolean} IsContainsTemplates - containTemplates. optional.
   */
  listTemplateGroupConsole(params = {}, options = {}) {
    return this.request('ListTemplateGroupConsole', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VideoId - videoId. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   */
  listTranscodeTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    return this.request('ListTranscodeTask', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  listTranscodeTemplateGroup(params = {}, options = {}) {
    return this.request('ListTranscodeTemplateGroup', params, options);
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
   */
  listWatermark(params = {}, options = {}) {
    return this.request('ListWatermark', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  listWorkflow(params = {}, options = {}) {
    return this.request('ListWorkflow', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} TargetAppId - targetAppId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {String} ResourceIds - resourceIds. required.
   */
  moveAppResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TargetAppId')) {
      throw new TypeError('parameter "TargetAppId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'ResourceIds')) {
      throw new TypeError('parameter "ResourceIds" is required');
    }

    return this.request('MoveAppResource', params, options);
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
   * @param {String} ProjectId - projectId. optional.
   * @param {String} Timeline - timeline. optional.
   * @param {String} Title - title. optional.
   * @param {String} Description - description. optional.
   * @param {String} CoverURL - coverUrl. optional.
   * @param {String} MediaMetadata - mediaMetadata. optional.
   * @param {String} ProduceConfig - produceConfig. optional.
   * @param {String} UserData - userData. optional.
   */
  produceEditingProjectVideo(params = {}, options = {}) {
    return this.request('ProduceEditingProjectVideo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ObjectPath - objectPath. required.
   */
  pushObjectCache(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ObjectPath')) {
      throw new TypeError('parameter "ObjectPath" is required');
    }

    return this.request('PushObjectCache', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ObjectPath - objectPath. required.
   * @param {String} ObjectType - objectType. optional.
   */
  refreshObjectCaches(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ObjectPath')) {
      throw new TypeError('parameter "ObjectPath" is required');
    }

    return this.request('RefreshObjectCaches', params, options);
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VideoId - mediaId. required.
   */
  refreshUploadVideo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    return this.request('RefreshUploadVideo', params, options);
  }

  /**
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
   * @param {String} RegisterMetadatas - registerMetadatas. required.
   * @param {String} TemplateGroupId - templateGroupId. optional.
   * @param {String} WorkFlowId - workFlowId. optional.
   * @param {String} UserData - userData. optional.
   */
  registerMedia(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegisterMetadatas')) {
      throw new TypeError('parameter "RegisterMetadatas" is required');
    }

    return this.request('RegisterMedia', params, options);
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
   * @param {String} SearchType - searchType. optional.
   * @param {String} Fields - fields. optional.
   * @param {String} Match - match. optional.
   * @param {String} SortBy - sortBy. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} ScrollToken - scrollToken. optional.
   * @param {String} SessionId - sessionId. optional.
   * @param {String} ResultTypes - resultTypes. optional.
   */
  searchMedia(params = {}, options = {}) {
    return this.request('SearchMedia', params, options);
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
   * @param {String} AuditConfig - auditConfig. optional.
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
   * @param {String} GroupSymbol - groupSymbol. optional.
   */
  setDefaultTemplateGroupConsole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('SetDefaultTemplateGroupConsole', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TranscodeTemplateGroupId - transcodeTemplateGroupId. required.
   */
  setDefaultTranscodeTemplateGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TranscodeTemplateGroupId')) {
      throw new TypeError('parameter "TranscodeTemplateGroupId" is required');
    }

    return this.request('SetDefaultTranscodeTemplateGroup', params, options);
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} WatermarkId - watertempId. required.
   */
  setDefaultWatermarkConsole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WatermarkId')) {
      throw new TypeError('parameter "WatermarkId" is required');
    }

    return this.request('SetDefaultWatermarkConsole', params, options);
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
   * @param {String} CallbackSwitch - callbackSwitch. optional.
   * @param {String} CallbackType - callbackType. optional.
   * @param {String} CallbackURL - callbackURL. required.
   * @param {String} EventTypeList - eventTypeList. optional.
   * @param {String} AuthSwitch - authSwitch. optional.
   * @param {String} AuthKey - authKey. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
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
   * @param {Integer} RecentNumber - recentNumber. optional.
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
   * @param {String} VideoId - videoId. required.
   * @param {String} PreprocessType - preprocessType. required.
   */
  submitPreprocessJobsConsole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    if (!hasOwnProperty(params, 'PreprocessType')) {
      throw new TypeError('parameter "PreprocessType" is required');
    }

    return this.request('SubmitPreprocessJobsConsole', params, options);
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
   * @param {String} Priority - priority. optional.
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} AppId - appId. optional.
   * @param {String} AppName - appName. optional.
   * @param {String} Description - description. optional.
   * @param {String} Products - products. optional.
   * @param {String} Status - status. optional.
   */
  updateAppInfo(params = {}, options = {}) {
    return this.request('UpdateAppInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PolicyName - policyName. required.
   * @param {String} PolicyValue - policyValue. optional.
   * @param {String} Description - description. optional.
   */
  updateAppPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PolicyName')) {
      throw new TypeError('parameter "PolicyName" is required');
    }

    return this.request('UpdateAppPolicy', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} UpdateContent - updateContent. required.
   */
  updateAttachedMediaInfos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UpdateContent')) {
      throw new TypeError('parameter "UpdateContent" is required');
    }

    return this.request('UpdateAttachedMediaInfos', params, options);
  }

  /**
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   * @param {String} Configs - configs. optional.
   */
  updateCustomTemplateAndGroupConsole(params = {}, options = {}) {
    return this.request('UpdateCustomTemplateAndGroupConsole', params, options);
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
   * @param {String} CoverURL - coverUrl. optional.
   */
  updateEditingProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('UpdateEditingProject', params, options);
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
   * @param {String} CoverURL - coverUrl. optional.
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Name - name. optional.
   * @param {String} TranscodeTemplateList - transcodeTemplateList. optional.
   * @param {String} Locked - locked. optional.
   * @param {String} TranscodeTemplateGroupId - transcodeTemplateGroupId. required.
   */
  updateTranscodeTemplateGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TranscodeTemplateGroupId')) {
      throw new TypeError('parameter "TranscodeTemplateGroupId" is required');
    }

    return this.request('UpdateTranscodeTemplateGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VideoId - mediaId. required.
   * @param {String} Title - title. optional.
   * @param {String} Tags - tags. optional.
   * @param {String} Description - description. optional.
   * @param {String} CoverURL - coverUrl. optional.
   * @param {Long} CateId - cateId. optional.
   * @param {String} DownloadSwitch - downloadSwitch. optional.
   * @param {String} Status - status. optional.
   * @param {String} CustomMediaInfo - customMediaInfo. optional.
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
   * @param {String} Name - name. optional.
   * @param {String} WatermarkId - watertempId. required.
   * @param {String} WatermarkConfig - watermarkConfig. required.
   */
  updateWatermark(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WatermarkId')) {
      throw new TypeError('parameter "WatermarkId" is required');
    }

    if (!hasOwnProperty(params, 'WatermarkConfig')) {
      throw new TypeError('parameter "WatermarkConfig" is required');
    }

    return this.request('UpdateWatermark', params, options);
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
   * @param {String} FileName - fileName. optional.
   * @param {Long} ResourceRealOwnerId - resourceRealOwnerId. optional.
   */
  updateWatermarkConsole(params = {}, options = {}) {
    return this.request('UpdateWatermarkConsole', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} WorkflowId - workflowId. required.
   * @param {String} Name - name. optional.
   * @param {String} ActionList - actionList. optional.
   */
  updateWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WorkflowId')) {
      throw new TypeError('parameter "WorkflowId" is required');
    }

    return this.request('UpdateWorkflow', params, options);
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
   * @param {String} UserData - userData. optional.
   */
  uploadMediaByURL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UploadURLs')) {
      throw new TypeError('parameter "UploadURLs" is required');
    }

    return this.request('UploadMediaByURL', params, options);
  }

}

module.exports = Client;

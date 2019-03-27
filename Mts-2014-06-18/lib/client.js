
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2014-06-18';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaWorkflowId - mediaWorkflowId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  activateMediaWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaWorkflowId')) {
      throw new TypeError('parameter "MediaWorkflowId" is required');
    }

    return this.request('ActivateMediaWorkflow', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Name - name. required.
   * @param {Integer} Priority - priority. optional. default: 1.
   * @param {String} NotifyConfig - notifyConfig. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  addAsrPipeline(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('AddAsrPipeline', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CateName - cateName. required.
   * @param {Long} ParentId - parentId. optional. default: -1.
   * @param {String} OwnerAccount - ownerAccount. optional.
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
   * @param {String} Name - name. required.
   * @param {Integer} Priority - priority. optional. default: 1.
   * @param {String} NotifyConfig - notifyConfig. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  addCensorPipeline(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('AddCensorPipeline', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Name - name. required.
   * @param {String} Priority - priority. optional. default: 1.
   * @param {String} NotifyConfig - notifyConfig. optional.
   * @param {String} Role - role. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  addCoverPipeline(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('AddCoverPipeline', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Name - name. required.
   * @param {String} Porn - porn. optional.
   * @param {String} Terrorism - terrorism. optional.
   * @param {String} Politics - politics. optional.
   * @param {String} Ad - ad. optional.
   * @param {String} Qrcode - qrcode. optional.
   * @param {String} Live - live. optional.
   * @param {String} Logo - logo. optional.
   * @param {String} Abuse - abuse. optional.
   * @param {String} Contraband - contraband. optional.
   * @param {String} spam - spam. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  addMCTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('AddMCTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} FileURL - fileUrl. required.
   * @param {String} Title - title. optional.
   * @param {String} Description - description. optional.
   * @param {String} CoverURL - coverURL. optional.
   * @param {String} Tags - tags. optional.
   * @param {String} MediaWorkflowId - mediaWorkflowId. optional.
   * @param {String} MediaWorkflowUserData - mediaWorkflowUserData. optional.
   * @param {Boolean} InputUnbind - inputUnbind. optional.
   * @param {Long} CateId - cateId. optional.
   * @param {String} OverrideParams - overrideParams. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  addMedia(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileURL')) {
      throw new TypeError('parameter "FileURL" is required');
    }

    return this.request('AddMedia', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Bucket - bucket. required.
   * @param {String} Type - type. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  addMediaBucket(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bucket')) {
      throw new TypeError('parameter "Bucket" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('AddMediaBucket', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaId - mediaId. required.
   * @param {String} Tag - tag. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  addMediaTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('AddMediaTag', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Name - name. required.
   * @param {String} Topology - topology. required.
   * @param {String} TriggerMode - triggerMode. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  addMediaWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Topology')) {
      throw new TypeError('parameter "Topology" is required');
    }

    return this.request('AddMediaWorkflow', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Name - name. required.
   * @param {String} Speed - speed. optional. default: Standard.
   * @param {Long} SpeedLevel - speedLevel. optional.
   * @param {String} NotifyConfig - notifyConfig. optional.
   * @param {String} Role - role. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  addPipeline(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('AddPipeline', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Name - name. required.
   * @param {Integer} Priority - priority. optional. default: 1.
   * @param {String} NotifyConfig - notifyConfig. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  addPornPipeline(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('AddPornPipeline', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Name - name. required.
   * @param {String} Container - container. optional.
   * @param {String} Video - video. optional.
   * @param {String} Audio - audio. optional.
   * @param {String} TransConfig - transConfig. optional.
   * @param {String} MuxConfig - muxConfig. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  addTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('AddTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Name - name. required.
   * @param {Integer} Priority - priority. optional. default: 1.
   * @param {String} NotifyConfig - notifyConfig. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  addTerrorismPipeline(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('AddTerrorismPipeline', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Name - name. required.
   * @param {Integer} Priority - priority. optional. default: 1.
   * @param {String} NotifyConfig - notifyConfig. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  addVideoSummaryPipeline(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('AddVideoSummaryPipeline', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Name - name. required.
   * @param {String} Config - config. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  addWaterMarkTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Config')) {
      throw new TypeError('parameter "Config" is required');
    }

    return this.request('AddWaterMarkTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Bucket - bucket. required.
   * @param {String} RoleArn - roleArn. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  bindInputBucket(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bucket')) {
      throw new TypeError('parameter "Bucket" is required');
    }

    return this.request('BindInputBucket', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Bucket - bucket. required.
   * @param {String} RoleArn - roleArn. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  bindOutputBucket(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bucket')) {
      throw new TypeError('parameter "Bucket" is required');
    }

    return this.request('BindOutputBucket', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobId - jobId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  cancelJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('CancelJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  categoryTree(params = {}, options = {}) {
    return this.request('CategoryTree', params, options);
  }

  /**
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
  checkResource(params = {}, options = {}) {
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

    return this.request('CheckResource', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Template - template. required.
   */
  createMcuTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Template')) {
      throw new TypeError('parameter "Template" is required');
    }

    return this.request('CreateMcuTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Bucket - bucket. required.
   * @param {String} Type - type. required.
   * @param {Boolean} Sync - sync. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createMediaStorage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bucket')) {
      throw new TypeError('parameter "Bucket" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Sync')) {
      throw new TypeError('parameter "Sync" is required');
    }

    return this.request('CreateMediaStorage', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} EndUserId - endUserId. required.
   * @param {Integer} SessionTime - sessionTime. required.
   * @param {String} MediaId - mediaId. required.
   */
  createSession(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EndUserId')) {
      throw new TypeError('parameter "EndUserId" is required');
    }

    if (!hasOwnProperty(params, 'SessionTime')) {
      throw new TypeError('parameter "SessionTime" is required');
    }

    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('CreateSession', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaWorkflowId - mediaWorkflowId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deactivateMediaWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaWorkflowId')) {
      throw new TypeError('parameter "MediaWorkflowId" is required');
    }

    return this.request('DeactivateMediaWorkflow', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} CiphertextBlob - ciphertextBlob. required.
   * @param {String} Rand - rand. required.
   */
  decryptKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CiphertextBlob')) {
      throw new TypeError('parameter "CiphertextBlob" is required');
    }

    if (!hasOwnProperty(params, 'Rand')) {
      throw new TypeError('parameter "Rand" is required');
    }

    return this.request('DecryptKey', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} CateId - cateId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
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
   * @param {String} TemplateId - templateId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteMCTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('DeleteMCTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} JobIds - jobIds. required.
   */
  deleteMcuJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobIds')) {
      throw new TypeError('parameter "JobIds" is required');
    }

    return this.request('DeleteMcuJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} TemplateId - templateId. required.
   */
  deleteMcuTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('DeleteMcuTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaIds - mediaIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteMedia(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaIds')) {
      throw new TypeError('parameter "MediaIds" is required');
    }

    return this.request('DeleteMedia', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaIds - mediaIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteMediaList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaIds')) {
      throw new TypeError('parameter "MediaIds" is required');
    }

    return this.request('DeleteMediaList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaId - mediaId. required.
   * @param {String} Tag - tag. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteMediaTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('DeleteMediaTag', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaWorkflowId - mediaWorkflowId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteMediaWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaWorkflowId')) {
      throw new TypeError('parameter "MediaWorkflowId" is required');
    }

    return this.request('DeleteMediaWorkflow', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deletePipeline(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    return this.request('DeletePipeline', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TemplateId - templateId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('DeleteTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} WaterMarkTemplateId - waterMarkTemplateId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteWaterMarkTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WaterMarkTemplateId')) {
      throw new TypeError('parameter "WaterMarkTemplateId" is required');
    }

    return this.request('DeleteWaterMarkTemplate', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   */
  describeMtsServiceStatus(params = {}, options = {}) {
    return this.request('DescribeMtsServiceStatus', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   */
  describeMtsUserResourcePackage(params = {}, options = {}) {
    return this.request('DescribeMtsUserResourcePackage', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} LicenseUrl - licenseUrl. required.
   * @param {String} Data - data. required.
   * @param {String} MediaId - mediaId. required.
   * @param {String} Header - header. optional.
   * @param {String} Type - type. optional.
   */
  getLicense(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LicenseUrl')) {
      throw new TypeError('parameter "LicenseUrl" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('GetLicense', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Data - data. required.
   */
  getPackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    return this.request('GetPackage', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} NextPageToken - nextPageToken. optional.
   * @param {Integer} MaximumPageSize - maximumPageSize. optional.
   */
  listAllMediaBucket(params = {}, options = {}) {
    return this.request('ListAllMediaBucket', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {String} State - state. optional. default: All.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  listAsrPipeline(params = {}, options = {}) {
    return this.request('ListAsrPipeline', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {String} State - state. optional. default: All.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  listCensorPipeline(params = {}, options = {}) {
    return this.request('ListCensorPipeline', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {String} State - state. optional. default: All.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  listCoverPipeline(params = {}, options = {}) {
    return this.request('ListCoverPipeline', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} NextPageToken - nextPageToken. optional.
   * @param {Long} MaximumPageSize - maximumPageSize. optional. default: 10.
   * @param {String} State - state. optional. default: All.
   * @param {String} StartOfJobCreatedTimeRange - startOfJobCreatedTimeRange. optional.
   * @param {String} EndOfJobCreatedTimeRange - endOfJobCreatedTimeRange. optional.
   * @param {String} PipelineId - pipelineId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  listJob(params = {}, options = {}) {
    return this.request('ListJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} NextPageToken - nextPageToken. optional.
   * @param {Long} MaximumPageSize - maximumPageSize. optional. default: 10.
   * @param {String} From - from. optional.
   * @param {String} To - to. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  listMedia(params = {}, options = {}) {
    return this.request('ListMedia', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaWorkflowId - mediaWorkflowId. optional.
   * @param {String} MediaWorkflowName - mediaWorkflowName. optional.
   * @param {String} InputFileURL - inputFileURL. optional.
   * @param {String} NextPageToken - nextPageToken. optional.
   * @param {Long} MaximumPageSize - maximumPageSize. optional. default: 10.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  listMediaWorkflowExecutions(params = {}, options = {}) {
    return this.request('ListMediaWorkflowExecutions', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {String} State - state. optional. default: All.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  listPornPipeline(params = {}, options = {}) {
    return this.request('ListPornPipeline', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Type - type. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  listSystemTemplate(params = {}, options = {}) {
    return this.request('ListSystemTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {String} State - state. optional. default: All.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  listTerrorismPipeline(params = {}, options = {}) {
    return this.request('ListTerrorismPipeline', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {String} State - state. optional. default: All.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  listVideoSummaryPipeline(params = {}, options = {}) {
    return this.request('ListVideoSummaryPipeline', params, options);
  }

  /**
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
  logicalDeleteResource(params = {}, options = {}) {
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

    return this.request('LogicalDeleteResource', params, options);
  }

  /**
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
  physicalDeleteResource(params = {}, options = {}) {
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

    return this.request('PhysicalDeleteResource', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} MediaId - mediaId. required.
   * @param {String} Formats - formats. required.
   * @param {String} AuthInfo - authInfo. required.
   * @param {Long} AuthTimeout - authTimeout. optional.
   * @param {String} Rand - rand. optional.
   * @param {String} PlayDomain - playDomain. optional.
   * @param {String} HlsUriToken - hlsUriToken. optional.
   * @param {String} Terminal - terminal. optional.
   */
  playInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    if (!hasOwnProperty(params, 'Formats')) {
      throw new TypeError('parameter "Formats" is required');
    }

    if (!hasOwnProperty(params, 'AuthInfo')) {
      throw new TypeError('parameter "AuthInfo" is required');
    }

    return this.request('PlayInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  playerAuth(params = {}, options = {}) {
    return this.request('PlayerAuth', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AnalysisJobIds - analysisJobIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryAnalysisJobList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AnalysisJobIds')) {
      throw new TypeError('parameter "AnalysisJobIds" is required');
    }

    return this.request('QueryAnalysisJobList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AnnotationJobIds - jobIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryAnnotationJobList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AnnotationJobIds')) {
      throw new TypeError('parameter "AnnotationJobIds" is required');
    }

    return this.request('QueryAnnotationJobList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobIds - jobIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryAsrJobList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobIds')) {
      throw new TypeError('parameter "JobIds" is required');
    }

    return this.request('QueryAsrJobList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PipelineIds - pipelineIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryAsrPipelineList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PipelineIds')) {
      throw new TypeError('parameter "PipelineIds" is required');
    }

    return this.request('QueryAsrPipelineList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryAuthConfig(params = {}, options = {}) {
    return this.request('QueryAuthConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobIds - jobIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryCensorJobList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobIds')) {
      throw new TypeError('parameter "JobIds" is required');
    }

    return this.request('QueryCensorJobList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PipelineIds - pipelineIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryCensorPipelineList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PipelineIds')) {
      throw new TypeError('parameter "PipelineIds" is required');
    }

    return this.request('QueryCensorPipelineList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobIds - jobIds. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryComplexJobList(params = {}, options = {}) {
    return this.request('QueryComplexJobList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CoverJobIds - jobIds. optional.
   * @param {String} NextPageToken - nextPageToken. optional.
   * @param {Long} MaximumPageSize - maximumPageSize. optional. default: 10.
   * @param {String} State - state. optional. default: All.
   * @param {String} StartOfJobCreatedTimeRange - startOfJobCreatedTimeRange. optional.
   * @param {String} EndOfJobCreatedTimeRange - endOfJobCreatedTimeRange. optional.
   * @param {String} PipelineId - pipelineId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryCoverJobList(params = {}, options = {}) {
    return this.request('QueryCoverJobList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PipelineIds - pipelineIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryCoverPipelineList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PipelineIds')) {
      throw new TypeError('parameter "PipelineIds" is required');
    }

    return this.request('QueryCoverPipelineList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobIds - jobIds. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryEditingJobList(params = {}, options = {}) {
    return this.request('QueryEditingJobList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} FacerecogJobIds - jobIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryFacerecogJobList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FacerecogJobIds')) {
      throw new TypeError('parameter "FacerecogJobIds" is required');
    }

    return this.request('QueryFacerecogJobList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobIds - jobIds. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryFpCompareJobList(params = {}, options = {}) {
    return this.request('QueryFpCompareJobList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Long} PageSize - pageSize. optional.
   * @param {Long} PageIndex - pageIndex. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryFpImportResult(params = {}, options = {}) {
    return this.request('QueryFpImportResult', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobIds - jobIds. optional.
   * @param {String} NextPageToken - nextPageToken. optional.
   * @param {Long} MaximumPageSize - maximumPageSize. optional. default: 10.
   * @param {String} State - state. optional. default: All.
   * @param {String} StartOfJobCreatedTimeRange - startOfJobCreatedTimeRange. optional.
   * @param {String} EndOfJobCreatedTimeRange - endOfJobCreatedTimeRange. optional.
   * @param {String} PrimaryKeyList - primaryKeyList. optional.
   * @param {String} PipelineId - pipelineId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryFpShotJobList(params = {}, options = {}) {
    return this.request('QueryFpShotJobList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobIds - jobIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryImageSearchJobList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobIds')) {
      throw new TypeError('parameter "JobIds" is required');
    }

    return this.request('QueryImageSearchJobList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobIds - jobIds. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryJobList(params = {}, options = {}) {
    return this.request('QueryJobList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Bucket - bucket. optional.
   * @param {String} Location - location. optional.
   * @param {String} Object - object. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryJobListByFile(params = {}, options = {}) {
    return this.request('QueryJobListByFile', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PipelineId - PipelineId. optional.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryJobListByPid(params = {}, options = {}) {
    return this.request('QueryJobListByPid', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobIds - jobIds. optional.
   * @param {String} NextPageToken - nextPageToken. optional.
   * @param {Long} MaximumPageSize - maximumPageSize. optional. default: 10.
   * @param {String} State - state. optional. default: All.
   * @param {String} StartOfJobCreatedTimeRange - startOfJobCreatedTimeRange. optional.
   * @param {String} EndOfJobCreatedTimeRange - endOfJobCreatedTimeRange. optional.
   * @param {String} PipelineId - pipelineId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryMCJobList(params = {}, options = {}) {
    return this.request('QueryMCJobList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TemplateIds - templateIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryMCTemplateList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateIds')) {
      throw new TypeError('parameter "TemplateIds" is required');
    }

    return this.request('QueryMCTemplateList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} JobIds - jobIds. required.
   */
  queryMcuJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobIds')) {
      throw new TypeError('parameter "JobIds" is required');
    }

    return this.request('QueryMcuJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} TemplateId - templateId. optional.
   */
  queryMcuTemplate(params = {}, options = {}) {
    return this.request('QueryMcuTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobId - jobId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} NextPageToken - nextPageToken. optional.
   * @param {Long} MaximumPageSize - maximumPageSize. optional.
   */
  queryMediaCensorJobDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('QueryMediaCensorJobDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobId - jobId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} NextPageToken - nextPageToken. optional.
   * @param {Long} MaximumPageSize - maximumPageSize. optional. default: 10.
   * @param {String} State - state. optional. default: All.
   * @param {String} StartOfJobCreatedTimeRange - startOfJobCreatedTimeRange. optional.
   * @param {String} EndOfJobCreatedTimeRange - endOfJobCreatedTimeRange. optional.
   * @param {String} PipelineId - pipelineId. optional.
   */
  queryMediaCensorJobList(params = {}, options = {}) {
    return this.request('QueryMediaCensorJobList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobIds - jobIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryMediaDetailJobList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobIds')) {
      throw new TypeError('parameter "JobIds" is required');
    }

    return this.request('QueryMediaDetailJobList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobIds - jobIds. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryMediaFpDeleteJobList(params = {}, options = {}) {
    return this.request('QueryMediaFpDeleteJobList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaInfoJobIds - metaInfoJobIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryMediaInfoJobList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaInfoJobIds')) {
      throw new TypeError('parameter "MediaInfoJobIds" is required');
    }

    return this.request('QueryMediaInfoJobList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaIds - mediaIds. required.
   * @param {Boolean} IncludePlayList - includePlayList. optional.
   * @param {Boolean} IncludeSnapshotList - includeSnapshotList. optional.
   * @param {Boolean} IncludeMediaInfo - includeMediaInfo. optional.
   * @param {Boolean} IncludeSummaryList - includeSummaryList. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryMediaList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaIds')) {
      throw new TypeError('parameter "MediaIds" is required');
    }

    return this.request('QueryMediaList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} FileURLs - fileURLs. required.
   * @param {Boolean} IncludePlayList - includePlayList. optional.
   * @param {Boolean} IncludeSnapshotList - includeSnapshotList. optional.
   * @param {Boolean} IncludeMediaInfo - includeMediaInfo. optional.
   * @param {Boolean} IncludeSummaryList - includeSummaryList. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryMediaListByURL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileURLs')) {
      throw new TypeError('parameter "FileURLs" is required');
    }

    return this.request('QueryMediaListByURL', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RunIds - runIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryMediaWorkflowExecutionList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RunIds')) {
      throw new TypeError('parameter "RunIds" is required');
    }

    return this.request('QueryMediaWorkflowExecutionList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaWorkflowIds - mediaWorkflowIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryMediaWorkflowList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaWorkflowIds')) {
      throw new TypeError('parameter "MediaWorkflowIds" is required');
    }

    return this.request('QueryMediaWorkflowList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Names - names. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryMediaWorkflowListByName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Names')) {
      throw new TypeError('parameter "Names" is required');
    }

    return this.request('QueryMediaWorkflowListByName', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MetaInfoJobIds - metaInfoJobIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryMetaInfoJobList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MetaInfoJobIds')) {
      throw new TypeError('parameter "MetaInfoJobIds" is required');
    }

    return this.request('QueryMetaInfoJobList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PipelineIds - pipelineIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryPipelineList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PipelineIds')) {
      throw new TypeError('parameter "PipelineIds" is required');
    }

    return this.request('QueryPipelineList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobIds - jobIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryPornJobList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobIds')) {
      throw new TypeError('parameter "JobIds" is required');
    }

    return this.request('QueryPornJobList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PipelineIds - pipelineIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryPornPipelineList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PipelineIds')) {
      throw new TypeError('parameter "PipelineIds" is required');
    }

    return this.request('QueryPornPipelineList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Type - type. optional.
   * @param {String} Codec - codec. optional.
   * @param {String} Definition - definition. optional.
   * @param {String} QueryRegion - queryRegion. optional.
   * @param {String} StartOfDayRange - startOfDayRange. optional.
   * @param {String} EndOfDayRange - endOfDayRange. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryServiceUsage(params = {}, options = {}) {
    return this.request('QueryServiceUsage', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SnapshotJobIds - jobIds. optional.
   * @param {String} NextPageToken - nextPageToken. optional.
   * @param {Long} MaximumPageSize - maximumPageSize. optional. default: 10.
   * @param {String} State - state. optional. default: All.
   * @param {String} StartOfJobCreatedTimeRange - startOfJobCreatedTimeRange. optional.
   * @param {String} EndOfJobCreatedTimeRange - endOfJobCreatedTimeRange. optional.
   * @param {String} PipelineId - pipelineId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  querySnapshotJobList(params = {}, options = {}) {
    return this.request('QuerySnapshotJobList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobIds - jobIds. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  querySubtitleJobList(params = {}, options = {}) {
    return this.request('QuerySubtitleJobList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TemplateIds - templateIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  querySystemTemplateList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateIds')) {
      throw new TypeError('parameter "TemplateIds" is required');
    }

    return this.request('QuerySystemTemplateList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TagJobIds - jobIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryTagJobList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TagJobIds')) {
      throw new TypeError('parameter "TagJobIds" is required');
    }

    return this.request('QueryTagJobList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TemplateIds - templateIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryTemplateList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateIds')) {
      throw new TypeError('parameter "TemplateIds" is required');
    }

    return this.request('QueryTemplateList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobIds - jobIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryTerrorismJobList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobIds')) {
      throw new TypeError('parameter "JobIds" is required');
    }

    return this.request('QueryTerrorismJobList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PipelineIds - pipelineIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryTerrorismPipelineList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PipelineIds')) {
      throw new TypeError('parameter "PipelineIds" is required');
    }

    return this.request('QueryTerrorismPipelineList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobIds - jobIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryVideoGifJobList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobIds')) {
      throw new TypeError('parameter "JobIds" is required');
    }

    return this.request('QueryVideoGifJobList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobIds - jobIds. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryVideoPoseJobList(params = {}, options = {}) {
    return this.request('QueryVideoPoseJobList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobIds - jobIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryVideoSplitJobList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobIds')) {
      throw new TypeError('parameter "JobIds" is required');
    }

    return this.request('QueryVideoSplitJobList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobIds - jobIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryVideoSummaryJobList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobIds')) {
      throw new TypeError('parameter "JobIds" is required');
    }

    return this.request('QueryVideoSummaryJobList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PipelineIds - pipelineIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryVideoSummaryPipelineList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PipelineIds')) {
      throw new TypeError('parameter "PipelineIds" is required');
    }

    return this.request('QueryVideoSummaryPipelineList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} WaterMarkTemplateIds - waterMarkTemplateIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryWaterMarkTemplateList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WaterMarkTemplateIds')) {
      throw new TypeError('parameter "WaterMarkTemplateIds" is required');
    }

    return this.request('QueryWaterMarkTemplateList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Domains - domains. required.
   */
  refreshCdnDomainConfigsCache(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domains')) {
      throw new TypeError('parameter "Domains" is required');
    }

    return this.request('RefreshCdnDomainConfigsCache', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Category - category. required.
   * @param {String} PersonName - personName. required.
   * @param {String} Images - images. required.
   * @param {String} PersonLib - personLib. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  registerMediaDetailPerson(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Category')) {
      throw new TypeError('parameter "Category" is required');
    }

    if (!hasOwnProperty(params, 'PersonName')) {
      throw new TypeError('parameter "PersonName" is required');
    }

    if (!hasOwnProperty(params, 'Images')) {
      throw new TypeError('parameter "Images" is required');
    }

    return this.request('RegisterMediaDetailPerson', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobId - jobId. required.
   * @param {String} Scenario - scenario. required.
   * @param {String} Description - description. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  registerMediaDetailScenario(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    if (!hasOwnProperty(params, 'Scenario')) {
      throw new TypeError('parameter "Scenario" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('RegisterMediaDetailScenario', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Name - name. required.
   * @param {String} Definition - definition. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  registerMediaWorkflowType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Definition')) {
      throw new TypeError('parameter "Definition" is required');
    }

    return this.request('RegisterMediaWorkflowType', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Name - name. required.
   * @param {String} Definition - definition. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  registerWorkflowType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Definition')) {
      throw new TypeError('parameter "Definition" is required');
    }

    return this.request('RegisterWorkflowType', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobId - jobId. required.
   * @param {String} Annotation - annotation. required.
   * @param {String} Details - details. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  reportAnnotationJobResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    if (!hasOwnProperty(params, 'Annotation')) {
      throw new TypeError('parameter "Annotation" is required');
    }

    if (!hasOwnProperty(params, 'Details')) {
      throw new TypeError('parameter "Details" is required');
    }

    return this.request('ReportAnnotationJobResult', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobId - jobId. required.
   * @param {String} Label - label. required.
   * @param {String} Detail - detail. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  reportCensorJobResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    if (!hasOwnProperty(params, 'Label')) {
      throw new TypeError('parameter "Label" is required');
    }

    return this.request('ReportCensorJobResult', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobId - jobId. required.
   * @param {String} Result - result. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  reportCoverJobResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    if (!hasOwnProperty(params, 'Result')) {
      throw new TypeError('parameter "Result" is required');
    }

    return this.request('ReportCoverJobResult', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobId - jobId. required.
   * @param {String} Facerecog - facerecog. required.
   * @param {String} Details - details. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  reportFacerecogJobResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    if (!hasOwnProperty(params, 'Facerecog')) {
      throw new TypeError('parameter "Facerecog" is required');
    }

    if (!hasOwnProperty(params, 'Details')) {
      throw new TypeError('parameter "Details" is required');
    }

    return this.request('ReportFacerecogJobResult', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobId - jobId. required.
   * @param {String} Result - result. required.
   * @param {String} Details - details. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  reportFpShotJobResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    if (!hasOwnProperty(params, 'Result')) {
      throw new TypeError('parameter "Result" is required');
    }

    return this.request('ReportFpShotJobResult', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobId - jobId. required.
   * @param {String} Tag - tag. required.
   * @param {String} Results - results. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  reportMediaDetailJobResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    if (!hasOwnProperty(params, 'Tag')) {
      throw new TypeError('parameter "Tag" is required');
    }

    if (!hasOwnProperty(params, 'Results')) {
      throw new TypeError('parameter "Results" is required');
    }

    return this.request('ReportMediaDetailJobResult', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobId - jobId. required.
   * @param {String} Label - label. required.
   * @param {String} Detail - detail. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  reportPornJobResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    if (!hasOwnProperty(params, 'Label')) {
      throw new TypeError('parameter "Label" is required');
    }

    return this.request('ReportPornJobResult', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobId - jobId. required.
   * @param {String} Tag - tag. required.
   * @param {String} Result - result. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  reportTagJobResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    if (!hasOwnProperty(params, 'Tag')) {
      throw new TypeError('parameter "Tag" is required');
    }

    if (!hasOwnProperty(params, 'Result')) {
      throw new TypeError('parameter "Result" is required');
    }

    return this.request('ReportTagJobResult', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobId - jobId. required.
   * @param {String} Label - label. required.
   * @param {String} Detail - detail. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  reportTerrorismJobResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    if (!hasOwnProperty(params, 'Label')) {
      throw new TypeError('parameter "Label" is required');
    }

    return this.request('ReportTerrorismJobResult', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} JobId - jobId. required.
   * @param {String} Result - result. required.
   * @param {String} Details - details. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  reportVideoSplitJobResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    if (!hasOwnProperty(params, 'Result')) {
      throw new TypeError('parameter "Result" is required');
    }

    return this.request('ReportVideoSplitJobResult', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {String} State - state. optional. default: All.
   * @param {String} StartOfJobCreatedTimeRange - startOfJobCreatedTimeRange. optional.
   * @param {String} EndOfJobCreatedTimeRange - endOfJobCreatedTimeRange. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  searchJob(params = {}, options = {}) {
    return this.request('SearchJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} From - from. optional.
   * @param {String} To - to. optional.
   * @param {String} KeyWord - keyWord. optional.
   * @param {String} Title - title. optional.
   * @param {String} Description - Description. optional.
   * @param {String} Tag - tag. optional.
   * @param {String} CateId - cateId. optional.
   * @param {String} SortBy - sortBy. optional.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  searchMedia(params = {}, options = {}) {
    return this.request('SearchMedia', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {String} StateList - stateList. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  searchMediaWorkflow(params = {}, options = {}) {
    return this.request('SearchMediaWorkflow', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaWorkflowName - name. optional.
   * @param {String} FileURLs - fileURLs. optional.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {String} StateList - stateList. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  searchMediaWorkflowExecution(params = {}, options = {}) {
    return this.request('SearchMediaWorkflowExecution', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {String} State - state. optional. default: All.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  searchPipeline(params = {}, options = {}) {
    return this.request('SearchPipeline', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {String} State - State. optional. default: All.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  searchTemplate(params = {}, options = {}) {
    return this.request('SearchTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {String} State - State. optional. default: Normal.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  searchWaterMarkTemplate(params = {}, options = {}) {
    return this.request('SearchWaterMarkTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Key1 - key1. optional.
   * @param {String} Key2 - key2. optional.
   */
  setAuthConfig(params = {}, options = {}) {
    return this.request('SetAuthConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} OSSDomain - ossDomain. required.
   * @param {String} CDNDomain - cdnDomain. optional.
   * @param {String} DomainStatus - domainStatus. optional.
   * @param {String} AuthType - authType. optional.
   * @param {String} Key1 - key1. optional.
   * @param {String} Key2 - key2. optional.
   * @param {String} RedirectType - redirectType. optional.
   */
  setCdnDomainConfigsInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OSSDomain')) {
      throw new TypeError('parameter "OSSDomain" is required');
    }

    return this.request('SetCdnDomainConfigsInner', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Input - input. required.
   * @param {String} Name - name. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  startMediaWorkflowExecution(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Input')) {
      throw new TypeError('parameter "Input" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('StartMediaWorkflowExecution', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Input - input. required.
   * @param {String} WorkflowType - workflowType. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  startWorkflowExecution(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Input')) {
      throw new TypeError('parameter "Input" is required');
    }

    if (!hasOwnProperty(params, 'WorkflowType')) {
      throw new TypeError('parameter "WorkflowType" is required');
    }

    return this.request('StartWorkflowExecution', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaWorkflowId - mediaWorkflowId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  stopMediaWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaWorkflowId')) {
      throw new TypeError('parameter "MediaWorkflowId" is required');
    }

    return this.request('StopMediaWorkflow', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Input - input. required.
   * @param {String} AnalysisConfig - analysisConfig. optional.
   * @param {String} UserData - userData. optional.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} Priority - priority. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  submitAnalysisJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Input')) {
      throw new TypeError('parameter "Input" is required');
    }

    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    return this.request('SubmitAnalysisJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Input - input. required.
   * @param {String} AnnotationConfig - annotationConfig. optional.
   * @param {String} UserData - userData. optional.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  submitAnnotationJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Input')) {
      throw new TypeError('parameter "Input" is required');
    }

    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    return this.request('SubmitAnnotationJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Input - input. required.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} AsrConfig - asrConfig. optional.
   * @param {String} UserData - userData. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  submitAsrJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Input')) {
      throw new TypeError('parameter "Input" is required');
    }

    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    return this.request('SubmitAsrJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} BeautifyConfig - beautifyConfig. required.
   * @param {String} UserData - userData. optional.
   * @param {String} PipelineId - pipelineId. optional.
   * @param {Boolean} Async - async. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  submitBeautifyJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BeautifyConfig')) {
      throw new TypeError('parameter "BeautifyConfig" is required');
    }

    return this.request('SubmitBeautifyJobs', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Input - input. optional.
   * @param {String} CoverImages - coverImages. optional.
   * @param {String} Title - title. optional.
   * @param {String} Description - description. optional.
   * @param {String} Barrages - barrages. optional.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} CensorConfig - censorConfig. required.
   * @param {String} UserData - userData. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  submitCensorJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    if (!hasOwnProperty(params, 'CensorConfig')) {
      throw new TypeError('parameter "CensorConfig" is required');
    }

    return this.request('SubmitCensorJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Inputs - inputs. required.
   * @param {String} ComplexConfigs - complexConfigs. required.
   * @param {String} TranscodeOutput - transcodeOutput. required.
   * @param {String} OutputBucket - outputBucket. required.
   * @param {String} OutputLocation - outputLocation. optional. default: oss-cn-hangzhou.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} UserData - userData. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  submitComplexJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Inputs')) {
      throw new TypeError('parameter "Inputs" is required');
    }

    if (!hasOwnProperty(params, 'ComplexConfigs')) {
      throw new TypeError('parameter "ComplexConfigs" is required');
    }

    if (!hasOwnProperty(params, 'TranscodeOutput')) {
      throw new TypeError('parameter "TranscodeOutput" is required');
    }

    if (!hasOwnProperty(params, 'OutputBucket')) {
      throw new TypeError('parameter "OutputBucket" is required');
    }

    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    return this.request('SubmitComplexJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Input - input. required.
   * @param {String} CoverConfig - coverConfig. required.
   * @param {String} UserData - userData. optional.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  submitCoverJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Input')) {
      throw new TypeError('parameter "Input" is required');
    }

    if (!hasOwnProperty(params, 'CoverConfig')) {
      throw new TypeError('parameter "CoverConfig" is required');
    }

    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    return this.request('SubmitCoverJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} EditingInputs - editingInputs. required.
   * @param {String} EditingJobOutputs - editingJobOutputs. required.
   * @param {String} OutputBucket - outputBucket. required.
   * @param {String} OutputLocation - outputLocation. optional. default: oss-cn-hangzhou.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  submitEditingJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EditingInputs')) {
      throw new TypeError('parameter "EditingInputs" is required');
    }

    if (!hasOwnProperty(params, 'EditingJobOutputs')) {
      throw new TypeError('parameter "EditingJobOutputs" is required');
    }

    if (!hasOwnProperty(params, 'OutputBucket')) {
      throw new TypeError('parameter "OutputBucket" is required');
    }

    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    return this.request('SubmitEditingJobs', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Input - input. required.
   * @param {String} FacerecogConfig - facerecogConfig. optional.
   * @param {String} UserData - userData. optional.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  submitFacerecogJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Input')) {
      throw new TypeError('parameter "Input" is required');
    }

    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    return this.request('SubmitFacerecogJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MasterMedia - masterMedia. required.
   * @param {String} QueryMedia - queryMedia. required.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} FpDBId - fpDBId. optional.
   * @param {String} MatchedFrameStorage - matchedFrameStorage. optional.
   * @param {String} UserData - userData. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  submitFpCompareJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MasterMedia')) {
      throw new TypeError('parameter "MasterMedia" is required');
    }

    if (!hasOwnProperty(params, 'QueryMedia')) {
      throw new TypeError('parameter "QueryMedia" is required');
    }

    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    return this.request('SubmitFpCompareJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Input - input. required.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} FpShotConfig - fpShotConfig. optional.
   * @param {String} UserData - userData. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  submitFpShotJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Input')) {
      throw new TypeError('parameter "Input" is required');
    }

    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    return this.request('SubmitFpShotJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Input - input. required.
   * @param {String} PipelineId - pipelineId. optional.
   * @param {String} UserData - userData. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  submitImageQualityJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Input')) {
      throw new TypeError('parameter "Input" is required');
    }

    return this.request('SubmitImageQualityJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InputVideo - inputVideo. required.
   * @param {String} InputImage - inputImage. required.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} FpDBId - fpDBId. optional.
   * @param {String} Config - config. optional.
   * @param {String} UserData - userData. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  submitImageSearchJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InputVideo')) {
      throw new TypeError('parameter "InputVideo" is required');
    }

    if (!hasOwnProperty(params, 'InputImage')) {
      throw new TypeError('parameter "InputImage" is required');
    }

    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    return this.request('SubmitImageSearchJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Input - input. required.
   * @param {String} Outputs - outputs. required.
   * @param {String} OutputBucket - outputBucket. required.
   * @param {String} OutputLocation - outputLocation. optional. default: oss-cn-hangzhou.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  submitJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Input')) {
      throw new TypeError('parameter "Input" is required');
    }

    if (!hasOwnProperty(params, 'Outputs')) {
      throw new TypeError('parameter "Outputs" is required');
    }

    if (!hasOwnProperty(params, 'OutputBucket')) {
      throw new TypeError('parameter "OutputBucket" is required');
    }

    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    return this.request('SubmitJobs', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Video - video. optional.
   * @param {String} Images - images. optional.
   * @param {String} Texts - texts. optional.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} CensorConfig - censorConfig. required.
   * @param {String} UserData - userData. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  submitMCJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    if (!hasOwnProperty(params, 'CensorConfig')) {
      throw new TypeError('parameter "CensorConfig" is required');
    }

    return this.request('SubmitMCJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Input - input. required.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} TemplateId - templateId. optional.
   * @param {String} Template - template. required.
   * @param {String} UserData - userData. optional.
   */
  submitMcuJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Input')) {
      throw new TypeError('parameter "Input" is required');
    }

    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    if (!hasOwnProperty(params, 'Template')) {
      throw new TypeError('parameter "Template" is required');
    }

    return this.request('SubmitMcuJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Input - input. optional.
   * @param {String} CoverImages - coverImages. optional.
   * @param {String} Title - title. optional.
   * @param {String} Description - description. optional.
   * @param {String} Barrages - barrages. optional.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} VideoCensorConfig - videoCensorConfig. required.
   * @param {String} UserData - userData. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  submitMediaCensorJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    if (!hasOwnProperty(params, 'VideoCensorConfig')) {
      throw new TypeError('parameter "VideoCensorConfig" is required');
    }

    return this.request('SubmitMediaCensorJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Input - input. required.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} MediaDetailConfig - mediaDetailConfig. required.
   * @param {String} UserData - userData. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  submitMediaDetailJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Input')) {
      throw new TypeError('parameter "Input" is required');
    }

    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    if (!hasOwnProperty(params, 'MediaDetailConfig')) {
      throw new TypeError('parameter "MediaDetailConfig" is required');
    }

    return this.request('SubmitMediaDetailJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} PrimaryKey - primaryKey. required.
   * @param {String} FpDBId - fpDBId. required.
   * @param {String} UserData - userData. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  submitMediaFpDeleteJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    if (!hasOwnProperty(params, 'PrimaryKey')) {
      throw new TypeError('parameter "PrimaryKey" is required');
    }

    if (!hasOwnProperty(params, 'FpDBId')) {
      throw new TypeError('parameter "FpDBId" is required');
    }

    return this.request('SubmitMediaFpDeleteJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Input - input. required.
   * @param {String} UserData - userData. optional.
   * @param {String} PipelineId - pipelineId. optional.
   * @param {Boolean} Async - async. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  submitMediaInfoJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Input')) {
      throw new TypeError('parameter "Input" is required');
    }

    return this.request('SubmitMediaInfoJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaWorkflowId - mediaWorkflowId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  submitMediaWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaWorkflowId')) {
      throw new TypeError('parameter "MediaWorkflowId" is required');
    }

    return this.request('SubmitMediaWorkflow', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Input - input. required.
   * @param {String} UserData - userData. optional.
   * @param {String} PipelineId - pipelineId. optional.
   * @param {Boolean} Async - async. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  submitMetaInfoJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Input')) {
      throw new TypeError('parameter "Input" is required');
    }

    return this.request('SubmitMetaInfoJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Input - input. required.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} PornConfig - pornConfig. required.
   * @param {String} UserData - userData. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  submitPornJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Input')) {
      throw new TypeError('parameter "Input" is required');
    }

    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    if (!hasOwnProperty(params, 'PornConfig')) {
      throw new TypeError('parameter "PornConfig" is required');
    }

    return this.request('SubmitPornJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Input - input. required.
   * @param {String} SnapshotConfig - snapshotConfig. required.
   * @param {String} UserData - userData. optional.
   * @param {String} PipelineId - pipelineId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  submitSnapshotJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Input')) {
      throw new TypeError('parameter "Input" is required');
    }

    if (!hasOwnProperty(params, 'SnapshotConfig')) {
      throw new TypeError('parameter "SnapshotConfig" is required');
    }

    return this.request('SubmitSnapshotJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} InputConfig - inputConfig. required.
   * @param {String} OutputConfig - outputConfig. required.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} UserData - userData. optional.
   */
  submitSubtitleJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InputConfig')) {
      throw new TypeError('parameter "InputConfig" is required');
    }

    if (!hasOwnProperty(params, 'OutputConfig')) {
      throw new TypeError('parameter "OutputConfig" is required');
    }

    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    return this.request('SubmitSubtitleJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Input - input. required.
   * @param {String} TagConfig - tagConfig. optional.
   * @param {String} UserData - userData. optional.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  submitTagJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Input')) {
      throw new TypeError('parameter "Input" is required');
    }

    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    return this.request('SubmitTagJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Input - input. required.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} TerrorismConfig - terrorismConfig. optional.
   * @param {String} UserData - userData. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  submitTerrorismJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Input')) {
      throw new TypeError('parameter "Input" is required');
    }

    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    return this.request('SubmitTerrorismJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Input - input. required.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} VideoGifConfig - videoGifConfig. optional.
   * @param {String} UserData - userData. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  submitVideoGifJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Input')) {
      throw new TypeError('parameter "Input" is required');
    }

    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    return this.request('SubmitVideoGifJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Input - input. required.
   * @param {String} OutputConfig - outputConfig. required.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} UserData - userData. optional.
   */
  submitVideoPoseJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Input')) {
      throw new TypeError('parameter "Input" is required');
    }

    if (!hasOwnProperty(params, 'OutputConfig')) {
      throw new TypeError('parameter "OutputConfig" is required');
    }

    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    return this.request('SubmitVideoPoseJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Input - input. required.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} VideoSplitConfig - videoSplitConfig. optional.
   * @param {String} UserData - userData. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  submitVideoSplitJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Input')) {
      throw new TypeError('parameter "Input" is required');
    }

    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    return this.request('SubmitVideoSplitJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Input - input. required.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} VideoSummaryConfig - videoSummaryConfig. optional.
   * @param {String} UserData - userData. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  submitVideoSummaryJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Input')) {
      throw new TypeError('parameter "Input" is required');
    }

    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    return this.request('SubmitVideoSummaryJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Bucket - bucket. required.
   * @param {String} RoleArn - roleArn. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  unbindInputBucket(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bucket')) {
      throw new TypeError('parameter "Bucket" is required');
    }

    return this.request('UnbindInputBucket', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Bucket - bucket. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  unbindOutputBucket(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bucket')) {
      throw new TypeError('parameter "Bucket" is required');
    }

    return this.request('UnbindOutputBucket', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} Name - name. required.
   * @param {String} State - state. required.
   * @param {Integer} Priority - priority. required.
   * @param {String} NotifyConfig - notifyConfig. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  updateAsrPipeline(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'State')) {
      throw new TypeError('parameter "State" is required');
    }

    if (!hasOwnProperty(params, 'Priority')) {
      throw new TypeError('parameter "Priority" is required');
    }

    return this.request('UpdateAsrPipeline', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CateId - cateId. required.
   * @param {String} CateName - cateName. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  updateCategoryName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CateId')) {
      throw new TypeError('parameter "CateId" is required');
    }

    if (!hasOwnProperty(params, 'CateName')) {
      throw new TypeError('parameter "CateName" is required');
    }

    return this.request('UpdateCategoryName', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} Name - name. required.
   * @param {String} State - state. required.
   * @param {Integer} Priority - priority. required.
   * @param {String} NotifyConfig - notifyConfig. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  updateCensorPipeline(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'State')) {
      throw new TypeError('parameter "State" is required');
    }

    if (!hasOwnProperty(params, 'Priority')) {
      throw new TypeError('parameter "Priority" is required');
    }

    return this.request('UpdateCensorPipeline', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} Name - name. required.
   * @param {String} State - state. required.
   * @param {Integer} Priority - priority. required.
   * @param {String} NotifyConfig - notifyConfig. optional.
   * @param {String} Role - role. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  updateCoverPipeline(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'State')) {
      throw new TypeError('parameter "State" is required');
    }

    if (!hasOwnProperty(params, 'Priority')) {
      throw new TypeError('parameter "Priority" is required');
    }

    return this.request('UpdateCoverPipeline', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Bucket - bucket. required.
   * @param {Boolean} Sync - sync. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  updateInputBucketSyncState(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bucket')) {
      throw new TypeError('parameter "Bucket" is required');
    }

    if (!hasOwnProperty(params, 'Sync')) {
      throw new TypeError('parameter "Sync" is required');
    }

    return this.request('UpdateInputBucketSyncState', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TemplateId - templateId. required.
   * @param {String} Name - name. required.
   * @param {String} Porn - porn. optional.
   * @param {String} Terrorism - terrorism. optional.
   * @param {String} Politics - politics. optional.
   * @param {String} Ad - ad. optional.
   * @param {String} Qrcode - qrcode. optional.
   * @param {String} Live - live. optional.
   * @param {String} Logo - logo. optional.
   * @param {String} Abuse - abuse. optional.
   * @param {String} Contraband - contraband. optional.
   * @param {String} spam - spam. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  updateMCTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('UpdateMCTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} TemplateId - templateId. required.
   * @param {String} Template - template. required.
   */
  updateMcuTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    if (!hasOwnProperty(params, 'Template')) {
      throw new TypeError('parameter "Template" is required');
    }

    return this.request('UpdateMcuTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaId - mediaId. required.
   * @param {String} Title - title. optional.
   * @param {String} Description - description. optional.
   * @param {String} CoverURL - coverUrl. optional.
   * @param {Long} CateId - cateId. optional.
   * @param {String} Tags - tags. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  updateMedia(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('UpdateMedia', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaId - mediaId. required.
   * @param {Long} CateId - cateId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  updateMediaCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('UpdateMediaCategory', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaId - mediaId. required.
   * @param {String} CoverURL - coverURL. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  updateMediaCover(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('UpdateMediaCover', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaId - mediaId. required.
   * @param {Boolean} Publish - publish. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  updateMediaPublishState(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('UpdateMediaPublishState', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Bucket - bucket. required.
   * @param {Boolean} Sync - sync. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  updateMediaStorage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bucket')) {
      throw new TypeError('parameter "Bucket" is required');
    }

    if (!hasOwnProperty(params, 'Sync')) {
      throw new TypeError('parameter "Sync" is required');
    }

    return this.request('UpdateMediaStorage', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaWorkflowId - mediaWorkflowId. required.
   * @param {String} Topology - topology. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  updateMediaWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaWorkflowId')) {
      throw new TypeError('parameter "MediaWorkflowId" is required');
    }

    if (!hasOwnProperty(params, 'Topology')) {
      throw new TypeError('parameter "Topology" is required');
    }

    return this.request('UpdateMediaWorkflow', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaWorkflowId - mediaWorkflowId. required.
   * @param {String} TriggerMode - triggerMode. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  updateMediaWorkflowTriggerMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaWorkflowId')) {
      throw new TypeError('parameter "MediaWorkflowId" is required');
    }

    if (!hasOwnProperty(params, 'TriggerMode')) {
      throw new TypeError('parameter "TriggerMode" is required');
    }

    return this.request('UpdateMediaWorkflowTriggerMode', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} Name - name. required.
   * @param {String} State - state. required.
   * @param {String} NotifyConfig - notifyConfig. optional.
   * @param {String} Role - role. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  updatePipeline(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'State')) {
      throw new TypeError('parameter "State" is required');
    }

    return this.request('UpdatePipeline', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} Name - name. required.
   * @param {String} State - state. required.
   * @param {Integer} Priority - priority. required.
   * @param {String} NotifyConfig - notifyConfig. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  updatePornPipeline(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'State')) {
      throw new TypeError('parameter "State" is required');
    }

    if (!hasOwnProperty(params, 'Priority')) {
      throw new TypeError('parameter "Priority" is required');
    }

    return this.request('UpdatePornPipeline', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TemplateId - templateId. required.
   * @param {String} Name - name. required.
   * @param {String} Container - container. optional.
   * @param {String} Video - video. optional.
   * @param {String} Audio - audio. optional.
   * @param {String} MuxConfig - muxConfig. optional.
   * @param {String} TransConfig - transConfig. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  updateTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('UpdateTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} Name - name. required.
   * @param {String} State - state. required.
   * @param {Integer} Priority - priority. required.
   * @param {String} NotifyConfig - notifyConfig. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  updateTerrorismPipeline(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'State')) {
      throw new TypeError('parameter "State" is required');
    }

    if (!hasOwnProperty(params, 'Priority')) {
      throw new TypeError('parameter "Priority" is required');
    }

    return this.request('UpdateTerrorismPipeline', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PipelineId - pipelineId. required.
   * @param {String} Name - name. required.
   * @param {String} State - state. required.
   * @param {Integer} Priority - priority. required.
   * @param {String} NotifyConfig - notifyConfig. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  updateVideoSummaryPipeline(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PipelineId')) {
      throw new TypeError('parameter "PipelineId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'State')) {
      throw new TypeError('parameter "State" is required');
    }

    if (!hasOwnProperty(params, 'Priority')) {
      throw new TypeError('parameter "Priority" is required');
    }

    return this.request('UpdateVideoSummaryPipeline', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} WaterMarkTemplateId - waterMarkTemplateId. required.
   * @param {String} Name - name. required.
   * @param {String} Config - config. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  updateWaterMarkTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WaterMarkTemplateId')) {
      throw new TypeError('parameter "WaterMarkTemplateId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Config')) {
      throw new TypeError('parameter "Config" is required');
    }

    return this.request('UpdateWaterMarkTemplate', params, options);
  }

}

module.exports = Client;

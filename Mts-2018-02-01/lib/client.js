
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-02-01';
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
   * @param {String} FileURL - fileUrl. required.
   * @param {String} Title - title. optional.
   * @param {String} Description - description. optional.
   * @param {String} CoverURL - coverURL. optional.
   * @param {String} Tags - tags. optional.
   * @param {String} MediaWorkflowId - mediaWorkflowId. optional.
   * @param {String} MediaWorkflowUserData - mediaWorkflowUserData. optional.
   * @param {Long} CateId - cateId. optional.
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
   */
  listAllMediaBucket(params = {}, options = {}) {
    return this.request('ListAllMediaBucket', params, options);
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
   * @param {String} Type - type. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  listSystemTemplate(params = {}, options = {}) {
    return this.request('ListSystemTemplate', params, options);
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
   * @param {String} SnapshotJobIds - jobIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  querySnapshotJobList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SnapshotJobIds')) {
      throw new TypeError('parameter "SnapshotJobIds" is required');
    }

    return this.request('QuerySnapshotJobList', params, options);
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
   * @param {String} Input - input. required.
   * @param {String} UserData - userData. optional.
   * @param {String} PipelineId - pipelineId. optional.
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
   * @param {String} Input - input. required.
   * @param {String} UserData - userData. optional.
   * @param {String} PipelineId - pipelineId. optional.
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

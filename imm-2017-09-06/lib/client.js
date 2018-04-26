
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-09-06';
    super(config);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SrcUri - SrcUrl. required.
   * @param {String} TgtType - TgtType. optional.
   * @param {String} TgtUri - TgtUrl. required.
   * @param {String} NotifyTopicName - NotifyTopicName. optional.
   * @param {String} NotifyEndpoint - NotifyEndpoint. optional.
   * @param {String} ExternalID - ExternalId. optional.
   * @param {String} ImageSpec - ImageSpec. optional.
   */
  convertOfficeFormat(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SrcUri')) {
      throw new TypeError('parameter "SrcUri" is required');
    }

    if (!hasOwnProperty(params, 'TgtUri')) {
      throw new TypeError('parameter "TgtUri" is required');
    }

    return this.request('ConvertOfficeFormat', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SrcUri - Resource. required.
   */
  createFaceJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SrcUri')) {
      throw new TypeError('parameter "SrcUri" is required');
    }

    return this.request('CreateFaceJob', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   */
  createFaceSet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('CreateFaceSet', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SrcUri - SrcUrl. required.
   * @param {String} Style - TgtType. optional.
   * @param {String} TgtUri - TgtUrl. required.
   * @param {String} NotifyTopicName - NotifyTopicName. optional.
   * @param {String} NotifyEndpoint - NotifyEndpoint. optional.
   * @param {String} ExternalID - ExternalId. optional.
   */
  createFormatConvertJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SrcUri')) {
      throw new TypeError('parameter "SrcUri" is required');
    }

    if (!hasOwnProperty(params, 'TgtUri')) {
      throw new TypeError('parameter "TgtUri" is required');
    }

    return this.request('CreateFormatConvertJob', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SrcUri - SrcUrl. required.
   * @param {String} TgtUri - TgtUrl. required.
   * @param {String} Style - Style. optional.
   * @param {String} NotifyTopicName - NotifyTopicName. optional.
   * @param {String} NotifyEndpoint - NotifyEndpoint. optional.
   * @param {String} ExternalID - ExternalId. optional.
   */
  createPhotoJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SrcUri')) {
      throw new TypeError('parameter "SrcUri" is required');
    }

    if (!hasOwnProperty(params, 'TgtUri')) {
      throw new TypeError('parameter "TgtUri" is required');
    }

    return this.request('CreatePhotoJob', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SrcUri - SrcUrls. required.
   * @param {String} TgtUri - TgtUrl. required.
   * @param {String} NotifyTopicName - NotifyTopicName. optional.
   * @param {String} NotifyEndpoint - NotifyEndpoint. optional.
   * @param {String} ExternalID - ExternalId. optional.
   */
  createPornBatchDetectJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SrcUri')) {
      throw new TypeError('parameter "SrcUri" is required');
    }

    if (!hasOwnProperty(params, 'TgtUri')) {
      throw new TypeError('parameter "TgtUri" is required');
    }

    return this.request('CreatePornBatchDetectJob', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SrcUri - Resource. required.
   * @param {String} NotifyTopicName - NotifyTopicName. optional.
   * @param {String} NotifyEndpoint - NotifyEndpoint. optional.
   * @param {String} ExternalID - ExternalID. optional.
   */
  createTagJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SrcUri')) {
      throw new TypeError('parameter "SrcUri" is required');
    }

    return this.request('CreateTagJob', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   */
  createTagSet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('CreateTagSet', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   */
  delProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('DelProject', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} TaskId - JobId. required.
   */
  deleteConvertOfficeFormatTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('DeleteConvertOfficeFormatTask', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} JobId - JobId. required.
   * @param {String} ClearIndexData - ClearIndexData. optional.
   */
  deleteFaceJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('DeleteFaceJob', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} CheckEmpty - CheckEmpty. optional.
   * @param {String} LazyMode - LazyMode. optional.
   */
  deleteFaceSet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    return this.request('DeleteFaceSet', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} JobId - JobId. required.
   */
  deleteFormatConvertJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('DeleteFormatConvertJob', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} JobId - JobId. required.
   */
  deletePhotoJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('DeletePhotoJob', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} TaskId - JobId. required.
   */
  deletePhotoProcessTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('DeletePhotoProcessTask', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} JobId - JobId. required.
   */
  deletePornBatchDetectJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('DeletePornBatchDetectJob', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   */
  deleteProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('DeleteProject', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} JobId - JobId. required.
   * @param {String} Project - Project. required.
   * @param {String} ClearIndexData - ClearIndexData. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  deleteTagJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('DeleteTagJob', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} CheckEmpty - CheckEmpty. optional.
   * @param {String} LazyMode - LazyMode. optional.
   */
  deleteTagSet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    return this.request('DeleteTagSet', params, options);
  }

  /**
   * @param {String} Url - Url. required.
   * @param {String} RegionId - RegionId. optional.
   */
  detect(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Url')) {
      throw new TypeError('parameter "Url" is required');
    }

    return this.request('Detect', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SrcUris - PhotoUrls. required.
   */
  detectFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SrcUris')) {
      throw new TypeError('parameter "SrcUris" is required');
    }

    return this.request('DetectFace', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SrcUris - PhotoUrls. required.
   */
  detectTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SrcUris')) {
      throw new TypeError('parameter "SrcUris" is required');
    }

    return this.request('DetectTag', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} TaskId - JobId. required.
   */
  getConvertOfficeFormatTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('GetConvertOfficeFormatTask', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} GroupId - GroupId. required.
   * @param {String} Marker - Marker. optional.
   * @param {Integer} MaxKeys - Max-keys. optional.
   */
  getFaceGroupPhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('GetFaceGroupPhotos', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} JobId - JobId. required.
   */
  getFaceJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('GetFaceJob', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   */
  getFaceSet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    return this.request('GetFaceSet', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} ReturnAttribute - ReturnAttribute. optional.
   * @param {String} Marker - Marker. optional.
   */
  getFaceSetDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    return this.request('GetFaceSetDetail', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} JobId - JobId. required.
   */
  getFormatConvertJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('GetFormatConvertJob', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} JobId - JobId. required.
   */
  getPhotoJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('GetPhotoJob', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} TaskId - JobId. required.
   */
  getPhotoProcessTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('GetPhotoProcessTask', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} JobId - JobId. required.
   */
  getPornBatchDetectJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('GetPornBatchDetectJob', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   */
  getProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('GetProject', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} JobId - JobId. required.
   */
  getTagJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('GetTagJob', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} TagName - TagName. required.
   * @param {String} Marker - Marker. optional.
   * @param {String} MaxKeys - Max-keys. optional.
   */
  getTagPhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    if (!hasOwnProperty(params, 'TagName')) {
      throw new TypeError('parameter "TagName" is required');
    }

    return this.request('GetTagPhotos', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   */
  getTagSet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    return this.request('GetTagSet', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} Operation - Operation. optional.
   */
  groupFaces(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    return this.request('GroupFaces', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} SrcUris - PhotoUrls. required.
   * @param {String} Force - Force. optional.
   */
  indexFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    if (!hasOwnProperty(params, 'SrcUris')) {
      throw new TypeError('parameter "SrcUris" is required');
    }

    return this.request('IndexFace', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} SrcUris - PhotoUrls. required.
   * @param {String} Force - Force. optional.
   */
  indexTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    if (!hasOwnProperty(params, 'SrcUris')) {
      throw new TypeError('parameter "SrcUris" is required');
    }

    return this.request('IndexTag', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} Marker - Marker. optional.
   * @param {Integer} MaxKeys - Max-keys. optional.
   */
  listConvertOfficeFormatTasks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('ListConvertOfficeFormatTasks', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {Integer} Marker - Marker. optional.
   * @param {Integer} MaxKeys - Max-keys. optional.
   */
  listFaceGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    return this.request('ListFaceGroups', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} Marker - Marker. optional.
   * @param {String} Condition - Condition. optional.
   * @param {Integer} MaxKeys - Max-keys. optional.
   */
  listFaceJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('ListFaceJobs', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} Marker - Marker. optional.
   */
  listFaceSets(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('ListFaceSets', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} Marker - Marker. optional.
   * @param {Integer} MaxKeys - Max-keys. optional.
   */
  listFormatConvertJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('ListFormatConvertJobs', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} Marker - Marker. optional.
   * @param {Integer} MaxKeys - Max-keys. optional.
   */
  listPhotoJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('ListPhotoJobs', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} Marker - Marker. optional.
   * @param {Integer} MaxKeys - Max-keys. optional.
   */
  listPhotoProcessTasks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('ListPhotoProcessTasks', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} Marker - Marker. optional.
   * @param {Integer} MaxKeys - Max-keys. optional.
   */
  listPornBatchDetectJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('ListPornBatchDetectJobs', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Marker - Marker. optional.
   * @param {Integer} MaxKeys - Max-keys. optional.
   */
  listProjects(params = {}, options = {}) {
    return this.request('ListProjects', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Marker - Marker. optional.
   * @param {String} Condition - Condition. optional.
   * @param {String} Project - Project. required.
   * @param {String} RegionId - RegionId. optional.
   * @param {Integer} MaxKeys - Max-keys. optional.
   */
  listTagJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('ListTagJobs', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   */
  listTagName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    return this.request('ListTagName', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} Marker - Marker. optional.
   * @param {Integer} MaxKeys - MaxKeys. optional.
   */
  listTagSets(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('ListTagSets', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SrcUri - SrcUrl. required.
   * @param {String} TgtUri - TgtUrl. required.
   * @param {String} Style - Style. optional.
   * @param {String} NotifyTopicName - NotifyTopicName. optional.
   * @param {String} NotifyEndpoint - NotifyEndpoint. optional.
   * @param {String} ExternalID - ExternalId. optional.
   */
  photoProcess(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SrcUri')) {
      throw new TypeError('parameter "SrcUri" is required');
    }

    if (!hasOwnProperty(params, 'TgtUri')) {
      throw new TypeError('parameter "TgtUri" is required');
    }

    return this.request('PhotoProcess', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} Engines - Engines. optional.
   * @param {String} Indexers - Indexers. optional.
   * @param {String} ServiceRole - ServiceRole. optional.
   */
  putProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('PutProject', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} SrcUri - PhotoUrl. required.
   */
  removeFaceByUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    if (!hasOwnProperty(params, 'SrcUri')) {
      throw new TypeError('parameter "SrcUri" is required');
    }

    return this.request('RemoveFaceByUrl', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} SrcUri - PhotoUrl. required.
   * @param {String} TagName - TagName. required.
   */
  removeTagByName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    if (!hasOwnProperty(params, 'SrcUri')) {
      throw new TypeError('parameter "SrcUri" is required');
    }

    if (!hasOwnProperty(params, 'TagName')) {
      throw new TypeError('parameter "TagName" is required');
    }

    return this.request('RemoveTagByName', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} SrcUri - PhotoUrl. required.
   */
  removeTagByUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    if (!hasOwnProperty(params, 'SrcUri')) {
      throw new TypeError('parameter "SrcUri" is required');
    }

    return this.request('RemoveTagByUrl', params, options);
  }

}

module.exports = Client;

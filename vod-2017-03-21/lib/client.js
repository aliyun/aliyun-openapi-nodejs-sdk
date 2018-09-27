
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
   * @param {String} ImageType - imageType. required.
   * @param {String} ImageExt - imageExt. optional.
   * @param {String} OriginalFileName - originalFileName. optional.
   * @param {String} Tags - tags. optional.
   * @param {String} StorageLocation - storageLocation. optional.
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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Version - version. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} VideoType - videoType. required.
   * @param {String} BizDate - bizDate. required.
   * @param {String} VideoId - videoId. required.
   */
  describeVideoStatisByDay(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoType')) {
      throw new TypeError('parameter "VideoType" is required');
    }

    if (!hasOwnProperty(params, 'BizDate')) {
      throw new TypeError('parameter "BizDate" is required');
    }

    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    return this.request('DescribeVideoStatisByDay', params, options);
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
   */
  getImageInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    return this.request('GetImageInfo', params, options);
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
   */
  getMessageCallback(params = {}, options = {}) {
    return this.request('GetMessageCallback', params, options);
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
   * @param {String} StartStatisTime - startStatisTime. required.
   * @param {String} EndStatisTime - endStatisTime. required.
   * @param {String} Level - level. optional.
   */
  getOSSStatis(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartStatisTime')) {
      throw new TypeError('parameter "StartStatisTime" is required');
    }

    if (!hasOwnProperty(params, 'EndStatisTime')) {
      throw new TypeError('parameter "EndStatisTime" is required');
    }

    return this.request('GetOSSStatis', params, options);
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
   */
  getPlayInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    return this.request('GetPlayInfo', params, options);
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
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  openVodService(params = {}, options = {}) {
    return this.request('OpenVodService', params, options);
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
   */
  searchMedia(params = {}, options = {}) {
    return this.request('SearchMedia', params, options);
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
   * @param {String} CallbackSwitch - callbackSwitch. optional.
   * @param {String} CallbackType - callbackType. optional.
   * @param {String} CallbackURL - callbackURL. required.
   * @param {String} EventTypeList - eventTypeList. optional.
   * @param {String} AuthSwitch - authSwitch. optional.
   * @param {String} AuthKey - authKey. optional.
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
   * @param {String} VideoId - mediaId. required.
   * @param {Long} SpecifiedOffsetTime - time. optional.
   * @param {String} Width - width. optional.
   * @param {String} Height - height. optional.
   * @param {Long} Count - num. optional.
   * @param {Long} Interval - interval. optional.
   * @param {String} SpriteSnapshotConfig - spriteConfig. optional.
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VideoId - mediaId. required.
   * @param {String} Title - title. optional.
   * @param {String} Tags - tags. optional.
   * @param {String} Description - description. optional.
   * @param {String} CoverURL - coverUrl. optional.
   * @param {Long} CateId - cateId. optional.
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

}

module.exports = Client;

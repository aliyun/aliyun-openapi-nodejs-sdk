
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
   * @param {String} SrcUriA - SrcUriA. required.
   * @param {String} SrcUriB - SrcUriB. required.
   */
  compareFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SrcUriA')) {
      throw new TypeError('parameter "SrcUriA" is required');
    }

    if (!hasOwnProperty(params, 'SrcUriB')) {
      throw new TypeError('parameter "SrcUriB" is required');
    }

    return this.request('CompareFace', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. optional.
   * @param {String} ImageUriA - ImageUriA. optional.
   * @param {String} ImageUriB - ImageUriB. optional.
   * @param {String} FaceIdA - FaceIdA. optional.
   * @param {String} FaceIdB - FaceIdB. optional.
   */
  compareImageFaces(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('CompareImageFaces', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SrcUri - SrcUrl. required.
   * @param {String} TgtType - TgtType. optional.
   * @param {String} TgtUri - TgtUrl. required.
   * @param {String} SrcType - SrcType. optional.
   * @param {Long} StartPage - StartPage. optional.
   * @param {Long} EndPage - EndPage. optional.
   * @param {Long} MaxSheetRow - MaxSheetRow. optional.
   * @param {Long} MaxSheetCol - MaxSheetCol. optional.
   * @param {Long} MaxSheetCount - MaxSheetCount. optional.
   * @param {Boolean} SheetOnePage - SheetOnePage. optional.
   * @param {String} ModelId - ModelId. optional.
   * @param {String} Password - Password. optional.
   * @param {String} TgtFilePrefix - TgtFilePrefix. optional.
   * @param {String} TgtFileSuffix - TgtFileSuffix. optional.
   * @param {String} TgtFilePages - TgtFilePages. optional.
   * @param {Boolean} FitToPagesTall - FitToPagesTall. optional.
   * @param {Boolean} FitToPagesWide - FitToPagesWide. optional.
   * @param {Boolean} PdfVector - PdfVector. optional.
   * @param {Boolean} Hidecomments - Hidecomments. optional.
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
   * @param {String} SrcUri - SrcUri. required.
   * @param {String} NotifyTopicName - NotifyTopicName. optional.
   * @param {String} NotifyEndpoint - NotifyEndpoint. optional.
   * @param {String} PJobId - PJobId. optional.
   * @param {Integer} SrcOwnerId - SrcOwnerId. optional.
   */
  createBatchIndexFrameTagTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SrcUri')) {
      throw new TypeError('parameter "SrcUri" is required');
    }

    return this.request('CreateBatchIndexFrameTagTask', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} Project - Project. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SrcUri - SrcUrl. required.
   * @param {String} TgtType - TgtType. optional.
   * @param {String} TgtUri - TgtUrl. required.
   * @param {String} NotifyTopicName - NotifyTopicName. optional.
   * @param {String} NotifyEndpoint - NotifyEndpoint. optional.
   * @param {String} SrcType - SrcType. optional.
   * @param {Integer} ZoomFactor - ZoomFactor. optional.
   * @param {Integer} ZoomLevel - ZoomLevel. optional.
   * @param {Long} UnitHeight - UnitHeight. optional.
   * @param {Long} UnitWidth - UnitWidth. optional.
   * @param {Integer} BaseRow - BaseRow. optional.
   * @param {Integer} BaseCol - BaseCol. optional.
   * @param {Boolean} Thumbnails - Thumbnails. optional.
   * @param {String} ModelId - ModelId. optional.
   */
  createCADConversionTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SrcUri')) {
      throw new TypeError('parameter "SrcUri" is required');
    }

    if (!hasOwnProperty(params, 'TgtUri')) {
      throw new TypeError('parameter "TgtUri" is required');
    }

    return this.request('CreateCADConversionTask', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} CheckEmpty - CheckEmpty. optional.
   * @param {String} NotifyTopicName - NotifyTopicName. optional.
   * @param {String} NotifyEndpoint - NotifyEndpoint. optional.
   */
  createDeleteFaceSetJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    return this.request('CreateDeleteFaceSetJob', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} Project - Project. required.
   * @param {String} UniqueId - UniqueId. optional.
   * @param {String} SrcUri - SrcUri. required.
   * @param {String} Name - Name. optional.
   * @param {String} ContentType - ContentType. optional.
   * @param {String} CustomKey1 - CustomKey1. optional.
   * @param {String} CustomKey2 - CustomKey2. optional.
   * @param {String} CustomKey3 - CustomKey3. optional.
   * @param {String} CustomKey4 - CustomKey4. optional.
   * @param {String} CustomKey5 - CustomKey5. optional.
   * @param {String} CustomKey6 - CustomKey6. optional.
   * @param {String} Set - Set. required.
   */
  createDocIndexTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SrcUri')) {
      throw new TypeError('parameter "SrcUri" is required');
    }

    if (!hasOwnProperty(params, 'Set')) {
      throw new TypeError('parameter "Set" is required');
    }

    return this.request('CreateDocIndexTask', params, options);
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
   * @param {String} NotifyTopicName - NotifyTopicName. optional.
   * @param {String} NotifyEndpoint - NotifyEndpoint. optional.
   * @param {Float} StartTime - StartTime. optional.
   * @param {Float} Interval - Interval. required.
   * @param {String} Style - Style. optional.
   * @param {Integer} TgtWidth - TgtWidth. optional.
   * @param {Integer} TgtHeight - TgtHeight. optional.
   * @param {String} ExternalID - ExternalId. optional.
   * @param {Boolean} KeepFrame - KeepFrame. optional.
   * @param {Boolean} CutBlack - CutBlack. optional.
   * @param {String} PJobId - PJobId. optional.
   * @param {Long} SrcOwnerId - SrcOwnerId. optional.
   */
  createFrameGrabJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SrcUri')) {
      throw new TypeError('parameter "SrcUri" is required');
    }

    if (!hasOwnProperty(params, 'TgtUri')) {
      throw new TypeError('parameter "TgtUri" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    return this.request('CreateFrameGrabJob', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} NotifyTopicName - NotifyTopicName. optional.
   * @param {String} NotifyEndpoint - NotifyEndpoint. optional.
   * @param {String} Style - Style. optional.
   * @param {Integer} TagNum - TagNum. optional.
   * @param {Long} SrcOwnerId - SrcOwnerId. optional.
   * @param {String} PJobId - PJobId. optional.
   */
  createFrameTagAnalyseTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    return this.request('CreateFrameTagAnalyseTask', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {Integer} SrcOwnerId - SrcOwnerId. optional.
   */
  createFrameTagSet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('CreateFrameTagSet', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} NotifyTopicName - NotifyTopicName. optional.
   * @param {String} NotifyEndpoint - NotifyEndpoint. optional.
   */
  createGroupFacesJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    return this.request('CreateGroupFacesJob', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} SrcUris - SrcUris. required.
   * @param {String} Force - Force. optional.
   * @param {String} Chain - Chain. optional.
   * @param {String} NotifyTopicName - NotifyTopicName. optional.
   * @param {String} NotifyEndpoint - NotifyEndpoint. optional.
   */
  createIndexFaceJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    if (!hasOwnProperty(params, 'SrcUris')) {
      throw new TypeError('parameter "SrcUris" is required');
    }

    return this.request('CreateIndexFaceJob', params, options);
  }

  /**
   * @param {String} Project - Project. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - RegionId. optional.
   * @param {String} SrcUri - SrcUrl. required.
   * @param {String} TgtType - TgtType. optional.
   * @param {String} TgtUri - TgtUrl. required.
   * @param {String} NotifyTopicName - NotifyTopicName. optional.
   * @param {String} NotifyEndpoint - NotifyEndpoint. optional.
   * @param {String} SrcType - SrcType. optional.
   * @param {Long} StartPage - StartPage. optional.
   * @param {Long} EndPage - EndPage. optional.
   * @param {Long} MaxSheetRow - MaxSheetRow. optional.
   * @param {Long} MaxSheetCol - MaxSheetCol. optional.
   * @param {Long} MaxSheetCount - MaxSheetCount. optional.
   * @param {Boolean} SheetOnePage - SheetOnePage. optional.
   * @param {String} ModelId - ModelId. optional.
   * @param {String} Password - Password. optional.
   * @param {String} TgtFilePrefix - TgtFilePrefix. optional.
   * @param {String} TgtFileSuffix - TgtFileSuffix. optional.
   * @param {String} TgtFilePages - TgtFilePages. optional.
   * @param {Boolean} FitToPagesTall - FitToPagesTall. optional.
   * @param {Boolean} FitToPagesWide - FitToPagesWide. optional.
   * @param {String} IdempotentToken - IdempotentToken. optional.
   * @param {Boolean} PdfVector - PdfVector. optional.
   * @param {Boolean} Hidecomments - Hidecomments. optional.
   */
  createOfficeConversionTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SrcUri')) {
      throw new TypeError('parameter "SrcUri" is required');
    }

    if (!hasOwnProperty(params, 'TgtUri')) {
      throw new TypeError('parameter "TgtUri" is required');
    }

    return this.request('CreateOfficeConversionTask', params, options);
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
   * @param {String} SetId - SetId. optional.
   * @param {String} SetName - SetName. optional.
   */
  createSet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('CreateSet', params, options);
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
   * @param {String} SrcUris - SrcUrls. required.
   */
  createVideoAIJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SrcUris')) {
      throw new TypeError('parameter "SrcUris" is required');
    }

    return this.request('CreateVideoAIJob', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SrcUri - SrcUrl. required.
   * @param {String} TgtUri - TgtUrl. required.
   * @param {String} NotifyTopicName - NotifyTopicName. optional.
   * @param {String} NotifyEndpoint - NotifyEndpoint. optional.
   * @param {Float} StartTime - StartTime. optional.
   * @param {Float} Interval - Interval. required.
   * @param {String} Style - Style. optional.
   * @param {Integer} TgtWidth - TgtWidth. optional.
   * @param {Integer} TgtHeight - TgtHeight. optional.
   * @param {String} ExternalID - ExternalId. optional.
   * @param {Boolean} KeepFrame - KeepFrame. optional.
   * @param {Boolean} CutBlack - CutBlack. optional.
   * @param {String} PJobId - PJobId. optional.
   * @param {Long} SrcOwnerId - SrcOwnerId. optional.
   */
  createVideoAnalyseJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SrcUri')) {
      throw new TypeError('parameter "SrcUri" is required');
    }

    if (!hasOwnProperty(params, 'TgtUri')) {
      throw new TypeError('parameter "TgtUri" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    return this.request('CreateVideoAnalyseJob', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} VideoUri - VideoUri. required.
   * @param {String} GrabType - GrabType. optional.
   * @param {String} StartTime - StartTime. optional.
   * @param {String} EndTime - EndTime. optional.
   * @param {Boolean} SaveType - SaveType. optional.
   * @param {String} Interval - Interval. optional.
   * @param {String} TgtUri - TgtUri. optional.
   * @param {String} NotifyTopicName - NotifyTopicName. optional.
   * @param {String} NotifyEndpoint - NotifyEndpoint. optional.
   */
  createVideoAnalyseTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'VideoUri')) {
      throw new TypeError('parameter "VideoUri" is required');
    }

    return this.request('CreateVideoAnalyseTask', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SrcUri - SrcUrl. required.
   * @param {String} TgtUri - TgtUrl. required.
   * @param {String} NotifyTopicName - NotifyTopicName. optional.
   * @param {String} NotifyEndpoint - NotifyEndpoint. optional.
   * @param {Float} StartTime - StartTime. optional.
   * @param {Float} Interval - Interval. required.
   * @param {String} Style - Style. optional.
   * @param {Integer} TgtWidth - TgtWidth. optional.
   * @param {Integer} TgtHeight - TgtHeight. optional.
   * @param {String} ExternalID - ExternalId. optional.
   * @param {Boolean} KeepFrame - KeepFrame. optional.
   * @param {Boolean} CutBlack - CutBlack. optional.
   * @param {String} PJobId - PJobId. optional.
   * @param {Long} SrcOwnerId - SrcOwnerId. optional.
   * @param {Integer} TagNum - TagNum. optional.
   * @param {String} TagStyle - TagStyle. optional.
   */
  createVideoTagJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SrcUri')) {
      throw new TypeError('parameter "SrcUri" is required');
    }

    if (!hasOwnProperty(params, 'TgtUri')) {
      throw new TypeError('parameter "TgtUri" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    return this.request('CreateVideoTagJob', params, options);
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
   * @param {String} UniqueId - UniqueId. required.
   * @param {String} Set - Set. required.
   */
  deleteDocIndex(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'UniqueId')) {
      throw new TypeError('parameter "UniqueId" is required');
    }

    if (!hasOwnProperty(params, 'Set')) {
      throw new TypeError('parameter "Set" is required');
    }

    return this.request('DeleteDocIndex', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} SrcUri - PhotoUrl. required.
   * @param {String} FaceIds - FaceIds. optional.
   */
  deleteFaceById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    if (!hasOwnProperty(params, 'SrcUri')) {
      throw new TypeError('parameter "SrcUri" is required');
    }

    return this.request('DeleteFaceById', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} SrcUri - PhotoUrl. required.
   */
  deleteFaceByUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    if (!hasOwnProperty(params, 'SrcUri')) {
      throw new TypeError('parameter "SrcUri" is required');
    }

    return this.request('DeleteFaceByUrl', params, options);
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
   * @param {String} GroupName - GroupName. required.
   */
  deleteFaceSearchGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('DeleteFaceSearchGroup', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} GroupName - GroupName. required.
   * @param {String} ImageId - ImageId. required.
   * @param {String} User - User. required.
   * @param {String} SrcUri - SrcUri. required.
   */
  deleteFaceSearchImageById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    if (!hasOwnProperty(params, 'User')) {
      throw new TypeError('parameter "User" is required');
    }

    if (!hasOwnProperty(params, 'SrcUri')) {
      throw new TypeError('parameter "SrcUri" is required');
    }

    return this.request('DeleteFaceSearchImageById', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} GroupName - GroupName. required.
   * @param {String} User - User. required.
   */
  deleteFaceSearchUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    if (!hasOwnProperty(params, 'User')) {
      throw new TypeError('parameter "User" is required');
    }

    return this.request('DeleteFaceSearchUser', params, options);
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
  deleteFrameGrabJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('DeleteFrameGrabJob', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} ImageUri - ImageUri. required.
   */
  deleteImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    if (!hasOwnProperty(params, 'ImageUri')) {
      throw new TypeError('parameter "ImageUri" is required');
    }

    return this.request('DeleteImage', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} JobType - JobType. required.
   * @param {String} JobId - JobId. optional.
   */
  deleteImageJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'JobType')) {
      throw new TypeError('parameter "JobType" is required');
    }

    return this.request('DeleteImageJob', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} TaskId - JobId. required.
   */
  deleteOfficeConversionTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('DeleteOfficeConversionTask', params, options);
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
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   */
  deleteSet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    return this.request('DeleteSet', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} SrcUri - PhotoUrl. required.
   * @param {String} TagName - TagName. required.
   */
  deleteTagByName(params = {}, options = {}) {
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

    return this.request('DeleteTagByName', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} SrcUri - PhotoUrl. required.
   */
  deleteTagByUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    if (!hasOwnProperty(params, 'SrcUri')) {
      throw new TypeError('parameter "SrcUri" is required');
    }

    return this.request('DeleteTagByUrl', params, options);
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
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} VideoUri - VideoUri. required.
   * @param {Boolean} Resources - Resources. optional.
   */
  deleteVideo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    if (!hasOwnProperty(params, 'VideoUri')) {
      throw new TypeError('parameter "VideoUri" is required');
    }

    return this.request('DeleteVideo', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} JobId - JobId. required.
   */
  deleteVideoAnalyseJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('DeleteVideoAnalyseJob', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} TaskType - TaskType. required.
   * @param {String} TaskId - TaskId. optional.
   */
  deleteVideoTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'TaskType')) {
      throw new TypeError('parameter "TaskType" is required');
    }

    return this.request('DeleteVideoTask', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} Url - Url. required.
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
   * @param {String} SrcUris - SrcUris. required.
   */
  detectClothes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SrcUris')) {
      throw new TypeError('parameter "SrcUris" is required');
    }

    return this.request('DetectClothes', params, options);
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
   * @param {String} ImageUri - ImageUri. required.
   * @param {String} Library - Library. optional.
   */
  detectImageCelebrity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'ImageUri')) {
      throw new TypeError('parameter "ImageUri" is required');
    }

    return this.request('DetectImageCelebrity', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} ImageUri - ImageUri. required.
   */
  detectImageFaces(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'ImageUri')) {
      throw new TypeError('parameter "ImageUri" is required');
    }

    return this.request('DetectImageFaces', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} ImageUri - ImageUri. required.
   */
  detectImageLogos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'ImageUri')) {
      throw new TypeError('parameter "ImageUri" is required');
    }

    return this.request('DetectImageLogos', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} ImageUri - ImageUri. required.
   */
  detectImageTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'ImageUri')) {
      throw new TypeError('parameter "ImageUri" is required');
    }

    return this.request('DetectImageTags', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} ImageUri - ImageUri. required.
   */
  detectImageTexts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'ImageUri')) {
      throw new TypeError('parameter "ImageUri" is required');
    }

    return this.request('DetectImageTexts', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SrcUris - SrcUris. required.
   */
  detectLogo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SrcUris')) {
      throw new TypeError('parameter "SrcUris" is required');
    }

    return this.request('DetectLogo', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SrcUris - SrcUris. required.
   */
  detectQRCodes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SrcUris')) {
      throw new TypeError('parameter "SrcUris" is required');
    }

    return this.request('DetectQRCodes', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SrcUris - PhotoUrls. required.
   * @param {String} ModelId - ModelId. optional.
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
   * @param {String} SrcUriA - SrcUriA. required.
   * @param {String} SrcUriB - SrcUriB. required.
   */
  faceCompare(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SrcUriA')) {
      throw new TypeError('parameter "SrcUriA" is required');
    }

    if (!hasOwnProperty(params, 'SrcUriB')) {
      throw new TypeError('parameter "SrcUriB" is required');
    }

    return this.request('FaceCompare', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SrcUri - SrcUri. required.
   * @param {String} GroupName - GroupName. required.
   * @param {String} User - User. optional.
   * @param {Boolean} IsQualityLimit - IsQualityLimit. optional.
   * @param {Boolean} ChooseBiggestFace - ChooseBiggestFace. optional.
   * @param {String} RegisterCheckLevel - RegisterCheckLevel. optional.
   */
  faceRegist(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SrcUri')) {
      throw new TypeError('parameter "SrcUri" is required');
    }

    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('FaceRegist', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SrcUri - SrcUri. required.
   * @param {String} GroupName - GroupName. required.
   * @param {Integer} ResultNum - ResultNum. optional.
   * @param {Boolean} IsThreshold - IsThreshold. optional.
   * @param {String} SearchThresholdLevel - SearchThresholdLevel. optional.
   */
  faceSearch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SrcUri')) {
      throw new TypeError('parameter "SrcUri" is required');
    }

    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('FaceSearch', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} ImageSizeRange - ImageSizeRange. optional.
   * @param {String} ImageTimeRange - ImageTimeRange. optional.
   * @param {String} CreateTimeRange - CreateTimeRange. optional.
   * @param {String} ModifyTimeRange - ModifyTimeRange. optional.
   * @param {String} SourceType - SourceType. optional.
   * @param {String} SourceUriPrefix - SourceUriPrefix. optional.
   * @param {String} RemarksAPrefix - RemarksAPrefix. optional.
   * @param {String} RemarksBPrefix - RemarksBPrefix. optional.
   * @param {String} TagNames - TagNames. optional.
   * @param {String} OCRContentsMatch - OCRContentsMatch. optional.
   * @param {String} AgeRange - AgeRange. optional.
   * @param {String} Gender - Gender. optional.
   * @param {String} Emotion - Emotion. optional.
   * @param {String} OrderBy - OrderBy. optional.
   * @param {String} Order - Order. optional.
   * @param {String} Marker - Marker. optional.
   * @param {String} LocationBoundary - LocationBoundary. optional.
   * @param {String} RemarksCPrefix - RemarksCPrefix. optional.
   * @param {String} RemarksDPrefix - RemarksDPrefix. optional.
   * @param {String} ExternalId - ExternalId. optional.
   * @param {String} GroupId - GroupId. optional.
   * @param {Integer} Limit - Limit. optional.
   */
  findImages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    return this.request('FindImages', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} TagNames - TagNames. required.
   * @param {String} Marker - Marker. optional.
   * @param {Integer} Limit - Limit. optional.
   */
  findImagesByTagNames(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    if (!hasOwnProperty(params, 'TagNames')) {
      throw new TypeError('parameter "TagNames" is required');
    }

    return this.request('FindImagesByTagNames', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} ImageUri - ImageUri. optional.
   * @param {String} FaceId - FaceId. optional.
   * @param {Integer} Limit - Limit. optional.
   * @param {Float} MinSimilarity - MinSimilarity. optional.
   */
  findSimilarFaces(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    return this.request('FindSimilarFaces', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} JobId - JobId. required.
   */
  getBatchIndexFrameTagTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('GetBatchIndexFrameTagTask', params, options);
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
   * @param {String} UniqueId - UniqueId. required.
   * @param {String} Set - Set. required.
   */
  getDocIndex(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'UniqueId')) {
      throw new TypeError('parameter "UniqueId" is required');
    }

    if (!hasOwnProperty(params, 'Set')) {
      throw new TypeError('parameter "Set" is required');
    }

    return this.request('GetDocIndex', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} TaskId - TaskId. required.
   */
  getDocIndexTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('GetDocIndexTask', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} FaceId - FaceId. required.
   */
  getFaceDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    if (!hasOwnProperty(params, 'FaceId')) {
      throw new TypeError('parameter "FaceId" is required');
    }

    return this.request('GetFaceDetail', params, options);
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
   * @param {String} GroupName - GroupName. required.
   */
  getFaceSearchGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('GetFaceSearchGroup', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} ImageId - ImageId. required.
   * @param {String} GroupName - GroupName. required.
   * @param {String} SrcUri - SrcUri. required.
   * @param {String} User - User. optional.
   */
  getFaceSearchImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    if (!hasOwnProperty(params, 'SrcUri')) {
      throw new TypeError('parameter "SrcUri" is required');
    }

    return this.request('GetFaceSearchImage', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} GroupName - GroupName. required.
   * @param {String} User - User. required.
   */
  getFaceSearchUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    if (!hasOwnProperty(params, 'User')) {
      throw new TypeError('parameter "User" is required');
    }

    return this.request('GetFaceSearchUser', params, options);
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
  getFrameGrabJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('GetFrameGrabJob', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} JobId - JobId. required.
   */
  getFrameTagAnalyseTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('GetFrameTagAnalyseTask', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} ImageUri - ImageUri. required.
   */
  getImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    if (!hasOwnProperty(params, 'ImageUri')) {
      throw new TypeError('parameter "ImageUri" is required');
    }

    return this.request('GetImage', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} JobType - JobType. required.
   * @param {String} JobId - JobId. optional.
   */
  getImageJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'JobType')) {
      throw new TypeError('parameter "JobType" is required');
    }

    return this.request('GetImageJob', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} TaskId - JobId. required.
   */
  getOfficeConversionTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('GetOfficeConversionTask', params, options);
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
   * @param {String} SetId - SetId. required.
   */
  getSet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    return this.request('GetSet', params, options);
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
   * @param {String} VideoUri - VideoUri. required.
   */
  getVideo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    if (!hasOwnProperty(params, 'VideoUri')) {
      throw new TypeError('parameter "VideoUri" is required');
    }

    return this.request('GetVideo', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} Jobs - Jobs. required.
   */
  getVideoAIJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'Jobs')) {
      throw new TypeError('parameter "Jobs" is required');
    }

    return this.request('GetVideoAIJob', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} JobId - JobId. required.
   */
  getVideoAnalyseJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('GetVideoAnalyseJob', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} JobId - JobId. required.
   */
  getVideoTagJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('GetVideoTagJob', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} TaskType - TaskType. required.
   * @param {String} TaskId - TaskId. optional.
   */
  getVideoTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'TaskType')) {
      throw new TypeError('parameter "TaskType" is required');
    }

    return this.request('GetVideoTask', params, options);
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
   * @param {String} Chain - Chain. optional.
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
   * @param {Integer} SrcOwnerId - SrcOwnerId. optional.
   */
  indexFrameTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    if (!hasOwnProperty(params, 'SrcUris')) {
      throw new TypeError('parameter "SrcUris" is required');
    }

    return this.request('IndexFrameTag', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} ImageUri - ImageUri. required.
   * @param {String} RemarksA - RemarksA. optional.
   * @param {String} RemarksB - RemarksB. optional.
   * @param {String} SourceType - SourceType. optional.
   * @param {String} SourceUri - SourceUri. optional.
   * @param {String} SourcePosition - SourcePosition. optional.
   * @param {String} RemarksC - RemarksC. optional.
   * @param {String} RemarksD - RemarksD. optional.
   * @param {String} ExternalId - ExternalId. optional.
   */
  indexImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    if (!hasOwnProperty(params, 'ImageUri')) {
      throw new TypeError('parameter "ImageUri" is required');
    }

    return this.request('IndexImage', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} SrcUris - PhotoUrls. required.
   * @param {String} Force - Force. optional.
   * @param {String} ModelId - ModelId. optional.
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
   * @param {String} SetId - SetId. required.
   * @param {String} VideoUri - VideoUri. required.
   * @param {String} RemarksA - RemarksA. optional.
   * @param {String} RemarksB - RemarksB. optional.
   * @param {String} GrabType - GrabType. optional.
   * @param {String} StartTime - StartTime. optional.
   * @param {String} EndTime - EndTime. optional.
   * @param {Boolean} SaveType - SaveType. optional.
   * @param {String} Interval - Interval. optional.
   * @param {String} TgtUri - TgtUri. optional.
   * @param {String} RemarksC - RemarksC. optional.
   * @param {String} RemarksD - RemarksD. optional.
   * @param {String} ExternalId - ExternalId. optional.
   */
  indexVideo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    if (!hasOwnProperty(params, 'VideoUri')) {
      throw new TypeError('parameter "VideoUri" is required');
    }

    return this.request('IndexVideo', params, options);
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
   * @param {String} GroupId - GroupId. required.
   * @param {String} Marker - Marker. optional.
   * @param {Integer} MaxKeys - Max-keys. optional.
   */
  listFaceGroupPhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('ListFaceGroupPhotos', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} Marker - Marker. optional.
   * @param {Integer} Limit - Limit. optional.
   * @param {String} Order - Order. optional.
   * @param {String} OrderBy - OrderBy. optional.
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
   * @param {String} GroupName - GroupName. required.
   * @param {Integer} MaxKeys - Max-keys. optional.
   * @param {String} User - User. optional.
   */
  listFaceSearchGroupImages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('ListFaceSearchGroupImages', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} Marker - Marker. optional.
   * @param {String} GroupName - GroupName. required.
   * @param {Integer} MaxKeys - Max-keys. optional.
   */
  listFaceSearchGroupUsers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('ListFaceSearchGroupUsers', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} Marker - Marker. optional.
   * @param {Integer} MaxKeys - Max-keys. optional.
   */
  listFaceSearchGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('ListFaceSearchGroups', params, options);
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
   * @param {String} PJobId - PJobId. optional.
   */
  listFrameGrabJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('ListFrameGrabJobs', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} SrcUri - SrcUri. required.
   * @param {String} Marker - Marker. optional.
   * @param {Integer} MaxKeys - MaxKeys. optional.
   */
  listImageFaces(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    if (!hasOwnProperty(params, 'SrcUri')) {
      throw new TypeError('parameter "SrcUri" is required');
    }

    return this.request('ListImageFaces', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} Marker - Marker. optional.
   * @param {Integer} MaxKeys - MaxKeys. optional.
   * @param {String} JobType - JobType. optional.
   */
  listImageJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('ListImageJobs', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} CreateTimeStart - CreateTimeStart. optional.
   * @param {String} Marker - Marker. optional.
   * @param {Integer} Limit - Limit. optional.
   */
  listImages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    return this.request('ListImages', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} Marker - Marker. optional.
   * @param {Integer} MaxKeys - Max-keys. optional.
   */
  listOfficeConversionTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('ListOfficeConversionTask', params, options);
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
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   */
  listSetTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    return this.request('ListSetTags', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} Marker - Marker. optional.
   */
  listSets(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('ListSets', params, options);
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
   * @param {String} SetId - SetId. required.
   * @param {String} Marker - Marker. optional.
   */
  listTagNames(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    return this.request('ListTagNames', params, options);
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
  listTagPhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    if (!hasOwnProperty(params, 'TagName')) {
      throw new TypeError('parameter "TagName" is required');
    }

    return this.request('ListTagPhotos', params, options);
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
   * @param {String} Marker - Marker. optional.
   * @param {Integer} MaxKeys - Max-keys. optional.
   */
  listVideoAnalyseJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('ListVideoAnalyseJobs', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} VideoUri - VideoUri. required.
   * @param {String} Marker - Marker. optional.
   */
  listVideoAudios(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    if (!hasOwnProperty(params, 'VideoUri')) {
      throw new TypeError('parameter "VideoUri" is required');
    }

    return this.request('ListVideoAudios', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} VideoUri - VideoUri. required.
   * @param {String} Marker - Marker. optional.
   */
  listVideoFrames(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    if (!hasOwnProperty(params, 'VideoUri')) {
      throw new TypeError('parameter "VideoUri" is required');
    }

    return this.request('ListVideoFrames', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} Marker - Marker. optional.
   * @param {Integer} MaxKeys - Max-keys. optional.
   */
  listVideoTagJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('ListVideoTagJobs', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} Marker - Marker. optional.
   * @param {Integer} MaxKeys - MaxKeys. optional.
   * @param {String} TaskType - TaskType. optional.
   */
  listVideoTasks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('ListVideoTasks', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} CreateTimeStart - CreateTimeStart. optional.
   * @param {String} Marker - Marker. optional.
   */
  listVideos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    return this.request('ListVideos', params, options);
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
   * @param {String} ServiceRole - ServiceRole. optional.
   * @param {Integer} CU - CU. optional.
   * @param {String} Type - Type. required.
   * @param {String} BillingType - BillingType. optional.
   */
  putProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('PutProject', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SrcUri - SrcUri. required.
   * @param {String} GroupName - GroupName. required.
   * @param {String} User - User. optional.
   * @param {Boolean} IsQualityLimit - IsQualityLimit. optional.
   * @param {Boolean} ChooseBiggestFace - ChooseBiggestFace. optional.
   * @param {String} RegisterCheckLevel - RegisterCheckLevel. optional.
   */
  registFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SrcUri')) {
      throw new TypeError('parameter "SrcUri" is required');
    }

    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('RegistFace', params, options);
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

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} Content - Content. optional.
   * @param {String} Name - Name. optional.
   * @param {String} ContentType - ContentType. optional.
   * @param {Integer} ModifiedTimeStart - ModifiedTimeStart. optional.
   * @param {Integer} ModifiedTimeEnd - ModifiedTimeEnd. optional.
   * @param {Integer} SizeLimitStart - SizeLimitStart. optional.
   * @param {Integer} SizeLimitEnd - SizeLimitEnd. optional.
   * @param {Integer} PageNumLimitStart - PageNumLimitStart. optional.
   * @param {Integer} PageNumLimitEnd - PageNumLimitEnd. optional.
   * @param {String} CustomKey1 - CustomKey1. optional.
   * @param {String} CustomKey2 - CustomKey2. optional.
   * @param {String} CustomKey3 - CustomKey3. optional.
   * @param {String} CustomKey4 - CustomKey4. optional.
   * @param {String} CustomKey5 - CustomKey5. optional.
   * @param {String} CustomKey6 - CustomKey6. optional.
   * @param {Integer} Offset - Offset. optional.
   * @param {Integer} Limit - Limit. optional.
   * @param {String} Set - Set. required.
   */
  searchDocIndex(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'Set')) {
      throw new TypeError('parameter "Set" is required');
    }

    return this.request('SearchDocIndex', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SrcUri - SrcUri. required.
   * @param {String} GroupName - GroupName. required.
   * @param {Integer} ResultNum - ResultNum. optional.
   * @param {Boolean} IsThreshold - IsThreshold. optional.
   * @param {String} SearchThresholdLevel - SearchThresholdLevel. optional.
   */
  searchFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SrcUri')) {
      throw new TypeError('parameter "SrcUri" is required');
    }

    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('SearchFace', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} UniqueId - UniqueId. required.
   * @param {String} Name - Name. optional.
   * @param {String} CustomKey1 - CustomKey1. optional.
   * @param {String} CustomKey2 - CustomKey2. optional.
   * @param {String} CustomKey3 - CustomKey3. optional.
   * @param {String} CustomKey4 - CustomKey4. optional.
   * @param {String} CustomKey5 - CustomKey5. optional.
   * @param {String} CustomKey6 - CustomKey6. optional.
   * @param {String} Set - Set. required.
   */
  updateDocIndexMeta(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'UniqueId')) {
      throw new TypeError('parameter "UniqueId" is required');
    }

    if (!hasOwnProperty(params, 'Set')) {
      throw new TypeError('parameter "Set" is required');
    }

    return this.request('UpdateDocIndexMeta', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} GroupId - GroupId. required.
   * @param {String} GroupName - GroupName. optional.
   * @param {String} GroupCoverFaceId - GroupCoverFaceId. optional.
   */
  updateFaceGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('UpdateFaceGroup', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} FaceIds - FaceIds. optional.
   * @param {String} NewGroupId - NewGroupId. optional.
   */
  updateFaceGroupById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    return this.request('UpdateFaceGroupById', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} ImageUri - ImageUri. required.
   * @param {String} RemarksA - RemarksA. optional.
   * @param {String} RemarksB - RemarksB. optional.
   * @param {String} SourceType - SourceType. optional.
   * @param {String} SourceUri - SourceUri. optional.
   * @param {String} SourcePosition - SourcePosition. optional.
   * @param {String} RemarksC - RemarksC. optional.
   * @param {String} RemarksD - RemarksD. optional.
   * @param {String} ExternalId - ExternalId. optional.
   */
  updateImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    if (!hasOwnProperty(params, 'ImageUri')) {
      throw new TypeError('parameter "ImageUri" is required');
    }

    return this.request('UpdateImage', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {Integer} NewCU - NewCU. optional.
   * @param {String} NewServiceRole - NewServiceRole. optional.
   */
  updateProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('UpdateProject', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Project - Project. required.
   * @param {String} SetId - SetId. required.
   * @param {String} SetName - SetName. optional.
   */
  updateSet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'SetId')) {
      throw new TypeError('parameter "SetId" is required');
    }

    return this.request('UpdateSet', params, options);
  }

}

module.exports = Client;


'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2019-03-08';
    super(config);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} ProType - proType. optional.
   */
  createProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateProject', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} StreamType - streamType. required.
   * @param {String} StreamId - streamId. required.
   * @param {String} ModelIds - modelIds. required.
   * @param {String} ProbabilityThresholds - probabilityThresholds. optional.
   * @param {String} Output - output. optional.
   * @param {String} Notify - notify. optional.
   * @param {String} AutoStart - autoStart. optional.
   * @param {String} UserData - userData. optional.
   */
  createStreamPredict(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StreamType')) {
      throw new TypeError('parameter "StreamType" is required');
    }

    if (!hasOwnProperty(params, 'StreamId')) {
      throw new TypeError('parameter "StreamId" is required');
    }

    if (!hasOwnProperty(params, 'ModelIds')) {
      throw new TypeError('parameter "ModelIds" is required');
    }

    return this.request('CreateStreamPredict', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   */
  createTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateTag', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} DataId - dataId. required.
   * @param {String} TagItems - tagItems. required.
   */
  createTrainDataRegionTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'DataId')) {
      throw new TypeError('parameter "DataId" is required');
    }

    if (!hasOwnProperty(params, 'TagItems')) {
      throw new TypeError('parameter "TagItems" is required');
    }

    return this.request('CreateTrainDataRegionTag', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} DataId - dataId. required.
   * @param {String} TagItems - tagItems. required.
   */
  createTrainDataTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'DataId')) {
      throw new TypeError('parameter "DataId" is required');
    }

    if (!hasOwnProperty(params, 'TagItems')) {
      throw new TypeError('parameter "TagItems" is required');
    }

    return this.request('CreateTrainDataTag', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} IterationId - iterationId. required.
   * @param {String} DataIds - dataIds. required.
   * @param {String} TagId - tagId. optional.
   */
  createTrainDatasFromPrediction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'IterationId')) {
      throw new TypeError('parameter "IterationId" is required');
    }

    if (!hasOwnProperty(params, 'DataIds')) {
      throw new TypeError('parameter "DataIds" is required');
    }

    return this.request('CreateTrainDatasFromPrediction', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Urls - urls. required.
   * @param {String} TagId - tagId. optional.
   */
  createTrainDatasFromUrls(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Urls')) {
      throw new TypeError('parameter "Urls" is required');
    }

    return this.request('CreateTrainDatasFromUrls', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} DataIds - dataIds. required.
   * @param {String} TagId - tagId. required.
   */
  createTrainDatasTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'DataIds')) {
      throw new TypeError('parameter "DataIds" is required');
    }

    if (!hasOwnProperty(params, 'TagId')) {
      throw new TypeError('parameter "TagId" is required');
    }

    return this.request('CreateTrainDatasTag', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} FileName - fileName. required.
   */
  createUploadToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    return this.request('CreateUploadToken', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} IterationId - iterationId. required.
   */
  deleteIteration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'IterationId')) {
      throw new TypeError('parameter "IterationId" is required');
    }

    return this.request('DeleteIteration', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} IterationId - iterationId. required.
   * @param {String} DataIds - dataIds. required.
   */
  deletePredictDatas(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'IterationId')) {
      throw new TypeError('parameter "IterationId" is required');
    }

    if (!hasOwnProperty(params, 'DataIds')) {
      throw new TypeError('parameter "DataIds" is required');
    }

    return this.request('DeletePredictDatas', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} ProjectId - projectId. required.
   */
  deleteProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('DeleteProject', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} PredictId - predictId. required.
   */
  deleteStreamPredict(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PredictId')) {
      throw new TypeError('parameter "PredictId" is required');
    }

    return this.request('DeleteStreamPredict', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} TagId - tagId. required.
   */
  deleteTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'TagId')) {
      throw new TypeError('parameter "TagId" is required');
    }

    return this.request('DeleteTag', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} DataIds - dataIds. required.
   */
  deleteTrainDatas(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'DataIds')) {
      throw new TypeError('parameter "DataIds" is required');
    }

    return this.request('DeleteTrainDatas', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} DataIds - dataIds. required.
   * @param {String} TagId - tagId. optional.
   */
  deleteTrainDatasTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'DataIds')) {
      throw new TypeError('parameter "DataIds" is required');
    }

    return this.request('DeleteTrainDatasTag', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} IterationIds - iterationIds. optional.
   * @param {String} Status - status. optional.
   * @param {String} Threshold - threshold. optional.
   */
  describeIterations(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('DescribeIterations', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   */
  describeIvisionServiceStatus(params = {}, options = {}) {
    return this.request('DescribeIvisionServiceStatus', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} IterationId - iterationId. optional.
   * @param {String} ModelId - modelId. optional.
   * @param {String} TagId - tagId. optional.
   * @param {String} ProbabilityThreshold - probabilityThreshold. optional.
   * @param {String} OverlapThreshold - overlapThreshold. optional.
   * @param {String} NextPageToken - nextPageToken. optional.
   * @param {Long} CurrentPage - currentPage. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   */
  describePredictDatas(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('DescribePredictDatas', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} ProjectIds - projectIds. optional.
   * @param {String} NextPageToken - nextPageToken. optional.
   * @param {Long} CurrentPage - currentPage. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   */
  describeProjects(params = {}, options = {}) {
    return this.request('DescribeProjects', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} PredictId - predictId. required.
   * @param {String} ModelId - modelId. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} ProbabilityThreshold - probabilityThreshold. optional.
   * @param {String} NextPageToken - nextPageToken. optional.
   * @param {Long} CurrentPage - currentPage. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   */
  describeStreamPredictResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PredictId')) {
      throw new TypeError('parameter "PredictId" is required');
    }

    if (!hasOwnProperty(params, 'ModelId')) {
      throw new TypeError('parameter "ModelId" is required');
    }

    return this.request('DescribeStreamPredictResult', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} PredictIds - predictIds. optional.
   * @param {String} NextPageToken - nextPageToken. optional.
   * @param {Long} CurrentPage - currentPage. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   */
  describeStreamPredicts(params = {}, options = {}) {
    return this.request('DescribeStreamPredicts', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} IterationId - iterationId. optional.
   * @param {String} TagIds - tagIds. optional.
   * @param {String} NextPageToken - nextPageToken. optional.
   * @param {Long} CurrentPage - currentPage. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   */
  describeTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('DescribeTags', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} IterationId - iterationId. optional.
   * @param {String} TagStatus - tagStatus. optional.
   * @param {String} TagId - tagId. optional.
   * @param {String} NextPageToken - nextPageToken. optional.
   * @param {Long} CurrentPage - currentPage. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   */
  describeTrainDatas(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('DescribeTrainDatas', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} IterationId - iterationId. optional.
   * @param {String} DataIds - dataIds. required.
   */
  describeTrainDatasByIds(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'DataIds')) {
      throw new TypeError('parameter "DataIds" is required');
    }

    return this.request('DescribeTrainDatasByIds', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} IterationId - iterationId. required.
   * @param {String} Threshold - threshold. optional.
   */
  describeTrainResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'IterationId')) {
      throw new TypeError('parameter "IterationId" is required');
    }

    return this.request('DescribeTrainResult', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   */
  modifyProjectAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('ModifyProjectAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} TagId - tagId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   */
  modifyTagAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'TagId')) {
      throw new TypeError('parameter "TagId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('ModifyTagAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} DataId - dataId. required.
   * @param {String} TagItems - tagItems. required.
   */
  modifyTrainDataRegionTagAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'DataId')) {
      throw new TypeError('parameter "DataId" is required');
    }

    if (!hasOwnProperty(params, 'TagItems')) {
      throw new TypeError('parameter "TagItems" is required');
    }

    return this.request('ModifyTrainDataRegionTagAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} DataId - dataId. required.
   * @param {String} TagItems - tagItems. required.
   */
  modifyTrainDataTagAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'DataId')) {
      throw new TypeError('parameter "DataId" is required');
    }

    if (!hasOwnProperty(params, 'TagItems')) {
      throw new TypeError('parameter "TagItems" is required');
    }

    return this.request('ModifyTrainDataTagAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} IterationId - modelId. optional.
   * @param {String} IterationId - iterationId. optional.
   * @param {String} DataUrls - dataUrls. required.
   */
  predictImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'DataUrls')) {
      throw new TypeError('parameter "DataUrls" is required');
    }

    return this.request('PredictImage', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} PredictId - predictId. required.
   */
  startStreamPredict(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PredictId')) {
      throw new TypeError('parameter "PredictId" is required');
    }

    return this.request('StartStreamPredict', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} PredictId - predictId. required.
   */
  stopStreamPredict(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PredictId')) {
      throw new TypeError('parameter "PredictId" is required');
    }

    return this.request('StopStreamPredict', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ShowLog - showLog. optional.
   * @param {String} ProjectId - projectId. required.
   */
  trainProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('TrainProject', params, options);
  }

}

module.exports = Client;

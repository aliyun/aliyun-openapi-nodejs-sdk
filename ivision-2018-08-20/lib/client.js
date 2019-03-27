
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-08-20';
    super(config);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} DataIds - dataIds. required.
   * @param {String} LabelId - labelId. required.
   */
  createDataLabel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'DataIds')) {
      throw new TypeError('parameter "DataIds" is required');
    }

    if (!hasOwnProperty(params, 'LabelId')) {
      throw new TypeError('parameter "LabelId" is required');
    }

    return this.request('CreateDataLabel', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} PreConfig - preConfig. required.
   * @param {String} IterationId - iterationId. required.
   */
  createDatasFromPrediction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'PreConfig')) {
      throw new TypeError('parameter "PreConfig" is required');
    }

    if (!hasOwnProperty(params, 'IterationId')) {
      throw new TypeError('parameter "IterationId" is required');
    }

    return this.request('CreateDatasFromPrediction', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} DataConfig - dataConfig. required.
   */
  createDatasFromUrls(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'DataConfig')) {
      throw new TypeError('parameter "DataConfig" is required');
    }

    return this.request('CreateDatasFromUrls', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   */
  createLabel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateLabel', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} ProType - proType. optional.
   * @param {String} DataType - dataType. optional.
   * @param {String} AlgorithmId - algorithmId. optional.
   * @param {String} modelId - modelId. optional.
   */
  createProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateProject', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} DataIds - dataIds. required.
   */
  deleteData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'DataIds')) {
      throw new TypeError('parameter "DataIds" is required');
    }

    return this.request('DeleteData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} DataIds - dataIds. required.
   * @param {String} LabelId - labelId. required.
   */
  deleteDataLabel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'DataIds')) {
      throw new TypeError('parameter "DataIds" is required');
    }

    if (!hasOwnProperty(params, 'LabelId')) {
      throw new TypeError('parameter "LabelId" is required');
    }

    return this.request('DeleteDataLabel', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
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
   * @param {String} ProjectId - projectId. required.
   * @param {String} LabelId - labelId. required.
   */
  deleteLabel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'LabelId')) {
      throw new TypeError('parameter "LabelId" is required');
    }

    return this.request('DeleteLabel', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} IterationId - iterationId. required.
   * @param {String} DataIds - dataIds. required.
   */
  deletePredictData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'IterationId')) {
      throw new TypeError('parameter "IterationId" is required');
    }

    if (!hasOwnProperty(params, 'DataIds')) {
      throw new TypeError('parameter "DataIds" is required');
    }

    return this.request('DeletePredictData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   */
  describeIvisionServiceStatus(params = {}, options = {}) {
    return this.request('DescribeIvisionServiceStatus', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} IterationId - iterationId. required.
   * @param {String} Threshold - threshold. optional.
   */
  getIterationPerformance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'IterationId')) {
      throw new TypeError('parameter "IterationId" is required');
    }

    return this.request('GetIterationPerformance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} State - state. optional.
   */
  getIterations(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetIterations', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} IterationId - iterationId. optional.
   */
  getLabels(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetLabels', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} IterationId - iterationId. required.
   * @param {String} LabelId - labelId. required.
   * @param {String} Threshold - threshold. optional.
   * @param {String} NextPageToken - nextPageToken. optional.
   * @param {Long} CurrentPage - currentPage. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   */
  getPredictionDatas(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'IterationId')) {
      throw new TypeError('parameter "IterationId" is required');
    }

    if (!hasOwnProperty(params, 'LabelId')) {
      throw new TypeError('parameter "LabelId" is required');
    }

    return this.request('GetPredictionDatas', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} IterationId - iterationId. optional.
   * @param {String} LabelId - labelId. required.
   * @param {String} NextPageToken - nextPageToken. optional.
   * @param {Long} CurrentPage - currentPage. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   */
  getTrainDatas(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'LabelId')) {
      throw new TypeError('parameter "LabelId" is required');
    }

    return this.request('GetTrainDatas', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} FileName - fileName. required.
   */
  getUploadToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    return this.request('GetUploadToken', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} IterationId - iterationId. optional.
   * @param {String} DataId - dataId. required.
   */
  queryDataById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'DataId')) {
      throw new TypeError('parameter "DataId" is required');
    }

    return this.request('QueryDataById', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} State - state. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} NextPageToken - nextPageToken. optional.
   * @param {Long} CurrentPage - currentPage. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   */
  queryLivePredictList(params = {}, options = {}) {
    return this.request('QueryLivePredictList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} PredictId - predictId. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} ModelIds - modelIds. optional.
   * @param {String} NextPageToken - nextPageToken. optional.
   * @param {Long} CurrentPage - currentPage. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   */
  queryLivePredictResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PredictId')) {
      throw new TypeError('parameter "PredictId" is required');
    }

    return this.request('QueryLivePredictResult', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProjectId - projectId. required.
   */
  queryProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('QueryProject', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} IterationId - iterationId. required.
   * @param {String} DataUrls - dataUrls. required.
   */
  quickTestDataUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'IterationId')) {
      throw new TypeError('parameter "IterationId" is required');
    }

    if (!hasOwnProperty(params, 'DataUrls')) {
      throw new TypeError('parameter "DataUrls" is required');
    }

    return this.request('QuickTestDataUrl', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {Long} CurrentPage - currentPage. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   */
  searchProject(params = {}, options = {}) {
    return this.request('SearchProject', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} LiveName - liveName. required.
   * @param {String} LiveUrl - liveUrl. required.
   * @param {String} Config - config. optional.
   * @param {String} Output - output. optional.
   * @param {String} Notify - notify. optional.
   * @param {String} UserData - userData. optional.
   */
  startLivePredict(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LiveName')) {
      throw new TypeError('parameter "LiveName" is required');
    }

    if (!hasOwnProperty(params, 'LiveUrl')) {
      throw new TypeError('parameter "LiveUrl" is required');
    }

    return this.request('StartLivePredict', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} PredictId - predictId. required.
   */
  stopLivePredict(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PredictId')) {
      throw new TypeError('parameter "PredictId" is required');
    }

    return this.request('StopLivePredict', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProjectId - projectId. required.
   */
  trainProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('TrainProject', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} LabelId - labelId. required.
   * @param {String} Name - name. required.
   */
  updateLabel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'LabelId')) {
      throw new TypeError('parameter "LabelId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('UpdateLabel', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   */
  updateProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('UpdateProject', params, options);
  }

}

module.exports = Client;

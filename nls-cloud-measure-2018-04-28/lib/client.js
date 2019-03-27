
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-04-28';
    super(config);
  }

  /**
   */
  accessToken(params = {}, options = {}) {
    return this.request('AccessToken', params, options);
  }

  /**
   */
  agreeAuthorize(params = {}, options = {}) {
    return this.request('AgreeAuthorize', params, options);
  }

  /**
   * @param {Long} ProjectId - projectId. required.
   * @param {Long} SpeechAsrModelId - speechAsrModelId. optional.
   * @param {String} UniqueId - uniqueId. required.
   */
  applyAsrModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'UniqueId')) {
      throw new TypeError('parameter "UniqueId" is required');
    }

    return this.request('ApplyAsrModel', params, options);
  }

  /**
   * @param {Integer} ProjectId - projectId. required.
   * @param {String} SpeakerId - speakerId. optional.
   * @param {Integer} Volume - volume. optional.
   * @param {Integer} SpeechRate - speechRate. optional.
   * @param {Integer} PitchRate - pitchRate. optional.
   */
  applyTtsModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('ApplyTtsModel', params, options);
  }

  /**
   * @param {String} data - data. optional.
   */
  completeOrderParam(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('CompleteOrderParam', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} AsrbaseModelId - asrBaseModelId. optional.
   */
  createProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateProject', params, options);
  }

  /**
   * @param {String} SpeechFormat - speechFormat. required.
   * @param {String} Speaker - speaker. required.
   * @param {String} SpeakerId - speakerId. required.
   * @param {String} SpeechType - speechType. required.
   * @param {String} SpeechFrom - speechFrom. required.
   * @param {String} Volume - volume. required.
   * @param {Integer} SpeechRate - speechRate. required.
   * @param {Integer} PitchRate - pitchRate. required.
   * @param {Integer} SampleRate - sampleRate. required.
   * @param {String} Description - description. required.
   * @param {Integer} TtsBaseModelId - ttsBaseModelId. required.
   * @param {String} Language - language. required.
   */
  createTtsModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SpeechFormat')) {
      throw new TypeError('parameter "SpeechFormat" is required');
    }

    if (!hasOwnProperty(params, 'Speaker')) {
      throw new TypeError('parameter "Speaker" is required');
    }

    if (!hasOwnProperty(params, 'SpeakerId')) {
      throw new TypeError('parameter "SpeakerId" is required');
    }

    if (!hasOwnProperty(params, 'SpeechType')) {
      throw new TypeError('parameter "SpeechType" is required');
    }

    if (!hasOwnProperty(params, 'SpeechFrom')) {
      throw new TypeError('parameter "SpeechFrom" is required');
    }

    if (!hasOwnProperty(params, 'Volume')) {
      throw new TypeError('parameter "Volume" is required');
    }

    if (!hasOwnProperty(params, 'SpeechRate')) {
      throw new TypeError('parameter "SpeechRate" is required');
    }

    if (!hasOwnProperty(params, 'PitchRate')) {
      throw new TypeError('parameter "PitchRate" is required');
    }

    if (!hasOwnProperty(params, 'SampleRate')) {
      throw new TypeError('parameter "SampleRate" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'TtsBaseModelId')) {
      throw new TypeError('parameter "TtsBaseModelId" is required');
    }

    if (!hasOwnProperty(params, 'Language')) {
      throw new TypeError('parameter "Language" is required');
    }

    return this.request('CreateTtsModel', params, options);
  }

  /**
   * @param {Long} SpeechAsrModelId - speechAsrModelId. required.
   */
  deleteAsrModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SpeechAsrModelId')) {
      throw new TypeError('parameter "SpeechAsrModelId" is required');
    }

    return this.request('DeleteAsrModel', params, options);
  }

  /**
   * @param {Long} ProjectId - projectId. optional.
   * @param {Long} SpeechHotWordlId - speechHotWordlId. required.
   */
  deleteData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SpeechHotWordlId')) {
      throw new TypeError('parameter "SpeechHotWordlId" is required');
    }

    return this.request('DeleteData', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  deleteProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteProject', params, options);
  }

  /**
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} FilePath - filePath. required.
   */
  downloadFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FilePath')) {
      throw new TypeError('parameter "FilePath" is required');
    }

    return this.request('DownloadFile', params, options);
  }

  /**
   */
  getAuthorize(params = {}, options = {}) {
    return this.request('GetAuthorize', params, options);
  }

  /**
   * @param {String} Key - key. required.
   */
  getFilePath(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Key')) {
      throw new TypeError('parameter "Key" is required');
    }

    return this.request('GetFilePath', params, options);
  }

  /**
   */
  getFreeModelStatus(params = {}, options = {}) {
    return this.request('GetFreeModelStatus', params, options);
  }

  /**
   * @param {String} StartDate - startDate. optional.
   * @param {String} EndDate - endDate. optional.
   */
  getMeasures(params = {}, options = {}) {
    return this.request('GetMeasures', params, options);
  }

  /**
   */
  getProductStatus(params = {}, options = {}) {
    return this.request('GetProductStatus', params, options);
  }

  /**
   */
  getSampleFilePath(params = {}, options = {}) {
    return this.request('GetSampleFilePath', params, options);
  }

  /**
   */
  getSpeakers(params = {}, options = {}) {
    return this.request('GetSpeakers', params, options);
  }

  /**
   */
  listAsrBaseModels(params = {}, options = {}) {
    return this.request('ListAsrBaseModels', params, options);
  }

  /**
   */
  listAsrModels(params = {}, options = {}) {
    return this.request('ListAsrModels', params, options);
  }

  /**
   */
  listAvailableAsrModels(params = {}, options = {}) {
    return this.request('ListAvailableAsrModels', params, options);
  }

  /**
   */
  listAvailableTtsModels(params = {}, options = {}) {
    return this.request('ListAvailableTtsModels', params, options);
  }

  /**
   */
  listClassData(params = {}, options = {}) {
    return this.request('ListClassData', params, options);
  }

  /**
   * @param {Long} ProjectId - projectId. optional.
   * @param {String} Category - category. optional.
   */
  listData(params = {}, options = {}) {
    return this.request('ListData', params, options);
  }

  /**
   */
  listProducts(params = {}, options = {}) {
    return this.request('ListProducts', params, options);
  }

  /**
   */
  listProfession(params = {}, options = {}) {
    return this.request('ListProfession', params, options);
  }

  /**
   * @param {Integer} Offset - offset. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} ProjectId - projectId. optional.
   */
  listProjects(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Offset')) {
      throw new TypeError('parameter "Offset" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListProjects', params, options);
  }

  /**
   */
  listTtsBaseModels(params = {}, options = {}) {
    return this.request('ListTtsBaseModels', params, options);
  }

  /**
   * @param {String} taskIdentifier - taskIdentifier. optional.
   * @param {Boolean} interrupt - interrupt. optional.
   * @param {String} pk - pk. optional.
   * @param {String} bid - bid. optional.
   * @param {String} hid - hid. optional.
   * @param {String} country - country. optional.
   * @param {String} invoker - invoker. optional.
   * @param {String} taskExtraData - taskExtraData. optional.
   * @param {String} gmtWakeup - gmtWakeup. optional.
   * @param {Boolean} success - success. optional.
   * @param {String} message - message. optional.
   */
  logicalDeleteResource(params = {}, options = {}) {
    return this.request('LogicalDeleteResource', params, options);
  }

  /**
   */
  mergedAsrBaseModels(params = {}, options = {}) {
    return this.request('MergedAsrBaseModels', params, options);
  }

  /**
   * @param {Long} SpeechAsrModelId - speechAsrModelId. required.
   */
  offlineAsrModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SpeechAsrModelId')) {
      throw new TypeError('parameter "SpeechAsrModelId" is required');
    }

    return this.request('OfflineAsrModel', params, options);
  }

  /**
   */
  openFreeModel(params = {}, options = {}) {
    return this.request('OpenFreeModel', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  payOrderCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    options.method = 'POST';
    return this.request('PayOrderCallback', params, options);
  }

  /**
   * @param {String} invoker - invoker. optional.
   * @param {String} taskIdentifier - taskIdentifier. optional.
   * @param {String} pk - pk. optional.
   * @param {String} bid - bid. optional.
   * @param {String} hid - hid. optional.
   * @param {String} country - country. optional.
   * @param {Boolean} interrupt - interrupt. optional.
   * @param {String} taskExtraData - taskExtraData. optional.
   * @param {String} gmtWakeup - gmtWakeup. optional.
   * @param {Boolean} success - success. optional.
   * @param {String} message - message. optional.
   */
  physicalDeleteResource(params = {}, options = {}) {
    return this.request('PhysicalDeleteResource', params, options);
  }

  /**
   * @param {Long} SpeechAsrModelId - speechAsrModelId. required.
   * @param {String} SpeechAsrModelKey - speechAsrModelKey. required.
   */
  publishAsrModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SpeechAsrModelId')) {
      throw new TypeError('parameter "SpeechAsrModelId" is required');
    }

    if (!hasOwnProperty(params, 'SpeechAsrModelKey')) {
      throw new TypeError('parameter "SpeechAsrModelKey" is required');
    }

    return this.request('PublishAsrModel', params, options);
  }

  /**
   */
  refuseAuthorize(params = {}, options = {}) {
    return this.request('RefuseAuthorize', params, options);
  }

  /**
   * @param {Long} SpeechAsrModelId - speechAsrModelId. required.
   */
  trainAsrModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SpeechAsrModelId')) {
      throw new TypeError('parameter "SpeechAsrModelId" is required');
    }

    return this.request('TrainAsrModel', params, options);
  }

  /**
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} Id - id. required.
   * @param {Long} AsrBaseModelId - asrBaseModelId. optional.
   * @param {Long} AsrModelId - asrModelId. optional.
   * @param {Long} PepHotId - pepHotId. optional.
   * @param {Long} GeoHotId - geoHotId. optional.
   * @param {Long} OtherHotId - otherHotId. optional.
   */
  updateProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateProject', params, options);
  }

  /**
   * @param {String} SpeechFormat - speechFormat. required.
   * @param {String} Speaker - speaker. required.
   * @param {String} SpeakerId - speakerId. required.
   * @param {String} SpeechType - speechType. required.
   * @param {String} SpeechFrom - speechFrom. required.
   * @param {String} Volume - volume. required.
   * @param {Integer} SpeechRate - speechRate. required.
   * @param {Integer} PitchRate - pitchRate. required.
   * @param {Integer} SampleRate - sampleRate. required.
   * @param {String} Description - description. required.
   * @param {Integer} TtsBaseModelId - ttsBaseModelId. required.
   * @param {String} Language - language. required.
   */
  updateTtsModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SpeechFormat')) {
      throw new TypeError('parameter "SpeechFormat" is required');
    }

    if (!hasOwnProperty(params, 'Speaker')) {
      throw new TypeError('parameter "Speaker" is required');
    }

    if (!hasOwnProperty(params, 'SpeakerId')) {
      throw new TypeError('parameter "SpeakerId" is required');
    }

    if (!hasOwnProperty(params, 'SpeechType')) {
      throw new TypeError('parameter "SpeechType" is required');
    }

    if (!hasOwnProperty(params, 'SpeechFrom')) {
      throw new TypeError('parameter "SpeechFrom" is required');
    }

    if (!hasOwnProperty(params, 'Volume')) {
      throw new TypeError('parameter "Volume" is required');
    }

    if (!hasOwnProperty(params, 'SpeechRate')) {
      throw new TypeError('parameter "SpeechRate" is required');
    }

    if (!hasOwnProperty(params, 'PitchRate')) {
      throw new TypeError('parameter "PitchRate" is required');
    }

    if (!hasOwnProperty(params, 'SampleRate')) {
      throw new TypeError('parameter "SampleRate" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'TtsBaseModelId')) {
      throw new TypeError('parameter "TtsBaseModelId" is required');
    }

    if (!hasOwnProperty(params, 'Language')) {
      throw new TypeError('parameter "Language" is required');
    }

    return this.request('UpdateTtsModel', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  verify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('Verify', params, options);
  }

  /**
   * @param {String} taskIdentifier - taskIdentifier. optional.
   * @param {String} taskExtraData - taskExtraData. optional.
   * @param {String} gmtWakeup - gmtWakeup. optional.
   * @param {String} hid - hid. optional.
   * @param {String} bid - bid. optional.
   * @param {String} message - message. optional.
   * @param {Boolean} success - success. optional.
   * @param {Boolean} interrupt - interrupt. optional.
   * @param {String} country - country. optional.
   * @param {String} pk - pk. optional.
   */
  doCheckResource(params = {}, options = {}) {
    return this.request('doCheckResource', params, options);
  }

}

module.exports = Client;

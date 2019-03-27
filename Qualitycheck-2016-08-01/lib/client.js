
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-08-01';
    super(config);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  addBusinessCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('AddBusinessCategory', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  addThesaurusForApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('AddThesaurusForApi', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  createAsrVocab(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('CreateAsrVocab', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  delThesaurusForApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('DelThesaurusForApi', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  deleteAsrVocab(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('DeleteAsrVocab', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  deleteBusinessCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('DeleteBusinessCategory', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  deleteScoreForApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('DeleteScoreForApi', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  deleteSubScoreForApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('DeleteSubScoreForApi', params, options);
  }

  /**
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. optional.
   * @param {Long} Hid - hid. optional.
   * @param {String} Country - country. optional.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   * @param {String} TaskExtraData - taskExtraData. optional.
   * @param {String} GmtWakeup - gmtWakeup. optional.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   * @param {Long} Level - level. optional.
   * @param {String} Prompt - prompt. optional.
   */
  doCheckResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    return this.request('DoCheckResource', params, options);
  }

  /**
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. optional.
   * @param {Long} Hid - hid. optional.
   * @param {String} Country - country. optional.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   * @param {String} TaskExtraData - taskExtraData. optional.
   * @param {String} GmtWakeup - gmtWakeup. optional.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   */
  doLogicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    return this.request('DoLogicalDeleteResource', params, options);
  }

  /**
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. optional.
   * @param {Long} Hid - hid. optional.
   * @param {String} Country - country. optional.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   * @param {String} TaskExtraData - taskExtraData. optional.
   * @param {String} GmtWakeup - gmtWakeup. optional.
   * @param {Boolean} Success - success. optional.
   */
  doPhysicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    return this.request('DoPhysicalDeleteResource', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  editThesaurusForApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('EditThesaurusForApi', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  executeAsrTransform(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('ExecuteAsrTransform', params, options);
  }

  /**
   */
  generateCustomizationModelId(params = {}, options = {}) {
    return this.request('GenerateCustomizationModelId', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  getAccAsrResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('GetAccAsrResult', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  getAsrVocab(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('GetAsrVocab', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  getAudioDataStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('GetAudioDataStatus', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  getBusinessCategoryList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('GetBusinessCategoryList', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  getCustomizationConfigList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('GetCustomizationConfigList', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  getDataSetList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('GetDataSetList', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  getFileDimension(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('GetFileDimension', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  getResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('GetResult', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  getResultCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('GetResultCount', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  getReviewInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('GetReviewInfo', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  getRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('GetRule', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  getRuleDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('GetRuleDetail', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  getRuleDimension(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('GetRuleDimension', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  getScoreInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('GetScoreInfo', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  getThesaurusBySynonymForApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('GetThesaurusBySynonymForApi', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  insertScoreForApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('InsertScoreForApi', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  insertSubScoreForApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('InsertSubScoreForApi', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  invalidRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('InvalidRule', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  listDataSetTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('ListDataSetTask', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  registerNotice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('RegisterNotice', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  saveReviewResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('SaveReviewResult', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  submitReviewInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('SubmitReviewInfo', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  testNetwork(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('TestNetwork', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  updateAsrVocab(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('UpdateAsrVocab', params, options);
  }

  /**
   * @param {String} data - jsonStr. required.
   */
  updateOnPurchaseSuccess(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('UpdateOnPurchaseSuccess', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  updateRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('UpdateRule', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  updateRuleForAnt(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('UpdateRuleForAnt', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  updateScoreForApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('UpdateScoreForApi', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  updateSubScoreForApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('UpdateSubScoreForApi', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  uploadAudioData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('UploadAudioData', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  uploadAudioData4Pre(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('UploadAudioData4Pre', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  uploadAudioDataWithRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('UploadAudioDataWithRules', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  uploadAudioDataWithRules4Pre(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('UploadAudioDataWithRules4Pre', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  uploadData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('UploadData', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  uploadDataSync(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('UploadDataSync', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  uploadDataWithRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('UploadDataWithRules', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  uploadRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('UploadRule', params, options);
  }

  /**
   * @param {String} JsonStr - jsonStr. required.
   */
  uploadRuleForAnt(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonStr')) {
      throw new TypeError('parameter "JsonStr" is required');
    }

    return this.request('UploadRuleForAnt', params, options);
  }

}

module.exports = Client;

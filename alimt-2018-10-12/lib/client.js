
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-10-12';
    super(config);
  }

  /**
   * @param {String} AppName - appName. required.
   * @param {String} Name - name. required.
   * @param {String} OssPath - ossPath. required.
   * @param {String} SourceLanguage - sourceLanguage. required.
   * @param {String} TargetLanguage - targetLanguage. required.
   */
  createInterventionTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'OssPath')) {
      throw new TypeError('parameter "OssPath" is required');
    }

    if (!hasOwnProperty(params, 'SourceLanguage')) {
      throw new TypeError('parameter "SourceLanguage" is required');
    }

    if (!hasOwnProperty(params, 'TargetLanguage')) {
      throw new TypeError('parameter "TargetLanguage" is required');
    }

    return this.request('CreateInterventionTask', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  deleteIntervention(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteIntervention', params, options);
  }

  /**
   * @param {String} IdList - idList. required.
   */
  deleteInterventionData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IdList')) {
      throw new TypeError('parameter "IdList" is required');
    }

    return this.request('DeleteInterventionData', params, options);
  }

  /**
   * @param {Long} InterventionId - interventionId. optional.
   * @param {String} AppName - appName. optional.
   * @param {String} Name - name. optional.
   * @param {String} SourceLanguage - sourceLanguage. optional.
   * @param {String} TargetLanguage - targetLanguage. optional.
   * @param {String} SourceText - sourceText. optional.
   * @param {String} TargetText - targetText. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNum - pageNum. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  findInterventionData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('FindInterventionData', params, options);
  }

  /**
   * @param {Integer} PageNum - pageNum. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} AppName - appName. optional.
   * @param {String} SourceLanguage - sourceLanguage. optional.
   * @param {String} TargetLanguage - targetLanguage. optional.
   * @param {String} Status - status. optional.
   * @param {String} Name - name. optional.
   */
  findInterventionTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('FindInterventionTask', params, options);
  }

  /**
   */
  getOssInfo(params = {}, options = {}) {
    return this.request('GetOssInfo', params, options);
  }

  /**
   * @param {String} BeginTime - beginTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} ApiName - apiName. required.
   * @param {String} Group - group. required.
   */
  getTranslateReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BeginTime')) {
      throw new TypeError('parameter "BeginTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'ApiName')) {
      throw new TypeError('parameter "ApiName" is required');
    }

    if (!hasOwnProperty(params, 'Group')) {
      throw new TypeError('parameter "Group" is required');
    }

    return this.request('GetTranslateReport', params, options);
  }

  /**
   * @param {String} data - cssProduce. optional.
   */
  payOrderCallback(params = {}, options = {}) {
    return this.request('PayOrderCallback', params, options);
  }

  /**
   * @param {Integer} PageNum - pageNum. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryResourcePackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryResourcePackage', params, options);
  }

  /**
   * @param {Long} InterventionId - interventionId. required.
   * @param {String} SourceText - sourceText. required.
   * @param {String} TargetText - targetText. required.
   * @param {String} AppName - appName. required.
   * @param {String} Name - name. required.
   * @param {String} SourceLanguage - sourceLanguage. required.
   * @param {String} TargetLanguage - targetLanguage. required.
   */
  saveInterventionData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InterventionId')) {
      throw new TypeError('parameter "InterventionId" is required');
    }

    if (!hasOwnProperty(params, 'SourceText')) {
      throw new TypeError('parameter "SourceText" is required');
    }

    if (!hasOwnProperty(params, 'TargetText')) {
      throw new TypeError('parameter "TargetText" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'SourceLanguage')) {
      throw new TypeError('parameter "SourceLanguage" is required');
    }

    if (!hasOwnProperty(params, 'TargetLanguage')) {
      throw new TypeError('parameter "TargetLanguage" is required');
    }

    return this.request('SaveInterventionData', params, options);
  }

  /**
   * @param {String} FormatType - formatType. required.
   * @param {String} TargetLanguage - targetLanguage. required.
   * @param {String} SourceLanguage - sourceLanguage. required.
   * @param {String} SourceText - sourceText. required.
   * @param {String} Scene - scene. required.
   */
  translateECommerce(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FormatType')) {
      throw new TypeError('parameter "FormatType" is required');
    }

    if (!hasOwnProperty(params, 'TargetLanguage')) {
      throw new TypeError('parameter "TargetLanguage" is required');
    }

    if (!hasOwnProperty(params, 'SourceLanguage')) {
      throw new TypeError('parameter "SourceLanguage" is required');
    }

    if (!hasOwnProperty(params, 'SourceText')) {
      throw new TypeError('parameter "SourceText" is required');
    }

    if (!hasOwnProperty(params, 'Scene')) {
      throw new TypeError('parameter "Scene" is required');
    }

    return this.request('TranslateECommerce', params, options);
  }

  /**
   * @param {String} FormatType - formatType. required.
   * @param {String} SourceLanguage - sourceLanguage. required.
   * @param {String} TargetLanguage - targetLanguage. required.
   * @param {String} SourceText - sourceText. required.
   * @param {String} Scene - scene. optional. default: general.
   */
  translateGeneral(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FormatType')) {
      throw new TypeError('parameter "FormatType" is required');
    }

    if (!hasOwnProperty(params, 'SourceLanguage')) {
      throw new TypeError('parameter "SourceLanguage" is required');
    }

    if (!hasOwnProperty(params, 'TargetLanguage')) {
      throw new TypeError('parameter "TargetLanguage" is required');
    }

    if (!hasOwnProperty(params, 'SourceText')) {
      throw new TypeError('parameter "SourceText" is required');
    }

    return this.request('TranslateGeneral', params, options);
  }

  /**
   * @param {String} OssPath - ossPath. required.
   */
  translateInterventionDataReview(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OssPath')) {
      throw new TypeError('parameter "OssPath" is required');
    }

    return this.request('TranslateInterventionDataReview', params, options);
  }

  /**
   * @param {Long} Id - id. optional.
   * @param {String} SourceText - sourceText. optional.
   * @param {String} TargetText - targetText. optional.
   */
  updateInterventionData(params = {}, options = {}) {
    return this.request('UpdateInterventionData', params, options);
  }

}

module.exports = Client;

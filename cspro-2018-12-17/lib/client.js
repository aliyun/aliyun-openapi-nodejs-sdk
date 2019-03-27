
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-12-17';
    super(config);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} ConfType - confType. required.
   * @param {String} CheckTarget - checkTarget. required.
   * @param {RepeatList} CheckDetailDTOList - checkDetailDTOList. required.
   * @param {Json} Extras - extras. optional.
   */
  addOmniSecCheckConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ConfType')) {
      throw new TypeError('parameter "ConfType" is required');
    }

    if (!hasOwnProperty(params, 'CheckTarget')) {
      throw new TypeError('parameter "CheckTarget" is required');
    }

    if (!hasOwnProperty(params, 'CheckDetailDTOList')) {
      throw new TypeError('parameter "CheckDetailDTOList" is required');
    }

    options.method = 'POST';
    return this.request('AddOmniSecCheckConfig', params, options);
  }

  /**
   * @param {String} Type - type. required.
   * @param {Long} LibId - libId. required.
   * @param {RepeatList} Contents - contents. required.
   */
  addSecCheckSample(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'LibId')) {
      throw new TypeError('parameter "LibId" is required');
    }

    if (!hasOwnProperty(params, 'Contents')) {
      throw new TypeError('parameter "Contents" is required');
    }

    options.method = 'POST';
    return this.request('AddSecCheckSample', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} Type - type. required.
   * @param {String} Scene - scene. optional.
   * @param {String} ResultType - resultType. optional.
   */
  addSecCheckSampleLib(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    options.method = 'POST';
    return this.request('AddSecCheckSampleLib', params, options);
  }

  /**
   */
  authSecCheckSamplePicUpload(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('AuthSecCheckSamplePicUpload', params, options);
  }

  /**
   * @param {Long} ConfId - confId. required.
   */
  delOmniSecCheckConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConfId')) {
      throw new TypeError('parameter "ConfId" is required');
    }

    options.method = 'POST';
    return this.request('DelOmniSecCheckConfig', params, options);
  }

  /**
   * @param {Long} LibId - libId. required.
   * @param {String} Type - type. required.
   * @param {RepeatList} SampleIds - sampleIds. required.
   */
  delSecCheckSample(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LibId')) {
      throw new TypeError('parameter "LibId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'SampleIds')) {
      throw new TypeError('parameter "SampleIds" is required');
    }

    options.method = 'POST';
    return this.request('DelSecCheckSample', params, options);
  }

  /**
   * @param {Long} LibId - libId. required.
   * @param {String} Type - type. required.
   */
  delSecCheckSampleLib(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LibId')) {
      throw new TypeError('parameter "LibId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    options.method = 'POST';
    return this.request('DelSecCheckSampleLib', params, options);
  }

  /**
   * @param {Long} ResultId - resultId. required.
   * @param {String} RiskType - riskType. required.
   * @param {String} RiskSource - riskSource. required.
   */
  getSecCheckResultDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResultId')) {
      throw new TypeError('parameter "ResultId" is required');
    }

    if (!hasOwnProperty(params, 'RiskType')) {
      throw new TypeError('parameter "RiskType" is required');
    }

    if (!hasOwnProperty(params, 'RiskSource')) {
      throw new TypeError('parameter "RiskSource" is required');
    }

    return this.request('GetSecCheckResultDetail', params, options);
  }

  /**
   * @param {String} SnapshotInfo - snapshotInfo. required.
   */
  getSnapshotInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SnapshotInfo')) {
      throw new TypeError('parameter "SnapshotInfo" is required');
    }

    return this.request('GetSnapshotInfo', params, options);
  }

  /**
   * @param {String} ConfType - confType. required.
   * @param {String} CheckType - checkType. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  querySecCheckLatestSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConfType')) {
      throw new TypeError('parameter "ConfType" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QuerySecCheckLatestSummary', params, options);
  }

  /**
   * @param {String} ConfType - confType. required.
   * @param {String} CheckType - checkType. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} CheckTarget - checkTarget. optional.
   * @param {Long} StartDate - startDate. required.
   * @param {Long} EndDate - endDate. required.
   */
  querySecCheckResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConfType')) {
      throw new TypeError('parameter "ConfType" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('QuerySecCheckResult', params, options);
  }

  /**
   * @param {Long} LibId - libId. required.
   * @param {String} Type - type. required.
   */
  querySecCheckSamples(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LibId')) {
      throw new TypeError('parameter "LibId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('QuerySecCheckSamples', params, options);
  }

  /**
   * @param {String} Name - name. optional.
   * @param {RepeatList} CheckDetailDTOList - checkDetailDTOList. optional.
   * @param {Json} Extras - extras. optional.
   * @param {Long} ConfId - confId. required.
   * @param {Boolean} Valid - valid. optional.
   */
  updateOmniSecCheckConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConfId')) {
      throw new TypeError('parameter "ConfId" is required');
    }

    options.method = 'POST';
    return this.request('UpdateOmniSecCheckConfig', params, options);
  }

}

module.exports = Client;

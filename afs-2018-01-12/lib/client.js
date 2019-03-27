
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-01-12';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} ScoreJsonStr - scoreJsonStr. required.
   * @param {String} Data - data. required.
   */
  analyzeNvc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScoreJsonStr')) {
      throw new TypeError('parameter "ScoreJsonStr" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    return this.request('AnalyzeNvc', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} SessionId - sessionId. required.
   * @param {String} AppKey - appKey. optional.
   * @param {String} Sig - sig. optional.
   * @param {String} Token - token. optional.
   * @param {String} Scene - scene. optional.
   * @param {String} RemoteIp - remoteIp. optional.
   */
  authenticateSig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SessionId')) {
      throw new TypeError('parameter "SessionId" is required');
    }

    return this.request('AuthenticateSig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} ApplyType - applyType. required.
   * @param {String} Scene - scene. required.
   * @param {String} ConfigurationMethod - configurationMethod. required.
   * @param {String} RefExtId - refExtId. optional.
   */
  configurationStyle(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApplyType')) {
      throw new TypeError('parameter "ApplyType" is required');
    }

    if (!hasOwnProperty(params, 'Scene')) {
      throw new TypeError('parameter "Scene" is required');
    }

    if (!hasOwnProperty(params, 'ConfigurationMethod')) {
      throw new TypeError('parameter "ConfigurationMethod" is required');
    }

    return this.request('ConfigurationStyle', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} ConfigurationName - configurationName. required.
   * @param {String} ApplyType - applyType. required.
   * @param {String} Scene - scene. required.
   * @param {String} MaxPV - maxPV. required.
   * @param {String} ConfigurationMethod - configurationMethod. required.
   */
  createConfiguration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConfigurationName')) {
      throw new TypeError('parameter "ConfigurationName" is required');
    }

    if (!hasOwnProperty(params, 'ApplyType')) {
      throw new TypeError('parameter "ApplyType" is required');
    }

    if (!hasOwnProperty(params, 'Scene')) {
      throw new TypeError('parameter "Scene" is required');
    }

    if (!hasOwnProperty(params, 'MaxPV')) {
      throw new TypeError('parameter "MaxPV" is required');
    }

    if (!hasOwnProperty(params, 'ConfigurationMethod')) {
      throw new TypeError('parameter "ConfigurationMethod" is required');
    }

    return this.request('CreateConfiguration', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} ConfigName - configName. optional.
   * @param {String} Type - type. required.
   * @param {String} Time - time. required.
   * @param {String} RefExtId - refExtId. optional.
   */
  describeCaptchaDay(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    return this.request('DescribeCaptchaDay', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} ConfigName - configName. optional.
   * @param {String} Type - type. required.
   * @param {String} Time - time. required.
   * @param {String} RefExtId - refExtId. optional.
   */
  describeCaptchaIpCity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    return this.request('DescribeCaptchaIpCity', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} ConfigName - configName. optional.
   * @param {String} Type - type. required.
   * @param {String} Time - time. required.
   * @param {String} RefExtId - refExtId. optional.
   */
  describeCaptchaMin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    return this.request('DescribeCaptchaMin', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeCaptchaOrder(params = {}, options = {}) {
    return this.request('DescribeCaptchaOrder', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} ConfigName - configName. optional.
   * @param {String} Time - time. required.
   * @param {String} RefExtId - refExtId. optional.
   */
  describeCaptchaRisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    return this.request('DescribeCaptchaRisk', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeConfigName(params = {}, options = {}) {
    return this.request('DescribeConfigName', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeEarlyWarning(params = {}, options = {}) {
    return this.request('DescribeEarlyWarning', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeOrderInfo(params = {}, options = {}) {
    return this.request('DescribeOrderInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describePersonMachineList(params = {}, options = {}) {
    return this.request('DescribePersonMachineList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Boolean} WarnOpen - warnOpen. required.
   * @param {String} Channel - channel. required.
   * @param {String} Frequency - frequency. required.
   * @param {Boolean} TimeOpen - timeOpen. required.
   * @param {String} TimeBegin - timeBegin. required.
   * @param {String} TimeEnd - timeEnd. required.
   * @param {String} Title - title. required.
   */
  setEarlyWarning(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WarnOpen')) {
      throw new TypeError('parameter "WarnOpen" is required');
    }

    if (!hasOwnProperty(params, 'Channel')) {
      throw new TypeError('parameter "Channel" is required');
    }

    if (!hasOwnProperty(params, 'Frequency')) {
      throw new TypeError('parameter "Frequency" is required');
    }

    if (!hasOwnProperty(params, 'TimeOpen')) {
      throw new TypeError('parameter "TimeOpen" is required');
    }

    if (!hasOwnProperty(params, 'TimeBegin')) {
      throw new TypeError('parameter "TimeBegin" is required');
    }

    if (!hasOwnProperty(params, 'TimeEnd')) {
      throw new TypeError('parameter "TimeEnd" is required');
    }

    if (!hasOwnProperty(params, 'Title')) {
      throw new TypeError('parameter "Title" is required');
    }

    return this.request('SetEarlyWarning', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} RefExtId - refExtId. required.
   * @param {String} ConfigName - configName. required.
   */
  updateConfigName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RefExtId')) {
      throw new TypeError('parameter "RefExtId" is required');
    }

    if (!hasOwnProperty(params, 'ConfigName')) {
      throw new TypeError('parameter "ConfigName" is required');
    }

    return this.request('UpdateConfigName', params, options);
  }

}

module.exports = Client;

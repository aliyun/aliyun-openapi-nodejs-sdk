
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2019-02-19';
    super(config);
  }

  /**
   * @param {RepeatList} Dimensions - dimensions. optional.
   * @param {Integer} IntervalInSec - intervalInSec. required.
   * @param {String} DateStr - dateStr. optional.
   * @param {Long} MinTime - minTime. required.
   * @param {Long} MaxTime - maxTime. required.
   * @param {Boolean} IsDrillDown - isDrillDown. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {RepeatList} Measures - measures. optional.
   * @param {String} OrderByKey - orderByKey. optional.
   * @param {Integer} Limit - limit. optional.
   * @param {Boolean} ReduceTail - reduceTail. optional.
   * @param {Boolean} HungryMode - hungryMode. optional.
   * @param {RepeatList} RequiredDims - requiredDims. optional.
   * @param {Long} DatasetId - datasetId. required.
   * @param {RepeatList} OptionalDims - optionalDims. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} RegionId - regionId. optional.
   */
  aRMSQueryDataSet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IntervalInSec')) {
      throw new TypeError('parameter "IntervalInSec" is required');
    }

    if (!hasOwnProperty(params, 'MinTime')) {
      throw new TypeError('parameter "MinTime" is required');
    }

    if (!hasOwnProperty(params, 'MaxTime')) {
      throw new TypeError('parameter "MaxTime" is required');
    }

    if (!hasOwnProperty(params, 'DatasetId')) {
      throw new TypeError('parameter "DatasetId" is required');
    }

    return this.request('ARMSQueryDataSet', params, options);
  }

  /**
   * @param {String} AppId - appId. optional.
   * @param {String} AppName - appName. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} Type - type. required.
   * @param {String} Source - source. required.
   * @param {String} Config - config. optional.
   */
  createApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Source')) {
      throw new TypeError('parameter "Source" is required');
    }

    return this.request('CreateApp', params, options);
  }

  /**
   * @param {String} data - data. optional.
   * @param {String} RegionId - regionId. optional.
   */
  delResourcesByAccountId(params = {}, options = {}) {
    return this.request('DelResourcesByAccountId', params, options);
  }

  /**
   * @param {String} AppId - appId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} Type - type. required.
   */
  deleteApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('DeleteApp', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} AppType - appType. optional.
   */
  getServices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('GetServices', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ServiceName - serviceName. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   */
  getSpanNames(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('GetSpanNames', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} SpanName - spanName. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   */
  getTagKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('GetTagKey', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} SpanName - spanName. optional.
   * @param {String} TagKey - tagKey. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   */
  getTagVal(params = {}, options = {}) {
    return this.request('GetTagVal', params, options);
  }

  /**
   * @param {String} TraceID - traceID. required.
   * @param {String} AppType - appType. optional.
   * @param {String} RegionId - regionId. required.
   */
  getTrace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TraceID')) {
      throw new TypeError('parameter "TraceID" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('GetTrace', params, options);
  }

  /**
   * @param {RepeatList} Filters - filters. optional.
   * @param {Integer} IintervalInSec - intervalInSec. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Metric - metric. required.
   * @param {RepeatList} Measures - measures. required.
   * @param {RepeatList} Dimensions - dimensions. optional.
   * @param {String} OrderBy - orderBy. optional.
   * @param {Integer} Limit - limit. optional.
   * @param {String} Order - order. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   */
  metricQuery(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Metric')) {
      throw new TypeError('parameter "Metric" is required');
    }

    if (!hasOwnProperty(params, 'Measures')) {
      throw new TypeError('parameter "Measures" is required');
    }

    return this.request('MetricQuery', params, options);
  }

  /**
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} OperationName - operationName. optional.
   * @param {Long} MinDuration - minDuration. optional.
   * @param {String} AppType - appType. optional.
   * @param {RepeatList} Tag - tags. optional.
   */
  searchTraces(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('SearchTraces', params, options);
  }

}

module.exports = Client;

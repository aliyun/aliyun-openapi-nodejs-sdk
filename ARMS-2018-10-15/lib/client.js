
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-10-15';
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

}

module.exports = Client;

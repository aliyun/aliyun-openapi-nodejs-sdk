
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-11-25';
    super(config);
  }

  /**
   * @param {Long} DatasetId - datasetId. required.
   * @param {Integer} IntervalInSec - intervalInSec. required.
   * @param {Long} DateStr - dateStr. optional.
   * @param {Long} MinTime - minTime. required.
   * @param {Long} MaxTime - maxTime. required.
   * @param {RepeatList} Dimensions - dimensions. optional.
   * @param {RepeatList} Measures - measures. optional.
   * @param {Boolean} IsDrillDown - isDrillDown. optional.
   * @param {String} OrderByKey - orderByKey. optional.
   * @param {Integer} Limit - limit. optional.
   * @param {Boolean} ReduceTail - reduceTail. optional.
   * @param {Boolean} HungryMode - hungryMode. optional.
   * @param {RepeatList} RequiredDims - requiredDims. optional.
   * @param {RepeatList} OptionalDims - optionalDims. optional.
   */
  aRMSQueryDataSet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DatasetId')) {
      throw new TypeError('parameter "DatasetId" is required');
    }

    if (!hasOwnProperty(params, 'IntervalInSec')) {
      throw new TypeError('parameter "IntervalInSec" is required');
    }

    if (!hasOwnProperty(params, 'MinTime')) {
      throw new TypeError('parameter "MinTime" is required');
    }

    if (!hasOwnProperty(params, 'MaxTime')) {
      throw new TypeError('parameter "MaxTime" is required');
    }

    return this.request('ARMSQueryDataSet', params, options);
  }

  /**
   * @param {Long} DatasetId - datasetId. required.
   * @param {Integer} IntervalInSec - intervalInSec. required.
   * @param {String} DateStr - dateStr. optional.
   * @param {Long} MinTime - minTime. required.
   * @param {Long} MaxTime - maxTime. required.
   * @param {RepeatList} Dimensions - dimensions. optional.
   * @param {String} WhereInKey - whereInKey. optional.
   * @param {RepeatList} WhereInValues - whereInValues. optional.
   * @param {RepeatList} Measures - measures. optional.
   * @param {Boolean} IsDrillDown - isDrillDown. optional.
   * @param {String} OrderByKey - orderByKey. optional.
   * @param {Integer} Limit - limit. optional.
   * @param {Boolean} ReduceTail - reduceTail. optional.
   */
  whereInDimQuery(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DatasetId')) {
      throw new TypeError('parameter "DatasetId" is required');
    }

    if (!hasOwnProperty(params, 'IntervalInSec')) {
      throw new TypeError('parameter "IntervalInSec" is required');
    }

    if (!hasOwnProperty(params, 'MinTime')) {
      throw new TypeError('parameter "MinTime" is required');
    }

    if (!hasOwnProperty(params, 'MaxTime')) {
      throw new TypeError('parameter "MaxTime" is required');
    }

    return this.request('WhereInDimQuery', params, options);
  }

}

module.exports = Client;

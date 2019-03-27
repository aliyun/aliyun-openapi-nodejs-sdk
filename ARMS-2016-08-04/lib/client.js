
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-08-04';
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
   */
  armsQueryDataSet(params = {}, options = {}) {
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

    return this.request('ArmsQueryDataSet', params, options);
  }

}

module.exports = Client;

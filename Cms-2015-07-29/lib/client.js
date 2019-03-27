
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-07-29';
    super(config);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} Namespace - namespace. optional.
   * @param {String} MetricName - metricName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} Period - period. optional.
   * @param {String} Statistics - statistics. optional.
   * @param {String} GroupName - groupName. optional.
   * @param {String} NextToken - nextToken. optional.
   * @param {Integer} Length - length. optional.
   */
  describeMetricDatum(params = {}, options = {}) {
    return this.request('DescribeMetricDatum', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} Namespace - namespace. required.
   * @param {String} Metrics - metrics. required.
   */
  putMetricDatum(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Namespace')) {
      throw new TypeError('parameter "Namespace" is required');
    }

    if (!hasOwnProperty(params, 'Metrics')) {
      throw new TypeError('parameter "Metrics" is required');
    }

    return this.request('PutMetricDatum', params, options);
  }

}

module.exports = Client;

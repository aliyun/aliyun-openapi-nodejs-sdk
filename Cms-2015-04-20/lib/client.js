
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-04-20';
    super(config);
  }

  /**
   * @param {String} Namespace - namespace. required.
   * @param {String} MetricName - metricName. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} Period - period. optional.
   * @param {String} Statistics - statistics. optional.
   * @param {String} GroupName - groupName. optional.
   * @param {String} NextToken - nextToken. optional.
   * @param {Integer} Length - length. optional.
   */
  describeMetricDatum(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Namespace')) {
      throw new TypeError('parameter "Namespace" is required');
    }

    if (!hasOwnProperty(params, 'MetricName')) {
      throw new TypeError('parameter "MetricName" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    return this.request('DescribeMetricDatum', params, options);
  }

}

module.exports = Client;

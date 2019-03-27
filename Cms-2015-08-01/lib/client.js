
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-08-01';
    super(config);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricStreamName - metricStreamName. optional.
   * @param {String} Sqls - sqls. optional.
   */
  batchCreateMetrics(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('BatchCreateMetrics', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   * @param {String} Sqls - sqls. optional.
   * @param {Integer} IsPublic - isPublic. optional.
   */
  batchCreateSqlMetrics(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('BatchCreateSqlMetrics', params, options);
  }

  /**
   * @param {String} DimTableName - dimTableName. optional.
   * @param {String} Body - body. optional.
   */
  batchPutDimTableData(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('BatchPutDimTableData', params, options);
  }

  /**
   * @param {String} DimTableName - dimTableName. optional.
   * @param {String} Body - body. optional.
   */
  batchPutDimTableData123(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('BatchPutDimTableData123', params, options);
  }

  /**
   * @param {String} Project - project. optional.
   * @param {String} Metric - metric. optional.
   * @param {String} Period - period. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} Extend - extend. optional.
   * @param {String} Filter - filter. optional.
   */
  batchQueryMetric(params = {}, options = {}) {
    return this.request('BatchQueryMetric', params, options);
  }

  /**
   * @param {String} DimTable - dimTable. optional.
   */
  createDimTable(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('CreateDimTable', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricStream - metricStream. optional.
   */
  createMetricStream(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('CreateMetricStream', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricStreamName - metricStreamName. optional.
   * @param {String} Metrics - metrics. optional.
   */
  createMetrics(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('CreateMetrics', params, options);
  }

  /**
   * @param {String} Project - project. optional.
   */
  createProject(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('CreateProject', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   * @param {String} Sql - sql. optional.
   * @param {Integer} IsPublic - isPublic. optional.
   */
  createSQLMetrics(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('CreateSQLMetrics', params, options);
  }

  /**
   * @param {String} DimTableName - dimTableName. optional.
   */
  deleteDimTable(params = {}, options = {}) {
    return this.request('DeleteDimTable', params, options);
  }

  /**
   * @param {String} DimTableName - dimTableName. optional.
   * @param {String} Key - key. optional.
   */
  deleteDimTableData(params = {}, options = {}) {
    return this.request('DeleteDimTableData', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricStreamName - metricStreamName. optional.
   */
  deleteMetricStream(params = {}, options = {}) {
    return this.request('DeleteMetricStream', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricName - metricName. optional.
   */
  deleteMetrics(params = {}, options = {}) {
    return this.request('DeleteMetrics', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   */
  deleteProject(params = {}, options = {}) {
    return this.request('DeleteProject', params, options);
  }

  /**
   * @param {String} Project - project. required.
   * @param {String} Metric - metric. required.
   * @param {String} Period - period. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Dimensions - dimensions. optional.
   */
  describeMetric(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'Metric')) {
      throw new TypeError('parameter "Metric" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    return this.request('DescribeMetric', params, options);
  }

  /**
   * @param {String} Project - project. optional.
   * @param {String} Metric - metric. optional.
   * @param {String} Period - period. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} Page - page. optional.
   * @param {String} Length - length. optional.
   * @param {String} Extend - extend. optional.
   */
  describeMetricDatum(params = {}, options = {}) {
    return this.request('DescribeMetricDatum', params, options);
  }

  /**
   * @param {String} Project - project. optional.
   * @param {String} Metric - metric. optional.
   * @param {String} Period - period. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} Page - page. optional.
   * @param {String} Length - length. optional.
   */
  describeMetricList(params = {}, options = {}) {
    return this.request('DescribeMetricList', params, options);
  }

  /**
   * @param {String} DimTableName - dimTableName. optional.
   */
  getDimTable(params = {}, options = {}) {
    return this.request('GetDimTable', params, options);
  }

  /**
   * @param {String} Namespace - namespace. optional.
   * @param {String} MetricName - metricName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {Integer} NextToken - nextToken. optional.
   * @param {Integer} Length - length. optional.
   */
  getMetricStatistics(params = {}, options = {}) {
    return this.request('GetMetricStatistics', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricStreamName - metricStreamName. optional.
   */
  getMetricStream(params = {}, options = {}) {
    return this.request('GetMetricStream', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricStreamName - metricStreamName. optional.
   */
  getMetricStreamMeta(params = {}, options = {}) {
    return this.request('GetMetricStreamMeta', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricStreamName - metricStreamName. optional.
   */
  getMetricStreamStatus(params = {}, options = {}) {
    return this.request('GetMetricStreamStatus', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricStreamName - metricStreamName. optional.
   * @param {String} MetricName - metricName. optional.
   */
  getMetrics(params = {}, options = {}) {
    return this.request('GetMetrics', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricName - metricName. optional.
   */
  getMetricsMeta(params = {}, options = {}) {
    return this.request('GetMetricsMeta', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   */
  getProject(params = {}, options = {}) {
    return this.request('GetProject', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricName - metricName. optional.
   */
  getSQLMetrics(params = {}, options = {}) {
    return this.request('GetSQLMetrics', params, options);
  }

  /**
   * @param {String} DimTableName - dimTableName. optional.
   * @param {Long} Page - page. optional.
   * @param {Long} PageSize - pageSize. optional.
   */
  listDimTable(params = {}, options = {}) {
    return this.request('ListDimTable', params, options);
  }

  /**
   * @param {String} DimTableName - dimTableName. optional.
   * @param {String} Key - key. optional.
   */
  listDimTableData(params = {}, options = {}) {
    return this.request('ListDimTableData', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricStreamName - metricStreamName. optional.
   * @param {Long} Page - page. optional.
   * @param {Long} PageSize - pageSize. optional.
   */
  listMetricStream(params = {}, options = {}) {
    return this.request('ListMetricStream', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricStreamName - metricStreamName. optional.
   * @param {String} MetricName - metricName. optional.
   * @param {Long} Page - page. optional.
   * @param {Long} PageSize - pageSize. optional.
   */
  listMetrics(params = {}, options = {}) {
    return this.request('ListMetrics', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricStreamName - metricStreamName. optional.
   * @param {String} MetricName - metricName. optional.
   * @param {Long} Page - page. optional.
   * @param {Long} PageSize - pageSize. optional.
   */
  listMetricsPlan(params = {}, options = {}) {
    return this.request('ListMetricsPlan', params, options);
  }

  /**
   * @param {String} ProjectOwner - projectOwner. optional.
   * @param {Long} Page - page. optional.
   * @param {Long} PageSize - pageSize. optional.
   */
  listProject(params = {}, options = {}) {
    return this.request('ListProject', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricName - metricName. optional.
   * @param {Long} Page - page. optional.
   * @param {Long} PageSize - pageSize. optional.
   */
  listSQLMetrics(params = {}, options = {}) {
    return this.request('ListSQLMetrics', params, options);
  }

  /**
   * @param {String} DimTableName - dimTableName. optional.
   * @param {String} Body - body. optional.
   */
  putDimTableData(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('PutDimTableData', params, options);
  }

  /**
   * @param {String} Project - project. optional.
   * @param {String} Metric - metric. optional.
   * @param {String} Period - period. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} TargetPeriod - targetPeriod. optional.
   * @param {String} Columns - columns. optional.
   * @param {String} Extend - extend. optional.
   */
  queryIncremental(params = {}, options = {}) {
    return this.request('QueryIncremental', params, options);
  }

  /**
   * @param {String} Project - project. optional.
   * @param {String} Metric - metric. optional.
   * @param {String} Period - period. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} Page - page. optional.
   * @param {String} Length - length. optional.
   * @param {String} Extend - extend. optional.
   * @param {String} Filter - filter. optional.
   */
  queryListMetric(params = {}, options = {}) {
    return this.request('QueryListMetric', params, options);
  }

  /**
   * @param {String} Project - project. optional.
   * @param {String} Metric - metric. optional.
   * @param {String} Period - period. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} Page - page. optional.
   * @param {String} Length - length. optional.
   * @param {String} Extend - extend. optional.
   */
  queryMetric(params = {}, options = {}) {
    return this.request('QueryMetric', params, options);
  }

  /**
   * @param {String} Project - project. required.
   * @param {String} Metric - metric. required.
   * @param {String} Period - period. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} ValueKey - valueKey. optional.
   * @param {String} Top - top. optional.
   * @param {String} Extend - extend. optional.
   */
  queryMetricTopN(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'Metric')) {
      throw new TypeError('parameter "Metric" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    return this.request('QueryMetricTopN', params, options);
  }

  /**
   * @param {String} Project - project. optional.
   * @param {String} Metric - metric. optional.
   * @param {String} Period - period. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} TargetPeriod - targetPeriod. optional.
   * @param {String} Function - function. optional.
   * @param {String} Extend - extend. optional.
   */
  queryStatistics(params = {}, options = {}) {
    return this.request('QueryStatistics', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricStreamName - metricStreamName. optional.
   */
  startMetricStream(params = {}, options = {}) {
    return this.request('StartMetricStream', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   */
  startProject(params = {}, options = {}) {
    return this.request('StartProject', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   */
  statusProject(params = {}, options = {}) {
    return this.request('StatusProject', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricStreamName - metricStreamName. optional.
   */
  stopMetricStream(params = {}, options = {}) {
    return this.request('StopMetricStream', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   */
  stopProject(params = {}, options = {}) {
    return this.request('StopProject', params, options);
  }

  /**
   * @param {String} DimTableName - dimTableName. optional.
   * @param {String} DimTable - dimTable. optional.
   */
  updateDimTable(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('UpdateDimTable', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricStreamName - metricStreamName. optional.
   * @param {String} MetricStream - metricStream. optional.
   */
  updateMetricStream(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('UpdateMetricStream', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricStreamName - metricStreamName. optional.
   * @param {String} MetricName - metricName. optional.
   * @param {String} Metrics - metrics. optional.
   */
  updateMetrics(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('UpdateMetrics', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   * @param {String} Project - project. optional.
   */
  updateProject(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('UpdateProject', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricName - metricName. optional.
   * @param {String} Sql - sql. optional.
   * @param {Integer} IsPublic - isPublic. optional.
   */
  updateSQLMetrics(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('updateSQLMetrics', params, options);
  }

}

module.exports = Client;


'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-10-20';
    super(config);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} ProjectName - projectName. optional.
   * @param {String} Sqls - sqls. optional.
   * @param {Integer} IsPublic - isPublic. optional.
   */
  batchCreateSqlMetrics(params = {}, options = {}) {
    return this.request('BatchCreateSqlMetrics', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} DimTableName - dimTableName. optional.
   * @param {String} Body - body. optional.
   */
  batchPutDimTableData(params = {}, options = {}) {
    return this.request('BatchPutDimTableData', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} DimTableName - dimTableName. optional.
   * @param {String} Body - body. optional.
   */
  batchPutDimTableData123(params = {}, options = {}) {
    return this.request('BatchPutDimTableData123', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
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
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} DimTable - dimTable. optional.
   */
  createDimTable(params = {}, options = {}) {
    return this.request('CreateDimTable', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricStream - metricStream. optional.
   */
  createMetricStream(params = {}, options = {}) {
    return this.request('CreateMetricStream', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} Project - project. optional.
   */
  createProject(params = {}, options = {}) {
    return this.request('CreateProject', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} ProjectName - projectName. optional.
   * @param {String} Sql - sql. optional.
   * @param {Integer} IsPublic - isPublic. optional.
   */
  createSqlMetrics(params = {}, options = {}) {
    return this.request('CreateSqlMetrics', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} DimTableName - dimTableName. optional.
   */
  deleteDimTable(params = {}, options = {}) {
    return this.request('DeleteDimTable', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} DimTableName - dimTableName. optional.
   * @param {String} Key - key. optional.
   */
  deleteDimTableData(params = {}, options = {}) {
    return this.request('DeleteDimTableData', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} DimTableName - dimTableName. optional.
   * @param {String} Key - key. optional.
   * @param {String} Value - value. optional.
   */
  deleteDimTableDataByKey(params = {}, options = {}) {
    return this.request('DeleteDimTableDataByKey', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricStreamName - metricStreamName. optional.
   */
  deleteMetricStream(params = {}, options = {}) {
    return this.request('DeleteMetricStream', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricName - metricName. optional.
   */
  deleteMetrics(params = {}, options = {}) {
    return this.request('DeleteMetrics', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} ProjectName - projectName. optional.
   */
  deleteProject(params = {}, options = {}) {
    return this.request('DeleteProject', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
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
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
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
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} DimTableName - dimTableName. optional.
   */
  getDimTable(params = {}, options = {}) {
    return this.request('GetDimTable', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
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
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricStreamName - metricStreamName. optional.
   */
  getMetricStream(params = {}, options = {}) {
    return this.request('GetMetricStream', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricName - metricName. optional.
   */
  getMetricsMeta(params = {}, options = {}) {
    return this.request('GetMetricsMeta', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} ProjectName - projectName. optional.
   */
  getProject(params = {}, options = {}) {
    return this.request('GetProject', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricName - metricName. optional.
   */
  getSqlMetrics(params = {}, options = {}) {
    return this.request('GetSqlMetrics', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} DimTableName - dimTableName. optional.
   * @param {Long} Page - page. optional.
   * @param {Long} PageSize - pageSize. optional.
   */
  listDimTable(params = {}, options = {}) {
    return this.request('ListDimTable', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricStreamName - metricStreamName. optional.
   * @param {Long} Page - page. optional.
   * @param {Long} PageSize - pageSize. optional.
   */
  listMetricStream(params = {}, options = {}) {
    return this.request('ListMetricStream', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricName - metricName. optional.
   * @param {Long} Page - offset. optional.
   * @param {Long} PageSize - size. optional.
   * @param {Integer} MetricType - metricType. optional.
   * @param {Boolean} IsEvent - isEvent. optional.
   */
  listMetricsMeta(params = {}, options = {}) {
    return this.request('ListMetricsMeta', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} ProjectOwner - projectOwner. optional.
   * @param {Long} Page - page. optional.
   * @param {Long} PageSize - pageSize. optional.
   */
  listProject(params = {}, options = {}) {
    return this.request('ListProject', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricName - metricName. optional.
   * @param {Long} Page - offset. optional.
   * @param {Long} PageSize - size. optional.
   */
  listSqlMetrics(params = {}, options = {}) {
    return this.request('ListSqlMetrics', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} Sql - sql. optional.
   * @param {String} Input - input. optional.
   */
  metricSqlCheck(params = {}, options = {}) {
    return this.request('MetricSqlCheck', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} DimTableName - dimTableName. optional.
   * @param {String} Body - body. optional.
   */
  putDimTableData(params = {}, options = {}) {
    return this.request('PutDimTableData', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} DimTableName - dimTableName. optional.
   * @param {String} Key - key. optional.
   */
  queryDimTableData(params = {}, options = {}) {
    return this.request('QueryDimTableData', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} DimTableName - dimTableName. optional.
   * @param {String} Key - key. optional.
   * @param {String} Value - value. optional.
   * @param {Long} Page - page. optional.
   * @param {Long} PageSize - pageSize. optional.
   */
  queryDimTableDataByKey(params = {}, options = {}) {
    return this.request('QueryDimTableDataByKey', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
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
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
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
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
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
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} Project - project. required.
   * @param {String} Metric - metric. required.
   * @param {String} Period - period. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} Express - express. optional.
   * @param {String} Length - length. optional.
   */
  queryMetricData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'Metric')) {
      throw new TypeError('parameter "Metric" is required');
    }

    return this.request('QueryMetricData', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} Project - project. required.
   * @param {String} Metric - metric. required.
   * @param {String} Period - period. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} Cursor - cursor. optional.
   * @param {String} Page - page. optional.
   * @param {String} Length - length. optional.
   * @param {String} Express - express. optional.
   */
  queryMetricLast(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'Metric')) {
      throw new TypeError('parameter "Metric" is required');
    }

    return this.request('QueryMetricLast', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} Project - project. required.
   * @param {String} Metric - metric. required.
   * @param {String} Period - period. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} Page - page. optional.
   * @param {String} Cursor - cursor. optional.
   * @param {String} Length - length. optional.
   * @param {String} Express - express. optional.
   */
  queryMetricList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'Metric')) {
      throw new TypeError('parameter "Metric" is required');
    }

    return this.request('QueryMetricList', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} Project - project. required.
   * @param {String} Metric - metric. required.
   * @param {String} Period - period. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} Orderby - orderby. optional.
   * @param {String} OrderDesc - orderDesc. optional.
   * @param {String} Length - limit. optional.
   * @param {String} Express - express. optional.
   */
  queryMetricTop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'Metric')) {
      throw new TypeError('parameter "Metric" is required');
    }

    return this.request('QueryMetricTop', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
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
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
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
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} ProjectName - projectName. optional.
   * @param {String} Type - type. optional.
   */
  startProject(params = {}, options = {}) {
    return this.request('StartProject', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} ProjectName - projectName. optional.
   */
  statusProject(params = {}, options = {}) {
    return this.request('StatusProject', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} ProjectName - projectName. optional.
   */
  stopProject(params = {}, options = {}) {
    return this.request('StopProject', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} DimTableName - dimTableName. optional.
   * @param {String} DimTable - dimTable. optional.
   */
  updateDimTable(params = {}, options = {}) {
    return this.request('UpdateDimTable', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricStreamName - metricStreamName. optional.
   * @param {String} MetricStream - metricStream. optional.
   */
  updateMetricStream(params = {}, options = {}) {
    return this.request('UpdateMetricStream', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} ProjectName - projectName. optional.
   * @param {String} Project - project. optional.
   */
  updateProject(params = {}, options = {}) {
    return this.request('UpdateProject', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricName - metricName. optional.
   * @param {String} Sql - sql. optional.
   * @param {Integer} IsPublic - isPublic. optional.
   */
  updateSqlMetrics(params = {}, options = {}) {
    return this.request('UpdateSqlMetrics', params, options);
  }

}

module.exports = Client;

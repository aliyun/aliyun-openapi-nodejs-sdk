
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-03-18';
    super(config);
  }

  /**
   * @param {Long} UserId - userId. required.
   */
  accessKeyGenerate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('AccessKeyGenerate', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   */
  accessKeyGet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('AccessKeyGet', params, options);
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
   * @param {String} DimTable - dimTable. optional.
   */
  createDimTable(params = {}, options = {}) {
    return this.request('CreateDimTable', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricOutput - metricOutput. optional.
   */
  createMetricOutput(params = {}, options = {}) {
    return this.request('CreateMetricOutput', params, options);
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
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricOutput - metricOutput. optional.
   */
  createOutput(params = {}, options = {}) {
    return this.request('CreateOutput', params, options);
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
   * @param {String} MetricOutputName - metricOutputName. optional.
   */
  deleteMetricOutput(params = {}, options = {}) {
    return this.request('DeleteMetricOutput', params, options);
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
   * @param {String} MetricOutputName - metricOutputName. optional.
   */
  deleteOutput(params = {}, options = {}) {
    return this.request('DeleteOutput', params, options);
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
   * @param {String} DimTableName - dimTableName. optional.
   */
  getDimTable(params = {}, options = {}) {
    return this.request('GetDimTable', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricOutputName - metricOutputName. optional.
   */
  getMetricOutput(params = {}, options = {}) {
    return this.request('GetMetricOutput', params, options);
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
   * @param {String} MetricOutputName - metricOutputName. optional.
   */
  getOutput(params = {}, options = {}) {
    return this.request('GetOutput', params, options);
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
   * @param {String} MetricOutputName - metricOutputName. optional.
   * @param {Long} Page - page. optional.
   * @param {Long} PageSize - pageSize. optional.
   */
  listMetricOutput(params = {}, options = {}) {
    return this.request('ListMetricOutput', params, options);
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
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricOutputName - metricOutputName. optional.
   * @param {Long} Page - page. optional.
   * @param {Long} PageSize - pageSize. optional.
   */
  listOutput(params = {}, options = {}) {
    return this.request('ListOutput', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   */
  listOverviewConfig(params = {}, options = {}) {
    return this.request('ListOverviewConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {Long} groupId - groupId. required.
   */
  listProductGroupInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'groupId')) {
      throw new TypeError('parameter "groupId" is required');
    }

    return this.request('ListProductGroupInstances', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} category - category. optional.
   */
  listProductGroups(params = {}, options = {}) {
    return this.request('ListProductGroups', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} ProjectOwner - projectOwner. optional.
   * @param {Long} Page - page. optional.
   * @param {Long} PageSize - pageSize. optional.
   * @param {String} ProjectName - projectName. optional.
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
   * @param {String} InstanceId - instanceId. required.
   */
  nodeInstall(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('NodeInstall', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {String} HostName - hostName. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  nodeList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('NodeList', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   */
  nodeProcessCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('NodeProcessCreate', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   */
  nodeProcessDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('NodeProcessDelete', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  nodeProcesses(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('NodeProcesses', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  nodeStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('NodeStatus', params, options);
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
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} Body - body. optional.
   */
  putMetricData(params = {}, options = {}) {
    return this.request('PutMetricData', params, options);
  }

  /**
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} Project - project. required.
   * @param {String} Metric - metric. required.
   * @param {String} Period - period. required.
   * @param {String} Data - data. required.
   */
  putMetrics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'Metric')) {
      throw new TypeError('parameter "Metric" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    return this.request('PutMetrics', params, options);
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
   * @param {String} Project - project. required.
   * @param {String} EventName - eventName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} Page - page. optional.
   * @param {String} Cursor - cursor. optional.
   * @param {String} Length - length. optional.
   * @param {String} Filter - filter. optional.
   * @param {Boolean} OrderDesc - orderDesc. optional.
   */
  queryEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'EventName')) {
      throw new TypeError('parameter "EventName" is required');
    }

    return this.request('QueryEvent', params, options);
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
   * @param {String} Project - project. required.
   * @param {String} Metric - metric. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Dimensions - dimensions. optional.
   */
  queryMetricAgg(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'Metric')) {
      throw new TypeError('parameter "Metric" is required');
    }

    return this.request('QueryMetricAgg', params, options);
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
   * @param {String} MetricOutputName - metricOutputName. optional.
   * @param {String} MetricOutput - metricOutput. optional.
   */
  updateMetricOutput(params = {}, options = {}) {
    return this.request('UpdateMetricOutput', params, options);
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
   * @param {String} MetricOutputName - metricOutputName. optional.
   * @param {String} MetricOutput - metricOutput. optional.
   */
  updateOutput(params = {}, options = {}) {
    return this.request('UpdateOutput', params, options);
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

  /**
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} Project - project. required.
   * @param {String} Metric - metric. required.
   * @param {String} Period - period. required.
   * @param {String} Data - data. required.
   */
  uploadData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'Metric')) {
      throw new TypeError('parameter "Metric" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    return this.request('UploadData', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {Integer} pageNo - pageNo. required.
   * @param {Integer} pageSize - pageSize. required.
   */
  cmsListShares(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'pageNo')) {
      throw new TypeError('parameter "pageNo" is required');
    }

    if (!hasOwnProperty(params, 'pageSize')) {
      throw new TypeError('parameter "pageSize" is required');
    }

    return this.request('cmsListShares', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} token - token. required.
   */
  cmsShareDeleteTokenByToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'token')) {
      throw new TypeError('parameter "token" is required');
    }

    return this.request('cmsShareDeleteTokenByToken', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} params - params. required.
   * @param {String} name - name. required.
   * @param {String} viewId - viewId. required.
   * @param {String} viewConf - viewConf. required.
   * @param {String} type - type. required.
   */
  cmsShareGenerateToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'params')) {
      throw new TypeError('parameter "params" is required');
    }

    if (!hasOwnProperty(params, 'name')) {
      throw new TypeError('parameter "name" is required');
    }

    if (!hasOwnProperty(params, 'viewId')) {
      throw new TypeError('parameter "viewId" is required');
    }

    if (!hasOwnProperty(params, 'viewConf')) {
      throw new TypeError('parameter "viewConf" is required');
    }

    if (!hasOwnProperty(params, 'type')) {
      throw new TypeError('parameter "type" is required');
    }

    return this.request('cmsShareGenerateToken', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {Long} groupId - groupId. required.
   */
  deleteProductGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'groupId')) {
      throw new TypeError('parameter "groupId" is required');
    }

    return this.request('deleteProductGroup', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {Long} groupId - groupId. required.
   */
  getProductGroupInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'groupId')) {
      throw new TypeError('parameter "groupId" is required');
    }

    return this.request('getProductGroupInstances', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} category - category. optional.
   */
  getProductGroups(params = {}, options = {}) {
    return this.request('getProductGroups', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} groupJson - groupJson. required.
   */
  putProductGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'groupJson')) {
      throw new TypeError('parameter "groupJson" is required');
    }

    return this.request('putProductGroup', params, options);
  }

}

module.exports = Client;

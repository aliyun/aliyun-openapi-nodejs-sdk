
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-09-22';
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
   * @param {String} AccessKey - accessKey. required.
   */
  accessKeyQuery(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessKey')) {
      throw new TypeError('parameter "AccessKey" is required');
    }

    return this.request('AccessKeyQuery', params, options);
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
   * @param {String} ProjectName - projectName. optional.
   * @param {Integer} IsPublic - isPublic. optional.
   * @param {String} Metrics - metrics. optional.
   */
  createMetrics(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('CreateMetrics', params, options);
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
   * @param {Integer} templateId - templateId. required.
   */
  deleteAlarmTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'templateId')) {
      throw new TypeError('parameter "templateId" is required');
    }

    return this.request('DeleteAlarmTemplate', params, options);
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
   * @param {Long} LogId - logId. required.
   */
  deleteLogMonitor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LogId')) {
      throw new TypeError('parameter "LogId" is required');
    }

    return this.request('DeleteLogMonitor', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {Long} MetricId - metricId. required.
   */
  deleteMetricOfLogMonitor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MetricId')) {
      throw new TypeError('parameter "MetricId" is required');
    }

    return this.request('DeleteMetricOfLogMonitor', params, options);
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
   * @param {String} Project - project. required.
   * @param {String} Metric - metric. required.
   * @param {String} Period - period. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Dimensions - dimensions. required.
   * @param {String} NextKey - nextKey. required.
   */
  dimensionValues(params = {}, options = {}) {
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

    if (!hasOwnProperty(params, 'Dimensions')) {
      throw new TypeError('parameter "Dimensions" is required');
    }

    if (!hasOwnProperty(params, 'NextKey')) {
      throw new TypeError('parameter "NextKey" is required');
    }

    return this.request('DimensionValues', params, options);
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
   * @param {String} MetricName - metricName. optional.
   */
  getLogMonitorByMetricName(params = {}, options = {}) {
    return this.request('GetLogMonitorByMetricName', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {Long} LogId - logId. optional.
   */
  getLogMonitorInAll(params = {}, options = {}) {
    return this.request('GetLogMonitorInAll', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   */
  getLogMonitorResourceControlInfo(params = {}, options = {}) {
    return this.request('GetLogMonitorResourceControlInfo', params, options);
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
   * @param {Long} UserId - userId. required.
   * @param {Integer} Year - year. required.
   * @param {Integer} WeekOfYear - weekOfYear. required.
   * @param {String} FileType - fileType. optional.
   */
  h5WeeklyReportUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'Year')) {
      throw new TypeError('parameter "Year" is required');
    }

    if (!hasOwnProperty(params, 'WeekOfYear')) {
      throw new TypeError('parameter "WeekOfYear" is required');
    }

    return this.request('H5WeeklyReportUrl', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Integer} Year - year. required.
   * @param {Integer} WeekOfYear - weekOfYear. required.
   */
  h5WeeklyReportUserIds(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'Year')) {
      throw new TypeError('parameter "Year" is required');
    }

    if (!hasOwnProperty(params, 'WeekOfYear')) {
      throw new TypeError('parameter "WeekOfYear" is required');
    }

    return this.request('H5WeeklyReportUserIds', params, options);
  }

  /**
   */
  heartbeat(params = {}, options = {}) {
    return this.request('Heartbeat', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} MetricName - metricName. required.
   */
  isMetricNameValid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MetricName')) {
      throw new TypeError('parameter "MetricName" is required');
    }

    return this.request('IsMetricNameValid', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} UserId - userId. required.
   * @param {String} Host - host. required.
   * @param {Integer} Port - port. required.
   * @param {String} ObjectNameJsonStr - objectNameJsonStr. optional.
   */
  jVMConfigCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'Host')) {
      throw new TypeError('parameter "Host" is required');
    }

    if (!hasOwnProperty(params, 'Port')) {
      throw new TypeError('parameter "Port" is required');
    }

    return this.request('JVMConfigCreate', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {String} InstanceId - instanceId. required.
   */
  jVMConfigDisable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('JVMConfigDisable', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {String} InstanceId - instanceId. required.
   */
  jVMConfigEnable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('JVMConfigEnable', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {String} InstanceId - instanceId. required.
   */
  jVMConfigGetById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('JVMConfigGetById', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  jVMConfigGetByInstanceId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('JVMConfigGetByInstanceId', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Long} UserId - userId. required.
   * @param {String} Host - host. optional.
   * @param {Integer} Port - port. optional.
   * @param {String} ObjectNameJsonStr - objectNameJsonStr. optional.
   */
  jVMConfigModify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('JVMConfigModify', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {String} InstanceId - instanceId. required.
   */
  jVMConfigRemoveById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('JVMConfigRemoveById', params, options);
  }

  /**
   * @param {String} IdList - idList. required.
   * @param {String} InstanceId - instanceId. required.
   */
  jVMConfigRemoveByIdList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IdList')) {
      throw new TypeError('parameter "IdList" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('JVMConfigRemoveByIdList', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  jVMConfigRemoveByInstanceId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('JVMConfigRemoveByInstanceId', params, options);
  }

  /**
   * @param {Long} TemplateId - templateId. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listAlarmTemplate(params = {}, options = {}) {
    return this.request('ListAlarmTemplate', params, options);
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
   * @param {String} DimTableName - dimTableName. optional.
   * @param {String} Key - key. optional.
   */
  listDimTableData(params = {}, options = {}) {
    return this.request('ListDimTableData', params, options);
  }

  /**
   * @param {Boolean} SelectContactGroups - selectContactGroups. optional.
   * @param {String} GroupType - type. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} Keyword - keyword. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} BindUrls - bindUrls. optional.
   * @param {String} GroupName - name. optional.
   * @param {Long} AliUid - aliUid. required.
   */
  listGroupsInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('ListGroupsInner', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} SearchValue - searchValue. optional.
   * @param {Long} GroupId - groupId. optional.
   */
  listLogMonitor(params = {}, options = {}) {
    return this.request('ListLogMonitor', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {Long} GroupId - groupId. required.
   */
  listLogMonitorByGroupId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('ListLogMonitorByGroupId', params, options);
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
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricName - metricName. optional.
   * @param {Long} Page - offset. optional.
   * @param {Long} PageSize - size. optional.
   */
  listMetricsMeta(params = {}, options = {}) {
    return this.request('ListMetricsMeta', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {Long} LogId - logId. optional.
   */
  listMetricsOfLogMonitor(params = {}, options = {}) {
    return this.request('ListMetricsOfLogMonitor', params, options);
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
   * @param {String} Keyword - keyword. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listMyGroups(params = {}, options = {}) {
    return this.request('ListMyGroups', params, options);
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
   * @param {String} Project - project. required.
   * @param {String} Metric - metric. required.
   * @param {String} Period - period. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Dimensions - dimensions. required.
   * @param {String} FieldNames - fieldNames. required.
   * @param {String} ListByTop - listByTop. optional.
   * @param {String} Orderby - orderby. optional.
   * @param {String} OrderDesc - orderDesc. optional.
   * @param {String} Limit - limit. optional.
   * @param {String} TargetPrefix - targetPrefix. optional.
   * @param {String} Page - page. optional.
   * @param {String} Length - length. optional.
   */
  metricData(params = {}, options = {}) {
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

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Dimensions')) {
      throw new TypeError('parameter "Dimensions" is required');
    }

    if (!hasOwnProperty(params, 'FieldNames')) {
      throw new TypeError('parameter "FieldNames" is required');
    }

    return this.request('MetricData', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} MetricName - metricName. required.
   */
  metricMeta(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'MetricName')) {
      throw new TypeError('parameter "MetricName" is required');
    }

    return this.request('MetricMeta', params, options);
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
   */
  nodeAgentVersion(params = {}, options = {}) {
    return this.request('NodeAgentVersion', params, options);
  }

  /**
   * @param {String} UserId - userId. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Boolean} Force - force. optional. default: true.
   */
  nodeInstall(params = {}, options = {}) {
    return this.request('NodeInstall', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {String} HostName - hostName. optional.
   * @param {String} KeyWord - keyWord. optional.
   * @param {String} InstanceIds - instanceIds. optional.
   * @param {String} SerialNumbers - serialNumbers. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} Status - status. optional.
   */
  nodeList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('NodeList', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   */
  nodeListUpdate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('NodeListUpdate', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. optional.
   * @param {String} ProcessName - processName. optional.
   * @param {String} ProcessUser - processUser. optional.
   * @param {String} Command - command. optional.
   */
  nodeProcessCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('NodeProcessCreate', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. optional.
   * @param {String} Id - id. optional.
   */
  nodeProcessDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
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
   * @param {String} InstanceIds - instanceIds. required.
   */
  nodeStatusList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceIds')) {
      throw new TypeError('parameter "InstanceIds" is required');
    }

    return this.request('NodeStatusList', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  nodeUninstall(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('NodeUninstall', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   */
  profileGet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('ProfileGet', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Boolean} AutoInstall - autoInstall. optional.
   * @param {Boolean} EnableInstallAgentNewECS - enableInstallAgentNewECS. optional.
   */
  profileSet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('ProfileSet', params, options);
  }

  /**
   */
  projectList(params = {}, options = {}) {
    return this.request('ProjectList', params, options);
  }

  /**
   * @param {Long} TemplateId - templateId. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  putAlarmTemplate(params = {}, options = {}) {
    return this.request('PutAlarmTemplate', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {Integer} TemplateId - templateId. optional.
   * @param {String} TemplateName - name. optional.
   * @param {String} TemplateDescribe - templateDescribe. optional.
   * @param {String} SilenceTime - silenceTime. optional.
   * @param {String} EnableStartTime - enableStartTime. optional.
   * @param {String} EnableEndTime - enableEndTime. optional.
   * @param {String} NotifyLevel - notifyLevel. optional.
   * @param {String} TemplateType - templateType. optional.
   * @param {String} ApplyGroups - applyGroups. optional.
   * @param {String} AlarmTemplateItems - templates. optional.
   */
  putAlertTemplate(params = {}, options = {}) {
    return this.request('PutAlertTemplate', params, options);
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
   * @param {String} LogMonitor - logMonitor. required.
   */
  putLogMonitor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LogMonitor')) {
      throw new TypeError('parameter "LogMonitor" is required');
    }

    return this.request('PutLogMonitor', params, options);
  }

  /**
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} Body - body. optional.
   */
  putMetricData(params = {}, options = {}) {
    return this.request('PutMetricData', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} MetricMeta - metricMeta. required.
   */
  putMetricMeta(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MetricMeta')) {
      throw new TypeError('parameter "MetricMeta" is required');
    }

    return this.request('PutMetricMeta', params, options);
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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Metric - metric. required.
   * @param {String} Isdim - isdim. optional.
   */
  queryCustomField(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Metric')) {
      throw new TypeError('parameter "Metric" is required');
    }

    return this.request('QueryCustomField', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  queryCustomTable(params = {}, options = {}) {
    return this.request('QueryCustomTable', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Metric - metric. required.
   * @param {String} Dimension - dimension. required.
   * @param {String} Where - where. optional.
   * @param {String} Limit - limit. optional.
   */
  queryCustomValue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Metric')) {
      throw new TypeError('parameter "Metric" is required');
    }

    if (!hasOwnProperty(params, 'Dimension')) {
      throw new TypeError('parameter "Dimension" is required');
    }

    return this.request('QueryCustomValue', params, options);
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
   * @param {String} Project - project. required.
   * @param {String} EventName - eventName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} Cursor - cursor. optional.
   * @param {String} Length - length. optional.
   * @param {String} Filter - filter. optional.
   */
  queryEventLast(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'EventName')) {
      throw new TypeError('parameter "EventName" is required');
    }

    return this.request('QueryEventLast', params, options);
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
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
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
  queryInstanceTop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'Metric')) {
      throw new TypeError('parameter "Metric" is required');
    }

    return this.request('QueryInstanceTop', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} MetricName - metricName. required.
   */
  queryIsMetricNameValid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MetricName')) {
      throw new TypeError('parameter "MetricName" is required');
    }

    return this.request('QueryIsMetricNameValid', params, options);
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
   * @param {String} AccessKeyId - accessKeyId. optional.
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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Project - project. required.
   * @param {String} Metric - metric. required.
   * @param {String} Period - period. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Dimensions - dimensions. optional.
   */
  queryMetricDimensions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'Metric')) {
      throw new TypeError('parameter "Metric" is required');
    }

    return this.request('QueryMetricDimensions', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
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
   * @param {String} AccessKeyId - accessKeyId. optional.
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
   * @param {String} AccessKeyId - accessKeyId. optional.
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
   * @param {String} AccessKeyId - accessKeyId. optional.
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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Namespace - namespace. required.
   * @param {String} MetricNames - metricNames. required.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} Interval - interval. required.
   * @param {String} Filter - filter. optional.
   */
  queryMetricsFresh(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Namespace')) {
      throw new TypeError('parameter "Namespace" is required');
    }

    if (!hasOwnProperty(params, 'MetricNames')) {
      throw new TypeError('parameter "MetricNames" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    return this.request('QueryMetricsFresh', params, options);
  }

  /**
   * @param {String} ProjectOwner - projectOwner. optional.
   * @param {Long} Page - page. optional.
   * @param {Long} PageSize - pageSize. optional.
   * @param {String} ProjectName - projectName. optional.
   */
  queryProject(params = {}, options = {}) {
    return this.request('QueryProject', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricStreamName - metricStreamName. optional.
   */
  startMetricStream(params = {}, options = {}) {
    return this.request('StartMetricStream', params, options);
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
   * @param {String} ProjectName - projectName. optional.
   * @param {String} MetricStreamName - metricStreamName. optional.
   */
  stopMetricStream(params = {}, options = {}) {
    return this.request('StopMetricStream', params, options);
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
   * @param {String} GroupName - groupName. optional.
   * @param {String} TaskType - taskType. required.
   * @param {String} TaskName - taskName. required.
   * @param {String} TaskScope - taskScope. required.
   * @param {Long} GroupId - groupId. required.
   * @param {String} JsonData - jsonData. required.
   * @param {RepeatList} InstanceList - instanceListJson. optional.
   * @param {String} AlertConfig - alertConfigJson. required.
   */
  taskConfigCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskType')) {
      throw new TypeError('parameter "TaskType" is required');
    }

    if (!hasOwnProperty(params, 'TaskName')) {
      throw new TypeError('parameter "TaskName" is required');
    }

    if (!hasOwnProperty(params, 'TaskScope')) {
      throw new TypeError('parameter "TaskScope" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'JsonData')) {
      throw new TypeError('parameter "JsonData" is required');
    }

    if (!hasOwnProperty(params, 'AlertConfig')) {
      throw new TypeError('parameter "AlertConfig" is required');
    }

    return this.request('TaskConfigCreate', params, options);
  }

  /**
   * @param {RepeatList} IdList - idListJson. required.
   */
  taskConfigDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IdList')) {
      throw new TypeError('parameter "IdList" is required');
    }

    return this.request('TaskConfigDelete', params, options);
  }

  /**
   * @param {RepeatList} IdList - idListJson. required.
   * @param {Boolean} Enabled - enabled. required.
   */
  taskConfigEnable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IdList')) {
      throw new TypeError('parameter "IdList" is required');
    }

    if (!hasOwnProperty(params, 'Enabled')) {
      throw new TypeError('parameter "Enabled" is required');
    }

    return this.request('TaskConfigEnable', params, options);
  }

  /**
   * @param {Long} Id - id. optional.
   * @param {String} TaskName - taskName. optional.
   * @param {Long} GroupId - groupId. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  taskConfigList(params = {}, options = {}) {
    return this.request('TaskConfigList', params, options);
  }

  /**
   * @param {Long} GroupId - groupId. required.
   * @param {Long} Id - id. required.
   * @param {String} TaskName - taskName. required.
   * @param {String} TaskScope - taskScope. required.
   * @param {String} TaskType - taskType. required.
   * @param {String} GroupName - groupName. optional.
   * @param {String} JsonData - jsonData. required.
   * @param {RepeatList} InstanceList - instanceListJson. optional.
   * @param {String} AlertConfig - alertConfigJson. required.
   */
  taskConfigModify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'TaskName')) {
      throw new TypeError('parameter "TaskName" is required');
    }

    if (!hasOwnProperty(params, 'TaskScope')) {
      throw new TypeError('parameter "TaskScope" is required');
    }

    if (!hasOwnProperty(params, 'TaskType')) {
      throw new TypeError('parameter "TaskType" is required');
    }

    if (!hasOwnProperty(params, 'JsonData')) {
      throw new TypeError('parameter "JsonData" is required');
    }

    if (!hasOwnProperty(params, 'AlertConfig')) {
      throw new TypeError('parameter "AlertConfig" is required');
    }

    return this.request('TaskConfigModify', params, options);
  }

  /**
   * @param {RepeatList} TaskIdList - taskIdListJson. optional.
   */
  taskConfigUnhealthy(params = {}, options = {}) {
    return this.request('TaskConfigUnhealthy', params, options);
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

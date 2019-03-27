
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '0000-00-00';
    super(config);
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
   * @param {String} ProjectName - projectName. required.
   * @param {String} Service - service. optional.
   * @param {String} Cluster - cluster. optional.
   * @param {String} GroupId - groupId. optional.
   */
  batchDisableAlerts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('BatchDisableAlerts', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} Service - service. optional.
   * @param {String} Cluster - cluster. optional.
   * @param {String} GroupId - groupId. optional.
   */
  batchEnableAlerts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('BatchEnableAlerts', params, options);
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
   * @param {String} Names - names. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  batchQueryProject(params = {}, options = {}) {
    return this.request('BatchQueryProject', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} Uuid - uuid. optional.
   * @param {Long} status - status. optional.
   */
  changeEventTriggerStatus(params = {}, options = {}) {
    return this.request('ChangeEventTriggerStatus', params, options);
  }

  /**
   * @param {String} fromGroupId - fromGroupId. required.
   * @param {String} toGroupId - toGroupId. required.
   */
  copyGroupDashboard(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'fromGroupId')) {
      throw new TypeError('parameter "fromGroupId" is required');
    }

    if (!hasOwnProperty(params, 'toGroupId')) {
      throw new TypeError('parameter "toGroupId" is required');
    }

    return this.request('CopyGroupDashboard', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} Names - names. optional.
   */
  countGoc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    options.method = 'POST';
    return this.request('CountGoc', params, options);
  }

  /**
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} Name - name. required.
   * @param {String} Namespace - namespace. required.
   * @param {String} MetricName - metricName. required.
   * @param {String} Dimensions - dimensions. required.
   * @param {Integer} Period - period. optional. default: 300.
   * @param {String} Statistics - statistics. required.
   * @param {String} ComparisonOperator - comparisonOperator. required.
   * @param {String} Threshold - threshold. required.
   * @param {Integer} EvaluationCount - evaluationCount. optional. default: 3.
   * @param {String} ContactGroups - contactGroups. required.
   * @param {Integer} StartTime - startTime. optional. default: 0.
   * @param {Integer} EndTime - endTime. optional. default: 24.
   * @param {Integer} SilenceTime - silenceTime. optional. default: 86400.
   * @param {Integer} NotifyType - notifyType. optional.
   */
  createAlarm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Namespace')) {
      throw new TypeError('parameter "Namespace" is required');
    }

    if (!hasOwnProperty(params, 'MetricName')) {
      throw new TypeError('parameter "MetricName" is required');
    }

    if (!hasOwnProperty(params, 'Dimensions')) {
      throw new TypeError('parameter "Dimensions" is required');
    }

    if (!hasOwnProperty(params, 'Statistics')) {
      throw new TypeError('parameter "Statistics" is required');
    }

    if (!hasOwnProperty(params, 'ComparisonOperator')) {
      throw new TypeError('parameter "ComparisonOperator" is required');
    }

    if (!hasOwnProperty(params, 'Threshold')) {
      throw new TypeError('parameter "Threshold" is required');
    }

    if (!hasOwnProperty(params, 'ContactGroups')) {
      throw new TypeError('parameter "ContactGroups" is required');
    }

    options.method = 'POST';
    return this.request('CreateAlarm', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} Alert - alert. optional.
   */
  createAlert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    options.method = 'POST';
    return this.request('CreateAlert', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} Contact - contact. optional.
   */
  createContact(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    options.method = 'POST';
    return this.request('CreateContact', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} ContactGroup - contactGroup. optional.
   */
  createContactGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    options.method = 'POST';
    return this.request('CreateContactGroup', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} Metric - metric. optional.
   */
  createDBMetric(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    options.method = 'POST';
    return this.request('CreateDBMetric', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} Source - source. optional.
   */
  createDBSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    options.method = 'POST';
    return this.request('CreateDBSource', params, options);
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
   * @param {String} ProjectName - projectName. required.
   * @param {String} AlertName - alertName. optional.
   * @param {String} Dimensions - dimensions. optional.
   */
  createDimensions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    options.method = 'POST';
    return this.request('CreateDimensions', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} Metric - metric. optional.
   */
  createEventMetric(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    options.method = 'POST';
    return this.request('CreateEventMetric', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} LevelChannelSetting - levelChannelSetting. optional.
   */
  createLevelChannel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    options.method = 'POST';
    return this.request('CreateLevelChannel', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} Metric - metric. optional.
   */
  createLogHubMetric(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    options.method = 'POST';
    return this.request('CreateLogHubMetric', params, options);
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
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} Id - id. required.
   */
  deleteAlarm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteAlarm', params, options);
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
   * @param {String} ProjectName - projectName. required.
   * @param {String} AlertName - alertName. optional.
   */
  deleteAlert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('DeleteAlert', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} GroupId - groupId. required.
   */
  deleteAlertByGroupId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DeleteAlertByGroupId', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} Namespace - namespace. required.
   * @param {String} MetricName - metricName. required.
   */
  deleteAlertByMetric(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'Namespace')) {
      throw new TypeError('parameter "Namespace" is required');
    }

    if (!hasOwnProperty(params, 'MetricName')) {
      throw new TypeError('parameter "MetricName" is required');
    }

    return this.request('DeleteAlertByMetric', params, options);
  }

  /**
   * @param {Integer} TemplateId - templateId. required.
   */
  deleteAlertTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('DeleteAlertTemplate', params, options);
  }

  /**
   * @param {String} groupId - groupId. required.
   * @param {String} ids - ids. optional.
   * @param {String} type - type. optional.
   */
  deleteChartMetric(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'groupId')) {
      throw new TypeError('parameter "groupId" is required');
    }

    return this.request('DeleteChartMetric', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} ContactName - contactName. optional.
   */
  deleteContact(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('DeleteContact', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} GroupName - groupName. optional.
   */
  deleteContactGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('DeleteContactGroup', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} MetricName - metricName. required.
   */
  deleteDBMetric(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'MetricName')) {
      throw new TypeError('parameter "MetricName" is required');
    }

    return this.request('DeleteDBMetric', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} SourceName - sourceName. required.
   */
  deleteDBSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'SourceName')) {
      throw new TypeError('parameter "SourceName" is required');
    }

    return this.request('DeleteDBSource', params, options);
  }

  /**
   * @param {String} groupIds - groupIds. required.
   */
  deleteDashboardConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'groupIds')) {
      throw new TypeError('parameter "groupIds" is required');
    }

    return this.request('DeleteDashboardConfig', params, options);
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
   * @param {String} ProjectName - projectName. required.
   * @param {String} AlertName - alertName. optional.
   * @param {String} DimensionsId - dimensionsId. required.
   */
  deleteDimensions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'DimensionsId')) {
      throw new TypeError('parameter "DimensionsId" is required');
    }

    return this.request('DeleteDimensions', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} MetricName - metricName. required.
   */
  deleteEventMetric(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'MetricName')) {
      throw new TypeError('parameter "MetricName" is required');
    }

    return this.request('DeleteEventMetric', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} Uuid - uuid. optional.
   */
  deleteEventTrigger(params = {}, options = {}) {
    return this.request('DeleteEventTrigger', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} Level - level. required.
   */
  deleteLevelChannel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'Level')) {
      throw new TypeError('parameter "Level" is required');
    }

    return this.request('DeleteLevelChannel', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} MetricName - metricName. required.
   */
  deleteLogHubMetric(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'MetricName')) {
      throw new TypeError('parameter "MetricName" is required');
    }

    return this.request('DeleteLogHubMetric', params, options);
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
   * @param {Long} groupId - groupId. required.
   */
  deleteProductGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'groupId')) {
      throw new TypeError('parameter "groupId" is required');
    }

    return this.request('DeleteProductGroup', params, options);
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
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} Id - id. required.
   */
  disableAlarm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DisableAlarm', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} AlertName - alertName. optional.
   */
  disableAlert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('DisableAlert', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} GroupId - groupId. required.
   */
  disableAlertByGroupId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DisableAlertByGroupId', params, options);
  }

  /**
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} Id - id. required.
   */
  enableAlarm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('EnableAlarm', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} AlertName - alertName. optional.
   */
  enableAlert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('EnableAlert', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} GroupId - groupId. required.
   */
  enableAlertByGroupId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('EnableAlertByGroupId', params, options);
  }

  /**
   */
  getAlarmCountInLast7Days(params = {}, options = {}) {
    return this.request('GetAlarmCountInLast7Days', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} AlertName - alertName. optional.
   */
  getAlert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('GetAlert', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} ContactName - contactName. optional.
   */
  getContact(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('GetContact', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} GroupName - groupName. optional.
   */
  getContactGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('GetContactGroup', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} MetricName - metricName. required.
   */
  getDBMetric(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'MetricName')) {
      throw new TypeError('parameter "MetricName" is required');
    }

    return this.request('GetDBMetric', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} SourceName - sourceName. required.
   */
  getDBSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'SourceName')) {
      throw new TypeError('parameter "SourceName" is required');
    }

    return this.request('GetDBSource', params, options);
  }

  /**
   * @param {String} groupId - groupId. optional.
   * @param {String} type - type. optional.
   */
  getDashboardConfig(params = {}, options = {}) {
    return this.request('GetDashboardConfig', params, options);
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
   * @param {String} ProjectName - projectName. required.
   * @param {String} AlertName - alertName. optional.
   * @param {String} DimensionsId - dimensionsId. required.
   */
  getDimensions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'DimensionsId')) {
      throw new TypeError('parameter "DimensionsId" is required');
    }

    return this.request('GetDimensions', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} MetricName - metricName. required.
   */
  getEventMetric(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'MetricName')) {
      throw new TypeError('parameter "MetricName" is required');
    }

    return this.request('GetEventMetric', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} Uuid - uuid. optional.
   */
  getEventTrigger(params = {}, options = {}) {
    return this.request('GetEventTrigger', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} Level - level. required.
   */
  getLevelChannel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'Level')) {
      throw new TypeError('parameter "Level" is required');
    }

    return this.request('GetLevelChannel', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} MetricName - metricName. required.
   */
  getLogHubMetric(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'MetricName')) {
      throw new TypeError('parameter "MetricName" is required');
    }

    return this.request('GetLogHubMetric', params, options);
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
   * @param {String} AlertProject - alertProject. required.
   * @param {String} MetricProject - metricProject. optional.
   * @param {String} MetricName - metricName. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Context - context. optional.
   * @param {String} Region - region. optional.
   * @param {String} PageSize - pageSize. optional.
   * @param {String} Cursor - cursor. optional.
   */
  getMetricRelatedEvents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AlertProject')) {
      throw new TypeError('parameter "AlertProject" is required');
    }

    return this.request('GetMetricRelatedEvents', params, options);
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
   */
  getOverviewConfig(params = {}, options = {}) {
    return this.request('GetOverviewConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {Long} groupId - groupId. required.
   * @param {String} groupName - groupName. optional.
   */
  getProductGroupInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'groupId')) {
      throw new TypeError('parameter "groupId" is required');
    }

    return this.request('GetProductGroupInstances', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} category - category. optional.
   * @param {String} instanceId - instanceId. optional.
   */
  getProductGroups(params = {}, options = {}) {
    return this.request('GetProductGroups', params, options);
  }

  /**
   */
  getProductGroupsAction(params = {}, options = {}) {
    return this.request('GetProductGroupsAction', params, options);
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
   * @param {String} ProjectName - projectName. optional.
   * @param {String} Owners - owners. optional.
   */
  grantProjectOwner(params = {}, options = {}) {
    return this.request('GrantProjectOwner', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Integer} Year - year. required.
   * @param {Integer} WeekOfYear - weekOfYear. required.
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
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} Id - id. optional.
   * @param {String} Name - name. optional.
   * @param {String} Namespace - namespace. optional.
   * @param {String} Dimension - dimension. optional.
   * @param {String} State - state. optional.
   * @param {Boolean} IsEnable - isEnable. optional.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {Integer} PageSize - size. optional. default: 100.
   */
  listAlarm(params = {}, options = {}) {
    return this.request('ListAlarm', params, options);
  }

  /**
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Id - id. optional.
   * @param {Integer} Size - size. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Cursor - cursor. optional.
   */
  listAlarmHistory(params = {}, options = {}) {
    return this.request('ListAlarmHistory', params, options);
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
   * @param {String} ProjectName - projectName. required.
   * @param {String} AlertName - alertName. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} Service - service. optional.
   * @param {String} Cluster - cluster. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} MetricProject - metricProject. optional.
   */
  listAlert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('ListAlert', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} AlertName - alertName. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} Service - service. optional.
   * @param {String} Cluster - cluster. optional.
   * @param {String} ServerRole - serverRole. optional.
   * @param {String} Host - host. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} GroupId - groupId. optional.
   */
  listAlertState(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('ListAlertState', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} AlertName - alertName. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} Service - service. optional.
   * @param {String} Cluster - cluster. optional.
   * @param {String} ServerRole - serverRole. optional.
   * @param {String} Host - host. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listAlertStateByDimensions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('ListAlertStateByDimensions', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} AlertName - alertName. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} Service - service. optional.
   * @param {String} Cluster - cluster. optional.
   * @param {String} ServerRole - serverRole. optional.
   * @param {String} Host - host. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listAlertStateFaultList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('ListAlertStateFaultList', params, options);
  }

  /**
   * @param {Long} TemplateId - templateId. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listAlertTemplate(params = {}, options = {}) {
    return this.request('ListAlertTemplate', params, options);
  }

  /**
   * @param {String} ProjectName - project. optional.
   * @param {String} Namespace - namespace. optional.
   * @param {String} NamePrefix - namePrefix. optional.
   * @param {String} MetricName - metricName. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} AlarmState - alarmState. optional.
   * @param {Integer} NextToken - nextToken. optional.
   * @param {Integer} MaxRecords - maxRecords. optional.
   * @param {String} EnableState - enableState. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} RuleName - ruleName. optional.
   */
  listCMSAlert(params = {}, options = {}) {
    return this.request('ListCMSAlert', params, options);
  }

  /**
   * @param {String} ProjectName - project. optional.
   * @param {String} Namespace - namespace. optional.
   * @param {String} NamePrefix - namePrefix. optional.
   * @param {String} MetricName - metricName. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} AlarmState - alarmState. optional.
   * @param {Integer} NextToken - nextToken. optional.
   * @param {Integer} MaxRecords - maxRecords. optional.
   * @param {String} EnableState - enableState. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} RuleName - ruleName. optional.
   */
  listCMSAlertNew(params = {}, options = {}) {
    return this.request('ListCMSAlertNew', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} ContactName - contactName. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listContact(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('ListContact', params, options);
  }

  /**
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {Integer} PageSize - size. optional. default: 100.
   */
  listContactGroup(params = {}, options = {}) {
    return this.request('ListContactGroup', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} MetricName - metricName. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listDBMetric(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('ListDBMetric', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} SourceName - sourceName. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listDBSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('ListDBSource', params, options);
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
   * @param {String} ProjectName - projectName. required.
   * @param {String} AlertName - alertName. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listDimensions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('ListDimensions', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} MetricName - metricName. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listEventMetric(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('ListEventMetric', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {Long} Offset - offset. optional.
   * @param {Long} Length - length. optional.
   */
  listEventTrigger(params = {}, options = {}) {
    return this.request('ListEventTrigger', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} Level - level. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listLevelChannel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('ListLevelChannel', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} MetricName - metricName. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listLogHubMetric(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('ListLogHubMetric', params, options);
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
   * @param {String} project - project. optional.
   * @param {String} metric - metric. optional.
   */
  listMetricMeta(params = {}, options = {}) {
    return this.request('ListMetricMeta', params, options);
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
   * @param {String} ProjectName - projectName. required.
   * @param {String} AlertName - alertName. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} Service - service. optional.
   * @param {String} Cluster - cluster. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} GroupId - groupId. optional.
   */
  listNotifyHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('ListNotifyHistory', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} AlertName - alertName. optional.
   * @param {String} Namespace - namespace. optional.
   * @param {String} MetricName - metricName. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} Service - service. optional.
   * @param {String} Cluster - cluster. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Cursor - cursor. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {Integer} SendStatus - sendStatus. optional.
   * @param {Boolean} Ascending - ascending. optional.
   */
  listNotifyHistoryNew(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('ListNotifyHistoryNew', params, options);
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
   */
  listProject(params = {}, options = {}) {
    return this.request('ListProject', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} GroupId - groupId. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} EventType - eventType. optional.
   * @param {String} EventName - eventName. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Cursor - cursor. optional.
   */
  listProjectsEvents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('ListProjectsEvents', params, options);
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
   * @param {String} groupId - groupId. required.
   * @param {String} sortGroups - sortGroups. optional.
   * @param {String} type - type. optional.
   */
  moveMetric(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'groupId')) {
      throw new TypeError('parameter "groupId" is required');
    }

    return this.request('MoveMetric', params, options);
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
    options.method = 'POST';
    return this.request('PutAlertTemplate', params, options);
  }

  /**
   * @param {String} ProjectName - project. optional.
   * @param {String} Type - type. optional.
   * @param {String} Alarms - alarms. optional.
   */
  putCMSAlert(params = {}, options = {}) {
    return this.request('PutCMSAlert', params, options);
  }

  /**
   * @param {String} groupId - groupId. required.
   * @param {String} chartName - chartName. required.
   * @param {String} chartType - chartType. required.
   * @param {String} metrics - metrics. optional.
   * @param {Integer} width - width. optional.
   * @param {Integer} height - height. optional.
   * @param {String} style - style. optional.
   * @param {String} i18nKey - i18nKey. optional.
   * @param {String} id - id. optional.
   * @param {String} params - params. optional.
   * @param {String} unit - unit. optional.
   * @param {String} valueRange - valueRange. optional.
   * @param {String} type - type. optional.
   */
  putChartMetric(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'groupId')) {
      throw new TypeError('parameter "groupId" is required');
    }

    if (!hasOwnProperty(params, 'chartName')) {
      throw new TypeError('parameter "chartName" is required');
    }

    if (!hasOwnProperty(params, 'chartType')) {
      throw new TypeError('parameter "chartType" is required');
    }

    options.method = 'POST';
    return this.request('PutChartMetric', params, options);
  }

  /**
   * @param {String} groupName - groupName. required.
   * @param {Integer} timeRange - timeRange. optional.
   * @param {Integer} interval - interval. optional.
   * @param {String} params - params. optional.
   * @param {String} groupId - groupId. optional.
   * @param {String} type - type. optional.
   */
  putDashboardConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'groupName')) {
      throw new TypeError('parameter "groupName" is required');
    }

    options.method = 'POST';
    return this.request('PutDashboardConfig', params, options);
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
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
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
   * @param {String} ProjectName - projectName. optional.
   * @param {String} Owners - owners. optional.
   */
  removeProjectOwner(params = {}, options = {}) {
    return this.request('RemoveProjectOwner', params, options);
  }

  /**
   * @param {String} ProjectName - project. required.
   * @param {String} Namespace - namespace. optional.
   * @param {String} NamePrefix - namePrefix. optional.
   * @param {String} MetricName - metricName. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} AlarmState - alarmState. optional.
   * @param {Integer} nextToken - page. optional.
   * @param {Integer} MaxRecords - pageSize. optional.
   * @param {String} Service - service. optional.
   * @param {String} Cluster - cluster. optional.
   */
  searchAlert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('SearchAlert', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} Contacts - contacts. optional.
   * @param {String} Subject - subject. optional.
   * @param {String} Body - body. optional.
   */
  sendAlarm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    options.method = 'POST';
    return this.request('SendAlarm', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} eventProduct - eventProduct. optional.
   * @param {String} Uuid - uuid. optional.
   * @param {String} EventName - eventName. optional.
   * @param {String} ShowName - showName. optional.
   * @param {String} Detail - detail. optional.
   * @param {String} appGroupId - appGroupId. optional.
   * @param {String} appGroupName - appGroupName. optional.
   * @param {String} ConditionJson - conditionJson. optional.
   * @param {String} MatchJson - matchJson. optional.
   * @param {String} TargetListJson - targetListJson. optional.
   */
  setEventTrigger(params = {}, options = {}) {
    return this.request('SetEventTrigger', params, options);
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
   * @param {String} uuid - uuid. required.
   * @param {Integer} status - status. required.
   */
  subscribeGoc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'uuid')) {
      throw new TypeError('parameter "uuid" is required');
    }

    if (!hasOwnProperty(params, 'status')) {
      throw new TypeError('parameter "status" is required');
    }

    return this.request('SubscribeGoc', params, options);
  }

  /**
   * @param {String} TaskName - taskName. required.
   * @param {String} TaskType - taskType. required.
   * @param {String} TaskScope - taskScope. required.
   * @param {Long} GroupId - groupId. required.
   * @param {String} GroupName - groupName. optional.
   * @param {String} JsonData - jsonData. required.
   * @param {RepeatList} InstanceList - instanceListJson. optional.
   * @param {String} AlertConfig - alertConfigJson. required.
   */
  taskConfigCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskName')) {
      throw new TypeError('parameter "TaskName" is required');
    }

    if (!hasOwnProperty(params, 'TaskType')) {
      throw new TypeError('parameter "TaskType" is required');
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
   * @param {Long} Id - id. required.
   * @param {String} TaskName - taskName. required.
   * @param {String} TaskType - taskType. required.
   * @param {String} TaskScope - taskScope. required.
   * @param {Long} GroupId - groupId. required.
   * @param {String} GroupName - groupName. optional.
   * @param {String} JsonData - jsonData. required.
   * @param {RepeatList} InstanceList - instanceListJson. required.
   * @param {String} AlertConfig - alertConfigJson. required.
   */
  taskConfigModify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'TaskName')) {
      throw new TypeError('parameter "TaskName" is required');
    }

    if (!hasOwnProperty(params, 'TaskType')) {
      throw new TypeError('parameter "TaskType" is required');
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

    if (!hasOwnProperty(params, 'InstanceList')) {
      throw new TypeError('parameter "InstanceList" is required');
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
   * @param {String} ProjectName - projectName. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  unhealthyInstanceCountByGroupId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('UnhealthyInstanceCountByGroupId', params, options);
  }

  /**
   * @param {String} uuid - uuid. required.
   */
  unsubscribeGoc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'uuid')) {
      throw new TypeError('parameter "uuid" is required');
    }

    return this.request('UnsubscribeGoc', params, options);
  }

  /**
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {Integer} Period - period. optional.
   * @param {String} Statistics - statistics. optional.
   * @param {String} ComparisonOperator - comparisonOperator. optional.
   * @param {String} Threshold - threshold. optional.
   * @param {String} ContactGroups - contactGroups. optional.
   * @param {Integer} StartTime - startTime. optional.
   * @param {Integer} EndTime - endTime. optional.
   * @param {Integer} SilenceTime - silenceTime. optional.
   * @param {Integer} EvaluationCount - evaluationCount. optional.
   * @param {Integer} NotifyType - notifyType. optional.
   */
  updateAlarm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateAlarm', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} AlertName - alertName. optional.
   * @param {String} Alert - alert. optional.
   */
  updateAlert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('UpdateAlert', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} Alert - alert. required.
   */
  updateAlertByGroupId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'Alert')) {
      throw new TypeError('parameter "Alert" is required');
    }

    return this.request('UpdateAlertByGroupId', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} ContactGroups - contactGroups. optional.
   */
  updateAlertContactGroupByGroupId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('UpdateAlertContactGroupByGroupId', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} ContactName - contactName. optional.
   * @param {String} Contact - contact. optional.
   */
  updateContact(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('UpdateContact', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} GroupName - groupName. optional.
   * @param {String} ContactGroup - contactGroup. optional.
   */
  updateContactGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('UpdateContactGroup', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} MetricName - metricName. required.
   * @param {String} Metric - metric. optional.
   */
  updateDBMetric(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'MetricName')) {
      throw new TypeError('parameter "MetricName" is required');
    }

    return this.request('UpdateDBMetric', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} SourceName - sourceName. required.
   * @param {String} Source - source. optional.
   */
  updateDBSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'SourceName')) {
      throw new TypeError('parameter "SourceName" is required');
    }

    return this.request('UpdateDBSource', params, options);
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
   * @param {String} ProjectName - projectName. required.
   * @param {String} AlertName - alertName. optional.
   * @param {String} DimensionsId - dimensionsId. required.
   * @param {String} Dimensions - dimensions. optional.
   */
  updateDimensions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'DimensionsId')) {
      throw new TypeError('parameter "DimensionsId" is required');
    }

    return this.request('UpdateDimensions', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} Groups - groups. optional.
   */
  updateDimensionsByGroupId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    options.method = 'POST';
    return this.request('UpdateDimensionsByGroupId', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} MetricName - metricName. required.
   * @param {String} Metric - metric. optional.
   */
  updateEventMetric(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'MetricName')) {
      throw new TypeError('parameter "MetricName" is required');
    }

    return this.request('UpdateEventMetric', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} Uuid - uuid. optional.
   * @param {String} ShowName - showName. optional.
   * @param {String} Detail - detail. optional.
   */
  updateEventTriggerDesc(params = {}, options = {}) {
    return this.request('UpdateEventTriggerDesc', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} Level - level. required.
   * @param {String} LevelChannelSetting - levelChannelSetting. optional.
   */
  updateLevelChannel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'Level')) {
      throw new TypeError('parameter "Level" is required');
    }

    return this.request('UpdateLevelChannel', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} MetricName - metricName. required.
   * @param {String} Metric - metric. optional.
   */
  updateLogHubMetric(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'MetricName')) {
      throw new TypeError('parameter "MetricName" is required');
    }

    return this.request('UpdateLogHubMetric', params, options);
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
   * @param {String} TemplateId - templateId. required.
   * @param {String} GroupIds - groupIds. required.
   */
  updateTemplateApplyGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    if (!hasOwnProperty(params, 'GroupIds')) {
      throw new TypeError('parameter "GroupIds" is required');
    }

    return this.request('UpdateTemplateApplyGroups', params, options);
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
   * @param {String} groupJson - groupJson. required.
   */
  putProductGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'groupJson')) {
      throw new TypeError('parameter "groupJson" is required');
    }

    options.method = 'POST';
    return this.request('putProductGroup', params, options);
  }

}

module.exports = Client;

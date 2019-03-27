
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-03-08';
    super(config);
  }

  /**
   * @param {Long} UserId - userId. optional.
   */
  accessKeyGet(params = {}, options = {}) {
    return this.request('AccessKeyGet', params, options);
  }

  /**
   * @param {Long} GroupId - groupId. required.
   * @param {String} Instances - instances. optional.
   */
  addMyGroupInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('AddMyGroupInstances', params, options);
  }

  /**
   * @param {Long} SilenceTime - silenceTime. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {String} TemplateIds - templateIds. required.
   * @param {Long} EnableStartTime - enableStartTime. optional.
   * @param {Long} EnableEndTime - enableEndTime. optional.
   * @param {Long} NotifyLevel - notifyLevel. optional.
   * @param {String} ApplyMode - applyMode. optional.
   * @param {String} Webhook - webhook. optional.
   */
  applyMonitoringTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'TemplateIds')) {
      throw new TypeError('parameter "TemplateIds" is required');
    }

    return this.request('ApplyMonitoringTemplate', params, options);
  }

  /**
   * @param {String} TemplateIds - templateIds. required.
   * @param {Long} GroupId - groupId. required.
   * @param {Long} SilenceTime - silenceTime. optional.
   * @param {Long} EnableStartTime - enableStartTime. optional.
   * @param {Long} EnableEndTime - enableEndTime. optional.
   * @param {Long} NotifyLevel - notifyLevel. optional.
   * @param {String} ApplyMode - applyMode. optional.
   */
  applyTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateIds')) {
      throw new TypeError('parameter "TemplateIds" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('ApplyTemplate', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} Namespace - namespace. required.
   * @param {String} MetricName - metricName. required.
   * @param {String} Dimensions - dimensions. required.
   * @param {Integer} Period - period. optional. default: 300.
   * @param {String} Statistics - statistics. required.
   * @param {String} ComparisonOperator - comparisonOperator. required.
   * @param {String} Threshold - threshold. required.
   * @param {Integer} EvaluationCount - evaluationCount. optional. default: 3.
   * @param {String} ContactGroups - contactGroups. optional.
   * @param {Integer} StartTime - startTime. optional. default: 0.
   * @param {Integer} EndTime - endTime. optional. default: 24.
   * @param {Integer} SilenceTime - silenceTime. optional. default: 86400.
   * @param {Integer} NotifyType - notifyType. optional.
   * @param {String} Webhook - webhook. optional.
   * @param {Boolean} DryRun - dryRun. optional.
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

    return this.request('CreateAlarm', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} Namespace - namespace. required.
   * @param {String} AlertTemplatesJson - alertTemplatesJson. required.
   * @param {String} Description - description. optional.
   * @param {String} EventRuleTemplatesJson - eventRuleTemplatesJson. required.
   */
  createMonitoringTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Namespace')) {
      throw new TypeError('parameter "Namespace" is required');
    }

    if (!hasOwnProperty(params, 'AlertTemplatesJson')) {
      throw new TypeError('parameter "AlertTemplatesJson" is required');
    }

    if (!hasOwnProperty(params, 'EventRuleTemplatesJson')) {
      throw new TypeError('parameter "EventRuleTemplatesJson" is required');
    }

    return this.request('CreateMonitoringTemplate', params, options);
  }

  /**
   * @param {Long} GroupId - groupId. required.
   * @param {String} GroupAlertJsonArray - groupAlertJsonArray. optional.
   */
  createMyGroupAlertBatch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('CreateMyGroupAlertBatch', params, options);
  }

  /**
   * @param {String} Type - type. optional.
   * @param {String} GroupName - name. optional.
   * @param {Long} ServiceId - serviceId. optional.
   * @param {String} BindUrl - bindUrl. optional.
   * @param {String} ContactGroups - contactGroups. optional.
   * @param {String} Options - options. optional.
   */
  createMyGroups(params = {}, options = {}) {
    return this.request('CreateMyGroups', params, options);
  }

  /**
   * @param {String} AlertName - alertName. optional.
   * @param {String} PolicyType - type. required.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. optional.
   */
  createNotifyPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PolicyType')) {
      throw new TypeError('parameter "PolicyType" is required');
    }

    return this.request('CreateNotifyPolicy', params, options);
  }

  /**
   * @param {String} Address - address. required.
   * @param {String} TaskType - taskType. required.
   * @param {String} TaskName - taskName. required.
   * @param {String} Interval - interval. optional.
   * @param {String} IspCity - ispCity. required.
   * @param {String} Options - options. optional.
   * @param {String} AlertRule - alertRule. optional.
   * @param {String} AlertIds - alertIds. optional.
   * @param {String} caller - caller. optional.
   */
  createTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Address')) {
      throw new TypeError('parameter "Address" is required');
    }

    if (!hasOwnProperty(params, 'TaskType')) {
      throw new TypeError('parameter "TaskType" is required');
    }

    if (!hasOwnProperty(params, 'TaskName')) {
      throw new TypeError('parameter "TaskName" is required');
    }

    if (!hasOwnProperty(params, 'IspCity')) {
      throw new TypeError('parameter "IspCity" is required');
    }

    return this.request('CreateTask', params, options);
  }

  /**
   * @param {String} Id - id. required.
   */
  deleteAlarm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteAlarm', params, options);
  }

  /**
   * @param {String} GroupId - groupId. required.
   * @param {String} MetricName - metricName. optional.
   * @param {String} Md5 - md5. optional.
   * @param {String} UUID - uuid. optional.
   */
  deleteCustomMetric(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DeleteCustomMetric', params, options);
  }

  /**
   * @param {String} RuleName - ruleName. optional.
   * @param {RepeatList} RuleNames - ruleNames. optional.
   */
  deleteEventRule(params = {}, options = {}) {
    return this.request('DeleteEventRule', params, options);
  }

  /**
   * @param {String} RuleName - ruleName. required.
   * @param {RepeatList} Ids - ids. required.
   */
  deleteEventTargets(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleName')) {
      throw new TypeError('parameter "RuleName" is required');
    }

    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    return this.request('DeleteEventTargets', params, options);
  }

  /**
   * @param {Long} GroupId - groupId. required.
   * @param {String} Category - category. required.
   */
  deleteGroupDynamicRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'Category')) {
      throw new TypeError('parameter "Category" is required');
    }

    return this.request('DeleteGroupDynamicRule', params, options);
  }

  /**
   * @param {String} Id - id. optional.
   */
  deleteMonitoringTemplate(params = {}, options = {}) {
    return this.request('DeleteMonitoringTemplate', params, options);
  }

  /**
   * @param {Long} GroupId - groupId. required.
   * @param {String} InstanceIds - instanceIds. optional.
   * @param {String} InstanceIdList - instanceIdList. optional.
   * @param {String} Category - category. optional.
   */
  deleteMyGroupInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DeleteMyGroupInstances', params, options);
  }

  /**
   * @param {Long} GroupId - id. optional.
   */
  deleteMyGroups(params = {}, options = {}) {
    return this.request('DeleteMyGroups', params, options);
  }

  /**
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} PolicyType - type. required.
   * @param {String} Id - id. optional.
   * @param {String} AlertName - alertName. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. optional.
   */
  deleteNotifyPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PolicyType')) {
      throw new TypeError('parameter "PolicyType" is required');
    }

    return this.request('DeleteNotifyPolicy', params, options);
  }

  /**
   * @param {RepeatList} Names - names. required.
   */
  deleteS2SEventRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Names')) {
      throw new TypeError('parameter "Names" is required');
    }

    return this.request('DeleteS2SEventRule', params, options);
  }

  /**
   * @param {String} RuleName - ruleName. required.
   * @param {RepeatList} Ids - ids. required.
   */
  deleteS2SEventTargets(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleName')) {
      throw new TypeError('parameter "RuleName" is required');
    }

    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    return this.request('DeleteS2SEventTargets', params, options);
  }

  /**
   * @param {String} TaskIds - taskIds. required.
   * @param {Integer} IsDeleteAlarms - isDeleteAlarms. optional.
   */
  deleteTasks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskIds')) {
      throw new TypeError('parameter "TaskIds" is required');
    }

    return this.request('DeleteTasks', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} AlertName - alertName. optional.
   * @param {String} RuleName - ruleName. optional.
   * @param {String} Namespace - metricProject. optional.
   * @param {String} MetricName - metricName. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} Status - status. optional.
   * @param {String} State - state. optional.
   * @param {Boolean} Ascending - ascending. optional.
   * @param {Boolean} OnlyCount - onlyCount. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} Page - page. optional.
   */
  describeAlarmHistory(params = {}, options = {}) {
    return this.request('DescribeAlarmHistory', params, options);
  }

  /**
   * @param {String} GroupBy - groupBy. optional.
   * @param {String} MetricName - metricName. optional.
   * @param {Boolean} EnableState - enableState. optional.
   * @param {String} Namespace - namespace. optional.
   * @param {String} Page - page. optional.
   * @param {String} PageSize - pageSize. optional.
   * @param {String} AlertState - alertState. optional.
   * @param {String} DisplayName - displayName. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} Names - alarmNames. optional.
   * @param {String} NameKeyword - alarmNameKeyword. optional.
   */
  describeAlarms(params = {}, options = {}) {
    return this.request('DescribeAlarms', params, options);
  }

  /**
   * @param {String} MetricName - metricName. optional.
   * @param {Boolean} EnableState - enableState. optional.
   * @param {String} Namespace - namespace. required.
   * @param {String} GroupId - groupId. optional.
   * @param {String} Page - page. optional.
   * @param {String} PageSize - pageSize. optional.
   * @param {String} AlertState - alertState. optional.
   * @param {String} Dimensions - dimensions. required.
   */
  describeAlarmsForResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Namespace')) {
      throw new TypeError('parameter "Namespace" is required');
    }

    if (!hasOwnProperty(params, 'Dimensions')) {
      throw new TypeError('parameter "Dimensions" is required');
    }

    return this.request('DescribeAlarmsForResources', params, options);
  }

  /**
   * @param {String} ProductCode - productCode. optional.
   * @param {String} ProductCategory - productCategory. optional.
   */
  describeConsoleViews(params = {}, options = {}) {
    return this.request('DescribeConsoleViews', params, options);
  }

  /**
   * @param {String} ContactName - contactName. required.
   */
  describeContact(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ContactName')) {
      throw new TypeError('parameter "ContactName" is required');
    }

    return this.request('DescribeContact', params, options);
  }

  /**
   * @param {String} RuleName - ruleName. required.
   */
  describeEventRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleName')) {
      throw new TypeError('parameter "RuleName" is required');
    }

    return this.request('DescribeEventRule', params, options);
  }

  /**
   * @param {String} Isp - isp. optional.
   * @param {String} City - city. optional.
   */
  describeISPAreaCity(params = {}, options = {}) {
    return this.request('DescribeISPAreaCity', params, options);
  }

  /**
   * @param {String} TaskId - taskId. optional.
   */
  describeTaskDetail(params = {}, options = {}) {
    return this.request('DescribeTaskDetail', params, options);
  }

  /**
   * @param {String} TaskId - taskId. optional.
   * @param {String} TaskType - taskType. optional.
   * @param {String} Keyword - keyword. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeTasks(params = {}, options = {}) {
    return this.request('DescribeTasks', params, options);
  }

  /**
   * @param {String} Product - product. required.
   * @param {String} UserId - userId. optional.
   */
  disableActiceAlert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Product')) {
      throw new TypeError('parameter "Product" is required');
    }

    return this.request('DisableActiceAlert', params, options);
  }

  /**
   * @param {String} Product - product. required.
   * @param {String} UserId - userId. optional.
   */
  disableActiveAlert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Product')) {
      throw new TypeError('parameter "Product" is required');
    }

    return this.request('DisableActiveAlert', params, options);
  }

  /**
   * @param {String} Id - id. required.
   */
  disableAlarm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DisableAlarm', params, options);
  }

  /**
   * @param {String} RuleName - ruleName. optional.
   * @param {RepeatList} RuleNames - ruleNames. optional.
   */
  disableEventRule(params = {}, options = {}) {
    return this.request('DisableEventRule', params, options);
  }

  /**
   * @param {RepeatList} Names - names. required.
   */
  disableS2SEventRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Names')) {
      throw new TypeError('parameter "Names" is required');
    }

    return this.request('DisableS2SEventRule', params, options);
  }

  /**
   * @param {String} Product - product. required.
   * @param {String} UserId - userId. optional.
   */
  enableActiceAlert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Product')) {
      throw new TypeError('parameter "Product" is required');
    }

    return this.request('EnableActiceAlert', params, options);
  }

  /**
   * @param {String} Product - product. required.
   * @param {String} UserId - userId. optional.
   */
  enableActiveAlert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Product')) {
      throw new TypeError('parameter "Product" is required');
    }

    return this.request('EnableActiveAlert', params, options);
  }

  /**
   * @param {String} Id - id. required.
   */
  enableAlarm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('EnableAlarm', params, options);
  }

  /**
   * @param {String} RuleName - ruleName. optional.
   * @param {RepeatList} RuleNames - ruleNames. optional.
   */
  enableEventRule(params = {}, options = {}) {
    return this.request('EnableEventRule', params, options);
  }

  /**
   * @param {RepeatList} Names - names. required.
   */
  enableS2SEventRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Names')) {
      throw new TypeError('parameter "Names" is required');
    }

    return this.request('EnableS2SEventRule', params, options);
  }

  /**
   * @param {String} GroupName - groupName. required.
   */
  getContacts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('GetContacts', params, options);
  }

  /**
   * @param {String} Name - name. optional.
   * @param {String} Id - id. optional.
   */
  getMonitoringTemplate(params = {}, options = {}) {
    return this.request('GetMonitoringTemplate', params, options);
  }

  /**
   * @param {Long} GroupId - groupId. required.
   * @param {String} AlertName - alertName. required.
   */
  getMyGroupAlert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'AlertName')) {
      throw new TypeError('parameter "AlertName" is required');
    }

    return this.request('GetMyGroupAlert', params, options);
  }

  /**
   * @param {Long} GroupId - id. optional.
   * @param {String} Type - type. optional.
   * @param {Boolean} SelectContactGroups - selectContactGroups. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} BindUrl - bindUrls. optional.
   * @param {String} GroupName - name. optional.
   */
  getMyGroups(params = {}, options = {}) {
    return this.request('GetMyGroups', params, options);
  }

  /**
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} PolicyType - type. required.
   * @param {String} Id - id. optional.
   * @param {String} AlertName - alertName. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. optional.
   */
  getNotifyPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PolicyType')) {
      throw new TypeError('parameter "PolicyType" is required');
    }

    return this.request('GetNotifyPolicy', params, options);
  }

  /**
   */
  getVoneStatus(params = {}, options = {}) {
    return this.request('GetVoneStatus', params, options);
  }

  /**
   * @param {String} UserId - userId. optional.
   * @param {String} Product - product. required.
   */
  listActiveAlertRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Product')) {
      throw new TypeError('parameter "Product" is required');
    }

    return this.request('ListActiveAlertRule', params, options);
  }

  /**
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
   */
  listCategoryMeta(params = {}, options = {}) {
    return this.request('ListCategoryMeta', params, options);
  }

  /**
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {Integer} PageSize - size. optional. default: 100.
   */
  listContactGroup(params = {}, options = {}) {
    return this.request('ListContactGroup', params, options);
  }

  /**
   * @param {String} TargetArn - targetArn. required.
   * @param {String} Page - page. required.
   * @param {String} PageSize - pageSize. required.
   */
  listEventRuleNamesByTarget(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TargetArn')) {
      throw new TypeError('parameter "TargetArn" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListEventRuleNamesByTarget', params, options);
  }

  /**
   * @param {String} NamePrefix - namePrefix. optional.
   * @param {String} Page - page. optional.
   * @param {String} PageSize - pageSize. optional.
   * @param {String} GroupId - groupId. optional.
   */
  listEventRules(params = {}, options = {}) {
    return this.request('ListEventRules', params, options);
  }

  /**
   * @param {String} RuleName - ruleName. required.
   */
  listEventTargetsByRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleName')) {
      throw new TypeError('parameter "RuleName" is required');
    }

    return this.request('ListEventTargetsByRule', params, options);
  }

  /**
   * @param {Long} GroupId - groupId. required.
   */
  listGroupDynamicRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('ListGroupDynamicRule', params, options);
  }

  /**
   * @param {String} Category - category. required.
   * @param {String} Tags - tags. optional.
   * @param {String} Dimension - dimension. optional.
   */
  listMetricMeta(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Category')) {
      throw new TypeError('parameter "Category" is required');
    }

    return this.request('ListMetricMeta', params, options);
  }

  /**
   * @param {String} Name - name. optional.
   * @param {String} Keyword - keyword. optional.
   * @param {Long} Id - id. optional.
   * @param {Boolean} Total - total. optional.
   * @param {Long} PageNumber - pageNumber. optional.
   * @param {Long} PageSize - pageSize. optional.
   * @param {Boolean} History - history. optional.
   */
  listMonitoringTemplates(params = {}, options = {}) {
    return this.request('ListMonitoringTemplates', params, options);
  }

  /**
   * @param {Long} GroupId - id. required.
   */
  listMyGroupCategories(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('ListMyGroupCategories', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Boolean} Total - total. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {String} Category - category. optional.
   * @param {String} Keyword - keyword. optional.
   * @param {String} InstanceIds - instanceIds. optional.
   */
  listMyGroupInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('ListMyGroupInstances', params, options);
  }

  /**
   * @param {Long} GroupId - groupId. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Boolean} Total - total. optional.
   * @param {String} Category - category. optional.
   * @param {String} Keyword - keyword. optional.
   * @param {String} InstanceIds - instanceIds. optional.
   */
  listMyGroupInstancesDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('ListMyGroupInstancesDetails', params, options);
  }

  /**
   * @param {String} Type - type. optional.
   * @param {Boolean} SelectContactGroups - selectContactGroups. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} Keyword - keyword. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} BindUrls - bindUrls. optional.
   * @param {String} GroupName - name. optional.
   */
  listMyGroups(params = {}, options = {}) {
    return this.request('ListMyGroups', params, options);
  }

  /**
   * @param {String} AlertName - alertName. optional.
   * @param {String} PolicyType - type. required.
   * @param {String} Id - id. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. optional.
   */
  listNotifyPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PolicyType')) {
      throw new TypeError('parameter "PolicyType" is required');
    }

    return this.request('ListNotifyPolicy', params, options);
  }

  /**
   * @param {String} UserId - userId. optional.
   */
  listProductOfActiceAlert(params = {}, options = {}) {
    return this.request('ListProductOfActiceAlert', params, options);
  }

  /**
   * @param {String} UserId - userId. optional.
   */
  listProductOfActiveAlert(params = {}, options = {}) {
    return this.request('ListProductOfActiveAlert', params, options);
  }

  /**
   * @param {String} Name - name. optional.
   * @param {String} Page - page. optional.
   * @param {String} PageSize - pageSize. optional.
   */
  listS2SEventRule(params = {}, options = {}) {
    return this.request('ListS2SEventRule', params, options);
  }

  /**
   * @param {String} RuleName - ruleName. required.
   */
  listS2SEventTargets(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleName')) {
      throw new TypeError('parameter "RuleName" is required');
    }

    return this.request('ListS2SEventTargets', params, options);
  }

  /**
   * @param {String} Address - address. optional.
   * @param {String} TaskId - taskId. required.
   * @param {String} TaskName - taskName. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} IspCity - ispCity. optional.
   * @param {String} Options - options. optional.
   * @param {String} AlertRule - alertRule. optional.
   * @param {String} AlertIds - alertIds. optional.
   * @param {String} caller - caller. optional.
   */
  modifyTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('ModifyTask', params, options);
  }

  /**
   * @param {String} UserId - userId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Boolean} Force - force. optional. default: true.
   */
  nodeInstall(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('NodeInstall', params, options);
  }

  /**
   * @param {String} KeyWord - keyWord. optional.
   * @param {Long} UserId - userId. required.
   * @param {String} HostName - hostName. optional.
   * @param {String} InstanceIds - instanceIds. optional.
   * @param {String} SerialNumbers - serialNumbers. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} Status - status. optional.
   * @param {String} InstanceRegionId - instanceRegionId. optional.
   */
  nodeList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('NodeList', params, options);
  }

  /**
   * @param {String} ProcessName - processName. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. optional.
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
   * @param {String} EnableActiveAlert - enableActiveAlert. optional.
   */
  profileSet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('ProfileSet', params, options);
  }

  /**
   * @param {String} MetricList - metricList. optional.
   */
  putCustomMetric(params = {}, options = {}) {
    return this.request('PutCustomMetric', params, options);
  }

  /**
   * @param {String} EventInfo - eventInfo. optional.
   */
  putEvent(params = {}, options = {}) {
    return this.request('PutEvent', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} GroupId - groupId. optional.
   * @param {String} EventType - eventType. optional. default: SYSTEM.
   * @param {String} Description - description. optional.
   * @param {String} State - state. optional. default: ENABLED.
   * @param {RepeatList} EventPattern - eventPatterns. required.
   */
  putEventRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'EventPattern')) {
      throw new TypeError('parameter "EventPattern" is required');
    }

    return this.request('PutEventRule', params, options);
  }

  /**
   * @param {String} RuleName - ruleName. required.
   * @param {RepeatList} FcParameters - fcParameterList. optional.
   * @param {RepeatList} ContactParameters - contactParameterList. optional.
   * @param {RepeatList} MnsParameters - mnsParameterList. optional.
   * @param {RepeatList} WebhookParameters - webhookParameterList. optional.
   * @param {RepeatList} SlsParameters - slsParameterList. optional.
   */
  putEventTargets(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleName')) {
      throw new TypeError('parameter "RuleName" is required');
    }

    return this.request('PutEventTargets', params, options);
  }

  /**
   * @param {Long} GroupId - groupId. required.
   * @param {String} GroupRuleArrayJson - groupRuleArrayJson. required.
   */
  putGroupDynamicRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'GroupRuleArrayJson')) {
      throw new TypeError('parameter "GroupRuleArrayJson" is required');
    }

    return this.request('PutGroupDynamicRule', params, options);
  }

  /**
   * @param {String} Description - description. optional.
   * @param {String} Namespace - namespace. required.
   * @param {String} MetricName - metricName. required.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} AlertName - alertName. required.
   * @param {Integer} EvaluationCount - evaluationCount. optional. default: 3.
   * @param {String} ContactGroups - contactGroups. optional.
   * @param {String} EffectiveInterval - effectiveInterval. optional.
   * @param {String} Period - period. optional. default: 300.
   * @param {Integer} SilenceTime - silenceTime. optional. default: 86400.
   * @param {String} Webhook - webhook. optional.
   * @param {String} DisplayName - displayName. required.
   * @param {String} NoEffectiveInterval - noEffectiveInterval. optional.
   * @param {String} Resources - resources. required.
   * @param {String} Subject - subject. optional.
   * @param {Integer} Level - level. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} GroupName - groupName. optional.
   * @param {String} DeepDive - deepDive. optional.
   * @param {String} Statistics - statistics. required.
   * @param {String} ComparisonOperator - comparisonOperator. required.
   * @param {String} Threshold - threshold. required.
   * @param {String} Filter - filter. optional.
   * @param {String} Interval - interval. optional.
   */
  putMetricAlarm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Namespace')) {
      throw new TypeError('parameter "Namespace" is required');
    }

    if (!hasOwnProperty(params, 'MetricName')) {
      throw new TypeError('parameter "MetricName" is required');
    }

    if (!hasOwnProperty(params, 'AlertName')) {
      throw new TypeError('parameter "AlertName" is required');
    }

    if (!hasOwnProperty(params, 'DisplayName')) {
      throw new TypeError('parameter "DisplayName" is required');
    }

    if (!hasOwnProperty(params, 'Resources')) {
      throw new TypeError('parameter "Resources" is required');
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

    return this.request('PutMetricAlarm', params, options);
  }

  /**
   * @param {String} Body - body. optional.
   */
  putMetricData(params = {}, options = {}) {
    return this.request('PutMetricData', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} State - state. optional. default: ENABLED.
   * @param {RepeatList} EventPattern - eventPattern. optional.
   * @param {Json} JSONFilter - jsonFilter. optional.
   */
  putS2SEventRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('PutS2SEventRule', params, options);
  }

  /**
   * @param {String} RuleName - ruleName. required.
   * @param {RepeatList} FunctionComputers - fcParameterList. optional.
   * @param {RepeatList} Mns - mnsParameterList. optional.
   * @param {String} Actions - actions. optional.
   */
  putS2SEventTargets(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleName')) {
      throw new TypeError('parameter "RuleName" is required');
    }

    return this.request('PutS2SEventTargets', params, options);
  }

  /**
   * @param {String} EventInfo - eventInfo. optional.
   */
  putSystemEvent(params = {}, options = {}) {
    return this.request('PutSystemEvent', params, options);
  }

  /**
   * @param {String} QueryJson - queryJson. optional.
   */
  queryCustomEventCount(params = {}, options = {}) {
    return this.request('QueryCustomEventCount', params, options);
  }

  /**
   * @param {String} QueryJson - queryJson. optional.
   */
  queryCustomEventDetail(params = {}, options = {}) {
    return this.request('QueryCustomEventDetail', params, options);
  }

  /**
   * @param {String} QueryJson - queryJson. optional.
   */
  queryCustomEventHistogram(params = {}, options = {}) {
    return this.request('QueryCustomEventHistogram', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} MetricName - metricName. optional.
   * @param {String} Dimension - dimension. optional.
   * @param {String} Md5 - md5. optional.
   * @param {String} Page - page. optional.
   * @param {String} Size - size. optional.
   */
  queryCustomMetricList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('QueryCustomMetricList', params, options);
  }

  /**
   * @param {String} TaskId - taskId. required.
   * @param {String} TimeRange - timeRange. optional.
   */
  queryErrorDistribution(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('QueryErrorDistribution', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
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
   * @param {String} Project - project. required.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
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
   * @param {String} Project - project. required.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
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
   * @param {String} Project - project. optional.
   * @param {String} Labels - labels. optional.
   * @param {String} Metric - metric. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryMetricMeta(params = {}, options = {}) {
    return this.request('QueryMetricMeta', params, options);
  }

  /**
   * @param {String} Period - period. optional.
   * @param {String} Project - project. required.
   * @param {String} Metric - metric. required.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
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
   * @param {String} TaskId - taskId. optional.
   * @param {String} Type - type. optional.
   * @param {String} metricName - metricName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Period - period. optional.
   * @param {String} Cursor - cursor. optional.
   * @param {Integer} Length - length. optional.
   */
  queryMonitorData(params = {}, options = {}) {
    return this.request('QueryMonitorData', params, options);
  }

  /**
   * @param {String} Labels - labels. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryProjectMeta(params = {}, options = {}) {
    return this.request('QueryProjectMeta', params, options);
  }

  /**
   * @param {String} TaskId - taskId. required.
   * @param {String} TimeRange - timeRange. optional.
   */
  queryStaticsAvailability(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('QueryStaticsAvailability', params, options);
  }

  /**
   * @param {String} TaskId - taskId. required.
   * @param {String} TimeRange - timeRange. optional.
   */
  queryStaticsErrorRate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('QueryStaticsErrorRate', params, options);
  }

  /**
   * @param {String} TaskId - taskId. required.
   * @param {String} TimeRange - timeRange. optional.
   */
  queryStaticsResponseTime(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('QueryStaticsResponseTime', params, options);
  }

  /**
   * @param {String} QueryJson - queryJson. optional.
   */
  querySystemEventCount(params = {}, options = {}) {
    return this.request('QuerySystemEventCount', params, options);
  }

  /**
   * @param {String} Product - product. required.
   * @param {String} EventName - eventName. required.
   */
  querySystemEventDemo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Product')) {
      throw new TypeError('parameter "Product" is required');
    }

    if (!hasOwnProperty(params, 'EventName')) {
      throw new TypeError('parameter "EventName" is required');
    }

    return this.request('QuerySystemEventDemo', params, options);
  }

  /**
   * @param {String} QueryJson - queryJson. optional.
   */
  querySystemEventDetail(params = {}, options = {}) {
    return this.request('QuerySystemEventDetail', params, options);
  }

  /**
   * @param {String} QueryJson - queryJson. optional.
   */
  querySystemEventHistogram(params = {}, options = {}) {
    return this.request('QuerySystemEventHistogram', params, options);
  }

  /**
   */
  querySystemEventMeta(params = {}, options = {}) {
    return this.request('QuerySystemEventMeta', params, options);
  }

  /**
   */
  querySystemEventMetaGrey(params = {}, options = {}) {
    return this.request('QuerySystemEventMetaGrey', params, options);
  }

  /**
   */
  queryTaskConfig(params = {}, options = {}) {
    return this.request('QueryTaskConfig', params, options);
  }

  /**
   * @param {String} TaskId - taskId. optional.
   * @param {String} Type - type. optional.
   * @param {String} metricName - metricName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Period - period. optional.
   * @param {String} Cursor - cursor. optional.
   * @param {Integer} Length - length. optional.
   */
  queryTaskMonitorData(params = {}, options = {}) {
    return this.request('QueryTaskMonitorData', params, options);
  }

  /**
   * @param {String} Product - product. required.
   * @param {String} EventName - eventName. required.
   * @param {String} GroupId - groupId. optional.
   * @param {String} EventContent - eventContent. optional.
   */
  sendDryRunSystemEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Product')) {
      throw new TypeError('parameter "Product" is required');
    }

    if (!hasOwnProperty(params, 'EventName')) {
      throw new TypeError('parameter "EventName" is required');
    }

    return this.request('SendDryRunSystemEvent', params, options);
  }

  /**
   * @param {String} TaskIds - taskIds. required.
   */
  startTasks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskIds')) {
      throw new TypeError('parameter "TaskIds" is required');
    }

    return this.request('StartTasks', params, options);
  }

  /**
   * @param {String} TaskIds - taskIds. required.
   */
  stopTasks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskIds')) {
      throw new TypeError('parameter "TaskIds" is required');
    }

    return this.request('StopTasks', params, options);
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
   * @param {Long} GroupId - groupId. optional.
   * @param {Long} Id - id. optional.
   * @param {String} TaskName - taskName. optional.
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
   * @param {String} Name - name. optional.
   * @param {String} Id - id. required.
   * @param {Integer} Period - period. optional.
   * @param {String} Statistics - statistics. optional.
   * @param {String} ComparisonOperator - comparisonOperator. optional.
   * @param {String} Threshold - threshold. required.
   * @param {String} ContactGroups - contactGroups. optional.
   * @param {Integer} StartTime - startTime. optional.
   * @param {Integer} EndTime - endTime. optional.
   * @param {Integer} SilenceTime - silenceTime. optional.
   * @param {Integer} EvaluationCount - evaluationCount. optional.
   * @param {Integer} NotifyType - notifyType. optional.
   * @param {String} Webhook - webhook. optional.
   * @param {Boolean} DryRun - dryRun. optional.
   */
  updateAlarm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Threshold')) {
      throw new TypeError('parameter "Threshold" is required');
    }

    return this.request('UpdateAlarm', params, options);
  }

  /**
   * @param {String} Name - name. optional.
   * @param {String} AlertTemplatesJson - alertTemplatesJson. required.
   * @param {String} Description - description. optional.
   * @param {Long} Id - id. required.
   * @param {Long} RestVersion - version. required.
   * @param {String} EventRuleTemplatesJson - eventRuleTemplatesJson. required.
   */
  updateMonitoringTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AlertTemplatesJson')) {
      throw new TypeError('parameter "AlertTemplatesJson" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'RestVersion')) {
      throw new TypeError('parameter "RestVersion" is required');
    }

    if (!hasOwnProperty(params, 'EventRuleTemplatesJson')) {
      throw new TypeError('parameter "EventRuleTemplatesJson" is required');
    }

    return this.request('UpdateMonitoringTemplate', params, options);
  }

  /**
   * @param {String} GroupAlertJson - groupAlertJson. required.
   */
  updateMyGroupAlert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupAlertJson')) {
      throw new TypeError('parameter "GroupAlertJson" is required');
    }

    return this.request('UpdateMyGroupAlert', params, options);
  }

  /**
   * @param {Long} GroupId - groupId. required.
   * @param {String} Instances - instances. optional.
   */
  updateMyGroupInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('UpdateMyGroupInstances', params, options);
  }

  /**
   * @param {Long} GroupId - groupId. required.
   * @param {String} Masters - masters. optional.
   * @param {String} Readers - readers. optional.
   */
  updateMyGroupMembers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('UpdateMyGroupMembers', params, options);
  }

  /**
   * @param {String} BindUrls - bindUrls. optional.
   * @param {String} GroupId - id. required.
   * @param {String} GroupName - name. optional.
   * @param {Long} ServiceId - serviceId. optional.
   * @param {String} Type - type. optional.
   * @param {String} ContactGroups - contactGroups. optional.
   */
  updateMyGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('UpdateMyGroups', params, options);
  }

}

module.exports = Client;

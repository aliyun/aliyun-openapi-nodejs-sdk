
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-03-01';
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
   * @param {String} data - data. required.
   */
  cmsPayCallBack(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CmsPayCallBack', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  cmsPayRefund(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CmsPayRefund', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  cmsPayVerify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CmsPayVerify', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
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
   * @param {String} Webhook - webhook. optional.
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

    return this.request('CreateAlarm', params, options);
  }

  /**
   * @param {String} InstanceRegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Category - category. required.
   * @param {String} Key - key. optional.
   * @param {String} Properties - jsonProps. optional.
   */
  createInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceRegionId')) {
      throw new TypeError('parameter "InstanceRegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'Category')) {
      throw new TypeError('parameter "Category" is required');
    }

    return this.request('CreateInstances', params, options);
  }

  /**
   * @param {String} GroupName - name. optional.
   * @param {Long} ServiceId - serviceId. optional.
   * @param {String} BindUrl - bindUrl. optional.
   * @param {String} Type - type. optional.
   * @param {String} ContactGroups - contactGroups. optional.
   */
  createMyGroups(params = {}, options = {}) {
    return this.request('CreateMyGroups', params, options);
  }

  /**
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} PolicyType - type. required.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {String} AlertName - alertName. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  createNotifyPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PolicyType')) {
      throw new TypeError('parameter "PolicyType" is required');
    }

    return this.request('CreateNotifyPolicy', params, options);
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
   * @param {String} InstanceRegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Category - category. required.
   * @param {String} Key - key. optional.
   * @param {String} Properties - jsonProps. optional.
   */
  deleteInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceRegionId')) {
      throw new TypeError('parameter "InstanceRegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'Category')) {
      throw new TypeError('parameter "Category" is required');
    }

    return this.request('DeleteInstances', params, options);
  }

  /**
   * @param {Long} GroupId - groupId. required.
   * @param {String} InstanceIds - instanceIds. optional.
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
   */
  deleteNotifyPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PolicyType')) {
      throw new TypeError('parameter "PolicyType" is required');
    }

    return this.request('DeleteNotifyPolicy', params, options);
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
   * @param {String} GroupId - groupId. optional.
   * @param {String} GroupBy - groupBy. optional.
   * @param {String} MetricName - metricName. optional.
   * @param {Boolean} EnableState - enableState. optional.
   * @param {String} Namespace - namespace. optional.
   * @param {String} Page - page. optional.
   * @param {String} PageSize - pageSize. optional.
   * @param {String} AlertState - alertState. optional.
   * @param {String} DisplayName - displayName. optional.
   * @param {String} Names - alarmNames. optional.
   * @param {String} NameKeyword - alarmNameKeyword. optional.
   */
  describeAlarms(params = {}, options = {}) {
    return this.request('DescribeAlarms', params, options);
  }

  /**
   * @param {String} AlertState - alertState. optional.
   * @param {String} MetricName - metricName. optional.
   * @param {Boolean} EnableState - enableState. optional.
   * @param {String} Namespace - namespace. required.
   * @param {String} GroupId - groupId. optional.
   * @param {String} Page - page. optional.
   * @param {String} PageSize - pageSize. optional.
   * @param {String} Dimensions - dimensions. required.
   */
  describeAlarmsForDimensions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Namespace')) {
      throw new TypeError('parameter "Namespace" is required');
    }

    if (!hasOwnProperty(params, 'Dimensions')) {
      throw new TypeError('parameter "Dimensions" is required');
    }

    return this.request('DescribeAlarmsForDimensions', params, options);
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
   * @param {String} Country - country. required.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   * @param {Long} Level - level. optional.
   * @param {String} Url - url. optional.
   * @param {String} Prompt - prompt. optional.
   */
  doCheckResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('DoCheckResource', params, options);
  }

  /**
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   */
  doLogicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('DoLogicalDeleteResource', params, options);
  }

  /**
   * @param {Long} Hid - hid. required.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   */
  doPhysicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('DoPhysicalDeleteResource', params, options);
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
   * @param {String} EventInfo - eventInfo. optional.
   */
  eventCustomPopUpload(params = {}, options = {}) {
    return this.request('EventCustomPopUpload', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. optional.
   * @param {Long} GroupId - id. optional.
   * @param {String} Type - type. optional.
   * @param {Boolean} SelectContactGroups - selectContactGroups. optional.
   * @param {String} BindUrl - bindUrl. optional.
   * @param {String} GroupName - name. optional.
   */
  getMyGroups(params = {}, options = {}) {
    return this.request('GetMyGroups', params, options);
  }

  /**
   * @param {String} AlertName - alertName. optional.
   * @param {String} PolicyType - type. required.
   * @param {String} Id - id. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  getNotifyPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PolicyType')) {
      throw new TypeError('parameter "PolicyType" is required');
    }

    return this.request('GetNotifyPolicy', params, options);
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
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {Integer} PageSize - size. optional. default: 100.
   */
  listContactGroup(params = {}, options = {}) {
    return this.request('ListContactGroup', params, options);
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
   * @param {Boolean} Total - total. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {String} Category - category. optional.
   */
  listMyGroupInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('ListMyGroupInstances', params, options);
  }

  /**
   * @param {Boolean} Total - total. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {String} Category - category. optional.
   */
  listMyGroupInstancesDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('ListMyGroupInstancesDetails', params, options);
  }

  /**
   * @param {Boolean} SelectContactGroups - selectContactGroups. optional.
   * @param {String} Keyword - keyword. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} Type - type. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} BindUrls - bindUrls. optional.
   * @param {String} GroupName - name. optional.
   */
  listMyGroups(params = {}, options = {}) {
    return this.request('ListMyGroups', params, options);
  }

  /**
   * @param {String} AlertName - alertName. optional.
   * @param {String} PolicyType - type. optional.
   * @param {String} Id - id. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  listNotifyPolicy(params = {}, options = {}) {
    return this.request('ListNotifyPolicy', params, options);
  }

  /**
   * @param {String} UserId - userId. optional.
   */
  listProductOfActiceAlert(params = {}, options = {}) {
    return this.request('ListProductOfActiceAlert', params, options);
  }

  /**
   */
  listProductOfActiveAlert(params = {}, options = {}) {
    return this.request('ListProductOfActiveAlert', params, options);
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
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Long} UserId - userId. required.
   * @param {String} HostName - hostName. optional.
   * @param {String} InstanceIds - instanceIds. optional.
   * @param {String} SerialNumbers - serialNumbers. optional.
   * @param {String} KeyWord - keyWord. optional.
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
   * @param {String} Period - period. optional. default: 300.
   * @param {String} Namespace - namespace. required.
   * @param {String} MetricName - metricName. required.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} AlertName - alertName. required.
   * @param {Integer} EvaluationCount - evaluationCount. optional. default: 3.
   * @param {String} ContactGroups - contactGroups. required.
   * @param {String} EffectiveInterval - effectiveInterval. optional.
   * @param {String} NoEffectiveInterval - noEffectiveInterval. optional.
   * @param {Integer} SilenceTime - silenceTime. optional. default: 86400.
   * @param {String} Webhook - webhook. optional.
   * @param {String} DisplayName - displayName. required.
   * @param {String} Description - description. optional.
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

    if (!hasOwnProperty(params, 'ContactGroups')) {
      throw new TypeError('parameter "ContactGroups" is required');
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
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} Body - body. optional.
   */
  putMetricData(params = {}, options = {}) {
    return this.request('PutMetricData', params, options);
  }

  /**
   * @param {String} EventInfo - eventInfo. optional.
   */
  putSystemEvent(params = {}, options = {}) {
    return this.request('PutSystemEvent', params, options);
  }

  /**
   * @param {String} CommandJson - commandJson. optional.
   */
  putUserResourceCommand(params = {}, options = {}) {
    return this.request('PutUserResourceCommand', params, options);
  }

  /**
   * @param {String} UserId - userId. optional.
   */
  queryBasicAccountInfo(params = {}, options = {}) {
    return this.request('QueryBasicAccountInfo', params, options);
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
   * @param {String} UUID - uuid. optional.
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
   * @param {String} QueryJson - queryJson. optional.
   */
  querySystemEventCount(params = {}, options = {}) {
    return this.request('QuerySystemEventCount', params, options);
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
   * @param {String} QueryJson - queryJson. optional.
   */
  queryUsedResourceCount(params = {}, options = {}) {
    return this.request('QueryUsedResourceCount', params, options);
  }

  /**
   * @param {String} QueryJson - queryJson. optional.
   */
  queryUserCrmInfo(params = {}, options = {}) {
    return this.request('QueryUserCrmInfo', params, options);
  }

  /**
   * @param {String} TaskType - taskType. required.
   * @param {String} TaskName - taskName. required.
   * @param {String} TaskScope - taskScope. required.
   * @param {Long} GroupId - groupId. required.
   * @param {String} GroupName - groupName. optional.
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
   * @param {String} TaskType - taskType. required.
   * @param {Long} Id - id. required.
   * @param {String} TaskName - taskName. required.
   * @param {String} TaskScope - taskScope. required.
   * @param {String} GroupName - groupName. optional.
   * @param {String} JsonData - jsonData. required.
   * @param {RepeatList} InstanceList - instanceListJson. optional.
   * @param {String} AlertConfig - alertConfigJson. required.
   */
  taskConfigModify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'TaskType')) {
      throw new TypeError('parameter "TaskType" is required');
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
   * @param {String} Project - project. required.
   * @param {String} Service - service. optional.
   * @param {String} Cluster - cluster. optional.
   * @param {String} AlertName - alertName. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} PolicyType - type. required.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  tjmCreateNotifyPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'PolicyType')) {
      throw new TypeError('parameter "PolicyType" is required');
    }

    return this.request('TjmCreateNotifyPolicy', params, options);
  }

  /**
   * @param {String} Project - project. required.
   * @param {String} Service - service. optional.
   * @param {String} Cluster - cluster. optional.
   * @param {String} AlertName - alertName. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} Type - type. required.
   * @param {String} Id - id. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  tjmDeleteNotifyPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('TjmDeleteNotifyPolicy', params, options);
  }

  /**
   * @param {String} Project - project. required.
   * @param {String} Service - service. optional.
   * @param {String} Cluster - cluster. optional.
   * @param {String} AlertName - alertName. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} PolicyType - type. required.
   * @param {String} Id - id. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  tjmGetNotifyPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'PolicyType')) {
      throw new TypeError('parameter "PolicyType" is required');
    }

    return this.request('TjmGetNotifyPolicy', params, options);
  }

  /**
   * @param {String} Project - project. required.
   * @param {String} Service - service. optional.
   * @param {String} Cluster - cluster. optional.
   * @param {String} AlertName - alertName. optional.
   * @param {String} Dimensions - dimensions. optional.
   * @param {String} PolicyType - type. required.
   * @param {String} Id - id. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  tjmListNotifyPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'PolicyType')) {
      throw new TypeError('parameter "PolicyType" is required');
    }

    return this.request('TjmListNotifyPolicy', params, options);
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
   * @param {String} Webhook - webhook. optional.
   */
  updateAlarm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateAlarm', params, options);
  }

  /**
   * @param {String} InstanceRegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Category - category. required.
   * @param {String} Key - key. optional.
   * @param {String} Properties - jsonProps. optional.
   */
  updateInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceRegionId')) {
      throw new TypeError('parameter "InstanceRegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'Category')) {
      throw new TypeError('parameter "Category" is required');
    }

    return this.request('UpdateInstances', params, options);
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
   * @param {String} GroupId - id. required.
   * @param {String} GroupName - name. optional.
   * @param {Long} ServiceId - serviceId. optional.
   * @param {String} BindUrls - bindUrls. optional.
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

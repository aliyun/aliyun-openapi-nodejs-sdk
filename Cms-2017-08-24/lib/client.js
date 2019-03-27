
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-08-24';
    super(config);
  }

  /**
   * @param {String} taskList - taskList. optional.
   */
  batchCreateOnceTask(params = {}, options = {}) {
    return this.request('BatchCreateOnceTask', params, options);
  }

  /**
   * @param {String} taskIds - taskIds. required.
   */
  batchDeleteTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'taskIds')) {
      throw new TypeError('parameter "taskIds" is required');
    }

    return this.request('BatchDeleteTask', params, options);
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
   * @param {String} startTime - startTime. optional.
   * @param {String} endTime - endTime. optional.
   * @param {Integer} page - page. optional.
   * @param {Integer} pageSize - pageSize. optional.
   */
  countTaskInfo(params = {}, options = {}) {
    return this.request('CountTaskInfo', params, options);
  }

  /**
   * @param {String} alertName - alertName. optional.
   * @param {String} taskId - taskId. optional.
   * @param {String} clientIds - clientIds. optional.
   * @param {String} taskType - taskType. optional.
   * @param {String} taskName - taskName. optional.
   * @param {String} taskState - taskState. optional.
   * @param {String} agentGroup - agentGroup. optional.
   * @param {String} agentType - agentType. optional.
   * @param {String} reportProject - reportProject. optional.
   * @param {String} address - address. optional.
   * @param {String} interval - interval. optional.
   * @param {String} endTime - endTime. optional.
   * @param {String} ispCity - ispCity. optional.
   * @param {String} options - options. optional.
   * @param {String} alertInfo - alertInfo. optional.
   * @param {String} alertRule - alertRule. optional.
   * @param {String} ip - ip. optional.
   */
  createTask(params = {}, options = {}) {
    return this.request('CreateTask', params, options);
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
   * @param {String} groupIds - groupIds. required.
   */
  deleteDashboardConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'groupIds')) {
      throw new TypeError('parameter "groupIds" is required');
    }

    return this.request('DeleteDashboardConfig', params, options);
  }

  /**
   * @param {String} Project - project. optional.
   * @param {String} Metric - metric. optional.
   */
  deleteMetricMeta(params = {}, options = {}) {
    return this.request('DeleteMetricMeta', params, options);
  }

  /**
   * @param {Long} groupId - groupId. required.
   */
  deleteProductGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'groupId')) {
      throw new TypeError('parameter "groupId" is required');
    }

    return this.request('DeleteProductGroup', params, options);
  }

  /**
   * @param {String} taskId - taskId. required.
   */
  deleteTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'taskId')) {
      throw new TypeError('parameter "taskId" is required');
    }

    return this.request('DeleteTask', params, options);
  }

  /**
   * @param {String} taskIds - taskIds. required.
   */
  deleteTasks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'taskIds')) {
      throw new TypeError('parameter "taskIds" is required');
    }

    return this.request('DeleteTasks', params, options);
  }

  /**
   */
  describeISPAreaCity(params = {}, options = {}) {
    return this.request('DescribeISPAreaCity', params, options);
  }

  /**
   * @param {String} taskId - taskId. optional.
   */
  describeTaskDetail(params = {}, options = {}) {
    return this.request('DescribeTaskDetail', params, options);
  }

  /**
   * @param {String} taskId - taskId. optional.
   * @param {String} taskType - taskType. optional.
   * @param {String} keyword - keyword. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeTasks(params = {}, options = {}) {
    return this.request('DescribeTasks', params, options);
  }

  /**
   * @param {String} taskIds - taskIds. optional.
   * @param {String} startTime - startTime. optional.
   * @param {String} endTime - endTime. optional.
   * @param {String} taskType - taskType. optional.
   */
  getAccessStrategy(params = {}, options = {}) {
    return this.request('GetAccessStrategy', params, options);
  }

  /**
   * @param {String} taskIds - taskIds. optional.
   * @param {String} startTime - startTime. optional.
   * @param {String} endTime - endTime. optional.
   * @param {String} taskType - taskType. optional.
   */
  getAgentAllCityAvailRate(params = {}, options = {}) {
    return this.request('GetAgentAllCityAvailRate', params, options);
  }

  /**
   * @param {String} taskIds - taskIds. optional.
   * @param {String} startTime - startTime. optional.
   * @param {String} endTime - endTime. optional.
   * @param {String} taskType - taskType. optional.
   */
  getAgentAllCityTrend(params = {}, options = {}) {
    return this.request('GetAgentAllCityTrend', params, options);
  }

  /**
   * @param {String} taskIds - taskIds. optional.
   * @param {String} startTime - startTime. optional.
   * @param {String} endTime - endTime. optional.
   * @param {String} taskType - taskType. optional.
   */
  getAgentCityTrend(params = {}, options = {}) {
    return this.request('GetAgentCityTrend', params, options);
  }

  /**
   * @param {String} taskIds - taskIds. optional.
   * @param {String} startTime - startTime. optional.
   * @param {String} endTime - endTime. optional.
   * @param {String} taskType - taskType. optional.
   */
  getAgentCountryTrend(params = {}, options = {}) {
    return this.request('GetAgentCountryTrend', params, options);
  }

  /**
   * @param {String} taskIds - taskIds. optional.
   * @param {String} startTime - startTime. optional.
   * @param {String} endTime - endTime. optional.
   * @param {String} taskType - taskType. optional.
   */
  getAgentIndexCombineTrend(params = {}, options = {}) {
    return this.request('GetAgentIndexCombineTrend', params, options);
  }

  /**
   * @param {String} taskIds - taskIds. optional.
   * @param {String} startTime - startTime. optional.
   * @param {String} endTime - endTime. optional.
   * @param {String} taskType - taskType. optional.
   */
  getAgentIndexTrend(params = {}, options = {}) {
    return this.request('GetAgentIndexTrend', params, options);
  }

  /**
   * @param {String} taskIds - taskIds. optional.
   * @param {String} startTime - startTime. optional.
   * @param {String} endTime - endTime. optional.
   * @param {String} taskType - taskType. optional.
   */
  getAgentIspCombineTrend(params = {}, options = {}) {
    return this.request('GetAgentIspCombineTrend', params, options);
  }

  /**
   * @param {String} taskIds - taskIds. optional.
   * @param {String} startTime - startTime. optional.
   * @param {String} endTime - endTime. optional.
   * @param {String} taskType - taskType. optional.
   */
  getAgentIspTrend(params = {}, options = {}) {
    return this.request('GetAgentIspTrend', params, options);
  }

  /**
   * @param {String} taskIds - taskIds. optional.
   * @param {String} startTime - startTime. optional.
   * @param {String} endTime - endTime. optional.
   * @param {String} taskType - taskType. optional.
   */
  getAgentRegionTrend(params = {}, options = {}) {
    return this.request('GetAgentRegionTrend', params, options);
  }

  /**
   * @param {String} taskIds - taskIds. optional.
   * @param {String} startTime - startTime. optional.
   * @param {String} endTime - endTime. optional.
   * @param {String} taskType - taskType. optional.
   */
  getAgentSingleIndexTrend(params = {}, options = {}) {
    return this.request('GetAgentSingleIndexTrend', params, options);
  }

  /**
   * @param {String} groupId - groupId. optional.
   * @param {String} type - type. optional.
   */
  getDashboardConfig(params = {}, options = {}) {
    return this.request('GetDashboardConfig', params, options);
  }

  /**
   * @param {String} taskIds - taskIds. optional.
   * @param {String} startTime - startTime. optional.
   * @param {String} endTime - endTime. optional.
   * @param {String} taskType - taskType. optional.
   */
  getErrorInfo(params = {}, options = {}) {
    return this.request('GetErrorInfo', params, options);
  }

  /**
   * @param {String} taskIds - taskIds. optional.
   * @param {String} startTime - startTime. optional.
   * @param {String} endTime - endTime. optional.
   * @param {String} taskType - taskType. optional.
   */
  getErrorInfoUnconverge(params = {}, options = {}) {
    return this.request('GetErrorInfoUnconverge', params, options);
  }

  /**
   * @param {String} taskIds - taskIds. optional.
   * @param {String} startTime - startTime. optional.
   * @param {String} endTime - endTime. optional.
   * @param {String} taskType - taskType. optional.
   */
  getErrorKindRateTrend(params = {}, options = {}) {
    return this.request('GetErrorKindRateTrend', params, options);
  }

  /**
   * @param {String} taskIds - taskIds. optional.
   * @param {String} startTime - startTime. optional.
   * @param {String} endTime - endTime. optional.
   * @param {String} taskType - taskType. optional.
   */
  getErrorRateTrend(params = {}, options = {}) {
    return this.request('GetErrorRateTrend', params, options);
  }

  /**
   */
  getISPAreaCity(params = {}, options = {}) {
    return this.request('GetISPAreaCity', params, options);
  }

  /**
   * @param {String} taskIds - taskIds. optional.
   * @param {String} startTime - startTime. optional.
   * @param {String} endTime - endTime. optional.
   * @param {String} taskType - taskType. optional.
   */
  getIspRegionTrend(params = {}, options = {}) {
    return this.request('GetIspRegionTrend', params, options);
  }

  /**
   * @param {String} taskIds - taskIds. optional.
   * @param {String} startTime - startTime. optional.
   * @param {String} endTime - endTime. optional.
   * @param {String} taskType - taskType. optional.
   */
  getLastRecord(params = {}, options = {}) {
    return this.request('GetLastRecord', params, options);
  }

  /**
   */
  getOverviewConfig(params = {}, options = {}) {
    return this.request('GetOverviewConfig', params, options);
  }

  /**
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
   * @param {String} taskIds - taskIds. optional.
   * @param {String} startTime - startTime. optional.
   * @param {String} endTime - endTime. optional.
   * @param {String} taskType - taskType. optional.
   */
  getTracerouteRouteInfo(params = {}, options = {}) {
    return this.request('GetTracerouteRouteInfo', params, options);
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
   * @param {String} Project - project. optional.
   * @param {String} Metric - metric. optional.
   * @param {String} Page - page. optional.
   * @param {String} PageSize - pageSize. optional.
   */
  listMetricMeta(params = {}, options = {}) {
    return this.request('ListMetricMeta', params, options);
  }

  /**
   */
  listMetricMetaProject(params = {}, options = {}) {
    return this.request('ListMetricMetaProject', params, options);
  }

  /**
   * @param {String} alertName - alertName. optional.
   * @param {String} taskId - taskId. optional.
   * @param {String} clientIds - clientIds. optional.
   * @param {String} taskType - taskType. optional.
   * @param {String} taskName - taskName. optional.
   * @param {String} taskState - taskState. optional.
   * @param {String} agentGroup - agentGroup. optional.
   * @param {String} agentType - agentType. optional.
   * @param {String} reportProject - reportProject. optional.
   * @param {String} address - address. optional.
   * @param {String} interval - interval. optional.
   * @param {String} endTime - endTime. optional.
   * @param {String} ispCity - ispCity. optional.
   * @param {String} options - options. optional.
   * @param {String} alertInfo - alertInfo. optional.
   * @param {String} alertRule - alertRule. optional.
   * @param {String} ip - ip. optional.
   */
  modifyTask(params = {}, options = {}) {
    return this.request('ModifyTask', params, options);
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
   * @param {String} taskIds - taskIds. required.
   */
  pauseTasks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'taskIds')) {
      throw new TypeError('parameter "taskIds" is required');
    }

    return this.request('PauseTasks', params, options);
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
   * @param {Integer} height - height. optional.
   * @param {String} groupId - groupId. required.
   * @param {String} chartName - chartName. required.
   * @param {String} chartType - chartType. required.
   * @param {String} metrics - metrics. optional.
   * @param {Integer} width - width. optional.
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
   */
  queryMiniTask(params = {}, options = {}) {
    return this.request('QueryMiniTask', params, options);
  }

  /**
   * @param {String} startTime - startTime. optional.
   * @param {String} endTime - endTime. optional.
   * @param {Integer} page - page. optional.
   * @param {Integer} pageSize - pageSize. optional.
   */
  queryOverdueTask(params = {}, options = {}) {
    return this.request('QueryOverdueTask', params, options);
  }

  /**
   * @param {String} taskId - taskId. optional.
   * @param {String} taskType - taskType. optional.
   * @param {String} keyword - keyword. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryReportTask(params = {}, options = {}) {
    return this.request('QueryReportTask', params, options);
  }

  /**
   * @param {String} pageSize - pageSize. optional.
   */
  querySlaTask(params = {}, options = {}) {
    return this.request('QuerySlaTask', params, options);
  }

  /**
   * @param {String} taskId - taskId. optional.
   * @param {String} taskType - taskType. optional.
   * @param {String} keyword - keyword. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryTask(params = {}, options = {}) {
    return this.request('QueryTask', params, options);
  }

  /**
   * @param {String} taskId - taskId. optional.
   */
  queryTaskInfo(params = {}, options = {}) {
    return this.request('QueryTaskInfo', params, options);
  }

  /**
   * @param {String} taskIds - taskIds. optional.
   */
  queryTaskRate(params = {}, options = {}) {
    return this.request('QueryTaskRate', params, options);
  }

  /**
   * @param {String} taskIds - taskIds. required.
   */
  startTasks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'taskIds')) {
      throw new TypeError('parameter "taskIds" is required');
    }

    return this.request('StartTasks', params, options);
  }

  /**
   * @param {String} taskIds - taskIds. required.
   */
  stopTasks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'taskIds')) {
      throw new TypeError('parameter "taskIds" is required');
    }

    return this.request('StopTasks', params, options);
  }

  /**
   * @param {String} alertName - alertName. optional.
   * @param {String} taskId - taskId. optional.
   * @param {String} clientIds - clientIds. optional.
   * @param {String} taskType - taskType. optional.
   * @param {String} taskName - taskName. optional.
   * @param {String} taskState - taskState. optional.
   * @param {String} agentGroup - agentGroup. optional.
   * @param {String} agentType - agentType. optional.
   * @param {String} reportProject - reportProject. optional.
   * @param {String} address - address. optional.
   * @param {String} interval - interval. optional.
   * @param {String} endTime - endTime. optional.
   * @param {String} ispCity - ispCity. optional.
   * @param {String} options - options. optional.
   * @param {String} alertInfo - alertInfo. optional.
   * @param {String} alertRule - alertRule. optional.
   * @param {String} ip - ip. optional.
   */
  updateTask(params = {}, options = {}) {
    return this.request('UpdateTask', params, options);
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
   * @param {String} taskIds - taskIds. optional.
   * @param {String} startTime - startTime. optional.
   * @param {String} endTime - endTime. optional.
   * @param {String} taskType - taskType. optional.
   */
  getIspCityTrend(params = {}, options = {}) {
    return this.request('getIspCityTrend', params, options);
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

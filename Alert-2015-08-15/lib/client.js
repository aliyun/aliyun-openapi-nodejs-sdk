
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2015-08-15';
    super(config);
  }

  batchDisableAlerts(projectName, query, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/alerts/batchDisable`;
    return this.put(path, query, body, headers, opts);
  }

  batchEnableAlerts(projectName, query, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/alerts/batchEnable`;
    return this.put(path, query, body, headers, opts);
  }

  batchQueryProject(query, headers = {}, opts = {}) {
    const path = `/projects/batchQuery`;
    return this.get(path, query, headers, opts);
  }

  countGoc(projectName, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/countGoc`;
    return this.post(path, {}, body, headers, opts);
  }

  createAlert(projectName, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/alerts`;
    return this.post(path, {}, body, headers, opts);
  }

  createContact(projectName, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/contacts`;
    return this.post(path, {}, body, headers, opts);
  }

  createContactGroup(projectName, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/groups`;
    return this.post(path, {}, body, headers, opts);
  }

  createDBMetric(projectName, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/dbMetrics`;
    return this.post(path, {}, body, headers, opts);
  }

  createDBSource(projectName, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/sources`;
    return this.post(path, {}, body, headers, opts);
  }

  createDimensions(projectName, query, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/alert/dimensions`;
    return this.post(path, query, body, headers, opts);
  }

  createEventMetric(projectName, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/eventStoreMetrics`;
    return this.post(path, {}, body, headers, opts);
  }

  createLevelChannel(projectName, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/level_channels`;
    return this.post(path, {}, body, headers, opts);
  }

  createLogHubMetric(projectName, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/logHubMetrics`;
    return this.post(path, {}, body, headers, opts);
  }

  createProject(body, headers = {}, opts = {}) {
    const path = `/projects`;
    return this.post(path, {}, body, headers, opts);
  }

  deleteAlert(projectName, query, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/alert`;
    return this.delete(path, query, headers, opts);
  }

  deleteAlertByGroupId(projectName, groupId, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/groupId/${groupId}/alerts`;
    return this.delete(path, {}, headers, opts);
  }

  deleteAlertByMetric(projectName, namespace, metricName, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/namespace/${namespace}/metricName/${metricName}/alerts`;
    return this.delete(path, {}, headers, opts);
  }

  deleteContact(projectName, query, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/contact`;
    return this.delete(path, query, headers, opts);
  }

  deleteContactGroup(projectName, query, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/group`;
    return this.delete(path, query, headers, opts);
  }

  deleteDBMetric(projectName, metricName, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/dbMetrics/${metricName}`;
    return this.delete(path, {}, headers, opts);
  }

  deleteDBSource(projectName, sourceName, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/sources/${sourceName}`;
    return this.delete(path, {}, headers, opts);
  }

  deleteDimensions(projectName, dimensionsId, query, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/alert/dimensions/${dimensionsId}`;
    return this.delete(path, query, headers, opts);
  }

  deleteEventMetric(projectName, metricName, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/eventStoreMetrics/${metricName}`;
    return this.delete(path, {}, headers, opts);
  }

  deleteLevelChannel(projectName, level, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/level_channels/${level}`;
    return this.delete(path, {}, headers, opts);
  }

  deleteLogHubMetric(projectName, metricName, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/logHubMetrics/${metricName}`;
    return this.delete(path, {}, headers, opts);
  }

  deleteProject(projectName, headers = {}, opts = {}) {
    const path = `/projects/${projectName}`;
    return this.delete(path, {}, headers, opts);
  }

  disableAlert(projectName, query, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/alert/disable`;
    return this.put(path, query, body, headers, opts);
  }

  disableAlertByGroupId(projectName, groupId, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/groupId/${groupId}/disable`;
    return this.put(path, {}, body, headers, opts);
  }

  enableAlert(projectName, query, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/alert/enable`;
    return this.put(path, query, body, headers, opts);
  }

  enableAlertByGroupId(projectName, groupId, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/groupId/${groupId}/enable`;
    return this.put(path, {}, body, headers, opts);
  }

  getAlarmCountInLast7Days(headers = {}, opts = {}) {
    const path = `/alarms/getAlarmCountInLast7Days`;
    return this.get(path, {}, headers, opts);
  }

  getAlert(projectName, query, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/alert`;
    return this.get(path, query, headers, opts);
  }

  getContact(projectName, query, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/contact`;
    return this.get(path, query, headers, opts);
  }

  getContactGroup(projectName, query, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/group`;
    return this.get(path, query, headers, opts);
  }

  getDBMetric(projectName, metricName, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/dbMetrics/${metricName}`;
    return this.get(path, {}, headers, opts);
  }

  getDBSource(projectName, sourceName, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/sources/${sourceName}`;
    return this.get(path, {}, headers, opts);
  }

  getDimensions(projectName, dimensionsId, query, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/alert/dimensions/${dimensionsId}`;
    return this.get(path, query, headers, opts);
  }

  getEventMetric(projectName, metricName, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/eventStoreMetrics/${metricName}`;
    return this.get(path, {}, headers, opts);
  }

  getLevelChannel(projectName, level, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/level_channels/${level}`;
    return this.get(path, {}, headers, opts);
  }

  getLogHubMetric(projectName, metricName, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/logHubMetrics/${metricName}`;
    return this.get(path, {}, headers, opts);
  }

  getMetricRelatedEvents(query, headers = {}, opts = {}) {
    const path = `/tianjimon/metric/getRelatedEvents`;
    return this.get(path, query, headers, opts);
  }

  getProject(projectName, headers = {}, opts = {}) {
    const path = `/projects/${projectName}`;
    return this.get(path, {}, headers, opts);
  }

  grantProjectOwner(query, headers = {}, opts = {}) {
    const path = `/projects/grantOwner`;
    return this.get(path, query, headers, opts);
  }

  listAlert(projectName, query, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/alerts`;
    return this.get(path, query, headers, opts);
  }

  listAlertState(projectName, query, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/alerts_state`;
    return this.get(path, query, headers, opts);
  }

  listAlertStateByDimensions(projectName, query, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/batch_query/alerts_state`;
    return this.get(path, query, headers, opts);
  }

  listAlertStateFaultList(projectName, query, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/faultList`;
    return this.get(path, query, headers, opts);
  }

  listCMSAlert(query, headers = {}, opts = {}) {
    const path = `/alarms/getAlarmList`;
    return this.get(path, query, headers, opts);
  }

  listCMSAlertNew(query, headers = {}, opts = {}) {
    const path = `/alarms/getAlarmListNew`;
    return this.get(path, query, headers, opts);
  }

  listContact(projectName, query, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/contacts`;
    return this.get(path, query, headers, opts);
  }

  listContactGroup(projectName, query, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/groups`;
    return this.get(path, query, headers, opts);
  }

  listDBMetric(projectName, query, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/dbMetrics`;
    return this.get(path, query, headers, opts);
  }

  listDBSource(projectName, query, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/sources`;
    return this.get(path, query, headers, opts);
  }

  listDimensions(projectName, query, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/alert/dimensions`;
    return this.get(path, query, headers, opts);
  }

  listEventMetric(projectName, query, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/eventStoreMetrics`;
    return this.get(path, query, headers, opts);
  }

  listLevelChannel(projectName, query, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/level_channels`;
    return this.get(path, query, headers, opts);
  }

  listLogHubMetric(projectName, query, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/logHubMetrics`;
    return this.get(path, query, headers, opts);
  }

  listNotifyHistory(projectName, query, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/notify_history`;
    return this.get(path, query, headers, opts);
  }

  listNotifyHistoryNew(projectName, query, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/notify_history/new`;
    return this.get(path, query, headers, opts);
  }

  listProject(query, headers = {}, opts = {}) {
    const path = `/projects`;
    return this.get(path, query, headers, opts);
  }

  listProjectsEvents(projectName, query, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/events`;
    return this.get(path, query, headers, opts);
  }

  putCMSAlert(query, body, headers = {}, opts = {}) {
    const path = `/alarms/putAlarms`;
    return this.post(path, query, body, headers, opts);
  }

  putLogHubMetric(projectName, query, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/logHubMetrics/putLogHubMetric`;
    return this.post(path, query, body, headers, opts);
  }

  removeProjectOwner(query, headers = {}, opts = {}) {
    const path = `/projects/removeOwner`;
    return this.get(path, query, headers, opts);
  }

  searchAlert(projectName, query, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/search`;
    return this.get(path, query, headers, opts);
  }

  sendAlarm(projectName, query, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/send/alarm`;
    return this.post(path, query, body, headers, opts);
  }

  subscribeGoc(query, headers = {}, opts = {}) {
    const path = `/projects/alerts/subscribeGoc`;
    return this.get(path, query, headers, opts);
  }

  unhealthyInstanceCountByGroupId(projectName, groupId, query, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/groupId/${groupId}/unhealthyInstanceCount`;
    return this.get(path, query, headers, opts);
  }

  unsubscribeGoc(query, headers = {}, opts = {}) {
    const path = `/projects/alerts/unsubscribeGoc`;
    return this.get(path, query, headers, opts);
  }

  updateAlert(projectName, query, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/alert`;
    return this.put(path, query, body, headers, opts);
  }

  updateAlertByGroupId(projectName, groupId, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/groupId/${groupId}`;
    return this.put(path, {}, body, headers, opts);
  }

  updateAlertContactGroupByGroupId(projectName, groupId, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/groupId/${groupId}/contactGroups`;
    return this.put(path, {}, body, headers, opts);
  }

  updateContact(projectName, query, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/contact`;
    return this.put(path, query, body, headers, opts);
  }

  updateContactGroup(projectName, query, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/group`;
    return this.put(path, query, body, headers, opts);
  }

  updateDBMetric(projectName, metricName, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/dbMetrics/${metricName}`;
    return this.put(path, {}, body, headers, opts);
  }

  updateDBSource(projectName, sourceName, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/sources/${sourceName}`;
    return this.put(path, {}, body, headers, opts);
  }

  updateDimensions(projectName, dimensionsId, query, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/alert/dimensions/${dimensionsId}`;
    return this.put(path, query, body, headers, opts);
  }

  updateDimensionsByGroupId(projectName, groupId, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/groupId/${groupId}/dimensions`;
    return this.post(path, {}, body, headers, opts);
  }

  updateEventMetric(projectName, metricName, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/eventStoreMetrics/${metricName}`;
    return this.put(path, {}, body, headers, opts);
  }

  updateLevelChannel(projectName, level, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/level_channels/${level}`;
    return this.put(path, {}, body, headers, opts);
  }

  updateLogHubMetric(projectName, metricName, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}/logHubMetrics/${metricName}`;
    return this.put(path, {}, body, headers, opts);
  }

  updateProject(projectName, body, headers = {}, opts = {}) {
    const path = `/projects/${projectName}`;
    return this.put(path, {}, body, headers, opts);
  }

}

module.exports = Client;

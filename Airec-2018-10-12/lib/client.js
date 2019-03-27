
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2018-10-12';
    super(config);
  }

  attachDataset(instanceId, versionId, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/dataSets/${versionId}/actions/current`;
    return this.post(path, {}, body, headers, opts);
  }

  createDiversify(instanceId, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/diversifies`;
    return this.post(path, {}, body, headers, opts);
  }

  createInstance(body, headers = {}, opts = {}) {
    const path = `/openapi/instances`;
    return this.post(path, {}, body, headers, opts);
  }

  createMix(instanceId, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/mixes`;
    return this.post(path, {}, body, headers, opts);
  }

  deleteDataSet(instanceId, versionId, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/dataSets/${versionId}`;
    return this.delete(path, {}, headers, opts);
  }

  deleteDiversify(instanceId, name, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/diversifies/${name}`;
    return this.delete(path, {}, headers, opts);
  }

  deleteMix(instanceId, name, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/mixes/${name}`;
    return this.delete(path, {}, headers, opts);
  }

  describeDashboard(instanceId, query, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/dashboard`;
    return this.get(path, query, headers, opts);
  }

  describeDataSetMessage(instanceId, versionId, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/dataSets/${versionId}/messages`;
    return this.get(path, {}, headers, opts);
  }

  describeDataSetReport(instanceId, versionId, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/dataSets/${versionId}/report`;
    return this.get(path, {}, headers, opts);
  }

  describeDiversify(instanceId, name, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/diversifies/${name}`;
    return this.get(path, {}, headers, opts);
  }

  describeInstance(instanceId, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}`;
    return this.get(path, {}, headers, opts);
  }

  describeMix(instanceId, name, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/mixes/${name}`;
    return this.get(path, {}, headers, opts);
  }

  describeQuota(instanceId, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/quota`;
    return this.get(path, {}, headers, opts);
  }

  describeSchema(instanceId, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/schema`;
    return this.get(path, {}, headers, opts);
  }

  listDataSet(instanceId, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/dataSets`;
    return this.get(path, {}, headers, opts);
  }

  listDataSource(instanceId, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/dataSources`;
    return this.get(path, {}, headers, opts);
  }

  listDiversify(instanceId, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/diversifies`;
    return this.get(path, {}, headers, opts);
  }

  listInstance(headers = {}, opts = {}) {
    const path = `/openapi/instances`;
    return this.get(path, {}, headers, opts);
  }

  listMix(instanceId, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/mixes`;
    return this.get(path, {}, headers, opts);
  }

  modifyDataSource(instanceId, tableName, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/dataSources/${tableName}`;
    return this.put(path, {}, body, headers, opts);
  }

  modifyDiversify(instanceId, name, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/diversifies/${name}`;
    return this.put(path, {}, body, headers, opts);
  }

  modifyInstance(instanceId, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}`;
    return this.put(path, {}, body, headers, opts);
  }

  modifyMix(instanceId, name, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/mixes/${name}`;
    return this.put(path, {}, body, headers, opts);
  }

  pushDocument(instanceId, tableName, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/tables/${tableName}/actions/bulk`;
    return this.post(path, {}, body, headers, opts);
  }

  pushIntervention(instanceId, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/actions/intervene`;
    return this.post(path, {}, body, headers, opts);
  }

  recommend(instanceId, query, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/actions/recommend`;
    return this.get(path, query, headers, opts);
  }

  runInstance(instanceId, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/actions/import`;
    return this.post(path, {}, body, headers, opts);
  }

  stopDataSet(instanceId, versionId, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/dataSets/${versionId}/actions/stop`;
    return this.post(path, {}, body, headers, opts);
  }

  upgradeInstance(instanceId, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/actions/upgrade`;
    return this.post(path, {}, body, headers, opts);
  }

  validateInstance(instanceId, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/actions/validate`;
    return this.post(path, {}, body, headers, opts);
  }

}

module.exports = Client;

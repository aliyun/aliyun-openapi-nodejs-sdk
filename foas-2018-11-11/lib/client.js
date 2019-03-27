
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2018-11-11';
    super(config);
  }

  batchGetInstanceRunSummary(projectName, query, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/runsummary`;
    return this.get(path, query, headers, opts);
  }

  bindQueue(projectName, body, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/queue`;
    return this.post(path, {}, body, headers, opts);
  }

  checkRawPlanJson(projectName, jobName, query, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/jobs/${jobName}/planjson/check`;
    return this.get(path, query, headers, opts);
  }

  commitJob(projectName, jobName, body, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/jobs/${jobName}/commit`;
    return this.put(path, {}, body, headers, opts);
  }

  createCluster(body, headers = {}, opts = {}) {
    const path = `/api/v2/clusters`;
    return this.post(path, {}, body, headers, opts);
  }

  createFolder(projectName, body, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/folders`;
    return this.post(path, {}, body, headers, opts);
  }

  createJob(projectName, body, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/jobs`;
    return this.post(path, {}, body, headers, opts);
  }

  createPackage(projectName, body, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/packages`;
    return this.post(path, {}, body, headers, opts);
  }

  createProject(body, headers = {}, opts = {}) {
    const path = `/api/v2/projects`;
    return this.post(path, {}, body, headers, opts);
  }

  createQueue(clusterId, body, headers = {}, opts = {}) {
    const path = `/api/v2/clusters/${clusterId}/queue`;
    return this.post(path, {}, body, headers, opts);
  }

  deleteFolder(projectName, query, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/folders`;
    return this.delete(path, query, headers, opts);
  }

  deleteJob(projectName, jobName, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/jobs/${jobName}`;
    return this.delete(path, {}, headers, opts);
  }

  deletePackage(projectName, packageName, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/packages/${packageName}`;
    return this.delete(path, {}, headers, opts);
  }

  deleteProject(projectName, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}`;
    return this.delete(path, {}, headers, opts);
  }

  deleteQueue(clusterId, query, headers = {}, opts = {}) {
    const path = `/api/v2/clusters/${clusterId}/queue`;
    return this.delete(path, query, headers, opts);
  }

  destroyCluster(clusterId, headers = {}, opts = {}) {
    const path = `/api/v2/clusters/${clusterId}`;
    return this.delete(path, {}, headers, opts);
  }

  expandCluster(clusterId, body, headers = {}, opts = {}) {
    const path = `/api/v2/clusters/${clusterId}/expand`;
    return this.put(path, {}, body, headers, opts);
  }

  getClusterDetails(clusterId, headers = {}, opts = {}) {
    const path = `/api/v2/clusters/${clusterId}/details`;
    return this.get(path, {}, headers, opts);
  }

  getClusterEngineVersions(clusterId, headers = {}, opts = {}) {
    const path = `/api/v2/clusters/${clusterId}/engineversions`;
    return this.get(path, {}, headers, opts);
  }

  getClusterMetrics(clusterId, body, headers = {}, opts = {}) {
    const path = `/api/v2/clusters/${clusterId}/metrics`;
    return this.post(path, {}, body, headers, opts);
  }

  getClusterQueueInfo(clusterId, headers = {}, opts = {}) {
    const path = `/api/v2/clusters/${clusterId}/queueinfo`;
    return this.get(path, {}, headers, opts);
  }

  getClusterResource(clusterId, headers = {}, opts = {}) {
    const path = `/api/v2/clusters/${clusterId}/resource`;
    return this.get(path, {}, headers, opts);
  }

  getFolder(projectName, query, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/folders`;
    return this.get(path, query, headers, opts);
  }

  getInstance(projectName, jobName, instanceId, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/jobs/${jobName}/instances/${instanceId}`;
    return this.get(path, {}, headers, opts);
  }

  getInstanceCheckpoint(projectName, jobName, instanceId, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/jobs/${jobName}/instances/${instanceId}/checkpoints`;
    return this.get(path, {}, headers, opts);
  }

  getInstanceConfig(projectName, jobName, instanceId, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/jobs/${jobName}/instances/${instanceId}/config`;
    return this.get(path, {}, headers, opts);
  }

  getInstanceDetail(projectName, jobName, instanceId, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/jobs/${jobName}/instances/${instanceId}/details`;
    return this.get(path, {}, headers, opts);
  }

  getInstanceExceptions(projectName, jobName, instanceId, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/jobs/${jobName}/instances/${instanceId}/exceptions`;
    return this.get(path, {}, headers, opts);
  }

  getInstanceFinalState(projectName, jobName, instanceId, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/jobs/${jobName}/instances/${instanceId}/finalstate`;
    return this.get(path, {}, headers, opts);
  }

  getInstanceMetric(projectName, jobName, query, body, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/jobs/${jobName}/metric`;
    return this.post(path, query, body, headers, opts);
  }

  getInstanceResource(projectName, jobName, instanceId, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/jobs/${jobName}/instances/${instanceId}/resource`;
    return this.get(path, {}, headers, opts);
  }

  getInstanceRunSummary(projectName, jobName, instanceId, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/jobs/${jobName}/instances/${instanceId}/runsummary`;
    return this.get(path, {}, headers, opts);
  }

  getJob(projectName, jobName, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/jobs/${jobName}`;
    return this.get(path, {}, headers, opts);
  }

  getPackage(projectName, packageName, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/packages/${packageName}`;
    return this.get(path, {}, headers, opts);
  }

  getProject(projectName, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}`;
    return this.get(path, {}, headers, opts);
  }

  getRawPlanJson(projectName, jobName, query, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/jobs/${jobName}/planjson`;
    return this.get(path, query, headers, opts);
  }

  getRefPackageJob(projectName, packageName, query, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/packages/${packageName}/jobs`;
    return this.get(path, query, headers, opts);
  }

  listChildFolder(projectName, query, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/folders/children`;
    return this.get(path, query, headers, opts);
  }

  listCluster(query, headers = {}, opts = {}) {
    const path = `/api/v2/clusters`;
    return this.get(path, query, headers, opts);
  }

  listInstance(projectName, query, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/instances`;
    return this.get(path, query, headers, opts);
  }

  listJob(projectName, query, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/jobs`;
    return this.get(path, query, headers, opts);
  }

  listPackage(projectName, query, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/packages`;
    return this.get(path, query, headers, opts);
  }

  listProject(query, headers = {}, opts = {}) {
    const path = `/api/v2/projects`;
    return this.get(path, query, headers, opts);
  }

  listProjectBindQueue(projectName, query, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/queues`;
    return this.get(path, query, headers, opts);
  }

  listProjectBindQueueResource(projectName, query, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/queueresource`;
    return this.get(path, query, headers, opts);
  }

  mVFolder(projectName, body, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/folders`;
    return this.put(path, {}, body, headers, opts);
  }

  modifyInstanceState(projectName, jobName, instanceId, body, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/jobs/${jobName}/instances/${instanceId}/expectstate`;
    return this.put(path, {}, body, headers, opts);
  }

  modifyMasterSpec(clusterId, body, headers = {}, opts = {}) {
    const path = `/api/v2/clusters/${clusterId}/specification`;
    return this.put(path, {}, body, headers, opts);
  }

  offlineJob(projectName, jobName, body, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/jobs/${jobName}/offline`;
    return this.put(path, {}, body, headers, opts);
  }

  shrinkCluster(clusterId, body, headers = {}, opts = {}) {
    const path = `/api/v2/clusters/${clusterId}/shrink`;
    return this.put(path, {}, body, headers, opts);
  }

  startJob(projectName, jobName, body, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/jobs/${jobName}/instance`;
    return this.post(path, {}, body, headers, opts);
  }

  unbindQueue(projectName, query, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/queue`;
    return this.delete(path, query, headers, opts);
  }

  updateJob(projectName, jobName, body, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/jobs/${jobName}`;
    return this.put(path, {}, body, headers, opts);
  }

  updatePackage(projectName, packageName, body, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/packages/${packageName}`;
    return this.put(path, {}, body, headers, opts);
  }

  validateJob(projectName, jobName, headers = {}, opts = {}) {
    const path = `/api/v2/projects/${projectName}/jobs/${jobName}/validate`;
    return this.get(path, {}, headers, opts);
  }

}

module.exports = Client;

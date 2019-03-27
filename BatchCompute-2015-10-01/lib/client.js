
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2015-10-01';
    super(config);
  }

  cancelImage(resourceName, query, body, headers = {}, opts = {}) {
    const path = `/images/${resourceName}`;
    return this.put(path, query, body, headers, opts);
  }

  changeJobPriority(resourceName, query, body, headers = {}, opts = {}) {
    const path = `/jobs/${resourceName}`;
    return this.put(path, query, body, headers, opts);
  }

  createCluster(query, body, headers = {}, opts = {}) {
    const path = `/clusters`;
    return this.post(path, query, body, headers, opts);
  }

  createImage(query, body, headers = {}, opts = {}) {
    const path = `/images`;
    return this.post(path, query, body, headers, opts);
  }

  createJob(query, body, headers = {}, opts = {}) {
    const path = `/jobs`;
    return this.post(path, query, body, headers, opts);
  }

  deleteCluster(resourceName, query, headers = {}, opts = {}) {
    const path = `/clusters/${resourceName}`;
    return this.delete(path, query, headers, opts);
  }

  deleteClusterInstance(clusterId, groupName, instanceId, query, headers = {}, opts = {}) {
    const path = `/clusters/${clusterId}/groups/${groupName}/instances/${instanceId}`;
    return this.delete(path, query, headers, opts);
  }

  deleteImage(resourceName, query, headers = {}, opts = {}) {
    const path = `/images/${resourceName}`;
    return this.delete(path, query, headers, opts);
  }

  deleteJob(resourceName, query, headers = {}, opts = {}) {
    const path = `/jobs/${resourceName}`;
    return this.delete(path, query, headers, opts);
  }

  getCluster(resourceName, query, headers = {}, opts = {}) {
    const path = `/clusters/${resourceName}`;
    return this.get(path, query, headers, opts);
  }

  getClusterInstance(clusterId, groupName, instanceId, query, headers = {}, opts = {}) {
    const path = `/clusters/${clusterId}/groups/${groupName}/instances/${instanceId}`;
    return this.get(path, query, headers, opts);
  }

  getImage(resourceName, query, headers = {}, opts = {}) {
    const path = `/images/${resourceName}`;
    return this.get(path, query, headers, opts);
  }

  getInstance(resourceName, taskName, instanceId, query, headers = {}, opts = {}) {
    const path = `/jobs/${resourceName}/tasks/${taskName}/instances/${instanceId}`;
    return this.get(path, query, headers, opts);
  }

  getJob(resourceName, query, headers = {}, opts = {}) {
    const path = `/jobs/${resourceName}`;
    return this.get(path, query, headers, opts);
  }

  getJobDescription(resourceName, query, headers = {}, opts = {}) {
    const path = `/jobs/${resourceName}?description`;
    return this.get(path, query, headers, opts);
  }

  getQuota(query, headers = {}, opts = {}) {
    const path = `/quotas`;
    return this.get(path, query, headers, opts);
  }

  getTask(resourceName, taskName, query, headers = {}, opts = {}) {
    const path = `/jobs/${resourceName}/tasks/${taskName}`;
    return this.get(path, query, headers, opts);
  }

  listClusterInstances(clusterId, groupName, query, headers = {}, opts = {}) {
    const path = `/clusters/${clusterId}/groups/${groupName}/instances`;
    return this.get(path, query, headers, opts);
  }

  listClusters(query, headers = {}, opts = {}) {
    const path = `/clusters`;
    return this.get(path, query, headers, opts);
  }

  listImages(query, headers = {}, opts = {}) {
    const path = `/images`;
    return this.get(path, query, headers, opts);
  }

  listInstances(resourceName, taskName, query, headers = {}, opts = {}) {
    const path = `/jobs/${resourceName}/tasks/${taskName}/instances`;
    return this.get(path, query, headers, opts);
  }

  listJobs(query, headers = {}, opts = {}) {
    const path = `/jobs`;
    return this.get(path, query, headers, opts);
  }

  listTasks(resourceName, query, headers = {}, opts = {}) {
    const path = `/jobs/${resourceName}/tasks`;
    return this.get(path, query, headers, opts);
  }

  modifyCluster(resourceName, query, body, headers = {}, opts = {}) {
    const path = `/clusters/${resourceName}`;
    return this.put(path, query, body, headers, opts);
  }

  pollForTask(clusterId, workerId, query, body, headers = {}, opts = {}) {
    const path = `/clusters/${clusterId}/workers/${workerId}/fetchTask`;
    return this.post(path, query, body, headers, opts);
  }

  recreateClusterInstance(clusterId, groupName, instanceId, query, body, headers = {}, opts = {}) {
    const path = `/clusters/${clusterId}/groups/${groupName}/instances/${instanceId}/recreate`;
    return this.post(path, query, body, headers, opts);
  }

  renewClusterInstance(clusterId, groupName, instanceId, query, body, headers = {}, opts = {}) {
    const path = `/clusters/${clusterId}/groups/${groupName}/instances/${instanceId}/renew`;
    return this.post(path, query, body, headers, opts);
  }

  reportTaskStatus(clusterId, workerId, query, body, headers = {}, opts = {}) {
    const path = `/clusters/${clusterId}/workers/${workerId}/updateTaskStatus`;
    return this.post(path, query, body, headers, opts);
  }

  reportWorkerStatus(clusterId, workerId, query, body, headers = {}, opts = {}) {
    const path = `/clusters/${clusterId}/workers/${workerId}/updateStatus`;
    return this.post(path, query, body, headers, opts);
  }

  startJob(resourceName, query, body, headers = {}, opts = {}) {
    const path = `/jobs/${resourceName}/start`;
    return this.post(path, query, body, headers, opts);
  }

  stopJob(resourceName, query, body, headers = {}, opts = {}) {
    const path = `/jobs/${resourceName}/stop`;
    return this.post(path, query, body, headers, opts);
  }

  updateTaskStatus(clusterId, workerId, query, body, headers = {}, opts = {}) {
    const path = `outdated/clusters/${clusterId}/workers/${workerId}/updateTaskStatus`;
    return this.post(path, query, body, headers, opts);
  }

}

module.exports = Client;

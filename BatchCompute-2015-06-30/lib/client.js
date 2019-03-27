
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2015-06-30';
    super(config);
  }

  deleteJob(resourceName, query, headers = {}, opts = {}) {
    const path = `/jobs/${resourceName}`;
    return this.delete(path, query, headers, opts);
  }

  getJob(resourceName, query, headers = {}, opts = {}) {
    const path = `/jobs/${resourceName}`;
    return this.get(path, query, headers, opts);
  }

  getJobDescription(resourceName, query, headers = {}, opts = {}) {
    const path = `/jobs/${resourceName}/description`;
    return this.get(path, query, headers, opts);
  }

  getTasks(resourceName, query, headers = {}, opts = {}) {
    const path = `/jobs/${resourceName}/tasks`;
    return this.get(path, query, headers, opts);
  }

  listImages(query, headers = {}, opts = {}) {
    const path = `/images`;
    return this.get(path, query, headers, opts);
  }

  listJobs(query, headers = {}, opts = {}) {
    const path = `/jobs`;
    return this.get(path, query, headers, opts);
  }

  listSnapshots(query, headers = {}, opts = {}) {
    const path = `/snapshots`;
    return this.get(path, query, headers, opts);
  }

  modifyJob(resourceName, query, body, headers = {}, opts = {}) {
    const path = `/jobs/${resourceName}`;
    return this.put(path, query, body, headers, opts);
  }

  postJob(query, body, headers = {}, opts = {}) {
    const path = `/jobs`;
    return this.post(path, query, body, headers, opts);
  }

  putJob(resourceName, query, body, headers = {}, opts = {}) {
    const path = `/jobs/${resourceName}/Priority`;
    return this.put(path, query, body, headers, opts);
  }

  releaseJob(resourceName, query, headers = {}, opts = {}) {
    const path = `/2013-01-11/jobs/${resourceName}`;
    return this.delete(path, query, headers, opts);
  }

}

module.exports = Client;

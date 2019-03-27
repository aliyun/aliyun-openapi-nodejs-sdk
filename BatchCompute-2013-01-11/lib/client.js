
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2013-01-11';
    super(config);
  }

  deleteImage(resourceName, query, headers = {}, opts = {}) {
    const path = `/images/${resourceName}`;
    return this.delete(path, query, headers, opts);
  }

  deleteJob(resourceName, query, headers = {}, opts = {}) {
    const path = `/jobs/${resourceName}`;
    return this.delete(path, query, headers, opts);
  }

  deleteSnapshot(resourceName, query, headers = {}, opts = {}) {
    const path = `/snapshots/${resourceName}`;
    return this.delete(path, query, headers, opts);
  }

  getImage(resourceName, query, headers = {}, opts = {}) {
    const path = `/images/${resourceName}`;
    return this.get(path, query, headers, opts);
  }

  getJob(resourceName, query, headers = {}, opts = {}) {
    const path = `/jobs/${resourceName}`;
    return this.get(path, query, headers, opts);
  }

  getJobDescription(resourceName, query, headers = {}, opts = {}) {
    const path = `/jobs/${resourceName}/description`;
    return this.get(path, query, headers, opts);
  }

  getSnapshot(resourceName, query, headers = {}, opts = {}) {
    const path = `/snapshots/${resourceName}`;
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
    const path = `/jobs/${resourceName}`;
    return this.delete(path, query, headers, opts);
  }

  startJob(resourceName, body, headers = {}, opts = {}) {
    const path = `/jobs/${resourceName}?Action=Start`;
    return this.put(path, {}, body, headers, opts);
  }

  stopJob(resourceName, body, headers = {}, opts = {}) {
    const path = `/jobs/${resourceName}?Action=Stop`;
    return this.put(path, {}, body, headers, opts);
  }

}

module.exports = Client;

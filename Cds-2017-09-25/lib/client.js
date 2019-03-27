
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2017-09-25';
    super(config);
  }

  createCredential(query, body, headers = {}, opts = {}) {
    const path = `/v1/credential/create`;
    return this.post(path, query, body, headers, opts);
  }

  createJob(query, body, headers = {}, opts = {}) {
    const path = `/v1/job/create`;
    return this.post(path, query, body, headers, opts);
  }

  deleteBuild(jobName, buildNumber, headers = {}, opts = {}) {
    const path = `/v1/job/${jobName}/build/${buildNumber}`;
    return this.delete(path, {}, headers, opts);
  }

  deleteCredential(query, body, headers = {}, opts = {}) {
    const path = `/v1/credential/delete`;
    return this.post(path, query, body, headers, opts);
  }

  deleteJob(jobName, headers = {}, opts = {}) {
    const path = `/v1/job/${jobName}`;
    return this.delete(path, {}, headers, opts);
  }

  getBuild(jobName, buildNumber, headers = {}, opts = {}) {
    const path = `/v1/job/${jobName}/build/${buildNumber}`;
    return this.get(path, {}, headers, opts);
  }

  getBuilds(jobName, query, headers = {}, opts = {}) {
    const path = `/v1/job/${jobName}/builds`;
    return this.get(path, query, headers, opts);
  }

  getCredentials(headers = {}, opts = {}) {
    const path = `/v1/credentials`;
    return this.get(path, {}, headers, opts);
  }

  getJob(jobName, headers = {}, opts = {}) {
    const path = `/v1/job/${jobName}`;
    return this.get(path, {}, headers, opts);
  }

  getJobs(query, headers = {}, opts = {}) {
    const path = `/v1/jobs`;
    return this.get(path, query, headers, opts);
  }

  runJob(jobName, body, headers = {}, opts = {}) {
    const path = `/v1/job/${jobName}/run`;
    return this.post(path, {}, body, headers, opts);
  }

  stopBuild(jobName, buildNumber, body, headers = {}, opts = {}) {
    const path = `/v1/job/${jobName}/build/${buildNumber}/stop`;
    return this.post(path, {}, body, headers, opts);
  }

  updateCredential(query, body, headers = {}, opts = {}) {
    const path = `/v1/credential/update`;
    return this.post(path, query, body, headers, opts);
  }

  updateJob(query, body, headers = {}, opts = {}) {
    const path = `/v1/job/update`;
    return this.post(path, query, body, headers, opts);
  }

}

module.exports = Client;

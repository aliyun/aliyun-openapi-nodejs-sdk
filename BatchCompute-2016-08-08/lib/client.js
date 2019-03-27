
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2016-08-08';
    super(config);
  }

  createObject(body, headers = {}, opts = {}) {
    const path = `/objects`;
    return this.post(path, {}, body, headers, opts);
  }

  createProject(body, headers = {}, opts = {}) {
    const path = `/projects`;
    return this.post(path, {}, body, headers, opts);
  }

  deleteObject(headers = {}, opts = {}) {
    const path = `/objects/${objectId}`;
    return this.delete(path, {}, headers, opts);
  }

  deleteProject(headers = {}, opts = {}) {
    const path = `/projects/${projectId}`;
    return this.delete(path, {}, headers, opts);
  }

  getObject(headers = {}, opts = {}) {
    const path = `/objects/${objectId}`;
    return this.get(path, {}, headers, opts);
  }

  getProject(headers = {}, opts = {}) {
    const path = `/projects/${projectId}`;
    return this.get(path, {}, headers, opts);
  }

  getProjectQuota(headers = {}, opts = {}) {
    const path = `/projects/${projectId}/quota`;
    return this.get(path, {}, headers, opts);
  }

  getUploadpath(headers = {}, opts = {}) {
    const path = `/projects/${projectId}/uploadpath`;
    return this.get(path, {}, headers, opts);
  }

  listObjects(headers = {}, opts = {}) {
    const path = `/objects`;
    return this.get(path, {}, headers, opts);
  }

  listProjects(headers = {}, opts = {}) {
    const path = `/projects`;
    return this.get(path, {}, headers, opts);
  }

}

module.exports = Client;

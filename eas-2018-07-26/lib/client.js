
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2018-07-26';
    super(config);
  }

  checkServiceExists(region, service_name, headers = {}, opts = {}) {
    const path = `/api/services/${region}/${service_name}/exists`;
    return this.get(path, {}, headers, opts);
  }

  createService(body, headers = {}, opts = {}) {
    const path = `/api/services`;
    return this.post(path, {}, body, headers, opts);
  }

  deleteService(region, service_name, headers = {}, opts = {}) {
    const path = `/api/services/${region}/${service_name}`;
    return this.delete(path, {}, headers, opts);
  }

  getService(region, service_name, headers = {}, opts = {}) {
    const path = `/api/services/${region}/${service_name}`;
    return this.get(path, {}, headers, opts);
  }

  getServiceStatistics(region, service_name, query, headers = {}, opts = {}) {
    const path = `/api/services/${region}/${service_name}/statistics`;
    return this.get(path, query, headers, opts);
  }

  getServiceToken(region, service_name, headers = {}, opts = {}) {
    const path = `/api/services/${region}/${service_name}/token`;
    return this.get(path, {}, headers, opts);
  }

  getServiceVersion(region, service_name, headers = {}, opts = {}) {
    const path = `/api/services/${region}/${service_name}/version`;
    return this.get(path, {}, headers, opts);
  }

  getServiceWorker(region, service_name, headers = {}, opts = {}) {
    const path = `/api/services/${region}/${service_name}/worker`;
    return this.get(path, {}, headers, opts);
  }

  listServices(query, headers = {}, opts = {}) {
    const path = `/api/services`;
    return this.get(path, query, headers, opts);
  }

  listVIndex(headers = {}, opts = {}) {
    const path = `/api/vindex`;
    return this.get(path, {}, headers, opts);
  }

  modifyService(region, service_name, body, headers = {}, opts = {}) {
    const path = `/api/services/${region}/${service_name}`;
    return this.post(path, {}, body, headers, opts);
  }

  modifyServiceVersion(region, service_name, body, headers = {}, opts = {}) {
    const path = `/api/services/${region}/${service_name}/version`;
    return this.post(path, {}, body, headers, opts);
  }

  releaseService(region, service_name, body, headers = {}, opts = {}) {
    const path = `/api/services/${region}/${service_name}/release`;
    return this.put(path, {}, body, headers, opts);
  }

  startService(region, service_name, body, headers = {}, opts = {}) {
    const path = `/api/services/${region}/${service_name}/start`;
    return this.put(path, {}, body, headers, opts);
  }

  stopService(region, service_name, body, headers = {}, opts = {}) {
    const path = `/api/services/${region}/${service_name}/stop`;
    return this.put(path, {}, body, headers, opts);
  }

}

module.exports = Client;

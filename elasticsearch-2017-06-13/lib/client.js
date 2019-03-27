
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2017-06-13';
    super(config);
  }

  deleteInstance(instanceId, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}`;
    return this.delete(path, {}, headers, opts);
  }

  describeInstance(instanceId, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}`;
    return this.get(path, {}, headers, opts);
  }

  getRegionConfiguration(headers = {}, opts = {}) {
    const path = `/openapi/region`;
    return this.get(path, {}, headers, opts);
  }

  installSystemPlugin(instanceId, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/plugins/system/actions/install`;
    return this.post(path, {}, body, headers, opts);
  }

  listInstance(query, headers = {}, opts = {}) {
    const path = `/openapi/instances`;
    return this.get(path, query, headers, opts);
  }

  listPlugins(instanceId, query, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/plugins`;
    return this.get(path, query, headers, opts);
  }

  listSearchLog(instanceId, query, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/search-log`;
    return this.get(path, query, headers, opts);
  }

  restartInstance(instanceId, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/actions/restart`;
    return this.post(path, {}, body, headers, opts);
  }

  uninstallPlugin(instanceId, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/plugins/actions/uninstall`;
    return this.post(path, {}, body, headers, opts);
  }

  updateAdminPassword(instanceId, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/admin-pwd`;
    return this.post(path, {}, body, headers, opts);
  }

  updateBlackIps(instanceId, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/black-ips`;
    return this.post(path, {}, body, headers, opts);
  }

  updateDescription(instanceId, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/description`;
    return this.post(path, {}, body, headers, opts);
  }

  updateDict(instanceId, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/dict`;
    return this.put(path, {}, body, headers, opts);
  }

  updateHotIkDicts(instanceId, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/ik-hot-dict`;
    return this.put(path, {}, body, headers, opts);
  }

  updateInstance(instanceId, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}`;
    return this.put(path, {}, body, headers, opts);
  }

  updateInstanceSettings(instanceId, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/instance-settings`;
    return this.post(path, {}, body, headers, opts);
  }

  updateKibanaWhiteIps(instanceId, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/kibana-white-ips`;
    return this.post(path, {}, body, headers, opts);
  }

  updatePrivateNetworkWhiteIps(instanceId, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/private-network-white-ips`;
    return this.post(path, {}, body, headers, opts);
  }

  updatePublicNetwork(instanceId, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/public-network`;
    return this.post(path, {}, body, headers, opts);
  }

  updatePublicWhiteIps(instanceId, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/public-white-ips`;
    return this.post(path, {}, body, headers, opts);
  }

  updateSnapshotSetting(instanceId, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/snapshot-setting`;
    return this.post(path, {}, body, headers, opts);
  }

  updateSynonymsDicts(instanceId, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/synonymsDict`;
    return this.put(path, {}, body, headers, opts);
  }

  updateWhiteIps(instanceId, body, headers = {}, opts = {}) {
    const path = `/openapi/instances/${instanceId}/white-ips`;
    return this.post(path, {}, body, headers, opts);
  }

  createInstance(body, headers = {}, opts = {}) {
    const path = `/openapi/instances`;
    return this.post(path, {}, body, headers, opts);
  }

}

module.exports = Client;

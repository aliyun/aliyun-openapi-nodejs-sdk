
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2015-12-15';
    super(config);
  }

  addAgilityCluster(body, headers = {}, opts = {}) {
    const path = `/add_agility_cluster`;
    return this.post(path, {}, body, headers, opts);
  }

  attachInstances(clusterId, body, headers = {}, opts = {}) {
    const path = `/clusters/${clusterId}/attach`;
    return this.post(path, {}, body, headers, opts);
  }

  callBackAgilityCluster(token, reqOnce, body, headers = {}, opts = {}) {
    const path = `/agility/token/${token}/req_once/${reqOnce}/callback`;
    return this.post(path, {}, body, headers, opts);
  }

  callbackClusterToken(token, reqOnce, body, headers = {}, opts = {}) {
    const path = `/token/${token}/req_once/${reqOnce}/callback`;
    return this.post(path, {}, body, headers, opts);
  }

  checkAliyunCSServiceRole(headers = {}, opts = {}) {
    const path = `/aliyuncsrole/status`;
    return this.get(path, {}, headers, opts);
  }

  createCluster(body, headers = {}, opts = {}) {
    const path = `/clusters`;
    return this.post(path, {}, body, headers, opts);
  }

  createClusterToken(clusterId, body, headers = {}, opts = {}) {
    const path = `/clusters/${clusterId}/token`;
    return this.post(path, {}, body, headers, opts);
  }

  createTemplate(body, headers = {}, opts = {}) {
    const path = `/templates`;
    return this.put(path, {}, body, headers, opts);
  }

  deleteCluster(clusterId, headers = {}, opts = {}) {
    const path = `/clusters/${clusterId}`;
    return this.delete(path, {}, headers, opts);
  }

  deleteClusterNode(clusterId, ip, query, headers = {}, opts = {}) {
    const path = `/clusters/${clusterId}/ip/${ip}`;
    return this.delete(path, query, headers, opts);
  }

  describeAgilityTunnelAgentInfo(token, headers = {}, opts = {}) {
    const path = `/agility/${token}/agent_info`;
    return this.get(path, {}, headers, opts);
  }

  describeAgilityTunnelCerts(token, headers = {}, opts = {}) {
    const path = `/agility/${token}/agent_certs`;
    return this.get(path, {}, headers, opts);
  }

  describeApiVersion(headers = {}, opts = {}) {
    const path = `/version`;
    return this.get(path, {}, headers, opts);
  }

  describeClusterCerts(clusterId, headers = {}, opts = {}) {
    const path = `/clusters/${clusterId}/certs`;
    return this.get(path, {}, headers, opts);
  }

  describeClusterDetail(clusterId, headers = {}, opts = {}) {
    const path = `/clusters/${clusterId}`;
    return this.get(path, {}, headers, opts);
  }

  describeClusterHosts(clusterId, headers = {}, opts = {}) {
    const path = `/clusters/${clusterId}/hosts`;
    return this.get(path, {}, headers, opts);
  }

  describeClusterLogs(clusterId, headers = {}, opts = {}) {
    const path = `/clusters/${clusterId}/logs`;
    return this.get(path, {}, headers, opts);
  }

  describeClusterNodeInfo(token, headers = {}, opts = {}) {
    const path = `/token/${token}/node_info`;
    return this.get(path, {}, headers, opts);
  }

  describeClusterNodeInfoWithInstance(token, instanceId, headers = {}, opts = {}) {
    const path = `/token/${token}/instance/${instanceId}/node_info`;
    return this.get(path, {}, headers, opts);
  }

  describeClusterNodes(clusterId, query, headers = {}, opts = {}) {
    const path = `/clusters/${clusterId}/nodes`;
    return this.get(path, query, headers, opts);
  }

  describeClusterScaledNode(clusterId, headers = {}, opts = {}) {
    const path = `/clusters/${clusterId}/scaled_nodes/`;
    return this.get(path, {}, headers, opts);
  }

  describeClusterServices(clusterId, headers = {}, opts = {}) {
    const path = `/clusters/${clusterId}/services`;
    return this.get(path, {}, headers, opts);
  }

  describeClusterTokens(clusterId, headers = {}, opts = {}) {
    const path = `/clusters/${clusterId}/tokens`;
    return this.get(path, {}, headers, opts);
  }

  describeClusters(query, headers = {}, opts = {}) {
    const path = `/clusters`;
    return this.get(path, query, headers, opts);
  }

  describeImages(query, headers = {}, opts = {}) {
    const path = `/images`;
    return this.get(path, query, headers, opts);
  }

  describeKubernetesTemplate(clusterId, headers = {}, opts = {}) {
    const path = `/k8s/templates/${clusterId}`;
    return this.get(path, {}, headers, opts);
  }

  describeKubernetesTemplates(query, headers = {}, opts = {}) {
    const path = `/k8s/templates`;
    return this.get(path, query, headers, opts);
  }

  describeServiceContainers(clusterId, serviceId, headers = {}, opts = {}) {
    const path = `/clusters/${clusterId}/services/${serviceId}/containers`;
    return this.get(path, {}, headers, opts);
  }

  describeTaskInfo(taskId, headers = {}, opts = {}) {
    const path = `/tasks/${taskId}`;
    return this.get(path, {}, headers, opts);
  }

  describeTemplateAttribute(templateId, headers = {}, opts = {}) {
    const path = `/templates/${templateId}`;
    return this.get(path, {}, headers, opts);
  }

  describeTemplates(headers = {}, opts = {}) {
    const path = `/templates`;
    return this.get(path, {}, headers, opts);
  }

  describeUserContainers(regionId, query, headers = {}, opts = {}) {
    const path = `/region/${regionId}/containers`;
    return this.get(path, query, headers, opts);
  }

  downloadClusterNodeCerts(token, nodeId, headers = {}, opts = {}) {
    const path = `/token/${token}/nodes/${nodeId}/certs`;
    return this.get(path, {}, headers, opts);
  }

  gatherLogsToken(token, body, headers = {}, opts = {}) {
    const path = `/token/${token}/gather_logs`;
    return this.post(path, {}, body, headers, opts);
  }

  getClusterProjects(clusterId, headers = {}, opts = {}) {
    const path = `/clusters/${clusterId}/projects`;
    return this.get(path, {}, headers, opts);
  }

  getProjectEvents(clusterId, projectId, headers = {}, opts = {}) {
    const path = `/clusters/${clusterId}/projects/${projectId}/events`;
    return this.get(path, {}, headers, opts);
  }

  getTriggerHook(clusterId, projectId, headers = {}, opts = {}) {
    const path = `/hook/trigger/${clusterId}/${projectId}`;
    return this.get(path, {}, headers, opts);
  }

  modifyClusterName(body, headers = {}, opts = {}) {
    const path = `/clusters/${clusterId}/name/${clusterName}`;
    return this.post(path, {}, body, headers, opts);
  }

  resetClusterNode(clusterId, instanceId, body, headers = {}, opts = {}) {
    const path = `/clusters/${clusterId}/instances/${instanceId}/reset`;
    return this.post(path, {}, body, headers, opts);
  }

  revokeClusterToken(token, headers = {}, opts = {}) {
    const path = `/token/${token}/revoke`;
    return this.delete(path, {}, headers, opts);
  }

  scaleCluster(clusterId, body, headers = {}, opts = {}) {
    const path = `/clusters/${clusterId}`;
    return this.put(path, {}, body, headers, opts);
  }

  scaleInCluster(clusterId, body, headers = {}, opts = {}) {
    const path = `/clusters/${clusterId}/scalein`;
    return this.post(path, {}, body, headers, opts);
  }

  updateSubUserResouces(body, headers = {}, opts = {}) {
    const path = `/ram/resources`;
    return this.post(path, {}, body, headers, opts);
  }

  upgradeClusterComponents(clusterId, componentId, body, headers = {}, opts = {}) {
    const path = `/clusters/${clusterId}/components/${componentId}/upgrade`;
    return this.post(path, {}, body, headers, opts);
  }

}

module.exports = Client;

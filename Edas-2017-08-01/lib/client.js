
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2017-08-01';
    super(config);
  }

  authorizeApplication(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/account/authorize_app`;
    return this.post(path, query, body, headers, opts);
  }

  authorizeResourceGroup(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/account/authorize_res_group`;
    return this.post(path, query, body, headers, opts);
  }

  authorizeRole(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/account/authorize_role`;
    return this.post(path, query, body, headers, opts);
  }

  bindK8sSlb(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/k8s/acs/k8s_slb_binding`;
    return this.post(path, query, body, headers, opts);
  }

  bindServerlessSlb(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/k8s/acs/serverless_slb_binding`;
    return this.post(path, query, body, headers, opts);
  }

  bindSlb(query, body, headers = {}, opts = {}) {
    const path = `/pop/app/bind_slb_json`;
    return this.post(path, query, body, headers, opts);
  }

  createServerlessApplication(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/k8s/pop/pop_serverless_app_create_without_deploy`;
    return this.post(path, query, body, headers, opts);
  }

  deleteApplication(query, headers = {}, opts = {}) {
    const path = `/pop/v5/changeorder/co_delete_app`;
    return this.delete(path, query, headers, opts);
  }

  deleteCluster(query, headers = {}, opts = {}) {
    const path = `/pop/v5/resource/cluster`;
    return this.delete(path, query, headers, opts);
  }

  deleteClusterMember(query, headers = {}, opts = {}) {
    const path = `/pop/v5/resource/cluster_member`;
    return this.delete(path, query, headers, opts);
  }

  deleteConfigCenter(query, headers = {}, opts = {}) {
    const path = `/pop/v5/configCenter`;
    return this.delete(path, query, headers, opts);
  }

  deleteDegradeControl(query, headers = {}, opts = {}) {
    const path = `/pop/v5/degradeControl`;
    return this.delete(path, query, headers, opts);
  }

  deleteDeployGroup(query, headers = {}, opts = {}) {
    const path = `/pop/v5/deploy_group`;
    return this.delete(path, query, headers, opts);
  }

  deleteEcu(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/resource/delete_ecu`;
    return this.post(path, query, body, headers, opts);
  }

  deleteFlowControl(query, headers = {}, opts = {}) {
    const path = `/pop/v5/flowControl`;
    return this.delete(path, query, headers, opts);
  }

  deleteK8sApplication(query, headers = {}, opts = {}) {
    const path = `/pop/v5/k8s/acs/k8s_apps`;
    return this.delete(path, query, headers, opts);
  }

  deleteRole(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/account/delete_role`;
    return this.post(path, query, body, headers, opts);
  }

  deleteServerlessApplication(query, headers = {}, opts = {}) {
    const path = `/pop/v5/k8s/pop/pop_serverless_app_delete`;
    return this.delete(path, query, headers, opts);
  }

  deleteServiceAuthorization(query, headers = {}, opts = {}) {
    const path = `/pop/v5/whitelist/appAuthControl`;
    return this.delete(path, query, headers, opts);
  }

  deleteServiceGroup(query, headers = {}, opts = {}) {
    const path = `/pop/v5/service/serviceGroups`;
    return this.delete(path, query, headers, opts);
  }

  deleteUserDefineRegion(query, headers = {}, opts = {}) {
    const path = `/pop/v5/user_region_def`;
    return this.delete(path, query, headers, opts);
  }

  deleteVpc(query, headers = {}, opts = {}) {
    const path = `/pop/v5/vpcs`;
    return this.delete(path, query, headers, opts);
  }

  deployApplication(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/changeorder/co_deploy`;
    return this.post(path, query, body, headers, opts);
  }

  deployK8sApplication(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/k8s/acs/k8s_apps`;
    return this.post(path, query, body, headers, opts);
  }

  deployServerlessApplication(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/k8s/pop/pop_serverless_app_deploy`;
    return this.post(path, query, body, headers, opts);
  }

  disableDegradeControl(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/degradecontrol/disable`;
    return this.put(path, query, body, headers, opts);
  }

  disableFlowControl(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/flowcontrol/disable`;
    return this.put(path, query, body, headers, opts);
  }

  enableDegradeControl(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/degradecontrol/enable`;
    return this.put(path, query, body, headers, opts);
  }

  enableFlowControl(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/flowcontrol/enable`;
    return this.put(path, query, body, headers, opts);
  }

  getApplication(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/app/app_info`;
    return this.post(path, query, body, headers, opts);
  }

  getChangeOrderInfo(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/changeorder/change_order_info`;
    return this.post(path, query, body, headers, opts);
  }

  getCluster(query, headers = {}, opts = {}) {
    const path = `/pop/v5/resource/cluster`;
    return this.get(path, query, headers, opts);
  }

  getContainerConfiguration(query, headers = {}, opts = {}) {
    const path = `/pop/v5/app/container_config`;
    return this.get(path, query, headers, opts);
  }

  getCredential(body, headers = {}, opts = {}) {
    const path = `/pop/v5/internal/credential`;
    return this.post(path, {}, body, headers, opts);
  }

  getJvmConfiguration(query, headers = {}, opts = {}) {
    const path = `/pop/v5/app/app_jvm_config`;
    return this.get(path, query, headers, opts);
  }

  getPackageStorageCredential(headers = {}, opts = {}) {
    const path = `/pop/v5/package_storage_credential`;
    return this.get(path, {}, headers, opts);
  }

  getSecureToken(query, headers = {}, opts = {}) {
    const path = `/pop/v5/secure_token`;
    return this.get(path, query, headers, opts);
  }

  getServerlessAppConfigDetail(query, headers = {}, opts = {}) {
    const path = `/pop/v5/k8s/pop/pop_serverless_app_config_detail`;
    return this.get(path, query, headers, opts);
  }

  getServiceAuthorization(query, headers = {}, opts = {}) {
    const path = `/pop/v5/whitelist/appAuthControl`;
    return this.get(path, query, headers, opts);
  }

  getVpc(query, headers = {}, opts = {}) {
    const path = `/pop/v5/vpcs`;
    return this.get(path, query, headers, opts);
  }

  importK8sCluster(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/import_k8s_cluster`;
    return this.post(path, query, body, headers, opts);
  }

  insertApplication(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/changeorder/co_create_app`;
    return this.post(path, query, body, headers, opts);
  }

  insertCluster(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/resource/cluster`;
    return this.post(path, query, body, headers, opts);
  }

  insertClusterMember(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/resource/cluster_member`;
    return this.post(path, query, body, headers, opts);
  }

  insertConfigCenter(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/configCenter`;
    return this.post(path, query, body, headers, opts);
  }

  insertDegradeControl(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/degradeControl`;
    return this.post(path, query, body, headers, opts);
  }

  insertDeployGroup(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/deploy_group`;
    return this.post(path, query, body, headers, opts);
  }

  insertFlowControl(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/flowControl`;
    return this.post(path, query, body, headers, opts);
  }

  insertK8sApplication(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/k8s/acs/create_k8s_app`;
    return this.post(path, query, body, headers, opts);
  }

  insertOrUpdateRegion(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/user_region_def`;
    return this.post(path, query, body, headers, opts);
  }

  insertRole(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/account/create_role`;
    return this.post(path, query, body, headers, opts);
  }

  insertServerlessApplication(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/k8s/pop/pop_serverless_app_create_without_deploy`;
    return this.post(path, query, body, headers, opts);
  }

  insertServiceAuthorization(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/whitelist/appAuthControl`;
    return this.post(path, query, body, headers, opts);
  }

  insertServiceGroup(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/service/serviceGroups`;
    return this.post(path, query, body, headers, opts);
  }

  insertVpc(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/vpcs`;
    return this.post(path, query, body, headers, opts);
  }

  installAgent(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/ecss/install_agent`;
    return this.post(path, query, body, headers, opts);
  }

  listAliyunRegion(body, headers = {}, opts = {}) {
    const path = `/pop/v5/resource/region_list`;
    return this.post(path, {}, body, headers, opts);
  }

  listApplication(body, headers = {}, opts = {}) {
    const path = `/pop/v5/app/app_list`;
    return this.post(path, {}, body, headers, opts);
  }

  listApplicationEcc(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/resource/ecc_list`;
    return this.post(path, query, body, headers, opts);
  }

  listApplicationEcu(body, headers = {}, opts = {}) {
    const path = `/pop/v5/resource/ecu_list`;
    return this.post(path, {}, body, headers, opts);
  }

  listAuthority(body, headers = {}, opts = {}) {
    const path = `/pop/v5/account/authority_list`;
    return this.post(path, {}, body, headers, opts);
  }

  listBuildPack(body, headers = {}, opts = {}) {
    const path = `/pop/v5/app/build_pack_list`;
    return this.post(path, {}, body, headers, opts);
  }

  listCluster(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/resource/cluster_list`;
    return this.post(path, query, body, headers, opts);
  }

  listClusterMembers(query, headers = {}, opts = {}) {
    const path = `/pop/v5/resource/cluster_member_list`;
    return this.get(path, query, headers, opts);
  }

  listComponents(headers = {}, opts = {}) {
    const path = `/pop/v5/resource/components`;
    return this.get(path, {}, headers, opts);
  }

  listConfigCenters(query, headers = {}, opts = {}) {
    const path = `/pop/v5/configCenters`;
    return this.get(path, query, headers, opts);
  }

  listConsumedServices(query, headers = {}, opts = {}) {
    const path = `/pop/v5/service/listConsumedServices`;
    return this.get(path, query, headers, opts);
  }

  listConvertableEcu(query, headers = {}, opts = {}) {
    const path = `/pop/v5/resource/convertable_ecu_list`;
    return this.get(path, query, headers, opts);
  }

  listDegradeControls(query, headers = {}, opts = {}) {
    const path = `/pop/v5/app/degradeControls`;
    return this.get(path, query, headers, opts);
  }

  listDeployGroup(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/app/deploy_group_list`;
    return this.post(path, query, body, headers, opts);
  }

  listEcsNotInCluster(query, headers = {}, opts = {}) {
    const path = `/pop/v5/resource/ecs_not_in_cluster`;
    return this.get(path, query, headers, opts);
  }

  listEcuByRegion(query, headers = {}, opts = {}) {
    const path = `/pop/v5/resource/ecu_list`;
    return this.get(path, query, headers, opts);
  }

  listFlowControls(query, headers = {}, opts = {}) {
    const path = `/pop/v5/app/flowControls`;
    return this.get(path, query, headers, opts);
  }

  listHistoryDeployVersion(query, headers = {}, opts = {}) {
    const path = `/pop/v5/app/deploy_history_version_list`;
    return this.get(path, query, headers, opts);
  }

  listInvokeChain(query, headers = {}, opts = {}) {
    const path = `/pop/v5/eagleeye/eagleEyeTraceIds`;
    return this.get(path, query, headers, opts);
  }

  listPublishedServices(query, headers = {}, opts = {}) {
    const path = `/pop/v5/service/listPublishedServices`;
    return this.get(path, query, headers, opts);
  }

  listRecentChangeOrder(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/changeorder/change_order_list`;
    return this.post(path, query, body, headers, opts);
  }

  listResourceGroup(body, headers = {}, opts = {}) {
    const path = `/pop/v5/resource/reg_group_list`;
    return this.post(path, {}, body, headers, opts);
  }

  listRole(body, headers = {}, opts = {}) {
    const path = `/pop/v5/account/role_list`;
    return this.post(path, {}, body, headers, opts);
  }

  listScaleOutEcu(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/resource/scale_out_ecu_list`;
    return this.post(path, query, body, headers, opts);
  }

  listServiceConsumers(query, headers = {}, opts = {}) {
    const path = `/pop/v5/service/listServiceConsumers`;
    return this.get(path, query, headers, opts);
  }

  listServiceGroups(headers = {}, opts = {}) {
    const path = `/pop/v5/service/serviceGroups`;
    return this.get(path, {}, headers, opts);
  }

  listServiceMethods(query, headers = {}, opts = {}) {
    const path = `/pop/v5/service/listServiceMethods`;
    return this.get(path, query, headers, opts);
  }

  listServiceMonitors(query, headers = {}, opts = {}) {
    const path = `/pop/v5/monitor/serviceMonitors`;
    return this.get(path, query, headers, opts);
  }

  listSlb(headers = {}, opts = {}) {
    const path = `/pop/v5/slb_list`;
    return this.get(path, {}, headers, opts);
  }

  listSubAccount(body, headers = {}, opts = {}) {
    const path = `/pop/v5/account/sub_account_list`;
    return this.post(path, {}, body, headers, opts);
  }

  listUserDefineRegion(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/user_region_defs`;
    return this.post(path, query, body, headers, opts);
  }

  listVpc(headers = {}, opts = {}) {
    const path = `/pop/v5/vpc_list`;
    return this.get(path, {}, headers, opts);
  }

  migrateEcu(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/resource/migrate_ecu`;
    return this.post(path, query, body, headers, opts);
  }

  queryApplicationStatus(query, headers = {}, opts = {}) {
    const path = `/pop/v5/app/app_status`;
    return this.get(path, query, headers, opts);
  }

  queryConfigCenter(query, headers = {}, opts = {}) {
    const path = `/pop/v5/configCenter`;
    return this.get(path, query, headers, opts);
  }

  queryMigrateEcuList(query, headers = {}, opts = {}) {
    const path = `/pop/v5/resource/migrate_ecu_list`;
    return this.get(path, query, headers, opts);
  }

  queryMigrateRegionList(query, headers = {}, opts = {}) {
    const path = `/pop/v5/resource/migrate_region_select`;
    return this.get(path, query, headers, opts);
  }

  queryMonitorInfo(query, headers = {}, opts = {}) {
    const path = `/pop/v5/monitor/queryMonitorInfo`;
    return this.get(path, query, headers, opts);
  }

  queryRegionConfig(headers = {}, opts = {}) {
    const path = `/pop/v5/region_config`;
    return this.get(path, {}, headers, opts);
  }

  queryTraceDetail(query, headers = {}, opts = {}) {
    const path = `/pop/v5/eagleeye/queryTraceDetail`;
    return this.get(path, query, headers, opts);
  }

  resetApplication(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/changeorder/co_reset`;
    return this.post(path, query, body, headers, opts);
  }

  rollbackApplication(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/changeorder/co_rollback`;
    return this.post(path, query, body, headers, opts);
  }

  scaleInApplication(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/changeorder/co_scale_in`;
    return this.post(path, query, body, headers, opts);
  }

  scaleK8sApplication(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/k8s/acs/k8s_apps`;
    return this.put(path, query, body, headers, opts);
  }

  scaleOutApplication(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/changeorder/co_scale_out`;
    return this.post(path, query, body, headers, opts);
  }

  scaleServerlessApplication(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/k8s/pop/pop_serverless_app_rescale`;
    return this.put(path, query, body, headers, opts);
  }

  startApplication(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/changeorder/co_start`;
    return this.post(path, query, body, headers, opts);
  }

  stopApplication(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/changeorder/co_stop`;
    return this.post(path, query, body, headers, opts);
  }

  synchronizeResource(query, headers = {}, opts = {}) {
    const path = `/pop/v5/resource/pop_sync_resource`;
    return this.get(path, query, headers, opts);
  }

  transformClusterMember(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/resource/transform_cluster_member`;
    return this.post(path, query, body, headers, opts);
  }

  unbindK8sSlb(query, headers = {}, opts = {}) {
    const path = `/pop/v5/k8s/acs/k8s_slb_binding`;
    return this.delete(path, query, headers, opts);
  }

  unbindServerlessSlb(query, headers = {}, opts = {}) {
    const path = `/pop/v5/k8s/acs/serverless_slb_binding`;
    return this.delete(path, query, headers, opts);
  }

  unbindSlb(query, body, headers = {}, opts = {}) {
    const path = `/pop/app/unbind_slb_json`;
    return this.post(path, query, body, headers, opts);
  }

  updateAccountInfo(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/account/edit_account_info`;
    return this.post(path, query, body, headers, opts);
  }

  updateApplicationBaseInfo(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/app/update_app_info`;
    return this.post(path, query, body, headers, opts);
  }

  updateContainer(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/changeorder/co_update_container`;
    return this.post(path, query, body, headers, opts);
  }

  updateContainerConfiguration(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/app/container_config`;
    return this.post(path, query, body, headers, opts);
  }

  updateDegradeControl(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/degradeControl`;
    return this.put(path, query, body, headers, opts);
  }

  updateFlowControl(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/flowControl`;
    return this.put(path, query, body, headers, opts);
  }

  updateHealthCheckUrl(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/app/modify_hc_url`;
    return this.post(path, query, body, headers, opts);
  }

  updateJvmConfiguration(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/app/app_jvm_config`;
    return this.post(path, query, body, headers, opts);
  }

  updateK8sApplicationConfig(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/k8s/acs/k8s_app_configuration`;
    return this.put(path, query, body, headers, opts);
  }

  updateK8sSlb(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/k8s/acs/k8s_slb_binding`;
    return this.put(path, query, body, headers, opts);
  }

  updateRole(query, body, headers = {}, opts = {}) {
    const path = `/pop/v5/account/edit_role`;
    return this.post(path, query, body, headers, opts);
  }

}

module.exports = Client;

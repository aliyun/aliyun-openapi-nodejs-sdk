
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-04-15';
    super(config);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {Long} ResourcePoolId - resourcePoolId. required.
   * @param {Long} ClusterId - clusterId. required.
   */
  activeResourcePool(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourcePoolId')) {
      throw new TypeError('parameter "ResourcePoolId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ActiveResourcePool', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {RepeatList} HostIdList - hostIdList. optional.
   * @param {RepeatList} Service - serviceList. required.
   */
  addServiceAndComponent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Service')) {
      throw new TypeError('parameter "Service" is required');
    }

    return this.request('AddServiceAndComponent', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} Comment - comment. optional.
   * @param {RepeatList} Config - specifyConfigList. optional.
   * @param {RepeatList} ServiceInfo - clusterServiceInfoList. required.
   * @param {RepeatList} ServiceComponentInfo - serviceComponentInfoList. required.
   * @param {RepeatList} HostGroup - hostGroupList. optional.
   * @param {RepeatList} HostInfo - hostInfoList. optional.
   */
  addServiceAndComponentV2(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceInfo')) {
      throw new TypeError('parameter "ServiceInfo" is required');
    }

    if (!hasOwnProperty(params, 'ServiceComponentInfo')) {
      throw new TypeError('parameter "ServiceComponentInfo" is required');
    }

    return this.request('AddServiceAndComponentV2', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} RepoId - repoId. required.
   * @param {String} StackName - stackName. required.
   * @param {String} StackEcmVersion - stackEcmVersion. required.
   */
  attachStackWithRepo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    if (!hasOwnProperty(params, 'StackName')) {
      throw new TypeError('parameter "StackName" is required');
    }

    if (!hasOwnProperty(params, 'StackEcmVersion')) {
      throw new TypeError('parameter "StackEcmVersion" is required');
    }

    return this.request('AttachStackWithRepo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} EtlJobId - etlJobId. required.
   * @param {String} ReleaseId - releaseId. optional.
   */
  cancelETLJobRelease(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EtlJobId')) {
      throw new TypeError('parameter "EtlJobId" is required');
    }

    return this.request('CancelETLJobRelease', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {Long} ClusterId - clusterId. required.
   * @param {String} Status - status. required.
   * @param {RepeatList} InstanceIdList - instanceIdList. required.
   */
  checkClusterHostComponentStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    if (!hasOwnProperty(params, 'InstanceIdList')) {
      throw new TypeError('parameter "InstanceIdList" is required');
    }

    return this.request('CheckClusterHostComponentStatus', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} Conf - conf. optional.
   */
  checkDataSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('CheckDataSource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   * @param {String} Name - name. optional.
   */
  cloneDataSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('CloneDataSource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   * @param {String} Name - name. optional.
   */
  cloneETLJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('CloneETLJob', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   */
  cloneFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('CloneFlow', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   */
  cloneFlowJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('CloneFlowJob', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. optional.
   * @param {String} ExternalClusterId - externalClusterId. required.
   * @param {String} LogstoreName - logstoreName. required.
   * @param {Integer} FromTimestamp - fromTimestamp. required.
   * @param {Integer} ToTimestamp - toTimestamp. required.
   * @param {String} PackMeta - packMeta. required.
   * @param {String} PackId - packId. required.
   * @param {Integer} Size - size. required.
   * @param {Integer} TotalOffset - totalOffset. required.
   * @param {Boolean} Reverse - reverse. optional. default: true.
   */
  contextQueryLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ExternalClusterId')) {
      throw new TypeError('parameter "ExternalClusterId" is required');
    }

    if (!hasOwnProperty(params, 'LogstoreName')) {
      throw new TypeError('parameter "LogstoreName" is required');
    }

    if (!hasOwnProperty(params, 'FromTimestamp')) {
      throw new TypeError('parameter "FromTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'ToTimestamp')) {
      throw new TypeError('parameter "ToTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'PackMeta')) {
      throw new TypeError('parameter "PackMeta" is required');
    }

    if (!hasOwnProperty(params, 'PackId')) {
      throw new TypeError('parameter "PackId" is required');
    }

    if (!hasOwnProperty(params, 'Size')) {
      throw new TypeError('parameter "Size" is required');
    }

    if (!hasOwnProperty(params, 'TotalOffset')) {
      throw new TypeError('parameter "TotalOffset" is required');
    }

    return this.request('ContextQueryLog', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} EventType - eventType. required.
   * @param {String} Topic - topic. required.
   * @param {String} UniqueKey - uniqueKey. required.
   * @param {Integer} Priority - priority. required.
   * @param {String} MessageStatus - messageStatus. required.
   * @param {String} Body - body. required.
   * @param {Long} EcmClusterId - ecmClusterId. optional.
   * @param {Long} EcmHostId - ecmHostId. optional.
   * @param {String} EcmServiceName - ecmServiceName. optional.
   * @param {String} EcmComponentName - ecmComponentName. optional.
   * @param {String} HostName - hostName. optional.
   * @param {String} ClusterExternalKey - clusterExternalKey. optional.
   */
  createAlarmMsg(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventType')) {
      throw new TypeError('parameter "EventType" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    if (!hasOwnProperty(params, 'UniqueKey')) {
      throw new TypeError('parameter "UniqueKey" is required');
    }

    if (!hasOwnProperty(params, 'Priority')) {
      throw new TypeError('parameter "Priority" is required');
    }

    if (!hasOwnProperty(params, 'MessageStatus')) {
      throw new TypeError('parameter "MessageStatus" is required');
    }

    if (!hasOwnProperty(params, 'Body')) {
      throw new TypeError('parameter "Body" is required');
    }

    return this.request('CreateAlarmMsg', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} Name - name. required.
   * @param {String} TargetClusterList - targetClusterList. required.
   * @param {String} ServiceList - serviceList. optional.
   * @param {String} SeverityList - severityList. optional.
   * @param {String} EventTypeList - eventTypeList. required.
   * @param {String} EventCodeList - eventCodeList. optional.
   * @param {String} DingGroupList - dingGroupList. optional.
   * @param {String} UserGroupList - userGroupList. optional.
   * @param {Boolean} Enabled - enabled. optional. default: true.
   * @param {String} UserId - userId. required.
   */
  createApmEventNotificationConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'TargetClusterList')) {
      throw new TypeError('parameter "TargetClusterList" is required');
    }

    if (!hasOwnProperty(params, 'EventTypeList')) {
      throw new TypeError('parameter "EventTypeList" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('CreateApmEventNotificationConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} RegionNumber - regionNumber. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} ExternalClusterId - externalClusterId. required.
   * @param {Long} ExternalClusterDigitalId - externalClusterDigitalId. optional.
   * @param {String} MainClusterId - mainClusterId. optional.
   * @param {Boolean} Gateway - gateway. optional. default: false.
   * @param {String} ClusterName - clusterName. required.
   * @param {String} Comment - comment. optional.
   * @param {String} StackName - stackName. required.
   * @param {String} StackVersion - stackVersion. required.
   * @param {String} NetType - netType. required.
   * @param {String} Params - params. optional.
   * @param {RepeatList} Config - configList. optional.
   * @param {RepeatList} Service - serviceList. required.
   * @param {RepeatList} Group - groupList. optional.
   * @param {RepeatList} Host - hostList. required.
   * @param {Boolean} EasEnable - easEnable. optional. default: false.
   */
  createCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ExternalClusterId')) {
      throw new TypeError('parameter "ExternalClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterName')) {
      throw new TypeError('parameter "ClusterName" is required');
    }

    if (!hasOwnProperty(params, 'StackName')) {
      throw new TypeError('parameter "StackName" is required');
    }

    if (!hasOwnProperty(params, 'StackVersion')) {
      throw new TypeError('parameter "StackVersion" is required');
    }

    if (!hasOwnProperty(params, 'NetType')) {
      throw new TypeError('parameter "NetType" is required');
    }

    if (!hasOwnProperty(params, 'Service')) {
      throw new TypeError('parameter "Service" is required');
    }

    if (!hasOwnProperty(params, 'Host')) {
      throw new TypeError('parameter "Host" is required');
    }

    return this.request('CreateCluster', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} RegionNumber - regionNumber. optional.
   * @param {String} ClusterName - clusterName. required.
   * @param {String} StackName - stackName. required.
   * @param {String} StackVersion - stackVersion. required.
   * @param {String} ExternalClusterId - externalClusterId. required.
   * @param {Long} ExternalClusterDigitalId - externalClusterDigitalId. optional.
   * @param {Boolean} EasEnable - easEnable. optional. default: false.
   * @param {String} NetType - netType. required.
   * @param {String} ManagedType - managedType. required.
   * @param {String} ClusterType - clusterType. required.
   * @param {String} Comment - comment. optional.
   * @param {Boolean} Gateway - gateway. optional. default: false.
   * @param {String} MainClusterId - mainClusterId. optional.
   * @param {Boolean} EnableHostLevelCmd - enableHostLevelCmd. optional.
   * @param {RepeatList} Config - specifyConfigList. optional.
   * @param {RepeatList} ServiceInfo - clusterServiceInfoList. required.
   * @param {RepeatList} HostGroup - hostGroupList. required.
   * @param {RepeatList} HostInfo - hostInfoList. required.
   * @param {RepeatList} HostScript - hostScriptList. optional.
   */
  createClusterV2(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterName')) {
      throw new TypeError('parameter "ClusterName" is required');
    }

    if (!hasOwnProperty(params, 'StackName')) {
      throw new TypeError('parameter "StackName" is required');
    }

    if (!hasOwnProperty(params, 'StackVersion')) {
      throw new TypeError('parameter "StackVersion" is required');
    }

    if (!hasOwnProperty(params, 'ExternalClusterId')) {
      throw new TypeError('parameter "ExternalClusterId" is required');
    }

    if (!hasOwnProperty(params, 'NetType')) {
      throw new TypeError('parameter "NetType" is required');
    }

    if (!hasOwnProperty(params, 'ManagedType')) {
      throw new TypeError('parameter "ManagedType" is required');
    }

    if (!hasOwnProperty(params, 'ClusterType')) {
      throw new TypeError('parameter "ClusterType" is required');
    }

    if (!hasOwnProperty(params, 'ServiceInfo')) {
      throw new TypeError('parameter "ServiceInfo" is required');
    }

    if (!hasOwnProperty(params, 'HostGroup')) {
      throw new TypeError('parameter "HostGroup" is required');
    }

    if (!hasOwnProperty(params, 'HostInfo')) {
      throw new TypeError('parameter "HostInfo" is required');
    }

    return this.request('CreateClusterV2', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Name - name. required.
   * @param {String} SourceType - sourceType. required.
   * @param {String} Description - description. optional.
   * @param {String} Conf - conf. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} NavParentId - navParentId. required.
   */
  createDataSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'SourceType')) {
      throw new TypeError('parameter "SourceType" is required');
    }

    if (!hasOwnProperty(params, 'NavParentId')) {
      throw new TypeError('parameter "NavParentId" is required');
    }

    return this.request('CreateDataSource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Name - name. required.
   * @param {String} Type - type. required.
   * @param {String} Description - description. optional.
   * @param {String} NavParentId - navParentId. optional.
   */
  createETLJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('CreateETLJob', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} Topic - topic. required.
   * @param {String} MessageId - messageId. required.
   * @param {String} MessageBody - messageBody. required.
   */
  createEmrBizEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    if (!hasOwnProperty(params, 'MessageId')) {
      throw new TypeError('parameter "MessageId" is required');
    }

    if (!hasOwnProperty(params, 'MessageBody')) {
      throw new TypeError('parameter "MessageBody" is required');
    }

    return this.request('CreateEmrBizEvent', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. required.
   * @param {Long} StartSchedule - startSchedule. optional.
   * @param {Long} EndSchedule - endSchedule. optional.
   * @param {String} CronExpr - cronExpr. optional.
   * @param {Boolean} CreateCluster - createCluster. required.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} HostName - hostName. optional.
   * @param {String} Application - application. optional.
   * @param {String} alertConf - alertConf. optional.
   * @param {String} AlertUserGroupBizId - alertUserGroupBizId. optional.
   * @param {String} AlertDingDingGroupBizId - alertDingDingGroupBizId. optional.
   * @param {String} ParentFlowList - parentFlowList. optional.
   * @param {String} ParentCategory - parentCategory. optional.
   */
  createFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'CreateCluster')) {
      throw new TypeError('parameter "CreateCluster" is required');
    }

    return this.request('CreateFlow', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Name - name. required.
   * @param {String} Type - type. required.
   * @param {String} ParentId - parentId. optional.
   */
  createFlowCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('CreateFlowCategory', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. required.
   * @param {Long} StartSchedule - startSchedule. optional.
   * @param {Long} EndSchedule - endSchedule. optional.
   * @param {String} CronExpr - cronExpr. optional.
   * @param {Boolean} CreateCluster - createCluster. required.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} HostName - hostName. optional.
   * @param {String} Graph - graph. optional.
   * @param {String} alertConf - alertConf. optional.
   * @param {String} AlertUserGroupBizId - alertUserGroupBizId. optional.
   * @param {String} AlertDingDingGroupBizId - alertDingDingGroupBizId. optional.
   * @param {String} ParentFlowList - parentFlowList. optional.
   * @param {String} ParentCategory - parentCategory. optional.
   */
  createFlowForWeb(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'CreateCluster')) {
      throw new TypeError('parameter "CreateCluster" is required');
    }

    return this.request('CreateFlowForWeb', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. required.
   * @param {String} Type - type. required.
   * @param {String} FailAct - failAct. optional.
   * @param {Integer} MaxRetry - maxRetry. optional.
   * @param {Long} RetryInterval - retryInterval. optional.
   * @param {String} Params - params. optional.
   * @param {String} ParamConf - paramConf. optional.
   * @param {String} CustomVariables - customVariables. optional.
   * @param {String} EnvConf - envConf. optional.
   * @param {String} RunConf - runConf. optional.
   * @param {String} MonitorConf - monitorConf. optional.
   * @param {String} Mode - mode. optional.
   * @param {String} ParentCategory - parentCategory. optional.
   * @param {String} alertConf - alertConf. optional.
   * @param {RepeatList} ResourceList - resourceList. optional.
   * @param {Boolean} Adhoc - adhoc. optional.
   * @param {String} ClusterId - clusterId. optional.
   */
  createFlowJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('CreateFlowJob', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. required.
   */
  createFlowProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('CreateFlowProject', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} DefaultUser - defaultUser. optional.
   * @param {String} DefaultQueue - defaultQueue. optional.
   * @param {RepeatList} User - userList. optional.
   * @param {RepeatList} Queue - queueList. optional.
   * @param {RepeatList} Host - hostList. optional.
   */
  createFlowProjectClusterSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('CreateFlowProjectClusterSetting', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {RepeatList} User - userList. required.
   */
  createFlowProjectUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'User')) {
      throw new TypeError('parameter "User" is required');
    }

    return this.request('CreateFlowProjectUser', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} ExternalClusterId - externalClusterId. required.
   * @param {Long} ExternalClusterDigitalId - externalClusterDigitalId. optional.
   * @param {String} ClusterName - clusterName. required.
   * @param {String} Comment - comment. optional.
   * @param {String} StackName - stackName. required.
   * @param {String} StackVersion - stackVersion. required.
   * @param {String} NetType - netType. required.
   * @param {String} Params - params. optional.
   * @param {String} MainClusterId - mainClusterId. required.
   * @param {RepeatList} Service - serviceList. required.
   * @param {RepeatList} Host - hostList. required.
   * @param {Boolean} EasEnable - easEnable. optional. default: false.
   */
  createGatewayCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ExternalClusterId')) {
      throw new TypeError('parameter "ExternalClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterName')) {
      throw new TypeError('parameter "ClusterName" is required');
    }

    if (!hasOwnProperty(params, 'StackName')) {
      throw new TypeError('parameter "StackName" is required');
    }

    if (!hasOwnProperty(params, 'StackVersion')) {
      throw new TypeError('parameter "StackVersion" is required');
    }

    if (!hasOwnProperty(params, 'NetType')) {
      throw new TypeError('parameter "NetType" is required');
    }

    if (!hasOwnProperty(params, 'MainClusterId')) {
      throw new TypeError('parameter "MainClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Service')) {
      throw new TypeError('parameter "Service" is required');
    }

    if (!hasOwnProperty(params, 'Host')) {
      throw new TypeError('parameter "Host" is required');
    }

    return this.request('CreateGatewayCluster', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} DataSourceBizId - dataSourceBizId. required.
   * @param {String} TopicName - topicName. required.
   * @param {Integer} NumPartitions - numPartitions. required.
   * @param {Integer} ReplicationFactor - replicationFactor. required.
   * @param {RepeatList} AdvancedConfig - advancedConfigList. optional.
   */
  createKafkaTopic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DataSourceBizId')) {
      throw new TypeError('parameter "DataSourceBizId" is required');
    }

    if (!hasOwnProperty(params, 'TopicName')) {
      throw new TypeError('parameter "TopicName" is required');
    }

    if (!hasOwnProperty(params, 'NumPartitions')) {
      throw new TypeError('parameter "NumPartitions" is required');
    }

    if (!hasOwnProperty(params, 'ReplicationFactor')) {
      throw new TypeError('parameter "ReplicationFactor" is required');
    }

    return this.request('CreateKafkaTopic', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} DataSourceName - dataSourceName. required.
   * @param {String} Description - description. required.
   * @param {String} DataSourceType - dataSourceType. required.
   * @param {String} ConnectionInfo - connectionInfo. required.
   * @param {String} ClusterBizId - clusterBizId. optional.
   * @param {String} ServiceConfig - serviceConfig. optional.
   * @param {String} MetadbRdsInstanceId - metadbRdsInstanceId. optional.
   * @param {String} MetadbRdsUrl - metadbRdsUrl. optional.
   * @param {String} MetadbName - metadbName. optional.
   * @param {String} MetadbUser - metadbUser. optional.
   * @param {Integer} MetadbInited - metadbInited. optional.
   * @param {Long} MetadbTotalCapacity - metadbTotalCapacity. optional.
   * @param {Long} MetadbUsedCapacity - metadbUsedCapacity. optional.
   * @param {Integer} MetadbMaxQueryCount - metadbMaxQueryCount. optional.
   * @param {Integer} MetadbMaxUpdateCount - metadbMaxUpdateCount. optional.
   * @param {Integer} MetadbMaxConnectionCount - metadbMaxConnectionCount. optional.
   */
  createMetaDataSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'DataSourceName')) {
      throw new TypeError('parameter "DataSourceName" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'DataSourceType')) {
      throw new TypeError('parameter "DataSourceType" is required');
    }

    if (!hasOwnProperty(params, 'ConnectionInfo')) {
      throw new TypeError('parameter "ConnectionInfo" is required');
    }

    return this.request('CreateMetaDataSource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UserId - userId. required.
   * @param {Long} DataSourceId - dataSourceId. required.
   * @param {String} DatabaseName - databaseName. required.
   * @param {String} BizId - bizId. optional.
   * @param {String} ClusterBizId - clusterBizId. optional.
   * @param {String} DatabaseType - databaseType. optional.
   * @param {String} Owner - owner. optional.
   * @param {String} OwnerType - ownerType. optional.
   * @param {String} Location - location. optional.
   * @param {String} EventLogId - eventLogId. optional.
   * @param {String} DatabaseComment - databaseComment. optional.
   * @param {RepeatList} DatabaseParameter - databaseParameters. optional.
   */
  createMetaDatabase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'DataSourceId')) {
      throw new TypeError('parameter "DataSourceId" is required');
    }

    if (!hasOwnProperty(params, 'DatabaseName')) {
      throw new TypeError('parameter "DatabaseName" is required');
    }

    return this.request('CreateMetaDatabase', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UserId - userId. required.
   * @param {Long} DatabaseId - databaseId. required.
   * @param {String} TableName - tableName. required.
   * @param {String} BizId - bizId. optional.
   * @param {String} LocationUri - locationUri. optional.
   * @param {String} FieldDelimiter - fieldDelimiter. optional.
   * @param {String} Comment - comment. optional.
   * @param {String} TableType - tableType. optional.
   * @param {String} Owner - owner. optional.
   * @param {String} OwnerType - ownerType. optional.
   * @param {String} SerializationLib - serializationLib. optional.
   * @param {String} InputFormat - inputFormat. optional.
   * @param {String} OutputFormat - outputFormat. optional.
   * @param {Boolean} Compressed - compressed. optional.
   * @param {Long} LastAccessTime - lastAccessTime. optional.
   * @param {Long} CreateTime - createTime. optional.
   * @param {Boolean} Temporary - temporary. optional.
   * @param {RepeatList} TableParameter - tableParameters. optional.
   * @param {RepeatList} SerdeParameter - serdeParameters. optional.
   * @param {RepeatList} StorageParameter - storageParameters. optional.
   * @param {RepeatList} Column - columnList. optional.
   * @param {RepeatList} Partition - partitionList. optional.
   */
  createMetaTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'DatabaseId')) {
      throw new TypeError('parameter "DatabaseId" is required');
    }

    if (!hasOwnProperty(params, 'TableName')) {
      throw new TypeError('parameter "TableName" is required');
    }

    return this.request('CreateMetaTable', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. required.
   * @param {Long} DataSourceId - dataSourceId. required.
   * @param {String} TaskType - taskType. required.
   * @param {String} TriggerType - triggerType. required.
   * @param {String} TaskDetail - taskDetail. required.
   * @param {String} MetaCliOption - metaCliOption. optional.
   * @param {String} ClusterBizId - clusterBizId. optional.
   */
  createMetaTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'DataSourceId')) {
      throw new TypeError('parameter "DataSourceId" is required');
    }

    if (!hasOwnProperty(params, 'TaskType')) {
      throw new TypeError('parameter "TaskType" is required');
    }

    if (!hasOwnProperty(params, 'TriggerType')) {
      throw new TypeError('parameter "TriggerType" is required');
    }

    if (!hasOwnProperty(params, 'TaskDetail')) {
      throw new TypeError('parameter "TaskDetail" is required');
    }

    return this.request('CreateMetaTask', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} CategoryType - categoryType. required.
   * @param {String} Type - type. optional.
   * @param {String} ObjectId - objectId. optional.
   * @param {String} Name - name. required.
   * @param {String} ParentId - parentId. optional.
   */
  createNavNode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'CategoryType')) {
      throw new TypeError('parameter "CategoryType" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateNavNode', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {RepeatList} EcmPublishStrategy - ecmPublishStrategyList. required.
   */
  createPublishStrategy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EcmPublishStrategy')) {
      throw new TypeError('parameter "EcmPublishStrategy" is required');
    }

    return this.request('CreatePublishStrategy', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionNumber - regionNumber. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} Name - name. required.
   * @param {Long} ClusterId - clusterId. required.
   * @param {String} PoolType - poolType. required.
   * @param {Boolean} Active - active. required.
   * @param {String} Note - note. optional.
   * @param {String} YarnSiteConfig - yarnSiteConfig. optional.
   * @param {RepeatList} Config - configList. optional.
   */
  createResourcePool(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'PoolType')) {
      throw new TypeError('parameter "PoolType" is required');
    }

    if (!hasOwnProperty(params, 'Active')) {
      throw new TypeError('parameter "Active" is required');
    }

    return this.request('CreateResourcePool', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionNumber - regionNumber. optional.
   * @param {String} Name - name. required.
   * @param {String} QualifiedName - qualifiedName. optional.
   * @param {Long} ClusterId - clusterId. required.
   * @param {Long} ParentQueueId - parentQueueId. optional.
   * @param {Boolean} Leaf - leaf. optional.
   * @param {Long} ResourcePoolId - resourcePoolId. required.
   * @param {RepeatList} Config - configList. optional.
   */
  createResourceQueue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ResourcePoolId')) {
      throw new TypeError('parameter "ResourcePoolId" is required');
    }

    return this.request('CreateResourceQueue', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {Long} ClusterId - clusterId. required.
   * @param {RepeatList} UserInfo - userInfoList. required.
   * @param {String} Password - password. required.
   * @param {String} OwnerId - ownerId. required.
   */
  createUserPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'UserInfo')) {
      throw new TypeError('parameter "UserInfo" is required');
    }

    if (!hasOwnProperty(params, 'Password')) {
      throw new TypeError('parameter "Password" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('CreateUserPassword', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {Long} ClusterId - clusterId. optional.
   * @param {Long} ExternalClusterDigitalId - externalClusterDigitalId. optional.
   * @param {RepeatList} UserInfo - userInfoList. required.
   * @param {String} OwnerId - ownerId. required.
   */
  createUsers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserInfo')) {
      throw new TypeError('parameter "UserInfo" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('CreateUsers', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   */
  deleteAccountResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('DeleteAccountResource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {Long} Id - id. required.
   * @param {String} UserId - userId. required.
   */
  deleteApmEventNotificationConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('DeleteApmEventNotificationConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {Long} Id - id. required.
   */
  deleteAutoUpgradeInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteAutoUpgradeInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  deleteCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DeleteCluster', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   */
  deleteDataSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteDataSource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   */
  deleteETLJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteETLJob', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   */
  deleteFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('DeleteFlow', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   */
  deleteFlowCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('DeleteFlowCategory', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   */
  deleteFlowJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('DeleteFlowJob', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   */
  deleteFlowProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('DeleteFlowProject', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   */
  deleteFlowProjectAll(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('DeleteFlowProjectAll', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   */
  deleteFlowProjectById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('DeleteFlowProjectById', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   */
  deleteFlowProjectByUserId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('DeleteFlowProjectByUserId', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  deleteFlowProjectClusterSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DeleteFlowProjectClusterSetting', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} UserName - userName. required.
   */
  deleteFlowProjectUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    return this.request('DeleteFlowProjectUser', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {Long} ClusterId - clusterId. required.
   * @param {String} EcsInstanceId - ecsInstanceId. required.
   */
  deleteHost(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'EcsInstanceId')) {
      throw new TypeError('parameter "EcsInstanceId" is required');
    }

    return this.request('DeleteHost', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {Long} ClusterId - clusterId. required.
   * @param {RepeatList} InstanceIdList - instanceIdList. required.
   */
  deleteHostBinding(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceIdList')) {
      throw new TypeError('parameter "InstanceIdList" is required');
    }

    return this.request('DeleteHostBinding', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} TopicBizId - topicBizId. required.
   */
  deleteKafkaTopic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicBizId')) {
      throw new TypeError('parameter "TopicBizId" is required');
    }

    return this.request('DeleteKafkaTopic', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   */
  deleteNavNode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteNavNode', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {Long} Id - id. required.
   * @param {Long} ClusterId - clusterId. required.
   */
  deletePublishStrategyLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DeletePublishStrategyLog', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} RepoId - repoId. required.
   */
  deleteRepo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    return this.request('DeleteRepo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {Long} ResourcePoolId - resourcePoolId. required.
   * @param {Long} ClusterId - clusterId. required.
   */
  deleteResourcePool(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourcePoolId')) {
      throw new TypeError('parameter "ResourcePoolId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DeleteResourcePool', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {Long} ResourceQueueId - resourceQueueId. required.
   * @param {Long} ClusterId - clusterId. required.
   */
  deleteResourceQueue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceQueueId')) {
      throw new TypeError('parameter "ResourceQueueId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DeleteResourceQueue', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} ServiceName - serviceName. required.
   * @param {String} ServiceVersion - serviceVersion. required.
   */
  deleteService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    if (!hasOwnProperty(params, 'ServiceVersion')) {
      throw new TypeError('parameter "ServiceVersion" is required');
    }

    return this.request('DeleteService', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} Name - name. required.
   * @param {String} Version - version. required.
   */
  deleteStack(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('DeleteStack', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {Long} ClusterId - clusterId. required.
   * @param {String} UserId - userId. required.
   * @param {String} Type - type. required.
   * @param {String} OwnerId - ownerId. required.
   */
  deleteUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('DeleteUser', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  describeCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeCluster', params, options);
  }

  /**
   * @param {Long} ClusterId - clusterId. required.
   */
  describeClusterHealth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeClusterHealth', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  describeClusterResourcePoolSchedulerType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeClusterResourcePoolSchedulerType', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. required.
   */
  describeClusterService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    return this.request('DescribeClusterService', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   */
  describeDataSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeDataSource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   */
  describeDataSourceCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeDataSourceCommand', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DataSourceId - dataSourceId. required.
   * @param {String} DbName - dbName. optional.
   */
  describeDataSourceSchemaDatabase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DataSourceId')) {
      throw new TypeError('parameter "DataSourceId" is required');
    }

    return this.request('DescribeDataSourceSchemaDatabase', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DataSourceId - dataSourceId. required.
   * @param {String} DbName - dbName. optional.
   * @param {String} TableName - tableName. required.
   */
  describeDataSourceSchemaTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DataSourceId')) {
      throw new TypeError('parameter "DataSourceId" is required');
    }

    if (!hasOwnProperty(params, 'TableName')) {
      throw new TypeError('parameter "TableName" is required');
    }

    return this.request('DescribeDataSourceSchemaTable', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   */
  describeETLJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeETLJob', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   */
  describeETLJobInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeETLJobInstance', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResolveId - resolveId. required.
   */
  describeETLJobSqlSchema(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResolveId')) {
      throw new TypeError('parameter "ResolveId" is required');
    }

    return this.request('DescribeETLJobSqlSchema', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} EtlJobId - etlJobId. required.
   * @param {String} StageName - stageName. required.
   */
  describeETLJobStageOutputSchema(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EtlJobId')) {
      throw new TypeError('parameter "EtlJobId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    return this.request('DescribeETLJobStageOutputSchema', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   */
  describeFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('DescribeFlow', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} TargetId - targetId. required.
   */
  describeFlowAlertConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TargetId')) {
      throw new TypeError('parameter "TargetId" is required');
    }

    return this.request('DescribeFlowAlertConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   */
  describeFlowCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('DescribeFlowCategory', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} Type - type. required.
   */
  describeFlowCategoryTree(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('DescribeFlowCategoryTree', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   */
  describeFlowInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('DescribeFlowInstance', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   */
  describeFlowJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('DescribeFlowJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. optional.
   */
  describeFlowJobStatistic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('DescribeFlowJobStatistic', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {Integer} Offset - offset. optional. default: 0.
   * @param {Integer} Length - length. optional. default: 100.
   * @param {String} NodeInstanceId - nodeInstanceId. required.
   * @param {String} ContainerId - containerId. required.
   * @param {String} AppId - appId. required.
   * @param {String} LogName - logName. required.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   */
  describeFlowNodeContainerLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NodeInstanceId')) {
      throw new TypeError('parameter "NodeInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ContainerId')) {
      throw new TypeError('parameter "ContainerId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'LogName')) {
      throw new TypeError('parameter "LogName" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('DescribeFlowNodeContainerLog', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   */
  describeFlowNodeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('DescribeFlowNodeInstance', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {Integer} Start - start. optional. default: 0.
   * @param {Integer} Lines - lines. optional. default: 100.
   * @param {Boolean} Reverse - reverse. optional. default: false.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {String} NodeInstanceId - nodeInstanceId. required.
   */
  describeFlowNodeLauncherLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'NodeInstanceId')) {
      throw new TypeError('parameter "NodeInstanceId" is required');
    }

    return this.request('DescribeFlowNodeLauncherLog', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   */
  describeFlowProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('DescribeFlowProject', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  describeFlowProjectClusterSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeFlowProjectClusterSetting', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} Type - type. optional.
   * @param {String} Metrics - metrics. required.
   * @param {String} PeriodType - periodType. optional.
   * @param {String} ProjectId - projectId. optional.
   * @param {Long} From - from. optional.
   * @param {Long} To - to. optional.
   */
  describeFlowSLA(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'Metrics')) {
      throw new TypeError('parameter "Metrics" is required');
    }

    return this.request('DescribeFlowSLA', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} EntityId - entityId. required.
   */
  describeFlowVariableCollection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EntityId')) {
      throw new TypeError('parameter "EntityId" is required');
    }

    return this.request('DescribeFlowVariableCollection', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} ConsumerGroupBizId - consumerGroupBizId. required.
   * @param {String} TopicBizId - topicBizId. optional.
   */
  describeKafkaConsumerGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConsumerGroupBizId')) {
      throw new TypeError('parameter "ConsumerGroupBizId" is required');
    }

    return this.request('DescribeKafkaConsumerGroup', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} TopicBizId - topicBizId. required.
   */
  describeKafkaTopic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicBizId')) {
      throw new TypeError('parameter "TopicBizId" is required');
    }

    return this.request('DescribeKafkaTopic', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} BizId - bizId. required.
   */
  describeMetaDataSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('DescribeMetaDataSource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} DatabaseId - databaseId. optional.
   * @param {String} BizId - bizId. optional.
   */
  describeMetaDatabase(params = {}, options = {}) {
    return this.request('DescribeMetaDatabase', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {Long} DataSourceId - dataSourceId. required.
   */
  describeMetaHive(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DataSourceId')) {
      throw new TypeError('parameter "DataSourceId" is required');
    }

    return this.request('DescribeMetaHive', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} TableId - tableId. optional.
   * @param {String} BizId - bizId. optional.
   */
  describeMetaTable(params = {}, options = {}) {
    return this.request('DescribeMetaTable', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ColumnId - columnId. required.
   */
  describeMetaTableColumn(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ColumnId')) {
      throw new TypeError('parameter "ColumnId" is required');
    }

    return this.request('DescribeMetaTableColumn', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} TableId - tableId. required.
   * @param {Long} TablePartitionId - tablePartitionId. required.
   */
  describeMetaTablePartition(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TableId')) {
      throw new TypeError('parameter "TableId" is required');
    }

    if (!hasOwnProperty(params, 'TablePartitionId')) {
      throw new TypeError('parameter "TablePartitionId" is required');
    }

    return this.request('DescribeMetaTablePartition', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} BizId - bizId. required.
   */
  describeMetaTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('DescribeMetaTask', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} ConfigVersion - configVersion. optional.
   * @param {Long} GroupId - groupId. optional.
   * @param {String} HostInstanceId - hostInstanceId. optional.
   * @param {String} TagValue - tagValues. optional.
   */
  describeServiceConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeServiceConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ServiceName - serviceName. required.
   * @param {String} ServiceVersion - serviceVersion. optional.
   * @param {String} ConfigName - configName. optional.
   */
  describeServiceConfigDefinition(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    return this.request('DescribeServiceConfigDefinition', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. required.
   * @param {String} ConfigVersion - configVersion. required.
   */
  describeServiceConfigHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    if (!hasOwnProperty(params, 'ConfigVersion')) {
      throw new TypeError('parameter "ConfigVersion" is required');
    }

    return this.request('DescribeServiceConfigHistory', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} ConfigTag - configTag. optional.
   */
  describeServiceConfigTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeServiceConfigTag', params, options);
  }

  /**
   * @param {Long} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. required.
   */
  describeServiceHealth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    return this.request('DescribeServiceHealth', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} OperationId - operationId. required.
   * @param {String} HostId - hostId. required.
   * @param {String} TaskId - taskId. required.
   */
  describeTaskLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'OperationId')) {
      throw new TypeError('parameter "OperationId" is required');
    }

    if (!hasOwnProperty(params, 'HostId')) {
      throw new TypeError('parameter "HostId" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('DescribeTaskLog', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} Id - id. required.
   */
  describeWorkflowForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeWorkflowForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} Id - id. required.
   */
  describeWorkflowTaskForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeWorkflowTaskForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. optional.
   * @param {String} BizId - bizId. optional.
   */
  dropMetaDatabase(params = {}, options = {}) {
    return this.request('DropMetaDatabase', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. optional.
   * @param {String} BizId - bizId. optional.
   */
  dropMetaTable(params = {}, options = {}) {
    return this.request('DropMetaTable', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} BizId - bizId. required.
   * @param {String} Status - status. required.
   * @param {String} ResultDetail - resultDetail. required.
   * @param {String} UserId - userId. optional.
   */
  finishMetaTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    if (!hasOwnProperty(params, 'ResultDetail')) {
      throw new TypeError('parameter "ResultDetail" is required');
    }

    return this.request('FinishMetaTask', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {Long} Id - id. required.
   */
  getApmEventNotificationConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetApmEventNotificationConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. optional.
   * @param {String} ExternalClusterId - externalClusterId. required.
   * @param {String} FromDatetime - fromDatetime. required.
   * @param {String} ToDatetime - toDatetime. required.
   */
  getHdfsCapacityStatisticInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ExternalClusterId')) {
      throw new TypeError('parameter "ExternalClusterId" is required');
    }

    if (!hasOwnProperty(params, 'FromDatetime')) {
      throw new TypeError('parameter "FromDatetime" is required');
    }

    if (!hasOwnProperty(params, 'ToDatetime')) {
      throw new TypeError('parameter "ToDatetime" is required');
    }

    return this.request('GetHdfsCapacityStatisticInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} BizId - bizId. required.
   * @param {String} ApplicationId - applicationId. required.
   * @param {String} Type - type. optional.
   */
  getHeuristicResultDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'ApplicationId')) {
      throw new TypeError('parameter "ApplicationId" is required');
    }

    return this.request('GetHeuristicResultDetail', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. optional.
   * @param {String} ExternalClusterId - externalClusterId. required.
   * @param {String} FromDatetime - fromDatetime. required.
   * @param {String} ToDatetime - toDatetime. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  getJobInputStatisticInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ExternalClusterId')) {
      throw new TypeError('parameter "ExternalClusterId" is required');
    }

    if (!hasOwnProperty(params, 'FromDatetime')) {
      throw new TypeError('parameter "FromDatetime" is required');
    }

    if (!hasOwnProperty(params, 'ToDatetime')) {
      throw new TypeError('parameter "ToDatetime" is required');
    }

    return this.request('GetJobInputStatisticInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. optional.
   * @param {String} ExternalClusterId - externalClusterId. required.
   * @param {String} FromDatetime - fromDatetime. required.
   * @param {String} ToDatetime - toDatetime. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  getJobOutputStatisticInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ExternalClusterId')) {
      throw new TypeError('parameter "ExternalClusterId" is required');
    }

    if (!hasOwnProperty(params, 'FromDatetime')) {
      throw new TypeError('parameter "FromDatetime" is required');
    }

    if (!hasOwnProperty(params, 'ToDatetime')) {
      throw new TypeError('parameter "ToDatetime" is required');
    }

    return this.request('GetJobOutputStatisticInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. optional.
   * @param {String} ExternalClusterId - externalClusterId. required.
   * @param {String} FromDatetime - fromDatetime. required.
   * @param {String} ToDatetime - toDatetime. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  getJobRunningTimeStatisticInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ExternalClusterId')) {
      throw new TypeError('parameter "ExternalClusterId" is required');
    }

    if (!hasOwnProperty(params, 'FromDatetime')) {
      throw new TypeError('parameter "FromDatetime" is required');
    }

    if (!hasOwnProperty(params, 'ToDatetime')) {
      throw new TypeError('parameter "ToDatetime" is required');
    }

    return this.request('GetJobRunningTimeStatisticInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionNumber - regionNumber. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} ExternalClusterId - externalClusterId. required.
   * @param {String} HostName - hostName. required.
   * @param {String} LogFileName - logFileName. required.
   * @param {String} LogstoreName - logstoreName. required.
   */
  getLogDownloadUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ExternalClusterId')) {
      throw new TypeError('parameter "ExternalClusterId" is required');
    }

    if (!hasOwnProperty(params, 'HostName')) {
      throw new TypeError('parameter "HostName" is required');
    }

    if (!hasOwnProperty(params, 'LogFileName')) {
      throw new TypeError('parameter "LogFileName" is required');
    }

    if (!hasOwnProperty(params, 'LogstoreName')) {
      throw new TypeError('parameter "LogstoreName" is required');
    }

    return this.request('GetLogDownloadUrl', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionNumber - regionNumber. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} ExternalClusterId - externalClusterId. required.
   * @param {String} HostInnerIp - hostInnerIp. optional.
   * @param {String} HostName - hostName. optional.
   * @param {String} LogstoreName - logstoreName. required.
   * @param {Integer} FromTimestamp - fromTimestamp. required.
   * @param {Integer} ToTimestamp - toTimestamp. required.
   * @param {String} SlsQueryString - slsQueryString. required.
   */
  getLogHistogram(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ExternalClusterId')) {
      throw new TypeError('parameter "ExternalClusterId" is required');
    }

    if (!hasOwnProperty(params, 'LogstoreName')) {
      throw new TypeError('parameter "LogstoreName" is required');
    }

    if (!hasOwnProperty(params, 'FromTimestamp')) {
      throw new TypeError('parameter "FromTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'ToTimestamp')) {
      throw new TypeError('parameter "ToTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'SlsQueryString')) {
      throw new TypeError('parameter "SlsQueryString" is required');
    }

    return this.request('GetLogHistogram', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} OpsCommandName - opsCommandName. required.
   */
  getOpsCommandDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'OpsCommandName')) {
      throw new TypeError('parameter "OpsCommandName" is required');
    }

    return this.request('GetOpsCommandDetail', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionNumber - regionNumber. optional.
   * @param {String} UserId - userId. required.
   * @param {Long} TaskId - taskId. required.
   * @param {String} ExternalClusterId - externalClusterId. required.
   * @param {Long} StartCursor - startCursor. required.
   * @param {Long} EndCursor - endCursor. required.
   */
  getOpsCommandResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'ExternalClusterId')) {
      throw new TypeError('parameter "ExternalClusterId" is required');
    }

    if (!hasOwnProperty(params, 'StartCursor')) {
      throw new TypeError('parameter "StartCursor" is required');
    }

    if (!hasOwnProperty(params, 'EndCursor')) {
      throw new TypeError('parameter "EndCursor" is required');
    }

    return this.request('GetOpsCommandResult', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} UserId - userId. required.
   * @param {Long} TaskId - taskId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionNumber - regionNumber. optional.
   * @param {String} ExternalClusterId - externalClusterId. required.
   */
  getOpsCommandResultOnce(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ExternalClusterId')) {
      throw new TypeError('parameter "ExternalClusterId" is required');
    }

    return this.request('GetOpsCommandResultOnce', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. optional.
   * @param {String} ExternalClusterId - externalClusterId. required.
   * @param {String} FromDatetime - fromDatetime. required.
   * @param {String} ToDatetime - toDatetime. required.
   */
  getQueueInputStatisticInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ExternalClusterId')) {
      throw new TypeError('parameter "ExternalClusterId" is required');
    }

    if (!hasOwnProperty(params, 'FromDatetime')) {
      throw new TypeError('parameter "FromDatetime" is required');
    }

    if (!hasOwnProperty(params, 'ToDatetime')) {
      throw new TypeError('parameter "ToDatetime" is required');
    }

    return this.request('GetQueueInputStatisticInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. optional.
   * @param {String} ExternalClusterId - externalClusterId. required.
   * @param {String} FromDatetime - fromDatetime. required.
   * @param {String} ToDatetime - toDatetime. required.
   */
  getQueueOutputStatisticInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ExternalClusterId')) {
      throw new TypeError('parameter "ExternalClusterId" is required');
    }

    if (!hasOwnProperty(params, 'FromDatetime')) {
      throw new TypeError('parameter "FromDatetime" is required');
    }

    if (!hasOwnProperty(params, 'ToDatetime')) {
      throw new TypeError('parameter "ToDatetime" is required');
    }

    return this.request('GetQueueOutputStatisticInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. optional.
   * @param {String} ExternalClusterId - externalClusterId. required.
   * @param {String} FromDatetime - fromDatetime. required.
   * @param {String} ToDatetime - toDatetime. required.
   * @param {String} ApplicationType - applicationType. optional.
   * @param {String} FinalStatus - finalStatus. optional.
   */
  getQueueSubmissionStatisticInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ExternalClusterId')) {
      throw new TypeError('parameter "ExternalClusterId" is required');
    }

    if (!hasOwnProperty(params, 'FromDatetime')) {
      throw new TypeError('parameter "FromDatetime" is required');
    }

    if (!hasOwnProperty(params, 'ToDatetime')) {
      throw new TypeError('parameter "ToDatetime" is required');
    }

    return this.request('GetQueueSubmissionStatisticInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   */
  getSupportedOpsCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    return this.request('GetSupportedOpsCommand', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. optional.
   * @param {String} ExternalClusterId - externalClusterId. required.
   * @param {String} FromDatetime - fromDatetime. required.
   * @param {String} ToDatetime - toDatetime. required.
   */
  getUserInputStatisticInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ExternalClusterId')) {
      throw new TypeError('parameter "ExternalClusterId" is required');
    }

    if (!hasOwnProperty(params, 'FromDatetime')) {
      throw new TypeError('parameter "FromDatetime" is required');
    }

    if (!hasOwnProperty(params, 'ToDatetime')) {
      throw new TypeError('parameter "ToDatetime" is required');
    }

    return this.request('GetUserInputStatisticInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. optional.
   * @param {String} ExternalClusterId - externalClusterId. required.
   * @param {String} FromDatetime - fromDatetime. required.
   * @param {String} ToDatetime - toDatetime. required.
   */
  getUserOutputStatisticInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ExternalClusterId')) {
      throw new TypeError('parameter "ExternalClusterId" is required');
    }

    if (!hasOwnProperty(params, 'FromDatetime')) {
      throw new TypeError('parameter "FromDatetime" is required');
    }

    if (!hasOwnProperty(params, 'ToDatetime')) {
      throw new TypeError('parameter "ToDatetime" is required');
    }

    return this.request('GetUserOutputStatisticInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. optional.
   * @param {String} ExternalClusterId - externalClusterId. required.
   * @param {String} FromDatetime - fromDatetime. required.
   * @param {String} ToDatetime - toDatetime. required.
   * @param {String} ApplicationType - applicationType. optional.
   * @param {String} FinalStatus - finalStatus. optional.
   */
  getUserSubmissionStatisticInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ExternalClusterId')) {
      throw new TypeError('parameter "ExternalClusterId" is required');
    }

    if (!hasOwnProperty(params, 'FromDatetime')) {
      throw new TypeError('parameter "FromDatetime" is required');
    }

    if (!hasOwnProperty(params, 'ToDatetime')) {
      throw new TypeError('parameter "ToDatetime" is required');
    }

    return this.request('GetUserSubmissionStatisticInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   */
  initHubForOptimus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('InitHubForOptimus', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   */
  killETLJobInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('KillETLJobInstance', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} FlowInstanceId - flowInstanceId. required.
   */
  killFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'FlowInstanceId')) {
      throw new TypeError('parameter "FlowInstanceId" is required');
    }

    return this.request('KillFlow', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} JobInstanceId - jobInstanceId. required.
   */
  killFlowJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'JobInstanceId')) {
      throw new TypeError('parameter "JobInstanceId" is required');
    }

    return this.request('KillFlowJob', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} clusterId - clusterId. optional.
   * @param {String} MsgStatus - msgStatus. optional.
   * @param {String} MsgType - msgType. optional.
   * @param {String} Topic - topic. optional.
   * @param {Long} CreateAfter - createAfter. optional.
   * @param {Long} CreateBefore - createBefore. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 50.
   */
  listAlarmMsg(params = {}, options = {}) {
    return this.request('ListAlarmMsg', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   */
  listAllSupportedService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('ListAllSupportedService', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ExternalClusterId - externalClusterId. optional.
   * @param {String} AppId - appId. optional.
   * @param {String} AppName - appName. optional.
   * @param {String} UserName - userName. optional.
   * @param {String} QueueName - queueName. optional.
   * @param {String} JobType - jobType. optional.
   * @param {String} JobStatus - jobStatus. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listApmApplication(params = {}, options = {}) {
    return this.request('ListApmApplication', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {Boolean} Enabled - enabled. optional.
   * @param {String} UserId - userId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listApmEventNotificationConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('ListApmEventNotificationConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {String} UpgradeType - upgradeType. optional.
   * @param {String} OriginalVersion - originalVersion. optional.
   * @param {String} TargetVersion - targetVersion. optional.
   * @param {String} Status - status. optional.
   */
  listAutoUpgradeInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListAutoUpgradeInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} ClusterName - clusterName. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} Status - clusterStatus. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListCluster', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {Long} ClusterId - clusterId. required.
   * @param {String} HostName - hostName. optional.
   * @param {String} AgentVersion - agentVersion. optional.
   * @param {String} ServerIp - serverIp. optional.
   * @param {String} IpAddress - ipAddress. optional.
   * @param {String} SerialNumber - serialNumber. optional.
   * @param {String} MacAddress - macAddress. optional.
   * @param {String} VpcId - vpcId. optional.
   */
  listClusterAgentRegistration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterAgentRegistration', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. optional.
   * @param {String} ExternalClusterId - externalClusterId. required.
   * @param {String} FromDatetime - fromDatetime. required.
   * @param {String} ToDatetime - toDatetime. required.
   */
  listClusterApplication(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ExternalClusterId')) {
      throw new TypeError('parameter "ExternalClusterId" is required');
    }

    if (!hasOwnProperty(params, 'FromDatetime')) {
      throw new TypeError('parameter "FromDatetime" is required');
    }

    if (!hasOwnProperty(params, 'ToDatetime')) {
      throw new TypeError('parameter "ToDatetime" is required');
    }

    return this.request('ListClusterApplication', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {Long} ClusterId - clusterId. optional.
   * @param {RepeatList} ClusterIdList - clusterIdList. optional.
   * @param {String} ExternalClusterId - externalClusterId. optional.
   * @param {RepeatList} ExternalClusterIdList - externalClusterIdList. optional.
   * @param {String} ExternalClusterDigitalId - externalClusterDigitalId. optional.
   * @param {RepeatList} ExternalClusterDigitalIdList - externalClusterDigitalIdList. optional.
   * @param {String} Name - name. optional.
   * @param {String} FuzzyName - fuzzyName. optional.
   * @param {String} Status - clusterStatus. optional.
   * @param {RepeatList} ClusterStatusList - clusterStatusList. optional.
   * @param {String} UserId - userId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listClusterForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListClusterForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. optional.
   * @param {String} ExternalClusterId - externalClusterId. required.
   * @param {String} FromDatetime - fromDatetime. required.
   * @param {String} ToDatetime - toDatetime. required.
   */
  listClusterHdfsFsnamesystemInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ExternalClusterId')) {
      throw new TypeError('parameter "ExternalClusterId" is required');
    }

    if (!hasOwnProperty(params, 'FromDatetime')) {
      throw new TypeError('parameter "FromDatetime" is required');
    }

    if (!hasOwnProperty(params, 'ToDatetime')) {
      throw new TypeError('parameter "ToDatetime" is required');
    }

    return this.request('ListClusterHdfsFsnamesystemInfo', params, options);
  }

  /**
   * @param {RepeatList} ClusterIdList - clusterIdList. required.
   */
  listClusterHealth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterIdList')) {
      throw new TypeError('parameter "ClusterIdList" is required');
    }

    return this.request('ListClusterHealth', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostInstanceId - hostInstanceId. optional.
   * @param {String} HostName - hostName. optional.
   * @param {String} PrivateIp - privateIp. optional.
   * @param {String} PublicIp - publicIp. optional.
   * @param {String} GroupType - groupType. optional.
   * @param {Long} GroupId - groupId. optional.
   * @param {String} ComponentName - componentName. optional.
   * @param {RepeatList} StatusList - statusList. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listClusterHost(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterHost', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostInstanceId - hostInstanceId. optional.
   * @param {String} HostName - hostName. optional.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} ComponentName - componentName. optional.
   * @param {String} ComponentStatus - componentStatus. optional.
   * @param {String} HostRole - hostRole. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listClusterHostComponent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterHostComponent', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} OperationId - operationId. optional.
   * @param {String} WorkFlowInstanceId - workFlowInstanceId. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listClusterOperation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterOperation', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listClusterService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterService', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. optional.
   */
  listClusterServiceComponentHealthInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterServiceComponentHealthInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} ServiceName - serviceName. required.
   * @param {String} ClusterId - clusterId. required.
   */
  listClusterServicesDependentOnService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterServicesDependentOnService', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ClusterId - clusterId. required.
   */
  listClusterWorkflowInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterWorkflowInstances', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} ServiceEcmVersion - serviceEcmVersion. optional.
   * @param {String} HostId - hostId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listComponent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('ListComponent', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} serviceName - serviceName. required.
   * @param {String} serviceEcmVersion - serviceEcmVersion. required.
   * @param {String} ComponentName - componentName. required.
   */
  listComponentDependencyInfos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'serviceName')) {
      throw new TypeError('parameter "serviceName" is required');
    }

    if (!hasOwnProperty(params, 'serviceEcmVersion')) {
      throw new TypeError('parameter "serviceEcmVersion" is required');
    }

    if (!hasOwnProperty(params, 'ComponentName')) {
      throw new TypeError('parameter "ComponentName" is required');
    }

    return this.request('ListComponentDependencyInfos', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {String} Id - id. optional.
   * @param {String} ProjectId - projectId. optional.
   * @param {String} Name - name. optional.
   * @param {String} SourceType - sourceType. optional.
   * @param {String} CreateFrom - createFrom. optional.
   */
  listDataSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListDataSource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DataSourceId - dataSourceId. required.
   * @param {String} DbName - dbName. optional.
   */
  listDataSourceSchemaDatabase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DataSourceId')) {
      throw new TypeError('parameter "DataSourceId" is required');
    }

    return this.request('ListDataSourceSchemaDatabase', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DataSourceId - dataSourceId. required.
   * @param {String} DbName - dbName. optional.
   * @param {String} TableName - tableName. optional.
   */
  listDataSourceSchemaTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DataSourceId')) {
      throw new TypeError('parameter "DataSourceId" is required');
    }

    return this.request('ListDataSourceSchemaTable', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {String} EtlJobId - etlJobId. required.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} Status - status. optional.
   */
  listETLJobInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EtlJobId')) {
      throw new TypeError('parameter "EtlJobId" is required');
    }

    return this.request('ListETLJobInstance', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {String} EtlJobId - etlJobId. required.
   * @param {String} ReleaseId - releaseId. optional.
   * @param {Integer} ReleaseVersion - releaseVersion. optional.
   * @param {String} Status - status. optional.
   */
  listETLJobRelease(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EtlJobId')) {
      throw new TypeError('parameter "EtlJobId" is required');
    }

    return this.request('ListETLJobRelease', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} EntityType - entityType. optional.
   */
  listETLJobTriggerEntity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListETLJobTriggerEntity', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. optional.
   * @param {String} JobId - jobId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} Name - name. optional.
   * @param {String} Id - id. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} Status - status. optional.
   * @param {Boolean} Periodic - periodic. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  listFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('ListFlow', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  listFlowAgent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('ListFlowAgent', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} ParentId - parentId. optional.
   * @param {Boolean} Root - root. optional.
   * @param {String} Type - type. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  listFlowCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('ListFlowCategory', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   */
  listFlowClusterAll(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('ListFlowClusterAll', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  listFlowClusterAllHosts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListFlowClusterAllHosts', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  listFlowClusterHost(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListFlowClusterHost', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} Id - id. optional.
   * @param {String} FlowId - flowId. optional.
   * @param {String} FlowName - flowName. optional.
   * @param {String} Owner - owner. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} TimeRange - timeRange. optional.
   * @param {RepeatList} StatusList - statusList. optional.
   * @param {String} OrderBy - orderBy. optional.
   * @param {String} OrderType - orderType. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  listFlowInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('ListFlowInstance', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. optional.
   * @param {String} Name - name. optional.
   * @param {String} Type - type. optional.
   * @param {Boolean} Adhoc - adhoc. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  listFlowJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('ListFlowJob', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  listFlowJobHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ListFlowJobHistory', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {String} NodeInstanceId - nodeInstanceId. required.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   */
  listFlowNodeContainerStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NodeInstanceId')) {
      throw new TypeError('parameter "NodeInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('ListFlowNodeContainerStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {RepeatList} StatusList - statusList. optional.
   * @param {String} OrderBy - orderBy. optional.
   * @param {String} OrderType - orderType. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  listFlowNodeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('ListFlowNodeInstance', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} NodeInstanceId - nodeInstanceId. required.
   * @param {Integer} SqlIndex - sqlIndex. optional. default: 0.
   * @param {Integer} Offset - offset. optional. default: 0.
   * @param {Integer} Length - length. optional. default: 2000.
   */
  listFlowNodeSqlResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'NodeInstanceId')) {
      throw new TypeError('parameter "NodeInstanceId" is required');
    }

    return this.request('ListFlowNodeSqlResult', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. optional.
   * @param {String} Name - name. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  listFlowProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('ListFlowProject', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  listFlowProjectClusterSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('ListFlowProjectClusterSetting', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  listFlowProjectUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('ListFlowProjectUser', params, options);
  }

  /**
   * @param {Long} ClusterId - clusterId. required.
   * @param {String} Service - service. optional.
   * @param {String} Component - component. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  listHealthRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListHealthRule', params, options);
  }

  /**
   * @param {Long} ClusterId - clusterId. required.
   * @param {String} Service - service. optional.
   * @param {String} Component - component. optional.
   * @param {String} HostName - hostName. optional.
   * @param {Integer} Pass - pass. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  listHealthRuleResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListHealthRuleResult', params, options);
  }

  /**
   * @param {Long} ClusterId - clusterId. required.
   * @param {String} Service - service. optional.
   * @param {String} Component - component. optional.
   * @param {String} HostName - hostName. optional.
   * @param {String} InstanceId - hostId. optional.
   * @param {Integer} Pass - pass. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  listHealthRuleResultHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListHealthRuleResultHistory', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} BizId - bizId. optional.
   * @param {String} ClusterRegionId - clusterRegionId. optional.
   * @param {String} AppId - appId. optional.
   * @param {String} Type - type. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} Severity - severity. optional.
   */
  listHeuristicResultDetailForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListHeuristicResultDetailForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {Long} HostId - hostId. optional.
   * @param {RepeatList} HostIdList - hostIdList. optional.
   */
  listHostDisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListHostDisk', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} OperationId - operationId. required.
   * @param {String} HostId - hostId. required.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listHostTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'OperationId')) {
      throw new TypeError('parameter "OperationId" is required');
    }

    if (!hasOwnProperty(params, 'HostId')) {
      throw new TypeError('parameter "HostId" is required');
    }

    return this.request('ListHostTask', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {String} TopicBizId - topicBizId. required.
   */
  listKafkaConsumerGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicBizId')) {
      throw new TypeError('parameter "TopicBizId" is required');
    }

    return this.request('ListKafkaConsumerGroup', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {String} DataSourceId - dataSourceId. optional.
   * @param {String} ClusterBizId - clusterBizId. optional.
   * @param {String} TopicName - topicName. optional.
   * @param {String} FuzzyTopicName - fuzzyTopicName. optional.
   */
  listKafkaTopic(params = {}, options = {}) {
    return this.request('ListKafkaTopic', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} BizId - bizId. optional.
   * @param {RepeatList} BizIdList - bizIds. optional.
   * @param {String} ClusterBizId - clusterBizId. optional.
   * @param {String} Name - name. optional.
   * @param {String} SourceType - sourceType. optional.
   * @param {Boolean} ClusterReleased - clusterReleased. optional.
   */
  listMetaDataSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListMetaDataSource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UserId - userId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 100.
   * @param {String} ClusterBizId - clusterBizId. optional.
   * @param {String} DatabaseName - databaseName. optional.
   * @param {RepeatList} DatabaseNameList - databaseNameList. optional.
   * @param {Long} DataSourceId - dataSourceId. optional.
   * @param {String} Location - location. optional.
   * @param {String} FuzzyDatabaseName - fuzzyDatabaseName. optional.
   */
  listMetaDatabase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('ListMetaDatabase', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UserId - userId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 100.
   * @param {String} ClusterBizId - clusterBizId. optional.
   * @param {Long} DatabaseId - databaseId. optional.
   * @param {String} DatabaseBizId - databaseBizId. optional.
   * @param {String} BizId - bizId. optional.
   * @param {String} TableName - tableName. optional.
   * @param {RepeatList} TableNameList - tableNameList. optional.
   * @param {String} TableType - tableType. optional.
   * @param {String} FuzzyTableName - fuzzyTableName. optional.
   */
  listMetaTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('ListMetaTable', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 100.
   * @param {String} ClusterBizId - clusterBizId. optional.
   * @param {Long} DatabaseId - databaseId. optional.
   * @param {Long} TableId - tableId. optional.
   * @param {Integer} ColumnPosition - columnPosition. optional.
   * @param {String} ColumnName - columnName. optional.
   */
  listMetaTableColumn(params = {}, options = {}) {
    return this.request('ListMetaTableColumn', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 100.
   * @param {String} ClusterBizId - clusterBizId. optional.
   * @param {Long} DatabaseId - databaseId. optional.
   * @param {Long} TableId - tableId. optional.
   * @param {String} PartitionName - partitionName. optional.
   */
  listMetaTablePartition(params = {}, options = {}) {
    return this.request('ListMetaTablePartition', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} BizId - bizId. optional.
   * @param {String} Status - status. optional.
   * @param {String} TaskSourceType - taskSourceType. optional.
   */
  listMetaTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListMetaTask', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} ParentId - parentId. optional.
   * @param {String} Type - type. required.
   * @param {String} Name - name. optional.
   */
  listNavSubTree(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('ListNavSubTree', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} OperationId - operationId. required.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listOperationHost(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'OperationId')) {
      throw new TypeError('parameter "OperationId" is required');
    }

    return this.request('ListOperationHost', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} UserId - userId. required.
   * @param {String} ExternalClusterId - externalClusterId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listOpsOperation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ExternalClusterId')) {
      throw new TypeError('parameter "ExternalClusterId" is required');
    }

    return this.request('ListOpsOperation', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UserId - userId. optional.
   * @param {Integer} OperationId - operationId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listOpsOperationTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OperationId')) {
      throw new TypeError('parameter "OperationId" is required');
    }

    return this.request('ListOpsOperationTask', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {Long} BatchId - batchId. required.
   * @param {Long} PublishId - publishId. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listPublishLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BatchId')) {
      throw new TypeError('parameter "BatchId" is required');
    }

    return this.request('ListPublishLog', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {Long} BatchId - batchId. required.
   * @param {Long} PublishId - publishId. required.
   * @param {String} Status - status. optional.
   * @param {String} PublishType - publishType. optional.
   * @param {Long} ClusterId - clusterId. optional.
   */
  listPublishStrategy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BatchId')) {
      throw new TypeError('parameter "BatchId" is required');
    }

    if (!hasOwnProperty(params, 'PublishId')) {
      throw new TypeError('parameter "PublishId" is required');
    }

    return this.request('ListPublishStrategy', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listRepo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('ListRepo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} ServiceNames - serviceNames. required.
   * @param {String} StackName - stackName. required.
   * @param {String} StackVersion - stackVersion. required.
   */
  listRequiredServices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceNames')) {
      throw new TypeError('parameter "ServiceNames" is required');
    }

    if (!hasOwnProperty(params, 'StackName')) {
      throw new TypeError('parameter "StackName" is required');
    }

    if (!hasOwnProperty(params, 'StackVersion')) {
      throw new TypeError('parameter "StackVersion" is required');
    }

    return this.request('ListRequiredServices', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 50.
   * @param {Long} ClusterId - clusterId. required.
   * @param {Long} PoolId - poolId. optional.
   * @param {Boolean} Active - active. optional. default: true.
   * @param {String} PoolType - poolType. optional.
   */
  listResourcePool(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListResourcePool', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} StackName - stackName. optional.
   * @param {String} StackVersion - stackVersion. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('ListService', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} ConfigVersion - configVersion. optional.
   * @param {Long} GroupId - groupId. optional.
   * @param {String} HostInstanceId - hostInstanceId. optional.
   * @param {String} TagValue - tagValues. optional.
   */
  listServiceConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListServiceConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} ConfigVersion - configVersion. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listServiceConfigHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListServiceConfigHistory', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} ServiceName - serviceName. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listServiceConfigVersions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListServiceConfigVersions', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionNumber - regionNumber. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} ExternalClusterId - externalClusterId. required.
   * @param {String} HostName - hostName. required.
   * @param {String} LogstoreName - logstoreName. required.
   * @param {String} Marker - marker. optional.
   * @param {Integer} MaxKeys - maxKeys. optional.
   */
  listServiceLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ExternalClusterId')) {
      throw new TypeError('parameter "ExternalClusterId" is required');
    }

    if (!hasOwnProperty(params, 'HostName')) {
      throw new TypeError('parameter "HostName" is required');
    }

    if (!hasOwnProperty(params, 'LogstoreName')) {
      throw new TypeError('parameter "LogstoreName" is required');
    }

    return this.request('ListServiceLog', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. optional.
   * @param {String} ExternalClusterId - externalClusterId. required.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} ComponentName - componentName. optional.
   * @param {String} LogstoreDatasourceType - logstoreDatasourceType. optional.
   * @param {String} LogType - logType. optional.
   * @param {String} LogAccessLevel - logAccessLevel. optional.
   */
  listSlsLogstoreInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ExternalClusterId')) {
      throw new TypeError('parameter "ExternalClusterId" is required');
    }

    return this.request('ListSlsLogstoreInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} StackName - stackName. optional.
   * @param {String} StackVersion - stackVersion. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listStack(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListStack', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} StackName - stackName. required.
   * @param {String} StackVersion - stackVersion. required.
   */
  listStackServices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'StackName')) {
      throw new TypeError('parameter "StackName" is required');
    }

    if (!hasOwnProperty(params, 'StackVersion')) {
      throw new TypeError('parameter "StackVersion" is required');
    }

    return this.request('ListStackServices', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {Long} ClusterId - clusterId. optional.
   * @param {String} Type - type. optional.
   * @param {String} OwnerId - ownerId. required.
   */
  listUsers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('ListUsers', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. optional.
   * @param {String} WorkflowBizId - workflowBizId. optional.
   * @param {Long} ClusterId - clusterId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 50.
   */
  listWorkflowForAdmin(params = {}, options = {}) {
    return this.request('ListWorkflowForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. optional.
   * @param {Long} WorkflowId - workflowId. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 50.
   */
  listWorkflowInstanceForAdmin(params = {}, options = {}) {
    return this.request('ListWorkflowInstanceForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. optional.
   * @param {Long} WorkflowId - workflowId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 50.
   */
  listWorkflowStageForAdmin(params = {}, options = {}) {
    return this.request('ListWorkflowStageForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. optional.
   * @param {Long} WorkflowId - workflowId. optional.
   * @param {Long} WorkflowInstanceId - workflowInstanceId. optional.
   * @param {Long} StageId - stageId. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 50.
   */
  listWorkflowStageInstanceForAdmin(params = {}, options = {}) {
    return this.request('ListWorkflowStageInstanceForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} TaskId - taskId. optional.
   * @param {Long} WorkflowInstanceId - workflowInstanceId. optional.
   * @param {Long} StageInstanceId - stageInstanceId. optional.
   * @param {Long} ClusterId - clusterId. optional.
   * @param {String} ExternalClusterBizId - externalClusterBizId. optional.
   * @param {String} HostInstanceId - hostInstanceId. optional.
   * @param {String} Status - status. optional.
   * @param {String} RoleCommand - roleCommand. optional.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} ComponentName - componentName. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 50.
   */
  listWorkflowTaskForAdmin(params = {}, options = {}) {
    return this.request('ListWorkflowTaskForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} MsgId - msgId. optional.
   * @param {RepeatList} MsgIdList - msgIdList. optional.
   * @param {String} MsgStatus - msgStatus. required.
   */
  modifyAlarmMsgStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MsgStatus')) {
      throw new TypeError('parameter "MsgStatus" is required');
    }

    return this.request('ModifyAlarmMsgStatus', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {Long} Id - id. required.
   * @param {String} UpgradeType - upgradeType. optional.
   * @param {String} OriginalVersion - originalVersion. optional.
   * @param {String} TargetVersion - targetVersion. optional.
   * @param {String} Status - status. optional.
   * @param {String} UpgradeParams - upgradeParams. optional.
   */
  modifyAutoUpgradeInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ModifyAutoUpgradeInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {RepeatList} Host - hostList. required.
   */
  modifyClusterHostInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Host')) {
      throw new TypeError('parameter "Host" is required');
    }

    return this.request('ModifyClusterHostInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ClusterName - clusterName. optional.
   * @param {Boolean} EasEnable - easEnable. optional.
   * @param {RepeatList} Host - hostList. optional.
   */
  modifyClusterMetaInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ModifyClusterMetaInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} Name - name. required.
   */
  modifyClusterName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('ModifyClusterName', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {String} Status - status. optional.
   * @param {String} Description - description. optional.
   * @param {Boolean} Periodic - periodic. optional.
   * @param {Long} StartSchedule - startSchedule. optional.
   * @param {Long} EndSchedule - endSchedule. optional.
   * @param {String} CronExpr - cronExpr. optional.
   * @param {Boolean} CreateCluster - createCluster. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} HostName - hostName. optional.
   * @param {String} Application - application. optional.
   * @param {String} alertConf - alertConf. optional.
   * @param {String} AlertUserGroupBizId - alertUserGroupBizId. optional.
   * @param {String} AlertDingDingGroupBizId - alertDingDingGroupBizId. optional.
   * @param {String} ParentFlowList - parentFlowList. optional.
   * @param {String} ParentCategory - parentCategory. optional.
   */
  modifyFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ModifyFlow', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {String} ParentId - parentId. optional.
   */
  modifyFlowCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ModifyFlowCategory', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {String} Status - status. optional.
   * @param {String} Description - description. optional.
   * @param {Boolean} Periodic - periodic. optional.
   * @param {Long} StartSchedule - startSchedule. optional.
   * @param {Long} EndSchedule - endSchedule. optional.
   * @param {String} CronExpr - cronExpr. optional.
   * @param {Boolean} CreateCluster - createCluster. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} HostName - hostName. optional.
   * @param {String} Graph - graph. optional.
   * @param {String} alertConf - alertConf. optional.
   * @param {String} AlertUserGroupBizId - alertUserGroupBizId. optional.
   * @param {String} AlertDingDingGroupBizId - alertDingDingGroupBizId. optional.
   * @param {String} ParentFlowList - parentFlowList. optional.
   * @param {String} ParentCategory - parentCategory. optional.
   */
  modifyFlowForWeb(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ModifyFlowForWeb', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} FailAct - failAct. optional.
   * @param {Integer} MaxRetry - maxRetry. optional.
   * @param {Long} RetryInterval - retryInterval. optional.
   * @param {String} Params - params. optional.
   * @param {String} ParamConf - paramConf. optional.
   * @param {String} CustomVariables - customVariables. optional.
   * @param {String} EnvConf - envConf. optional.
   * @param {String} RunConf - runConf. optional.
   * @param {String} MonitorConf - monitorConf. optional.
   * @param {String} Mode - mode. optional.
   * @param {String} alertConf - alertConf. optional.
   * @param {RepeatList} ResourceList - resourceList. optional.
   * @param {String} ClusterId - clusterId. optional.
   */
  modifyFlowJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ModifyFlowJob', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   */
  modifyFlowProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('ModifyFlowProject', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} DefaultUser - defaultUser. optional.
   * @param {String} DefaultQueue - defaultQueue. optional.
   * @param {RepeatList} User - userList. optional.
   * @param {RepeatList} Queue - queueList. optional.
   * @param {RepeatList} Host - hostList. optional.
   */
  modifyFlowProjectClusterSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ModifyFlowProjectClusterSetting', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} Data - data. required.
   */
  modifyFlowVariableCollection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    return this.request('ModifyFlowVariableCollection', params, options);
  }

  /**
   * @param {Long} id - id. required.
   * @param {String} name - name. optional.
   * @param {String} status - status. optional.
   * @param {String} expressionType - expressionType. optional.
   * @param {String} service - service. optional.
   * @param {String} component - component. optional.
   * @param {Integer} period - period. optional.
   * @param {String} rule - rule. optional.
   * @param {String} metrics - metrics. optional.
   * @param {String} description - description. optional.
   * @param {String} explanation - explanation. optional.
   * @param {String} solution - solution. optional.
   */
  modifyHealthRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'id')) {
      throw new TypeError('parameter "id" is required');
    }

    return this.request('ModifyHealthRule', params, options);
  }

  /**
   * @param {Long} ClusterId - clusterId. required.
   * @param {Long} RuleId - ruleId. required.
   * @param {String} RuleName - ruleName. required.
   * @param {String} Status - status. required.
   */
  modifyHealthRuleConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    if (!hasOwnProperty(params, 'RuleName')) {
      throw new TypeError('parameter "RuleName" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('ModifyHealthRuleConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {Long} Id - id. optional.
   * @param {String} Name - name. optional.
   * @param {String} TargetType - targetType. optional.
   * @param {String} PublishType - publishType. optional.
   * @param {String} OriginalVersion - originalVersion. optional.
   * @param {String} TargetVersion - targetVersion. optional.
   * @param {String} Status - status. optional.
   * @param {String} HostsIds - hostsIds. optional.
   * @param {String} UserId - userId. optional.
   * @param {Long} BatchId - batchId. optional.
   * @param {Long} PublishId - publishId. optional.
   * @param {Boolean} AutoRestart - autoRestart. optional.
   * @param {Long} ClusterId - clusterId. optional.
   * @param {String} CustomStrategy - customStrategy. optional.
   */
  modifyPublishStrategy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ModifyPublishStrategy', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionNumber - regionNumber. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {Long} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {Long} ClusterId - clusterId. required.
   * @param {String} PoolType - poolType. optional.
   * @param {Boolean} Active - active. optional.
   * @param {String} Note - note. optional.
   * @param {String} YarnSiteConfig - yarnSiteConfig. optional.
   * @param {RepeatList} Config - configList. optional.
   */
  modifyResourcePool(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ModifyResourcePool', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} SchedulerType - schedulerType. required.
   */
  modifyResourcePoolSchedulerType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'SchedulerType')) {
      throw new TypeError('parameter "SchedulerType" is required');
    }

    return this.request('ModifyResourcePoolSchedulerType', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionNumber - regionNumber. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {Long} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {String} QualifiedName - qualifiedName. optional.
   * @param {Long} ClusterId - clusterId. required.
   * @param {Long} ParentQueueId - parentQueueId. optional.
   * @param {Boolean} Leaf - leaf. optional.
   * @param {Long} ResourcePoolId - resourcePoolId. required.
   * @param {RepeatList} Config - configList. required.
   */
  modifyResourceQueue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ResourcePoolId')) {
      throw new TypeError('parameter "ResourcePoolId" is required');
    }

    if (!hasOwnProperty(params, 'Config')) {
      throw new TypeError('parameter "Config" is required');
    }

    return this.request('ModifyResourceQueue', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. required.
   * @param {String} Author - author. required.
   * @param {String} Comment - comment. optional.
   * @param {String} ConfigMap - configMap. optional.
   * @param {String} CustomConfigMap - customConfigMap. optional.
   * @param {Long} GroupId - groupId. optional.
   * @param {String} HostInstanceId - hostInstanceId. optional.
   * @param {RepeatList} GroupIdList - groupIdList. optional.
   * @param {String} ConfigType - configType. optional.
   */
  modifyServiceConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    if (!hasOwnProperty(params, 'Author')) {
      throw new TypeError('parameter "Author" is required');
    }

    return this.request('ModifyServiceConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} TaskId - taskId. required.
   * @param {String} NewStatus - newStatus. required.
   */
  modifyTaskStatusForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'NewStatus')) {
      throw new TypeError('parameter "NewStatus" is required');
    }

    return this.request('ModifyTaskStatusForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} clusterId - clusterId. optional.
   * @param {RepeatList} HostInstanceIdList - hostInstanceIdList. required.
   */
  notifyClusterHostDecommission(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'HostInstanceIdList')) {
      throw new TypeError('parameter "HostInstanceIdList" is required');
    }

    return this.request('NotifyClusterHostDecommission', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} clusterId - clusterId. optional.
   * @param {RepeatList} Host - hostList. required.
   */
  notifyClusterHostTransfer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Host')) {
      throw new TypeError('parameter "Host" is required');
    }

    return this.request('NotifyClusterHostTransfer', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} clusterId - clusterId. required.
   */
  notifyFlowClusterRelease(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'clusterId')) {
      throw new TypeError('parameter "clusterId" is required');
    }

    return this.request('NotifyFlowClusterRelease', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {Long} ClusterId - clusterId. required.
   * @param {RepeatList} InstanceIdList - instanceIdList. required.
   * @param {String} MaintenanceState - maintenanceState. required.
   */
  operateMaintenanceState(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceIdList')) {
      throw new TypeError('parameter "InstanceIdList" is required');
    }

    if (!hasOwnProperty(params, 'MaintenanceState')) {
      throw new TypeError('parameter "MaintenanceState" is required');
    }

    return this.request('OperateMaintenanceState', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} Type - type. required.
   * @param {String} InstanceIds - instanceIds. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ExtendParam - extendParam. required.
   */
  operationTool(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ExtendParam')) {
      throw new TypeError('parameter "ExtendParam" is required');
    }

    return this.request('OperationTool', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} WorkflowInstanceId - workflowInstanceId. required.
   */
  reRunWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WorkflowInstanceId')) {
      throw new TypeError('parameter "WorkflowInstanceId" is required');
    }

    return this.request('ReRunWorkflow', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} WorkflowInstanceId - workflowInstanceId. required.
   */
  reRunWorkflowInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WorkflowInstanceId')) {
      throw new TypeError('parameter "WorkflowInstanceId" is required');
    }

    return this.request('ReRunWorkflowInstance', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {RepeatList} Host - hostList. required.
   */
  reductionCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Host')) {
      throw new TypeError('parameter "Host" is required');
    }

    return this.request('ReductionCluster', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {Long} ResourcePoolId - resourcePoolId. required.
   */
  refreshClusterResourcePool(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ResourcePoolId')) {
      throw new TypeError('parameter "ResourcePoolId" is required');
    }

    return this.request('RefreshClusterResourcePool', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} ServiceName - serviceName. required.
   * @param {String} ServiceEcmVersion - serviceEcmVersion. required.
   */
  refreshService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    if (!hasOwnProperty(params, 'ServiceEcmVersion')) {
      throw new TypeError('parameter "ServiceEcmVersion" is required');
    }

    return this.request('RefreshService', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UpgradeType - upgradeType. required.
   * @param {String} OriginalVersion - originalVersion. required.
   * @param {String} TargetVersion - targetVersion. required.
   * @param {String} Status - status. required.
   * @param {String} UpgradeParams - upgradeParams. optional.
   */
  registerAutoUpgradeInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UpgradeType')) {
      throw new TypeError('parameter "UpgradeType" is required');
    }

    if (!hasOwnProperty(params, 'OriginalVersion')) {
      throw new TypeError('parameter "OriginalVersion" is required');
    }

    if (!hasOwnProperty(params, 'TargetVersion')) {
      throw new TypeError('parameter "TargetVersion" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('RegisterAutoUpgradeInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. optional.
   * @param {String} RepoName - name. required.
   * @param {String} RepoUrl - url. required.
   * @param {String} Type - type. required.
   * @param {String} Extend - extend. required.
   * @param {String} Comment - comment. optional.
   * @param {String} Status - status. optional.
   */
  registerRepo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RepoName')) {
      throw new TypeError('parameter "RepoName" is required');
    }

    if (!hasOwnProperty(params, 'RepoUrl')) {
      throw new TypeError('parameter "RepoUrl" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Extend')) {
      throw new TypeError('parameter "Extend" is required');
    }

    return this.request('RegisterRepo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} ServiceName - serviceName. required.
   * @param {String} ServiceVersion - serviceVersion. required.
   * @param {String} Comment - comment. optional.
   */
  registerService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    if (!hasOwnProperty(params, 'ServiceVersion')) {
      throw new TypeError('parameter "ServiceVersion" is required');
    }

    return this.request('RegisterService', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} StackName - stackName. required.
   * @param {String} StackEcmVersion - stackEcmVersion. required.
   * @param {String} Type - type. required.
   * @param {String} Comment - comment. optional.
   */
  registerStack(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'StackName')) {
      throw new TypeError('parameter "StackName" is required');
    }

    if (!hasOwnProperty(params, 'StackEcmVersion')) {
      throw new TypeError('parameter "StackEcmVersion" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('RegisterStack', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   * @param {String} ReleaseId - releaseId. optional.
   */
  releaseETLJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ReleaseETLJob', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {Long} ClusterId - clusterId. required.
   * @param {String} UserId - userId. required.
   * @param {Long} ResourcePoolId - resourcePoolId. required.
   */
  renderResourcePoolXml(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ResourcePoolId')) {
      throw new TypeError('parameter "ResourcePoolId" is required');
    }

    return this.request('RenderResourcePoolXml', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} RegionNumber - regionNumber. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. required.
   * @param {Long} ClusterId - clusterId. required.
   * @param {Long} WorkflowInstanceId - workflowInstanceId. optional.
   * @param {RepeatList} ReplaceHostInfo - replaceHostInfoList. optional.
   */
  replaceClusterHost(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ReplaceClusterHost', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} GwToken - gwToken. required.
   * @param {Long} GwTimestamp - gwTimestamp. required.
   * @param {String} GwService - gwService. required.
   * @param {String} GwVersion - gwVersion. required.
   * @param {String} GwMethod - gwMethod. required.
   * @param {String} GwApiName - gwApiName. required.
   * @param {String} GwMethodParams - gwMethodParams. required.
   * @param {String} GwSerializeProtocol - gwSerializeProtocol. required.
   */
  requestGatewayService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'GwToken')) {
      throw new TypeError('parameter "GwToken" is required');
    }

    if (!hasOwnProperty(params, 'GwTimestamp')) {
      throw new TypeError('parameter "GwTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'GwService')) {
      throw new TypeError('parameter "GwService" is required');
    }

    if (!hasOwnProperty(params, 'GwVersion')) {
      throw new TypeError('parameter "GwVersion" is required');
    }

    if (!hasOwnProperty(params, 'GwMethod')) {
      throw new TypeError('parameter "GwMethod" is required');
    }

    if (!hasOwnProperty(params, 'GwApiName')) {
      throw new TypeError('parameter "GwApiName" is required');
    }

    if (!hasOwnProperty(params, 'GwMethodParams')) {
      throw new TypeError('parameter "GwMethodParams" is required');
    }

    if (!hasOwnProperty(params, 'GwSerializeProtocol')) {
      throw new TypeError('parameter "GwSerializeProtocol" is required');
    }

    return this.request('RequestGatewayService', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} FlowInstanceId - flowInstanceId. required.
   * @param {Boolean} ReRunFail - reRunFail. optional.
   */
  rerunFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'FlowInstanceId')) {
      throw new TypeError('parameter "FlowInstanceId" is required');
    }

    return this.request('RerunFlow', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} Params - params. optional.
   * @param {RepeatList} Service - serviceList. optional.
   * @param {RepeatList} Group - groupList. optional.
   * @param {RepeatList} Host - hostList. required.
   */
  resizeCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Host')) {
      throw new TypeError('parameter "Host" is required');
    }

    return this.request('ResizeCluster', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {Boolean} EnableHostLevelCmd - enableHostLevelCmd. optional.
   * @param {RepeatList} HostGroup - hostGroupList. required.
   * @param {RepeatList} HostInfo - hostInfoList. required.
   * @param {RepeatList} HostScript - hostScriptList. optional.
   */
  resizeClusterV2(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'HostGroup')) {
      throw new TypeError('parameter "HostGroup" is required');
    }

    if (!hasOwnProperty(params, 'HostInfo')) {
      throw new TypeError('parameter "HostInfo" is required');
    }

    return this.request('ResizeClusterV2', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {Long} ClusterId - clusterId. required.
   * @param {RepeatList} InstanceIdList - instanceIdList. required.
   */
  resizeDisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceIdList')) {
      throw new TypeError('parameter "InstanceIdList" is required');
    }

    return this.request('ResizeDisk', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} EtlJobId - etlJobId. required.
   * @param {String} DataSourceId - dataSourceId. optional.
   * @param {String} StageName - stageName. optional.
   * @param {String} Sql - sql. required.
   */
  resolveETLJobSqlSchema(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EtlJobId')) {
      throw new TypeError('parameter "EtlJobId" is required');
    }

    if (!hasOwnProperty(params, 'Sql')) {
      throw new TypeError('parameter "Sql" is required');
    }

    return this.request('ResolveETLJobSqlSchema', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} FlowInstanceId - flowInstanceId. required.
   */
  resumeFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'FlowInstanceId')) {
      throw new TypeError('parameter "FlowInstanceId" is required');
    }

    return this.request('ResumeFlow', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} WorkflowInstanceId - workflowInstanceId. required.
   */
  resumeWorkflowInstanceForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WorkflowInstanceId')) {
      throw new TypeError('parameter "WorkflowInstanceId" is required');
    }

    return this.request('ResumeWorkflowInstanceForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {Long} ClusterId - clusterId. required.
   * @param {RepeatList} UserInfo - userInfoList. required.
   * @param {String} OwnerId - ownerId. required.
   */
  retryCreateUserPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'UserInfo')) {
      throw new TypeError('parameter "UserInfo" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('RetryCreateUserPassword', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} BizId - bizId. required.
   */
  retryMetaTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('RetryMetaTask', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} UserId - userId. required.
   * @param {Long} ClusterId - clusterId. required.
   * @param {RepeatList} hostScript - hostScriptList. optional.
   */
  runClusterScript(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('RunClusterScript', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   * @param {RepeatList} InstanceRunParam - instanceRunParamList. optional.
   * @param {Boolean} IsDebug - isDebug. required.
   */
  runETLJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'IsDebug')) {
      throw new TypeError('parameter "IsDebug" is required');
    }

    return this.request('RunETLJob', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} LogKey - logKey. optional.
   * @param {String} ActionType - actionType. optional.
   * @param {String} ObjectType - objectType. optional.
   */
  runMetaLog(params = {}, options = {}) {
    return this.request('RunMetaLog', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} ExternalClusterId - externalClusterId. required.
   * @param {RepeatList} HostIdList - hostIdList. optional.
   * @param {String} Dimension - dimension. optional. default: CLUSTER.
   * @param {String} OpsCommandName - opsCommandName. required.
   * @param {String} Comment - comment. optional.
   * @param {String} CustomParams - customParams. optional.
   */
  runOpsCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ExternalClusterId')) {
      throw new TypeError('parameter "ExternalClusterId" is required');
    }

    if (!hasOwnProperty(params, 'OpsCommandName')) {
      throw new TypeError('parameter "OpsCommandName" is required');
    }

    return this.request('RunOpsCommand', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostIdList - hostIdList. optional.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} ServiceActionName - serviceActionName. required.
   * @param {String} CustomCommand - customCommand. optional.
   * @param {String} ComponentNameList - componentNameList. optional.
   * @param {Boolean} IsRolling - isRolling. optional.
   * @param {Integer} NodeCountPerBatch - nodeCountPerBatch. optional.
   * @param {String} Comment - comment. optional.
   * @param {String} ExParams - exParams. optional.
   * @param {Integer} TotlerateFailCount - tolerateFailCount. optional.
   * @param {Boolean} OnlyRestartStaleConfigNodes - onlyRestartStaleConfigNodes. optional.
   * @param {Boolean} TurnOnMaintenanceMode - turnOnMaintenanceMode. optional.
   */
  runServiceAction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceActionName')) {
      throw new TypeError('parameter "ServiceActionName" is required');
    }

    return this.request('RunServiceAction', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {Boolean} Internal - internal. optional. default: false.
   * @param {String} Comment - comment. optional.
   * @param {RepeatList} RunActionCommand - runActionCommandList. optional.
   */
  runServiceActionV2(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('RunServiceActionV2', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionNumber - regionNumber. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} ExternalClusterId - externalClusterId. required.
   * @param {String} HostInnerIp - hostInnerIp. optional.
   * @param {String} HostName - hostName. optional.
   * @param {String} LogstoreName - logstoreName. required.
   * @param {Integer} FromTimestamp - fromTimestamp. required.
   * @param {Integer} ToTimestamp - toTimestamp. required.
   * @param {String} SlsQueryString - slsQueryString. required.
   * @param {Integer} Offset - offset. required.
   * @param {Integer} Line - line. optional. default: 100.
   * @param {Boolean} Reverse - reverse. optional. default: false.
   */
  searchLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ExternalClusterId')) {
      throw new TypeError('parameter "ExternalClusterId" is required');
    }

    if (!hasOwnProperty(params, 'LogstoreName')) {
      throw new TypeError('parameter "LogstoreName" is required');
    }

    if (!hasOwnProperty(params, 'FromTimestamp')) {
      throw new TypeError('parameter "FromTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'ToTimestamp')) {
      throw new TypeError('parameter "ToTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'SlsQueryString')) {
      throw new TypeError('parameter "SlsQueryString" is required');
    }

    if (!hasOwnProperty(params, 'Offset')) {
      throw new TypeError('parameter "Offset" is required');
    }

    return this.request('SearchLog', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} WorkflowStageInstanceId - workflowStageInstanceId. required.
   * @param {RepeatList} TaskIdList - taskIdList. optional.
   */
  skipWorkflowStageInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WorkflowStageInstanceId')) {
      throw new TypeError('parameter "WorkflowStageInstanceId" is required');
    }

    return this.request('SkipWorkflowStageInstance', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} FlowInstanceId - flowInstanceId. required.
   */
  startFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'FlowInstanceId')) {
      throw new TypeError('parameter "FlowInstanceId" is required');
    }

    return this.request('StartFlow', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} FlowId - flowId. required.
   * @param {String} Conf - conf. optional.
   */
  submitFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'FlowId')) {
      throw new TypeError('parameter "FlowId" is required');
    }

    return this.request('SubmitFlow', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} JobId - jobId. required.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} HostName - hostName. optional.
   * @param {String} Conf - conf. optional.
   */
  submitFlowJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('SubmitFlowJob', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} FlowInstanceId - flowInstanceId. required.
   */
  suspendFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'FlowInstanceId')) {
      throw new TypeError('parameter "FlowInstanceId" is required');
    }

    return this.request('SuspendFlow', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} WorkflowInstanceId - workflowInstanceId. required.
   */
  suspendWorkflowInstanceForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WorkflowInstanceId')) {
      throw new TypeError('parameter "WorkflowInstanceId" is required');
    }

    return this.request('SuspendWorkflowInstanceForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} EtlJobId - etlJobId. required.
   * @param {String} DataSourceId - dataSourceId. required.
   * @param {String} DbName - dbName. optional.
   */
  syncDataSourceSchemaDatabase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EtlJobId')) {
      throw new TypeError('parameter "EtlJobId" is required');
    }

    if (!hasOwnProperty(params, 'DataSourceId')) {
      throw new TypeError('parameter "DataSourceId" is required');
    }

    return this.request('SyncDataSourceSchemaDatabase', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} EtlJobId - etlJobId. required.
   * @param {String} DataSourceId - dataSourceId. required.
   * @param {String} DbName - dbName. optional.
   * @param {String} TableName - tableName. optional.
   */
  syncDataSourceSchemaTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EtlJobId')) {
      throw new TypeError('parameter "EtlJobId" is required');
    }

    if (!hasOwnProperty(params, 'DataSourceId')) {
      throw new TypeError('parameter "DataSourceId" is required');
    }

    return this.request('SyncDataSourceSchemaTable', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Instruction - instruction. required.
   * @param {String} UserId - userId. optional.
   * @param {String} MetadbUserId - metadbUserId. optional.
   * @param {String} MetadbRdsInstanceId - metadbRdsInstanceId. optional.
   * @param {String} MetadbRdsUrl - metadbRdsUrl. optional.
   * @param {String} MetadbName - metadbName. optional.
   * @param {String} MetadbUser - metadbUser. optional.
   * @param {Integer} MetadbInited - metadbInited. optional.
   * @param {Long} MetadbTotalCapacity - metadbTotalCapacity. optional.
   * @param {Long} MetadbUsedCapacity - metadbUsedCapacity. optional.
   * @param {Integer} MetadbMaxQueryCount - metadbMaxQueryCount. optional.
   * @param {Integer} MetadbMaxUpdateCount - metadbMaxUpdateCount. optional.
   * @param {Integer} MetadbMaxConnectionCount - metadbMaxConnectionCount. optional.
   */
  syncMetaStoreTemporary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Instruction')) {
      throw new TypeError('parameter "Instruction" is required');
    }

    return this.request('SyncMetaStoreTemporary', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {Long} ClusterId - clusterId. required.
   * @param {Long} ExternalClusterDigitalId - externalClusterDigitalId. required.
   */
  syncUsers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ExternalClusterDigitalId')) {
      throw new TypeError('parameter "ExternalClusterDigitalId" is required');
    }

    return this.request('SyncUsers', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} OperationId - operationId. optional.
   * @param {Long} WorkflowInstanceId - workflowInstanceId. optional.
   */
  terminateWorkflow(params = {}, options = {}) {
    return this.request('TerminateWorkflow', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {Long} ClusterId - clusterId. required.
   * @param {RepeatList} InstanceIdList - instanceIdList. required.
   */
  turnOnMaintenanceState(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceIdList')) {
      throw new TypeError('parameter "InstanceIdList" is required');
    }

    return this.request('TurnOnMaintenanceState', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {Long} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {String} TargetClusterList - targetClusterList. optional.
   * @param {String} DingGroupList - dingGroupList. optional.
   * @param {String} UserGroupList - userGroupList. optional.
   * @param {Boolean} Enabled - enabled. optional.
   * @param {String} UserId - userId. required.
   */
  updateApmEventNotificationConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('UpdateApmEventNotificationConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {Long} ClusterId - clusterId. required.
   * @param {String} Status - status. required.
   * @param {RepeatList} InstanceIdList - instanceIdList. required.
   */
  updateClusterHostComponentStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    if (!hasOwnProperty(params, 'InstanceIdList')) {
      throw new TypeError('parameter "InstanceIdList" is required');
    }

    return this.request('UpdateClusterHostComponentStatus', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. required.
   * @param {String} Conf - conf. required.
   */
  updateDataSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'Conf')) {
      throw new TypeError('parameter "Conf" is required');
    }

    return this.request('UpdateDataSource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   * @param {Boolean} Check - check. optional.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} ClusterConfig - clusterConfig. optional.
   * @param {RepeatList} TriggerRule - triggerRuleList. optional.
   * @param {String} AlertConfig - alertConfig. optional.
   * @param {RepeatList} Stage - stageList. optional.
   * @param {RepeatList} StageConnection - stageConnections. optional.
   */
  updateETLJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('UpdateETLJob', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} EtlJobId - etlJobId. required.
   * @param {String} StageName - stageName. required.
   * @param {String} StageType - stageType. required.
   * @param {String} StagePlugin - stagePlugin. required.
   * @param {String} StageConf - stageConf. required.
   */
  updateETLJobStage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EtlJobId')) {
      throw new TypeError('parameter "EtlJobId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    if (!hasOwnProperty(params, 'StageType')) {
      throw new TypeError('parameter "StageType" is required');
    }

    if (!hasOwnProperty(params, 'StagePlugin')) {
      throw new TypeError('parameter "StagePlugin" is required');
    }

    if (!hasOwnProperty(params, 'StageConf')) {
      throw new TypeError('parameter "StageConf" is required');
    }

    return this.request('UpdateETLJobStage', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} TopicBizId - topicBizId. required.
   * @param {Integer} NumPartitions - numPartitions. required.
   * @param {Integer} ReplicationFactor - replicationFactor. optional.
   * @param {RepeatList} AdvancedConfig - advancedConfigList. optional.
   */
  updateKafkaTopic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicBizId')) {
      throw new TypeError('parameter "TopicBizId" is required');
    }

    if (!hasOwnProperty(params, 'NumPartitions')) {
      throw new TypeError('parameter "NumPartitions" is required');
    }

    return this.request('UpdateKafkaTopic', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. optional.
   * @param {RepeatList} TopicParam - topicParamList. required.
   */
  updateKafkaTopicBatch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicParam')) {
      throw new TypeError('parameter "TopicParam" is required');
    }

    return this.request('UpdateKafkaTopicBatch', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} BizId - bizId. required.
   * @param {String} DataSourceName - dataSourceName. optional.
   * @param {String} DataSourceDescription - dataSourceDescription. optional.
   * @param {String} ClusterBizId - clusterBizId. optional.
   * @param {String} ServiceConfig - serviceConfig. optional.
   * @param {Long} MetadbTotalCapacity - metadbTotalCapacity. optional.
   * @param {Long} MetadbUsedCapacity - metadbUsedCapacity. optional.
   * @param {Integer} MetadbMaxQueryCount - metadbMaxQueryCount. optional.
   * @param {Integer} MetadbMaxUpdateCount - metadbMaxUpdateCount. optional.
   * @param {Integer} MetadbMaxConnectionCount - metadbMaxConnectionCount. optional.
   */
  updateMetaDataSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('UpdateMetaDataSource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {Long} DataSourceId - dataSourceId. required.
   * @param {Integer} CapacityMib - capacityMib. required.
   */
  updateMetaHiveCapacity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DataSourceId')) {
      throw new TypeError('parameter "DataSourceId" is required');
    }

    if (!hasOwnProperty(params, 'CapacityMib')) {
      throw new TypeError('parameter "CapacityMib" is required');
    }

    return this.request('UpdateMetaHiveCapacity', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {Long} DataSourceId - dataSourceId. required.
   * @param {String} MetadbPassword - metadbPassword. required.
   * @param {Integer} MaxQueriesPerHour - maxQueriesPerHour. required.
   * @param {Integer} MaxUpdatesPerHour - maxUpdatesPerHour. required.
   * @param {Integer} MaxUserConnections - maxUserConnections. required.
   */
  updateMetaHiveUseLimit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DataSourceId')) {
      throw new TypeError('parameter "DataSourceId" is required');
    }

    if (!hasOwnProperty(params, 'MetadbPassword')) {
      throw new TypeError('parameter "MetadbPassword" is required');
    }

    if (!hasOwnProperty(params, 'MaxQueriesPerHour')) {
      throw new TypeError('parameter "MaxQueriesPerHour" is required');
    }

    if (!hasOwnProperty(params, 'MaxUpdatesPerHour')) {
      throw new TypeError('parameter "MaxUpdatesPerHour" is required');
    }

    if (!hasOwnProperty(params, 'MaxUserConnections')) {
      throw new TypeError('parameter "MaxUserConnections" is required');
    }

    return this.request('UpdateMetaHiveUseLimit', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UserId - userId. required.
   * @param {Long} TableId - tableId. optional.
   * @param {String} TableBizId - tableBizId. optional.
   * @param {String} LocationUri - locationUri. required.
   * @param {String} FieldDelimiter - fieldDelimiter. optional.
   * @param {String} Comment - comment. optional.
   * @param {String} Owner - owner. optional.
   * @param {String} OwnerType - ownerType. optional.
   * @param {String} SerializationLib - serializationLib. optional.
   * @param {String} InputFormat - inputFormat. optional.
   * @param {String} OutputFormat - outputFormat. optional.
   * @param {Boolean} Compressed - compressed. optional.
   * @param {Long} LastAccessTime - lastAccessTime. optional.
   * @param {RepeatList} TableParameter - tableParameters. optional.
   * @param {RepeatList} SerdeParameter - serdeParameters. optional.
   * @param {RepeatList} StorageParameter - storageParameters. optional.
   * @param {RepeatList} Column - columnList. optional.
   * @param {RepeatList} Partition - partitionList. optional.
   */
  updateMetaTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'LocationUri')) {
      throw new TypeError('parameter "LocationUri" is required');
    }

    return this.request('UpdateMetaTable', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {String} ParentId - parentId. optional.
   */
  updateNavNode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateNavNode', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} callerBid - callerBid. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} DefaultOssPath - defaultOssPath. optional.
   * @param {String} OssConfig - ossConfig. optional.
   */
  updateProjectSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('UpdateProjectSetting', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. optional.
   * @param {RepeatList} ClusterIdList - clusterIdList. required.
   * @param {String} Group - group. required.
   * @param {String} Name - name. required.
   * @param {String} TargetVersion - targetVersion. required.
   * @param {String} Type - type. required.
   */
  upgradeAgent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterIdList')) {
      throw new TypeError('parameter "ClusterIdList" is required');
    }

    if (!hasOwnProperty(params, 'Group')) {
      throw new TypeError('parameter "Group" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'TargetVersion')) {
      throw new TypeError('parameter "TargetVersion" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('UpgradeAgent', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FromApp - fromApp. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. optional.
   * @param {RepeatList} ClusterIdList - clusterIdList. required.
   * @param {String} StackVersion - stackVersion. required.
   */
  upgradeStack(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromApp')) {
      throw new TypeError('parameter "FromApp" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterIdList')) {
      throw new TypeError('parameter "ClusterIdList" is required');
    }

    if (!hasOwnProperty(params, 'StackVersion')) {
      throw new TypeError('parameter "StackVersion" is required');
    }

    return this.request('UpgradeStack', params, options);
  }

}

module.exports = Client;


'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-01-15';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClusterId - clusterId. required.
   */
  allocatePublicNetworkAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('AllocatePublicNetworkAddress', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. required.
   */
  closeBackup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('CloseBackup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. required.
   * @param {String} ClusterName - clusterName. required.
   * @param {String} NetType - netType. required.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vSwitchId. optional.
   * @param {String} MasterInstanceType - masterInstanceType. required.
   * @param {String} CoreInstanceType - coreInstanceType. required.
   * @param {String} CoreDiskType - coreDiskType. required.
   * @param {String} CoreDiskSize - coreDiskSize. required.
   * @param {String} CoreDiskQuantity - coreDiskQuantity. required.
   * @param {String} CoreInstanceQuantity - coreInstanceQuantity. required.
   * @param {String} PayType - payType. optional. default: PREPAY.
   * @param {String} AutoRenew - autoRenew. optional. default: false.
   * @param {String} DbInstanceType - dbInstanceType. optional. default: x.
   * @param {String} Engine - engine. required.
   * @param {String} SecurityIPList - securityIPList. required.
   * @param {String} EngineVersion - engineVersion. required.
   * @param {String} DbInstanceConnType - dbInstanceConnType. optional. default: lvs.
   * @param {String} CloudType - cloudType. required.
   * @param {String} IsColdStorage - isColdStorage. optional.
   * @param {String} ColdStorageSize - coldStorageSize. optional.
   * @param {String} BackupId - backupId. optional.
   * @param {String} SrcDBInstanceId - srcDbInstanceId. optional.
   * @param {String} RestoreTime - restoreTime. optional.
   */
  createCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterName')) {
      throw new TypeError('parameter "ClusterName" is required');
    }

    if (!hasOwnProperty(params, 'NetType')) {
      throw new TypeError('parameter "NetType" is required');
    }

    if (!hasOwnProperty(params, 'MasterInstanceType')) {
      throw new TypeError('parameter "MasterInstanceType" is required');
    }

    if (!hasOwnProperty(params, 'CoreInstanceType')) {
      throw new TypeError('parameter "CoreInstanceType" is required');
    }

    if (!hasOwnProperty(params, 'CoreDiskType')) {
      throw new TypeError('parameter "CoreDiskType" is required');
    }

    if (!hasOwnProperty(params, 'CoreDiskSize')) {
      throw new TypeError('parameter "CoreDiskSize" is required');
    }

    if (!hasOwnProperty(params, 'CoreDiskQuantity')) {
      throw new TypeError('parameter "CoreDiskQuantity" is required');
    }

    if (!hasOwnProperty(params, 'CoreInstanceQuantity')) {
      throw new TypeError('parameter "CoreInstanceQuantity" is required');
    }

    if (!hasOwnProperty(params, 'Engine')) {
      throw new TypeError('parameter "Engine" is required');
    }

    if (!hasOwnProperty(params, 'SecurityIPList')) {
      throw new TypeError('parameter "SecurityIPList" is required');
    }

    if (!hasOwnProperty(params, 'EngineVersion')) {
      throw new TypeError('parameter "EngineVersion" is required');
    }

    if (!hasOwnProperty(params, 'CloudType')) {
      throw new TypeError('parameter "CloudType" is required');
    }

    return this.request('CreateCluster', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} SlbServer - slbServer. required.
   */
  createHbaseSlbServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'SlbServer')) {
      throw new TypeError('parameter "SlbServer" is required');
    }

    return this.request('CreateHbaseSlbServer', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} SlbServer - slbServer. optional. default: thrift.
   * @param {String} SubscriptionType - subscriptionType. required.
   * @param {String} SubscriptionDescription - dataSubscriberDescription. optional.
   * @param {String} SourceInstanceId - sourceInstanceId. required.
   * @param {String} SourceInstanceRegionId - sourceInstanceRegionId. required.
   * @param {String} DestinationInstanceId - destinationInstanceId. required.
   * @param {String} DestinationInstanceRegionId - destinationInstanceRegionId. required.
   * @param {String} ExtraContext - extraContext. optional.
   * @param {String} Mapping - mapping. required.
   */
  createSubscription(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubscriptionType')) {
      throw new TypeError('parameter "SubscriptionType" is required');
    }

    if (!hasOwnProperty(params, 'SourceInstanceId')) {
      throw new TypeError('parameter "SourceInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SourceInstanceRegionId')) {
      throw new TypeError('parameter "SourceInstanceRegionId" is required');
    }

    if (!hasOwnProperty(params, 'DestinationInstanceId')) {
      throw new TypeError('parameter "DestinationInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DestinationInstanceRegionId')) {
      throw new TypeError('parameter "DestinationInstanceRegionId" is required');
    }

    if (!hasOwnProperty(params, 'Mapping')) {
      throw new TypeError('parameter "Mapping" is required');
    }

    return this.request('CreateSubscription', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. required.
   */
  deleteCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DeleteCluster', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} SlbServer - slbServer. required.
   */
  deleteHbaseSlbServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'SlbServer')) {
      throw new TypeError('parameter "SlbServer" is required');
    }

    return this.request('DeleteHbaseSlbServer', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. required.
   */
  describeBackupPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeBackupPolicy', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {Integer} BackupId - backupId. optional.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeBackups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeBackups', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. required.
   */
  describeClusterAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeClusterAttribute', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. required.
   */
  describeClusterConnectAddrs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeClusterConnectAddrs', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} ClusterName - clusterName. optional.
   * @param {RepeatList} StatusList - statusList. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   */
  describeClusterList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeClusterList', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. required.
   */
  describeClusterModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeClusterModel', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. required.
   */
  describeClusterWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeClusterWhiteList', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. required.
   */
  describeColdStorage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeColdStorage', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. required.
   */
  describeMultiModDbAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeMultiModDbAttribute', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional. default: cn-hangzhou.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} ZoneId - zoneId. optional.
   */
  describeRdsVSwitchs(params = {}, options = {}) {
    return this.request('DescribeRdsVSwitchs', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional. default: cn-hangzhou.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ZoneId - zoneId. optional.
   */
  describeRdsVpcs(params = {}, options = {}) {
    return this.request('DescribeRdsVpcs', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ZoneId - zoneId. optional.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ZoneId - zoneId. optional.
   */
  describeSubDomain(params = {}, options = {}) {
    return this.request('DescribeSubDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SubscriptionId - dataSubscriberId. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeSubscriptionInitializeProgress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubscriptionId')) {
      throw new TypeError('parameter "SubscriptionId" is required');
    }

    return this.request('DescribeSubscriptionInitializeProgress', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SubscriptionId - dataSubscriberId. required.
   * @param {String} SourceInstanceId - sourceInstanceId. required.
   * @param {String} Key - key. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeSubscriptionPerformance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubscriptionId')) {
      throw new TypeError('parameter "SubscriptionId" is required');
    }

    if (!hasOwnProperty(params, 'SourceInstanceId')) {
      throw new TypeError('parameter "SourceInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Key')) {
      throw new TypeError('parameter "Key" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeSubscriptionPerformance', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  describeSubscriptionPermission(params = {}, options = {}) {
    return this.request('DescribeSubscriptionPermission', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SubscriptionId - dataSubscriberId. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   */
  describeSubscriptions(params = {}, options = {}) {
    return this.request('DescribeSubscriptions', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   */
  listClusterServiceConfig(params = {}, options = {}) {
    return this.request('ListClusterServiceConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   */
  listClusterServiceConfigHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListClusterServiceConfigHistory', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} PreferredBackupTime - preferredBackupTime. required.
   * @param {String} PreferredBackupPeriod - preferredBackupPeriod. required.
   */
  modifyBackupPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'PreferredBackupTime')) {
      throw new TypeError('parameter "PreferredBackupTime" is required');
    }

    if (!hasOwnProperty(params, 'PreferredBackupPeriod')) {
      throw new TypeError('parameter "PreferredBackupPeriod" is required');
    }

    return this.request('ModifyBackupPolicy', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ClusterName - clusterName. required.
   */
  modifyClusterName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterName')) {
      throw new TypeError('parameter "ClusterName" is required');
    }

    return this.request('ModifyClusterName', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} NetType - netType. required.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   */
  modifyClusterNetType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'NetType')) {
      throw new TypeError('parameter "NetType" is required');
    }

    return this.request('ModifyClusterNetType', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} SecurityIpList - securityIpList. required.
   */
  modifyClusterSecurityIpList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityIpList')) {
      throw new TypeError('parameter "SecurityIpList" is required');
    }

    return this.request('ModifyClusterSecurityIpList', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {Boolean} Restart - restart. optional. default: false.
   * @param {String} Name - name. optional.
   * @param {String} Value - value. optional.
   * @param {String} Parameters - parameters. optional.
   */
  modifyClusterServiceConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ModifyClusterServiceConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HasPassword - hasPassword. required.
   */
  modifyHasRootPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'HasPassword')) {
      throw new TypeError('parameter "HasPassword" is required');
    }

    return this.request('ModifyHasRootPassword', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} Components - components. optional.
   */
  modifyRestartCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ModifyRestartCluster', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. required.
   */
  modifyRollbackHasForHbase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ModifyRollbackHasForHbase', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SubscriptionId - dataSubscriberId. required.
   * @param {String} SubscriptionDescription - dataSubscriberDescription. required.
   */
  modifySubscriptionDescription(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubscriptionId')) {
      throw new TypeError('parameter "SubscriptionId" is required');
    }

    if (!hasOwnProperty(params, 'SubscriptionDescription')) {
      throw new TypeError('parameter "SubscriptionDescription" is required');
    }

    return this.request('ModifySubscriptionDescription', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SubscriptionId - dataSubscriberId. required.
   * @param {String} Mapping - mapping. required.
   */
  modifySubscriptionMapping(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubscriptionId')) {
      throw new TypeError('parameter "SubscriptionId" is required');
    }

    if (!hasOwnProperty(params, 'Mapping')) {
      throw new TypeError('parameter "Mapping" is required');
    }

    return this.request('ModifySubscriptionMapping', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} Status - status. required.
   */
  modifySubscriptionPermission(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('ModifySubscriptionPermission', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} AccountPassword - accountPassword. required.
   */
  modifyUIProxyAccountPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'AccountPassword')) {
      throw new TypeError('parameter "AccountPassword" is required');
    }

    return this.request('ModifyUIProxyAccountPassword', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HasPassword - hasPassword. required.
   */
  modifyUpgradeToHasForHbase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'HasPassword')) {
      throw new TypeError('parameter "HasPassword" is required');
    }

    return this.request('ModifyUpgradeToHasForHbase', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} Components - components. required.
   */
  multimodAddComponents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Components')) {
      throw new TypeError('parameter "Components" is required');
    }

    return this.request('MultimodAddComponents', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. required.
   */
  openBackup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('OpenBackup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ZoneId - zoneId. optional.
   */
  querySparkRelateHBase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('QuerySparkRelateHBase', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} RelateDbType - relateDbType. required.
   */
  queryXpackRelatedDB(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'RelateDbType')) {
      throw new TypeError('parameter "RelateDbType" is required');
    }

    return this.request('QueryXpackRelatedDB', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClusterId - clusterId. required.
   */
  releasePublicNetworkAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ReleasePublicNetworkAddress', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SubscriptionId - dataSubscriberId. required.
   */
  releaseSubscription(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubscriptionId')) {
      throw new TypeError('parameter "SubscriptionId" is required');
    }

    return this.request('ReleaseSubscription', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. required.
   * @param {String} CoreInstanceType - coreInstanceType. required.
   * @param {String} CoreDiskType - coreDiskType. required.
   * @param {String} CoreDiskSize - coreDiskSize. required.
   * @param {String} CoreDiskQuantity - coreDiskQuantity. required.
   * @param {String} CoreInstanceQuantity - coreInstanceQuantity. required.
   * @param {String} PayType - payType. optional. default: PREPAY.
   * @param {String} IsColdStorage - isColdStorage. optional.
   * @param {String} ColdStorageSize - coldStorageSize. optional.
   * @param {String} Engine - engine. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} CloudType - cloudType. required.
   * @param {String} UpgradeType - upgradeType. required.
   */
  resizeCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    if (!hasOwnProperty(params, 'CoreInstanceType')) {
      throw new TypeError('parameter "CoreInstanceType" is required');
    }

    if (!hasOwnProperty(params, 'CoreDiskType')) {
      throw new TypeError('parameter "CoreDiskType" is required');
    }

    if (!hasOwnProperty(params, 'CoreDiskSize')) {
      throw new TypeError('parameter "CoreDiskSize" is required');
    }

    if (!hasOwnProperty(params, 'CoreDiskQuantity')) {
      throw new TypeError('parameter "CoreDiskQuantity" is required');
    }

    if (!hasOwnProperty(params, 'CoreInstanceQuantity')) {
      throw new TypeError('parameter "CoreInstanceQuantity" is required');
    }

    if (!hasOwnProperty(params, 'Engine')) {
      throw new TypeError('parameter "Engine" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'CloudType')) {
      throw new TypeError('parameter "CloudType" is required');
    }

    if (!hasOwnProperty(params, 'UpgradeType')) {
      throw new TypeError('parameter "UpgradeType" is required');
    }

    return this.request('ResizeCluster', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HBaseClusterIds - hbaseClusterIds. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ZoneId - zoneId. optional.
   */
  sparkRelateHBase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'HBaseClusterIds')) {
      throw new TypeError('parameter "HBaseClusterIds" is required');
    }

    return this.request('SparkRelateHBase', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UpgradeVersion - upgradeVersion. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} Components - components. optional.
   */
  upgradeMinorVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('UpgradeMinorVersion', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} DbClusterIds - dbClusterIds. required.
   * @param {String} RelateDbType - relateDbType. required.
   */
  xpackRelateDB(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'DbClusterIds')) {
      throw new TypeError('parameter "DbClusterIds" is required');
    }

    if (!hasOwnProperty(params, 'RelateDbType')) {
      throw new TypeError('parameter "RelateDbType" is required');
    }

    return this.request('XpackRelateDB', params, options);
  }

}

module.exports = Client;

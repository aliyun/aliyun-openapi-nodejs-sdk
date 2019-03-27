
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-12-01';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} NodeId - nodeId. optional.
   */
  allocatePublicNetworkAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('AllocatePublicNetworkAddress', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} SourceDBInstance - sourceDBInstanceName. required.
   * @param {String} DatabaseNames - databaseNames. optional.
   * @param {String} RestoreTime - restoreTime. optional.
   * @param {String} BackupId - backupSetId. optional.
   */
  checkRecoveryCondition(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceDBInstance')) {
      throw new TypeError('parameter "SourceDBInstance" is required');
    }

    return this.request('CheckRecoveryCondition', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} AccountPassword - accountPassword. required.
   * @param {String} AccountDescription - accountDescription. optional.
   */
  createAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'AccountPassword')) {
      throw new TypeError('parameter "AccountPassword" is required');
    }

    return this.request('CreateAccount', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} BackupMethod - backupMethod. optional. default: Physical.
   */
  createBackup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('CreateBackup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClientToken - token. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} Engine - engine. required.
   * @param {String} EngineVersion - engineVersion. required.
   * @param {String} DBInstanceClass - dbInstanceClass. required.
   * @param {Integer} DBInstanceStorage - dbInstanceStorage. required.
   * @param {String} DBInstanceDescription - dbInstanceDescription. optional.
   * @param {String} SecurityIPList - securityIPList. optional.
   * @param {String} AccountPassword - accountPassword. optional.
   * @param {String} ChargeType - chargeType. optional. default: PostPaid.
   * @param {Integer} Period - period. optional.
   * @param {String} NetworkType - networkType. optional. default: Classic.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} SrcDBInstanceId - srcDbInstanceId. optional.
   * @param {String} BackupId - backupId. optional.
   * @param {String} RestoreTime - restoreTime. optional.
   * @param {String} BusinessInfo - businessInfo. optional.
   * @param {String} AutoRenew - autoRenew. optional.
   * @param {String} DatabaseNames - databaseNames. optional.
   * @param {String} CouponNo - couponNo. optional. default: youhuiquan_promotion_option_id_for_blank.
   * @param {String} StorageEngine - storageEngine. optional. default: WiredTiger.
   * @param {String} ReplicationFactor - replicationFactor. optional. default: 3.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  createDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'Engine')) {
      throw new TypeError('parameter "Engine" is required');
    }

    if (!hasOwnProperty(params, 'EngineVersion')) {
      throw new TypeError('parameter "EngineVersion" is required');
    }

    if (!hasOwnProperty(params, 'DBInstanceClass')) {
      throw new TypeError('parameter "DBInstanceClass" is required');
    }

    if (!hasOwnProperty(params, 'DBInstanceStorage')) {
      throw new TypeError('parameter "DBInstanceStorage" is required');
    }

    return this.request('CreateDBInstance', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} SourceDBInstanceId - srcDbInstanceId. required.
   * @param {String} DBInstanceDescription - dbInstanceDescription. optional.
   * @param {String} ReplicaDescription - replicaDescription. optional.
   * @param {String} SecurityIPList - securityIPList. optional.
   * @param {String} AccountPassword - accountPassword. optional.
   * @param {String} ChargeType - chargeType. optional. default: PostPaid.
   * @param {Integer} Period - period. optional.
   * @param {String} NetworkType - networkType. optional. default: Classic.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {Boolean} AutoPay - autoPay. optional. default: true.
   * @param {String} ClientToken - token. optional.
   */
  createDBInstanceReplica(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceDBInstanceId')) {
      throw new TypeError('parameter "SourceDBInstanceId" is required');
    }

    return this.request('CreateDBInstanceReplica', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} BusinessInfo - businessInfo. optional.
   * @param {String} CouponNo - couponNo. optional. default: youhuiquan_promotion_option_id_for_blank.
   * @param {String} DBInstances - commodities. required.
   * @param {String} ClientToken - token. optional.
   * @param {Boolean} AutoPay - autoPay. optional. default: true.
   * @param {String} AgentId - agentId. optional.
   * @param {Boolean} RebuildInstance - rebuildInstance. optional. default: false.
   * @param {String} AutoRenew - autoRenew. optional.
   */
  createDBInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstances')) {
      throw new TypeError('parameter "DBInstances" is required');
    }

    return this.request('CreateDBInstances', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} NodeClass - nodeClass. required.
   * @param {Integer} NodeStorage - nodeStorage. optional.
   * @param {String} NodeType - nodeType. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} FromApp - fromApp. optional. default: OpenApi.
   * @param {Boolean} AutoPay - autoPay. optional. default: true.
   */
  createNode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'NodeClass')) {
      throw new TypeError('parameter "NodeClass" is required');
    }

    if (!hasOwnProperty(params, 'NodeType')) {
      throw new TypeError('parameter "NodeType" is required');
    }

    return this.request('CreateNode', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - dbInstanceId. required.
   * @param {String} NodeId - nodeId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  createRecommendationTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('CreateRecommendationTask', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} Engine - engine. required.
   * @param {String} EngineVersion - engineVersion. required.
   * @param {RepeatList} Mongos - mongos. optional.
   * @param {RepeatList} ReplicaSet - shards. optional.
   * @param {RepeatList} ConfigServer - configServers. optional.
   * @param {String} DBInstanceDescription - dbInstanceDescription. optional.
   * @param {String} SecurityIPList - securityIPList. optional.
   * @param {String} AccountPassword - accountPassword. required.
   * @param {String} ChargeType - chargeType. optional. default: PostPaid.
   * @param {Integer} Period - period. optional.
   * @param {String} NetworkType - networkType. optional. default: Classic.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} SrcDBInstanceId - srcDbInstanceId. optional.
   * @param {String} RestoreTime - restoreTime. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} StorageEngine - storageEngine. optional. default: WiredTiger.
   * @param {String} AutoRenew - autoRenew. optional.
   */
  createShardingDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Engine')) {
      throw new TypeError('parameter "Engine" is required');
    }

    if (!hasOwnProperty(params, 'EngineVersion')) {
      throw new TypeError('parameter "EngineVersion" is required');
    }

    if (!hasOwnProperty(params, 'AccountPassword')) {
      throw new TypeError('parameter "AccountPassword" is required');
    }

    return this.request('CreateShardingDBInstance', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstances - commodities. required.
   * @param {String} ClientToken - token. optional.
   * @param {Boolean} AutoPay - autoPay. optional. default: true.
   * @param {String} AgentId - agentId. optional.
   * @param {String} ChargeType - chargeType. optional. default: PostPaid.
   * @param {Boolean} RebuildInstance - rebuildInstance. optional. default: false.
   * @param {String} AutoRenew - autoRenew. optional.
   * @param {String} BusinessInfo - businessInfo. optional.
   */
  createShardingDBInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstances')) {
      throw new TypeError('parameter "DBInstances" is required');
    }

    return this.request('CreateShardingDBInstances', params, options);
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
   * @param {String} ReplicaId - replicaId. required.
   * @param {String} SourceInstanceId - sourceInstanceId. required.
   * @param {String} DestinationInstanceId - destinationInstanceId. required.
   */
  createStaticVerification(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReplicaId')) {
      throw new TypeError('parameter "ReplicaId" is required');
    }

    if (!hasOwnProperty(params, 'SourceInstanceId')) {
      throw new TypeError('parameter "SourceInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DestinationInstanceId')) {
      throw new TypeError('parameter "DestinationInstanceId" is required');
    }

    return this.request('CreateStaticVerification', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ClientToken - token. optional.
   */
  deleteDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DeleteDBInstance', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} NodeId - nodeId. required.
   * @param {String} ClientToken - token. optional.
   */
  deleteNode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'NodeId')) {
      throw new TypeError('parameter "NodeId" is required');
    }

    return this.request('DeleteNode', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} AccountName - accountName. optional.
   */
  describeAccounts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeAccounts', params, options);
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
   * @param {String} Region - region. required.
   * @param {String} TaskType - taskType. required.
   * @param {Integer} IsHistory - isHistory. optional.
   * @param {Integer} PageSize - maxRecordsPerPage. optional. default: 30.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   */
  describeActiveOperationTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'TaskType')) {
      throw new TypeError('parameter "TaskType" is required');
    }

    return this.request('DescribeActiveOperationTask', params, options);
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
   */
  describeActiveOperationTaskCount(params = {}, options = {}) {
    return this.request('DescribeActiveOperationTaskCount', params, options);
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
   * @param {String} TaskType - taskType. required.
   * @param {Integer} IsHistory - isHistory. optional.
   */
  describeActiveOperationTaskRegion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskType')) {
      throw new TypeError('parameter "TaskType" is required');
    }

    return this.request('DescribeActiveOperationTaskRegion', params, options);
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
   * @param {Integer} IsHistory - isHistory. optional.
   */
  describeActiveOperationTaskType(params = {}, options = {}) {
    return this.request('DescribeActiveOperationTaskType', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} NodeId - nodeId. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   */
  describeAuditFiles(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeAuditFiles', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} RoleType - roleType. optional.
   */
  describeAuditLogFilter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeAuditLogFilter', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  describeAuditPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeAuditPolicy', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} NodeId - nodeId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Database - database. optional.
   * @param {String} User - user. optional.
   * @param {String} Form - form. optional. default: Stream.
   * @param {String} QueryKeywords - queryKeywords. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   */
  describeAuditRecords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeAuditRecords', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  describeAvailableEngineVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeAvailableEngineVersion', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - dbInstanceId. required.
   * @param {String} NodeId - nodeId. optional.
   */
  describeAvailableTimeRange(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeAvailableTimeRange', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - dbInstanceId. required.
   * @param {String} NodeId - nodeId. optional.
   */
  describeAvaliableTimeRange(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeAvaliableTimeRange', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {String} SourceDBInstance - sourceDBInstance. required.
   * @param {String} RestoreTime - restoreTime. optional.
   * @param {String} BackupId - backupId. optional.
   */
  describeBackupDBs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceDBInstance')) {
      throw new TypeError('parameter "SourceDBInstance" is required');
    }

    return this.request('DescribeBackupDBs', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  describeBackupPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeBackupPolicy', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} NodeId - nodeId. optional.
   * @param {String} BackupId - backupId. optional.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeBackups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeBackups', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} CommodityCode - commodityCode. optional.
   * @param {String} ProductCode - productCode. optional. default: dds.
   * @param {String} ChargeType - chargeType. optional. default: PostPaid.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {String} NodeId - nodeId. optional.
   * @param {String} OrderType - orderType. required.
   */
  describeCommodity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderType')) {
      throw new TypeError('parameter "OrderType" is required');
    }

    return this.request('DescribeCommodity', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Engine - engine. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  describeDBInstanceAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeDBInstanceAttribute', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  describeDBInstanceMonitor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeDBInstanceMonitor', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} NodeId - nodeId. optional.
   * @param {String} Key - performanceKeys. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} RoleId - roleId. optional.
   * @param {String} ReplicaSetRole - replicaSetRole. optional. default: Primary.
   */
  describeDBInstancePerformance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
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

    return this.request('DescribeDBInstancePerformance', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  describeDBInstanceSSL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeDBInstanceSSL', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {String} ReplicationFactor - replicationFactor. optional.
   * @param {String} DBInstanceDescription - dbInstanceDescription. optional.
   * @param {String} ExpireTime - expireTime. optional.
   * @param {String} DBInstanceStatus - dbInstanceStatus. optional.
   * @param {String} DBInstanceType - instanceType. optional. default: replicate.
   * @param {String} DBInstanceClass - dbInstanceClass. optional.
   * @param {String} Engine - engine. optional.
   * @param {String} EngineVersion - engineVersion. optional.
   * @param {String} NetworkType - networkType. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} ChargeType - chargeType. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} Expired - expired. optional.
   * @param {RepeatList} Tag - tags. optional.
   */
  describeDBInstances(params = {}, options = {}) {
    return this.request('DescribeDBInstances', params, options);
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
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} NodeId - nodeId. optional.
   * @param {Long} SQLId - sqlId. optional.
   * @param {String} RoleType - roleType. optional. default: primary.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} DBName - dbName. optional.
   * @param {Integer} PageSize - maxRecordsPerPage. optional. default: 30.
   * @param {Integer} PageNumber - pageNumbers. optional. default: 1.
   */
  describeErrorLogRecords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeErrorLogRecords', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - dbInstanceId. required.
   * @param {String} TaskId - taskId. optional.
   * @param {String} NodeId - nodeId. optional.
   * @param {String} Database - database. optional.
   * @param {String} Collection - collection. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} OperationType - operationType. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   */
  describeIndexRecommendation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeIndexRecommendation', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {String} DBInstanceType - dbInstanceType. optional.
   * @param {String} PageSize - pageSize. optional. default: 30.
   * @param {String} PageNumber - pageNumber. optional. default: 1.
   */
  describeInstanceAutoRenewalAttribute(params = {}, options = {}) {
    return this.request('DescribeInstanceAutoRenewalAttribute', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} KernelVersion - kernelVersion. optional.
   */
  describeKernelReleaseNotes(params = {}, options = {}) {
    return this.request('DescribeKernelReleaseNotes', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} NodeId - nodeId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeParameterModificationHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeParameterModificationHistory', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Engine - engine. required.
   * @param {String} EngineVersion - engineVersion. required.
   */
  describeParameterTemplates(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Engine')) {
      throw new TypeError('parameter "Engine" is required');
    }

    if (!hasOwnProperty(params, 'EngineVersion')) {
      throw new TypeError('parameter "EngineVersion" is required');
    }

    return this.request('DescribeParameterTemplates', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} NodeId - nodeId. optional.
   */
  describeParameters(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeParameters', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} OrderType - orderType. required.
   * @param {String} DBInstances - commodities. required.
   * @param {String} CommodityCode - commodityCode. optional.
   * @param {String} ProductCode - productCode. optional. default: dds.
   * @param {String} BusinessInfo - businessInfo. optional.
   * @param {String} CouponNo - couponNo. optional. default: youhuiquan_promotion_option_id_for_blank.
   * @param {String} OrderParamOut - showOrderResponse. optional. default: false.
   */
  describePrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderType')) {
      throw new TypeError('parameter "OrderType" is required');
    }

    if (!hasOwnProperty(params, 'DBInstances')) {
      throw new TypeError('parameter "DBInstances" is required');
    }

    return this.request('DescribePrice', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} Operation - operation. required.
   */
  describeQualifications(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Operation')) {
      throw new TypeError('parameter "Operation" is required');
    }

    return this.request('DescribeQualifications', params, options);
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
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ZoneId - zoneId. optional.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} BusinessInfo - businessInfo. optional.
   * @param {String} CouponNo - couponNo. optional. default: youhuiquan_promotion_option_id_for_blank.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  describeRenewalPrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeRenewalPrice', params, options);
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
   * @param {String} ReplicaId - replicaId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeReplicaConflictInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReplicaId')) {
      throw new TypeError('parameter "ReplicaId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeReplicaConflictInfo', params, options);
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
   * @param {String} ReplicaId - replicaId. optional.
   */
  describeReplicaInitializeProgress(params = {}, options = {}) {
    return this.request('DescribeReplicaInitializeProgress', params, options);
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
   * @param {String} ReplicaId - replicaId. required.
   * @param {String} SourceDBInstanceId - sourceDBInstanceId. required.
   * @param {String} DestinationDBInstanceId - destinationDBInstanceId. optional.
   * @param {String} Key - key. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeReplicaPerformance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReplicaId')) {
      throw new TypeError('parameter "ReplicaId" is required');
    }

    if (!hasOwnProperty(params, 'SourceDBInstanceId')) {
      throw new TypeError('parameter "SourceDBInstanceId" is required');
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

    return this.request('DescribeReplicaPerformance', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  describeReplicaSetRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeReplicaSetRole', params, options);
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
   * @param {String} ReplicaId - replicaId. required.
   * @param {String} SourceDBInstanceId - sourceDBInstanceId. required.
   * @param {String} DestinationDBInstanceId - destinationDBInstanceId. optional.
   */
  describeReplicaUsage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReplicaId')) {
      throw new TypeError('parameter "ReplicaId" is required');
    }

    if (!hasOwnProperty(params, 'SourceDBInstanceId')) {
      throw new TypeError('parameter "SourceDBInstanceId" is required');
    }

    return this.request('DescribeReplicaUsage', params, options);
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
   * @param {String} ReplicaId - replicaId. optional.
   * @param {Boolean} AttachDbInstanceData - attachDbInstanceData. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   */
  describeReplicas(params = {}, options = {}) {
    return this.request('DescribeReplicas', params, options);
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
   * @param {String} ReplicationGroupId - replicationGroupId. required.
   * @param {String} SourceInstanceId - sourceInstanceId. required.
   * @param {String} DestinationInstanceIds - destinationInstanceIds. optional.
   */
  describeReplicationGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReplicationGroupId')) {
      throw new TypeError('parameter "ReplicationGroupId" is required');
    }

    if (!hasOwnProperty(params, 'SourceInstanceId')) {
      throw new TypeError('parameter "SourceInstanceId" is required');
    }

    return this.request('DescribeReplicationGroup', params, options);
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
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} NodeId - nodeId. optional.
   * @param {Long} SQLId - sqlId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} DBName - dbName. optional.
   * @param {String} RoleType - roleType. optional. default: primary.
   * @param {Integer} PageSize - maxRecordsPerPage. optional. default: 30.
   * @param {Integer} PageNumber - pageNumbers. optional. default: 1.
   */
  describeRunningLogRecords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeRunningLogRecords', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  describeSecurityIps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeSecurityIps', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} Engine - engine. optional.
   * @param {String} EngineVersion - engineVersion. optional.
   * @param {String} EvaluateType - evaluateType. required.
   * @param {RepeatList} Mongos - mongos. optional.
   * @param {RepeatList} ReplicaSet - shards. optional.
   * @param {RepeatList} ConfigServer - configServers. optional.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {String} NodeId - nodeId. optional.
   * @param {String} NodeClass - nodeClass. optional.
   * @param {Integer} NodeStorage - nodeStorage. optional.
   */
  describeShardingAvailability(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EvaluateType')) {
      throw new TypeError('parameter "EvaluateType" is required');
    }

    return this.request('DescribeShardingAvailability', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} NodeId - nodeId. optional.
   */
  describeShardingNetworkAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeShardingNetworkAddress', params, options);
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
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} NodeId - nodeId. optional.
   * @param {Long} SQLId - sqlId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} DBName - dbName. optional.
   * @param {Integer} PageSize - maxRecordsPerPage. optional. default: 30.
   * @param {Integer} PageNumber - pageNumbers. optional. default: 1.
   */
  describeSlowLogRecords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeSlowLogRecords', params, options);
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
   * @param {String} ReplicaId - replicaId. required.
   * @param {String} SourceInstanceId - sourceInstanceId. required.
   * @param {String} DestinationInstanceId - destinationInstanceId. required.
   */
  describeStaticVerificationList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReplicaId')) {
      throw new TypeError('parameter "ReplicaId" is required');
    }

    if (!hasOwnProperty(params, 'SourceInstanceId')) {
      throw new TypeError('parameter "SourceInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DestinationInstanceId')) {
      throw new TypeError('parameter "DestinationInstanceId" is required');
    }

    return this.request('DescribeStaticVerificationList', params, options);
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
   * @param {String} ReplicaId - replicaId. required.
   */
  describeStrategy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReplicaId')) {
      throw new TypeError('parameter "ReplicaId" is required');
    }

    return this.request('DescribeStrategy', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   */
  describeUserInfo(params = {}, options = {}) {
    return this.request('DescribeUserInfo', params, options);
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
   * @param {String} ReplicaId - replicaId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeVerificationList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReplicaId')) {
      throw new TypeError('parameter "ReplicaId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeVerificationList', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceId - dbInstanceId. optional.
   * @param {String} DBInstanceId - newInstanceId. optional.
   * @param {String} ClientToken - token. optional.
   */
  destroyInstance(params = {}, options = {}) {
    return this.request('DestroyInstance', params, options);
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
   * @param {String} ReplicaId - replicaId. required.
   */
  evaluateFailOverSwitch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReplicaId')) {
      throw new TypeError('parameter "ReplicaId" is required');
    }

    return this.request('EvaluateFailOverSwitch', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {RepeatList} ResourceId - resourceIds. optional.
   * @param {RepeatList} Tag - tags. optional.
   * @param {String} NextToken - nextToken. optional.
   */
  listTagResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    return this.request('ListTagResources', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} LockReason - lockReason. optional.
   */
  lockDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('LockDBInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - dbInstanceId. required.
   * @param {String} ZoneId - avz. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} EffectiveTime - effectiveTime. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   */
  migrateToOtherZone(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    return this.request('MigrateToOtherZone', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} AccountDescription - accountDescription. required.
   */
  modifyAccountDescription(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'AccountDescription')) {
      throw new TypeError('parameter "AccountDescription" is required');
    }

    return this.request('ModifyAccountDescription', params, options);
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
   * @param {String} Ids - ids. required.
   * @param {String} SwitchTime - switchTime. required.
   */
  modifyActiveOperationTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    if (!hasOwnProperty(params, 'SwitchTime')) {
      throw new TypeError('parameter "SwitchTime" is required');
    }

    return this.request('ModifyActiveOperationTask', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} Filter - filter. required.
   * @param {String} RoleType - roleType. optional.
   */
  modifyAuditLogFilter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Filter')) {
      throw new TypeError('parameter "Filter" is required');
    }

    return this.request('ModifyAuditLogFilter', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} AuditStatus - auditStatus. required.
   * @param {Integer} StoragePeriod - storagePeriod. optional. default: 30.
   */
  modifyAuditPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AuditStatus')) {
      throw new TypeError('parameter "AuditStatus" is required');
    }

    return this.request('ModifyAuditPolicy', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} PreferredBackupTime - preferredBackupTime. required.
   * @param {String} PreferredBackupPeriod - preferredBackupPeriod. required.
   */
  modifyBackupPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
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
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} NodeId - nodeId. optional.
   * @param {String} CurrentConnectionString - currentConnectionString. required.
   * @param {String} NewConnectionString - newConnectionString. required.
   */
  modifyDBInstanceConnectionString(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentConnectionString')) {
      throw new TypeError('parameter "CurrentConnectionString" is required');
    }

    if (!hasOwnProperty(params, 'NewConnectionString')) {
      throw new TypeError('parameter "NewConnectionString" is required');
    }

    return this.request('ModifyDBInstanceConnectionString', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} NodeId - nodeId. optional.
   * @param {String} DBInstanceDescription - dbInstanceDescription. required.
   */
  modifyDBInstanceDescription(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBInstanceDescription')) {
      throw new TypeError('parameter "DBInstanceDescription" is required');
    }

    return this.request('ModifyDBInstanceDescription', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} MaintainStartTime - startTime. required.
   * @param {String} MaintainEndTime - endTime. required.
   */
  modifyDBInstanceMaintainTime(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'MaintainStartTime')) {
      throw new TypeError('parameter "MaintainStartTime" is required');
    }

    if (!hasOwnProperty(params, 'MaintainEndTime')) {
      throw new TypeError('parameter "MaintainEndTime" is required');
    }

    return this.request('ModifyDBInstanceMaintainTime', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} Granularity - granularity. required.
   */
  modifyDBInstanceMonitor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Granularity')) {
      throw new TypeError('parameter "Granularity" is required');
    }

    return this.request('ModifyDBInstanceMonitor', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ConnectionString - connectionString. optional.
   * @param {Integer} ClassicExpendExpiredDays - classicExpendExpiredDays. required.
   */
  modifyDBInstanceNetExpireTime(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ClassicExpendExpiredDays')) {
      throw new TypeError('parameter "ClassicExpendExpiredDays" is required');
    }

    return this.request('ModifyDBInstanceNetExpireTime', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} NetworkType - networkType. required.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} RetainClassic - retainClassic. optional. default: False.
   * @param {Integer} ClassicExpiredDays - classicExpiredDays. optional.
   */
  modifyDBInstanceNetworkType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'NetworkType')) {
      throw new TypeError('parameter "NetworkType" is required');
    }

    return this.request('ModifyDBInstanceNetworkType', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} SSLAction - sslEnabled. required.
   */
  modifyDBInstanceSSL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SSLAction')) {
      throw new TypeError('parameter "SSLAction" is required');
    }

    return this.request('ModifyDBInstanceSSL', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} DBInstanceClass - dbInstanceClass. optional.
   * @param {String} DBInstanceStorage - dbInstanceStorage. optional.
   * @param {String} OrderType - orderType. optional. default: UPGRADE.
   * @param {Boolean} AutoPay - autoPay. optional. default: true.
   * @param {String} FromApp - fromApp. optional. default: OpenApi.
   * @param {String} BusinessInfo - businessInfo. optional.
   * @param {String} ReplicationFactor - replicationFactor. optional. default: 3.
   * @param {String} CouponNo - couponNo. optional. default: youhuiquan_promotion_option_id_for_blank.
   * @param {String} EffectiveTime - switchTimeMode. optional. default: 0.
   */
  modifyDBInstanceSpec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('ModifyDBInstanceSpec', params, options);
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
   * @param {String} ReplicaId - replicaId. required.
   * @param {String} DomainMode - domainMode. required.
   */
  modifyGuardDomainMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReplicaId')) {
      throw new TypeError('parameter "ReplicaId" is required');
    }

    if (!hasOwnProperty(params, 'DomainMode')) {
      throw new TypeError('parameter "DomainMode" is required');
    }

    return this.request('ModifyGuardDomainMode', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} Duration - duration. optional.
   * @param {String} AutoRenew - autoRenew. required.
   */
  modifyInstanceAutoRenewalAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AutoRenew')) {
      throw new TypeError('parameter "AutoRenew" is required');
    }

    return this.request('ModifyInstanceAutoRenewalAttribute', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} NodeId - nodeId. required.
   * @param {String} NodeClass - nodeClass. optional.
   * @param {Integer} NodeStorage - nodeStorage. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} FromApp - fromApp. optional. default: OpenApi.
   * @param {Boolean} AutoPay - autoPay. optional. default: true.
   * @param {String} EffectiveTime - switchTimeMode. optional. default: Immediately.
   */
  modifyNodeSpec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'NodeId')) {
      throw new TypeError('parameter "NodeId" is required');
    }

    return this.request('ModifyNodeSpec', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} NodeId - nodeId. optional.
   * @param {String} Parameters - parameters. required.
   */
  modifyParameters(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Parameters')) {
      throw new TypeError('parameter "Parameters" is required');
    }

    return this.request('ModifyParameters', params, options);
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
   * @param {String} ReplicaId - replicaId. required.
   * @param {String} ReplicaDescription - replicaDescription. required.
   */
  modifyReplicaDescription(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReplicaId')) {
      throw new TypeError('parameter "ReplicaId" is required');
    }

    if (!hasOwnProperty(params, 'ReplicaDescription')) {
      throw new TypeError('parameter "ReplicaDescription" is required');
    }

    return this.request('ModifyReplicaDescription', params, options);
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
   * @param {String} ReplicaId - replicaId. required.
   * @param {String} ReplicaMode - replicaMode. required.
   * @param {String} PrimaryInstanceId - primaryInstanceId. optional.
   * @param {String} DomainMode - domainMode. optional.
   */
  modifyReplicaMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReplicaId')) {
      throw new TypeError('parameter "ReplicaId" is required');
    }

    if (!hasOwnProperty(params, 'ReplicaMode')) {
      throw new TypeError('parameter "ReplicaMode" is required');
    }

    return this.request('ModifyReplicaMode', params, options);
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
   * @param {String} ReplicaId - replicaId. required.
   * @param {String} RecoveryMode - recoveryMode. required.
   */
  modifyReplicaRecoveryMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReplicaId')) {
      throw new TypeError('parameter "ReplicaId" is required');
    }

    if (!hasOwnProperty(params, 'RecoveryMode')) {
      throw new TypeError('parameter "RecoveryMode" is required');
    }

    return this.request('ModifyReplicaRecoveryMode', params, options);
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
   * @param {String} ReplicaId - replicaId. required.
   */
  modifyReplicaRelation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReplicaId')) {
      throw new TypeError('parameter "ReplicaId" is required');
    }

    return this.request('ModifyReplicaRelation', params, options);
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
   * @param {String} ReplicaId - replicaId. required.
   * @param {String} VerificationMode - verificationMode. required.
   */
  modifyReplicaVerificationMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReplicaId')) {
      throw new TypeError('parameter "ReplicaId" is required');
    }

    if (!hasOwnProperty(params, 'VerificationMode')) {
      throw new TypeError('parameter "VerificationMode" is required');
    }

    return this.request('ModifyReplicaVerificationMode', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} SecurityIps - securityIps. required.
   * @param {String} ModifyMode - modifyMode. optional. default: 0.
   * @param {String} SecurityIpGroupName - groupName. optional.
   * @param {String} SecurityIpGroupAttribute - groupAttribute. optional.
   */
  modifySecurityIps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityIps')) {
      throw new TypeError('parameter "SecurityIps" is required');
    }

    return this.request('ModifySecurityIps', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} NodeId - nodeId. optional.
   */
  releasePublicNetworkAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('ReleasePublicNetworkAddress', params, options);
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
   * @param {String} ReplicaId - replicaId. required.
   */
  releaseReplica(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReplicaId')) {
      throw new TypeError('parameter "ReplicaId" is required');
    }

    return this.request('ReleaseReplica', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {Integer} Period - period. optional.
   * @param {Boolean} AutoPay - autoPay. optional. default: true.
   * @param {String} BusinessInfo - businessInfo. optional.
   * @param {String} CouponNo - couponNo. optional. default: youhuiquan_promotion_option_id_for_blank.
   */
  renewDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('RenewDBInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} AccountPassword - accountNewPassword. required.
   */
  resetAccountPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'AccountPassword')) {
      throw new TypeError('parameter "AccountPassword" is required');
    }

    return this.request('ResetAccountPassword', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} NodeId - nodeId. optional.
   */
  restartDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('RestartDBInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {Integer} BackupId - backupId. required.
   */
  restoreDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'BackupId')) {
      throw new TypeError('parameter "BackupId" is required');
    }

    return this.request('RestoreDBInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  sample(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('Sample', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} QueryKeywords - queryKeywords. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} Database - database. optional.
   * @param {String} User - user. optional.
   * @param {String} EndTime - endTime. required.
   */
  startArchiveSQLLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('StartArchiveSQLLog', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} NodeId - nodeId. optional.
   * @param {Integer} SwitchType - switchType. optional. default: 0.
   * @param {Integer} TargetInstanceId - targetInstanceId. optional.
   * @param {Integer} SourceInstanceId - sourceInstanceId. optional.
   */
  switchDBInstanceHA(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('SwitchDBInstanceHA', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} NodeId - nodeId. optional.
   * @param {Integer} SwitchType - switchType. optional. default: 0.
   * @param {Integer} TargetInstanceId - targetInstanceId. optional.
   * @param {Integer} SourceInstanceId - sourceInstanceId. optional.
   */
  swithcDBInstanceHA(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('SwithcDBInstanceHA', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {RepeatList} ResourceId - resourceIds. required.
   * @param {RepeatList} Tag - tags. required.
   */
  tagResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'Tag')) {
      throw new TypeError('parameter "Tag" is required');
    }

    return this.request('TagResources', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} Period - period. required.
   * @param {Boolean} AutoPay - autoPay. optional. default: true.
   * @param {String} FromApp - fromApp. optional. default: OpenApi.
   * @param {String} BusinessInfo - businessInfo. optional.
   * @param {String} AutoRenew - autoRenew. optional.
   * @param {String} CouponNo - couponNo. optional.
   */
  transformToPrePaid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    return this.request('TransformToPrePaid', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  unlockDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('UnlockDBInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {RepeatList} ResourceId - resourceIds. required.
   * @param {RepeatList} TagKey - tagKeys. optional.
   * @param {Boolean} All - all. optional. default: false.
   */
  untagResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    return this.request('UntagResources', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} EngineVersion - engineVersion. required.
   */
  upgradeDBInstanceEngineVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'EngineVersion')) {
      throw new TypeError('parameter "EngineVersion" is required');
    }

    return this.request('UpgradeDBInstanceEngineVersion', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   */
  upgradeDBInstanceKernelVersion(params = {}, options = {}) {
    return this.request('UpgradeDBInstanceKernelVersion', params, options);
  }

}

module.exports = Client;

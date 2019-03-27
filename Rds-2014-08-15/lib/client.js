
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2014-08-15';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} BusinessUnit - bu. required.
   */
  addBuDBInstanceRelation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'BusinessUnit')) {
      throw new TypeError('parameter "BusinessUnit" is required');
    }

    return this.request('AddBuDBInstanceRelation', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} Tags - tags. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Tag} Tag - undefined. optional.
   */
  addTagsToResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('AddTagsToResource', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} RetainClassic - retainClassic. optional. default: False.
   * @param {String} ClassicExpiredDays - classicExpiredDays. optional.
   * @param {String} InstanceNetworkType - instanceNetworkType. optional.
   */
  allocateClassicNetworkType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('AllocateClassicNetworkType', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  allocateCloudInstanceIp(params = {}, options = {}) {
    return this.request('AllocateCloudInstanceIp', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ConnectionStringPrefix - connectionStringPrefix. required.
   * @param {String} Port - port. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  allocateInstancePrivateConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConnectionStringPrefix')) {
      throw new TypeError('parameter "ConnectionStringPrefix" is required');
    }

    if (!hasOwnProperty(params, 'Port')) {
      throw new TypeError('parameter "Port" is required');
    }

    return this.request('AllocateInstancePrivateConnection', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ConnectionStringPrefix - connectionStringPrefix. required.
   * @param {String} Port - port. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  allocateInstancePublicConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConnectionStringPrefix')) {
      throw new TypeError('parameter "ConnectionStringPrefix" is required');
    }

    if (!hasOwnProperty(params, 'Port')) {
      throw new TypeError('parameter "Port" is required');
    }

    return this.request('AllocateInstancePublicConnection', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} TargetRegionId - targetRegionId. required.
   * @param {String} TargetZoneId - targetZoneId. required.
   * @param {String} TargetVpcId - targetVpcId. required.
   * @param {String} TargetVSwitchId - targetVSwitchId. required.
   */
  allocateInstanceVpcNetworkType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'TargetRegionId')) {
      throw new TypeError('parameter "TargetRegionId" is required');
    }

    if (!hasOwnProperty(params, 'TargetZoneId')) {
      throw new TypeError('parameter "TargetZoneId" is required');
    }

    if (!hasOwnProperty(params, 'TargetVpcId')) {
      throw new TypeError('parameter "TargetVpcId" is required');
    }

    if (!hasOwnProperty(params, 'TargetVSwitchId')) {
      throw new TypeError('parameter "TargetVSwitchId" is required');
    }

    return this.request('AllocateInstanceVpcNetworkType', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ConnectionStringPrefix - connectionString. optional.
   * @param {String} Port - port. optional.
   * @param {String} MaxDelayTime - maxDelayTime. optional.
   * @param {String} NetType - dbInstanceNetType. optional. default: 0.
   * @param {String} DistributionType - distributionType. optional. default: 0.
   * @param {String} Weight - weight. optional.
   */
  allocateReadWriteSplittingConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('AllocateReadWriteSplittingConnection', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} DBName - dbName. required.
   * @param {String} AccountPrivilege - accountPrivilege. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  batchGrantAccountPrivilege(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    if (!hasOwnProperty(params, 'AccountPrivilege')) {
      throw new TypeError('parameter "AccountPrivilege" is required');
    }

    return this.request('BatchGrantAccountPrivilege', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} DBName - dbName. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  batchRevokeAccountPrivilege(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    return this.request('BatchRevokeAccountPrivilege', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  calculateDBInstanceWeight(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('CalculateDBInstanceWeight', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {Integer} ImportId - taskId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  cancelImport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ImportId')) {
      throw new TypeError('parameter "ImportId" is required');
    }

    return this.request('CancelImport', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  checkAccountNameAvailable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    return this.request('CheckAccountNameAvailable', params, options);
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
  checkCloudResourceAuthorized(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('CheckCloudResourceAuthorized', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  checkDBInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('CheckDBInstances', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} DBName - dbName. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  checkDBNameAvailable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    return this.request('CheckDBNameAvailable', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  checkInstanceExist(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('CheckInstanceExist', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  checkInstanceExsit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('CheckInstanceExsit', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceName. required.
   * @param {String} BackupId - backupId. optional.
   * @param {String} BackupFile - backupFile. optional.
   * @param {String} RestoreTime - restoreTime. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  checkRecoveryConditions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('CheckRecoveryConditions', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Engine - engine. required.
   * @param {String} DBInstanceId - dbInstanceName. optional.
   * @param {String} EngineVersion - engineVersion. required.
   * @param {String} DBInstanceClass - dbInstanceClass. required.
   * @param {String} ZoneId - zoneId. required.
   * @param {String} DBInstanceUseType - dbInstanceUseType. optional. default: 0.
   * @param {String} SpecifyCount - specifyCount. optional. default: 1.
   * @param {String} RegionId - region. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  checkResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Engine')) {
      throw new TypeError('parameter "Engine" is required');
    }

    if (!hasOwnProperty(params, 'EngineVersion')) {
      throw new TypeError('parameter "EngineVersion" is required');
    }

    if (!hasOwnProperty(params, 'DBInstanceClass')) {
      throw new TypeError('parameter "DBInstanceClass" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CheckResource', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  checkSqlLogHistoryEnable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('CheckSqlLogHistoryEnable', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} DBInstanceClass - dbInstanceClass. optional.
   * @param {Integer} DBInstanceStorage - dbInstanceStorage. optional.
   * @param {String} DBInstanceDescription - dbInstanceDescription. optional.
   * @param {String} DbNames - dbNames. optional.
   * @param {String} PayType - payType. required.
   * @param {String} InstanceNetworkType - instanceNetworkType. optional.
   * @param {String} DBInstanceId - sourceDBInstanceName. optional.
   * @param {String} BackupId - backupSetId. optional.
   * @param {String} RestoreTime - restoreTime. optional.
   * @param {String} VPCId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} PrivateIpAddress - cloudInstanceIp. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UsedTime - usedTime. optional.
   * @param {String} Period - timeType. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  cloneDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PayType')) {
      throw new TypeError('parameter "PayType" is required');
    }

    return this.request('CloneDBInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. required.
   * @param {String} DBInstanceClass - dbInstanceClass. optional.
   * @param {Integer} DBInstanceStorage - dbInstanceStorage. optional.
   * @param {String} PayType - payType. optional. default: POSTPAY.
   * @param {String} DBInstanceId - sourceDBInstanceName. optional.
   * @param {String} BackupId - backupSetId. optional.
   * @param {String} TargetAliUid - targetAliUid. optional.
   * @param {String} TargetAliBid - targetAliBid. optional.
   * @param {String} DBInstanceDescription - dbInstanceDescription. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  cloneDBInstanceForSecurity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    return this.request('CloneDBInstanceForSecurity', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} TargetRegionId - targetRegionId. required.
   * @param {String} ParameterGroupId - parameterGroupId. required.
   */
  cloneParameterGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'TargetRegionId')) {
      throw new TypeError('parameter "TargetRegionId" is required');
    }

    if (!hasOwnProperty(params, 'ParameterGroupId')) {
      throw new TypeError('parameter "ParameterGroupId" is required');
    }

    return this.request('CloneParameterGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. required.
   * @param {String} SubDomain - subDomain. required.
   */
  compensateInstanceForChannel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    if (!hasOwnProperty(params, 'SubDomain')) {
      throw new TypeError('parameter "SubDomain" is required');
    }

    return this.request('CompensateInstanceForChannel', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  copyDatabase(params = {}, options = {}) {
    return this.request('CopyDatabase', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} PayType - payType. optional. default: Postpaid.
   * @param {String} DBInstanceId - sourceDBInstanceName. required.
   * @param {String} TargetDBInstanceId - targetDBInstanceName. required.
   * @param {String} DbNames - backupDbNames. required.
   * @param {String} BackupId - backupSetId. optional.
   * @param {String} RestoreTime - restoreTime. optional.
   * @param {String} SyncUserPrivilege - syncUserPrivilege. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  copyDatabaseBetweenInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'TargetDBInstanceId')) {
      throw new TypeError('parameter "TargetDBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DbNames')) {
      throw new TypeError('parameter "DbNames" is required');
    }

    return this.request('CopyDatabaseBetweenInstances', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} AccountPassword - accountPassword. required.
   * @param {String} AccountDescription - accountDescription. optional.
   * @param {String} AccountType - accountType. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} AccountPassword - accountPassword. required.
   * @param {String} DBName - dbName. optional.
   * @param {String} AccountPrivilege - accountPrivilege. optional.
   * @param {String} AccountDescription - accountDescription. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} AccountType - accountType. optional.
   */
  createAccountForInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'AccountPassword')) {
      throw new TypeError('parameter "AccountPassword" is required');
    }

    return this.request('CreateAccountForInner', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceName. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} AccountPassword - accountPassword. optional.
   * @param {String} AccountDescription - accountDescription. optional.
   * @param {String} AccountType - adminType. optional.
   */
  createAdminAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    return this.request('CreateAdminAccount', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} DBName - dbName. optional.
   * @param {String} BackupStrategy - backupStrategy. optional.
   * @param {String} BackupMethod - backupMethod. optional.
   * @param {String} BackupType - backupType. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createBackup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('CreateBackup', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Engine - engine. required.
   * @param {String} EngineVersion - engineVersion. required.
   * @param {String} DBInstanceClass - dbInstanceClass. required.
   * @param {Integer} DBInstanceStorage - dbInstanceStorage. required.
   * @param {String} SystemDBCharset - systemDBCharset. optional.
   * @param {String} DBInstanceNetType - dbInstanceNetType. required.
   * @param {String} DBInstanceDescription - dbInstanceDescription. optional.
   * @param {String} SecurityIPList - securityIPList. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} PayType - payType. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} InstanceNetworkType - instanceNetworkType. optional. default: Classic.
   * @param {String} ConnectionMode - connectionMode. optional.
   * @param {String} VPCId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} PrivateIpAddress - cloudInstanceIp. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UsedTime - usedTime. optional.
   * @param {String} Period - timeType. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} DBInstanceStorageType - dbInstanceStorageType. optional.
   * @param {String} TunnelId - tunnelId. optional.
   * @param {String} BusinessInfo - businessInfo. optional.
   */
  createDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
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

    if (!hasOwnProperty(params, 'DBInstanceNetType')) {
      throw new TypeError('parameter "DBInstanceNetType" is required');
    }

    if (!hasOwnProperty(params, 'SecurityIPList')) {
      throw new TypeError('parameter "SecurityIPList" is required');
    }

    if (!hasOwnProperty(params, 'PayType')) {
      throw new TypeError('parameter "PayType" is required');
    }

    return this.request('CreateDBInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} SystemDBCharset - systemDBCharset. optional.
   * @param {String} Engine - engine. required.
   * @param {String} EngineVersion - engineVersion. required.
   * @param {String} DBInstanceClass - dbInstanceClass. required.
   * @param {Integer} DBInstanceStorage - dbInstanceStorage. required.
   * @param {String} DBInstanceNetType - dbInstanceNetType. required.
   * @param {String} InstanceNetworkType - instanceNetworkType. optional. default: Classic.
   * @param {String} DBInstanceDescription - dbInstanceDescription. optional.
   * @param {String} SecurityIPList - securityIPList. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} AccountPassword - accountPassword. required.
   * @param {String} PayType - payType. required.
   * @param {String} DBInstanceStorageType - dbInstanceStorageType. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  createDBInstanceForChannel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
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

    if (!hasOwnProperty(params, 'DBInstanceNetType')) {
      throw new TypeError('parameter "DBInstanceNetType" is required');
    }

    if (!hasOwnProperty(params, 'SecurityIPList')) {
      throw new TypeError('parameter "SecurityIPList" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'AccountPassword')) {
      throw new TypeError('parameter "AccountPassword" is required');
    }

    if (!hasOwnProperty(params, 'PayType')) {
      throw new TypeError('parameter "PayType" is required');
    }

    return this.request('CreateDBInstanceForChannel', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SourceDBInstanceId - sourceDBInstanceName. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} Engine - engine. required.
   * @param {String} EngineVersion - engineVersion. optional.
   * @param {String} DBInstanceClass - dbInstanceClass. optional.
   * @param {Integer} DBInstanceStorage - dbInstanceStorage. optional.
   * @param {String} SystemDBCharset - systemDBCharset. optional.
   * @param {String} DBInstanceNetType - dbInstanceNetType. optional.
   * @param {String} DBInstanceDescription - dbInstanceDescription. optional.
   * @param {String} SecurityIPList - securityIPList. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} PayType - payType. optional. default: POSTPAY.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} InstanceNetworkType - instanceNetworkType. optional. default: Classic.
   * @param {String} ConnectionMode - connectionMode. optional.
   * @param {String} VPCId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} PrivateIpAddress - cloudInstanceIp. optional.
   * @param {String} ReplicaDescription - replicaDescription. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UsedTime - usedTime. optional.
   * @param {String} Period - timeType. optional.
   * @param {String} ReplicaMode - replicaMode. optional.
   * @param {String} DomainMode - domainMode. optional.
   */
  createDBInstanceReplica(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceDBInstanceId')) {
      throw new TypeError('parameter "SourceDBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Engine')) {
      throw new TypeError('parameter "Engine" is required');
    }

    return this.request('CreateDBInstanceReplica', params, options);
  }

  /**
   * @param {String} action - apiName. optional.
   * @param {Long} uid - uid. optional.
   * @param {String} bid - bid. optional.
   * @param {String} uidLoginEmail - uidLoginEmail. optional.
   * @param {String} bidLoginEmail - bidLoginEmail. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - region. required.
   * @param {String} Engine - engine. required.
   * @param {String} EngineVersion - engineVersion. optional.
   * @param {String} DBInstanceClass - dbInstanceClass. required.
   * @param {Integer} DBInstanceStorage - dbInstanceStorage. required.
   * @param {String} DBInstanceNetType - dbInstanceNetType. required.
   * @param {String} CharacterSetName - characterSetName. optional.
   * @param {String} DBInstanceRemarks - dBInstanceRemarks. optional.
   * @param {String} ClientToken - token. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createDBInstanceforFirstPay(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Engine')) {
      throw new TypeError('parameter "Engine" is required');
    }

    if (!hasOwnProperty(params, 'DBInstanceClass')) {
      throw new TypeError('parameter "DBInstanceClass" is required');
    }

    if (!hasOwnProperty(params, 'DBInstanceStorage')) {
      throw new TypeError('parameter "DBInstanceStorage" is required');
    }

    if (!hasOwnProperty(params, 'DBInstanceNetType')) {
      throw new TypeError('parameter "DBInstanceNetType" is required');
    }

    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    return this.request('CreateDBInstanceforFirstPay', params, options);
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
   * @param {String} PolicyName - policyName. required.
   * @param {Integer} Priority - priority. optional.
   * @param {String} Handlers - handlers. optional.
   * @param {String} SourceRules - sourceRules. optional.
   * @param {String} TimeRules - timeRules. optional.
   * @param {String} ActionRules - actionRules. optional.
   */
  createDampPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PolicyName')) {
      throw new TypeError('parameter "PolicyName" is required');
    }

    return this.request('CreateDampPolicy', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} DBName - dbName. required.
   * @param {String} CharacterSetName - encoding. required.
   * @param {String} DBDescription - dbDescription. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createDatabase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    if (!hasOwnProperty(params, 'CharacterSetName')) {
      throw new TypeError('parameter "CharacterSetName" is required');
    }

    return this.request('CreateDatabase', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} DBName - dbName. required.
   * @param {String} CharacterSetName - encoding. required.
   * @param {String} DBDescription - dbDescription. optional.
   * @param {String} AccountName - accountName. optional.
   * @param {String} AccountPrivilege - accountPrivilege. optional.
   * @param {String} AccountPassword - accountPassword. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createDatabaseForInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    if (!hasOwnProperty(params, 'CharacterSetName')) {
      throw new TypeError('parameter "CharacterSetName" is required');
    }

    return this.request('CreateDatabaseForInner', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  createDiagnosticReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('CreateDiagnosticReport', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional. default: cn-hangzhou.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} TriggerId - triggerId. required.
   * @param {String} TriggerArn - triggerArn. required.
   * @param {String} FunctionArn - functionArn. required.
   * @param {String} SourceArn - sourceArn. required.
   * @param {String} InvocationRoleArn - invocationRoleArn. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {RepeatList} SubscriptionObjects - subscriptionObjects. optional.
   * @param {String} EventFormat - eventFormat. required.
   * @param {Integer} Concurrency - concurrency. required.
   * @param {Integer} Retry - retry. required.
   * @param {String} Region - region. required.
   */
  createFCTrigger(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TriggerId')) {
      throw new TypeError('parameter "TriggerId" is required');
    }

    if (!hasOwnProperty(params, 'TriggerArn')) {
      throw new TypeError('parameter "TriggerArn" is required');
    }

    if (!hasOwnProperty(params, 'FunctionArn')) {
      throw new TypeError('parameter "FunctionArn" is required');
    }

    if (!hasOwnProperty(params, 'SourceArn')) {
      throw new TypeError('parameter "SourceArn" is required');
    }

    if (!hasOwnProperty(params, 'InvocationRoleArn')) {
      throw new TypeError('parameter "InvocationRoleArn" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'EventFormat')) {
      throw new TypeError('parameter "EventFormat" is required');
    }

    if (!hasOwnProperty(params, 'Concurrency')) {
      throw new TypeError('parameter "Concurrency" is required');
    }

    if (!hasOwnProperty(params, 'Retry')) {
      throw new TypeError('parameter "Retry" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    return this.request('CreateFCTrigger', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} DBName - dbName. required.
   * @param {String} BackupMode - taskType. required.
   * @param {String} IsOnlineDB - isOnlineDB. required.
   * @param {String} CheckDBMode - checkDbMode. optional. default: 0.
   * @param {String} OssObjectPositions - OssObjectPositions. optional.
   * @param {String} OSSUrls - ossUrls. optional.
   * @param {String} MigrateTaskId - migrateTaskId. optional.
   */
  createMigrateTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    if (!hasOwnProperty(params, 'BackupMode')) {
      throw new TypeError('parameter "BackupMode" is required');
    }

    if (!hasOwnProperty(params, 'IsOnlineDB')) {
      throw new TypeError('parameter "IsOnlineDB" is required');
    }

    return this.request('CreateMigrateTask', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} DBName - dbName. required.
   * @param {String} TaskType - taskType. required.
   * @param {String} IsOnlineDB - isOnlineDB. required.
   * @param {String} OSSUrls - ossUrls. required.
   */
  createMigrateTaskForSQLServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    if (!hasOwnProperty(params, 'TaskType')) {
      throw new TypeError('parameter "TaskType" is required');
    }

    if (!hasOwnProperty(params, 'IsOnlineDB')) {
      throw new TypeError('parameter "IsOnlineDB" is required');
    }

    if (!hasOwnProperty(params, 'OSSUrls')) {
      throw new TypeError('parameter "OSSUrls" is required');
    }

    return this.request('CreateMigrateTaskForSQLServer', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AgentId - agentId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} Param - param. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createMulOrderForBuy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Param')) {
      throw new TypeError('parameter "Param" is required');
    }

    return this.request('CreateMulOrderForBuy', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {String} Resource - resource. optional.
   * @param {Boolean} AutoPay - autoPay. optional.
   * @param {String} BusinessInfo - businessInfo. optional.
   */
  createMulOrderForDefer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CreateMulOrderForDefer', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} DBName - dbName. required.
   * @param {String} MigrateTaskId - migrateTaskId. required.
   * @param {String} CheckDBMode - dbCheckModel. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createOnlineDatabaseTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    if (!hasOwnProperty(params, 'MigrateTaskId')) {
      throw new TypeError('parameter "MigrateTaskId" is required');
    }

    if (!hasOwnProperty(params, 'CheckDBMode')) {
      throw new TypeError('parameter "CheckDBMode" is required');
    }

    return this.request('CreateOnlineDatabaseTask', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} LcuQuota - lcuQuota. required.
   * @param {String} StorageQuota - storageQuota. required.
   * @param {String} SpecQuota - specQuota. required.
   * @param {String} SearchType - searchType. required.
   */
  createOpenSearchDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'LcuQuota')) {
      throw new TypeError('parameter "LcuQuota" is required');
    }

    if (!hasOwnProperty(params, 'StorageQuota')) {
      throw new TypeError('parameter "StorageQuota" is required');
    }

    if (!hasOwnProperty(params, 'SpecQuota')) {
      throw new TypeError('parameter "SpecQuota" is required');
    }

    if (!hasOwnProperty(params, 'SearchType')) {
      throw new TypeError('parameter "SearchType" is required');
    }

    return this.request('CreateOpenSearchDBInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} CommodityCode - commodity. required.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Engine - engine. required.
   * @param {String} EngineVersion - engineVersion. required.
   * @param {String} DBInstanceClass - dbInstanceClass. required.
   * @param {Integer} DBInstanceStorage - dbInstanceStorage. required.
   * @param {String} SystemDBCharset - systemDBCharset. optional.
   * @param {String} DBInstanceNetType - dbInstanceNetType. required.
   * @param {String} DBInstanceDescription - dbInstanceDescription. optional.
   * @param {String} SecurityIPList - securityIPList. optional.
   * @param {String} PayType - payType. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} InstanceNetworkType - instanceNetworkType. optional. default: Classic.
   * @param {String} UsedTime - usedTime. optional.
   * @param {String} TimeType - timeType. optional.
   * @param {Integer} Quantity - quantity. required.
   * @param {Boolean} AutoPay - autoPay. optional.
   * @param {Integer} InstanceUsedType - dbInstanceUsedType. optional.
   * @param {String} Resource - resource. optional.
   * @param {String} ConnectionMode - connectionMode. optional.
   * @param {String} VPCId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} PrivateIpAddress - cloudInstanceIp. optional.
   * @param {String} CountryCode - countryCode. optional.
   * @param {String} CurrencyCode - currencyCode. optional.
   * @param {String} AutoRenew - autoRenew. optional.
   * @param {String} AgentId - agentId. optional.
   * @param {String} PromotionCode - promotionCode. optional.
   * @param {String} BusinessInfo - businessInfo. optional.
   * @param {String} BackupId - backupSetId. optional.
   * @param {String} RestoreTime - restoreTime. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceStorageType - dbInstanceStorageType. optional.
   * @param {String} NodeType - nodeType. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} Category - categroy. optional.
   * @param {String} ZoneIdSlave1 - zoneIdSlave1. optional.
   * @param {String} ZoneIdSlave2 - zoneIdSlave2. optional.
   */
  createOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CommodityCode')) {
      throw new TypeError('parameter "CommodityCode" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
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

    if (!hasOwnProperty(params, 'DBInstanceNetType')) {
      throw new TypeError('parameter "DBInstanceNetType" is required');
    }

    if (!hasOwnProperty(params, 'Quantity')) {
      throw new TypeError('parameter "Quantity" is required');
    }

    return this.request('CreateOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} CommodityCode - commodity. required.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {String} DBInstanceClass - dbInstanceClass. required.
   * @param {Integer} DBInstanceStorage - dbInstanceStorage. required.
   * @param {String} DBInstanceStorageType - dbInstanceStorageType. optional.
   * @param {String} PayType - payType. optional.
   * @param {String} InstanceNetworkType - instanceNetworkType. optional.
   * @param {String} UsedTime - usedTime. optional.
   * @param {String} TimeType - timeType. optional.
   * @param {Integer} Quantity - quantity. required.
   * @param {Boolean} AutoPay - autoPay. optional.
   * @param {Integer} InstanceUsedType - dbInstanceUsedType. optional. default: 0.
   * @param {String} Resource - resource. optional. default: buy.
   * @param {String} VPCId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} PrivateIpAddress - cloudInstanceIp. optional.
   * @param {String} CountryCode - countryCode. optional.
   * @param {String} CurrencyCode - currencyCode. optional.
   * @param {String} AutoRenew - autoRenew. optional.
   * @param {String} AgentId - agentId. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} PromotionCode - promotionCode. optional.
   * @param {String} BusinessInfo - businessInfo. optional.
   * @param {String} CloneInstanceDefaultValue - cloneInstance. optional. default: true.
   * @param {String} DBInstanceDescription - dbInstanceDescription. optional.
   * @param {String} DBNames - dbNames. optional.
   * @param {String} BackupId - backupSetId. optional.
   * @param {String} RestoreTime - restoreTime. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} TableMeta - tableMeta. optional.
   * @param {String} RestoreTable - restoreTable. optional.
   * @param {String} NodeType - nodeType. optional.
   */
  createOrderForClone(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CommodityCode')) {
      throw new TypeError('parameter "CommodityCode" is required');
    }

    if (!hasOwnProperty(params, 'DBInstanceClass')) {
      throw new TypeError('parameter "DBInstanceClass" is required');
    }

    if (!hasOwnProperty(params, 'DBInstanceStorage')) {
      throw new TypeError('parameter "DBInstanceStorage" is required');
    }

    if (!hasOwnProperty(params, 'Quantity')) {
      throw new TypeError('parameter "Quantity" is required');
    }

    return this.request('CreateOrderForClone', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} CommodityCode - commodity. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {String} UsedTime - usedTime. required.
   * @param {String} TimeType - timeType. required.
   * @param {Integer} DBInstanceStorage - dbInstanceStorage. optional.
   * @param {String} Resource - resource. optional.
   * @param {Boolean} AutoPay - autoPay. optional.
   * @param {String} PayType - payType. optional.
   * @param {Boolean} RenewChange - renewChange. optional.
   * @param {String} DBInstanceClass - dbInstanceClass. optional.
   * @param {String} BusinessInfo - businessInfo. optional.
   */
  createOrderForDefer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CommodityCode')) {
      throw new TypeError('parameter "CommodityCode" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UsedTime')) {
      throw new TypeError('parameter "UsedTime" is required');
    }

    if (!hasOwnProperty(params, 'TimeType')) {
      throw new TypeError('parameter "TimeType" is required');
    }

    return this.request('CreateOrderForDefer', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} CommodityCode - commodity. required.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} DBInstanceClass - dbInstanceClass. required.
   * @param {String} UsedTime - usedTime. optional.
   * @param {String} TimeType - timeType. optional.
   * @param {String} PayType - payType. optional.
   * @param {String} EffectiveTime - effectiveTime. optional.
   * @param {Integer} DBInstanceStorage - dbInstanceStorage. required.
   * @param {String} Resource - resource. optional.
   * @param {Boolean} AutoPay - autoPay. optional.
   * @param {String} PromotionCode - promotionCode. optional.
   * @param {String} BusinessInfo - businessInfo. optional.
   */
  createOrderForDegrade(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CommodityCode')) {
      throw new TypeError('parameter "CommodityCode" is required');
    }

    if (!hasOwnProperty(params, 'DBInstanceClass')) {
      throw new TypeError('parameter "DBInstanceClass" is required');
    }

    if (!hasOwnProperty(params, 'DBInstanceStorage')) {
      throw new TypeError('parameter "DBInstanceStorage" is required');
    }

    return this.request('CreateOrderForDegrade', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} CommodityCode - commodity. required.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} DBInstanceClass - dbInstanceClass. required.
   * @param {String} UsedTime - usedTime. optional.
   * @param {String} TimeType - timeType. optional.
   * @param {String} PayType - payType. optional.
   * @param {String} EffectiveTime - effectiveTime. optional.
   * @param {Integer} DBInstanceStorage - dbInstanceStorage. required.
   * @param {String} Resource - resource. optional.
   * @param {Boolean} AutoPay - autoPay. optional.
   * @param {String} PromotionCode - promotionCode. optional.
   * @param {String} EngineVersion - engineVersion. optional.
   * @param {String} InstanceNetworkType - instanceNetworkType. optional.
   * @param {String} DBInstanceStorageType - dbInstanceStorageType. optional.
   * @param {String} NodeType - nodeType. optional.
   * @param {String} BusinessInfo - businessInfo. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   */
  createOrderForModify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CommodityCode')) {
      throw new TypeError('parameter "CommodityCode" is required');
    }

    if (!hasOwnProperty(params, 'DBInstanceClass')) {
      throw new TypeError('parameter "DBInstanceClass" is required');
    }

    if (!hasOwnProperty(params, 'DBInstanceStorage')) {
      throw new TypeError('parameter "DBInstanceStorage" is required');
    }

    return this.request('CreateOrderForModify', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} CommodityCode - commodity. required.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} DBInstanceClass - dbInstanceClass. optional.
   * @param {String} PayType - payType. optional.
   * @param {String} InstanceNetworkType - instanceNetworkType. optional.
   * @param {String} UsedTime - usedTime. optional.
   * @param {String} TimeType - timeType. optional.
   * @param {Boolean} AutoPay - autoPay. optional.
   * @param {String} Resource - resource. optional. default: buy.
   * @param {String} VPCId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} AutoRenew - autoRenew. optional.
   * @param {String} AgentId - agentId. optional.
   * @param {String} PromotionCode - promotionCode. optional.
   * @param {String} BusinessInfo - businessInfo. optional.
   * @param {String} DBInstanceDescription - dbInstanceDescription. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {Boolean} RebuildInstanceFlag - rebuildInstance. optional. default: true.
   */
  createOrderForRebuild(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CommodityCode')) {
      throw new TypeError('parameter "CommodityCode" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CreateOrderForRebuild', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} CommodityCode - commodity. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} UsedTime - usedTime. required.
   * @param {Integer} DBInstanceStorage - dbInstanceStorage. required.
   * @param {String} Resource - resource. optional.
   * @param {Boolean} AutoPay - autoPay. optional.
   * @param {String} DBInstanceClass - dbInstanceClass. required.
   * @param {String} BusinessInfo - businessInfo. optional.
   */
  createOrderForTempUpgrade(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CommodityCode')) {
      throw new TypeError('parameter "CommodityCode" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'UsedTime')) {
      throw new TypeError('parameter "UsedTime" is required');
    }

    if (!hasOwnProperty(params, 'DBInstanceStorage')) {
      throw new TypeError('parameter "DBInstanceStorage" is required');
    }

    if (!hasOwnProperty(params, 'DBInstanceClass')) {
      throw new TypeError('parameter "DBInstanceClass" is required');
    }

    return this.request('CreateOrderForTempUpgrade', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ParameterGroupName - parameterGroupName. required.
   * @param {String} Engine - engine. required.
   * @param {String} EngineVersion - engineVersion. required.
   * @param {String} Parameters - parameters. required.
   * @param {String} ParameterGroupDesc - parameterGroupDesc. optional.
   */
  createParameterGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ParameterGroupName')) {
      throw new TypeError('parameter "ParameterGroupName" is required');
    }

    if (!hasOwnProperty(params, 'Engine')) {
      throw new TypeError('parameter "Engine" is required');
    }

    if (!hasOwnProperty(params, 'EngineVersion')) {
      throw new TypeError('parameter "EngineVersion" is required');
    }

    if (!hasOwnProperty(params, 'Parameters')) {
      throw new TypeError('parameter "Parameters" is required');
    }

    return this.request('CreateParameterGroup', params, options);
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
   * @param {String} PolicyId - policyId. required.
   */
  createPolicyWithSpecifiedPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PolicyId')) {
      throw new TypeError('parameter "PolicyId" is required');
    }

    return this.request('CreatePolicyWithSpecifiedPolicy', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} Engine - engine. required.
   * @param {String} EngineVersion - engineVersion. required.
   * @param {String} DBInstanceClass - dbInstanceClass. required.
   * @param {Integer} DBInstanceStorage - dbInstanceStorage. required.
   * @param {String} DBInstanceNetType - dbInstanceNetType. required.
   * @param {String} DBInstanceDescription - dbInstanceDescription. optional.
   * @param {String} SecurityIPList - securityIPList. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createPostpaidDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
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

    if (!hasOwnProperty(params, 'DBInstanceNetType')) {
      throw new TypeError('parameter "DBInstanceNetType" is required');
    }

    if (!hasOwnProperty(params, 'SecurityIPList')) {
      throw new TypeError('parameter "SecurityIPList" is required');
    }

    return this.request('CreatePostpaidDBInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} Engine - engine. required.
   * @param {String} EngineVersion - engineVersion. required.
   * @param {String} DBInstanceClass - dbInstanceClass. required.
   * @param {Integer} DBInstanceStorage - dbInstanceStorage. required.
   * @param {String} DBInstanceNetType - dbInstanceNetType. required.
   * @param {String} DBInstanceDescription - dbInstanceDescription. optional.
   * @param {String} SecurityIPList - securityIPList. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createPostpaidDBInstanceForChannel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
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

    if (!hasOwnProperty(params, 'DBInstanceNetType')) {
      throw new TypeError('parameter "DBInstanceNetType" is required');
    }

    if (!hasOwnProperty(params, 'SecurityIPList')) {
      throw new TypeError('parameter "SecurityIPList" is required');
    }

    return this.request('CreatePostpaidDBInstanceForChannel', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. required.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} DBInstanceClass - dbInstanceClass. required.
   * @param {Integer} DBInstanceStorage - dbInstanceStorage. required.
   * @param {String} EngineVersion - engineVersion. required.
   * @param {String} PayType - payType. required.
   * @param {String} DBInstanceDescription - dbInstanceDescription. optional.
   * @param {String} InstanceNetworkType - instanceNetworkType. optional.
   * @param {String} VPCId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} PrivateIpAddress - cloudInstanceIp. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} Category - category. optional.
   * @param {String} DBInstanceStorageType - dbInstanceStorageType. optional.
   */
  createReadOnlyDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBInstanceClass')) {
      throw new TypeError('parameter "DBInstanceClass" is required');
    }

    if (!hasOwnProperty(params, 'DBInstanceStorage')) {
      throw new TypeError('parameter "DBInstanceStorage" is required');
    }

    if (!hasOwnProperty(params, 'EngineVersion')) {
      throw new TypeError('parameter "EngineVersion" is required');
    }

    if (!hasOwnProperty(params, 'PayType')) {
      throw new TypeError('parameter "PayType" is required');
    }

    return this.request('CreateReadOnlyDBInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  createSQLDiagnosis(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('CreateSQLDiagnosis', params, options);
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {Integer} BackupId - backupSetId. optional.
   * @param {String} RestoreTime - restoreTime. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createTempDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('CreateTempDBInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} DBName - dbName. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createUploadPathForSQLServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    return this.request('CreateUploadPathForSQLServer', params, options);
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
  decribeSqlLogDumpStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DecribeSqlLogDumpStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} DBInstanceClass - dbInstanceClass. optional.
   * @param {Integer} DBInstanceStorage - dbInstanceStorage. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  degradeDBInstanceSpec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DegradeDBInstanceSpec', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    return this.request('DeleteAccount', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} BackupId - backupId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteBackup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'BackupId')) {
      throw new TypeError('parameter "BackupId" is required');
    }

    return this.request('DeleteBackup', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  deleteCloudInstanceIp(params = {}, options = {}) {
    return this.request('DeleteCloudInstanceIp', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
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
   * @param {String} PolicyName - policyName. required.
   */
  deleteDampPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PolicyName')) {
      throw new TypeError('parameter "PolicyName" is required');
    }

    return this.request('DeleteDampPolicy', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} DBName - dbName. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteDatabase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    return this.request('DeleteDatabase', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional. default: cn-hangzhou.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} TriggerId - triggerId. required.
   */
  deleteFCTrigger(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TriggerId')) {
      throw new TypeError('parameter "TriggerId" is required');
    }

    return this.request('DeleteFCTrigger', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  deleteOpenSearchDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DeleteOpenSearchDBInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ParameterGroupId - parameterGroupId. required.
   */
  deleteParameterGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ParameterGroupId')) {
      throw new TypeError('parameter "ParameterGroupId" is required');
    }

    return this.request('DeleteParameterGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} Engine - engine. required.
   * @param {Integer} ImportId - importId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  descibeImportsFromDatabase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Engine')) {
      throw new TypeError('parameter "Engine" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescibeImportsFromDatabase', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {String} Tags - tags. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Tag} Tag - undefined. optional.
   */
  describeAbnormalDBInstances(params = {}, options = {}) {
    return this.request('DescribeAbnormalDBInstances', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} AccountName - accountName. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 500.
   * @param {Integer} PageNumber - page. optional. default: 1.
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
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ArchiveJobID - archiveJobID. required.
   * @param {String} OssTableName - ossTableName. required.
   */
  describeArchiveSQLLogFromKepler(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ArchiveJobID')) {
      throw new TypeError('parameter "ArchiveJobID" is required');
    }

    if (!hasOwnProperty(params, 'OssTableName')) {
      throw new TypeError('parameter "OssTableName" is required');
    }

    return this.request('DescribeArchiveSQLLogFromKepler', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} InstanceChargeType - chargeType. optional.
   * @param {String} Engine - engine. optional.
   * @param {String} EngineVersion - version. optional.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {String} OrderType - orderType. optional. default: BUY.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeAvailableInstanceClass(params = {}, options = {}) {
    return this.request('DescribeAvailableInstanceClass', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} InstanceChargeType - chargeType. optional.
   * @param {String} Engine - engine. optional.
   * @param {String} EngineVersion - version. optional.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {String} OrderType - orderType. optional. default: BUY.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeAvailableResource(params = {}, options = {}) {
    return this.request('DescribeAvailableResource', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} BackupId - backupId. optional.
   */
  describeBackupDatabase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeBackupDatabase', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} BackupPolicyMode - backupPolicyMode. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeBackupPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeBackupPolicy', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - targetInstanceId. required.
   * @param {String} TargetAliUid - targetAliUid. optional.
   * @param {String} TargetAliBid - targetAliBid. optional.
   * @param {String} BackupId - backupId. optional.
   * @param {String} BackupLocation - backupsetLocation. optional. default: OSS.
   * @param {String} BackupStatus - backupSetStatus. optional.
   * @param {String} BackupMode - jobMode. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageSize - maxRecordsPerPage. optional. default: 30.
   * @param {Integer} PageNumber - pageNumbers. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeBackupSetsForSecurity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeBackupSetsForSecurity', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} Flag - flag. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} BackupJobId - backupjobId. optional.
   * @param {String} BackupMode - jobMode. optional.
   * @param {String} BackupJobStatus - backupjobStatus. optional.
   */
  describeBackupTasks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeBackupTasks', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} BackupId - backupId. optional.
   * @param {String} BackupLocation - backupsetLocation. optional. default: OSS.
   * @param {String} BackupStatus - backupSetStatus. optional.
   * @param {String} BackupMode - jobMode. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Integer} PageSize - maxRecordsPerPage. optional. default: 30.
   * @param {Integer} PageNumber - pageNumbers. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeBackups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeBackups', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - targetInstanceId. required.
   * @param {String} TargetAliUid - targetAliUid. optional.
   * @param {String} TargetAliBid - targetAliBid. optional.
   * @param {String} BackupId - backupId. optional.
   * @param {String} BackupLocation - backupsetLocation. optional. default: OSS.
   * @param {String} BackupStatus - backupSetStatus. optional.
   * @param {String} BackupMode - jobMode. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageSize - maxRecordsPerPage. optional. default: 30.
   * @param {Integer} PageNumber - pageNumbers. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeBackupsForSecurity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeBackupsForSecurity', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageSize - maxRecordsPerPage. optional. default: 30.
   * @param {Integer} PageNumber - pageNumbers. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeBinlogFiles(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeBinlogFiles', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Engine - engine. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeCharacterSetName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Engine')) {
      throw new TypeError('parameter "Engine" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeCharacterSetName', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ServiceRequestType - serviceRequestType. required.
   * @param {String} ServiceRequestParam - serviceRequestParam. required.
   */
  describeCloudDBAService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceRequestType')) {
      throw new TypeError('parameter "ServiceRequestType" is required');
    }

    if (!hasOwnProperty(params, 'ServiceRequestParam')) {
      throw new TypeError('parameter "ServiceRequestParam" is required');
    }

    return this.request('DescribeCloudDBAService', params, options);
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
   * @param {String} ServiceRequestType - serviceRequestType. required.
   * @param {String} ServiceRequestParam - serviceRequestParam. required.
   */
  describeCloudDbExpertService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceRequestType')) {
      throw new TypeError('parameter "ServiceRequestType" is required');
    }

    if (!hasOwnProperty(params, 'ServiceRequestParam')) {
      throw new TypeError('parameter "ServiceRequestParam" is required');
    }

    return this.request('DescribeCloudDbExpertService', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  describeCollationTimeZones(params = {}, options = {}) {
    return this.request('DescribeCollationTimeZones', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} CommodityCode - commodityCode. optional.
   * @param {String} DBInstanceId - dbInstanceId. optional.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  describeCustinsKernelReleaseNotes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeCustinsKernelReleaseNotes', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} Expired - expired. optional. default: False.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  describeDBInstanceAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeDBInstanceAttribute', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeDBInstanceByTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeDBInstanceByTags', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  describeDBInstanceECSSGRelation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeDBInstanceECSSGRelation', params, options);
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
  describeDBInstanceEncryptionKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeDBInstanceEncryptionKey', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  describeDBInstanceExtendAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeDBInstanceExtendAttribute', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeDBInstanceHAConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeDBInstanceHAConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} WhitelistNetworkType - whitelistNetType. optional.
   */
  describeDBInstanceIPArrayList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeDBInstanceIPArrayList', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {String} AddressIP - addressIP. optional.
   * @param {String} AddressPort - addressPort. optional.
   */
  describeDBInstanceInfo(params = {}, options = {}) {
    return this.request('DescribeDBInstanceInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeDBInstanceMonitor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeDBInstanceMonitor', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} Flag - flag. optional. default: 1.
   * @param {String} DBInstanceNetRWSplitType - dbInstanceNetRwSplitType. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeDBInstanceNetInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeDBInstanceNetInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} Flag - flag. optional. default: 0.
   * @param {String} DBInstanceNetRWSplitType - dbInstanceNetRwSplitType. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeDBInstanceNetInfoForChannel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeDBInstanceNetInfoForChannel', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeDBInstanceNetwork(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeDBInstanceNetwork', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} StartPoint - startPoint. required.
   * @param {String} EndPoint - endPoint. required.
   */
  describeDBInstanceNetworkDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'StartPoint')) {
      throw new TypeError('parameter "StartPoint" is required');
    }

    if (!hasOwnProperty(params, 'EndPoint')) {
      throw new TypeError('parameter "EndPoint" is required');
    }

    return this.request('DescribeDBInstanceNetworkDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} Key - performanceKeys. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
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
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  describeDBInstanceProxyConfiguration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeDBInstanceProxyConfiguration', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeDBInstanceSSL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeDBInstanceSSL', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageSize - maxRecordsPerPage. optional. default: 30.
   * @param {Integer} PageNumber - pageNumbers. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeDBInstanceSwitchLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeDBInstanceSwitchLog', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeDBInstanceTDE(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeDBInstanceTDE', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceName. optional.
   * @param {String} ConnectionString - connectionString. optional.
   */
  describeDBInstanceUser(params = {}, options = {}) {
    return this.request('DescribeDBInstanceUser', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} Engine - dbType. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} DBInstanceStatus - dbInstanceStatusDesc. optional.
   * @param {String} Expired - expired. optional. default: False.
   * @param {String} SearchKey - description. optional.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {String} DBInstanceType - instanceUsedType. optional.
   * @param {String} RegionId - region. required.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {String} InstanceNetworkType - instanceNetworkType. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} DBInstanceClass - dbInstanceClass. optional.
   * @param {String} EngineVersion - engineVersion. optional.
   * @param {String} PayType - chargeType. optional.
   * @param {String} ConnectionMode - connectionMode. optional.
   * @param {String} Tags - tags. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Tag} Tag - undefined. optional.
   */
  describeDBInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeDBInstances', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   */
  describeDBInstancesAsCsv(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeDBInstancesAsCsv', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - region. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {Integer} ExpirePeriod - availableDays. optional.
   * @param {Boolean} Expired - hasExpiredRes. optional. default: false.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - currPage. optional.
   * @param {String} Tags - tags. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeDBInstancesByExpireTime(params = {}, options = {}) {
    return this.request('DescribeDBInstancesByExpireTime', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {String} SortMethod - sortMethod. optional. default: ASC.
   * @param {String} SortKey - sortKey. optional. default: CPUUsage.
   * @param {String} Tags - tags. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Tag} Tag - undefined. optional.
   */
  describeDBInstancesByPerformance(params = {}, options = {}) {
    return this.request('DescribeDBInstancesByPerformance', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} EncryptionKey - encryptionKey. optional.
   * @param {String} RoleArn - roleARN. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - page. optional. default: 1.
   */
  describeDBInstancesWithCloudResource(params = {}, options = {}) {
    return this.request('DescribeDBInstancesWithCloudResource', params, options);
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
  describeDampPoliciesByCid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeDampPoliciesByCid', params, options);
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
   * @param {String} PolicyName - policyName. required.
   */
  describeDampPolicyByComment(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PolicyName')) {
      throw new TypeError('parameter "PolicyName" is required');
    }

    return this.request('DescribeDampPolicyByComment', params, options);
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
   * @param {String} PolicyName - policyName. required.
   */
  describeDampPolicyByPolicyName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PolicyName')) {
      throw new TypeError('parameter "PolicyName" is required');
    }

    return this.request('DescribeDampPolicyByPolicyName', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeDatabaseLockDiagnosis(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeDatabaseLockDiagnosis', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} DBName - dbName. optional.
   * @param {String} DBStatus - dbStatus. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 500.
   * @param {Integer} PageNumber - page. optional. default: 1.
   */
  describeDatabases(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeDatabases', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  describeDiagnosticReportList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeDiagnosticReportList', params, options);
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
  describeDynamicVerificationList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReplicaId')) {
      throw new TypeError('parameter "ReplicaId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeDynamicVerificationList', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageSize - maxRecordsPerPage. optional. default: 30.
   * @param {Integer} PageNumber - pageNumbers. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeErrorLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeErrorLogs', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional. default: cn-hangzhou.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} TriggerId - triggerId. optional.
   */
  describeFCTrigger(params = {}, options = {}) {
    return this.request('DescribeFCTrigger', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - pageNum. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeFilesForSQLServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeFilesForSQLServer', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {Integer} ImportId - migrationId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - page. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeImportsForSQLServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeImportsForSQLServer', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} RegionId - region. optional.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {Integer} PageSize - maxRecordsPerPage. optional. default: 30.
   * @param {Integer} PageNumber - pageNumbers. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeInstanceAutoRenewAttribute(params = {}, options = {}) {
    return this.request('DescribeInstanceAutoRenewAttribute', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} RegionId - region. required.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {Integer} PageSize - maxRecordsPerPage. optional. default: 30.
   * @param {Integer} PageNumber - pageNumbers. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeInstanceAutoRenewalAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeInstanceAutoRenewalAttribute', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Key - key. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeInstanceKeywords(params = {}, options = {}) {
    return this.request('DescribeInstanceKeywords', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  describeInstanceLevelList(params = {}, options = {}) {
    return this.request('DescribeInstanceLevelList', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - dbInstanceName. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} VpcId - vpcId. optional.
   */
  describeInstanceVpcMigrateInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeInstanceVpcMigrateInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageSize - maxRecordsPerPage. optional. default: 30.
   * @param {Integer} PageNumber - pageNumbers. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeLogBackupFiles(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeLogBackupFiles', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  describeLogicDBInstanceTopology(params = {}, options = {}) {
    return this.request('DescribeLogicDBInstanceTopology', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} RestoreType - restoreType. optional. default: 0.
   * @param {String} BackupSetID - backupSetID. optional.
   * @param {String} RestoreTime - restoreTime. optional.
   * @param {String} GetDbName - dbName. optional.
   * @param {String} Pattern - pattern. optional.
   * @param {String} PageSize - pageSize. optional.
   * @param {String} PageIndex - pageIndex. optional.
   */
  describeMetaList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeMetaList', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageSize - maxRecordsPerPage. optional. default: 30.
   * @param {Integer} PageNumber - pageNumbers. optional. default: 1.
   */
  describeMigrateTasks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeMigrateTasks', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageSize - maxRecordsPerPage. optional. default: 30.
   * @param {Integer} PageNumber - pageNumbers. optional. default: 1.
   */
  describeMigrateTasksForSQLServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeMigrateTasksForSQLServer', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageSize - maxRecordsPerPage. optional. default: 30.
   * @param {Integer} PageNumber - pageNumbers. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeModifyParameterLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeModifyParameterLog', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  describeOpenSearchDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeOpenSearchDBInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {String} SearchKey - searchKey. optional.
   * @param {String} DBInstanceUseType - dbInstanceUseType. optional. default: Primary.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeOperationLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeOperationLogs', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeOperatorPermission(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeOperatorPermission', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeOptimizeAdviceByDBA(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeOptimizeAdviceByDBA', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeOptimizeAdviceOnBigTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeOptimizeAdviceOnBigTable', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeOptimizeAdviceOnExcessIndex(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeOptimizeAdviceOnExcessIndex', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeOptimizeAdviceOnMissIndex(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeOptimizeAdviceOnMissIndex', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeOptimizeAdviceOnMissPK(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeOptimizeAdviceOnMissPK', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeOptimizeAdviceOnStorage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeOptimizeAdviceOnStorage', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} MigrateTaskId - migrateTaskId. required.
   */
  describeOssDownloads(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'MigrateTaskId')) {
      throw new TypeError('parameter "MigrateTaskId" is required');
    }

    return this.request('DescribeOssDownloads', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} MigrateTaskId - migrateTaskId. required.
   */
  describeOssDownloadsForSQLServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'MigrateTaskId')) {
      throw new TypeError('parameter "MigrateTaskId" is required');
    }

    return this.request('DescribeOssDownloadsForSQLServer', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ParameterGroupId - parameterGroupId. required.
   * @param {String} RegionId - regionId. required.
   */
  describeParameterGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ParameterGroupId')) {
      throw new TypeError('parameter "ParameterGroupId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeParameterGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   */
  describeParameterGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeParameterGroups', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} Engine - engine. required.
   * @param {String} EngineVersion - engineVersion. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Category - category. optional.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeParameters(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeParameters', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} PreCheckId - preCheckId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describePreCheckResults(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PreCheckId')) {
      throw new TypeError('parameter "PreCheckId" is required');
    }

    return this.request('DescribePreCheckResults', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} CommodityCode - commodity. optional. default: rds.
   * @param {String} RegionId - regionId. required.
   * @param {String} Engine - engine. required.
   * @param {String} EngineVersion - engineVersion. required.
   * @param {String} DBInstanceClass - dbInstanceClass. required.
   * @param {Integer} DBInstanceStorage - dbInstanceStorage. required.
   * @param {String} PayType - payType. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UsedTime - usedTime. optional.
   * @param {String} TimeType - timeType. optional.
   * @param {Integer} Quantity - quantity. required.
   * @param {Integer} InstanceUsedType - dbInstanceUsedType. optional.
   * @param {String} OrderType - orderType. optional. default: BUY.
   */
  describePrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
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

    if (!hasOwnProperty(params, 'Quantity')) {
      throw new TypeError('parameter "Quantity" is required');
    }

    return this.request('DescribePrice', params, options);
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
  describeProxyFunctionSupport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeProxyFunctionSupport', params, options);
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
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional. default: cn-hangzhou.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceName. required.
   * @param {String} ReadInstanceId - readInstanceName. required.
   */
  describeReadDBInstanceDelay(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ReadInstanceId')) {
      throw new TypeError('parameter "ReadInstanceId" is required');
    }

    return this.request('DescribeReadDBInstanceDelay', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeRealtimeDiagnoses(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeRealtimeDiagnoses', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceUsedType - dbInstanceUsedType. optional.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {String} SpecifyCount - specifyCount. optional.
   * @param {String} HostType - hostType. optional.
   */
  describeRegionAvailability(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeRegionAvailability', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
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
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeRegionsForChannel(params = {}, options = {}) {
    return this.request('DescribeRegionsForChannel', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} CommodityCode - commodity. optional. default: rds.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} PayType - payType. optional. default: Prepaid.
   * @param {String} DBInstanceClass - dbInstanceClass. optional.
   * @param {String} UsedTime - usedTime. required.
   * @param {String} TimeType - timeType. required.
   * @param {Integer} Quantity - quantity. optional. default: 1.
   * @param {String} OrderType - orderType. optional. default: RENEW.
   * @param {String} PromotionCode - promotionCode. optional.
   * @param {String} BusinessInfo - businessInfo. optional.
   */
  describeRenewalPrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UsedTime')) {
      throw new TypeError('parameter "UsedTime" is required');
    }

    if (!hasOwnProperty(params, 'TimeType')) {
      throw new TypeError('parameter "TimeType" is required');
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeResourceDiagnosis(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeResourceDiagnosis', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeResourceUsage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeResourceUsage', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeSQLCollectorPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeSQLCollectorPolicy', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  describeSQLCollectorRetention(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeSQLCollectorRetention', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  describeSQLCollectorVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeSQLCollectorVersion', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} SQLDiagId - sqlDiagId. required.
   */
  describeSQLDiagnosis(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SQLDiagId')) {
      throw new TypeError('parameter "SQLDiagId" is required');
    }

    return this.request('DescribeSQLDiagnosis', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  describeSQLDiagnosisList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeSQLDiagnosisList', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeSQLInjectionInfos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeSQLInjectionInfos', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} FileName - fileName. optional.
   * @param {Integer} PageSize - maxRecordsPerPage. optional. default: 30.
   * @param {Integer} PageNumber - pageNumbers. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeSQLLogFiles(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeSQLLogFiles', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {Long} SQLId - sqlId. optional.
   * @param {String} QueryKeywords - queryKeyword. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} Database - dbName. optional.
   * @param {String} User - accountName. optional.
   * @param {String} Form - form. optional. default: Stream.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageSize - maxRecordsPerPage. optional. default: 100.
   * @param {Integer} PageNumber - pageNumbers. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeSQLLogRecords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeSQLLogRecords', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} StartTime - StartTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} MaxRecordsPerPage - maxRecordsPerPage. required.
   * @param {Integer} PageNumbers - pageNumbers. required.
   * @param {String} QueryKeyword - queryKeyword. optional.
   * @param {String} HostAddress - hostAddress. optional.
   * @param {String} DBName - dbName. optional.
   * @param {String} TableName - tableName. optional.
   * @param {String} SortKey - sortKey. optional.
   * @param {String} SortMethod - sortMethod. optional.
   * @param {Long} MinConsume - minConsume. optional.
   * @param {Long} MaxConsume - maxConsume. optional.
   * @param {Long} MinScanRows - minScanRows. optional.
   * @param {Long} MaxScanRows - maxScanRows. optional.
   * @param {String} State - state. optional.
   * @param {String} SqlType - sqlType. optional.
   * @param {String} AccountName - accountName. optional.
   * @param {String} ThreadID - threadID. optional.
   * @param {String} PagingID - pagingID. optional.
   * @param {String} LogicalOperator - logicalOperator. optional.
   * @param {String} JobId - jobId. optional.
   */
  describeSQLLogRecordsList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'MaxRecordsPerPage')) {
      throw new TypeError('parameter "MaxRecordsPerPage" is required');
    }

    if (!hasOwnProperty(params, 'PageNumbers')) {
      throw new TypeError('parameter "PageNumbers" is required');
    }

    return this.request('DescribeSQLLogRecordsList', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageSize - maxRecordsPerPage. optional. default: 5.
   * @param {Integer} PageNumber - pageNumbers. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeSQLLogReportList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeSQLLogReportList', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageSize - maxRecordsPerPage. optional. default: 5.
   * @param {Integer} PageNumber - pageNumbers. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeSQLLogReports(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeSQLLogReports', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageSize - maxRecordsPerPage. optional. default: 5.
   * @param {Integer} PageNumber - pageNumbers. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeSQLReports(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeSQLReports', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {String} EngineVersion - engineVersion. optional.
   */
  describeSQLServerUpgradeVersions(params = {}, options = {}) {
    return this.request('DescribeSQLServerUpgradeVersions', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  describeSecurityGroupConfiguration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeSecurityGroupConfiguration', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ServiceRequestType - serviceRequestType. required.
   * @param {String} ServiceRequestParam - serviceRequestParam. required.
   */
  describeServiceOfCloudDBA(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceRequestType')) {
      throw new TypeError('parameter "ServiceRequestType" is required');
    }

    if (!hasOwnProperty(params, 'ServiceRequestParam')) {
      throw new TypeError('parameter "ServiceRequestParam" is required');
    }

    return this.request('DescribeServiceOfCloudDBA', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} SQLHASH - sqlhash. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} DBName - dbName. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
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
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} DBName - dbName. optional.
   * @param {String} SortKey - sortKey. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeSlowLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeSlowLogs', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  describeSqlLogDetailArchiveStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeSqlLogDetailArchiveStatus', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  describeSqlLogDumpStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeSqlLogDumpStatus', params, options);
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
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} MaxRecordsPerPage - maxRecordsPerPage. required.
   * @param {Integer} PageNumbers - pageNumbers. required.
   * @param {Float} MinAvgConsume - minAvgConsume. optional.
   * @param {Float} MaxAvgConsume - maxAvgConsume. optional.
   * @param {Float} MinAvgScanRows - minAvgScanRows. optional.
   * @param {Float} MaxAvgScanRows - maxAvgScanRows. optional.
   * @param {String} PagingId - pagingId. optional.
   * @param {String} SortKey - sortKey. optional.
   * @param {String} SortMethod - sortMethod. optional.
   * @param {String} SqlType - sqlType. optional.
   * @param {String} JobId - jobId. optional.
   */
  describeSqlLogTemplatesList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'MaxRecordsPerPage')) {
      throw new TypeError('parameter "MaxRecordsPerPage" is required');
    }

    if (!hasOwnProperty(params, 'PageNumbers')) {
      throw new TypeError('parameter "PageNumbers" is required');
    }

    return this.request('DescribeSqlLogTemplatesList', params, options);
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
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} TimeLevel - timeLevel. optional.
   * @param {String} TemplateHash - templateHash. optional.
   * @param {String} SortKey - sortKey. optional.
   * @param {String} JobId - jobId. optional.
   */
  describeSqlLogTemplatesTimeDistribution(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeSqlLogTemplatesTimeDistribution', params, options);
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
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} TimeLevel - timeLevel. optional.
   * @param {String} JobId - jobId. optional.
   */
  describeSqlLogTimeDistribution(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeSqlLogTimeDistribution', params, options);
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
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} JobId - jobId. optional.
   */
  describeSqlTemplatesConsumeAndScanRows(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeSqlTemplatesConsumeAndScanRows', params, options);
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceName - dbInstanceName. required.
   */
  describeSyncAccountForInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceName')) {
      throw new TypeError('parameter "DBInstanceName" is required');
    }

    return this.request('DescribeSyncAccountForInner', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  describeSyncAccounts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeSyncAccounts', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {String} Tags - tags. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeTags', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - dbInstanceName. required.
   * @param {Long} TaskId - taskId. required.
   */
  describeTaskInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('DescribeTaskInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {String} Status - status. optional.
   * @param {String} TaskAction - taskAction. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeTasks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeTasks', params, options);
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
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} MaxRecordsPerPage - maxRecordsPerPage. required.
   * @param {Integer} PageNumbers - pageNumbers. required.
   * @param {String} PagingId - pagingId. optional.
   * @param {Long} TemplateHash - templateHash. required.
   * @param {String} SortKey - sortKey. optional.
   * @param {String} SortMethod - sortMethod. optional.
   * @param {String} JobId - jobId. optional.
   */
  describeTemplateSqlDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'MaxRecordsPerPage')) {
      throw new TypeError('parameter "MaxRecordsPerPage" is required');
    }

    if (!hasOwnProperty(params, 'PageNumbers')) {
      throw new TypeError('parameter "PageNumbers" is required');
    }

    if (!hasOwnProperty(params, 'TemplateHash')) {
      throw new TypeError('parameter "TemplateHash" is required');
    }

    return this.request('DescribeTemplateSqlDetail', params, options);
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
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeTemplatesConsumeAndScanRows(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeTemplatesConsumeAndScanRows', params, options);
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
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} MaxRecordsPerPage - maxRecordsPerPage. required.
   * @param {Integer} PageNumbers - pageNumbers. required.
   * @param {Integer} MinAvgConsume - minAvgConsume. optional.
   * @param {Integer} MaxAvgConsume - maxAvgConsume. optional.
   * @param {Integer} MinAvgScanRows - minAvgScanRows. optional.
   * @param {Integer} MaxAvgScanRows - maxAvgScanRows. optional.
   * @param {String} PagingId - pagingId. optional.
   * @param {String} SortKey - sortKey. optional.
   * @param {String} SortMethod - sortMethod. optional.
   * @param {String} SqType - sqType. optional.
   */
  describeTemplatesList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'MaxRecordsPerPage')) {
      throw new TypeError('parameter "MaxRecordsPerPage" is required');
    }

    if (!hasOwnProperty(params, 'PageNumbers')) {
      throw new TypeError('parameter "PageNumbers" is required');
    }

    return this.request('DescribeTemplatesList', params, options);
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
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} MinConsume - minConsume. optional.
   * @param {String} MaxConsume - maxConsume. optional.
   * @param {String} MinScanRows - minScanRows. optional.
   * @param {String} MaxScanRows - maxScanRows. optional.
   * @param {String} PagingId - pagingId. optional.
   * @param {String} SortKey - sortKey. optional.
   * @param {String} SortMethod - sortMethod. optional.
   */
  describeTemplatesSqlType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeTemplatesSqlType', params, options);
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
  describeUserEncryptionKeyList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeUserEncryptionKeyList', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Region - region. optional.
   * @param {String} ZoneId - availableArea. optional.
   */
  describeVpcZoneNos(params = {}, options = {}) {
    return this.request('DescribeVpcZoneNos', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  destroyDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DestroyDBInstance', params, options);
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
  evaluateFailover(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReplicaId')) {
      throw new TypeError('parameter "ReplicaId" is required');
    }

    return this.request('EvaluateFailover', params, options);
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
   * @param {String} ZoneId - zoneId. required.
   * @param {String} Engine - engine. required.
   * @param {String} EngineVersion - engineVersion. required.
   * @param {String} DBInstanceClass - dbInstanceClass. required.
   * @param {String} DBInstanceStorage - storage. optional.
   * @param {String} ShardsInfo - shardsInfo. optional.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   */
  evaluateResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
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

    return this.request('EvaluateResource', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} BackupId - backupSetId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  extractBackupFromOAS(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'BackupId')) {
      throw new TypeError('parameter "BackupId" is required');
    }

    return this.request('ExtractBackupFromOAS', params, options);
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
   * @param {String} PrimaryInstanceId - primaryInstanceId. optional.
   */
  failover(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReplicaId')) {
      throw new TypeError('parameter "ReplicaId" is required');
    }

    return this.request('Failover', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} DBName - dbName. required.
   * @param {String} AccountPrivilege - accountPrivilege. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  grantAccountPrivilege(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    if (!hasOwnProperty(params, 'AccountPrivilege')) {
      throw new TypeError('parameter "AccountPrivilege" is required');
    }

    return this.request('GrantAccountPrivilege', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ExpiredTime - expiredTime. required.
   * @param {String} Privileges - operatorType. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  grantOperatorPermission(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ExpiredTime')) {
      throw new TypeError('parameter "ExpiredTime" is required');
    }

    if (!hasOwnProperty(params, 'Privileges')) {
      throw new TypeError('parameter "Privileges" is required');
    }

    return this.request('GrantOperatorPermission', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} FileName - fileName. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  importDataForSQLServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    return this.request('ImportDataForSQLServer', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} SourceDatabaseIp - sourceDatabaseIp. required.
   * @param {String} SourceDatabasePort - sourceDatabasePort. required.
   * @param {String} SourceDatabaseUserName - sourceDatabaseUserName. required.
   * @param {String} SourceDatabasePassword - sourceDatabasePassword. required.
   * @param {String} ImportDataType - importDataType. required.
   * @param {String} IsLockTable - isLockTable. required.
   * @param {String} SourceDatabaseDBNames - sourceDatabaseDBNames. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  importDataFromDatabase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SourceDatabaseIp')) {
      throw new TypeError('parameter "SourceDatabaseIp" is required');
    }

    if (!hasOwnProperty(params, 'SourceDatabasePort')) {
      throw new TypeError('parameter "SourceDatabasePort" is required');
    }

    if (!hasOwnProperty(params, 'SourceDatabaseUserName')) {
      throw new TypeError('parameter "SourceDatabaseUserName" is required');
    }

    if (!hasOwnProperty(params, 'SourceDatabasePassword')) {
      throw new TypeError('parameter "SourceDatabasePassword" is required');
    }

    if (!hasOwnProperty(params, 'ImportDataType')) {
      throw new TypeError('parameter "ImportDataType" is required');
    }

    if (!hasOwnProperty(params, 'IsLockTable')) {
      throw new TypeError('parameter "IsLockTable" is required');
    }

    if (!hasOwnProperty(params, 'SourceDatabaseDBNames')) {
      throw new TypeError('parameter "SourceDatabaseDBNames" is required');
    }

    return this.request('ImportDataFromDatabase', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - targetInstanceName. required.
   * @param {String} SourceDBInstanceId - instanceName. required.
   * @param {String} DBInfo - dbInfo. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  importDatabaseBetweenInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SourceDBInstanceId')) {
      throw new TypeError('parameter "SourceDBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBInfo')) {
      throw new TypeError('parameter "DBInfo" is required');
    }

    return this.request('ImportDatabaseBetweenInstances', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} LockReason - lockReason. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  lockDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'LockReason')) {
      throw new TypeError('parameter "LockReason" is required');
    }

    return this.request('LockDBInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ServiceRequestType - serviceRequestType. required.
   * @param {String} ServiceRequestParam - serviceRequestParam. required.
   */
  loginDBInstancefromCloudDBA(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceRequestType')) {
      throw new TypeError('parameter "ServiceRequestType" is required');
    }

    if (!hasOwnProperty(params, 'ServiceRequestParam')) {
      throw new TypeError('parameter "ServiceRequestParam" is required');
    }

    return this.request('LoginDBInstancefromCloudDBA', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  migrateSecurityIPMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('MigrateSecurityIPMode', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} TargetRegionId - targetRegionId. required.
   * @param {String} TargetZoneId - targetZoneId. required.
   * @param {String} TargetVpcId - targetVpcId. required.
   * @param {String} TargetVSwitchId - targetVSwitchId. required.
   * @param {String} SwitchTime - switchTime. optional.
   * @param {String} EffectiveTime - effectiveTime. optional.
   */
  migrateToOtherRegion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'TargetRegionId')) {
      throw new TypeError('parameter "TargetRegionId" is required');
    }

    if (!hasOwnProperty(params, 'TargetZoneId')) {
      throw new TypeError('parameter "TargetZoneId" is required');
    }

    if (!hasOwnProperty(params, 'TargetVpcId')) {
      throw new TypeError('parameter "TargetVpcId" is required');
    }

    if (!hasOwnProperty(params, 'TargetVSwitchId')) {
      throw new TypeError('parameter "TargetVSwitchId" is required');
    }

    return this.request('MigrateToOtherRegion', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} VPCId - vpcId. optional.
   * @param {String} ZoneId - zoneId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} EffectiveTime - effectiveTime. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} Category - category. optional.
   * @param {String} ZoneIdSlave1 - zoneIdSlave1. optional.
   * @param {String} ZoneIdSlave2 - zoneIdSlave2. optional.
   */
  migrateToOtherZone(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    return this.request('MigrateToOtherZone', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} AccountDescription - accountDescription. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
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
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} BackupPolicyMode - backupPolicyMode. optional.
   * @param {String} PreferredBackupTime - backupTime. optional.
   * @param {String} PreferredBackupPeriod - backupPeriod. optional.
   * @param {String} BackupRetentionPeriod - backupRetentionPeriod. optional.
   * @param {String} BackupLog - backupLog. optional.
   * @param {String} LogBackupRetentionPeriod - logBackupRetentionPeriod. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} EnableBackupLog - enableBackupLog. optional.
   * @param {String} LocalLogRetentionHours - logBackupLocalRetentionPeriod. optional.
   * @param {String} LocalLogRetentionSpace - logBackupLocalRetentionSpace. optional.
   * @param {String} HighSpaceUsageProtection - forceCleanOnHighSpaceUsage. optional.
   * @param {String} Duplication - dumpBinlogEnable. optional.
   * @param {String} DuplicationContent - duplicationContent. optional.
   * @param {String} DuplicationLocation - duplicationLocation. optional.
   * @param {String} LogBackupFrequency - logBackupFrequency. optional.
   */
  modifyBackupPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('ModifyBackupPolicy', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} Collation - collation. optional.
   * @param {String} Timezone - timezone. optional.
   */
  modifyCollationTimeZone(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('ModifyCollationTimeZone', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. required.
   * @param {String} DBInstanceId - instanceName. required.
   */
  modifyCommodity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('ModifyCommodity', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} DBName - dbName. required.
   * @param {String} DBDescription - dbDescription. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyDBDescription(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    if (!hasOwnProperty(params, 'DBDescription')) {
      throw new TypeError('parameter "DBDescription" is required');
    }

    return this.request('ModifyDBDescription', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - jstInstanceName. required.
   * @param {String} ChargeType - chargeType. optional. default: PREPAY.
   * @param {Long} JuShiTaInstanceUid - jstInstanceUid. required.
   */
  modifyDBInstanceChargeTypeForJuShiTa(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JuShiTaInstanceUid')) {
      throw new TypeError('parameter "JuShiTaInstanceUid" is required');
    }

    return this.request('ModifyDBInstanceChargeTypeForJuShiTa', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ConnectionMode - connectionMode. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyDBInstanceConnectionMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConnectionMode')) {
      throw new TypeError('parameter "ConnectionMode" is required');
    }

    return this.request('ModifyDBInstanceConnectionMode', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} CurrentConnectionString - currentConnectionString. required.
   * @param {String} ConnectionStringPrefix - connectionStringPrefix. required.
   * @param {String} Port - port. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyDBInstanceConnectionString(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentConnectionString')) {
      throw new TypeError('parameter "CurrentConnectionString" is required');
    }

    if (!hasOwnProperty(params, 'ConnectionStringPrefix')) {
      throw new TypeError('parameter "ConnectionStringPrefix" is required');
    }

    if (!hasOwnProperty(params, 'Port')) {
      throw new TypeError('parameter "Port" is required');
    }

    return this.request('ModifyDBInstanceConnectionString', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ReadSQLReplicationTime - sqlDelay. required.
   */
  modifyDBInstanceDelayReplicationTime(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ReadSQLReplicationTime')) {
      throw new TypeError('parameter "ReadSQLReplicationTime" is required');
    }

    return this.request('ModifyDBInstanceDelayReplicationTime', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ReadSQLReplicationTime - sqlDelay. required.
   */
  modifyDBInstanceDelayedReplicationTime(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ReadSQLReplicationTime')) {
      throw new TypeError('parameter "ReadSQLReplicationTime" is required');
    }

    return this.request('ModifyDBInstanceDelayedReplicationTime', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} DBInstanceDescription - description. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} SecurityGroupId - ecsSecurityGroupId. required.
   */
  modifyDBInstanceECSSGRelation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityGroupId')) {
      throw new TypeError('parameter "SecurityGroupId" is required');
    }

    return this.request('ModifyDBInstanceECSSGRelation', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SyncMode - syncMode. required.
   * @param {String} HAMode - haMode. required.
   * @param {String} DbInstanceId - dbInstanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyDBInstanceHAConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SyncMode')) {
      throw new TypeError('parameter "SyncMode" is required');
    }

    if (!hasOwnProperty(params, 'HAMode')) {
      throw new TypeError('parameter "HAMode" is required');
    }

    if (!hasOwnProperty(params, 'DbInstanceId')) {
      throw new TypeError('parameter "DbInstanceId" is required');
    }

    return this.request('ModifyDBInstanceHAConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} MaintainTime - maintainTime. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyDBInstanceMaintainTime(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'MaintainTime')) {
      throw new TypeError('parameter "MaintainTime" is required');
    }

    return this.request('ModifyDBInstanceMaintainTime', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceName. required.
   * @param {String} Period - period. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyDBInstanceMonitor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    return this.request('ModifyDBInstanceMonitor', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ConnectionString - connectionString. required.
   * @param {Integer} ClassicExpiredDays - classicExpendExpiredDays. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyDBInstanceNetExpireTime(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConnectionString')) {
      throw new TypeError('parameter "ConnectionString" is required');
    }

    if (!hasOwnProperty(params, 'ClassicExpiredDays')) {
      throw new TypeError('parameter "ClassicExpiredDays" is required');
    }

    return this.request('ModifyDBInstanceNetExpireTime', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ConnectionString - connectionString. required.
   * @param {Integer} ClassicExpiredDays - classicExpendExpiredDays. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyDBInstanceNetworkExpireTime(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConnectionString')) {
      throw new TypeError('parameter "ConnectionString" is required');
    }

    if (!hasOwnProperty(params, 'ClassicExpiredDays')) {
      throw new TypeError('parameter "ClassicExpiredDays" is required');
    }

    return this.request('ModifyDBInstanceNetworkExpireTime', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} RetainClassic - retainClassic. optional. default: False.
   * @param {String} ClassicExpiredDays - classicExpiredDays. optional.
   * @param {String} InstanceNetworkType - instanceNetworkType. required.
   * @param {Integer} ReadWriteSplittingClassicExpiredDays - rwSplitClassicExpiredDays. optional. default: 60.
   * @param {String} VPCId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} PrivateIpAddress - cloudInstanceIp. optional.
   * @param {String} ReadWriteSplittingPrivateIpAddress - ReadWriteSplittingPrivateIpAddress. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyDBInstanceNetworkType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceNetworkType')) {
      throw new TypeError('parameter "InstanceNetworkType" is required');
    }

    return this.request('ModifyDBInstanceNetworkType', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} NewUID - newUID. required.
   */
  modifyDBInstanceOwner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'NewUID')) {
      throw new TypeError('parameter "NewUID" is required');
    }

    return this.request('ModifyDBInstanceOwner', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {Integer} UsedTime - usedTime. optional.
   * @param {String} PayType - payType. required.
   * @param {String} Period - timeType. required.
   * @param {String} AutoPay - autoPay. optional. default: false.
   * @param {String} Resource - resource. optional. default: buy.
   * @param {String} AgentId - agentId. optional.
   * @param {String} BusinessInfo - businessInfo. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyDBInstancePayType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PayType')) {
      throw new TypeError('parameter "PayType" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    return this.request('ModifyDBInstancePayType', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ProxyConfigurationKey - proxyConfigurationKey. required.
   * @param {String} ProxyConfigurationValue - proxyConfigurationValue. required.
   */
  modifyDBInstanceProxyConfiguration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ProxyConfigurationKey')) {
      throw new TypeError('parameter "ProxyConfigurationKey" is required');
    }

    if (!hasOwnProperty(params, 'ProxyConfigurationValue')) {
      throw new TypeError('parameter "ProxyConfigurationValue" is required');
    }

    return this.request('ModifyDBInstanceProxyConfiguration', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ConnectionString - connectionString. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyDBInstanceSSL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConnectionString')) {
      throw new TypeError('parameter "ConnectionString" is required');
    }

    return this.request('ModifyDBInstanceSSL', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} DBInstanceClass - dbInstanceClass. optional.
   * @param {Integer} DBInstanceStorage - dbInstanceStorage. optional.
   * @param {String} PayType - payType. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} EffectiveTime - effectiveTime. optional.
   * @param {String} EngineVersion - engineVersion. optional.
   */
  modifyDBInstanceSpec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PayType')) {
      throw new TypeError('parameter "PayType" is required');
    }

    return this.request('ModifyDBInstanceSpec', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} TDEStatus - tdeStatus. required.
   * @param {String} DBName - dbName. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} EncryptionKey - encryptionKey. optional.
   * @param {String} RoleArn - roleARN. optional.
   */
  modifyDBInstanceTDE(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'TDEStatus')) {
      throw new TypeError('parameter "TDEStatus" is required');
    }

    return this.request('ModifyDBInstanceTDE', params, options);
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
   * @param {String} PolicyName - policyName. required.
   * @param {String} Handlers - handlers. optional.
   * @param {String} SourceRules - sourceRules. optional.
   * @param {String} TimeRules - timeRules. optional.
   * @param {String} ActionRules - actionRules. optional.
   */
  modifyDampPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PolicyName')) {
      throw new TypeError('parameter "PolicyName" is required');
    }

    return this.request('ModifyDampPolicy', params, options);
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
   * @param {String} DynamicMode - dynamicMode. required.
   */
  modifyDynamicMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReplicaId')) {
      throw new TypeError('parameter "ReplicaId" is required');
    }

    if (!hasOwnProperty(params, 'DynamicMode')) {
      throw new TypeError('parameter "DynamicMode" is required');
    }

    return this.request('ModifyDynamicMode', params, options);
  }

  /**
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional. default: cn-hangzhou.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} TriggerId - triggerId. required.
   * @param {String} TriggerArn - triggerArn. required.
   * @param {String} FunctionArn - functionArn. required.
   * @param {String} InvocationRoleArn - invocationRoleArn. required.
   * @param {RepeatList} SubscriptionObjects - subscriptionObjects. optional.
   * @param {String} EventFormat - eventFormat. required.
   * @param {Integer} Concurrency - concurrency. required.
   * @param {Integer} Retry - retry. required.
   */
  modifyFCTrigger(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TriggerId')) {
      throw new TypeError('parameter "TriggerId" is required');
    }

    if (!hasOwnProperty(params, 'TriggerArn')) {
      throw new TypeError('parameter "TriggerArn" is required');
    }

    if (!hasOwnProperty(params, 'FunctionArn')) {
      throw new TypeError('parameter "FunctionArn" is required');
    }

    if (!hasOwnProperty(params, 'InvocationRoleArn')) {
      throw new TypeError('parameter "InvocationRoleArn" is required');
    }

    if (!hasOwnProperty(params, 'EventFormat')) {
      throw new TypeError('parameter "EventFormat" is required');
    }

    if (!hasOwnProperty(params, 'Concurrency')) {
      throw new TypeError('parameter "Concurrency" is required');
    }

    if (!hasOwnProperty(params, 'Retry')) {
      throw new TypeError('parameter "Retry" is required');
    }

    return this.request('ModifyFCTrigger', params, options);
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
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} Duration - duration. optional.
   * @param {String} AutoRenew - autoRenew. optional. default: False.
   */
  modifyInstanceAutoRenewAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('ModifyInstanceAutoRenewAttribute', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} Duration - duration. optional.
   * @param {String} AutoRenew - autoRenew. optional. default: False.
   */
  modifyInstanceAutoRenewalAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('ModifyInstanceAutoRenewalAttribute', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} SqlDelay - sqlDelay. required.
   */
  modifyMySQLDBInstanceDelay(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SqlDelay')) {
      throw new TypeError('parameter "SqlDelay" is required');
    }

    return this.request('ModifyMySQLDBInstanceDelay', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} LcuQuota - lcuQuota. required.
   * @param {String} StorageQuota - storageQuota. required.
   * @param {String} SpecQuota - specQuota. optional.
   * @param {String} SearchType - searchType. required.
   */
  modifyOpenSearchDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'LcuQuota')) {
      throw new TypeError('parameter "LcuQuota" is required');
    }

    if (!hasOwnProperty(params, 'StorageQuota')) {
      throw new TypeError('parameter "StorageQuota" is required');
    }

    if (!hasOwnProperty(params, 'SearchType')) {
      throw new TypeError('parameter "SearchType" is required');
    }

    return this.request('ModifyOpenSearchDBInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} Parameters - parameters. required.
   * @param {Boolean} Forcerestart - forcerestart. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyParameter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Parameters')) {
      throw new TypeError('parameter "Parameters" is required');
    }

    return this.request('ModifyParameter', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ParameterGroupId - parameterGroupId. required.
   * @param {String} ParameterGroupName - parameterGroupName. optional.
   * @param {String} ParameterGroupDesc - parameterGroupDesc. optional.
   * @param {String} Parameters - parameters. optional.
   * @param {String} RegionId - regionId. required.
   */
  modifyParameterGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ParameterGroupId')) {
      throw new TypeError('parameter "ParameterGroupId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ModifyParameterGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} DBInstanceClass - dbInstanceClass. optional.
   * @param {Integer} DBInstanceStorage - dbInstanceStorage. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyPostpaidDBInstanceSpec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('ModifyPostpaidDBInstanceSpec', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ConnectionStringPrefix - connectionStringPrefix. optional.
   * @param {String} Port - port. optional.
   * @param {String} MaxDelayTime - maxDelayTime. optional.
   * @param {String} DistributionType - distributionType. optional.
   * @param {String} Weight - weight. optional.
   */
  modifyReadWriteSplittingConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('ModifyReadWriteSplittingConnection', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ReadSQLReplicationTime - sqlDelay. required.
   */
  modifyReadonlyInstanceDelayReplicationTime(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ReadSQLReplicationTime')) {
      throw new TypeError('parameter "ReadSQLReplicationTime" is required');
    }

    return this.request('ModifyReadonlyInstanceDelayReplicationTime', params, options);
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
   * @param {String} DynamicMode - dynamicMode. required.
   */
  modifyReplicaDynamicMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReplicaId')) {
      throw new TypeError('parameter "ReplicaId" is required');
    }

    if (!hasOwnProperty(params, 'DynamicMode')) {
      throw new TypeError('parameter "DynamicMode" is required');
    }

    return this.request('ModifyReplicaDynamicMode', params, options);
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
   * @param {String} FillterDDL - fillterDDL. optional.
   */
  modifyReplicaFilterMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReplicaId')) {
      throw new TypeError('parameter "ReplicaId" is required');
    }

    return this.request('ModifyReplicaFilterMode', params, options);
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
   * @param {String} RecoverMode - recoverMode. required.
   */
  modifyReplicaRecoverMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReplicaId')) {
      throw new TypeError('parameter "ReplicaId" is required');
    }

    if (!hasOwnProperty(params, 'RecoverMode')) {
      throw new TypeError('parameter "RecoverMode" is required');
    }

    return this.request('ModifyReplicaRecoverMode', params, options);
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ResourceGroupId - resourceGroupId. required.
   */
  modifyResourceGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceGroupId')) {
      throw new TypeError('parameter "ResourceGroupId" is required');
    }

    return this.request('ModifyResourceGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} SQLCollectorStatus - sqlCollectorStatus. required.
   * @param {Integer} StoragePeriod - storagePeriod. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifySQLCollectorPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SQLCollectorStatus')) {
      throw new TypeError('parameter "SQLCollectorStatus" is required');
    }

    return this.request('ModifySQLCollectorPolicy', params, options);
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
   * @param {String} ConfigValue - configValue. required.
   */
  modifySQLCollectorRetention(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConfigValue')) {
      throw new TypeError('parameter "ConfigValue" is required');
    }

    return this.request('ModifySQLCollectorRetention', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} SecurityGroupId - ecsSecurityGroupId. required.
   */
  modifySecurityGroupConfiguration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityGroupId')) {
      throw new TypeError('parameter "SecurityGroupId" is required');
    }

    return this.request('ModifySecurityGroupConfiguration', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} SecurityIps - securityIPList. required.
   * @param {String} DBInstanceIPArrayName - groupName. optional.
   * @param {String} DBInstanceIPArrayAttribute - groupTag. optional.
   * @param {String} SecurityIPType - securityIPType. optional. default: IPv4.
   * @param {String} WhitelistNetworkType - whitelistNetType. optional.
   * @param {String} SecurityGroupId - securityGroupName. optional.
   * @param {String} ModifyMode - modifyMode. optional. default: 0.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} SecurityIps - securityIPList. required.
   * @param {String} DBInstanceIPArrayName - groupName. optional.
   * @param {String} DBInstanceIPArrayAttribute - groupTag. optional.
   * @param {String} SecurityIPType - securityIPType. optional.
   * @param {String} WhitelistNetworkType - whitelistNetType. optional.
   * @param {String} SecurityGroupId - securityGroupName. optional.
   * @param {String} ModifyMode - modifyMode. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifySecurityIpsForChannel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityIps')) {
      throw new TypeError('parameter "SecurityIps" is required');
    }

    return this.request('ModifySecurityIpsForChannel', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} SourceDatabaseIp - sourceDatabaseIp. required.
   * @param {String} SourceDatabasePort - sourceDatabasePort. required.
   * @param {String} SourceDatabaseUserName - sourceDatabaseUserName. required.
   * @param {String} SourceDatabasePassword - sourceDatabasePassword. required.
   * @param {String} ImportDataType - importDataType. required.
   * @param {String} SourceDatabaseDBNames - sourceDatabaseDBNames. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  preCheckBeforeImportData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SourceDatabaseIp')) {
      throw new TypeError('parameter "SourceDatabaseIp" is required');
    }

    if (!hasOwnProperty(params, 'SourceDatabasePort')) {
      throw new TypeError('parameter "SourceDatabasePort" is required');
    }

    if (!hasOwnProperty(params, 'SourceDatabaseUserName')) {
      throw new TypeError('parameter "SourceDatabaseUserName" is required');
    }

    if (!hasOwnProperty(params, 'SourceDatabasePassword')) {
      throw new TypeError('parameter "SourceDatabasePassword" is required');
    }

    if (!hasOwnProperty(params, 'ImportDataType')) {
      throw new TypeError('parameter "ImportDataType" is required');
    }

    if (!hasOwnProperty(params, 'SourceDatabaseDBNames')) {
      throw new TypeError('parameter "SourceDatabaseDBNames" is required');
    }

    return this.request('PreCheckBeforeImportData', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  purgeDBInstanceLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('PurgeDBInstanceLog', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  queryOssBuckets(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('QueryOssBuckets', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} CommodityCode - commodity. required.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Engine - engine. required.
   * @param {String} EngineVersion - engineVersion. required.
   * @param {String} DBInstanceClass - dbInstanceClass. required.
   * @param {String} SystemDBCharset - systemDBCharset. optional.
   * @param {String} DBInstanceNetType - dbInstanceNetType. optional. default: 0.
   * @param {String} DBInstanceDescription - dbInstanceDescription. optional.
   * @param {String} SecurityIPList - securityIPList. optional.
   * @param {String} PayType - payType. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} InstanceNetworkType - instanceNetworkType. optional. default: Classic.
   * @param {String} UsedTime - usedTime. optional.
   * @param {String} TimeType - timeType. optional.
   * @param {Integer} Quantity - quantity. required.
   * @param {Boolean} AutoPay - autoPay. optional.
   * @param {Integer} InstanceUsedType - dbInstanceUsedType. optional.
   * @param {String} Resource - resource. optional.
   * @param {String} ConnectionMode - connectionMode. optional. default: proxy.
   * @param {String} VPCId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} PrivateIpAddress - cloudInstanceIp. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} OrderType - orderType. required.
   * @param {String} CountryCode - countryCode. optional.
   * @param {String} CurrencyCode - currencyCode. optional.
   * @param {String} DBInstanceStorageType - dbInstanceStorageType. optional.
   * @param {Integer} DBInstanceStorage - dbInstanceStorage. optional.
   * @param {String} PromotionCode - promotionCode. optional.
   * @param {String} BusinessInfo - businessInfo. optional.
   * @param {String} OrderParamOut - lxOrderParamOut. optional. default: No.
   */
  queryPrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CommodityCode')) {
      throw new TypeError('parameter "CommodityCode" is required');
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

    if (!hasOwnProperty(params, 'Quantity')) {
      throw new TypeError('parameter "Quantity" is required');
    }

    if (!hasOwnProperty(params, 'OrderType')) {
      throw new TypeError('parameter "OrderType" is required');
    }

    return this.request('QueryPrice', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} CommodityCode - commodity. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} Engine - engine. required.
   * @param {String} EngineVersion - engineVersion. required.
   * @param {String} DBInstanceClass - dbInstanceClass. required.
   * @param {Integer} DBInstanceStorage - dbInstanceStorage. required.
   * @param {String} PayType - payType. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UsedTime - usedTime. optional.
   * @param {String} TimeType - timeType. optional.
   * @param {Integer} Quantity - quantity. required.
   * @param {Integer} InstanceUsedType - dbInstanceUsedType. optional.
   * @param {String} OrderType - orderType. optional. default: BUY.
   */
  queryPriceForBuy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CommodityCode')) {
      throw new TypeError('parameter "CommodityCode" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
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

    if (!hasOwnProperty(params, 'Quantity')) {
      throw new TypeError('parameter "Quantity" is required');
    }

    return this.request('QueryPriceForBuy', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} CommodityCode - commodity. required.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} OrderType - orderType. optional.
   * @param {String} CountryCode - countryCode. optional.
   * @param {String} CurrencyCode - currencyCode. optional.
   * @param {String} PromotionCode - promotionCode. optional.
   * @param {String} BusinessInfo - businessInfo. optional.
   */
  queryPriceForRefund(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CommodityCode')) {
      throw new TypeError('parameter "CommodityCode" is required');
    }

    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('QueryPriceForRefund', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} CommodityCode - commodity. required.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} OrderType - orderType. optional.
   * @param {String} CountryCode - countryCode. optional.
   * @param {String} CurrencyCode - currencyCode. optional.
   * @param {String} PromotionCode - promotionCode. optional.
   * @param {String} UsedTime - usedTime. required.
   * @param {String} DBInstanceClass - dbInstanceClass. required.
   * @param {String} BusinessInfo - businessInfo. optional.
   */
  queryPriceForTempUpgrade(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CommodityCode')) {
      throw new TypeError('parameter "CommodityCode" is required');
    }

    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UsedTime')) {
      throw new TypeError('parameter "UsedTime" is required');
    }

    if (!hasOwnProperty(params, 'DBInstanceClass')) {
      throw new TypeError('parameter "DBInstanceClass" is required');
    }

    return this.request('QueryPriceForTempUpgrade', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} Param - param. required.
   * @param {String} OrderType - orderType. required.
   */
  queryPriceMulti(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Param')) {
      throw new TypeError('parameter "Param" is required');
    }

    if (!hasOwnProperty(params, 'OrderType')) {
      throw new TypeError('parameter "OrderType" is required');
    }

    return this.request('QueryPriceMulti', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Resource - resource. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} PromotionCode - promotionCode. optional.
   * @param {String} BusinessInfo - businessInfo. optional.
   */
  queryPriceMultiForDefer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('QueryPriceMultiForDefer', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceName. required.
   * @param {String} GuardDBInstanceId - guardDbInstanceName. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  receiveDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'GuardDBInstanceId')) {
      throw new TypeError('parameter "GuardDBInstanceId" is required');
    }

    return this.request('ReceiveDBInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceClass - dbInstanceClass. optional.
   * @param {Integer} DBInstanceStorage - dbInstanceStorage. optional.
   * @param {String} DBInstanceDescription - dbInstanceDescription. optional.
   * @param {String} PayType - payType. optional.
   * @param {String} InstanceNetworkType - instanceNetworkType. optional.
   * @param {String} DBInstanceId - sourceDBInstanceName. optional.
   * @param {String} TargetDBInstanceId - targetDBInstanceName. optional.
   * @param {String} DbNames - backupDbNames. required.
   * @param {String} BackupId - backupSetId. optional.
   * @param {String} RestoreTime - restoreTime. optional.
   * @param {String} VPCId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} PrivateIpAddress - cloudInstanceIp. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UsedTime - usedTime. optional.
   * @param {String} Period - timeType. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  recoveryDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DbNames')) {
      throw new TypeError('parameter "DbNames" is required');
    }

    return this.request('RecoveryDBInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} CurrentConnectionString - connectionString. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  releaseInstancePublicConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentConnectionString')) {
      throw new TypeError('parameter "CurrentConnectionString" is required');
    }

    return this.request('ReleaseInstancePublicConnection', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  releaseReadWriteSplittingConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('ReleaseReadWriteSplittingConnection', params, options);
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} Tags - tags. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Tag} Tag - undefined. optional.
   */
  removeTagsFromResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('RemoveTagsFromResource', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} Period - period. required.
   * @param {String} AutoPay - payMode. optional. default: False.
   */
  renewDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    return this.request('RenewDBInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} Period - period. required.
   * @param {String} AutoPay - payMode. optional. default: False.
   * @param {String} BusinessInfo - businessInfo. optional.
   */
  renewInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    return this.request('RenewInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ServiceRequestType - serviceRequestType. required.
   * @param {String} ServiceRequestParam - serviceRequestParam. required.
   */
  requestServiceOfCloudDBA(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceRequestType')) {
      throw new TypeError('parameter "ServiceRequestType" is required');
    }

    if (!hasOwnProperty(params, 'ServiceRequestParam')) {
      throw new TypeError('parameter "ServiceRequestParam" is required');
    }

    return this.request('RequestServiceOfCloudDBA', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ServiceRequestType - serviceRequestType. required.
   * @param {String} ServiceRequestParam - serviceRequestParam. required.
   */
  requestServiceOfCloudDBExpert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceRequestType')) {
      throw new TypeError('parameter "ServiceRequestType" is required');
    }

    if (!hasOwnProperty(params, 'ServiceRequestParam')) {
      throw new TypeError('parameter "ServiceRequestParam" is required');
    }

    return this.request('RequestServiceOfCloudDBExpert', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} AccountPassword - accountPassword. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  resetAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'AccountPassword')) {
      throw new TypeError('parameter "AccountPassword" is required');
    }

    return this.request('ResetAccount', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} AccountPassword - accountPassword. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  resetAccountForPG(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'AccountPassword')) {
      throw new TypeError('parameter "AccountPassword" is required');
    }

    return this.request('ResetAccountForPG', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} AccountPassword - accountNewPassword. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} AccountPassword - accountNewPassword. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  resetAdminAccountPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'AccountPassword')) {
      throw new TypeError('parameter "AccountPassword" is required');
    }

    return this.request('ResetAdminAccountPassword', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  restartDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('RestartDBInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} BackupId - backupId. optional.
   * @param {String} RestoreTime - restoreTime. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  restoreDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('RestoreDBInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} BackupId - backupId. optional.
   * @param {String} RestoreTime - restoreTime. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} TableMeta - tableMeta. optional.
   */
  restoreTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('RestoreTable', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} DBName - dbName. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  revokeAccountPrivilege(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    return this.request('RevokeAccountPrivilege', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  revokeOperatorPermission(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('RevokeOperatorPermission', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} QueryKeywords - queryKeyword. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} Database - dbName. optional.
   * @param {String} User - accountName. optional.
   * @param {String} EndTime - endTime. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  startDBInstanceDiagnose(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('StartDBInstanceDiagnose', params, options);
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
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} QueryKeyword - queryKeyword. optional.
   * @param {String} HostAddress - hostAddress. optional.
   * @param {String} DBName - dbName. optional.
   * @param {String} TableName - tableName. optional.
   * @param {Long} MinConsume - minConsume. optional.
   * @param {Long} MaxConsume - maxConsume. optional.
   * @param {Long} MinScanRows - minScanRows. optional.
   * @param {Long} MaxScanRows - maxScanRows. optional.
   * @param {String} State - state. optional.
   * @param {String} SqlType - sqlType. optional.
   * @param {String} AccountName - accountName. optional.
   * @param {String} ThreadID - threadID. optional.
   * @param {String} Columns - columns. optional.
   */
  startSqlLogDetailArchive(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('StartSqlLogDetailArchive', params, options);
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
   * @param {String} ConfigValue - configValue. required.
   * @param {String} Bucket - bucket. required.
   */
  startSqlLogDump(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConfigValue')) {
      throw new TypeError('parameter "ConfigValue" is required');
    }

    if (!hasOwnProperty(params, 'Bucket')) {
      throw new TypeError('parameter "Bucket" is required');
    }

    return this.request('StartSqlLogDump', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  startSqlLogTrail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('StartSqlLogTrail', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {Integer} ImportId - importId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  stopSyncing(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ImportId')) {
      throw new TypeError('parameter "ImportId" is required');
    }

    return this.request('StopSyncing', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  switchDBInstanceChargeType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('SwitchDBInstanceChargeType', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} NodeId - targetInstanceId. required.
   * @param {String} Operation - operation. optional. default: Promote.
   * @param {String} Force - switchType. optional. default: No.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} EffectiveTime - effectiveTime. optional.
   */
  switchDBInstanceHA(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'NodeId')) {
      throw new TypeError('parameter "NodeId" is required');
    }

    return this.request('SwitchDBInstanceHA', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ConnectionStringPrefix - connectionString. required.
   * @param {String} Port - port. optional.
   * @param {String} ConnectionStringType - connectionStringType. optional. default: Normal.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  switchDBInstanceNetType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConnectionStringPrefix')) {
      throw new TypeError('parameter "ConnectionStringPrefix" is required');
    }

    return this.request('SwitchDBInstanceNetType', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} VPCId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} PrivateIpAddress - cloudInstanceIp. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  switchDBInstanceVpc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('SwitchDBInstanceVpc', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  switchGuardToMasterInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('SwitchGuardToMasterInstance', params, options);
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
   * @param {String} PrimaryInstanceId - primaryInstanceId. optional.
   */
  switchOver(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReplicaId')) {
      throw new TypeError('parameter "ReplicaId" is required');
    }

    return this.request('SwitchOver', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
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
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} EngineVersion - engineVersion. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} EffectiveTime - effectiveTime. optional.
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
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} UpgradeTime - switchTimeMode. optional.
   * @param {String} SwitchTime - switchTime. optional.
   */
  upgradeDBInstanceKernelVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('UpgradeDBInstanceKernelVersion', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ConnectionString - connectionString. required.
   */
  upgradeDBInstanceNetWorkInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConnectionString')) {
      throw new TypeError('parameter "ConnectionString" is required');
    }

    return this.request('UpgradeDBInstanceNetWorkInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ConnectionString - connectionString. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  upgradeDBInstanceNetwork(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConnectionString')) {
      throw new TypeError('parameter "ConnectionString" is required');
    }

    return this.request('UpgradeDBInstanceNetwork', params, options);
  }

}

module.exports = Client;

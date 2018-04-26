
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
   * @param {String} Tag.1.key - tagKey1. optional.
   * @param {String} Tag.2.key - tagKey2. optional.
   * @param {String} Tag.3.key - tagKey3. optional.
   * @param {String} Tag.4.key - tagKey4. optional.
   * @param {String} Tag.5.key - tagKey5. optional.
   * @param {String} Tag.1.value - tagValue1. optional.
   * @param {String} Tag.2.value - tagValue2. optional.
   * @param {String} Tag.3.value - tagValue3. optional.
   * @param {String} Tag.4.value - tagValue4. optional.
   * @param {String} Tag.5.value - tagValue5. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
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
   * @param {String} ConnectionStringPrefix - connectionString. optional.
   * @param {String} Port - port. optional.
   * @param {String} MaxDelayTime - maxDelayTime. optional.
   * @param {String} IPType - dbInstanceNetType. optional. default: 0.
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
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceClass - dbInstanceClass. optional.
   * @param {Integer} DBInstanceStorage - dbInstanceStorage. optional.
   * @param {String} DBInstanceDescription - dbInstanceDescription. optional.
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
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} DBName - dbName. optional.
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
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} DBName - dbName. required.
   * @param {String} BackupMode - taskType. required.
   * @param {String} IsOnlineDB - isOnlineDB. required.
   * @param {String} OssObjectPositions - OssObjectPositions. optional.
   * @param {String} OSSUrls - ossUrls. optional.
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
   * @param {String} ResourceGroupId - resourceGroupId. optional.
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
   * @param {String} BackupId - backupSetId. optional.
   * @param {String} RestoreTime - restoreTime. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
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
   * @param {String} BusinessInfo - businessInfo. optional.
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
   * @param {String} Tag.1.key - tagKey1. optional.
   * @param {String} Tag.2.key - tagKey2. optional.
   * @param {String} Tag.3.key - tagKey3. optional.
   * @param {String} Tag.4.key - tagKey4. optional.
   * @param {String} Tag.5.key - tagKey5. optional.
   * @param {String} Tag.1.value - tagValue1. optional.
   * @param {String} Tag.2.value - tagValue2. optional.
   * @param {String} Tag.3.value - tagValue3. optional.
   * @param {String} Tag.4.value - tagValue4. optional.
   * @param {String} Tag.5.value - tagValue5. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
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
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
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
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageSize - maxRecordsPerPage. optional. default: 30.
   * @param {Integer} PageNumber - pageNumbers. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
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
   * @param {String} DBInstanceStatus - dbInstanceStatusDesc. optional.
   * @param {String} SearchKey - description. optional.
   * @param {String} DBInstanceId - dbInstanceId. optional.
   * @param {String} DBInstanceType - instanceUsedType. optional.
   * @param {String} RegionId - region. required.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {String} InstanceNetworkType - instanceNetworkType. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} ConnectionMode - connectionMode. optional.
   * @param {String} Tag.1.key - tagKey1. optional.
   * @param {String} Tag.2.key - tagKey2. optional.
   * @param {String} Tag.3.key - tagKey3. optional.
   * @param {String} Tag.4.key - tagKey4. optional.
   * @param {String} Tag.5.key - tagKey5. optional.
   * @param {String} Tag.1.value - tagValue1. optional.
   * @param {String} Tag.2.value - tagValue2. optional.
   * @param {String} Tag.3.value - tagValue3. optional.
   * @param {String} Tag.4.value - tagValue4. optional.
   * @param {String} Tag.5.value - tagValue5. optional.
   * @param {String} Tags - tags. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
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
   * @param {String} Tag.1.key - tagKey1. optional.
   * @param {String} Tag.2.key - tagKey2. optional.
   * @param {String} Tag.3.key - tagKey3. optional.
   * @param {String} Tag.4.key - tagKey4. optional.
   * @param {String} Tag.5.key - tagKey5. optional.
   * @param {String} Tag.1.value - tagValue1. optional.
   * @param {String} Tag.2.value - tagValue2. optional.
   * @param {String} Tag.3.value - tagValue3. optional.
   * @param {String} Tag.4.value - tagValue4. optional.
   * @param {String} Tag.5.value - tagValue5. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeDBInstancesByPerformance(params = {}, options = {}) {
    return this.request('DescribeDBInstancesByPerformance', params, options);
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
   * @param {String} ClientToken - token. optional.
   * @param {String} Engine - engine. required.
   * @param {String} EngineVersion - engineVersion. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
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
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  describeSecurityGroupConfiguration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeSecurityGroupConfiguration', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {Long} SQLId - sqlId. optional.
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
   * @param {String} ZoneId - zoneId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} EffectiveTime - effectiveTime. optional.
   * @param {String} VSwitchId - vswitchId. optional.
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
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} PreferredBackupTime - backupTime. required.
   * @param {String} PreferredBackupPeriod - backupPeriod. required.
   * @param {String} BackupRetentionPeriod - backupRetentionPeriod. optional.
   * @param {String} BackupLog - backupLog. optional.
   * @param {String} LogBackupRetentionPeriod - logBackupRetentionPeriod. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
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
   * @param {String} Resource - resource. optional. default: openapi.
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
   * @param {String} WhitelistNetworkType - whitelistNetType. optional.
   * @param {String} SecurityGroupName - securityGroupName. optional.
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} OrderType - orderType. required.
   * @param {String} CountryCode - countryCode. optional.
   * @param {String} CurrencyCode - currencyCode. optional.
   * @param {String} PromotionCode - promotionCode. optional.
   * @param {String} BusinessInfo - businessInfo. optional.
   */
  queryPrice(params = {}, options = {}) {
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
   * @param {String} Tag.1.key - tagKey1. optional.
   * @param {String} Tag.2.key - tagKey2. optional.
   * @param {String} Tag.3.key - tagKey3. optional.
   * @param {String} Tag.4.key - tagKey4. optional.
   * @param {String} Tag.5.key - tagKey5. optional.
   * @param {String} Tag.1.value - tagValue1. optional.
   * @param {String} Tag.2.value - tagValue2. optional.
   * @param {String} Tag.3.value - tagValue3. optional.
   * @param {String} Tag.4.value - tagValue4. optional.
   * @param {String} Tag.5.value - tagValue5. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
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
   * @param {String} BackupId - backupId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  switchGuardToMasterInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('SwitchGuardToMasterInstance', params, options);
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
   * @param {String} SwitchTimeMode - switchTimeMode. optional.
   * @param {String} SwitchTime - switchTime. required.
   */
  upgradeDBInstanceKernelVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SwitchTime')) {
      throw new TypeError('parameter "SwitchTime" is required');
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

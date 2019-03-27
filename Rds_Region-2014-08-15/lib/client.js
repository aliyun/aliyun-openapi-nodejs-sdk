
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} DBInstanceId - resourceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Tag} Tag - undefined. optional.
   */
  addTagsToResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('AddTagsToResource', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} AccountPassword - accountPassword. required.
   * @param {String} AccountDescription - accountDescription. optional.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. required.
   * @param {String} Engine - engine. required.
   * @param {String} EngineVersion - engineVersion. required.
   * @param {String} DBInstanceClass - dbInstanceClass. required.
   * @param {Integer} DBInstanceStorage - dbInstanceStorage. required.
   * @param {String} SystemDBCharset - systemDBCharset. optional.
   * @param {String} DBInstanceNetType - dbInstanceNetType. required.
   * @param {String} DBInstanceDescription - dbInstanceDescription. optional.
   * @param {String} SecurityIPList - securityIPList. required.
   * @param {String} PayType - payType. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} InstanceNetworkType - instanceNetworkType. optional. default: Classic.
   * @param {String} ConnectionMode - connectionMode. optional.
   * @param {String} VPCId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} PrivateIpAddress - cloudInstanceIp. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. required.
   * @param {String} SystemDBCharset - systemDBCharset. optional.
   * @param {String} Engine - engine. required.
   * @param {String} EngineVersion - engineVersion. required.
   * @param {String} DBInstanceClass - dbInstanceClass. required.
   * @param {Integer} DBInstanceStorage - dbInstanceStorage. required.
   * @param {String} DBInstanceNetType - dbInstanceNetType. required.
   * @param {String} DBInstanceDescription - dbInstanceDescription. optional.
   * @param {String} SecurityIPList - securityIPList. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} AccountPassword - accountPassword. required.
   * @param {String} PayType - payType. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createDBInstanceForChannel(params = {}, options = {}) {
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
   * @param {String} action - apiName. optional.
   * @param {Long} uid - uid. optional.
   * @param {String} bid - bid. optional.
   * @param {String} uidLoginEmail - uidLoginEmail. optional.
   * @param {String} bidLoginEmail - bidLoginEmail. optional.
   * @param {String} RegionId - region. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionId. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. required.
   * @param {String} ZoneId - zoneId. required.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} DBInstanceClass - dbInstanceClass. required.
   * @param {Integer} DBInstanceStorage - dbInstanceStorage. required.
   * @param {String} EngineVersion - engineVersion. required.
   * @param {String} PayType - payType. required.
   * @param {String} DBInstanceDescription - dbInstanceDescription. optional.
   * @param {String} InstanceNetworkType - instanceNetworkType. optional. default: Classic.
   * @param {String} VPCId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} PrivateIpAddress - cloudInstanceIp. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createReadOnlyDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} DBInstanceId - instanceName. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Tag} Tag - undefined. optional.
   */
  describeAbnormalDBInstances(params = {}, options = {}) {
    return this.request('DescribeAbnormalDBInstances', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
   * @param {String} AccountName - accountName. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeAccounts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeAccounts', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeBackupPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeBackupPolicy', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} Flag - flag. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - dbInstanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - instanceNames. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeDBInstanceAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeDBInstanceAttribute', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeDBInstanceIPArrayList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeDBInstanceIPArrayList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceName. required.
   * @param {String} Flag - flag. optional. default: 1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeDBInstanceNetInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeDBInstanceNetInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceName. required.
   * @param {String} Flag - flag. optional. default: 0.
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - instanceName. required.
   * @param {String} Key - performanceKeys. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} Engine - dbType. optional.
   * @param {String} DBInstanceStatus - dbInstanceStatusDesc. optional.
   * @param {String} SearchKey - description. optional.
   * @param {String} DBInstanceId - instanceNames. optional.
   * @param {String} DBInstanceType - instanceUsedType. optional.
   * @param {String} RegionId - region. required.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {String} InstanceNetworkType - instanceNetworkType. optional.
   * @param {String} ConnectionMode - connectionMode. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeDBInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeDBInstances', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {Integer} ExpirePeriod - availableDays. required.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - currPage. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeDBInstancesByExpireTime(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ExpirePeriod')) {
      throw new TypeError('parameter "ExpirePeriod" is required');
    }

    return this.request('DescribeDBInstancesByExpireTime', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} DBInstanceId - instanceName. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {String} SortMethod - sortMethod. optional. default: ASC.
   * @param {String} SortKey - sortKey. optional. default: CPUUsage.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Tag} Tag - undefined. optional.
   */
  describeDBInstancesByPerformance(params = {}, options = {}) {
    return this.request('DescribeDBInstancesByPerformance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
   * @param {String} DBName - dbName. optional.
   * @param {String} DBStatus - dbStatus. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeDatabases(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeDatabases', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceName. optional.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - instanceName. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeParameters(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeParameters', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - instanceNames. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeResourceUsage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeResourceUsage', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - instanceName. required.
   * @param {Long} SQLId - sqlId. optional.
   * @param {String} QueryKeywords - queryKeyword. optional.
   * @param {String} StartTime - startTime. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - instanceName. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} ReportType - reportType. optional. default: 0.
   * @param {Integer} PageSize - maxRecordsPerPage. optional. default: 30.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceName. required.
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceName. required.
   * @param {String} ZoneId - zoneId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
   * @param {String} PreferredBackupTime - backupTime. required.
   * @param {String} PreferredBackupPeriod - backupPeriod. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} DBInstanceId - dbInstanceName. required.
   * @param {String} InstanceNetworkType - instanceNetworkType. required.
   * @param {String} VPCId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} PrivateIpAddress - cloudInstanceIp. optional.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - instanceName. required.
   * @param {String} SecurityIps - securityIPList. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} DBInstanceId - resourceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Tag} Tag - undefined. optional.
   */
  removeTagsFromResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('RemoveTagsFromResource', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - instanceName. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  restartDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('RestartDBInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - dbInstanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} DBInstanceId - instanceName. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  startDBInstanceDiagnose(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('StartDBInstanceDiagnose', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - instanceName. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - instanceName. required.
   * @param {String} ConnectionStringPrefix - connectionString. required.
   * @param {Integer} Port - port. optional.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceName. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  unlockDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('UnlockDBInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInstanceId - instanceName. required.
   * @param {String} EngineVersion - engineVersion. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
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

}

module.exports = Client;

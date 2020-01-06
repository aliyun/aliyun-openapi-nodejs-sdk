
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-08-01';
    super(config);
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
   * @param {String} DBClusterId - dbClusterId. required.
   */
  abortDBClusterMigration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('AbortDBClusterMigration', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} ConnectionStringPrefix - connectionStringPrefix. required.
   * @param {String} Port - port. required.
   */
  allocateClusterPublicConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ConnectionStringPrefix')) {
      throw new TypeError('parameter "ConnectionStringPrefix" is required');
    }

    if (!hasOwnProperty(params, 'Port')) {
      throw new TypeError('parameter "Port" is required');
    }

    return this.request('AllocateClusterPublicConnection', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ConnectionStringPrefix - connectionStringPrefix. required.
   * @param {String} Port - port. required.
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ConnectionStringPrefix - connectionStringPrefix. required.
   * @param {String} Port - port. required.
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
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} ConnectionStringPrefix - connectionStringPrefix. optional.
   * @param {String} NetType - netType. optional. default: Intranet.
   */
  allocateMPPConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('AllocateMPPConnection', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} ConnectionStringPrefix - connectionStringPrefix. optional.
   * @param {String} NetType - netType. optional. default: Intranet.
   */
  allocateReadWriteSplittingConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('AllocateReadWriteSplittingConnection', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} AccountName - accountName. required.
   */
  checkAccountName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    return this.request('CheckAccountName', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} ConnectionStringPrefix - connectionStringPrefix. required.
   */
  checkConnectionString(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ConnectionStringPrefix')) {
      throw new TypeError('parameter "ConnectionStringPrefix" is required');
    }

    return this.request('CheckConnectionString', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} DBName - dbName. required.
   */
  checkDBName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    return this.request('CheckDBName', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   */
  checkMPPCondition(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('CheckMPPCondition', params, options);
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} DBName - dbName. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} DBTemplate - dbTemplate. required.
   */
  cloneDatabase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'DBTemplate')) {
      throw new TypeError('parameter "DBTemplate" is required');
    }

    return this.request('CloneDatabase', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {Boolean} ContinueEnableBinlog - continueEnableBinlog. optional.
   */
  closeDBClusterMigration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('CloseDBClusterMigration', params, options);
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
   * @param {String} DBClusterId - dbClusterId. required.
   */
  continueDBClusterMigration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('ContinueDBClusterMigration', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} AccountPassword - accountPassword. required.
   * @param {String} AccountType - accountType. optional. default: Super.
   * @param {String} AccountDescription - accountDescription. optional.
   * @param {String} DBName - dbName. optional.
   * @param {String} AccountPrivilege - accountPrivilege. optional.
   */
  createAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   */
  createBackup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('CreateBackup', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} Engine - engine. optional. default: POLARDB.
   * @param {String} DBType - dbType. required.
   * @param {String} DBVersion - dbVersion. required.
   * @param {String} DBNodeClass - dbInstanceClass. required.
   * @param {String} ClusterNetworkType - clusterNetworkType. optional. default: VPC.
   * @param {String} DBClusterDescription - dbClusterDescription. optional.
   * @param {String} PayType - payType. required.
   * @param {Boolean} AutoRenew - autoRenew. optional. default: false.
   * @param {String} Period - period. optional.
   * @param {String} UsedTime - usedTime. optional.
   * @param {String} VPCId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} CreationOption - creationOption. optional.
   * @param {String} SourceResourceId - sourceResourceId. optional.
   * @param {String} CloneDataPoint - cloneDataPoint. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  createDBCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBType')) {
      throw new TypeError('parameter "DBType" is required');
    }

    if (!hasOwnProperty(params, 'DBVersion')) {
      throw new TypeError('parameter "DBVersion" is required');
    }

    if (!hasOwnProperty(params, 'DBNodeClass')) {
      throw new TypeError('parameter "DBNodeClass" is required');
    }

    if (!hasOwnProperty(params, 'PayType')) {
      throw new TypeError('parameter "PayType" is required');
    }

    return this.request('CreateDBCluster', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} EndpointType - endpointType. required.
   * @param {String} Nodes - nodes. optional.
   * @param {String} ReadWriteMode - readWriteMode. optional.
   * @param {String} AutoAddNewNodes - autoAddNewNodes. optional.
   * @param {String} EndpointConfig - endpointConfig. optional.
   * @param {String} ClientToken - token. optional.
   */
  createDBClusterEndpoint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'EndpointType')) {
      throw new TypeError('parameter "EndpointType" is required');
    }

    return this.request('CreateDBClusterEndpoint', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} DBEndpointId - endpointId. required.
   * @param {String} ConnectionStringPrefix - connectionStringPrefix. optional.
   * @param {String} NetType - netType. required.
   */
  createDBEndpointAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'DBEndpointId')) {
      throw new TypeError('parameter "DBEndpointId" is required');
    }

    if (!hasOwnProperty(params, 'NetType')) {
      throw new TypeError('parameter "NetType" is required');
    }

    return this.request('CreateDBEndpointAddress', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {RepeatList} DBNode - dbNodes. required.
   * @param {String} ClientToken - token. optional.
   */
  createDBNodes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'DBNode')) {
      throw new TypeError('parameter "DBNode" is required');
    }

    return this.request('CreateDBNodes', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} DBName - dbName. required.
   * @param {String} CharacterSetName - characterSetName. required.
   * @param {String} DBDescription - dbDescription. optional.
   * @param {String} AccountName - accountName. optional.
   * @param {String} AccountPrivilege - accountPrivilege. optional.
   * @param {String} Collate - collate. optional.
   * @param {String} Ctype - ctype. optional.
   */
  createDatabase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
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
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} DBName - dbName. required.
   * @param {String} CharacterSetName - characterSetName. required.
   * @param {String} DBDescription - dbDescription. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} AccountPassword - accountPassword. required.
   */
  createProtectedDB(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    if (!hasOwnProperty(params, 'CharacterSetName')) {
      throw new TypeError('parameter "CharacterSetName" is required');
    }

    if (!hasOwnProperty(params, 'DBDescription')) {
      throw new TypeError('parameter "DBDescription" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'AccountPassword')) {
      throw new TypeError('parameter "AccountPassword" is required');
    }

    return this.request('CreateProtectedDB', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} AccountName - accountName. required.
   */
  deleteAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} BackupId - backupId. required.
   */
  deleteBackup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   */
  deleteDBCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('DeleteDBCluster', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} DBEndpointId - endpointId. required.
   */
  deleteDBClusterEndpoint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'DBEndpointId')) {
      throw new TypeError('parameter "DBEndpointId" is required');
    }

    return this.request('DeleteDBClusterEndpoint', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} DBEndpointId - endpointId. required.
   * @param {String} NetType - netType. required.
   */
  deleteDBEndpointAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'DBEndpointId')) {
      throw new TypeError('parameter "DBEndpointId" is required');
    }

    if (!hasOwnProperty(params, 'NetType')) {
      throw new TypeError('parameter "NetType" is required');
    }

    return this.request('DeleteDBEndpointAddress', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {RepeatList} DBNodeId - dbNodeIds. required.
   * @param {String} ClientToken - token. optional.
   */
  deleteDBNodes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'DBNodeId')) {
      throw new TypeError('parameter "DBNodeId" is required');
    }

    return this.request('DeleteDBNodes', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} DBName - dbName. required.
   */
  deleteDatabase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} AccountName - accountName. optional.
   */
  describeAccounts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DBClusterIds - dbClusterIds. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   */
  describeAutoRenewAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeAutoRenewAttribute', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   */
  describeBackupPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('DescribeBackupPolicy', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} BackupJobId - backupjobId. optional.
   * @param {String} BackupMode - backupMode. optional.
   */
  describeBackupTasks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('DescribeBackupTasks', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} BackupId - backupId. optional.
   * @param {String} BackupStatus - backupStatus. optional.
   * @param {String} BackupMode - backupMode. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - pageNumber. optional.
   */
  describeBackups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DBClusterId - dbClusterId. optional.
   */
  describeCharacterSetName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeCharacterSetName', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionId. optional.
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
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  describeClusterNetInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeClusterNetInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   */
  describeDBClusterAccessWhitelist(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('DescribeDBClusterAccessWhitelist', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   */
  describeDBClusterAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('DescribeDBClusterAttribute', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} DBEndpointId - endpointId. optional.
   */
  describeDBClusterEndpoints(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('DescribeDBClusterEndpoints', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   */
  describeDBClusterIPArrayList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('DescribeDBClusterIPArrayList', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   */
  describeDBClusterInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('DescribeDBClusterInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   */
  describeDBClusterMigration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('DescribeDBClusterMigration', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} ConnectionStringType - connectionStringType. optional.
   */
  describeDBClusterNetInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('DescribeDBClusterNetInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   */
  describeDBClusterParameters(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('DescribeDBClusterParameters', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} Key - key. required.
   * @param {String} Metric - metric. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeDBClusterPerformance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
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

    return this.request('DescribeDBClusterPerformance', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   */
  describeDBClusterSSL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('DescribeDBClusterSSL', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   */
  describeDBClusterZones(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('DescribeDBClusterZones', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DBClusterIds - dbClusterIds. optional.
   * @param {String} DBClusterDescription - dbClusterDescription. optional.
   * @param {String} DBClusterStatus - dbClusterStatus. optional.
   * @param {String} DBType - dbType. optional.
   * @param {RepeatList} Tag - tags. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  describeDBClusters(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeDBClusters', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBType - dbType. optional.
   * @param {String} DBVersion - dbVersion. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   */
  describeDBInitializeVariable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('DescribeDBInitializeVariable', params, options);
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
  describeDBInstanceAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeDBInstanceAttribute', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   */
  describeDBInstanceIPArrayList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('DescribeDBInstanceIPArrayList', params, options);
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} Key - key. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeDBInstancePerformance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DBClusterId - dbClusterId. optional.
   * @param {String} InstanceNetworkType - instanceNetworkType. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBNodeId - dbInstanceId. required.
   * @param {String} Key - key. required.
   * @param {String} Metric - metric. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeDBNodePerformance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBNodeId')) {
      throw new TypeError('parameter "DBNodeId" is required');
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

    return this.request('DescribeDBNodePerformance', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBNodeId - dbInstanceId. required.
   * @param {String} Key - key. required.
   * @param {String} Metric - metric. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeDBNodePerformanceDup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBNodeId')) {
      throw new TypeError('parameter "DBNodeId" is required');
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

    return this.request('DescribeDBNodePerformanceDup', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} DBName - dbName. optional.
   */
  describeDatabases(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('DescribeDatabases', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - instanceId. optional.
   * @param {String} DBNodeId - dbInstanceId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - pageNumber. optional.
   */
  describeErrorLogs(params = {}, options = {}) {
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   */
  describeMPPCondition(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('DescribeMPPCondition', params, options);
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
  describeOssBuckets(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeOssBuckets', params, options);
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
  describeParameterTemplates(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeParameterTemplates', params, options);
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} DBName - dbName. optional.
   * @param {String} QueryProtectedDB - queryProtectedDB. optional. default: true.
   */
  describeProtectedDBs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('DescribeProtectedDBs', params, options);
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
   * @param {String} VpcId - vpcId. optional.
   * @param {String} ZoneId - zoneId. optional.
   */
  describeRdsVSwitchs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeRdsVSwitchs', params, options);
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
   */
  describeRdsVpcs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeRdsVpcs', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   */
  describeSQLCollectorPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeSQLCollectorPolicy', params, options);
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
  describeSQLCollectorRetention(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeSQLCollectorRetention', params, options);
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
  describeSQLCollectorVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeSQLCollectorVersion', params, options);
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
  describeSQLExplorerPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeSQLExplorerPolicy', params, options);
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
  describeSQLExplorerRetention(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeSQLExplorerRetention', params, options);
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
  describeSQLExplorerVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeSQLExplorerVersion', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} FileName - fileName. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - pageNumber. optional.
   */
  describeSQLLogFiles(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('DescribeSQLLogFiles', params, options);
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
   * @param {String} ChildDBInstanceIDs - childDBInstanceIDs. optional.
   * @param {String} JobId - jobId. optional.
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

    if (!hasOwnProperty(params, 'MaxRecordsPerPage')) {
      throw new TypeError('parameter "MaxRecordsPerPage" is required');
    }

    if (!hasOwnProperty(params, 'PageNumbers')) {
      throw new TypeError('parameter "PageNumbers" is required');
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
   * @param {String} ChildDBInstanceIDs - childDBInstanceIDs. optional.
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
   * @param {String} ChildDBInstanceIDs - childDBInstanceIDs. optional.
   */
  describeSQLLogTemplates(params = {}, options = {}) {
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

    return this.request('DescribeSQLLogTemplates', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBClusterId - dbInstanceId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} DBName - dbName. optional.
   * @param {Integer} PageSize - maxRecordsPerPage. optional. default: 30.
   * @param {Integer} PageNumber - pageNumbers. optional. default: 1.
   * @param {String} SQLHASH - sqlhash. optional.
   */
  describeSlowLogRecords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBClusterId - dbInstanceId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} DBName - dbName. optional.
   * @param {Integer} PageSize - maxRecordsPerPage. optional. default: 30.
   * @param {Integer} PageNumber - pageNumbers. optional. default: 1.
   */
  describeSlowLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
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
   * @param {String} ChildDBInstanceIDs - childDBInstanceIDs. optional.
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
   * @param {String} ChildDBInstanceIDs - childDBInstanceIDs. optional.
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
   * @param {String} ChildDBInstanceIDs - childDBInstanceIDs. optional.
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
   * @param {String} ChildDBInstanceIDs - childDBInstanceIDs. optional.
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
   * @param {String} CurrentAVZ - currentAVZ. required.
   */
  describeTargetAVZ(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentAVZ')) {
      throw new TypeError('parameter "CurrentAVZ" is required');
    }

    return this.request('DescribeTargetAVZ', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} TaskId - taskId. required.
   */
  describeTaskInfo(params = {}, options = {}) {
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - instanceId. optional.
   * @param {String} DBNodeId - dbInstanceId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Status - status. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   */
  describeTasks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
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
   * @param {String} ChildDBInstanceIDs - childDBInstanceIDs. optional.
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
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} TargetDBNodeId - dbInstanceId. optional.
   * @param {String} ClientToken - clientToken. optional.
   */
  failoverDBCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('FailoverDBCluster', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} DBName - dbName. required.
   * @param {String} AccountPrivilege - accountPrivilege. required.
   */
  grantAccountPrivilege(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   */
  lockDBClusterDeletion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('LockDBClusterDeletion', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionId. optional.
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} AccountDescription - accountDescription. required.
   */
  modifyAccountDescription(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} AccountLockState - accountLockState. required.
   * @param {String} AccountPasswordValidTime - accountPwdValidTime. optional.
   */
  modifyAccountLockState(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'AccountLockState')) {
      throw new TypeError('parameter "AccountLockState" is required');
    }

    return this.request('ModifyAccountLockState', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} NewAccountPassword - accountPassword. required.
   */
  modifyAccountPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'NewAccountPassword')) {
      throw new TypeError('parameter "NewAccountPassword" is required');
    }

    return this.request('ModifyAccountPassword', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} AccountType - accountType. required.
   */
  modifyAccountType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'AccountType')) {
      throw new TypeError('parameter "AccountType" is required');
    }

    return this.request('ModifyAccountType', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} TaskIdList - taskIdList. required.
   * @param {String} SwitchTime - switchTime. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} Region - region. required.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vSwitchId. optional.
   * @param {Integer} TunnelId - tunnelId. optional.
   * @param {String} VpcTaskIdList - vpcTaskIdList. optional.
   * @param {String} VpcInstanceId - vpcInstanceId. optional.
   * @param {String} IpAddress - ipAddress. optional.
   */
  modifyActiveOperationPendingTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskIdList')) {
      throw new TypeError('parameter "TaskIdList" is required');
    }

    if (!hasOwnProperty(params, 'SwitchTime')) {
      throw new TypeError('parameter "SwitchTime" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    return this.request('ModifyActiveOperationPendingTask', params, options);
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterIds - dbClusterIds. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} RenewalStatus - renewalStatus. optional. default: AutoRenewal.
   * @param {String} Duration - duration. optional. default: 1.
   * @param {String} PeriodUnit - periodUnit. optional. default: Month.
   */
  modifyAutoRenewAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterIds')) {
      throw new TypeError('parameter "DBClusterIds" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ModifyAutoRenewAttribute', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} PreferredBackupTime - preferredBackupTime. required.
   * @param {String} PreferredBackupPeriod - preferredBackupPeriod. required.
   * @param {String} BackupRetentionPeriod - backupRetentionPeriod. optional. default: 7.
   */
  modifyBackupPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} SecurityIps - securityIps. optional.
   * @param {String} DBClusterIPArrayName - groupName. optional.
   * @param {String} DBClusterIPArrayAttribute - groupAttribute. optional.
   * @param {String} WhiteListType - whitelistType. optional.
   * @param {String} SecurityGroupIds - securityGroupIds. optional.
   * @param {String} ModifyMode - modifyMode. optional.
   */
  modifyDBClusterAccessWhitelist(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('ModifyDBClusterAccessWhitelist', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} ConnectionStringPrefix - connectionStringPrefix. optional.
   * @param {String} CurrentConnectionString - currentConnectionString. required.
   */
  modifyDBClusterConnectionString(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentConnectionString')) {
      throw new TypeError('parameter "CurrentConnectionString" is required');
    }

    return this.request('ModifyDBClusterConnectionString', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} DBClusterDescription - dbClusterDescription. required.
   */
  modifyDBClusterDescription(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'DBClusterDescription')) {
      throw new TypeError('parameter "DBClusterDescription" is required');
    }

    return this.request('ModifyDBClusterDescription', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} DBEndpointId - endpointId. required.
   * @param {String} Nodes - nodes. optional.
   * @param {String} ReadWriteMode - readWriteMode. optional.
   * @param {String} AutoAddNewNodes - autoAddNewNodes. optional.
   * @param {String} EndpointConfig - endpointConfig. optional.
   */
  modifyDBClusterEndpoint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'DBEndpointId')) {
      throw new TypeError('parameter "DBEndpointId" is required');
    }

    return this.request('ModifyDBClusterEndpoint', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} MaintainTime - maintainTime. required.
   */
  modifyDBClusterMaintainTime(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'MaintainTime')) {
      throw new TypeError('parameter "MaintainTime" is required');
    }

    return this.request('ModifyDBClusterMaintainTime', params, options);
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
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} SourceRDSDBInstanceId - sourceDBInstanceId. required.
   * @param {String} NewMasterInstanceId - newMasterInstanceId. required.
   */
  modifyDBClusterMigration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'SourceRDSDBInstanceId')) {
      throw new TypeError('parameter "SourceRDSDBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'NewMasterInstanceId')) {
      throw new TypeError('parameter "NewMasterInstanceId" is required');
    }

    return this.request('ModifyDBClusterMigration', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} Parameters - parameters. required.
   * @param {String} EffectiveTime - effectiveTime. optional. default: Auto.
   */
  modifyDBClusterParameters(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Parameters')) {
      throw new TypeError('parameter "Parameters" is required');
    }

    return this.request('ModifyDBClusterParameters', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} ZoneId - zoneId. required.
   * @param {String} VSwitchId - vSwitchId. optional.
   */
  modifyDBClusterPrimaryZone(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    return this.request('ModifyDBClusterPrimaryZone', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} NewResourceGroupId - newResourceGroupId. required.
   */
  modifyDBClusterResourceGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'NewResourceGroupId')) {
      throw new TypeError('parameter "NewResourceGroupId" is required');
    }

    return this.request('ModifyDBClusterResourceGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} SSLEnabled - sslEnabled. required.
   */
  modifyDBClusterSSL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'SSLEnabled')) {
      throw new TypeError('parameter "SSLEnabled" is required');
    }

    return this.request('ModifyDBClusterSSL', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} DBName - dbName. required.
   * @param {String} DBDescription - dbDescription. required.
   */
  modifyDBDescription(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} DBEndpointId - endpointId. required.
   * @param {String} NetType - netType. required.
   * @param {String} ConnectionStringPrefix - connectionStringPrefix. optional.
   */
  modifyDBEndpointAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'DBEndpointId')) {
      throw new TypeError('parameter "DBEndpointId" is required');
    }

    if (!hasOwnProperty(params, 'NetType')) {
      throw new TypeError('parameter "NetType" is required');
    }

    return this.request('ModifyDBEndpointAddress', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ConnectionStringPrefix - connectionStringPrefix. required.
   * @param {String} CurrentConnectionString - currentConnectionString. required.
   */
  modifyDBInstanceConnectionString(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConnectionStringPrefix')) {
      throw new TypeError('parameter "ConnectionStringPrefix" is required');
    }

    if (!hasOwnProperty(params, 'CurrentConnectionString')) {
      throw new TypeError('parameter "CurrentConnectionString" is required');
    }

    return this.request('ModifyDBInstanceConnectionString', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} MaintainTime - maintainTime. required.
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
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} ModifyType - modifyType. required.
   * @param {String} DBNodeTargetClass - dbNodeClass. required.
   * @param {String} ClientToken - token. optional.
   */
  modifyDBNodeClass(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ModifyType')) {
      throw new TypeError('parameter "ModifyType" is required');
    }

    if (!hasOwnProperty(params, 'DBNodeTargetClass')) {
      throw new TypeError('parameter "DBNodeTargetClass" is required');
    }

    return this.request('ModifyDBNodeClass', params, options);
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
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} DBNodeId - dbNodeId. required.
   * @param {String} ConfigName - configName. required.
   * @param {String} ConfigValue - configValue. required.
   */
  modifyDBNodeConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'DBNodeId')) {
      throw new TypeError('parameter "DBNodeId" is required');
    }

    if (!hasOwnProperty(params, 'ConfigName')) {
      throw new TypeError('parameter "ConfigName" is required');
    }

    if (!hasOwnProperty(params, 'ConfigValue')) {
      throw new TypeError('parameter "ConfigValue" is required');
    }

    return this.request('ModifyDBNodeConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} Parameters - parameters. required.
   * @param {Boolean} Forcerestart - forcerestart. optional.
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
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} DBName - dbName. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} AccountPassword - accountPassword. required.
   */
  modifyProtectedDBPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'AccountPassword')) {
      throw new TypeError('parameter "AccountPassword" is required');
    }

    return this.request('ModifyProtectedDBPassword', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} SQLCollectorStatus - sqlCollectorStatus. required.
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} SQLCollectorStatus - sqlCollectorStatus. required.
   */
  modifySQLExplorerPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SQLCollectorStatus')) {
      throw new TypeError('parameter "SQLCollectorStatus" is required');
    }

    return this.request('ModifySQLExplorerPolicy', params, options);
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
  modifySQLExplorerRetention(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConfigValue')) {
      throw new TypeError('parameter "ConfigValue" is required');
    }

    return this.request('ModifySQLExplorerRetention', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} SecurityIps - securityIps. required.
   * @param {String} DBClusterIPArrayName - groupName. optional.
   * @param {String} DBClusterIPArrayAttribute - groupAttribute. optional.
   */
  modifySecurityIps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityIps')) {
      throw new TypeError('parameter "SecurityIps" is required');
    }

    return this.request('ModifySecurityIps', params, options);
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
  queryOssBuckets(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBInstanceId')) {
      throw new TypeError('parameter "DBInstanceId" is required');
    }

    return this.request('QueryOssBuckets', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} CurrentConnectionString - currentConnectionString. required.
   */
  releaseClusterPublicConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentConnectionString')) {
      throw new TypeError('parameter "CurrentConnectionString" is required');
    }

    return this.request('ReleaseClusterPublicConnection', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} CurrentConnectionString - currentConnectionString. required.
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
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} CurrentConnectionString - currentConnectionString. required.
   */
  releaseMPPConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentConnectionString')) {
      throw new TypeError('parameter "CurrentConnectionString" is required');
    }

    return this.request('ReleaseMPPConnection', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} CurrentConnectionString - currentConnectionString. required.
   */
  releaseReadWriteSplittingConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentConnectionString')) {
      throw new TypeError('parameter "CurrentConnectionString" is required');
    }

    return this.request('ReleaseReadWriteSplittingConnection', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} AccountPassword - accountPassword. required.
   */
  resetAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} AccountPassword - accountPassword. required.
   */
  resetAccountPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} ClientToken - clientToken. optional.
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBNodeId - dbInstanceId. required.
   */
  restartDBNode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBNodeId')) {
      throw new TypeError('parameter "DBNodeId" is required');
    }

    return this.request('RestartDBNode', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} DBName - dbName. required.
   */
  revokeAccountPrivilege(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
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
   * @param {String} ChildDBInstanceIDs - childDBInstanceIDs. optional.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   */
  unlockDBClusterDeletion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('UnlockDBClusterDeletion', params, options);
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DBClusterId - dbClusterId. required.
   */
  upgradeDBClusterMinorVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBClusterId')) {
      throw new TypeError('parameter "DBClusterId" is required');
    }

    return this.request('UpgradeDBClusterMinorVersion', params, options);
  }

}

module.exports = Client;

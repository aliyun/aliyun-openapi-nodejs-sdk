
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-01-01';
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
   * @param {String} InstanceId - dbInstanceId. required.
   * @param {String} BusinessUnit - bu. required.
   */
  addBuDBInstanceRelation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'BusinessUnit')) {
      throw new TypeError('parameter "BusinessUnit" is required');
    }

    return this.request('AddBuDBInstanceRelation', params, options);
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
   * @param {String} ConnectionStringPrefix - connectionStringPrefix. optional.
   * @param {String} Port - port. optional.
   */
  allocateInstancePublicConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('AllocateInstancePublicConnection', params, options);
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
   * @param {String} AccountName - accountName. required.
   * @param {String} AccountPassword - accountPassword. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} DBInfo - dbInfo. optional.
   * @param {String} DBName - dbName. optional.
   * @param {String} AccountDescription - accountDescription. optional.
   * @param {String} AccountPrivilege - accountPrivilege. optional.
   * @param {String} AccountVersion - accountVersion. optional. default: 0.
   * @param {String} AccountType - accountType. optional. default: Normal.
   */
  createAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
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
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} Token - token. optional.
   * @param {String} InstanceId - dbInstanceId. required.
   * @param {String} DBName - dbName. required.
   * @param {String} NodeSpec - nodeSpec. required.
   * @param {Integer} NodeNumber - nodeNumber. required.
   */
  createDatabase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    if (!hasOwnProperty(params, 'NodeSpec')) {
      throw new TypeError('parameter "NodeSpec" is required');
    }

    if (!hasOwnProperty(params, 'NodeNumber')) {
      throw new TypeError('parameter "NodeNumber" is required');
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
   * @param {String} InstanceId - dbInstanceId. required.
   * @param {String} DBName - dbName. required.
   */
  createDatabaseBackup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    return this.request('CreateDatabaseBackup', params, options);
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
   * @param {String} DBName - dbName. required.
   * @param {String} IndexDDL - indexDDL. required.
   */
  createIndex(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    if (!hasOwnProperty(params, 'IndexDDL')) {
      throw new TypeError('parameter "IndexDDL" is required');
    }

    return this.request('CreateIndex', params, options);
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
   * @param {String} InstanceName - dbInstanceDescription. optional.
   * @param {String} DBName - dbName. required.
   * @param {String} NodeSpec - nodeSpec. required.
   * @param {Integer} NodeNumber - nodeNumber. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} AccountPassword - accountPassword. required.
   * @param {String} SecurityIPList - securityIPList. optional.
   * @param {String} ChargeType - chargeType. optional. default: PostPaid.
   * @param {String} NetworkType - networkType. optional. default: Classic.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} ClientToken - token. optional.
   */
  createInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    if (!hasOwnProperty(params, 'NodeSpec')) {
      throw new TypeError('parameter "NodeSpec" is required');
    }

    if (!hasOwnProperty(params, 'NodeNumber')) {
      throw new TypeError('parameter "NodeNumber" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'AccountPassword')) {
      throw new TypeError('parameter "AccountPassword" is required');
    }

    return this.request('CreateInstance', params, options);
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
   * @param {String} DBName - dbName. required.
   */
  createInstanceInnerConsole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    return this.request('CreateInstanceInnerConsole', params, options);
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
   * @param {String} DBName - dbName. required.
   * @param {String} TableDDL - tableDDL. required.
   * @param {String} PartitionKey - partitionKey. required.
   */
  createTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    if (!hasOwnProperty(params, 'TableDDL')) {
      throw new TypeError('parameter "TableDDL" is required');
    }

    if (!hasOwnProperty(params, 'PartitionKey')) {
      throw new TypeError('parameter "PartitionKey" is required');
    }

    return this.request('CreateTable', params, options);
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
   * @param {String} AccountName - accountName. required.
   */
  deleteAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    return this.request('DeleteAccount', params, options);
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
   * @param {String} DBName - dbName. required.
   * @param {String} ClientToken - token. optional.
   */
  deleteDatabase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    return this.request('DeleteDatabase', params, options);
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
   * @param {String} DBName - dbName. required.
   * @param {String} IndexDDL - indexDDL. required.
   */
  deleteIndex(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    if (!hasOwnProperty(params, 'IndexDDL')) {
      throw new TypeError('parameter "IndexDDL" is required');
    }

    return this.request('DeleteIndex', params, options);
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
   * @param {String} ClientToken - token. optional.
   */
  deleteInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DeleteInstance', params, options);
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
   * @param {String} DBName - dbName. required.
   * @param {String} TableName - tableName. required.
   */
  deleteTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    if (!hasOwnProperty(params, 'TableName')) {
      throw new TypeError('parameter "TableName" is required');
    }

    return this.request('DeleteTable', params, options);
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
   */
  describeAccounts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
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
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - dbInstanceId. required.
   * @param {String} DBName - dbName. required.
   */
  describeBackupPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    return this.request('DescribeBackupPolicy', params, options);
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
   * @param {String} CommodityCode - commodityCode. required.
   * @param {String} InstanceId - dbInstanceId. optional.
   * @param {String} DBName - dbName. optional.
   * @param {String} OrderType - orderType. required.
   */
  describeCommodity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CommodityCode')) {
      throw new TypeError('parameter "CommodityCode" is required');
    }

    if (!hasOwnProperty(params, 'OrderType')) {
      throw new TypeError('parameter "OrderType" is required');
    }

    return this.request('DescribeCommodity', params, options);
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
   * @param {String} DBName - dbName. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} BackupId - backupId. optional.
   * @param {String} BackupStatus - backupStatus. optional.
   * @param {String} BackupMode - backupMode. optional.
   * @param {String} PageSize - pageSize. optional. default: 30.
   * @param {String} PageNumber - pageNumber. optional. default: 1.
   */
  describeDatabaseBackup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeDatabaseBackup', params, options);
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
   * @param {String} InstanceId - dbInstanceId. optional.
   * @param {String} InstanceStatus - dbInstanceStatus. optional.
   * @param {String} ChargeType - chargeType. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeDatabaseList(params = {}, options = {}) {
    return this.request('DescribeDatabaseList', params, options);
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
   * @param {String} DBName - dbName. required.
   */
  describeDatabasePartitions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    return this.request('DescribeDatabasePartitions', params, options);
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
   * @param {String} DBName - dbName. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Interval - interval. required.
   * @param {String} KeyList - keyList. required.
   * @param {String} MonitorGroup - monitorGroup. optional.
   */
  describeDatabasePerformance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    if (!hasOwnProperty(params, 'KeyList')) {
      throw new TypeError('parameter "KeyList" is required');
    }

    return this.request('DescribeDatabasePerformance', params, options);
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
   * @param {String} DBName - dbName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   */
  describeDatabaseResourceUsage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    return this.request('DescribeDatabaseResourceUsage', params, options);
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
   * @param {String} DBName - dbName. optional.
   */
  describeDatabases(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeDatabases', params, options);
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
   */
  describeInstanceInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeInstanceInfo', params, options);
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
   * @param {String} ConnectionString - connectionString. required.
   */
  describeInstanceInfoByConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConnectionString')) {
      throw new TypeError('parameter "ConnectionString" is required');
    }

    return this.request('DescribeInstanceInfoByConnection', params, options);
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
   * @param {String} DBName - dbName. required.
   */
  describeInstanceInnerConsole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    return this.request('DescribeInstanceInnerConsole', params, options);
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
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Interval - interval. required.
   * @param {String} KeyList - keyList. required.
   * @param {String} MonitorGroup - monitorGroup. optional.
   */
  describeInstancePerformance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    if (!hasOwnProperty(params, 'KeyList')) {
      throw new TypeError('parameter "KeyList" is required');
    }

    return this.request('DescribeInstancePerformance', params, options);
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
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   */
  describeInstanceResourceUsage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeInstanceResourceUsage', params, options);
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
   * @param {String} InstanceId - dbInstanceId. optional.
   * @param {String} InstanceStatus - instanceStatus. optional.
   * @param {String} ChargeType - chargeType. optional.
   * @param {Integer} PageNumber - pageNumbers. optional. default: 1.
   * @param {Integer} PageSize - maxRecordsPerPage. optional. default: 10.
   */
  describeInstances(params = {}, options = {}) {
    return this.request('DescribeInstances', params, options);
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
   * @param {String} InstanceId - dbInstanceId. optional.
   * @param {String} ItemLevel - itemLevel. required.
   * @param {String} MonitorVersion - monitorVersion. optional. default: 1.
   */
  describeMonitorItems(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ItemLevel')) {
      throw new TypeError('parameter "ItemLevel" is required');
    }

    return this.request('DescribeMonitorItems', params, options);
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
   * @param {String} OrderType - orderType. required.
   * @param {String} Commodities - commodities. required.
   */
  describePrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderType')) {
      throw new TypeError('parameter "OrderType" is required');
    }

    if (!hasOwnProperty(params, 'Commodities')) {
      throw new TypeError('parameter "Commodities" is required');
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
   * @param {String} ZoneId - zoneId. required.
   * @param {String} NodeSpec - nodeSpec. required.
   * @param {Integer} NodeNumber - nodeNumber. required.
   * @param {String} EvaluateType - evaluateType. required.
   */
  describeRegionAvailability(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    if (!hasOwnProperty(params, 'NodeSpec')) {
      throw new TypeError('parameter "NodeSpec" is required');
    }

    if (!hasOwnProperty(params, 'NodeNumber')) {
      throw new TypeError('parameter "NodeNumber" is required');
    }

    if (!hasOwnProperty(params, 'EvaluateType')) {
      throw new TypeError('parameter "EvaluateType" is required');
    }

    return this.request('DescribeRegionAvailability', params, options);
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
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
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
   */
  describeSecurityIPs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeSecurityIPs', params, options);
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
   * @param {String} DBName - dbName. required.
   * @param {String} TableName - tableName. required.
   */
  describeTableInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    if (!hasOwnProperty(params, 'TableName')) {
      throw new TypeError('parameter "TableName" is required');
    }

    return this.request('DescribeTableInfo', params, options);
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
   * @param {String} DBName - dbName. required.
   */
  describeTables(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    return this.request('DescribeTables', params, options);
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
   * @param {String} InstanceId - dbInstanceId. optional.
   * @param {String} TaskId - tastId. required.
   */
  describeTaskStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('DescribeTaskStatus', params, options);
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
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Status - status. optional. default: 0,1,3.
   * @param {String} TaskAction - taskAction. optional.
   * @param {String} MaxRecordsPerPage - maxRecordsPerPage. required.
   * @param {String} PageNumbers - pageNumbers. required.
   */
  describeTasks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
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
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DBInstanceId - dbInstanceId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} DBName - dbName. required.
   * @param {String} AccountPrivilege - accountPrivilege. required.
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
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
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
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - dbInstanceId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} OldPassword - oldPassword. required.
   * @param {String} NewPassword - newPassword. required.
   */
  modifyAccountPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'OldPassword')) {
      throw new TypeError('parameter "OldPassword" is required');
    }

    if (!hasOwnProperty(params, 'NewPassword')) {
      throw new TypeError('parameter "NewPassword" is required');
    }

    return this.request('ModifyAccountPassword', params, options);
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
   * @param {String} DBName - dbName. required.
   * @param {String} PreferredBackupPeriod - preferredBackupPeriod. optional. default: None.
   * @param {String} PreferredBackupTime - preferredBackupTime. optional. default: 18:00Z-19:00Z.
   * @param {String} BackupRetentionPeriod - backupRetentionPeriod. optional. default: 1.
   * @param {Boolean} EnableBinlogBackup - enableBinlogBackup. optional.
   */
  modifyBackupPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    return this.request('ModifyBackupPolicy', params, options);
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
   * @param {String} DBName - dbName. required.
   * @param {String} NodeSpec - nodeSpec. required.
   * @param {Integer} NodeNumber - nodeNumber. required.
   * @param {String} ClientToken - token. optional.
   */
  modifyDatabaseCapacity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    if (!hasOwnProperty(params, 'NodeSpec')) {
      throw new TypeError('parameter "NodeSpec" is required');
    }

    if (!hasOwnProperty(params, 'NodeNumber')) {
      throw new TypeError('parameter "NodeNumber" is required');
    }

    return this.request('ModifyDatabaseCapacity', params, options);
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
   * @param {String} DBName - dbName. required.
   * @param {Integer} ActionType - actionType. required.
   * @param {String} Parameter - parameter. optional.
   * @param {Boolean} AutoPay - autoPay. optional. default: true.
   * @param {String} ClientToken - token. optional.
   */
  modifyDatabaseNodesNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    if (!hasOwnProperty(params, 'ActionType')) {
      throw new TypeError('parameter "ActionType" is required');
    }

    return this.request('ModifyDatabaseNodesNumber', params, options);
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
   * @param {String} DBName - dbName. required.
   * @param {String} NewNodeSpec - nodeSpec. required.
   * @param {Boolean} AutoPay - autoPay. optional. default: true.
   * @param {String} ClientToken - token. optional.
   */
  modifyDatabaseNodesSpec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    if (!hasOwnProperty(params, 'NewNodeSpec')) {
      throw new TypeError('parameter "NewNodeSpec" is required');
    }

    return this.request('ModifyDatabaseNodesSpec', params, options);
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
   * @param {String} DBName - dbName. required.
   * @param {String} ConsoleSecurityIPList - consoleSecurityIPList. optional.
   */
  modifyInstanceInnerConsoleSecurityIPs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    return this.request('ModifyInstanceInnerConsoleSecurityIPs', params, options);
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
   * @param {String} NewInstanceName - dbInstanceDescription. required.
   */
  modifyInstanceName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'NewInstanceName')) {
      throw new TypeError('parameter "NewInstanceName" is required');
    }

    return this.request('ModifyInstanceName', params, options);
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
   * @param {String} SecurityIPList - securityIPList. required.
   * @param {String} ModifyMode - modifyMode. optional.
   * @param {String} SecurityIPListName - groupName. optional.
   * @param {String} SecurityIPListAttribute - groupAttribute. optional.
   */
  modifySecurityIPs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityIPList')) {
      throw new TypeError('parameter "SecurityIPList" is required');
    }

    return this.request('ModifySecurityIPs', params, options);
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
   * @param {String} DBName - dbName. required.
   * @param {String} TableDDL - tableDDL. required.
   */
  modifyTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    if (!hasOwnProperty(params, 'TableDDL')) {
      throw new TypeError('parameter "TableDDL" is required');
    }

    return this.request('ModifyTable', params, options);
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
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - dbInstanceId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} NewPassword - newPassword. required.
   */
  resetAccountPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'NewPassword')) {
      throw new TypeError('parameter "NewPassword" is required');
    }

    return this.request('ResetAccountPassword', params, options);
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
   * @param {String} SrcInstanceId - srcDbInstanceId. required.
   * @param {String} SrcDBName - srcDbName. required.
   * @param {String} InstanceName - dbInstanceDescription. optional.
   * @param {String} RestoreTime - restoreTime. optional.
   * @param {String} BackupId - backupId. optional.
   * @param {String} RestoreType - restoreType. optional.
   * @param {String} ClientToken - token. optional.
   */
  restoreDatabase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SrcInstanceId')) {
      throw new TypeError('parameter "SrcInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SrcDBName')) {
      throw new TypeError('parameter "SrcDBName" is required');
    }

    return this.request('RestoreDatabase', params, options);
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
   * @param {String} AccountName - accountName. required.
   * @param {String} DBName - dbName. required.
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
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} NewInstanceId - dbInstanceId. required.
   * @param {String} SourceInstanceId - destInstanceId. required.
   * @param {String} DBName - dbName. required.
   */
  switchBackupDatabase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NewInstanceId')) {
      throw new TypeError('parameter "NewInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SourceInstanceId')) {
      throw new TypeError('parameter "SourceInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    return this.request('SwitchBackupDatabase', params, options);
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
   * @param {String} TargetNetworkType - networkType. required.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   */
  switchInstanceNetType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'TargetNetworkType')) {
      throw new TypeError('parameter "TargetNetworkType" is required');
    }

    return this.request('SwitchInstanceNetType', params, options);
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
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - dbInstanceId. required.
   * @param {String} DBName - dbName. required.
   * @param {String} TableName - tableName. required.
   */
  truncateTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DBName')) {
      throw new TypeError('parameter "DBName" is required');
    }

    if (!hasOwnProperty(params, 'TableName')) {
      throw new TypeError('parameter "TableName" is required');
    }

    return this.request('TruncateTable', params, options);
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

}

module.exports = Client;

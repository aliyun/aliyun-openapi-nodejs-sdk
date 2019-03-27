
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-04-13';
    super(config);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} DdlSql - ddlSql. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  alterTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    if (!hasOwnProperty(params, 'DdlSql')) {
      throw new TypeError('parameter "DdlSql" is required');
    }

    return this.request('AlterTable', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} TaskId - taskId. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  cancelDDLTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('CancelDDLTask', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} TaskId - taskId. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  cancleDDLTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('CancleDDLTask', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  completeCommodityInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CompleteCommodityInfo', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  completeOrderInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CompleteOrderInfo', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  completeProductInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CompleteProductInfo', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} Encode - encode. required.
   * @param {String} Password - password. required.
   * @param {String} RdsInstances - rdsInstances. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  createDrdsDB(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    if (!hasOwnProperty(params, 'Encode')) {
      throw new TypeError('parameter "Encode" is required');
    }

    if (!hasOwnProperty(params, 'Password')) {
      throw new TypeError('parameter "Password" is required');
    }

    if (!hasOwnProperty(params, 'RdsInstances')) {
      throw new TypeError('parameter "RdsInstances" is required');
    }

    return this.request('CreateDrdsDB', params, options);
  }

  /**
   * @param {String} Description - description. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. required.
   * @param {String} Type - type. required.
   * @param {Integer} Quantity - quantity. required.
   * @param {String} Specification - specification. required.
   * @param {String} PayType - payType. required.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VswitchId - vswitchId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  createDrdsInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Quantity')) {
      throw new TypeError('parameter "Quantity" is required');
    }

    if (!hasOwnProperty(params, 'Specification')) {
      throw new TypeError('parameter "Specification" is required');
    }

    if (!hasOwnProperty(params, 'PayType')) {
      throw new TypeError('parameter "PayType" is required');
    }

    return this.request('CreateDrdsInstance', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} DdlSql - ddlSql. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  createIndex(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    if (!hasOwnProperty(params, 'DdlSql')) {
      throw new TypeError('parameter "DdlSql" is required');
    }

    return this.request('CreateIndex', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} password - password. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  createReadOnlyAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    if (!hasOwnProperty(params, 'password')) {
      throw new TypeError('parameter "password" is required');
    }

    return this.request('CreateReadOnlyAccount', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} DdlSql - ddlSql. required.
   * @param {String} ShardType - shardType. required.
   * @param {String} ShardKey - shardKey. optional.
   * @param {String} AllowFullTableScan - allowFullTableScan. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  createTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    if (!hasOwnProperty(params, 'DdlSql')) {
      throw new TypeError('parameter "DdlSql" is required');
    }

    if (!hasOwnProperty(params, 'ShardType')) {
      throw new TypeError('parameter "ShardType" is required');
    }

    return this.request('CreateTable', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  deleteDrdsDB(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    return this.request('DeleteDrdsDB', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  deleteFailedDrdsDB(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    return this.request('DeleteFailedDrdsDB', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeCreateDrdsInstanceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    return this.request('DescribeCreateDrdsInstanceStatus', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} TaskId - taskId. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeDDLTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('DescribeDDLTask', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeDrdsDB(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    return this.request('DescribeDrdsDB', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} GroupName - groupName. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeDrdsDBIpWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    return this.request('DescribeDrdsDBIpWhiteList', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeDrdsDBs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    return this.request('DescribeDrdsDBs', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeDrdsInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    return this.request('DescribeDrdsInstance', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeDrdsInstanceNetInfoForInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    return this.request('DescribeDrdsInstanceNetInfoForInner', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Type - type. optional.
   */
  describeDrdsInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeDrdsInstances', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeRdsList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    return this.request('DescribeRdsList', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeReadOnlyAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    return this.request('DescribeReadOnlyAccount', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeShardDBs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    return this.request('DescribeShardDBs', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} SubDbName - subDbName. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeShardDbConnectionInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    if (!hasOwnProperty(params, 'SubDbName')) {
      throw new TypeError('parameter "SubDbName" is required');
    }

    return this.request('DescribeShardDbConnectionInfo', params, options);
  }

  /**
   * @param {String} data - data. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  drdsApiValidateOrder(params = {}, options = {}) {
    return this.request('DrdsApiValidateOrder', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} Table - table. required.
   * @param {String} Indexes - indexes. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  dropIndexes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    if (!hasOwnProperty(params, 'Table')) {
      throw new TypeError('parameter "Table" is required');
    }

    if (!hasOwnProperty(params, 'Indexes')) {
      throw new TypeError('parameter "Indexes" is required');
    }

    return this.request('DropIndexes', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} Tables - tables. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  dropTables(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    if (!hasOwnProperty(params, 'Tables')) {
      throw new TypeError('parameter "Tables" is required');
    }

    return this.request('DropTables', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  listUnCompleteTasks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    return this.request('ListUnCompleteTasks', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} NewPasswd - newPasswd. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  modifyDrdsDBPasswd(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    if (!hasOwnProperty(params, 'NewPasswd')) {
      throw new TypeError('parameter "NewPasswd" is required');
    }

    return this.request('ModifyDrdsDBPasswd', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} Description - description. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  modifyDrdsInstanceDescription(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('ModifyDrdsInstanceDescription', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} IpWhiteList - ipWhiteList. required.
   * @param {Boolean} Mode - mode. optional. default: true.
   * @param {String} GroupName - groupName. optional.
   * @param {String} GroupAttribute - groupAttribute. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  modifyDrdsIpWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    if (!hasOwnProperty(params, 'IpWhiteList')) {
      throw new TypeError('parameter "IpWhiteList" is required');
    }

    return this.request('ModifyDrdsIpWhiteList', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} TableNames - tableNames. required.
   * @param {Boolean} FullTableScan - fullTableScan. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  modifyFullTableScan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    if (!hasOwnProperty(params, 'TableNames')) {
      throw new TypeError('parameter "TableNames" is required');
    }

    if (!hasOwnProperty(params, 'FullTableScan')) {
      throw new TypeError('parameter "FullTableScan" is required');
    }

    return this.request('ModifyFullTableScan', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} InstanceNames - instanceNames. required.
   * @param {String} Weights - weights. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  modifyRdsReadWeight(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    if (!hasOwnProperty(params, 'InstanceNames')) {
      throw new TypeError('parameter "InstanceNames" is required');
    }

    if (!hasOwnProperty(params, 'Weights')) {
      throw new TypeError('parameter "Weights" is required');
    }

    return this.request('ModifyRdsReadWeight', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} OriginPassword - originPassword. required.
   * @param {String} NewPasswd - newPasswd. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  modifyReadOnlyAccountPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'OriginPassword')) {
      throw new TypeError('parameter "OriginPassword" is required');
    }

    if (!hasOwnProperty(params, 'NewPasswd')) {
      throw new TypeError('parameter "NewPasswd" is required');
    }

    return this.request('ModifyReadOnlyAccountPassword', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  orderSucceededCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('OrderSucceededCallback', params, options);
  }

  /**
   * @param {String} name - name. required.
   * @param {String} gender - gender. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  productInfoComplement(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'name')) {
      throw new TypeError('parameter "name" is required');
    }

    if (!hasOwnProperty(params, 'gender')) {
      throw new TypeError('parameter "gender" is required');
    }

    return this.request('ProductInfoComplement', params, options);
  }

  /**
   * @param {String} Host - host. required.
   * @param {Integer} Port - port. required.
   * @param {String} UserName - userName. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  queryInstanceInfoByConn(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Host')) {
      throw new TypeError('parameter "Host" is required');
    }

    if (!hasOwnProperty(params, 'Port')) {
      throw new TypeError('parameter "Port" is required');
    }

    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    return this.request('QueryInstanceInfoByConn', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  removeDrdsInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    return this.request('RemoveDrdsInstance', params, options);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  removeReadOnlyAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    return this.request('RemoveReadOnlyAccount', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  validateOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('ValidateOrder', params, options);
  }

}

module.exports = Client;

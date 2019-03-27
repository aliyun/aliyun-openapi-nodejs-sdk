
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-10-16';
    super(config);
  }

  /**
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} DbName - dbName. optional.
   * @param {String} UserName - userName. required.
   * @param {String} Password - password. optional. default: true.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  createDrdsAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    return this.request('CreateDrdsAccount', params, options);
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
   * @param {String} InstanceSeries - instanceSeries. optional.
   * @param {String} Specification - specification. required.
   * @param {String} PayType - payType. required.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VswitchId - vswitchId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Boolean} IsHa - isHa. optional.
   * @param {String} PricingCycle - pricingCycle. optional.
   * @param {Integer} Duration - duration. optional.
   * @param {Boolean} IsAutoRenew - isAutoRenew. optional. default: false.
   * @param {String} ClientToken - clientToken. optional.
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
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} Key - key. required.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   */
  describeDrdsInstanceDbMonitor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
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

    return this.request('DescribeDrdsInstanceDbMonitor', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DrdsInstanceId - drdsInstanceId. required.
   * @param {String} Key - key. required.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} PeriodMultiple - periodMultiple. optional. default: 0.
   */
  describeDrdsInstanceMonitor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrdsInstanceId')) {
      throw new TypeError('parameter "DrdsInstanceId" is required');
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

    return this.request('DescribeDrdsInstanceMonitor', params, options);
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

}

module.exports = Client;

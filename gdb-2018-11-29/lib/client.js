
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-11-29';
    super(config);
  }

  /**
   * @param {String} Uid - Uid. optional.
   * @param {String} accessKey - accessKey. optional.
   * @param {String} signature - signature. optional.
   * @param {String} timestamp - timestamp. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} skipAuth - __skipAuth. optional. default: true.
   * @param {String} data - data. optional.
   */
  completeOrderParam(params = {}, options = {}) {
    return this.request('CompleteOrderParam', params, options);
  }

  /**
   * @param {String} Uid - Uid. optional.
   * @param {String} accessKey - accessKey. optional.
   * @param {String} signature - signature. optional.
   * @param {String} timestamp - timestamp. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} skipAuth - __skipAuth. optional. default: true.
   * @param {String} RegionId - RegionId. optional.
   * @param {String} DbInstanceId - DbInstanceId. optional.
   * @param {String} PageSize - PageSize. optional.
   * @param {String} CurrentPage - CurrentPage. optional.
   */
  describeAccounts(params = {}, options = {}) {
    return this.request('DescribeAccounts', params, options);
  }

  /**
   * @param {String} Uid - Uid. optional.
   * @param {String} accessKey - accessKey. optional.
   * @param {String} signature - signature. optional.
   * @param {String} timestamp - timestamp. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} skipAuth - __skipAuth. optional. default: true.
   * @param {String} RegionId - RegionId. optional.
   * @param {String} DbInstanceId - DbInstanceId. optional.
   */
  describeBackupPolicy(params = {}, options = {}) {
    return this.request('DescribeBackupPolicy', params, options);
  }

  /**
   * @param {String} Uid - Uid. optional.
   * @param {String} accessKey - accessKey. optional.
   * @param {String} signature - signature. optional.
   * @param {String} timestamp - timestamp. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} skipAuth - __skipAuth. optional. default: true.
   * @param {String} StartTime - StartTime. optional.
   * @param {String} EndTime - EndTime. optional.
   * @param {String} RegionId - RegionId. optional.
   * @param {String} DbInstanceId - DbInstanceId. optional.
   */
  describeBackupTasks(params = {}, options = {}) {
    return this.request('DescribeBackupTasks', params, options);
  }

  /**
   * @param {String} Uid - Uid. optional.
   * @param {String} accessKey - accessKey. optional.
   * @param {String} signature - signature. optional.
   * @param {String} timestamp - timestamp. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} skipAuth - __skipAuth. optional. default: true.
   * @param {String} StartTime - StartTime. optional.
   * @param {String} EndTime - EndTime. optional.
   * @param {String} RegionId - RegionId. optional.
   * @param {String} DbInstanceId - DbInstanceId. optional.
   * @param {String} PageSize - PageSize. optional.
   * @param {String} CurrentPage - CurrentPage. optional.
   */
  describeBackups(params = {}, options = {}) {
    return this.request('DescribeBackups', params, options);
  }

  /**
   * @param {String} Uid - Uid. optional.
   * @param {String} accessKey - accessKey. optional.
   * @param {String} signature - signature. optional.
   * @param {String} timestamp - timestamp. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} skipAuth - __skipAuth. optional. default: true.
   * @param {String} RegionId - RegionId. optional.
   * @param {String} Dimension - Dimension. optional.
   */
  describeDBDisplayMetricList(params = {}, options = {}) {
    return this.request('DescribeDBDisplayMetricList', params, options);
  }

  /**
   * @param {String} Uid - Uid. optional.
   * @param {String} accessKey - accessKey. optional.
   * @param {String} signature - signature. optional.
   * @param {String} timestamp - timestamp. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} skipAuth - __skipAuth. optional. default: true.
   * @param {String} DbInstanceId - DbInstanceId. optional.
   */
  describeDBInstanceAttribute(params = {}, options = {}) {
    return this.request('DescribeDBInstanceAttribute', params, options);
  }

  /**
   * @param {String} Uid - Uid. optional.
   * @param {String} accessKey - accessKey. optional.
   * @param {String} signature - signature. optional.
   * @param {String} timestamp - timestamp. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} skipAuth - __skipAuth. optional. default: true.
   * @param {String} RegionId - RegionId. optional.
   * @param {String} StartTime - StartTime. optional.
   * @param {String} EndTime - EndTime. optional.
   * @param {String} DbInstanceId - DbInstanceId. optional.
   * @param {String} Dimension - Dimension. optional.
   * @param {String} Metrics - Metrics. optional.
   */
  describeDBInstanceMetricsValue(params = {}, options = {}) {
    return this.request('DescribeDBInstanceMetricsValue', params, options);
  }

  /**
   * @param {String} Uid - Uid. optional.
   * @param {String} accessKey - accessKey. optional.
   * @param {String} signature - signature. optional.
   * @param {String} timestamp - timestamp. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} skipAuth - __skipAuth. optional. default: true.
   * @param {String} RegionId - RegionId. optional.
   * @param {String} PageSize - PageSize. optional.
   * @param {String} CurrentPage - CurrentPage. optional.
   */
  describeDBInstances(params = {}, options = {}) {
    return this.request('DescribeDBInstances', params, options);
  }

  /**
   * @param {String} Uid - Uid. optional.
   * @param {String} accessKey - accessKey. optional.
   * @param {String} signature - signature. optional.
   * @param {String} timestamp - timestamp. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} skipAuth - __skipAuth. optional. default: true.
   * @param {String} AcceptLanguage - AcceptLanguage. optional.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} Uid - Uid. optional.
   * @param {String} accessKey - accessKey. optional.
   * @param {String} signature - signature. optional.
   * @param {String} timestamp - timestamp. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} skipAuth - __skipAuth. optional. default: true.
   * @param {String} DbInstanceId - DbInstanceId. optional.
   */
  describeResourceUsage(params = {}, options = {}) {
    return this.request('DescribeResourceUsage', params, options);
  }

  /**
   * @param {String} Uid - Uid. optional.
   * @param {String} accessKey - accessKey. optional.
   * @param {String} signature - signature. optional.
   * @param {String} timestamp - timestamp. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} skipAuth - __skipAuth. optional. default: true.
   * @param {String} StartTime - StartTime. optional.
   * @param {String} EndTime - EndTime. optional.
   * @param {String} RegionId - RegionId. optional.
   * @param {String} DbInstanceId - DbInstanceId. optional.
   */
  describeTasks(params = {}, options = {}) {
    return this.request('DescribeTasks', params, options);
  }

  /**
   * @param {String} Uid - Uid. optional.
   * @param {String} accessKey - accessKey. optional.
   * @param {String} signature - signature. optional.
   * @param {String} timestamp - timestamp. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} skipAuth - __skipAuth. optional. default: true.
   * @param {String} RegionId - RegionId. optional.
   * @param {String} DbInstanceId - DbInstanceId. optional.
   * @param {String} PreferredBackupPeriod - PreferredBackupPeriod. optional.
   * @param {String} BackupStartTime - BackupStartTime. optional.
   * @param {String} BackupRetentionCopies - BackupRetentionCopies. optional.
   * @param {String} BackupRetentionDays - BackupRetentionDays. optional.
   */
  modifyBackupPolicy(params = {}, options = {}) {
    return this.request('ModifyBackupPolicy', params, options);
  }

  /**
   * @param {String} Uid - Uid. optional.
   * @param {String} accessKey - accessKey. optional.
   * @param {String} signature - signature. optional.
   * @param {String} timestamp - timestamp. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} skipAuth - __skipAuth. optional. default: true.
   * @param {String} DbInstanceId - DbInstanceId. optional.
   * @param {String} InstanceDescription - InstanceDescription. optional.
   */
  modifyDBInstanceDescription(params = {}, options = {}) {
    return this.request('ModifyDBInstanceDescription', params, options);
  }

  /**
   * @param {String} Uid - Uid. optional.
   * @param {String} accessKey - accessKey. optional.
   * @param {String} signature - signature. optional.
   * @param {String} timestamp - timestamp. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} skipAuth - __skipAuth. optional. default: true.
   * @param {String} DbInstanceId - DbInstanceId. optional.
   * @param {String} MaintainTime - MaintainTime. optional.
   */
  modifyDBInstanceMaintainTime(params = {}, options = {}) {
    return this.request('ModifyDBInstanceMaintainTime', params, options);
  }

  /**
   * @param {String} Uid - Uid. optional.
   * @param {String} accessKey - accessKey. optional.
   * @param {String} signature - signature. optional.
   * @param {String} timestamp - timestamp. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} skipAuth - __skipAuth. optional. default: true.
   * @param {String} Buyerid - Buyerid. optional.
   * @param {String} InstanceId - InstanceId. optional.
   * @param {String} CommodityCode - CommodityCode. optional.
   * @param {String} Success - Success. optional.
   * @param {String} EventTime - EventTime. optional.
   * @param {String} OrderId - OrderId. optional.
   * @param {String} Token - Token. optional.
   * @param {String} RequestId - RequestId. optional.
   * @param {String} FromApp - FromApp. optional.
   */
  openCallBack(params = {}, options = {}) {
    return this.request('OpenCallBack', params, options);
  }

  /**
   * @param {String} Uid - Uid. optional.
   * @param {String} accessKey - accessKey. optional.
   * @param {String} signature - signature. optional.
   * @param {String} timestamp - timestamp. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} skipAuth - __skipAuth. optional. default: true.
   * @param {String} data - data. optional.
   */
  payOrderCallback(params = {}, options = {}) {
    return this.request('PayOrderCallback', params, options);
  }

  /**
   * @param {String} Uid - Uid. optional.
   * @param {String} accessKey - accessKey. optional.
   * @param {String} signature - signature. optional.
   * @param {String} timestamp - timestamp. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} skipAuth - __skipAuth. optional. default: true.
   * @param {String} data - data. optional.
   */
  refundOrderCallback(params = {}, options = {}) {
    return this.request('RefundOrderCallback', params, options);
  }

  /**
   * @param {String} Uid - Uid. optional.
   * @param {String} accessKey - accessKey. optional.
   * @param {String} signature - signature. optional.
   * @param {String} timestamp - timestamp. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} skipAuth - __skipAuth. optional. default: true.
   * @param {String} RegionId - RegionId. optional.
   * @param {String} DbInstanceId - DbInstanceId. optional.
   * @param {String} AccountName - AccountName. optional.
   * @param {String} AccountPassword - AccountPassword. optional.
   */
  resetAccountPassword(params = {}, options = {}) {
    return this.request('ResetAccountPassword', params, options);
  }

  /**
   * @param {String} Uid - Uid. optional.
   * @param {String} accessKey - accessKey. optional.
   * @param {String} signature - signature. optional.
   * @param {String} timestamp - timestamp. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} skipAuth - __skipAuth. optional. default: true.
   * @param {String} RegionId - RegionId. optional.
   * @param {String} HostInstanceId - HostInstanceId. optional.
   * @param {String} DbInstanceId - DbInstanceId. optional.
   * @param {String} BackupId - BackupId. optional.
   */
  restoreDBInstance(params = {}, options = {}) {
    return this.request('RestoreDBInstance', params, options);
  }

  /**
   * @param {String} Uid - Uid. optional.
   * @param {String} accessKey - accessKey. optional.
   * @param {String} signature - signature. optional.
   * @param {String} timestamp - timestamp. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} skipAuth - __skipAuth. optional. default: true.
   * @param {String} data - data. optional.
   */
  verify(params = {}, options = {}) {
    return this.request('Verify', params, options);
  }

}

module.exports = Client;

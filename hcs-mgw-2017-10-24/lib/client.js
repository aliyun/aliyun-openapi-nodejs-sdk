
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-10-24';
    super(config);
  }

  /**
   * @param {String} Url - url. required.
   * @param {String} Act - act. required.
   * @param {String} Head - head. required.
   * @param {String} Payload - payload. required.
   */
  apiAgent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Url')) {
      throw new TypeError('parameter "Url" is required');
    }

    if (!hasOwnProperty(params, 'Act')) {
      throw new TypeError('parameter "Act" is required');
    }

    if (!hasOwnProperty(params, 'Head')) {
      throw new TypeError('parameter "Head" is required');
    }

    if (!hasOwnProperty(params, 'Payload')) {
      throw new TypeError('parameter "Payload" is required');
    }

    return this.request('ApiAgent', params, options);
  }

  /**
   * @param {String} MgwRegionId - addressRegionId. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vSwitchId. optional.
   * @param {String} AddressType - addressType. required.
   * @param {String} Direction - direction. required.
   * @param {String} Domain - domain. optional.
   * @param {String} Address - address. optional.
   * @param {String} SubAddress - subAddress. optional.
   * @param {String} Appid - appid. optional.
   * @param {String} ListFilePath - listFilePath. optional.
   * @param {String} AccessMethod - accessMethod. optional.
   * @param {String} AccessProxy - accessProxy. optional.
   * @param {String} AccessKeySecret - accessKeySecret. optional.
   * @param {String} AccessKey - accessKeyId. optional.
   * @param {String} ServerEncryption - serverEncryption. optional.
   */
  checkImportDataAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AddressType')) {
      throw new TypeError('parameter "AddressType" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    return this.request('CheckImportDataAddress', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} Direction - direction. required.
   */
  checkImportDataAddressEx(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    return this.request('CheckImportDataAddressEx', params, options);
  }

  /**
   * @param {String} License - license. required.
   */
  checkMigrationLicense(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'License')) {
      throw new TypeError('parameter "License" is required');
    }

    return this.request('CheckMigrationLicense', params, options);
  }

  /**
   * @param {String} MgwRegionId - addressRegionId. required.
   * @param {String} VpcId - vpcId. required.
   * @param {String} VSwitchId - vSwitchId. required.
   * @param {String} Name - name. required.
   * @param {String} AddressType - addressType. required.
   * @param {String} Domain - domain. optional.
   * @param {String} Address - address. required.
   * @param {String} SubAddress - subAddress. optional.
   * @param {String} Appid - appid. optional.
   * @param {String} ListFilePath - listFilePath. optional.
   * @param {String} AccessMethod - accessMethod. optional.
   * @param {String} AccessProxy - accessProxy. optional.
   * @param {String} AccessVersion - accessVersion. optional.
   * @param {String} AccessKeySecret - accessKeySecret. optional.
   * @param {String} AccessKey - accessKeyId. optional.
   * @param {String} ServerEncryption - serverEncryption. optional.
   */
  createDataAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MgwRegionId')) {
      throw new TypeError('parameter "MgwRegionId" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'VSwitchId')) {
      throw new TypeError('parameter "VSwitchId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'AddressType')) {
      throw new TypeError('parameter "AddressType" is required');
    }

    if (!hasOwnProperty(params, 'Address')) {
      throw new TypeError('parameter "Address" is required');
    }

    return this.request('CreateDataAddress', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {Long} TotalObjectNum - totalObjectNum. required.
   * @param {String} TotalObjectSize - totalObjectSize. required.
   * @param {String} ExpectedImportTime - expectedImportTime. optional.
   * @param {Boolean} IncrementalMode - incrementalMode. required.
   * @param {Integer} IncrementalInterval - intervalInSecond. optional.
   * @param {Integer} IncrementalRepeatCount - repeatCount. optional.
   * @param {String} NetFlowLimiter - speedTimeTableLimiter. optional.
   * @param {Boolean} IsCustomizedInstance - customizedInstance. optional.
   * @param {String} CustomizedInstances - customizedInstances. optional.
   * @param {String} SrcAddressRegionId - srcAddressRegionId. optional.
   * @param {String} SrcAddressType - srcAddressType. required.
   * @param {String} SrcDomain - srcDomain. optional.
   * @param {String} SrcAddress - srcAddress. optional.
   * @param {String} SrcSubAddress - srcSubAddress. optional.
   * @param {String} SrcAccessKeyId - srcAccessKeyId. optional.
   * @param {String} SrcAccessKeySecret - srcAccessKeySecret. optional.
   * @param {String} SrcAppid - srcAppid. optional.
   * @param {String} SrcListFilePath - srcListFilePath. optional.
   * @param {String} DestAddressRegionId - addressRegionId. required.
   * @param {String} DestAccessKeyId - accessKeyId. required.
   * @param {String} DestAccessKeySecret - accessKeySecret. required.
   * @param {String} DestBucket - address. required.
   * @param {String} DestPrefix - subAddress. optional.
   */
  createImportJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'TotalObjectNum')) {
      throw new TypeError('parameter "TotalObjectNum" is required');
    }

    if (!hasOwnProperty(params, 'TotalObjectSize')) {
      throw new TypeError('parameter "TotalObjectSize" is required');
    }

    if (!hasOwnProperty(params, 'IncrementalMode')) {
      throw new TypeError('parameter "IncrementalMode" is required');
    }

    if (!hasOwnProperty(params, 'SrcAddressType')) {
      throw new TypeError('parameter "SrcAddressType" is required');
    }

    if (!hasOwnProperty(params, 'DestAddressRegionId')) {
      throw new TypeError('parameter "DestAddressRegionId" is required');
    }

    if (!hasOwnProperty(params, 'DestAccessKeyId')) {
      throw new TypeError('parameter "DestAccessKeyId" is required');
    }

    if (!hasOwnProperty(params, 'DestAccessKeySecret')) {
      throw new TypeError('parameter "DestAccessKeySecret" is required');
    }

    if (!hasOwnProperty(params, 'DestBucket')) {
      throw new TypeError('parameter "DestBucket" is required');
    }

    return this.request('CreateImportJob', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {Long} TotalObjectNum - totalObjectNum. required.
   * @param {String} TotalObjectSize - totalObjectSize. required.
   * @param {String} ExpectedImportTime - expectedImportTime. optional.
   * @param {Boolean} IncrementalMode - incrementalMode. required.
   * @param {Integer} IncrementalInterval - intervalInSecond. optional.
   * @param {Integer} IncrementalRepeatCount - repeatCount. optional.
   * @param {String} NetFlowLimiter - speedTimeTableLimiter. optional.
   * @param {Boolean} IsCustomizedInstance - customizedInstance. optional.
   * @param {String} CustomizedInstances - customizedInstances. optional.
   * @param {String} SrcAddress - srcAddress. required.
   * @param {String} DestAddress - destAddress. required.
   */
  createImportJobEx(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'TotalObjectNum')) {
      throw new TypeError('parameter "TotalObjectNum" is required');
    }

    if (!hasOwnProperty(params, 'TotalObjectSize')) {
      throw new TypeError('parameter "TotalObjectSize" is required');
    }

    if (!hasOwnProperty(params, 'IncrementalMode')) {
      throw new TypeError('parameter "IncrementalMode" is required');
    }

    if (!hasOwnProperty(params, 'SrcAddress')) {
      throw new TypeError('parameter "SrcAddress" is required');
    }

    if (!hasOwnProperty(params, 'DestAddress')) {
      throw new TypeError('parameter "DestAddress" is required');
    }

    return this.request('CreateImportJobEx', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} Lang - lang. optional. default: zh_cn.
   */
  createImportReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateImportReport', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} SrcAddress - srcAddress. required.
   * @param {String} DestAddress - destAddress. required.
   * @param {Long} LastScanTime - lastScanTime. optional.
   * @param {Long} StartDate - startDate. optional.
   * @param {Integer} IntervalInSecond - intervalInSecond. optional.
   * @param {Integer} RepeatCount - repeatCount. optional.
   * @param {Long} GroupFileSizeLimiter - groupFileSizeLimiter. optional.
   * @param {Long} GroupFileCountLimiter - groupFileCountLimiter. optional.
   * @param {String} SpeedTimeTableLimiter - speedTimeTableLimiter. optional.
   * @param {Boolean} NoNewRunIfAnyRunning - noNewRunIfAnyRunning. optional.
   * @param {Boolean} RunImmediate - runImmediate. optional.
   */
  createJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'SrcAddress')) {
      throw new TypeError('parameter "SrcAddress" is required');
    }

    if (!hasOwnProperty(params, 'DestAddress')) {
      throw new TypeError('parameter "DestAddress" is required');
    }

    return this.request('CreateJob', params, options);
  }

  /**
   * @param {String} OrderId - orderId. required.
   */
  createMigrationLicense(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    return this.request('CreateMigrationLicense', params, options);
  }

  /**
   * @param {String} MoverRegionId - moverRegionId. required.
   * @param {String} VpcId - vpcId. required.
   * @param {String} VSwitchId - vSwitchId. required.
   * @param {String} Scale - scale. required.
   */
  createMover(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MoverRegionId')) {
      throw new TypeError('parameter "MoverRegionId" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'VSwitchId')) {
      throw new TypeError('parameter "VSwitchId" is required');
    }

    if (!hasOwnProperty(params, 'Scale')) {
      throw new TypeError('parameter "Scale" is required');
    }

    return this.request('CreateMover', params, options);
  }

  /**
   * @param {Integer} MigSize - migSize. required.
   * @param {String} SrcType - srcType. required.
   * @param {String} destType - destType. required.
   * @param {String} ToRegion - toRegion. required.
   * @param {String} ContactName - contactName. required.
   * @param {String} PhoneNumber - phoneNumber. required.
   * @param {Boolean} HasGigabitSwitch - hasGigabitSwitch. required.
   * @param {Boolean} HasTenGigabitSwitch - hasTenGigabitSwitch. required.
   * @param {Integer} AvailableSwitchPortNum - availableSwitchPortNum. required.
   * @param {Boolean} HasElectricalPort - hasElectricalPort. required.
   * @param {Boolean} HasFibreOpticalPort - hasFibreOpticalPort. required.
   * @param {Boolean} Has3U - has3U. required.
   * @param {Boolean} HasComputingNode - hasComputingNode. required.
   * @param {Boolean} HasBrowser - hasBrowser. required.
   * @param {String} TotalFileCount - totalFileCount. required.
   * @param {String} AverageFileSize - averageFileSize. required.
   */
  createOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MigSize')) {
      throw new TypeError('parameter "MigSize" is required');
    }

    if (!hasOwnProperty(params, 'SrcType')) {
      throw new TypeError('parameter "SrcType" is required');
    }

    if (!hasOwnProperty(params, 'destType')) {
      throw new TypeError('parameter "destType" is required');
    }

    if (!hasOwnProperty(params, 'ToRegion')) {
      throw new TypeError('parameter "ToRegion" is required');
    }

    if (!hasOwnProperty(params, 'ContactName')) {
      throw new TypeError('parameter "ContactName" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    if (!hasOwnProperty(params, 'HasGigabitSwitch')) {
      throw new TypeError('parameter "HasGigabitSwitch" is required');
    }

    if (!hasOwnProperty(params, 'HasTenGigabitSwitch')) {
      throw new TypeError('parameter "HasTenGigabitSwitch" is required');
    }

    if (!hasOwnProperty(params, 'AvailableSwitchPortNum')) {
      throw new TypeError('parameter "AvailableSwitchPortNum" is required');
    }

    if (!hasOwnProperty(params, 'HasElectricalPort')) {
      throw new TypeError('parameter "HasElectricalPort" is required');
    }

    if (!hasOwnProperty(params, 'HasFibreOpticalPort')) {
      throw new TypeError('parameter "HasFibreOpticalPort" is required');
    }

    if (!hasOwnProperty(params, 'Has3U')) {
      throw new TypeError('parameter "Has3U" is required');
    }

    if (!hasOwnProperty(params, 'HasComputingNode')) {
      throw new TypeError('parameter "HasComputingNode" is required');
    }

    if (!hasOwnProperty(params, 'HasBrowser')) {
      throw new TypeError('parameter "HasBrowser" is required');
    }

    if (!hasOwnProperty(params, 'TotalFileCount')) {
      throw new TypeError('parameter "TotalFileCount" is required');
    }

    if (!hasOwnProperty(params, 'AverageFileSize')) {
      throw new TypeError('parameter "AverageFileSize" is required');
    }

    return this.request('CreateOrder', params, options);
  }

  /**
   * @param {String} RemoteName - name. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} VpcId - vpcId. required.
   * @param {String} RemoteType - remoteType. required.
   * @param {String} RemoteHost - remoteHost. required.
   * @param {String} Path - path. required.
   * @param {String} MountType - mountType. required.
   * @param {String} UserName - userName. optional.
   * @param {String} Password - password. optional.
   * @param {String} MountPoint - mountPoint. required.
   */
  createRemote(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RemoteName')) {
      throw new TypeError('parameter "RemoteName" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'RemoteType')) {
      throw new TypeError('parameter "RemoteType" is required');
    }

    if (!hasOwnProperty(params, 'RemoteHost')) {
      throw new TypeError('parameter "RemoteHost" is required');
    }

    if (!hasOwnProperty(params, 'Path')) {
      throw new TypeError('parameter "Path" is required');
    }

    if (!hasOwnProperty(params, 'MountType')) {
      throw new TypeError('parameter "MountType" is required');
    }

    if (!hasOwnProperty(params, 'MountPoint')) {
      throw new TypeError('parameter "MountPoint" is required');
    }

    return this.request('CreateRemote', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} VpcId - vpcId. required.
   * @param {String} VSwitchId - vSwitchId. required.
   * @param {String} Scale - scale. required.
   */
  createSyncer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'VSwitchId')) {
      throw new TypeError('parameter "VSwitchId" is required');
    }

    if (!hasOwnProperty(params, 'Scale')) {
      throw new TypeError('parameter "Scale" is required');
    }

    return this.request('CreateSyncer', params, options);
  }

  /**
   * @param {String} Name - name. optional.
   */
  deleteDataAddress(params = {}, options = {}) {
    return this.request('DeleteDataAddress', params, options);
  }

  /**
   * @param {String} Name - name. required.
   */
  deleteImportJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('DeleteImportJob', params, options);
  }

  /**
   * @param {String} JobName - jobName. required.
   */
  deleteJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobName')) {
      throw new TypeError('parameter "JobName" is required');
    }

    return this.request('DeleteJob', params, options);
  }

  /**
   * @param {String} MoverId - moverId. optional.
   */
  deleteMover(params = {}, options = {}) {
    return this.request('DeleteMover', params, options);
  }

  /**
   * @param {String} AccessKey - accessKey. required.
   * @param {String} AccessKeySecret - accessKeySecret. required.
   * @param {String} Domain - domain. required.
   * @param {String} Bucket - bucket. required.
   * @param {String} Prefix - prefix. optional.
   */
  describeBucketFolders(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessKey')) {
      throw new TypeError('parameter "AccessKey" is required');
    }

    if (!hasOwnProperty(params, 'AccessKeySecret')) {
      throw new TypeError('parameter "AccessKeySecret" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Bucket')) {
      throw new TypeError('parameter "Bucket" is required');
    }

    return this.request('DescribeBucketFolders', params, options);
  }

  /**
   * @param {String} AccessKey - accessKey. required.
   * @param {String} AccessKeySecret - accessKeySecret. required.
   * @param {String} Domain - domain. required.
   */
  describeBuckets(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessKey')) {
      throw new TypeError('parameter "AccessKey" is required');
    }

    if (!hasOwnProperty(params, 'AccessKeySecret')) {
      throw new TypeError('parameter "AccessKeySecret" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('DescribeBuckets', params, options);
  }

  /**
   * @param {String} MgwRegionId - addressRegionId. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vSwitchId. optional.
   * @param {String} AddressType - addressType. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeDataAddresses(params = {}, options = {}) {
    return this.request('DescribeDataAddresses', params, options);
  }

  /**
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeImportJobs(params = {}, options = {}) {
    return this.request('DescribeImportJobs', params, options);
  }

  /**
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} Name - name. required.
   */
  describeImportReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('DescribeImportReport', params, options);
  }

  /**
   * @param {String} MgwRegionId - jobRegionId. optional.
   * @param {String} JobName - jobName. optional.
   * @param {String} JobType - jobType. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeJobs(params = {}, options = {}) {
    return this.request('DescribeJobs', params, options);
  }

  /**
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeMigrationOrders(params = {}, options = {}) {
    return this.request('DescribeMigrationOrders', params, options);
  }

  /**
   * @param {String} MoverId - moverId. optional.
   */
  describeMoverAttribute(params = {}, options = {}) {
    return this.request('DescribeMoverAttribute', params, options);
  }

  /**
   * @param {String} MoverRegionId - moverRegionId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeMovers(params = {}, options = {}) {
    return this.request('DescribeMovers', params, options);
  }

  /**
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeRemotes(params = {}, options = {}) {
    return this.request('DescribeRemotes', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeSyncers(params = {}, options = {}) {
    return this.request('DescribeSyncers', params, options);
  }

  /**
   */
  describeUserBusinessStatus(params = {}, options = {}) {
    return this.request('DescribeUserBusinessStatus', params, options);
  }

  /**
   */
  describeUserOptions(params = {}, options = {}) {
    return this.request('DescribeUserOptions', params, options);
  }

  /**
   * @param {String} Name - name. optional.
   */
  getDataAddress(params = {}, options = {}) {
    return this.request('GetDataAddress', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {Integer} LastMinutes - lastMinutes. required.
   */
  getImportJobDetailedStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'LastMinutes')) {
      throw new TypeError('parameter "LastMinutes" is required');
    }

    return this.request('GetImportJobDetailedStatus', params, options);
  }

  /**
   * @param {String} Name - name. required.
   */
  getImportJobStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('GetImportJobStatus', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} ReportId - reportId. required.
   */
  getImportReportStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ReportId')) {
      throw new TypeError('parameter "ReportId" is required');
    }

    return this.request('GetImportReportStatus', params, options);
  }

  /**
   * @param {Long} OrderId - orderId. required.
   */
  getLightningCubeInstallerUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    return this.request('GetLightningCubeInstallerUrl', params, options);
  }

  /**
   */
  getSupportImportDataAddressType(params = {}, options = {}) {
    return this.request('GetSupportImportDataAddressType', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  payOrderCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('PayOrderCallback', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  refund(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('Refund', params, options);
  }

  /**
   * @param {String} Name - name. optional.
   */
  retryDataAddress(params = {}, options = {}) {
    return this.request('RetryDataAddress', params, options);
  }

  /**
   * @param {String} Name - name. required.
   */
  retryImportJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('RetryImportJob', params, options);
  }

  /**
   * @param {String} Name - name. required.
   */
  startImportJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('StartImportJob', params, options);
  }

  /**
   * @param {String} JobName - jobName. required.
   */
  startJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobName')) {
      throw new TypeError('parameter "JobName" is required');
    }

    return this.request('StartJob', params, options);
  }

  /**
   * @param {String} Name - name. required.
   */
  stopImportJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('StopImportJob', params, options);
  }

  /**
   * @param {String} JobName - jobName. required.
   */
  stopJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobName')) {
      throw new TypeError('parameter "JobName" is required');
    }

    return this.request('StopJob', params, options);
  }

  /**
   * @param {String} MgwRegionId - addressRegionId. required.
   * @param {String} VpcId - vpcId. required.
   * @param {String} VSwitchId - vSwitchId. required.
   * @param {String} Name - name. required.
   * @param {String} AddressType - addressType. required.
   * @param {String} Domain - domain. optional.
   * @param {String} Address - address. required.
   * @param {String} SubAddress - subAddress. optional.
   * @param {String} Appid - appid. optional.
   * @param {String} ListFilePath - listFilePath. optional.
   * @param {String} AccessMethod - accessMethod. optional.
   * @param {String} AccessProxy - accessProxy. optional.
   * @param {String} AccessKeySecret - accessKeySecret. optional.
   * @param {String} AccessKey - accessKeyId. optional.
   * @param {String} ServerEncryption - serverEncryption. optional.
   */
  updateDataAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MgwRegionId')) {
      throw new TypeError('parameter "MgwRegionId" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'VSwitchId')) {
      throw new TypeError('parameter "VSwitchId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'AddressType')) {
      throw new TypeError('parameter "AddressType" is required');
    }

    if (!hasOwnProperty(params, 'Address')) {
      throw new TypeError('parameter "Address" is required');
    }

    return this.request('UpdateDataAddress', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} NetflowLimiter - speedTimeTableLimiter. required.
   */
  updateImportJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'NetflowLimiter')) {
      throw new TypeError('parameter "NetflowLimiter" is required');
    }

    return this.request('UpdateImportJob', params, options);
  }

  /**
   * @param {String} OrderId - orderId. required.
   * @param {String} Status - status. required.
   */
  updateMigrationStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('UpdateMigrationStatus', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  verifyCssCreateOrderParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('VerifyCssCreateOrderParam', params, options);
  }

}

module.exports = Client;

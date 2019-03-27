
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-11-10';
    super(config);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} CorpNm - CorpNm. required.
   * @param {String} CorpWebSite - CorpWebSite. required.
   * @param {String} OwnIndustry - OwnIndustry. required.
   * @param {String} RequireNode - RequireNode. required.
   * @param {String} InstanceCount - InstanceCount. required.
   * @param {String} RequireDesc - RequireDesc. required.
   * @param {String} Mobile - Mobile. required.
   * @param {String} Email - Email. required.
   */
  addUserReqDesc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'CorpNm')) {
      throw new TypeError('parameter "CorpNm" is required');
    }

    if (!hasOwnProperty(params, 'CorpWebSite')) {
      throw new TypeError('parameter "CorpWebSite" is required');
    }

    if (!hasOwnProperty(params, 'OwnIndustry')) {
      throw new TypeError('parameter "OwnIndustry" is required');
    }

    if (!hasOwnProperty(params, 'RequireNode')) {
      throw new TypeError('parameter "RequireNode" is required');
    }

    if (!hasOwnProperty(params, 'InstanceCount')) {
      throw new TypeError('parameter "InstanceCount" is required');
    }

    if (!hasOwnProperty(params, 'RequireDesc')) {
      throw new TypeError('parameter "RequireDesc" is required');
    }

    if (!hasOwnProperty(params, 'Mobile')) {
      throw new TypeError('parameter "Mobile" is required');
    }

    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    return this.request('AddUserReqDesc', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} CorpeationName - CorpeationName. required.
   * @param {String} CorporationWebSite - CorporationWebSite. required.
   * @param {String} OwnIndustry - OwnIndustry. required.
   * @param {String} RequireNode - RequireNode. required.
   * @param {String} InstanceCount - InstanceCount. required.
   * @param {String} RequireDesc - RequireDesc. required.
   * @param {String} Mobile - Mobile. required.
   * @param {String} Email - Email. required.
   */
  addUserRequirement(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'CorpeationName')) {
      throw new TypeError('parameter "CorpeationName" is required');
    }

    if (!hasOwnProperty(params, 'CorporationWebSite')) {
      throw new TypeError('parameter "CorporationWebSite" is required');
    }

    if (!hasOwnProperty(params, 'OwnIndustry')) {
      throw new TypeError('parameter "OwnIndustry" is required');
    }

    if (!hasOwnProperty(params, 'RequireNode')) {
      throw new TypeError('parameter "RequireNode" is required');
    }

    if (!hasOwnProperty(params, 'InstanceCount')) {
      throw new TypeError('parameter "InstanceCount" is required');
    }

    if (!hasOwnProperty(params, 'RequireDesc')) {
      throw new TypeError('parameter "RequireDesc" is required');
    }

    if (!hasOwnProperty(params, 'Mobile')) {
      throw new TypeError('parameter "Mobile" is required');
    }

    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    return this.request('AddUserRequirement', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} DiskId - DiskId. required.
   * @param {String} InstanceId - InstanceId. optional.
   * @param {String} DeleteWithInstance - DeleteWithInstance. optional.
   */
  attachDisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    return this.request('AttachDisk', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} ImageId - ImageId. required.
   * @param {String} InstanceSpec - InstanceSpec. required.
   * @param {String} SystemDiskSize - SystemDiskSize. required.
   * @param {String} DataDiskSize - DataDiskSize. required.
   * @param {String} BandwidthType - BandwidthType. required.
   * @param {String} InstanceBandwithdLimit - InstanceBandwithdLimit. required.
   * @param {String} Password - Password. required.
   * @param {String} NetLevel - NetLevel. required.
   * @param {String} SchedulingStrategy - SchedulingStrategy. required.
   * @param {String} BuyResourcesDetail - BuyResourcesDetail. required.
   */
  checkBuyResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceSpec')) {
      throw new TypeError('parameter "InstanceSpec" is required');
    }

    if (!hasOwnProperty(params, 'SystemDiskSize')) {
      throw new TypeError('parameter "SystemDiskSize" is required');
    }

    if (!hasOwnProperty(params, 'DataDiskSize')) {
      throw new TypeError('parameter "DataDiskSize" is required');
    }

    if (!hasOwnProperty(params, 'BandwidthType')) {
      throw new TypeError('parameter "BandwidthType" is required');
    }

    if (!hasOwnProperty(params, 'InstanceBandwithdLimit')) {
      throw new TypeError('parameter "InstanceBandwithdLimit" is required');
    }

    if (!hasOwnProperty(params, 'Password')) {
      throw new TypeError('parameter "Password" is required');
    }

    if (!hasOwnProperty(params, 'NetLevel')) {
      throw new TypeError('parameter "NetLevel" is required');
    }

    if (!hasOwnProperty(params, 'SchedulingStrategy')) {
      throw new TypeError('parameter "SchedulingStrategy" is required');
    }

    if (!hasOwnProperty(params, 'BuyResourcesDetail')) {
      throw new TypeError('parameter "BuyResourcesDetail" is required');
    }

    return this.request('CheckBuyResource', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} data - Data. required.
   */
  commonDriverCompleteCommondity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CommonDriverCompleteCommondity', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} data - Data. optional.
   */
  commonDriverCompleteDiskCommondity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('CommonDriverCompleteDiskCommondity', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} data - Data. required.
   */
  commonDriverCompleteDiskOrderParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CommonDriverCompleteDiskOrderParam', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} data - Data. required.
   */
  commonDriverCompleteOrderParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CommonDriverCompleteOrderParam', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} data - Data. required.
   */
  commonDriverDiskVerify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CommonDriverDiskVerify', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} data - Data. required.
   */
  commonDriverEnsPostVerify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CommonDriverEnsPostVerify', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} data - Data. required.
   */
  commonDriverPayOrderCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CommonDriverPayOrderCallback', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} data - Data. required.
   */
  commonDriverPayOrderDiskCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CommonDriverPayOrderDiskCallback', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} data - Data. required.
   */
  commonDriverPayOrderEnsPostCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CommonDriverPayOrderEnsPostCallback', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} data - Data. required.
   */
  commonDriverVerify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CommonDriverVerify', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} ImageId - ImageId. required.
   * @param {String} SystemDiskSize - SystemDiskSize. required.
   * @param {String} DataDiskSize - DataDiskSize. optional.
   * @param {String} InstanceSpec - InstanceSpec. optional.
   * @param {String} Password - Password. required.
   */
  createBuildMachine(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    if (!hasOwnProperty(params, 'SystemDiskSize')) {
      throw new TypeError('parameter "SystemDiskSize" is required');
    }

    if (!hasOwnProperty(params, 'Password')) {
      throw new TypeError('parameter "Password" is required');
    }

    return this.request('CreateBuildMachine', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} EnsServiceId - EnsServiceId. required.
   * @param {String} OrderType - OrderType. required.
   * @param {String} OldBuyResourcesDetail - OldBuyResourcesDetail. optional.
   */
  createEnsService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'EnsServiceId')) {
      throw new TypeError('parameter "EnsServiceId" is required');
    }

    if (!hasOwnProperty(params, 'OrderType')) {
      throw new TypeError('parameter "OrderType" is required');
    }

    return this.request('CreateEnsService', params, options);
  }

  /**
   * @param {String} product - Product. optional.
   * @param {String} Version - Version. required.
   * @param {String} InstanceId - InstanceId. required.
   * @param {String} ImageName - ImageName. required.
   * @param {String} DeleteAfterImageUpload - DeleteAfterImageUpload. optional.
   */
  createImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ImageName')) {
      throw new TypeError('parameter "ImageName" is required');
    }

    return this.request('CreateImage', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} InstanceType - InstanceType. required.
   * @param {String} EnsRegionId - EnsRegionId. required.
   * @param {String} Password - Password. required.
   * @param {String} Period - Period. required.
   * @param {String} ImageId - ImageId. required.
   * @param {String} Quantity - Quantity. required.
   * @param {String} InternetChargeType - BandwidthType. optional.
   * @param {String} AutoRenewPeriod - AutoRenewPeriod. optional.
   * @param {String} AutoRenew - AutoRenew. optional.
   * @param {SystemDisk} SystemDisk - undefined. required.
   * @param {DataDisk} DataDisk - undefined. required.
   */
  createInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    if (!hasOwnProperty(params, 'EnsRegionId')) {
      throw new TypeError('parameter "EnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'Password')) {
      throw new TypeError('parameter "Password" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    if (!hasOwnProperty(params, 'Quantity')) {
      throw new TypeError('parameter "Quantity" is required');
    }

    if (!hasOwnProperty(params, 'SystemDisk')) {
      throw new TypeError('parameter "SystemDisk" is required');
    }

    if (!hasOwnProperty(params, 'DataDisk')) {
      throw new TypeError('parameter "DataDisk" is required');
    }

    return this.request('CreateInstance', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} DiskId - DiskId. required.
   */
  deleteDisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    return this.request('DeleteDisk', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} EnsServiceId - EnsServiceId. required.
   */
  deleteEnsService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'EnsServiceId')) {
      throw new TypeError('parameter "EnsServiceId" is required');
    }

    return this.request('DeleteEnsService', params, options);
  }

  /**
   * @param {String} product - Product. optional.
   * @param {String} Version - Version. required.
   * @param {String} ImageId - ImageId. required.
   */
  deleteImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    return this.request('DeleteImage', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   */
  descibeEnsServiceConsumer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('DescibeEnsServiceConsumer', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   */
  describeAvailableResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('DescribeAvailableResource', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   */
  describeBandWithdChargeType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('DescribeBandWithdChargeType', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   */
  describeBuildMachineSpec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('DescribeBuildMachineSpec', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} DiskId - DiskId. optional.
   * @param {String} StartTime - StartTime. optional.
   * @param {String} EndTime - EndTime. optional.
   * @param {String} Period - Period. optional.
   */
  describeDiskMonitorData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('DescribeDiskMonitorData', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} EnsRegionId - EnsRegionId. optional.
   * @param {String} DiskId - DiskId. optional.
   * @param {String} DiskName - DiskName. optional.
   * @param {String} PageNumber - PageNumber. optional.
   * @param {String} PageSize - PageSize. optional.
   * @param {String} Status - Status. optional.
   * @param {String} Type - Type. optional.
   * @param {String} Category - Category. optional.
   * @param {String} DiskChargeType - DiskChargeType. optional.
   * @param {String} EnsRegionIds - EnsRegionIds. optional.
   * @param {String} DiskIds - DiskIds. optional.
   * @param {String} OrderByParams - OrderByParams. optional.
   * @param {String} DiskType - DiskType. optional.
   */
  describeDisks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('DescribeDisks', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} NetLevelCode - NetLevelCode. required.
   * @param {String} NetDistrictCode - NetDistrictCode. optional.
   */
  describeEnsNetDistrict(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'NetLevelCode')) {
      throw new TypeError('parameter "NetLevelCode" is required');
    }

    return this.request('DescribeEnsNetDistrict', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   */
  describeEnsNetLevel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('DescribeEnsNetLevel', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} NetLevelCode - NetLevelCode. required.
   * @param {String} NetDistrictCode - NetDistrictCode. optional.
   */
  describeEnsNetSaleDistrict(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'NetLevelCode')) {
      throw new TypeError('parameter "NetLevelCode" is required');
    }

    return this.request('DescribeEnsNetSaleDistrict', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} EnsRegionId - EnsRegionId. optional.
   */
  describeEnsRegions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('DescribeEnsRegions', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   */
  describeEnsResourceSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('DescribeEnsResourceSummary', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} Status - Status. optional.
   * @param {String} EnsServiceName - EnsServiceName. optional.
   * @param {String} EnsServiceId - EnsServiceId. optional.
   * @param {String} EnsServiceTag - EnsServiceTag. optional.
   * @param {String} PageNumber - PageNumber. optional.
   * @param {String} PageSize - PageSize. optional.
   */
  describeEnsService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('DescribeEnsService', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   */
  describeEnsServiceSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('DescribeEnsServiceSummary', params, options);
  }

  /**
   * @param {String} product - Product. optional.
   * @param {String} Version - Version. required.
   * @param {String} InstanceId - InstanceId. required.
   */
  describeImageByInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeImageByInstance', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} OsType - OsType. optional.
   */
  describeImageInfos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('DescribeImageInfos', params, options);
  }

  /**
   * @param {String} product - Product. optional.
   * @param {String} Version - Version. required.
   * @param {String} EnsRegionId - EnsRegionId. optional.
   * @param {String} ImageId - ImageId. optional.
   * @param {String} Status - Status. optional.
   * @param {String} ImageName - ImageName. optional.
   * @param {String} PageNumber - PageNumber. optional.
   * @param {String} PageSize - PageSize. optional.
   */
  describeImages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('DescribeImages', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} InstanceIds - InstanceIds. required.
   */
  describeInstanceAutoRenewAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'InstanceIds')) {
      throw new TypeError('parameter "InstanceIds" is required');
    }

    return this.request('DescribeInstanceAutoRenewAttribute', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} EnsRegionId - EnsRegionId. optional.
   * @param {String} InstanceId - InstanceId. optional.
   * @param {String} StartTime - StartTime. optional.
   * @param {String} EndTime - EndTime. optional.
   * @param {String} Period - Period. optional.
   */
  describeInstanceCountMonitor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('DescribeInstanceCountMonitor', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} InstanceId - InstanceId. optional.
   * @param {String} StartTime - StartTime. optional.
   * @param {String} EndTime - EndTime. optional.
   * @param {String} Period - Period. optional.
   */
  describeInstanceMonitorData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('DescribeInstanceMonitorData', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   */
  describeInstanceSpec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('DescribeInstanceSpec', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} EnsRegionId - EnsRegionId. optional.
   * @param {String} InstanceId - InstanceId. optional.
   * @param {String} EnsRegionIds - EnsRegionIds. optional.
   * @param {String} InstanceIds - InstanceIds. optional.
   * @param {String} InstanceName - InstanceName. optional.
   * @param {String} ImageId - ImageId. optional.
   * @param {String} PageNumber - PageNumber. optional.
   * @param {String} PageSize - PageSize. optional.
   * @param {String} Status - Status. optional.
   * @param {String} OrderByParams - OrderByParams. optional.
   * @param {String} EnsServiceId - EnsServiceId. optional.
   * @param {String} InstanceResourceType - InstanceResourceType. optional.
   * @param {String} SearchKey - SearchKey. optional.
   */
  describeInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('DescribeInstances', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} EnsRegionId - EnsRegionId. optional.
   * @param {String} DesignBandWidth - DesignBandWidth. required.
   */
  describeRedundancyBandWidthData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'DesignBandWidth')) {
      throw new TypeError('parameter "DesignBandWidth" is required');
    }

    return this.request('DescribeRedundancyBandWidthData', params, options);
  }

  /**
   * @param {String} product - Product. optional.
   * @param {String} Version - Version. required.
   * @param {Integer} PageNumber - PageNumber. optional.
   * @param {Integer} PageSize - PageSize. optional.
   */
  describeSelfImages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('DescribeSelfImages', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} EnsRegionId - EnsRegionId. optional.
   * @param {String} InstanceId - InstanceId. optional.
   * @param {String} StartTime - StartTime. optional.
   * @param {String} EndTime - EndTime. optional.
   * @param {String} Period - Period. optional.
   */
  describeUserBandWidthData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('DescribeUserBandWidthData', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} PageNumber - PageNumber. optional.
   * @param {String} PageSize - PageSize. optional.
   * @param {String} StartDate - StartDate. optional.
   * @param {String} EndDate - EndDate. optional.
   */
  describeUserFee(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('DescribeUserFee', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   */
  describeUserInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('DescribeUserInfo', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} DiskId - DiskId. required.
   * @param {String} InstanceId - InstanceId. required.
   */
  detachDisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DetachDisk', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   */
  ensAddConsumerApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('EnsAddConsumerApi', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} EnsRegionId - EnsRegionId. optional.
   * @param {String} DiskId - DiskId. optional.
   * @param {String} DiskName - DiskName. optional.
   * @param {String} PageNumber - PageNumber. optional.
   * @param {String} PageSize - PageSize. optional.
   * @param {String} Status - Status. optional.
   * @param {String} Type - Type. optional.
   * @param {String} Category - Category. optional.
   * @param {String} DiskChargeType - DiskChargeType. optional.
   * @param {String} EnsRegionIds - EnsRegionIds. optional.
   * @param {String} DiskIds - DiskIds. optional.
   * @param {String} OrderByParams - OrderByParams. optional.
   */
  exportDisks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('ExportDisks', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} EnsRegionId - EnsRegionId. optional.
   * @param {String} InstanceId - InstanceId. optional.
   * @param {String} EnsRegionIds - EnsRegionIds. optional.
   * @param {String} InstanceIds - InstanceIds. optional.
   * @param {String} InstanceName - InstanceName. optional.
   * @param {String} ImageId - ImageId. optional.
   * @param {String} PageNumber - PageNumber. optional.
   * @param {String} PageSize - PageSize. optional.
   * @param {String} Status - Status. optional.
   * @param {String} OrderByParams - OrderByParams. optional.
   */
  exportInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('ExportInstance', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} InstanceIds - InstanceIds. optional.
   * @param {String} PageNumber - PageNumber. optional.
   * @param {String} PageSize - PageSize. optional.
   */
  exportInstanceNetWorkInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('ExportInstanceNetWorkInfo', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} Nameid - Nameid. required.
   */
  getNodes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Nameid')) {
      throw new TypeError('parameter "Nameid" is required');
    }

    return this.request('GetNodes', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} DiskId - DiskId. required.
   * @param {String} DiskName - DiskName. optional.
   * @param {String} Description - Description. optional.
   * @param {String} DeleteWithInstance - DeleteWithInstance. optional.
   * @param {String} DeleteAutoSnapshot - DeleteAutoSnapshot. optional.
   * @param {String} EnableAutoSnapshot - EnableAutoSnapshot. optional.
   */
  modifyDiskAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    return this.request('ModifyDiskAttribute', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} EnsServiceId - EnsServiceId. required.
   * @param {String} SchedulingStrategy - SchedulingStrategy. required.
   * @param {String} BuyResourcesDetail - BuyResourcesDetail. required.
   */
  modifyEnsService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'EnsServiceId')) {
      throw new TypeError('parameter "EnsServiceId" is required');
    }

    if (!hasOwnProperty(params, 'SchedulingStrategy')) {
      throw new TypeError('parameter "SchedulingStrategy" is required');
    }

    if (!hasOwnProperty(params, 'BuyResourcesDetail')) {
      throw new TypeError('parameter "BuyResourcesDetail" is required');
    }

    return this.request('ModifyEnsService', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} EnsServiceName - EnsServiceName. required.
   * @param {String} EnsServiceId - EnsServiceId. required.
   */
  modifyEnsServiceAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'EnsServiceName')) {
      throw new TypeError('parameter "EnsServiceName" is required');
    }

    if (!hasOwnProperty(params, 'EnsServiceId')) {
      throw new TypeError('parameter "EnsServiceId" is required');
    }

    return this.request('ModifyEnsServiceAttribute', params, options);
  }

  /**
   * @param {String} product - Product. optional.
   * @param {String} Version - Version. required.
   * @param {String} ImageId - ImageId. required.
   * @param {String} ImageName - ImageName. required.
   */
  modifyImageAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    if (!hasOwnProperty(params, 'ImageName')) {
      throw new TypeError('parameter "ImageName" is required');
    }

    return this.request('ModifyImageAttribute', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} InstanceId - InstanceId. optional.
   * @param {String} Password - Password. optional.
   * @param {String} InstanceName - InstanceName. optional.
   */
  modifyInstanceAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('ModifyInstanceAttribute', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} InstanceIds - InstanceIds. required.
   * @param {String} AutoRenew - AutoRenew. required.
   * @param {String} Duration - Duration. optional.
   * @param {String} RenewalStatus - RenewalStatus. optional.
   */
  modifyInstanceAutoRenewAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'InstanceIds')) {
      throw new TypeError('parameter "InstanceIds" is required');
    }

    if (!hasOwnProperty(params, 'AutoRenew')) {
      throw new TypeError('parameter "AutoRenew" is required');
    }

    return this.request('ModifyInstanceAutoRenewAttribute', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} EnsServiceName - EnsServiceName. required.
   * @param {String} ImageId - ImageId. required.
   * @param {String} InstanceSpec - InstanceSpec. required.
   * @param {String} SystemDiskSize - SystemDiskSize. required.
   * @param {String} DataDiskSize - DataDiskSize. required.
   * @param {String} BandwidthType - BandwidthType. required.
   * @param {String} InstanceBandwithdLimit - InstanceBandwithdLimit. required.
   * @param {String} Password - Password. required.
   * @param {String} NetLevel - NetLevel. required.
   * @param {String} SchedulingStrategy - SchedulingStrategy. required.
   * @param {String} BuyResourcesDetail - BuyResourcesDetail. required.
   */
  preCreateEnsService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'EnsServiceName')) {
      throw new TypeError('parameter "EnsServiceName" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceSpec')) {
      throw new TypeError('parameter "InstanceSpec" is required');
    }

    if (!hasOwnProperty(params, 'SystemDiskSize')) {
      throw new TypeError('parameter "SystemDiskSize" is required');
    }

    if (!hasOwnProperty(params, 'DataDiskSize')) {
      throw new TypeError('parameter "DataDiskSize" is required');
    }

    if (!hasOwnProperty(params, 'BandwidthType')) {
      throw new TypeError('parameter "BandwidthType" is required');
    }

    if (!hasOwnProperty(params, 'InstanceBandwithdLimit')) {
      throw new TypeError('parameter "InstanceBandwithdLimit" is required');
    }

    if (!hasOwnProperty(params, 'Password')) {
      throw new TypeError('parameter "Password" is required');
    }

    if (!hasOwnProperty(params, 'NetLevel')) {
      throw new TypeError('parameter "NetLevel" is required');
    }

    if (!hasOwnProperty(params, 'SchedulingStrategy')) {
      throw new TypeError('parameter "SchedulingStrategy" is required');
    }

    if (!hasOwnProperty(params, 'BuyResourcesDetail')) {
      throw new TypeError('parameter "BuyResourcesDetail" is required');
    }

    return this.request('PreCreateEnsService', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} coordinate - coordinate. optional.
   * @param {String} instanceId - instanceId. optional.
   * @param {String} reason - reason. optional.
   * @param {String} actionCode - actionCode. optional.
   * @param {String} bussinessCode - bussinessCode. optional.
   * @param {String} signatureCode - signature. optional.
   * @param {String} punishResult - punishResult. optional.
   */
  punish(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('Punish', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} bussinessCode - bussinessCode. optional.
   * @param {String} domain - domain. optional.
   * @param {String} riskyUrl - riskyUrl. optional.
   * @param {String} extras - extras. optional.
   * @param {String} ip - ip. optional.
   */
  punishBizQuery(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('PunishBizQuery', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} DiskId - DiskId. required.
   * @param {String} ImageId - ImageId. required.
   */
  reInitDisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    return this.request('ReInitDisk', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} InstanceId - InstanceId. required.
   * @param {String} ForceStop - ForceStop. optional.
   */
  rebootInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('RebootInstance', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} data - Data. required.
   */
  refund(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('Refund', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} InstanceType - InstanceType. required.
   * @param {String} InstanceId - InstanceId. required.
   */
  relaseBuildMachine(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('RelaseBuildMachine', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} coordinate - coordinate. optional.
   * @param {String} instanceId - instanceId. optional.
   * @param {String} reason - reason. optional.
   * @param {String} actionCode - actionCode. optional.
   * @param {String} bussinessCode - bussinessCode. optional.
   * @param {String} signatureCode - signature. optional.
   * @param {String} punishResult - punishResult. optional.
   */
  removePunish(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('RemovePunish', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} Vdata - Vdata. required.
   */
  resumeNode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Vdata')) {
      throw new TypeError('parameter "Vdata" is required');
    }

    return this.request('ResumeNode', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} EnsRegionId - EnsRegionId. optional.
   * @param {String} DiskId - DiskId. optional.
   * @param {String} DiskName - DiskName. optional.
   * @param {String} PageNumber - PageNumber. optional.
   * @param {String} PageSize - PageSize. optional.
   * @param {String} Status - Status. optional.
   * @param {String} Type - Type. optional.
   * @param {String} Category - Category. optional.
   * @param {String} DiskChargeType - DiskChargeType. optional.
   * @param {String} EnsRegionIds - EnsRegionIds. optional.
   * @param {String} DiskIds - DiskIds. optional.
   * @param {String} OrderByParams - OrderByParams. optional.
   * @param {String} DiskType - DiskType. optional.
   */
  showCreateInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('ShowCreateInstance', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} EnsServiceId - EnsServiceId. required.
   */
  startEnsService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'EnsServiceId')) {
      throw new TypeError('parameter "EnsServiceId" is required');
    }

    return this.request('StartEnsService', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} InstanceId - InstanceId. required.
   */
  startInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('StartInstance', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} EnsServiceId - EnsServiceId. required.
   */
  stopEnsService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'EnsServiceId')) {
      throw new TypeError('parameter "EnsServiceId" is required');
    }

    return this.request('StopEnsService', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} InstanceId - InstanceId. required.
   * @param {String} ForceStop - ForceStop. optional.
   */
  stopInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('StopInstance', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} Vdata - Vdata. required.
   */
  suspendNode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Vdata')) {
      throw new TypeError('parameter "Vdata" is required');
    }

    return this.request('SuspendNode', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} Vdata - Vdata. required.
   */
  updateDomainBandwidth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Vdata')) {
      throw new TypeError('parameter "Vdata" is required');
    }

    return this.request('UpdateDomainBandwidth', params, options);
  }

  /**
   * @param {String} Version - Version. required.
   * @param {String} EnsServiceId - EnsServiceId. required.
   * @param {String} ImageId - ImageId. required.
   * @param {String} InstanceId - InstanceId. optional.
   * @param {String} NetDistrictCode - NetDistrictCode. optional.
   */
  upgradeInstanceImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'EnsServiceId')) {
      throw new TypeError('parameter "EnsServiceId" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    return this.request('UpgradeInstanceImage', params, options);
  }

}

module.exports = Client;

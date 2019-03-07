
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-05-10';
    super(config);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} CdnType - webSiteType. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} Sources - sources. optional.
   * @param {String} CheckUrl - checkUrl. optional.
   * @param {String} Scope - scope. optional.
   * @param {String} TopLevelDomain - topLevelDomain. optional.
   */
  addCdnDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CdnType')) {
      throw new TypeError('parameter "CdnType" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('AddCdnDomain', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} TriggerARN - trigger. required.
   * @param {String} EventMetaName - event_meta_name. required.
   * @param {String} EventMetaVersion - event_meta_version. required.
   * @param {String} SourceARN - source_arn. required.
   * @param {String} RoleARN - role. required.
   * @param {String} Notes - notes. required.
   */
  addFCTrigger(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TriggerARN')) {
      throw new TypeError('parameter "TriggerARN" is required');
    }

    if (!hasOwnProperty(params, 'EventMetaName')) {
      throw new TypeError('parameter "EventMetaName" is required');
    }

    if (!hasOwnProperty(params, 'EventMetaVersion')) {
      throw new TypeError('parameter "EventMetaVersion" is required');
    }

    if (!hasOwnProperty(params, 'SourceARN')) {
      throw new TypeError('parameter "SourceARN" is required');
    }

    if (!hasOwnProperty(params, 'RoleARN')) {
      throw new TypeError('parameter "RoleARN" is required');
    }

    if (!hasOwnProperty(params, 'Notes')) {
      throw new TypeError('parameter "Notes" is required');
    }

    return this.request('AddFCTrigger', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} CdnType - webSiteType. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} Sources - sources. required.
   * @param {String} CheckUrl - checkUrl. optional.
   * @param {String} Scope - scope. optional.
   * @param {String} TopLevelDomain - topLevelDomain. optional.
   */
  batchAddCdnDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CdnType')) {
      throw new TypeError('parameter "CdnType" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Sources')) {
      throw new TypeError('parameter "Sources" is required');
    }

    return this.request('BatchAddCdnDomain', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainNames - domainNames. required.
   * @param {String} FunctionNames - functionNames. required.
   */
  batchDeleteCdnDomainConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainNames')) {
      throw new TypeError('parameter "DomainNames" is required');
    }

    if (!hasOwnProperty(params, 'FunctionNames')) {
      throw new TypeError('parameter "FunctionNames" is required');
    }

    return this.request('BatchDeleteCdnDomainConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Integer} PageNumber - pageIndex. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 1000.
   */
  batchDescribeDomainBpsData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('BatchDescribeDomainBpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainNames - domainNames. required.
   * @param {String} Functions - functions. required.
   */
  batchSetCdnDomainConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainNames')) {
      throw new TypeError('parameter "DomainNames" is required');
    }

    if (!hasOwnProperty(params, 'Functions')) {
      throw new TypeError('parameter "Functions" is required');
    }

    return this.request('BatchSetCdnDomainConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} CertName - certName. optional.
   * @param {String} CertType - certType. optional.
   * @param {String} SSLProtocol - sslProtocol. required.
   * @param {String} SSLPub - sslPub. optional.
   * @param {String} SSLPri - sslPri. optional.
   * @param {String} Region - region. optional.
   * @param {String} ForceSet - forceSet. optional.
   */
  batchSetCdnDomainServerCertificate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'SSLProtocol')) {
      throw new TypeError('parameter "SSLProtocol" is required');
    }

    return this.request('BatchSetCdnDomainServerCertificate', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainNames - domainNames. required.
   */
  batchStartCdnDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainNames')) {
      throw new TypeError('parameter "DomainNames" is required');
    }

    return this.request('BatchStartCdnDomain', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainNames - domainNames. required.
   */
  batchStopCdnDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainNames')) {
      throw new TypeError('parameter "DomainNames" is required');
    }

    return this.request('BatchStopCdnDomain', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} Sources - sources. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} TopLevelDomain - topLevelDomain. optional.
   */
  batchUpdateCdnDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('BatchUpdateCdnDomain', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} ObjectPath - objectPath. required.
   * @param {String} Type - type. required.
   * @param {Integer} Maxage - maxage. optional.
   */
  blockObjectCaches(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ObjectPath')) {
      throw new TypeError('parameter "ObjectPath" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('BlockObjectCaches', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} Project - project. required.
   * @param {String} Logstore - logstore. required.
   * @param {String} Region - region. required.
   * @param {String} Domain - domain. required.
   */
  createRealTimeLogDelivery(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'Logstore')) {
      throw new TypeError('parameter "Logstore" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CreateRealTimeLogDelivery', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Group - resourceGroupId. optional.
   * @param {String} DomainNames - domainName. optional.
   * @param {String} Type - dimension. required.
   * @param {String} TaskName - name. optional.
   */
  createUsageDetailDataExportTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('CreateUsageDetailDataExportTask', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} TaskName - name. optional.
   * @param {String} Language - language. optional.
   */
  createUserUsageDataExportTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('CreateUserUsageDataExportTask', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} ConfigId - configId. required.
   */
  deleteCacheExpiredConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'ConfigId')) {
      throw new TypeError('parameter "ConfigId" is required');
    }

    return this.request('DeleteCacheExpiredConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  deleteCdnDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DeleteCdnDomain', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} TriggerARN - trigger. required.
   */
  deleteFCTrigger(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TriggerARN')) {
      throw new TypeError('parameter "TriggerARN" is required');
    }

    return this.request('DeleteFCTrigger', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} ConfigId - configId. required.
   */
  deleteHttpHeaderConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'ConfigId')) {
      throw new TypeError('parameter "ConfigId" is required');
    }

    return this.request('DeleteHttpHeaderConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} Domain - domain. required.
   * @param {String} Project - project. required.
   * @param {String} Logstore - logstore. required.
   * @param {String} Region - region. required.
   */
  deleteRealtimeLogDelivery(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'Logstore')) {
      throw new TypeError('parameter "Logstore" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    return this.request('DeleteRealtimeLogDelivery', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} ConfigId - configId. required.
   */
  deleteSpecificConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'ConfigId')) {
      throw new TypeError('parameter "ConfigId" is required');
    }

    return this.request('DeleteSpecificConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} TaskId - taskId. required.
   */
  deleteUsageDetailDataExportTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('DeleteUsageDetailDataExportTask', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} TaskId - taskId. required.
   */
  deleteUserUsageDataExportTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('DeleteUserUsageDataExportTask', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} CertName - certName. required.
   */
  describeCdnCertificateDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CertName')) {
      throw new TypeError('parameter "CertName" is required');
    }

    return this.request('DescribeCdnCertificateDetail', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. optional.
   */
  describeCdnCertificateList(params = {}, options = {}) {
    return this.request('DescribeCdnCertificateList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} DataType - field. required.
   * @param {String} Area - area. required.
   * @param {String} Protocol - protocol. optional.
   * @param {String} TrafficType - type. optional.
   */
  describeCdnDomainBillingData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    if (!hasOwnProperty(params, 'Area')) {
      throw new TypeError('parameter "Area" is required');
    }

    return this.request('DescribeCdnDomainBillingData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} FunctionNames - functionNames. optional.
   */
  describeCdnDomainConfigs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeCdnDomainConfigs', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   */
  describeCdnDomainDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeCdnDomainDetail', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {Long} PageSize - pageSize. optional. default: 300.
   * @param {Long} PageNumber - pageIndex. optional. default: 1.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeCdnDomainLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeCdnDomainLogs', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   */
  describeCdnRegionAndIsp(params = {}, options = {}) {
    return this.request('DescribeCdnRegionAndIsp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   */
  describeCdnService(params = {}, options = {}) {
    return this.request('DescribeCdnService', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} SecurityToken - securityToken. optional.
   */
  describeCdnTypes(params = {}, options = {}) {
    return this.request('DescribeCdnTypes', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeCdnUserBillHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeCdnUserBillHistory', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} Dimension - dimension. required.
   * @param {String} Area - area. optional.
   */
  describeCdnUserBillPrediction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Dimension')) {
      throw new TypeError('parameter "Dimension" is required');
    }

    return this.request('DescribeCdnUserBillPrediction', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeCdnUserBillType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeCdnUserBillType', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   */
  describeCdnUserQuota(params = {}, options = {}) {
    return this.request('DescribeCdnUserQuota', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   */
  describeCdnUserResourcePackage(params = {}, options = {}) {
    return this.request('DescribeCdnUserResourcePackage', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   */
  describeCurrentCharge95Info(params = {}, options = {}) {
    return this.request('DescribeCurrentCharge95Info', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ConfigId - configId. required.
   */
  describeCustomLogConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConfigId')) {
      throw new TypeError('parameter "ConfigId" is required');
    }

    return this.request('DescribeCustomLogConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DiamondDataId - diamondDataId. required.
   */
  describeDiamondData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiamondDataId')) {
      throw new TypeError('parameter "DiamondDataId" is required');
    }

    return this.request('DescribeDiamondData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} TimeMerge - timeMerge. optional.
   * @param {String} DomainType - domainType. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeDomainAverageResponseTime(params = {}, options = {}) {
    return this.request('DescribeDomainAverageResponseTime', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeDomainBpsData(params = {}, options = {}) {
    return this.request('DescribeDomainBpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} LocationNames - locationNames. required.
   * @param {String} IspNames - ispNames. required.
   * @param {String} TimePoint - timePoint. required.
   */
  describeDomainBpsDataByTimeStamp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'LocationNames')) {
      throw new TypeError('parameter "LocationNames" is required');
    }

    if (!hasOwnProperty(params, 'IspNames')) {
      throw new TypeError('parameter "IspNames" is required');
    }

    if (!hasOwnProperty(params, 'TimePoint')) {
      throw new TypeError('parameter "TimePoint" is required');
    }

    return this.request('DescribeDomainBpsDataByTimeStamp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domain. required.
   */
  describeDomainCertificateInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainCertificateInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   */
  describeDomainCname(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainCname', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domain. required.
   */
  describeDomainCustomLogConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainCustomLogConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeDomainFileSizeProportionData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainFileSizeProportionData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   */
  describeDomainHitRateData(params = {}, options = {}) {
    return this.request('DescribeDomainHitRateData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   */
  describeDomainHttpCodeData(params = {}, options = {}) {
    return this.request('DescribeDomainHttpCodeData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainNames - domainName. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Interval - interval. optional.
   */
  describeDomainHttpsData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeDomainHttpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeDomainISPData(params = {}, options = {}) {
    return this.request('DescribeDomainISPData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeDomainIspLocationDetailData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainIspLocationDetailData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domain. required.
   */
  describeDomainLogConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainLogConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeDomainMax95BpsData(params = {}, options = {}) {
    return this.request('DescribeDomainMax95BpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {String} Path - path. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} DomainName - domain. required.
   */
  describeDomainPathData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainPathData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. optional.
   * @param {String} NeedSum - needSum. optional.
   * @param {String} Pno - pno. optional.
   */
  describeDomainPnoData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    return this.request('DescribeDomainPnoData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeDomainPvData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainPvData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Ip - ip. required.
   * @param {String} DomainName - domain. required.
   */
  describeDomainQoSRt(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainQoSRt', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeDomainQpsData(params = {}, options = {}) {
    return this.request('DescribeDomainQpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeDomainRealTimeBpsData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainRealTimeBpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeDomainRealTimeByteHitRateData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainRealTimeByteHitRateData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeDomainRealTimeHttpCodeData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainRealTimeHttpCodeData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} DomainName - domain. required.
   */
  describeDomainRealTimeMetric(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainRealTimeMetric', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeDomainRealTimeQpsData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainRealTimeQpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeDomainRealTimeReqHitRateData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainRealTimeReqHitRateData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeDomainRealTimeSrcBpsData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainRealTimeSrcBpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeDomainRealTimeSrcHttpCodeData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainRealTimeSrcHttpCodeData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeDomainRealTimeSrcTrafficData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainRealTimeSrcTrafficData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeDomainRealTimeTrafficData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainRealTimeTrafficData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} Domain - domain. required.
   */
  describeDomainRealtimeLogDelivery(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('DescribeDomainRealtimeLogDelivery', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeDomainRegionData(params = {}, options = {}) {
    return this.request('DescribeDomainRegionData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   */
  describeDomainReqHitRateData(params = {}, options = {}) {
    return this.request('DescribeDomainReqHitRateData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} DomainName - domain. required.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {String} StartTime - startTime. optional.
   */
  describeDomainSlowRatio(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainSlowRatio', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   */
  describeDomainSrcBpsData(params = {}, options = {}) {
    return this.request('DescribeDomainSrcBpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   */
  describeDomainSrcHttpCodeData(params = {}, options = {}) {
    return this.request('DescribeDomainSrcHttpCodeData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   */
  describeDomainSrcTrafficData(params = {}, options = {}) {
    return this.request('DescribeDomainSrcTrafficData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} SortBy - sortBy. optional.
   * @param {String} Percent - percent. optional. default: false.
   */
  describeDomainTopReferVisit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainTopReferVisit', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} SortBy - sortBy. optional.
   * @param {String} Percent - percent. optional. default: false.
   */
  describeDomainTopUrlVisit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainTopUrlVisit', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeDomainTrafficData(params = {}, options = {}) {
    return this.request('DescribeDomainTrafficData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DataProtocol - protocol. optional. default: all.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Area - area. optional. default: CN.
   * @param {String} Field - field. required.
   * @param {String} Interval - interval. optional.
   */
  describeDomainUsageData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Field')) {
      throw new TypeError('parameter "Field" is required');
    }

    return this.request('DescribeDomainUsageData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeDomainUvData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainUvData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ConfigId - configId. required.
   */
  describeDomainsByCustomLogConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConfigId')) {
      throw new TypeError('parameter "ConfigId" is required');
    }

    return this.request('DescribeDomainsByCustomLogConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} Sources - sources. required.
   */
  describeDomainsBySource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sources')) {
      throw new TypeError('parameter "Sources" is required');
    }

    return this.request('DescribeDomainsBySource', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeDomainsUsageByDay(params = {}, options = {}) {
    return this.request('DescribeDomainsUsageByDay', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ExtensiveDomain - domainName. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageNumber - pageIndex. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  describeExtensiveDomainData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ExtensiveDomain')) {
      throw new TypeError('parameter "ExtensiveDomain" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeExtensiveDomainData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} TriggerARN - trigger. required.
   */
  describeFCTrigger(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TriggerARN')) {
      throw new TypeError('parameter "TriggerARN" is required');
    }

    return this.request('DescribeFCTrigger', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} ChargeItem - chargeItem. required.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeHistoryCharge95Info(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ChargeItem')) {
      throw new TypeError('parameter "ChargeItem" is required');
    }

    return this.request('DescribeHistoryCharge95Info', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} IP - ip. required.
   */
  describeIpInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IP')) {
      throw new TypeError('parameter "IP" is required');
    }

    return this.request('DescribeIpInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   */
  describeL2VipsByDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeL2VipsByDomain', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   */
  describeMacAppInfo(params = {}, options = {}) {
    return this.request('DescribeMacAppInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domains. optional.
   * @param {String} Region - region. optional.
   * @param {String} CarrierOperator - carrieroperator. optional.
   * @param {String} Interval - interval. required.
   * @param {String} StartTime - start. required.
   * @param {String} EndTime - end. required.
   * @param {String} Protocol - protocol. optional.
   */
  describeMacStatistic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeMacStatistic', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainNames - domainNames. required.
   * @param {String} LocationNames - locationNames. optional.
   * @param {String} IspNames - ispNames. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeRangeDataByLocateAndIspService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainNames')) {
      throw new TypeError('parameter "DomainNames" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeRangeDataByLocateAndIspService', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} Project - project. optional.
   * @param {String} LogStore - logStore. optional.
   */
  describeRealtimeDeliveryAcc(params = {}, options = {}) {
    return this.request('DescribeRealtimeDeliveryAcc', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   */
  describeRealtimeLogAuthorized(params = {}, options = {}) {
    return this.request('DescribeRealtimeLogAuthorized', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   */
  describeRefreshQuota(params = {}, options = {}) {
    return this.request('DescribeRefreshQuota', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} TaskId - taskId. optional.
   * @param {String} ObjectPath - content. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {String} ObjectType - taskType. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} Status - taskStatusStr. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  describeRefreshTasks(params = {}, options = {}) {
    return this.request('DescribeRefreshTasks', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-hangzhou.
   * @param {RepeatList} ResourceId - resourceId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {RepeatList} Tag - tag. optional.
   * @param {String} Scope - scope. optional.
   */
  describeTagResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    return this.request('DescribeTagResources', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Product - product. optional. default: cdn.
   * @param {Long} Limit - limit. optional. default: 20.
   */
  describeTopDomainsByFlow(params = {}, options = {}) {
    return this.request('DescribeTopDomainsByFlow', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   */
  describeUserCdnStatus(params = {}, options = {}) {
    return this.request('DescribeUserCdnStatus', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} Config - config. required.
   */
  describeUserConfigs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Config')) {
      throw new TypeError('parameter "Config" is required');
    }

    return this.request('DescribeUserConfigs', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   */
  describeUserCustomLogConfig(params = {}, options = {}) {
    return this.request('DescribeUserCustomLogConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {String} DomainName - domainName. optional.
   * @param {String} DomainStatus - domainStatus. optional.
   * @param {String} DomainSearchType - domainSearchType. optional.
   * @param {String} CdnType - webSiteType. optional.
   * @param {Boolean} CheckDomainShow - checkDomainShow. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} FuncId - funcId. optional.
   * @param {String} FuncFilter - funcFilter. optional.
   * @param {RepeatList} Tag - tag. optional.
   */
  describeUserDomains(params = {}, options = {}) {
    return this.request('DescribeUserDomains', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   */
  describeUserTags(params = {}, options = {}) {
    return this.request('DescribeUserTags', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} PageSize - pageSize. optional.
   * @param {String} PageNumber - pageIndex. optional.
   */
  describeUserUsageDataExportTask(params = {}, options = {}) {
    return this.request('DescribeUserUsageDataExportTask', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} PageSize - pageSize. optional.
   * @param {String} PageNumber - pageIndex. optional.
   */
  describeUserUsageDetailDataExportTask(params = {}, options = {}) {
    return this.request('DescribeUserUsageDetailDataExportTask', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} Available - available. optional.
   */
  describeUserVipsByDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeUserVipsByDomain', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} Domain - domain. required.
   */
  disableRealtimeLogDelivery(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('DisableRealtimeLogDelivery', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} Domain - domain. required.
   */
  enableRealtimeLogDelivery(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('EnableRealtimeLogDelivery', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DiamondDataId - diamondDataId. required.
   */
  isDiamondUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiamondDataId')) {
      throw new TypeError('parameter "DiamondDataId" is required');
    }

    return this.request('IsDiamondUser', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ConfigId - configId. required.
   */
  listDomainsByLogConfigId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConfigId')) {
      throw new TypeError('parameter "ConfigId" is required');
    }

    return this.request('ListDomainsByLogConfigId', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} EventMetaName - event_meta_name. required.
   * @param {String} EventMetaVersion - event_meta_version. required.
   */
  listFCTrigger(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventMetaName')) {
      throw new TypeError('parameter "EventMetaName" is required');
    }

    if (!hasOwnProperty(params, 'EventMetaVersion')) {
      throw new TypeError('parameter "EventMetaVersion" is required');
    }

    return this.request('ListFCTrigger', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   */
  listRealtimeLogDelivery(params = {}, options = {}) {
    return this.request('ListRealtimeLogDelivery', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} Project - project. required.
   * @param {String} Logstore - logstore. required.
   * @param {String} Region - region. required.
   */
  listRealtimeLogDeliveryDomains(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'Logstore')) {
      throw new TypeError('parameter "Logstore" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    return this.request('ListRealtimeLogDeliveryDomains', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   */
  listRealtimeLogDeliveryInfos(params = {}, options = {}) {
    return this.request('ListRealtimeLogDeliveryInfos', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - RegionId. optional. default: cn-hangzhou.
   * @param {String} TagOwnerUid - TagOwnerUid. optional.
   * @param {String} TagOwnerBid - TagOwnerBid. optional.
   * @param {String} ResourceType - ResourceType. required.
   * @param {RepeatList} ResourceId - ResourceId. required.
   * @param {RepeatList} Tag - Tag. required.
   * @param {String} NextToken - NextToken. optional.
   */
  listTagResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'Tag')) {
      throw new TypeError('parameter "Tag" is required');
    }

    return this.request('ListTagResources', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   */
  listUserCustomLogConfig(params = {}, options = {}) {
    return this.request('ListUserCustomLogConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} Sources - sources. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} TopLevelDomain - topLevelDomain. optional.
   */
  modifyCdnDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('ModifyCdnDomain', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} InternetChargeType - category. required.
   */
  modifyCdnService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InternetChargeType')) {
      throw new TypeError('parameter "InternetChargeType" is required');
    }

    return this.request('ModifyCdnService', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domain. required.
   * @param {String} ConfigId - id. required.
   */
  modifyDomainCustomLogConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'ConfigId')) {
      throw new TypeError('parameter "ConfigId" is required');
    }

    return this.request('ModifyDomainCustomLogConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} ConfigID - configId. required.
   * @param {String} CacheContent - cacheContent. required.
   * @param {String} TTL - ttl. required.
   * @param {String} Weight - weight. optional.
   */
  modifyFileCacheExpiredConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'ConfigID')) {
      throw new TypeError('parameter "ConfigID" is required');
    }

    if (!hasOwnProperty(params, 'CacheContent')) {
      throw new TypeError('parameter "CacheContent" is required');
    }

    if (!hasOwnProperty(params, 'TTL')) {
      throw new TypeError('parameter "TTL" is required');
    }

    return this.request('ModifyFileCacheExpiredConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} HeaderKey - headerKey. required.
   * @param {String} HeaderValue - headerValue. required.
   * @param {String} ConfigID - configId. required.
   */
  modifyHttpHeaderConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'HeaderKey')) {
      throw new TypeError('parameter "HeaderKey" is required');
    }

    if (!hasOwnProperty(params, 'HeaderValue')) {
      throw new TypeError('parameter "HeaderValue" is required');
    }

    if (!hasOwnProperty(params, 'ConfigID')) {
      throw new TypeError('parameter "ConfigID" is required');
    }

    return this.request('ModifyHttpHeaderConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} ConfigID - configId. required.
   * @param {String} CacheContent - cacheContent. required.
   * @param {String} TTL - ttl. required.
   * @param {String} Weight - weight. optional.
   */
  modifyPathCacheExpiredConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'ConfigID')) {
      throw new TypeError('parameter "ConfigID" is required');
    }

    if (!hasOwnProperty(params, 'CacheContent')) {
      throw new TypeError('parameter "CacheContent" is required');
    }

    if (!hasOwnProperty(params, 'TTL')) {
      throw new TypeError('parameter "TTL" is required');
    }

    return this.request('ModifyPathCacheExpiredConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} Project - project. required.
   * @param {String} Logstore - logstore. required.
   * @param {String} Region - region. required.
   * @param {String} Domain - domain. required.
   */
  modifyRealtimeLogDelivery(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'Logstore')) {
      throw new TypeError('parameter "Logstore" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('ModifyRealtimeLogDelivery', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ConfigId - configId. required.
   * @param {String} Tag - tag. required.
   */
  modifyUserCustomLogConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConfigId')) {
      throw new TypeError('parameter "ConfigId" is required');
    }

    if (!hasOwnProperty(params, 'Tag')) {
      throw new TypeError('parameter "Tag" is required');
    }

    return this.request('ModifyUserCustomLogConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} InternetChargeType - category. required.
   */
  openCdnService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InternetChargeType')) {
      throw new TypeError('parameter "InternetChargeType" is required');
    }

    return this.request('OpenCdnService', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} ObjectPath - objectPath. required.
   * @param {String} Area - area. optional.
   */
  preloadObjectCaches(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'ObjectPath')) {
      throw new TypeError('parameter "ObjectPath" is required');
    }

    return this.request('PreloadObjectCaches', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} ObjectPath - objectPath. required.
   * @param {String} ObjectType - objectType. optional. default: File.
   */
  purgeObjectCaches(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'ObjectPath')) {
      throw new TypeError('parameter "ObjectPath" is required');
    }

    return this.request('PurgeObjectCaches', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} ObjectPath - objectPath. required.
   * @param {String} Area - area. optional.
   */
  pushObjectCache(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ObjectPath')) {
      throw new TypeError('parameter "ObjectPath" is required');
    }

    return this.request('PushObjectCache', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} ObjectPath - objectPath. required.
   * @param {String} ObjectType - objectType. optional. default: File.
   */
  refreshObjectCaches(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ObjectPath')) {
      throw new TypeError('parameter "ObjectPath" is required');
    }

    return this.request('RefreshObjectCaches', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AuthType - auth_type. required.
   * @param {String} AliAuthDual - ali_auth_dual. optional.
   * @param {Long} ConfigId - configId. optional.
   */
  setAliAuthConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AuthType')) {
      throw new TypeError('parameter "AuthType" is required');
    }

    return this.request('SetAliAuthConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AliBusinessType - ali_business_type. required.
   * @param {String} AliBusinessTable - ali_business_table. optional.
   * @param {Long} ConfigId - configId. optional.
   */
  setAliBusinessConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AliBusinessType')) {
      throw new TypeError('parameter "AliBusinessType" is required');
    }

    return this.request('SetAliBusinessConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AllowIps - allowIps. optional.
   * @param {String} BlockIps - blockIps. optional.
   */
  setCcConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('SetCcConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} Enable - enable. required.
   */
  setDomainGreenManagerConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Enable')) {
      throw new TypeError('parameter "Enable" is required');
    }

    return this.request('SetDomainGreenManagerConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} CertName - certName. optional.
   * @param {String} CertType - certType. optional.
   * @param {String} ServerCertificateStatus - sslProtocol. required.
   * @param {String} ServerCertificate - sslPub. optional.
   * @param {String} PrivateKey - sslPri. optional.
   * @param {String} Region - region. optional.
   * @param {String} ForceSet - forceSet. optional.
   */
  setDomainServerCertificate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'ServerCertificateStatus')) {
      throw new TypeError('parameter "ServerCertificateStatus" is required');
    }

    return this.request('SetDomainServerCertificate', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} PageType - pageType. required.
   * @param {String} CustomPageUrl - customPageUrl. optional.
   */
  setErrorPageConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'PageType')) {
      throw new TypeError('parameter "PageType" is required');
    }

    return this.request('SetErrorPageConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {Long} ConfigId - configId. optional.
   * @param {String} CacheContent - file_type. required.
   * @param {String} TTL - ttl. required.
   */
  setFileCacheExpiredConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'CacheContent')) {
      throw new TypeError('parameter "CacheContent" is required');
    }

    if (!hasOwnProperty(params, 'TTL')) {
      throw new TypeError('parameter "TTL" is required');
    }

    return this.request('SetFileCacheExpiredConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} FileType - file_type. required.
   * @param {String} CodeString - code_string. required.
   */
  setFileTypeForceTtlCodeConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'FileType')) {
      throw new TypeError('parameter "FileType" is required');
    }

    if (!hasOwnProperty(params, 'CodeString')) {
      throw new TypeError('parameter "CodeString" is required');
    }

    return this.request('SetFileTypeForceTtlCodeConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} RedirectType - redirectType. required.
   */
  setForceRedirectConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'RedirectType')) {
      throw new TypeError('parameter "RedirectType" is required');
    }

    return this.request('SetForceRedirectConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {Long} ConfigId - configId. optional.
   * @param {String} Enable - enable. required.
   * @param {String} SchemeOrigin - scheme_origin. required.
   * @param {String} SchemeOriginPort - scheme_origin_port. required.
   */
  setForwardSchemeConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Enable')) {
      throw new TypeError('parameter "Enable" is required');
    }

    if (!hasOwnProperty(params, 'SchemeOrigin')) {
      throw new TypeError('parameter "SchemeOrigin" is required');
    }

    if (!hasOwnProperty(params, 'SchemeOriginPort')) {
      throw new TypeError('parameter "SchemeOriginPort" is required');
    }

    return this.request('SetForwardSchemeConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} ErrorCode - error_code. required.
   * @param {String} PageUrl - rewrite_page. required.
   * @param {Long} ConfigId - configId. optional.
   */
  setHttpErrorPageConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'ErrorCode')) {
      throw new TypeError('parameter "ErrorCode" is required');
    }

    if (!hasOwnProperty(params, 'PageUrl')) {
      throw new TypeError('parameter "PageUrl" is required');
    }

    return this.request('SetHttpErrorPageConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} HeaderKey - headerKey. required.
   * @param {String} HeaderValue - headerValue. required.
   * @param {Long} ConfigId - configId. optional.
   */
  setHttpHeaderConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'HeaderKey')) {
      throw new TypeError('parameter "HeaderKey" is required');
    }

    if (!hasOwnProperty(params, 'HeaderValue')) {
      throw new TypeError('parameter "HeaderValue" is required');
    }

    return this.request('SetHttpHeaderConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {Long} ConfigId - configId. optional.
   * @param {String} Http2 - http2. required.
   */
  setHttpsOptionConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Http2')) {
      throw new TypeError('parameter "Http2" is required');
    }

    return this.request('SetHttpsOptionConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {Long} ConfigId - configId. optional.
   * @param {String} Enable - disable. required.
   * @param {String} HashKeyArgs - hashkey_args. optional.
   * @param {String} KeepOssArgs - keep_oss_args. optional.
   */
  setIgnoreQueryStringConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Enable')) {
      throw new TypeError('parameter "Enable" is required');
    }

    return this.request('SetIgnoreQueryStringConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AllowIps - allowIps. required.
   */
  setIpAllowListConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AllowIps')) {
      throw new TypeError('parameter "AllowIps" is required');
    }

    return this.request('SetIpAllowListConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} BlockIps - ip_list. required.
   * @param {Long} ConfigId - configId. optional.
   */
  setIpBlackListConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'BlockIps')) {
      throw new TypeError('parameter "BlockIps" is required');
    }

    return this.request('SetIpBlackListConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} PrivateOssAuth - private_oss_auth. required.
   * @param {Long} ConfigId - configId. optional.
   */
  setL2OssKeyConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'PrivateOssAuth')) {
      throw new TypeError('parameter "PrivateOssAuth" is required');
    }

    return this.request('SetL2OssKeyConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} Enabled - enabled. optional.
   * @param {String} ProcessResult - process_result. optional.
   * @param {String} AppList - applist. optional.
   */
  setMacServiceConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('SetMacServiceConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {Long} ConfigId - configId. optional.
   * @param {String} Enable - enable. required.
   */
  setOptimizeConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Enable')) {
      throw new TypeError('parameter "Enable" is required');
    }

    return this.request('SetOptimizeConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} Enable - enable. required.
   * @param {String} Bucket - bucket. required.
   * @param {String} Prefix - prefix. required.
   */
  setOssLogConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Enable')) {
      throw new TypeError('parameter "Enable" is required');
    }

    if (!hasOwnProperty(params, 'Bucket')) {
      throw new TypeError('parameter "Bucket" is required');
    }

    if (!hasOwnProperty(params, 'Prefix')) {
      throw new TypeError('parameter "Prefix" is required');
    }

    return this.request('SetOssLogConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {Long} ConfigId - configId. optional.
   * @param {String} Enable - enable. required.
   */
  setPageCompressConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Enable')) {
      throw new TypeError('parameter "Enable" is required');
    }

    return this.request('SetPageCompressConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} CacheContent - cacheContent. required.
   * @param {String} TTL - ttl. required.
   * @param {String} Weight - weight. optional.
   */
  setPathCacheExpiredConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'CacheContent')) {
      throw new TypeError('parameter "CacheContent" is required');
    }

    if (!hasOwnProperty(params, 'TTL')) {
      throw new TypeError('parameter "TTL" is required');
    }

    return this.request('SetPathCacheExpiredConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} Path - path. required.
   * @param {String} CodeString - code_string. required.
   */
  setPathForceTtlCodeConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Path')) {
      throw new TypeError('parameter "Path" is required');
    }

    if (!hasOwnProperty(params, 'CodeString')) {
      throw new TypeError('parameter "CodeString" is required');
    }

    return this.request('SetPathForceTtlCodeConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} Enable - enable. required.
   * @param {Long} ConfigId - configId. optional.
   */
  setRangeConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Enable')) {
      throw new TypeError('parameter "Enable" is required');
    }

    return this.request('SetRangeConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} ReferType - referType. required.
   * @param {String} ReferList - referList. optional.
   * @param {String} AllowEmpty - allowEmpty. optional.
   * @param {String} DisableAst - disableAst. optional.
   */
  setRefererConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'ReferType')) {
      throw new TypeError('parameter "ReferType" is required');
    }

    return this.request('SetRefererConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} Enabled - enabled. required.
   * @param {String} Uri - uri. required.
   * @param {String} Origin - origin. required.
   * @param {Long} ConfigId - configId. optional.
   */
  setRegexRuleConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Enabled')) {
      throw new TypeError('parameter "Enabled" is required');
    }

    if (!hasOwnProperty(params, 'Uri')) {
      throw new TypeError('parameter "Uri" is required');
    }

    if (!hasOwnProperty(params, 'Origin')) {
      throw new TypeError('parameter "Origin" is required');
    }

    return this.request('SetRegexRuleConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AuthType - authType. required.
   * @param {String} TimeOut - timeOut. required.
   * @param {String} AuthAddr - authAddr. required.
   * @param {String} AuthCrash - authCrash. required.
   * @param {String} AuthEnable - authEnable. required.
   * @param {String} AuthProvider - authProvider. required.
   * @param {String} AuthPath - authPath. optional.
   * @param {String} AuthFileType - authFileType. optional.
   */
  setRemoteReqAuthConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AuthType')) {
      throw new TypeError('parameter "AuthType" is required');
    }

    if (!hasOwnProperty(params, 'TimeOut')) {
      throw new TypeError('parameter "TimeOut" is required');
    }

    if (!hasOwnProperty(params, 'AuthAddr')) {
      throw new TypeError('parameter "AuthAddr" is required');
    }

    if (!hasOwnProperty(params, 'AuthCrash')) {
      throw new TypeError('parameter "AuthCrash" is required');
    }

    if (!hasOwnProperty(params, 'AuthEnable')) {
      throw new TypeError('parameter "AuthEnable" is required');
    }

    if (!hasOwnProperty(params, 'AuthProvider')) {
      throw new TypeError('parameter "AuthProvider" is required');
    }

    return this.request('SetRemoteReqAuthConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {Long} ConfigId - configId. optional.
   * @param {String} AliRemoveArgs - ali_remove_args. required.
   * @param {String} KeepOssArgs - keep_oss_args. optional.
   */
  setRemoveQueryStringConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AliRemoveArgs')) {
      throw new TypeError('parameter "AliRemoveArgs" is required');
    }

    return this.request('SetRemoveQueryStringConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AuthType - authType. required.
   * @param {String} Key1 - key1. optional.
   * @param {String} Key2 - key2. optional.
   * @param {String} TimeOut - timeOut. optional.
   * @param {String} AuthRemoteDesc - authRemoteDesc. optional.
   */
  setReqAuthConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AuthType')) {
      throw new TypeError('parameter "AuthType" is required');
    }

    return this.request('SetReqAuthConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} Key - key. required.
   * @param {String} Value - value. required.
   * @param {Long} ConfigId - configId. optional.
   */
  setReqHeaderConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Key')) {
      throw new TypeError('parameter "Key" is required');
    }

    if (!hasOwnProperty(params, 'Value')) {
      throw new TypeError('parameter "Value" is required');
    }

    return this.request('SetReqHeaderConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} ModuleFilterCondition - module_filter_condition. required.
   * @param {Long} ConfigId - configId. optional.
   */
  setSkipModuleConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'ModuleFilterCondition')) {
      throw new TypeError('parameter "ModuleFilterCondition" is required');
    }

    return this.request('SetSkipModuleConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} Enable - enable. optional.
   * @param {String} BackSrcDomain - backSrcDomain. optional.
   */
  setSourceHostConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('SetSourceHostConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} UserAgent - ua. required.
   * @param {String} Type - type. required.
   * @param {Long} ConfigId - configId. optional.
   */
  setUserAgentAcessRestriction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'UserAgent')) {
      throw new TypeError('parameter "UserAgent" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('SetUserAgentAcessRestriction', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} Quota - quota. required.
   * @param {String} Ratio - ratio. required.
   */
  setUserGreenManagerConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Quota')) {
      throw new TypeError('parameter "Quota" is required');
    }

    if (!hasOwnProperty(params, 'Ratio')) {
      throw new TypeError('parameter "Ratio" is required');
    }

    return this.request('SetUserGreenManagerConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} VarName - var_name. required.
   * @param {String} VarValue - var_value. required.
   * @param {Long} ConfigId - configId. optional.
   */
  setVarsConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'VarName')) {
      throw new TypeError('parameter "VarName" is required');
    }

    if (!hasOwnProperty(params, 'VarValue')) {
      throw new TypeError('parameter "VarValue" is required');
    }

    return this.request('SetVarsConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {Long} ConfigId - configId. optional.
   * @param {String} Enable - enable. required.
   */
  setVideoSeekConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Enable')) {
      throw new TypeError('parameter "Enable" is required');
    }

    return this.request('SetVideoSeekConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {Long} ConfigId - configId. optional.
   * @param {String} Enable - enable. required.
   */
  setWafConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Enable')) {
      throw new TypeError('parameter "Enable" is required');
    }

    return this.request('SetWafConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} WaitUri - wruri. required.
   * @param {Integer} AllowPct - allowpct. required.
   * @param {Integer} MaxTimeWait - maxtimewait. required.
   * @param {Integer} GapTime - gaptime. required.
   * @param {String} WaitUrl - waiturl. required.
   */
  setWaitingRoomConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'WaitUri')) {
      throw new TypeError('parameter "WaitUri" is required');
    }

    if (!hasOwnProperty(params, 'AllowPct')) {
      throw new TypeError('parameter "AllowPct" is required');
    }

    if (!hasOwnProperty(params, 'MaxTimeWait')) {
      throw new TypeError('parameter "MaxTimeWait" is required');
    }

    if (!hasOwnProperty(params, 'GapTime')) {
      throw new TypeError('parameter "GapTime" is required');
    }

    if (!hasOwnProperty(params, 'WaitUrl')) {
      throw new TypeError('parameter "WaitUrl" is required');
    }

    return this.request('SetWaitingRoomConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   */
  startCdnDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('StartCdnDomain', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   */
  stopCdnDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('StopCdnDomain', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - RegionId. optional. default: cn-hangzhou.
   * @param {RepeatList} ResourceId - ResourceId. required.
   * @param {String} ResourceType - ResourceType. required.
   * @param {RepeatList} Tag - Tag. required.
   */
  tagResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'Tag')) {
      throw new TypeError('parameter "Tag" is required');
    }

    return this.request('TagResources', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionId - RegionId. optional. default: cn-hangzhou.
   * @param {RepeatList} ResourceId - ResourceId. required.
   * @param {String} ResourceType - ResourceType. required.
   * @param {RepeatList} TagKey - TagKey. required.
   */
  untagResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'TagKey')) {
      throw new TypeError('parameter "TagKey" is required');
    }

    return this.request('UntagResources', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} TriggerARN - trigger. required.
   * @param {String} SourceARN - source_arn. optional.
   * @param {String} RoleARN - role. optional.
   * @param {String} Notes - notes. optional.
   */
  updateFCTrigger(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TriggerARN')) {
      throw new TypeError('parameter "TriggerARN" is required');
    }

    return this.request('UpdateFCTrigger', params, options);
  }

}

module.exports = Client;

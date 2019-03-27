
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-01-15';
    super(config);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} Sources - sources. required.
   * @param {String} CheckUrl - checkUrl. optional.
   * @param {String} Scope - scope. optional.
   * @param {String} TopLevelDomain - topLevelDomain. optional.
   */
  addDcdnDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Sources')) {
      throw new TypeError('parameter "Sources" is required');
    }

    return this.request('AddDcdnDomain', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainNames - domainNames. required.
   * @param {String} FunctionNames - functionNames. required.
   */
  batchDeleteDcdnDomainConfigs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainNames')) {
      throw new TypeError('parameter "DomainNames" is required');
    }

    if (!hasOwnProperty(params, 'FunctionNames')) {
      throw new TypeError('parameter "FunctionNames" is required');
    }

    return this.request('BatchDeleteDcdnDomainConfigs', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainNames - domainNames. required.
   * @param {String} Functions - functions. required.
   */
  batchSetDcdnDomainConfigs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainNames')) {
      throw new TypeError('parameter "DomainNames" is required');
    }

    if (!hasOwnProperty(params, 'Functions')) {
      throw new TypeError('parameter "Functions" is required');
    }

    return this.request('BatchSetDcdnDomainConfigs', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainNames - domainNames. required.
   */
  batchStartDcdnDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainNames')) {
      throw new TypeError('parameter "DomainNames" is required');
    }

    return this.request('BatchStartDcdnDomain', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainNames - domainNames. required.
   */
  batchStopDcdnDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainNames')) {
      throw new TypeError('parameter "DomainNames" is required');
    }

    return this.request('BatchStopDcdnDomain', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  deleteDcdnDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DeleteDcdnDomain', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} ConfigId - configId. required.
   */
  deleteDcdnSpecificConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'ConfigId')) {
      throw new TypeError('parameter "ConfigId" is required');
    }

    return this.request('DeleteDcdnSpecificConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} CertName - certName. required.
   */
  describeDcdnCertificateDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CertName')) {
      throw new TypeError('parameter "CertName" is required');
    }

    return this.request('DescribeDcdnCertificateDetail', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. optional.
   */
  describeDcdnCertificateList(params = {}, options = {}) {
    return this.request('DescribeDcdnCertificateList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} TimeMerge - timeMerge. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} FixTimeGap - fixTimeGap. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeDcdnDomainBpsData(params = {}, options = {}) {
    return this.request('DescribeDcdnDomainBpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domain. required.
   */
  describeDcdnDomainCertificateInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDcdnDomainCertificateInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   */
  describeDcdnDomainCname(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDcdnDomainCname', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} FunctionNames - functionNames. required.
   */
  describeDcdnDomainConfigs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'FunctionNames')) {
      throw new TypeError('parameter "FunctionNames" is required');
    }

    return this.request('DescribeDcdnDomainConfigs', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   */
  describeDcdnDomainDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDcdnDomainDetail', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   */
  describeDcdnDomainHitRateData(params = {}, options = {}) {
    return this.request('DescribeDcdnDomainHitRateData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeDcdnDomainHttpCodeData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDcdnDomainHttpCodeData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeDcdnDomainIspData(params = {}, options = {}) {
    return this.request('DescribeDcdnDomainIspData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {Long} PageSize - pageSize. optional. default: 300.
   * @param {Long} PageNumber - pageIndex. optional. default: 1.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeDcdnDomainLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDcdnDomainLog', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} TimeMerge - timeMerge. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} FixTimeGap - fixTimeGap. optional.
   */
  describeDcdnDomainOriginBpsData(params = {}, options = {}) {
    return this.request('DescribeDcdnDomainOriginBpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} TimeMerge - timeMerge. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} FixTimeGap - fixTimeGap. optional.
   */
  describeDcdnDomainOriginTrafficData(params = {}, options = {}) {
    return this.request('DescribeDcdnDomainOriginTrafficData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeDcdnDomainPvData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDcdnDomainPvData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} TimeMerge - timeMerge. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} FixTimeGap - fixTimeGap. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeDcdnDomainQpsData(params = {}, options = {}) {
    return this.request('DescribeDcdnDomainQpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeDcdnDomainRealTimeBpsData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDcdnDomainRealTimeBpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeDcdnDomainRealTimeByteHitRateData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDcdnDomainRealTimeByteHitRateData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeDcdnDomainRealTimeHttpCodeData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDcdnDomainRealTimeHttpCodeData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeDcdnDomainRealTimeQpsData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDcdnDomainRealTimeQpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeDcdnDomainRealTimeReqHitRateData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDcdnDomainRealTimeReqHitRateData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeDcdnDomainRealTimeSrcBpsData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDcdnDomainRealTimeSrcBpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeDcdnDomainRealTimeSrcHttpCodeData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDcdnDomainRealTimeSrcHttpCodeData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeDcdnDomainRealTimeSrcTrafficData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDcdnDomainRealTimeSrcTrafficData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeDcdnDomainRealTimeTrafficData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDcdnDomainRealTimeTrafficData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeDcdnDomainRegionData(params = {}, options = {}) {
    return this.request('DescribeDcdnDomainRegionData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} SortBy - sortBy. optional.
   */
  describeDcdnDomainTopReferVisit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDcdnDomainTopReferVisit', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} SortBy - sortBy. optional.
   */
  describeDcdnDomainTopUrlVisit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDcdnDomainTopUrlVisit', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} TimeMerge - timeMerge. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} FixTimeGap - fixTimeGap. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeDcdnDomainTrafficData(params = {}, options = {}) {
    return this.request('DescribeDcdnDomainTrafficData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeDcdnDomainUvData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDcdnDomainUvData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} TimeMerge - timeMerge. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} FixTimeGap - fixTimeGap. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeDcdnDomainWebsocketBpsData(params = {}, options = {}) {
    return this.request('DescribeDcdnDomainWebsocketBpsData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeDcdnDomainWebsocketHttpCodeData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDcdnDomainWebsocketHttpCodeData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} TimeMerge - timeMerge. optional.
   * @param {String} Interval - interval. optional.
   * @param {String} FixTimeGap - fixTimeGap. optional.
   * @param {String} IspNameEn - ispName. optional.
   * @param {String} LocationNameEn - locName. optional.
   */
  describeDcdnDomainWebsocketTrafficData(params = {}, options = {}) {
    return this.request('DescribeDcdnDomainWebsocketTrafficData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   */
  describeDcdnRefreshQuota(params = {}, options = {}) {
    return this.request('DescribeDcdnRefreshQuota', params, options);
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
  describeDcdnRefreshTasks(params = {}, options = {}) {
    return this.request('DescribeDcdnRefreshTasks', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   */
  describeDcdnService(params = {}, options = {}) {
    return this.request('DescribeDcdnService', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Product - product. optional. default: dcdn.
   * @param {Long} Limit - limit. optional. default: 20.
   */
  describeDcdnTopDomainsByFlow(params = {}, options = {}) {
    return this.request('DescribeDcdnTopDomainsByFlow', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {String} DomainName - domainName. optional.
   * @param {String} DomainStatus - domainStatus. optional.
   * @param {String} DomainSearchType - domainSearchType. optional.
   * @param {Boolean} CheckDomainShow - checkDomainShow. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} FuncId - funcId. optional.
   * @param {String} FuncFilter - funcFilter. optional.
   */
  describeDcdnUserDomains(params = {}, options = {}) {
    return this.request('DescribeDcdnUserDomains', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   */
  describeDcdnUserQuota(params = {}, options = {}) {
    return this.request('DescribeDcdnUserQuota', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   */
  describeDcdnUserResourcePackage(params = {}, options = {}) {
    return this.request('DescribeDcdnUserResourcePackage', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   */
  describeUserDcdnStatus(params = {}, options = {}) {
    return this.request('DescribeUserDcdnStatus', params, options);
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
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} ObjectPath - objectPath. required.
   * @param {String} Area - area. optional.
   */
  preloadDcdnObjectCaches(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ObjectPath')) {
      throw new TypeError('parameter "ObjectPath" is required');
    }

    return this.request('PreloadDcdnObjectCaches', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} ObjectPath - objectPath. required.
   * @param {String} ObjectType - objectType. optional. default: File.
   */
  refreshDcdnObjectCaches(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ObjectPath')) {
      throw new TypeError('parameter "ObjectPath" is required');
    }

    return this.request('RefreshDcdnObjectCaches', params, options);
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
  setDcdnDomainCertificate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'SSLProtocol')) {
      throw new TypeError('parameter "SSLProtocol" is required');
    }

    return this.request('SetDcdnDomainCertificate', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {Integer} FunctionId - functionId. required.
   * @param {String} Configs - configs. required.
   */
  setDcdnUserConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FunctionId')) {
      throw new TypeError('parameter "FunctionId" is required');
    }

    if (!hasOwnProperty(params, 'Configs')) {
      throw new TypeError('parameter "Configs" is required');
    }

    return this.request('SetDcdnUserConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   */
  startDcdnDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('StartDcdnDomain', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   */
  stopDcdnDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('StopDcdnDomain', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} Sources - sources. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} TopLevelDomain - topLevelDomain. optional.
   */
  updateDcdnDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('UpdateDcdnDomain', params, options);
  }

}

module.exports = Client;

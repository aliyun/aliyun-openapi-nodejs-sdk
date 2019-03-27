
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-04-11';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} BusinessType - BusinessType. required.
   * @param {String} Company - Company. required.
   * @param {String} Site - Site. required.
   * @param {String} Requirement - Requirement. required.
   * @param {String} Mobile - Mobile. required.
   * @param {String} Ca - Ca. optional.
   * @param {String} Operator - Operator. optional.
   * @param {String} Email - Email. optional.
   * @param {String} BandwidthRequirement - BandwidthRequirement. optional.
   */
  addConsumer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'BusinessType')) {
      throw new TypeError('parameter "BusinessType" is required');
    }

    if (!hasOwnProperty(params, 'Company')) {
      throw new TypeError('parameter "Company" is required');
    }

    if (!hasOwnProperty(params, 'Site')) {
      throw new TypeError('parameter "Site" is required');
    }

    if (!hasOwnProperty(params, 'Requirement')) {
      throw new TypeError('parameter "Requirement" is required');
    }

    if (!hasOwnProperty(params, 'Mobile')) {
      throw new TypeError('parameter "Mobile" is required');
    }

    return this.request('AddConsumer', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} BusinessType - BusinessType. required.
   * @param {String} Domain - Domain. required.
   * @param {String} LiveFormat - LiveFormat. optional.
   * @param {String} SliceDomain - SliceDomain. optional.
   * @param {String} Region - Region. optional.
   * @param {String} DemoUrls - DemoUrls. optional.
   */
  addDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'BusinessType')) {
      throw new TypeError('parameter "BusinessType" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('AddDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Name - Name. required.
   * @param {String} Region - Region. required.
   * @param {String} IspName - IspName. required.
   * @param {String} PlatformType - PlatformType. required.
   * @param {String} BusinessType - BusinessType. required.
   * @param {String} Market - Market. required.
   * @param {String} AppVersion - AppVersion. required.
   */
  addPcdnControlRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'IspName')) {
      throw new TypeError('parameter "IspName" is required');
    }

    if (!hasOwnProperty(params, 'PlatformType')) {
      throw new TypeError('parameter "PlatformType" is required');
    }

    if (!hasOwnProperty(params, 'BusinessType')) {
      throw new TypeError('parameter "BusinessType" is required');
    }

    if (!hasOwnProperty(params, 'Market')) {
      throw new TypeError('parameter "Market" is required');
    }

    if (!hasOwnProperty(params, 'AppVersion')) {
      throw new TypeError('parameter "AppVersion" is required');
    }

    return this.request('AddPcdnControlRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} product - Product. optional.
   * @param {String} Version - Version. required.
   * @param {String} RegionId - RegionId. optional.
   * @param {String} data - Data. required.
   */
  completeOrderInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CompleteOrderInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Domain - Domain. required.
   */
  deleteDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('DeleteDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} ResourceId - ResourceId. required.
   */
  deletePcdnControlRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    return this.request('DeletePcdnControlRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Url - Url. required.
   * @param {String} StartDate - StartDate. required.
   * @param {String} EndDate - EndDate. required.
   */
  describeLiveBandWitdh(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Url')) {
      throw new TypeError('parameter "Url" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('DescribeLiveBandWitdh', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Url - Url. required.
   * @param {String} StartDate - StartDate. required.
   * @param {String} EndDate - EndDate. required.
   */
  describeLiveTraffic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Url')) {
      throw new TypeError('parameter "Url" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('DescribeLiveTraffic', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Url - Url. required.
   * @param {String} StartDate - StartDate. required.
   * @param {String} EndDate - EndDate. required.
   */
  describeLiveVistor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Url')) {
      throw new TypeError('parameter "Url" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('DescribeLiveVistor', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} ResourceId - ResourceId. required.
   */
  disablePcdnControlRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    return this.request('DisablePcdnControlRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} product - Product. optional.
   * @param {String} Version - Version. required.
   * @param {String} RegionId - RegionId. optional.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   * @param {Long} Level - level. optional.
   * @param {String} Url - url. optional.
   * @param {String} Prompt - prompt. optional.
   */
  doCheckResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('DoCheckResource', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Name - Name. required.
   * @param {String} ResourceId - ResourceId. required.
   * @param {String} Region - Region. required.
   * @param {String} IspName - IspName. required.
   * @param {String} PlatformType - PlatformType. required.
   * @param {String} BusinessType - BusinessType. required.
   * @param {String} Market - Market. required.
   * @param {String} AppVersion - AppVersion. required.
   */
  editPcdnControlRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'IspName')) {
      throw new TypeError('parameter "IspName" is required');
    }

    if (!hasOwnProperty(params, 'PlatformType')) {
      throw new TypeError('parameter "PlatformType" is required');
    }

    if (!hasOwnProperty(params, 'BusinessType')) {
      throw new TypeError('parameter "BusinessType" is required');
    }

    if (!hasOwnProperty(params, 'Market')) {
      throw new TypeError('parameter "Market" is required');
    }

    if (!hasOwnProperty(params, 'AppVersion')) {
      throw new TypeError('parameter "AppVersion" is required');
    }

    return this.request('EditPcdnControlRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} ResourceId - ResourceId. required.
   */
  enablePcdnControlRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    return this.request('EnablePcdnControlRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Domain - Domain. optional.
   * @param {String} Region - Region. required.
   * @param {String} IspName - IspName. required.
   * @param {String} PlatformType - PlatformType. required.
   * @param {String} BusinessType - BusinessType. required.
   * @param {String} StartDate - StartDate. required.
   * @param {String} EndDate - EndDate. required.
   */
  getAccessData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'IspName')) {
      throw new TypeError('parameter "IspName" is required');
    }

    if (!hasOwnProperty(params, 'PlatformType')) {
      throw new TypeError('parameter "PlatformType" is required');
    }

    if (!hasOwnProperty(params, 'BusinessType')) {
      throw new TypeError('parameter "BusinessType" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('GetAccessData', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   */
  getAllAppVersions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('GetAllAppVersions', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   */
  getAllIsp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('GetAllIsp', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   */
  getAllMarkets(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('GetAllMarkets', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   */
  getAllOperators(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('GetAllOperators', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   */
  getAllPlatformTypes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('GetAllPlatformTypes', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   */
  getAllRegions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('GetAllRegions', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Domain - Domain. optional.
   * @param {String} Region - Region. required.
   * @param {String} IspName - IspName. required.
   * @param {String} PlatformType - PlatformType. required.
   * @param {String} BusinessType - BusinessType. required.
   * @param {String} StartDate - StartDate. required.
   * @param {String} EndDate - EndDate. required.
   */
  getAvailabilityData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'IspName')) {
      throw new TypeError('parameter "IspName" is required');
    }

    if (!hasOwnProperty(params, 'PlatformType')) {
      throw new TypeError('parameter "PlatformType" is required');
    }

    if (!hasOwnProperty(params, 'BusinessType')) {
      throw new TypeError('parameter "BusinessType" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('GetAvailabilityData', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {Integer} DataInterval - DataInterval. optional.
   * @param {String} ResourceId - ResourceId. required.
   */
  getBalanceBandwidthData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    return this.request('GetBalanceBandwidthData', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {Integer} DataInterval - DataInterval. optional.
   * @param {String} ResourceId - ResourceId. required.
   */
  getBalanceTrafficData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    return this.request('GetBalanceTrafficData', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Domain - Domain. optional.
   * @param {String} Region - Region. required.
   * @param {String} IspName - IspName. required.
   * @param {String} PlatformType - PlatformType. required.
   * @param {String} BusinessType - BusinessType. required.
   * @param {String} StartDate - StartDate. required.
   * @param {String} EndDate - EndDate. required.
   */
  getBandwidthData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'IspName')) {
      throw new TypeError('parameter "IspName" is required');
    }

    if (!hasOwnProperty(params, 'PlatformType')) {
      throw new TypeError('parameter "PlatformType" is required');
    }

    if (!hasOwnProperty(params, 'BusinessType')) {
      throw new TypeError('parameter "BusinessType" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('GetBandwidthData', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   */
  getClientsRatio(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('GetClientsRatio', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   */
  getConsumerStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('GetConsumerStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Page - Page. required.
   * @param {String} PageSize - PageSize. required.
   */
  getControlRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetControlRules', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Domain - Domain. optional.
   * @param {String} Region - Region. required.
   * @param {String} IspName - IspName. required.
   * @param {String} PlatformType - PlatformType. required.
   * @param {String} BusinessType - BusinessType. required.
   * @param {String} StartDate - StartDate. required.
   * @param {String} EndDate - EndDate. required.
   */
  getCoverRateData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'IspName')) {
      throw new TypeError('parameter "IspName" is required');
    }

    if (!hasOwnProperty(params, 'PlatformType')) {
      throw new TypeError('parameter "PlatformType" is required');
    }

    if (!hasOwnProperty(params, 'BusinessType')) {
      throw new TypeError('parameter "BusinessType" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('GetCoverRateData', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   */
  getCurrentMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('GetCurrentMode', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   */
  getDomainCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('GetDomainCount', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Domain - Domain. required.
   */
  getDomainDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('GetDomainDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Page - Page. required.
   * @param {String} PageSize - PageSize. required.
   * @param {String} Domain - Domain. optional.
   */
  getDomains(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetDomains', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} StartDate - StartDate. optional.
   * @param {String} EndDate - EndDate. optional.
   * @param {String} Domain - Domain. optional.
   * @param {String} Region - Region. optional.
   * @param {String} IspName - IspName. optional.
   * @param {String} PlatformType - PlatformType. optional.
   * @param {String} BusinessType - BusinessType. optional.
   */
  getExpenseSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('GetExpenseSummary', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Page - Page. required.
   * @param {String} PageSize - PageSize. required.
   */
  getFeeHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetFeeHistory', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Domain - Domain. optional.
   * @param {String} Region - Region. required.
   * @param {String} IspName - IspName. required.
   * @param {String} PlatformType - PlatformType. required.
   * @param {String} BusinessType - BusinessType. required.
   * @param {String} StartDate - StartDate. required.
   * @param {String} EndDate - EndDate. required.
   */
  getFirstFrameDelayData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'IspName')) {
      throw new TypeError('parameter "IspName" is required');
    }

    if (!hasOwnProperty(params, 'PlatformType')) {
      throw new TypeError('parameter "PlatformType" is required');
    }

    if (!hasOwnProperty(params, 'BusinessType')) {
      throw new TypeError('parameter "BusinessType" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('GetFirstFrameDelayData', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Domain - Domain. optional.
   * @param {String} Region - Region. required.
   * @param {String} IspName - IspName. required.
   * @param {String} PlatformType - PlatformType. required.
   * @param {String} BusinessType - BusinessType. required.
   * @param {String} StartDate - StartDate. required.
   * @param {String} EndDate - EndDate. required.
   */
  getFluencyData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'IspName')) {
      throw new TypeError('parameter "IspName" is required');
    }

    if (!hasOwnProperty(params, 'PlatformType')) {
      throw new TypeError('parameter "PlatformType" is required');
    }

    if (!hasOwnProperty(params, 'BusinessType')) {
      throw new TypeError('parameter "BusinessType" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('GetFluencyData', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   */
  getLastMonthConsume(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('GetLastMonthConsume', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Domain - Domain. optional.
   * @param {String} Date - Date. required.
   */
  getLiveLogsList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Date')) {
      throw new TypeError('parameter "Date" is required');
    }

    return this.request('GetLiveLogsList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Domain - Domain. optional.
   * @param {String} Date - Date. optional.
   * @param {String} StartTime - StartTime. optional.
   * @param {String} EndTime - EndTime. optional.
   */
  getLogsList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('GetLogsList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} URL - URL. optional.
   * @param {String} Page - Page. required.
   * @param {String} PageSize - PageSize. required.
   */
  getObjectCacheList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetObjectCacheList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Uri - Uri. optional.
   * @param {Long} Minute - Minute. optional.
   * @param {String} Domain - Domain. optional.
   */
  getPcdnStreamInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('GetPcdnStreamInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Domain - Domain. optional.
   * @param {String} StartDate - StartDate. required.
   * @param {String} EndDate - EndDate. required.
   * @param {Integer} DataInterval - DataInterval. optional.
   */
  getRealtimeBandwidthData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('GetRealtimeBandwidthData', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Domain - Domain. optional.
   * @param {String} StartDate - StartDate. required.
   * @param {String} EndDate - EndDate. required.
   * @param {Integer} DataInterval - DataInterval. optional.
   */
  getRealtimeFluencyData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('GetRealtimeFluencyData', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Domain - Domain. optional.
   * @param {String} StartDate - StartDate. required.
   * @param {String} EndDate - EndDate. required.
   * @param {Integer} DataInterval - DataInterval. optional.
   */
  getRealtimeShareRateData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('GetRealtimeShareRateData', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Domain - Domain. optional.
   * @param {String} StartDate - StartDate. required.
   * @param {String} EndDate - EndDate. required.
   * @param {Integer} DataInterval - DataInterval. optional.
   */
  getRealtimeTrafficData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('GetRealtimeTrafficData', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Domain - Domain. optional.
   */
  getSDKInfoList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('GetSDKInfoList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Domain - Domain. optional.
   * @param {String} Region - Region. required.
   * @param {String} IspName - IspName. required.
   * @param {String} PlatformType - PlatformType. required.
   * @param {String} BusinessType - BusinessType. required.
   * @param {String} StartDate - StartDate. required.
   * @param {String} EndDate - EndDate. required.
   */
  getShareRateData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'IspName')) {
      throw new TypeError('parameter "IspName" is required');
    }

    if (!hasOwnProperty(params, 'PlatformType')) {
      throw new TypeError('parameter "PlatformType" is required');
    }

    if (!hasOwnProperty(params, 'BusinessType')) {
      throw new TypeError('parameter "BusinessType" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('GetShareRateData', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   */
  getTokenList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('GetTokenList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   */
  getTokenPlatformList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('GetTokenPlatformList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   */
  getTrafficByRegion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('GetTrafficByRegion', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Domain - Domain. optional.
   * @param {String} Region - Region. required.
   * @param {String} IspName - IspName. required.
   * @param {String} PlatformType - PlatformType. required.
   * @param {String} BusinessType - BusinessType. required.
   * @param {String} StartDate - StartDate. required.
   * @param {String} EndDate - EndDate. required.
   */
  getTrafficData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'IspName')) {
      throw new TypeError('parameter "IspName" is required');
    }

    if (!hasOwnProperty(params, 'PlatformType')) {
      throw new TypeError('parameter "PlatformType" is required');
    }

    if (!hasOwnProperty(params, 'BusinessType')) {
      throw new TypeError('parameter "BusinessType" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('GetTrafficData', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} product - Product. optional.
   * @param {String} Version - Version. required.
   * @param {String} RegionId - RegionId. optional.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   * @param {Long} Level - level. optional.
   * @param {String} Url - url. optional.
   * @param {String} Prompt - prompt. optional.
   */
  logicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('LogicalDeleteResource', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} product - Product. optional.
   * @param {String} Version - Version. required.
   * @param {String} RegionId - RegionId. optional.
   * @param {String} data - Data. required.
   */
  orderSucceededCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('OrderSucceededCallback', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} product - Product. optional.
   * @param {String} Version - Version. required.
   * @param {String} RegionId - RegionId. optional.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   * @param {Long} Level - level. optional.
   * @param {String} Url - url. optional.
   * @param {String} Prompt - prompt. optional.
   */
  physicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('PhysicalDeleteResource', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} URLs - URLs. required.
   * @param {String} EffectTime - EffectTime. required.
   */
  pushObjectCache(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'URLs')) {
      throw new TypeError('parameter "URLs" is required');
    }

    if (!hasOwnProperty(params, 'EffectTime')) {
      throw new TypeError('parameter "EffectTime" is required');
    }

    return this.request('PushObjectCache', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Domain - Domain. required.
   * @param {String} Enable - Enable. required.
   */
  setAutoRefreshCacheConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Enable')) {
      throw new TypeError('parameter "Enable" is required');
    }

    return this.request('SetAutoRefreshCacheConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Domain - Domain. required.
   * @param {String} Enable - Enable. required.
   */
  setHttpDnsConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Enable')) {
      throw new TypeError('parameter "Enable" is required');
    }

    return this.request('SetHttpDnsConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Domain - Domain. required.
   * @param {String} SliceDelayMode - SliceDelayMode. required.
   * @param {Integer} SliceDelayValue - SliceDelayValue. required.
   */
  setLiveDelayConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'SliceDelayMode')) {
      throw new TypeError('parameter "SliceDelayMode" is required');
    }

    if (!hasOwnProperty(params, 'SliceDelayValue')) {
      throw new TypeError('parameter "SliceDelayValue" is required');
    }

    return this.request('SetLiveDelayConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Domain - Domain. required.
   * @param {String} LiveFormat - LiveFormat. required.
   * @param {String} SliceDomain - SliceDomain. optional.
   */
  setLiveFormat(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'LiveFormat')) {
      throw new TypeError('parameter "LiveFormat" is required');
    }

    return this.request('SetLiveFormat', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Domain - Domain. required.
   * @param {String} SliceDomain - SliceDomain. required.
   */
  setSliceDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'SliceDomain')) {
      throw new TypeError('parameter "SliceDomain" is required');
    }

    return this.request('SetSliceDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Domain - Domain. required.
   */
  startDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('StartDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} Version - Version. required.
   * @param {String} Domain - Domain. required.
   */
  stopDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('StopDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   * @param {String} product - Product. optional.
   * @param {String} Version - Version. required.
   * @param {String} RegionId - RegionId. optional.
   * @param {String} data - Data. required.
   */
  validateOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('ValidateOrder', params, options);
  }

}

module.exports = Client;

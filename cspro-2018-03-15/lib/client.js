
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-03-15';
    super(config);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} ConfType - confType. required.
   * @param {String} CheckTarget - checkTarget. required.
   * @param {RepeatList} CheckDetailDTO - checkDetailDTOList. required.
   * @param {Json} Extras - extras. optional.
   */
  addOmniSecCheckConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ConfType')) {
      throw new TypeError('parameter "ConfType" is required');
    }

    if (!hasOwnProperty(params, 'CheckTarget')) {
      throw new TypeError('parameter "CheckTarget" is required');
    }

    if (!hasOwnProperty(params, 'CheckDetailDTO')) {
      throw new TypeError('parameter "CheckDetailDTO" is required');
    }

    options.method = 'POST';
    return this.request('AddOmniSecCheckConfig', params, options);
  }

  /**
   * @param {String} Type - type. required.
   * @param {Long} LibId - libId. required.
   * @param {RepeatList} Content - contents. required.
   */
  addSecCheckSample(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'LibId')) {
      throw new TypeError('parameter "LibId" is required');
    }

    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    options.method = 'POST';
    return this.request('AddSecCheckSample', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} Type - type. required.
   */
  addSecCheckSampleLib(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    options.method = 'POST';
    return this.request('AddSecCheckSampleLib', params, options);
  }

  /**
   * @param {String} SiteProtocol - protocol. required.
   * @param {String} SiteDomain - domain. required.
   * @param {String} IndexUrl - indexUrl. required.
   * @param {Integer} IndexCheckFrequency - indexCheckFrequency. required.
   * @param {Integer} SiteCheckFrequency - siteCheckFrequency. required.
   * @param {Boolean} SetBaseLine - setBaseLine. required.
   */
  addSiteCheckConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SiteProtocol')) {
      throw new TypeError('parameter "SiteProtocol" is required');
    }

    if (!hasOwnProperty(params, 'SiteDomain')) {
      throw new TypeError('parameter "SiteDomain" is required');
    }

    if (!hasOwnProperty(params, 'IndexUrl')) {
      throw new TypeError('parameter "IndexUrl" is required');
    }

    if (!hasOwnProperty(params, 'IndexCheckFrequency')) {
      throw new TypeError('parameter "IndexCheckFrequency" is required');
    }

    if (!hasOwnProperty(params, 'SiteCheckFrequency')) {
      throw new TypeError('parameter "SiteCheckFrequency" is required');
    }

    if (!hasOwnProperty(params, 'SetBaseLine')) {
      throw new TypeError('parameter "SetBaseLine" is required');
    }

    options.method = 'POST';
    return this.request('AddSiteCheckConfig', params, options);
  }

  /**
   */
  authSecCheckSamplePicUpload(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('AuthSecCheckSamplePicUpload', params, options);
  }

  /**
   * @param {Long} ConfId - confId. required.
   */
  delOmniSecCheckConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConfId')) {
      throw new TypeError('parameter "ConfId" is required');
    }

    options.method = 'POST';
    return this.request('DelOmniSecCheckConfig', params, options);
  }

  /**
   * @param {Long} LibId - libId. required.
   * @param {String} Type - type. required.
   * @param {RepeatList} SampleId - sampleIds. required.
   */
  delSecCheckSample(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LibId')) {
      throw new TypeError('parameter "LibId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'SampleId')) {
      throw new TypeError('parameter "SampleId" is required');
    }

    options.method = 'POST';
    return this.request('DelSecCheckSample', params, options);
  }

  /**
   * @param {Long} LibId - libId. required.
   * @param {String} Type - type. required.
   */
  delSecCheckSampleLib(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LibId')) {
      throw new TypeError('parameter "LibId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    options.method = 'POST';
    return this.request('DelSecCheckSampleLib', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  delSiteCheckConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DelSiteCheckConfig', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  getIndexBaseline(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetIndexBaseline', params, options);
  }

  /**
   * @param {String} Ip - ip. required.
   */
  getIpProfile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('GetIpProfile', params, options);
  }

  /**
   * @param {String} Phone - phone. required.
   */
  getPhoneProfile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Phone')) {
      throw new TypeError('parameter "Phone" is required');
    }

    return this.request('GetPhoneProfile', params, options);
  }

  /**
   * @param {Long} ResultId - resultId. required.
   * @param {String} RiskType - riskType. optional.
   * @param {String} RiskSource - riskSource. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  getSecCheckResultDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResultId')) {
      throw new TypeError('parameter "ResultId" is required');
    }

    if (!hasOwnProperty(params, 'RiskSource')) {
      throw new TypeError('parameter "RiskSource" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    options.method = 'POST';
    return this.request('GetSecCheckResultDetail', params, options);
  }

  /**
   * @param {Long} ResultId - resultId. required.
   * @param {String} RiskType - riskType. required.
   * @param {String} Type - type. required.
   */
  getSiteCheckResultDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResultId')) {
      throw new TypeError('parameter "ResultId" is required');
    }

    if (!hasOwnProperty(params, 'RiskType')) {
      throw new TypeError('parameter "RiskType" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('GetSiteCheckResultDetail', params, options);
  }

  /**
   * @param {String} SnapshotKey - snapshotInfo. required.
   */
  getSnapshotInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SnapshotKey')) {
      throw new TypeError('parameter "SnapshotKey" is required');
    }

    return this.request('GetSnapshotInfo', params, options);
  }

  /**
   * @param {Json} PunishOrderReq - punishOrderReq. required.
   */
  postPunishOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PunishOrderReq')) {
      throw new TypeError('parameter "PunishOrderReq" is required');
    }

    options.method = 'POST';
    return this.request('PostPunishOrder', params, options);
  }

  /**
   * @param {String} PunishRequestId - punishRequestId. required.
   */
  queryPunishOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PunishRequestId')) {
      throw new TypeError('parameter "PunishRequestId" is required');
    }

    return this.request('QueryPunishOrder', params, options);
  }

  /**
   * @param {Json} PunishOrderListRequest - punishOrderListReq. required.
   */
  queryPunishOrderList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PunishOrderListRequest')) {
      throw new TypeError('parameter "PunishOrderListRequest" is required');
    }

    return this.request('QueryPunishOrderList', params, options);
  }

  /**
   * @param {String} ConfType - confType. required.
   * @param {String} CheckTarget - checkTarget. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  querySecCheckConfigs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConfType')) {
      throw new TypeError('parameter "ConfType" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    options.method = 'POST';
    return this.request('QuerySecCheckConfigs', params, options);
  }

  /**
   * @param {String} ConfType - confType. required.
   * @param {String} CheckType - checkType. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  querySecCheckLatestSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConfType')) {
      throw new TypeError('parameter "ConfType" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    options.method = 'POST';
    return this.request('QuerySecCheckLatestSummary', params, options);
  }

  /**
   * @param {String} ConfType - confType. required.
   * @param {String} CheckType - checkType. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} CheckTarget - checkTarget. required.
   * @param {Long} StartDate - startDate. required.
   * @param {Long} EndDate - endDate. required.
   */
  querySecCheckResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConfType')) {
      throw new TypeError('parameter "ConfType" is required');
    }

    if (!hasOwnProperty(params, 'CheckType')) {
      throw new TypeError('parameter "CheckType" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CheckTarget')) {
      throw new TypeError('parameter "CheckTarget" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    options.method = 'POST';
    return this.request('QuerySecCheckResult', params, options);
  }

  /**
   * @param {Long} LibId - libId. required.
   * @param {String} Type - type. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  querySecCheckSamples(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LibId')) {
      throw new TypeError('parameter "LibId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    options.method = 'POST';
    return this.request('QuerySecCheckSamples', params, options);
  }

  /**
   * @param {String} SiteDomain - domain. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} Page - page. optional.
   * @param {Long} CheckId - checkId. optional.
   */
  querySiteCheckConfigs(params = {}, options = {}) {
    return this.request('QuerySiteCheckConfigs', params, options);
  }

  /**
   * @param {Long} CheckId - checkId. required.
   * @param {String} Type - type. required.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  querySiteCheckProgress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CheckId')) {
      throw new TypeError('parameter "CheckId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('QuerySiteCheckProgress', params, options);
  }

  /**
   * @param {String} SiteDomain - domain. optional.
   * @param {String} Type - type. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Long} StartDate - startDate. optional.
   * @param {Long} EndDate - endDate. optional.
   */
  querySiteCheckResult(params = {}, options = {}) {
    return this.request('QuerySiteCheckResult', params, options);
  }

  /**
   * @param {String} PunishRequestId - punishRequestId. required.
   */
  revokePunishOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PunishRequestId')) {
      throw new TypeError('parameter "PunishRequestId" is required');
    }

    options.method = 'POST';
    return this.request('RevokePunishOrder', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  setIndexBaseline(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('SetIndexBaseline', params, options);
  }

  /**
   * @param {String} Name - name. optional.
   * @param {RepeatList} CheckDetailDTO - checkDetailDTOList. optional.
   * @param {Json} Extras - extras. optional.
   * @param {Long} ConfId - confId. required.
   * @param {Boolean} Valid - valid. optional.
   * @param {Boolean} Accessible - accessible. optional.
   */
  updateOmniSecCheckConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConfId')) {
      throw new TypeError('parameter "ConfId" is required');
    }

    options.method = 'POST';
    return this.request('UpdateOmniSecCheckConfig', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {String} SiteProtocol - protocol. required.
   * @param {String} SiteDomain - domain. required.
   * @param {String} IndexUrl - indexUrl. required.
   * @param {Integer} IndexCheckFrequency - indexCheckFrequency. required.
   * @param {Integer} SiteCheckFrequency - siteCheckFrequency. required.
   * @param {Boolean} SetBaseLine - setBaseLine. required.
   */
  updateSiteCheckConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'SiteProtocol')) {
      throw new TypeError('parameter "SiteProtocol" is required');
    }

    if (!hasOwnProperty(params, 'SiteDomain')) {
      throw new TypeError('parameter "SiteDomain" is required');
    }

    if (!hasOwnProperty(params, 'IndexUrl')) {
      throw new TypeError('parameter "IndexUrl" is required');
    }

    if (!hasOwnProperty(params, 'IndexCheckFrequency')) {
      throw new TypeError('parameter "IndexCheckFrequency" is required');
    }

    if (!hasOwnProperty(params, 'SiteCheckFrequency')) {
      throw new TypeError('parameter "SiteCheckFrequency" is required');
    }

    if (!hasOwnProperty(params, 'SetBaseLine')) {
      throw new TypeError('parameter "SetBaseLine" is required');
    }

    options.method = 'POST';
    return this.request('UpdateSiteCheckConfig', params, options);
  }

  /**
   * @param {Boolean} IsOverWrite - isOverWrite. optional.
   * @param {Json} DomainList - domainList. optional.
   */
  uploadOwnedDomains(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('UploadOwnedDomains', params, options);
  }

}

module.exports = Client;

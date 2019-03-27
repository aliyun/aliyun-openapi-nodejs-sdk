
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-08-10';
    super(config);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Domain - domain. required.
   * @param {String} Site - site. optional.
   */
  addDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('AddDomain', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Domain - domain. required.
   * @param {String} Type - type. required.
   * @param {String} Value - value. required.
   * @param {String} RecordId - recordId. required.
   * @param {String} Site - site. optional.
   */
  addDomainDnsRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Value')) {
      throw new TypeError('parameter "Value" is required');
    }

    if (!hasOwnProperty(params, 'RecordId')) {
      throw new TypeError('parameter "RecordId" is required');
    }

    return this.request('AddDomainDnsRecord', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} FirewallRules - firewallRules. required.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Site - site. optional.
   */
  addFirewallRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirewallRules')) {
      throw new TypeError('parameter "FirewallRules" is required');
    }

    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('AddFirewallRule', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppUid - appUid. required.
   */
  appStart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppStart', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppUid - appUid. required.
   */
  appStop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppStop', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {String} data - data. required.
   * @param {String} Site - site. optional.
   */
  completeCommodity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CompleteCommodity', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {String} data - data. required.
   * @param {String} Site - site. optional.
   */
  completeOrderParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CompleteOrderParam', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} DiskName - diskName. required.
   * @param {String} DiskSnapshotName - diskSnapshotName. required.
   * @param {String} Site - site. required.
   */
  createDiskSnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiskName')) {
      throw new TypeError('parameter "DiskName" is required');
    }

    if (!hasOwnProperty(params, 'DiskSnapshotName')) {
      throw new TypeError('parameter "DiskSnapshotName" is required');
    }

    if (!hasOwnProperty(params, 'Site')) {
      throw new TypeError('parameter "Site" is required');
    }

    return this.request('CreateDiskSnapshot', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Name - name. required.
   * @param {String} Site - site. optional.
   */
  createServerKeyPair(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateServerKeyPair', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Name - name. required.
   * @param {String} Site - site. optional.
   */
  createSnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateSnapshot', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Domain - domain. required.
   */
  delDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('DelDomain', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Domain - domain. required.
   * @param {String} RecordId - recordId. required.
   */
  delDomainDnsRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'RecordId')) {
      throw new TypeError('parameter "RecordId" is required');
    }

    return this.request('DelDomainDnsRecord', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Domain - domain. required.
   * @param {String} Site - site. optional.
   */
  deleteDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('DeleteDomain', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Domain - domain. required.
   * @param {String} RecordId - recordId. required.
   * @param {String} Site - site. optional.
   */
  deleteDomainDnsRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'RecordId')) {
      throw new TypeError('parameter "RecordId" is required');
    }

    return this.request('DeleteDomainDnsRecord', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} FirewallRuleUid - firewallRuleUid. required.
   * @param {String} Site - site. optional.
   */
  deleteFirewallRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'FirewallRuleUid')) {
      throw new TypeError('parameter "FirewallRuleUid" is required');
    }

    return this.request('DeleteFirewallRule', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Site - site. optional.
   */
  deleteServerKeyPair(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('DeleteServerKeyPair', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. optional.
   * @param {String} SnapshotUid - snapshotUid. optional.
   * @param {String} Site - site. optional.
   * @param {Boolean} IsSystemDiskSnapshot - systemDiskSnapshot. optional.
   * @param {String} DiskSnapshotId - diskSnapshotId. optional.
   */
  deleteSnapshot(params = {}, options = {}) {
    return this.request('DeleteSnapshot', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Domain - domain. required.
   * @param {String} Site - site. optional.
   */
  disableHttps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('DisableHttps', params, options);
  }

  /**
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
   */
  doLogicalDeleteResource(params = {}, options = {}) {
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

    return this.request('DoLogicalDeleteResource', params, options);
  }

  /**
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
   */
  doPhysicalDeleteResource(params = {}, options = {}) {
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

    return this.request('DoPhysicalDeleteResource', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Domain - domain. required.
   * @param {String} Site - site. optional.
   */
  enableHttps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('EnableHttps', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} ossDownLoadUrl - ossDownLoadUrl. required.
   * @param {String} fileSize - fileSize. required.
   * @param {String} fileMd5Sum - fileMd5Sum. required.
   * @param {String} action - action. required.
   * @param {String} site - site. required.
   */
  execUpgradeTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'ossDownLoadUrl')) {
      throw new TypeError('parameter "ossDownLoadUrl" is required');
    }

    if (!hasOwnProperty(params, 'fileSize')) {
      throw new TypeError('parameter "fileSize" is required');
    }

    if (!hasOwnProperty(params, 'fileMd5Sum')) {
      throw new TypeError('parameter "fileMd5Sum" is required');
    }

    if (!hasOwnProperty(params, 'action')) {
      throw new TypeError('parameter "action" is required');
    }

    if (!hasOwnProperty(params, 'site')) {
      throw new TypeError('parameter "site" is required');
    }

    return this.request('ExecUpgradeTask', params, options);
  }

  /**
   * @param {String} ServerUid - serverUid. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. optional.
   * @param {String} Lang - lang. optional.
   */
  getApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('GetApp', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. optional.
   * @param {String} Site - site. optional.
   * @param {String} Lang - lang. optional.
   */
  getAppImages(params = {}, options = {}) {
    return this.request('GetAppImages', params, options);
  }

  /**
   * @param {String} ServerUid - serverUid. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. optional.
   * @param {String} Lang - lang. optional.
   */
  getAppInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('GetAppInfo', params, options);
  }

  /**
   * @param {String} ServerUid - serverUid. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. optional.
   */
  getAppInstallions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('GetAppInstallions', params, options);
  }

  /**
   * @param {String} ServerUid - serverUid. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. optional.
   */
  getAppModules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('GetAppModules', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} AppUid - appUid. required.
   * @param {String} Site - site. optional.
   */
  getAppRunningTime(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('GetAppRunningTime', params, options);
  }

  /**
   * @param {String} AppUid - appUid. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Site - site. optional.
   */
  getAppStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('GetAppStatus', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. optional.
   */
  getCerts(params = {}, options = {}) {
    return this.request('GetCerts', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Site - site. optional.
   */
  getCpuDatas(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('GetCpuDatas', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Site - site. optional.
   */
  getCurrentBandwidthUsage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('GetCurrentBandwidthUsage', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Site - site. optional.
   */
  getCurrentCpuUsage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('GetCurrentCpuUsage', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Site - site. optional.
   */
  getCurrentDiskUsage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('GetCurrentDiskUsage', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Site - site. optional.
   */
  getCurrentMemUsage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('GetCurrentMemUsage', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Site - site. optional.
   */
  getCurrentMonDatas(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('GetCurrentMonDatas', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. required.
   * @param {String} DiskId - diskId. required.
   * @param {Boolean} IsSystemDisk - systemDisk. required.
   */
  getDisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Site')) {
      throw new TypeError('parameter "Site" is required');
    }

    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    if (!hasOwnProperty(params, 'IsSystemDisk')) {
      throw new TypeError('parameter "IsSystemDisk" is required');
    }

    return this.request('GetDisk', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. required.
   * @param {String} DiskSnapshotId - diskSnapshotId. required.
   */
  getDiskSnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Site')) {
      throw new TypeError('parameter "Site" is required');
    }

    if (!hasOwnProperty(params, 'DiskSnapshotId')) {
      throw new TypeError('parameter "DiskSnapshotId" is required');
    }

    return this.request('GetDiskSnapshot', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   */
  getDiskSnapshots(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Site')) {
      throw new TypeError('parameter "Site" is required');
    }

    return this.request('GetDiskSnapshots', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   */
  getDisks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Site')) {
      throw new TypeError('parameter "Site" is required');
    }

    return this.request('GetDisks', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Domain - domain. required.
   * @param {String} Site - site. optional.
   */
  getDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('GetDomain', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Domain - domain. required.
   * @param {String} Site - site. optional.
   */
  getDomainBeianStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('GetDomainBeianStatus', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Domain - domain. required.
   * @param {String} Site - site. optional.
   */
  getDomainDnsRecords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('GetDomainDnsRecords', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Domain - domain. required.
   */
  getDomainRecordStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('GetDomainRecordStatus', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Domain - domain. required.
   * @param {String} Site - site. optional.
   */
  getDomainResolveStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('GetDomainResolveStatus', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {String} Site - site. optional.
   */
  getDomains(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('GetDomains', params, options);
  }

  /**
   * @param {String} ServerUid - serverUid. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. optional.
   */
  getFirewallRuleTotal(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('GetFirewallRuleTotal', params, options);
  }

  /**
   * @param {String} ServerUid - serverUid. required.
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. optional.
   * @param {String} Lang - lang. optional.
   */
  getFirewallRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetFirewallRules', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Site - site. optional.
   */
  getFlowDatas(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('GetFlowDatas', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Site - site. optional.
   */
  getIOPSDatas(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('GetIOPSDatas', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Site - site. optional.
   */
  getMemDatas(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('GetMemDatas', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Site - site. optional.
   */
  getNetworkDatas(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('GetNetworkDatas', params, options);
  }

  /**
   * @param {String} ServerUid - serverUid. required.
   * @param {String} RegionId - regionId. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {String} Site - site. optional.
   */
  getOperationLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('GetOperationLogs', params, options);
  }

  /**
   * @param {String} ServerUid - serverUid. required.
   * @param {String} RegionId - regionId. optional.
   */
  getServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('GetServer', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} PublicIp - publicIp. required.
   * @param {String} Site - site. optional.
   */
  getServerByIpForAbc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PublicIp')) {
      throw new TypeError('parameter "PublicIp" is required');
    }

    return this.request('GetServerByIpForAbc', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Site - site. optional.
   */
  getServerDomainsSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('GetServerDomainsSetting', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Site - site. optional.
   */
  getServerExpireTime(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('GetServerExpireTime', params, options);
  }

  /**
   * @param {String} ServerUid - serverUid. required.
   * @param {String} RegionId - regionId. optional.
   */
  getServerForAbc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('GetServerForAbc', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Site - site. optional.
   */
  getServerInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('GetServerInstance', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Site - site. optional.
   */
  getServerKeyPairInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('GetServerKeyPairInfo', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Site - site. optional.
   */
  getServerPasswordsSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('GetServerPasswordsSetting', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. required.
   * @param {String} ServerSnapshotId - serverSnapshotId. required.
   */
  getServerSnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Site')) {
      throw new TypeError('parameter "Site" is required');
    }

    if (!hasOwnProperty(params, 'ServerSnapshotId')) {
      throw new TypeError('parameter "ServerSnapshotId" is required');
    }

    return this.request('GetServerSnapshot', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   */
  getServerSnapshots(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Site')) {
      throw new TypeError('parameter "Site" is required');
    }

    return this.request('GetServerSnapshots', params, options);
  }

  /**
   * @param {String} ServerUid - serverUid. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. optional.
   */
  getServerStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('GetServerStatus', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {String} Status - status. required.
   * @param {String} Site - site. optional.
   */
  getServerStatusAndAction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('GetServerStatusAndAction', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} PublicIp - publicIp. required.
   * @param {String} Site - site. optional.
   */
  getServerUserId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PublicIp')) {
      throw new TypeError('parameter "PublicIp" is required');
    }

    return this.request('GetServerUserId', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} PublicIp - publicIp. required.
   * @param {String} Site - site. optional.
   */
  getServerUserIdOverall(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PublicIp')) {
      throw new TypeError('parameter "PublicIp" is required');
    }

    return this.request('GetServerUserIdOverall', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Site - site. optional.
   */
  getServerVncUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('GetServerVncUrl', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Site - site. optional.
   */
  getServerWebSshToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('GetServerWebSshToken', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   */
  getServerWebSshTokenTest(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('GetServerWebSshTokenTest', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  getServers(params = {}, options = {}) {
    return this.request('GetServers', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} UserId - userId. required.
   */
  getServersForAbc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('GetServersForAbc', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  getSite(params = {}, options = {}) {
    return this.request('GetSite', params, options);
  }

  /**
   * @param {String} ServerUid - serverUid. optional.
   * @param {String} SnapshotUid - snapshotUid. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. optional.
   */
  getSnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SnapshotUid')) {
      throw new TypeError('parameter "SnapshotUid" is required');
    }

    return this.request('GetSnapshot', params, options);
  }

  /**
   * @param {String} ServerUid - serverUid. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. optional.
   */
  getSnapshots(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('GetSnapshots', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. optional.
   * @param {String} Site - site. optional.
   * @param {String} Lang - lang. optional.
   */
  getSystemImages(params = {}, options = {}) {
    return this.request('GetSystemImages', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} UserId - userId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Site - site. optional.
   */
  getVerifiableInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetVerifiableInstance', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} UserId - userId. required.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} Site - site. optional.
   */
  getVerifiableInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetVerifiableInstances', params, options);
  }

  /**
   * @param {String} ServerUid - serverUid. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. optional.
   */
  isServerAppImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('IsServerAppImage', params, options);
  }

  /**
   * @param {String} ServerUid - serverUid. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. optional.
   */
  isServerCustomizedImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('IsServerCustomizedImage', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} SnapshotUid - snapshotUid. required.
   * @param {String} Site - site. optional.
   */
  markSnapshotUpgrade(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'SnapshotUid')) {
      throw new TypeError('parameter "SnapshotUid" is required');
    }

    return this.request('MarkSnapshotUpgrade', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. required.
   * @param {String} DiskId - diskId. required.
   * @param {Boolean} IsSystemDisk - systemDisk. required.
   * @param {String} Remark - remark. required.
   */
  modifyDiskRemark(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Site')) {
      throw new TypeError('parameter "Site" is required');
    }

    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    if (!hasOwnProperty(params, 'IsSystemDisk')) {
      throw new TypeError('parameter "IsSystemDisk" is required');
    }

    if (!hasOwnProperty(params, 'Remark')) {
      throw new TypeError('parameter "Remark" is required');
    }

    return this.request('ModifyDiskRemark', params, options);
  }

  /**
   * @param {String} ServerUid - serverUid. required.
   * @param {String} FirewallRule - firewallRule. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. optional.
   */
  modifyFirewallRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'FirewallRule')) {
      throw new TypeError('parameter "FirewallRule" is required');
    }

    return this.request('ModifyFirewallRule', params, options);
  }

  /**
   * @param {String} ServerUid - serverUid. optional.
   * @param {String} FirewallRule - firewallRule. required.
   */
  modifyFirewallRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirewallRule')) {
      throw new TypeError('parameter "FirewallRule" is required');
    }

    return this.request('ModifyFirewallRules', params, options);
  }

  /**
   * @param {String} ServerUid - serverUid. required.
   * @param {String} ServerName - serverName. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. optional.
   */
  modifyServerName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'ServerName')) {
      throw new TypeError('parameter "ServerName" is required');
    }

    return this.request('ModifyServerName', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Password - password. required.
   * @param {String} Site - site. optional.
   */
  modifyServerPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'Password')) {
      throw new TypeError('parameter "Password" is required');
    }

    return this.request('ModifyServerPassword', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} VncPassword - vncPassword. required.
   * @param {String} Site - site. optional.
   */
  modifyServerVncPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'VncPassword')) {
      throw new TypeError('parameter "VncPassword" is required');
    }

    return this.request('ModifyServerVncPassword', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. required.
   * @param {String} SnapshotId - snapshotId. required.
   * @param {Boolean} IsSystemDiskSnapshot - systemDiskSnapshot. required.
   * @param {String} Remark - remark. required.
   */
  modifySnapShotRemark(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Site')) {
      throw new TypeError('parameter "Site" is required');
    }

    if (!hasOwnProperty(params, 'SnapshotId')) {
      throw new TypeError('parameter "SnapshotId" is required');
    }

    if (!hasOwnProperty(params, 'IsSystemDiskSnapshot')) {
      throw new TypeError('parameter "IsSystemDiskSnapshot" is required');
    }

    if (!hasOwnProperty(params, 'Remark')) {
      throw new TypeError('parameter "Remark" is required');
    }

    return this.request('ModifySnapShotRemark', params, options);
  }

  /**
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Name - name. required.
   * @param {String} SnapshotUid - snapshotUid. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. optional.
   */
  modifySnapshotName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'SnapshotUid')) {
      throw new TypeError('parameter "SnapshotUid" is required');
    }

    return this.request('ModifySnapshotName', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {String} data - data. required.
   * @param {String} Site - site. optional.
   */
  payOrderCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('PayOrderCallback', params, options);
  }

  /**
   * @param {String} UserId - userId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Site - site. optional.
   */
  punishInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('PunishInstance', params, options);
  }

  /**
   * @param {String} AppUid - appUid. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Site - site. optional.
   */
  reStartApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('ReStartApp', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {String} data - data. required.
   * @param {String} Site - site. optional.
   */
  refundOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('RefundOrder', params, options);
  }

  /**
   * @param {String} UserId - userId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Site - site. optional.
   */
  removePunishInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('RemovePunishInstance', params, options);
  }

  /**
   * @param {String} ServerUid - serverUid. required.
   * @param {String} ImageUid - imageUid. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. optional.
   */
  replaceServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'ImageUid')) {
      throw new TypeError('parameter "ImageUid" is required');
    }

    return this.request('ReplaceServer', params, options);
  }

  /**
   * @param {String} ServerUid - serverUid. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. optional.
   */
  resetServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('ResetServer', params, options);
  }

  /**
   * @param {String} ServerUid - serverUid. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. optional.
   */
  restartServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('RestartServer', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. optional.
   * @param {String} SnapshotUid - snapshotUid. required.
   * @param {String} Site - site. optional.
   * @param {Boolean} IsSystemDiskSnapshot - systemDiskSnapshot. optional.
   * @param {String} DiskId - diskId. optional.
   */
  rollbackSnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SnapshotUid')) {
      throw new TypeError('parameter "SnapshotUid" is required');
    }

    return this.request('RollbackSnapshot', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} ServerUid - serverUid. required.
   */
  serverRestart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('ServerRestart', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} ServerUid - serverUid. required.
   */
  serverStart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('ServerStart', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} ServerUid - serverUid. required.
   */
  serverStop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('ServerStop', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {String} data - data. required.
   * @param {String} Site - site. optional.
   */
  shouldDoArrearageProcess(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('ShouldDoArrearageProcess', params, options);
  }

  /**
   * @param {String} AppUid - appUid. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Site - site. optional.
   */
  startApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('StartApp', params, options);
  }

  /**
   * @param {String} ServerUid - serverUid. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. optional.
   */
  startServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('StartServer', params, options);
  }

  /**
   * @param {String} AppUid - appUid. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Site - site. optional.
   */
  stopApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('StopApp', params, options);
  }

  /**
   * @param {String} ServerUid - serverUid. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Site - site. optional.
   */
  stopServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    return this.request('StopServer', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Domain - domain. required.
   * @param {String} CertId - certId. required.
   * @param {Boolean} HttpsOn - httpsOn. required.
   * @param {String} Site - site. optional.
   */
  updateHttpsProp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'CertId')) {
      throw new TypeError('parameter "CertId" is required');
    }

    if (!hasOwnProperty(params, 'HttpsOn')) {
      throw new TypeError('parameter "HttpsOn" is required');
    }

    return this.request('UpdateHttpsProp', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerUid - serverUid. required.
   * @param {String} Name - name. required.
   * @param {String} PublicKey - publicKey. required.
   * @param {String} Site - site. optional.
   */
  uploadServerKeyPair(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerUid')) {
      throw new TypeError('parameter "ServerUid" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'PublicKey')) {
      throw new TypeError('parameter "PublicKey" is required');
    }

    return this.request('UploadServerKeyPair', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {String} data - data. required.
   * @param {String} Site - site. optional.
   */
  verifyOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('VerifyOrder', params, options);
  }

}

module.exports = Client;

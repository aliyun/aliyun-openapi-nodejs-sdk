
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-01-31';
    super(config);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MonitoringPointName - monitoringPointName. optional.
   * @param {String} ServiceAddress - serviceAddress. optional.
   * @param {Integer} Frequency - frequency. optional. default: 1.
   * @param {String} Site - site. optional. default: hz.
   * @param {String} DnsQueryType - dnsQueryType. optional. default: a.
   * @param {Long} BitSite - bitSite. optional.
   * @param {String} SpecificDnsIp - specificDnsIp. optional.
   * @param {String} TargetIp - targetIp. optional.
   * @param {String} Caller - caller. optional. default: cms.
   * @param {String} Charge - charge. optional. default: free.
   */
  addDnsMonitor(params = {}, options = {}) {
    return this.request('AddDnsMonitor', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MonitoringPointName - monitoringPointName. optional.
   * @param {String} ServiceAddress - serviceAddress. optional.
   * @param {Integer} Frequency - frequency. optional. default: 1.
   * @param {String} Site - site. optional. default: hz.
   * @param {Integer} Port - port. optional. default: 21.
   * @param {String} CheckUser - checkUser. optional.
   * @param {String} CheckPassword - checkPassword. optional.
   * @param {Long} BitSite - bitSite. optional.
   * @param {Integer} IsAnonymous - isAnonymous. optional. default: -1.
   * @param {String} Caller - caller. optional. default: cms.
   * @param {String} Charge - charge. optional. default: free.
   */
  addFtpMonitor(params = {}, options = {}) {
    return this.request('AddFtpMonitor', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MonitoringPointName - monitoringPointName. optional.
   * @param {String} ServiceAddress - serviceAddress. optional.
   * @param {Integer} Frequency - frequency. optional. default: 1.
   * @param {String} HttpQueryMethod - httpQueryMethod. optional. default: get.
   * @param {String} Site - site. optional. default: hz.
   * @param {String} MatchingRespondContent - matchingRespondContent. optional.
   * @param {Integer} MatchingMode - matchingMode. optional. default: 1.
   * @param {String} Cookies - cookies. optional.
   * @param {String} Header - header. optional.
   * @param {String} HttpUsername - HttpUsername. optional.
   * @param {String} HttpPassword - HttpPassword. optional.
   * @param {String} Postcontent - postcontent. optional.
   * @param {Long} BitSite - bitSite. optional.
   * @param {String} SpecificIp - specificIp. optional.
   * @param {String} Caller - caller. optional. default: cms.
   * @param {String} Charge - charge. optional. default: free.
   */
  addHttpMonitor(params = {}, options = {}) {
    return this.request('AddHttpMonitor', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MonitoringPointName - monitoringPointName. optional.
   * @param {String} ServiceAddress - serviceAddress. optional.
   * @param {Integer} Frequency - frequency. optional. default: 1.
   * @param {String} Site - site. optional. default: hz.
   * @param {Integer} Period - period. optional. default: 3.
   * @param {Long} BitSite - bitSite. optional.
   * @param {Integer} PacketLostThreshold - packetLostThreshold. optional. default: 75.
   * @param {String} Caller - caller. optional. default: cms.
   * @param {String} Charge - charge. optional. default: free.
   */
  addPingMonitor(params = {}, options = {}) {
    return this.request('AddPingMonitor', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MonitoringPointName - monitoringPointName. optional.
   * @param {String} ServiceAddress - serviceAddress. optional.
   * @param {Integer} Frequency - frequency. optional. default: 1.
   * @param {Integer} Port - port. optional. default: 110.
   * @param {String} Site - site. optional. default: hz.
   * @param {String} CheckUser - checkUser. optional.
   * @param {String} CheckPassword - checkPassword. optional.
   * @param {Long} BitSite - bitSite. optional.
   * @param {Integer} IsSecureChannel - isSecureChannel. optional. default: 1.
   * @param {String} Caller - caller. optional. default: cms.
   * @param {String} Charge - charge. optional. default: free.
   */
  addPop3Monitor(params = {}, options = {}) {
    return this.request('AddPop3Monitor', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MonitoringPointName - monitoringPointName. optional.
   * @param {String} ServiceAddress - serviceAddress. optional.
   * @param {Integer} Frequency - frequency. optional. default: 1.
   * @param {String} Site - site. optional. default: hz.
   * @param {Integer} Port - port. optional. default: 25.
   * @param {String} SmtpUsername - smtpUsername. optional.
   * @param {Integer} IsSecureChannel - isSecureChannel. optional. default: 0.
   * @param {Long} BitSite - bitSite. optional.
   * @param {String} SmtpPassword - SmtpPassword. optional.
   * @param {String} Sender - sender. optional.
   * @param {String} Receiver - receiver. optional.
   * @param {String} Caller - caller. optional. default: cms.
   * @param {String} Charge - charge. optional. default: free.
   */
  addSmtpMonitor(params = {}, options = {}) {
    return this.request('AddSmtpMonitor', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MonitoringPointName - monitoringPointName. optional.
   * @param {String} ServiceAddress - serviceAddress. optional.
   * @param {Integer} Frequency - frequency. optional. default: 1.
   * @param {String} Site - site. optional. default: hz.
   * @param {Integer} Port - port. optional.
   * @param {String} RequestFormat - requestFormat. optional.
   * @param {String} RequestContent - requestContent. optional.
   * @param {String} MatchingFormat - matchingFormat. optional.
   * @param {Long} BitSite - bitSite. optional.
   * @param {String} MatchingRespondContent - matchingRespondContent. optional.
   * @param {String} Caller - caller. optional. default: cms.
   * @param {String} Charge - charge. optional. default: free.
   */
  addTcpMonitor(params = {}, options = {}) {
    return this.request('AddTcpMonitor', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MonitoringPointName - monitoringPointName. optional.
   * @param {String} ServiceAddress - serviceAddress. optional.
   * @param {Integer} Frequency - frequency. optional. default: 1.
   * @param {String} Site - site. optional. default: hz.
   * @param {Integer} Port - port. optional.
   * @param {String} RequestFormat - requestFormat. optional.
   * @param {String} RequestContent - requestContent. optional.
   * @param {String} MatchingFormat - matchingFormat. optional.
   * @param {Long} BitSite - bitSite. optional.
   * @param {String} MatchingRespondContent - matchingRespondContent. optional.
   * @param {String} Caller - caller. optional. default: cms.
   * @param {String} Charge - charge. optional. default: free.
   */
  addUdpMonitor(params = {}, options = {}) {
    return this.request('AddUdpMonitor', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MonitoringPointName - monitoringPointName. optional.
   * @param {String} ServiceAddress - serviceAddress. optional.
   * @param {Integer} Frequency - frequency. optional. default: 1.
   * @param {String} HttpQueryMethod - httpQueryMethod. optional. default: get.
   * @param {String} Site - site. optional. default: hz.
   * @param {String} MatchingRespondContent - matchingRespondContent. optional.
   * @param {Integer} MatchingMode - matchingMode. optional. default: 1.
   * @param {String} Cookies - cookies. optional.
   * @param {String} Header - header. optional.
   * @param {String} HttpUsername - HttpUsername. optional.
   * @param {String} HttpPassword - HttpPassword. optional.
   * @param {String} Postcontent - postcontent. optional.
   * @param {Long} BitSite - bitSite. optional.
   * @param {String} SpecificIp - specificIp. optional.
   * @param {String} Caller - caller. optional. default: cms.
   * @param {String} Charge - charge. optional. default: free.
   */
  batchAddHttpMonitor(params = {}, options = {}) {
    return this.request('BatchAddHttpMonitor', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MonitoringPointName - monitoringPointName. optional.
   * @param {String} ServiceAddress - serviceAddress. optional.
   * @param {Integer} Frequency - frequency. optional. default: 1.
   * @param {String} Site - site. optional. default: hz.
   * @param {Integer} Period - period. optional. default: 3.
   * @param {Long} BitSite - bitSite. optional.
   * @param {Integer} PacketLostThreshold - packetLostThreshold. optional. default: 75.
   * @param {String} Caller - caller. optional. default: cms.
   * @param {String} Charge - charge. optional. default: free.
   */
  batchAddPingMonitor(params = {}, options = {}) {
    return this.request('BatchAddPingMonitor', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RuleIds - ruleIds. optional.
   */
  batchDeleteEntry(params = {}, options = {}) {
    return this.request('BatchDeleteEntry', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RuleIds - ruleIds. optional.
   */
  batchResumeEntry(params = {}, options = {}) {
    return this.request('BatchResumeEntry', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RuleIds - ruleIds. optional.
   */
  batchSuspendEntry(params = {}, options = {}) {
    return this.request('BatchSuspendEntry', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} RuleId - RuleId. optional.
   */
  deleteMonitorRule(params = {}, options = {}) {
    return this.request('DeleteMonitorRule', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Domain - domain. optional.
   */
  distinctDomainList(params = {}, options = {}) {
    return this.request('DistinctDomainList', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MonitoringPointName - monitoringPointName. optional.
   * @param {String} Uuid - uuid. optional.
   * @param {Integer} RuleId - ruleId. optional.
   */
  getMonitorInfo(params = {}, options = {}) {
    return this.request('GetMonitorInfo', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MonitoringPointName - monitoringPointName. optional.
   * @param {String} UserName - userName. optional.
   * @param {String} Uuid - uuid. optional.
   * @param {String} ServiceAddress - serviceAddress. optional.
   * @param {Integer} Frequency - frequency. optional.
   * @param {Integer} Status - Status. optional.
   * @param {Integer} Page - Page. optional. default: 1.
   * @param {Integer} PageLimit - PageLimit. optional. default: 10.
   * @param {Long} BitSite - bitSite. optional.
   * @param {String} MonitorType - MonitorType. optional.
   * @param {String} Caller - caller. optional.
   * @param {String} Charge - charge. optional.
   */
  innerListMonitors(params = {}, options = {}) {
    return this.request('InnerListMonitors', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   */
  innerListUsersByCount(params = {}, options = {}) {
    return this.request('InnerListUsersByCount', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   */
  intervalList(params = {}, options = {}) {
    return this.request('IntervalList', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MonitoringPointName - MonitoringPointName. optional.
   * @param {Integer} Status - Status. optional.
   * @param {Integer} Page - Page. optional. default: 1.
   * @param {Integer} PageLimit - PageLimit. optional. default: 10.
   * @param {String} MonitorType - MonitorType. optional.
   * @param {String} Domain - domain. optional.
   * @param {String} Caller - caller. optional.
   * @param {String} Charge - charge. optional.
   */
  listMonitoringPointLikeSort(params = {}, options = {}) {
    return this.request('ListMonitoringPointLikeSort', params, options);
  }

  /**
   */
  listUsersByCount(params = {}, options = {}) {
    return this.request('ListUsersByCount', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} RuleId - RuleId. optional.
   */
  resumeMonitorRule(params = {}, options = {}) {
    return this.request('ResumeMonitorRule', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   */
  siteList(params = {}, options = {}) {
    return this.request('SiteList', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} RuleId - RuleId. optional.
   */
  suspendMonitorRule(params = {}, options = {}) {
    return this.request('SuspendMonitorRule', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} RuleId - ruleId. optional.
   * @param {String} MonitoringPointName - monitoringPointName. optional. default: null.
   * @param {Integer} Frequency - frequency. optional.
   * @param {String} Site - site. optional. default: null.
   * @param {String} DnsQueryType - dnsQueryType. optional. default: null.
   * @param {Long} BitSite - bitSite. optional.
   * @param {String} SpecificDnsIp - specificDnsIp. optional. default: null.
   * @param {String} TargetIp - targetIp. optional. default: null.
   * @param {String} Caller - caller. optional.
   * @param {String} Charge - charge. optional.
   */
  updateDnsMonitor(params = {}, options = {}) {
    return this.request('UpdateDnsMonitor', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} RuleId - ruleId. optional.
   * @param {String} MonitoringPointName - monitoringPointName. optional. default: null.
   * @param {Integer} Frequency - frequency. optional.
   * @param {String} Site - site. optional. default: null.
   * @param {Integer} Port - port. optional.
   * @param {String} CheckUser - checkUser. optional. default: null.
   * @param {String} CheckPassword - checkPassword. optional. default: null.
   * @param {Long} BitSite - bitSite. optional.
   * @param {Integer} IsAnonymous - isAnonymous. optional.
   * @param {String} Caller - caller. optional.
   * @param {String} Charge - charge. optional.
   */
  updateFtpMonitor(params = {}, options = {}) {
    return this.request('UpdateFtpMonitor', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} RuleId - ruleId. optional.
   * @param {String} MonitoringPointName - monitoringPointName. optional. default: null.
   * @param {Integer} Frequency - frequency. optional.
   * @param {String} HttpQueryMethod - httpQueryMethod. optional. default: null.
   * @param {String} Site - site. optional. default: null.
   * @param {String} MatchingRespondContent - matchingRespondContent. optional. default: null.
   * @param {Integer} MatchingMode - matchingMode. optional.
   * @param {String} Cookies - cookies. optional. default: null.
   * @param {String} Header - header. optional. default: null.
   * @param {String} HttpUsername - HttpUsername. optional. default: null.
   * @param {String} HttpPassword - HttpPassword. optional. default: null.
   * @param {String} Postcontent - postcontent. optional. default: null.
   * @param {Long} BitSite - bitSite. optional.
   * @param {String} SpecificIp - specificIp. optional. default: null.
   * @param {String} Caller - caller. optional.
   * @param {String} Charge - charge. optional.
   */
  updateHttpMonitor(params = {}, options = {}) {
    return this.request('UpdateHttpMonitor', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} RuleId - ruleId. optional.
   * @param {String} MonitoringPointName - monitoringPointName. optional. default: null.
   * @param {Integer} Frequency - frequency. optional.
   * @param {String} Site - site. optional. default: null.
   * @param {Integer} Period - period. optional.
   * @param {Long} BitSite - bitSite. optional.
   * @param {Integer} PacketLostThreshold - packetLostThreshold. optional.
   * @param {String} Caller - caller. optional.
   * @param {String} Charge - charge. optional.
   */
  updatePingMonitor(params = {}, options = {}) {
    return this.request('UpdatePingMonitor', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} RuleId - ruleId. optional.
   * @param {String} MonitoringPointName - monitoringPointName. optional. default: null.
   * @param {Integer} Frequency - frequency. optional.
   * @param {Integer} Port - port. optional.
   * @param {String} Site - site. optional. default: null.
   * @param {String} CheckUser - checkUser. optional. default: null.
   * @param {String} CheckPassword - checkPassword. optional. default: null.
   * @param {Long} BitSite - bitSite. optional.
   * @param {Integer} IsSecureChannel - isSecureChannel. optional.
   * @param {String} Caller - caller. optional.
   * @param {String} Charge - charge. optional.
   */
  updatePop3Monitor(params = {}, options = {}) {
    return this.request('UpdatePop3Monitor', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} RuleId - ruleId. optional.
   * @param {String} MonitoringPointName - monitoringPointName. optional. default: null.
   * @param {Integer} Frequency - frequency. optional.
   * @param {String} Site - site. optional. default: null.
   * @param {Integer} Port - port. optional.
   * @param {String} SmtpUsername - smtpUsername. optional. default: null.
   * @param {String} SmtpPassword - SmtpPassword. optional. default: null.
   * @param {Integer} IsSecureChannel - isSecureChannel. optional.
   * @param {Long} BitSite - bitSite. optional.
   * @param {String} Sender - sender. optional.
   * @param {String} Receiver - receiver. optional.
   * @param {String} Caller - caller. optional.
   * @param {String} Charge - charge. optional.
   */
  updateSmtpMonitor(params = {}, options = {}) {
    return this.request('UpdateSmtpMonitor', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} RuleId - ruleId. optional.
   * @param {String} MonitoringPointName - monitoringPointName. optional. default: null.
   * @param {Integer} Frequency - frequency. optional.
   * @param {String} Site - site. optional. default: null.
   * @param {Integer} Port - port. optional.
   * @param {String} RequestFormat - requestFormat. optional. default: null.
   * @param {String} RequestContent - requestContent. optional. default: null.
   * @param {String} MatchingFormat - matchingFormat. optional. default: null.
   * @param {Long} BitSite - bitSite. optional.
   * @param {String} MatchingRespondContent - matchingRespondContent. optional. default: null.
   * @param {String} Caller - caller. optional.
   * @param {String} Charge - charge. optional.
   */
  updateTcpMonitor(params = {}, options = {}) {
    return this.request('UpdateTcpMonitor', params, options);
  }

  /**
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} RuleId - ruleId. optional.
   * @param {String} MonitoringPointName - monitoringPointName. optional. default: null.
   * @param {Integer} Frequency - frequency. optional.
   * @param {String} Site - site. optional. default: null.
   * @param {Integer} Port - port. optional.
   * @param {String} RequestFormat - requestFormat. optional. default: null.
   * @param {String} RequestContent - requestContent. optional. default: null.
   * @param {String} MatchingFormat - matchingFormat. optional. default: null.
   * @param {Long} BitSite - bitSite. optional.
   * @param {String} MatchingRespondContent - matchingRespondContent. optional. default: null.
   * @param {String} Caller - caller. optional.
   * @param {String} Charge - charge. optional.
   */
  updateUdpMonitor(params = {}, options = {}) {
    return this.request('UpdateUdpMonitor', params, options);
  }

}

module.exports = Client;

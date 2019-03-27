
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-03-05';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {RepeatList} Numbers - rmiArg.numbers. required.
   */
  addNumbers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Numbers')) {
      throw new TypeError('parameter "Numbers" is required');
    }

    return this.request('AddNumbers', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} EsnBizId - queries.ServiceId. required.
   */
  cleanFlexAccFwdRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EsnBizId')) {
      throw new TypeError('parameter "EsnBizId" is required');
    }

    return this.request('CleanFlexAccFwdRules', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} EsnBizId - queries.esnBizId. required.
   */
  cleanFlexFwdRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EsnBizId')) {
      throw new TypeError('parameter "EsnBizId" is required');
    }

    return this.request('CleanFlexFwdRules', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   */
  clearCcRouteRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('ClearCcRouteRules', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AppName - appName. required.
   */
  createApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('CreateApp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} AppId - appId. required.
   */
  createAppKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('CreateAppKey', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} AppName - appName. optional.
   * @param {String} BizName - bizName. required.
   * @param {Integer} BizType - type. optional.
   * @param {Integer} UseCc - useCc. required.
   * @param {Integer} CcQps - ccQps. optional.
   * @param {String} L4Rules - l4Rules. optional.
   * @param {String} Groups - groups. optional.
   */
  createBiz(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizName')) {
      throw new TypeError('parameter "BizName" is required');
    }

    if (!hasOwnProperty(params, 'UseCc')) {
      throw new TypeError('parameter "UseCc" is required');
    }

    return this.request('CreateBiz', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {String} RouteList - list. required.
   */
  createCcRouteRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'RouteList')) {
      throw new TypeError('parameter "RouteList" is required');
    }

    return this.request('CreateCcRouteRules', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} BizId - bizId. required.
   * @param {String} Identity - identity. required.
   * @param {String} IpList - ipList. required.
   * @param {String} ProtocolEx - protocol. required.
   * @param {String} DomainList - domainList. required.
   * @param {String} Remark - remark. optional.
   */
  createFlexAccFwdRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'Identity')) {
      throw new TypeError('parameter "Identity" is required');
    }

    if (!hasOwnProperty(params, 'IpList')) {
      throw new TypeError('parameter "IpList" is required');
    }

    if (!hasOwnProperty(params, 'ProtocolEx')) {
      throw new TypeError('parameter "ProtocolEx" is required');
    }

    if (!hasOwnProperty(params, 'DomainList')) {
      throw new TypeError('parameter "DomainList" is required');
    }

    return this.request('CreateFlexAccFwdRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} BizId - bizId. required.
   * @param {String} FwdRuleList - fwdRuleList. required.
   */
  createFlexAccFwdRuleList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'FwdRuleList')) {
      throw new TypeError('parameter "FwdRuleList" is required');
    }

    return this.request('CreateFlexAccFwdRuleList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {String} Identity - identity. required.
   * @param {String} MasterIpList - masterIpList. required.
   * @param {String} SlaveIpList - slaveIpList. required.
   * @param {String} Remark - remark. optional.
   */
  createFlexFwdRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'Identity')) {
      throw new TypeError('parameter "Identity" is required');
    }

    if (!hasOwnProperty(params, 'MasterIpList')) {
      throw new TypeError('parameter "MasterIpList" is required');
    }

    if (!hasOwnProperty(params, 'SlaveIpList')) {
      throw new TypeError('parameter "SlaveIpList" is required');
    }

    return this.request('CreateFlexFwdRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} GroupDesc - groupDesc. required.
   * @param {String} IpList - ips. required.
   */
  createGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'GroupDesc')) {
      throw new TypeError('parameter "GroupDesc" is required');
    }

    if (!hasOwnProperty(params, 'IpList')) {
      throw new TypeError('parameter "IpList" is required');
    }

    return this.request('CreateGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} AppId - appId. required.
   * @param {Long} BizId - bizId. required.
   * @param {Integer} FrontPort - frontPort. required.
   * @param {Integer} BackPort - backPort. required.
   * @param {String} Rservers - rservers. required.
   */
  createLayer4Rule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'FrontPort')) {
      throw new TypeError('parameter "FrontPort" is required');
    }

    if (!hasOwnProperty(params, 'BackPort')) {
      throw new TypeError('parameter "BackPort" is required');
    }

    if (!hasOwnProperty(params, 'Rservers')) {
      throw new TypeError('parameter "Rservers" is required');
    }

    return this.request('CreateLayer4Rule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {String} Rules - rules. required.
   * @param {Integer} Flush - flush. optional.
   */
  createLayer4Rules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'Rules')) {
      throw new TypeError('parameter "Rules" is required');
    }

    return this.request('CreateLayer4Rules', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} AppId - appId. required.
   */
  deleteApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DeleteApp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} AppId - appId. required.
   */
  deleteAppKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DeleteAppKey', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   */
  deleteBiz(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('DeleteBiz', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {String} RouteIdList - list. required.
   */
  deleteCcRouteRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'RouteIdList')) {
      throw new TypeError('parameter "RouteIdList" is required');
    }

    return this.request('DeleteCcRouteRules', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} EsnBizId - queries.ServiceId. required.
   * @param {String} Identity - queries.Identity. required.
   */
  deleteFlexAccFwdRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EsnBizId')) {
      throw new TypeError('parameter "EsnBizId" is required');
    }

    if (!hasOwnProperty(params, 'Identity')) {
      throw new TypeError('parameter "Identity" is required');
    }

    return this.request('DeleteFlexAccFwdRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} EsnBizId - queries.esnBizId. required.
   * @param {String} Identity - queries.identity. required.
   */
  deleteFlexFwdRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EsnBizId')) {
      throw new TypeError('parameter "EsnBizId" is required');
    }

    if (!hasOwnProperty(params, 'Identity')) {
      throw new TypeError('parameter "Identity" is required');
    }

    return this.request('DeleteFlexFwdRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {String} GroupId - groupId. required.
   */
  deleteGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DeleteGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {Integer} FrontPort - frontPort. required.
   */
  deleteLayer4Rule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'FrontPort')) {
      throw new TypeError('parameter "FrontPort" is required');
    }

    return this.request('DeleteLayer4Rule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeAllLocalIps(params = {}, options = {}) {
    return this.request('DescribeAllLocalIps', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} AppName - appName. optional.
   */
  describeAppList(params = {}, options = {}) {
    return this.request('DescribeAppList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeAppSimpleList(params = {}, options = {}) {
    return this.request('DescribeAppSimpleList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. optional.
   */
  describeAsyncOperation(params = {}, options = {}) {
    return this.request('DescribeAsyncOperation', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeBgpResSummary(params = {}, options = {}) {
    return this.request('DescribeBgpResSummary', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} AppId - appId. optional.
   * @param {Long} BizId - bizId. optional.
   * @param {String} BizName - bizName. optional.
   */
  describeBizList(params = {}, options = {}) {
    return this.request('DescribeBizList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} AppId - appId. required.
   */
  describeBizSimpleList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DescribeBizSimpleList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {String} GroupId - groupId. required.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   */
  describeBpsFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'BeginTime')) {
      throw new TypeError('parameter "BeginTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeBpsFlow', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   */
  describeCcBlackList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('DescribeCcBlackList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeCcDevieIpList(params = {}, options = {}) {
    return this.request('DescribeCcDevieIpList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Long} Interval - interval. optional.
   * @param {String} ApiVersion - apiVersion. optional.
   */
  describeCcFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'BeginTime')) {
      throw new TypeError('parameter "BeginTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeCcFlow', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   */
  describeCcIDCBlockSwitch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('DescribeCcIDCBlockSwitch', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Source - source. optional.
   * @param {Integer} DestPort - destPort. optional.
   * @param {Integer} Page - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeCcMaxFw(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'BeginTime')) {
      throw new TypeError('parameter "BeginTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeCcMaxFw', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeCcResSummary(params = {}, options = {}) {
    return this.request('DescribeCcResSummary', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {String} RouteComment - queryComment. optional.
   * @param {String} RouteId - queryId. optional.
   * @param {String} RouteIp - queryIp. optional.
   */
  describeCcRouteRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('DescribeCcRouteRules', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   */
  describeCcRouteSwitch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('DescribeCcRouteSwitch', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Long} Interval - interval. required.
   */
  describeCcSocketDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'BeginTime')) {
      throw new TypeError('parameter "BeginTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    return this.request('DescribeCcSocketDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Source - source. optional.
   * @param {Integer} Page - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  describeCcTotalFw(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'BeginTime')) {
      throw new TypeError('parameter "BeginTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeCcTotalFw', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} BizId - bizId. required.
   */
  describeCcTunnel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('DescribeCcTunnel', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   */
  describeCcWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('DescribeCcWhiteList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   */
  describeCcZoneBlockConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('DescribeCcZoneBlockConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   */
  describeCcZones(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('DescribeCcZones', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} AppId - appId. required.
   * @param {String} AppKeyVersion - ver. required.
   */
  describeDownloadUrlsForAppKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppKeyVersion')) {
      throw new TypeError('parameter "AppKeyVersion" is required');
    }

    return this.request('DescribeDownloadUrlsForAppKey', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} AppId - appId. required.
   * @param {String} SdkVersion - sdkVersion. required.
   */
  describeDownloadUrlsForSDK(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'SdkVersion')) {
      throw new TypeError('parameter "SdkVersion" is required');
    }

    return this.request('DescribeDownloadUrlsForSDK', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} EsnBizId - queries.ServiceId. required.
   */
  describeFlexAccConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EsnBizId')) {
      throw new TypeError('parameter "EsnBizId" is required');
    }

    return this.request('DescribeFlexAccConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} BizId - bizId. required.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Long} Interval - interval. optional.
   * @param {String} ApiVersion - apiVersion. optional.
   */
  describeFlexAccFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'BeginTime')) {
      throw new TypeError('parameter "BeginTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeFlexAccFlow', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} EsnBizId - queries.ServiceId. required.
   * @param {String} Keyword - queries.Keyword. optional.
   * @param {Integer} Page - queries.Page. required.
   * @param {Integer} PageSize - queries.PageSize. required.
   */
  describeFlexAccFwdRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EsnBizId')) {
      throw new TypeError('parameter "EsnBizId" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeFlexAccFwdRules', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {String} GroupId - groupId. required.
   */
  describeFlexBackupGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DescribeFlexBackupGroups', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} EsnBizId - queries.esnBizId. required.
   */
  describeFlexConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EsnBizId')) {
      throw new TypeError('parameter "EsnBizId" is required');
    }

    return this.request('DescribeFlexConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} EsnBizId - queries.esnBizId. required.
   * @param {String} Keyword - queries.keyword. optional.
   * @param {Integer} Page - queries.page. required.
   * @param {Integer} PageSize - queries.pageSize. required.
   */
  describeFlexFwdRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EsnBizId')) {
      throw new TypeError('parameter "EsnBizId" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeFlexFwdRules', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} EsnBizId - queries.esnBizId. required.
   * @param {String} GroupId - queries.groupId. required.
   */
  describeFlexSechedPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EsnBizId')) {
      throw new TypeError('parameter "EsnBizId" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DescribeFlexSechedPolicy', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {Integer} InUse - inUse. optional.
   */
  describeFullNodes(params = {}, options = {}) {
    return this.request('DescribeFullNodes', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeFullNodesSummary(params = {}, options = {}) {
    return this.request('DescribeFullNodesSummary', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeGfResSummary(params = {}, options = {}) {
    return this.request('DescribeGfResSummary', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   */
  describeGroupList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('DescribeGroupList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   */
  describeGroupSimpleList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('DescribeGroupSimpleList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeInstance(params = {}, options = {}) {
    return this.request('DescribeInstance', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Ip - queries.Ip. required.
   * @param {Long} EndTime - queries.endTime. required.
   * @param {Long} FPort - queries.fport. optional.
   * @param {Long} Interval - queries.interval. required.
   * @param {Long} ProtocolEx - queries.protocol. optional.
   * @param {Long} StartTime - queries.startTime. required.
   */
  describeIpFlowReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    return this.request('DescribeIpFlowReport', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.start_time. required.
   * @param {String} EndTime - queries.end_time. required.
   */
  describeJianYuTestGet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeJianYuTestGet', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.start_time. required.
   * @param {String} EndTime - queries.end_time. required.
   */
  describeJianYuTestList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeJianYuTestList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.start_time. required.
   * @param {String} EndTime - queries.end_time. required.
   * @param {String} Page - context.page. required.
   * @param {String} PageSize - context.pageSize. required.
   */
  describeJianYuTestPagination(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeJianYuTestPagination', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Page - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} EsnAppId - esnAppId. optional.
   * @param {String} EsnBizId - esnBizId. optional.
   * @param {String} GroupId - groupId. optional.
   */
  describeL4EventsSelective(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BeginTime')) {
      throw new TypeError('parameter "BeginTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeL4EventsSelective', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   */
  describeLayer4Rules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('DescribeLayer4Rules', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeMianLiuResSummary(params = {}, options = {}) {
    return this.request('DescribeMianLiuResSummary', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Page - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} AppId - AppId. optional.
   * @param {String} BizId - BizId. optional.
   * @param {String} Source - source. optional.
   * @param {String} SourcePort - sourcePort. optional.
   * @param {String} DetectPort - detectPort. optional.
   * @param {String} DetectIp - detectIp. optional.
   */
  describeNgSourceDiagnosisLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeNgSourceDiagnosisLog', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeRemainQps(params = {}, options = {}) {
    return this.request('DescribeRemainQps', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} EsnApp - queries.appid. required.
   * @param {String} EsnBiz - queries.esnbizid. required.
   * @param {Long} StartTime - queries.start_timestamp. required.
   * @param {Long} EndTime - queries.end_timestamp. required.
   * @param {Integer} Interval - queries.interval. required.
   * @param {String} Province - queries.province. optional.
   * @param {String} Country - queries.country. optional.
   * @param {Integer} Page - context.page. required.
   * @param {Integer} PageSize - context.pageSize. required.
   */
  describeRequestStatisticByEsnBizInterval(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EsnApp')) {
      throw new TypeError('parameter "EsnApp" is required');
    }

    if (!hasOwnProperty(params, 'EsnBiz')) {
      throw new TypeError('parameter "EsnBiz" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeRequestStatisticByEsnBizInterval', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} EsnApp - queries.appid. required.
   * @param {String} EsnBiz - queries.esnbizid. required.
   * @param {Long} StartTime - queries.start_timestamp. required.
   * @param {Long} EndTime - queries.end_timestamp. required.
   */
  describeRequestStatisticCountByEsnBiz1Day(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EsnApp')) {
      throw new TypeError('parameter "EsnApp" is required');
    }

    if (!hasOwnProperty(params, 'EsnBiz')) {
      throw new TypeError('parameter "EsnBiz" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeRequestStatisticCountByEsnBiz1Day', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} EsnApp - queries.appid. required.
   * @param {String} EsnBiz - queries.esnbizid. required.
   * @param {Long} StartTime - queries.start_timestamp. required.
   * @param {Long} EndTime - queries.end_timestamp. required.
   * @param {Integer} Page - context.page. required.
   * @param {Integer} PageSize - context.pageSize. required.
   */
  describeRequestStatisticCountByEsnBiz1DayProvince(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EsnApp')) {
      throw new TypeError('parameter "EsnApp" is required');
    }

    if (!hasOwnProperty(params, 'EsnBiz')) {
      throw new TypeError('parameter "EsnBiz" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeRequestStatisticCountByEsnBiz1DayProvince', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} EsnApp - queries.appid. required.
   * @param {String} EsnBiz - queries.esnbizid. required.
   * @param {Long} Time - queries.time. required.
   * @param {Integer} Page - context.page. required.
   * @param {Integer} PageSize - context.pageSize. required.
   */
  describeRequestStatisticCountByEsnBiz1M30M(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EsnApp')) {
      throw new TypeError('parameter "EsnApp" is required');
    }

    if (!hasOwnProperty(params, 'EsnBiz')) {
      throw new TypeError('parameter "EsnBiz" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeRequestStatisticCountByEsnBiz1M30M', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} EsnApp - queries.appid. required.
   * @param {String} EsnBiz - queries.esnbizid. required.
   * @param {Long} Time - queries.time. required.
   */
  describeRequestStatisticCountByEsnBiz30M(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EsnApp')) {
      throw new TypeError('parameter "EsnApp" is required');
    }

    if (!hasOwnProperty(params, 'EsnBiz')) {
      throw new TypeError('parameter "EsnBiz" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    return this.request('DescribeRequestStatisticCountByEsnBiz30M', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} EsnApp - queries.appid. required.
   * @param {String} EsnBiz - queries.esnbizid. required.
   * @param {Long} Time - queries.time. required.
   * @param {Integer} Page - context.page. required.
   * @param {Integer} PageSize - context.pageSize. required.
   */
  describeRequestStatisticCountByEsnBizGroup30M(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EsnApp')) {
      throw new TypeError('parameter "EsnApp" is required');
    }

    if (!hasOwnProperty(params, 'EsnBiz')) {
      throw new TypeError('parameter "EsnBiz" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeRequestStatisticCountByEsnBizGroup30M', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Page - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} EsnApp - esnAppId. optional.
   * @param {String} EsnBiz - esnBizId. optional.
   * @param {String} EsnGroup - esnGroupId. optional.
   * @param {String} Source - source. optional.
   * @param {String} Country - countryId. optional.
   * @param {String} Province - provinceId. optional.
   * @param {String} City - cityId. optional.
   * @param {String} ISP - ispId. optional.
   * @param {String} Token - token. optional.
   * @param {String} SDK - sdkVersion. optional.
   * @param {String} CallResult - callResult. optional.
   * @param {String} OsType - osType. optional.
   * @param {Long} EscapedLessThan - escapedLessThan. optional.
   * @param {Long} EscapedGreaterThan - escapedGreaterThan. optional.
   * @param {String} DetectIp - detectIp. optional.
   */
  describeRequestStatisticLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeRequestStatisticLog', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Page - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} EsnApp - esnAppId. optional.
   * @param {String} EsnBiz - esnBizId. optional.
   * @param {String} EsnGroup - esnGroupId. optional.
   * @param {String} Source - source. optional.
   * @param {String} Country - countryId. optional.
   * @param {String} Province - provinceId. optional.
   * @param {String} City - cityId. optional.
   * @param {String} ISP - ispId. optional.
   * @param {String} Token - token. optional.
   * @param {String} Result - callResult. optional.
   * @param {String} OsType - osType. optional.
   * @param {String} DetectIp - detectIp. optional.
   */
  describeSDKStatisticLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeSDKStatisticLog', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} EsnApp - queries.appid. required.
   * @param {String} EsnBiz - queries.esnbizid. required.
   * @param {Long} Time - queries.time. required.
   * @param {Integer} Page - context.page. required.
   * @param {Integer} PageSize - context.pageSize. required.
   * @param {String} Type - queries.type. required.
   */
  describeSDKStatisticResultByEsnBizISP1M30M(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EsnApp')) {
      throw new TypeError('parameter "EsnApp" is required');
    }

    if (!hasOwnProperty(params, 'EsnBiz')) {
      throw new TypeError('parameter "EsnBiz" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('DescribeSDKStatisticResultByEsnBizISP1M30M', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} EsnApp - queries.appid. required.
   * @param {String} EsnBiz - queries.esnbizid. required.
   * @param {Long} StartTime - queries.start_timestamp. required.
   * @param {Long} EndTime - queries.end_timestamp. required.
   * @param {Integer} Page - context.page. required.
   * @param {Integer} PageSize - context.pageSize. required.
   * @param {String} Type - queries.type. required.
   * @param {Long} Interval - queries.interval. required.
   * @param {String} Province - queries.province. optional.
   */
  describeSDKStatisticResultByEsnBizISPInterval(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EsnApp')) {
      throw new TypeError('parameter "EsnApp" is required');
    }

    if (!hasOwnProperty(params, 'EsnBiz')) {
      throw new TypeError('parameter "EsnBiz" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    return this.request('DescribeSDKStatisticResultByEsnBizISPInterval', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} EsnApp - queries.appid. required.
   * @param {String} EsnBiz - queries.esnbizid. required.
   * @param {Long} StartTime - queries.start_timestamp. required.
   * @param {Long} EndTime - queries.end_timestamp. required.
   * @param {Integer} Page - context.page. required.
   * @param {Integer} PageSize - context.pageSize. required.
   * @param {String} Type - queries.type. required.
   */
  describeSDKStatisticResultByEsnBizProvince1Day(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EsnApp')) {
      throw new TypeError('parameter "EsnApp" is required');
    }

    if (!hasOwnProperty(params, 'EsnBiz')) {
      throw new TypeError('parameter "EsnBiz" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('DescribeSDKStatisticResultByEsnBizProvince1Day', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} EsnApp - queries.appid. required.
   * @param {String} EsnBiz - queries.esnbizid. required.
   * @param {Long} Time - queries.time. required.
   * @param {Integer} Page - context.page. required.
   * @param {Integer} PageSize - context.pageSize. required.
   * @param {String} Type - queries.type. required.
   */
  describeSDKStatisticResultByEsnBizProvince30M(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EsnApp')) {
      throw new TypeError('parameter "EsnApp" is required');
    }

    if (!hasOwnProperty(params, 'EsnBiz')) {
      throw new TypeError('parameter "EsnBiz" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('DescribeSDKStatisticResultByEsnBizProvince30M', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ProjectName - rmiArg.projectName. required.
   */
  describeSpiContent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('DescribeSpiContent', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ProjectName - rmiArg.projectName. required.
   */
  describeSpiVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('DescribeSpiVersion', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeUploadPreSign(params = {}, options = {}) {
    return this.request('DescribeUploadPreSign', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeUserFlowInfo(params = {}, options = {}) {
    return this.request('DescribeUserFlowInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} EndTime - queries.endTime. required.
   * @param {Long} Interval - queries.interval. required.
   * @param {Long} StartTime - queries.startTime. required.
   * @param {String} EsnGroupId - queries.GroupId. optional.
   * @param {Long} EsnBizId - queries.ServiceId. optional.
   * @param {String} EsnAppId - queries.AppId. optional.
   */
  describeUserFlowReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    return this.request('DescribeUserFlowReport', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} EndTime - queries.endTime. required.
   * @param {Long} Interval - queries.interval. required.
   * @param {Long} StartTime - queries.startTime. required.
   */
  describeUserTotalFlowReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    return this.request('DescribeUserTotalFlowReport', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} AppId - appId. required.
   * @param {String} Platform - platform. required.
   * @param {String} KeyVersion - ver. required.
   */
  downloadAppKeyFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'Platform')) {
      throw new TypeError('parameter "Platform" is required');
    }

    if (!hasOwnProperty(params, 'KeyVersion')) {
      throw new TypeError('parameter "KeyVersion" is required');
    }

    return this.request('DownloadAppKeyFile', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   */
  downloadCcRouteRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('DownloadCcRouteRules', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} BizId - bizId. required.
   */
  downloadFlexAccRulesFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('DownloadFlexAccRulesFile', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   */
  downloadLayer4Rules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('DownloadLayer4Rules', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} AppId - appId. required.
   * @param {String} SdkVersion - sdkVersion. required.
   * @param {String} Platform - platform. required.
   */
  downloadSdkFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'SdkVersion')) {
      throw new TypeError('parameter "SdkVersion" is required');
    }

    if (!hasOwnProperty(params, 'Platform')) {
      throw new TypeError('parameter "Platform" is required');
    }

    return this.request('DownloadSdkFile', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Interval - interval. required.
   */
  downloadUserTotalFlowReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    return this.request('DownloadUserTotalFlowReport', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   */
  flushLayer4Rules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('FlushLayer4Rules', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {RepeatList} Array - rmiArg.stringList. required.
   * @param {String} Delimiter - rmiArg.delimiter. required.
   */
  joinStrings(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Array')) {
      throw new TypeError('parameter "Array" is required');
    }

    if (!hasOwnProperty(params, 'Delimiter')) {
      throw new TypeError('parameter "Delimiter" is required');
    }

    return this.request('JoinStrings', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} BizId - bizId. required.
   * @param {Integer} CcQps - ccQps. required.
   */
  reallocNgResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'CcQps')) {
      throw new TypeError('parameter "CcQps" is required');
    }

    return this.request('ReallocNgResource', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {String} RouteList - list. required.
   */
  replaceCcRouteRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'RouteList')) {
      throw new TypeError('parameter "RouteList" is required');
    }

    return this.request('ReplaceCcRouteRules', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} EsnBizId - queries.esnBizId. required.
   * @param {String} Keyword - queries.keyword. optional.
   * @param {Integer} Page - queries.page. required.
   * @param {Integer} PageSize - queries.pageSize. required.
   */
  searchFlexFwdRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EsnBizId')) {
      throw new TypeError('parameter "EsnBizId" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('SearchFlexFwdRules', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AppName - appName. required.
   * @param {Long} AppId - appId. required.
   */
  updateApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('UpdateApp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {String} Ips - ips. required.
   * @param {String} ActionType - action. required.
   */
  updateCcBlackList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'Ips')) {
      throw new TypeError('parameter "Ips" is required');
    }

    if (!hasOwnProperty(params, 'ActionType')) {
      throw new TypeError('parameter "ActionType" is required');
    }

    return this.request('UpdateCcBlackList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {Integer} Enable - enable. required.
   */
  updateCcIDCBlockSwitch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'Enable')) {
      throw new TypeError('parameter "Enable" is required');
    }

    return this.request('UpdateCcIDCBlockSwitch', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {String} Routelist - list. required.
   */
  updateCcRouteRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'Routelist')) {
      throw new TypeError('parameter "Routelist" is required');
    }

    return this.request('UpdateCcRouteRules', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {Integer} Enable - enable. required.
   */
  updateCcRouteSwitch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'Enable')) {
      throw new TypeError('parameter "Enable" is required');
    }

    return this.request('UpdateCcRouteSwitch', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} BizId - bizId. required.
   * @param {Integer} OnlyAllow - onlyAllow. required.
   * @param {Integer} Gray - gray. required.
   */
  updateCcTunnelGrayAndOnlyAllow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'OnlyAllow')) {
      throw new TypeError('parameter "OnlyAllow" is required');
    }

    if (!hasOwnProperty(params, 'Gray')) {
      throw new TypeError('parameter "Gray" is required');
    }

    return this.request('UpdateCcTunnelGrayAndOnlyAllow', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} BizId - bizId. required.
   * @param {String} Status - status. required.
   */
  updateCcTunnelStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('UpdateCcTunnelStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {String} ActionType - action. required.
   * @param {Integer} CcQps - ccQps. optional.
   */
  updateCcUse(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'ActionType')) {
      throw new TypeError('parameter "ActionType" is required');
    }

    return this.request('UpdateCcUse', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {String} Ips - ips. required.
   * @param {String} ActionType - action. required.
   */
  updateCcWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'Ips')) {
      throw new TypeError('parameter "Ips" is required');
    }

    if (!hasOwnProperty(params, 'ActionType')) {
      throw new TypeError('parameter "ActionType" is required');
    }

    return this.request('UpdateCcWhiteList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {String} Config - config. required.
   */
  updateCcZoneBlockConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'Config')) {
      throw new TypeError('parameter "Config" is required');
    }

    return this.request('UpdateCcZoneBlockConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {Integer} Enable - enable. required.
   */
  updateCcZoneBlockStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'Enable')) {
      throw new TypeError('parameter "Enable" is required');
    }

    return this.request('UpdateCcZoneBlockStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} EsnBizId - queries.ServiceId. required.
   * @param {String} Identity - queries.Identity. required.
   * @param {String} ProtocolEx - queries.Protocol. required.
   * @param {String} IpList - queries.Ips. optional.
   * @param {String} DomainList - queries.Domains. optional.
   * @param {String} Remark - queries.Remark. optional.
   */
  updateFlexAccFwdRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EsnBizId')) {
      throw new TypeError('parameter "EsnBizId" is required');
    }

    if (!hasOwnProperty(params, 'Identity')) {
      throw new TypeError('parameter "Identity" is required');
    }

    if (!hasOwnProperty(params, 'ProtocolEx')) {
      throw new TypeError('parameter "ProtocolEx" is required');
    }

    return this.request('UpdateFlexAccFwdRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} BizId - bizId. required.
   * @param {String} Status - status. required.
   */
  updateFlexAccStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('UpdateFlexAccStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} EsnBizId - queries.ServiceId. required.
   * @param {String} Ports - queries.Ports. required.
   */
  updateFlexAccTcpPorts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EsnBizId')) {
      throw new TypeError('parameter "EsnBizId" is required');
    }

    if (!hasOwnProperty(params, 'Ports')) {
      throw new TypeError('parameter "Ports" is required');
    }

    return this.request('UpdateFlexAccTcpPorts', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} EsnBizId - queries.ServiceId. required.
   * @param {String} Ports - queries.Ports. required.
   */
  updateFlexAccUdpPorts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EsnBizId')) {
      throw new TypeError('parameter "EsnBizId" is required');
    }

    if (!hasOwnProperty(params, 'Ports')) {
      throw new TypeError('parameter "Ports" is required');
    }

    return this.request('UpdateFlexAccUdpPorts', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} EsnBizId - queries.esnBizId. required.
   * @param {String} GroupId - queries.groupId. required.
   * @param {Integer} BackupGroupPolicy - queries.backupGroupPolicy. required.
   * @param {String} Backups - queries.backups. optional.
   * @param {String} SharedBackups - queries.sharedBackups. optional.
   */
  updateFlexBackupGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EsnBizId')) {
      throw new TypeError('parameter "EsnBizId" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'BackupGroupPolicy')) {
      throw new TypeError('parameter "BackupGroupPolicy" is required');
    }

    return this.request('UpdateFlexBackupGroups', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {String} Identity - identity. required.
   * @param {String} MasterIpList - masterIpList. required.
   * @param {String} SlaveIpList - slaveIpList. required.
   * @param {String} Remark - remark. optional.
   */
  updateFlexFwdRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'Identity')) {
      throw new TypeError('parameter "Identity" is required');
    }

    if (!hasOwnProperty(params, 'MasterIpList')) {
      throw new TypeError('parameter "MasterIpList" is required');
    }

    if (!hasOwnProperty(params, 'SlaveIpList')) {
      throw new TypeError('parameter "SlaveIpList" is required');
    }

    return this.request('UpdateFlexFwdRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} EsnBizId - queries.esnBizId. required.
   * @param {String} GroupId - queries.groupId. required.
   * @param {Integer} GroupInnerPolicy - queries.groupInnerPolicy. required.
   */
  updateFlexInnerPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EsnBizId')) {
      throw new TypeError('parameter "EsnBizId" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'GroupInnerPolicy')) {
      throw new TypeError('parameter "GroupInnerPolicy" is required');
    }

    return this.request('UpdateFlexInnerPolicy', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} EsnBizId - queries.esnBizId. required.
   * @param {Integer} LinkType - queries.linkType. required.
   */
  updateFlexLinkType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EsnBizId')) {
      throw new TypeError('parameter "EsnBizId" is required');
    }

    if (!hasOwnProperty(params, 'LinkType')) {
      throw new TypeError('parameter "LinkType" is required');
    }

    return this.request('UpdateFlexLinkType', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} EsnBizId - queries.esnBizId. required.
   * @param {String} Ports - queries.ports. required.
   */
  updateFlexPorts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EsnBizId')) {
      throw new TypeError('parameter "EsnBizId" is required');
    }

    if (!hasOwnProperty(params, 'Ports')) {
      throw new TypeError('parameter "Ports" is required');
    }

    return this.request('UpdateFlexPorts', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {String} Status - status. required.
   */
  updateFlexStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('UpdateFlexStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} GroupDesc - groupDesc. required.
   */
  updateGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'GroupDesc')) {
      throw new TypeError('parameter "GroupDesc" is required');
    }

    return this.request('UpdateGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} Status - status. required.
   */
  updateGroupDnsStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('UpdateGroupDnsStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} IpList - ips. required.
   */
  updateGroupNodes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'IpList')) {
      throw new TypeError('parameter "IpList" is required');
    }

    return this.request('UpdateGroupNodes', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} Status - status. required.
   */
  updateGroupStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('UpdateGroupStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {Integer} FrontPort - frontPort. required.
   * @param {String} Rservers - rservers. required.
   */
  updateLayer4Rule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'FrontPort')) {
      throw new TypeError('parameter "FrontPort" is required');
    }

    if (!hasOwnProperty(params, 'Rservers')) {
      throw new TypeError('parameter "Rservers" is required');
    }

    return this.request('UpdateLayer4Rule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} FileKey - fileKey. required.
   */
  uploadCcRouteFileForParse(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileKey')) {
      throw new TypeError('parameter "FileKey" is required');
    }

    return this.request('UploadCcRouteFileForParse', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} BizId - bizId. required.
   * @param {String} BWList - ips. required.
   */
  uploadCcWhiteBlackList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'BWList')) {
      throw new TypeError('parameter "BWList" is required');
    }

    return this.request('UploadCcWhiteBlackList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} FileKey - fileKey. required.
   */
  uploadFlexAccRulesFileForParse(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileKey')) {
      throw new TypeError('parameter "FileKey" is required');
    }

    return this.request('UploadFlexAccRulesFileForParse', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} FileKey - fileKey. required.
   */
  uploadL4RulesFileForParse(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileKey')) {
      throw new TypeError('parameter "FileKey" is required');
    }

    return this.request('UploadL4RulesFileForParse', params, options);
  }

}

module.exports = Client;


'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-07-26';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UploadFileName - uploadFileName. required.
   */
  commitDomainFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UploadFileName')) {
      throw new TypeError('parameter "UploadFileName" is required');
    }

    return this.request('CommitDomainFile', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UploadFileName - uploadFileName. required.
   */
  commitPortDdosFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UploadFileName')) {
      throw new TypeError('parameter "UploadFileName" is required');
    }

    return this.request('CommitPortDdosFile', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UploadFileName - uploadFileName. required.
   */
  commitPortFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UploadFileName')) {
      throw new TypeError('parameter "UploadFileName" is required');
    }

    return this.request('CommitPortFile', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UploadFileName - uploadFileName. required.
   */
  commitPortHealthFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UploadFileName')) {
      throw new TypeError('parameter "UploadFileName" is required');
    }

    return this.request('CommitPortHealthFile', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} Id - id. required.
   * @param {String} Ip - ip. required.
   */
  configDDoSFlowPack(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('ConfigDDoSFlowPack', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. required.
   * @param {RepeatList} Config - priorityConfigList. required.
   */
  configSwitchPriority(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Config')) {
      throw new TypeError('parameter "Config" is required');
    }

    return this.request('ConfigSwitchPriority', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Vip - vip. required.
   * @param {String} BlockZone - blockZone. required.
   * @param {Integer} BlockTime - blockTime. required.
   */
  createBlockhole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Vip')) {
      throw new TypeError('parameter "Vip" is required');
    }

    if (!hasOwnProperty(params, 'BlockZone')) {
      throw new TypeError('parameter "BlockZone" is required');
    }

    if (!hasOwnProperty(params, 'BlockTime')) {
      throw new TypeError('parameter "BlockTime" is required');
    }

    return this.request('CreateBlockhole', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} MatchingRule - mode. optional.
   * @param {String} Domain - domain. required.
   * @param {Integer} VisitCount - count. optional.
   * @param {String} Name - name. optional.
   * @param {String} BlockingType - action. optional.
   * @param {Integer} Interval - interval. optional.
   * @param {Integer} BlockingTime - ttl. optional.
   * @param {String} Uri - uri. optional.
   */
  createCcCustomedRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CreateCcCustomedRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. required.
   * @param {String} Ip - vip. optional.
   * @param {String} Type - clientType. required.
   * @param {Boolean} CcEnable - ccEnable. optional.
   * @param {RepeatList} RealServer - realServers. required.
   * @param {RepeatList} ProxyType - proxyType. required.
   * @param {RepeatList} Ips - vips. optional.
   */
  createDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'RealServer')) {
      throw new TypeError('parameter "RealServer" is required');
    }

    if (!hasOwnProperty(params, 'ProxyType')) {
      throw new TypeError('parameter "ProxyType" is required');
    }

    return this.request('CreateDomain', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Type - clientType. optional.
   * @param {String} Domain - domain. optional.
   * @param {RepeatList} Ips - vips. optional.
   * @param {RepeatList} RealServers - realServers. optional.
   */
  createTransmitLine(params = {}, options = {}) {
    return this.request('CreateTransmitLine', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   */
  createWebLogDownloadTask(params = {}, options = {}) {
    return this.request('CreateWebLogDownloadTask', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Vip - vip. required.
   */
  deleteBlackHole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Vip')) {
      throw new TypeError('parameter "Vip" is required');
    }

    return this.request('DeleteBlackHole', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Vip - vip. required.
   */
  deleteBlockhole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Vip')) {
      throw new TypeError('parameter "Vip" is required');
    }

    return this.request('DeleteBlockhole', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. required.
   * @param {String} Name - name. required.
   */
  deleteCcCustomedRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('DeleteCcCustomedRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} Id - id. required.
   */
  deleteDDoSFlowPackIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteDDoSFlowPackIp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Domain - domain. required.
   */
  deleteDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('DeleteDomain', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Line - line. optional.
   * @param {String} Domain - domain. optional.
   */
  deleteTransmitLine(params = {}, options = {}) {
    return this.request('DeleteTransmitLine', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Line - line. optional.
   * @param {String} Region - region. optional.
   */
  describeBackSourceCidr(params = {}, options = {}) {
    return this.request('DescribeBackSourceCidr', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Ip - vip. required.
   */
  describeBizFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('DescribeBizFlow', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Ip - vip. required.
   * @param {String} QueryType - queryType. required.
   */
  describeBizReportDownloadUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'QueryType')) {
      throw new TypeError('parameter "QueryType" is required');
    }

    return this.request('DescribeBizReportDownloadUrl', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} Vips - vips. required.
   */
  describeCcMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Vips')) {
      throw new TypeError('parameter "Vips" is required');
    }

    return this.request('DescribeCcMode', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} Id - id. optional.
   * @param {Integer} Status - status. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  describeDDoSFlowPackList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeDDoSFlowPackList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} Vips - vips. required.
   */
  describeDdosStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Vips')) {
      throw new TypeError('parameter "Vips" is required');
    }

    return this.request('DescribeDdosStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Domain - domain. optional.
   */
  describeDomainBlackWhiteList(params = {}, options = {}) {
    return this.request('DescribeDomainBlackWhiteList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. required.
   */
  describeDomainConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('DescribeDomainConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageNo - page. required.
   */
  describeDomainConfigPage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    return this.request('DescribeDomainConfigPage', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeDomainList(params = {}, options = {}) {
    return this.request('DescribeDomainList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. optional.
   */
  describeDomainSecurityConfig(params = {}, options = {}) {
    return this.request('DescribeDomainSecurityConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. required.
   */
  describeDomainSlsStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('DescribeDomainSlsStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} Vips - vips. required.
   */
  describeFlowBlockholeStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Vips')) {
      throw new TypeError('parameter "Vips" is required');
    }

    return this.request('DescribeFlowBlockholeStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} Line - line. optional.
   * @param {RepeatList} InstanceIdList - instanceIds. optional.
   * @param {RepeatList} IpList - vips. optional.
   */
  describeInstancePage(params = {}, options = {}) {
    return this.request('DescribeInstancePage', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ResourceId - resourceId. optional.
   * @param {Integer} Result - result. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  describeOplog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeOplog', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeSlsAuthStatus(params = {}, options = {}) {
    return this.request('DescribeSlsAuthStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeSlsServiceStatus(params = {}, options = {}) {
    return this.request('DescribeSlsServiceStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  describeSupportQRCodeByInstanceId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeSupportQRCodeByInstanceId', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  describeUnBlackholeCount(params = {}, options = {}) {
    return this.request('DescribeUnBlackholeCount', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  describeUnBlockholeCount(params = {}, options = {}) {
    return this.request('DescribeUnBlockholeCount', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UploadType - uploadType. required.
   */
  describeUploadPreSign(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UploadType')) {
      throw new TypeError('parameter "UploadType" is required');
    }

    return this.request('DescribeUploadPreSign', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} TaskId - taskId. optional.
   */
  describeWebLogDownloadFilePage(params = {}, options = {}) {
    return this.request('DescribeWebLogDownloadFilePage', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   */
  describeWebLogPage(params = {}, options = {}) {
    return this.request('DescribeWebLogPage', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - page. optional.
   */
  listCcCustomedRule(params = {}, options = {}) {
    return this.request('ListCcCustomedRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. required.
   * @param {Boolean} Enable - customRuleEnabled. required.
   */
  modifyCcCustomStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Enable')) {
      throw new TypeError('parameter "Enable" is required');
    }

    return this.request('ModifyCcCustomStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Vip - vip. required.
   * @param {String} CcMode - mode. required.
   */
  modifyCcMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Vip')) {
      throw new TypeError('parameter "Vip" is required');
    }

    if (!hasOwnProperty(params, 'CcMode')) {
      throw new TypeError('parameter "CcMode" is required');
    }

    return this.request('ModifyCcMode', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. required.
   * @param {Boolean} Enable - ccEnabled. required.
   */
  modifyCcStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Enable')) {
      throw new TypeError('parameter "Enable" is required');
    }

    return this.request('ModifyCcStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. optional.
   * @param {Integer} Mode - templateId. optional.
   */
  modifyCcTemplate(params = {}, options = {}) {
    return this.request('ModifyCcTemplate', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. required.
   * @param {RepeatList} Black - blacks. optional.
   * @param {RepeatList} White - whites. optional.
   */
  modifyDomainBlackWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('ModifyDomainBlackWhiteList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Domain - domain. optional.
   * @param {Boolean} Enable - cnameEnable. optional.
   */
  modifyDomainCnameStatus(params = {}, options = {}) {
    return this.request('ModifyDomainCnameStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Domain - domain. required.
   * @param {RepeatList} ProxyType - proxyType. required.
   */
  modifyDomainProxy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'ProxyType')) {
      throw new TypeError('parameter "ProxyType" is required');
    }

    return this.request('ModifyDomainProxy', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. required.
   * @param {Boolean} SwitchStatus - open. required.
   */
  modifyDomainSlsStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'SwitchStatus')) {
      throw new TypeError('parameter "SwitchStatus" is required');
    }

    return this.request('ModifyDomainSlsStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} ElasticBandwidth - elasticBandwidthMbps. required.
   * @param {String} Ip - vip. required.
   */
  modifyElasticBandwidth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ElasticBandwidth')) {
      throw new TypeError('parameter "ElasticBandwidth" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('ModifyElasticBandwidth', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. optional.
   * @param {String} Ip - vip. optional.
   * @param {Boolean} Enable - cnameEnable. optional.
   */
  modifyIpCnameStatus(params = {}, options = {}) {
    return this.request('ModifyIpCnameStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Type - clientType. optional.
   * @param {String} Domain - domain. optional.
   * @param {String} Line - line. optional.
   * @param {RepeatList} RealServers - realServers. optional.
   */
  modifyRealServers(params = {}, options = {}) {
    return this.request('ModifyRealServers', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. optional.
   * @param {String} Mode - switchMode. optional.
   */
  modifySwitchMode(params = {}, options = {}) {
    return this.request('ModifySwitchMode', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. optional.
   * @param {RepeatList} Ips - vips. optional.
   */
  modifyTransmitLine(params = {}, options = {}) {
    return this.request('ModifyTransmitLine', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} MatchingRule - mode. optional.
   * @param {String} Domain - domain. required.
   * @param {Integer} VisitCount - count. optional.
   * @param {String} Name - name. required.
   * @param {String} BlockingType - action. optional.
   * @param {Integer} Interval - interval. optional.
   * @param {Integer} BlockingTime - ttl. optional.
   * @param {String} Uri - uri. optional.
   */
  updateCcCustomedRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('UpdateCcCustomedRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Mobile - mobile. required.
   */
  updateSupportContact(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Mobile')) {
      throw new TypeError('parameter "Mobile" is required');
    }

    return this.request('UpdateSupportContact', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Domain - domain. required.
   * @param {String} Cert - cert. required.
   * @param {String} Key - key. required.
   * @param {Long} CertId - certId. optional.
   * @param {String} CertName - certName. optional.
   */
  uploadCertificate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Cert')) {
      throw new TypeError('parameter "Cert" is required');
    }

    if (!hasOwnProperty(params, 'Key')) {
      throw new TypeError('parameter "Key" is required');
    }

    return this.request('UploadCertificate', params, options);
  }

}

module.exports = Client;


'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-07-25';
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
   * @param {String} Lang - lang. optional.
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
   * @param {String} MatchingRule - mode. required.
   * @param {String} Domain - domain. required.
   * @param {Integer} VisitCount - count. required.
   * @param {String} Name - name. required.
   * @param {String} BlockingType - action. required.
   * @param {Integer} Interval - interval. required.
   * @param {Integer} BlockingTime - ttl. required.
   * @param {String} Uri - uri. required.
   */
  createCcCustomedRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MatchingRule')) {
      throw new TypeError('parameter "MatchingRule" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'VisitCount')) {
      throw new TypeError('parameter "VisitCount" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'BlockingType')) {
      throw new TypeError('parameter "BlockingType" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    if (!hasOwnProperty(params, 'BlockingTime')) {
      throw new TypeError('parameter "BlockingTime" is required');
    }

    if (!hasOwnProperty(params, 'Uri')) {
      throw new TypeError('parameter "Uri" is required');
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
   * @param {Integer} FrontPort - frontPort. optional.
   * @param {Integer} BackPort - backPort. optional.
   * @param {String} ProxyType - protocol. optional.
   * @param {String} RealServerList - realServerList. optional.
   * @param {String} Ip - vip. optional.
   */
  createPortRule(params = {}, options = {}) {
    return this.request('CreatePortRule', params, options);
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
   * @param {String} Lang - lang. optional.
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
   * @param {String} Lang - lang. optional.
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
   * @param {String} Lang - lang. optional.
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
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Domain - domain. required.
   * @param {String} Ip - vip. required.
   */
  deleteDomainTransmitRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('DeleteDomainTransmitRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} FrontPort - frontPort. required.
   * @param {String} Ip - vip. required.
   */
  deletePortRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FrontPort')) {
      throw new TypeError('parameter "FrontPort" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('DeletePortRule', params, options);
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
   * @param {String} Lang - lang. optional.
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
   * @param {String} Lang - lang. optional.
   * @param {Long} StartTime - startTimeStamp. optional.
   * @param {String} Domain - domain. optional.
   * @param {Long} EndTime - endTimeStamp. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - currentPage. optional.
   */
  describeCcEvents(params = {}, options = {}) {
    return this.request('DescribeCcEvents', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {RepeatList} Vips - vips. required.
   */
  describeCcMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Vips')) {
      throw new TypeError('parameter "Vips" is required');
    }

    return this.request('DescribeCcMode', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Domain - domain. required.
   */
  describeCnameAutoStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('DescribeCnameAutoStatus', params, options);
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
   * @param {String} Lang - lang. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Ip - vip. required.
   * @param {Integer} CurrentPage - currentPage. required.
   */
  describeDdosAttackEventSourceIps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('DescribeDdosAttackEventSourceIps', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Ip - vip. required.
   * @param {Integer} CurrentPage - currentPage. required.
   */
  describeDdosAttackEvents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('DescribeDdosAttackEvents', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Ip - vip. required.
   */
  describeDdosAttackTypeChart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('DescribeDdosAttackTypeChart', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Ip - vip. required.
   */
  describeDdosFlowProportionDiagram(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('DescribeDdosFlowProportionDiagram', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {RepeatList} Ips - vips. optional.
   * @param {Integer} Index - index. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  describeDdosIpConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Index')) {
      throw new TypeError('parameter "Index" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeDdosIpConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {String} Ip - vip. required.
   */
  describeDdosPeakFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('DescribeDdosPeakFlow', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
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
   * @param {String} Lang - lang. optional.
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
   * @param {String} Domain - domain. required.
   * @param {Long} StartDateMillis - startDateMillis. required.
   * @param {Long} EndDateMillis - endDateMillis. required.
   * @param {String} InstanceId - instanceId. required.
   */
  describeDomainQps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'StartDateMillis')) {
      throw new TypeError('parameter "StartDateMillis" is required');
    }

    if (!hasOwnProperty(params, 'EndDateMillis')) {
      throw new TypeError('parameter "EndDateMillis" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeDomainQps', params, options);
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
   * @param {String} Lang - lang. optional.
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
   * @param {String} Ip - eip. required.
   */
  describeHealthCheckConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('DescribeHealthCheckConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {RepeatList} InstanceIdList - instanceIds. optional.
   * @param {RepeatList} IpList - vips. optional.
   */
  describeInstanceList(params = {}, options = {}) {
    return this.request('DescribeInstanceList', params, options);
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
   * @param {Long} StartDateMillis - startDateMillis. required.
   * @param {Long} EndDateMillis - endDateMillis. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} Start - start. required.
   * @param {String} Ip - ip. required.
   */
  describeIpAttackEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartDateMillis')) {
      throw new TypeError('parameter "StartDateMillis" is required');
    }

    if (!hasOwnProperty(params, 'EndDateMillis')) {
      throw new TypeError('parameter "EndDateMillis" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'Start')) {
      throw new TypeError('parameter "Start" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('DescribeIpAttackEvent', params, options);
  }

  /**
   * @param {Long} AliUid - aliUid. required.
   * @param {Long} StartDateMillis - startDateMillis. required.
   * @param {Long} EndDateMillis - endDateMillis. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} Start - start. required.
   * @param {String} Ip - ip. required.
   */
  describeIpProtectEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'StartDateMillis')) {
      throw new TypeError('parameter "StartDateMillis" is required');
    }

    if (!hasOwnProperty(params, 'EndDateMillis')) {
      throw new TypeError('parameter "EndDateMillis" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'Start')) {
      throw new TypeError('parameter "Start" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('DescribeIpProtectEvent', params, options);
  }

  /**
   * @param {String} Ip - ip. required.
   * @param {Long} StartDateMillis - startDateMillis. required.
   * @param {Long} EndDateMillis - endDateMillis. required.
   */
  describeIpTraffic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'StartDateMillis')) {
      throw new TypeError('parameter "StartDateMillis" is required');
    }

    if (!hasOwnProperty(params, 'EndDateMillis')) {
      throw new TypeError('parameter "EndDateMillis" is required');
    }

    return this.request('DescribeIpTraffic', params, options);
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
   * @param {String} Ip - ip. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} PageNo - page. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  describePortReportAttackEvents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribePortReportAttackEvents', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Ip - ip. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Integer} Top - limit. required.
   * @param {String} QueryType - queryType. optional.
   */
  describePortReportAttackEventsTopIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'Top')) {
      throw new TypeError('parameter "Top" is required');
    }

    return this.request('DescribePortReportAttackEventsTopIp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Ip - ip. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Interval - interval. optional.
   */
  describePortReportAttackOverview(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribePortReportAttackOverview', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Ip - ip. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Port - port. optional.
   * @param {Integer} Interval - interval. optional.
   */
  describePortReportConnsCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribePortReportConnsCount', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Ip - ip. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Long} Interval - interval. required.
   * @param {String} Port - port. optional.
   */
  describePortReportConnsGraph(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    return this.request('DescribePortReportConnsGraph', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Ip - ip. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   */
  describePortReportCountryRequest(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribePortReportCountryRequest', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Ip - ip. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Long} Interval - interval. required.
   */
  describePortReportFlowCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    return this.request('DescribePortReportFlowCount', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Ip - ip. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Long} Interval - interval. required.
   */
  describePortReportFlowGraph(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    return this.request('DescribePortReportFlowGraph', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Ip - ip. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Long} Interval - interval. required.
   * @param {String} Port - port. optional.
   */
  describePortReportFlowGraphByPort(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    return this.request('DescribePortReportFlowGraphByPort', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Ip - ip. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Interval - interval. optional.
   */
  describePortReportIpFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribePortReportIpFlow', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Ip - ip. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Interval - interval. required.
   */
  describePortReportPortFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    return this.request('DescribePortReportPortFlow', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Ip - ip. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   */
  describePortReportProvinceRequest(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribePortReportProvinceRequest', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Ip - ip. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Top - limit. required.
   * @param {Integer} Interval - interval. optional.
   */
  describePortReportTopAttackIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Top')) {
      throw new TypeError('parameter "Top" is required');
    }

    return this.request('DescribePortReportTopAttackIp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} Ip - vip. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   */
  describePortRulePage(params = {}, options = {}) {
    return this.request('DescribePortRulePage', params, options);
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
   * @param {String} Lang - lang. optional.
   */
  describeUnBlackholeCount(params = {}, options = {}) {
    return this.request('DescribeUnBlackholeCount', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
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
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Long} TaskId - taskId. optional.
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
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Interval - interval. optional.
   */
  describeWebReportAttackOverview(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeWebReportAttackOverview', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} QueryType - queryType. required.
   * @param {Integer} Interval - interval. optional.
   */
  describeWebReportBrowserCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'QueryType')) {
      throw new TypeError('parameter "QueryType" is required');
    }

    return this.request('DescribeWebReportBrowserCount', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} QueryType - queryType. required.
   * @param {Integer} Interval - interval. optional.
   */
  describeWebReportCountryRequest(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'QueryType')) {
      throw new TypeError('parameter "QueryType" is required');
    }

    return this.request('DescribeWebReportCountryRequest', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Interval - interval. optional.
   */
  describeWebReportDomainRequestList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeWebReportDomainRequestList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} QueryType - queryType. required.
   * @param {Integer} Interval - interval. optional.
   */
  describeWebReportIspCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'QueryType')) {
      throw new TypeError('parameter "QueryType" is required');
    }

    return this.request('DescribeWebReportIspCount', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} QueryType - queryType. required.
   * @param {Integer} Interval - interval. optional.
   */
  describeWebReportProvinceRequest(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'QueryType')) {
      throw new TypeError('parameter "QueryType" is required');
    }

    return this.request('DescribeWebReportProvinceRequest', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Interval - interval. required.
   */
  describeWebReportRequestCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    return this.request('DescribeWebReportRequestCount', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Interval - interval. optional.
   */
  describeWebReportRequestMax(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeWebReportRequestMax', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} QueryType - queryType. required.
   * @param {Integer} Interval - interval. optional.
   */
  describeWebReportStatusCodeCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'QueryType')) {
      throw new TypeError('parameter "QueryType" is required');
    }

    return this.request('DescribeWebReportStatusCodeCount', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Interval - interval. required.
   * @param {String} QueryType - queryType. required.
   */
  describeWebReportStatusCodeList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    if (!hasOwnProperty(params, 'QueryType')) {
      throw new TypeError('parameter "QueryType" is required');
    }

    return this.request('DescribeWebReportStatusCodeList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Top - limit. required.
   * @param {Integer} Interval - interval. optional.
   */
  describeWebReportTopDelayUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Top')) {
      throw new TypeError('parameter "Top" is required');
    }

    return this.request('DescribeWebReportTopDelayUrl', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} QueryType - queryType. required.
   * @param {Integer} Top - limit. required.
   * @param {Integer} Interval - interval. optional.
   */
  describeWebReportTopIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'QueryType')) {
      throw new TypeError('parameter "QueryType" is required');
    }

    if (!hasOwnProperty(params, 'Top')) {
      throw new TypeError('parameter "Top" is required');
    }

    return this.request('DescribeWebReportTopIp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Interval - interval. optional.
   * @param {Integer} Top - limit. required.
   */
  describeWebReportTopUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Top')) {
      throw new TypeError('parameter "Top" is required');
    }

    return this.request('DescribeWebReportTopUrl', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Interval - interval. required.
   */
  describeWebReportUv(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    return this.request('DescribeWebReportUv', params, options);
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
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Domain - domain. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} CurrentPage - page. required.
   */
  listDomainConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('ListDomainConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Ip - eip. required.
   * @param {RepeatList} Domains - domainList. required.
   */
  migrateDomainConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'Domains')) {
      throw new TypeError('parameter "Domains" is required');
    }

    return this.request('MigrateDomainConfig', params, options);
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
   * @param {String} Lang - lang. optional.
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
   * @param {String} Domain - domain. required.
   * @param {Integer} Mode - templateId. required.
   */
  modifyCcTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Mode')) {
      throw new TypeError('parameter "Mode" is required');
    }

    return this.request('ModifyCcTemplate', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Domain - domain. required.
   * @param {Boolean} Enable - cnameAuto. required.
   */
  modifyCnameAutoStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Enable')) {
      throw new TypeError('parameter "Enable" is required');
    }

    return this.request('ModifyCnameAutoStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Ip - eip. required.
   * @param {Integer} FrontPort - frontend_port. required.
   * @param {String} ConfigJson - config. required.
   * @param {String} LbId - lb_id. optional.
   */
  modifyDDoSProtectConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'FrontPort')) {
      throw new TypeError('parameter "FrontPort" is required');
    }

    if (!hasOwnProperty(params, 'ConfigJson')) {
      throw new TypeError('parameter "ConfigJson" is required');
    }

    return this.request('ModifyDDoSProtectConfig', params, options);
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
   * @param {String} Lang - lang. optional.
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
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Domain - domain. required.
   * @param {String} Ip - vip. required.
   * @param {String} Type - clientType. required.
   * @param {RepeatList} RealServer - realServers. required.
   */
  modifyDomainTransmitRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'RealServer')) {
      throw new TypeError('parameter "RealServer" is required');
    }

    return this.request('ModifyDomainTransmitRule', params, options);
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
   * @param {String} Ip - eip. required.
   * @param {Integer} FrontPort - frontend_port. required.
   * @param {String} ConfigJson - config. required.
   * @param {String} LbId - lb_id. optional.
   */
  modifyHealthCheckConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'FrontPort')) {
      throw new TypeError('parameter "FrontPort" is required');
    }

    if (!hasOwnProperty(params, 'ConfigJson')) {
      throw new TypeError('parameter "ConfigJson" is required');
    }

    return this.request('ModifyHealthCheckConfig', params, options);
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
   * @param {String} Ip - eip. required.
   * @param {Integer} FrontPort - frontend_port. required.
   * @param {String} ConfigJson - config. required.
   * @param {String} LbId - lb_id. optional.
   */
  modifyPersistenceTimeOut(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'FrontPort')) {
      throw new TypeError('parameter "FrontPort" is required');
    }

    if (!hasOwnProperty(params, 'ConfigJson')) {
      throw new TypeError('parameter "ConfigJson" is required');
    }

    return this.request('ModifyPersistenceTimeOut', params, options);
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
   * @param {String} MatchingRule - mode. required.
   * @param {String} Domain - domain. required.
   * @param {Integer} VisitCount - count. required.
   * @param {String} Name - name. required.
   * @param {String} BlockingType - action. required.
   * @param {Integer} Interval - interval. required.
   * @param {Integer} BlockingTime - ttl. required.
   * @param {String} Uri - uri. required.
   */
  updateCcCustomedRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MatchingRule')) {
      throw new TypeError('parameter "MatchingRule" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'VisitCount')) {
      throw new TypeError('parameter "VisitCount" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'BlockingType')) {
      throw new TypeError('parameter "BlockingType" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    if (!hasOwnProperty(params, 'BlockingTime')) {
      throw new TypeError('parameter "BlockingTime" is required');
    }

    if (!hasOwnProperty(params, 'Uri')) {
      throw new TypeError('parameter "Uri" is required');
    }

    return this.request('UpdateCcCustomedRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} FrontPort - frontPort. required.
   * @param {String} RealServerList - realServerList. required.
   * @param {String} Ip - vip. required.
   */
  updatePortRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FrontPort')) {
      throw new TypeError('parameter "FrontPort" is required');
    }

    if (!hasOwnProperty(params, 'RealServerList')) {
      throw new TypeError('parameter "RealServerList" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('UpdatePortRule', params, options);
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
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. required.
   * @param {String} Cert - cert. required.
   * @param {String} CertName - certName. optional.
   * @param {String} Key - key. required.
   * @param {Long} CertId - certId. optional.
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

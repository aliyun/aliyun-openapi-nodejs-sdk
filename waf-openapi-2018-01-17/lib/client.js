
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-01-17';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} AppName - appName. required.
   * @param {String} ServiceId - serviceId. required.
   * @param {String} AsyncMethod - asyncMethod. required.
   * @param {String} Ack - ack. required.
   */
  appOpenAck(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'ServiceId')) {
      throw new TypeError('parameter "ServiceId" is required');
    }

    if (!hasOwnProperty(params, 'AsyncMethod')) {
      throw new TypeError('parameter "AsyncMethod" is required');
    }

    if (!hasOwnProperty(params, 'Ack')) {
      throw new TypeError('parameter "Ack" is required');
    }

    return this.request('AppOpenAck', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Domain - domain. required.
   * @param {String} Cert - https_cert. required.
   * @param {String} Key - pri_key. required.
   */
  checkDomainCert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Cert')) {
      throw new TypeError('parameter "Cert" is required');
    }

    if (!hasOwnProperty(params, 'Key')) {
      throw new TypeError('parameter "Key" is required');
    }

    return this.request('CheckDomainCert', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Rules - rules. required.
   * @param {String} Domain - domain. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  createAclRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Rules')) {
      throw new TypeError('parameter "Rules" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('CreateAclRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  createAuthorization(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('CreateAuthorization', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Cert - cert. required.
   * @param {String} Key - key. required.
   * @param {String} HttpsCertName - httpsCertName. required.
   */
  createCertAndKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Cert')) {
      throw new TypeError('parameter "Cert" is required');
    }

    if (!hasOwnProperty(params, 'Key')) {
      throw new TypeError('parameter "Key" is required');
    }

    if (!hasOwnProperty(params, 'HttpsCertName')) {
      throw new TypeError('parameter "HttpsCertName" is required');
    }

    return this.request('CreateCertAndKey', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Name - queries.name. required.
   * @param {String} Desc - queries.desc. optional.
   * @param {String} WafLang - queries.lang. optional.
   * @param {Long} PolicyId - queries.policyId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  createCopyRuleGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'PolicyId')) {
      throw new TypeError('parameter "PolicyId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('CreateCopyRuleGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. required.
   * @param {String} SourceIps - sourceIps. required.
   * @param {String} Protocols - protocols. required.
   * @param {String} HttpPort - httpPort. optional.
   * @param {String} HttpsPort - httpsPort. optional.
   * @param {Integer} RsType - rsType. optional. default: 0.
   * @param {Integer} IsAccessProduct - isAccessProduct. optional. default: 1.
   * @param {Integer} LoadBalancing - loadBalancing. optional. default: 0.
   * @param {Integer} HttpsRedirect - httpsRedirect. optional. default: 0.
   * @param {Integer} HttpToUserIp - httpToUserIp. optional. default: 0.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  createDomainConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'SourceIps')) {
      throw new TypeError('parameter "SourceIps" is required');
    }

    if (!hasOwnProperty(params, 'Protocols')) {
      throw new TypeError('parameter "Protocols" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('CreateDomainConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domains - queries.domainList. optional.
   * @param {String} Ids - queries.eipIdList. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  createDomainDrainage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('CreateDomainDrainage', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  createEmptyLogstore(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('CreateEmptyLogstore', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UntractedId - queries.eipId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  createIpDrainage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UntractedId')) {
      throw new TypeError('parameter "UntractedId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('CreateIpDrainage', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Host - host. required.
   * @param {String} Query - query. optional.
   * @param {String} FileType - fileType. optional. default: txt.
   * @param {String} TaskName - taskName. required.
   */
  createLogExportTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'BeginTime')) {
      throw new TypeError('parameter "BeginTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Host')) {
      throw new TypeError('parameter "Host" is required');
    }

    if (!hasOwnProperty(params, 'TaskName')) {
      throw new TypeError('parameter "TaskName" is required');
    }

    return this.request('CreateLogExportTask', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - queries.domain. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  createOutputDomainConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('CreateOutputDomainConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - queries.domain. required.
   * @param {String} Defense - queries.defense. required.
   * @param {String} Rule - queries.rule. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  createProtectionModuleRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Defense')) {
      throw new TypeError('parameter "Defense" is required');
    }

    if (!hasOwnProperty(params, 'Rule')) {
      throw new TypeError('parameter "Rule" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('CreateProtectionModuleRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Name - queries.name. required.
   * @param {String} Desc - queries.desc. optional.
   * @param {String} RuleNumbers - queries.ruleNumbers. required.
   * @param {String} WafLang - queries.lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  createRuleGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'RuleNumbers')) {
      throw new TypeError('parameter "RuleNumbers" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('CreateRuleGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  createSlsOpenOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('CreateSlsOpenOrder', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  createSlsResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('CreateSlsResource', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} RuleId - ruleId. required.
   * @param {String} Domain - domain. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  deleteAclRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DeleteAclRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  deleteDomainConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DeleteDomainConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DrainageId - queries.id. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  deleteIpDrainage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrainageId')) {
      throw new TypeError('parameter "DrainageId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DeleteIpDrainage', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} TaskIdList - taskIdList. required.
   */
  deleteLogExportTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdList')) {
      throw new TypeError('parameter "TaskIdList" is required');
    }

    return this.request('DeleteLogExportTask', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - queries.domain. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  deleteOutputDomainConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DeleteOutputDomainConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - queries.domain. required.
   * @param {String} Defense - queries.defense. required.
   * @param {Long} Id - queries.id. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  deleteProtectionModuleRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Defense')) {
      throw new TypeError('parameter "Defense" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DeleteProtectionModuleRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} PolicyId - queries.policyId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  deleteRuleGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PolicyId')) {
      throw new TypeError('parameter "PolicyId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DeleteRuleGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} StartTimeStamp - start_time_stamp. required.
   * @param {String} EndTimeStamp - end_time_stamp. required.
   */
  describeAccessAreaStatistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTimeStamp')) {
      throw new TypeError('parameter "StartTimeStamp" is required');
    }

    if (!hasOwnProperty(params, 'EndTimeStamp')) {
      throw new TypeError('parameter "EndTimeStamp" is required');
    }

    return this.request('DescribeAccessAreaStatistics', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeAccessMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeAccessMode', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} StartTimeStamp - start_time_stamp. required.
   * @param {String} EndTimeStamp - end_time_stamp. required.
   */
  describeAccessWafSourcePvStatistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTimeStamp')) {
      throw new TypeError('parameter "StartTimeStamp" is required');
    }

    if (!hasOwnProperty(params, 'EndTimeStamp')) {
      throw new TypeError('parameter "EndTimeStamp" is required');
    }

    return this.request('DescribeAccessWafSourcePvStatistics', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   * @param {String} CurrentPage - context.page. optional. default: 1.
   * @param {String} PageSize - context.pageSize. optional. default: 10.
   */
  describeAclAttackPv(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeAclAttackPv', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Domain - domain. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  describeAclRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeAclRules', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeAppsStatusList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeAppsStatusList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} WafRequestId - asyncTaskRequestId. required.
   */
  describeAsyncTaskStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'WafRequestId')) {
      throw new TypeError('parameter "WafRequestId" is required');
    }

    return this.request('DescribeAsyncTaskStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} CurrentPage - currentPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {String} Host - host. required.
   * @param {String} Query - query. optional.
   */
  describeAttackLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'BeginTime')) {
      throw new TypeError('parameter "BeginTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Host')) {
      throw new TypeError('parameter "Host" is required');
    }

    return this.request('DescribeAttackLog', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeAuthorization(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeAuthorization', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} WafLang - queries.lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeBriefRuleGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeBriefRuleGroups', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Domain - domain. required.
   */
  describeDomainConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('DescribeDomainConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Domain - domain. optional.
   */
  describeDomainConfigStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeDomainConfigStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} Domains - domains. required.
   */
  describeDomainLogEnableds(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Domains')) {
      throw new TypeError('parameter "Domains" is required');
    }

    return this.request('DescribeDomainLogEnableds', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   */
  describeDomainNames(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeDomainNames', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Domain - domain. required.
   */
  describeDomainProtocolType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('DescribeDomainProtocolType', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - queries.domain. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeDomainRuleGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeDomainRuleGroup', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} Caller - caller. required.
   * @param {String} Domain - domain. required.
   */
  describeDomainTransferConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('DescribeDomainTransferConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} Domain - domainKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} Page - currentPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeDomains(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeDomains', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} PageSize - queries.size. optional.
   * @param {Integer} CurrentPage - queries.page. optional.
   * @param {String} RegionLang - queries.lang. optional.
   * @param {String} IpKey - queries.eipKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeDrainageIps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeDrainageIps', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} Domain - domain. required.
   */
  describeHttpsCertInUse(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('DescribeHttpsCertInUse', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} SrcIp - queries.src_ip. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} Source - queries.source. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeIpRiskLabel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SrcIp')) {
      throw new TypeError('parameter "SrcIp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeIpRiskLabel', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {Integer} CurrentPage - currentPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {Long} TaskId - taskId. required.
   */
  describeLogExportFiles(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('DescribeLogExportFiles', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {Integer} CurrentPage - currentPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  describeLogExportTasks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeLogExportTasks', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} CurrentPage - currentPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {String} Host - host. required.
   * @param {String} Query - query. optional.
   */
  describeLogHistograms(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'BeginTime')) {
      throw new TypeError('parameter "BeginTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Host')) {
      throw new TypeError('parameter "Host" is required');
    }

    return this.request('DescribeLogHistograms', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeLogQuato(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeLogQuato', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} Domain - domain. required.
   * @param {String} InstanceId - instanceId. required.
   */
  describeNeedUpgradeDomainLimit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeNeedUpgradeDomainLimit', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Code - code. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} NewsLang - newsLang. required.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeNews(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Code')) {
      throw new TypeError('parameter "Code" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'NewsLang')) {
      throw new TypeError('parameter "NewsLang" is required');
    }

    return this.request('DescribeNews', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - queries.domainKey. optional.
   * @param {Integer} PageSize - queries.size. optional. default: 10.
   * @param {Integer} CurrentPage - queries.page. optional. default: 1.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeOutputDomains(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeOutputDomains', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. optional.
   */
  describePackage(params = {}, options = {}) {
    return this.request('DescribePackage', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceSource - instanceSource. optional. default: waf-cloud.
   */
  describePayInfo(params = {}, options = {}) {
    return this.request('DescribePayInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   */
  describePreDomains(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribePreDomains', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} CodeType - queries.codeType. required.
   * @param {Integer} CodeValue - queries.codeValue. optional.
   * @param {String} Lang - queries.lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeProtectionModuleCodeConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CodeType')) {
      throw new TypeError('parameter "CodeType" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeProtectionModuleCodeConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - queries.domain. required.
   * @param {String} Defense - queries.defense. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeProtectionModulePolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Defense')) {
      throw new TypeError('parameter "Defense" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeProtectionModulePolicy', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} PageSize - queries.size. optional.
   * @param {Integer} CurrentPage - queries.page. optional.
   * @param {String} Domain - queries.domain. required.
   * @param {String} Defense - queries.defense. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeProtectionModuleRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Defense')) {
      throw new TypeError('parameter "Defense" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeProtectionModuleRules', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - queries.domain. required.
   * @param {String} Defense - queries.defense. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeProtectionModuleStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Defense')) {
      throw new TypeError('parameter "Defense" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeProtectionModuleStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {RepeatList} Field - f. required.
   * @param {String} Domain - n. optional.
   * @param {Integer} Interval - x. required.
   * @param {Long} StartMillisecond - s. required.
   * @param {Long} EndMillisecond - e. required.
   */
  describeQps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Field')) {
      throw new TypeError('parameter "Field" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    if (!hasOwnProperty(params, 'StartMillisecond')) {
      throw new TypeError('parameter "StartMillisecond" is required');
    }

    if (!hasOwnProperty(params, 'EndMillisecond')) {
      throw new TypeError('parameter "EndMillisecond" is required');
    }

    return this.request('DescribeQps', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   * @param {String} TimeZone - queries.time_zone. required.
   * @param {String} Domain - queries.domain. optional.
   */
  describeQpsHourFlowChart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'EndTimestamp')) {
      throw new TypeError('parameter "EndTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'TimeZone')) {
      throw new TypeError('parameter "TimeZone" is required');
    }

    return this.request('DescribeQpsHourFlowChart', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceId - rmiArg.instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeQrCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeQrCode', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceSource - instanceSource. optional. default: waf-cloud.
   * @param {String} Region - region. optional. default: cn.
   */
  describeRegionStatus(params = {}, options = {}) {
    return this.request('DescribeRegionStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   */
  describeRegionThreshold(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeRegionThreshold', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} RuleNumber - queries.ruleNumber. required.
   * @param {String} WafLang - queries.lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleNumber')) {
      throw new TypeError('parameter "RuleNumber" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} PolicyId - queries.policyId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} WafLang - queries.lang. optional.
   * @param {String} Region - region. optional. default: cn.
   */
  describeRuleGroupRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PolicyId')) {
      throw new TypeError('parameter "PolicyId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeRuleGroupRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} PageSize - queries.size. optional.
   * @param {Integer} CurrentPage - queries.page. optional.
   * @param {String} WafLang - queries.lang. optional.
   * @param {Integer} Type - queries.type. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeRuleGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeRuleGroups', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} PageSize - queries.size. optional.
   * @param {Integer} CurrentPage - queries.page. optional.
   * @param {String} Rulekey - queries.rulekey. optional.
   * @param {Integer} AttackType - queries.attackType. optional.
   * @param {Integer} AppType - queries.appType. optional.
   * @param {Integer} Impact - queries.impact. optional.
   * @param {Long} PolicyId - queries.policyId. optional.
   * @param {String} WafLang - queries.lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeRules', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeScreenAbnormalMonitor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeScreenAbnormalMonitor', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeScreenAccessAreaPv(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeScreenAccessAreaPv', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeScreenAccessIpTop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeScreenAccessIpTop', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeScreenAccessUrlTop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeScreenAccessUrlTop', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {Integer} Range - queries.range. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeScreenAttackTopAcl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'Range')) {
      throw new TypeError('parameter "Range" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeScreenAttackTopAcl', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {Integer} Range - queries.range. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeScreenAttackTopArea(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'Range')) {
      throw new TypeError('parameter "Range" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeScreenAttackTopArea', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {Integer} Range - queries.range. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeScreenAttackTopIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'Range')) {
      throw new TypeError('parameter "Range" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeScreenAttackTopIp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {Integer} Step - queries.step. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeScreenAttackTypeChart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'Step')) {
      throw new TypeError('parameter "Step" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeScreenAttackTypeChart', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {Integer} Range - queries.range. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeScreenAttackTypes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'Range')) {
      throw new TypeError('parameter "Range" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeScreenAttackTypes', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   * @param {Integer} Step - queries.step. required.
   */
  describeScreenBandwidthGraph(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Step')) {
      throw new TypeError('parameter "Step" is required');
    }

    return this.request('DescribeScreenBandwidthGraph', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} SrcIp - queries.src_ip. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeScreenIpRiskLabel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SrcIp')) {
      throw new TypeError('parameter "SrcIp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeScreenIpRiskLabel', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeScreenMobileOsPv(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeScreenMobileOsPv', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. optional.
   */
  describeScreenPackage(params = {}, options = {}) {
    return this.request('DescribeScreenPackage', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceSource - instanceSource. optional. default: waf-cloud.
   */
  describeScreenPayInfo(params = {}, options = {}) {
    return this.request('DescribeScreenPayInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeScreenPcBrowserPv(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeScreenPcBrowserPv', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {Integer} Step - queries.step. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeScreenQpsAttackTypeChart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'Step')) {
      throw new TypeError('parameter "Step" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeScreenQpsAttackTypeChart', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeScreenQpsAttackTypeStatistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeScreenQpsAttackTypeStatistics', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeScreenRegions(params = {}, options = {}) {
    return this.request('DescribeScreenRegions', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeServiceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeServiceStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} WafRegionId - regionId. optional. default: cn-hangzhou.
   * @param {String} ServiceCode - serviceCode. optional. default: waf.
   */
  describeSlsAuthStatus(params = {}, options = {}) {
    return this.request('DescribeSlsAuthStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} WafRegionId - regionId. optional. default: cn-hangzhou.
   * @param {String} ServiceCode - serviceCode. optional. default: waf.
   */
  describeSlsAuthStatusHttpVersion(params = {}, options = {}) {
    return this.request('DescribeSlsAuthStatusHttpVersion', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} WafRegionId - regionId. optional. default: cn-hangzhou.
   * @param {String} ServiceCode - serviceCode. optional. default: waf.
   */
  describeSlsOpenStatus(params = {}, options = {}) {
    return this.request('DescribeSlsOpenStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeSlsResourceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeSlsResourceStatus', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} Domain - domain. optional.
   * @param {String} CheckRequestId - checkRequestId. optional.
   */
  describeTransferConfigInWork(params = {}, options = {}) {
    return this.request('DescribeTransferConfigInWork', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} PageSize - queries.size. optional.
   * @param {Integer} CurrentPage - queries.page. optional.
   * @param {String} RegionLang - queries.lang. optional.
   * @param {String} IpKey - queries.eipKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeUntractedIps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeUntractedIps', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeWafSourceIpSegment(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeWafSourceIpSegment', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} EventType - queries.eventType. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeWarnConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventType')) {
      throw new TypeError('parameter "EventType" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeWarnConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceId - rmiArg.instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeWarnMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeWarnMode', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Domain - domain. optional.
   * @param {String} StartTimeStamp - start_time_stamp. required.
   * @param {String} EndTimeStamp - end_time_stamp. required.
   */
  describeWebAttackCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTimeStamp')) {
      throw new TypeError('parameter "StartTimeStamp" is required');
    }

    if (!hasOwnProperty(params, 'EndTimeStamp')) {
      throw new TypeError('parameter "EndTimeStamp" is required');
    }

    return this.request('DescribeWebAttackCount', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Domain - domain. optional.
   * @param {Long} StartTime - start_time. required.
   * @param {Long} EndTime - end_time. required.
   * @param {String} AttackType - attack_type. optional.
   * @param {String} AttackerIp - attacker_ip. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} CurrentPage - currentPage. optional. default: 1.
   */
  describeWebAttackLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeWebAttackLog', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   */
  describeWebAttackType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeWebAttackType', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeWebAttackTypePv(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeWebAttackTypePv', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeWebRegionPv(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeWebRegionPv', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeWebSourceIpPv(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeWebSourceIpPv', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} Status - status. required.
   */
  modifyAccessMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('ModifyAccessMode', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. required.
   * @param {String} Rules - rules. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  modifyAclRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Rules')) {
      throw new TypeError('parameter "Rules" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyAclRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} OrderData - orderData. required.
   * @param {String} Domain - domain. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  modifyAclRulesOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderData')) {
      throw new TypeError('parameter "OrderData" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyAclRulesOrder', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} AppName - appName. optional.
   */
  modifyAppOpenStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyAppOpenStatus', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Caller - caller. required.
   * @param {String} Domain - domain. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} Cert - cert. optional.
   * @param {String} Key - key. optional.
   * @param {String} HttpsCertId - httpsCertId. required.
   * @param {String} HttpsCertName - httpsCertName. optional.
   */
  modifyCertAndKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'HttpsCertId')) {
      throw new TypeError('parameter "HttpsCertId" is required');
    }

    return this.request('ModifyCertAndKey', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. required.
   * @param {String} SourceIps - sourceIps. optional.
   * @param {String} HttpPort - httpPort. optional.
   * @param {String} HttpsPort - httpsPort. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {Integer} IsAccessProduct - isAccessProduct. required.
   * @param {String} Protocols - protocols. optional.
   * @param {Integer} LoadBalancing - loadBalancing. optional. default: 0.
   * @param {Integer} HttpToUserIp - httpToUserIp. optional. default: 0.
   */
  modifyDomainConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'IsAccessProduct')) {
      throw new TypeError('parameter "IsAccessProduct" is required');
    }

    return this.request('ModifyDomainConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} Domain - domain. required.
   * @param {Integer} Enabled - enabled. required.
   */
  modifyDomainLogEnabled(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Enabled')) {
      throw new TypeError('parameter "Enabled" is required');
    }

    return this.request('ModifyDomainLogEnabled', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} DomainPackageCount - domainPackageCount. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  modifyDomainPackageCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainPackageCount')) {
      throw new TypeError('parameter "DomainPackageCount" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyDomainPackageCount', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DrainageId - queries.id. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  modifyIpDrainage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DrainageId')) {
      throw new TypeError('parameter "DrainageId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyIpDrainage', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} Domain - domain. required.
   * @param {Integer} Active - active. required.
   */
  modifyLogServiceOpenStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Active')) {
      throw new TypeError('parameter "Active" is required');
    }

    return this.request('ModifyLogServiceOpenStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} Domain - domain. required.
   * @param {Integer} Active - active. required.
   */
  modifyLogStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Active')) {
      throw new TypeError('parameter "Active" is required');
    }

    return this.request('ModifyLogStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - queries.domain. required.
   * @param {String} Defense - queries.defense. required.
   * @param {String} Rule - queries.rule. required.
   * @param {Long} Id - queries.id. required.
   * @param {Long} LockVersion - queries.version. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  modifyProtectionModuleRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Defense')) {
      throw new TypeError('parameter "Defense" is required');
    }

    if (!hasOwnProperty(params, 'Rule')) {
      throw new TypeError('parameter "Rule" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'LockVersion')) {
      throw new TypeError('parameter "LockVersion" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyProtectionModuleRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - queries.domain. required.
   * @param {Long} Id - queries.id. required.
   * @param {String} Defense - queries.defense. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  modifyProtectionRuleCacheStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Defense')) {
      throw new TypeError('parameter "Defense" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyProtectionRuleCacheStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - queries.domain. required.
   * @param {String} Defense - queries.defense. required.
   * @param {Long} Id - queries.id. required.
   * @param {Integer} RuleStatus - queries.status. required.
   * @param {Long} LockVersion - queries.version. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  modifyProtectionRuleStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Defense')) {
      throw new TypeError('parameter "Defense" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'RuleStatus')) {
      throw new TypeError('parameter "RuleStatus" is required');
    }

    if (!hasOwnProperty(params, 'LockVersion')) {
      throw new TypeError('parameter "LockVersion" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyProtectionRuleStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Name - queries.name. required.
   * @param {String} Desc - queries.desc. optional.
   * @param {Long} PolicyId - queries.policyId. required.
   * @param {Long} WafVersion - queries.version. required.
   * @param {String} DelRuleNumbers - queries.delRuleNumbers. required.
   * @param {String} AddRuleNumbers - queries.addRuleNumbers. required.
   * @param {String} WafLang - queries.lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  modifyRuleGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'PolicyId')) {
      throw new TypeError('parameter "PolicyId" is required');
    }

    if (!hasOwnProperty(params, 'WafVersion')) {
      throw new TypeError('parameter "WafVersion" is required');
    }

    if (!hasOwnProperty(params, 'DelRuleNumbers')) {
      throw new TypeError('parameter "DelRuleNumbers" is required');
    }

    if (!hasOwnProperty(params, 'AddRuleNumbers')) {
      throw new TypeError('parameter "AddRuleNumbers" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyRuleGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - queries.domain. required.
   * @param {String} Defense - queries.defense. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  modifyUnblockingIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Defense')) {
      throw new TypeError('parameter "Defense" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyUnblockingIp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Mobile - rmiArg.mobile. required.
   * @param {String} InstanceId - rmiArg.instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  modifyUserMobile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Mobile')) {
      throw new TypeError('parameter "Mobile" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyUserMobile', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ScreenName - screenName. required.
   * @param {String} InstanceSource - instanceSource. optional. default: waf-cloud.
   */
  modifyUserUsedScreen(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScreenName')) {
      throw new TypeError('parameter "ScreenName" is required');
    }

    return this.request('ModifyUserUsedScreen', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   */
  modifyWafInstanceSwitch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyWafInstanceSwitch', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} Domain - domain. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} ServiceOn - serviceOn. required.
   */
  modifyWafSwitch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceOn')) {
      throw new TypeError('parameter "ServiceOn" is required');
    }

    return this.request('ModifyWafSwitch', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domains - queries.domainList. required.
   * @param {Long} PolicyId - queries.policyId. required.
   * @param {Long} WafVersion - queries.version. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  setDomainRuleGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domains')) {
      throw new TypeError('parameter "Domains" is required');
    }

    if (!hasOwnProperty(params, 'PolicyId')) {
      throw new TypeError('parameter "PolicyId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('SetDomainRuleGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - queries.domain. required.
   * @param {String} Defense - queries.defense. required.
   * @param {Integer} Mode - queries.mode. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  setProtectionModulePolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Defense')) {
      throw new TypeError('parameter "Defense" is required');
    }

    if (!hasOwnProperty(params, 'Mode')) {
      throw new TypeError('parameter "Mode" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('SetProtectionModulePolicy', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - queries.domain. required.
   * @param {String} Defense - queries.defense. required.
   * @param {Integer} ModuleStatus - queries.status. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  setProtectionModuleStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Defense')) {
      throw new TypeError('parameter "Defense" is required');
    }

    if (!hasOwnProperty(params, 'ModuleStatus')) {
      throw new TypeError('parameter "ModuleStatus" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('SetProtectionModuleStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} EventType - queries.eventType. required.
   * @param {String} SetValue - queries.setValue. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  setWarnConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventType')) {
      throw new TypeError('parameter "EventType" is required');
    }

    if (!hasOwnProperty(params, 'SetValue')) {
      throw new TypeError('parameter "SetValue" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('SetWarnConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} Cycle - rmiArg.cycle. required.
   * @param {Integer} CycleNumber - rmiArg.cycleNumber. required.
   * @param {RepeatList} EventTypes - rmiArg.eventTypes. required.
   * @param {String} WarnMode - rmiArg.warnMode. required.
   * @param {String} InstanceId - rmiArg.instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  setWarnMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Cycle')) {
      throw new TypeError('parameter "Cycle" is required');
    }

    if (!hasOwnProperty(params, 'CycleNumber')) {
      throw new TypeError('parameter "CycleNumber" is required');
    }

    if (!hasOwnProperty(params, 'EventTypes')) {
      throw new TypeError('parameter "EventTypes" is required');
    }

    if (!hasOwnProperty(params, 'WarnMode')) {
      throw new TypeError('parameter "WarnMode" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('SetWarnMode', params, options);
  }

}

module.exports = Client;

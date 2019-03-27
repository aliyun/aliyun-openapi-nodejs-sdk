
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-12-28';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} BlackList - lists. required.
   * @param {Integer} ExpireTime - expires. required.
   */
  addAutoCcBlackIpList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'BlackList')) {
      throw new TypeError('parameter "BlackList" is required');
    }

    if (!hasOwnProperty(params, 'ExpireTime')) {
      throw new TypeError('parameter "ExpireTime" is required');
    }

    return this.request('AddAutoCcBlackIpList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} WhiteList - lists. required.
   * @param {Integer} ExpireTime - expires. optional.
   */
  addAutoCcWhiteIpList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'WhiteList')) {
      throw new TypeError('parameter "WhiteList" is required');
    }

    return this.request('AddAutoCcWhiteIpList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. required.
   * @param {String} Name - name. required.
   * @param {String} Act - act. required.
   * @param {Integer} Count - count. required.
   * @param {Integer} Interval - interval. required.
   * @param {String} Mode - mode. required.
   * @param {Integer} Ttl - ttl. required.
   * @param {String} Uri - uri. required.
   */
  addLayer7CCRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Act')) {
      throw new TypeError('parameter "Act" is required');
    }

    if (!hasOwnProperty(params, 'Count')) {
      throw new TypeError('parameter "Count" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    if (!hasOwnProperty(params, 'Mode')) {
      throw new TypeError('parameter "Mode" is required');
    }

    if (!hasOwnProperty(params, 'Ttl')) {
      throw new TypeError('parameter "Ttl" is required');
    }

    if (!hasOwnProperty(params, 'Uri')) {
      throw new TypeError('parameter "Uri" is required');
    }

    return this.request('AddLayer7CCRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Id - uuid. required.
   */
  bindDDoSFlowPack(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('BindDDoSFlowPack', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - assertKey. required.
   */
  closeDomainSlsConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CloseDomainSlsConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Mode - method. required.
   * @param {String} InstanceId - instanceId. required.
   */
  configBlackhole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Mode')) {
      throw new TypeError('parameter "Mode" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ConfigBlackhole', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Mode - method. required.
   * @param {Integer} Duration - duration. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {RepeatList} Lines - lines. optional.
   */
  configBlockStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Mode')) {
      throw new TypeError('parameter "Mode" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ConfigBlockStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. required.
   * @param {String} Config - config. required.
   */
  configDomainAIProtectMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Config')) {
      throw new TypeError('parameter "Config" is required');
    }

    return this.request('ConfigDomainAIProtectMode', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. required.
   * @param {String} Config - config. required.
   */
  configDomainAIProtectSwitch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Config')) {
      throw new TypeError('parameter "Config" is required');
    }

    return this.request('ConfigDomainAIProtectSwitch', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. required.
   * @param {Integer} AccessMode - accessMode. required.
   */
  configDomainAccessMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'AccessMode')) {
      throw new TypeError('parameter "AccessMode" is required');
    }

    return this.request('ConfigDomainAccessMode', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. required.
   * @param {RepeatList} RegionList - regions. optional.
   */
  configDomainAreaBlock(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('ConfigDomainAreaBlock', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. required.
   * @param {String} Config - config. required.
   */
  configDomainAreaBlockSwitch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Config')) {
      throw new TypeError('parameter "Config" is required');
    }

    return this.request('ConfigDomainAreaBlockSwitch', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. required.
   * @param {String} Config - config. required.
   */
  configDomainBlackWhiteListSwitch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Config')) {
      throw new TypeError('parameter "Config" is required');
    }

    return this.request('ConfigDomainBlackWhiteListSwitch', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. required.
   * @param {String} RuleList - rules. required.
   */
  configDomainCacheCustomRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'RuleList')) {
      throw new TypeError('parameter "RuleList" is required');
    }

    return this.request('ConfigDomainCacheCustomRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. required.
   * @param {String} Mode - mode. required.
   */
  configDomainCacheMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Mode')) {
      throw new TypeError('parameter "Mode" is required');
    }

    return this.request('ConfigDomainCacheMode', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. required.
   * @param {Integer} Enable - enable. required.
   */
  configDomainCacheSwitch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Enable')) {
      throw new TypeError('parameter "Enable" is required');
    }

    return this.request('ConfigDomainCacheSwitch', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. required.
   * @param {String} RuleList - rules. required.
   * @param {Integer} Expires - expires. optional.
   */
  configDomainPreciseAccessRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'RuleList')) {
      throw new TypeError('parameter "RuleList" is required');
    }

    return this.request('ConfigDomainPreciseAccessRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. required.
   * @param {String} Config - config. required.
   */
  configDomainPreciseAccessSwitch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Config')) {
      throw new TypeError('parameter "Config" is required');
    }

    return this.request('ConfigDomainPreciseAccessSwitch', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ForwardProtocol - protocol. required.
   * @param {Integer} FrontendPort - frontendPort. required.
   * @param {String} HealthCheck - healthCheck. required.
   */
  configHealthCheck(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ForwardProtocol')) {
      throw new TypeError('parameter "ForwardProtocol" is required');
    }

    if (!hasOwnProperty(params, 'FrontendPort')) {
      throw new TypeError('parameter "FrontendPort" is required');
    }

    if (!hasOwnProperty(params, 'HealthCheck')) {
      throw new TypeError('parameter "HealthCheck" is required');
    }

    return this.request('ConfigHealthCheck', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Listeners - listeners. required.
   */
  configLayer4Rule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Listeners')) {
      throw new TypeError('parameter "Listeners" is required');
    }

    return this.request('ConfigLayer4Rule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ForwardProtocol - protocol. required.
   * @param {Integer} FrontendPort - frontendPort. required.
   * @param {String} Config - config. required.
   */
  configLayer4RuleAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ForwardProtocol')) {
      throw new TypeError('parameter "ForwardProtocol" is required');
    }

    if (!hasOwnProperty(params, 'FrontendPort')) {
      throw new TypeError('parameter "FrontendPort" is required');
    }

    if (!hasOwnProperty(params, 'Config')) {
      throw new TypeError('parameter "Config" is required');
    }

    return this.request('ConfigLayer4RuleAttribute', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. required.
   * @param {RepeatList} BlackList - blackList. optional.
   * @param {RepeatList} WhiteList - whiteList. optional.
   */
  configLayer7BlackWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('ConfigLayer7BlackWhiteList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. required.
   * @param {String} Name - name. required.
   * @param {String} Act - act. required.
   * @param {Integer} Count - count. required.
   * @param {Integer} Interval - interval. required.
   * @param {String} Mode - mode. required.
   * @param {Integer} Ttl - ttl. required.
   * @param {String} Uri - uri. required.
   */
  configLayer7CCRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Act')) {
      throw new TypeError('parameter "Act" is required');
    }

    if (!hasOwnProperty(params, 'Count')) {
      throw new TypeError('parameter "Count" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    if (!hasOwnProperty(params, 'Mode')) {
      throw new TypeError('parameter "Mode" is required');
    }

    if (!hasOwnProperty(params, 'Ttl')) {
      throw new TypeError('parameter "Ttl" is required');
    }

    if (!hasOwnProperty(params, 'Uri')) {
      throw new TypeError('parameter "Uri" is required');
    }

    return this.request('ConfigLayer7CCRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. required.
   * @param {String} Template - template. required.
   */
  configLayer7CCTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Template')) {
      throw new TypeError('parameter "Template" is required');
    }

    return this.request('ConfigLayer7CCTemplate', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. required.
   * @param {Integer} CertId - certId. optional.
   * @param {String} CertName - certName. optional.
   * @param {String} Cert - cert. optional.
   * @param {String} Key - key. optional.
   */
  configLayer7Cert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    options.method = 'POST';
    return this.request('ConfigLayer7Cert', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. required.
   * @param {String} ProxyTypeList - proxyTypeList. optional.
   * @param {RepeatList} ProxyTypes - proxyTypes. optional.
   * @param {Integer} RsType - rsType. required.
   * @param {RepeatList} RealServers - realServers. required.
   * @param {RepeatList} InstanceIds - instanceIds. optional.
   */
  configLayer7Rule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'RsType')) {
      throw new TypeError('parameter "RsType" is required');
    }

    if (!hasOwnProperty(params, 'RealServers')) {
      throw new TypeError('parameter "RealServers" is required');
    }

    return this.request('ConfigLayer7Rule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Switch - switch. required.
   * @param {String} Mode - mode. optional.
   */
  configPortAutoCcStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Switch')) {
      throw new TypeError('parameter "Switch" is required');
    }

    return this.request('ConfigPortAutoCcStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} TaskType - taskType. required.
   * @param {String} TaskParams - taskParams. required.
   */
  createAsyncTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskType')) {
      throw new TypeError('parameter "TaskType" is required');
    }

    if (!hasOwnProperty(params, 'TaskParams')) {
      throw new TypeError('parameter "TaskParams" is required');
    }

    return this.request('CreateAsyncTask', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Listeners - listeners. required.
   */
  createLayer4Rule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Listeners')) {
      throw new TypeError('parameter "Listeners" is required');
    }

    return this.request('CreateLayer4Rule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. required.
   * @param {Integer} RsType - rsType. required.
   * @param {String} Rules - rules. required.
   * @param {RepeatList} InstanceIds - instanceIds. optional.
   */
  createLayer7Rule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'RsType')) {
      throw new TypeError('parameter "RsType" is required');
    }

    if (!hasOwnProperty(params, 'Rules')) {
      throw new TypeError('parameter "Rules" is required');
    }

    return this.request('CreateLayer7Rule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} TaskId - taskId. required.
   */
  deleteAsyncTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('DeleteAsyncTask', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} BlackList - lists. required.
   */
  deleteAutoCcBlackIpList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'BlackList')) {
      throw new TypeError('parameter "BlackList" is required');
    }

    return this.request('DeleteAutoCcBlackIpList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} WhiteList - lists. required.
   */
  deleteAutoCcWhiteIpList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'WhiteList')) {
      throw new TypeError('parameter "WhiteList" is required');
    }

    return this.request('DeleteAutoCcWhiteIpList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. required.
   * @param {RepeatList} RuleNameList - rule_names. required.
   */
  deleteDomainCacheCustomRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'RuleNameList')) {
      throw new TypeError('parameter "RuleNameList" is required');
    }

    return this.request('DeleteDomainCacheCustomRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. required.
   * @param {RepeatList} RuleNameList - rule_names. required.
   */
  deleteDomainPreciseAccessRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'RuleNameList')) {
      throw new TypeError('parameter "RuleNameList" is required');
    }

    return this.request('DeleteDomainPreciseAccessRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Listeners - listeners. required.
   */
  deleteLayer4Rule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Listeners')) {
      throw new TypeError('parameter "Listeners" is required');
    }

    return this.request('DeleteLayer4Rule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. required.
   * @param {String} Name - name. required.
   */
  deleteLayer7CCRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('DeleteLayer7CCRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. required.
   */
  deleteLayer7Rule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('DeleteLayer7Rule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} KeyWord - keyword. optional.
   * @param {Integer} PageNo - page_no. required.
   * @param {Integer} PageSize - page_size. required.
   */
  describeAutoCcBlackIpList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeAutoCcBlackIpList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} QueryType - queryType. optional.
   */
  describeAutoCcIpCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeAutoCcIpCount', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} KeyWord - keyword. optional.
   * @param {Integer} PageNo - page_no. required.
   * @param {Integer} PageSize - page_size. required.
   */
  describeAutoCcWhiteIpList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeAutoCcWhiteIpList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Line - line. optional.
   */
  describeBackSourceCidr(params = {}, options = {}) {
    return this.request('DescribeBackSourceCidr', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeBatchSlsDispatchStatus(params = {}, options = {}) {
    return this.request('DescribeBatchSlsDispatchStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {RepeatList} InstanceIds - instanceIds. required.
   */
  describeBlackholeStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceIds')) {
      throw new TypeError('parameter "InstanceIds" is required');
    }

    return this.request('DescribeBlackholeStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {RepeatList} InstanceIds - instanceIds. required.
   */
  describeBlockStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceIds')) {
      throw new TypeError('parameter "InstanceIds" is required');
    }

    return this.request('DescribeBlockStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Eip - eip. required.
   * @param {Integer} Offset - offset. required.
   * @param {String} PageSize - pageSize. required.
   */
  describeDDoSEvents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Eip')) {
      throw new TypeError('parameter "Eip" is required');
    }

    if (!hasOwnProperty(params, 'Offset')) {
      throw new TypeError('parameter "Offset" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeDDoSEvents', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} Status - status. optional.
   * @param {String} InstanceId - instanceId. optional.
   */
  describeDDoSFlowPackList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeDDoSFlowPackList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Integer} Interval - interval. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Eip - eip. required.
   */
  describeDDoSTraffic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Eip')) {
      throw new TypeError('parameter "Eip" is required');
    }

    return this.request('DescribeDDoSTraffic', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeDefenseCountStatistics(params = {}, options = {}) {
    return this.request('DescribeDefenseCountStatistics', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  describeDefenseRecords(params = {}, options = {}) {
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

    return this.request('DescribeDefenseRecords', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {RepeatList} DomainList - domainList. required.
   */
  describeDomainAccessMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainList')) {
      throw new TypeError('parameter "DomainList" is required');
    }

    return this.request('DescribeDomainAccessMode', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {RepeatList} DomainList - domains. required.
   */
  describeDomainAreaBlockConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainList')) {
      throw new TypeError('parameter "DomainList" is required');
    }

    return this.request('DescribeDomainAreaBlockConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Domain - domain. required.
   * @param {Integer} Offset - offset. required.
   * @param {String} PageSize - pageSize. required.
   */
  describeDomainAttackEvents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Offset')) {
      throw new TypeError('parameter "Offset" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeDomainAttackEvents', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {RepeatList} DomainList - domains. required.
   */
  describeDomainCacheConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainList')) {
      throw new TypeError('parameter "DomainList" is required');
    }

    return this.request('DescribeDomainCacheConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {RepeatList} DomainList - domains. required.
   */
  describeDomainCcProtectSwitch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainList')) {
      throw new TypeError('parameter "DomainList" is required');
    }

    return this.request('DescribeDomainCcProtectSwitch', params, options);
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
   */
  describeDomainOpsType(params = {}, options = {}) {
    return this.request('DescribeDomainOpsType', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {RepeatList} DomainList - domains. required.
   */
  describeDomainPreciseAccessRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainList')) {
      throw new TypeError('parameter "DomainList" is required');
    }

    return this.request('DescribeDomainPreciseAccessRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. required.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   */
  describeDomainQps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeDomainQps', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   */
  describeDomainQpsWithCache(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeDomainQpsWithCache', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - assertKey. required.
   */
  describeDomainSlsStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('DescribeDomainSlsStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. optional.
   * @param {String} QueryDomainPattern - queryDomainPattern. optional.
   * @param {Integer} Offset - offset. required.
   * @param {String} PageSize - pageSize. required.
   */
  describeDomains(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Offset')) {
      throw new TypeError('parameter "Offset" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeDomains', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - ecsInstanceId. required.
   */
  describeEcsInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeEcsInstance', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeEcsIpModifyCount(params = {}, options = {}) {
    return this.request('DescribeEcsIpModifyCount', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  describeElasticBandwidthSpec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeElasticBandwidthSpec', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Listeners - listeners. required.
   */
  describeHealthCheckList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Listeners')) {
      throw new TypeError('parameter "Listeners" is required');
    }

    return this.request('DescribeHealthCheckList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Listeners - listeners. required.
   */
  describeHealthCheckStatusList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Listeners')) {
      throw new TypeError('parameter "Listeners" is required');
    }

    return this.request('DescribeHealthCheckStatusList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} InstanceIds - instanceIds. required.
   */
  describeInstanceDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceIds')) {
      throw new TypeError('parameter "InstanceIds" is required');
    }

    return this.request('DescribeInstanceDetails', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} InstanceIds - instanceIds. required.
   */
  describeInstanceSpecs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceIds')) {
      throw new TypeError('parameter "InstanceIds" is required');
    }

    return this.request('DescribeInstanceSpecs', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} InstanceIds - instanceIds. required.
   */
  describeInstanceStatistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceIds')) {
      throw new TypeError('parameter "InstanceIds" is required');
    }

    return this.request('DescribeInstanceStatistics', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} InstanceIds - instanceIds. optional.
   * @param {String} PageNo - pageNo. required.
   * @param {String} PageSize - pageSize. required.
   * @param {String} Ip - ip. optional.
   * @param {String} Remark - remark. optional.
   * @param {RepeatList} Tag - tags. optional.
   */
  describeInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeInstances', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Integer} Interval - interval. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Eip - eip. required.
   * @param {Integer} Port - port. optional.
   * @param {String} QueryProtocol - protocol. optional.
   */
  describeIpTraffic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Eip')) {
      throw new TypeError('parameter "Eip" is required');
    }

    return this.request('DescribeIpTraffic', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Listeners - listeners. required.
   */
  describeLayer4RuleAttributes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Listeners')) {
      throw new TypeError('parameter "Listeners" is required');
    }

    return this.request('DescribeLayer4RuleAttributes', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ForwardProtocol - protocol. optional.
   * @param {Integer} FrontendPort - frontendPort. optional.
   * @param {Integer} Offset - offset. required.
   * @param {String} PageSize - pageSize. required.
   */
  describeLayer4Rules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Offset')) {
      throw new TypeError('parameter "Offset" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeLayer4Rules', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. required.
   * @param {Integer} Offset - offset. required.
   * @param {String} PageSize - pageSize. required.
   */
  describeLayer7CCRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Offset')) {
      throw new TypeError('parameter "Offset" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeLayer7CCRules', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeLogStoreExistStatus(params = {}, options = {}) {
    return this.request('DescribeLogStoreExistStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} EntityType - entityType. optional.
   * @param {String} EntityObject - entityObject. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  describeOpEntities(params = {}, options = {}) {
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

    return this.request('DescribeOpEntities', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceIds - instanceIds. required.
   */
  describePortAutoCcStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceIds')) {
      throw new TypeError('parameter "InstanceIds" is required');
    }

    return this.request('DescribePortAutoCcStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeSimpleDomains(params = {}, options = {}) {
    return this.request('DescribeSimpleDomains', params, options);
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
  describeSlsEmptyCount(params = {}, options = {}) {
    return this.request('DescribeSlsEmptyCount', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeSlsLogstoreInfo(params = {}, options = {}) {
    return this.request('DescribeSlsLogstoreInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeSlsOpenStatus(params = {}, options = {}) {
    return this.request('DescribeSlsOpenStatus', params, options);
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
  describeUnBlockCount(params = {}, options = {}) {
    return this.request('DescribeUnBlockCount', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describleCertList(params = {}, options = {}) {
    return this.request('DescribleCertList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {RepeatList} DomainList - domainList. required.
   */
  describleLayer7InstanceRelations(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainList')) {
      throw new TypeError('parameter "DomainList" is required');
    }

    return this.request('DescribleLayer7InstanceRelations', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. required.
   */
  disableLayer7CC(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('DisableLayer7CC', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. required.
   */
  disableLayer7CCRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('DisableLayer7CCRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  emptyAutoCcBlackIpList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('EmptyAutoCcBlackIpList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  emptyAutoCcWhiteIpList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('EmptyAutoCcWhiteIpList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  emptySlsLogstore(params = {}, options = {}) {
    return this.request('EmptySlsLogstore', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. required.
   */
  enableLayer7CC(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('EnableLayer7CC', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - domain. required.
   */
  enableLayer7CCRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('EnableLayer7CCRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listAsyncTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListAsyncTask', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  listLayer7CustomPorts(params = {}, options = {}) {
    return this.request('ListLayer7CustomPorts', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   */
  listTagKeys(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    return this.request('ListTagKeys', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {RepeatList} ResourceId - resourceIds. optional.
   * @param {RepeatList} Tag - tags. optional.
   * @param {String} NextToken - nextToken. optional.
   */
  listTagResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    return this.request('ListTagResources', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} DomainType - l7_engine. required.
   */
  modifyDomainOpsType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainType')) {
      throw new TypeError('parameter "DomainType" is required');
    }

    return this.request('ModifyDomainOpsType', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} ElasticBandwidth - elasticBandwidth. required.
   * @param {String} InstanceId - instanceId. required.
   */
  modifyElasticBandWidth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ElasticBandwidth')) {
      throw new TypeError('parameter "ElasticBandwidth" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyElasticBandWidth', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} Remark - remark. optional.
   */
  modifyInstanceRemark(params = {}, options = {}) {
    return this.request('ModifyInstanceRemark', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - domain. required.
   */
  openDomainSlsConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('OpenDomainSlsConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - ecsInstanceId. required.
   */
  releaseEcsIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ReleaseEcsIp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} InstanceId - instanceId. optional.
   */
  releaseInstance(params = {}, options = {}) {
    return this.request('ReleaseInstance', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {RepeatList} ResourceId - resourceIds. required.
   * @param {RepeatList} Tag - tags. optional.
   */
  tagResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    return this.request('TagResources', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Id - uuid. required.
   */
  unbindDDoSFlowPack(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UnbindDDoSFlowPack', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {RepeatList} ResourceId - resourceIds. required.
   * @param {RepeatList} TagKey - tagKeys. optional.
   * @param {Boolean} All - deleteAll. optional.
   */
  untagResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    return this.request('UntagResources', params, options);
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

}

module.exports = Client;


'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-05-25';
    super(config);
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
   * @param {String} RuleName - ruleName. required.
   * @param {RepeatList} Rules - rules. required.
   */
  addSchedulerRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleName')) {
      throw new TypeError('parameter "RuleName" is required');
    }

    if (!hasOwnProperty(params, 'Rules')) {
      throw new TypeError('parameter "Rules" is required');
    }

    return this.request('AddSchedulerRule', params, options);
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
   * @param {RepeatList} ProxyTypes - proxyTypes. required.
   * @param {Integer} RsType - rsType. required.
   * @param {RepeatList} RealServers - realServers. required.
   * @param {String} VipConfigs - vipConfigs. optional.
   */
  configLayer7Rule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'ProxyTypes')) {
      throw new TypeError('parameter "ProxyTypes" is required');
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

    options.method = 'POST';
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
   * @param {String} VipConfigs - vipConfigs. optional.
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

    options.method = 'POST';
    return this.request('DeleteAsyncTask', params, options);
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
   * @param {String} RuleName - ruleName. required.
   */
  deleteSchedulerRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleName')) {
      throw new TypeError('parameter "RuleName" is required');
    }

    return this.request('DeleteSchedulerRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeBackSourceCidr(params = {}, options = {}) {
    return this.request('DescribeBackSourceCidr', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeCertList(params = {}, options = {}) {
    return this.request('DescribeCertList', params, options);
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
   * @param {String} Eip - eip. required.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. optional.
   * @param {Integer} Offset - offset. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  describeDDoSSourceIps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Eip')) {
      throw new TypeError('parameter "Eip" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'Offset')) {
      throw new TypeError('parameter "Offset" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeDDoSSourceIps', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Eip - eip. required.
   */
  describeDDoSTraffic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
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
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Domain - domain. optional.
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
   * @param {String} Domain - domain. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   */
  describeDomainQps(params = {}, options = {}) {
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
   * @param {String} InstanceIds - instanceIds. optional.
   */
  describeInstanceDetails(params = {}, options = {}) {
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
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceIds - instanceIds. optional.
   * @param {String} PageNo - pageNo. required.
   * @param {String} PageSize - pageSize. required.
   * @param {String} Ip - ip. optional.
   * @param {String} Remark - remark. optional.
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
   * @param {String} Lang - lang. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Eip - eip. required.
   * @param {Integer} Port - port. optional.
   */
  describeIpConns(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Eip')) {
      throw new TypeError('parameter "Eip" is required');
    }

    return this.request('DescribeIpConns', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Eip - eip. required.
   * @param {Integer} Port - port. optional.
   */
  describeIpTraffic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
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
   * @param {RepeatList} FrontendPorts - frontendPorts. required.
   */
  describeLayer4RuleTotalAttributes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'FrontendPorts')) {
      throw new TypeError('parameter "FrontendPorts" is required');
    }

    return this.request('DescribeLayer4RuleTotalAttributes', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ForwardProtocol - protocol. optional.
   * @param {Integer} FrontendPort - frontendPort. optional.
   * @param {Integer} Offset - offset. optional.
   * @param {String} PageSize - pageSize. optional.
   */
  describeLayer4Rules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
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
   * @param {RepeatList} DomainList - domainList. required.
   */
  describeLayer7InstanceRelations(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainList')) {
      throw new TypeError('parameter "DomainList" is required');
    }

    return this.request('DescribeLayer7InstanceRelations', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
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
   * @param {String} RuleName - ruleName. optional.
   * @param {Integer} Offset - offset. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  describeSchedulerRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Offset')) {
      throw new TypeError('parameter "Offset" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeSchedulerRules', params, options);
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
   * @param {String} Eip - eip. required.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   */
  describeTrafficPeak(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Eip')) {
      throw new TypeError('parameter "Eip" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeTrafficPeak', params, options);
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
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Remark - remark. required.
   */
  modifyInstanceRemark(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Remark')) {
      throw new TypeError('parameter "Remark" is required');
    }

    return this.request('ModifyInstanceRemark', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} RuleName - ruleName. required.
   * @param {RepeatList} Rules - rules. required.
   */
  modifySchedulerRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleName')) {
      throw new TypeError('parameter "RuleName" is required');
    }

    if (!hasOwnProperty(params, 'Rules')) {
      throw new TypeError('parameter "Rules" is required');
    }

    return this.request('ModifySchedulerRule', params, options);
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
   * @param {String} InstanceId - instanceId. required.
   */
  releaseInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ReleaseInstance', params, options);
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

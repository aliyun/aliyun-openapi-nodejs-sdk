
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-05-18';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domains - queries.domains. required.
   * @param {Integer} CertId - queries.certId. optional.
   * @param {String} Cert - queries.cert. optional.
   * @param {String} Key - queries.key. optional.
   * @param {String} Name - queries.name. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  createCertConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domains')) {
      throw new TypeError('parameter "Domains" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('CreateCertConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - queries.domain. required.
   * @param {String} Defense - queries.defense. required.
   * @param {String} Rule - queries.rule. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} SpecCode - specCode. optional. default: 217.
   */
  createDefenseModuleRule(params = {}, options = {}) {
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

    return this.request('CreateDefenseModuleRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - queries.domain. required.
   * @param {Integer} AllocMode - queries.allocMode. optional.
   * @param {String} UserIp - queries.userIp. required.
   * @param {Integer} Lb - queries.lb. optional.
   * @param {String} HttpPort - queries.httpPort. optional.
   * @param {String} HttpsPort - queries.httpsPort. optional.
   * @param {Integer} HttpsRedirect - queries.httpsRedirect. optional.
   * @param {Integer} Xff - queries.xff. required.
   * @param {Integer} HttpToUserIp - queries.httpToUserIp. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} SpecCode - specCode. optional. default: 209.
   */
  createDomainConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'UserIp')) {
      throw new TypeError('parameter "UserIp" is required');
    }

    if (!hasOwnProperty(params, 'Xff')) {
      throw new TypeError('parameter "Xff" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('CreateDomainConfig', params, options);
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
   * @param {String} Domain - queries.domain. required.
   * @param {String} Defense - queries.defense. required.
   * @param {Long} Id - queries.id. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  deleteDefenseModuleRule(params = {}, options = {}) {
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

    return this.request('DeleteDefenseModuleRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - queries.domain. required.
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
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceId - queries.instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeAccessSourceArea(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeAccessSourceArea', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceId - queries.instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeAccessTerminalRatio(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeAccessTerminalRatio', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceId - queries.instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeBlockAccessRatio(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeBlockAccessRatio', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceId - queries.instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeBlockSourceArea(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeBlockSourceArea', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CurrentPage - context.page. optional. default: 1.
   * @param {String} PageSize - context.pageSize. optional. default: 10.
   * @param {String} InstanceId - queries.instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeBlockTopIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeBlockTopIp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} TimeZone - queries.time_zone. required.
   * @param {String} InstanceId - queries.instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeCaptchaSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'TimeZone')) {
      throw new TypeError('parameter "TimeZone" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeCaptchaSummary', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} Domain - queries.domain. required.
   */
  describeCertList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('DescribeCertList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - queries.domain. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeCertStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeCertStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - queries.domain. required.
   * @param {String} Defense - queries.defense. required.
   * @param {Long} Id - queries.id. required.
   * @param {String} Lang - queries.lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeDefenseModuleRule(params = {}, options = {}) {
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

    return this.request('DescribeDefenseModuleRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Domain - queries.domain. required.
   * @param {String} Defense - queries.defense. required.
   * @param {Integer} PageSize - queries.size. optional.
   * @param {Integer} CurrentPage - queries.page. optional.
   * @param {String} Lang - queries.lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeDefenseModuleRuleList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Defense')) {
      throw new TypeError('parameter "Defense" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeDefenseModuleRuleList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - queries.domain. required.
   * @param {String} DefenseList - queries.defenseList. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeDefenseModuleRuleStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'DefenseList')) {
      throw new TypeError('parameter "DefenseList" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeDefenseModuleRuleStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - queries.domain. required.
   * @param {String} Defense - queries.defense. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeDefenseModuleStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Defense')) {
      throw new TypeError('parameter "Defense" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeDefenseModuleStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceId - queries.instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeDisposalRatio(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeDisposalRatio', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} TimeZone - queries.time_zone. required.
   * @param {String} InstanceId - queries.instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeDisposalTrend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'TimeZone')) {
      throw new TypeError('parameter "TimeZone" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeDisposalTrend', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - queries.domain. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeDomainAccessStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeDomainAccessStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - queries.domain. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeDomainConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeDomainConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DomainKey - queries.domainKey. optional.
   * @param {Integer} PageSize - queries.size. optional.
   * @param {Integer} CurrentPage - queries.page. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeDomainConfigList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeDomainConfigList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeDomainNameList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeDomainNameList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} TimeZone - queries.time_zone. required.
   * @param {String} InstanceId - queries.instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeFlowSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'TimeZone')) {
      throw new TypeError('parameter "TimeZone" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeFlowSummary', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Region - region. optional. default: cn.
   */
  describeInstance(params = {}, options = {}) {
    return this.request('DescribeInstance', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} VersionCode - versionCode. required.
   */
  describeInstancePackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'VersionCode')) {
      throw new TypeError('parameter "VersionCode" is required');
    }

    return this.request('DescribeInstancePackage', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SrcIp - queries.src_ip. required.
   * @param {String} InstanceId - queries.instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeIpPolicyHits(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SrcIp')) {
      throw new TypeError('parameter "SrcIp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeIpPolicyHits', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} SrcIp - queries.src_ip. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceId - queries.instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeIpRiskLabel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SrcIp')) {
      throw new TypeError('parameter "SrcIp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeIpRiskLabel', params, options);
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
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  describeLogQuota(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeLogQuota', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceId - queries.instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeMobileOsRatio(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeMobileOsRatio', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceId - queries.instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describePcBrowserRatio(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribePcBrowserRatio', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Step - queries.step. required.
   * @param {String} InstanceId - queries.instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeProtectBlockSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Step')) {
      throw new TypeError('parameter "Step" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeProtectBlockSummary', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceId - queries.instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeProtectModuleSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeProtectModuleSummary', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} TimeZone - queries.time_zone. required.
   * @param {String} InstanceId - queries.instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeProtectSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'TimeZone')) {
      throw new TypeError('parameter "TimeZone" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeProtectSummary', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceId - queries.instanceId. required.
   * @param {String} Step - queries.step. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeRealCaptchaSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Step')) {
      throw new TypeError('parameter "Step" is required');
    }

    return this.request('DescribeRealCaptchaSummary', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Step - queries.step. required.
   * @param {String} InstanceId - queries.instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeRealProtectSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Step')) {
      throw new TypeError('parameter "Step" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeRealProtectSummary', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Region - region. optional. default: cn.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Step - queries.step. required.
   * @param {String} InstanceId - queries.instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeResponseExceptionSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Step')) {
      throw new TypeError('parameter "Step" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeResponseExceptionSummary', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} EndTimestamp - queries.end_timestamp. required.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CurrentPage - context.page. optional. default: 1.
   * @param {String} PageSize - context.pageSize. optional. default: 10.
   * @param {String} InstanceId - queries.instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeRuleMonitor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EndTimestamp')) {
      throw new TypeError('parameter "EndTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeRuleMonitor', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} EndTimestamp - queries.end_timestamp. required.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RuleId - queries.rule_id. optional.
   * @param {String} AntibotType - queries.antibot_type. required.
   * @param {String} InstanceId - queries.instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeRuleSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EndTimestamp')) {
      throw new TypeError('parameter "EndTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AntibotType')) {
      throw new TypeError('parameter "AntibotType" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeRuleSummary', params, options);
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
   * @param {String} ServiceCode - serviceCode. optional. default: antibot.
   */
  describeSlsAuthStatus(params = {}, options = {}) {
    return this.request('DescribeSlsAuthStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} WafRegionId - regionId. optional. default: cn-hangzhou.
   * @param {String} ServiceCode - serviceCode. optional. default: antibot.
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
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CurrentPage - context.page. optional. default: 1.
   * @param {String} PageSize - context.pageSize. optional. default: 10.
   * @param {String} InstanceId - queries.instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeTopIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeTopIp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTimestamp - queries.start_timestamp. required.
   * @param {String} EndTimestamp - queries.end_timestamp. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceId - queries.instanceId. required.
   * @param {String} Region - queries.cluster. optional. default: cn.
   */
  describeTopUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeTopUrl', params, options);
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
   * @param {String} SpecCode - specCode. optional. default: 217.
   */
  modifyDefenseModuleRule(params = {}, options = {}) {
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

    return this.request('ModifyDefenseModuleRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - queries.domain. required.
   * @param {String} Defense - queries.defense. required.
   * @param {String} PriorityList - queries.priorityList. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   */
  modifyDefenseModuleRuleOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Defense')) {
      throw new TypeError('parameter "Defense" is required');
    }

    if (!hasOwnProperty(params, 'PriorityList')) {
      throw new TypeError('parameter "PriorityList" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyDefenseModuleRuleOrder', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - queries.domain. required.
   * @param {String} Defense - queries.defense. required.
   * @param {Integer} Status - queries.status. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} SpecCode - specCode. optional. default: 216.
   */
  modifyDefenseModuleStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Defense')) {
      throw new TypeError('parameter "Defense" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyDefenseModuleStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - queries.domain. required.
   * @param {String} Defense - queries.defense. required.
   * @param {Long} Id - queries.id. required.
   * @param {Long} LockVersion - queries.version. required.
   * @param {Integer} Status - queries.status. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} SpecCode - specCode. optional. default: 216.
   */
  modifyDefenseRuleStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Defense')) {
      throw new TypeError('parameter "Defense" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'LockVersion')) {
      throw new TypeError('parameter "LockVersion" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyDefenseRuleStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Domain - queries.domain. required.
   * @param {String} UserIp - queries.userIp. optional.
   * @param {Integer} Lb - queries.lb. optional.
   * @param {String} HttpPort - queries.httpPort. optional.
   * @param {String} HttpsPort - queries.httpsPort. optional.
   * @param {Integer} HttpsRedirect - queries.httpsRedirect. optional.
   * @param {Integer} Xff - queries.xff. optional.
   * @param {Integer} HttpToUserIp - queries.httpToUserIp. optional.
   * @param {Integer} LockVersion - queries.version. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} SpecCode - specCode. optional. default: 209.
   */
  modifyDomainConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'LockVersion')) {
      throw new TypeError('parameter "LockVersion" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyDomainConfig', params, options);
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

}

module.exports = Client;

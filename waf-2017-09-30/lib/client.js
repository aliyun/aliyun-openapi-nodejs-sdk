
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-09-30';
    super(config);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} AppName - appName. required.
   * @param {String} ServiceId - serviceId. required.
   * @param {String} AsyncMethod - asyncMethod. required.
   * @param {String} Ack - ack. required.
   * @param {Long} AliUid - callerUid. required.
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

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('AppOpenAck', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Caller - caller. required.
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
   * @param {Integer} IsNonStandardPort - isNonStandardPort. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {Long} AliUid - callerUid. required.
   */
  createDomainConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

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

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('CreateDomainConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Caller - caller. required.
   * @param {String} Domain - domain. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {Long} AliUid - callerUid. required.
   */
  deleteDomainConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('DeleteDomainConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} AliUid - callerUid. required.
   */
  describeDomainNames(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('DescribeDomainNames', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} Caller - caller. required.
   * @param {String} Domain - domain. required.
   * @param {Long} AliUid - callerUid. required.
   */
  describeDomainTransferConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('DescribeDomainTransferConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} Domain - domainKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} Page - currentPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Long} AliUid - callerUid. required.
   */
  describeDomains(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('DescribeDomains', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} Domain - domain. required.
   * @param {Long} AliUid - callerUid. required.
   */
  describeHttpsCertInUse(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('DescribeHttpsCertInUse', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} Domain - domain. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} AliUid - callerUid. required.
   */
  describeNeedUpgradeDomainLimit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('DescribeNeedUpgradeDomainLimit', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {Long} AliUid - callerUid. required.
   */
  describePackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('DescribePackage', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {RepeatList} Field - f. required.
   * @param {String} Domain - n. optional.
   * @param {Integer} Interval - x. required.
   * @param {Long} StartMillisecond - s. required.
   * @param {Long} EndMillisecond - e. required.
   * @param {Long} AliUid - callerUid. required.
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

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('DescribeQps', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} AliUid - callerUid. required.
   */
  describeRegions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {Long} AliUid - callerUid. required.
   */
  describeRegionsStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('DescribeRegionsStatus', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} Domain - domain. optional.
   * @param {String} CheckRequestId - checkRequestId. optional.
   * @param {Long} AliUid - callerUid. required.
   */
  describeTransferConfigInWork(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('DescribeTransferConfigInWork', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Caller - caller. required.
   * @param {String} Domain - domain. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} Cert - cert. optional.
   * @param {String} Key - key. optional.
   * @param {String} HttpsCertId - httpsCertId. required.
   * @param {String} HttpsCertName - httpsCertName. optional.
   * @param {Long} AliUid - callerUid. required.
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

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('ModifyCertAndKey', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Caller - caller. required.
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
   * @param {Integer} IsNonStandardPort - isNonStandardPort. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {Long} AliUid - callerUid. required.
   */
  modifyDomainConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

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

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('ModifyDomainConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} DomainPackageCount - domainPackageCount. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {Long} AliUid - callerUid. required.
   */
  modifyDomainPackageCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainPackageCount')) {
      throw new TypeError('parameter "DomainPackageCount" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('ModifyDomainPackageCount', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} Caller - caller. required.
   * @param {String} Domain - domain. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} ServiceOn - serviceOn. required.
   * @param {Long} AliUid - callerUid. required.
   */
  modifyWafSwitch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceOn')) {
      throw new TypeError('parameter "ServiceOn" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('ModifyWafSwitch', params, options);
  }

}

module.exports = Client;


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
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
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

    return this.request('CreateDomainConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Caller - caller. required.
   * @param {String} Domain - domain. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
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

    return this.request('DeleteDomainConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
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
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
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
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
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
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
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
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Region - region. optional. default: cn.
   */
  describePackage(params = {}, options = {}) {
    return this.request('DescribePackage', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
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
   * @param {String} InstanceSource - instanceSource. optional. default: waf-cloud.
   * @param {String} Region - region. optional. default: cn.
   */
  describeRegionStatus(params = {}, options = {}) {
    return this.request('DescribeRegionStatus', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
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
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {RepeatList} f - f. required.
   * @param {String} n - n. optional.
   * @param {Integer} x - x. required.
   * @param {Long} s - s. required.
   * @param {Long} e - e. required.
   */
  getQps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'f')) {
      throw new TypeError('parameter "f" is required');
    }

    if (!hasOwnProperty(params, 'x')) {
      throw new TypeError('parameter "x" is required');
    }

    if (!hasOwnProperty(params, 's')) {
      throw new TypeError('parameter "s" is required');
    }

    if (!hasOwnProperty(params, 'e')) {
      throw new TypeError('parameter "e" is required');
    }

    return this.request('GetQps', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} instanceId - instanceId. required.
   * @param {String} Region - region. optional. default: cn.
   * @param {RepeatList} f - f. required.
   * @param {String} n - n. optional.
   * @param {Integer} x - x. required.
   * @param {Long} s - s. required.
   * @param {Long} e - e. required.
   */
  getQpsTotal(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'instanceId')) {
      throw new TypeError('parameter "instanceId" is required');
    }

    if (!hasOwnProperty(params, 'f')) {
      throw new TypeError('parameter "f" is required');
    }

    if (!hasOwnProperty(params, 'x')) {
      throw new TypeError('parameter "x" is required');
    }

    if (!hasOwnProperty(params, 's')) {
      throw new TypeError('parameter "s" is required');
    }

    if (!hasOwnProperty(params, 'e')) {
      throw new TypeError('parameter "e" is required');
    }

    return this.request('GetQpsTotal', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  getRegionList(params = {}, options = {}) {
    return this.request('GetRegionList', params, options);
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
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
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

    return this.request('ModifyDomainConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
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
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} Caller - caller. required.
   * @param {String} Domain - domain. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} ServiceOn - serviceOn. required.
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

    return this.request('ModifyWafSwitch', params, options);
  }

}

module.exports = Client;

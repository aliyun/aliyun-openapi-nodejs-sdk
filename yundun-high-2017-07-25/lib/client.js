
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
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ProxyType - proxyType. required.
   * @param {String} ProxyPorts - proxyPorts. required.
   * @param {String} Domain - domain. required.
   * @param {String} ClientAddresses - clientAddresses. required.
   * @param {Boolean} CcEnabled - ccEnabled. required.
   * @param {Long} AliUid - aliUid. required.
   */
  createDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ProxyType')) {
      throw new TypeError('parameter "ProxyType" is required');
    }

    if (!hasOwnProperty(params, 'ProxyPorts')) {
      throw new TypeError('parameter "ProxyPorts" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'ClientAddresses')) {
      throw new TypeError('parameter "ClientAddresses" is required');
    }

    if (!hasOwnProperty(params, 'CcEnabled')) {
      throw new TypeError('parameter "CcEnabled" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('CreateDomain', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Domain - domain. required.
   * @param {Long} AliUid - aliUid. required.
   */
  deleteDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('DeleteDomain', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {Long} AliUid - aliUid. required.
   */
  describeDomainCcStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('DescribeDomainCcStatus', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {Long} StartDateMillis - startDateMillis. required.
   * @param {Long} EndDateMillis - endDateMillis. required.
   * @param {Long} AliUid - aliUid. required.
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

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeDomainQps', params, options);
  }

  /**
   * @param {String} Ip - ip. required.
   * @param {Long} AliUid - aliUid. required.
   */
  describeIpInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('DescribeIpInfo', params, options);
  }

  /**
   * @param {String} Ip - ip. required.
   * @param {Long} StartDateMillis - startDateMillis. required.
   * @param {Long} EndDateMillis - endDateMillis. required.
   * @param {Long} AliUid - aliUid. required.
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

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('DescribeIpTraffic', params, options);
  }

  /**
   * @param {Long} StartDateMillis - startDateMillis. required.
   * @param {Long} EndDateMillis - endDateMillis. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} Start - start. required.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} InstanceId - instanceId. required.
   */
  describeIpTrafficPeak(params = {}, options = {}) {
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

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeIpTrafficPeak', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} AliUid - aliUid. required.
   */
  describeTotalAttackCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('DescribeTotalAttackCount', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Domain - domain. required.
   * @param {Boolean} CcEnabled - ccEnabled. optional.
   * @param {Boolean} CustomRuleEnabled - customRuleEnabled. optional.
   * @param {String} CcMode - ccMode. optional.
   * @param {Long} AliUid - aliUid. required.
   */
  modifyDomainCCStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('ModifyDomainCCStatus', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ProxyType - proxyType. required.
   * @param {String} ProxyPorts - proxyPorts. required.
   * @param {String} Domain - domain. required.
   * @param {String} ClientAddresses - clientAddresses. required.
   * @param {Long} AliUid - aliUid. required.
   */
  modifyDomainClientInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ProxyType')) {
      throw new TypeError('parameter "ProxyType" is required');
    }

    if (!hasOwnProperty(params, 'ProxyPorts')) {
      throw new TypeError('parameter "ProxyPorts" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'ClientAddresses')) {
      throw new TypeError('parameter "ClientAddresses" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('ModifyDomainClientInfo', params, options);
  }

  /**
   * @param {String} Ip - ip. required.
   * @param {Integer} ElasticBandwidth - elasticBandwidth. required.
   * @param {Long} AliUid - aliUid. required.
   */
  modifyElasticBandwidth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'ElasticBandwidth')) {
      throw new TypeError('parameter "ElasticBandwidth" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('ModifyElasticBandwidth', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Domain - domain. required.
   * @param {Long} CertId - certId. required.
   * @param {String} CertRegion - certRegion. required.
   * @param {Long} AliUid - aliUid. required.
   * @param {Long} OwnerId - ownerId. required.
   */
  modifyHttpsCert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'CertId')) {
      throw new TypeError('parameter "CertId" is required');
    }

    if (!hasOwnProperty(params, 'CertRegion')) {
      throw new TypeError('parameter "CertRegion" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('ModifyHttpsCert', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} AliUid - aliUid. required.
   */
  produceIps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('ProduceIps', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} AliUid - aliUid. required.
   */
  releaseInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('ReleaseInstance', params, options);
  }

}

module.exports = Client;

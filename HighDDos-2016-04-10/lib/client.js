
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-04-10';
    super(config);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Domain - domain. required.
   * @param {String} Protocols - protocols. required.
   * @param {String} SourceIps - sourceIps. required.
   * @param {Integer} WafEnable - wafEnable. optional.
   * @param {Integer} CcEnable - ccEnable. optional.
   */
  createDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Protocols')) {
      throw new TypeError('parameter "Protocols" is required');
    }

    if (!hasOwnProperty(params, 'SourceIps')) {
      throw new TypeError('parameter "SourceIps" is required');
    }

    return this.request('CreateDomain', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {Integer} Duration - duration. required.
   * @param {String} PricingCycle - pricingCycle. required.
   * @param {String} PackageCode - packageCode. required.
   * @param {Integer} Line - line. required.
   * @param {Integer} BaseBandwidth - baseBandwidth. required.
   * @param {Integer} ElasticBandwidth - elasticBandwidth. required.
   * @param {Integer} DomainCount - domainCount. required.
   * @param {Integer} BusinessBandwidth - businessBandwidth. required.
   * @param {Boolean} IsAutoRenew - autoRenew. optional. default: false.
   * @param {Integer} AutoRenewDuration - autoRenewPeriod. optional.
   */
  createInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'Duration')) {
      throw new TypeError('parameter "Duration" is required');
    }

    if (!hasOwnProperty(params, 'PricingCycle')) {
      throw new TypeError('parameter "PricingCycle" is required');
    }

    if (!hasOwnProperty(params, 'PackageCode')) {
      throw new TypeError('parameter "PackageCode" is required');
    }

    if (!hasOwnProperty(params, 'Line')) {
      throw new TypeError('parameter "Line" is required');
    }

    if (!hasOwnProperty(params, 'BaseBandwidth')) {
      throw new TypeError('parameter "BaseBandwidth" is required');
    }

    if (!hasOwnProperty(params, 'ElasticBandwidth')) {
      throw new TypeError('parameter "ElasticBandwidth" is required');
    }

    if (!hasOwnProperty(params, 'DomainCount')) {
      throw new TypeError('parameter "DomainCount" is required');
    }

    if (!hasOwnProperty(params, 'BusinessBandwidth')) {
      throw new TypeError('parameter "BusinessBandwidth" is required');
    }

    return this.request('CreateInstance', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ProtocolType - protocol. required.
   * @param {String} VipPort - vipPort. required.
   * @param {String} SourcePort - sourcePort. required.
   * @param {String} SourceIps - sourceIps. required.
   */
  createLay4Rule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ProtocolType')) {
      throw new TypeError('parameter "ProtocolType" is required');
    }

    if (!hasOwnProperty(params, 'VipPort')) {
      throw new TypeError('parameter "VipPort" is required');
    }

    if (!hasOwnProperty(params, 'SourcePort')) {
      throw new TypeError('parameter "SourcePort" is required');
    }

    if (!hasOwnProperty(params, 'SourceIps')) {
      throw new TypeError('parameter "SourceIps" is required');
    }

    return this.request('CreateLay4Rule', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {String} CommodityCode - commodityCode. required.
   * @param {String} OrderType - orderType. required.
   * @param {Integer} Duration - duration. required.
   * @param {String} DurationUnit - durationUnit. required.
   * @param {String} OrderInstanceId - orderInstanceId. optional.
   * @param {String} Line - line. optional.
   * @param {Integer} BaseBandwidth - baseBandwidth. optional.
   * @param {Integer} ElasticBandwidth - elasticBandwidth. optional.
   * @param {Integer} Amount - amount. optional.
   */
  createOrderInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'CommodityCode')) {
      throw new TypeError('parameter "CommodityCode" is required');
    }

    if (!hasOwnProperty(params, 'OrderType')) {
      throw new TypeError('parameter "OrderType" is required');
    }

    if (!hasOwnProperty(params, 'Duration')) {
      throw new TypeError('parameter "Duration" is required');
    }

    if (!hasOwnProperty(params, 'DurationUnit')) {
      throw new TypeError('parameter "DurationUnit" is required');
    }

    return this.request('CreateOrderInstance', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Domain - domain. required.
   */
  deleteDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('DeleteDomain', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} VipPort - vipPort. required.
   */
  deleteLay4Rule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'VipPort')) {
      throw new TypeError('parameter "VipPort" is required');
    }

    return this.request('DeleteLay4Rule', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Domains - domains. optional.
   * @param {Integer} PageNumber - currentPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  describeCcEvents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'BeginTime')) {
      throw new TypeError('parameter "BeginTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeCcEvents', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Domains - domains. optional.
   */
  describeCcFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
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
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} PageNumber - currentPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  describeDdosEvents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'BeginTime')) {
      throw new TypeError('parameter "BeginTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeDdosEvents', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   */
  describeDdosFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'BeginTime')) {
      throw new TypeError('parameter "BeginTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeDdosFlow', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Domain - domain. optional.
   * @param {Integer} PageNumber - currentPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeDomains(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeDomains', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} PageNumber - currentPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  describeLay4Rules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeLay4Rules', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Domains - domains. optional.
   * @param {Integer} PageNumber - currentPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  describeWafAttackEvents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'BeginTime')) {
      throw new TypeError('parameter "BeginTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeWafAttackEvents', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Domains - domains. optional.
   * @param {Integer} PageNumber - currentPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  describeWafAttackSourceStats(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'BeginTime')) {
      throw new TypeError('parameter "BeginTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeWafAttackSourceStats', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Domains - domains. optional.
   */
  describeWafAttackTypeStats(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'BeginTime')) {
      throw new TypeError('parameter "BeginTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeWafAttackTypeStats', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Domains - domains. optional.
   * @param {Integer} PageNumber - currentPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  describeWafAttackUrlStats(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'BeginTime')) {
      throw new TypeError('parameter "BeginTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeWafAttackUrlStats', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Domain - domain. required.
   * @param {Integer} Enable - enable. required.
   */
  modifyCcConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Enable')) {
      throw new TypeError('parameter "Enable" is required');
    }

    return this.request('ModifyCcConfig', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Domain - domain. required.
   * @param {String} Protocols - protocols. required.
   * @param {String} SourceIps - sourceIps. required.
   */
  modifyDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Protocols')) {
      throw new TypeError('parameter "Protocols" is required');
    }

    if (!hasOwnProperty(params, 'SourceIps')) {
      throw new TypeError('parameter "SourceIps" is required');
    }

    return this.request('ModifyDomain', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} VipPort - vipPort. required.
   * @param {String} SourceIps - sourceIps. required.
   */
  modifyLay4Rule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'VipPort')) {
      throw new TypeError('parameter "VipPort" is required');
    }

    if (!hasOwnProperty(params, 'SourceIps')) {
      throw new TypeError('parameter "SourceIps" is required');
    }

    return this.request('ModifyLay4Rule', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Domain - domain. required.
   * @param {Integer} Enable - enable. required.
   */
  modifyWafConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Enable')) {
      throw new TypeError('parameter "Enable" is required');
    }

    return this.request('ModifyWafConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  releaseInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ReleaseInstance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} Duration - duration. required.
   * @param {String} PricingCycle - pricingCycle. required.
   */
  renewInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Duration')) {
      throw new TypeError('parameter "Duration" is required');
    }

    if (!hasOwnProperty(params, 'PricingCycle')) {
      throw new TypeError('parameter "PricingCycle" is required');
    }

    return this.request('RenewInstance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} PackageCode - packageCode. required.
   * @param {Integer} DomainCount - domainCount. required.
   * @param {Integer} BusinessBandwidth - businessBandwidth. required.
   */
  upgradeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PackageCode')) {
      throw new TypeError('parameter "PackageCode" is required');
    }

    if (!hasOwnProperty(params, 'DomainCount')) {
      throw new TypeError('parameter "DomainCount" is required');
    }

    if (!hasOwnProperty(params, 'BusinessBandwidth')) {
      throw new TypeError('parameter "BusinessBandwidth" is required');
    }

    return this.request('UpgradeInstance', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Domain - domain. required.
   * @param {String} Cert - cert. required.
   */
  uploadHttpsCert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Cert')) {
      throw new TypeError('parameter "Cert" is required');
    }

    return this.request('UploadHttpsCert', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Domain - domain. required.
   * @param {String} Key - key. required.
   */
  uploadHttpsKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Key')) {
      throw new TypeError('parameter "Key" is required');
    }

    return this.request('UploadHttpsKey', params, options);
  }

}

module.exports = Client;

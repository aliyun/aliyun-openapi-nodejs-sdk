
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

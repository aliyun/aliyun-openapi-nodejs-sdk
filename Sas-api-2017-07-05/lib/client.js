
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-07-05';
    super(config);
  }

  /**
   */
  checkResourceAction(params = {}, options = {}) {
    return this.request('CheckResourceAction', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {Integer} Duration - duration. required.
   * @param {String} PricingCycle - pricingCycle. required.
   * @param {String} VersionCode - versionCode. required.
   * @param {Integer} BuyNumber - buyNumber. required.
   * @param {Boolean} IsAutoRenew - autoRenew. optional.
   * @param {Integer} AutoRenewDuration - autoRenewPeriod. optional.
   * @param {Boolean} SasLog - sasLog. optional. default: false.
   * @param {Boolean} SasScreen - sasScreen. optional. default: false.
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

    if (!hasOwnProperty(params, 'VersionCode')) {
      throw new TypeError('parameter "VersionCode" is required');
    }

    if (!hasOwnProperty(params, 'BuyNumber')) {
      throw new TypeError('parameter "BuyNumber" is required');
    }

    return this.request('CreateInstance', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Keyword - keyword. required.
   */
  describeAccountProfileByKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Keyword')) {
      throw new TypeError('parameter "Keyword" is required');
    }

    return this.request('DescribeAccountProfileByKey', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} EndDate - endDate. optional.
   * @param {Integer} HitDay - hitDay. optional.
   * @param {String} StartDate - startDate. optional.
   * @param {Integer} ApiType - apiType. optional.
   */
  describeHitRateColumn(params = {}, options = {}) {
    return this.request('DescribeHitRateColumn', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} EndDate - endDate. optional.
   * @param {String} StartDate - startDate. optional.
   * @param {Integer} ApiType - apiType. optional.
   * @param {Integer} HitDay - hitDay. optional.
   */
  describeHitRatePie(params = {}, options = {}) {
    return this.request('DescribeHitRatePie', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} ApiType - apiType. optional.
   */
  describePerDateData(params = {}, options = {}) {
    return this.request('DescribePerDateData', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} EndDate - endDate. optional.
   * @param {Integer} HitDay - hitDay. optional.
   * @param {String} StartDate - startDate. optional.
   * @param {Integer} ApiType - apiType. optional.
   */
  describeThreatDistribute(params = {}, options = {}) {
    return this.request('DescribeThreatDistribute', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} ApiType - apiType. optional.
   */
  describeThreatTypeLines(params = {}, options = {}) {
    return this.request('DescribeThreatTypeLines', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} ApiType - apiType. optional.
   */
  describeTotalAndRateLine(params = {}, options = {}) {
    return this.request('DescribeTotalAndRateLine', params, options);
  }

  /**
   * @param {String} Ip - ip. required.
   * @param {String} Phone - phone. required.
   * @param {Long} AccessTimestamp - timestamp. required.
   * @param {Integer} SensType - sensType. optional.
   * @param {Integer} BusinessType - businessType. optional.
   * @param {String} RequestUrl - requestUrl. optional.
   * @param {String} UserAgent - ua. optional.
   * @param {String} DeviceIdMd5 - didMd5. optional.
   * @param {String} Os - os. optional.
   * @param {Integer} DeviceType - deviceType. optional.
   * @param {Integer} ConnectionType - connectionType. optional.
   * @param {Integer} Carrier - carrier. optional.
   */
  getAccountProfile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'Phone')) {
      throw new TypeError('parameter "Phone" is required');
    }

    if (!hasOwnProperty(params, 'AccessTimestamp')) {
      throw new TypeError('parameter "AccessTimestamp" is required');
    }

    return this.request('GetAccountProfile', params, options);
  }

  /**
   * @param {Integer} Start - start. required.
   * @param {Integer} Limit - limit. required.
   */
  getApplicationAttackList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Start')) {
      throw new TypeError('parameter "Start" is required');
    }

    if (!hasOwnProperty(params, 'Limit')) {
      throw new TypeError('parameter "Limit" is required');
    }

    return this.request('GetApplicationAttackList', params, options);
  }

  /**
   * @param {Integer} Start - start. required.
   * @param {Integer} Limit - limit. required.
   */
  getCrackList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Start')) {
      throw new TypeError('parameter "Start" is required');
    }

    if (!hasOwnProperty(params, 'Limit')) {
      throw new TypeError('parameter "Limit" is required');
    }

    return this.request('GetCrackList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   */
  getInstanceCount(params = {}, options = {}) {
    return this.request('GetInstanceCount', params, options);
  }

  /**
   * @param {String} Ip - ip. required.
   * @param {Integer} SensType - sensType. optional.
   * @param {Integer} BusinessType - businessType. optional.
   * @param {String} RequestUrl - requestUrl. optional.
   * @param {String} UserAgent - ua. optional.
   * @param {String} DeviceIdMd5 - didMd5. optional.
   * @param {String} Os - os. optional.
   * @param {Integer} DeviceType - deviceType. optional.
   * @param {Integer} ConnectionType - connectionType. optional.
   * @param {Integer} Carrier - carrier. optional.
   */
  getIpProfile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('GetIpProfile', params, options);
  }

  /**
   * @param {String} Phone - phone. required.
   * @param {Integer} SensType - sensType. optional.
   * @param {Integer} BusinessType - businessType. optional.
   * @param {String} DataVersion - dataVersion. optional.
   */
  getPhoneProfile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Phone')) {
      throw new TypeError('parameter "Phone" is required');
    }

    return this.request('GetPhoneProfile', params, options);
  }

  /**
   * @param {Integer} Start - start. required.
   * @param {Integer} Limit - limit. required.
   */
  getSecurityEventList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Start')) {
      throw new TypeError('parameter "Start" is required');
    }

    if (!hasOwnProperty(params, 'Limit')) {
      throw new TypeError('parameter "Limit" is required');
    }

    return this.request('GetSecurityEventList', params, options);
  }

  /**
   * @param {Integer} Start - start. required.
   * @param {Integer} Limit - limit. required.
   */
  getThreatAnalyseList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Start')) {
      throw new TypeError('parameter "Start" is required');
    }

    if (!hasOwnProperty(params, 'Limit')) {
      throw new TypeError('parameter "Limit" is required');
    }

    return this.request('GetThreatAnalyseList', params, options);
  }

  /**
   */
  logicalDeleteResourceAction(params = {}, options = {}) {
    return this.request('LogicalDeleteResourceAction', params, options);
  }

  /**
   */
  physicalDeleteResourceAction(params = {}, options = {}) {
    return this.request('PhysicalDeleteResourceAction', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  refundInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('RefundInstance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} Duration - duration. required.
   * @param {String} PricingCycle - pricingCycle. required.
   * @param {Integer} BuyNumber - buyNumber. required.
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

    if (!hasOwnProperty(params, 'BuyNumber')) {
      throw new TypeError('parameter "BuyNumber" is required');
    }

    return this.request('RenewInstance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} VersionCode - versionCode. required.
   * @param {Integer} BuyNumber - buyNumber. required.
   */
  upgradeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'VersionCode')) {
      throw new TypeError('parameter "VersionCode" is required');
    }

    if (!hasOwnProperty(params, 'BuyNumber')) {
      throw new TypeError('parameter "BuyNumber" is required');
    }

    return this.request('UpgradeInstance', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Keyword - keyword. required.
   */
  describeAccountProfileByKeyWord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Keyword')) {
      throw new TypeError('parameter "Keyword" is required');
    }

    return this.request('describeAccountProfileByKeyWord', params, options);
  }

}

module.exports = Client;

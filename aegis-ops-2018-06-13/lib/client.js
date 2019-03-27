
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-06-13';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Bid - bid. optional.
   * @param {Long} AliUid - aliUid. required.
   */
  cleanCache(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('CleanCache', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserBuyType - userBuyType. required.
   * @param {String} BuyVersion - buyVersion. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  describeAliUidListByBuyType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserBuyType')) {
      throw new TypeError('parameter "UserBuyType" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeAliUidListByBuyType', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Bid - bid. optional.
   * @param {Long} AliUid - aliUid. required.
   */
  describeAssetSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('DescribeAssetSummary', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Bid - bid. optional.
   * @param {Long} AliUid - aliUid. required.
   */
  describeBuySummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('DescribeBuySummary', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Bid - bid. optional.
   * @param {Long} AliUid - aliUid. required.
   */
  describeCanTry(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('DescribeCanTry', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} AliUid - aliUid. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {String} Statuses - statuses. optional.
   * @param {String} Types - types. optional.
   * @param {String} Tag - tag. optional.
   * @param {String} Remark - remark. optional.
   */
  describeLoginLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('DescribeLoginLogs', params, options);
  }

  /**
   * @param {String} GcLevels - gcLevels. optional.
   * @param {String} UpdateVersion - updateVersion. optional.
   * @param {Boolean} Online - online. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Long} AliUid - aliUid. optional.
   * @param {String} ClientVersion - clientVersion. optional.
   * @param {String} IPs - ips. optional.
   * @param {String} Platform - platform. optional.
   * @param {String} Uuids - uuids. optional.
   */
  describeMachineInfoOpers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('DescribeMachineInfoOpers', params, options);
  }

  /**
   * @param {String} GcLevels - gcLevels. optional.
   * @param {String} UpdateVersion - updateVersion. optional.
   * @param {Boolean} Online - online. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Long} AliUid - aliUid. optional.
   * @param {String} ClientVersion - clientVersion. optional.
   * @param {String} IPs - ips. required.
   * @param {String} Platform - platform. optional.
   * @param {String} Uuids - uuids. optional.
   */
  describeMachineInfoOpersByIps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'IPs')) {
      throw new TypeError('parameter "IPs" is required');
    }

    return this.request('DescribeMachineInfoOpersByIps', params, options);
  }

  /**
   * @param {String} GcLevels - gcLevels. optional.
   * @param {String} UpdateVersion - updateVersion. optional.
   * @param {Boolean} Online - online. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Long} AliUid - aliUid. optional.
   * @param {String} ClientVersion - clientVersion. optional.
   * @param {String} IPs - ips. optional.
   * @param {String} Platform - platform. optional.
   * @param {String} Uuids - uuids. required.
   */
  describeMachineInfoOpersByUuids(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'Uuids')) {
      throw new TypeError('parameter "Uuids" is required');
    }

    return this.request('DescribeMachineInfoOpersByUuids', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Bid - bid. optional.
   * @param {Long} AliUid - aliUid. required.
   */
  describeNewBuySummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('DescribeNewBuySummary', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Bid - bid. optional.
   * @param {Long} AliUid - aliUid. required.
   */
  describeStatistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('DescribeStatistics', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Bid - bid. optional.
   * @param {Long} AliUid - aliUid. required.
   */
  describeVersionConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('DescribeVersionConfig', params, options);
  }

  /**
   * @param {String} AppName - appName. required.
   * @param {String} MethodName - methodName. required.
   * @param {String} Uuid - uuid. required.
   * @param {String} Arg1 - arg1. optional.
   * @param {String} Arg2 - arg2. optional.
   * @param {String} Arg3 - arg3. optional.
   */
  pushCommondToClient(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'MethodName')) {
      throw new TypeError('parameter "MethodName" is required');
    }

    if (!hasOwnProperty(params, 'Uuid')) {
      throw new TypeError('parameter "Uuid" is required');
    }

    return this.request('PushCommondToClient', params, options);
  }

  /**
   * @param {String} ProtocolType - protocolType. optional.
   * @param {String} Uuid - uuid. optional.
   * @param {String} Msg - msg. required.
   */
  pushProtocolByUuid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Msg')) {
      throw new TypeError('parameter "Msg" is required');
    }

    return this.request('PushProtocolByUuid', params, options);
  }

}

module.exports = Client;

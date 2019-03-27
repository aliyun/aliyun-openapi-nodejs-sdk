
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-02-01';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AccountId - accountId. optional.
   * @param {String} DomainName - domainName. required.
   */
  addDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('AddDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AccountId - accountId. optional.
   * @param {String} DomainName - domainName. required.
   */
  deleteDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DeleteDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AccountId - accountId. optional.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 20.
   */
  describeDomains(params = {}, options = {}) {
    return this.request('DescribeDomains', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  getAccountInfo(params = {}, options = {}) {
    return this.request('GetAccountInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} DomainName - domainName. required.
   */
  getGrayIPRegion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('GetGrayIPRegion', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} DomainName - domainName. required.
   */
  getIPRegionResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('GetIPRegionResult', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Granularity - granularity. required.
   * @param {Integer} TimeSpan - timeSpan. required.
   */
  getResolveCountSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Granularity')) {
      throw new TypeError('parameter "Granularity" is required');
    }

    if (!hasOwnProperty(params, 'TimeSpan')) {
      throw new TypeError('parameter "TimeSpan" is required');
    }

    return this.request('GetResolveCountSummary', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} Granularity - granularity. required.
   * @param {Integer} TimeSpan - timeSpan. required.
   * @param {String} ProtocolName - protocolName. optional. default: http.
   */
  getResolveStatistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Granularity')) {
      throw new TypeError('parameter "Granularity" is required');
    }

    if (!hasOwnProperty(params, 'TimeSpan')) {
      throw new TypeError('parameter "TimeSpan" is required');
    }

    return this.request('GetResolveStatistics', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  listDomains(params = {}, options = {}) {
    return this.request('ListDomains', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} SourceIp - sourceIp. optional.
   */
  resolveDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('ResolveDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} Payload - payload. required.
   */
  setGrayIPRegion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Payload')) {
      throw new TypeError('parameter "Payload" is required');
    }

    options.method = 'POST';
    return this.request('SetGrayIPRegion', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} Payload - payload. required.
   */
  setIPRegionResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Payload')) {
      throw new TypeError('parameter "Payload" is required');
    }

    options.method = 'POST';
    return this.request('SetIPRegionResult', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Boolean} EnableInterface - enableInterface. required.
   */
  switchUnsignedInterface(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EnableInterface')) {
      throw new TypeError('parameter "EnableInterface" is required');
    }

    return this.request('SwitchUnsignedInterface', params, options);
  }

}

module.exports = Client;


'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-07-18';
    super(config);
  }

  /**
   * @param {String} Region - region. optional. default: cn.
   * @param {String} Domain - domain. required.
   * @param {String} SourceIps - sourceIps. required.
   * @param {String} Protocols - protocols. required.
   * @param {Integer} IsProxy - isAccessProduct. optional. default: 0.
   */
  addDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'SourceIps')) {
      throw new TypeError('parameter "SourceIps" is required');
    }

    if (!hasOwnProperty(params, 'Protocols')) {
      throw new TypeError('parameter "Protocols" is required');
    }

    return this.request('AddDomain', params, options);
  }

  /**
   * @param {String} Region - region. optional. default: cn.
   * @param {String} Domain - domainKey. required.
   */
  getDomainInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('GetDomainInfo', params, options);
  }

  /**
   * @param {String} Region - region. optional. default: cn.
   * @param {String} Domain - domainKey. optional.
   * @param {Integer} CurrentPage - currentPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  getDomainList(params = {}, options = {}) {
    return this.request('GetDomainList', params, options);
  }

  /**
   */
  isBuyWaf(params = {}, options = {}) {
    return this.request('IsBuyWaf', params, options);
  }

  /**
   * @param {Integer} days - days. optional. default: 7.
   * @param {String} Region - region. optional. default: cn.
   */
  summaryStatistics(params = {}, options = {}) {
    return this.request('SummaryStatistics', params, options);
  }

  /**
   * @param {String} Region - region. optional. default: cn.
   * @param {String} Domain - domain. required.
   * @param {String} SourceIps - sourceIps. required.
   * @param {String} Protocols - protocols. required.
   * @param {Integer} IsProxy - isAccessProduct. required.
   */
  updateDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'SourceIps')) {
      throw new TypeError('parameter "SourceIps" is required');
    }

    if (!hasOwnProperty(params, 'Protocols')) {
      throw new TypeError('parameter "Protocols" is required');
    }

    if (!hasOwnProperty(params, 'IsProxy')) {
      throw new TypeError('parameter "IsProxy" is required');
    }

    return this.request('UpdateDomain', params, options);
  }

  /**
   * @param {Long} UserId - aliUid. required.
   * @param {String} Region - region. optional. default: cn.
   */
  userIsBuyWaf(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('UserIsBuyWaf', params, options);
  }

  /**
   * @param {String} Time - time. optional. default: week.
   * @param {String} Region - region. optional. default: cn.
   * @param {String} Domains - domains. optional.
   */
  webAttackCount(params = {}, options = {}) {
    return this.request('WebAttackCount', params, options);
  }

  /**
   * @param {String} Region - region. optional. default: cn.
   */
  whetherBuy(params = {}, options = {}) {
    return this.request('WhetherBuy', params, options);
  }

}

module.exports = Client;

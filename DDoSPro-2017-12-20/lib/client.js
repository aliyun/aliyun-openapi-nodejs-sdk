
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-12-20';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MatchingRule - mode. optional.
   * @param {String} Domain - domain. required.
   * @param {Integer} VisitCount - count. optional.
   * @param {String} Name - name. required.
   * @param {String} BlockingType - action. optional.
   * @param {Integer} Interval - interval. optional.
   * @param {Integer} BlockingTime - ttl. optional.
   * @param {String} Uri - uri. optional.
   */
  createCcCustomedRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateCcCustomedRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Domain - domain. required.
   * @param {String} Name - name. required.
   */
  deleteCcCustomedRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('DeleteCcCustomedRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Domain - domain. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - page. optional.
   */
  listCcCustomedRule(params = {}, options = {}) {
    return this.request('ListCcCustomedRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MatchingRule - mode. optional.
   * @param {String} Domain - domain. required.
   * @param {Integer} VisitCount - count. optional.
   * @param {String} Name - name. required.
   * @param {String} BlockingType - action. optional.
   * @param {Integer} Interval - interval. optional.
   * @param {Integer} BlockingTime - ttl. optional.
   * @param {String} Uri - uri. optional.
   */
  updateCcCustomedRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('UpdateCcCustomedRule', params, options);
  }

}

module.exports = Client;

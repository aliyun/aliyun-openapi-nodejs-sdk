
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-08-16';
    super(config);
  }

  /**
   * @param {String} AccountId - accountId. required.
   * @param {String} AccountOperateIp - clientIp. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} ApplicationName - applicationName. required.
   */
  delete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccountId')) {
      throw new TypeError('parameter "AccountId" is required');
    }

    if (!hasOwnProperty(params, 'AccountOperateIp')) {
      throw new TypeError('parameter "AccountOperateIp" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'ApplicationName')) {
      throw new TypeError('parameter "ApplicationName" is required');
    }

    return this.request('Delete', params, options);
  }

  /**
   * @param {String} AccountId - sessionUid. required.
   * @param {String} ApplicationId - applicationId. optional.
   * @param {String} StrategyType - type. optional.
   * @param {String} EnvName - envName. optional.
   * @param {String} StrategyId - strategyId. optional.
   * @param {String} StrategyName - strategyName. optional.
   * @param {String} TypeSetValue - setValue. optional.
   * @param {String} TypeRangeStart - rangeStart. optional.
   * @param {String} TypeRangeEnd - rangeEnd. optional.
   * @param {String} TypeRangeLength - rangeLength. optional.
   * @param {String} TypeSuffixValue - suffixValue. optional.
   * @param {String} TypeSuffixLength - suffixLength. optional.
   * @param {String} TypeGcLevels - gcLevels. optional.
   * @param {String} GrayCase - grayCase. optional.
   */
  modifyStrategyConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccountId')) {
      throw new TypeError('parameter "AccountId" is required');
    }

    return this.request('ModifyStrategyConfig', params, options);
  }

  /**
   * @param {String} AccountId - accountId. required.
   * @param {String} AccountOperateIp - clientIp. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} ApplicationName - applicationName. required.
   * @param {String} Content - content. required.
   */
  publish(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccountId')) {
      throw new TypeError('parameter "AccountId" is required');
    }

    if (!hasOwnProperty(params, 'AccountOperateIp')) {
      throw new TypeError('parameter "AccountOperateIp" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'ApplicationName')) {
      throw new TypeError('parameter "ApplicationName" is required');
    }

    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    return this.request('Publish', params, options);
  }

  /**
   * @param {String} AliUids - aliUids. required.
   */
  queryListByAliuidList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUids')) {
      throw new TypeError('parameter "AliUids" is required');
    }

    return this.request('QueryListByAliuidList', params, options);
  }

  /**
   * @param {String} GcLevel - gcLevel. required.
   * @param {Integer} QueryUidNum - queryUidNum. required.
   */
  queryListByGc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GcLevel')) {
      throw new TypeError('parameter "GcLevel" is required');
    }

    if (!hasOwnProperty(params, 'QueryUidNum')) {
      throw new TypeError('parameter "QueryUidNum" is required');
    }

    return this.request('QueryListByGc', params, options);
  }

  /**
   * @param {String} GcLevel - gcLevel. required.
   * @param {Integer} Page - page. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryPageByGc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GcLevel')) {
      throw new TypeError('parameter "GcLevel" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryPageByGc', params, options);
  }

  /**
   * @param {Long} AliUid - aliUid. required.
   */
  queryUserGcLevel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('QueryUserGcLevel', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} AliUid - uid. required.
   */
  queryUserGcLevelByJianyu(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('QueryUserGcLevelByJianyu', params, options);
  }

}

module.exports = Client;

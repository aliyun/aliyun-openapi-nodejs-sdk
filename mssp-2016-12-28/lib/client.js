
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-12-28';
    super(config);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {Integer} Duration - duration. required.
   * @param {String} PricingCycle - pricingCycle. optional.
   * @param {Integer} Count - count. required.
   * @param {String} VersionCode - versionCode. required.
   */
  createInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'Duration')) {
      throw new TypeError('parameter "Duration" is required');
    }

    if (!hasOwnProperty(params, 'Count')) {
      throw new TypeError('parameter "Count" is required');
    }

    if (!hasOwnProperty(params, 'VersionCode')) {
      throw new TypeError('parameter "VersionCode" is required');
    }

    return this.request('CreateInstance', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} InspectDate - inspectDate. optional.
   * @param {String} MssInspectTag - mssInspectTag. optional.
   */
  describeDailyInspection(params = {}, options = {}) {
    return this.request('DescribeDailyInspection', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   * @param {RepeatList} TaskNames - taskNames. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   */
  describeMssTaskInstances(params = {}, options = {}) {
    return this.request('DescribeMssTaskInstances', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Status - status. optional.
   * @param {String} TaskName - taskName. optional.
   */
  getTaskStatusCount(params = {}, options = {}) {
    return this.request('GetTaskStatusCount', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} TaskUuid - taskUuid. optional.
   * @param {Integer} Level - level. optional.
   * @param {String} Advise - advise. optional.
   * @param {String} Status - status. optional.
   */
  updateMssTaskAdvise(params = {}, options = {}) {
    return this.request('UpdateMssTaskAdvise', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} TaskUuid - taskUuid. optional.
   * @param {String} Status - status. optional.
   */
  updateMssTaskInstanceStatus(params = {}, options = {}) {
    return this.request('UpdateMssTaskInstanceStatus', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} Count - count. required.
   * @param {String} VersionCode - versionCode. required.
   */
  upgradeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Count')) {
      throw new TypeError('parameter "Count" is required');
    }

    if (!hasOwnProperty(params, 'VersionCode')) {
      throw new TypeError('parameter "VersionCode" is required');
    }

    return this.request('UpgradeInstance', params, options);
  }

}

module.exports = Client;

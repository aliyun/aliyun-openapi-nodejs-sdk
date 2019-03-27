
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-03-15';
    super(config);
  }

  /**
   * @param {String} ServerIpList - serverIpList. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Integer} Start - start. optional.
   * @param {Integer} Limit - limit. optional.
   */
  countAttackEvent(params = {}, options = {}) {
    return this.request('CountAttackEvent', params, options);
  }

  /**
   * @param {String} ServerIpList - serverIpList. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Integer} Start - start. optional.
   * @param {Integer} Limit - limit. optional.
   */
  queryAttackEvent(params = {}, options = {}) {
    return this.request('QueryAttackEvent', params, options);
  }

  /**
   * @param {String} ServerIpList - serverIpList. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Integer} Start - start. optional.
   * @param {Integer} Limit - limit. optional.
   */
  queryAttackedIp(params = {}, options = {}) {
    return this.request('QueryAttackedIp', params, options);
  }

  /**
   * @param {String} Ip - ip. required.
   * @param {String} AliUid - aliUid. required.
   * @param {String} InstanceType - type. required.
   */
  queryWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    return this.request('QueryWhiteList', params, options);
  }

  /**
   * @param {Integer} Status - status. required.
   * @param {String} TargetIp - targetIp. required.
   * @param {String} SourceIp - sourceIp. required.
   * @param {String} AliUid - aliUid. required.
   * @param {String} InstanceType - type. required.
   */
  updateWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    if (!hasOwnProperty(params, 'TargetIp')) {
      throw new TypeError('parameter "TargetIp" is required');
    }

    if (!hasOwnProperty(params, 'SourceIp')) {
      throw new TypeError('parameter "SourceIp" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    return this.request('UpdateWhiteList', params, options);
  }

}

module.exports = Client;

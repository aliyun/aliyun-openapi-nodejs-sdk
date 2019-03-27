
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-09-01';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {String} Identifier - identifier. required.
   */
  getInstanceAuth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    return this.request('GetInstanceAuth', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {Long} InstanceTime - instanceTime. required.
   * @param {String} InstanceKey - instanceKey. required.
   * @param {String} InstanceSign - instanceSign. required.
   */
  getInstanceLicense(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'InstanceTime')) {
      throw new TypeError('parameter "InstanceTime" is required');
    }

    if (!hasOwnProperty(params, 'InstanceKey')) {
      throw new TypeError('parameter "InstanceKey" is required');
    }

    if (!hasOwnProperty(params, 'InstanceSign')) {
      throw new TypeError('parameter "InstanceSign" is required');
    }

    return this.request('GetInstanceLicense', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {Long} InstanceTime - instanceTime. required.
   * @param {String} InstanceKey - instanceKey. required.
   * @param {String} InstanceSign - instanceSign. required.
   */
  getMonitorConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'InstanceTime')) {
      throw new TypeError('parameter "InstanceTime" is required');
    }

    if (!hasOwnProperty(params, 'InstanceKey')) {
      throw new TypeError('parameter "InstanceKey" is required');
    }

    if (!hasOwnProperty(params, 'InstanceSign')) {
      throw new TypeError('parameter "InstanceSign" is required');
    }

    return this.request('GetMonitorConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {Long} InstanceTime - instanceTime. required.
   * @param {String} InstanceKey - instanceKey. required.
   * @param {String} InstanceSign - instanceSign. required.
   * @param {String} Bucket - bucket. required.
   * @param {String} Path - path. required.
   */
  getOssAuth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'InstanceTime')) {
      throw new TypeError('parameter "InstanceTime" is required');
    }

    if (!hasOwnProperty(params, 'InstanceKey')) {
      throw new TypeError('parameter "InstanceKey" is required');
    }

    if (!hasOwnProperty(params, 'InstanceSign')) {
      throw new TypeError('parameter "InstanceSign" is required');
    }

    if (!hasOwnProperty(params, 'Bucket')) {
      throw new TypeError('parameter "Bucket" is required');
    }

    if (!hasOwnProperty(params, 'Path')) {
      throw new TypeError('parameter "Path" is required');
    }

    return this.request('GetOssAuth', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {Long} InstanceTime - instanceTime. required.
   * @param {String} InstanceKey - instanceKey. required.
   * @param {String} InstanceSign - instanceSign. required.
   */
  getOssConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'InstanceTime')) {
      throw new TypeError('parameter "InstanceTime" is required');
    }

    if (!hasOwnProperty(params, 'InstanceKey')) {
      throw new TypeError('parameter "InstanceKey" is required');
    }

    if (!hasOwnProperty(params, 'InstanceSign')) {
      throw new TypeError('parameter "InstanceSign" is required');
    }

    return this.request('GetOssConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {Long} InstanceTime - instanceTime. required.
   * @param {String} InstanceKey - instanceKey. required.
   * @param {String} InstanceSign - instanceSign. required.
   * @param {String} Bucket - bucket. required.
   * @param {String} Path - path. required.
   * @param {String} ObjectKey - objectKey. required.
   * @param {Integer} TtlTime - ttlTime. required.
   */
  getOssObjectDownloadUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'InstanceTime')) {
      throw new TypeError('parameter "InstanceTime" is required');
    }

    if (!hasOwnProperty(params, 'InstanceKey')) {
      throw new TypeError('parameter "InstanceKey" is required');
    }

    if (!hasOwnProperty(params, 'InstanceSign')) {
      throw new TypeError('parameter "InstanceSign" is required');
    }

    if (!hasOwnProperty(params, 'Bucket')) {
      throw new TypeError('parameter "Bucket" is required');
    }

    if (!hasOwnProperty(params, 'Path')) {
      throw new TypeError('parameter "Path" is required');
    }

    if (!hasOwnProperty(params, 'ObjectKey')) {
      throw new TypeError('parameter "ObjectKey" is required');
    }

    if (!hasOwnProperty(params, 'TtlTime')) {
      throw new TypeError('parameter "TtlTime" is required');
    }

    return this.request('GetOssObjectDownloadUrl', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {Long} InstanceTime - instanceTime. required.
   * @param {String} InstanceKey - instanceKey. required.
   * @param {String} InstanceSign - instanceSign. required.
   */
  getRdsConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'InstanceTime')) {
      throw new TypeError('parameter "InstanceTime" is required');
    }

    if (!hasOwnProperty(params, 'InstanceKey')) {
      throw new TypeError('parameter "InstanceKey" is required');
    }

    if (!hasOwnProperty(params, 'InstanceSign')) {
      throw new TypeError('parameter "InstanceSign" is required');
    }

    return this.request('GetRdsConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {Long} InstanceTime - instanceTime. required.
   * @param {String} InstanceKey - instanceKey. required.
   * @param {String} InstanceSign - instanceSign. required.
   * @param {String} Project - project. required.
   * @param {String} Logstore - logstore. required.
   */
  getSlsAuth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'InstanceTime')) {
      throw new TypeError('parameter "InstanceTime" is required');
    }

    if (!hasOwnProperty(params, 'InstanceKey')) {
      throw new TypeError('parameter "InstanceKey" is required');
    }

    if (!hasOwnProperty(params, 'InstanceSign')) {
      throw new TypeError('parameter "InstanceSign" is required');
    }

    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'Logstore')) {
      throw new TypeError('parameter "Logstore" is required');
    }

    return this.request('GetSlsAuth', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {Long} InstanceTime - instanceTime. required.
   * @param {String} InstanceKey - instanceKey. required.
   * @param {String} InstanceSign - instanceSign. required.
   */
  getSlsConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'InstanceTime')) {
      throw new TypeError('parameter "InstanceTime" is required');
    }

    if (!hasOwnProperty(params, 'InstanceKey')) {
      throw new TypeError('parameter "InstanceKey" is required');
    }

    if (!hasOwnProperty(params, 'InstanceSign')) {
      throw new TypeError('parameter "InstanceSign" is required');
    }

    return this.request('GetSlsConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {Long} InstanceTime - instanceTime. required.
   * @param {String} InstanceKey - instanceKey. required.
   * @param {String} InstanceSign - instanceSign. required.
   * @param {String} MessageType - messageType. required.
   * @param {String} FingerId - fingerId. required.
   * @param {String} Param - param. required.
   * @param {RepeatList} EmailList - emailList. required.
   */
  sendEmailMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'InstanceTime')) {
      throw new TypeError('parameter "InstanceTime" is required');
    }

    if (!hasOwnProperty(params, 'InstanceKey')) {
      throw new TypeError('parameter "InstanceKey" is required');
    }

    if (!hasOwnProperty(params, 'InstanceSign')) {
      throw new TypeError('parameter "InstanceSign" is required');
    }

    if (!hasOwnProperty(params, 'MessageType')) {
      throw new TypeError('parameter "MessageType" is required');
    }

    if (!hasOwnProperty(params, 'FingerId')) {
      throw new TypeError('parameter "FingerId" is required');
    }

    if (!hasOwnProperty(params, 'Param')) {
      throw new TypeError('parameter "Param" is required');
    }

    if (!hasOwnProperty(params, 'EmailList')) {
      throw new TypeError('parameter "EmailList" is required');
    }

    return this.request('SendEmailMessage', params, options);
  }

}

module.exports = Client;

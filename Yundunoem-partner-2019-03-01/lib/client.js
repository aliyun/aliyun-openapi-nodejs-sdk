
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2019-03-01';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ClusterUuid - clusterUuid. required.
   */
  getClusterAuth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterUuid')) {
      throw new TypeError('parameter "ClusterUuid" is required');
    }

    return this.request('GetClusterAuth', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ClusterUuid - clusterUuid. required.
   * @param {Long} ClusterTime - clusterTime. required.
   * @param {String} ClusterKey - clusterKey. required.
   * @param {String} ClusterSign - clusterSign. required.
   */
  getMonitorConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterUuid')) {
      throw new TypeError('parameter "ClusterUuid" is required');
    }

    if (!hasOwnProperty(params, 'ClusterTime')) {
      throw new TypeError('parameter "ClusterTime" is required');
    }

    if (!hasOwnProperty(params, 'ClusterKey')) {
      throw new TypeError('parameter "ClusterKey" is required');
    }

    if (!hasOwnProperty(params, 'ClusterSign')) {
      throw new TypeError('parameter "ClusterSign" is required');
    }

    return this.request('GetMonitorConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ClusterUuid - clusterUuid. required.
   * @param {Long} ClusterTime - clusterTime. required.
   * @param {String} ClusterKey - clusterKey. required.
   * @param {String} ClusterSign - clusterSign. required.
   * @param {String} Bucket - bucket. required.
   * @param {String} Path - path. required.
   */
  getOssAuth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterUuid')) {
      throw new TypeError('parameter "ClusterUuid" is required');
    }

    if (!hasOwnProperty(params, 'ClusterTime')) {
      throw new TypeError('parameter "ClusterTime" is required');
    }

    if (!hasOwnProperty(params, 'ClusterKey')) {
      throw new TypeError('parameter "ClusterKey" is required');
    }

    if (!hasOwnProperty(params, 'ClusterSign')) {
      throw new TypeError('parameter "ClusterSign" is required');
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
   * @param {String} RegionId - regionId. optional.
   * @param {String} ClusterUuid - clusterUuid. required.
   * @param {Long} ClusterTime - clusterTime. required.
   * @param {String} ClusterKey - clusterKey. required.
   * @param {String} ClusterSign - clusterSign. required.
   */
  getOssConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterUuid')) {
      throw new TypeError('parameter "ClusterUuid" is required');
    }

    if (!hasOwnProperty(params, 'ClusterTime')) {
      throw new TypeError('parameter "ClusterTime" is required');
    }

    if (!hasOwnProperty(params, 'ClusterKey')) {
      throw new TypeError('parameter "ClusterKey" is required');
    }

    if (!hasOwnProperty(params, 'ClusterSign')) {
      throw new TypeError('parameter "ClusterSign" is required');
    }

    return this.request('GetOssConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ClusterUuid - clusterUuid. required.
   * @param {Long} ClusterTime - clusterTime. required.
   * @param {String} ClusterKey - clusterKey. required.
   * @param {String} ClusterSign - clusterSign. required.
   * @param {String} Bucket - bucket. required.
   * @param {String} Path - path. required.
   * @param {String} ObjectKey - objectKey. required.
   * @param {Integer} TtlTime - ttlTime. required.
   */
  getOssObjectDownloadUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterUuid')) {
      throw new TypeError('parameter "ClusterUuid" is required');
    }

    if (!hasOwnProperty(params, 'ClusterTime')) {
      throw new TypeError('parameter "ClusterTime" is required');
    }

    if (!hasOwnProperty(params, 'ClusterKey')) {
      throw new TypeError('parameter "ClusterKey" is required');
    }

    if (!hasOwnProperty(params, 'ClusterSign')) {
      throw new TypeError('parameter "ClusterSign" is required');
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
   * @param {String} RegionId - regionId. optional.
   * @param {String} ClusterUuid - clusterUuid. required.
   * @param {Long} ClusterTime - clusterTime. required.
   * @param {String} ClusterKey - clusterKey. required.
   * @param {String} ClusterSign - clusterSign. required.
   */
  getRdsConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterUuid')) {
      throw new TypeError('parameter "ClusterUuid" is required');
    }

    if (!hasOwnProperty(params, 'ClusterTime')) {
      throw new TypeError('parameter "ClusterTime" is required');
    }

    if (!hasOwnProperty(params, 'ClusterKey')) {
      throw new TypeError('parameter "ClusterKey" is required');
    }

    if (!hasOwnProperty(params, 'ClusterSign')) {
      throw new TypeError('parameter "ClusterSign" is required');
    }

    return this.request('GetRdsConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ClusterUuid - clusterUuid. required.
   * @param {Long} ClusterTime - clusterTime. required.
   * @param {String} ClusterKey - clusterKey. required.
   * @param {String} ClusterSign - clusterSign. required.
   * @param {String} Project - project. required.
   * @param {String} Logstore - logstore. required.
   */
  getSlsAuth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterUuid')) {
      throw new TypeError('parameter "ClusterUuid" is required');
    }

    if (!hasOwnProperty(params, 'ClusterTime')) {
      throw new TypeError('parameter "ClusterTime" is required');
    }

    if (!hasOwnProperty(params, 'ClusterKey')) {
      throw new TypeError('parameter "ClusterKey" is required');
    }

    if (!hasOwnProperty(params, 'ClusterSign')) {
      throw new TypeError('parameter "ClusterSign" is required');
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
   * @param {String} RegionId - regionId. optional.
   * @param {String} ClusterUuid - clusterUuid. required.
   * @param {Long} ClusterTime - clusterTime. required.
   * @param {String} ClusterKey - clusterKey. required.
   * @param {String} ClusterSign - clusterSign. required.
   */
  getSlsConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterUuid')) {
      throw new TypeError('parameter "ClusterUuid" is required');
    }

    if (!hasOwnProperty(params, 'ClusterTime')) {
      throw new TypeError('parameter "ClusterTime" is required');
    }

    if (!hasOwnProperty(params, 'ClusterKey')) {
      throw new TypeError('parameter "ClusterKey" is required');
    }

    if (!hasOwnProperty(params, 'ClusterSign')) {
      throw new TypeError('parameter "ClusterSign" is required');
    }

    return this.request('GetSlsConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ClusterUuid - clusterUuid. required.
   * @param {Long} ClusterTime - clusterTime. required.
   * @param {String} ClusterKey - clusterKey. required.
   * @param {String} ClusterSign - clusterSign. required.
   * @param {String} MessageType - messageType. required.
   * @param {String} FingerId - fingerId. required.
   * @param {String} Param - messageParams. required.
   * @param {RepeatList} EmailList - receiverList. required.
   */
  sendEmailMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterUuid')) {
      throw new TypeError('parameter "ClusterUuid" is required');
    }

    if (!hasOwnProperty(params, 'ClusterTime')) {
      throw new TypeError('parameter "ClusterTime" is required');
    }

    if (!hasOwnProperty(params, 'ClusterKey')) {
      throw new TypeError('parameter "ClusterKey" is required');
    }

    if (!hasOwnProperty(params, 'ClusterSign')) {
      throw new TypeError('parameter "ClusterSign" is required');
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

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ClusterUuid - clusterUuid. required.
   * @param {Long} ClusterTime - clusterTime. required.
   * @param {String} ClusterKey - clusterKey. required.
   * @param {String} ClusterSign - clusterSign. required.
   * @param {String} MessageType - messageType. required.
   * @param {String} FingerId - fingerId. required.
   * @param {String} Param - messageParams. required.
   * @param {RepeatList} MobileList - receiverList. required.
   */
  sendShortMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterUuid')) {
      throw new TypeError('parameter "ClusterUuid" is required');
    }

    if (!hasOwnProperty(params, 'ClusterTime')) {
      throw new TypeError('parameter "ClusterTime" is required');
    }

    if (!hasOwnProperty(params, 'ClusterKey')) {
      throw new TypeError('parameter "ClusterKey" is required');
    }

    if (!hasOwnProperty(params, 'ClusterSign')) {
      throw new TypeError('parameter "ClusterSign" is required');
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

    if (!hasOwnProperty(params, 'MobileList')) {
      throw new TypeError('parameter "MobileList" is required');
    }

    return this.request('SendShortMessage', params, options);
  }

}

module.exports = Client;

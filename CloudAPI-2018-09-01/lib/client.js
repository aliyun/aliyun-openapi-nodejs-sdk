
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
   * @param {String} GroupIds - groupIds. optional.
   * @param {Long} LastTimestamp - lastTimestamp. required.
   * @param {Boolean} IncludeDeleted - includeDeleted. optional.
   * @param {Long} LastId - lastId. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 100.
   */
  loadApiAuthorizations(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LastTimestamp')) {
      throw new TypeError('parameter "LastTimestamp" is required');
    }

    return this.request('LoadApiAuthorizations', params, options);
  }

  /**
   * @param {String} GroupIds - groupIds. optional.
   * @param {Long} LastTimestamp - lastTimestamp. required.
   * @param {Boolean} IncludeDeleted - includeDeleted. optional.
   * @param {String} LastId - lastId. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  loadApis(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LastTimestamp')) {
      throw new TypeError('parameter "LastTimestamp" is required');
    }

    return this.request('LoadApis', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. optional.
   * @param {Long} LastTimestamp - lastTimestamp. optional.
   * @param {Boolean} IncludeDeleted - includeDeleted. optional.
   * @param {String} LastId - lastId. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  loadGroups(params = {}, options = {}) {
    return this.request('LoadGroups', params, options);
  }

  /**
   * @param {Long} LastTimestamp - lastTimestamp. required.
   * @param {Long} LastId - lastId. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 100.
   */
  loadMarketSubscriptions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LastTimestamp')) {
      throw new TypeError('parameter "LastTimestamp" is required');
    }

    return this.request('LoadMarketSubscriptions', params, options);
  }

  /**
   * @param {String} SourceVpcId - sourceVpcId. required.
   * @param {String} TargetVpcId - targetVpcId. required.
   * @param {String} TargetInstance - targetInstance. required.
   * @param {Integer} Port - port. required.
   */
  loadVpcAccess(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceVpcId')) {
      throw new TypeError('parameter "SourceVpcId" is required');
    }

    if (!hasOwnProperty(params, 'TargetVpcId')) {
      throw new TypeError('parameter "TargetVpcId" is required');
    }

    if (!hasOwnProperty(params, 'TargetInstance')) {
      throw new TypeError('parameter "TargetInstance" is required');
    }

    if (!hasOwnProperty(params, 'Port')) {
      throw new TypeError('parameter "Port" is required');
    }

    return this.request('LoadVpcAccess', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} ReportTime - reportTime. required.
   * @param {Integer} ReportInterval - reportInterval. required.
   * @param {Integer} Rps - rps. required.
   * @param {Integer} TotalRequests - totalRequests. required.
   * @param {Integer} TotalErrors - totalErrors. required.
   * @param {Long} ThroughputInbound - throughputInbound. required.
   * @param {Long} ThroughputOutbound - throughputOutbound. required.
   * @param {String} Errors - errors. optional.
   * @param {String} Extension - extension. optional.
   * @param {String} DomainName - domainName. required.
   */
  reportGroupStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ReportTime')) {
      throw new TypeError('parameter "ReportTime" is required');
    }

    if (!hasOwnProperty(params, 'ReportInterval')) {
      throw new TypeError('parameter "ReportInterval" is required');
    }

    if (!hasOwnProperty(params, 'Rps')) {
      throw new TypeError('parameter "Rps" is required');
    }

    if (!hasOwnProperty(params, 'TotalRequests')) {
      throw new TypeError('parameter "TotalRequests" is required');
    }

    if (!hasOwnProperty(params, 'TotalErrors')) {
      throw new TypeError('parameter "TotalErrors" is required');
    }

    if (!hasOwnProperty(params, 'ThroughputInbound')) {
      throw new TypeError('parameter "ThroughputInbound" is required');
    }

    if (!hasOwnProperty(params, 'ThroughputOutbound')) {
      throw new TypeError('parameter "ThroughputOutbound" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('ReportGroupStatus', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} EcsInstanceId - serverId. required.
   * @param {String} ReportTime - reportTime. required.
   * @param {Integer} ReportInterval - reportInterval. required.
   * @param {Integer} Rps - rps. required.
   * @param {Integer} TotalRequests - totalRequests. required.
   * @param {Integer} TotalErrors - totalErrors. required.
   * @param {Long} ThroughputInbound - throughputInbound. required.
   * @param {Long} ThroughputOutbound - throughputOutbound. required.
   * @param {String} Errors - errors. optional.
   * @param {String} SystemMetrics - systemMetrics. required.
   * @param {String} Extension - extension. optional.
   * @param {String} ImageVersion - imageVersion. required.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vSwitchId. optional.
   * @param {String} PrivateIp - privateIp. required.
   */
  reportServerStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'EcsInstanceId')) {
      throw new TypeError('parameter "EcsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ReportTime')) {
      throw new TypeError('parameter "ReportTime" is required');
    }

    if (!hasOwnProperty(params, 'ReportInterval')) {
      throw new TypeError('parameter "ReportInterval" is required');
    }

    if (!hasOwnProperty(params, 'Rps')) {
      throw new TypeError('parameter "Rps" is required');
    }

    if (!hasOwnProperty(params, 'TotalRequests')) {
      throw new TypeError('parameter "TotalRequests" is required');
    }

    if (!hasOwnProperty(params, 'TotalErrors')) {
      throw new TypeError('parameter "TotalErrors" is required');
    }

    if (!hasOwnProperty(params, 'ThroughputInbound')) {
      throw new TypeError('parameter "ThroughputInbound" is required');
    }

    if (!hasOwnProperty(params, 'ThroughputOutbound')) {
      throw new TypeError('parameter "ThroughputOutbound" is required');
    }

    if (!hasOwnProperty(params, 'SystemMetrics')) {
      throw new TypeError('parameter "SystemMetrics" is required');
    }

    if (!hasOwnProperty(params, 'ImageVersion')) {
      throw new TypeError('parameter "ImageVersion" is required');
    }

    if (!hasOwnProperty(params, 'PrivateIp')) {
      throw new TypeError('parameter "PrivateIp" is required');
    }

    return this.request('ReportServerStatus', params, options);
  }

}

module.exports = Client;


'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-11-25';
    super(config);
  }

  /**
   * @param {String} ProcessId - processId. required.
   */
  cancelProcess(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProcessId')) {
      throw new TypeError('parameter "ProcessId" is required');
    }

    options.method = 'POST';
    return this.request('CancelProcess', params, options);
  }

  /**
   * @param {String} ProcessId - processId. required.
   */
  getProcessStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProcessId')) {
      throw new TypeError('parameter "ProcessId" is required');
    }

    return this.request('GetProcessStatus', params, options);
  }

  /**
   * @param {String} ProcessId - processId. required.
   */
  getProducingProgress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProcessId')) {
      throw new TypeError('parameter "ProcessId" is required');
    }

    return this.request('GetProducingProgress', params, options);
  }

  /**
   * @param {String} ProcessId - processId. required.
   * @param {String} EcsInstanceId - ecsInstanceId. required.
   * @param {String} SecurityGroupId - securityGroupId. required.
   * @param {String} NicType - nicType. optional.
   */
  getSecurityGroupAttributes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProcessId')) {
      throw new TypeError('parameter "ProcessId" is required');
    }

    if (!hasOwnProperty(params, 'EcsInstanceId')) {
      throw new TypeError('parameter "EcsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityGroupId')) {
      throw new TypeError('parameter "SecurityGroupId" is required');
    }

    return this.request('GetSecurityGroupAttributes', params, options);
  }

  /**
   * @param {String} ProcessId - processId. required.
   * @param {String} EcsInstanceId - ecsInstanceId. required.
   */
  getSecurityGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProcessId')) {
      throw new TypeError('parameter "ProcessId" is required');
    }

    if (!hasOwnProperty(params, 'EcsInstanceId')) {
      throw new TypeError('parameter "EcsInstanceId" is required');
    }

    return this.request('GetSecurityGroups', params, options);
  }

  /**
   */
  getUploadPolicy(params = {}, options = {}) {
    return this.request('GetUploadPolicy', params, options);
  }

  /**
   * @param {String} SrcAliyunUid - srcAliyunUid. required.
   * @param {String} EcsInstanceId - ecsInstanceId. optional.
   * @param {String} DestEcsSecurityGroupId - destEcsSecurityGroupId. optional.
   * @param {String} RdsInstanceId - rdsInstanceId. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} NoticeFileId - noticeFileId. required.
   * @param {String} CaseFilingFileId - caseFilingFileId. required.
   * @param {String} CertificateFileId - certificateFileId. required.
   * @param {String} ContactInfoFileId - contactInfoFileId. optional.
   * @param {String} DestOssEndpoint - destOssEndpoint. optional.
   * @param {String} DestOssBucket - destOssBucket. optional.
   */
  startNewProcess(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SrcAliyunUid')) {
      throw new TypeError('parameter "SrcAliyunUid" is required');
    }

    if (!hasOwnProperty(params, 'NoticeFileId')) {
      throw new TypeError('parameter "NoticeFileId" is required');
    }

    if (!hasOwnProperty(params, 'CaseFilingFileId')) {
      throw new TypeError('parameter "CaseFilingFileId" is required');
    }

    if (!hasOwnProperty(params, 'CertificateFileId')) {
      throw new TypeError('parameter "CertificateFileId" is required');
    }

    options.method = 'POST';
    return this.request('StartNewProcess', params, options);
  }

  /**
   * @param {String} ProcessId - processId. required.
   */
  getProcessResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProcessId')) {
      throw new TypeError('parameter "ProcessId" is required');
    }

    return this.request('getProcessResult', params, options);
  }

}

module.exports = Client;

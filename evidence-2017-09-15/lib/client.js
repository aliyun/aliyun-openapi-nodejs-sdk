
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-09-15';
    super(config);
  }

  /**
   * @param {Long} EviUserId - eviUserId. required.
   * @param {String} ProcessId - processId. required.
   */
  cancelProcess(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EviUserId')) {
      throw new TypeError('parameter "EviUserId" is required');
    }

    if (!hasOwnProperty(params, 'ProcessId')) {
      throw new TypeError('parameter "ProcessId" is required');
    }

    return this.request('CancelProcess', params, options);
  }

  /**
   * @param {Long} EviUserId - eviUserId. required.
   * @param {String} ProcessId - processId. optional.
   * @param {String} InsId - insId. optional.
   */
  getProcessResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EviUserId')) {
      throw new TypeError('parameter "EviUserId" is required');
    }

    return this.request('GetProcessResult', params, options);
  }

  /**
   * @param {Long} EviUserId - eviUserId. required.
   * @param {String} ProcessId - processId. optional.
   * @param {String} InsId - insId. optional.
   */
  getSecurityGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EviUserId')) {
      throw new TypeError('parameter "EviUserId" is required');
    }

    return this.request('GetSecurityGroups', params, options);
  }

  /**
   * @param {Long} EviUserId - eviUserId. required.
   */
  getUploadPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EviUserId')) {
      throw new TypeError('parameter "EviUserId" is required');
    }

    return this.request('GetUploadPolicy', params, options);
  }

  /**
   * @param {Long} EviUserId - eviUserId. required.
   * @param {String} EcsInstanceId - ecsInstanceId. optional.
   * @param {String} RdsInstanceId - rdsInstanceId. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} NoticeFileId - noticeFileId. required.
   * @param {String} CaseFilingFileId - caseFilingFileId. required.
   * @param {String} CertificateFileId - certificateFileId. required.
   * @param {String} DestOssBucket - destOssBucket. optional.
   * @param {Json} FileIds - fileIds. optional.
   */
  startNewProcess(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EviUserId')) {
      throw new TypeError('parameter "EviUserId" is required');
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

    return this.request('StartNewProcess', params, options);
  }

}

module.exports = Client;


'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-06-28';
    super(config);
  }

  /**
   * @param {String} OSSEndpoint - endpoint. required.
   * @param {String} OSSBucket - bucket. required.
   * @param {String} OSSAccessKeyId - accessKeyId. required.
   * @param {String} OSSSecretAccessKey - secretAccessKey. required.
   * @param {String} OSSFileKey - OSSFileKey. required.
   */
  commandReplyByWb(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OSSEndpoint')) {
      throw new TypeError('parameter "OSSEndpoint" is required');
    }

    if (!hasOwnProperty(params, 'OSSBucket')) {
      throw new TypeError('parameter "OSSBucket" is required');
    }

    if (!hasOwnProperty(params, 'OSSAccessKeyId')) {
      throw new TypeError('parameter "OSSAccessKeyId" is required');
    }

    if (!hasOwnProperty(params, 'OSSSecretAccessKey')) {
      throw new TypeError('parameter "OSSSecretAccessKey" is required');
    }

    if (!hasOwnProperty(params, 'OSSFileKey')) {
      throw new TypeError('parameter "OSSFileKey" is required');
    }

    return this.request('CommandReplyByWb', params, options);
  }

  /**
   * @param {String} OSSEndpoint - endpoint. required.
   * @param {String} OSSBucket - bucket. required.
   * @param {String} OSSAccessKeyId - accessKeyId. required.
   * @param {String} OSSSecretAccessKey - secretAccessKey. required.
   * @param {String} OSSFileKey - OSSFileKey. required.
   */
  downloadFromGuanjuByWb(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OSSEndpoint')) {
      throw new TypeError('parameter "OSSEndpoint" is required');
    }

    if (!hasOwnProperty(params, 'OSSBucket')) {
      throw new TypeError('parameter "OSSBucket" is required');
    }

    if (!hasOwnProperty(params, 'OSSAccessKeyId')) {
      throw new TypeError('parameter "OSSAccessKeyId" is required');
    }

    if (!hasOwnProperty(params, 'OSSSecretAccessKey')) {
      throw new TypeError('parameter "OSSSecretAccessKey" is required');
    }

    if (!hasOwnProperty(params, 'OSSFileKey')) {
      throw new TypeError('parameter "OSSFileKey" is required');
    }

    return this.request('DownloadFromGuanjuByWb', params, options);
  }

  /**
   * @param {String} OSSEndpoint - endpoint. required.
   * @param {String} OSSBucket - bucket. required.
   * @param {String} OSSAccessKeyId - accessKeyId. required.
   * @param {String} OSSSecretAccessKey - secretAccessKey. required.
   * @param {String} OSSPrefix - prefix. required.
   * @param {String} FTPHost - ftpHost. required.
   * @param {String} FTPPwd - ftpPwd. required.
   * @param {String} FTPUserName - ftpUserName. required.
   * @param {Integer} FTPPort - ftpPort. required.
   * @param {String} FTPFilePath - filePath. required.
   * @param {Integer} FTPProtoclType - protoclType. required.
   */
  uploadFileToGuanju(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OSSEndpoint')) {
      throw new TypeError('parameter "OSSEndpoint" is required');
    }

    if (!hasOwnProperty(params, 'OSSBucket')) {
      throw new TypeError('parameter "OSSBucket" is required');
    }

    if (!hasOwnProperty(params, 'OSSAccessKeyId')) {
      throw new TypeError('parameter "OSSAccessKeyId" is required');
    }

    if (!hasOwnProperty(params, 'OSSSecretAccessKey')) {
      throw new TypeError('parameter "OSSSecretAccessKey" is required');
    }

    if (!hasOwnProperty(params, 'OSSPrefix')) {
      throw new TypeError('parameter "OSSPrefix" is required');
    }

    if (!hasOwnProperty(params, 'FTPHost')) {
      throw new TypeError('parameter "FTPHost" is required');
    }

    if (!hasOwnProperty(params, 'FTPPwd')) {
      throw new TypeError('parameter "FTPPwd" is required');
    }

    if (!hasOwnProperty(params, 'FTPUserName')) {
      throw new TypeError('parameter "FTPUserName" is required');
    }

    if (!hasOwnProperty(params, 'FTPPort')) {
      throw new TypeError('parameter "FTPPort" is required');
    }

    if (!hasOwnProperty(params, 'FTPFilePath')) {
      throw new TypeError('parameter "FTPFilePath" is required');
    }

    if (!hasOwnProperty(params, 'FTPProtoclType')) {
      throw new TypeError('parameter "FTPProtoclType" is required');
    }

    return this.request('UploadFileToGuanju', params, options);
  }

  /**
   * @param {String} OSSEndpoint - endpoint. required.
   * @param {String} OSSBucket - bucket. required.
   * @param {String} OSSAccessKeyId - accessKeyId. required.
   * @param {String} OSSSecretAccessKey - secretAccessKey. required.
   * @param {String} OSSFileKey - OSSFileKey. required.
   */
  uploadToGuanjuByWb(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OSSEndpoint')) {
      throw new TypeError('parameter "OSSEndpoint" is required');
    }

    if (!hasOwnProperty(params, 'OSSBucket')) {
      throw new TypeError('parameter "OSSBucket" is required');
    }

    if (!hasOwnProperty(params, 'OSSAccessKeyId')) {
      throw new TypeError('parameter "OSSAccessKeyId" is required');
    }

    if (!hasOwnProperty(params, 'OSSSecretAccessKey')) {
      throw new TypeError('parameter "OSSSecretAccessKey" is required');
    }

    if (!hasOwnProperty(params, 'OSSFileKey')) {
      throw new TypeError('parameter "OSSFileKey" is required');
    }

    return this.request('UploadToGuanjuByWb', params, options);
  }

}

module.exports = Client;

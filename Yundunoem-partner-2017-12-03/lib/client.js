
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-12-03';
    super(config);
  }

  /**
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {String} AbToken - abToken. required.
   * @param {String} Name - name. required.
   * @param {String} OssKey - ossKey. required.
   * @param {Integer} Type - type. required.
   * @param {String} EndPoint - endPoint. required.
   */
  createBackup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'OssKey')) {
      throw new TypeError('parameter "OssKey" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'EndPoint')) {
      throw new TypeError('parameter "EndPoint" is required');
    }

    return this.request('CreateBackup', params, options);
  }

  /**
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {String} AbToken - abToken. required.
   * @param {Long} Id - id. required.
   */
  deleteBackup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteBackup', params, options);
  }

  /**
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {String} AbToken - abToken. required.
   * @param {Integer} Type - type. required.
   */
  describeBackupPermission(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('DescribeBackupPermission', params, options);
  }

  /**
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {String} AbToken - abToken. required.
   * @param {Integer} Type - type. required.
   * @param {String} Ids - ids. optional.
   * @param {Boolean} Local - local. required.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeBackups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Local')) {
      throw new TypeError('parameter "Local" is required');
    }

    return this.request('DescribeBackups', params, options);
  }

  /**
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {String} AbToken - abToken. required.
   * @param {Integer} Type - type. required.
   * @param {Boolean} Sync - sync. optional. default: true.
   */
  getOssCreateInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('GetOssCreateInfo', params, options);
  }

  /**
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {String} AbToken - abToken. required.
   * @param {Integer} Type - type. required.
   * @param {Long} Id - id. required.
   */
  getOssDeleteInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetOssDeleteInfo', params, options);
  }

  /**
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {String} AbToken - abToken. required.
   * @param {Integer} Type - type. required.
   * @param {Long} Id - id. required.
   * @param {String} SharedInstanceId - sharedInstanceId. optional.
   */
  getOssQueryInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetOssQueryInfo', params, options);
  }

  /**
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {String} AbToken - abToken. required.
   */
  init(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    return this.request('Init', params, options);
  }

  /**
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {String} AbToken - abToken. required.
   * @param {Integer} Type - type. required.
   * @param {Integer} Permission - permission. required.
   */
  modifyBackupPermission(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Permission')) {
      throw new TypeError('parameter "Permission" is required');
    }

    return this.request('ModifyBackupPermission', params, options);
  }

  /**
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {String} AbToken - abToken. required.
   * @param {String} Name - name. required.
   * @param {Long} Id - id. required.
   */
  updateBackup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateBackup', params, options);
  }

  /**
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {String} AbToken - abToken. required.
   * @param {String} Uuid - uuid. required.
   */
  getStsHubRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    if (!hasOwnProperty(params, 'Uuid')) {
      throw new TypeError('parameter "Uuid" is required');
    }

    return this.request('getStsHubRecord', params, options);
  }

}

module.exports = Client;

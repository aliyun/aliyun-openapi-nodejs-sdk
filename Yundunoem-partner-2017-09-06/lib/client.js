
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-09-06';
    super(config);
  }

  /**
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {String} AbToken - abToken. required.
   * @param {String} UserName - userName. required.
   * @param {String} Password - password. required.
   * @param {Integer} Type - type. required.
   */
  authenticateAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    if (!hasOwnProperty(params, 'Password')) {
      throw new TypeError('parameter "Password" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('AuthenticateAccount', params, options);
  }

  /**
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {String} AbToken - abToken. required.
   * @param {String} UserName - userName. required.
   * @param {String} Password - authCode. required.
   * @param {Integer} Type - type. required.
   */
  authenticateMfa(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    if (!hasOwnProperty(params, 'Password')) {
      throw new TypeError('parameter "Password" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('AuthenticateMfa', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AbToken - abToken. required.
   * @param {Integer} Type - type. required.
   * @param {Boolean} Public - public. required.
   * @param {String} OssKey - ossKey. required.
   */
  createBackup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Public')) {
      throw new TypeError('parameter "Public" is required');
    }

    if (!hasOwnProperty(params, 'OssKey')) {
      throw new TypeError('parameter "OssKey" is required');
    }

    return this.request('CreateBackup', params, options);
  }

  /**
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {String} AbToken - abToken. required.
   * @param {String} Ids - ids. optional.
   * @param {String} UserName - userName. optional.
   * @param {String} DisplayName - displayName. optional.
   * @param {String} Phone - phone. optional.
   * @param {String} Email - email. optional.
   * @param {Integer} Type - type. required.
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  describeAccounts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeAccounts', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AbToken - abToken. required.
   * @param {String} Ids - ids. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeBackups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    return this.request('DescribeBackups', params, options);
  }

  /**
   * @param {String} InstanceUuid - instanceId. required.
   * @param {String} AbToken - abToken. required.
   * @param {Long} Aliuid - aliuid. required.
   * @param {String} Ids - ids. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeEcs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    if (!hasOwnProperty(params, 'Aliuid')) {
      throw new TypeError('parameter "Aliuid" is required');
    }

    return this.request('DescribeEcs', params, options);
  }

  /**
   * @param {String} InstanceUuid - instanceUuid. required.
   */
  getAbToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    return this.request('GetAbToken', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AbToken - abToken. required.
   * @param {Integer} Type - type. required.
   * @param {Boolean} Public - public. required.
   */
  getOssInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Public')) {
      throw new TypeError('parameter "Public" is required');
    }

    return this.request('GetOssInfo', params, options);
  }

  /**
   * @param {String} AbToken - abToken. required.
   * @param {String} ScenarioCode - scenarioCode. required.
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {Long} Uid - aliUid. required.
   */
  getStsToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioCode')) {
      throw new TypeError('parameter "ScenarioCode" is required');
    }

    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('GetStsToken', params, options);
  }

  /**
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {String} AbToken - abToken. required.
   * @param {String} TaskId - taskId. required.
   */
  getTaskInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('GetTaskInfo', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AbToken - abToken. required.
   * @param {String} Ids - ids. optional.
   * @param {Integer} Type - type. required.
   * @param {Boolean} Public - publlic. required.
   */
  modifyBackups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Public')) {
      throw new TypeError('parameter "Public" is required');
    }

    return this.request('ModifyBackups', params, options);
  }

  /**
   * @param {String} FingerId - fingerId. required.
   * @param {String} MessageType - messageType. required.
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {String} Mobiles - mobiles. required.
   * @param {String} Params - params. required.
   */
  sendMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FingerId')) {
      throw new TypeError('parameter "FingerId" is required');
    }

    if (!hasOwnProperty(params, 'MessageType')) {
      throw new TypeError('parameter "MessageType" is required');
    }

    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'Mobiles')) {
      throw new TypeError('parameter "Mobiles" is required');
    }

    if (!hasOwnProperty(params, 'Params')) {
      throw new TypeError('parameter "Params" is required');
    }

    options.method = 'POST';
    return this.request('SendMessage', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AbToken - abToken. required.
   */
  syncAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    return this.request('SyncAccount', params, options);
  }

  /**
   * @param {String} InstanceUuid - instanceId. required.
   * @param {String} AbToken - abToken. required.
   */
  syncEcs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    return this.request('SyncEcs', params, options);
  }

}

module.exports = Client;

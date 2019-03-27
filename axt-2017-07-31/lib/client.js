
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-07-31';
    super(config);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} uid - uid. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} Type - type. required.
   * @param {String} CommandContent - commandContent. required.
   * @param {String} WorkingDir - workingDir. optional.
   * @param {Long} Timeout - timeOut. optional.
   * @param {String} Cmdsig - cmdsig. optional.
   */
  createCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'uid')) {
      throw new TypeError('parameter "uid" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'CommandContent')) {
      throw new TypeError('parameter "CommandContent" is required');
    }

    return this.request('CreateCommand', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} uid - uid. required.
   * @param {String} CommandId - commandId. required.
   * @param {Boolean} Timed - timed. optional.
   * @param {String} Frequency - frequency. optional.
   * @param {RepeatList} InstanceId - instanceIds. required.
   */
  createTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'uid')) {
      throw new TypeError('parameter "uid" is required');
    }

    if (!hasOwnProperty(params, 'CommandId')) {
      throw new TypeError('parameter "CommandId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('CreateTask', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} uid - uid. required.
   * @param {String} CommandId - commandId. required.
   * @param {Boolean} Timed - timed. optional.
   * @param {String} Frequency - frequency. optional.
   * @param {RepeatList} Target - targets. required.
   */
  createTaskWithArgs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'uid')) {
      throw new TypeError('parameter "uid" is required');
    }

    if (!hasOwnProperty(params, 'CommandId')) {
      throw new TypeError('parameter "CommandId" is required');
    }

    if (!hasOwnProperty(params, 'Target')) {
      throw new TypeError('parameter "Target" is required');
    }

    return this.request('CreateTaskWithArgs', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} uid - uid. required.
   * @param {String} CommandId - commandId. required.
   */
  deleteCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'uid')) {
      throw new TypeError('parameter "uid" is required');
    }

    if (!hasOwnProperty(params, 'CommandId')) {
      throw new TypeError('parameter "CommandId" is required');
    }

    return this.request('DeleteCommand', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} uid - uid. required.
   * @param {RepeatList} InstanceId - instanceIds. required.
   */
  describeCloudAssistantStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'uid')) {
      throw new TypeError('parameter "uid" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeCloudAssistantStatus', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} uid - uid. required.
   * @param {String} CommandId - commandId. optional.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} Type - type. optional.
   * @param {Long} PageNumber - pageNumber. optional.
   * @param {Long} PageSize - pageSize. optional.
   */
  describeCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'uid')) {
      throw new TypeError('parameter "uid" is required');
    }

    return this.request('DescribeCommand', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} uid - uid. required.
   * @param {String} TaskId - taskId. optional.
   * @param {String} CommandId - commandId. optional.
   * @param {String} CommandName - commandName. optional.
   * @param {String} CommandType - commandType. optional.
   * @param {Boolean} Timed - timed. optional.
   * @param {String} TaskStatus - taskStatus. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Long} PageNumber - pageNumber. optional.
   * @param {Long} PageSize - pageSize. optional.
   */
  describeTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'uid')) {
      throw new TypeError('parameter "uid" is required');
    }

    return this.request('DescribeTask', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} uid - uid. required.
   * @param {String} TaskId - taskId. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} CommandId - commandId. optional.
   * @param {String} InvokeRecordStatus - invokeRecordStatus. optional.
   * @param {Long} PageNumber - pageNumber. optional.
   * @param {Long} PageSize - pageSize. optional.
   */
  describeTaskResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'uid')) {
      throw new TypeError('parameter "uid" is required');
    }

    return this.request('DescribeTaskResult', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} uid - uid. required.
   * @param {RepeatList} InstanceId - instanceIds. required.
   */
  installCloudAssistant(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'uid')) {
      throw new TypeError('parameter "uid" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('InstallCloudAssistant', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} uid - uid. required.
   * @param {String} CommandId - commandId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} CommandContent - commandContent. optional.
   * @param {String} WorkingDir - workingDir. optional.
   * @param {Long} TimeOut - timeOut. optional.
   */
  modifyCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'uid')) {
      throw new TypeError('parameter "uid" is required');
    }

    if (!hasOwnProperty(params, 'CommandId')) {
      throw new TypeError('parameter "CommandId" is required');
    }

    return this.request('ModifyCommand', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} uid - uid. required.
   * @param {String} TaskId - taskId. required.
   * @param {RepeatList} InstanceId - instanceIds. optional.
   */
  stopTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'uid')) {
      throw new TypeError('parameter "uid" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('StopTask', params, options);
  }

}

module.exports = Client;

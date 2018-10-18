
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-08-17';
    super(config);
  }

  /**
   * @param {String} TaskId - task_id. required.
   * @param {Boolean} Debug - debug. optional.
   */
  getTaskResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('GetTaskResult', params, options);
  }

  /**
   * @param {String} Task - task. required.
   * @param {Boolean} Debug - debug. optional.
   */
  submitTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Task')) {
      throw new TypeError('parameter "Task" is required');
    }

    options.method = 'POST';
    return this.request('SubmitTask', params, options);
  }

}

module.exports = Client;

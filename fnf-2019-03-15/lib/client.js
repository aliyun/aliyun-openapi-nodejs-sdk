
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2019-03-15';
    super(config);
  }

  /**
   * @param {String} RequestId - RequestId. optional.
   * @param {String} Name - Name. required.
   * @param {String} Definition - Definition. required.
   * @param {String} Description - Description. required.
   * @param {String} Type - Type. required.
   * @param {String} RoleArn - RoleArn. optional.
   * @param {String} ExternalStorageLocation - ExternalStorageLocation. optional.
   */
  createFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Definition')) {
      throw new TypeError('parameter "Definition" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    options.method = 'POST';
    return this.request('CreateFlow', params, options);
  }

  /**
   * @param {String} RequestId - RequestId. optional.
   * @param {String} FlowName - FlowName. required.
   * @param {String} ScheduleName - ScheduleName. required.
   * @param {String} Description - Description. optional.
   * @param {String} Payload - Payload. optional.
   * @param {String} CronExpression - CronExpression. required.
   * @param {Boolean} Enable - Enable. optional.
   */
  createSchedule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FlowName')) {
      throw new TypeError('parameter "FlowName" is required');
    }

    if (!hasOwnProperty(params, 'ScheduleName')) {
      throw new TypeError('parameter "ScheduleName" is required');
    }

    if (!hasOwnProperty(params, 'CronExpression')) {
      throw new TypeError('parameter "CronExpression" is required');
    }

    options.method = 'POST';
    return this.request('CreateSchedule', params, options);
  }

  /**
   * @param {String} RequestId - RequestId. optional.
   * @param {String} Name - Name. required.
   */
  deleteFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('DeleteFlow', params, options);
  }

  /**
   * @param {String} RequestId - RequestId. optional.
   * @param {String} FlowName - FlowName. required.
   * @param {String} ScheduleName - ScheduleName. required.
   */
  deleteSchedule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FlowName')) {
      throw new TypeError('parameter "FlowName" is required');
    }

    if (!hasOwnProperty(params, 'ScheduleName')) {
      throw new TypeError('parameter "ScheduleName" is required');
    }

    return this.request('DeleteSchedule', params, options);
  }

  /**
   * @param {String} RequestId - RequestId. optional.
   * @param {String} FlowName - FlowName. required.
   * @param {String} ExecutionName - ExecutionName. required.
   * @param {Integer} WaitTimeSeconds - WaitTimeSeconds. optional.
   */
  describeExecution(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FlowName')) {
      throw new TypeError('parameter "FlowName" is required');
    }

    if (!hasOwnProperty(params, 'ExecutionName')) {
      throw new TypeError('parameter "ExecutionName" is required');
    }

    return this.request('DescribeExecution', params, options);
  }

  /**
   * @param {String} RequestId - RequestId. optional.
   * @param {String} Name - Name. required.
   */
  describeFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('DescribeFlow', params, options);
  }

  /**
   * @param {String} RequestId - RequestId. optional.
   * @param {String} FlowName - FlowName. required.
   * @param {String} ScheduleName - ScheduleName. required.
   */
  describeSchedule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FlowName')) {
      throw new TypeError('parameter "FlowName" is required');
    }

    if (!hasOwnProperty(params, 'ScheduleName')) {
      throw new TypeError('parameter "ScheduleName" is required');
    }

    return this.request('DescribeSchedule', params, options);
  }

  /**
   * @param {String} RequestId - RequestId. optional.
   * @param {String} FlowName - FlowName. required.
   * @param {String} ExecutionName - ExecutionName. required.
   * @param {String} NextToken - NextToken. optional.
   * @param {Integer} Limit - Limit. optional.
   */
  getExecutionHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FlowName')) {
      throw new TypeError('parameter "FlowName" is required');
    }

    if (!hasOwnProperty(params, 'ExecutionName')) {
      throw new TypeError('parameter "ExecutionName" is required');
    }

    return this.request('GetExecutionHistory', params, options);
  }

  /**
   * @param {String} RequestId - RequestId. optional.
   * @param {String} FlowName - FlowName. required.
   * @param {String} NextToken - NextToken. optional.
   * @param {Integer} Limit - Limit. optional.
   * @param {String} Status - Status. optional.
   */
  listExecutions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FlowName')) {
      throw new TypeError('parameter "FlowName" is required');
    }

    return this.request('ListExecutions', params, options);
  }

  /**
   * @param {String} RequestId - RequestId. optional.
   * @param {String} NextToken - NextToken. optional.
   * @param {Integer} Limit - Limit. optional.
   */
  listFlows(params = {}, options = {}) {
    return this.request('ListFlows', params, options);
  }

  /**
   * @param {String} RequestId - RequestId. optional.
   * @param {String} FlowName - FlowName. required.
   * @param {String} NextToken - NextToken. optional.
   * @param {Integer} Limit - Limit. optional. default: 60.
   */
  listSchedules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FlowName')) {
      throw new TypeError('parameter "FlowName" is required');
    }

    return this.request('ListSchedules', params, options);
  }

  /**
   * @param {String} RequestId - RequestId. optional.
   * @param {String} TaskToken - TaskToken. required.
   * @param {String} Error - Error. required.
   * @param {String} Cause - Cause. optional.
   */
  reportTaskFailed(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskToken')) {
      throw new TypeError('parameter "TaskToken" is required');
    }

    if (!hasOwnProperty(params, 'Error')) {
      throw new TypeError('parameter "Error" is required');
    }

    options.method = 'POST';
    return this.request('ReportTaskFailed', params, options);
  }

  /**
   * @param {String} RequestId - RequestId. optional.
   * @param {String} TaskToken - TaskToken. required.
   * @param {String} Output - Output. required.
   */
  reportTaskSucceeded(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskToken')) {
      throw new TypeError('parameter "TaskToken" is required');
    }

    if (!hasOwnProperty(params, 'Output')) {
      throw new TypeError('parameter "Output" is required');
    }

    options.method = 'POST';
    return this.request('ReportTaskSucceeded', params, options);
  }

  /**
   * @param {String} RequestId - RequestId. optional.
   * @param {String} FlowName - FlowName. required.
   * @param {String} ExecutionName - ExecutionName. optional.
   * @param {String} Input - Input. optional.
   * @param {String} CallbackFnFTaskToken - CallbackFnFTaskToken. optional.
   */
  startExecution(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FlowName')) {
      throw new TypeError('parameter "FlowName" is required');
    }

    options.method = 'POST';
    return this.request('StartExecution', params, options);
  }

  /**
   * @param {String} RequestId - RequestId. optional.
   * @param {String} FlowName - FlowName. required.
   * @param {String} ExecutionName - ExecutionName. required.
   * @param {String} Cause - Cause. optional.
   * @param {String} Error - Error. optional.
   */
  stopExecution(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FlowName')) {
      throw new TypeError('parameter "FlowName" is required');
    }

    if (!hasOwnProperty(params, 'ExecutionName')) {
      throw new TypeError('parameter "ExecutionName" is required');
    }

    options.method = 'POST';
    return this.request('StopExecution', params, options);
  }

  /**
   * @param {String} RequestId - RequestId. optional.
   * @param {String} Name - Name. required.
   * @param {String} Definition - Definition. optional.
   * @param {String} Description - Description. optional.
   * @param {String} Type - Type. optional.
   * @param {String} RoleArn - RoleArn. optional.
   * @param {String} ExternalStorageLocation - ExternalStorageLocation. optional.
   */
  updateFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    options.method = 'POST';
    return this.request('UpdateFlow', params, options);
  }

  /**
   * @param {String} RequestId - RequestId. optional.
   * @param {String} FlowName - FlowName. required.
   * @param {String} ScheduleName - ScheduleName. required.
   * @param {String} Description - Description . optional.
   * @param {String} Payload - Payload. optional.
   * @param {String} CronExpression - CronExpression. optional.
   * @param {Boolean} Enable - Enable. optional.
   */
  updateSchedule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FlowName')) {
      throw new TypeError('parameter "FlowName" is required');
    }

    if (!hasOwnProperty(params, 'ScheduleName')) {
      throw new TypeError('parameter "ScheduleName" is required');
    }

    options.method = 'POST';
    return this.request('UpdateSchedule', params, options);
  }

}

module.exports = Client;

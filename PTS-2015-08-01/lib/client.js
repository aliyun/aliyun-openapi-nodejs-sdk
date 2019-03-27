
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-08-01';
    super(config);
  }

  /**
   * @param {String} product - product. optional.
   * @param {String} version - version. optional.
   * @param {String} action - action. optional.
   * @param {String} regionId - regionId. optional.
   * @param {String} domain - domain. optional.
   * @param {String} data - data. required.
   */
  aliyunOrderCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('AliyunOrderCreate', params, options);
  }

  /**
   * @param {String} product - product. optional.
   * @param {String} version - version. optional.
   * @param {String} action - action. optional.
   * @param {String} regionId - regionId. optional.
   * @param {String} domain - domain. optional.
   * @param {String} data - data. required.
   */
  aliyunOrderDefer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('AliyunOrderDefer', params, options);
  }

  /**
   * @param {Integer} ScriptId - scriptId. required.
   * @param {String} TransactionName - transactionName. required.
   */
  createTransaction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScriptId')) {
      throw new TypeError('parameter "ScriptId" is required');
    }

    if (!hasOwnProperty(params, 'TransactionName')) {
      throw new TypeError('parameter "TransactionName" is required');
    }

    return this.request('CreateTransaction', params, options);
  }

  /**
   */
  getKeySecret(params = {}, options = {}) {
    return this.request('GetKeySecret', params, options);
  }

  /**
   * @param {Integer} ScriptId - scriptId. optional.
   * @param {String} Tfsname - tfsName. optional.
   */
  getScript(params = {}, options = {}) {
    return this.request('GetScript', params, options);
  }

  /**
   * @param {String} Status - status. optional.
   */
  getTasks(params = {}, options = {}) {
    return this.request('GetTasks', params, options);
  }

  /**
   * @param {String} Wskey - wskey. required.
   * @param {Integer} ScenarioId - scenarioId. required.
   * @param {String} LogSample - logSample. required.
   */
  reportLogSample(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Wskey')) {
      throw new TypeError('parameter "Wskey" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    if (!hasOwnProperty(params, 'LogSample')) {
      throw new TypeError('parameter "LogSample" is required');
    }

    return this.request('ReportLogSample', params, options);
  }

  /**
   * @param {String} TestSample - testSample. required.
   */
  reportTestSample(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TestSample')) {
      throw new TypeError('parameter "TestSample" is required');
    }

    return this.request('ReportTestSample', params, options);
  }

  /**
   * @param {String} Wskey - wskey. required.
   * @param {Integer} ScenarioId - scenarioId. required.
   * @param {Integer} Vuser - vuser. required.
   * @param {Long} GmtCreated - gmtCreated. required.
   */
  reportVuser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Wskey')) {
      throw new TypeError('parameter "Wskey" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    if (!hasOwnProperty(params, 'Vuser')) {
      throw new TypeError('parameter "Vuser" is required');
    }

    if (!hasOwnProperty(params, 'GmtCreated')) {
      throw new TypeError('parameter "GmtCreated" is required');
    }

    return this.request('ReportVuser', params, options);
  }

  /**
   * @param {Json} To - to. required.
   * @param {String} Title - title. required.
   * @param {String} Msg - msg. required.
   */
  sendWangWang(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'To')) {
      throw new TypeError('parameter "To" is required');
    }

    if (!hasOwnProperty(params, 'Title')) {
      throw new TypeError('parameter "Title" is required');
    }

    if (!hasOwnProperty(params, 'Msg')) {
      throw new TypeError('parameter "Msg" is required');
    }

    return this.request('SendWangWang', params, options);
  }

  /**
   * @param {String} Wskey - wskey. required.
   * @param {Integer} ScenarioId - scenarioId. required.
   * @param {Integer} Status - status. required.
   * @param {String} NodeIp - nodeIp. required.
   */
  setScenarioStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Wskey')) {
      throw new TypeError('parameter "Wskey" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    if (!hasOwnProperty(params, 'NodeIp')) {
      throw new TypeError('parameter "NodeIp" is required');
    }

    return this.request('SetScenarioStatus', params, options);
  }

  /**
   * @param {String} Wskey - wskey. required.
   * @param {String} Status - status. required.
   */
  setTaskStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Wskey')) {
      throw new TypeError('parameter "Wskey" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('SetTaskStatus', params, options);
  }

  /**
   * @param {Integer} TaskId - taskId. required.
   * @param {String} Type - type. optional.
   * @param {String} Msg - msg. optional.
   */
  stopTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('StopTask', params, options);
  }

}

module.exports = Client;

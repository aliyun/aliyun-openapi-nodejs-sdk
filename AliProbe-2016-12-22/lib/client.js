
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-12-22';
    super(config);
  }

  /**
   * @param {String} Body - body. required.
   */
  batchDeleteTasks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Body')) {
      throw new TypeError('parameter "Body" is required');
    }

    options.method = 'POST';
    return this.request('BatchDeleteTasks', params, options);
  }

  /**
   * @param {String} Body - body. required.
   */
  createTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Body')) {
      throw new TypeError('parameter "Body" is required');
    }

    options.method = 'POST';
    return this.request('CreateTask', params, options);
  }

  /**
   * @param {String} Body - body. required.
   */
  createTaskWithSecurityCheck(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Body')) {
      throw new TypeError('parameter "Body" is required');
    }

    options.method = 'POST';
    return this.request('CreateTaskWithSecurityCheck', params, options);
  }

  /**
   * @param {String} Body - body. required.
   */
  deleteTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Body')) {
      throw new TypeError('parameter "Body" is required');
    }

    options.method = 'POST';
    return this.request('DeleteTask', params, options);
  }

  /**
   * @param {String} Body - body. required.
   */
  getTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Body')) {
      throw new TypeError('parameter "Body" is required');
    }

    return this.request('GetTask', params, options);
  }

  /**
   * @param {String} Body - body. required.
   */
  queryDailySla(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Body')) {
      throw new TypeError('parameter "Body" is required');
    }

    options.method = 'POST';
    return this.request('QueryDailySla', params, options);
  }

  /**
   * @param {String} Body - body. required.
   */
  queryErrorRate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Body')) {
      throw new TypeError('parameter "Body" is required');
    }

    options.method = 'POST';
    return this.request('QueryErrorRate', params, options);
  }

  /**
   * @param {String} Body - body. required.
   */
  queryIndexData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Body')) {
      throw new TypeError('parameter "Body" is required');
    }

    options.method = 'POST';
    return this.request('QueryIndexData', params, options);
  }

  /**
   * @param {String} Body - body. required.
   */
  queryIspAreaCity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Body')) {
      throw new TypeError('parameter "Body" is required');
    }

    options.method = 'POST';
    return this.request('QueryIspAreaCity', params, options);
  }

  /**
   * @param {String} Body - body. required.
   */
  queryIspAvailRate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Body')) {
      throw new TypeError('parameter "Body" is required');
    }

    options.method = 'POST';
    return this.request('QueryIspAvailRate', params, options);
  }

  /**
   * @param {String} Body - body. required.
   */
  queryIspIndexData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Body')) {
      throw new TypeError('parameter "Body" is required');
    }

    options.method = 'POST';
    return this.request('QueryIspIndexData', params, options);
  }

  /**
   * @param {String} Body - body. required.
   */
  queryMonthlySla(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Body')) {
      throw new TypeError('parameter "Body" is required');
    }

    options.method = 'POST';
    return this.request('QueryMonthlySla', params, options);
  }

  /**
   * @param {String} Body - body. required.
   */
  queryTasks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Body')) {
      throw new TypeError('parameter "Body" is required');
    }

    options.method = 'POST';
    return this.request('QueryTasks', params, options);
  }

  /**
   * @param {String} Body - body. required.
   */
  queryTasksCurrentProbeStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Body')) {
      throw new TypeError('parameter "Body" is required');
    }

    options.method = 'POST';
    return this.request('QueryTasksCurrentProbeStatus', params, options);
  }

  /**
   * @param {String} Body - body. required.
   */
  queryTasksRate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Body')) {
      throw new TypeError('parameter "Body" is required');
    }

    options.method = 'POST';
    return this.request('QueryTasksRate', params, options);
  }

  /**
   * @param {String} Body - body. required.
   */
  queryWeeklySla(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Body')) {
      throw new TypeError('parameter "Body" is required');
    }

    options.method = 'POST';
    return this.request('QueryWeeklySla', params, options);
  }

  /**
   * @param {String} Body - body. required.
   */
  updateTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Body')) {
      throw new TypeError('parameter "Body" is required');
    }

    options.method = 'POST';
    return this.request('UpdateTask', params, options);
  }

  /**
   * @param {String} Body - body. required.
   */
  updateTaskWithSecurityCheck(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Body')) {
      throw new TypeError('parameter "Body" is required');
    }

    options.method = 'POST';
    return this.request('UpdateTaskWithSecurityCheck', params, options);
  }

  /**
   * @param {String} Body - body. required.
   */
  create_task(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Body')) {
      throw new TypeError('parameter "Body" is required');
    }

    options.method = 'POST';
    return this.request('create_task', params, options);
  }

}

module.exports = Client;

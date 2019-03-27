
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-12-28';
    super(config);
  }

  /**
   * @param {String} TaskDO - taskDO. required.
   * @param {String} Token - token. required.
   */
  createLubanrulerTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskDO')) {
      throw new TypeError('parameter "TaskDO" is required');
    }

    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    options.method = 'POST';
    return this.request('CreateLubanrulerTask', params, options);
  }

  /**
   * @param {Integer} AonePipelineId - aonePipelineId. required.
   * @param {String} Token - token. required.
   */
  getResultByLubanruler(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AonePipelineId')) {
      throw new TypeError('parameter "AonePipelineId" is required');
    }

    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    options.method = 'POST';
    return this.request('GetResultByLubanruler', params, options);
  }

  /**
   * @param {String} AoneInfo - aoneInfo. required.
   * @param {String} Token - token. required.
   */
  updateLubanrulerTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AoneInfo')) {
      throw new TypeError('parameter "AoneInfo" is required');
    }

    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    options.method = 'POST';
    return this.request('UpdateLubanrulerTask', params, options);
  }

}

module.exports = Client;

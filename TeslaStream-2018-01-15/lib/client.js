
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-01-15';
    super(config);
  }

  /**
   * @param {String} JobInfos - job_infos. required.
   */
  batchGetJobMetricInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobInfos')) {
      throw new TypeError('parameter "JobInfos" is required');
    }

    return this.request('BatchGetJobMetricInfo', params, options);
  }

  /**
   * @param {String} PluginInfos - plugin_infos. required.
   */
  batchGetPluginConfigInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PluginInfos')) {
      throw new TypeError('parameter "PluginInfos" is required');
    }

    return this.request('BatchGetPluginConfigInfo', params, options);
  }

  /**
   * @param {String} JobName - job. required.
   */
  getJobTopology(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobName')) {
      throw new TypeError('parameter "JobName" is required');
    }

    return this.request('GetJobTopology', params, options);
  }

}

module.exports = Client;

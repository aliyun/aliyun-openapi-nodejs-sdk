
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2019-12-30';
    super(config);
  }

  /**
   * @param {RepeatList} Task - tasks. required.
   * @param {RepeatList} Scene - scenes. required.
   */
  scanImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Task')) {
      throw new TypeError('parameter "Task" is required');
    }

    if (!hasOwnProperty(params, 'Scene')) {
      throw new TypeError('parameter "Scene" is required');
    }

    options.method = 'POST';
    return this.request('ScanImage', params, options);
  }

}

module.exports = Client;

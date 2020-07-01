
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2020-03-20';
    super(config);
  }

  /**
   * @param {RepeatList} URLList - urlList. required.
   * @param {Boolean} Async - async. optional. default: true.
   */
  detectCovid19Cad(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'URLList')) {
      throw new TypeError('parameter "URLList" is required');
    }

    options.method = 'POST';
    return this.request('DetectCovid19Cad', params, options);
  }

  /**
   * @param {RepeatList} URLList - urlList. required.
   * @param {Boolean} Async - async. optional. default: true.
   */
  detectLungNodule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'URLList')) {
      throw new TypeError('parameter "URLList" is required');
    }

    options.method = 'POST';
    return this.request('DetectLungNodule', params, options);
  }

  /**
   * @param {Boolean} Async - async. optional. default: true.
   * @param {String} JobId - jobId. required.
   */
  getAsyncJobResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    options.method = 'POST';
    return this.request('GetAsyncJobResult', params, options);
  }

}

module.exports = Client;

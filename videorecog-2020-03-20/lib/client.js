
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
   * @param {String} VideoUrl - videoUrl. required.
   * @param {Boolean} Async - async. optional. default: true.
   */
  detectVideoShot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoUrl')) {
      throw new TypeError('parameter "VideoUrl" is required');
    }

    options.method = 'POST';
    return this.request('DetectVideoShot', params, options);
  }

  /**
   * @param {String} VideoUrl - videoUrl. required.
   * @param {Boolean} Async - async. optional. default: true.
   * @param {Boolean} IsGif - isGif. required.
   */
  generateVideoCover(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoUrl')) {
      throw new TypeError('parameter "VideoUrl" is required');
    }

    if (!hasOwnProperty(params, 'IsGif')) {
      throw new TypeError('parameter "IsGif" is required');
    }

    options.method = 'POST';
    return this.request('GenerateVideoCover', params, options);
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

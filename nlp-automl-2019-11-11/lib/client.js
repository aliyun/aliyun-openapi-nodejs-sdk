
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2019-11-11';
    super(config);
  }

  /**
   * @param {Integer} ModelId - modelId. required.
   * @param {String} Content - content. required.
   * @param {String} ModelVersion - version. optional.
   * @param {String} DetailTag - detailTag. optional.
   * @param {Integer} TopK - topK. optional.
   */
  getPredictResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ModelId')) {
      throw new TypeError('parameter "ModelId" is required');
    }

    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    options.method = 'POST';
    return this.request('GetPredictResult', params, options);
  }

  /**
   * @param {String} ContactScene - scene. required.
   * @param {String} ContactPath - path. required.
   */
  runContactReview(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ContactScene')) {
      throw new TypeError('parameter "ContactScene" is required');
    }

    if (!hasOwnProperty(params, 'ContactPath')) {
      throw new TypeError('parameter "ContactPath" is required');
    }

    options.method = 'POST';
    return this.request('RunContactReview', params, options);
  }

}

module.exports = Client;


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
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURLA - imageUrlA. required.
   * @param {String} ImageURLB - imageUrlB. required.
   */
  compareFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURLA')) {
      throw new TypeError('parameter "ImageURLA" is required');
    }

    if (!hasOwnProperty(params, 'ImageURLB')) {
      throw new TypeError('parameter "ImageURLB" is required');
    }

    options.method = 'POST';
    return this.request('CompareFace', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  detectBodyCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('DetectBodyCount', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   */
  detectFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('DetectFace', params, options);
  }

  /**
   * @param {RepeatList} Tasks - tasks. required.
   */
  detectLivingFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Tasks')) {
      throw new TypeError('parameter "Tasks" is required');
    }

    options.method = 'POST';
    return this.request('DetectLivingFace', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  detectMask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('DetectMask', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizeExpression(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeExpression', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizeFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeFace', params, options);
  }

  /**
   * @param {RepeatList} Task - tasks. required.
   */
  recognizePublicFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Task')) {
      throw new TypeError('parameter "Task" is required');
    }

    options.method = 'POST';
    return this.request('RecognizePublicFace', params, options);
  }

}

module.exports = Client;

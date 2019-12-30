
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

}

module.exports = Client;


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
   * @param {Integer} ImageType - imageType. required.
   * @param {String} ImageURLA - imageUrlA. optional.
   * @param {String} ImageContentA - imageContentA. optional.
   * @param {String} ImageURLB - imageUrlB. optional.
   * @param {String} ImageContentB - imageContentB. optional.
   * @param {Integer} Mode - mode. required.
   */
  compareFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageType')) {
      throw new TypeError('parameter "ImageType" is required');
    }

    if (!hasOwnProperty(params, 'Mode')) {
      throw new TypeError('parameter "Mode" is required');
    }

    options.method = 'POST';
    return this.request('CompareFace', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. required.
   * @param {String} ImageURL - imageUrl. optional.
   * @param {String} ImageContent - imageContent. optional.
   */
  detectFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageType')) {
      throw new TypeError('parameter "ImageType" is required');
    }

    options.method = 'POST';
    return this.request('DetectFace', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. required.
   * @param {String} ImageURL - imageUrl. optional.
   * @param {String} ImageContent - imageContent. optional.
   * @param {Integer} Mode - mode. required.
   */
  recognizeFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageType')) {
      throw new TypeError('parameter "ImageType" is required');
    }

    if (!hasOwnProperty(params, 'Mode')) {
      throw new TypeError('parameter "Mode" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeFace', params, options);
  }

}

module.exports = Client;

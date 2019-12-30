
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2019-09-30';
    super(config);
  }

  /**
   * @param {String} Url - url. required.
   */
  detectImageElements(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Url')) {
      throw new TypeError('parameter "Url" is required');
    }

    options.method = 'POST';
    return this.request('DetectImageElements', params, options);
  }

  /**
   * @param {String} Url - url. required.
   * @param {Integer} ColorCount - colorCount. optional. default: 3.
   */
  recognizeImageColor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Url')) {
      throw new TypeError('parameter "Url" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeImageColor', params, options);
  }

  /**
   * @param {String} Url - url. required.
   */
  recognizeImageStyle(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Url')) {
      throw new TypeError('parameter "Url" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeImageStyle', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. required.
   * @param {String} ImageURL - imageUrl. optional.
   * @param {String} ImageContent - imageContent. optional.
   */
  recognizeScene(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageType')) {
      throw new TypeError('parameter "ImageType" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeScene', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. required.
   * @param {String} ImageURL - imageUrl. optional.
   * @param {String} ImageContent - imageContent. optional.
   */
  taggingImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageType')) {
      throw new TypeError('parameter "ImageType" is required');
    }

    options.method = 'POST';
    return this.request('TaggingImage', params, options);
  }

}

module.exports = Client;

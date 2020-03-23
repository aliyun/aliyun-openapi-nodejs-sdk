
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
   * @param {String} ImageURL - imageUrl. required.
   */
  classifyingRubbish(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('ClassifyingRubbish', params, options);
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
   * @param {RepeatList} Tasks - tasks. required.
   */
  recognizeLogo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Tasks')) {
      throw new TypeError('parameter "Tasks" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeLogo', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizeScene(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeScene', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizeVehicleType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeVehicleType', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   */
  taggingImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('TaggingImage', params, options);
  }

}

module.exports = Client;

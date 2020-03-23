
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
   * @param {Float} Duration - duration. required.
   * @param {Integer} Width - width. optional.
   * @param {Integer} Height - height. optional.
   */
  abstractEcommerceVideo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoUrl')) {
      throw new TypeError('parameter "VideoUrl" is required');
    }

    if (!hasOwnProperty(params, 'Duration')) {
      throw new TypeError('parameter "Duration" is required');
    }

    options.method = 'POST';
    return this.request('AbstractEcommerceVideo', params, options);
  }

  /**
   * @param {String} VideoUrl - videoUrl. required.
   * @param {Boolean} Async - async. optional. default: true.
   * @param {Integer} Length - length. required.
   */
  abstractFilmVideo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoUrl')) {
      throw new TypeError('parameter "VideoUrl" is required');
    }

    if (!hasOwnProperty(params, 'Length')) {
      throw new TypeError('parameter "Length" is required');
    }

    options.method = 'POST';
    return this.request('AbstractFilmVideo', params, options);
  }

  /**
   * @param {String} VideoUrl - videoUrl. required.
   * @param {Boolean} Async - async. optional. default: true.
   * @param {String} VideoBitrate - videoBitrate. optional.
   * @param {String} VideoCode - videoCode. optional.
   * @param {String} VideoFormat - videoFormat. optional.
   * @param {String} Mode - mode. required.
   */
  adjustVideoColor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoUrl')) {
      throw new TypeError('parameter "VideoUrl" is required');
    }

    if (!hasOwnProperty(params, 'Mode')) {
      throw new TypeError('parameter "Mode" is required');
    }

    options.method = 'POST';
    return this.request('AdjustVideoColor', params, options);
  }

  /**
   * @param {String} VideoUrl - videoUrl. optional.
   * @param {RepeatList} Boxes - boxes. optional.
   * @param {Boolean} Async - async. optional. default: true.
   */
  eraseVideoLogo(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('EraseVideoLogo', params, options);
  }

  /**
   * @param {String} VideoUrl - videoUrl. required.
   * @param {Boolean} Async - async. optional. default: true.
   * @param {Float} BX - bx. optional.
   * @param {Float} BY - by. optional.
   * @param {Float} BW - bw. optional.
   * @param {Float} BH - bh. optional.
   */
  eraseVideoSubtitles(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoUrl')) {
      throw new TypeError('parameter "VideoUrl" is required');
    }

    options.method = 'POST';
    return this.request('EraseVideoSubtitles', params, options);
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

  /**
   * @param {String} VideoUrl - videoUrl. required.
   * @param {Boolean} Async - async. optional. default: true.
   * @param {Integer} BitRate - bitRate. optional.
   */
  superResolveVideo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoUrl')) {
      throw new TypeError('parameter "VideoUrl" is required');
    }

    options.method = 'POST';
    return this.request('SuperResolveVideo', params, options);
  }

}

module.exports = Client;

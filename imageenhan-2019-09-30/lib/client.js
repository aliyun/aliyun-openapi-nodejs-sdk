
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
   * @param {Integer} Width - width. required.
   * @param {Integer} Height - height. required.
   * @param {String} Url - url. required.
   */
  changeImageSize(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Width')) {
      throw new TypeError('parameter "Width" is required');
    }

    if (!hasOwnProperty(params, 'Height')) {
      throw new TypeError('parameter "Height" is required');
    }

    if (!hasOwnProperty(params, 'Url')) {
      throw new TypeError('parameter "Url" is required');
    }

    options.method = 'POST';
    return this.request('ChangeImageSize', params, options);
  }

  /**
   * @param {String} StyleUrl - styleUrl. required.
   * @param {String} MajorUrl - majorUrl. required.
   */
  extendImageStyle(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StyleUrl')) {
      throw new TypeError('parameter "StyleUrl" is required');
    }

    if (!hasOwnProperty(params, 'MajorUrl')) {
      throw new TypeError('parameter "MajorUrl" is required');
    }

    options.method = 'POST';
    return this.request('ExtendImageStyle', params, options);
  }

  /**
   * @param {Integer} NumBoxes - numBoxes. optional.
   * @param {String} ImageURL - imageUrl. required.
   */
  intelligentComposition(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('IntelligentComposition', params, options);
  }

  /**
   * @param {String} Url - url. required.
   */
  makeSuperResolutionImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Url')) {
      throw new TypeError('parameter "Url" is required');
    }

    options.method = 'POST';
    return this.request('MakeSuperResolutionImage', params, options);
  }

  /**
   * @param {String} Url - url. required.
   * @param {String} Mode - mode. optional. default: AUTO.
   * @param {String} RefUrl - refUrl. optional.
   * @param {Integer} ColorCount - colorCount. optional. default: 1.
   * @param {RepeatList} ColorTemplate - colorTemplate. optional.
   */
  recolorImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Url')) {
      throw new TypeError('parameter "Url" is required');
    }

    options.method = 'POST';
    return this.request('RecolorImage', params, options);
  }

}

module.exports = Client;

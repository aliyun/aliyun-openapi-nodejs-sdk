
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
   * @param {String} FunctionType - functionType. required.
   * @param {String} Text - text. optional.
   * @param {String} WatermarkImageURL - watermarkImageUrl. optional.
   * @param {String} OutputFileType - outputFileType. optional.
   * @param {Integer} QualityFactor - qualityFactor. required.
   * @param {String} OriginImageURL - originImageUrl. required.
   */
  imageBlindCharacterWatermark(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FunctionType')) {
      throw new TypeError('parameter "FunctionType" is required');
    }

    if (!hasOwnProperty(params, 'QualityFactor')) {
      throw new TypeError('parameter "QualityFactor" is required');
    }

    if (!hasOwnProperty(params, 'OriginImageURL')) {
      throw new TypeError('parameter "OriginImageURL" is required');
    }

    options.method = 'POST';
    return this.request('ImageBlindCharacterWatermark', params, options);
  }

  /**
   * @param {String} FunctionType - functionType. required.
   * @param {String} LogoURL - logoUrl. optional.
   * @param {String} WatermarkImageURL - watermarkImageUrl. optional.
   * @param {String} OutputFileType - outputFileType. optional.
   * @param {Integer} QualityFactor - qualityFactor. required.
   * @param {String} OriginImageURL - originImageUrl. required.
   */
  imageBlindPicWatermark(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FunctionType')) {
      throw new TypeError('parameter "FunctionType" is required');
    }

    if (!hasOwnProperty(params, 'QualityFactor')) {
      throw new TypeError('parameter "QualityFactor" is required');
    }

    if (!hasOwnProperty(params, 'OriginImageURL')) {
      throw new TypeError('parameter "OriginImageURL" is required');
    }

    options.method = 'POST';
    return this.request('ImageBlindPicWatermark', params, options);
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

  /**
   * @param {String} ImageURL - imageUrl. required.
   * @param {Float} BX - bx. optional.
   * @param {Float} BY - by. optional.
   * @param {Float} BW - bw. optional.
   * @param {Float} BH - bh. optional.
   */
  removeImageSubtitles(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RemoveImageSubtitles', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  removeImageWatermark(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RemoveImageWatermark', params, options);
  }

}

module.exports = Client;

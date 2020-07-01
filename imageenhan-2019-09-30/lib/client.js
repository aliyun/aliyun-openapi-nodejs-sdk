
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
  assessComposition(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('AssessComposition', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  assessExposure(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('AssessExposure', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  assessSharpness(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('AssessSharpness', params, options);
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
   * @param {String} ImageURL - imageUrl. required.
   * @param {String} OutputFormat - outputFormat. required.
   * @param {String} Mode - mode. required.
   */
  enhanceImageColor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    if (!hasOwnProperty(params, 'OutputFormat')) {
      throw new TypeError('parameter "OutputFormat" is required');
    }

    if (!hasOwnProperty(params, 'Mode')) {
      throw new TypeError('parameter "Mode" is required');
    }

    options.method = 'POST';
    return this.request('EnhanceImageColor', params, options);
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
   * @param {String} StyleUrl - styleUrl. required.
   * @param {String} ImageURL - imageUrl. required.
   */
  imitatePhotoStyle(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StyleUrl')) {
      throw new TypeError('parameter "StyleUrl" is required');
    }

    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('ImitatePhotoStyle', params, options);
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
   * @param {String} Degree - degree. required.
   * @param {Boolean} Async - async. optional. default: true.
   */
  recolorHDImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Url')) {
      throw new TypeError('parameter "Url" is required');
    }

    if (!hasOwnProperty(params, 'Degree')) {
      throw new TypeError('parameter "Degree" is required');
    }

    options.method = 'POST';
    return this.request('RecolorHDImage', params, options);
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

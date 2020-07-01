
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
   * @param {Boolean} Async - async. optional. default: true.
   * @param {String} JobId - jobId. required.
   */
  getAsyncJobResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('GetAsyncJobResult', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  parseFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    return this.request('ParseFace', params, options);
  }

  /**
   * @param {String} MaskImageURL - maskImageUrl. required.
   * @param {String} ImageURL - imageUrl. required.
   */
  refineMask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MaskImageURL')) {
      throw new TypeError('parameter "MaskImageURL" is required');
    }

    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RefineMask', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  segmentAnimal(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    return this.request('SegmentAnimal', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   * @param {Boolean} Async - async. optional. default: false.
   */
  segmentBody(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    return this.request('SegmentBody', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  segmentCloth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    return this.request('SegmentCloth', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  segmentCommodity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    return this.request('SegmentCommodity', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  segmentCommonImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    return this.request('SegmentCommonImage', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  segmentFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    return this.request('SegmentFace', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  segmentFood(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    return this.request('SegmentFood', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  segmentFurniture(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('SegmentFurniture', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  segmentHDBody(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    return this.request('SegmentHDBody', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  segmentHair(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    return this.request('SegmentHair', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  segmentHead(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    return this.request('SegmentHead', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  segmentSky(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    return this.request('SegmentSky', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  segmentVehicle(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('SegmentVehicle', params, options);
  }

}

module.exports = Client;

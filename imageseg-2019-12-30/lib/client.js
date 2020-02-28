
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
   * @param {String} ImageURL - imageUrl. required.
   */
  parseFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    return this.request('ParseFace', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
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
  segmentVehicle(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('SegmentVehicle', params, options);
  }

}

module.exports = Client;

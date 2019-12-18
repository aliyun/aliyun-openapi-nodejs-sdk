
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
  detectMainBody(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    return this.request('DetectMainBody', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. required.
   * @param {String} ImageURL - imageUrl. optional.
   * @param {String} ImageContent - imageContent. optional.
   */
  detectVehicle(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageType')) {
      throw new TypeError('parameter "ImageType" is required');
    }

    options.method = 'POST';
    return this.request('DetectVehicle', params, options);
  }

}

module.exports = Client;

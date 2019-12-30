
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
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   */
  detectVehicle(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('DetectVehicle', params, options);
  }

}

module.exports = Client;

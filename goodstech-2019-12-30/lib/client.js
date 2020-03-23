
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
  classifyCommodity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    return this.request('ClassifyCommodity', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizeFurnitureAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeFurnitureAttribute', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   * @param {Float} XLength - xLength. required.
   * @param {Float} YLength - yLength. required.
   * @param {Float} ZLength - zLength. required.
   */
  recognizeFurnitureSpu(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    if (!hasOwnProperty(params, 'XLength')) {
      throw new TypeError('parameter "XLength" is required');
    }

    if (!hasOwnProperty(params, 'YLength')) {
      throw new TypeError('parameter "YLength" is required');
    }

    if (!hasOwnProperty(params, 'ZLength')) {
      throw new TypeError('parameter "ZLength" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeFurnitureSpu', params, options);
  }

}

module.exports = Client;

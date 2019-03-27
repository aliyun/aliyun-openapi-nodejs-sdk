
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-07-21';
    super(config);
  }

  /**
   * @param {String} App - app. optional. default: picture.
   * @param {String} Url - url. required.
   * @param {String} Outfmt - outfmt. optional. default: json.
   * @param {Integer} Start - s. optional. default: 0.
   * @param {String} Region - region. optional.
   * @param {Integer} Category - cat. optional. default: 0.
   * @param {Integer} PageSize - n. optional. default: 20.
   */
  iconic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Url')) {
      throw new TypeError('parameter "Url" is required');
    }

    return this.request('Iconic', params, options);
  }

}

module.exports = Client;

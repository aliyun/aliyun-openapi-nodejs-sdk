
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
   * @param {String} Url - url. required.
   */
  detectImageElements(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Url')) {
      throw new TypeError('parameter "Url" is required');
    }

    options.method = 'POST';
    return this.request('DetectImageElements', params, options);
  }

  /**
   * @param {String} Url - url. required.
   * @param {Integer} ColorCount - colorCount. optional. default: 3.
   */
  recognizeImageColor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Url')) {
      throw new TypeError('parameter "Url" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeImageColor', params, options);
  }

  /**
   * @param {String} Url - url. required.
   */
  recognizeImageStyle(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Url')) {
      throw new TypeError('parameter "Url" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeImageStyle', params, options);
  }

}

module.exports = Client;

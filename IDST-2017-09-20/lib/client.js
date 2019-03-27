
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-09-20';
    super(config);
  }

  /**
   * @param {String} Vid - vid. optional.
   * @param {String} ProductId - product_id. required.
   * @param {String} PicName - pic_name. optional. default: json.
   * @param {String} App - app. optional. default: oas_search.
   */
  search(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductId')) {
      throw new TypeError('parameter "ProductId" is required');
    }

    options.method = 'POST';
    return this.request('Search', params, options);
  }

}

module.exports = Client;

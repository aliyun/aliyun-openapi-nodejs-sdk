
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-08-30';
    super(config);
  }

  /**
   * @param {String} Vid - vid. optional.
   * @param {String} ItemId - item_id. required.
   * @param {String} PicName - pic_name. optional. default: json.
   * @param {String} App - app. optional. default: oas_pic.
   */
  image(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ItemId')) {
      throw new TypeError('parameter "ItemId" is required');
    }

    return this.request('Image', params, options);
  }

}

module.exports = Client;


'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-11-22';
    super(config);
  }

  /**
   * @param {String} Website - website. required.
   * @param {String} Language - language. required.
   * @param {Long} Id - id. required.
   * @param {Integer} ShowLevel - showLevel. optional.
   */
  queryMenuTreeByParentId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Website')) {
      throw new TypeError('parameter "Website" is required');
    }

    if (!hasOwnProperty(params, 'Language')) {
      throw new TypeError('parameter "Language" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('QueryMenuTreeByParentId', params, options);
  }

}

module.exports = Client;

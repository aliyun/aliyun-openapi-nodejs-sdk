
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2019-3-1';
    super(config);
  }

  /**
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} AccountName - accountName. optional.
   */
  getUserList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetUserList', params, options);
  }

  /**
   */
  searchActivation(params = {}, options = {}) {
    return this.request('SearchActivation', params, options);
  }

}

module.exports = Client;

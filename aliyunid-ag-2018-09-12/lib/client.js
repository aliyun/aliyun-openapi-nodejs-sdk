
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-09-12';
    super(config);
  }

  /**
   * @param {String} LoginEmail - loginEmail. required.
   * @param {String} Type - type. required.
   */
  createAgAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoginEmail')) {
      throw new TypeError('parameter "LoginEmail" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('CreateAgAccount', params, options);
  }

  /**
   * @param {String} Pk - pk. required.
   */
  getAgRelation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    return this.request('GetAgRelation', params, options);
  }

  /**
   * @param {String} Pk - pk. required.
   */
  getRamBind(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    return this.request('GetRamBind', params, options);
  }

  /**
   * @param {Long} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Boolean} QueryCount - queryCount. optional.
   */
  paginateAgRelations(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('PaginateAgRelations', params, options);
  }

}

module.exports = Client;

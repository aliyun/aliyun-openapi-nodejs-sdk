
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-07-18';
    super(config);
  }

  /**
   * @param {Long} Uid - uid. required.
   */
  getFxCustomerType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('GetFxCustomerType', params, options);
  }

  /**
   * @param {Long} ParentUid - parentUid. optional.
   * @param {Integer} IsSub - isSub. optional.
   * @param {Integer} CustomerRebateType - customerRebateType. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  getFxUsersList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetFxUsersList', params, options);
  }

}

module.exports = Client;

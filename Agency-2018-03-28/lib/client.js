
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-03-28';
    super(config);
  }

  /**
   * @param {Long} Uid - uid. required.
   */
  getDistributionInfoByUid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('GetDistributionInfoByUid', params, options);
  }

  /**
   * @param {Long} Uid - uid. required.
   */
  getFxCustomerRelationByUid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('GetFxCustomerRelationByUid', params, options);
  }

  /**
   * @param {Long} Uid - uid. optional.
   * @param {Long} ParentId - parentId. optional.
   * @param {Integer} Level - level. optional.
   * @param {Long} ParentId1 - parentId1. optional.
   * @param {Long} ParentId2 - parentId2. optional.
   * @param {Integer} CustomerRebateType - customerRebateType. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} IsDistribution - isDistribution. optional.
   * @param {Integer} IsRebateAgent - isRebateAgent. optional.
   * @param {String} GmtCreateMin - gmtCreateMin. optional.
   * @param {String} GmtCreateMax - gmtCreateMax. optional.
   */
  queryFxCustomerRelationList(params = {}, options = {}) {
    return this.request('QueryFxCustomerRelationList', params, options);
  }

}

module.exports = Client;

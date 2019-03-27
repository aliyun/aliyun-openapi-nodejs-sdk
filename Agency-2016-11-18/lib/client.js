
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-11-18';
    super(config);
  }

  /**
   * @param {Long} UserUid - userUid. required.
   * @param {Long} ParentUid - parentUid. optional.
   * @param {Integer} CustomerType - customerType. optional.
   */
  addFxChildUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserUid')) {
      throw new TypeError('parameter "UserUid" is required');
    }

    return this.request('AddFxChildUser', params, options);
  }

  /**
   * @param {String} OwnerAccount - buyerId. required.
   * @param {String} CommodityCode - commodityCode. optional.
   * @param {String} StartTime - consumeGenerateStartTimeStr. required.
   * @param {String} EndTime - consumeGenerateEndTimeStr. optional.
   * @param {String} ConsumeCategory - consumeCategory. optional.
   * @param {Boolean} NeedDetail - needDetail. optional.
   * @param {Integer} PageSize - sizePerPage. optional.
   * @param {Long} PageMinId - pageMinId. optional.
   */
  queryConsumeInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerAccount')) {
      throw new TypeError('parameter "OwnerAccount" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    return this.request('QueryConsumeInstances', params, options);
  }

}

module.exports = Client;

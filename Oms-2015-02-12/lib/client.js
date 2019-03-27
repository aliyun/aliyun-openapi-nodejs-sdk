
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-02-12';
    super(config);
  }

  /**
   * @param {String} ProductName - prodCode. required.
   * @param {String} TableName - tableName. required.
   * @param {String} DataType - dataType. required.
   * @param {String} SiteBid - siteBid. optional.
   */
  getDataOpenConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductName')) {
      throw new TypeError('parameter "ProductName" is required');
    }

    if (!hasOwnProperty(params, 'TableName')) {
      throw new TypeError('parameter "TableName" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    return this.request('GetDataOpenConfig', params, options);
  }

  /**
   * @param {String} ProductName - prodCode. required.
   * @param {String} DataType - dataType. required.
   * @param {String} siteBid - siteBid. optional.
   */
  getProductDefine(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductName')) {
      throw new TypeError('parameter "ProductName" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    return this.request('GetProductDefine', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ProductName - prodCode. optional.
   * @param {String} TableName - tableName. optional.
   * @param {String} DataType - dataType. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} NextToken - marker. optional.
   * @param {Integer} MaxResult - pageSize. optional. default: 100.
   */
  getUserData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('GetUserData', params, options);
  }

}

module.exports = Client;

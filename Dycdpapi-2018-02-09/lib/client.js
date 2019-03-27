
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-02-09';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} Grade - grade. required.
   * @param {String} Phone - phoneNumber. required.
   * @param {String} OutOrderId - outOrderId. required.
   * @param {String} TbOrderId - tbOrderId. optional.
   * @param {String} ParamList - paramList. optional.
   */
  createYffOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Grade')) {
      throw new TypeError('parameter "Grade" is required');
    }

    if (!hasOwnProperty(params, 'Phone')) {
      throw new TypeError('parameter "Phone" is required');
    }

    if (!hasOwnProperty(params, 'OutOrderId')) {
      throw new TypeError('parameter "OutOrderId" is required');
    }

    return this.request('CreateYffOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OutOrderId - outOrderId. required.
   */
  queryYffOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OutOrderId')) {
      throw new TypeError('parameter "OutOrderId" is required');
    }

    return this.request('QueryYffOrder', params, options);
  }

}

module.exports = Client;

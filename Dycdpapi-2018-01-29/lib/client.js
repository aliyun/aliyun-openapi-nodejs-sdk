
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-01-29';
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
  createHfqOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Grade')) {
      throw new TypeError('parameter "Grade" is required');
    }

    if (!hasOwnProperty(params, 'Phone')) {
      throw new TypeError('parameter "Phone" is required');
    }

    if (!hasOwnProperty(params, 'OutOrderId')) {
      throw new TypeError('parameter "OutOrderId" is required');
    }

    return this.request('CreateHfqOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Phone - phone. required.
   */
  queryHfqGrade(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Phone')) {
      throw new TypeError('parameter "Phone" is required');
    }

    return this.request('QueryHfqGrade', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OutOrderId - outOrderId. required.
   */
  queryHfqOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OutOrderId')) {
      throw new TypeError('parameter "OutOrderId" is required');
    }

    return this.request('QueryHfqOrder', params, options);
  }

}

module.exports = Client;

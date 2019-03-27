
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-08-10';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} GameOrderId - gameOrderId. required.
   * @param {Integer} AuditReuslt - auditReuslt. required.
   * @param {String} Remark - remark. optional.
   */
  auditGameOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GameOrderId')) {
      throw new TypeError('parameter "GameOrderId" is required');
    }

    if (!hasOwnProperty(params, 'AuditReuslt')) {
      throw new TypeError('parameter "AuditReuslt" is required');
    }

    return this.request('AuditGameOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ProductId - productId. required.
   */
  queryGameEnumList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductId')) {
      throw new TypeError('parameter "ProductId" is required');
    }

    return this.request('QueryGameEnumList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  queryGameList(params = {}, options = {}) {
    return this.request('QueryGameList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} GameOrderId - gameOrderId. required.
   */
  submitGameOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GameOrderId')) {
      throw new TypeError('parameter "GameOrderId" is required');
    }

    return this.request('SubmitGameOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} GameOrderId - gameOrderId. required.
   * @param {String} OutOrderId - outOrderId. required.
   * @param {String} HatchetManId - hatchetManId. optional.
   * @param {String} HatchetManName - hatchetManName. required.
   * @param {String} HatchetManIdentity - hatchetManIdentity. optional.
   * @param {String} HatchetManTel - hatchetManTel. required.
   * @param {String} HatchetManQQ - hatchetManQQ. required.
   */
  takeGameOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GameOrderId')) {
      throw new TypeError('parameter "GameOrderId" is required');
    }

    if (!hasOwnProperty(params, 'OutOrderId')) {
      throw new TypeError('parameter "OutOrderId" is required');
    }

    if (!hasOwnProperty(params, 'HatchetManName')) {
      throw new TypeError('parameter "HatchetManName" is required');
    }

    if (!hasOwnProperty(params, 'HatchetManTel')) {
      throw new TypeError('parameter "HatchetManTel" is required');
    }

    if (!hasOwnProperty(params, 'HatchetManQQ')) {
      throw new TypeError('parameter "HatchetManQQ" is required');
    }

    return this.request('TakeGameOrder', params, options);
  }

}

module.exports = Client;

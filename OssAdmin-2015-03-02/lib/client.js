
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-03-02';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} region - region. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createOssInstance(params = {}, options = {}) {
    return this.request('CreateOssInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} region - region. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  releaseOssInstance(params = {}, options = {}) {
    return this.request('ReleaseOssInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} region - region. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  restartOssInstance(params = {}, options = {}) {
    return this.request('RestartOssInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} region - region. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  stopOssInstance(params = {}, options = {}) {
    return this.request('StopOssInstance', params, options);
  }

}

module.exports = Client;

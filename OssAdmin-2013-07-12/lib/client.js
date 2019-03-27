
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2013-07-12';
    super(config);
  }

  /**
   * @param {String} uid - aliUid. optional.
   * @param {String} bid - bid. optional.
   * @param {String} BucketName - bucketName. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  getBucketPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BucketName')) {
      throw new TypeError('parameter "BucketName" is required');
    }

    return this.request('GetBucketPolicy', params, options);
  }

  /**
   * @param {String} uid - aliUid. optional.
   * @param {String} bid - bid. optional.
   * @param {Integer} BucketLimit - bucketLimit. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  putBucketLimit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BucketLimit')) {
      throw new TypeError('parameter "BucketLimit" is required');
    }

    return this.request('PutBucketLimit', params, options);
  }

  /**
   * @param {String} uid - aliUid. optional.
   * @param {String} bid - bid. optional.
   * @param {String} BucketName - bucketName. required.
   * @param {String} IamPolicy - iamPolicy. optional.
   * @param {Boolean} DisallowEmptyRefer - disallowEmptyRefer. optional.
   * @param {Boolean} EnableDualCluster - enableDualCluster. optional.
   * @param {String} ErrorFile - errorFile. optional.
   * @param {String} IndexFile - indexFile. optional.
   * @param {String} Location - location. optional.
   * @param {String} LogBucket - logBucket. optional.
   * @param {String} LogPrefix - logPrefix. optional.
   * @param {String} WhiteReferList - whiteReferList. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  putBucketPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BucketName')) {
      throw new TypeError('parameter "BucketName" is required');
    }

    return this.request('PutBucketPolicy', params, options);
  }

  /**
   * @param {String} uid - aliUid. optional.
   * @param {String} bid - bid. optional.
   * @param {String} Bucket - bucket. required.
   * @param {String} Status - status. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  putBucketStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bucket')) {
      throw new TypeError('parameter "Bucket" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('PutBucketStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} region - region. optional.
   * @param {Integer} aliUid - aliUid. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createOssInstance(params = {}, options = {}) {
    return this.request('createOssInstance', params, options);
  }

}

module.exports = Client;

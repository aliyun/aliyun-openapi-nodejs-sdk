
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-05-20';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Region - region. required.
   * @param {String} VpcId - vpcId. required.
   * @param {String} Vip - vip. required.
   * @param {String} BucketName - bucketName. required.
   */
  bindBucketVip(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'Vip')) {
      throw new TypeError('parameter "Vip" is required');
    }

    if (!hasOwnProperty(params, 'BucketName')) {
      throw new TypeError('parameter "BucketName" is required');
    }

    return this.request('BindBucketVip', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Region - region. required.
   * @param {String} VirtualSwitchId - virtualSwitchId. required.
   * @param {String} VpcId - vpcId. required.
   * @param {String} Label - label. required.
   */
  createImgVpc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'VirtualSwitchId')) {
      throw new TypeError('parameter "VirtualSwitchId" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'Label')) {
      throw new TypeError('parameter "Label" is required');
    }

    return this.request('CreateImgVpc', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Region - region. required.
   * @param {String} VirtualSwitchId - virtualSwitchId. required.
   * @param {String} VpcId - vpcId. required.
   * @param {String} Label - label. required.
   */
  createOssVpc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'VirtualSwitchId')) {
      throw new TypeError('parameter "VirtualSwitchId" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'Label')) {
      throw new TypeError('parameter "Label" is required');
    }

    return this.request('CreateOssVpc', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Region - region. required.
   * @param {String} VpcId - vpcId. required.
   * @param {String} Label - label. required.
   */
  deleteImgVpc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'Label')) {
      throw new TypeError('parameter "Label" is required');
    }

    return this.request('DeleteImgVpc', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Region - region. required.
   * @param {String} VpcId - vpcId. required.
   * @param {String} Label - label. required.
   */
  deleteOssVpc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'Label')) {
      throw new TypeError('parameter "Label" is required');
    }

    return this.request('DeleteOssVpc', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} BucketName - bucketName. required.
   */
  getBucketVips(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BucketName')) {
      throw new TypeError('parameter "BucketName" is required');
    }

    return this.request('GetBucketVips', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Region - region. required.
   * @param {String} VpcId - vpcId. required.
   * @param {String} Label - label. required.
   */
  getImgVpcInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'Label')) {
      throw new TypeError('parameter "Label" is required');
    }

    return this.request('GetImgVpcInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Region - region. required.
   * @param {String} VpcId - vpcId. required.
   * @param {String} Label - label. required.
   */
  getOssVpcInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'Label')) {
      throw new TypeError('parameter "Label" is required');
    }

    return this.request('GetOssVpcInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Region - region. required.
   * @param {String} VpcId - vpcId. required.
   * @param {String} Vip - vip. required.
   * @param {String} BucketName - bucketName. required.
   */
  unBindBucketVip(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'Vip')) {
      throw new TypeError('parameter "Vip" is required');
    }

    if (!hasOwnProperty(params, 'BucketName')) {
      throw new TypeError('parameter "BucketName" is required');
    }

    return this.request('UnBindBucketVip', params, options);
  }

}

module.exports = Client;

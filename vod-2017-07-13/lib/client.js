
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-07-13';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MediaFileId - mediaFileId. required.
   * @param {String} CompanionResourceType - companionResourceType. required.
   * @param {String} CompanionResourceConfig - companionResourceConfig. required.
   * @param {String} ResourceName - resourceName. optional.
   * @param {String} ResourceTags - resourceTags. optional.
   */
  addCompanionresourceInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaFileId')) {
      throw new TypeError('parameter "MediaFileId" is required');
    }

    if (!hasOwnProperty(params, 'CompanionResourceType')) {
      throw new TypeError('parameter "CompanionResourceType" is required');
    }

    if (!hasOwnProperty(params, 'CompanionResourceConfig')) {
      throw new TypeError('parameter "CompanionResourceConfig" is required');
    }

    return this.request('AddCompanionresourceInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CoverURL - coverUrl. optional.
   * @param {String} Description - description. optional.
   * @param {String} FileName - fileName. required.
   * @param {Long} FileSize - fileSize. required.
   * @param {String} Title - title. required.
   * @param {Integer} CateId - cateId. optional.
   * @param {String} Tags - tags. optional.
   */
  createUploadMaterial(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    if (!hasOwnProperty(params, 'FileSize')) {
      throw new TypeError('parameter "FileSize" is required');
    }

    if (!hasOwnProperty(params, 'Title')) {
      throw new TypeError('parameter "Title" is required');
    }

    return this.request('CreateUploadMaterial', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} BusinessType - businessType. required.
   * @param {String} FileExtension - fileExtension. required.
   * @param {String} MediaId - mediaId. optional.
   * @param {String} UserData - userData. optional.
   */
  createUploadMediaFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BusinessType')) {
      throw new TypeError('parameter "BusinessType" is required');
    }

    if (!hasOwnProperty(params, 'FileExtension')) {
      throw new TypeError('parameter "FileExtension" is required');
    }

    return this.request('CreateUploadMediaFile', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} MaterialIds - materialIdStr. required.
   */
  deleteMaterial(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MaterialIds')) {
      throw new TypeError('parameter "MaterialIds" is required');
    }

    return this.request('DeleteMaterial', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Version - version. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} VideoType - videoType. required.
   * @param {String} BizDate - bizdate. required.
   */
  describeUserTopVideoByDay(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoType')) {
      throw new TypeError('parameter "VideoType" is required');
    }

    if (!hasOwnProperty(params, 'BizDate')) {
      throw new TypeError('parameter "BizDate" is required');
    }

    return this.request('DescribeUserTopVideoByDay', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MaterialId - materialId. required.
   */
  getMaterial(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MaterialId')) {
      throw new TypeError('parameter "MaterialId" is required');
    }

    return this.request('GetMaterial', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MaterialId - materialId. required.
   */
  refreshUploadMaterialToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MaterialId')) {
      throw new TypeError('parameter "MaterialId" is required');
    }

    return this.request('RefreshUploadMaterialToken', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Integer} CateId - cateId. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} Status - state. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} SortBy - sortBy. optional.
   * @param {String} Type - type. optional.
   * @param {String} Source - source. optional.
   * @param {String} Title - title. optional.
   */
  searchMaterial(params = {}, options = {}) {
    return this.request('SearchMaterial', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VideoIds - videoIds. required.
   */
  syncMaterial(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoIds')) {
      throw new TypeError('parameter "VideoIds" is required');
    }

    return this.request('SyncMaterial', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} MaterialId - materialId. required.
   * @param {String} Title - title. optional.
   * @param {String} Description - description. optional.
   * @param {String} Tags - tags. optional.
   * @param {String} CoverURL - coverUrl. optional.
   * @param {Integer} CateId - cateId. optional.
   */
  updateMaterial(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MaterialId')) {
      throw new TypeError('parameter "MaterialId" is required');
    }

    return this.request('UpdateMaterial', params, options);
  }

}

module.exports = Client;

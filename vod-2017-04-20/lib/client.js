
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-04-20';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} CateName - cateName. required.
   * @param {String} ParentId - parentId. required.
   */
  addCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CateName')) {
      throw new TypeError('parameter "CateName" is required');
    }

    if (!hasOwnProperty(params, 'ParentId')) {
      throw new TypeError('parameter "ParentId" is required');
    }

    return this.request('AddCategory', params, options);
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
   * @param {String} IP - createIp. optional.
   * @param {String} Title - title. required.
   * @param {Integer} CateId - cateId. optional.
   * @param {String} Tags - tags. optional.
   */
  createUploadVideo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    if (!hasOwnProperty(params, 'FileSize')) {
      throw new TypeError('parameter "FileSize" is required');
    }

    if (!hasOwnProperty(params, 'Title')) {
      throw new TypeError('parameter "Title" is required');
    }

    return this.request('CreateUploadVideo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} CateId - cateId. required.
   */
  deleteCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CateId')) {
      throw new TypeError('parameter "CateId" is required');
    }

    return this.request('DeleteCategory', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VideoIds - mediaIdStr. required.
   */
  deleteVideo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoIds')) {
      throw new TypeError('parameter "VideoIds" is required');
    }

    return this.request('DeleteVideo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  getCategoryList(params = {}, options = {}) {
    return this.request('GetCategoryList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  getCategoryTree(params = {}, options = {}) {
    return this.request('GetCategoryTree', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  getDomainList(params = {}, options = {}) {
    return this.request('GetDomainList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Integer} FileType - fileType. required.
   */
  getImageUploadAuth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileType')) {
      throw new TypeError('parameter "FileType" is required');
    }

    return this.request('GetImageUploadAuth', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VideoId - mediaId. required.
   */
  getVideoInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    return this.request('GetVideoInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} CateId - cateId. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} SortBy - sortBy. optional.
   */
  getVideoList(params = {}, options = {}) {
    return this.request('GetVideoList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VideoId - videoId. required.
   */
  getVideoPlayAuth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    return this.request('GetVideoPlayAuth', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} CateName - cateName. required.
   * @param {String} CateId - cateId. required.
   */
  updateCategoryName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CateName')) {
      throw new TypeError('parameter "CateName" is required');
    }

    if (!hasOwnProperty(params, 'CateId')) {
      throw new TypeError('parameter "CateId" is required');
    }

    return this.request('UpdateCategoryName', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VideoId - mediaId. required.
   * @param {String} Title - title. optional.
   * @param {String} Tags - tags. optional.
   * @param {String} Description - description. optional.
   * @param {String} CoverURL - coverUrl. optional.
   * @param {Integer} CateId - cateId. optional.
   */
  updateVideoInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    return this.request('UpdateVideoInfo', params, options);
  }

}

module.exports = Client;

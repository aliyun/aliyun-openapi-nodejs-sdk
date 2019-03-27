
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-05-11';
    super(config);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {RepeatList} PhotoIds - photoIds. required.
   * @param {String} StoreName - storeName. required.
   */
  addAlbumPhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'PhotoIds')) {
      throw new TypeError('parameter "PhotoIds" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('AddAlbumPhotos', params, options);
  }

  /**
   * @param {Integer} Page - page. required.
   * @param {Integer} Size - size. required.
   * @param {Long} LastUpdateAt - lastUpdateAt. required.
   * @param {String} State - state. required.
   */
  check(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'Size')) {
      throw new TypeError('parameter "Size" is required');
    }

    if (!hasOwnProperty(params, 'LastUpdateAt')) {
      throw new TypeError('parameter "LastUpdateAt" is required');
    }

    if (!hasOwnProperty(params, 'State')) {
      throw new TypeError('parameter "State" is required');
    }

    return this.request('Check', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} StoreName - storeName. required.
   */
  createAlbum(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('CreateAlbum', params, options);
  }

  /**
   * @param {String} FileId - fileId. required.
   * @param {String} Sid - sessionId. required.
   * @param {String} UploadType - uploadType. required.
   * @param {String} Title - title. required.
   * @param {String} StoreName - storeName. required.
   */
  createPhoto(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileId')) {
      throw new TypeError('parameter "FileId" is required');
    }

    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    if (!hasOwnProperty(params, 'UploadType')) {
      throw new TypeError('parameter "UploadType" is required');
    }

    if (!hasOwnProperty(params, 'Title')) {
      throw new TypeError('parameter "Title" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('CreatePhoto', params, options);
  }

  /**
   * @param {String} StoreName - storeName. required.
   * @param {String} BucketName - bucketName. required.
   * @param {String} Remark - remark. required.
   */
  createPhotostore(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    if (!hasOwnProperty(params, 'BucketName')) {
      throw new TypeError('parameter "BucketName" is required');
    }

    if (!hasOwnProperty(params, 'Remark')) {
      throw new TypeError('parameter "Remark" is required');
    }

    return this.request('CreatePhotostore', params, options);
  }

  /**
   * @param {Long} Size - size. required.
   * @param {String} Ext - ext. required.
   * @param {Boolean} Force - force. required.
   * @param {String} Md5 - md5. required.
   * @param {String} StoreName - storeName. required.
   */
  createTransaction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Size')) {
      throw new TypeError('parameter "Size" is required');
    }

    if (!hasOwnProperty(params, 'Ext')) {
      throw new TypeError('parameter "Ext" is required');
    }

    if (!hasOwnProperty(params, 'Force')) {
      throw new TypeError('parameter "Force" is required');
    }

    if (!hasOwnProperty(params, 'Md5')) {
      throw new TypeError('parameter "Md5" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('CreateTransaction', params, options);
  }

  /**
   * @param {RepeatList} Ids - ids. required.
   * @param {String} StoreName - storeName. required.
   */
  deleteAlbums(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('DeleteAlbums', params, options);
  }

  /**
   * @param {RepeatList} Ids - ids. required.
   * @param {String} StoreName - storeName. required.
   */
  deleteFaces(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('DeleteFaces', params, options);
  }

  /**
   * @param {RepeatList} Ids - ids. required.
   * @param {String} StoreName - storeName. required.
   */
  deletePhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('DeletePhotos', params, options);
  }

  /**
   * @param {String} StoreName - storeName. required.
   */
  deletePhotostore(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('DeletePhotostore', params, options);
  }

  /**
   * @param {RepeatList} Ids - ids. required.
   * @param {String} StoreName - storeName. required.
   */
  diePhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('DiePhotos', params, options);
  }

  /**
   * @param {String} FileId - fileId. required.
   * @param {String} StoreName - storeName. required.
   */
  getDownload(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileId')) {
      throw new TypeError('parameter "FileId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('GetDownload', params, options);
  }

  /**
   * @param {String} StoreName - storeName. required.
   */
  getPhotoStore(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('GetPhotoStore', params, options);
  }

  /**
   * @param {String} StoreName - storeName. required.
   */
  getQuota(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('GetQuota', params, options);
  }

  /**
   * @param {String} FileId - fileId. required.
   * @param {String} ZoomType - zoomType. required.
   * @param {String} StoreName - storeName. required.
   */
  getThumbnail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileId')) {
      throw new TypeError('parameter "FileId" is required');
    }

    if (!hasOwnProperty(params, 'ZoomType')) {
      throw new TypeError('parameter "ZoomType" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('GetThumbnail', params, options);
  }

  /**
   * @param {String} FileId - fileId. required.
   * @param {String} ZoomType - zoomType. required.
   * @param {String} StoreName - storeName. required.
   */
  getVideoCover(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileId')) {
      throw new TypeError('parameter "FileId" is required');
    }

    if (!hasOwnProperty(params, 'ZoomType')) {
      throw new TypeError('parameter "ZoomType" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('GetVideoCover', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {Integer} Page - page. required.
   * @param {Integer} Size - size. required.
   * @param {Long} LastUpdateAt - lastUpdateAt. required.
   * @param {String} State - state. required.
   * @param {String} StoreName - storeName. required.
   */
  listAlbumPhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'Size')) {
      throw new TypeError('parameter "Size" is required');
    }

    if (!hasOwnProperty(params, 'LastUpdateAt')) {
      throw new TypeError('parameter "LastUpdateAt" is required');
    }

    if (!hasOwnProperty(params, 'State')) {
      throw new TypeError('parameter "State" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('ListAlbumPhotos', params, options);
  }

  /**
   * @param {Integer} Page - page. required.
   * @param {Integer} Size - size. required.
   * @param {Long} LastUpdateAt - lastUpdateAt. required.
   * @param {String} State - state. required.
   * @param {String} StoreName - storeName. required.
   */
  listAlbums(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'Size')) {
      throw new TypeError('parameter "Size" is required');
    }

    if (!hasOwnProperty(params, 'LastUpdateAt')) {
      throw new TypeError('parameter "LastUpdateAt" is required');
    }

    if (!hasOwnProperty(params, 'State')) {
      throw new TypeError('parameter "State" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('ListAlbums', params, options);
  }

  /**
   */
  listBuckets(params = {}, options = {}) {
    return this.request('ListBuckets', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {Integer} Page - page. required.
   * @param {Integer} Size - size. required.
   * @param {Long} LastUpdateAt - lastUpdateAt. required.
   * @param {String} State - state. required.
   * @param {String} StoreName - storeName. required.
   */
  listFacePhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'Size')) {
      throw new TypeError('parameter "Size" is required');
    }

    if (!hasOwnProperty(params, 'LastUpdateAt')) {
      throw new TypeError('parameter "LastUpdateAt" is required');
    }

    if (!hasOwnProperty(params, 'State')) {
      throw new TypeError('parameter "State" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('ListFacePhotos', params, options);
  }

  /**
   * @param {Integer} Page - page. required.
   * @param {Integer} Size - size. required.
   * @param {Long} LastUpdateAt - lastUpdateAt. required.
   * @param {String} State - state. required.
   * @param {String} StoreName - storeName. required.
   */
  listFaces(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'Size')) {
      throw new TypeError('parameter "Size" is required');
    }

    if (!hasOwnProperty(params, 'LastUpdateAt')) {
      throw new TypeError('parameter "LastUpdateAt" is required');
    }

    if (!hasOwnProperty(params, 'State')) {
      throw new TypeError('parameter "State" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('ListFaces', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {Integer} Page - page. required.
   * @param {Integer} Size - size. required.
   * @param {Long} LastUpdateAt - lastUpdateAt. required.
   * @param {String} State - state. required.
   * @param {String} StoreName - storeName. required.
   */
  listMomentPhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'Size')) {
      throw new TypeError('parameter "Size" is required');
    }

    if (!hasOwnProperty(params, 'LastUpdateAt')) {
      throw new TypeError('parameter "LastUpdateAt" is required');
    }

    if (!hasOwnProperty(params, 'State')) {
      throw new TypeError('parameter "State" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('ListMomentPhotos', params, options);
  }

  /**
   * @param {Integer} Page - page. required.
   * @param {Integer} Size - size. required.
   * @param {Long} LastUpdateAt - lastUpdateAt. required.
   * @param {String} State - state. required.
   * @param {String} StoreName - storeName. required.
   */
  listMoments(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'Size')) {
      throw new TypeError('parameter "Size" is required');
    }

    if (!hasOwnProperty(params, 'LastUpdateAt')) {
      throw new TypeError('parameter "LastUpdateAt" is required');
    }

    if (!hasOwnProperty(params, 'State')) {
      throw new TypeError('parameter "State" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('ListMoments', params, options);
  }

  /**
   * @param {Integer} Page - page. required.
   * @param {Integer} Size - size. required.
   * @param {Long} LastUpdateAt - lastUpdateAt. required.
   * @param {Long} Id - id. required.
   * @param {String} StoreName - storeName. required.
   */
  listPhotoTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'Size')) {
      throw new TypeError('parameter "Size" is required');
    }

    if (!hasOwnProperty(params, 'LastUpdateAt')) {
      throw new TypeError('parameter "LastUpdateAt" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('ListPhotoTags', params, options);
  }

  /**
   * @param {Integer} Page - page. required.
   * @param {Integer} Size - size. required.
   * @param {Long} LastUpdateAt - lastUpdateAt. required.
   * @param {String} State - state. required.
   * @param {String} StoreName - storeName. required.
   */
  listPhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'Size')) {
      throw new TypeError('parameter "Size" is required');
    }

    if (!hasOwnProperty(params, 'LastUpdateAt')) {
      throw new TypeError('parameter "LastUpdateAt" is required');
    }

    if (!hasOwnProperty(params, 'State')) {
      throw new TypeError('parameter "State" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('ListPhotos', params, options);
  }

  /**
   */
  listPhotostores(params = {}, options = {}) {
    return this.request('ListPhotostores', params, options);
  }

  /**
   */
  listPreChecks(params = {}, options = {}) {
    return this.request('ListPreChecks', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {Integer} Page - page. required.
   * @param {Integer} Size - size. required.
   * @param {Long} LastUpdateAt - lastUpdateAt. required.
   * @param {String} State - state. required.
   * @param {String} StoreName - storeName. required.
   */
  listTagPhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'Size')) {
      throw new TypeError('parameter "Size" is required');
    }

    if (!hasOwnProperty(params, 'LastUpdateAt')) {
      throw new TypeError('parameter "LastUpdateAt" is required');
    }

    if (!hasOwnProperty(params, 'State')) {
      throw new TypeError('parameter "State" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('ListTagPhotos', params, options);
  }

  /**
   * @param {Integer} Page - page. required.
   * @param {Integer} Size - size. required.
   * @param {Long} LastUpdateAt - lastUpdateAt. required.
   * @param {String} StoreName - storeName. required.
   */
  listTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'Size')) {
      throw new TypeError('parameter "Size" is required');
    }

    if (!hasOwnProperty(params, 'LastUpdateAt')) {
      throw new TypeError('parameter "LastUpdateAt" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('ListTags', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {RepeatList} PhotoIds - photoIds. required.
   * @param {Long} TargetId - targetId. required.
   * @param {String} StoreName - storeName. required.
   */
  moveAlbumPhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'PhotoIds')) {
      throw new TypeError('parameter "PhotoIds" is required');
    }

    if (!hasOwnProperty(params, 'TargetId')) {
      throw new TypeError('parameter "TargetId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('MoveAlbumPhotos', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {RepeatList} PhotoIds - photoIds. required.
   * @param {Long} TargetId - targetId. required.
   * @param {String} StoreName - storeName. required.
   */
  moveFacePhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'PhotoIds')) {
      throw new TypeError('parameter "PhotoIds" is required');
    }

    if (!hasOwnProperty(params, 'TargetId')) {
      throw new TypeError('parameter "TargetId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('MoveFacePhotos', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {RepeatList} PhotoIds - photoIds. required.
   * @param {String} StoreName - storeName. required.
   */
  removeAlbumPhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'PhotoIds')) {
      throw new TypeError('parameter "PhotoIds" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('RemoveAlbumPhotos', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {RepeatList} PhotoIds - photoIds. required.
   * @param {String} StoreName - storeName. required.
   */
  removeFacePhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'PhotoIds')) {
      throw new TypeError('parameter "PhotoIds" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('RemoveFacePhotos', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {String} Name - name. required.
   * @param {String} StoreName - storeName. required.
   */
  renameAlbum(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('RenameAlbum', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {String} Name - name. required.
   * @param {String} StoreName - storeName. required.
   */
  renameFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('RenameFace', params, options);
  }

  /**
   * @param {RepeatList} Ids - ids. required.
   * @param {String} StoreName - storeName. required.
   */
  restorePhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('RestorePhotos', params, options);
  }

  /**
   * @param {Integer} Page - page. required.
   * @param {Integer} Size - size. required.
   * @param {String} Keyword - keyword. required.
   * @param {String} StoreName - storeName. required.
   */
  searchPhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'Size')) {
      throw new TypeError('parameter "Size" is required');
    }

    if (!hasOwnProperty(params, 'Keyword')) {
      throw new TypeError('parameter "Keyword" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('SearchPhotos', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {Long} PhotoId - photoId. required.
   * @param {String} StoreName - storeName. required.
   */
  setAlbumCover(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'PhotoId')) {
      throw new TypeError('parameter "PhotoId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('SetAlbumCover', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {String} StoreName - storeName. required.
   */
  setMe(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('SetMe', params, options);
  }

  /**
   * @param {Long} Total - total. required.
   * @param {String} StoreName - storeName. required.
   */
  setQuota(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Total')) {
      throw new TypeError('parameter "Total" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('SetQuota', params, options);
  }

  /**
   * @param {RepeatList} FaceIds - faceIds. required.
   * @param {Long} TargetId - targetId. required.
   * @param {String} StoreName - storeName. required.
   */
  mergeFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FaceIds')) {
      throw new TypeError('parameter "FaceIds" is required');
    }

    if (!hasOwnProperty(params, 'TargetId')) {
      throw new TypeError('parameter "TargetId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('mergeFace', params, options);
  }

}

module.exports = Client;

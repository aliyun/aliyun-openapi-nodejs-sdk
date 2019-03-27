
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-07-11';
    super(config);
  }

  /**
   * @param {RepeatList} PhotoId - photoIds. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  activatePhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhotoId')) {
      throw new TypeError('parameter "PhotoId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('ActivatePhotos', params, options);
  }

  /**
   * @param {Long} AlbumId - albumId. required.
   * @param {RepeatList} PhotoId - photoIds. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  addAlbumPhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AlbumId')) {
      throw new TypeError('parameter "AlbumId" is required');
    }

    if (!hasOwnProperty(params, 'PhotoId')) {
      throw new TypeError('parameter "PhotoId" is required');
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
   * @param {String} StoreName - storeName. required.
   * @param {String} State - state. optional.
   * @param {String} LibraryId - libraryId. optional.
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

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('Check', params, options);
  }

  /**
   * @param {String} pk - pk. required.
   * @param {String} bid - bid. required.
   * @param {Long} hid - hid. optional.
   * @param {String} country - country. optional.
   * @param {String} taskIdentifier - taskIdentifier. optional.
   * @param {String} taskExtraData - taskExtraData. optional.
   * @param {String} gmtWakeup - gmtWakeup. optional.
   */
  checkResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'pk')) {
      throw new TypeError('parameter "pk" is required');
    }

    if (!hasOwnProperty(params, 'bid')) {
      throw new TypeError('parameter "bid" is required');
    }

    return this.request('CheckResource', params, options);
  }

  /**
   * @param {String} AlbumName - albumName. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} Remark - remark. optional.
   * @param {String} LibraryId - libraryId. optional.
   */
  createAlbum(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AlbumName')) {
      throw new TypeError('parameter "AlbumName" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('CreateAlbum', params, options);
  }

  /**
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   * @param {String} Title - title. required.
   * @param {Long} StartAt - startAt. required.
   * @param {Long} EndAt - endAt. required.
   * @param {String} Identity - identity. required.
   * @param {String} WeixinTitle - weixinTitle. optional.
   * @param {String} SplashPhotoId - splashPhotoId. optional.
   * @param {String} BannerPhotoId - bannerPhotoId. optional.
   * @param {String} WatermarkPhotoId - watermarkPhotoId. optional.
   * @param {String} Remark - remark. optional.
   */
  createEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    if (!hasOwnProperty(params, 'Title')) {
      throw new TypeError('parameter "Title" is required');
    }

    if (!hasOwnProperty(params, 'StartAt')) {
      throw new TypeError('parameter "StartAt" is required');
    }

    if (!hasOwnProperty(params, 'EndAt')) {
      throw new TypeError('parameter "EndAt" is required');
    }

    if (!hasOwnProperty(params, 'Identity')) {
      throw new TypeError('parameter "Identity" is required');
    }

    return this.request('CreateEvent', params, options);
  }

  /**
   * @param {String} FileId - fileId. required.
   * @param {String} SessionId - sessionId. required.
   * @param {String} UploadType - uploadType. optional.
   * @param {String} PhotoTitle - photoTitle. optional.
   * @param {String} StoreName - storeName. required.
   * @param {String} Remark - remark. optional.
   * @param {String} LibraryId - libraryId. optional.
   * @param {String} Staging - staging. optional.
   * @param {Long} ShareExpireTime - shareExpireTime. optional.
   * @param {Long} TakenAt - takenAt. optional.
   */
  createPhoto(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileId')) {
      throw new TypeError('parameter "FileId" is required');
    }

    if (!hasOwnProperty(params, 'SessionId')) {
      throw new TypeError('parameter "SessionId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('CreatePhoto', params, options);
  }

  /**
   * @param {String} StoreName - storeName. required.
   * @param {Long} DefaultQuota - defaultQuota. required.
   * @param {String} BucketName - bucketName. required.
   * @param {String} Remark - remark. optional.
   */
  createPhotoStore(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    if (!hasOwnProperty(params, 'DefaultQuota')) {
      throw new TypeError('parameter "DefaultQuota" is required');
    }

    if (!hasOwnProperty(params, 'BucketName')) {
      throw new TypeError('parameter "BucketName" is required');
    }

    return this.request('CreatePhotoStore', params, options);
  }

  /**
   * @param {Long} Size - size. required.
   * @param {String} Ext - ext. optional.
   * @param {String} Force - force. optional.
   * @param {String} Md5 - md5. optional.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  createTransaction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Size')) {
      throw new TypeError('parameter "Size" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('CreateTransaction', params, options);
  }

  /**
   * @param {RepeatList} AlbumId - albumIds. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  deleteAlbums(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AlbumId')) {
      throw new TypeError('parameter "AlbumId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('DeleteAlbums', params, options);
  }

  /**
   * @param {Long} EventId - eventId. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  deleteEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('DeleteEvent', params, options);
  }

  /**
   * @param {RepeatList} FaceId - faceIds. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  deleteFaces(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FaceId')) {
      throw new TypeError('parameter "FaceId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('DeleteFaces', params, options);
  }

  /**
   * @param {String} StoreName - storeName. required.
   */
  deletePhotoStore(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('DeletePhotoStore', params, options);
  }

  /**
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   * @param {RepeatList} PhotoId - photoIds. required.
   */
  deletePhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    if (!hasOwnProperty(params, 'PhotoId')) {
      throw new TypeError('parameter "PhotoId" is required');
    }

    return this.request('DeletePhotos', params, options);
  }

  /**
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   * @param {String} EventId - eventId. required.
   * @param {String} Identity - identity. optional.
   * @param {String} Title - title. optional.
   * @param {Long} StartAt - startAt. optional.
   * @param {Long} EndAt - endAt. optional.
   * @param {String} WeixinTitle - weixinTitle. optional.
   * @param {String} SplashPhotoId - splashPhotoId. optional.
   * @param {String} BannerPhotoId - bannerPhotoId. optional.
   * @param {String} WatermarkPhotoId - watermarkPhotoId. optional.
   * @param {String} Remark - remark. optional.
   */
  editEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    return this.request('EditEvent', params, options);
  }

  /**
   * @param {String} AutoCleanEnabled - autoCleanEnabled. optional.
   * @param {Integer} AutoCleanDays - autoCleanDays. optional.
   * @param {Long} DefaultQuota - defaultQuota. optional.
   * @param {Long} DefaultTrashQuota - defaultTrashQuota. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} StoreName - storeName. required.
   */
  editPhotoStore(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('EditPhotoStore', params, options);
  }

  /**
   * @param {RepeatList} PhotoId - photoIds. required.
   * @param {Long} ShareExpireTime - shareExpireTime. optional.
   * @param {Long} TakenAt - takenAt. optional.
   * @param {String} Title - title. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  editPhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhotoId')) {
      throw new TypeError('parameter "PhotoId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('EditPhotos', params, options);
  }

  /**
   * @param {Long} AlbumId - albumId. required.
   * @param {Long} TagId - tagId. required.
   * @param {Integer} Size - size. optional.
   * @param {Integer} Page - page. optional.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  fetchAlbumTagPhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AlbumId')) {
      throw new TypeError('parameter "AlbumId" is required');
    }

    if (!hasOwnProperty(params, 'TagId')) {
      throw new TypeError('parameter "TagId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('FetchAlbumTagPhotos', params, options);
  }

  /**
   * @param {String} StoreName - storeName. required.
   * @param {Integer} Page - page. optional.
   * @param {Integer} Size - size. optional.
   */
  fetchLibraries(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('FetchLibraries', params, options);
  }

  /**
   * @param {Long} MomentId - momentId. required.
   * @param {String} OrderBy - orderBy. optional.
   * @param {String} Order - order. optional.
   * @param {Integer} Size - size. optional.
   * @param {Integer} Page - page. optional.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  fetchMomentPhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MomentId')) {
      throw new TypeError('parameter "MomentId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('FetchMomentPhotos', params, options);
  }

  /**
   * @param {String} State - state. required.
   * @param {String} OrderBy - orderBy. optional.
   * @param {String} Order - order. optional.
   * @param {Integer} Size - size. optional.
   * @param {Integer} Page - page. optional.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  fetchPhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'State')) {
      throw new TypeError('parameter "State" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('FetchPhotos', params, options);
  }

  /**
   * @param {RepeatList} Name - names. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  getAlbumsByNames(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('GetAlbumsByNames', params, options);
  }

  /**
   * @param {Long} PhotoId - photoId. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  getDownloadUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhotoId')) {
      throw new TypeError('parameter "PhotoId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('GetDownloadUrl', params, options);
  }

  /**
   * @param {RepeatList} PhotoId - photoIds. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  getDownloadUrls(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhotoId')) {
      throw new TypeError('parameter "PhotoId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('GetDownloadUrls', params, options);
  }

  /**
   * @param {Long} EventId - eventId. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  getEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('GetEvent', params, options);
  }

  /**
   * @param {RepeatList} PhotoId - photoIds. required.
   * @param {String} FrameId - frameId. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  getFramedPhotoUrls(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhotoId')) {
      throw new TypeError('parameter "PhotoId" is required');
    }

    if (!hasOwnProperty(params, 'FrameId')) {
      throw new TypeError('parameter "FrameId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('GetFramedPhotoUrls', params, options);
  }

  /**
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  getLibrary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('GetLibrary', params, options);
  }

  /**
   * @param {String} EndPoint - endPoint. required.
   * @param {String} Bucket - bucket. required.
   * @param {String} AccessId - accessId. required.
   * @param {String} AccessKey - accessKey. required.
   * @param {String} StsToken - stsToken. required.
   * @param {String} ObjectKey - objectKey. optional.
   */
  getOSSPostObjectPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EndPoint')) {
      throw new TypeError('parameter "EndPoint" is required');
    }

    if (!hasOwnProperty(params, 'Bucket')) {
      throw new TypeError('parameter "Bucket" is required');
    }

    if (!hasOwnProperty(params, 'AccessId')) {
      throw new TypeError('parameter "AccessId" is required');
    }

    if (!hasOwnProperty(params, 'AccessKey')) {
      throw new TypeError('parameter "AccessKey" is required');
    }

    if (!hasOwnProperty(params, 'StsToken')) {
      throw new TypeError('parameter "StsToken" is required');
    }

    return this.request('GetOSSPostObjectPolicy', params, options);
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
   * @param {RepeatList} PhotoId - photoIds. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  getPhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhotoId')) {
      throw new TypeError('parameter "PhotoId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('GetPhotos', params, options);
  }

  /**
   * @param {RepeatList} Md5 - md5s. required.
   * @param {String} State - state. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  getPhotosByMd5s(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Md5')) {
      throw new TypeError('parameter "Md5" is required');
    }

    if (!hasOwnProperty(params, 'State')) {
      throw new TypeError('parameter "State" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('GetPhotosByMd5s', params, options);
  }

  /**
   * @param {RepeatList} PhotoId - photoIds. required.
   * @param {String} ZoomType - zoomType. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  getPrivateAccessUrls(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhotoId')) {
      throw new TypeError('parameter "PhotoId" is required');
    }

    if (!hasOwnProperty(params, 'ZoomType')) {
      throw new TypeError('parameter "ZoomType" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('GetPrivateAccessUrls', params, options);
  }

  /**
   * @param {RepeatList} PhotoId - photoIds. required.
   * @param {String} ZoomType - zoomType. required.
   * @param {String} DomainType - domainType. optional.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  getPublicAccessUrls(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhotoId')) {
      throw new TypeError('parameter "PhotoId" is required');
    }

    if (!hasOwnProperty(params, 'ZoomType')) {
      throw new TypeError('parameter "ZoomType" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('GetPublicAccessUrls', params, options);
  }

  /**
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  getQuota(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('GetQuota', params, options);
  }

  /**
   * @param {Long} PhotoId - photoId. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  getSimilarPhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhotoId')) {
      throw new TypeError('parameter "PhotoId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('GetSimilarPhotos', params, options);
  }

  /**
   * @param {Long} PhotoId - photoId. required.
   * @param {String} ZoomType - zoomType. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  getThumbnail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhotoId')) {
      throw new TypeError('parameter "PhotoId" is required');
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
   * @param {RepeatList} PhotoId - photoIds. required.
   * @param {String} ZoomType - zoomType. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  getThumbnails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhotoId')) {
      throw new TypeError('parameter "PhotoId" is required');
    }

    if (!hasOwnProperty(params, 'ZoomType')) {
      throw new TypeError('parameter "ZoomType" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('GetThumbnails', params, options);
  }

  /**
   * @param {Long} PhotoId - photoId. required.
   * @param {String} ZoomType - zoomType. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  getVideoCover(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhotoId')) {
      throw new TypeError('parameter "PhotoId" is required');
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
   * @param {RepeatList} PhotoId - photoIds. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   * @param {Long} InactiveTime - inactiveTime. optional.
   */
  inactivatePhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhotoId')) {
      throw new TypeError('parameter "PhotoId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('InactivatePhotos', params, options);
  }

  /**
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  indexLibrary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('IndexLibrary', params, options);
  }

  /**
   * @param {Long} PhotoId - photoId. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  likePhoto(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhotoId')) {
      throw new TypeError('parameter "PhotoId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('LikePhoto', params, options);
  }

  /**
   * @param {Long} AlbumId - albumId. required.
   * @param {String} Direction - direction. optional.
   * @param {Integer} Size - size. optional.
   * @param {String} Cursor - cursor. optional.
   * @param {String} State - state. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  listAlbumPhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AlbumId')) {
      throw new TypeError('parameter "AlbumId" is required');
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
   * @param {String} Direction - direction. optional.
   * @param {Integer} Size - size. optional.
   * @param {String} Cursor - cursor. optional.
   * @param {String} State - state. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  listAlbums(params = {}, options = {}) {
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
   * @param {String} Direction - direction. optional.
   * @param {Integer} Size - size. optional.
   * @param {String} Cursor - cursor. optional.
   * @param {String} State - state. required.
   * @param {String} StoreName - storeName. required.
   */
  listEvents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'State')) {
      throw new TypeError('parameter "State" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('ListEvents', params, options);
  }

  /**
   * @param {Long} FaceId - faceId. required.
   * @param {String} Direction - direction. optional.
   * @param {Integer} Size - size. optional.
   * @param {String} Cursor - cursor. optional.
   * @param {String} State - state. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  listFacePhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FaceId')) {
      throw new TypeError('parameter "FaceId" is required');
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
   * @param {String} Direction - direction. optional.
   * @param {Integer} Size - size. optional.
   * @param {String} Cursor - cursor. optional.
   * @param {String} State - state. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   * @param {String} HasFaceName - hasFaceName. optional.
   */
  listFaces(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'State')) {
      throw new TypeError('parameter "State" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('ListFaces', params, options);
  }

  /**
   * @param {Long} MomentId - momentId. required.
   * @param {String} Direction - direction. optional.
   * @param {Integer} Size - size. optional.
   * @param {String} Cursor - cursor. optional.
   * @param {String} State - state. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  listMomentPhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MomentId')) {
      throw new TypeError('parameter "MomentId" is required');
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
   * @param {String} Direction - direction. optional.
   * @param {Integer} Size - size. optional.
   * @param {String} Cursor - cursor. optional.
   * @param {String} State - state. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  listMoments(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'State')) {
      throw new TypeError('parameter "State" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('ListMoments', params, options);
  }

  /**
   * @param {Long} PhotoId - photoId. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  listPhotoFaces(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhotoId')) {
      throw new TypeError('parameter "PhotoId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('ListPhotoFaces', params, options);
  }

  /**
   */
  listPhotoStores(params = {}, options = {}) {
    return this.request('ListPhotoStores', params, options);
  }

  /**
   * @param {Long} PhotoId - photoId. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   * @param {String} Lang - lang. optional.
   */
  listPhotoTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhotoId')) {
      throw new TypeError('parameter "PhotoId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('ListPhotoTags', params, options);
  }

  /**
   * @param {String} Direction - direction. optional.
   * @param {Integer} Size - size. optional.
   * @param {String} Cursor - cursor. optional.
   * @param {String} State - state. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  listPhotos(params = {}, options = {}) {
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
  listPreChecks(params = {}, options = {}) {
    return this.request('ListPreChecks', params, options);
  }

  /**
   * @param {String} StoreName - storeName. required.
   * @param {RepeatList} Lang - langs. required.
   */
  listRegisteredTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    if (!hasOwnProperty(params, 'Lang')) {
      throw new TypeError('parameter "Lang" is required');
    }

    return this.request('ListRegisteredTags', params, options);
  }

  /**
   * @param {Long} TagId - tagId. required.
   * @param {String} Direction - direction. optional.
   * @param {Integer} Size - size. optional.
   * @param {String} Cursor - cursor. optional.
   * @param {String} State - state. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  listTagPhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TagId')) {
      throw new TypeError('parameter "TagId" is required');
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
   * @param {String} Lang - lang. optional.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  listTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('ListTags', params, options);
  }

  /**
   * @param {String} Direction - direction. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} Size - size. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {String} FilterBy - filterBy. optional.
   * @param {String} Order - order. optional.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  listTimeLinePhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('ListTimeLinePhotos', params, options);
  }

  /**
   * @param {String} Direction - direction. optional.
   * @param {Integer} PhotoSize - photoSize. optional.
   * @param {Long} Cursor - cursor. optional.
   * @param {Integer} TimeLineCount - timeLineCount. optional.
   * @param {String} TimeLineUnit - timeLineUnit. optional.
   * @param {String} FilterBy - filterBy. optional.
   * @param {String} Order - order. optional.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  listTimeLines(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('ListTimeLines', params, options);
  }

  /**
   * @param {String} pk - pk. required.
   * @param {String} bid - bid. required.
   * @param {Long} hid - hid. optional.
   * @param {String} country - country. optional.
   * @param {String} taskIdentifier - taskIdentifier. optional.
   * @param {String} taskExtraData - taskExtraData. optional.
   * @param {String} gmtWakeup - gmtWakeup. optional.
   */
  logicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'pk')) {
      throw new TypeError('parameter "pk" is required');
    }

    if (!hasOwnProperty(params, 'bid')) {
      throw new TypeError('parameter "bid" is required');
    }

    return this.request('LogicalDeleteResource', params, options);
  }

  /**
   * @param {RepeatList} FaceId - faceIds. required.
   * @param {Long} TargetFaceId - targetFaceId. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  mergeFaces(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FaceId')) {
      throw new TypeError('parameter "FaceId" is required');
    }

    if (!hasOwnProperty(params, 'TargetFaceId')) {
      throw new TypeError('parameter "TargetFaceId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('MergeFaces', params, options);
  }

  /**
   * @param {Long} SourceAlbumId - albumId. required.
   * @param {RepeatList} PhotoId - photoIds. required.
   * @param {Long} TargetAlbumId - targetAlbumId. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  moveAlbumPhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceAlbumId')) {
      throw new TypeError('parameter "SourceAlbumId" is required');
    }

    if (!hasOwnProperty(params, 'PhotoId')) {
      throw new TypeError('parameter "PhotoId" is required');
    }

    if (!hasOwnProperty(params, 'TargetAlbumId')) {
      throw new TypeError('parameter "TargetAlbumId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('MoveAlbumPhotos', params, options);
  }

  /**
   * @param {Long} SourceFaceId - faceId. required.
   * @param {RepeatList} PhotoId - photoIds. required.
   * @param {Long} TargetFaceId - targetFaceId. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  moveFacePhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceFaceId')) {
      throw new TypeError('parameter "SourceFaceId" is required');
    }

    if (!hasOwnProperty(params, 'PhotoId')) {
      throw new TypeError('parameter "PhotoId" is required');
    }

    if (!hasOwnProperty(params, 'TargetFaceId')) {
      throw new TypeError('parameter "TargetFaceId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('MoveFacePhotos', params, options);
  }

  /**
   * @param {String} pk - pk. required.
   * @param {String} bid - bid. required.
   * @param {Long} hid - hid. optional.
   * @param {String} country - country. optional.
   * @param {String} taskIdentifier - taskIdentifier. optional.
   * @param {String} taskExtraData - taskExtraData. optional.
   * @param {String} gmtWakeup - gmtWakeup. optional.
   */
  physicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'pk')) {
      throw new TypeError('parameter "pk" is required');
    }

    if (!hasOwnProperty(params, 'bid')) {
      throw new TypeError('parameter "bid" is required');
    }

    return this.request('PhysicalDeleteResource', params, options);
  }

  /**
   * @param {RepeatList} PhotoId - photoIds. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  reactivatePhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhotoId')) {
      throw new TypeError('parameter "PhotoId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('ReactivatePhotos', params, options);
  }

  /**
   * @param {Long} TakenAt - takenAt. optional.
   * @param {String} Location - location. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   * @param {Float} Latitude - latitude. optional.
   * @param {Float} Longitude - longitude. optional.
   * @param {Integer} Width - width. optional.
   * @param {Integer} Height - height. optional.
   * @param {String} IsVideo - isVideo. optional.
   * @param {String} Md5 - md5. optional.
   * @param {Long} Size - size. required.
   * @param {String} PhotoTitle - photoTitle. optional.
   * @param {String} Remark - remark. optional.
   */
  registerPhoto(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Location')) {
      throw new TypeError('parameter "Location" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    if (!hasOwnProperty(params, 'Size')) {
      throw new TypeError('parameter "Size" is required');
    }

    return this.request('RegisterPhoto', params, options);
  }

  /**
   * @param {String} StoreName - storeName. required.
   * @param {String} TagKey - tagKey. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Text - text. optional.
   */
  registerTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('RegisterTag', params, options);
  }

  /**
   * @param {Long} AlbumId - albumId. required.
   * @param {RepeatList} PhotoId - photoIds. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  removeAlbumPhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AlbumId')) {
      throw new TypeError('parameter "AlbumId" is required');
    }

    if (!hasOwnProperty(params, 'PhotoId')) {
      throw new TypeError('parameter "PhotoId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('RemoveAlbumPhotos', params, options);
  }

  /**
   * @param {Long} FaceId - faceId. required.
   * @param {RepeatList} PhotoId - photoIds. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  removeFacePhotos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FaceId')) {
      throw new TypeError('parameter "FaceId" is required');
    }

    if (!hasOwnProperty(params, 'PhotoId')) {
      throw new TypeError('parameter "PhotoId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('RemoveFacePhotos', params, options);
  }

  /**
   * @param {Long} AlbumId - albumId. required.
   * @param {String} AlbumName - albumName. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  renameAlbum(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AlbumId')) {
      throw new TypeError('parameter "AlbumId" is required');
    }

    if (!hasOwnProperty(params, 'AlbumName')) {
      throw new TypeError('parameter "AlbumName" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('RenameAlbum', params, options);
  }

  /**
   * @param {Long} FaceId - faceId. required.
   * @param {String} FaceName - faceName. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  renameFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FaceId')) {
      throw new TypeError('parameter "FaceId" is required');
    }

    if (!hasOwnProperty(params, 'FaceName')) {
      throw new TypeError('parameter "FaceName" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('RenameFace', params, options);
  }

  /**
   * @param {Integer} Page - page. required.
   * @param {Integer} Size - size. required.
   * @param {String} Keyword - keyword. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
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
   * @param {Long} AlbumId - albumId. required.
   * @param {Long} PhotoId - photoId. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  setAlbumCover(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AlbumId')) {
      throw new TypeError('parameter "AlbumId" is required');
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
   * @param {Long} FaceId - faceId. required.
   * @param {Long} PhotoId - photoId. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  setFaceCover(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FaceId')) {
      throw new TypeError('parameter "FaceId" is required');
    }

    if (!hasOwnProperty(params, 'PhotoId')) {
      throw new TypeError('parameter "PhotoId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('SetFaceCover', params, options);
  }

  /**
   * @param {Long} FaceId - faceId. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  setMe(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FaceId')) {
      throw new TypeError('parameter "FaceId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('SetMe', params, options);
  }

  /**
   * @param {Long} TotalQuota - totalQuota. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   */
  setQuota(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TotalQuota')) {
      throw new TypeError('parameter "TotalQuota" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('SetQuota', params, options);
  }

  /**
   * @param {String} StoreName - storeName. required.
   * @param {String} LibraryId - libraryId. optional.
   * @param {RepeatList} TagKey - tagKeys. required.
   * @param {RepeatList} Confidence - confidences. optional.
   * @param {Long} PhotoId - photoId. optional.
   */
  tagPhoto(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    if (!hasOwnProperty(params, 'TagKey')) {
      throw new TypeError('parameter "TagKey" is required');
    }

    return this.request('TagPhoto', params, options);
  }

  /**
   * @param {String} StoreName - storeName. required.
   * @param {RepeatList} EnabledFeatures - enabledFeatures. optional.
   * @param {RepeatList} DisabledFeatures - disabledFeatures. optional.
   */
  toggleFeatures(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('ToggleFeatures', params, options);
  }

}

module.exports = Client;

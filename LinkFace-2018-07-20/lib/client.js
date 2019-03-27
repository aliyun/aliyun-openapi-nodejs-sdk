
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-07-20';
    super(config);
  }

  /**
   * @param {String} GroupId - groupId. required.
   */
  createGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    options.method = 'POST';
    return this.request('CreateGroup', params, options);
  }

  /**
   * @param {String} IotId - iotId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   */
  deleteDeviceAllGroup(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('DeleteDeviceAllGroup', params, options);
  }

  /**
   * @param {String} IotId - iotId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {String} GroupId - groupId. required.
   */
  deleteDeviceGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    options.method = 'POST';
    return this.request('DeleteDeviceGroup', params, options);
  }

  /**
   * @param {String} GroupId - groupId. optional.
   * @param {String} UserId - userId. required.
   */
  deleteFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    options.method = 'POST';
    return this.request('DeleteFace', params, options);
  }

  /**
   * @param {String} GroupId - groupId. required.
   */
  deleteGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    options.method = 'POST';
    return this.request('DeleteGroup', params, options);
  }

  /**
   * @param {String} UserId - userId. required.
   * @param {String} GroupId - groupId. required.
   */
  linkFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    options.method = 'POST';
    return this.request('LinkFace', params, options);
  }

  /**
   * @param {String} IotId - iotId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {String} GroupId - groupId. optional.
   */
  queryAddUserInfo(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('QueryAddUserInfo', params, options);
  }

  /**
   * @param {Integer} CurrentPage - pageNum. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryAllGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    options.method = 'POST';
    return this.request('QueryAllGroups', params, options);
  }

  /**
   * @param {Integer} LicenseType - licenseType. optional.
   * @param {Integer} CurrentPage - pageNum. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} IotId - iotId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   */
  queryAuthentication(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    options.method = 'POST';
    return this.request('QueryAuthentication', params, options);
  }

  /**
   * @param {String} UserId - userId. required.
   */
  queryFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    options.method = 'POST';
    return this.request('QueryFace', params, options);
  }

  /**
   * @param {String} GroupId - groupId. required.
   * @param {Integer} CurrentPage - pageNum. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryGroupUsers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    options.method = 'POST';
    return this.request('QueryGroupUsers', params, options);
  }

  /**
   * @param {Integer} LicenseType - licenseType. optional.
   * @param {Integer} CurrentPage - pageNum. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryLicenses(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    options.method = 'POST';
    return this.request('QueryLicenses', params, options);
  }

  /**
   * @param {String} IotId - iotId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {String} GroupId - groupId. optional.
   */
  querySyncPicSchedule(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('QuerySyncPicSchedule', params, options);
  }

  /**
   * @param {String} GroupId - groupId. required.
   * @param {String} UserId - userId. required.
   * @param {String} Image - image. required.
   * @param {String} UserInfo - userInfo. optional.
   */
  registerFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'Image')) {
      throw new TypeError('parameter "Image" is required');
    }

    options.method = 'POST';
    return this.request('RegisterFace', params, options);
  }

  /**
   * @param {String} Image - image. required.
   * @param {String} GroupId - groupId. required.
   */
  searchFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Image')) {
      throw new TypeError('parameter "Image" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    options.method = 'POST';
    return this.request('SearchFace', params, options);
  }

  /**
   * @param {String} IotId - iotId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   */
  syncFacePictures(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    options.method = 'POST';
    return this.request('SyncFacePictures', params, options);
  }

  /**
   * @param {String} UserId - userId. required.
   * @param {String} GroupId - groupId. required.
   */
  unlinkFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    options.method = 'POST';
    return this.request('UnlinkFace', params, options);
  }

  /**
   * @param {String} UserId - userId. required.
   * @param {String} Image - image. required.
   * @param {String} UserInfo - userInfo. optional.
   */
  updateFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'Image')) {
      throw new TypeError('parameter "Image" is required');
    }

    options.method = 'POST';
    return this.request('UpdateFace', params, options);
  }

}

module.exports = Client;


'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-06-08';
    super(config);
  }

  /**
   * @param {Integer} LicenseType - licenseType. optional.
   * @param {Long} Quantity - quantity. optional.
   */
  buyLicenses(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('BuyLicenses', params, options);
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
   * @param {String} UserId - userId. required.
   * @param {String} GroupId - groupId. optional.
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
   */
  queryGroups(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('QueryGroups', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  querySyncPicSchedule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    options.method = 'POST';
    return this.request('QuerySyncPicSchedule', params, options);
  }

  /**
   * @param {String} GroupId - groupId. required.
   */
  queryUsers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    options.method = 'POST';
    return this.request('QueryUsers', params, options);
  }

  /**
   * @param {String} GroupId - groupId. required.
   * @param {String} UserId - userId. required.
   * @param {String} Image - image. required.
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
   * @param {String} IotId - iotId. required.
   * @param {String} GroupId - groupId. required.
   */
  syncFacePictures(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

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
  unLinkFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    options.method = 'POST';
    return this.request('UnLinkFace', params, options);
  }

  /**
   * @param {String} UserId - userId. required.
   * @param {String} Image - image. required.
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


'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2019-02-25';
    super(config);
  }

  /**
   * @param {Long} VideoId - videoId. required.
   * @param {String} OuterUserId - externalId. required.
   * @param {String} HavanaId - havanaId. required.
   */
  clipVideo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoId')) {
      throw new TypeError('parameter "VideoId" is required');
    }

    if (!hasOwnProperty(params, 'OuterUserId')) {
      throw new TypeError('parameter "OuterUserId" is required');
    }

    if (!hasOwnProperty(params, 'HavanaId')) {
      throw new TypeError('parameter "HavanaId" is required');
    }

    return this.request('ClipVideo', params, options);
  }

  /**
   * @param {String} OuterUserId - externalId. required.
   * @param {String} HavanaId - havanaId. required.
   * @param {RepeatList} VideoId - videoIds. optional.
   */
  getVideo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OuterUserId')) {
      throw new TypeError('parameter "OuterUserId" is required');
    }

    if (!hasOwnProperty(params, 'HavanaId')) {
      throw new TypeError('parameter "HavanaId" is required');
    }

    return this.request('GetVideo', params, options);
  }

  /**
   * @param {String} OuterUserId - externalId. required.
   * @param {String} HavanaId - havanaId. required.
   * @param {String} FileName - filename. required.
   */
  getVideoUploadPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OuterUserId')) {
      throw new TypeError('parameter "OuterUserId" is required');
    }

    if (!hasOwnProperty(params, 'HavanaId')) {
      throw new TypeError('parameter "HavanaId" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    return this.request('GetVideoUploadPolicy', params, options);
  }

  /**
   * @param {String} FileName - filename. required.
   * @param {String} ObjectKey - objectKey. required.
   * @param {String} OuterUserId - externalId. required.
   * @param {String} HavanaId - havanaId. required.
   * @param {String} ExtendInfo - extra. optional.
   */
  uploadVideo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    if (!hasOwnProperty(params, 'ObjectKey')) {
      throw new TypeError('parameter "ObjectKey" is required');
    }

    if (!hasOwnProperty(params, 'OuterUserId')) {
      throw new TypeError('parameter "OuterUserId" is required');
    }

    if (!hasOwnProperty(params, 'HavanaId')) {
      throw new TypeError('parameter "HavanaId" is required');
    }

    return this.request('UploadVideo', params, options);
  }

}

module.exports = Client;

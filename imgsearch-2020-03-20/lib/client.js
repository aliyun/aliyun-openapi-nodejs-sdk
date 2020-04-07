
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2020-03-20';
    super(config);
  }

  /**
   * @param {String} DbName - dbName. required.
   * @param {String} ImageUrl - imageUrl. required.
   * @param {String} ExtraData - extraData. optional.
   * @param {String} EntityId - entityId. required.
   */
  addImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    if (!hasOwnProperty(params, 'ImageUrl')) {
      throw new TypeError('parameter "ImageUrl" is required');
    }

    if (!hasOwnProperty(params, 'EntityId')) {
      throw new TypeError('parameter "EntityId" is required');
    }

    return this.request('AddImage', params, options);
  }

  /**
   * @param {String} Name - name. required.
   */
  createImageDb(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateImageDb', params, options);
  }

  /**
   * @param {String} DbName - dbName. required.
   * @param {String} EntityId - entityId. required.
   */
  deleteImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    if (!hasOwnProperty(params, 'EntityId')) {
      throw new TypeError('parameter "EntityId" is required');
    }

    return this.request('DeleteImage', params, options);
  }

  /**
   * @param {String} Name - name. required.
   */
  deleteImageDb(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('DeleteImageDb', params, options);
  }

  /**
   */
  listImageDbs(params = {}, options = {}) {
    return this.request('ListImageDbs', params, options);
  }

  /**
   * @param {String} DbName - dbName. required.
   * @param {String} Token - token. optional.
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Limit - limit. optional.
   * @param {String} Order - order. optional.
   * @param {String} EntityIdPrefix - entityIdPrefix. optional.
   */
  listImages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    return this.request('ListImages', params, options);
  }

  /**
   * @param {String} DbName - dbName. required.
   * @param {String} ImageUrl - imageUrl. required.
   * @param {Integer} Limit - limit. required.
   */
  searchImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    if (!hasOwnProperty(params, 'ImageUrl')) {
      throw new TypeError('parameter "ImageUrl" is required');
    }

    if (!hasOwnProperty(params, 'Limit')) {
      throw new TypeError('parameter "Limit" is required');
    }

    return this.request('SearchImage', params, options);
  }

}

module.exports = Client;

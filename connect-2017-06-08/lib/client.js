
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-06-08';
    super(config);
  }

  /**
   * @param {String} Url - url. required.
   * @param {String} SuggestionId - suggestionId. optional.
   * @param {String} Filename - filename. required.
   * @param {Long} UserId - userId. required.
   */
  attachment(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Url')) {
      throw new TypeError('parameter "Url" is required');
    }

    if (!hasOwnProperty(params, 'Filename')) {
      throw new TypeError('parameter "Filename" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('Attachment', params, options);
  }

  /**
   * @param {Integer} Status - status. optional.
   * @param {Integer} OrderBy - orderBy. optional.
   * @param {Integer} Source - source. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Long} UserId - userId. optional.
   */
  mine(params = {}, options = {}) {
    return this.request('Mine', params, options);
  }

  /**
   * @param {String} Uid - uid. required.
   * @param {String} Name - name. required.
   * @param {String} AccountName - accountName. required.
   * @param {Integer} Type - type. required.
   */
  register(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('Register', params, options);
  }

  /**
   * @param {String} Keyword - keyword. optional.
   * @param {Long} ByUserId - byUserId. optional.
   * @param {Integer} Status - status. optional.
   * @param {Long} UserId - userId. optional.
   * @param {Integer} OrderBy - orderBy. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  search(params = {}, options = {}) {
    return this.request('Search', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   */
  stats(params = {}, options = {}) {
    return this.request('Stats', params, options);
  }

  /**
   * @param {String} Title - title. required.
   * @param {String} Description - content. required.
   * @param {String} Tags - tags. required.
   * @param {String} AttachmentIds - attachmentIds. optional.
   * @param {Long} UserId - userId. required.
   */
  submit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Title')) {
      throw new TypeError('parameter "Title" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'Tags')) {
      throw new TypeError('parameter "Tags" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('Submit', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {String} RegionId - regionId. optional. default: cn-shanghai.
   */
  tagTree(params = {}, options = {}) {
    return this.request('TagTree', params, options);
  }

}

module.exports = Client;

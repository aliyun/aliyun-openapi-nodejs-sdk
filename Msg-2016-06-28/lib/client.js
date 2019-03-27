
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-06-28';
    super(config);
  }

  /**
   * @param {String} Locale - locale. optional.
   */
  getAllClass(params = {}, options = {}) {
    return this.request('GetAllClass', params, options);
  }

  /**
   * @param {String} Locale - locale. optional.
   * @param {Long} Aliuid - aliuid. required.
   * @param {Long} MsgId - msgId. optional.
   * @param {Long} ClassId - classId. optional.
   * @param {Integer} Status - status. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} Deleted - deleted. optional. default: 0.
   * @param {Boolean} OrderByAsc - orderByAsc. optional.
   */
  query(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Aliuid')) {
      throw new TypeError('parameter "Aliuid" is required');
    }

    return this.request('Query', params, options);
  }

  /**
   * @param {String} Locale - locale. optional.
   * @param {Long} Aliuid - aliuid. required.
   */
  readNumGroupByClass(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Aliuid')) {
      throw new TypeError('parameter "Aliuid" is required');
    }

    return this.request('ReadNumGroupByClass', params, options);
  }

  /**
   * @param {Long} ClassId - classId. required.
   * @param {String} MsgTitle - title. required.
   * @param {String} MsgContent - content. required.
   * @param {String} UserSite - userSite. optional.
   */
  sendGlobalMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClassId')) {
      throw new TypeError('parameter "ClassId" is required');
    }

    if (!hasOwnProperty(params, 'MsgTitle')) {
      throw new TypeError('parameter "MsgTitle" is required');
    }

    if (!hasOwnProperty(params, 'MsgContent')) {
      throw new TypeError('parameter "MsgContent" is required');
    }

    return this.request('SendGlobalMessage', params, options);
  }

  /**
   * @param {String} Locale - locale. optional.
   * @param {Long} Aliuid - aliuid. required.
   * @param {Long} ClassId - classId. required.
   * @param {String} MsgTitle - title. required.
   * @param {String} MsgContent - content. required.
   */
  sendUserMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Aliuid')) {
      throw new TypeError('parameter "Aliuid" is required');
    }

    if (!hasOwnProperty(params, 'ClassId')) {
      throw new TypeError('parameter "ClassId" is required');
    }

    if (!hasOwnProperty(params, 'MsgTitle')) {
      throw new TypeError('parameter "MsgTitle" is required');
    }

    if (!hasOwnProperty(params, 'MsgContent')) {
      throw new TypeError('parameter "MsgContent" is required');
    }

    return this.request('SendUserMessage', params, options);
  }

  /**
   * @param {Long} Aliuid - aliuid. required.
   * @param {String} Locale - locale. optional.
   * @param {Long} MsgId - msgId. optional.
   * @param {Long} ClassId - classId. optional.
   * @param {Integer} Status - status. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Boolean} OrderByAsc - orderByAsc. optional.
   * @param {Integer} Deleted - deleted. optional. default: 0.
   */
  simpleQuery(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Aliuid')) {
      throw new TypeError('parameter "Aliuid" is required');
    }

    return this.request('SimpleQuery', params, options);
  }

  /**
   * @param {String} Locale - locale. optional.
   * @param {Long} Aliuid - aliuid. required.
   */
  unreadNumGroupByClass(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Aliuid')) {
      throw new TypeError('parameter "Aliuid" is required');
    }

    return this.request('UnreadNumGroupByClass', params, options);
  }

  /**
   * @param {String} Locale - locale. optional.
   * @param {Long} Aliuid - aliuid. required.
   */
  unreadTotal(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Aliuid')) {
      throw new TypeError('parameter "Aliuid" is required');
    }

    return this.request('UnreadTotal', params, options);
  }

}

module.exports = Client;

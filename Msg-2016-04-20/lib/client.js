
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-04-20';
    super(config);
  }

  /**
   * @param {Long} Kp - kp. required.
   * @param {String} Locale - locale. optional.
   * @param {String} Aliuid - aliuid. optional.
   * @param {Long} LinkId - linkId. optional.
   * @param {Integer} Sub - sub. optional.
   * @param {String} Name - name. required.
   * @param {String} Email - email. optional.
   * @param {String} ClearEmail - clearEmail. required.
   * @param {String} Mobile - mobile. optional.
   * @param {String} ClearMobile - clearMobile. required.
   * @param {String} Pos - pos. optional.
   */
  createLink(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Kp')) {
      throw new TypeError('parameter "Kp" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ClearEmail')) {
      throw new TypeError('parameter "ClearEmail" is required');
    }

    if (!hasOwnProperty(params, 'ClearMobile')) {
      throw new TypeError('parameter "ClearMobile" is required');
    }

    return this.request('CreateLink', params, options);
  }

  /**
   * @param {Long} Kp - kp. required.
   * @param {String} Locale - locale. optional.
   * @param {String} Aliuid - aliuid. optional.
   * @param {RepeatList} MsgIds - msgIds. required.
   */
  delete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Kp')) {
      throw new TypeError('parameter "Kp" is required');
    }

    if (!hasOwnProperty(params, 'MsgIds')) {
      throw new TypeError('parameter "MsgIds" is required');
    }

    return this.request('Delete', params, options);
  }

  /**
   * @param {Long} Kp - kp. required.
   * @param {String} Locale - locale. optional.
   * @param {String} Aliuid - aliuid. optional.
   * @param {Long} LinkId - linkId. required.
   */
  deleteLink(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Kp')) {
      throw new TypeError('parameter "Kp" is required');
    }

    if (!hasOwnProperty(params, 'LinkId')) {
      throw new TypeError('parameter "LinkId" is required');
    }

    return this.request('DeleteLink', params, options);
  }

  /**
   * @param {Long} Kp - kp. required.
   * @param {String} Locale - locale. optional.
   * @param {String} Aliuid - aliuid. optional.
   */
  getAllClass(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Kp')) {
      throw new TypeError('parameter "Kp" is required');
    }

    return this.request('GetAllClass', params, options);
  }

  /**
   * @param {Long} Kp - kp. required.
   * @param {String} Locale - locale. optional.
   * @param {String} Aliuid - aliuid. optional.
   * @param {String} Echo - echo. optional.
   */
  hello(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Kp')) {
      throw new TypeError('parameter "Kp" is required');
    }

    return this.request('Hello', params, options);
  }

  /**
   * @param {Long} Kp - kp. required.
   * @param {String} Locale - locale. optional.
   * @param {String} Aliuid - aliuid. optional.
   * @param {Long} LinkId - linkId. required.
   */
  isCanDeleteLink(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Kp')) {
      throw new TypeError('parameter "Kp" is required');
    }

    if (!hasOwnProperty(params, 'LinkId')) {
      throw new TypeError('parameter "LinkId" is required');
    }

    return this.request('IsCanDeleteLink', params, options);
  }

  /**
   * @param {Long} Kp - kp. required.
   * @param {String} Locale - locale. optional.
   * @param {String} Aliuid - aliuid. optional.
   */
  isDirty(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Kp')) {
      throw new TypeError('parameter "Kp" is required');
    }

    return this.request('IsDirty', params, options);
  }

  /**
   * @param {Long} Kp - kp. required.
   * @param {String} Locale - locale. optional.
   * @param {String} Aliuid - aliuid. optional.
   * @param {Long} LinkId - linkId. optional.
   * @param {Integer} Sub - sub. optional.
   * @param {String} Name - name. required.
   * @param {String} Email - email. optional.
   * @param {String} ClearEmail - clearEmail. required.
   * @param {String} Mobile - mobile. optional.
   * @param {String} ClearMobile - clearMobile. required.
   * @param {String} Pos - pos. optional.
   */
  modifyLink(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Kp')) {
      throw new TypeError('parameter "Kp" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ClearEmail')) {
      throw new TypeError('parameter "ClearEmail" is required');
    }

    if (!hasOwnProperty(params, 'ClearMobile')) {
      throw new TypeError('parameter "ClearMobile" is required');
    }

    return this.request('ModifyLink', params, options);
  }

  /**
   * @param {Long} Kp - kp. required.
   * @param {String} Locale - locale. optional.
   * @param {String} Aliuid - aliuid. optional.
   */
  query(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Kp')) {
      throw new TypeError('parameter "Kp" is required');
    }

    return this.request('Query', params, options);
  }

  /**
   * @param {Long} Kp - kp. required.
   * @param {String} Locale - locale. optional.
   * @param {String} Aliuid - aliuid. optional.
   */
  queryConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Kp')) {
      throw new TypeError('parameter "Kp" is required');
    }

    return this.request('QueryConfig', params, options);
  }

  /**
   * @param {Long} Kp - kp. required.
   * @param {String} Locale - locale. optional.
   * @param {String} Aliuid - aliuid. optional.
   * @param {Long} ItemGroupId - itemGroupId. optional.
   */
  queryItemLink(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Kp')) {
      throw new TypeError('parameter "Kp" is required');
    }

    return this.request('QueryItemLink', params, options);
  }

  /**
   * @param {Long} Kp - kp. required.
   * @param {String} Locale - locale. optional.
   * @param {String} Aliuid - aliuid. optional.
   */
  queryLinks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Kp')) {
      throw new TypeError('parameter "Kp" is required');
    }

    return this.request('QueryLinks', params, options);
  }

  /**
   * @param {Long} Kp - kp. required.
   * @param {String} Locale - locale. optional.
   * @param {String} Aliuid - aliuid. optional.
   */
  queryUserSubscriptionItems(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Kp')) {
      throw new TypeError('parameter "Kp" is required');
    }

    return this.request('QueryUserSubscriptionItems', params, options);
  }

  /**
   * @param {Long} Kp - kp. required.
   * @param {String} Locale - locale. optional.
   * @param {String} Aliuid - aliuid. optional.
   * @param {RepeatList} MsgIds - msgIds. required.
   */
  read(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Kp')) {
      throw new TypeError('parameter "Kp" is required');
    }

    if (!hasOwnProperty(params, 'MsgIds')) {
      throw new TypeError('parameter "MsgIds" is required');
    }

    return this.request('Read', params, options);
  }

  /**
   * @param {Long} Kp - kp. required.
   * @param {String} Locale - locale. optional.
   * @param {String} Aliuid - aliuid. optional.
   */
  readNumGroupByClass(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Kp')) {
      throw new TypeError('parameter "Kp" is required');
    }

    return this.request('ReadNumGroupByClass', params, options);
  }

  /**
   * @param {String} Locale - locale. optional.
   * @param {String} Aliuid - aliuid. optional.
   * @param {Long} ClassId - classId. required.
   * @param {String} Title - title. required.
   * @param {String} UserSite - userSite. required.
   * @param {String} MsgContent - content. required.
   */
  sendGlobalMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClassId')) {
      throw new TypeError('parameter "ClassId" is required');
    }

    if (!hasOwnProperty(params, 'Title')) {
      throw new TypeError('parameter "Title" is required');
    }

    if (!hasOwnProperty(params, 'UserSite')) {
      throw new TypeError('parameter "UserSite" is required');
    }

    if (!hasOwnProperty(params, 'MsgContent')) {
      throw new TypeError('parameter "MsgContent" is required');
    }

    return this.request('SendGlobalMessage', params, options);
  }

  /**
   * @param {Long} Kp - kp. required.
   * @param {String} Locale - locale. optional.
   * @param {String} Aliuid - aliuid. optional.
   * @param {Long} ClassId - classId. required.
   * @param {String} Title - title. required.
   * @param {String} UserSite - userSite. required.
   * @param {String} MsgContent - content. required.
   */
  sendUserMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Kp')) {
      throw new TypeError('parameter "Kp" is required');
    }

    if (!hasOwnProperty(params, 'ClassId')) {
      throw new TypeError('parameter "ClassId" is required');
    }

    if (!hasOwnProperty(params, 'Title')) {
      throw new TypeError('parameter "Title" is required');
    }

    if (!hasOwnProperty(params, 'UserSite')) {
      throw new TypeError('parameter "UserSite" is required');
    }

    if (!hasOwnProperty(params, 'MsgContent')) {
      throw new TypeError('parameter "MsgContent" is required');
    }

    return this.request('SendUserMessage', params, options);
  }

  /**
   * @param {Long} Kp - kp. required.
   * @param {String} Locale - locale. optional.
   * @param {String} Aliuid - aliuid. optional.
   */
  unreadNumGroupByClass(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Kp')) {
      throw new TypeError('parameter "Kp" is required');
    }

    return this.request('UnreadNumGroupByClass', params, options);
  }

  /**
   * @param {Long} Kp - kp. required.
   * @param {String} Locale - locale. optional.
   * @param {String} Aliuid - aliuid. optional.
   */
  unreadTotal(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Kp')) {
      throw new TypeError('parameter "Kp" is required');
    }

    return this.request('UnreadTotal', params, options);
  }

}

module.exports = Client;


'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-04-12';
    super(config);
  }

  /**
   * @param {String} Type - type. required.
   * @param {Long} Status - status. optional.
   * @param {Long} Page - page. optional.
   * @param {Long} Amount - amount. optional.
   */
  getEventList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('GetEventList', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  getUserClubInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetUserClubInfo', params, options);
  }

  /**
   */
  getUserInfo(params = {}, options = {}) {
    return this.request('GetUserInfo', params, options);
  }

  /**
   * @param {Long} CateId - cateId. optional.
   */
  giftList(params = {}, options = {}) {
    return this.request('GiftList', params, options);
  }

  /**
   * @param {Long} ToUid - toUid. required.
   * @param {Long} Gid - gid. required.
   * @param {Long} SuggestId - suggestId. required.
   */
  giveGift(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ToUid')) {
      throw new TypeError('parameter "ToUid" is required');
    }

    if (!hasOwnProperty(params, 'Gid')) {
      throw new TypeError('parameter "Gid" is required');
    }

    if (!hasOwnProperty(params, 'SuggestId')) {
      throw new TypeError('parameter "SuggestId" is required');
    }

    return this.request('GiveGift', params, options);
  }

  /**
   * @param {Long} ToUid - toUid. required.
   * @param {Long} OperateId - operateId. required.
   * @param {Long} OperateType - operateType. required.
   */
  increaseScore(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ToUid')) {
      throw new TypeError('parameter "ToUid" is required');
    }

    if (!hasOwnProperty(params, 'OperateId')) {
      throw new TypeError('parameter "OperateId" is required');
    }

    if (!hasOwnProperty(params, 'OperateType')) {
      throw new TypeError('parameter "OperateType" is required');
    }

    return this.request('IncreaseScore', params, options);
  }

  /**
   * @param {String} Type - type. required.
   * @param {Integer} Id - id. required.
   */
  vote(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    options.method = 'POST';
    return this.request('Vote', params, options);
  }

}

module.exports = Client;

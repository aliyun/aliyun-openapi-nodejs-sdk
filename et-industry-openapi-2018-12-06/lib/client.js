
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-12-06';
    super(config);
  }

  /**
   * @param {String} LoginAliyunIdTicket - loginAliyunIdTicket. required.
   */
  getUidByTicketForTanji(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoginAliyunIdTicket')) {
      throw new TypeError('parameter "LoginAliyunIdTicket" is required');
    }

    return this.request('GetUidByTicketForTanji', params, options);
  }

  /**
   * @param {String} LoginAliyunIdTicket - loginAliyunIdTicket. required.
   */
  getUserInfoByTicket(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoginAliyunIdTicket')) {
      throw new TypeError('parameter "LoginAliyunIdTicket" is required');
    }

    return this.request('GetUserInfoByTicket', params, options);
  }

  /**
   * @param {String} Mobile - mobile. optional.
   * @param {String} Email - email. optional.
   * @param {String} MsgType - msgType. required.
   * @param {String} Code - code. optional.
   * @param {String} Link - link. optional.
   * @param {String} SpUserName - spUserName. optional.
   * @param {String} Company - company. optional.
   * @param {String} Fail - fail. optional.
   */
  sendMsgForTanji(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MsgType')) {
      throw new TypeError('parameter "MsgType" is required');
    }

    return this.request('SendMsgForTanji', params, options);
  }

}

module.exports = Client;

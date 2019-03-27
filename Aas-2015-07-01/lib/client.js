
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-07-01';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} PK - ownerPk. optional.
   * @param {String} AKSecret - accessKeySecretRsa. optional.
   */
  createAccessKeyForAccount(params = {}, options = {}) {
    return this.request('CreateAccessKeyForAccount', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AliyunId - aliyunId. optional.
   */
  createAliyunAccount(params = {}, options = {}) {
    return this.request('CreateAliyunAccount', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InnerAccountHid - bindHid. optional.
   */
  createAliyunAccountWithBindHid(params = {}, options = {}) {
    return this.request('CreateAliyunAccountWithBindHid', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} NationalityCode - nationalityCode. required.
   */
  createIntlAliyunAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NationalityCode')) {
      throw new TypeError('parameter "NationalityCode" is required');
    }

    return this.request('CreateIntlAliyunAccount', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} PK - pk. optional.
   * @param {String} ExpireTime - expireTime. optional.
   * @param {Boolean} IsMfaPresent - isMfaPresent. optional.
   */
  createShortTermAccessKeyForAccount(params = {}, options = {}) {
    return this.request('CreateShortTermAccessKeyForAccount', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} PK - ownerPk. optional.
   * @param {String} AKId - accessKeyId. optional.
   */
  deleteAccessKeyForAccount(params = {}, options = {}) {
    return this.request('DeleteAccessKeyForAccount', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} TargetPk - targetPk. optional.
   */
  generateAccountLoginToken(params = {}, options = {}) {
    return this.request('GenerateAccountLoginToken', params, options);
  }

  /**
   * @param {String} PK - pk. optional.
   */
  getAccountKinshipInfoByPK(params = {}, options = {}) {
    return this.request('GetAccountKinshipInfoByPK', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InnerAccountHid - bindHid. optional.
   */
  getAliyunAccountWithBindHid(params = {}, options = {}) {
    return this.request('GetAliyunAccountWithBindHid', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} HavanaId - havanaId. optional.
   */
  getAliyunAccountWithBindTaobaoHid(params = {}, options = {}) {
    return this.request('GetAliyunAccountWithBindTaobaoHid', params, options);
  }

  /**
   * @param {String} HavanaId - havanaId. optional.
   */
  getBasicAccountInfoByHavanaId(params = {}, options = {}) {
    return this.request('GetBasicAccountInfoByHavanaId', params, options);
  }

  /**
   * @param {String} PK - pk. optional.
   */
  getBasicAccountInfoByPk(params = {}, options = {}) {
    return this.request('GetBasicAccountInfoByPk', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AliyunId - aliyunId. optional.
   */
  getBasicInfoForAccount(params = {}, options = {}) {
    return this.request('GetBasicInfoForAccount', params, options);
  }

  /**
   * @param {String} PK - pk. optional.
   */
  getLoginConfigInfoByPK(params = {}, options = {}) {
    return this.request('GetLoginConfigInfoByPK', params, options);
  }

  /**
   * @param {String} Ticket - ticket. optional.
   */
  getSessionInfoByMiniTicket(params = {}, options = {}) {
    return this.request('GetSessionInfoByMiniTicket', params, options);
  }

  /**
   * @param {String} Ticket - ticket. optional.
   */
  getSessionInfoByMiniTicketWithRoute(params = {}, options = {}) {
    return this.request('GetSessionInfoByMiniTicketWithRoute', params, options);
  }

  /**
   * @param {String} Ticket - ticket. optional.
   */
  getSessionInfoByMiniTicketWithRouteSGPRO(params = {}, options = {}) {
    return this.request('GetSessionInfoByMiniTicketWithRouteSGPRO', params, options);
  }

  /**
   * @param {String} Ticket - ticket. optional.
   */
  getSessionInfoByMiniTicketWithRouteSHRO(params = {}, options = {}) {
    return this.request('GetSessionInfoByMiniTicketWithRouteSHRO', params, options);
  }

  /**
   * @param {String} Ticket - ticket. optional.
   */
  getSessionInfoByTicket(params = {}, options = {}) {
    return this.request('GetSessionInfoByTicket', params, options);
  }

  /**
   * @param {String} Ticket - ticket. optional.
   */
  getSessionInfoByTicketWithRoute(params = {}, options = {}) {
    return this.request('GetSessionInfoByTicketWithRoute', params, options);
  }

  /**
   * @param {String} Ticket - ticket. optional.
   */
  getSessionInfoByTicketWithRouteSGPRO(params = {}, options = {}) {
    return this.request('GetSessionInfoByTicketWithRouteSGPRO', params, options);
  }

  /**
   * @param {String} Ticket - ticket. optional.
   */
  getSessionInfoByTicketWithRouteSHRO(params = {}, options = {}) {
    return this.request('GetSessionInfoByTicketWithRouteSHRO', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} PK - pk. optional.
   * @param {String} ExpireTime - expireTime. optional.
   * @param {Boolean} IsMfaPresent - isMfaPresent. optional.
   */
  getShortTermAccessKeyForAccount(params = {}, options = {}) {
    return this.request('GetShortTermAccessKeyForAccount', params, options);
  }

  /**
   * @param {String} PK - pk. optional.
   */
  isBindMfaByPk(params = {}, options = {}) {
    return this.request('IsBindMfaByPk', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} PK - ownerPk. optional.
   * @param {String} AKStatus - accessKeyStatus. optional.
   * @param {String} AKType - accessKeyType. optional.
   */
  listAccessKeysForAccount(params = {}, options = {}) {
    return this.request('ListAccessKeysForAccount', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Integer} MaxItems - maxItems. optional.
   * @param {String} Marker - marker. optional.
   */
  listAliyunAccount(params = {}, options = {}) {
    return this.request('ListAliyunAccount', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} PK - ownerPk. optional.
   * @param {String} AKId - accessKeyId. optional.
   * @param {String} AKStatus - accessKeyStatus. optional.
   */
  updateAccessKeyStatusForAccount(params = {}, options = {}) {
    return this.request('UpdateAccessKeyStatusForAccount', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} PK - pk. optional.
   * @param {String} NewPassword - newPassword. optional.
   */
  updatePasswordForAccount(params = {}, options = {}) {
    return this.request('UpdatePasswordForAccount', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} PK - pk. optional.
   * @param {String} AccountStatus - accountStatus. optional.
   */
  updateStatusForAccount(params = {}, options = {}) {
    return this.request('UpdateStatusForAccount', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} LoginToken - loginToken. optional.
   */
  verifyAccountLoginToken(params = {}, options = {}) {
    return this.request('VerifyAccountLoginToken', params, options);
  }

}

module.exports = Client;

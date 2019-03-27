
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-03-27';
    super(config);
  }

  /**
   * @param {Long} OpenAccountId - openAccountId. required.
   * @param {String} AppKey - appKey. required.
   */
  applyTokenByOaIdAndAppKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OpenAccountId')) {
      throw new TypeError('parameter "OpenAccountId" is required');
    }

    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('ApplyTokenByOaIdAndAppKey', params, options);
  }

  /**
   * @param {String} LoginId - loginId. optional.
   * @param {String} Email - email. optional.
   * @param {String} MobileLocationCode - mobileLocationCode. optional.
   * @param {String} Mobile - mobile. optional.
   * @param {String} LoginPwd - loginPwd. optional.
   * @param {Boolean} PwdEncrypted - pwdEncrypted. optional.
   * @param {String} OutPlatformType - outPlatformType. optional.
   * @param {String} OpenId - openId. optional.
   * @param {String} OpenNickName - openNickName. optional.
   * @param {String} LinkType - linkType. optional.
   * @param {String} IsvAccountId - isvAccountId. optional.
   * @param {Integer} Type - type. optional.
   * @param {Integer} Status - status. optional.
   * @param {String} DisplayName - displayName. optional.
   * @param {String} AvatarUrl - avatarUrl. optional.
   * @param {String} Locale - locale. optional.
   * @param {String} CreateLocation - createLocation. optional.
   * @param {String} CreateDeviceId - createDeviceId. optional.
   * @param {String} OsId - osId. optional.
   * @param {String} ExtInfos - extInfos. optional.
   * @param {String} AlipayId - alipayId. optional.
   * @param {String} BankCardNo - bankCardNo. optional.
   * @param {String} BankCardOwnerName - bankCardOwnerName. optional.
   * @param {String} Name - name. optional.
   * @param {Integer} Gender - gender. optional.
   * @param {String} Birthday - birthday. optional.
   * @param {String} Wangwang - wangwang. optional.
   * @param {String} Weixin - weixin. optional.
   * @param {String} PwdSalt - pwdSalt. optional.
   * @param {Integer} PwdEncryption - pwdEncryption. optional.
   * @param {String} Country - country. optional.
   * @param {String} CompanyName - companyName. optional.
   * @param {String} SecurityMobile - securityMobile. optional.
   * @param {String} SecurityEmail - securityEmail. optional.
   * @param {Boolean} SubAccount - subAccount. optional.
   * @param {Long} ParentId - parentId. optional.
   */
  createOpenAccount(params = {}, options = {}) {
    return this.request('CreateOpenAccount', params, options);
  }

  /**
   * @param {Long} OpenAccountId - openAccountId. required.
   * @param {String} AppKey - appKey. required.
   */
  createSsoToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OpenAccountId')) {
      throw new TypeError('parameter "OpenAccountId" is required');
    }

    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('CreateSsoToken', params, options);
  }

  /**
   * @param {Json} Context - context. required.
   * @param {Long} OpenAccountId - openAccountId. required.
   */
  deleteOpenAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Context')) {
      throw new TypeError('parameter "Context" is required');
    }

    if (!hasOwnProperty(params, 'OpenAccountId')) {
      throw new TypeError('parameter "OpenAccountId" is required');
    }

    return this.request('DeleteOpenAccount', params, options);
  }

  /**
   * @param {Long} MemberId - memberId. optional.
   * @param {String} MemberDomain - memberDomain. optional.
   * @param {String} ActionType - actionType. optional.
   * @param {String} CallBack - callBack. optional.
   * @param {String} FromSite - fromSite. optional.
   * @param {String} LoginId - loginId. optional.
   * @param {String} Umid - umid. optional.
   * @param {String} UmidToken - umidToken. optional.
   * @param {String} Locale - locale. optional.
   * @param {String} SessionId - sessionId. optional.
   * @param {String} OriginRequestUrl - originRequestUrl. optional.
   * @param {String} BehaviorTraceId - behaviorTraceId. optional.
   * @param {String} AppKey - appKey. optional.
   * @param {String} AppName - appName. optional.
   * @param {Json} ExtendData - extendData. optional.
   * @param {String} Ip - ip. optional.
   * @param {String} AssignStrategy - assignStrategy. optional.
   * @param {String} CallBackType - callBackType. optional.
   * @param {String} AllStep - allStep. optional.
   * @param {String} NeedEnvCheck - needEnvCheck. optional.
   * @param {String} Entrance - entrance. optional.
   */
  getIvUrl(params = {}, options = {}) {
    return this.request('GetIvUrl', params, options);
  }

  /**
   * @param {Integer} TempletId - templetId. optional.
   */
  getMessageTemplate(params = {}, options = {}) {
    return this.request('GetMessageTemplate', params, options);
  }

  /**
   * @param {Json} Context - context. required.
   * @param {String} Email - email. required.
   */
  getOpenAccountByEmail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Context')) {
      throw new TypeError('parameter "Context" is required');
    }

    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    return this.request('GetOpenAccountByEmail', params, options);
  }

  /**
   * @param {Json} Context - context. required.
   * @param {Long} OpenAccountId - id. required.
   */
  getOpenAccountById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Context')) {
      throw new TypeError('parameter "Context" is required');
    }

    if (!hasOwnProperty(params, 'OpenAccountId')) {
      throw new TypeError('parameter "OpenAccountId" is required');
    }

    return this.request('GetOpenAccountById', params, options);
  }

  /**
   * @param {Json} Context - context. required.
   * @param {String} Mobile - mobile. required.
   */
  getOpenAccountByMobile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Context')) {
      throw new TypeError('parameter "Context" is required');
    }

    if (!hasOwnProperty(params, 'Mobile')) {
      throw new TypeError('parameter "Mobile" is required');
    }

    return this.request('GetOpenAccountByMobile', params, options);
  }

  /**
   * @param {Json} Context - context. required.
   * @param {String} OpenId - openId. required.
   * @param {String} OpenPlatformType - openPlatformType. required.
   */
  getOpenAccountByOpenId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Context')) {
      throw new TypeError('parameter "Context" is required');
    }

    if (!hasOwnProperty(params, 'OpenId')) {
      throw new TypeError('parameter "OpenId" is required');
    }

    if (!hasOwnProperty(params, 'OpenPlatformType')) {
      throw new TypeError('parameter "OpenPlatformType" is required');
    }

    return this.request('GetOpenAccountByOpenId', params, options);
  }

  /**
   * @param {Json} Context - context. required.
   * @param {Long} OpenAccountId - id. required.
   * @param {Json} FilterCondition - filterCondition. optional.
   */
  getOpenAccountDTO(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Context')) {
      throw new TypeError('parameter "Context" is required');
    }

    if (!hasOwnProperty(params, 'OpenAccountId')) {
      throw new TypeError('parameter "OpenAccountId" is required');
    }

    return this.request('GetOpenAccountDTO', params, options);
  }

  /**
   * @param {String} SessionId - sessionId. required.
   */
  getOpenAccountSessionBySId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SessionId')) {
      throw new TypeError('parameter "SessionId" is required');
    }

    return this.request('GetOpenAccountSessionBySId', params, options);
  }

  /**
   * @param {String} IvToken - ivToken. optional.
   * @param {String} ActionType - actionType. optional.
   */
  ivAuthenticate(params = {}, options = {}) {
    return this.request('IvAuthenticate', params, options);
  }

  /**
   * @param {String} AppKey - appKey. optional.
   * @param {String} RequestIp - requestIp. optional.
   * @param {String} CallerName - callerName. optional.
   * @param {String} RequestId - requestId. optional.
   * @param {String} PhoneNumber - phoneNumber. optional.
   * @param {String} Email - email. optional.
   * @param {String} UserId - userId. optional.
   * @param {Integer} IdType - idType. optional.
   * @param {String} Ip - ip. optional.
   * @param {Integer} Source - source. optional.
   * @param {String} CurrentUrl - currentUrl. optional.
   * @param {String} Agent - agent. optional.
   * @param {String} Cookie - cookie. optional.
   * @param {String} SessionId - sessionId. optional.
   * @param {String} MacAddress - macAddress. optional.
   * @param {String} Referer - referer. optional.
   * @param {String} UserName - userName. optional.
   * @param {String} CompanyName - companyName. optional.
   * @param {String} Address - address. optional.
   * @param {String} IDNumber - IDNumber. optional.
   * @param {String} bankCardNumber - bankCardNumber. optional.
   * @param {String} ProtocolVersion - protocolVersion. optional.
   * @param {String} JsToken - JsToken. optional.
   * @param {String} SDKToken - SDKToken. optional.
   * @param {Integer} AccountExist - accountExist. optional.
   * @param {String} PasswordHash - passwordHash. optional.
   * @param {Integer} LoginType - loginType. optional.
   * @param {Integer} PasswordCorrect - passwordCorrect. optional.
   */
  loginPrevention(params = {}, options = {}) {
    return this.request('LoginPrevention', params, options);
  }

  /**
   * @param {String} Code - code. required.
   * @param {Json} Context - context. required.
   */
  mteeRiskInvoke(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Code')) {
      throw new TypeError('parameter "Code" is required');
    }

    if (!hasOwnProperty(params, 'Context')) {
      throw new TypeError('parameter "Context" is required');
    }

    return this.request('MteeRiskInvoke', params, options);
  }

  /**
   * @param {String} sessionId - sessionId. optional.
   * @param {String} AppKey - appKey. optional.
   * @param {String} AccessKey - accessKey. optional.
   * @param {String} Sig - sig. optional.
   * @param {String} RemoteIp - remoteIp. optional.
   * @param {String} Token - token. optional.
   * @param {String} Scene - scene. optional.
   * @param {String} Serno - serno. optional.
   */
  nctokenSignAuthenticate(params = {}, options = {}) {
    return this.request('NctokenSignAuthenticate', params, options);
  }

  /**
   * @param {String} AppKey - appKey. optional.
   * @param {String} RequestIp - requestIp. optional.
   * @param {String} CallerName - callerName. optional.
   * @param {String} RequestId - requestId. optional.
   */
  riskSecondCheck(params = {}, options = {}) {
    return this.request('RiskSecondCheck', params, options);
  }

  /**
   * @param {String} Target - target. optional.
   * @param {String} Channel - channel. optional.
   * @param {Integer} TempletId - templetId. optional.
   * @param {Integer} MessageTypeId - messageTypeId. optional.
   * @param {String} SourceId - sourceId. optional.
   * @param {Json} Context - context. required.
   */
  sendAccountMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Context')) {
      throw new TypeError('parameter "Context" is required');
    }

    return this.request('SendAccountMessage', params, options);
  }

  /**
   * @param {String} AppKey - appKey. optional.
   * @param {String} RequestIp - requestIp. optional.
   * @param {String} CallerName - callerName. optional.
   * @param {String} RequestId - requestId. optional.
   * @param {String} PhoneNumber - phoneNumber. optional.
   * @param {String} Email - email. optional.
   * @param {String} UserId - userId. optional.
   * @param {Integer} IdType - idType. optional.
   * @param {String} Ip - ip. optional.
   * @param {Integer} Source - source. optional.
   * @param {String} CurrentUrl - currentUrl. optional.
   * @param {String} Agent - agent. optional.
   * @param {String} Cookie - cookie. optional.
   * @param {String} SessionId - sessionId. optional.
   * @param {String} MacAddress - macAddress. optional.
   * @param {String} Referer - referer. optional.
   * @param {String} UserName - userName. optional.
   * @param {String} CompanyName - companyName. optional.
   * @param {String} Address - address. optional.
   * @param {String} IDNumber - IDNumber. optional.
   * @param {String} bankCardNumber - bankCardNumber. optional.
   * @param {String} ProtocolVersion - protocolVersion. optional.
   * @param {String} JsToken - JsToken. optional.
   * @param {String} SDKToken - SDKToken. optional.
   */
  spamRegisterPrevention(params = {}, options = {}) {
    return this.request('SpamRegisterPrevention', params, options);
  }

  /**
   * @param {Json} Context - context. required.
   * @param {Long} OpenAccountId - openAccountId. required.
   * @param {String} NewEmail - newEmail. required.
   */
  updateEmail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Context')) {
      throw new TypeError('parameter "Context" is required');
    }

    if (!hasOwnProperty(params, 'OpenAccountId')) {
      throw new TypeError('parameter "OpenAccountId" is required');
    }

    if (!hasOwnProperty(params, 'NewEmail')) {
      throw new TypeError('parameter "NewEmail" is required');
    }

    return this.request('UpdateEmail', params, options);
  }

  /**
   * @param {Json} Context - context. required.
   * @param {Long} OpenAccountId - openAccountId. required.
   * @param {String} NewMobile - newMobile. required.
   */
  updateMobile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Context')) {
      throw new TypeError('parameter "Context" is required');
    }

    if (!hasOwnProperty(params, 'OpenAccountId')) {
      throw new TypeError('parameter "OpenAccountId" is required');
    }

    if (!hasOwnProperty(params, 'NewMobile')) {
      throw new TypeError('parameter "NewMobile" is required');
    }

    return this.request('UpdateMobile', params, options);
  }

  /**
   * @param {Json} Context - context. required.
   * @param {Long} OpenAccountId - openAccountId. required.
   * @param {String} MobileLocationCode - mobileLocationCode. optional.
   * @param {String} NewMobile - newMobile. required.
   */
  updateMobileWithLocationCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Context')) {
      throw new TypeError('parameter "Context" is required');
    }

    if (!hasOwnProperty(params, 'OpenAccountId')) {
      throw new TypeError('parameter "OpenAccountId" is required');
    }

    if (!hasOwnProperty(params, 'NewMobile')) {
      throw new TypeError('parameter "NewMobile" is required');
    }

    return this.request('UpdateMobileWithLocationCode', params, options);
  }

  /**
   * @param {Json} Context - context. required.
   * @param {Long} OpenAccountId - openAccountId. required.
   * @param {String} NewPassword - newPassword. required.
   */
  updatePassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Context')) {
      throw new TypeError('parameter "Context" is required');
    }

    if (!hasOwnProperty(params, 'OpenAccountId')) {
      throw new TypeError('parameter "OpenAccountId" is required');
    }

    if (!hasOwnProperty(params, 'NewPassword')) {
      throw new TypeError('parameter "NewPassword" is required');
    }

    return this.request('UpdatePassword', params, options);
  }

  /**
   * @param {String} SsoToken - ssoToken. required.
   * @param {String} AppKey - appKey. required.
   * @param {Boolean} ShouldInvalidate - shouldInvalidate. required.
   */
  validateSsoToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SsoToken')) {
      throw new TypeError('parameter "SsoToken" is required');
    }

    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'ShouldInvalidate')) {
      throw new TypeError('parameter "ShouldInvalidate" is required');
    }

    return this.request('ValidateSsoToken', params, options);
  }

  /**
   * @param {String} Token - token. required.
   * @param {String} AppKey - appKey. required.
   */
  validateTokenByTokenAndAppKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('ValidateTokenByTokenAndAppKey', params, options);
  }

}

module.exports = Client;

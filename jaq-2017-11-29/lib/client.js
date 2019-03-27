
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-11-29';
    super(config);
  }

  /**
   * @param {String} CallerName - callerName. optional. default: POP.
   * @param {String} Ip - ip. required.
   * @param {String} ProtocolVersion - protocolVersion. required.
   * @param {Integer} Source - source. required.
   * @param {String} ActivityDescription - activityDescription. required.
   * @param {String} ActivityId - activityId. required.
   * @param {String} Prize - prize. required.
   * @param {Integer} PrizeType - prizeType. required.
   * @param {String} PhoneNumber - phoneNumber. optional.
   * @param {String} Email - email. optional.
   * @param {String} UserId - userId. optional.
   * @param {Integer} IdType - idType. optional.
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
   * @param {String} BankCardNumber - bankCardNumber. optional.
   * @param {String} RegisterIp - registerIp. optional.
   * @param {Long} RegisterDate - registerDate. optional.
   * @param {String} ExtendData - extendData. optional.
   * @param {String} JsToken - JsToken. optional.
   * @param {String} SDKToken - SDKToken. optional.
   */
  activityPrevention(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'ProtocolVersion')) {
      throw new TypeError('parameter "ProtocolVersion" is required');
    }

    if (!hasOwnProperty(params, 'Source')) {
      throw new TypeError('parameter "Source" is required');
    }

    if (!hasOwnProperty(params, 'ActivityDescription')) {
      throw new TypeError('parameter "ActivityDescription" is required');
    }

    if (!hasOwnProperty(params, 'ActivityId')) {
      throw new TypeError('parameter "ActivityId" is required');
    }

    if (!hasOwnProperty(params, 'Prize')) {
      throw new TypeError('parameter "Prize" is required');
    }

    if (!hasOwnProperty(params, 'PrizeType')) {
      throw new TypeError('parameter "PrizeType" is required');
    }

    return this.request('ActivityPrevention', params, options);
  }

  /**
   * @param {String} CallerName - callerName. optional. default: POP.
   * @param {String} Session - session. required.
   */
  afsAppCheck(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Session')) {
      throw new TypeError('parameter "Session" is required');
    }

    return this.request('AfsAppCheck', params, options);
  }

  /**
   * @param {String} CallerName - callerName. optional. default: POP.
   * @param {String} Session - session. required.
   * @param {String} Token - token. required.
   * @param {String} Sig - sig. required.
   * @param {Integer} Platform - platform. required.
   * @param {String} Scene - scene. optional.
   */
  afsCheck(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Session')) {
      throw new TypeError('parameter "Session" is required');
    }

    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    if (!hasOwnProperty(params, 'Sig')) {
      throw new TypeError('parameter "Sig" is required');
    }

    if (!hasOwnProperty(params, 'Platform')) {
      throw new TypeError('parameter "Platform" is required');
    }

    return this.request('AfsCheck', params, options);
  }

  /**
   * @param {String} CallerName - callerName. optional. default: POP.
   * @param {String} Ip - ip. required.
   * @param {String} ProtocolVersion - protocolVersion. required.
   * @param {Integer} Source - source. required.
   * @param {String} PhoneNumber - phoneNumber. optional.
   * @param {String} Email - email. optional.
   * @param {String} UserId - userId. optional.
   * @param {Integer} IdType - idType. optional.
   * @param {String} CurrentUrl - currentUrl. optional.
   * @param {String} Agent - agent. optional.
   * @param {String} Cookie - cookie. optional.
   * @param {String} SessionId - sessionId. optional.
   * @param {String} MacAddress - macAddress. optional.
   * @param {String} Referer - referer. optional.
   * @param {String} NickName - nickName. optional.
   * @param {String} CompanyName - companyName. optional.
   * @param {String} Address - address. optional.
   * @param {String} JsToken - JsToken. optional.
   * @param {String} SDKToken - SDKToken. optional.
   * @param {String} ExtendData - extendData. optional.
   */
  bbsPrevention(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'ProtocolVersion')) {
      throw new TypeError('parameter "ProtocolVersion" is required');
    }

    if (!hasOwnProperty(params, 'Source')) {
      throw new TypeError('parameter "Source" is required');
    }

    return this.request('BbsPrevention', params, options);
  }

  /**
   * @param {String} CallerName - callerName. optional. default: POP.
   * @param {String} AccountName - accountName. required.
   * @param {String} PasswordHash - passwordHash. required.
   */
  checkAccountAndPasswordRisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'PasswordHash')) {
      throw new TypeError('parameter "PasswordHash" is required');
    }

    return this.request('CheckAccountAndPasswordRisk', params, options);
  }

  /**
   * @param {String} CallerName - callerName. optional. default: POP.
   * @param {String} RawData - rawData. optional.
   * @param {String} Sign - sign. required.
   */
  deviceRiskControl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sign')) {
      throw new TypeError('parameter "Sign" is required');
    }

    return this.request('DeviceRiskControl', params, options);
  }

  /**
   * @param {String} CallerName - callerName. optional. default: POP.
   * @param {String} Sign - sign. required.
   */
  deviceRiskIdentify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sign')) {
      throw new TypeError('parameter "Sign" is required');
    }

    return this.request('DeviceRiskIdentify', params, options);
  }

  /**
   * @param {String} CallerName - callerName. optional. default: POP.
   * @param {RepeatList} Packages - packages. required.
   * @param {String} StartDay - startDay. required.
   * @param {String} EndDay - endDay. required.
   */
  getAntiCheatExcelResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Packages')) {
      throw new TypeError('parameter "Packages" is required');
    }

    if (!hasOwnProperty(params, 'StartDay')) {
      throw new TypeError('parameter "StartDay" is required');
    }

    if (!hasOwnProperty(params, 'EndDay')) {
      throw new TypeError('parameter "EndDay" is required');
    }

    return this.request('GetAntiCheatExcelResult', params, options);
  }

  /**
   * @param {String} CallerName - callerName. optional. default: POP.
   * @param {String} WToken - wToken. required.
   * @param {String} PackageName - packageName. required.
   * @param {Integer} Industry - industry. optional.
   * @param {Integer} Scene - scene. optional.
   * @param {String} ExtraData - extraData. optional.
   */
  getRiskStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'WToken')) {
      throw new TypeError('parameter "WToken" is required');
    }

    if (!hasOwnProperty(params, 'PackageName')) {
      throw new TypeError('parameter "PackageName" is required');
    }

    return this.request('GetRiskStatus', params, options);
  }

  /**
   * @param {String} CallerName - callerName. optional. default: POP.
   * @param {String} Ip - ip. required.
   * @param {String} ProtocolVersion - protocolVersion. required.
   * @param {Integer} Source - source. required.
   * @param {String} PhoneNumber - phoneNumber. optional.
   * @param {String} Email - email. optional.
   * @param {String} UserId - userId. optional.
   * @param {Integer} IdType - idType. optional.
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
   * @param {String} BankCardNumber - bankCardNumber. optional.
   * @param {String} RegisterIp - registerIp. optional.
   * @param {Long} RegisterDate - registerDate. optional.
   * @param {Integer} AccountExist - accountExist. optional.
   * @param {String} ExtendData - extendData. optional.
   * @param {String} JsToken - JsToken. optional.
   * @param {String} SDKToken - SDKToken. optional.
   * @param {String} PasswordHash - passwordHash. optional.
   * @param {Integer} LoginType - loginType. optional.
   * @param {Integer} PasswordCorrect - passwordCorrect. optional.
   */
  loginPrevention(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'ProtocolVersion')) {
      throw new TypeError('parameter "ProtocolVersion" is required');
    }

    if (!hasOwnProperty(params, 'Source')) {
      throw new TypeError('parameter "Source" is required');
    }

    return this.request('LoginPrevention', params, options);
  }

  /**
   * @param {String} CallerName - callerName. optional. default: POP.
   * @param {String} Ip - ip. required.
   * @param {String} ProtocolVersion - protocolVersion. required.
   * @param {Integer} Source - source. required.
   * @param {String} PhoneNumber - phoneNumber. optional.
   * @param {String} Email - email. optional.
   * @param {String} UserId - userId. optional.
   * @param {Integer} IdType - idType. optional.
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
   * @param {String} BankCardNumber - bankCardNumber. optional.
   * @param {String} RegisterIp - registerIp. optional.
   * @param {Long} RegisterDate - registerDate. optional.
   * @param {String} LoginIp - loginIp. optional.
   * @param {Long} LoginDate - loginDate. optional.
   * @param {String} ExtendData - extendData. optional.
   * @param {String} PasswordHash - passwordHash. optional.
   * @param {String} JsToken - JsToken. optional.
   * @param {String} SDKToken - SDKToken. optional.
   */
  messagePrevention(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'ProtocolVersion')) {
      throw new TypeError('parameter "ProtocolVersion" is required');
    }

    if (!hasOwnProperty(params, 'Source')) {
      throw new TypeError('parameter "Source" is required');
    }

    return this.request('MessagePrevention', params, options);
  }

  /**
   * @param {String} CallerName - callerName. optional. default: POP.
   * @param {String} Ip - ip. required.
   * @param {String} ProtocolVersion - protocolVersion. required.
   * @param {Integer} Source - source. required.
   * @param {String} PhoneNumber - phoneNumber. optional.
   * @param {String} Email - email. optional.
   * @param {String} UserId - userId. optional.
   * @param {Integer} IdType - idType. optional.
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
   * @param {String} BankCardNumber - bankCardNumber. optional.
   * @param {String} RegisterIp - registerIp. optional.
   * @param {Long} RegisterDate - registerDate. optional.
   * @param {String} LoginIp - loginIp. optional.
   * @param {Long} LoginDate - loginDate. optional.
   * @param {String} ExtendData - extendData. optional.
   * @param {String} PasswordHash - passwordHash. optional.
   * @param {String} JsToken - JsToken. optional.
   * @param {String} SDKToken - SDKToken. optional.
   */
  otherPrevention(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'ProtocolVersion')) {
      throw new TypeError('parameter "ProtocolVersion" is required');
    }

    if (!hasOwnProperty(params, 'Source')) {
      throw new TypeError('parameter "Source" is required');
    }

    return this.request('OtherPrevention', params, options);
  }

  /**
   * @param {String} CallerName - callerName. optional. default: POP.
   * @param {String} RawData - rawData. optional.
   * @param {String} Sign - sign. required.
   */
  riskControlSignVerify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sign')) {
      throw new TypeError('parameter "Sign" is required');
    }

    return this.request('RiskControlSignVerify', params, options);
  }

  /**
   * @param {String} CallerName - callerName. optional. default: POP.
   * @param {String} Ip - ip. required.
   * @param {String} ProtocolVersion - protocolVersion. required.
   * @param {Integer} Source - source. required.
   * @param {String} PhoneNumber - phoneNumber. optional.
   * @param {String} Email - email. optional.
   * @param {String} UserId - userId. optional.
   * @param {Integer} IdType - idType. optional.
   * @param {String} CurrentUrl - currentUrl. optional.
   * @param {String} Agent - agent. optional.
   * @param {String} Cookie - cookie. optional.
   * @param {String} SessionId - sessionId. optional.
   * @param {String} MacAddress - macAddress. optional.
   * @param {String} Referer - referer. optional.
   * @param {String} NickName - nickName. optional.
   * @param {String} CompanyName - companyName. optional.
   * @param {String} Address - address. optional.
   * @param {String} IDNumber - IDNumber. optional.
   * @param {String} BankCardNumber - bankCardNumber. optional.
   * @param {String} JsToken - JsToken. optional.
   * @param {String} SDKToken - SDKToken. optional.
   * @param {String} ExtendData - extendData. optional.
   */
  spamRegisterPrevention(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'ProtocolVersion')) {
      throw new TypeError('parameter "ProtocolVersion" is required');
    }

    if (!hasOwnProperty(params, 'Source')) {
      throw new TypeError('parameter "Source" is required');
    }

    return this.request('SpamRegisterPrevention', params, options);
  }

}

module.exports = Client;

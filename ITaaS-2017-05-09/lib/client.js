
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-05-09';
    super(config);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} IpSegment - ipsegment. optional.
   * @param {String} Memo - memo. optional.
   * @param {String} AuthType - authType. optional. default: AD.
   */
  addIPSegment(params = {}, options = {}) {
    return this.request('AddIPSegment', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ClientAppid - clientappid. optional. default: popdefaultClientAppid.
   * @param {String} MSG - msg. optional.
   * @param {String} TS - ts. optional.
   * @param {String} AccessToken - accessToken. optional.
   * @param {String} AuthType - authType. optional. default: AD.
   */
  boxClientHeartBeat(params = {}, options = {}) {
    return this.request('BoxClientHeartBeat', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} MSG - msg. optional.
   * @param {String} ClientAppid - clientappid. optional.
   * @param {String} AuthTypeDefault - authType. optional. default: POPAPP.
   */
  boxClientHeartBeat4Appkey(params = {}, options = {}) {
    return this.request('BoxClientHeartBeat4Appkey', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} UserCode - userCode. optional.
   * @param {String} AppUUID - appUUID. optional.
   * @param {Integer} ShareVersion - version. optional.
   * @param {String} AuthUri - authUri. optional.
   */
  boxLoginoutReport(params = {}, options = {}) {
    return this.request('BoxLoginoutReport', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} UserCode - userCode. optional.
   * @param {String} AppUUID - appUUID. optional.
   * @param {Integer} ShareVersion - version. optional.
   * @param {String} AuthUri - authUri. optional.
   * @param {String} AuthTypeDefault - authType. optional. default: POPAPP.
   */
  boxLoginoutReport4Appkey(params = {}, options = {}) {
    return this.request('BoxLoginoutReport4Appkey', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} TS - ts. optional.
   * @param {String} AccessToken - accessToken. optional.
   * @param {String} ClientAppid - clientappid. optional. default: popdefaultClientAppid.
   * @param {String} MAC - mac. optional.
   * @param {String} DrIp - drip. optional.
   * @param {String} DrStatus - drstatus. optional.
   * @param {String} AppUUID - appUUID. optional.
   * @param {String} AuthenticationCode - authenticationcode. optional.
   * @param {Integer} RegisterVersion - version. optional.
   * @param {String} AuthType - authType. optional. default: AD.
   * @param {String} AuthRefreshTokenId - authRefreshTokenId. optional.
   */
  boxRegister(params = {}, options = {}) {
    return this.request('BoxRegister', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} TS - ts. optional.
   * @param {String} AccessToken - accessToken. optional.
   * @param {String} ClientAppid - clientappid. optional. default: popdefaultClientAppid.
   * @param {String} MAC - mac. optional.
   * @param {String} DrIp - drip. optional.
   * @param {String} DrStatus - drstatus. optional.
   * @param {String} AppUUID - appUUID. optional.
   * @param {String} AuthenticationCode - authenticationcode. optional.
   * @param {Integer} RegisterVersion - version. optional.
   * @param {String} AuthType - authType. optional. default: AD.
   * @param {String} AuthRefreshTokenId - authRefreshTokenId. optional.
   */
  boxRegisterUpdate(params = {}, options = {}) {
    return this.request('BoxRegisterUpdate', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} MAC - mac. optional.
   * @param {String} DrIp - drip. optional.
   * @param {String} DrStatus - drstatus. optional.
   * @param {String} AppUUID - appUUID. optional.
   * @param {Integer} RegisterVersion - version. optional.
   * @param {String} ClientAppid - clientappid. optional.
   * @param {String} AuthTypeDefault - authType. optional. default: POPAPP.
   * @param {String} AuthType - authType2. optional.
   */
  boxRegisterUpdate4Appkey(params = {}, options = {}) {
    return this.request('BoxRegisterUpdate4Appkey', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ClientAppid - clientappid. optional. default: popdefaultClientAppid.
   * @param {String} MSG - msg. optional.
   * @param {String} TS - ts. optional.
   * @param {String} AccessToken - accessToken. optional.
   * @param {String} AuthType - authType. optional. default: AD.
   */
  boxSendMessageUrl(params = {}, options = {}) {
    return this.request('BoxSendMessageUrl', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} MSG - msg. optional.
   * @param {String} ClientAppid - clientappid. optional.
   * @param {String} AuthTypeDefault - authType. optional. default: POPAPP.
   */
  boxSendMessageUrl4Appkey(params = {}, options = {}) {
    return this.request('BoxSendMessageUrl4Appkey', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} TraceId - traceId. optional.
   * @param {String} SpMsg - spMsg. optional.
   */
  ceaseInstance(params = {}, options = {}) {
    return this.request('CeaseInstance', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} AuthType - authType. optional. default: AD.
   */
  checkBuyShareScreen(params = {}, options = {}) {
    return this.request('CheckBuyShareScreen', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} AuthType - authType. optional. default: AD.
   */
  checkBuyVideoConference(params = {}, options = {}) {
    return this.request('CheckBuyVideoConference', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} AuthType - authType. optional. default: AD.
   */
  createBoxCode(params = {}, options = {}) {
    return this.request('CreateBoxCode', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {Integer} BoxNumber - boxNumber. optional.
   * @param {Boolean} ServiceFlag - serviceFlag. optional.
   */
  createEnterprise(params = {}, options = {}) {
    return this.request('CreateEnterprise', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} AuthType - authType. optional. default: AD.
   */
  getBoxCodeList(params = {}, options = {}) {
    return this.request('GetBoxCodeList', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} AuthType - authType. optional. default: AD.
   */
  getCompanyId4BoxActived(params = {}, options = {}) {
    return this.request('GetCompanyId4BoxActived', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   */
  getEnterpriseConfig(params = {}, options = {}) {
    return this.request('GetEnterpriseConfig', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} AuthType - authType. optional. default: AD.
   */
  getIPSegmentsList(params = {}, options = {}) {
    return this.request('GetIPSegmentsList', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} AuthType - authType. optional. default: AD.
   */
  getRegisterBoxList(params = {}, options = {}) {
    return this.request('GetRegisterBoxList', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} AuthType - authType. optional. default: AD.
   */
  getRegisterBoxNumber(params = {}, options = {}) {
    return this.request('GetRegisterBoxNumber', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} AuthType - authType. optional. default: AD.
   */
  getRegisterHistoryList(params = {}, options = {}) {
    return this.request('GetRegisterHistoryList', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} AuthType - authType. optional. default: AD.
   */
  getWelcomePageURI(params = {}, options = {}) {
    return this.request('GetWelcomePageURI', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} TraceId - traceId. optional.
   * @param {String} ProduceParameter - produceParameter. optional.
   */
  produceInstance(params = {}, options = {}) {
    return this.request('ProduceInstance', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} TraceId - traceId. optional.
   * @param {String} SpMsg - spMsg. optional.
   */
  releaseInstance(params = {}, options = {}) {
    return this.request('ReleaseInstance', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} Code - code. optional.
   * @param {String} AuthType - authType. optional. default: AD.
   */
  removeBoxCode(params = {}, options = {}) {
    return this.request('RemoveBoxCode', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} Uuid - uuid. optional.
   * @param {String} AuthType - authType. optional. default: AD.
   */
  removeIPSegment(params = {}, options = {}) {
    return this.request('RemoveIPSegment', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} DrSessionId - drsessionid. optional.
   * @param {String} AuthType - authType. optional. default: AD.
   */
  removeRegisterBox(params = {}, options = {}) {
    return this.request('RemoveRegisterBox', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} TraceId - traceId. optional.
   * @param {String} SpMsg - spMsg. optional.
   */
  resumeInstance(params = {}, options = {}) {
    return this.request('ResumeInstance', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} WelcomeUri - welcomeuri. optional.
   * @param {String} AuthType - authType. optional. default: AD.
   */
  setWelcomePageURI(params = {}, options = {}) {
    return this.request('SetWelcomePageURI', params, options);
  }

  /**
   * @param {String} AuthType - authType. optional. default: AD.
   * @param {String} WelcomeUri - welcomeUrl. optional.
   * @param {String} ScreenCode - screenCode. optional.
   * @param {String} Cid - cid. optional.
   */
  setWelcomePageURIToBoxByTP(params = {}, options = {}) {
    return this.request('SetWelcomePageURIToBoxByTP', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} MSG - msg. optional.
   * @param {String} TS - ts. optional.
   * @param {String} AccessToken - accessToken. optional.
   * @param {String} Cid - cid. optional.
   * @param {Long} Uid - uid. optional.
   * @param {String} Umid - umid. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} AuthType - authType. optional.
   */
  shareClientHeartBeat(params = {}, options = {}) {
    return this.request('ShareClientHeartBeat', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} MSG - msg. optional.
   * @param {String} TS - ts. optional.
   * @param {String} AccessToken - accessToken. optional.
   * @param {String} ClientAppid - clientappid. optional.
   * @param {String} AuthType - authType. optional. default: POPAPP.
   */
  shareClientHeartBeat4Appkey(params = {}, options = {}) {
    return this.request('ShareClientHeartBeat4Appkey', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ScreenCode - screenCode. optional.
   * @param {Integer} ShareVersion - version. optional.
   * @param {String} TS - ts. optional.
   * @param {String} AccessToken - accessToken. optional.
   * @param {String} Cid - cid. optional.
   * @param {Long} Uid - uid. optional.
   * @param {String} Umid - umid. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} AuthType - authType. optional.
   */
  shareGetReceiverInfo(params = {}, options = {}) {
    return this.request('ShareGetReceiverInfo', params, options);
  }

  /**
   * @param {String} GuestUserId - guestUserId. optional.
   * @param {String} MSG - msg. optional.
   * @param {Integer} ShareVersion - version. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AppKey - appKey. optional.
   * @param {String} OsType - osType. optional.
   * @param {String} AppVersion - appVersion. optional.
   * @param {String} SignatureType - signatureType. optional.
   */
  shareGuestSendMessageUrl(params = {}, options = {}) {
    return this.request('ShareGuestSendMessageUrl', params, options);
  }

  /**
   * @param {String} SessionId - sessionId. optional.
   * @param {String} ScreenCode - screenCode. optional.
   * @param {String} MqEnable - mqenable. optional.
   * @param {Integer} ShareVersion - version. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AppKey - appKey. optional.
   * @param {String} OsType - osType. optional.
   * @param {String} AppVersion - appVersion. optional.
   * @param {String} DeviceInfo - deviceInfo. optional.
   * @param {String} SignatureType - signatureType. optional.
   */
  shareGuestSenderRegister(params = {}, options = {}) {
    return this.request('ShareGuestSenderRegister', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} MSG - msg. optional.
   * @param {Integer} ShareVersion - version. optional.
   * @param {String} TS - ts. optional.
   * @param {String} AccessToken - accessToken. optional.
   * @param {String} Cid - cid. optional.
   * @param {Long} Uid - uid. optional.
   * @param {String} Umid - umid. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} AuthType - authType. optional.
   */
  shareScreenMeetingRob(params = {}, options = {}) {
    return this.request('ShareScreenMeetingRob', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} MSG - msg. optional.
   * @param {Integer} ShareVersion - version. optional.
   * @param {String} AuthType - authType. optional. default: POPAPP.
   */
  shareScreenMeetingRob4Appkey(params = {}, options = {}) {
    return this.request('ShareScreenMeetingRob4Appkey', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} MSG - msg. optional.
   * @param {String} TS - ts. optional.
   * @param {String} AccessToken - accessToken. optional.
   * @param {String} Cid - cid. optional.
   * @param {Long} Uid - uid. optional.
   * @param {String} Umid - umid. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} AuthType - authType. optional.
   */
  shareSendMessageUrl(params = {}, options = {}) {
    return this.request('ShareSendMessageUrl', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} MSG - msg. optional.
   * @param {String} TS - ts. optional.
   * @param {String} AccessToken - accessToken. optional.
   * @param {String} AuthType - authType. optional. default: POPAPP.
   */
  shareSendMessageUrl4Appkey(params = {}, options = {}) {
    return this.request('ShareSendMessageUrl4Appkey', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} SessionId - sessionId. optional.
   * @param {String} MqEnable - mqenable. optional.
   * @param {Integer} ShareVersion - version. optional.
   * @param {String} TS - ts. optional.
   * @param {String} AccessToken - accessToken. optional.
   * @param {String} Cid - cid. optional.
   * @param {Long} Uid - uid. optional.
   * @param {String} Umid - umid. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} AuthType - authType. optional.
   */
  shareSenderRegister(params = {}, options = {}) {
    return this.request('ShareSenderRegister', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} SessionId - sessionId. optional.
   * @param {String} MqEnable - mqenable. optional.
   * @param {Integer} ShareVersion - version. optional.
   * @param {String} AuthType - authType. optional. default: POPAPP.
   */
  shareSenderRegister4Appkey(params = {}, options = {}) {
    return this.request('ShareSenderRegister4Appkey', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} ConfigKey - configKey. optional.
   * @param {String} ConfigValue - configValue. optional.
   * @param {String} Memo - memo. optional.
   * @param {String} AuthType - authType. optional. default: AD.
   */
  updateEnterpriseConfig(params = {}, options = {}) {
    return this.request('UpdateEnterpriseConfig', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} Uuid - uuid. optional.
   * @param {String} IpSegment - ipsegment. optional.
   * @param {String} Memo - memo. optional.
   * @param {String} AuthType - authType. optional. default: AD.
   */
  updateIPSegment(params = {}, options = {}) {
    return this.request('UpdateIPSegment', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} AuthType - authType. optional. default: AD.
   * @param {String} ScreenCode - screencode. optional.
   * @param {String} DrName - drname. optional.
   */
  updateRoomName(params = {}, options = {}) {
    return this.request('UpdateRoomName', params, options);
  }

  /**
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   * @param {Long} Level - level. optional.
   * @param {String} Url - url. optional.
   * @param {String} Prompt - prompt. optional.
   * @param {String} AuthTypeDefault - authType. optional. default: POPAPP.
   */
  doCheckResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('doCheckResource', params, options);
  }

  /**
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   * @param {String} AuthTypeDefault - authType. optional. default: POPAPP.
   */
  doLogicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('doLogicalDeleteResource', params, options);
  }

  /**
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   * @param {String} AuthTypeDefault - authType. optional. default: POPAPP.
   */
  doPhysicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('doPhysicalDeleteResource', params, options);
  }

}

module.exports = Client;

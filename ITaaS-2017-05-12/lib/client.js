
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-05-12';
    super(config);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} IpSegment - ipsegment. optional.
   * @param {Integer} GuestFlag - guestflag. optional.
   * @param {String} Memo - memo. optional.
   * @param {String} AuthType - authType. optional. default: AD.
   */
  addIPSegment(params = {}, options = {}) {
    return this.request('AddIPSegment', params, options);
  }

  /**
   * @param {String} OsType - osType. optional.
   * @param {String} AppVersion - appVersion. optional.
   * @param {String} DeviceId - deviceId. optional.
   * @param {String} AuthType - authType. required.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  aliyunADLogin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AuthType')) {
      throw new TypeError('parameter "AuthType" is required');
    }

    return this.request('AliyunADLogin', params, options);
  }

  /**
   * @param {String} Language - language. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppKey - appKey. required.
   * @param {String} SignatureType - signatureType. required.
   * @param {String} Umid - umid. optional.
   * @param {Long} Uid - uid. optional.
   * @param {String} Cid - cid. optional.
   */
  appFunctionModuleService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'SignatureType')) {
      throw new TypeError('parameter "SignatureType" is required');
    }

    return this.request('AppFunctionModuleService', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} AuthType - authType. optional.
   * @param {String} Language - language. optional.
   * @param {String} CurVer - curVer. required.
   * @param {String} OsType - osType. required.
   * @param {String} AppName - appName. required.
   * @param {String} Umid - umid. optional.
   * @param {Long} Uid - uid. optional.
   * @param {String} Cid - cid. optional.
   */
  authUpgradeService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurVer')) {
      throw new TypeError('parameter "CurVer" is required');
    }

    if (!hasOwnProperty(params, 'OsType')) {
      throw new TypeError('parameter "OsType" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('AuthUpgradeService', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
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
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} Code - code. optional.
   */
  checkCid(params = {}, options = {}) {
    return this.request('CheckCid', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} Ip - ip. optional.
   * @param {String} AuthType - authType. optional. default: AD.
   */
  checkIPSegment(params = {}, options = {}) {
    return this.request('CheckIPSegment', params, options);
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
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} Language - language. optional.
   * @param {String} Ids - ids. required.
   */
  deleteOpenAgentCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    return this.request('DeleteOpenAgentCommand', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} Language - language. optional.
   * @param {Long} Id - id. required.
   * @param {Integer} OptionType - optionType. required.
   */
  executeCommandTaskByCidAndId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'OptionType')) {
      throw new TypeError('parameter "OptionType" is required');
    }

    return this.request('ExecuteCommandTaskByCidAndId', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   */
  exportOpenUserByDTO(params = {}, options = {}) {
    return this.request('ExportOpenUserByDTO', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} AuthType - authType. required.
   * @param {String} Language - language. optional.
   * @param {String} Umid - umid. required.
   * @param {Long} Uid - uid. required.
   * @param {String} Cid - cid. required.
   * @param {Long} PushId - pushId. required.
   * @param {Integer} PushType - pushType. required.
   * @param {Integer} ResultCode - resultCode. required.
   * @param {String} Remark - remark. optional.
   */
  feedbackCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AuthType')) {
      throw new TypeError('parameter "AuthType" is required');
    }

    if (!hasOwnProperty(params, 'Umid')) {
      throw new TypeError('parameter "Umid" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Cid')) {
      throw new TypeError('parameter "Cid" is required');
    }

    if (!hasOwnProperty(params, 'PushId')) {
      throw new TypeError('parameter "PushId" is required');
    }

    if (!hasOwnProperty(params, 'PushType')) {
      throw new TypeError('parameter "PushType" is required');
    }

    if (!hasOwnProperty(params, 'ResultCode')) {
      throw new TypeError('parameter "ResultCode" is required');
    }

    return this.request('FeedbackCommand', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} AuthType - authType. required.
   * @param {String} Language - language. optional.
   * @param {String} Umid - umid. required.
   * @param {Long} Uid - uid. required.
   * @param {String} Cid - cid. required.
   * @param {Long} PushId - pushId. required.
   * @param {Integer} PushType - pushType. required.
   */
  fetchCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AuthType')) {
      throw new TypeError('parameter "AuthType" is required');
    }

    if (!hasOwnProperty(params, 'Umid')) {
      throw new TypeError('parameter "Umid" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Cid')) {
      throw new TypeError('parameter "Cid" is required');
    }

    if (!hasOwnProperty(params, 'PushId')) {
      throw new TypeError('parameter "PushId" is required');
    }

    if (!hasOwnProperty(params, 'PushType')) {
      throw new TypeError('parameter "PushType" is required');
    }

    return this.request('FetchCommand', params, options);
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
   * @param {String} AuthType - authType. optional. default: AD.
   */
  getIPSegmentStatus(params = {}, options = {}) {
    return this.request('GetIPSegmentStatus', params, options);
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
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} AuthType - authType. optional.
   * @param {String} Language - language. optional.
   * @param {String} OsType - osType. optional.
   * @param {String} AppName - appName. optional.
   * @param {String} AppVersion - appVersion. optional.
   */
  getOpenNacByCid(params = {}, options = {}) {
    return this.request('GetOpenNacByCid', params, options);
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
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} Language - language. optional.
   * @param {Long} Uid - uid. required.
   * @param {String} Cid - cid. required.
   * @param {String} Umid - umid. required.
   * @param {String} HardwareInfo - hardwareInfo. required.
   */
  hardwareDataCollection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Cid')) {
      throw new TypeError('parameter "Cid" is required');
    }

    if (!hasOwnProperty(params, 'Umid')) {
      throw new TypeError('parameter "Umid" is required');
    }

    if (!hasOwnProperty(params, 'HardwareInfo')) {
      throw new TypeError('parameter "HardwareInfo" is required');
    }

    return this.request('HardwareDataCollection', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} AuthType - authType. required.
   * @param {String} Language - language. optional.
   * @param {String} Umid - umid. required.
   * @param {Long} Uid - uid. required.
   * @param {String} Cid - cid. required.
   * @param {String} Ip - ip. optional.
   * @param {String} Mac - mac. optional.
   * @param {String} Dns - dns. optional.
   * @param {String} Is64System - is64System. optional.
   * @param {String} IsUacEnable - isUacEnable. optional.
   * @param {String} Administrator - administrator. optional.
   * @param {String} ProtocolVersion - protocolVersion. optional.
   * @param {String} AppVersion - appVersion. optional.
   * @param {String} OsType - osType. required.
   * @param {String} DeviceLang - deviceLang. optional.
   * @param {Integer} DeviceStatus - deviceStatus. optional.
   * @param {Integer} PunishStatus - punishStatus. optional.
   * @param {Integer} PrisonBreak - prisonBreak. optional.
   * @param {String} AppName - appName. required.
   * @param {Long} SystemBootTime - systemBootTime. optional.
   * @param {Long} SystemShutdownTime - systemShutdownTime. optional.
   * @param {String} OsVersion - osVersion. optional.
   */
  heartbeatService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AuthType')) {
      throw new TypeError('parameter "AuthType" is required');
    }

    if (!hasOwnProperty(params, 'Umid')) {
      throw new TypeError('parameter "Umid" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Cid')) {
      throw new TypeError('parameter "Cid" is required');
    }

    if (!hasOwnProperty(params, 'OsType')) {
      throw new TypeError('parameter "OsType" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('HeartbeatService', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} AuthType - authType. required.
   * @param {String} Language - language. optional.
   * @param {String} OsType - osType. required.
   * @param {String} AppName - appName. required.
   * @param {String} AppVersion - appVersion. required.
   * @param {String} FileContext - fileContext. required.
   */
  importOpenUserByFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AuthType')) {
      throw new TypeError('parameter "AuthType" is required');
    }

    if (!hasOwnProperty(params, 'OsType')) {
      throw new TypeError('parameter "OsType" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'AppVersion')) {
      throw new TypeError('parameter "AppVersion" is required');
    }

    if (!hasOwnProperty(params, 'FileContext')) {
      throw new TypeError('parameter "FileContext" is required');
    }

    return this.request('ImportOpenUserByFile', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} AuthType - authType. required.
   * @param {String} Language - language. optional.
   * @param {String} OsType - osType. required.
   * @param {String} AppName - appName. required.
   * @param {String} AppVersion - appVersion. required.
   * @param {String} Umid - umid. required.
   * @param {Long} Uid - uid. required.
   * @param {String} Cid - cid. required.
   * @param {String} TokenKey - tokenKey. required.
   * @param {String} EncryptData - encryptData. required.
   */
  initOTP(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AuthType')) {
      throw new TypeError('parameter "AuthType" is required');
    }

    if (!hasOwnProperty(params, 'OsType')) {
      throw new TypeError('parameter "OsType" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'AppVersion')) {
      throw new TypeError('parameter "AppVersion" is required');
    }

    if (!hasOwnProperty(params, 'Umid')) {
      throw new TypeError('parameter "Umid" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Cid')) {
      throw new TypeError('parameter "Cid" is required');
    }

    if (!hasOwnProperty(params, 'TokenKey')) {
      throw new TypeError('parameter "TokenKey" is required');
    }

    if (!hasOwnProperty(params, 'EncryptData')) {
      throw new TypeError('parameter "EncryptData" is required');
    }

    return this.request('InitOTP', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} AuthType - authType. required.
   * @param {String} Language - language. optional.
   * @param {String} OsType - osType. required.
   * @param {String} AppName - appName. required.
   * @param {String} AppVersion - appVersion. required.
   * @param {String} Umid - umid. required.
   * @param {Long} Uid - uid. required.
   * @param {String} Cid - cid. required.
   */
  listByUidAndCidClient(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AuthType')) {
      throw new TypeError('parameter "AuthType" is required');
    }

    if (!hasOwnProperty(params, 'OsType')) {
      throw new TypeError('parameter "OsType" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'AppVersion')) {
      throw new TypeError('parameter "AppVersion" is required');
    }

    if (!hasOwnProperty(params, 'Umid')) {
      throw new TypeError('parameter "Umid" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Cid')) {
      throw new TypeError('parameter "Cid" is required');
    }

    return this.request('ListByUidAndCidClient', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} AuthType - authType. required.
   * @param {String} Language - language. optional.
   * @param {String} OsType - osType. required.
   * @param {String} AppName - appName. required.
   * @param {String} AppVersion - appVersion. required.
   * @param {String} Umid - umid. required.
   * @param {Long} Uid - uid. required.
   * @param {String} Cid - cid. required.
   */
  logOut(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AuthType')) {
      throw new TypeError('parameter "AuthType" is required');
    }

    if (!hasOwnProperty(params, 'OsType')) {
      throw new TypeError('parameter "OsType" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'AppVersion')) {
      throw new TypeError('parameter "AppVersion" is required');
    }

    if (!hasOwnProperty(params, 'Umid')) {
      throw new TypeError('parameter "Umid" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Cid')) {
      throw new TypeError('parameter "Cid" is required');
    }

    return this.request('LogOut', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} AuthType - authType. required.
   * @param {String} Language - language. optional.
   * @param {String} OsType - osType. required.
   * @param {String} AppName - appName. required.
   * @param {String} AppVersion - appVersion. required.
   * @param {String} Umid - umid. required.
   * @param {Long} Uid - uid. required.
   * @param {String} Cid - cid. required.
   * @param {String} UmidToken - umidToken. required.
   * @param {String} Utdid - utdid. required.
   * @param {Integer} PrimaryVersion - primaryVersion. required.
   * @param {Integer} SecondVersion - secondVersion. required.
   * @param {String} ClientVersion - clientVersion. required.
   */
  mdmEnrollStart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AuthType')) {
      throw new TypeError('parameter "AuthType" is required');
    }

    if (!hasOwnProperty(params, 'OsType')) {
      throw new TypeError('parameter "OsType" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'AppVersion')) {
      throw new TypeError('parameter "AppVersion" is required');
    }

    if (!hasOwnProperty(params, 'Umid')) {
      throw new TypeError('parameter "Umid" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Cid')) {
      throw new TypeError('parameter "Cid" is required');
    }

    if (!hasOwnProperty(params, 'UmidToken')) {
      throw new TypeError('parameter "UmidToken" is required');
    }

    if (!hasOwnProperty(params, 'Utdid')) {
      throw new TypeError('parameter "Utdid" is required');
    }

    if (!hasOwnProperty(params, 'PrimaryVersion')) {
      throw new TypeError('parameter "PrimaryVersion" is required');
    }

    if (!hasOwnProperty(params, 'SecondVersion')) {
      throw new TypeError('parameter "SecondVersion" is required');
    }

    if (!hasOwnProperty(params, 'ClientVersion')) {
      throw new TypeError('parameter "ClientVersion" is required');
    }

    return this.request('MdmEnrollStart', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} AuthType - authType. optional.
   * @param {String} Language - language. optional.
   * @param {String} OsType - osType. optional.
   * @param {String} AppName - appName. optional.
   * @param {String} AppVersion - appVersion. optional.
   * @param {String} Id - id. optional.
   * @param {Integer} OperateType - operateType. optional.
   */
  netDeviceDisconnectionService(params = {}, options = {}) {
    return this.request('NetDeviceDisconnectionService', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} AuthType - authType. optional.
   * @param {String} Language - language. optional.
   * @param {String} OsType - osType. optional.
   * @param {String} AppName - appName. optional.
   * @param {String} AppVersion - appVersion. optional.
   * @param {String} Id - id. optional.
   * @param {Integer} OperateType - operateType. optional.
   */
  netDeviceFreeze(params = {}, options = {}) {
    return this.request('NetDeviceFreeze', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} Language - language. optional.
   * @param {String} MobilePhone - mobilePhone. required.
   * @param {String} StateCode - stateCode. required.
   * @param {String} OsType - osType. required.
   * @param {String} SmsCode - smsCode. required.
   * @param {String} AppVersion - appVersion. required.
   * @param {String} DeviceId - deviceId. required.
   */
  oAAuthSMSCodeService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MobilePhone')) {
      throw new TypeError('parameter "MobilePhone" is required');
    }

    if (!hasOwnProperty(params, 'StateCode')) {
      throw new TypeError('parameter "StateCode" is required');
    }

    if (!hasOwnProperty(params, 'OsType')) {
      throw new TypeError('parameter "OsType" is required');
    }

    if (!hasOwnProperty(params, 'SmsCode')) {
      throw new TypeError('parameter "SmsCode" is required');
    }

    if (!hasOwnProperty(params, 'AppVersion')) {
      throw new TypeError('parameter "AppVersion" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    return this.request('OAAuthSMSCodeService', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} Language - language. optional.
   * @param {String} Umid - umid. required.
   * @param {String} OsType - osType. required.
   * @param {Long} Uid - uid. required.
   * @param {String} AppVersion - appVersion. required.
   * @param {String} Cid - cid. required.
   * @param {String} Sid - sid. required.
   */
  oAPCLogOutService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Umid')) {
      throw new TypeError('parameter "Umid" is required');
    }

    if (!hasOwnProperty(params, 'OsType')) {
      throw new TypeError('parameter "OsType" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'AppVersion')) {
      throw new TypeError('parameter "AppVersion" is required');
    }

    if (!hasOwnProperty(params, 'Cid')) {
      throw new TypeError('parameter "Cid" is required');
    }

    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    return this.request('OAPCLogOutService', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} Language - language. optional.
   * @param {String} Cid - cid. required.
   * @param {String} Rid - rid. required.
   * @param {String} Umid - umid. required.
   * @param {Long} Uid - uid. required.
   * @param {String} AppVersion - appVersion. required.
   */
  oARefreshService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Cid')) {
      throw new TypeError('parameter "Cid" is required');
    }

    if (!hasOwnProperty(params, 'Rid')) {
      throw new TypeError('parameter "Rid" is required');
    }

    if (!hasOwnProperty(params, 'Umid')) {
      throw new TypeError('parameter "Umid" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'AppVersion')) {
      throw new TypeError('parameter "AppVersion" is required');
    }

    return this.request('OARefreshService', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} Language - language. optional.
   * @param {String} MobilePhone - mobilePhone. required.
   * @param {String} StateCode - stateCode. required.
   * @param {String} OsType - osType. required.
   * @param {String} AppVersion - appVersion. required.
   * @param {String} DeviceId - deviceId. required.
   */
  oASendSMSService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MobilePhone')) {
      throw new TypeError('parameter "MobilePhone" is required');
    }

    if (!hasOwnProperty(params, 'StateCode')) {
      throw new TypeError('parameter "StateCode" is required');
    }

    if (!hasOwnProperty(params, 'OsType')) {
      throw new TypeError('parameter "OsType" is required');
    }

    if (!hasOwnProperty(params, 'AppVersion')) {
      throw new TypeError('parameter "AppVersion" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    return this.request('OASendSMSService', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} Language - language. optional.
   * @param {String} Mac - mac. optional.
   * @param {Integer} AuthType - netDeviceAuthType. optional.
   * @param {String} User - user. optional.
   * @param {String} NetworkType - networkType. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} Rows - rows. optional.
   * @param {Integer} Status - status. optional.
   * @param {Integer} MapStatus - mapStatus. optional.
   * @param {String} OsType - osType. optional.
   * @param {String} SerialNo - serialNo. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {String} Umid - umid. optional.
   */
  pageFindByDTO(params = {}, options = {}) {
    return this.request('PageFindByDTO', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} Language - language. optional.
   * @param {String} User - user. optional.
   * @param {Integer} MapStatus - status. optional.
   * @param {String} OsType - osType. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {String} Umid - umid. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} Rows - rows. optional.
   */
  pageFindDto(params = {}, options = {}) {
    return this.request('PageFindDto', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} Language - language. optional.
   * @param {String} Mac - mac. optional.
   * @param {Integer} AuthType - netDeviceAuthType. optional.
   * @param {String} User - user. optional.
   * @param {String} NetworkType - networkType. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} Rows - rows. optional.
   * @param {Integer} Status - status. optional.
   * @param {Integer} MapStatus - mapStatus. optional.
   * @param {String} OsType - osType. optional.
   * @param {String} SerialNo - serialNo. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {String} Umid - umid. optional.
   */
  pageFindNetDeviceByDTO(params = {}, options = {}) {
    return this.request('PageFindNetDeviceByDTO', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} Language - language. optional.
   * @param {String} User - user. optional.
   * @param {Integer} MapStatus - status. optional.
   * @param {String} OsType - osType. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {String} Umid - umid. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} Rows - rows. optional.
   */
  pageFindTrustDeviceByDTO(params = {}, options = {}) {
    return this.request('PageFindTrustDeviceByDTO', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} TraceId - traceId. optional.
   * @param {String} ProduceParameter - produceParameter. optional.
   */
  produceInstance(params = {}, options = {}) {
    return this.request('ProduceInstance', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
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
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} TraceId - traceId. optional.
   * @param {String} SpMsg - spMsg. optional.
   */
  resumeInstance(params = {}, options = {}) {
    return this.request('ResumeInstance', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} Language - language. optional.
   * @param {Long} Id - id. optional.
   * @param {Long} CommandId - commandId. optional.
   * @param {String} CommandName - commandName. optional.
   * @param {String} TaskName - taskName. optional.
   * @param {String} Mark - mark. optional.
   * @param {Integer} Priority - priority. optional.
   * @param {String} Expiredate - expiredate. optional.
   * @param {Integer} SupportType - supportType. optional.
   * @param {Integer} Type - type. optional.
   * @param {String} ExcludesList - excludesList. optional.
   * @param {String} PushList - pushList. optional.
   * @param {String} PushUmidList - pushUmidList. optional.
   */
  saveOrUpdateCommandTaskByCidAndId(params = {}, options = {}) {
    return this.request('SaveOrUpdateCommandTaskByCidAndId', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} Language - language. optional.
   * @param {Long} Id - id. optional.
   * @param {String} Type - type. required.
   * @param {String} CommandName - commandName. required.
   * @param {Integer} SupportType - supportType. required.
   * @param {String} Content - content. optional.
   * @param {String} Remark - remark. optional.
   */
  saveOrUpdateOpenAgentCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'CommandName')) {
      throw new TypeError('parameter "CommandName" is required');
    }

    if (!hasOwnProperty(params, 'SupportType')) {
      throw new TypeError('parameter "SupportType" is required');
    }

    return this.request('SaveOrUpdateOpenAgentCommand', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} AuthType - authType. optional.
   * @param {String} Language - language. optional.
   * @param {String} OsType - osType. optional.
   * @param {String} AppName - appName. optional.
   * @param {String} AppVersion - appVersion. optional.
   * @param {String} Ids - ids. optional.
   * @param {Integer} NetDeviceAuthType - netDeviceAuthType. optional.
   */
  setAuthType(params = {}, options = {}) {
    return this.request('SetAuthType', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} SysFrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {Boolean} Flag - flag. optional.
   * @param {String} AuthType - authType. optional. default: AD.
   */
  setIPSegmentStatus(params = {}, options = {}) {
    return this.request('SetIPSegmentStatus', params, options);
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
   * @param {String} GuestUserId - guestUserId. optional.
   * @param {String} MSG - msg. optional.
   * @param {Integer} ShareVersion - version. optional.
   * @param {String} SignatureType - signatureType. required.
   * @param {String} AuthType - authType. optional.
   * @param {String} AppKey - appKey. optional.
   * @param {String} OsType - osType. optional.
   * @param {String} AppVersion - appVersion. optional.
   * @param {String} LocalIP - localIP. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   */
  shareV2SendMessageUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SignatureType')) {
      throw new TypeError('parameter "SignatureType" is required');
    }

    return this.request('ShareV2SendMessageUrl', params, options);
  }

  /**
   * @param {String} SessionId - sessionId. optional.
   * @param {String} ScreenCode - screenCode. optional.
   * @param {String} MqEnable - mqenable. optional.
   * @param {Integer} ShareVersion - version. optional.
   * @param {String} SignatureType - signatureType. required.
   * @param {String} AuthType - authType. optional.
   * @param {String} AppKey - appKey. optional.
   * @param {String} OsType - osType. optional.
   * @param {String} AppVersion - appVersion. optional.
   * @param {String} LocalIP - localIP. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   */
  shareV2SenderRegister(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SignatureType')) {
      throw new TypeError('parameter "SignatureType" is required');
    }

    return this.request('ShareV2SenderRegister', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} Language - language. optional.
   * @param {String} SoftwareInfojson - softwareInfojson. required.
   * @param {String} Umid - umid. required.
   * @param {Long} Uid - uid. required.
   * @param {String} Cid - cid. required.
   */
  softwareDataCollection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SoftwareInfojson')) {
      throw new TypeError('parameter "SoftwareInfojson" is required');
    }

    if (!hasOwnProperty(params, 'Umid')) {
      throw new TypeError('parameter "Umid" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Cid')) {
      throw new TypeError('parameter "Cid" is required');
    }

    return this.request('SoftwareDataCollection', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} AuthType - authType. required.
   * @param {String} Language - language. optional.
   * @param {String} OsType - osType. required.
   * @param {String} AppName - appName. required.
   * @param {String} AppVersion - appVersion. required.
   * @param {String} Umid - umid. required.
   * @param {Long} Uid - uid. required.
   * @param {String} Cid - cid. required.
   * @param {String} TokenKey - tokenKey. required.
   * @param {String} EncryptData - encryptData. required.
   */
  syncOTP(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AuthType')) {
      throw new TypeError('parameter "AuthType" is required');
    }

    if (!hasOwnProperty(params, 'OsType')) {
      throw new TypeError('parameter "OsType" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'AppVersion')) {
      throw new TypeError('parameter "AppVersion" is required');
    }

    if (!hasOwnProperty(params, 'Umid')) {
      throw new TypeError('parameter "Umid" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Cid')) {
      throw new TypeError('parameter "Cid" is required');
    }

    if (!hasOwnProperty(params, 'TokenKey')) {
      throw new TypeError('parameter "TokenKey" is required');
    }

    if (!hasOwnProperty(params, 'EncryptData')) {
      throw new TypeError('parameter "EncryptData" is required');
    }

    return this.request('SyncOTP', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} AuthType - authType. required.
   * @param {String} Language - language. optional.
   * @param {String} OsType - osType. required.
   * @param {String} AppName - appName. required.
   * @param {String} AppVersion - appVersion. required.
   * @param {String} Umid - umid. required.
   * @param {Long} Uid - uid. required.
   * @param {String} Cid - cid. required.
   * @param {String} QueryUmid - queryUmid. required.
   */
  trustDeviceDeleteClient(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AuthType')) {
      throw new TypeError('parameter "AuthType" is required');
    }

    if (!hasOwnProperty(params, 'OsType')) {
      throw new TypeError('parameter "OsType" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'AppVersion')) {
      throw new TypeError('parameter "AppVersion" is required');
    }

    if (!hasOwnProperty(params, 'Umid')) {
      throw new TypeError('parameter "Umid" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Cid')) {
      throw new TypeError('parameter "Cid" is required');
    }

    if (!hasOwnProperty(params, 'QueryUmid')) {
      throw new TypeError('parameter "QueryUmid" is required');
    }

    return this.request('TrustDeviceDeleteClient', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Id - id. optional.
   * @param {String} Umid - umid. required.
   */
  trustDeviceDeteleService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Umid')) {
      throw new TypeError('parameter "Umid" is required');
    }

    return this.request('TrustDeviceDeteleService', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} AuthType - authType. required.
   * @param {String} Language - language. optional.
   * @param {String} OsType - osType. required.
   * @param {String} AppName - appName. required.
   * @param {String} AppVersion - appVersion. required.
   * @param {String} Umid - umid. required.
   * @param {Long} Uid - uid. required.
   * @param {String} Cid - cid. required.
   * @param {String} QueryUmid - queryUmid. required.
   * @param {Integer} OperateType - operateType. required.
   */
  trustDeviceLostClient(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AuthType')) {
      throw new TypeError('parameter "AuthType" is required');
    }

    if (!hasOwnProperty(params, 'OsType')) {
      throw new TypeError('parameter "OsType" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'AppVersion')) {
      throw new TypeError('parameter "AppVersion" is required');
    }

    if (!hasOwnProperty(params, 'Umid')) {
      throw new TypeError('parameter "Umid" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Cid')) {
      throw new TypeError('parameter "Cid" is required');
    }

    if (!hasOwnProperty(params, 'QueryUmid')) {
      throw new TypeError('parameter "QueryUmid" is required');
    }

    if (!hasOwnProperty(params, 'OperateType')) {
      throw new TypeError('parameter "OperateType" is required');
    }

    return this.request('TrustDeviceLostClient', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} AuthType - authType. optional.
   * @param {String} Language - language. optional.
   * @param {String} OsType - osType. optional.
   * @param {String} AppName - appName. optional.
   * @param {String} AppVersion - appVersion. optional.
   * @param {String} Ids - ids. optional.
   * @param {Integer} OperateType - operateType. optional.
   */
  trustDeviceOperate(params = {}, options = {}) {
    return this.request('TrustDeviceOperate', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} AuthType - authType. required.
   * @param {String} Language - language. optional.
   * @param {String} OsType - osType. required.
   * @param {String} AppName - appName. required.
   * @param {String} AppVersion - appVersion. required.
   * @param {Long} Uid - uid. required.
   * @param {String} Cid - cid. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} DeviceId - deviceId. required.
   * @param {String} Macs - macs. optional.
   * @param {String} SerialNo - serialNo. optional.
   * @param {String} Utdid - utdid. optional.
   * @param {String} DeviceUmid - deviceUmid. optional.
   * @param {String} ClientIp - clientIp. optional.
   * @param {String} Rtid - rtid. optional.
   */
  trustDeviceRegisterClient(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AuthType')) {
      throw new TypeError('parameter "AuthType" is required');
    }

    if (!hasOwnProperty(params, 'OsType')) {
      throw new TypeError('parameter "OsType" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'AppVersion')) {
      throw new TypeError('parameter "AppVersion" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Cid')) {
      throw new TypeError('parameter "Cid" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    return this.request('TrustDeviceRegisterClient', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Sid - sid. optional.
   * @param {String} AuthType - authType. optional.
   * @param {String} Language - language. optional.
   * @param {String} OsType - osType. optional.
   * @param {String} AppName - appName. optional.
   * @param {String} AppVersion - appVersion. optional.
   * @param {String} WifiSsid - wifiSsid. optional.
   * @param {Integer} NetworkAuthType - networkAuthType. optional.
   */
  upateOpenNacByIdAndCid(params = {}, options = {}) {
    return this.request('UpateOpenNacByIdAndCid', params, options);
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
   * @param {Integer} GuestFlag - guestflag. optional.
   * @param {String} Memo - memo. optional.
   * @param {String} AuthType - authType. optional. default: AD.
   */
  updateIPSegment(params = {}, options = {}) {
    return this.request('UpdateIPSegment', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. required.
   * @param {String} CallerParentId - cid. optional.
   * @param {Long} Id - id. optional.
   * @param {String} NickPinyin - nickPinyin. optional.
   * @param {String} Gender - gender. optional.
   * @param {String} AdAccount - adAccount. optional.
   * @param {String} Nick - nick. optional.
   * @param {String} MobilePhone - mobilePhone. optional.
   * @param {Integer} Status - status. optional.
   * @param {String} StateCode - stateCode. optional.
   * @param {String} AdDomain - adDomain. optional.
   * @param {String} Email - email. optional.
   */
  updateOpenUserByDTO(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessKeyId')) {
      throw new TypeError('parameter "AccessKeyId" is required');
    }

    return this.request('UpdateOpenUserByDTO', params, options);
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ClientCID - cid. required.
   * @param {String} Language - language. optional.
   * @param {String} CurVer - curVer. required.
   * @param {String} OsType - osType. required.
   * @param {String} AppName - appName. required.
   * @param {String} SerialNo - serialNo. required.
   */
  upgradeService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientCID')) {
      throw new TypeError('parameter "ClientCID" is required');
    }

    if (!hasOwnProperty(params, 'CurVer')) {
      throw new TypeError('parameter "CurVer" is required');
    }

    if (!hasOwnProperty(params, 'OsType')) {
      throw new TypeError('parameter "OsType" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'SerialNo')) {
      throw new TypeError('parameter "SerialNo" is required');
    }

    return this.request('UpgradeService', params, options);
  }

}

module.exports = Client;

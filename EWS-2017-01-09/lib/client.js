
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-01-09';
    super(config);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} AppUid - appUid. required.
   */
  accessDomainList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AccessDomainList', params, options);
  }

  /**
   * @param {String} AppId - appId. required.
   * @param {String} Command - command. required.
   * @param {Json} Param - param. required.
   */
  appCommandExec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'Command')) {
      throw new TypeError('parameter "Command" is required');
    }

    if (!hasOwnProperty(params, 'Param')) {
      throw new TypeError('parameter "Param" is required');
    }

    return this.request('AppCommandExec', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {String} Region - region. required.
   * @param {String} Identifier - identifier. required.
   * @param {String} AppName - appName. required.
   * @param {String} Domain - domain. required.
   * @param {String} Language - language. required.
   * @param {String} Bid - bid. required.
   * @param {Integer} MemMB - memMB. required.
   * @param {Integer} DiskGB - diskGB. required.
   */
  appCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Language')) {
      throw new TypeError('parameter "Language" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'MemMB')) {
      throw new TypeError('parameter "MemMB" is required');
    }

    if (!hasOwnProperty(params, 'DiskGB')) {
      throw new TypeError('parameter "DiskGB" is required');
    }

    return this.request('AppCreate', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} AppUid - appUid. required.
   */
  appDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppDelete', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} AppUid - appUid. required.
   */
  appDeploy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppDeploy', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} AppUid - appUid. required.
   */
  appDisable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppDisable', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} AppUid - appUid. required.
   */
  appEnable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppEnable', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} FeatureName - featureName. required.
   * @param {String} Value - value. required.
   * @param {String} AppUid - appUid. required.
   */
  appFeatureDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'FeatureName')) {
      throw new TypeError('parameter "FeatureName" is required');
    }

    if (!hasOwnProperty(params, 'Value')) {
      throw new TypeError('parameter "Value" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppFeatureDelete', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} FeatureName - featureName. required.
   * @param {String} AppUid - appUid. required.
   */
  appFeatureQuery(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'FeatureName')) {
      throw new TypeError('parameter "FeatureName" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppFeatureQuery', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} FeatureName - featureName. required.
   * @param {String} Value - value. required.
   * @param {String} AppUid - appUid. required.
   */
  appFeatureUpdate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'FeatureName')) {
      throw new TypeError('parameter "FeatureName" is required');
    }

    if (!hasOwnProperty(params, 'Value')) {
      throw new TypeError('parameter "Value" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppFeatureUpdate', params, options);
  }

  /**
   * @param {String} FeatureName - featureName. required.
   */
  appFeatureValueScopeQuery(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FeatureName')) {
      throw new TypeError('parameter "FeatureName" is required');
    }

    return this.request('AppFeatureValueScopeQuery', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} Path - path. required.
   * @param {String} AppUid - appUid. required.
   */
  appFileDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'Path')) {
      throw new TypeError('parameter "Path" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppFileDelete', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} AppUid - appUid. required.
   */
  appGetAction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppGetAction', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} AppUid - appUid. required.
   */
  appRestart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppRestart', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {Integer} InstanceMemMB - instanceMemMB. required.
   * @param {Integer} InstanceDiskGB - instanceDiskGB. required.
   * @param {Integer} InstanceIncreased - instanceIncreased. required.
   * @param {String} AppUid - appUid. required.
   */
  appScaleOut(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceMemMB')) {
      throw new TypeError('parameter "InstanceMemMB" is required');
    }

    if (!hasOwnProperty(params, 'InstanceDiskGB')) {
      throw new TypeError('parameter "InstanceDiskGB" is required');
    }

    if (!hasOwnProperty(params, 'InstanceIncreased')) {
      throw new TypeError('parameter "InstanceIncreased" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppScaleOut', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {Integer} TargetMemMB - targetMemMB. required.
   * @param {Integer} TargetDiskGB - targetDiskGB. required.
   * @param {String} AppUid - appUid. required.
   */
  appScaleUp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'TargetMemMB')) {
      throw new TypeError('parameter "TargetMemMB" is required');
    }

    if (!hasOwnProperty(params, 'TargetDiskGB')) {
      throw new TypeError('parameter "TargetDiskGB" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppScaleUp', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} AppUid - appUid. required.
   */
  appStart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppStart', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} AppUid - appUid. required.
   */
  appStop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppStop', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {Boolean} IsOverdue - isOverdue. required.
   * @param {Boolean} IsDegraded - isDegraded. required.
   * @param {Boolean} IsPuppet - isPuppet. required.
   * @param {Boolean} IsAttacked - isAttacked. required.
   * @param {String} AppUid - appUid. required.
   */
  appUpdateDeniedInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'IsOverdue')) {
      throw new TypeError('parameter "IsOverdue" is required');
    }

    if (!hasOwnProperty(params, 'IsDegraded')) {
      throw new TypeError('parameter "IsDegraded" is required');
    }

    if (!hasOwnProperty(params, 'IsPuppet')) {
      throw new TypeError('parameter "IsPuppet" is required');
    }

    if (!hasOwnProperty(params, 'IsAttacked')) {
      throw new TypeError('parameter "IsAttacked" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppUpdateDeniedInfo', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {String} BId - bid. optional. default: ace4eweb.
   */
  checkAppCreatePrivilege(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('CheckAppCreatePrivilege', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} AppUid - appUid. required.
   */
  checkAppState(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('CheckAppState', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} AppUid - appUid. required.
   */
  countAppInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('CountAppInstances', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {String} BId - bid. optional. default: ace4eweb.
   */
  countAppsByBId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('CountAppsByBId', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {String} AppId - appId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {String} AppUid - appUid. required.
   */
  describeAppLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('DescribeAppLogs', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} AppUid - appUid. required.
   */
  domainBeianIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('DomainBeianIp', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} OutterDomain - outterDomain. required.
   * @param {String} AppUid - appUid. required.
   */
  domainBind(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'OutterDomain')) {
      throw new TypeError('parameter "OutterDomain" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('DomainBind', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} OutterDomain - outterDomain. required.
   * @param {String} AppUid - appUid. required.
   */
  domainCheck(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'OutterDomain')) {
      throw new TypeError('parameter "OutterDomain" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('DomainCheck', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {String} Domain - domain. required.
   */
  domainGetOwner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('DomainGetOwner', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} OutterDomain - outterDomain. required.
   * @param {String} AppUid - appUid. required.
   */
  domainIsForceHttps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'OutterDomain')) {
      throw new TypeError('parameter "OutterDomain" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('DomainIsForceHttps', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} OutterDomain - outterDomain. required.
   * @param {String} AppUid - appUid. required.
   */
  domainIsHttps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'OutterDomain')) {
      throw new TypeError('parameter "OutterDomain" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('DomainIsHttps', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} AppUid - appUid. required.
   */
  domainList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('DomainList', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} OutterDomain - outterDomain. required.
   * @param {String} AppUid - appUid. required.
   * @param {String} CertId - certId. required.
   * @param {Boolean} ForceHttps - forceHttps. required.
   */
  domainStopHttps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'OutterDomain')) {
      throw new TypeError('parameter "OutterDomain" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    if (!hasOwnProperty(params, 'CertId')) {
      throw new TypeError('parameter "CertId" is required');
    }

    if (!hasOwnProperty(params, 'ForceHttps')) {
      throw new TypeError('parameter "ForceHttps" is required');
    }

    return this.request('DomainStopHttps', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} OutterDomain - outterDomain. required.
   * @param {String} AppUid - appUid. required.
   */
  domainUnbind(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'OutterDomain')) {
      throw new TypeError('parameter "OutterDomain" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('DomainUnbind', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} NewPassword - newPassword. required.
   * @param {String} AppUid - appUid. required.
   */
  ftpChangePassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'NewPassword')) {
      throw new TypeError('parameter "NewPassword" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('FtpChangePassword', params, options);
  }

  /**
   * @param {Long} AliUid - aliUid. required.
   * @param {Long} AppId - appId. required.
   * @param {String} VmInnerIp - vmInnerIp. required.
   * @param {String} VmIp - vmIp. required.
   * @param {String} VmUser - vmUser. required.
   * @param {String} AppUid - appUid. required.
   */
  ftpCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'VmInnerIp')) {
      throw new TypeError('parameter "VmInnerIp" is required');
    }

    if (!hasOwnProperty(params, 'VmIp')) {
      throw new TypeError('parameter "VmIp" is required');
    }

    if (!hasOwnProperty(params, 'VmUser')) {
      throw new TypeError('parameter "VmUser" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('FtpCreate', params, options);
  }

  /**
   * @param {Long} AliUid - aliUid. required.
   * @param {Long} AppId - appId. required.
   * @param {String} AppUid - appUid. required.
   */
  ftpDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('FtpDelete', params, options);
  }

  /**
   * @param {Long} AliUid - aliUid. required.
   * @param {Long} AppId - appId. required.
   * @param {String} AppUid - appUid. required.
   */
  ftpDisable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('FtpDisable', params, options);
  }

  /**
   * @param {Long} AliUid - aliUid. required.
   * @param {Long} AppId - appId. required.
   * @param {String} AppUid - appUid. required.
   */
  ftpEnable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('FtpEnable', params, options);
  }

  /**
   * @param {Long} AliUid - aliUid. required.
   * @param {Long} AppId - appId. required.
   * @param {String} AppUid - appUid. required.
   */
  ftpQuery(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('FtpQuery', params, options);
  }

  /**
   * @param {String} Keywords - domain. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  getAppAccessLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Keywords')) {
      throw new TypeError('parameter "Keywords" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('GetAppAccessLog', params, options);
  }

  /**
   * @param {Long} AppUserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} AppUid - appUid. required.
   */
  getAppInfoByAppId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppUserId')) {
      throw new TypeError('parameter "AppUserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('GetAppInfoByAppId', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {String} BId - bid. optional. default: ace4eweb.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageNo - pageNo. required.
   */
  getAppInfoByBid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    return this.request('GetAppInfoByBid', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} AppUid - appUid. required.
   */
  getAppInstanceIdList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('GetAppInstanceIdList', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} AppUid - appUid. required.
   */
  getAppInstanceInfoById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('GetAppInstanceInfoById', params, options);
  }

  /**
   * @param {String} AppId - appId. required.
   * @param {String} Entry - entry. required.
   * @param {String} Period - period. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} AppUid - appUid. required.
   * @param {Long} UserId - userId. required.
   */
  getAppMonitorData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'Entry')) {
      throw new TypeError('parameter "Entry" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('GetAppMonitorData', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {String} AppId - appId. required.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} LogType - logType. required.
   * @param {String} Keywords - keywords. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageNo - pageNo. required.
   * @param {String} AppUid - appUid. required.
   */
  getAppRuntimeLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'LogType')) {
      throw new TypeError('parameter "LogType" is required');
    }

    if (!hasOwnProperty(params, 'Keywords')) {
      throw new TypeError('parameter "Keywords" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('GetAppRuntimeLog', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} AppUid - appUid. required.
   */
  getDiskInfoByAppId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('GetDiskInfoByAppId', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} AppUid - appUid. required.
   */
  getFtpInfoByAppId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('GetFtpInfoByAppId', params, options);
  }

  /**
   * @param {Long} AppId - appId. required.
   * @param {String} AppUid - appUid. required.
   */
  getIndexInfoByAppId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('GetIndexInfoByAppId', params, options);
  }

  /**
   * @param {String} InstanceUid - instanceUid. required.
   * @param {String} Entry - entry. required.
   * @param {String} Period - period. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  getInstanceMonitorData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceUid')) {
      throw new TypeError('parameter "InstanceUid" is required');
    }

    if (!hasOwnProperty(params, 'Entry')) {
      throw new TypeError('parameter "Entry" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('GetInstanceMonitorData', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {String} BId - bid. optional. default: ace4eweb.
   */
  getUserAppMaxNum(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('GetUserAppMaxNum', params, options);
  }

}

module.exports = Client;

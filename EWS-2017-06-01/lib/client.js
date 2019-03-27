
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-06-01';
    super(config);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} AppUid - appUid. required.
   */
  accessDomainList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AccessDomainList', params, options);
  }

  /**
   * @param {String} AppId - appId. optional.
   * @param {String} AppUid - appUid. required.
   * @param {Long} UserId - userId. optional.
   * @param {String} Command - command. required.
   * @param {Json} Param - param. required.
   */
  appCommandExec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
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
   * @param {Long} Id - id. required.
   * @param {String} UserId - userId. required.
   * @param {String} Title - title. required.
   * @param {String} Identifier - identifier. required.
   * @param {String} DomainPrefix - domainPrefix. required.
   * @param {Long} GmtCreate - gmtCreate. optional.
   * @param {Long} GmtModified - gmtModified. optional.
   * @param {String} Status - status. optional.
   * @param {String} AppAction - appAction. optional.
   * @param {String} HaLevel - haLevel. optional.
   * @param {String} LanguageType - LanguageType. optional.
   * @param {String} AppType - appType. optional.
   * @param {String} RunType - runType. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} SecurityDomain - securityDomain. optional.
   * @param {Boolean} IsMigrate - isMigrate. optional.
   * @param {String} AppUsage - appUsage. optional.
   * @param {Boolean} IsDegrade - isDegrade. optional.
   * @param {Boolean} IsOverdue - isOverdue. optional.
   * @param {Boolean} IsAttacked - isAttacked. optional.
   * @param {Boolean} IsPuppet - isPuppet. optional.
   * @param {String} Specification - specification. optional.
   * @param {Long} DisableTime - disableTime. optional.
   * @param {Integer} MemMB - memMB. optional.
   * @param {Integer} DiskGB - diskGB. optional.
   * @param {String} Site - site. optional.
   */
  appCopy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'Title')) {
      throw new TypeError('parameter "Title" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    if (!hasOwnProperty(params, 'DomainPrefix')) {
      throw new TypeError('parameter "DomainPrefix" is required');
    }

    return this.request('AppCopy', params, options);
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
   * @param {String} Specification - specification. optional.
   * @param {String} Site - site. optional.
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
   * @param {Long} AppId - appId. optional.
   * @param {String} AppUid - appUid. required.
   */
  appDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppDelete', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. optional.
   * @param {String} AppUid - appUid. required.
   */
  appDeploy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppDeploy', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. optional.
   * @param {String} AppUid - appUid. required.
   */
  appDisable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppDisable', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. optional.
   * @param {String} AppUid - appUid. required.
   */
  appEnable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppEnable', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} FeatureName - featureName. required.
   * @param {String} Value - value. required.
   * @param {String} AppUid - appUid. required.
   */
  appFeatureDelete(params = {}, options = {}) {
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
   * @param {Long} UserId - userId. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} FeatureName - featureName. required.
   * @param {String} AppUid - appUid. required.
   */
  appFeatureQuery(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FeatureName')) {
      throw new TypeError('parameter "FeatureName" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppFeatureQuery', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} FeatureName - featureName. required.
   * @param {String} Value - value. required.
   * @param {String} AppUid - appUid. required.
   */
  appFeatureUpdate(params = {}, options = {}) {
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
   * @param {Long} UserId - userId. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} Path - path. required.
   * @param {String} AppUid - appUid. required.
   */
  appFileDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Path')) {
      throw new TypeError('parameter "Path" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppFileDelete', params, options);
  }

  /**
   * @param {Long} AppId - appId. optional.
   * @param {Long} UserId - userId. required.
   * @param {String} Ip - ip. required.
   * @param {String} ServerUser - serverUser. required.
   * @param {String} AppUid - appUid. required.
   */
  appFilesCopy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'ServerUser')) {
      throw new TypeError('parameter "ServerUser" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppFilesCopy', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. optional.
   * @param {String} AppUid - appUid. required.
   */
  appGetAction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppGetAction', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. optional.
   * @param {String} AppUid - appUid. required.
   */
  appRestart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppRestart', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. optional.
   * @param {Integer} InstanceMemMB - instanceMemMB. required.
   * @param {Integer} InstanceDiskGB - instanceDiskGB. required.
   * @param {Integer} InstanceIncreased - instanceIncreased. required.
   * @param {String} AppUid - appUid. required.
   */
  appScaleOut(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
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
   * @param {Long} AppId - appId. optional.
   * @param {Integer} TargetMemMB - targetMemMB. required.
   * @param {Integer} TargetDiskGB - targetDiskGB. required.
   * @param {String} AppUid - appUid. required.
   */
  appScaleUp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
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
   * @param {Long} AppId - appId. optional.
   * @param {String} AppUid - appUid. required.
   */
  appStart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppStart', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. optional.
   * @param {String} AppUid - appUid. required.
   */
  appStop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppStop', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. optional.
   * @param {Boolean} IsOverdue - isOverdue. optional.
   * @param {Boolean} IsDegraded - isDegraded. optional.
   * @param {Boolean} IsPuppet - isPuppet. optional.
   * @param {Boolean} IsAttacked - isAttacked. optional.
   * @param {String} AppUid - appUid. required.
   */
  appUpdateDeniedInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppUpdateDeniedInfo', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {String} Name - name. required.
   * @param {String} AppUid - appUid. required.
   */
  appUpdateName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('AppUpdateName', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. optional.
   * @param {String} AppUid - appUid. required.
   */
  checkAppState(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('CheckAppState', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {String} data - data. required.
   */
  completeOrderParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CompleteOrderParam', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. optional.
   * @param {String} AppUid - appUid. required.
   */
  countAppInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
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
   * @param {String} AppId - appId. optional.
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

    return this.request('DoCheckResource', params, options);
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

    return this.request('DoLogicalDeleteResource', params, options);
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

    return this.request('DoPhysicalDeleteResource', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} OutterDomain - outterDomain. required.
   * @param {String} AppUid - appUid. required.
   */
  domainBind(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OutterDomain')) {
      throw new TypeError('parameter "OutterDomain" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('DomainBind', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} OutterDomain - outterDomain. required.
   * @param {String} AppUid - appUid. required.
   */
  domainCheck(params = {}, options = {}) {
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
   * @param {Long} AppId - appId. optional.
   * @param {String} OutterDomain - outterDomain. required.
   * @param {String} AppUid - appUid. required.
   */
  domainGetCertInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OutterDomain')) {
      throw new TypeError('parameter "OutterDomain" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('DomainGetCertInfo', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   */
  domainGetCertList(params = {}, options = {}) {
    return this.request('DomainGetCertList', params, options);
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
   * @param {Long} UserId - userId. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} OutterDomain - outterDomain. required.
   * @param {String} AppUid - appUid. required.
   */
  domainIsForceHttps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OutterDomain')) {
      throw new TypeError('parameter "OutterDomain" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('DomainIsForceHttps', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} OutterDomain - outterDomain. required.
   * @param {String} AppUid - appUid. required.
   */
  domainIsHttps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OutterDomain')) {
      throw new TypeError('parameter "OutterDomain" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('DomainIsHttps', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} AppUid - appUid. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   */
  domainList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('DomainList', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} OutterDomain - outterDomain. required.
   * @param {String} AppUid - appUid. required.
   */
  domainStopHttps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OutterDomain')) {
      throw new TypeError('parameter "OutterDomain" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('DomainStopHttps', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} OutterDomain - outterDomain. required.
   * @param {String} AppUid - appUid. required.
   */
  domainUnbind(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OutterDomain')) {
      throw new TypeError('parameter "OutterDomain" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('DomainUnbind', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} OutterDomain - outterDomain. required.
   * @param {String} AppUid - appUid. required.
   * @param {String} CertId - certId. required.
   * @param {Boolean} ForceHttps - forceHttps. required.
   */
  domainUpdateHttpsProp(params = {}, options = {}) {
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

    return this.request('DomainUpdateHttpsProp', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} NewPassword - newPassword. required.
   * @param {String} AppUid - appUid. required.
   */
  ftpChangePassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NewPassword')) {
      throw new TypeError('parameter "NewPassword" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('FtpChangePassword', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} NewPassword - newPassword. required.
   * @param {String} AppUid - appUid. required.
   */
  ftpChangePasswordWithEncrypt(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NewPassword')) {
      throw new TypeError('parameter "NewPassword" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('FtpChangePasswordWithEncrypt', params, options);
  }

  /**
   * @param {Long} AliUid - aliUid. optional.
   * @param {Long} UserId - userId. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} VmInnerIp - vmInnerIp. required.
   * @param {String} VmIp - vmIp. required.
   * @param {String} VmUser - vmUser. required.
   * @param {String} AppUid - appUid. required.
   */
  ftpCreate(params = {}, options = {}) {
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
   * @param {Long} AliUid - aliUid. optional.
   * @param {Long} UserId - userId. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} AppUid - appUid. required.
   */
  ftpDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('FtpDelete', params, options);
  }

  /**
   * @param {Long} AliUid - aliUid. optional.
   * @param {Long} UserId - userId. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} AppUid - appUid. required.
   */
  ftpDisable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('FtpDisable', params, options);
  }

  /**
   * @param {Long} AliUid - aliUid. optional.
   * @param {Long} UserId - userId. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} AppUid - appUid. required.
   */
  ftpEnable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('FtpEnable', params, options);
  }

  /**
   * @param {Long} AliUid - aliUid. optional.
   * @param {Long} UserId - userId. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} AppUid - appUid. required.
   */
  ftpQuery(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('FtpQuery', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {Long} UserId - userId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} AppUid - appUid. optional.
   */
  getAppAccessLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
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
   * @param {Long} UserId - userId. optional.
   * @param {String} AppUid - appUid. required.
   */
  getAppIdByAppUid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('GetAppIdByAppUid', params, options);
  }

  /**
   * @param {Long} AppUserId - userId. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} AppUid - appUid. required.
   */
  getAppInfoByAppId(params = {}, options = {}) {
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
   * @param {Long} UserId - userId. optional.
   * @param {String} AppUid - appUid. required.
   */
  getAppInnerDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('GetAppInnerDomain', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. optional.
   * @param {String} AppUid - appUid. required.
   */
  getAppInstanceIdList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('GetAppInstanceIdList', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. optional.
   * @param {String} AppUid - appUid. required.
   */
  getAppInstanceInfoById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('GetAppInstanceInfoById', params, options);
  }

  /**
   * @param {String} AppId - appId. optional.
   * @param {String} Entry - entry. required.
   * @param {String} Period - period. required.
   * @param {String} Statistics - statistics. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} AppUid - appUid. required.
   * @param {Long} UserId - userId. optional.
   */
  getAppMonitorData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Entry')) {
      throw new TypeError('parameter "Entry" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    if (!hasOwnProperty(params, 'Statistics')) {
      throw new TypeError('parameter "Statistics" is required');
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

    return this.request('GetAppMonitorData', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {String} AppId - appId. optional.
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
   * @param {Long} UserId - userId. optional.
   * @param {Long} AppId - appId. required.
   */
  getAppUidByAppId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('GetAppUidByAppId', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. optional.
   * @param {String} AppUid - appUid. required.
   */
  getDiskInfoByAppId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('GetDiskInfoByAppId', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} AppId - appId. optional.
   * @param {String} AppUid - appUid. required.
   */
  getFtpInfoByAppId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('GetFtpInfoByAppId', params, options);
  }

  /**
   * @param {String} InstanceUid - instanceUid. required.
   * @param {String} Entry - entry. required.
   * @param {String} Period - period. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} AppUid - appUid. optional.
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
   * @param {Long} UserId - userId. optional.
   */
  getOutterDomainList(params = {}, options = {}) {
    return this.request('GetOutterDomainList', params, options);
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

  /**
   * @param {Long} UserId - userId. required.
   */
  innerDoCheckResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('InnerDoCheckResource', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   */
  innerDoLogicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('InnerDoLogicalDeleteResource', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   */
  innerDoPhysicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('InnerDoPhysicalDeleteResource', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {String} data - data. required.
   */
  payOrderCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('PayOrderCallback', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {String} AppUid - appUid. required.
   * @param {Integer} Quota - quota. optional.
   */
  rdsCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('RdsCreate', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {String} AppUid - appUid. required.
   */
  rdsDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('RdsDelete', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {String} AppUid - appUid. required.
   */
  rdsDisable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('RdsDisable', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {String} AppUid - appUid. required.
   */
  rdsEnable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('RdsEnable', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {String} AppUid - appUid. required.
   * @param {String} NewPassword - newPassword. required.
   */
  rdsModifyPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    if (!hasOwnProperty(params, 'NewPassword')) {
      throw new TypeError('parameter "NewPassword" is required');
    }

    return this.request('RdsModifyPassword', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {String} AppUid - appUid. required.
   */
  rdsQuery(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppUid')) {
      throw new TypeError('parameter "AppUid" is required');
    }

    return this.request('RdsQuery', params, options);
  }

  /**
   * @param {Long} UserId - userId. optional.
   * @param {String} data - data. required.
   */
  verifyOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('VerifyOrder', params, options);
  }

}

module.exports = Client;

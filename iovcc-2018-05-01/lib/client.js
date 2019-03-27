
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-05-01';
    super(config);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} ObjectKey - objectKey. required.
   * @param {String} FileName - fileName. required.
   */
  addUploadedFunctionFileInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'ObjectKey')) {
      throw new TypeError('parameter "ObjectKey" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    return this.request('AddUploadedFunctionFileInfo', params, options);
  }

  /**
   * @param {String} DeviceIds - deviceIds. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionType - versionType. required.
   * @param {String} DeviceIdType - deviceIdType. required.
   * @param {String} VersionId - versionId. required.
   * @param {String} RegionId - regionId. required.
   */
  addVersionBlackDevices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceIds')) {
      throw new TypeError('parameter "DeviceIds" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionType')) {
      throw new TypeError('parameter "VersionType" is required');
    }

    if (!hasOwnProperty(params, 'DeviceIdType')) {
      throw new TypeError('parameter "DeviceIdType" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    return this.request('AddVersionBlackDevices', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} DeviceIdType - deviceIdType. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} DeviceIds - deviceIds. required.
   * @param {String} DeviceGroupId - deviceGroupId. required.
   */
  addVersionGroupDevices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceIdType')) {
      throw new TypeError('parameter "DeviceIdType" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceIds')) {
      throw new TypeError('parameter "DeviceIds" is required');
    }

    if (!hasOwnProperty(params, 'DeviceGroupId')) {
      throw new TypeError('parameter "DeviceGroupId" is required');
    }

    return this.request('AddVersionGroupDevices', params, options);
  }

  /**
   * @param {String} DeviceIds - deviceIds. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionType - versionType. required.
   * @param {String} DeviceIdType - deviceIdType. required.
   * @param {String} VersionId - versionId. required.
   * @param {String} RegionId - regionId. required.
   */
  addVersionWhiteDevices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceIds')) {
      throw new TypeError('parameter "DeviceIds" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionType')) {
      throw new TypeError('parameter "VersionType" is required');
    }

    if (!hasOwnProperty(params, 'DeviceIdType')) {
      throw new TypeError('parameter "DeviceIdType" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    return this.request('AddVersionWhiteDevices', params, options);
  }

  /**
   * @param {String} HardwareId - hardwareId. optional.
   * @param {Boolean} AllowCommandExtension - allowCommandExtension. optional.
   * @param {String} DeviceId - deviceId. optional.
   * @param {String} SerialNumber - serialNumber. optional.
   * @param {String} VIN - vin. optional.
   * @param {String} UUID - uuid. optional.
   * @param {String} ProjectId - projectId. optional.
   * @param {String} RegionId - regionId. optional.
   */
  connectAssistDevice(params = {}, options = {}) {
    return this.request('ConnectAssistDevice', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. optional.
   * @param {String} DeviceType - deviceType. optional.
   * @param {String} DeviceBrandId - deviceBrandId. optional.
   * @param {String} DeviceBrand - deviceBrand. optional.
   * @param {String} DeviceModelId - deviceModelId. optional.
   * @param {String} DeviceModel - deviceModel. optional.
   * @param {String} DeviceCountStatType - deviceCountStatType. optional.
   * @param {String} IsQueryNewRegistrationDevice - isQueryNewRegistrationDevice. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} IsQueryYearlyActivate - isQueryYearlyActivate. optional.
   */
  countActivatedOrNewRegistrationDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('CountActivatedOrNewRegistrationDevice', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} DeviceBrandId - deviceBrandId. optional.
   * @param {String} DeviceBrand - deviceBrand. optional.
   * @param {String} ProjectId - projectId. optional.
   */
  countDeviceBrands(params = {}, options = {}) {
    return this.request('CountDeviceBrands', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. optional.
   * @param {Integer} DeviceModelId - deviceModelId. optional.
   * @param {String} DeviceModel - deviceModel. optional.
   * @param {String} DeviceBrand - deviceBrand. optional.
   */
  countDeviceModels(params = {}, options = {}) {
    return this.request('CountDeviceModels', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. optional.
   * @param {Integer} DeviceModelId - deviceModelId. optional.
   * @param {String} DeviceModel - deviceModel. optional.
   * @param {String} RegionId - regionId. optional.
   */
  countDevices(params = {}, options = {}) {
    return this.request('CountDevices', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  countProjects(params = {}, options = {}) {
    return this.request('CountProjects', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  countYunIdInfo(params = {}, options = {}) {
    return this.request('CountYunIdInfo', params, options);
  }

  /**
   * @param {String} IsForceUpgrade - isForceUpgrade. optional.
   * @param {String} IsAllowNewInstall - isAllowNewInstall. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} AppId - appId. optional.
   * @param {String} AppVersion - version. optional.
   * @param {String} VersionCode - versionCode. optional.
   * @param {String} InstallType - installType. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} ReleaseNote - releaseNote. optional.
   * @param {String} IsSilentUpgrade - isSilentUpgrade. optional.
   * @param {String} PackageUrl - packageUrl. optional.
   * @param {String} IsNeedRestart - isNeedRestart. optional.
   * @param {String} BlackVersionList - blackVersionList. optional.
   * @param {String} WhiteVersionList - whiteVersionList. optional.
   * @param {String} RestartType - restartType. optional.
   * @param {String} RestartAppType - restartAppType. optional.
   * @param {String} RestartAppParam - restartAppParam. optional.
   * @param {String} DeviceAdapterList - deviceAdapterList. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ApkMd5 - apkMd5. optional.
   */
  createAppVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('CreateAppVersion', params, options);
  }

  /**
   * @param {String} VersionType - versionType. required.
   * @param {String} BlackWhiteType - blackWhiteType. required.
   * @param {String} Value - value. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} ValueCompareType - valueCompareType. required.
   * @param {String} Name - name. required.
   * @param {String} ValueType - valueType. required.
   * @param {String} VersionId - versionId. required.
   * @param {String} RegionId - regionId. required.
   */
  createCustomizedFilter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VersionType')) {
      throw new TypeError('parameter "VersionType" is required');
    }

    if (!hasOwnProperty(params, 'BlackWhiteType')) {
      throw new TypeError('parameter "BlackWhiteType" is required');
    }

    if (!hasOwnProperty(params, 'Value')) {
      throw new TypeError('parameter "Value" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'ValueCompareType')) {
      throw new TypeError('parameter "ValueCompareType" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ValueType')) {
      throw new TypeError('parameter "ValueType" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    return this.request('CreateCustomizedFilter', params, options);
  }

  /**
   * @param {String} VersionId - versionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Name - name. required.
   * @param {String} Value - value. required.
   * @param {String} VersionType - versionType. required.
   * @param {String} RegionId - regionId. required.
   */
  createCustomizedProperty(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Value')) {
      throw new TypeError('parameter "Value" is required');
    }

    if (!hasOwnProperty(params, 'VersionType')) {
      throw new TypeError('parameter "VersionType" is required');
    }

    return this.request('CreateCustomizedProperty', params, options);
  }

  /**
   * @param {String} ModelName - deviceModel. optional.
   * @param {String} ProjectId - projectId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} HardwareId - hardwareId. optional.
   */
  createDevice(params = {}, options = {}) {
    return this.request('CreateDevice', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. optional.
   * @param {String} BrandName - brandName. required.
   * @param {String} Manufacture - manufacture. optional.
   * @param {String} Description - description. optional.
   */
  createDeviceBrand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BrandName')) {
      throw new TypeError('parameter "BrandName" is required');
    }

    return this.request('CreateDeviceBrand', params, options);
  }

  /**
   * @param {String} InitUsageType - initUsageType. optional.
   * @param {String} CanCreateDeviceId - canCreateDeviceId. optional.
   * @param {String} ModelName - modelName. optional.
   * @param {String} HardwareType - hardwareType. optional.
   * @param {String} BrandName - brandName. optional.
   * @param {String} Description - description. optional.
   * @param {String} DeviceType - deviceType. optional.
   * @param {String} ProjectId - projectId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} SecurityChip - securityChip. optional.
   * @param {String} OsPlatform - osPlatform. optional.
   */
  createDeviceModel(params = {}, options = {}) {
    return this.request('CreateDeviceModel', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} AuthType - authType. required.
   * @param {String} Name - name. required.
   * @param {String} Desc - desc. required.
   */
  createNamespace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'AuthType')) {
      throw new TypeError('parameter "AuthType" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Desc')) {
      throw new TypeError('parameter "Desc" is required');
    }

    return this.request('CreateNamespace', params, options);
  }

  /**
   * @param {String} IsForceNightUpgrade - isForceNightUpgrade. required.
   * @param {String} MaxClientVersion - maxClientVersion. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} DeviceModelId - deviceModelId. required.
   * @param {String} SystemVersion - systemVersion. required.
   * @param {String} ReleaseNote - releaseNote. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} BlackVersionList - blackVersionList. optional.
   * @param {String} IsMilestone - isMilestone. required.
   * @param {String} MinClientVersion - minClientVersion. optional.
   * @param {String} WhiteVersionList - whiteVersionList. optional.
   * @param {String} IsForceUpgrade - isForceUpgrade. required.
   * @param {String} NightUpgradeDownloadType - nightUpgradeDownloadType. required.
   * @param {String} NightUpgradeIsShowTip - nightUpgradeIsShowTip. required.
   * @param {String} NightUpgradeIsAllowedCancel - nightUpgradeIsAllowedCancel. required.
   * @param {String} RomList - romList. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} EnableMobileDownload - enableMobileDownload. required.
   * @param {String} MobileDownloadMaxSize - mobileDownloadMaxSize. optional.
   */
  createOsVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IsForceNightUpgrade')) {
      throw new TypeError('parameter "IsForceNightUpgrade" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceModelId')) {
      throw new TypeError('parameter "DeviceModelId" is required');
    }

    if (!hasOwnProperty(params, 'SystemVersion')) {
      throw new TypeError('parameter "SystemVersion" is required');
    }

    if (!hasOwnProperty(params, 'IsMilestone')) {
      throw new TypeError('parameter "IsMilestone" is required');
    }

    if (!hasOwnProperty(params, 'IsForceUpgrade')) {
      throw new TypeError('parameter "IsForceUpgrade" is required');
    }

    if (!hasOwnProperty(params, 'NightUpgradeDownloadType')) {
      throw new TypeError('parameter "NightUpgradeDownloadType" is required');
    }

    if (!hasOwnProperty(params, 'NightUpgradeIsShowTip')) {
      throw new TypeError('parameter "NightUpgradeIsShowTip" is required');
    }

    if (!hasOwnProperty(params, 'NightUpgradeIsAllowedCancel')) {
      throw new TypeError('parameter "NightUpgradeIsAllowedCancel" is required');
    }

    if (!hasOwnProperty(params, 'RomList')) {
      throw new TypeError('parameter "RomList" is required');
    }

    if (!hasOwnProperty(params, 'EnableMobileDownload')) {
      throw new TypeError('parameter "EnableMobileDownload" is required');
    }

    return this.request('CreateOsVersion', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} ProjectDesc - projectDesc. required.
   * @param {String} RegionId - regionId. optional.
   */
  createProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'ProjectDesc')) {
      throw new TypeError('parameter "ProjectDesc" is required');
    }

    return this.request('CreateProject', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} AppName - appName. required.
   * @param {String} AppPkgName - appPkgName. required.
   * @param {Integer} OsType - osType. required.
   */
  createProjectApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'AppPkgName')) {
      throw new TypeError('parameter "AppPkgName" is required');
    }

    if (!hasOwnProperty(params, 'OsType')) {
      throw new TypeError('parameter "OsType" is required');
    }

    return this.request('CreateProjectApp', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} AppKey - appKey. required.
   * @param {String} InterfaceName - interfaceName. required.
   * @param {String} InvokeType - type. required.
   * @param {String} Params - params. required.
   * @param {String} GroupName - groupName. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} MethodName - methodName. required.
   * @param {String} VersionCode - versionCode. optional.
   */
  createRpcService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'InterfaceName')) {
      throw new TypeError('parameter "InterfaceName" is required');
    }

    if (!hasOwnProperty(params, 'InvokeType')) {
      throw new TypeError('parameter "InvokeType" is required');
    }

    if (!hasOwnProperty(params, 'Params')) {
      throw new TypeError('parameter "Params" is required');
    }

    if (!hasOwnProperty(params, 'MethodName')) {
      throw new TypeError('parameter "MethodName" is required');
    }

    return this.request('CreateRpcService', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} DeviceModel - deviceModel. required.
   * @param {String} SubscribeList - subscribeList. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} SchemaVersion - schemaVersion. optional.
   */
  createSchemaSubscribe(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceModel')) {
      throw new TypeError('parameter "DeviceModel" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('CreateSchemaSubscribe', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} DeviceModelId - deviceModelId. required.
   * @param {String} AuthType - authType. optional.
   * @param {String} Namespace - namespace. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Schema - schema. optional.
   */
  createShadowSchema(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceModelId')) {
      throw new TypeError('parameter "DeviceModelId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('CreateShadowSchema', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Namespace - namespace. required.
   * @param {String} Source - path. required.
   * @param {String} FileIds - fileIds. required.
   * @param {String} FunctionIds - functionIds. required.
   * @param {Integer} InvocationMode - invocationMode. required.
   * @param {Integer} Sandbox - sandbox. optional.
   * @param {Integer} Production - production. optional.
   */
  createTrigger(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Namespace')) {
      throw new TypeError('parameter "Namespace" is required');
    }

    if (!hasOwnProperty(params, 'Source')) {
      throw new TypeError('parameter "Source" is required');
    }

    if (!hasOwnProperty(params, 'FileIds')) {
      throw new TypeError('parameter "FileIds" is required');
    }

    if (!hasOwnProperty(params, 'FunctionIds')) {
      throw new TypeError('parameter "FunctionIds" is required');
    }

    if (!hasOwnProperty(params, 'InvocationMode')) {
      throw new TypeError('parameter "InvocationMode" is required');
    }

    return this.request('CreateTrigger', params, options);
  }

  /**
   * @param {String} AppKey - appKey. required.
   * @param {String} PAppKey - pAppKey. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. optional.
   */
  createUpstreamAppKeyRelation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'PAppKey')) {
      throw new TypeError('parameter "PAppKey" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('CreateUpstreamAppKeyRelation', params, options);
  }

  /**
   * @param {String} AppKeys - appKeys. required.
   * @param {String} AppServerId - appServerId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. optional.
   */
  createUpstreamAppKeyRelations(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKeys')) {
      throw new TypeError('parameter "AppKeys" is required');
    }

    if (!hasOwnProperty(params, 'AppServerId')) {
      throw new TypeError('parameter "AppServerId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('CreateUpstreamAppKeyRelations', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Name - name. required.
   * @param {String} Tags - tags. required.
   */
  createUpstreamAppServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Tags')) {
      throw new TypeError('parameter "Tags" is required');
    }

    return this.request('CreateUpstreamAppServer', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} MaxCount - maxCount. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   */
  createVersionDeviceGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MaxCount')) {
      throw new TypeError('parameter "MaxCount" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateVersionDeviceGroup', params, options);
  }

  /**
   * @param {String} IsTotalPrepublish - isTotalPrepublish. required.
   * @param {String} VersionId - versionId. required.
   * @param {String} VersionType - versionType. required.
   * @param {String} Name - name. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} BarrierCount - barrierCount. required.
   * @param {String} RegionId - regionId. optional.
   */
  createVersionPrepublish(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IsTotalPrepublish')) {
      throw new TypeError('parameter "IsTotalPrepublish" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'VersionType')) {
      throw new TypeError('parameter "VersionType" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'BarrierCount')) {
      throw new TypeError('parameter "BarrierCount" is required');
    }

    return this.request('CreateVersionPrepublish', params, options);
  }

  /**
   * @param {String} DeviceGroupId - deviceGroupId. required.
   * @param {String} Description - description. optional.
   * @param {String} VersionId - versionId. required.
   * @param {String} VersionType - versionType. required.
   * @param {String} Name - name. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. optional.
   */
  createVersionTest(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceGroupId')) {
      throw new TypeError('parameter "DeviceGroupId" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'VersionType')) {
      throw new TypeError('parameter "VersionType" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('CreateVersionTest', params, options);
  }

  /**
   * @param {String} VersionId - versionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. required.
   * @param {Long} PrepubTime - prepubTime. optional.
   * @param {Long} PublishTime - publishTime. optional.
   * @param {Long} DownTime - downTime. optional.
   * @param {String} Email - email. required.
   * @param {String} Description - description. optional.
   * @param {String} SendMessage - sendMessage. optional.
   * @param {String} PrepublishCount - prepublishCount. optional.
   * @param {String} IsTotalPrepublish - isTotalPrepublish. optional.
   */
  delayPublishAppVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    return this.request('DelayPublishAppVersion', params, options);
  }

  /**
   * @param {String} VersionId - versionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. required.
   * @param {Long} PrepubTime - prepubTime. optional.
   * @param {Long} PublishTime - publishTime. optional.
   * @param {Long} DownTime - downTime. optional.
   * @param {String} Email - email. required.
   * @param {String} Description - description. optional.
   * @param {String} SendMessage - sendMessage. optional.
   * @param {String} PrepublishCount - prepublishCount. optional.
   */
  delayPublishOsVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    return this.request('DelayPublishOsVersion', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionId - versionId. required.
   * @param {String} VersionType - versionType. required.
   */
  deleteAllCustomizedFilters(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'VersionType')) {
      throw new TypeError('parameter "VersionType" is required');
    }

    return this.request('DeleteAllCustomizedFilters', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} DeviceGroupId - deviceGroupId. required.
   */
  deleteAllVersionGroupDevices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceGroupId')) {
      throw new TypeError('parameter "DeviceGroupId" is required');
    }

    return this.request('DeleteAllVersionGroupDevices', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   */
  deleteCustomizedFilter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteCustomizedFilter', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   */
  deleteCustomizedProperty(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteCustomizedProperty', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} DeviceId - deviceId. optional.
   * @param {String} ProjectId - projectId. optional.
   */
  deleteDevice(params = {}, options = {}) {
    return this.request('DeleteDevice', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} FileName - fileName. required.
   * @param {Integer} FileType - fileType. optional.
   */
  deleteFunctionFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    return this.request('DeleteFunctionFile', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Namespace - namespace. required.
   */
  deleteNamespace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Namespace')) {
      throw new TypeError('parameter "Namespace" is required');
    }

    return this.request('DeleteNamespace', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} IdentityId - identityId. optional.
   * @param {String} ProjectId - projectId. optional.
   */
  deleteOpenAccount(params = {}, options = {}) {
    return this.request('DeleteOpenAccount', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} AppId - appId. required.
   * @param {String} RegionId - regionId. optional.
   */
  deleteProjectApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DeleteProjectApp', params, options);
  }

  /**
   * @param {String} Id - id. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. optional.
   */
  deleteRpcService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('DeleteRpcService', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Id - id. required.
   * @param {String} ProjectId - projectId. required.
   */
  deleteSchemaSubscribe(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('DeleteSchemaSubscribe', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Id - id. required.
   * @param {String} ProjectId - projectId. required.
   */
  deleteShadowSchema(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('DeleteShadowSchema', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {Long} Id - id. required.
   */
  deleteTrigger(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteTrigger', params, options);
  }

  /**
   * @param {String} Id - id. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. optional.
   */
  deleteUpstreamAppKeyRelation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('DeleteUpstreamAppKeyRelation', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {Long} Id - id. required.
   * @param {String} RegionId - regionId. optional.
   */
  deleteUpstreamAppServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteUpstreamAppServer', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionType - versionType. required.
   * @param {String} VersionId - versionId. required.
   * @param {String} RegionId - regionId. required.
   */
  deleteVersionAllBlackDevices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionType')) {
      throw new TypeError('parameter "VersionType" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    return this.request('DeleteVersionAllBlackDevices', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionType - versionType. required.
   * @param {String} VersionId - versionId. required.
   */
  deleteVersionAllWhiteDevices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionType')) {
      throw new TypeError('parameter "VersionType" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    return this.request('DeleteVersionAllWhiteDevices', params, options);
  }

  /**
   * @param {String} DeviceIds - deviceIds. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionType - versionType. required.
   * @param {String} VersionId - versionId. required.
   * @param {String} DeviceIdType - deviceIdType. required.
   * @param {String} RegionId - regionId. required.
   */
  deleteVersionBlackDevices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceIds')) {
      throw new TypeError('parameter "DeviceIds" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionType')) {
      throw new TypeError('parameter "VersionType" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceIdType')) {
      throw new TypeError('parameter "DeviceIdType" is required');
    }

    return this.request('DeleteVersionBlackDevices', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} Ids - ids. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionType - versionType. required.
   * @param {String} VersionId - versionId. required.
   */
  deleteVersionBlackDevicesById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionType')) {
      throw new TypeError('parameter "VersionType" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    return this.request('DeleteVersionBlackDevicesById', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   */
  deleteVersionDeviceGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteVersionDeviceGroup', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} DeviceIds - deviceIds. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} DeviceGroupId - deviceGroupId. required.
   * @param {String} DeviceIdType - deviceIdType. required.
   */
  deleteVersionGroupDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceIds')) {
      throw new TypeError('parameter "DeviceIds" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceGroupId')) {
      throw new TypeError('parameter "DeviceGroupId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceIdType')) {
      throw new TypeError('parameter "DeviceIdType" is required');
    }

    return this.request('DeleteVersionGroupDevice', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} DeviceGroupId - deviceGroupId. required.
   * @param {String} Ids - ids. required.
   */
  deleteVersionGroupDeviceById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceGroupId')) {
      throw new TypeError('parameter "DeviceGroupId" is required');
    }

    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    return this.request('DeleteVersionGroupDeviceById', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   */
  deleteVersionTest(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteVersionTest', params, options);
  }

  /**
   * @param {String} DeviceIds - deviceIds. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionType - versionType. required.
   * @param {String} VersionId - versionId. required.
   * @param {String} DeviceIdType - deviceIdType. required.
   * @param {String} RegionId - regionId. required.
   */
  deleteVersionWhiteDevices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceIds')) {
      throw new TypeError('parameter "DeviceIds" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionType')) {
      throw new TypeError('parameter "VersionType" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceIdType')) {
      throw new TypeError('parameter "DeviceIdType" is required');
    }

    return this.request('DeleteVersionWhiteDevices', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Ids - ids. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionType - versionType. required.
   * @param {String} VersionId - versionId. required.
   */
  deleteVersionWhiteDevicesById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionType')) {
      throw new TypeError('parameter "VersionType" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    return this.request('DeleteVersionWhiteDevicesById', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} FileId - fileId. required.
   * @param {Integer} DeployEnv - deployEnv. required.
   */
  deployFunctionFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'FileId')) {
      throw new TypeError('parameter "FileId" is required');
    }

    if (!hasOwnProperty(params, 'DeployEnv')) {
      throw new TypeError('parameter "DeployEnv" is required');
    }

    return this.request('DeployFunctionFile', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} GatewayAppId - gatewayAppId. required.
   * @param {String} RegionId - regionId. optional.
   */
  describeApiGatewayAppSecurity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'GatewayAppId')) {
      throw new TypeError('parameter "GatewayAppId" is required');
    }

    return this.request('DescribeApiGatewayAppSecurity', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionId - versionId. required.
   * @param {String} RegionId - regionId. optional.
   */
  describeAppVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    return this.request('DescribeAppVersion', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} VersionId - versionId. required.
   */
  describeAppVersionDelayPublish(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    return this.request('DescribeAppVersionDelayPublish', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DeviceId - deviceId. required.
   */
  describeAssistRTMPServerAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    return this.request('DescribeAssistRTMPServerAddress', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} AssistId - assistId. required.
   */
  describeAssistReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'AssistId')) {
      throw new TypeError('parameter "AssistId" is required');
    }

    return this.request('DescribeAssistReport', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DeviceId - deviceId. required.
   */
  describeAssistWSServerAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    return this.request('DescribeAssistWSServerAddress', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {String} RegionId - regionId. required.
   */
  describeCustomizedFilter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeCustomizedFilter', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} DeviceModelId - deviceModelId. required.
   */
  describeDefaultSchema(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceModelId')) {
      throw new TypeError('parameter "DeviceModelId" is required');
    }

    return this.request('DescribeDefaultSchema', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} DeviceId - deviceId. required.
   */
  describeDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    return this.request('DescribeDevice', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. optional.
   * @param {Long} DeviceBrandId - deviceBrandId. optional.
   * @param {String} DeviceBrand - deviceBrand. optional.
   * @param {String} Start - start. optional.
   * @param {String} Length - length. optional.
   * @param {String} RegionId - regionId. optional.
   */
  describeDeviceBrand(params = {}, options = {}) {
    return this.request('DescribeDeviceBrand', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. optional.
   * @param {String} QueryType - queryType. optional.
   * @param {String} QueryValue - queryValue. optional.
   */
  describeDeviceIdByOuterInfo(params = {}, options = {}) {
    return this.request('DescribeDeviceIdByOuterInfo', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} DeviceId - deviceId. optional.
   * @param {String} DeviceToken - deviceToken. optional.
   * @param {String} ProjectId - projectId. optional.
   */
  describeDeviceInfo(params = {}, options = {}) {
    return this.request('DescribeDeviceInfo', params, options);
  }

  /**
   * @param {Integer} DeviceModelId - deviceModelId. optional.
   * @param {String} DeviceModel - deviceModel. optional.
   * @param {String} ProjectId - projectId. optional.
   * @param {String} RegionId - regionId. optional.
   */
  describeDeviceModel(params = {}, options = {}) {
    return this.request('DescribeDeviceModel', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Type - type. required.
   * @param {String} Value - value. required.
   */
  describeDeviceOnlineInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Value')) {
      throw new TypeError('parameter "Value" is required');
    }

    return this.request('DescribeDeviceOnlineInfo', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} DeviceId - deviceId. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DeviceModel - deviceModel. optional.
   * @param {String} Path - path. required.
   * @param {Boolean} ViewSubscribed - viewSubscribed. optional.
   */
  describeDeviceShadow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    if (!hasOwnProperty(params, 'Path')) {
      throw new TypeError('parameter "Path" is required');
    }

    return this.request('DescribeDeviceShadow', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} DeviceModel - deviceModel. optional.
   * @param {String} SchemaVersion - schemaVersion. optional.
   * @param {String} ProjectId - projectId. required.
   */
  describeDeviceValiditySchema(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('DescribeDeviceValiditySchema', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {Long} MessageId - messageId. required.
   * @param {String} RegionId - regionId. optional.
   */
  describeMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'MessageId')) {
      throw new TypeError('parameter "MessageId" is required');
    }

    return this.request('DescribeMessage', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. optional.
   * @param {String} IdentityId - identityId. optional.
   * @param {String} Idp - idp. optional.
   * @param {String} IdToken - idToken. optional.
   * @param {String} OpenId - openId. optional.
   * @param {String} RegionId - regionId. optional.
   */
  describeOpenAccount(params = {}, options = {}) {
    return this.request('DescribeOpenAccount', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {Long} VersionId - versionId. required.
   */
  describeOsVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    return this.request('DescribeOsVersion', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} VersionId - versionId. required.
   */
  describeOsVersionDelayPublish(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    return this.request('DescribeOsVersionDelayPublish', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. optional.
   */
  describeProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('DescribeProject', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} AppId - appId. required.
   * @param {String} RegionId - regionId. optional.
   */
  describeProjectAppSecurity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DescribeProjectAppSecurity', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} DeviceModel - deviceModel. required.
   * @param {Boolean} IsSimple - isSimple. optional.
   * @param {String} ProjectId - projectId. required.
   */
  describeShadowSchema(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceModel')) {
      throw new TypeError('parameter "DeviceModel" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('DescribeShadowSchema', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  describeTenantInfo(params = {}, options = {}) {
    return this.request('DescribeTenantInfo', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   */
  describeUserBehaviorLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeUserBehaviorLog', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   */
  describeVersionDeviceGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeVersionDeviceGroup', params, options);
  }

  /**
   * @param {String} OriginalId - originalId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionType - versionType. required.
   * @param {String} VersionId - versionId. required.
   * @param {String} IdType - idType. required.
   * @param {String} RegionId - regionId. required.
   */
  diagnosisVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OriginalId')) {
      throw new TypeError('parameter "OriginalId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionType')) {
      throw new TypeError('parameter "VersionType" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'IdType')) {
      throw new TypeError('parameter "IdType" is required');
    }

    return this.request('DiagnosisVersion', params, options);
  }

  /**
   * @param {String} DeviceId - deviceId. optional.
   * @param {String} ProjectId - projectId. optional.
   * @param {String} RegionId - regionId. optional.
   */
  disconnectAssistDevice(params = {}, options = {}) {
    return this.request('DisconnectAssistDevice', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionId - versionId. required.
   */
  downAppVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    return this.request('DownAppVersion', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionId - versionId. required.
   */
  downOsVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    return this.request('DownOsVersion', params, options);
  }

  /**
   * @param {String} Status - status. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} VersionId - versionId. optional.
   * @param {String} DeviceModelId - deviceModelId. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {String} AppId - appId. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} RegionId - regionId. optional.
   */
  findAppVersions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    return this.request('FindAppVersions', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionId - versionId. required.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} Name - name. optional.
   * @param {String} VersionType - versionType. required.
   * @param {String} RegionId - regionId. optional.
   */
  findCustomizedFilters(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'VersionType')) {
      throw new TypeError('parameter "VersionType" is required');
    }

    return this.request('FindCustomizedFilters', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionId - versionId. required.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} Name - name. optional.
   * @param {String} VersionType - versionType. required.
   * @param {String} RegionId - regionId. optional.
   */
  findCustomizedProperties(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'VersionType')) {
      throw new TypeError('parameter "VersionType" is required');
    }

    return this.request('FindCustomizedProperties', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} VersionId - versionId. optional.
   * @param {String} DeviceModelId - deviceModelId. optional.
   * @param {String} SystemVersion - systemVersion. optional.
   * @param {String} Status - status. optional.
   * @param {String} IsMilestone - isMilestone. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} RegionId - regionId. required.
   */
  findOsVersions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('FindOsVersions', params, options);
  }

  /**
   * @param {String} PrepublishId - prepublishId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} DeviceId - deviceId. optional.
   * @param {String} RegionId - regionId. optional.
   */
  findPrepublishPassedDevices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PrepublishId')) {
      throw new TypeError('parameter "PrepublishId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('FindPrepublishPassedDevices', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {Integer} ParentId - parentId. required.
   */
  findPrepublishesByParentId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'ParentId')) {
      throw new TypeError('parameter "ParentId" is required');
    }

    return this.request('FindPrepublishesByParentId', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {Integer} VersionId - versionId. required.
   * @param {String} VersionType - versionType. required.
   * @param {String} RegionId - regionId. optional.
   */
  findPrepublishesByVersionId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'VersionType')) {
      throw new TypeError('parameter "VersionType" is required');
    }

    return this.request('FindPrepublishesByVersionId', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} Service - service. optional.
   * @param {String} Module - module. optional.
   * @param {String} ModuleAction - moduleAction. optional.
   * @param {String} ProjectId - projectId. optional.
   * @param {String} RecordId - recordId. optional.
   * @param {String} ActionUserId - actionUserId. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  findUserBehaviorLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('FindUserBehaviorLogs', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionId - versionId. required.
   * @param {String} VersionType - versionType. required.
   * @param {String} DeviceId - deviceId. optional.
   * @param {String} OriginalId - originalId. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} RegionId - regionId. required.
   */
  findVersionBlackDevices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'VersionType')) {
      throw new TypeError('parameter "VersionType" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('FindVersionBlackDevices', params, options);
  }

  /**
   * @param {String} DeviceId - deviceId. optional.
   * @param {String} OriginalId - originalId. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} Name - name. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. optional.
   */
  findVersionDeviceGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('FindVersionDeviceGroups', params, options);
  }

  /**
   * @param {String} IdType - idType. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} VersionId - versionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} OriginalId - originalId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  findVersionFailedDevices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('FindVersionFailedDevices', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} OriginalId - originalId. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} DeviceGroupId - deviceGroupId. required.
   * @param {String} DeviceId - deviceId. optional.
   * @param {String} RegionId - regionId. optional.
   */
  findVersionGroupDevices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'DeviceGroupId')) {
      throw new TypeError('parameter "DeviceGroupId" is required');
    }

    return this.request('FindVersionGroupDevices', params, options);
  }

  /**
   * @param {String} VersionType - versionType. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} MessageType - msgSendType. optional.
   * @param {String} VersionId - versionId. optional.
   * @param {String} RegionId - regionId. required.
   */
  findVersionMessageSendRecords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('FindVersionMessageSendRecords', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} MessageType - msgSendType. optional.
   * @param {String} TestId - testId. optional.
   * @param {String} VersionId - versionId. required.
   * @param {String} SendRecordId - sendRecordId. optional.
   * @param {String} DeviceId - deviceId. optional.
   * @param {String} VersionType - versionType. required.
   * @param {String} RegionId - regionId. required.
   */
  findVersionMessages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'VersionType')) {
      throw new TypeError('parameter "VersionType" is required');
    }

    return this.request('FindVersionMessages', params, options);
  }

  /**
   * @param {String} IdType - idType. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} VersionId - versionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} OriginalId - originalId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  findVersionRecoveryFailedDevices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('FindVersionRecoveryFailedDevices', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} VersionId - versionId. optional.
   * @param {String} VersionType - versionType. optional.
   * @param {String} RegionId - regionId. optional.
   */
  findVersionTests(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('FindVersionTests', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionId - versionId. required.
   * @param {String} VersionType - versionType. required.
   * @param {String} DeviceId - deviceId. optional.
   * @param {String} OriginalId - originalId. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} RegionId - regionId. required.
   */
  findVersionWhiteDevices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'VersionType')) {
      throw new TypeError('parameter "VersionType" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('FindVersionWhiteDevices', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Filename - filename. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} DeviceId - deviceId. required.
   */
  generateAssistFileUploadUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Filename')) {
      throw new TypeError('parameter "Filename" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    return this.request('GenerateAssistFileUploadUrl', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} FileName - fileName. required.
   */
  generateFunctionFileUploadMeta(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    return this.request('GenerateFunctionFileUploadMeta', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Ext - ext. required.
   * @param {String} AccessId - accessId. required.
   * @param {String} AccessKey - accessKey. required.
   */
  generateOssPostPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Ext')) {
      throw new TypeError('parameter "Ext" is required');
    }

    if (!hasOwnProperty(params, 'AccessId')) {
      throw new TypeError('parameter "AccessId" is required');
    }

    if (!hasOwnProperty(params, 'AccessKey')) {
      throw new TypeError('parameter "AccessKey" is required');
    }

    return this.request('GenerateOssPostPolicy', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Ext - ext. required.
   */
  generateOssUploadMeta(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Ext')) {
      throw new TypeError('parameter "Ext" is required');
    }

    return this.request('GenerateOssUploadMeta', params, options);
  }

  /**
   * @param {String} Sdks - sdks. required.
   * @param {String} AppId - appId. required.
   * @param {Integer} OsType - osType. required.
   * @param {String} PkgName - pkgName. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} CertFileObjectKey - certFileObjectKey. required.
   * @param {String} RegionId - regionId. optional.
   */
  generateSdkDownloadInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sdks')) {
      throw new TypeError('parameter "Sdks" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'OsType')) {
      throw new TypeError('parameter "OsType" is required');
    }

    if (!hasOwnProperty(params, 'PkgName')) {
      throw new TypeError('parameter "PkgName" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'CertFileObjectKey')) {
      throw new TypeError('parameter "CertFileObjectKey" is required');
    }

    return this.request('GenerateSdkDownloadInfo', params, options);
  }

  /**
   * @param {String} Plugins - plugins. required.
   * @param {String} SignMode - signMode. required.
   * @param {Integer} OsType - osType. required.
   * @param {String} PkgName - pkgName. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} CertFileObjectKey - certFileObjectKey. optional.
   * @param {String} RegionId - regionId. optional.
   */
  generateSysAppDownloadInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Plugins')) {
      throw new TypeError('parameter "Plugins" is required');
    }

    if (!hasOwnProperty(params, 'SignMode')) {
      throw new TypeError('parameter "SignMode" is required');
    }

    if (!hasOwnProperty(params, 'OsType')) {
      throw new TypeError('parameter "OsType" is required');
    }

    if (!hasOwnProperty(params, 'PkgName')) {
      throw new TypeError('parameter "PkgName" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GenerateSysAppDownloadInfo', params, options);
  }

  /**
   * @param {String} PackageName - packageName. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} TargetVersionCode - targetVersionCode. optional.
   * @param {String} IdType - idType. optional.
   * @param {String} OriginalId - originalId. optional.
   * @param {String} RegionId - regionId. required.
   */
  getDeviceAppUpdateFunnelEvents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetDeviceAppUpdateFunnelEvents', params, options);
  }

  /**
   * @param {String} OriginalId - originalId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} TargetVersion - targetVersion. optional.
   * @param {String} IdType - idType. optional.
   * @param {String} RegionId - regionId. required.
   */
  getDeviceSystemUpdateFunnelEvents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetDeviceSystemUpdateFunnelEvents', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Namespace - namespace. required.
   * @param {String} AuthType - authType. required.
   * @param {String} DeviceIdType - deviceIdType. optional.
   * @param {String} DeviceId - deviceId. optional.
   * @param {String} AccountType - accountType. optional.
   * @param {String} AccountId - accountId. optional.
   */
  getNamespaceData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Namespace')) {
      throw new TypeError('parameter "Namespace" is required');
    }

    if (!hasOwnProperty(params, 'AuthType')) {
      throw new TypeError('parameter "AuthType" is required');
    }

    return this.request('GetNamespaceData', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Namespace - namespace. required.
   * @param {String} DimensionType - dimensionType. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  getNamespaceStatisticsData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Namespace')) {
      throw new TypeError('parameter "Namespace" is required');
    }

    if (!hasOwnProperty(params, 'DimensionType')) {
      throw new TypeError('parameter "DimensionType" is required');
    }

    return this.request('GetNamespaceStatisticsData', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} Ext - ext. required.
   * @param {String} RegionId - regionId. required.
   */
  getOssUploadMeta(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Ext')) {
      throw new TypeError('parameter "Ext" is required');
    }

    return this.request('GetOssUploadMeta', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {Long} FileId - fileId. required.
   * @param {String} FunctionName - functionName. required.
   * @param {Integer} Env - env. required.
   * @param {String} Parameters - parameters. required.
   */
  invokeFunction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'FileId')) {
      throw new TypeError('parameter "FileId" is required');
    }

    if (!hasOwnProperty(params, 'FunctionName')) {
      throw new TypeError('parameter "FunctionName" is required');
    }

    if (!hasOwnProperty(params, 'Env')) {
      throw new TypeError('parameter "Env" is required');
    }

    if (!hasOwnProperty(params, 'Parameters')) {
      throw new TypeError('parameter "Parameters" is required');
    }

    return this.request('InvokeFunction', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. optional.
   * @param {String} RegionId - regionId. optional.
   */
  listApiGatewayApps(params = {}, options = {}) {
    return this.request('ListApiGatewayApps', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. optional.
   */
  listApps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('ListApps', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ActionTimestamp - actionTimestamp. required.
   * @param {String} ProjectId - projectId. required.
   */
  listAssistActionDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ActionTimestamp')) {
      throw new TypeError('parameter "ActionTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('ListAssistActionDetails', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {String} Condition - condition. optional.
   * @param {Integer} PerPage - perPage. required.
   */
  listAssistDevices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'PerPage')) {
      throw new TypeError('parameter "PerPage" is required');
    }

    return this.request('ListAssistDevices', params, options);
  }

  /**
   * @param {Integer} PerPage - perPage. required.
   * @param {String} RegionId - regionId. optional.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {String} Condition - condition. optional.
   * @param {String} ProjectId - projectId. required.
   */
  listAssistHistories(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PerPage')) {
      throw new TypeError('parameter "PerPage" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('ListAssistHistories', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} AssistId - assistId. required.
   */
  listAssistHistoryDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'AssistId')) {
      throw new TypeError('parameter "AssistId" is required');
    }

    return this.request('ListAssistHistoryDetails', params, options);
  }

  /**
   * @param {String} OsType - osType. required.
   * @param {String} PkgName - pkgName. required.
   * @param {String} RegionId - regionId. optional.
   */
  listClientPluginVersions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OsType')) {
      throw new TypeError('parameter "OsType" is required');
    }

    if (!hasOwnProperty(params, 'PkgName')) {
      throw new TypeError('parameter "PkgName" is required');
    }

    return this.request('ListClientPluginVersions', params, options);
  }

  /**
   * @param {String} OsType - osType. required.
   * @param {String} RegionId - regionId. optional.
   */
  listClientPlugins(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OsType')) {
      throw new TypeError('parameter "OsType" is required');
    }

    return this.request('ListClientPlugins', params, options);
  }

  /**
   * @param {String} OsType - osType. required.
   * @param {String} RegionId - regionId. optional.
   */
  listClientSdks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OsType')) {
      throw new TypeError('parameter "OsType" is required');
    }

    return this.request('ListClientSdks', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} DeviceId - deviceId. required.
   * @param {Integer} StartTime - startTime. optional.
   * @param {Integer} EndTime - endTime. optional.
   * @param {Integer} PageIndex - pageIndex. optional.
   * @param {String} RegionId - regionId. optional.
   */
  listConnectLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    return this.request('ListConnectLogs', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {Long} FileId - fileId. required.
   */
  listDeployedFunctions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'FileId')) {
      throw new TypeError('parameter "FileId" is required');
    }

    return this.request('ListDeployedFunctions', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. optional.
   * @param {Long} DeviceBrandId - deviceBrandId. optional.
   * @param {String} DeviceBrand - deviceBrand. optional.
   * @param {String} Start - start. optional.
   * @param {String} Length - length. optional.
   * @param {String} RegionId - regionId. optional.
   */
  listDeviceBrands(params = {}, options = {}) {
    return this.request('ListDeviceBrands', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   */
  listDeviceModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('ListDeviceModel', params, options);
  }

  /**
   * @param {Integer} DeviceModelId - deviceModelId. optional.
   * @param {String} Length - length. optional.
   * @param {String} DeviceModel - deviceModel. optional.
   * @param {String} DeviceBrand - deviceBrand. optional.
   * @param {String} Start - start. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. optional.
   * @param {Long} DeviceBrandId - deviceBrandId. optional.
   */
  listDeviceModels(params = {}, options = {}) {
    return this.request('ListDeviceModels', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. optional.
   * @param {String} RegionId - regionId. optional.
   */
  listDeviceTypes(params = {}, options = {}) {
    return this.request('ListDeviceTypes', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. optional.
   * @param {Integer} DeviceModelId - deviceModelId. optional.
   * @param {String} DeviceModel - deviceModel. optional.
   * @param {String} Start - start. optional.
   * @param {String} Length - length. optional.
   * @param {String} RegionId - regionId. optional.
   */
  listDevices(params = {}, options = {}) {
    return this.request('ListDevices', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. optional.
   * @param {String} QueryType - queryType. optional.
   * @param {String} QueryValue - queryValue. optional.
   * @param {String} Start - start. optional.
   * @param {String} Length - length. optional.
   */
  listDevicesByOuterInfo(params = {}, options = {}) {
    return this.request('ListDevicesByOuterInfo', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {Long} FileId - fileId. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} FunctionName - functionName. required.
   * @param {Integer} Env - env. required.
   * @param {Integer} PageIndex - pageIndex. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listFunctionExecuteLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'FileId')) {
      throw new TypeError('parameter "FileId" is required');
    }

    if (!hasOwnProperty(params, 'FunctionName')) {
      throw new TypeError('parameter "FunctionName" is required');
    }

    if (!hasOwnProperty(params, 'Env')) {
      throw new TypeError('parameter "Env" is required');
    }

    return this.request('ListFunctionExecuteLog', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {Integer} FileType - fileType. required.
   * @param {Integer} PageIndex - pageIndex. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listFunctionFiles(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'FileType')) {
      throw new TypeError('parameter "FileType" is required');
    }

    return this.request('ListFunctionFiles', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. optional.
   * @param {Integer} PageIndex - pageIndex. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listFunctionFilesByProjectId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('ListFunctionFilesByProjectId', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} DeviceId - deviceId. optional.
   * @param {Long} MessageId - messageId. optional.
   * @param {Integer} PageIndex - pageIndex. optional.
   * @param {String} RegionId - regionId. optional.
   */
  listMessageAcks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('ListMessageAcks', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} MessageId - messageId. required.
   * @param {Integer} PageIndex - pageIndex. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listMessageReceivers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'MessageId')) {
      throw new TypeError('parameter "MessageId" is required');
    }

    return this.request('ListMessageReceivers', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} Service - service. required.
   * @param {String} Module - module. required.
   */
  listModuleActions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Service')) {
      throw new TypeError('parameter "Service" is required');
    }

    if (!hasOwnProperty(params, 'Module')) {
      throw new TypeError('parameter "Module" is required');
    }

    return this.request('ListModuleActions', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} AuthType - authType. optional.
   */
  listNamespaces(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('ListNamespaces', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Type - type. required.
   * @param {String} Value - value. required.
   * @param {Integer} PageIndex - pageIndex. optional.
   * @param {String} RegionId - regionId. optional.
   */
  listOfflineMessages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Value')) {
      throw new TypeError('parameter "Value" is required');
    }

    return this.request('ListOfflineMessages', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. optional.
   * @param {String} IdentityId - identityId. optional.
   * @param {String} Idp - idp. optional.
   * @param {String} OpenId - openId. optional.
   */
  listOpenAccountLinks(params = {}, options = {}) {
    return this.request('ListOpenAccountLinks', params, options);
  }

  /**
   * @param {Integer} Length - length. optional.
   * @param {Integer} Start - start. optional.
   * @param {String} Mobile - mobile. optional.
   * @param {String} Email - email. optional.
   * @param {String} DisplayName - displayName. optional.
   * @param {String} ProjectId - projectId. optional.
   * @param {String} RegionId - regionId. optional.
   */
  listOpenAccounts(params = {}, options = {}) {
    return this.request('ListOpenAccounts', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  listPreChecks(params = {}, options = {}) {
    return this.request('ListPreChecks', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {Integer} PageIndex - pageIndex. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} Keywords - keywords. optional.
   */
  listProjectApps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('ListProjectApps', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  listProjects(params = {}, options = {}) {
    return this.request('ListProjects', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {Integer} PageIndex - pageIndex. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listRpcServices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('ListRpcServices', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} DeviceModel - deviceModel. optional.
   * @param {Integer} PageIndex - pageIndex. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listSchemaSubscribes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('ListSchemaSubscribes', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} Service - service. required.
   */
  listServiceModules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Service')) {
      throw new TypeError('parameter "Service" is required');
    }

    return this.request('ListServiceModules', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   */
  listServices(params = {}, options = {}) {
    return this.request('ListServices', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   */
  listShadowSchemaDeviceModels(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('ListShadowSchemaDeviceModels', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} QueryType - queryType. optional.
   * @param {String} QueryValue - queryValue. optional.
   * @param {Integer} PageIndex - pageIndex. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} RegionId - regionId. optional.
   */
  listShadowSchemas(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('ListShadowSchemas', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  listSupportFeatures(params = {}, options = {}) {
    return this.request('ListSupportFeatures', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Namespace - namespace. required.
   * @param {Integer} PageIndex - pageIndex. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listTriggers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Namespace')) {
      throw new TypeError('parameter "Namespace" is required');
    }

    return this.request('ListTriggers', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {Long} AppServerId - id. required.
   * @param {Integer} PageIndex - pageIndex. optional.
   */
  listUpstreamAppKeyRelations(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'AppServerId')) {
      throw new TypeError('parameter "AppServerId" is required');
    }

    return this.request('ListUpstreamAppKeyRelations', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} PageIndex - pageIndex. optional.
   * @param {String} PageSize - pageSize. optional.
   */
  listUpstreamAppServers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('ListUpstreamAppServers', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. optional.
   */
  listVersionDeviceGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('ListVersionDeviceGroups', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionId - versionId. required.
   * @param {Boolean} SendMessage - sendMessage. required.
   */
  publishAppVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'SendMessage')) {
      throw new TypeError('parameter "SendMessage" is required');
    }

    return this.request('PublishAppVersion', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionId - versionId. required.
   * @param {Boolean} SendMessage - sendMessage. required.
   */
  publishOsVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'SendMessage')) {
      throw new TypeError('parameter "SendMessage" is required');
    }

    return this.request('PublishOsVersion', params, options);
  }

  /**
   * @param {String} AppPackage - appPackage. required.
   * @param {String} Desc - desc. optional.
   * @param {String} Act - act. required.
   * @param {String} Uri - uri. optional.
   * @param {String} PkgContent - pkgContent. required.
   * @param {String} CustomContent - customContent. optional.
   * @param {String} ReceiverType - receiverType. required.
   * @param {String} ReceiverValues - receivers. required.
   * @param {Long} ExpiredTime - expiredTime. optional.
   * @param {String} Title - title. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} AppKey - appKey. required.
   * @param {Integer} Type - type. required.
   * @param {String} RegionId - regionId. optional.
   */
  pushMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppPackage')) {
      throw new TypeError('parameter "AppPackage" is required');
    }

    if (!hasOwnProperty(params, 'Act')) {
      throw new TypeError('parameter "Act" is required');
    }

    if (!hasOwnProperty(params, 'PkgContent')) {
      throw new TypeError('parameter "PkgContent" is required');
    }

    if (!hasOwnProperty(params, 'ReceiverType')) {
      throw new TypeError('parameter "ReceiverType" is required');
    }

    if (!hasOwnProperty(params, 'ReceiverValues')) {
      throw new TypeError('parameter "ReceiverValues" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('PushMessage', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionId - versionId. required.
   * @param {String} VersionType - versionType. required.
   */
  pushVersionMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'VersionType')) {
      throw new TypeError('parameter "VersionType" is required');
    }

    return this.request('PushVersionMessage', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ActiveType - activeType. required.
   * @param {String} SystemVersion - systemVersion. optional.
   * @param {String} DeviceModel - deviceModel. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  queryActiveDeviceCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'ActiveType')) {
      throw new TypeError('parameter "ActiveType" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('QueryActiveDeviceCount', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} TargetVersion - targetVersion. required.
   * @param {String} FromVersion - fromVersion. optional.
   * @param {String} DeviceModel - deviceModel. optional.
   * @param {String} PackageName - packageName. required.
   */
  queryAppUpdateCountResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'TargetVersion')) {
      throw new TypeError('parameter "TargetVersion" is required');
    }

    if (!hasOwnProperty(params, 'PackageName')) {
      throw new TypeError('parameter "PackageName" is required');
    }

    return this.request('QueryAppUpdateCountResult', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} TargetVersion - targetVersion. required.
   * @param {String} FromVersion - fromVersion. optional.
   * @param {String} DeviceModel - deviceModel. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} PackageName - packageName. required.
   */
  queryAppUpdateFailureRate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'TargetVersion')) {
      throw new TypeError('parameter "TargetVersion" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'PackageName')) {
      throw new TypeError('parameter "PackageName" is required');
    }

    return this.request('QueryAppUpdateFailureRate', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} TargetVersion - targetVersion. required.
   * @param {String} FromVersion - fromVersion. optional.
   * @param {String} DeviceModel - deviceModel. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Events - events. required.
   * @param {String} PackageName - packageName. required.
   */
  queryAppUpdateResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'TargetVersion')) {
      throw new TypeError('parameter "TargetVersion" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Events')) {
      throw new TypeError('parameter "Events" is required');
    }

    if (!hasOwnProperty(params, 'PackageName')) {
      throw new TypeError('parameter "PackageName" is required');
    }

    return this.request('QueryAppUpdateResult', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} TargetVersion - targetVersion. required.
   * @param {String} FromVersion - fromVersion. optional.
   * @param {String} DeviceModel - deviceModel. required.
   */
  queryFotaUpdateCountResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'TargetVersion')) {
      throw new TypeError('parameter "TargetVersion" is required');
    }

    if (!hasOwnProperty(params, 'DeviceModel')) {
      throw new TypeError('parameter "DeviceModel" is required');
    }

    return this.request('QueryFotaUpdateCountResult', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} TargetVersion - targetVersion. required.
   * @param {String} FromVersion - fromVersion. optional.
   * @param {String} DeviceModel - deviceModel. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  queryFotaUpdateFailureRate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'TargetVersion')) {
      throw new TypeError('parameter "TargetVersion" is required');
    }

    if (!hasOwnProperty(params, 'DeviceModel')) {
      throw new TypeError('parameter "DeviceModel" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('QueryFotaUpdateFailureRate', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} TargetVersion - targetVersion. required.
   * @param {String} FromVersion - fromVersion. optional.
   * @param {String} DeviceModel - deviceModel. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Events - events. required.
   */
  queryFotaUpdateResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'TargetVersion')) {
      throw new TypeError('parameter "TargetVersion" is required');
    }

    if (!hasOwnProperty(params, 'DeviceModel')) {
      throw new TypeError('parameter "DeviceModel" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Events')) {
      throw new TypeError('parameter "Events" is required');
    }

    return this.request('QueryFotaUpdateResult', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} PrepublishId - prepublishId. required.
   */
  queryPrepublishPassedDeviceCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'PrepublishId')) {
      throw new TypeError('parameter "PrepublishId" is required');
    }

    return this.request('QueryPrepublishPassedDeviceCount', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  queryVersionPublishCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('QueryVersionPublishCount', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} AssistId - assistId. required.
   * @param {String} AssistDescription - assistDescription. optional.
   * @param {String} AssistResult - assistResult. optional.
   * @param {String} AssistTag - assistTag. optional.
   * @param {String} AssistReason - assistReason. optional.
   * @param {String} DeviceModel - deviceModel. optional.
   * @param {String} RegionId - regionId. optional.
   */
  submitAssistReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'AssistId')) {
      throw new TypeError('parameter "AssistId" is required');
    }

    return this.request('SubmitAssistReport', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} GatewayAppId - gatewayAppId. required.
   * @param {Integer} Status - status. required.
   * @param {String} RegionId - regionId. optional.
   */
  updateApiGatewayAppStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'GatewayAppId')) {
      throw new TypeError('parameter "GatewayAppId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('UpdateApiGatewayAppStatus', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} WhiteAppVersions - whiteAppVersions. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionId - versionId. required.
   * @param {String} BlackAppVersions - blackAppVersions. optional.
   */
  updateAppBlackWhiteVersions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    return this.request('UpdateAppBlackWhiteVersions', params, options);
  }

  /**
   * @param {String} BlackVersionList - blackVersionList. optional.
   * @param {String} IsAllowNewInstall - isAllowNewInstall. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} AppId - appId. optional.
   * @param {String} AppVersion - version. optional.
   * @param {String} VersionCode - versionCode. optional.
   * @param {String} InstallType - installType. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} IsForceUpgrade - isForceUpgrade. optional.
   * @param {String} IsSilentUpgrade - isSilentUpgrade. optional.
   * @param {String} IsNeedRestart - isNeedRestart. optional.
   * @param {String} PackageUrl - packageUrl. optional.
   * @param {String} ReleaseNote - releaseNote. optional.
   * @param {String} WhiteVersionList - whiteVersionList. optional.
   * @param {String} RestartType - restartType. optional.
   * @param {String} RestartAppType - restartAppType. optional.
   * @param {String} RestartAppParam - restartAppParam. optional.
   * @param {String} DeviceAdapterList - deviceAdapterList. optional.
   * @param {String} VersionId - versionId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ApkMd5 - apkMd5. optional.
   */
  updateAppVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('UpdateAppVersion', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionId - versionId. required.
   * @param {String} ReleaseNote - releaseNote. required.
   */
  updateAppVersionReleaseNote(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'ReleaseNote')) {
      throw new TypeError('parameter "ReleaseNote" is required');
    }

    return this.request('UpdateAppVersionReleaseNote', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionId - versionId. required.
   * @param {String} Remark - remark. required.
   */
  updateAppVersionRemark(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'Remark')) {
      throw new TypeError('parameter "Remark" is required');
    }

    return this.request('UpdateAppVersionRemark', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {String} Status - status. optional.
   */
  updateAppVersionStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateAppVersionStatus', params, options);
  }

  /**
   * @param {String} BlackWhiteType - blackWhiteType. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Name - name. required.
   * @param {String} Value - value. required.
   * @param {String} ValueType - valueType. required.
   * @param {String} ValueCompareType - valueCompareType. required.
   * @param {Long} Id - id. required.
   * @param {String} RegionId - regionId. optional.
   */
  updateCustomizedFilter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BlackWhiteType')) {
      throw new TypeError('parameter "BlackWhiteType" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Value')) {
      throw new TypeError('parameter "Value" is required');
    }

    if (!hasOwnProperty(params, 'ValueType')) {
      throw new TypeError('parameter "ValueType" is required');
    }

    if (!hasOwnProperty(params, 'ValueCompareType')) {
      throw new TypeError('parameter "ValueCompareType" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateCustomizedFilter', params, options);
  }

  /**
   * @param {String} InitUsageType - initUsageType. optional.
   * @param {String} ModelName - modelName. optional.
   * @param {String} Id - id. optional.
   * @param {String} BrandName - brandName. optional.
   * @param {String} Description - description. optional.
   * @param {String} DeviceType - deviceType. optional.
   * @param {String} CanCreateDeviceId - canCreateDeviceId. optional.
   * @param {String} ProjectId - projectId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} HardwareType - hardwareType. optional.
   * @param {String} SecurityChip - securityChip. optional.
   * @param {String} OsPlatform - osPlatform. optional.
   */
  updateDeviceModel(params = {}, options = {}) {
    return this.request('UpdateDeviceModel', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Namespace - namespace. required.
   * @param {String} AuthType - authType. required.
   * @param {String} DeviceIdType - deviceIdType. optional.
   * @param {String} DeviceId - deviceId. optional.
   * @param {String} AccountType - accountType. optional.
   * @param {String} AccountId - accountId. optional.
   * @param {String} Path - path. required.
   * @param {String} OldData - oldData. required.
   * @param {String} NewData - newData. required.
   */
  updateNamespaceData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Namespace')) {
      throw new TypeError('parameter "Namespace" is required');
    }

    if (!hasOwnProperty(params, 'AuthType')) {
      throw new TypeError('parameter "AuthType" is required');
    }

    if (!hasOwnProperty(params, 'Path')) {
      throw new TypeError('parameter "Path" is required');
    }

    if (!hasOwnProperty(params, 'OldData')) {
      throw new TypeError('parameter "OldData" is required');
    }

    if (!hasOwnProperty(params, 'NewData')) {
      throw new TypeError('parameter "NewData" is required');
    }

    return this.request('UpdateNamespaceData', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} WhiteVersions - whiteVersions. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionId - versionId. required.
   * @param {String} BlackVersions - blackVersions. optional.
   */
  updateOsBlackWhiteVersions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    return this.request('UpdateOsBlackWhiteVersions', params, options);
  }

  /**
   * @param {String} IsMilestone - isMilestone. required.
   * @param {String} IsForceNightUpgrade - isForceNightUpgrade. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} DeviceModelId - deviceModelId. required.
   * @param {String} SystemVersion - systemVersion. required.
   * @param {String} ReleaseNote - releaseNote. required.
   * @param {String} Remark - remark. optional.
   * @param {String} IsForceUpgrade - isForceUpgrade. required.
   * @param {String} BlackVersionList - blackVersionList. optional.
   * @param {String} WhiteVersionList - whiteVersionList. optional.
   * @param {String} MaxClientVersion - maxClientVersion. optional.
   * @param {String} MinClientVersion - minClientVersion. optional.
   * @param {String} NightUpgradeDownloadType - nightUpgradeDownloadType. required.
   * @param {String} NightUpgradeIsShowTip - nightUpgradeIsShowTip. required.
   * @param {String} NightUpgradeIsAllowedCancel - nightUpgradeIsAllowedCancel. required.
   * @param {String} RomList - romList. required.
   * @param {String} Id - id. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} EnableMobileDownload - enableMobileDownload. required.
   * @param {String} MobileDownloadMaxSize - mobileDownloadMaxSize. optional.
   */
  updateOsVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IsMilestone')) {
      throw new TypeError('parameter "IsMilestone" is required');
    }

    if (!hasOwnProperty(params, 'IsForceNightUpgrade')) {
      throw new TypeError('parameter "IsForceNightUpgrade" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceModelId')) {
      throw new TypeError('parameter "DeviceModelId" is required');
    }

    if (!hasOwnProperty(params, 'SystemVersion')) {
      throw new TypeError('parameter "SystemVersion" is required');
    }

    if (!hasOwnProperty(params, 'ReleaseNote')) {
      throw new TypeError('parameter "ReleaseNote" is required');
    }

    if (!hasOwnProperty(params, 'IsForceUpgrade')) {
      throw new TypeError('parameter "IsForceUpgrade" is required');
    }

    if (!hasOwnProperty(params, 'NightUpgradeDownloadType')) {
      throw new TypeError('parameter "NightUpgradeDownloadType" is required');
    }

    if (!hasOwnProperty(params, 'NightUpgradeIsShowTip')) {
      throw new TypeError('parameter "NightUpgradeIsShowTip" is required');
    }

    if (!hasOwnProperty(params, 'NightUpgradeIsAllowedCancel')) {
      throw new TypeError('parameter "NightUpgradeIsAllowedCancel" is required');
    }

    if (!hasOwnProperty(params, 'RomList')) {
      throw new TypeError('parameter "RomList" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'EnableMobileDownload')) {
      throw new TypeError('parameter "EnableMobileDownload" is required');
    }

    return this.request('UpdateOsVersion', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionId - versionId. required.
   * @param {String} ReleaseNote - releaseNote. required.
   */
  updateOsVersionReleaseNote(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'ReleaseNote')) {
      throw new TypeError('parameter "ReleaseNote" is required');
    }

    return this.request('UpdateOsVersionReleaseNote', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionId - versionId. required.
   * @param {String} Remark - remark. required.
   */
  updateOsVersionRemark(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'Remark')) {
      throw new TypeError('parameter "Remark" is required');
    }

    return this.request('UpdateOsVersionRemark', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {String} Status - status. optional.
   */
  updateOsVersionStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateOsVersionStatus', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. required.
   * @param {String} RegionId - regionId. optional.
   */
  updateProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('UpdateProject', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} DeviceModel - deviceModel. required.
   * @param {String} SubscribeList - subscribeList. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} SchemaVersion - schemaVersion. optional.
   */
  updateSchemaSubscribe(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceModel')) {
      throw new TypeError('parameter "DeviceModel" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('UpdateSchemaSubscribe', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} DeviceModelId - deviceModelId. required.
   * @param {String} AuthType - authType. optional.
   * @param {String} Namespace - namespace. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Schema - schema. optional.
   * @param {String} Id - id. required.
   */
  updateShadowSchema(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceModelId')) {
      throw new TypeError('parameter "DeviceModelId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateShadowSchema', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {Long} Id - id. required.
   * @param {Integer} Sandbox - sandbox. optional.
   * @param {Integer} Production - production. optional.
   */
  updateTrigger(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateTrigger', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {String} Tags - tags. optional.
   * @param {String} ProjectId - projectId. optional.
   */
  updateUpstreamAppServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateUpstreamAppServer', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} Id - id. optional.
   */
  updateVersionDeviceGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('UpdateVersionDeviceGroup', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} PrepublishId - prepublishId. required.
   * @param {String} IsActive - isActive. required.
   * @param {String} RegionId - regionId. optional.
   */
  updateVersionPrepublishActiveStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'PrepublishId')) {
      throw new TypeError('parameter "PrepublishId" is required');
    }

    if (!hasOwnProperty(params, 'IsActive')) {
      throw new TypeError('parameter "IsActive" is required');
    }

    return this.request('UpdateVersionPrepublishActiveStatus', params, options);
  }

}

module.exports = Client;

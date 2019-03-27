
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-01-18';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppId - appId. optional.
   * @param {Integer} OsType - osType. optional.
   * @param {String} AppVersion - appVersion. optional.
   * @param {String} PatchUUID - patchUUID. optional.
   * @param {String} Brand - brand. optional.
   * @param {String} OsVersion - osVersion. optional.
   * @param {String} Model - model. optional.
   */
  addMobileFilter(params = {}, options = {}) {
    return this.request('AddMobileFilter', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppId - appId. required.
   * @param {Integer} OsType - osType. optional.
   * @param {String} VersionName - versionName. required.
   * @param {String} FileName - fileName. required.
   * @param {String} FileType - fileType. required.
   * @param {String} FileContent - fileContent. required.
   * @param {String} FileDescription - fileDescription. optional.
   */
  asyncUploadPatch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'VersionName')) {
      throw new TypeError('parameter "VersionName" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    if (!hasOwnProperty(params, 'FileType')) {
      throw new TypeError('parameter "FileType" is required');
    }

    if (!hasOwnProperty(params, 'FileContent')) {
      throw new TypeError('parameter "FileContent" is required');
    }

    return this.request('AsyncUploadPatch', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppId - appId. required.
   * @param {Integer} OsType - osType. optional.
   * @param {String} VersionName - versionName. required.
   * @param {String} PatchUUID - patchUUID. required.
   * @param {Long} Number - number. required.
   */
  betaPatch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'VersionName')) {
      throw new TypeError('parameter "VersionName" is required');
    }

    if (!hasOwnProperty(params, 'PatchUUID')) {
      throw new TypeError('parameter "PatchUUID" is required');
    }

    if (!hasOwnProperty(params, 'Number')) {
      throw new TypeError('parameter "Number" is required');
    }

    return this.request('BetaPatch', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppId - appId. required.
   * @param {Integer} OsType - osType. optional.
   * @param {String} VersionName - versionName. required.
   * @param {String} PatchUUID - patchUUID. required.
   * @param {String} Description - description. required.
   */
  confirmPatch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'VersionName')) {
      throw new TypeError('parameter "VersionName" is required');
    }

    if (!hasOwnProperty(params, 'PatchUUID')) {
      throw new TypeError('parameter "PatchUUID" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('ConfirmPatch', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppName - appName. required.
   * @param {String} Description - description. optional.
   * @param {Integer} IndustryId - industryId. optional.
   */
  createApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('CreateApp', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppId - appId. required.
   * @param {Integer} OsType - osType. optional.
   * @param {String} VersionName - versionName. required.
   */
  createAppVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'VersionName')) {
      throw new TypeError('parameter "VersionName" is required');
    }

    return this.request('CreateAppVersion', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} PatchUUID - patchUUID. required.
   * @param {String} PublishType - publishType. required.
   * @param {Integer} PlanNotifyCount - planNotifyCount. optional.
   * @param {String} StrategyGroupList - strategyGroups. optional.
   * @param {String} TargetStrategy - targetStrategy. optional.
   * @param {String} ExcludeStrategy - excludeStrategy. optional.
   */
  createBatch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PatchUUID')) {
      throw new TypeError('parameter "PatchUUID" is required');
    }

    if (!hasOwnProperty(params, 'PublishType')) {
      throw new TypeError('parameter "PublishType" is required');
    }

    return this.request('CreateBatch', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppId - appId. required.
   * @param {Integer} OsType - osType. optional.
   * @param {String} VersionName - versionName. required.
   */
  deleteAllPatches(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'VersionName')) {
      throw new TypeError('parameter "VersionName" is required');
    }

    return this.request('DeleteAllPatches', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppKey - appKey. required.
   */
  deleteApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('DeleteApp', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} FilterId - filterId. optional.
   */
  deleteMobileFilter(params = {}, options = {}) {
    return this.request('DeleteMobileFilter', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppId - appId. required.
   * @param {Integer} OsType - osType. optional.
   * @param {String} VersionName - versionName. required.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listAppPatches(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'VersionName')) {
      throw new TypeError('parameter "VersionName" is required');
    }

    return this.request('ListAppPatches', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppId - appId. required.
   * @param {Integer} OsType - osType. optional.
   */
  listAppVersions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('ListAppVersions', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  listApps(params = {}, options = {}) {
    return this.request('ListApps', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} ProductId - productId. optional.
   */
  listAppsByProductId(params = {}, options = {}) {
    return this.request('ListAppsByProductId', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  listAppsNew(params = {}, options = {}) {
    return this.request('ListAppsNew', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} PatchUUID - patchUUID. required.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listBatch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PatchUUID')) {
      throw new TypeError('parameter "PatchUUID" is required');
    }

    return this.request('ListBatch', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listDayUsage(params = {}, options = {}) {
    return this.request('ListDayUsage', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} AppKey - appKey. required.
   * @param {Integer} OsType - osType. optional.
   */
  listDayUsageByApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('ListDayUsageByApp', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppId - appId. required.
   * @param {Integer} OsType - osType. optional.
   * @param {String} VersionName - versionName. required.
   */
  listHasPublishedPatch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'VersionName')) {
      throw new TypeError('parameter "VersionName" is required');
    }

    return this.request('ListHasPublishedPatch', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Os - os. optional.
   */
  listMobileBrand(params = {}, options = {}) {
    return this.request('ListMobileBrand', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Os - os. optional.
   */
  listOsVersion(params = {}, options = {}) {
    return this.request('ListOsVersion', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listUserAllMobileFilter(params = {}, options = {}) {
    return this.request('ListUserAllMobileFilter', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} AppId - appId. required.
   * @param {Integer} OsType - osType. optional.
   */
  listUserAllMobileFilterByApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('ListUserAllMobileFilterByApp', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppId - appId. required.
   * @param {Integer} OsType - osType. optional.
   * @param {String} VersionName - versionName. required.
   * @param {String} PatchUUID - patchUUID. required.
   * @param {String} Description - description. optional.
   */
  modifyPatch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'VersionName')) {
      throw new TypeError('parameter "VersionName" is required');
    }

    if (!hasOwnProperty(params, 'PatchUUID')) {
      throw new TypeError('parameter "PatchUUID" is required');
    }

    return this.request('ModifyPatch', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppId - appId. required.
   * @param {Integer} OsType - osType. optional.
   * @param {String} VersionName - versionName. required.
   * @param {String} PatchUUID - patchUUID. required.
   */
  publishPatch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'VersionName')) {
      throw new TypeError('parameter "VersionName" is required');
    }

    if (!hasOwnProperty(params, 'PatchUUID')) {
      throw new TypeError('parameter "PatchUUID" is required');
    }

    return this.request('PublishPatch', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppId - appId. required.
   * @param {Integer} OsType - osType. optional.
   */
  queryAppInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('QueryAppInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} BatchId - batchId. required.
   */
  queryBatch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BatchId')) {
      throw new TypeError('parameter "BatchId" is required');
    }

    return this.request('QueryBatch', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} MeteringDay - meteringDay. required.
   */
  queryDayUsageDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MeteringDay')) {
      throw new TypeError('parameter "MeteringDay" is required');
    }

    return this.request('QueryDayUsageDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Integer} Year - year. required.
   * @param {Integer} Month - month. required.
   */
  queryMonthUsageInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Year')) {
      throw new TypeError('parameter "Year" is required');
    }

    if (!hasOwnProperty(params, 'Month')) {
      throw new TypeError('parameter "Month" is required');
    }

    return this.request('QueryMonthUsageInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Integer} Year - year. required.
   * @param {Integer} Month - month. required.
   * @param {String} AppKey - appKey. required.
   * @param {Integer} OsType - osType. required.
   */
  queryMonthUsageInfoByApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Year')) {
      throw new TypeError('parameter "Year" is required');
    }

    if (!hasOwnProperty(params, 'Month')) {
      throw new TypeError('parameter "Month" is required');
    }

    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'OsType')) {
      throw new TypeError('parameter "OsType" is required');
    }

    return this.request('QueryMonthUsageInfoByApp', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppId - appId. required.
   * @param {Integer} OsType - osType. optional.
   * @param {String} VersionName - versionName. required.
   * @param {String} PatchUUID - patchUUID. required.
   */
  queryPatchInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'VersionName')) {
      throw new TypeError('parameter "VersionName" is required');
    }

    if (!hasOwnProperty(params, 'PatchUUID')) {
      throw new TypeError('parameter "PatchUUID" is required');
    }

    return this.request('QueryPatchInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppId - appId. required.
   * @param {Integer} OsType - osType. optional.
   */
  queryPostCredential(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('QueryPostCredential', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppId - appId. required.
   * @param {Integer} OsType - osType. optional.
   * @param {String} VersionName - versionName. required.
   * @param {String} PatchUUID - patchUUID. required.
   */
  queryPublishInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'VersionName')) {
      throw new TypeError('parameter "VersionName" is required');
    }

    if (!hasOwnProperty(params, 'PatchUUID')) {
      throw new TypeError('parameter "PatchUUID" is required');
    }

    return this.request('QueryPublishInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppId - appId. required.
   * @param {Integer} OsType - osType. optional.
   * @param {String} VersionName - versionName. required.
   * @param {String} PatchUUID - patchUUID. required.
   */
  queryUploadStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'VersionName')) {
      throw new TypeError('parameter "VersionName" is required');
    }

    if (!hasOwnProperty(params, 'PatchUUID')) {
      throw new TypeError('parameter "PatchUUID" is required');
    }

    return this.request('QueryUploadStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppId - appId. required.
   * @param {Integer} OsType - osType. optional.
   * @param {String} VersionName - versionName. required.
   * @param {String} PatchUUID - patchUUID. required.
   */
  rollbackPatch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'VersionName')) {
      throw new TypeError('parameter "VersionName" is required');
    }

    if (!hasOwnProperty(params, 'PatchUUID')) {
      throw new TypeError('parameter "PatchUUID" is required');
    }

    return this.request('RollbackPatch', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} BatchId - batchId. required.
   */
  stopBatch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BatchId')) {
      throw new TypeError('parameter "BatchId" is required');
    }

    return this.request('StopBatch', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppId - appId. required.
   * @param {Integer} OsType - osType. optional.
   * @param {String} VersionName - versionName. required.
   * @param {String} PatchUUID - patchUUID. required.
   */
  stopPatch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'VersionName')) {
      throw new TypeError('parameter "VersionName" is required');
    }

    if (!hasOwnProperty(params, 'PatchUUID')) {
      throw new TypeError('parameter "PatchUUID" is required');
    }

    return this.request('StopPatch', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} FilterId - filterId. optional.
   * @param {String} Brand - brand. optional.
   * @param {String} OsVersion - osVersion. optional.
   * @param {String} Model - model. optional.
   */
  updateMobileFilter(params = {}, options = {}) {
    return this.request('UpdateMobileFilter', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppId - appId. required.
   * @param {Integer} OsType - osType. optional.
   * @param {String} VersionName - versionName. required.
   * @param {String} FileName - fileName. required.
   * @param {String} FileType - fileType. required.
   * @param {String} FileContent - fileContent. required.
   * @param {String} FileDescription - fileDescription. optional.
   */
  uploadPatch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'VersionName')) {
      throw new TypeError('parameter "VersionName" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    if (!hasOwnProperty(params, 'FileType')) {
      throw new TypeError('parameter "FileType" is required');
    }

    if (!hasOwnProperty(params, 'FileContent')) {
      throw new TypeError('parameter "FileContent" is required');
    }

    return this.request('UploadPatch', params, options);
  }

}

module.exports = Client;

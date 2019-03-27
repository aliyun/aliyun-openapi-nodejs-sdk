
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-07-12';
    super(config);
  }

  /**
   * @param {String} Uuids - uuids. required.
   */
  bindBuy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uuids')) {
      throw new TypeError('parameter "Uuids" is required');
    }

    return this.request('BindBuy', params, options);
  }

  /**
   * @param {Long} AliUid - aliUid. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SecurityecsInstanceId - securityecsInstanceId. required.
   */
  closeSecurityEcsService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityecsInstanceId')) {
      throw new TypeError('parameter "SecurityecsInstanceId" is required');
    }

    return this.request('CloseSecurityEcsService', params, options);
  }

  /**
   * @param {Long} GroupId - groupId. optional.
   * @param {String} Remark - remark. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. optional.
   */
  getEntityList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('GetEntityList', params, options);
  }

  /**
   */
  getGroupSummary(params = {}, options = {}) {
    return this.request('GetGroupSummary', params, options);
  }

  /**
   * @param {String} Uuid - uuid. required.
   */
  getHealthCheckTaskId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uuid')) {
      throw new TypeError('parameter "Uuid" is required');
    }

    return this.request('GetHealthCheckTaskId', params, options);
  }

  /**
   * @param {String} Uuid - uuid. required.
   * @param {String} taskId - taskId. required.
   */
  getHealthDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uuid')) {
      throw new TypeError('parameter "Uuid" is required');
    }

    if (!hasOwnProperty(params, 'taskId')) {
      throw new TypeError('parameter "taskId" is required');
    }

    return this.request('GetHealthDetail', params, options);
  }

  /**
   */
  getHealthGroupConfig(params = {}, options = {}) {
    return this.request('GetHealthGroupConfig', params, options);
  }

  /**
   */
  getHealthProjectConfig(params = {}, options = {}) {
    return this.request('GetHealthProjectConfig', params, options);
  }

  /**
   */
  getStatistics(params = {}, options = {}) {
    return this.request('GetStatistics', params, options);
  }

  /**
   * @param {String} Uuid - uuid. required.
   */
  getStatisticsByUuid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uuid')) {
      throw new TypeError('parameter "Uuid" is required');
    }

    return this.request('GetStatisticsByUuid', params, options);
  }

  /**
   */
  getSummary(params = {}, options = {}) {
    return this.request('GetSummary', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} Uuid - uuid. required.
   * @param {String} TaskId - taskId. required.
   */
  ignoreProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'Uuid')) {
      throw new TypeError('parameter "Uuid" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('IgnoreProject', params, options);
  }

  /**
   * @param {String} InstanceIds - instanceIds. required.
   * @param {String} EcsRegionId - ecsRegionId. required.
   * @param {String} Version - version. required.
   */
  openAegisService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceIds')) {
      throw new TypeError('parameter "InstanceIds" is required');
    }

    if (!hasOwnProperty(params, 'EcsRegionId')) {
      throw new TypeError('parameter "EcsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('OpenAegisService', params, options);
  }

  /**
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Uuid - uuid. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SecurityecsInstanceId - securityecsInstanceId. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} RegionNo - regionNo. required.
   * @param {String} InstanceVersion - instanceVersion. required.
   */
  openSecurityEcsService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'Uuid')) {
      throw new TypeError('parameter "Uuid" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityecsInstanceId')) {
      throw new TypeError('parameter "SecurityecsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'RegionNo')) {
      throw new TypeError('parameter "RegionNo" is required');
    }

    if (!hasOwnProperty(params, 'InstanceVersion')) {
      throw new TypeError('parameter "InstanceVersion" is required');
    }

    return this.request('OpenSecurityEcsService', params, options);
  }

  /**
   * @param {String} Info - info. required.
   * @param {String} OperateType - operateType. required.
   */
  operateCrackEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Info')) {
      throw new TypeError('parameter "Info" is required');
    }

    if (!hasOwnProperty(params, 'OperateType')) {
      throw new TypeError('parameter "OperateType" is required');
    }

    return this.request('OperateCrackEvent', params, options);
  }

  /**
   * @param {String} Info - info. required.
   * @param {String} OperateType - operateType. required.
   */
  operateLoginEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Info')) {
      throw new TypeError('parameter "Info" is required');
    }

    if (!hasOwnProperty(params, 'OperateType')) {
      throw new TypeError('parameter "OperateType" is required');
    }

    return this.request('OperateLoginEvent', params, options);
  }

  /**
   * @param {String} Info - info. required.
   * @param {String} OperateType - operateType. required.
   */
  operateSystemVul(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Info')) {
      throw new TypeError('parameter "Info" is required');
    }

    if (!hasOwnProperty(params, 'OperateType')) {
      throw new TypeError('parameter "OperateType" is required');
    }

    return this.request('OperateSystemVul', params, options);
  }

  /**
   * @param {String} Info - info. required.
   * @param {String} OperateType - operateType. required.
   */
  operateWebVul(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Info')) {
      throw new TypeError('parameter "Info" is required');
    }

    if (!hasOwnProperty(params, 'OperateType')) {
      throw new TypeError('parameter "OperateType" is required');
    }

    return this.request('OperateWebVul', params, options);
  }

  /**
   * @param {String} Info - info. required.
   * @param {String} OperateType - operateType. required.
   */
  operateWebshell(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Info')) {
      throw new TypeError('parameter "Info" is required');
    }

    if (!hasOwnProperty(params, 'OperateType')) {
      throw new TypeError('parameter "OperateType" is required');
    }

    return this.request('OperateWebshell', params, options);
  }

  /**
   * @param {String} Uuid - uuid. optional.
   * @param {Integer} Status - status. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  queryCrackEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('QueryCrackEvent', params, options);
  }

  /**
   * @param {String} Uuid - uuid. optional.
   * @param {Integer} Status - status. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  queryLoginEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('QueryLoginEvent', params, options);
  }

  /**
   * @param {String} Uuid - uuid. optional.
   * @param {Integer} Status - status. optional.
   * @param {String} StatusList - statusList. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   */
  querySystemVul(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('QuerySystemVul', params, options);
  }

  /**
   * @param {String} Uuid - uuid. optional.
   * @param {Integer} Status - status. optional.
   * @param {String} StatusList - statusList. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   */
  queryWebVul(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('QueryWebVul', params, options);
  }

  /**
   * @param {String} Uuid - uuid. required.
   * @param {Integer} Status - status. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   */
  queryWebshellByUuid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uuid')) {
      throw new TypeError('parameter "Uuid" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('QueryWebshellByUuid', params, options);
  }

  /**
   * @param {String} Uuids - uuids. required.
   * @param {String} ProjectName - projectName. required.
   */
  startCheck(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uuids')) {
      throw new TypeError('parameter "Uuids" is required');
    }

    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('StartCheck', params, options);
  }

  /**
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Uuid - uuid. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SecurityecsInstanceId - securityecsInstanceId. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} RegionNo - regionNo. required.
   * @param {String} InstanceVersion - instanceVersion. optional.
   */
  updateSecurityEcsService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'Uuid')) {
      throw new TypeError('parameter "Uuid" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityecsInstanceId')) {
      throw new TypeError('parameter "SecurityecsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'RegionNo')) {
      throw new TypeError('parameter "RegionNo" is required');
    }

    return this.request('UpdateSecurityEcsService', params, options);
  }

  /**
   * @param {String} projectName - ProjectName. required.
   * @param {String} Uuid - uuid. required.
   * @param {String} taskId - taskId. required.
   */
  verifyProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'projectName')) {
      throw new TypeError('parameter "projectName" is required');
    }

    if (!hasOwnProperty(params, 'Uuid')) {
      throw new TypeError('parameter "Uuid" is required');
    }

    if (!hasOwnProperty(params, 'taskId')) {
      throw new TypeError('parameter "taskId" is required');
    }

    return this.request('VerifyProject', params, options);
  }

}

module.exports = Client;

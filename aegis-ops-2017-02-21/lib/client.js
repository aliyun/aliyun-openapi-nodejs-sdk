
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-02-21';
    super(config);
  }

  /**
   * @param {String} Bid - bid. optional.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} InstanceIds - instanceIds. required.
   * @param {String} Region - region. required.
   */
  addUninstallClients(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'InstanceIds')) {
      throw new TypeError('parameter "InstanceIds" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    return this.request('AddUninstallClients', params, options);
  }

  /**
   * @param {String} Bid - bid. optional.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Uuids - uuids. required.
   * @param {String} Region - region. required.
   * @param {String} CallMethod - method. required.
   * @param {String} Feedback - feedback. optional.
   */
  addUninstallClientsByUuids(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'Uuids')) {
      throw new TypeError('parameter "Uuids" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'CallMethod')) {
      throw new TypeError('parameter "CallMethod" is required');
    }

    return this.request('AddUninstallClientsByUuids', params, options);
  }

  /**
   */
  checkResourceAction(params = {}, options = {}) {
    return this.request('CheckResourceAction', params, options);
  }

  /**
   * @param {String} Bid - bid. optional.
   * @param {Long} AliUid - aliUid. required.
   * @param {Long} GroupId - groupId. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} EventType - eventType. optional.
   * @param {String} RegionNo - regionNo. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. optional.
   */
  getEntityList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('GetEntityList', params, options);
  }

  /**
   * @param {String} Bid - bid. optional.
   * @param {Long} AliUid - aliUid. required.
   */
  getGroupSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('GetGroupSummary', params, options);
  }

  /**
   * @param {String} Bid - bid. optional.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Uuid - uuid. required.
   */
  getHealthCheckTaskId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'Uuid')) {
      throw new TypeError('parameter "Uuid" is required');
    }

    return this.request('GetHealthCheckTaskId', params, options);
  }

  /**
   * @param {String} Bid - bid. optional.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Uuid - uuid. required.
   * @param {String} taskId - taskId. required.
   */
  getHealthDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'Uuid')) {
      throw new TypeError('parameter "Uuid" is required');
    }

    if (!hasOwnProperty(params, 'taskId')) {
      throw new TypeError('parameter "taskId" is required');
    }

    return this.request('GetHealthDetail', params, options);
  }

  /**
   * @param {String} Bid - bid. optional.
   * @param {Long} AliUid - aliUid. required.
   */
  getStatistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('GetStatistics', params, options);
  }

  /**
   * @param {String} Bid - bid. optional.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Uuid - uuid. required.
   */
  getStatisticsByUuid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'Uuid')) {
      throw new TypeError('parameter "Uuid" is required');
    }

    return this.request('GetStatisticsByUuid', params, options);
  }

  /**
   * @param {String} Bid - bid. optional.
   * @param {Long} AliUid - aliUid. required.
   */
  getSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('GetSummary', params, options);
  }

  /**
   */
  logicalDeleteResourceAction(params = {}, options = {}) {
    return this.request('LogicalDeleteResourceAction', params, options);
  }

  /**
   * @param {String} Bid - bid. required.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Info - info. required.
   * @param {String} OperateType - operateType. required.
   */
  operateCrackEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'Info')) {
      throw new TypeError('parameter "Info" is required');
    }

    if (!hasOwnProperty(params, 'OperateType')) {
      throw new TypeError('parameter "OperateType" is required');
    }

    return this.request('OperateCrackEvent', params, options);
  }

  /**
   * @param {String} Bid - bid. required.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Info - info. required.
   * @param {String} OperateType - operateType. required.
   */
  operateLoginEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'Info')) {
      throw new TypeError('parameter "Info" is required');
    }

    if (!hasOwnProperty(params, 'OperateType')) {
      throw new TypeError('parameter "OperateType" is required');
    }

    return this.request('OperateLoginEvent', params, options);
  }

  /**
   * @param {String} Bid - bid. required.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Info - info. required.
   * @param {String} OperateType - operateType. required.
   */
  operateWebshell(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'Info')) {
      throw new TypeError('parameter "Info" is required');
    }

    if (!hasOwnProperty(params, 'OperateType')) {
      throw new TypeError('parameter "OperateType" is required');
    }

    return this.request('OperateWebshell', params, options);
  }

  /**
   */
  physicalDeleteResourceAction(params = {}, options = {}) {
    return this.request('PhysicalDeleteResourceAction', params, options);
  }

  /**
   * @param {String} Bid - bid. optional.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Uuids - uuids. required.
   * @param {String} Type - type. required.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   */
  queryAccountEventStatistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'Uuids')) {
      throw new TypeError('parameter "Uuids" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('QueryAccountEventStatistics', params, options);
  }

  /**
   * @param {String} Bid - bid. optional.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Uuid - uuid. optional.
   * @param {Integer} Status - status. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  queryCrackEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('QueryCrackEvent', params, options);
  }

  /**
   * @param {String} Bid - bid. optional.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Uuid - uuid. optional.
   * @param {Integer} Status - status. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  queryLoginEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('QueryLoginEvent', params, options);
  }

  /**
   * @param {String} Bid - bid. optional.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Uuid - uuid. optional.
   * @param {Integer} Status - status. optional.
   * @param {String} StatusList - statusList. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   */
  querySystemVul(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('QuerySystemVul', params, options);
  }

  /**
   * @param {String} Bid - bid. optional.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Uuids - uuids. required.
   */
  queryTrojanEventStatistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'Uuids')) {
      throw new TypeError('parameter "Uuids" is required');
    }

    return this.request('QueryTrojanEventStatistics', params, options);
  }

  /**
   * @param {String} Bid - bid. optional.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Uuid - uuid. optional.
   * @param {Integer} Status - status. optional.
   * @param {String} StatusList - statusList. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   */
  queryWebVul(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('QueryWebVul', params, options);
  }

  /**
   * @param {String} Bid - bid. optional.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Uuid - uuid. required.
   * @param {Integer} Status - status. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   */
  queryWebshellByUuid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'Uuid')) {
      throw new TypeError('parameter "Uuid" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('QueryWebshellByUuid', params, options);
  }

}

module.exports = Client;

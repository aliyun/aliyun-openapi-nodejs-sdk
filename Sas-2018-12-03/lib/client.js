
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-12-03';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AlarmUniqueInfo - alarmUniqueInfo. required.
   * @param {String} From - from. required.
   */
  describeAlarmEventDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AlarmUniqueInfo')) {
      throw new TypeError('parameter "AlarmUniqueInfo" is required');
    }

    if (!hasOwnProperty(params, 'From')) {
      throw new TypeError('parameter "From" is required');
    }

    return this.request('DescribeAlarmEventDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Dealed - dealed. optional.
   * @param {String} From - from. required.
   * @param {String} Levels - levels. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} AlarmEventName - alarmEventName. optional.
   * @param {String} AlarmEventType - alarmEventType. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {String} PageSize - pageSize. required.
   */
  describeAlarmEventList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'From')) {
      throw new TypeError('parameter "From" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeAlarmEventList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} GroupId - groupId. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {String} RiskLevel - riskLevel. optional.
   * @param {String} Name - name. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeRiskCheckResult(params = {}, options = {}) {
    return this.request('DescribeRiskCheckResult', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   */
  describeRiskCheckSummary(params = {}, options = {}) {
    return this.request('DescribeRiskCheckSummary', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   */
  describeRiskItemType(params = {}, options = {}) {
    return this.request('DescribeRiskItemType', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   */
  describeSecurityCheckScheduleConfig(params = {}, options = {}) {
    return this.request('DescribeSecurityCheckScheduleConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} SuspiciousEventId - suspiciousEventId. optional.
   * @param {String} From - from. required.
   */
  describeSuspEventDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'From')) {
      throw new TypeError('parameter "From" is required');
    }

    return this.request('DescribeSuspEventDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Dealed - dealed. optional.
   * @param {String} Name - name. optional.
   * @param {String} Levels - levels. optional.
   * @param {String} ParentEventTypes - parentEventTypes. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} PageSize - pageSize. optional.
   * @param {String} CurrentPage - currentPage. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AlarmUniqueInfo - alarmUniqueInfo. optional.
   * @param {String} From - from. required.
   */
  describeSuspEvents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'From')) {
      throw new TypeError('parameter "From" is required');
    }

    return this.request('DescribeSuspEvents', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   */
  describeUserBaselineAuthorization(params = {}, options = {}) {
    return this.request('DescribeUserBaselineAuthorization', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} ItemId - itemId. optional.
   * @param {Long} TaskId - taskId. optional.
   * @param {String} Status - status. optional.
   */
  modifyRiskCheckStatus(params = {}, options = {}) {
    return this.request('ModifyRiskCheckStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   * @param {RepeatList} Ids - ids. optional.
   * @param {String} Status - status. optional.
   * @param {Long} TaskId - taskId. optional.
   */
  modifyRiskSingleResultStatus(params = {}, options = {}) {
    return this.request('ModifyRiskSingleResultStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DaysOfWeek - daysOfWeek. optional.
   * @param {Integer} StartTime - startTime. optional.
   * @param {Integer} EndTime - endTime. optional.
   */
  modifySecurityCheckScheduleConfig(params = {}, options = {}) {
    return this.request('ModifySecurityCheckScheduleConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   * @param {RepeatList} ItemIds - itemIds. optional.
   * @param {RepeatList} Assets - assets. optional.
   * @param {String} Type - type. optional.
   */
  startBaselineSecurityCheck(params = {}, options = {}) {
    return this.request('StartBaselineSecurityCheck', params, options);
  }

}

module.exports = Client;


'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-09-10';
    super(config);
  }

  /**
   * @param {String} ToolCode - toolCode. required.
   * @param {String} SuiteIdList - suiteIdList. required.
   * @param {Long} PlanId - planId. required.
   */
  mGTAddSuiteToPlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ToolCode')) {
      throw new TypeError('parameter "ToolCode" is required');
    }

    if (!hasOwnProperty(params, 'SuiteIdList')) {
      throw new TypeError('parameter "SuiteIdList" is required');
    }

    if (!hasOwnProperty(params, 'PlanId')) {
      throw new TypeError('parameter "PlanId" is required');
    }

    return this.request('MGTAddSuiteToPlan', params, options);
  }

  /**
   * @param {String} ToolCode - toolCode. required.
   * @param {String} UserName - userName. required.
   * @param {String} PlanName - planName. required.
   * @param {String} PlanDescription - planDescription. optional.
   * @param {String} PlanModel - planModel. required.
   * @param {String} LoopTime - loopTime. optional.
   * @param {String} LoopUnit - loopUnit. optional.
   * @param {String} LoopStartTime - loopStartTime. optional.
   * @param {String} LoopCustomDays - loopCustomDays. optional.
   * @param {Float} PassCondition - passCondition. required.
   */
  mGTCreatePlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ToolCode')) {
      throw new TypeError('parameter "ToolCode" is required');
    }

    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    if (!hasOwnProperty(params, 'PlanName')) {
      throw new TypeError('parameter "PlanName" is required');
    }

    if (!hasOwnProperty(params, 'PlanModel')) {
      throw new TypeError('parameter "PlanModel" is required');
    }

    if (!hasOwnProperty(params, 'PassCondition')) {
      throw new TypeError('parameter "PassCondition" is required');
    }

    return this.request('MGTCreatePlan', params, options);
  }

  /**
   * @param {String} ToolCode - toolCode. required.
   * @param {String} UserName - userName. required.
   * @param {Long} PlanId - planId. required.
   */
  mGTCreateTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ToolCode')) {
      throw new TypeError('parameter "ToolCode" is required');
    }

    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    if (!hasOwnProperty(params, 'PlanId')) {
      throw new TypeError('parameter "PlanId" is required');
    }

    return this.request('MGTCreateTask', params, options);
  }

  /**
   * @param {String} ToolCode - toolCode. required.
   * @param {Long} TestSuiteId - testSuiteId. optional.
   * @param {String} Keyword - keyword. optional.
   * @param {String} UserName - userName. optional.
   * @param {Integer} PageStart - pageStart. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  mGTQueryCaseList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ToolCode')) {
      throw new TypeError('parameter "ToolCode" is required');
    }

    return this.request('MGTQueryCaseList', params, options);
  }

  /**
   * @param {String} ToolCode - toolCode. required.
   * @param {Long} TestCaseId - testCaseId. required.
   */
  mGTQueryCasedetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ToolCode')) {
      throw new TypeError('parameter "ToolCode" is required');
    }

    if (!hasOwnProperty(params, 'TestCaseId')) {
      throw new TypeError('parameter "TestCaseId" is required');
    }

    return this.request('MGTQueryCasedetail', params, options);
  }

  /**
   * @param {String} ToolCode - toolCode. required.
   * @param {Long} RecordId - recordId. required.
   * @param {Integer} PageStart - pageStart. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  mGTQueryMainTaskList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ToolCode')) {
      throw new TypeError('parameter "ToolCode" is required');
    }

    if (!hasOwnProperty(params, 'RecordId')) {
      throw new TypeError('parameter "RecordId" is required');
    }

    if (!hasOwnProperty(params, 'PageStart')) {
      throw new TypeError('parameter "PageStart" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('MGTQueryMainTaskList', params, options);
  }

  /**
   * @param {String} ToolCode - toolCode. required.
   * @param {String} Keyword - keyword. optional.
   * @param {String} UserName - userName. optional.
   * @param {Integer} PageStart - pageStart. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  mGTQueryPlanList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ToolCode')) {
      throw new TypeError('parameter "ToolCode" is required');
    }

    if (!hasOwnProperty(params, 'PageStart')) {
      throw new TypeError('parameter "PageStart" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('MGTQueryPlanList', params, options);
  }

  /**
   * @param {String} ToolCode - toolCode. required.
   * @param {String} PlanId - planId. required.
   * @param {String} Keyword - keyword. optional.
   * @param {Integer} PageStart - pageStart. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  mGTQueryRecoredList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ToolCode')) {
      throw new TypeError('parameter "ToolCode" is required');
    }

    if (!hasOwnProperty(params, 'PlanId')) {
      throw new TypeError('parameter "PlanId" is required');
    }

    if (!hasOwnProperty(params, 'PageStart')) {
      throw new TypeError('parameter "PageStart" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('MGTQueryRecoredList', params, options);
  }

  /**
   * @param {String} ToolCode - toolCode. required.
   * @param {Long} PlanId - PlanId. optional.
   * @param {Long} RecordId - recordId. optional.
   * @param {Long} MainTaskId - mainTaskId. optional.
   * @param {Integer} PageStart - pageStart. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  mGTQuerySubTaskList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ToolCode')) {
      throw new TypeError('parameter "ToolCode" is required');
    }

    return this.request('MGTQuerySubTaskList', params, options);
  }

  /**
   * @param {String} ToolCode - toolCode. required.
   * @param {Long} TestSuiteId - testSuiteId. required.
   */
  mGTQuerySuiteDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ToolCode')) {
      throw new TypeError('parameter "ToolCode" is required');
    }

    if (!hasOwnProperty(params, 'TestSuiteId')) {
      throw new TypeError('parameter "TestSuiteId" is required');
    }

    return this.request('MGTQuerySuiteDetail', params, options);
  }

  /**
   * @param {String} ToolCode - toolCode. required.
   * @param {Long} PlanId - planId. optional.
   * @param {String} Keyword - keyword. optional.
   * @param {String} UserName - userName. optional.
   * @param {Integer} PageStart - pageStart. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  mGTQuerySuiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ToolCode')) {
      throw new TypeError('parameter "ToolCode" is required');
    }

    if (!hasOwnProperty(params, 'PageStart')) {
      throw new TypeError('parameter "PageStart" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('MGTQuerySuiteList', params, options);
  }

  /**
   * @param {String} PlatformId - platformId. required.
   * @param {String} SuiteName - suiteName. required.
   * @param {String} SuiteId - suiteId. required.
   * @param {String} Tester - tester. required.
   * @param {String} ElapsedTime - elapsedTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} Status - status. required.
   * @param {String} Tests - tests. required.
   * @param {String} LogOssPath - logOssPath. optional.
   * @param {String} ReportOssPatch - reportOssPatch. optional.
   * @param {Integer} FailCount - failCount. required.
   * @param {Integer} SuccessCount - successCount. required.
   */
  mGTReportLinkEdgeTestResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PlatformId')) {
      throw new TypeError('parameter "PlatformId" is required');
    }

    if (!hasOwnProperty(params, 'SuiteName')) {
      throw new TypeError('parameter "SuiteName" is required');
    }

    if (!hasOwnProperty(params, 'SuiteId')) {
      throw new TypeError('parameter "SuiteId" is required');
    }

    if (!hasOwnProperty(params, 'Tester')) {
      throw new TypeError('parameter "Tester" is required');
    }

    if (!hasOwnProperty(params, 'ElapsedTime')) {
      throw new TypeError('parameter "ElapsedTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    if (!hasOwnProperty(params, 'Tests')) {
      throw new TypeError('parameter "Tests" is required');
    }

    if (!hasOwnProperty(params, 'FailCount')) {
      throw new TypeError('parameter "FailCount" is required');
    }

    if (!hasOwnProperty(params, 'SuccessCount')) {
      throw new TypeError('parameter "SuccessCount" is required');
    }

    return this.request('MGTReportLinkEdgeTestResult', params, options);
  }

  /**
   * @param {String} ToolCode - toolCode. required.
   * @param {Long} SubTaskId - subTaskId. required.
   * @param {String} ResultStatus - resultStatus. required.
   * @param {String} Content - content. optional.
   * @param {String} LogFilePath - logFilePath. optional.
   * @param {String} ReportFilePath - reportFilePath. optional.
   * @param {String} AttachmentPath - attachmentPath. optional.
   * @param {String} ParamOne - paramOne. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  mGTReportSubTaskResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ToolCode')) {
      throw new TypeError('parameter "ToolCode" is required');
    }

    if (!hasOwnProperty(params, 'SubTaskId')) {
      throw new TypeError('parameter "SubTaskId" is required');
    }

    if (!hasOwnProperty(params, 'ResultStatus')) {
      throw new TypeError('parameter "ResultStatus" is required');
    }

    return this.request('MGTReportSubTaskResult', params, options);
  }

}

module.exports = Client;

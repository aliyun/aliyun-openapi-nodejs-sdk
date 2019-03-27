
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-11-11';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  autoUpgradeSas(params = {}, options = {}) {
    return this.request('AutoUpgradeSas', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} RiskIdList - riskIdList. optional.
   */
  batchDeleteWhiteList(params = {}, options = {}) {
    return this.request('BatchDeleteWhiteList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  canTrySas(params = {}, options = {}) {
    return this.request('CanTrySas', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} ScreenTitle - screenTitle. required.
   * @param {String} ScreenIdSetting - screenIdSetting. required.
   */
  creatScreenSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScreenTitle')) {
      throw new TypeError('parameter "ScreenTitle" is required');
    }

    if (!hasOwnProperty(params, 'ScreenIdSetting')) {
      throw new TypeError('parameter "ScreenIdSetting" is required');
    }

    return this.request('CreatScreenSetting', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {Integer} Duration - duration. required.
   * @param {String} PricingCycle - pricingCycle. required.
   * @param {Integer} VersionCode - versionCode. required.
   * @param {Integer} VmNumber - vmNumber. required.
   * @param {Boolean} IsAutoRenew - autoRenew. optional. default: false.
   * @param {Integer} AutoRenewDuration - autoRenewPeriod. optional.
   */
  createInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'Duration')) {
      throw new TypeError('parameter "Duration" is required');
    }

    if (!hasOwnProperty(params, 'PricingCycle')) {
      throw new TypeError('parameter "PricingCycle" is required');
    }

    if (!hasOwnProperty(params, 'VersionCode')) {
      throw new TypeError('parameter "VersionCode" is required');
    }

    if (!hasOwnProperty(params, 'VmNumber')) {
      throw new TypeError('parameter "VmNumber" is required');
    }

    return this.request('CreateInstance', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} QueryName - queryName. optional.
   * @param {String} Conditions - conditions. optional.
   * @param {String} QueryDetail - queryDetail. optional.
   */
  createLogQuery(params = {}, options = {}) {
    return this.request('CreateLogQuery', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} DatasourceDescription - datasourceDescription. optional.
   * @param {String} LogStoreName - logStoreName. required.
   * @param {String} Fields - fields. required.
   * @param {String} ProjectName - projectName. required.
   * @param {String} RegionNo - regionNo. required.
   */
  createOrUpdateDataSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LogStoreName')) {
      throw new TypeError('parameter "LogStoreName" is required');
    }

    if (!hasOwnProperty(params, 'Fields')) {
      throw new TypeError('parameter "Fields" is required');
    }

    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'RegionNo')) {
      throw new TypeError('parameter "RegionNo" is required');
    }

    return this.request('CreateOrUpdateDataSource', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} Id - id. optional.
   * @param {String} RuleActionName - ruleActionName. required.
   * @param {String} SendUrl - sendUrl. required.
   * @param {Long} IntervalTime - intervalTime. optional.
   */
  createOrUpdateDingTalk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleActionName')) {
      throw new TypeError('parameter "RuleActionName" is required');
    }

    if (!hasOwnProperty(params, 'SendUrl')) {
      throw new TypeError('parameter "SendUrl" is required');
    }

    return this.request('CreateOrUpdateDingTalk', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} Id - id. optional.
   * @param {String} GroupName - groupName. optional.
   * @param {String} Description - description. optional.
   * @param {String} MachineGroupIds - machineGroupIds. optional.
   * @param {String} RuleIds - ruleIds. optional.
   */
  createOrUpdateGroup(params = {}, options = {}) {
    return this.request('CreateOrUpdateGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Actions - actions. optional.
   * @param {Long} DataSourceId1 - dataSourceId1. required.
   * @param {Long} DataSourceId2 - dataSourceId2. required.
   * @param {String} Description - description. required.
   * @param {String} Expression1 - expression1. required.
   * @param {String} Expression2 - expression2. required.
   * @param {String} JoinRelation - joinRelation. required.
   * @param {String} RuleName - ruleName. required.
   * @param {Long} RuleId - ruleId. optional.
   * @param {String} StatisticsRules - statisticsRules. optional.
   * @param {Long} TimeWindow - timeWindow. required.
   * @param {String} WarnLevel - warnLevel. required.
   */
  createOrUpdateJoinRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DataSourceId1')) {
      throw new TypeError('parameter "DataSourceId1" is required');
    }

    if (!hasOwnProperty(params, 'DataSourceId2')) {
      throw new TypeError('parameter "DataSourceId2" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'Expression1')) {
      throw new TypeError('parameter "Expression1" is required');
    }

    if (!hasOwnProperty(params, 'Expression2')) {
      throw new TypeError('parameter "Expression2" is required');
    }

    if (!hasOwnProperty(params, 'JoinRelation')) {
      throw new TypeError('parameter "JoinRelation" is required');
    }

    if (!hasOwnProperty(params, 'RuleName')) {
      throw new TypeError('parameter "RuleName" is required');
    }

    if (!hasOwnProperty(params, 'TimeWindow')) {
      throw new TypeError('parameter "TimeWindow" is required');
    }

    if (!hasOwnProperty(params, 'WarnLevel')) {
      throw new TypeError('parameter "WarnLevel" is required');
    }

    return this.request('CreateOrUpdateJoinRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} Id - id. optional.
   * @param {String} RuleName - ruleName. optional.
   * @param {String} Description - description. optional.
   * @param {String} WarnLevel - warnLevel. optional.
   * @param {String} Expressions - expressions. optional.
   * @param {Long} DataSourceId - dataSourceId. optional.
   * @param {String} RuleGroupIds - ruleGroupIds. optional.
   * @param {String} Actions - actions. optional.
   * @param {String} StatisticsRules - statisticsRules. optional.
   */
  createOrUpdateRule(params = {}, options = {}) {
    return this.request('CreateOrUpdateRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} EventNameRemark - eventNameRemark. optional.
   * @param {String} StatusList - statusList. optional.
   * @param {String} Level - level. optional.
   * @param {String} Dealed - dealed. optional.
   * @param {String} EventType - eventType. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} Tag - tag. optional.
   */
  createSuspiciousExport(params = {}, options = {}) {
    return this.request('CreateSuspiciousExport', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} InvalidWarningKeepDays - invalidWarningKeepDays. optional.
   * @param {String} AlertLevels - alertLevels. optional.
   */
  createUserSetting(params = {}, options = {}) {
    return this.request('CreateUserSetting', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} RiskIdList - riskIdList. optional.
   * @param {String} Reason - reason. optional.
   */
  createUserWhiteList(params = {}, options = {}) {
    return this.request('CreateUserWhiteList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Whitelist - whitelist. optional.
   * @param {String} Reason - reason. optional.
   */
  createVulWhitelist(params = {}, options = {}) {
    return this.request('CreateVulWhitelist', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Ids - ids. required.
   */
  deleteDingTalk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    return this.request('DeleteDingTalk', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Ids - ids. required.
   */
  deleteJoinRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    return this.request('DeleteJoinRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} QueryName - queryName. optional.
   */
  deleteLogQuery(params = {}, options = {}) {
    return this.request('DeleteLogQuery', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Id - id. required.
   */
  deleteRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} Id - id. required.
   */
  deleteRuleGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteRuleGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} ScreenTitle - screenTitle. required.
   */
  deleteScreenSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScreenTitle')) {
      throw new TypeError('parameter "ScreenTitle" is required');
    }

    return this.request('DeleteScreenSetting', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Name - name. required.
   */
  deleteSearchCondition(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('DeleteSearchCondition', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Id - id. optional.
   */
  deleteStrategy(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('DeleteStrategy', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} BatchName - batchName. optional.
   * @param {String} Resource - resource. optional.
   */
  deleteVulBatch(params = {}, options = {}) {
    return this.request('DeleteVulBatch', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Whitelist - whitelist. optional.
   */
  deleteVulWhitelist(params = {}, options = {}) {
    return this.request('DeleteVulWhitelist', params, options);
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
   * @param {Long} GroupId - groupId. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} Type - type. optional.
   * @param {String} Uuid - uuid. optional.
   * @param {Integer} Status - status. optional.
   * @param {String} StatusList - statusList. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Long} WebGroupId - webGroupId. optional.
   * @param {Integer} RuleType - ruleType. optional.
   * @param {Integer} Action1 - action1. optional.
   * @param {Integer} Flow - flow. optional.
   * @param {String} SaleId - saleId. optional.
   * @param {String} Dealed - dealed. optional.
   * @param {String} Tag - tag. optional.
   * @param {Integer} CurrentPage -  currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} SecureToken - secureToken. optional.
   */
  describeAllRegionsStatistics(params = {}, options = {}) {
    return this.request('DescribeAllRegionsStatistics', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} StartTimeStamp - startTimeStamp. optional.
   * @param {Long} EndTimeStamp - endTimeStamp. optional.
   */
  describeAnalysisCurve(params = {}, options = {}) {
    return this.request('DescribeAnalysisCurve', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Query - query. optional.
   * @param {Integer} From - from. required.
   * @param {Integer} To - to. required.
   */
  describeAnalysisHistograms(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'From')) {
      throw new TypeError('parameter "From" is required');
    }

    if (!hasOwnProperty(params, 'To')) {
      throw new TypeError('parameter "To" is required');
    }

    return this.request('DescribeAnalysisHistograms', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Query - query. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} From - from. required.
   * @param {Integer} To - to. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Boolean} Reverse - reverse. required.
   */
  describeAnalysisLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'From')) {
      throw new TypeError('parameter "From" is required');
    }

    if (!hasOwnProperty(params, 'To')) {
      throw new TypeError('parameter "To" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'Reverse')) {
      throw new TypeError('parameter "Reverse" is required');
    }

    return this.request('DescribeAnalysisLogs', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeAnalysisShipperStatus(params = {}, options = {}) {
    return this.request('DescribeAnalysisShipperStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeAnalysisSlsIndex(params = {}, options = {}) {
    return this.request('DescribeAnalysisSlsIndex', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeAnalysisStatistics(params = {}, options = {}) {
    return this.request('DescribeAnalysisStatistics', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeApiBuySummary(params = {}, options = {}) {
    return this.request('DescribeApiBuySummary', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Uuid - uuid. required.
   * @param {String} Lang - lang. optional.
   */
  describeAssetDetailByUuid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uuid')) {
      throw new TypeError('parameter "Uuid" is required');
    }

    return this.request('DescribeAssetDetailByUuid', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {String} FilterConditions - filterConditions. optional.
   * @param {String} Lang - lang. optional.
   */
  describeAssetList(params = {}, options = {}) {
    return this.request('DescribeAssetList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeAssetSummary(params = {}, options = {}) {
    return this.request('DescribeAssetSummary', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Type - type. required.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Data - data. optional.
   * @param {String} Base64 - base64. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeAttackAnalysisData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeAttackAnalysisData', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeAutoDelConfig(params = {}, options = {}) {
    return this.request('DescribeAutoDelConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeBuySummary(params = {}, options = {}) {
    return this.request('DescribeBuySummary', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} CheckWarningId - checkWarningId. required.
   */
  describeCheckWarningDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CheckWarningId')) {
      throw new TypeError('parameter "CheckWarningId" is required');
    }

    return this.request('DescribeCheckWarningDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} TypeName - typeName. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} RiskStatus - riskStatus. optional.
   * @param {String} RiskName - riskName. optional.
   * @param {Long} StrategyId - strategyId. optional.
   * @param {String} Uuids - uuids. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   */
  describeCheckWarningSummary(params = {}, options = {}) {
    return this.request('DescribeCheckWarningSummary', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Uuid - uuid. required.
   * @param {Long} RiskId - riskId. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   */
  describeCheckWarnings(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uuid')) {
      throw new TypeError('parameter "Uuid" is required');
    }

    if (!hasOwnProperty(params, 'RiskId')) {
      throw new TypeError('parameter "RiskId" is required');
    }

    return this.request('DescribeCheckWarnings', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeConcernNecessity(params = {}, options = {}) {
    return this.request('DescribeConcernNecessity', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} Id - id. optional.
   * @param {String} GroupName - groupName. optional.
   * @param {String} Description - description. optional.
   */
  describeDataSource(params = {}, options = {}) {
    return this.request('DescribeDataSource', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeDefenceThread(params = {}, options = {}) {
    return this.request('DescribeDefenceThread', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} RuleActionName - ruleActionName. optional.
   */
  describeDingTalk(params = {}, options = {}) {
    return this.request('DescribeDingTalk', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeEmgNotice(params = {}, options = {}) {
    return this.request('DescribeEmgNotice', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeEmgUserAgreement(params = {}, options = {}) {
    return this.request('DescribeEmgUserAgreement', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeEmgVulGroup(params = {}, options = {}) {
    return this.request('DescribeEmgVulGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Types - types. optional.
   * @param {Integer} LastDays - lastDays. required.
   * @param {String} VulEventLevels - vulEventLevels. optional.
   * @param {String} SuspiciousEventLevels - suspiciousEventLevels. optional.
   * @param {String} HealthEventLevels - healthEventLevels. optional.
   */
  describeEventCountCurve(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LastDays')) {
      throw new TypeError('parameter "LastDays" is required');
    }

    return this.request('DescribeEventCountCurve', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Type - type. optional.
   * @param {String} From - from. optional.
   */
  describeEventLevelCount(params = {}, options = {}) {
    return this.request('DescribeEventLevelCount', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ExportId - exportId. optional.
   */
  describeExportInfo(params = {}, options = {}) {
    return this.request('DescribeExportInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Query - query. required.
   */
  describeFilterFields(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Query')) {
      throw new TypeError('parameter "Query" is required');
    }

    return this.request('DescribeFilterFields', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} RuleGroupId - ruleGroupId. optional.
   * @param {String} WarnLevel - warnLevel. optional.
   * @param {Long} ExGroupId - exGroupId. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeGroupList(params = {}, options = {}) {
    return this.request('DescribeGroupList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} remark - remark. optional.
   * @param {String} tagIdList - tagIdList. optional.
   */
  describeGroupStruct(params = {}, options = {}) {
    return this.request('DescribeGroupStruct', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Type - type. optional.
   * @param {String} Uuids - uuids. optional.
   * @param {String} Name - name. optional.
   * @param {String} AliasName - aliasName. optional.
   * @param {Long} PatchId - patchId. optional.
   * @param {String} Level - level. optional.
   * @param {Long} LastTsStart - lastTsStart. optional.
   * @param {Long} LastTsEnd - lastTsEnd. optional.
   * @param {String} StatusList - statusList. optional.
   * @param {String} OrderBy - orderBy. optional.
   * @param {String} Direction - direction. optional.
   * @param {String} Necessity - necessity. optional.
   * @param {String} Dealed - dealed. optional.
   * @param {Long} CreateTsStart - createTsStart. optional.
   * @param {Long} CreateTsEnd - createTsEnd. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeGroupedVul(params = {}, options = {}) {
    return this.request('DescribeGroupedVul', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Query - query. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeHistogram(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Query')) {
      throw new TypeError('parameter "Query" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeHistogram', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Uuid - uuid. required.
   */
  describeInstanceStatistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uuid')) {
      throw new TypeError('parameter "Uuid" is required');
    }

    return this.request('DescribeInstanceStatistics', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} remark - remark. optional.
   * @param {String} WarnLevel - warnLevel. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} CurrentPage - currentPage. required.
   */
  describeJoinRuleList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('DescribeJoinRuleList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeListAccessKeyIdAuth(params = {}, options = {}) {
    return this.request('DescribeListAccessKeyIdAuth', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Query - query. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} CurrentPage - currentPage. required.
   * @param {String} PageSize - pageSize. required.
   */
  describeLogInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Query')) {
      throw new TypeError('parameter "Query" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeLogInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Query - query. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} CurrentPage - currentPage. required.
   * @param {String} PageSize - pageSize. required.
   * @param {Integer} AccountSnapshotOffset - accountSnapshotOffset. optional.
   * @param {Integer} PortSnapshotOffset - portSnapshotOffset. optional.
   * @param {Integer} NetworkOffset - networkOffset. optional.
   * @param {Integer} ProcessSnapshotOffset - processSnapshotOffset. optional.
   * @param {Integer} LoginOffset - loginOffset. optional.
   * @param {Integer} ProcessOffset - processOffset. optional.
   * @param {Integer} CrackOffset - crackOffset. optional.
   */
  describeLogItems(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeLogItems', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} From - from. optional.
   */
  describeLogMeta(params = {}, options = {}) {
    return this.request('DescribeLogMeta', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeLogQuery(params = {}, options = {}) {
    return this.request('DescribeLogQuery', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} From - from. optional.
   */
  describeLogShipperStatus(params = {}, options = {}) {
    return this.request('DescribeLogShipperStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {String} Statuses - statuses. optional.
   * @param {String} Types - types. optional.
   * @param {String} Tag - tag. optional.
   * @param {String} Remark - remark. optional.
   */
  describeLoginLogs(params = {}, options = {}) {
    return this.request('DescribeLoginLogs', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} From - from. optional.
   */
  describeLogstoreStorage(params = {}, options = {}) {
    return this.request('DescribeLogstoreStorage', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Target - target. optional.
   * @param {String} Types - types. optional.
   * @param {String} Type - type. optional.
   * @param {String} Config - config. optional.
   * @param {String} Extern - extern. optional.
   */
  describeMacConfig(params = {}, options = {}) {
    return this.request('DescribeMacConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Target - target. optional.
   * @param {String} Types - types. optional.
   * @param {String} Type - type. optional.
   * @param {String} Config - config. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeMachineConfig(params = {}, options = {}) {
    return this.request('DescribeMachineConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} LogStoreName - logStoreName. required.
   * @param {String} ProjectName - projectName. required.
   * @param {String} RegionNo - regionNo. required.
   */
  describeMetaData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LogStoreName')) {
      throw new TypeError('parameter "LogStoreName" is required');
    }

    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'RegionNo')) {
      throw new TypeError('parameter "RegionNo" is required');
    }

    return this.request('DescribeMetaData', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} Name - name. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} From - from. optional.
   */
  describeNsasSuspEventType(params = {}, options = {}) {
    return this.request('DescribeNsasSuspEventType', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeOperateInfo(params = {}, options = {}) {
    return this.request('DescribeOperateInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   */
  describeQuaraFile(params = {}, options = {}) {
    return this.request('DescribeQuaraFile', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} RuleName - ruleName. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} UuidList - uuidList. optional.
   * @param {String} Dealed - dealed. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} CurrentPage - currentPage. required.
   */
  describeResultList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('DescribeResultList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Uuids - uuids. optional.
   * @param {Long} StrategyId - strategyId. optional.
   */
  describeRiskType(params = {}, options = {}) {
    return this.request('DescribeRiskType', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} RiskName - riskName. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   */
  describeRiskWhiteList(params = {}, options = {}) {
    return this.request('DescribeRiskWhiteList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} RiskId - riskId. optional.
   * @param {String} RiskName - riskName. optional.
   * @param {Integer} Limit - limit. optional.
   */
  describeRisks(params = {}, options = {}) {
    return this.request('DescribeRisks', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} Id - id. optional.
   * @param {String} ExGroupId - exRuleGroupId. optional.
   * @param {Long} GroupId - ruleGroupId. optional.
   * @param {String} WarnLevel - warnLevel. optional.
   * @param {String} Remark - remark. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeRuleList(params = {}, options = {}) {
    return this.request('DescribeRuleList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {String} Uuids - uuids. optional.
   * @param {String} StatisticsColumn - statisticsColumn. optional.
   */
  describeSasAssetStatistics(params = {}, options = {}) {
    return this.request('DescribeSasAssetStatistics', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeSasAssetStatisticsColumn(params = {}, options = {}) {
    return this.request('DescribeSasAssetStatisticsColumn', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} FilterConditions - filterConditions. optional.
   * @param {String} ConditionType - conditionType. required.
   * @param {String} Lang - lang. optional.
   */
  describeSasLeftCondition(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConditionType')) {
      throw new TypeError('parameter "ConditionType" is required');
    }

    return this.request('DescribeSasLeftCondition', params, options);
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
  describeScreenAlarmEventList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'From')) {
      throw new TypeError('parameter "From" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeScreenAlarmEventList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Type - type. required.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} Data - data. optional.
   * @param {String} Base64 - base64. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeScreenAttackAnalysisData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeScreenAttackAnalysisData', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeScreenHostStatistics(params = {}, options = {}) {
    return this.request('DescribeScreenHostStatistics', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeScreenOperateInfo(params = {}, options = {}) {
    return this.request('DescribeScreenOperateInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   */
  describeScreenScoreThread(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeScreenScoreThread', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeScreenSecurityStatInfo(params = {}, options = {}) {
    return this.request('DescribeScreenSecurityStatInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} ScreenTitle - screenTitle. required.
   */
  describeScreenSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScreenTitle')) {
      throw new TypeError('parameter "ScreenTitle" is required');
    }

    return this.request('DescribeScreenSetting', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeScreenSettings(params = {}, options = {}) {
    return this.request('DescribeScreenSettings', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeScreenSummaryInfo(params = {}, options = {}) {
    return this.request('DescribeScreenSummaryInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeScreenVersionConfig(params = {}, options = {}) {
    return this.request('DescribeScreenVersionConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeSearchCondition(params = {}, options = {}) {
    return this.request('DescribeSearchCondition', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeSecureSuggestion(params = {}, options = {}) {
    return this.request('DescribeSecureSuggestion', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeSecurityStatInfo(params = {}, options = {}) {
    return this.request('DescribeSecurityStatInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} RegionNo - regionNo. required.
   */
  describeSlsProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionNo')) {
      throw new TypeError('parameter "RegionNo" is required');
    }

    return this.request('DescribeSlsProject', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeStatistics(params = {}, options = {}) {
    return this.request('DescribeStatistics', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} StrategyId - id. optional.
   */
  describeStrategyExecDetail(params = {}, options = {}) {
    return this.request('DescribeStrategyExecDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} StrategyId - id. required.
   */
  describeStrategyProcess(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StrategyId')) {
      throw new TypeError('parameter "StrategyId" is required');
    }

    return this.request('DescribeStrategyProcess', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Type - type. optional.
   * @param {String} Config - config. optional.
   */
  describeStrategyTarget(params = {}, options = {}) {
    return this.request('DescribeStrategyTarget', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StrategyIds - strategyIds. optional.
   */
  describeStratety(params = {}, options = {}) {
    return this.request('DescribeStratety', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Id - id. optional.
   */
  describeStratetyDetail(params = {}, options = {}) {
    return this.request('DescribeStratetyDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeSummaryInfo(params = {}, options = {}) {
    return this.request('DescribeSummaryInfo', params, options);
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
   * @param {Integer} ExportId - exportId. optional.
   * @param {String} From - from. optional.
   */
  describeSuspEventExportInfo(params = {}, options = {}) {
    return this.request('DescribeSuspEventExportInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} PageSize - pageSize. optional.
   * @param {String} Status - status. optional.
   * @param {String} CurrentPage - currentPage. optional.
   * @param {String} From - from. optional.
   */
  describeSuspEventQuaraFiles(params = {}, options = {}) {
    return this.request('DescribeSuspEventQuaraFiles', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeSuspEventTypes(params = {}, options = {}) {
    return this.request('DescribeSuspEventTypes', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} Id - id. optional.
   * @param {String} From - from. optional.
   */
  describeSuspEventUserSetting(params = {}, options = {}) {
    return this.request('DescribeSuspEventUserSetting', params, options);
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
   * @param {String} From - from. optional. default: sas.
   */
  describeSuspEvents(params = {}, options = {}) {
    return this.request('DescribeSuspEvents', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeSuspTrendStatistics(params = {}, options = {}) {
    return this.request('DescribeSuspTrendStatistics', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {String} Uuid - uuid. optional.
   * @param {String} Dealed - dealed. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} Level - level. optional.
   * @param {String} EventType - eventType. optional.
   */
  describeSuspiciousEvents(params = {}, options = {}) {
    return this.request('DescribeSuspiciousEvents', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} ExportId - exportId. optional.
   */
  describeSuspiciousExportInfo(params = {}, options = {}) {
    return this.request('DescribeSuspiciousExportInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Type - type. optional.
   */
  describeSuspiciousOverallConfig(params = {}, options = {}) {
    return this.request('DescribeSuspiciousOverallConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Type - type. optional.
   */
  describeSuspiciousUUIDConfig(params = {}, options = {}) {
    return this.request('DescribeSuspiciousUUIDConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Type - type. optional.
   * @param {String} Config - config. optional.
   */
  describeTarget(params = {}, options = {}) {
    return this.request('DescribeTarget', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Type - type. optional.
   * @param {String} Uuid - uuid. optional.
   */
  describeTargetConfig(params = {}, options = {}) {
    return this.request('DescribeTargetConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeTopRiskyAssets(params = {}, options = {}) {
    return this.request('DescribeTopRiskyAssets', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeTopicList(params = {}, options = {}) {
    return this.request('DescribeTopicList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} GroupId - groupId. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} Type - type. optional.
   * @param {String} Uuid - uuid. optional.
   * @param {Integer} Status - status. optional.
   * @param {String} StatusList - statusList. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Long} WebGroupId - webGroupId. optional.
   * @param {Integer} RuleType - ruleType. optional.
   * @param {Integer} Action1 - action1. optional.
   * @param {Integer} Flow - flow. optional.
   * @param {String} SaleId - saleId. optional.
   * @param {String} Dealed - dealed. optional.
   * @param {String} Tag - tag. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} SecureToken - secureToken. optional.
   * @param {String} From - from. optional.
   */
  describeTotalStatistics(params = {}, options = {}) {
    return this.request('DescribeTotalStatistics', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VertexId - vertexId. required.
   * @param {String} Uuid - uuid. required.
   * @param {String} Type - type. required.
   * @param {String} From - from. required.
   */
  describeTraceInfoDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VertexId')) {
      throw new TypeError('parameter "VertexId" is required');
    }

    if (!hasOwnProperty(params, 'Uuid')) {
      throw new TypeError('parameter "Uuid" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'From')) {
      throw new TypeError('parameter "From" is required');
    }

    return this.request('DescribeTraceInfoDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VertexId - vertexId. required.
   * @param {String} Type - type. required.
   * @param {String} EventName - eventName. optional.
   * @param {String} Uuid - uuid. required.
   * @param {String} From - from. required.
   */
  describeTraceInfoNode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VertexId')) {
      throw new TypeError('parameter "VertexId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Uuid')) {
      throw new TypeError('parameter "Uuid" is required');
    }

    if (!hasOwnProperty(params, 'From')) {
      throw new TypeError('parameter "From" is required');
    }

    return this.request('DescribeTraceInfoNode', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VertexId - vertexId. required.
   * @param {String} Uuid - uuid. required.
   * @param {String} Type - type. required.
   * @param {String} StartType - startType. required.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} From - from. required.
   */
  describeTraceInfoNodeList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VertexId')) {
      throw new TypeError('parameter "VertexId" is required');
    }

    if (!hasOwnProperty(params, 'Uuid')) {
      throw new TypeError('parameter "Uuid" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'StartType')) {
      throw new TypeError('parameter "StartType" is required');
    }

    if (!hasOwnProperty(params, 'From')) {
      throw new TypeError('parameter "From" is required');
    }

    return this.request('DescribeTraceInfoNodeList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeUserSetting(params = {}, options = {}) {
    return this.request('DescribeUserSetting', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Uuid - uuid. optional.
   */
  describeUuidConfig(params = {}, options = {}) {
    return this.request('DescribeUuidConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeVersionConfig(params = {}, options = {}) {
    return this.request('DescribeVersionConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Resource - resource. required.
   */
  describeVulBatch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Resource')) {
      throw new TypeError('parameter "Resource" is required');
    }

    return this.request('DescribeVulBatch', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Type - type. optional.
   */
  describeVulConfig(params = {}, options = {}) {
    return this.request('DescribeVulConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Type - type. required.
   * @param {String} Name - name. required.
   * @param {String} AliasName - aliasName. optional.
   */
  describeVulDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('DescribeVulDetails', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ExportId - exportId. optional.
   */
  describeVulExportInfo(params = {}, options = {}) {
    return this.request('DescribeVulExportInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeVulLevel(params = {}, options = {}) {
    return this.request('DescribeVulLevel', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Uuids - uuids. optional.
   * @param {Long} StartTs - startTs. optional.
   * @param {Long} EndTs - endTs. optional.
   */
  describeVulLevelStatistics(params = {}, options = {}) {
    return this.request('DescribeVulLevelStatistics', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} Type - type. optional.
   * @param {String} Uuids - uuids. optional.
   * @param {String} Name - name. optional.
   * @param {String} AliasName - aliasName. optional.
   * @param {String} Level - level. optional.
   * @param {String} StatusList - statusList. optional.
   * @param {String} Necessity - necessity. optional.
   * @param {String} Dealed - dealed. optional.
   * @param {String} BatchName - batchName. optional.
   * @param {String} Resource - resource. optional.
   * @param {Long} CreateTsStart - createTsStart. optional.
   * @param {Long} CreateTsEnd - createTsEnd. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeVulList(params = {}, options = {}) {
    return this.request('DescribeVulList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Uuids - uuids. optional.
   * @param {Long} StartTs - startTs. optional.
   * @param {Long} EndTs - endTs. optional.
   */
  describeVulMachineList(params = {}, options = {}) {
    return this.request('DescribeVulMachineList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Uuids - uuids. optional.
   * @param {Long} StartTs - startTs. optional.
   * @param {Long} EndTs - endTs. optional.
   * @param {Long} CreateTsStart - createTsStart. optional.
   * @param {Long} CreateTsEnd - createTsEnd. optional.
   */
  describeVulNumStatistics(params = {}, options = {}) {
    return this.request('DescribeVulNumStatistics', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Type - type. optional.
   */
  describeVulTargetStatistics(params = {}, options = {}) {
    return this.request('DescribeVulTargetStatistics', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeVulWhitelist(params = {}, options = {}) {
    return this.request('DescribeVulWhitelist', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CronJobId - cronJobId. optional.
   */
  describeVulnerabilitySummary(params = {}, options = {}) {
    return this.request('DescribeVulnerabilitySummary', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} TypeNames - typeNames. optional.
   * @param {String} SubTypeNames - subTypeNames. optional.
   * @param {String} RiskLevels - riskLevels. optional.
   * @param {String} StatusList - statusList. optional.
   * @param {String} RiskName - riskName. optional.
   * @param {Long} StrategyId - strategyId. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {String} Uuids - uuids. optional.
   * @param {String} Dealed - dealed. optional.
   */
  describeWarning(params = {}, options = {}) {
    return this.request('DescribeWarning', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} MachineName - machineName. optional.
   * @param {String} Uuids - uuids. optional.
   * @param {Long} RiskId - riskId. required.
   * @param {Long} StrategyId - strategyId. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   */
  describeWarningMachines(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RiskId')) {
      throw new TypeError('parameter "RiskId" is required');
    }

    return this.request('DescribeWarningMachines', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeWebLockBindList(params = {}, options = {}) {
    return this.request('DescribeWebLockBindList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Uuid - uuid. optional.
   */
  describeWebLockConfigList(params = {}, options = {}) {
    return this.request('DescribeWebLockConfigList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} Tag - tag. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} EventName - eventName. optional.
   * @param {String} Level - level. optional.
   * @param {String} Dealed - dealed. optional.
   * @param {String} StatusList - statusList. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeWebLockEvents(params = {}, options = {}) {
    return this.request('DescribeWebLockEvents', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeWebLockMachineList(params = {}, options = {}) {
    return this.request('DescribeWebLockMachineList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} From - from. optional.
   */
  describeWebLockStatus(params = {}, options = {}) {
    return this.request('DescribeWebLockStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} GroupId - groupId. optional.
   * @param {String} Remark - remark. optional.
   * @param {Integer} Tag - tag. optional.
   * @param {String} Dealed - dealed. optional.
   */
  describeWebshell(params = {}, options = {}) {
    return this.request('DescribeWebshell', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeYesterdayStatistics(params = {}, options = {}) {
    return this.request('DescribeYesterdayStatistics', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Uuids - uuids. optional.
   * @param {String} TypeNames - typeNames. optional.
   * @param {String} SubTypeNames - subTypeNames. optional.
   * @param {String} RiskLevels - riskLevels. optional.
   * @param {String} StatusList - statusList. optional.
   * @param {String} RiskName - riskName. optional.
   * @param {String} Dealed - dealed. optional.
   * @param {Long} StrategyId - strategyId. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   */
  describesummary(params = {}, options = {}) {
    return this.request('Describesummary', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Query - query. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  downloadLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Query')) {
      throw new TypeError('parameter "Query" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DownloadLog', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} StrategyId - id. optional.
   */
  execStrategy(params = {}, options = {}) {
    return this.request('ExecStrategy', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} RuleId - ruleId. required.
   * @param {String} Message - message. required.
   */
  executeRuleEngineActualTime(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    if (!hasOwnProperty(params, 'Message')) {
      throw new TypeError('parameter "Message" is required');
    }

    return this.request('ExecuteRuleEngineActualTime', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Dealed - dealed. optional.
   * @param {String} TimeStart - timeStart. optional.
   * @param {String} TimeEnd - timeEnd. optional.
   * @param {String} Name - name. optional.
   * @param {String} Levels - levels. optional.
   * @param {String} ParentEventTypes - parentEventTypes. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} Status - status. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} From - from. optional.
   */
  exportSuspEvents(params = {}, options = {}) {
    return this.request('ExportSuspEvents', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Type - type. optional.
   * @param {String} Uuids - uuids. optional.
   * @param {String} Name - name. optional.
   * @param {String} Level - level. optional.
   * @param {String} StatusList - statusList. optional.
   * @param {String} AliasName - aliasName. optional.
   * @param {String} BatchName - batchName. optional.
   * @param {String} Resource - resource. optional.
   * @param {String} Necessity - necessity. optional.
   * @param {String} Dealed - dealed. optional.
   */
  exportVul(params = {}, options = {}) {
    return this.request('ExportVul', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Uuids - uuids. optional.
   * @param {String} TypeName - typeName. optional.
   * @param {String} TypeNames - typeNames. optional.
   * @param {String} SubTypeNames - subTypeNames. optional.
   * @param {String} RiskLevels - riskLevels. optional.
   * @param {String} StatusList - statusList. optional.
   * @param {String} RiskName - riskName. optional.
   * @param {String} Dealed - dealed. optional.
   * @param {Integer} IsSummaryExport - isSummaryExport. optional.
   * @param {Long} StrategyId - strategyId. optional.
   * @param {String} RiskIds - riskIds. optional.
   * @param {String} ExportType - exportType. optional.
   */
  exportWarning(params = {}, options = {}) {
    return this.request('ExportWarning', params, options);
  }

  /**
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  getAccountStatistics(params = {}, options = {}) {
    return this.request('GetAccountStatistics', params, options);
  }

  /**
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  getCrackStatistics(params = {}, options = {}) {
    return this.request('GetCrackStatistics', params, options);
  }

  /**
   * @param {Long} GroupId - groupId. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} EventType - eventType. optional.
   * @param {String} RegionNo - regionNo. optional.
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
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
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
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} CheckWarningIds - checkWarningIds. required.
   * @param {String} RiskId - riskId. required.
   * @param {Long} Type - type. required.
   * @param {String} Reason - reason. optional.
   */
  ignoreHcCheckWarnings(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CheckWarningIds')) {
      throw new TypeError('parameter "CheckWarningIds" is required');
    }

    if (!hasOwnProperty(params, 'RiskId')) {
      throw new TypeError('parameter "RiskId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('IgnoreHcCheckWarnings', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} GroupId - groupId. optional.
   * @param {String} Uuids - uuids. optional.
   */
  modifyAssetGroup(params = {}, options = {}) {
    return this.request('ModifyAssetGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} Days - days. optional.
   */
  modifyAutoDelConfig(params = {}, options = {}) {
    return this.request('ModifyAutoDelConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Info - info. optional.
   * @param {String} Reason - reason. optional.
   */
  modifyBatchIgnoreVul(params = {}, options = {}) {
    return this.request('ModifyBatchIgnoreVul', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} From - from. optional.
   */
  modifyClearLogstoreStorage(params = {}, options = {}) {
    return this.request('ModifyClearLogstoreStorage', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ConcernNecessity - concernNecessity. optional.
   */
  modifyConcernNecessity(params = {}, options = {}) {
    return this.request('ModifyConcernNecessity', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Name - name. optional.
   * @param {String} UserAgreement - userAgreement. optional.
   */
  modifyEmgVulSubmit(params = {}, options = {}) {
    return this.request('ModifyEmgVulSubmit', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} From - from. optional.
   * @param {String} Project - project. optional.
   * @param {String} LogStore - logStore. optional.
   * @param {String} Status - status. optional.
   */
  modifyLogMetaStatus(params = {}, options = {}) {
    return this.request('ModifyLogMetaStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Type - type. optional.
   * @param {String} Target - target. optional.
   */
  modifyMachineConfig(params = {}, options = {}) {
    return this.request('ModifyMachineConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} From - from. optional.
   */
  modifyOpenLogShipper(params = {}, options = {}) {
    return this.request('ModifyOpenLogShipper', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} StatisticsColumn - statisticsColumn. optional.
   */
  modifySasAssetStatisticsColumn(params = {}, options = {}) {
    return this.request('ModifySasAssetStatisticsColumn', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} StatusList - statusList. optional.
   * @param {String} Dealed - dealed. optional.
   * @param {String} Type - type. optional.
   * @param {String} Uuids - uuids. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} Level - level. optional.
   * @param {String} Name - name. optional.
   * @param {String} AliasName - aliasName. optional.
   * @param {String} Necessity - necessity. optional.
   * @param {String} BatchName - batchName. optional.
   * @param {String} Resource - resource. optional.
   */
  modifySaveVulBatch(params = {}, options = {}) {
    return this.request('ModifySaveVulBatch', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} ScreenTitle - screenTitle. required.
   * @param {String} ScreenIdSetting - screenIdSetting. required.
   */
  modifyScreenSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScreenTitle')) {
      throw new TypeError('parameter "ScreenTitle" is required');
    }

    if (!hasOwnProperty(params, 'ScreenIdSetting')) {
      throw new TypeError('parameter "ScreenIdSetting" is required');
    }

    return this.request('ModifyScreenSetting', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Name - name. required.
   * @param {String} FilterConditions - filterConditions. optional.
   */
  modifySearchCondition(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('ModifySearchCondition', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} CycleDays - cycleDays. optional.
   * @param {String} Name - name. optional.
   * @param {String} CycleStartTime - cycleStartTime. optional.
   * @param {String} RiskSubTypeName - riskSubTypeName. optional.
   * @param {String} Id - id. optional.
   */
  modifyStrategy(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('ModifyStrategy', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Type - type. optional.
   * @param {String} Config - config. optional.
   * @param {String} Target - target. optional.
   */
  modifyStrategyTarget(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('ModifyStrategyTarget', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Type - type. optional.
   * @param {String} Uuid - uuid. optional.
   * @param {String} Config - config. optional.
   */
  modifyTargetConfig(params = {}, options = {}) {
    return this.request('ModifyTargetConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Type - type. optional.
   * @param {String} Config - config. optional.
   */
  modifyVulConfig(params = {}, options = {}) {
    return this.request('ModifyVulConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} ConcernLevel - concernLevel. optional.
   */
  modifyVulLevel(params = {}, options = {}) {
    return this.request('ModifyVulLevel', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Config - config. optional.
   * @param {String} Target - target. optional.
   */
  modifyVulTarget(params = {}, options = {}) {
    return this.request('ModifyVulTarget', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Uuid - uuid. optional.
   * @param {String} Dir - dir. optional.
   * @param {String} ExclusiveDir - exclusiveDir. optional.
   * @param {String} ExclusiveFileType - exclusiveFileType. optional.
   * @param {String} LocalBackupDir - localBackupDir. optional.
   */
  modifyWebLockCreateConfig(params = {}, options = {}) {
    return this.request('ModifyWebLockCreateConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} Id - id. optional.
   * @param {String} Uuid - uuid. optional.
   */
  modifyWebLockDeleteConfig(params = {}, options = {}) {
    return this.request('ModifyWebLockDeleteConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Uuids - uuids. optional.
   */
  modifyWebLockMachineList(params = {}, options = {}) {
    return this.request('ModifyWebLockMachineList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Operation - operation. optional.
   * @param {String} EventIds - eventIds. optional.
   */
  modifyWebLockOperateEvents(params = {}, options = {}) {
    return this.request('ModifyWebLockOperateEvents', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Uuid - uuid. optional.
   */
  modifyWebLockRefresh(params = {}, options = {}) {
    return this.request('ModifyWebLockRefresh', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Uuid - uuid. optional.
   * @param {String} Status - status. optional.
   */
  modifyWebLockStatus(params = {}, options = {}) {
    return this.request('ModifyWebLockStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} Id - id. optional.
   * @param {String} Uuid - uuid. optional.
   * @param {String} Dir - dir. optional.
   * @param {String} ExclusiveDir - exclusiveDir. optional.
   * @param {String} ExclusiveFileType - exclusiveFileType. optional.
   * @param {String} LocalBackupDir - localBackupDir. optional.
   */
  modifyWebLockUpdateConfig(params = {}, options = {}) {
    return this.request('ModifyWebLockUpdateConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} BuyVersion - buyVersion. required.
   */
  openSasTrial(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BuyVersion')) {
      throw new TypeError('parameter "BuyVersion" is required');
    }

    return this.request('OpenSasTrial', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Ids - ids. required.
   * @param {Long} Status - status. required.
   */
  operateResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('OperateResult', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} OperateType - operateType. optional.
   * @param {String} Data - data. optional.
   */
  operateSuspiciousEvent(params = {}, options = {}) {
    return this.request('OperateSuspiciousEvent', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Type - type. required.
   * @param {String} Config - config. required.
   */
  operateSuspiciousOverallConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Config')) {
      throw new TypeError('parameter "Config" is required');
    }

    return this.request('OperateSuspiciousOverallConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Type - type. required.
   * @param {String} TargetType - targetType. required.
   * @param {String} TargetOperations - targetOperations. required.
   */
  operateSuspiciousTargetConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'TargetType')) {
      throw new TypeError('parameter "TargetType" is required');
    }

    if (!hasOwnProperty(params, 'TargetOperations')) {
      throw new TypeError('parameter "TargetOperations" is required');
    }

    return this.request('OperateSuspiciousTargetConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Info - info. optional.
   * @param {String} OperateType - operateType. optional.
   * @param {String} Type - type. optional.
   * @param {String} Reason - reason. optional.
   */
  operateVul(params = {}, options = {}) {
    return this.request('OperateVul', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} OperateType - operateType. optional.
   * @param {String} RiskWarningIds - riskWarningIds. optional.
   * @param {String} Reason - reason. optional.
   */
  operateWarning(params = {}, options = {}) {
    return this.request('OperateWarning', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} SuspiciousEventIds - suspiciousEventIds. optional.
   * @param {String} Operation - operation. optional.
   * @param {String} SubOperation - subOperation. optional.
   * @param {String} From - from. optional.
   * @param {String} WarnType - warnType. optional.
   */
  operationSuspEvents(params = {}, options = {}) {
    return this.request('OperationSuspEvents', params, options);
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  releaseInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ReleaseInstance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} VmNumber - vmNumber. required.
   * @param {Integer} Duration - duration. required.
   * @param {String} PricingCycle - pricingCycle. required.
   */
  renewInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'VmNumber')) {
      throw new TypeError('parameter "VmNumber" is required');
    }

    if (!hasOwnProperty(params, 'Duration')) {
      throw new TypeError('parameter "Duration" is required');
    }

    if (!hasOwnProperty(params, 'PricingCycle')) {
      throw new TypeError('parameter "PricingCycle" is required');
    }

    return this.request('RenewInstance', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} EventName - eventName. optional.
   * @param {String} Tag - tag. optional.
   * @param {String} EventType - eventType. optional.
   * @param {String} Uuid - uuid. optional.
   */
  rollbackQuaraFile(params = {}, options = {}) {
    return this.request('RollbackQuaraFile', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} QuaraFileId - quaraFileId. optional.
   * @param {String} From - from. optional.
   */
  rollbackSuspEventQuaraFile(params = {}, options = {}) {
    return this.request('RollbackSuspEventQuaraFile', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} LevelsOn - levelsOn. optional.
   * @param {String} From - from. optional.
   */
  saveSuspEventUserSetting(params = {}, options = {}) {
    return this.request('SaveSuspEventUserSetting', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} LogStoreName - logStoreName. required.
   * @param {String} ProjectName - projectName. required.
   * @param {Integer} Status - status. required.
   * @param {String} RegionNo - regionNo. required.
   */
  setDatasourceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LogStoreName')) {
      throw new TypeError('parameter "LogStoreName" is required');
    }

    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    if (!hasOwnProperty(params, 'RegionNo')) {
      throw new TypeError('parameter "RegionNo" is required');
    }

    return this.request('SetDatasourceStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  transformLeakage(params = {}, options = {}) {
    return this.request('TransformLeakage', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} VersionCode - versionCode. required.
   * @param {Integer} VmNumber - vmNumber. required.
   */
  upgradeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'VersionCode')) {
      throw new TypeError('parameter "VersionCode" is required');
    }

    if (!hasOwnProperty(params, 'VmNumber')) {
      throw new TypeError('parameter "VmNumber" is required');
    }

    return this.request('UpgradeInstance', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} RiskIds - riskIds. required.
   * @param {String} Uuids - uuids. required.
   */
  validateHcWarnings(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RiskIds')) {
      throw new TypeError('parameter "RiskIds" is required');
    }

    if (!hasOwnProperty(params, 'Uuids')) {
      throw new TypeError('parameter "Uuids" is required');
    }

    return this.request('ValidateHcWarnings', params, options);
  }

}

module.exports = Client;

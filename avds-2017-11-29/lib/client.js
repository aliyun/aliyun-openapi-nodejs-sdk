
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-11-29';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoginType - loginType. optional.
   * @param {String} LoginUrl - loginUrl. optional.
   * @param {String} Asset - asset. optional.
   * @param {String} UserName - userName. optional.
   * @param {String} PassWord - passWord. optional.
   * @param {String} Cookie - cookie. optional.
   */
  addAssetLogin(params = {}, options = {}) {
    return this.request('AddAssetLogin', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} Assets - assets. required.
   * @param {Boolean} StartAfterVerified - startAfterVerified. optional.
   * @param {String} AssetGroupId - assetGroupId. optional.
   */
  addAssets(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Assets')) {
      throw new TypeError('parameter "Assets" is required');
    }

    return this.request('AddAssets', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} Emails - emails. optional.
   */
  addEmails(params = {}, options = {}) {
    return this.request('AddEmails', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Name - name. optional.
   * @param {String} KeyWords - keyWords. optional.
   * @param {RepeatList} Assets - assets. optional.
   */
  addKeyWords(params = {}, options = {}) {
    return this.request('AddKeyWords', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Asset - asset. optional.
   * @param {String} TargetUrl - targetUrl. optional.
   */
  addMonitorUrl(params = {}, options = {}) {
    return this.request('AddMonitorUrl', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} AuthUid - authUid. optional.
   */
  addUserVerifyAuth(params = {}, options = {}) {
    return this.request('AddUserVerifyAuth', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   */
  addWafWhiteList(params = {}, options = {}) {
    return this.request('AddWafWhiteList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} AssetIds - assetIds. optional.
   * @param {String} NewAssetGroupId - newAssetGroupId. optional.
   */
  changeAssetGroup(params = {}, options = {}) {
    return this.request('ChangeAssetGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  confirmAgreement(params = {}, options = {}) {
    return this.request('ConfirmAgreement', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} CronJobIds - cronJobIds. optional.
   */
  continueCronJobs(params = {}, options = {}) {
    return this.request('ContinueCronJobs', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} ScanIds - scanIds. optional.
   */
  continueScans(params = {}, options = {}) {
    return this.request('ContinueScans', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Name - name. optional.
   */
  createAssetGroup(params = {}, options = {}) {
    return this.request('CreateAssetGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Name - name. optional.
   * @param {RepeatList} Targets - targets. optional.
   * @param {RepeatList} TargetAssetGroupIds - targetAssetGroupIds. optional.
   * @param {Integer} ScanAll - scanAll. optional.
   * @param {String} FlowName - flowName. optional.
   * @param {String} TriggerType - triggerType. optional.
   * @param {String} Period - period. optional.
   * @param {Integer} Interval - interval. optional.
   * @param {Long} StartDate - startDate. optional.
   * @param {Long} EndDate - endDate. optional.
   * @param {Integer} Qps - qps. optional.
   * @param {String} RuntimeStart - runtimeStart. optional.
   * @param {String} RuntimeEnd - runtimeEnd. optional.
   */
  createCronJob(params = {}, options = {}) {
    return this.request('CreateCronJob', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} TemplateCode - templateCode. optional.
   * @param {String} Name - name. optional.
   * @param {String} Title - title. optional.
   * @param {RepeatList} Chapters - chapters. optional.
   */
  createCustomizeReportTemplate(params = {}, options = {}) {
    return this.request('CreateCustomizeReportTemplate', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {String} CommodityCode - commodityCode. optional.
   * @param {String} OrderType - orderType. optional.
   * @param {Integer} Duration - duration. required.
   * @param {String} PricingCycle - pricingCycle. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} ServiceVersion - serviceVersion. optional.
   * @param {Long} SiteNum - siteNum. optional.
   * @param {Long} AddVulNum - addVulNum. optional.
   * @param {Long} UrlNum - urlNum. optional.
   */
  createInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'Duration')) {
      throw new TypeError('parameter "Duration" is required');
    }

    return this.request('CreateInstance', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Name - name. optional.
   * @param {String} TemplateType - templateType. optional.
   * @param {String} TemplateCode - templateCode. optional.
   * @param {String} TemplateId - templateId. optional.
   * @param {String} RefType - refType. optional.
   * @param {RepeatList} RefList - refList. optional.
   * @param {RepeatList} SeverityList - severityList. optional.
   * @param {RepeatList} Formats - formats. optional.
   * @param {String} ExportMode - exportMode. optional.
   * @param {RepeatList} Receivers - receivers. optional.
   */
  createReport(params = {}, options = {}) {
    return this.request('CreateReport', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Name - name. optional.
   * @param {RepeatList} Targets - targets. optional.
   * @param {RepeatList} TargetAssetGroupIds - targetAssetGroupIds. optional.
   * @param {String} ScanType - scanType. optional.
   * @param {Integer} ScanAll - scanAll. optional.
   * @param {String} FlowName - flowName. optional.
   * @param {Integer} EnableAssetDiscover - enableAssetDiscover. optional.
   * @param {String} TriggerType - triggerType. optional.
   * @param {String} Period - period. optional.
   * @param {Integer} Interval - interval. optional.
   * @param {Long} StartDate - startDate. optional.
   * @param {Long} EndDate - endDate. optional.
   * @param {Integer} Qps - qps. optional.
   * @param {String} RuntimeStart - runtimeStart. optional.
   * @param {String} RuntimeEnd - runtimeEnd. optional.
   * @param {Integer} IndexIntervalInMinute - indexIntervalInMinute. optional.
   * @param {Integer} SiteIntervalInDay - siteIntervalInDay. optional.
   * @param {Integer} EnableAssetLoginScan - enableAssetLoginScan. optional.
   */
  createScan(params = {}, options = {}) {
    return this.request('CreateScan', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AssetId - assetId. optional.
   */
  deleteAsset(params = {}, options = {}) {
    return this.request('DeleteAsset', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AssetGroupId - assetGroupId. optional.
   */
  deleteAssetGroup(params = {}, options = {}) {
    return this.request('DeleteAssetGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} Ids - ids. optional.
   * @param {String} Asset - asset. optional.
   */
  deleteAssetLogins(params = {}, options = {}) {
    return this.request('DeleteAssetLogins', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} AssetIds - assetIds. optional.
   */
  deleteAssets(params = {}, options = {}) {
    return this.request('DeleteAssets', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} CronJobIds - cronJobIds. optional.
   */
  deleteCronJobs(params = {}, options = {}) {
    return this.request('DeleteCronJobs', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TemplateId - templateId. optional.
   */
  deleteCustomizeReportTemplate(params = {}, options = {}) {
    return this.request('DeleteCustomizeReportTemplate', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} Emails - emails. optional.
   */
  deleteEmails(params = {}, options = {}) {
    return this.request('DeleteEmails', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} Ids - ids. optional.
   */
  deleteKeyWords(params = {}, options = {}) {
    return this.request('DeleteKeyWords', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} Ids - ids. optional.
   */
  deleteMonitorUrls(params = {}, options = {}) {
    return this.request('DeleteMonitorUrls', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} ReportIds - reportIds. optional.
   */
  deleteReports(params = {}, options = {}) {
    return this.request('DeleteReports', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} ScanIds - scanIds. optional.
   */
  deleteScans(params = {}, options = {}) {
    return this.request('DeleteScans', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  describeAgreementStatus(params = {}, options = {}) {
    return this.request('DescribeAgreementStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScanId - scanId. optional.
   * @param {String} Name - name. optional.
   * @param {String} Search - search. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} Severity - severity. optional.
   * @param {String} Status - status. optional.
   * @param {Long} BeginTime - beginTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Long} TaskId - taskId. optional.
   * @param {String} Category - category. optional.
   * @param {String} Module - module. optional.
   * @param {Long} VulType - vulType. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeAllVulnerabilities(params = {}, options = {}) {
    return this.request('DescribeAllVulnerabilities', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AssetId - assetId. optional.
   */
  describeAsset(params = {}, options = {}) {
    return this.request('DescribeAsset', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScanId - scanId. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeAssetContentRisksStatDetail(params = {}, options = {}) {
    return this.request('DescribeAssetContentRisksStatDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeAssetGroups(params = {}, options = {}) {
    return this.request('DescribeAssetGroups', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} Assets - assets. optional.
   * @param {String} LoginType - loginType. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeAssetLoginList(params = {}, options = {}) {
    return this.request('DescribeAssetLoginList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} AssetPortId - assetPortId. optional.
   */
  describeAssetPortVulnerabilityStat(params = {}, options = {}) {
    return this.request('DescribeAssetPortVulnerabilityStat', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} AssetPortIds - assetPortIds. required.
   */
  describeAssetPortVulnerabilityStats(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AssetPortIds')) {
      throw new TypeError('parameter "AssetPortIds" is required');
    }

    return this.request('DescribeAssetPortVulnerabilityStats', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AssetId - assetId. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeAssetPorts(params = {}, options = {}) {
    return this.request('DescribeAssetPorts', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  describeAssetScanStat(params = {}, options = {}) {
    return this.request('DescribeAssetScanStat', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  describeAssetStatusStat(params = {}, options = {}) {
    return this.request('DescribeAssetStatusStat', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} GmtCreateFrom - gmtCreateFrom. optional.
   * @param {Long} GmtCreateTo - gmtCreateTo. optional.
   * @param {String} Source - source. optional.
   */
  describeAssetTypeStat(params = {}, options = {}) {
    return this.request('DescribeAssetTypeStat', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScanId - scanId. optional.
   * @param {Long} TaskId - taskId. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeAssetVulnerabilitiesStatDetail(params = {}, options = {}) {
    return this.request('DescribeAssetVulnerabilitiesStatDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CronJobId - cronJobId. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeAssetVulnerabilityStats(params = {}, options = {}) {
    return this.request('DescribeAssetVulnerabilityStats', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Status - status. optional.
   * @param {String} Search - search. optional.
   * @param {RepeatList} Types - types. optional.
   * @param {String} AssetGroupId - assetGroupId. optional.
   * @param {String} Source - source. optional.
   * @param {RepeatList} Assets - assets. optional.
   * @param {Long} GmtCreateFrom - gmtCreateFrom. optional.
   * @param {Long} GmtCreateTo - gmtCreateTo. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeAssets(params = {}, options = {}) {
    return this.request('DescribeAssets', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Asset - asset. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeBaseLine(params = {}, options = {}) {
    return this.request('DescribeBaseLine', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} Id - id. optional.
   * @param {String} ContentType - contentType. optional.
   */
  describeContentRisk(params = {}, options = {}) {
    return this.request('DescribeContentRisk', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScanId - scanId. optional.
   */
  describeContentRiskFixedStat(params = {}, options = {}) {
    return this.request('DescribeContentRiskFixedStat', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScanId - scanId. optional.
   * @param {String} Hostname - hostname. optional.
   */
  describeContentRiskSeverityStat(params = {}, options = {}) {
    return this.request('DescribeContentRiskSeverityStat', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScanId - scanId. optional.
   * @param {String} Hostname - hostname. optional.
   */
  describeContentRiskTypeStat(params = {}, options = {}) {
    return this.request('DescribeContentRiskTypeStat', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScanId - scanId. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeContentRiskTypeStatDetail(params = {}, options = {}) {
    return this.request('DescribeContentRiskTypeStatDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScanId - scanId. optional.
   * @param {String} Search - search. optional.
   * @param {Integer} Severity - severity. optional.
   * @param {Integer} Status - status. optional.
   * @param {RepeatList} RiskTypes - riskTypes. optional.
   * @param {Long} BeginTime - beginTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeContentRisks(params = {}, options = {}) {
    return this.request('DescribeContentRisks', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CronJobId - cronJobId. optional.
   */
  describeCronJob(params = {}, options = {}) {
    return this.request('DescribeCronJob', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} StatusList - statusList. optional.
   * @param {RepeatList} RunStatusList - runStatusList. optional.
   * @param {String} FlowName - flowName. optional.
   * @param {String} TriggerType - triggerType. optional.
   * @param {String} Search - search. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeCronJobs(params = {}, options = {}) {
    return this.request('DescribeCronJobs', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  describeDataAuthStatus(params = {}, options = {}) {
    return this.request('DescribeDataAuthStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Search - search. optional.
   * @param {RepeatList} Types - types. required.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeDiscoveredAssets(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Types')) {
      throw new TypeError('parameter "Types" is required');
    }

    return this.request('DescribeDiscoveredAssets', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  describeEmails(params = {}, options = {}) {
    return this.request('DescribeEmails', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScanId - scanId. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   */
  describeHistoricalContentRiskStats(params = {}, options = {}) {
    return this.request('DescribeHistoricalContentRiskStats', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CronJobId - cronJobId. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   */
  describeHistoricalVulnerabilityStats(params = {}, options = {}) {
    return this.request('DescribeHistoricalVulnerabilityStats', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  describeInstance(params = {}, options = {}) {
    return this.request('DescribeInstance', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeKeyWords(params = {}, options = {}) {
    return this.request('DescribeKeyWords', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} Assets - assets. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeMonitorUrlList(params = {}, options = {}) {
    return this.request('DescribeMonitorUrlList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  describeNotificationConfig(params = {}, options = {}) {
    return this.request('DescribeNotificationConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeProductFeatures(params = {}, options = {}) {
    return this.request('DescribeProductFeatures', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} TemplateCode - templateCode. optional.
   * @param {String} ListType - listType. optional.
   * @param {String} Locale - locale. optional.
   * @param {RepeatList} IdList - idList. optional.
   */
  describeReport(params = {}, options = {}) {
    return this.request('DescribeReport', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TemplateType - templateType. optional.
   * @param {String} TemplateCode - templateCode. optional.
   * @param {String} TemplateId - templateId. optional.
   * @param {String} RefType - refType. optional.
   * @param {RepeatList} RefList - refList. optional.
   * @param {RepeatList} SeverityList - severityList. optional.
   * @param {RepeatList} Formats - formats. optional.
   * @param {String} ExportMode - exportMode. optional.
   */
  describeReportHint(params = {}, options = {}) {
    return this.request('DescribeReportHint', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Locale - locale. optional.
   */
  describeReportTemplates(params = {}, options = {}) {
    return this.request('DescribeReportTemplates', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Name - name. optional.
   * @param {Long} GmtCreateFrom - gmtCreateFrom. optional.
   * @param {Long} GmtCreateTo - gmtCreateTo. optional.
   * @param {String} GmtCreateSort - gmtCreateSort. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeReports(params = {}, options = {}) {
    return this.request('DescribeReports', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScanId - scanId. optional.
   * @param {Long} TaskId - taskId. optional.
   */
  describeScan(params = {}, options = {}) {
    return this.request('DescribeScan', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  describeScanFixedSummary(params = {}, options = {}) {
    return this.request('DescribeScanFixedSummary', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScanId - scanId. optional.
   * @param {RepeatList} TaskIds - taskIds. optional.
   */
  describeScanSessionSummaries(params = {}, options = {}) {
    return this.request('DescribeScanSessionSummaries', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScanId - scanId. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeScanSessions(params = {}, options = {}) {
    return this.request('DescribeScanSessions', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} ScanIds - scanIds. optional.
   */
  describeScanSummaries(params = {}, options = {}) {
    return this.request('DescribeScanSummaries', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScanId - scanId. optional.
   * @param {Long} TaskId - taskId. optional.
   */
  describeScanSummary(params = {}, options = {}) {
    return this.request('DescribeScanSummary', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   * @param {RepeatList} StatusList - statusList. optional.
   * @param {String} TriggerType - triggerType. optional.
   * @param {String} ScanId - scanId. optional.
   * @param {String} Search - search. optional.
   * @param {String} ScanType - scanType. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeScans(params = {}, options = {}) {
    return this.request('DescribeScans', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Locale - locale. optional.
   */
  describeSystemReportTemplate(params = {}, options = {}) {
    return this.request('DescribeSystemReportTemplate', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Key - key. optional.
   */
  describeUserSettingOption(params = {}, options = {}) {
    return this.request('DescribeUserSettingOption', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   */
  describeUserWafAuthorization(params = {}, options = {}) {
    return this.request('DescribeUserWafAuthorization', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  describeVerificationInfo(params = {}, options = {}) {
    return this.request('DescribeVerificationInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CronJobId - cronJobId. optional.
   * @param {String} Name - name. optional.
   * @param {String} Search - search. optional.
   * @param {Integer} Severity - severity. optional.
   * @param {String} Status - status. optional.
   * @param {Long} BeginTime - beginTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} Lang - lang. optional.
   */
  describeVulnerabilities(params = {}, options = {}) {
    return this.request('DescribeVulnerabilities', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} Id - id. optional.
   * @param {String} Lang - lang. optional.
   */
  describeVulnerability(params = {}, options = {}) {
    return this.request('DescribeVulnerability', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  describeVulnerabilityFixedStat(params = {}, options = {}) {
    return this.request('DescribeVulnerabilityFixedStat', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ScanId - scanId. optional.
   * @param {Long} TaskId - taskId. optional.
   * @param {String} Hostname - hostname. optional.
   * @param {RepeatList} SeverityList - severityList. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeVulnerabilityModuleStatDetail(params = {}, options = {}) {
    return this.request('DescribeVulnerabilityModuleStatDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CronJobId - cronJobId. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeVulnerabilityModuleStats(params = {}, options = {}) {
    return this.request('DescribeVulnerabilityModuleStats', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  describeVulnerabilityRiskLevel(params = {}, options = {}) {
    return this.request('DescribeVulnerabilityRiskLevel', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Hostname - hostname. optional.
   */
  describeVulnerabilitySeverityStat(params = {}, options = {}) {
    return this.request('DescribeVulnerabilitySeverityStat', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} CronJobIds - cronJobIds. required.
   */
  describeVulnerabilitySummaries(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CronJobIds')) {
      throw new TypeError('parameter "CronJobIds" is required');
    }

    return this.request('DescribeVulnerabilitySummaries', params, options);
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
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScanId - scanId. optional.
   * @param {Long} TaskId - taskId. optional.
   */
  describeVulnerabilityTypeStat(params = {}, options = {}) {
    return this.request('DescribeVulnerabilityTypeStat', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   */
  describeVulnerabilityTypes(params = {}, options = {}) {
    return this.request('DescribeVulnerabilityTypes', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} Domains - domains. optional.
   */
  describeWhoisInfoByDomains(params = {}, options = {}) {
    return this.request('DescribeWhoisInfoByDomains', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} TemplateCode - templateCode. optional.
   * @param {String} ListType - listType. optional.
   * @param {String} Locale - locale. optional.
   * @param {RepeatList} IdList - idList. optional.
   */
  generateReport(params = {}, options = {}) {
    return this.request('GenerateReport', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AssetGroupId - assetGroupId. optional.
   * @param {String} Name - name. optional.
   */
  modifyAssetGroup(params = {}, options = {}) {
    return this.request('ModifyAssetGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Asset - asset. optional.
   * @param {String} LoginType - loginType. optional.
   * @param {String} LoginUrl - loginUrl. optional.
   * @param {String} UserName - userName. optional.
   * @param {String} PassWord - passWord. optional.
   * @param {String} Cookie - cookie. optional.
   */
  modifyAssetLogin(params = {}, options = {}) {
    return this.request('ModifyAssetLogin', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} Ids - ids. optional.
   * @param {Integer} Status - status. optional.
   */
  modifyContentRiskStatus(params = {}, options = {}) {
    return this.request('ModifyContentRiskStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CronJobId - cronJobId. required.
   * @param {String} Name - name. optional.
   * @param {RepeatList} Targets - targets. optional.
   * @param {Integer} ScanAll - scanAll. optional.
   * @param {String} FlowName - flowName. optional.
   * @param {String} TriggerType - triggerType. optional.
   * @param {String} Period - period. optional.
   * @param {Integer} Interval - interval. optional.
   * @param {Long} StartDate - startDate. optional.
   * @param {Long} EndDate - endDate. optional.
   * @param {Integer} Qps - qps. optional.
   * @param {String} RuntimeStart - runtimeStart. optional.
   * @param {String} RuntimeEnd - runtimeEnd. optional.
   */
  modifyCronJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CronJobId')) {
      throw new TypeError('parameter "CronJobId" is required');
    }

    return this.request('ModifyCronJob', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CronJobId - cronJobId. optional.
   * @param {String} Status - status. optional.
   */
  modifyCronJobStatus(params = {}, options = {}) {
    return this.request('ModifyCronJobStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} TemplateId - templateId. optional.
   * @param {String} Name - name. optional.
   * @param {String} Title - title. optional.
   * @param {RepeatList} Chapters - chapters. optional.
   */
  modifyCustomizeReportTemplate(params = {}, options = {}) {
    return this.request('ModifyCustomizeReportTemplate', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} Status - status. optional.
   * @param {Boolean} SyncImport - syncImport. optional.
   */
  modifyDataAuthStatus(params = {}, options = {}) {
    return this.request('ModifyDataAuthStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} Id - id. optional.
   * @param {String} KeyWords - keyWords. optional.
   * @param {RepeatList} Assets - assets. optional.
   */
  modifyKeyWords(params = {}, options = {}) {
    return this.request('ModifyKeyWords', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} IsNewUser - isNewUser. optional.
   */
  modifyNewUserStatus(params = {}, options = {}) {
    return this.request('ModifyNewUserStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VulSeverity - vulSeverity. optional. default: ,.
   * @param {String} NotiChannel - notiChannel. optional. default: ,.
   */
  modifyNotificationConfig(params = {}, options = {}) {
    return this.request('ModifyNotificationConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Key - key. optional.
   * @param {String} Value - value. optional.
   */
  modifyUserSettingOption(params = {}, options = {}) {
    return this.request('ModifyUserSettingOption', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} Ids - ids. required.
   * @param {Integer} Status - status. optional.
   * @param {String} Type - type. optional.
   * @param {String} Content - content. optional.
   * @param {Integer} EnableFeedback - enableFeedback. optional.
   */
  modifyVulnerabilityStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    return this.request('ModifyVulnerabilityStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Asset - asset. optional.
   */
  rebuildBaseLine(params = {}, options = {}) {
    return this.request('RebuildBaseLine', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {String} CommodityCode - commodityCode. optional.
   * @param {String} OrderType - orderType. optional.
   * @param {Integer} Duration - duration. required.
   * @param {String} PricingCycle - pricingCycle. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} ServiceVersion - serviceVersion. optional.
   * @param {Long} SiteNum - siteNum. optional.
   * @param {Long} AddVulNum - addVulNum. optional.
   * @param {Long} UrlNum - urlNum. optional.
   */
  renewInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'Duration')) {
      throw new TypeError('parameter "Duration" is required');
    }

    return this.request('RenewInstance', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Domain - domain. optional.
   * @param {String} Receiver - receiver. optional.
   */
  sendDomainVerificationCode(params = {}, options = {}) {
    return this.request('SendDomainVerificationCode', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} CronJobIds - cronJobIds. optional.
   */
  startCronJobs(params = {}, options = {}) {
    return this.request('StartCronJobs', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} ScanIds - scanIds. optional.
   */
  startScans(params = {}, options = {}) {
    return this.request('StartScans', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  stopAllCronJob(params = {}, options = {}) {
    return this.request('StopAllCronJob', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  stopAllScans(params = {}, options = {}) {
    return this.request('StopAllScans', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} CronJobIds - cronJobIds. optional.
   */
  suspendCronJobs(params = {}, options = {}) {
    return this.request('SuspendCronJobs', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} ScanIds - scanIds. optional.
   */
  suspendScans(params = {}, options = {}) {
    return this.request('SuspendScans', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Asset - asset. optional.
   * @param {String} IndexUrl - indexUrl. optional.
   */
  updateWebSiteIndex(params = {}, options = {}) {
    return this.request('UpdateWebSiteIndex', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {String} CommodityCode - commodityCode. optional.
   * @param {String} OrderType - orderType. optional.
   * @param {Integer} Duration - duration. optional.
   * @param {String} PricingCycle - pricingCycle. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} ServiceVersion - serviceVersion. optional. default: enterprise.
   * @param {Long} SiteNum - siteNum. optional.
   * @param {Long} AddVulNum - addVulNum. optional.
   * @param {Long} UrlNum - urlNum. optional.
   */
  upgradeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    return this.request('UpgradeInstance', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AssetId - assetId. optional.
   */
  verifyAsset(params = {}, options = {}) {
    return this.request('VerifyAsset', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} Assets - assets. optional.
   * @param {String} VerifyType - verifyType. optional.
   */
  verifyAssets(params = {}, options = {}) {
    return this.request('VerifyAssets', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CodeId - codeId. optional.
   * @param {String} Code - code. optional.
   */
  verifyDomainVerificationCode(params = {}, options = {}) {
    return this.request('VerifyDomainVerificationCode', params, options);
  }

}

module.exports = Client;

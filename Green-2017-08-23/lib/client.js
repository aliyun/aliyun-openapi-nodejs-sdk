
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-08-23';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Name - name. required.
   * @param {String} ImgUrl - imgUrl. required.
   * @param {String} ReferArea - referArea. optional.
   * @param {String} RecognizeArea - recognizeArea. optional.
   */
  creatCustomOcrTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ImgUrl')) {
      throw new TypeError('parameter "ImgUrl" is required');
    }

    return this.request('CreatCustomOcrTemplate', params, options);
  }

  /**
   * @param {String} ClientToken - clientToken. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CommodityCode - commodityCode. optional.
   * @param {String} OrderType - orderType. required.
   * @param {Integer} FlowOutSpec - flowoutSpec. optional.
   * @param {Integer} OrderNum - orderNum. optional.
   */
  createCdiBag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'OrderType')) {
      throw new TypeError('parameter "OrderType" is required');
    }

    return this.request('CreateCdiBag', params, options);
  }

  /**
   * @param {String} ClientToken - clientToken. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CommodityCode - commodityCode. optional.
   * @param {String} OrderType - orderType. required.
   * @param {Integer} Duration - duration. required.
   * @param {Integer} FlowOutSpec - flowoutSpec. optional.
   */
  createCdiBaseBag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'OrderType')) {
      throw new TypeError('parameter "OrderType" is required');
    }

    if (!hasOwnProperty(params, 'Duration')) {
      throw new TypeError('parameter "Duration" is required');
    }

    return this.request('CreateCdiBaseBag', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} ServiceModule - serviceModule. required.
   * @param {String} Name - name. required.
   * @param {String} Scene - scene. required.
   * @param {String} Category - category. required.
   * @param {String} BizTypes - bizTypes. optional.
   * @param {Boolean} Enable - enable. optional.
   */
  createImageLib(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceModule')) {
      throw new TypeError('parameter "ServiceModule" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Scene')) {
      throw new TypeError('parameter "Scene" is required');
    }

    if (!hasOwnProperty(params, 'Category')) {
      throw new TypeError('parameter "Category" is required');
    }

    return this.request('CreateImageLib', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} KeywordLibId - keywordLibId. required.
   * @param {String} Keywords - keywords. required.
   */
  createKeyword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KeywordLibId')) {
      throw new TypeError('parameter "KeywordLibId" is required');
    }

    if (!hasOwnProperty(params, 'Keywords')) {
      throw new TypeError('parameter "Keywords" is required');
    }

    return this.request('CreateKeyword', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ServiceModule - serviceModule. required.
   * @param {String} Name - name. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {String} LibType - libType. optional.
   * @param {String} Category - category. optional.
   * @param {String} BizTypes - bizTypes. optional.
   * @param {String} Language - language. optional.
   * @param {String} MatchMode - matchMode. optional.
   * @param {Boolean} Enable - enable. optional.
   */
  createKeywordLib(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceModule')) {
      throw new TypeError('parameter "ServiceModule" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    return this.request('CreateKeywordLib', params, options);
  }

  /**
   * @param {String} ClientToken - clientToken. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OrderType - orderType. required.
   * @param {Integer} Duration - duration. required.
   * @param {String} PricingCycle - pricingCycle. required.
   * @param {Integer} OrderNum - orderNum. optional.
   */
  createWebSiteInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'OrderType')) {
      throw new TypeError('parameter "OrderType" is required');
    }

    if (!hasOwnProperty(params, 'Duration')) {
      throw new TypeError('parameter "Duration" is required');
    }

    if (!hasOwnProperty(params, 'PricingCycle')) {
      throw new TypeError('parameter "PricingCycle" is required');
    }

    return this.request('CreateWebSiteInstance', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  createWebsiteIndexPageBaseline(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('CreateWebsiteIndexPageBaseline', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Ids - ids. required.
   */
  deleteCustomOcrTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    return this.request('DeleteCustomOcrTemplate', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Ids - ids. required.
   */
  deleteImageFromLib(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    return this.request('DeleteImageFromLib', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} Id - id. required.
   */
  deleteImageLib(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteImageLib', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Ids - ids. optional.
   * @param {String} Keywords - keywords. optional.
   * @param {String} KeywordLibId - keywordLibId. required.
   */
  deleteKeyword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KeywordLibId')) {
      throw new TypeError('parameter "KeywordLibId" is required');
    }

    return this.request('DeleteKeyword', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} Id - id. required.
   */
  deleteKeywordLib(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteKeywordLib', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ContactTypes - contactTypes. required.
   */
  deleteNotificationContacts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ContactTypes')) {
      throw new TypeError('parameter "ContactTypes" is required');
    }

    return this.request('DeleteNotificationContacts', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} TotalCount - totalCount. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {String} Platform - platform. optional.
   */
  describeAppInfo(params = {}, options = {}) {
    return this.request('DescribeAppInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} TotalCount - totalCount. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {String} StartDate - startDate. required.
   * @param {String} EndDate - endDate. required.
   * @param {String} Scene - scene. optional.
   * @param {String} Suggestion - suggestion. optional.
   * @param {String} Label - label. optional.
   * @param {String} TaskId - taskId. optional.
   * @param {String} DataId - dataId. optional.
   * @param {String} BizType - bizType. optional.
   * @param {String} AuditResult - auditResult. optional.
   * @param {String} ResourceType - resourceType. required.
   */
  describeAuditContent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    return this.request('DescribeAuditContent', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} TotalCount - totalCount. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {String} TaskId - taskId. required.
   * @param {String} ResourceType - resourceType. required.
   */
  describeAuditContentItem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    return this.request('DescribeAuditContentItem', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeAuditSetting(params = {}, options = {}) {
    return this.request('DescribeAuditSetting', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Ids - ids. optional.
   */
  describeCustomOcrTemplate(params = {}, options = {}) {
    return this.request('DescribeCustomOcrTemplate', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} TotalCount - totalCount. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} ImageLibId - imageLibId. required.
   */
  describeImageFromLib(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageLibId')) {
      throw new TypeError('parameter "ImageLibId" is required');
    }

    return this.request('DescribeImageFromLib', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} ServiceModule - serviceModule. required.
   */
  describeImageLib(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceModule')) {
      throw new TypeError('parameter "ServiceModule" is required');
    }

    return this.request('DescribeImageLib', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeImageUploadInfo(params = {}, options = {}) {
    return this.request('DescribeImageUploadInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} TotalCount - totalCount. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} KeywordLibId - keywordLibId. required.
   * @param {String} Keyword - keyword. optional.
   */
  describeKeyword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KeywordLibId')) {
      throw new TypeError('parameter "KeywordLibId" is required');
    }

    return this.request('DescribeKeyword', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ServiceModule - serviceModule. required.
   */
  describeKeywordLib(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceModule')) {
      throw new TypeError('parameter "ServiceModule" is required');
    }

    return this.request('DescribeKeywordLib', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeNotificationSetting(params = {}, options = {}) {
    return this.request('DescribeNotificationSetting', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} StartDate - startDate. required.
   * @param {String} EndDate - endDate. required.
   * @param {String} ResourceType - resourceType. required.
   */
  describeOpenApiUsage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    return this.request('DescribeOpenApiUsage', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeOssCallbackSetting(params = {}, options = {}) {
    return this.request('DescribeOssCallbackSetting', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeOssIncrementCheckSetting(params = {}, options = {}) {
    return this.request('DescribeOssIncrementCheckSetting', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeOssIncrementOverview(params = {}, options = {}) {
    return this.request('DescribeOssIncrementOverview', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ResourceType - resourceType. required.
   * @param {String} Scene - scene. required.
   * @param {String} StartDate - startDate. required.
   * @param {String} EndDate - endDate. required.
   */
  describeOssIncrementStats(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'Scene')) {
      throw new TypeError('parameter "Scene" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('DescribeOssIncrementStats', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} TotalCount - totalCount. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {String} StartDate - startDate. optional.
   * @param {String} EndDate - endDate. optional.
   * @param {String} Scene - scene. optional.
   * @param {String} Suggestion - suggestion. optional.
   * @param {Boolean} Stock - stock. required.
   * @param {Float} MinScore - minScore. optional.
   * @param {Float} MaxScore - maxScore. optional.
   * @param {String} ResourceType - resourceType. optional.
   * @param {String} Bucket - bucket. optional.
   * @param {String} QueryId - queryId. optional.
   * @param {String} Object - object. optional.
   */
  describeOssResultItems(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Stock')) {
      throw new TypeError('parameter "Stock" is required');
    }

    return this.request('DescribeOssResultItems', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeOssStockStatus(params = {}, options = {}) {
    return this.request('DescribeOssStockStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} Id - id. required.
   * @param {Boolean} Debug - debug. optional.
   */
  describeSdkUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeSdkUrl', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} TaskId - taskId. required.
   */
  describeUpdatePackageResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('DescribeUpdatePackageResult', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Biz - biz. required.
   */
  describeUploadInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Biz')) {
      throw new TypeError('parameter "Biz" is required');
    }

    return this.request('DescribeUploadInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeUserStatus(params = {}, options = {}) {
    return this.request('DescribeUserStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  describeWebsiteIndexPageBaseline(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeWebsiteIndexPageBaseline', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} TotalCount - totalCount. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {String} InstanceId - instanceId. optional.
   */
  describeWebsiteInstance(params = {}, options = {}) {
    return this.request('DescribeWebsiteInstance', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeWebsiteInstanceId(params = {}, options = {}) {
    return this.request('DescribeWebsiteInstanceId', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  describeWebsiteInstanceKeyUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeWebsiteInstanceKeyUrl', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} TotalCount - totalCount. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {String} SubServiceModule - subServiceModule. required.
   * @param {String} Label - label. optional.
   * @param {String} Domain - domain. optional.
   * @param {String} SiteUrl - url. optional.
   * @param {String} HandleStatus - handleStatus. optional.
   */
  describeWebsiteScanResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubServiceModule')) {
      throw new TypeError('parameter "SubServiceModule" is required');
    }

    return this.request('DescribeWebsiteScanResult', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} Id - id. required.
   * @param {String} ResourceType - resourceType. required.
   */
  describeWebsiteScanResultDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    return this.request('DescribeWebsiteScanResultDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeWebsiteStat(params = {}, options = {}) {
    return this.request('DescribeWebsiteStat', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  describeWebsiteVerifyInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeWebsiteVerifyInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} TotalCount - totalCount. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {String} StartDate - startDate. optional.
   * @param {String} EndDate - endDate. optional.
   * @param {String} Scene - scene. optional.
   * @param {String} Suggestion - suggestion. optional.
   * @param {Boolean} Stock - stock. required.
   * @param {Float} MinScore - minScore. optional.
   * @param {Float} MaxScore - maxScore. optional.
   * @param {String} ResourceType - resourceType. optional.
   * @param {String} Bucket - bucket. optional.
   */
  exportOssResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Stock')) {
      throw new TypeError('parameter "Stock" is required');
    }

    return this.request('ExportOssResult', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Ids - ids. required.
   * @param {String} AuditResult - auditResult. optional.
   * @param {String} AuditIllegalReasons - auditIllegalReasons. optional.
   */
  markAuditContent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    return this.request('MarkAuditContent', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Ids - ids. required.
   * @param {String} AuditResult - auditResult. optional.
   * @param {String} AuditIllegalReasons - auditIllegalReasons. optional.
   */
  markAuditContentItem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    return this.request('MarkAuditContentItem', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Ids - ids. required.
   * @param {String} Operation - operation. required.
   * @param {Boolean} Stock - stock. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {String} Scene - scene. required.
   */
  markOssResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    if (!hasOwnProperty(params, 'Operation')) {
      throw new TypeError('parameter "Operation" is required');
    }

    if (!hasOwnProperty(params, 'Stock')) {
      throw new TypeError('parameter "Stock" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'Scene')) {
      throw new TypeError('parameter "Scene" is required');
    }

    return this.request('MarkOssResult', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Ids - ids. required.
   */
  markWebsiteScanResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    return this.request('MarkWebsiteScanResult', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ResourceOwnerId - ownerId. optional.
   */
  refundCdiBag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('RefundCdiBag', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ResourceOwnerId - ownerId. optional.
   */
  refundCdiBaseBag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('RefundCdiBaseBag', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ResourceOwnerId - ownerId. optional.
   */
  refundWebSiteInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('RefundWebSiteInstance', params, options);
  }

  /**
   * @param {String} ClientToken - clientToken. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CommodityCode - commodityCode. optional.
   * @param {String} OrderType - orderType. required.
   * @param {Integer} Duration - duration. required.
   * @param {String} PricingCycle - pricingCycle. required.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Integer} OrderNum - orderNum. optional.
   */
  renewWebSiteInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'OrderType')) {
      throw new TypeError('parameter "OrderType" is required');
    }

    if (!hasOwnProperty(params, 'Duration')) {
      throw new TypeError('parameter "Duration" is required');
    }

    if (!hasOwnProperty(params, 'PricingCycle')) {
      throw new TypeError('parameter "PricingCycle" is required');
    }

    return this.request('RenewWebSiteInstance', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Email - email. required.
   */
  sendVerifyCodeToEmail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    return this.request('SendVerifyCodeToEmail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Phone - phone. required.
   */
  sendVerifyCodeToPhone(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Phone')) {
      throw new TypeError('parameter "Phone" is required');
    }

    return this.request('SendVerifyCodeToPhone', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Feedback - feedback. required.
   * @param {String} Urls - urls. required.
   */
  sendWebsiteFeedback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Feedback')) {
      throw new TypeError('parameter "Feedback" is required');
    }

    if (!hasOwnProperty(params, 'Urls')) {
      throw new TypeError('parameter "Urls" is required');
    }

    return this.request('SendWebsiteFeedback', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} Id - id. optional.
   * @param {String} PackageUrl - url. required.
   * @param {String} Platform - platform. optional.
   * @param {Boolean} Debug - debug. optional.
   */
  updateAppPackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PackageUrl')) {
      throw new TypeError('parameter "PackageUrl" is required');
    }

    return this.request('UpdateAppPackage', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Seed - seed. optional.
   * @param {String} Callback - callback. optional.
   */
  updateAuditSetting(params = {}, options = {}) {
    return this.request('UpdateAuditSetting', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {String} ReferArea - referArea. optional.
   * @param {String} RecognizeArea - recognizeArea. optional.
   */
  updateCustomOcrTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateCustomOcrTemplate', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} Id - id. required.
   * @param {String} Name - name. required.
   * @param {String} Scene - scene. required.
   * @param {String} Category - category. required.
   * @param {String} BizTypes - bizTypes. optional.
   * @param {Boolean} Enable - enable. optional.
   */
  updateImageLib(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Scene')) {
      throw new TypeError('parameter "Scene" is required');
    }

    if (!hasOwnProperty(params, 'Category')) {
      throw new TypeError('parameter "Category" is required');
    }

    return this.request('UpdateImageLib', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} Id - id. required.
   * @param {String} Name - name. required.
   * @param {String} BizTypes - bizTypes. optional.
   * @param {String} MatchMode - matchMode. optional.
   * @param {Boolean} Enable - enable. optional.
   */
  updateKeywordLib(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('UpdateKeywordLib', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} RealtimeMessageList - realtimeMessages. optional.
   * @param {String} ReminderModeList - reminderModes. required.
   * @param {Integer} ScheduleMessageTime - scheduleMessageTime. required.
   * @param {Integer} ScheduleMessageTimeZone - scheduleMessageTimeZone. required.
   */
  updateNotificationSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReminderModeList')) {
      throw new TypeError('parameter "ReminderModeList" is required');
    }

    if (!hasOwnProperty(params, 'ScheduleMessageTime')) {
      throw new TypeError('parameter "ScheduleMessageTime" is required');
    }

    if (!hasOwnProperty(params, 'ScheduleMessageTimeZone')) {
      throw new TypeError('parameter "ScheduleMessageTimeZone" is required');
    }

    return this.request('UpdateNotificationSetting', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} CallbackUrl - callbackUrl. optional.
   * @param {Boolean} ScanCallback - scanCallback. optional.
   * @param {String} ScanCallbackSuggestions - scanCallbackSuggestions. optional.
   * @param {Boolean} AuditCallback - auditCallback. optional.
   * @param {String} ServiceModules - serviceModules. optional.
   * @param {String} CallbackSeed - callbackSeed. optional.
   */
  updateOssCallbackSetting(params = {}, options = {}) {
    return this.request('UpdateOssCallbackSetting', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} BucketConfigList - bucketConfigs. optional.
   * @param {String} ImageScanLimit - imageScanLimit. optional.
   * @param {String} ImageSceneList - imageScenes. optional.
   * @param {String} VideoSceneList - videoScenes. optional.
   * @param {String} ImageAutoFreeze - imageAutoFreeze. optional.
   * @param {String} VideoAutoFreezeSceneList - videoAutoFreezeScenes. optional.
   * @param {Integer} VideoFrameInterval - videoFrameInterval. optional.
   * @param {Integer} VideoMaxFrames - videoMaxFrames. optional.
   * @param {Integer} VideoMaxSize - videoMaxSize. optional.
   * @param {String} AutoFreezeType - autoFreezeType. optional.
   */
  updateOssIncrementCheckSetting(params = {}, options = {}) {
    return this.request('UpdateOssIncrementCheckSetting', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Operation - operation. required.
   * @param {String} StartDate - startDate. optional.
   * @param {String} EndDate - endDate. optional.
   * @param {String} BucketConfigList - buckets. optional.
   * @param {String} ResourceTypeList - resourceTypes. optional.
   * @param {String} SceneList - scenes. optional.
   * @param {String} ImageAutoFreeze - imageAutoFreeze. optional.
   * @param {String} VideoAutoFreezeSceneList - videoAutoFreezeScenes. optional.
   * @param {Integer} VideoFrameInterval - videoFrameInterval. optional.
   * @param {Integer} VideoMaxFrames - videoMaxFrames. optional.
   * @param {Integer} VideoMaxSize - videoMaxSize. optional.
   * @param {String} AutoFreezeType - autoFreezeType. optional.
   */
  updateOssStockStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Operation')) {
      throw new TypeError('parameter "Operation" is required');
    }

    return this.request('UpdateOssStockStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} SiteProtocol - protocol. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} WebsiteScanInterval - websiteScanInterval. required.
   * @param {String} Domain - domain. required.
   * @param {Integer} IndexPageScanInterval - indexPageScanInterval. required.
   * @param {String} IndexPage - indexPage. required.
   */
  updateWebsiteInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SiteProtocol')) {
      throw new TypeError('parameter "SiteProtocol" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'WebsiteScanInterval')) {
      throw new TypeError('parameter "WebsiteScanInterval" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'IndexPageScanInterval')) {
      throw new TypeError('parameter "IndexPageScanInterval" is required');
    }

    if (!hasOwnProperty(params, 'IndexPage')) {
      throw new TypeError('parameter "IndexPage" is required');
    }

    return this.request('UpdateWebsiteInstance', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Urls - urls. required.
   * @param {String} InstanceId - instanceId. optional.
   */
  updateWebsiteInstanceKeyUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Urls')) {
      throw new TypeError('parameter "Urls" is required');
    }

    return this.request('UpdateWebsiteInstanceKeyUrl', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Status - status. required.
   */
  updateWebsiteInstanceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('UpdateWebsiteInstanceStatus', params, options);
  }

  /**
   * @param {String} ClientToken - clientToken. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} CommodityCode - commodityCode. optional.
   * @param {String} OrderType - orderType. required.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Integer} FlowOutSpec - flowoutSpec. optional.
   */
  upgradeCdiBaseBag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'OrderType')) {
      throw new TypeError('parameter "OrderType" is required');
    }

    return this.request('UpgradeCdiBaseBag', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} ImageLibId - imageLibId. required.
   * @param {String} Images - images. required.
   */
  uploadImageToLib(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageLibId')) {
      throw new TypeError('parameter "ImageLibId" is required');
    }

    if (!hasOwnProperty(params, 'Images')) {
      throw new TypeError('parameter "Images" is required');
    }

    return this.request('UploadImageToLib', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} Id - id. required.
   * @param {String} TestImgUrl - testImgUrl. required.
   */
  verifyCustomOcrTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'TestImgUrl')) {
      throw new TypeError('parameter "TestImgUrl" is required');
    }

    return this.request('VerifyCustomOcrTemplate', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VerifyCode - verifyCode. required.
   */
  verifyEmail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VerifyCode')) {
      throw new TypeError('parameter "VerifyCode" is required');
    }

    return this.request('VerifyEmail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Phone - phone. required.
   * @param {String} VerifyCode - verifyCode. required.
   */
  verifyPhone(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Phone')) {
      throw new TypeError('parameter "Phone" is required');
    }

    if (!hasOwnProperty(params, 'VerifyCode')) {
      throw new TypeError('parameter "VerifyCode" is required');
    }

    return this.request('VerifyPhone', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} VerifyMethod - method. required.
   */
  verifyWebsiteInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'VerifyMethod')) {
      throw new TypeError('parameter "VerifyMethod" is required');
    }

    return this.request('VerifyWebsiteInstance', params, options);
  }

}

module.exports = Client;

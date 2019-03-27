
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-05-03';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} PhoneNumber - phoneNumber. optional.
   * @param {Long} StartDate - startDate. required.
   * @param {Long} EndDate - endDate. required.
   * @param {Integer} SendStatus - sendStatus. optional.
   * @param {String} TimeZone - timeZone. optional.
   * @param {String} CountryCode - countryCode. optional.
   */
  applyExportSmsSendDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('ApplyExportSmsSendDetails', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} BizType - bizType. required.
   * @param {String} CallbackUrl - callbackUrl. required.
   */
  createMessageCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizType')) {
      throw new TypeError('parameter "BizType" is required');
    }

    if (!hasOwnProperty(params, 'CallbackUrl')) {
      throw new TypeError('parameter "CallbackUrl" is required');
    }

    return this.request('CreateMessageCallback', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} QueueType - queueType. optional.
   */
  createMessageQueue(params = {}, options = {}) {
    return this.request('CreateMessageQueue', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} data - data. optional. default: JSON-String.
   */
  createOrderCallBack(params = {}, options = {}) {
    return this.request('CreateOrderCallBack', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} ProdId - prodId. required.
   */
  createProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProdId')) {
      throw new TypeError('parameter "ProdId" is required');
    }

    return this.request('CreateProduct', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} TemplateCode - templateCode. required.
   * @param {String} PhoneNumbers - phoneNumbers. required.
   * @param {String} TemplateParam - templateParam. optional.
   */
  createSmsSend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateCode')) {
      throw new TypeError('parameter "TemplateCode" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumbers')) {
      throw new TypeError('parameter "PhoneNumbers" is required');
    }

    return this.request('CreateSmsSend', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} SendDate - sendDate. required.
   * @param {String} BizType - bizType. optional.
   */
  createSmsSendFailDetailsDownload(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SendDate')) {
      throw new TypeError('parameter "SendDate" is required');
    }

    return this.request('CreateSmsSendFailDetailsDownload', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} SignName - signName. optional.
   * @param {String} FileIds - fileIds. optional.
   * @param {String} Remark - remark. optional.
   */
  createSmsSign(params = {}, options = {}) {
    return this.request('CreateSmsSign', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} TemplateName - templateName. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} TemplateContent - templateContent. optional.
   * @param {String} BizType - bizType. optional.
   */
  createSmsTemplate(params = {}, options = {}) {
    return this.request('CreateSmsTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {Long} DaySmsSendLimit - daySmsSendLimit. required.
   */
  createUserFlowLimit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DaySmsSendLimit')) {
      throw new TypeError('parameter "DaySmsSendLimit" is required');
    }

    return this.request('CreateUserFlowLimit', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} BizType - bizType. optional.
   * @param {Integer} DailyWarningLimit - dailyWarningLimit. optional.
   * @param {Integer} DailyHaltLimit - dailyHaltLimit. optional.
   * @param {Integer} MonthlyWarningLimit - monthlyWarningLimit. optional.
   * @param {Integer} MonthlyHaltLimit - monthlyHaltLimit. optional.
   */
  createWarningThreshold(params = {}, options = {}) {
    return this.request('CreateWarningThreshold', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} Ids - ids. optional.
   */
  deleteApplyExportRecord(params = {}, options = {}) {
    return this.request('DeleteApplyExportRecord', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} BizType - bizType. required.
   */
  deleteMessageCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizType')) {
      throw new TypeError('parameter "BizType" is required');
    }

    return this.request('DeleteMessageCallback', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} QueueType - queueType. optional.
   */
  deleteMessageQueue(params = {}, options = {}) {
    return this.request('DeleteMessageQueue', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} SignIds - smsTemplateIds. required.
   */
  deleteSmsSign(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SignIds')) {
      throw new TypeError('parameter "SignIds" is required');
    }

    return this.request('DeleteSmsSign', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} TemplateIds - smsTemplateIds. required.
   */
  deleteSmsTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateIds')) {
      throw new TypeError('parameter "TemplateIds" is required');
    }

    return this.request('DeleteSmsTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   */
  openSmsGoChina(params = {}, options = {}) {
    return this.request('OpenSmsGoChina', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} ApplyStatus - applyStatus. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   */
  queryApplyExportRecordList(params = {}, options = {}) {
    return this.request('QueryApplyExportRecordList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} ProdId - prodId. optional.
   */
  queryCommonCustInfo(params = {}, options = {}) {
    return this.request('QueryCommonCustInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} BizType - bizType. optional.
   */
  queryMessageCallbackInfo(params = {}, options = {}) {
    return this.request('QueryMessageCallbackInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} QueueType - queueType. required.
   */
  queryMessageQueue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'QueueType')) {
      throw new TypeError('parameter "QueueType" is required');
    }

    return this.request('QueryMessageQueue', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   */
  queryNonePackageUse(params = {}, options = {}) {
    return this.request('QueryNonePackageUse', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   */
  queryOssConfig(params = {}, options = {}) {
    return this.request('QueryOssConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} PhoneNumber - phoneNumber. optional.
   * @param {Long} StartDate - startDate. required.
   * @param {Long} EndDate - endDate. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} SendStatus - sendStatus. optional.
   * @param {String} TimeZone - timeZone. optional.
   * @param {String} CountryCode - countryCode. optional.
   */
  querySendDetailsByPhoneNum(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('QuerySendDetailsByPhoneNum', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} bizType - bizType. optional.
   * @param {String} SendDate - sendDate. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   */
  querySendFailDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SendDate')) {
      throw new TypeError('parameter "SendDate" is required');
    }

    return this.request('QuerySendFailDetails', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   */
  querySmsGoChinaStatus(params = {}, options = {}) {
    return this.request('QuerySmsGoChinaStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   * @param {Long} PageNo - pageNo. optional. default: 1.
   * @param {Integer} Status - status. optional.
   * @param {String} PackageType - packageType. optional.
   */
  querySmsPackageDetail(params = {}, options = {}) {
    return this.request('QuerySmsPackageDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   */
  querySmsPackageMapping(params = {}, options = {}) {
    return this.request('QuerySmsPackageMapping', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   */
  querySmsPackageSummary(params = {}, options = {}) {
    return this.request('QuerySmsPackageSummary', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} SendDate - sendDate. optional.
   * @param {String} BizType - bizType. optional.
   */
  querySmsSendFailDetailsUrl(params = {}, options = {}) {
    return this.request('QuerySmsSendFailDetailsUrl', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} SignName - signName. optional.
   * @param {String} AuditState - auditState. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   */
  querySmsSignList(params = {}, options = {}) {
    return this.request('QuerySmsSignList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} BizType - bizType. optional.
   * @param {String} TemplateCode - templateCode. optional.
   * @param {String} StartDate - startDate. required.
   * @param {String} EndDate - endDate. required.
   * @param {String} CountryCode - countryCode. optional.
   */
  querySmsStatistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('QuerySmsStatistics', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} BizType - bizType. optional.
   * @param {String} TemplateCode - templateCode. optional.
   * @param {String} StartDate - startDate. required.
   * @param {String} EndDate - endDate. required.
   */
  querySmsStatisticsUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('QuerySmsStatisticsUrl', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} TemplateCode - templateCode. required.
   */
  querySmsTemplateByCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateCode')) {
      throw new TypeError('parameter "TemplateCode" is required');
    }

    return this.request('QuerySmsTemplateByCode', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} TemplateName - templateName. optional.
   * @param {String} AuditState - auditState. optional.
   * @param {String} BizType - bizType. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   */
  querySmsTemplateList(params = {}, options = {}) {
    return this.request('QuerySmsTemplateList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {Integer} ProtocolType - protocolType. required.
   */
  queryStandardProtocolList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProtocolType')) {
      throw new TypeError('parameter "ProtocolType" is required');
    }

    return this.request('QueryStandardProtocolList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {Integer} ProtocolType - protocolType. required.
   */
  queryStandardProtocolStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProtocolType')) {
      throw new TypeError('parameter "ProtocolType" is required');
    }

    return this.request('QueryStandardProtocolStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   */
  queryUserFlowLimit(params = {}, options = {}) {
    return this.request('QueryUserFlowLimit', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} BizType - bizType. optional. default: SMS.
   */
  queryWarningThreshold(params = {}, options = {}) {
    return this.request('QueryWarningThreshold', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} IpWhiteList - ipWhiteList. required.
   * @param {Integer} FeatureCode - featureCode. required.
   * @param {Long} RealNameInsId - realNameInsId. optional.
   */
  updateIpWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IpWhiteList')) {
      throw new TypeError('parameter "IpWhiteList" is required');
    }

    if (!hasOwnProperty(params, 'FeatureCode')) {
      throw new TypeError('parameter "FeatureCode" is required');
    }

    return this.request('UpdateIpWhiteList', params, options);
  }

}

module.exports = Client;

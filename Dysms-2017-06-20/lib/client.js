
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-06-20';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} StartDate - startDate. optional.
   * @param {String} EndDate - endDate. optional.
   */
  applyDownloadDetail(params = {}, options = {}) {
    return this.request('ApplyDownloadDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} ProdId - prodId. required.
   * @param {Long} BusOffer - busOffer. optional.
   * @param {String} BusOffers - busOffers. optional.
   */
  createAlicomProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProdId')) {
      throw new TypeError('parameter "ProdId" is required');
    }

    return this.request('CreateAlicomProduct', params, options);
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
  createDigitalSmsTemplate(params = {}, options = {}) {
    return this.request('CreateDigitalSmsTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   */
  createFileByBiz(params = {}, options = {}) {
    return this.request('CreateFileByBiz', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} MinuteLimit - minuteLimit. optional.
   * @param {String} HourLimit - hourLimit. optional.
   * @param {String} DailyLimit - dailyLimit. optional.
   */
  createFlowLimit(params = {}, options = {}) {
    return this.request('CreateFlowLimit', params, options);
  }

  /**
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   */
  createLogicalDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('CreateLogicalDelete', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
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
   * @param {String} PhoneNumbers - phoneNumbers. optional.
   */
  createPhoneWhiteList(params = {}, options = {}) {
    return this.request('CreatePhoneWhiteList', params, options);
  }

  /**
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   */
  createPhysicalDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('CreatePhysicalDelete', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} PackageWarningLimit - packageWarningLimit. optional.
   */
  createPkgThreshold(params = {}, options = {}) {
    return this.request('CreatePkgThreshold', params, options);
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
   * @param {String} TemplateName - templateName. optional.
   * @param {String} Industry - industry. optional.
   * @param {String} Country - country. optional.
   * @param {String} PageLink - pageLink. optional.
   * @param {String} AppDownloadLink - appDownloadLink. optional.
   * @param {String} Remark - remark. optional.
   */
  createSmsInternalApply(params = {}, options = {}) {
    return this.request('CreateSmsInternalApply', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dycdp.
   * @param {Integer} ChannelId - channelId. optional. default: JSON-String.
   * @param {Boolean} OnlyCheckOpened - onlyCheckOpened. optional.
   */
  createSmsProductForChannelCust(params = {}, options = {}) {
    return this.request('CreateSmsProductForChannelCust', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} TaskName - taskName. optional.
   * @param {String} SignName - signName. optional.
   * @param {String} SmsContent - smsContent. optional.
   * @param {String} SmsTemplateCode - smsTemplateCode. optional.
   * @param {String} OssFileName - ossFileName. optional.
   * @param {String} PhoneList - phoneList. optional.
   * @param {String} DataType - dataType. optional.
   * @param {String} ScheduleType - scheduleType. optional.
   * @param {String} OrderTime - orderTime. optional.
   * @param {String} ValidCount - validCount. optional.
   * @param {String} BizType - bizType. optional.
   * @param {String} ClientIp - clientIp. optional.
   */
  createSmsSaasTask(params = {}, options = {}) {
    return this.request('CreateSmsSaasTask', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} TestType - testType. optional.
   * @param {String} SignName - signName. optional.
   * @param {String} TemplateCode - templateCode. optional.
   * @param {String} PhoneNumber - phoneNumber. required.
   * @param {String} TemplateParam - templateParam. optional.
   * @param {String} SessionId - sessionId. optional.
   * @param {String} Sig - sig. optional.
   * @param {String} RemoteIp - remoteIp. optional.
   * @param {String} NcToken - ncToken. optional.
   */
  createSmsSend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    return this.request('CreateSmsSend', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} SendDate - sendDate. optional.
   * @param {String} ProdId - prodId. optional.
   */
  createSmsSendFailDetailsDownload(params = {}, options = {}) {
    return this.request('CreateSmsSendFailDetailsDownload', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} SignName - signName. optional.
   * @param {String} Remark - remark. optional.
   * @param {Integer} ServiceType - serviceType. optional.
   * @param {String} FileIds - fileIds. optional.
   * @param {String} OrderId - orderId. optional.
   * @param {String} ExtendMessage - extendMessage. optional.
   * @param {Integer} SceneType - sceneType. optional.
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
   * @param {String} TemplateCode - templateCode. optional.
   * @param {String} OrderId - orderId. optional.
   * @param {String} TemplateRule - templateRule. optional.
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
  deleteContacts(params = {}, options = {}) {
    return this.request('DeleteContacts', params, options);
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
   * @param {String} TemplateCode - templateCode. optional.
   */
  deleteDigitalTemplate(params = {}, options = {}) {
    return this.request('DeleteDigitalTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} RecordIds - recordIds. optional.
   */
  deleteDownloadRecord(params = {}, options = {}) {
    return this.request('DeleteDownloadRecord', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {Long} TaskId - taskId. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} IsDeleted - isDeleted. optional.
   */
  deleteOrCanceleTask(params = {}, options = {}) {
    return this.request('DeleteOrCanceleTask', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} Ids - ids. required.
   */
  deletePhoneWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    return this.request('DeletePhoneWhiteList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} SmsTemplateIds - smsTemplateIds. required.
   * @param {Boolean} IsSmsSign - isSmsSign. optional.
   */
  deleteSmsTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SmsTemplateIds')) {
      throw new TypeError('parameter "SmsTemplateIds" is required');
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
  queryAnyParamTemplateUser(params = {}, options = {}) {
    return this.request('QueryAnyParamTemplateUser', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} BillCycle - billCycle. optional.
   * @param {String} ItemName - itemName. optional.
   */
  queryBillingStatistics(params = {}, options = {}) {
    return this.request('QueryBillingStatistics', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. required.
   */
  queryBizCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProdCode')) {
      throw new TypeError('parameter "ProdCode" is required');
    }

    return this.request('QueryBizCount', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
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
   */
  queryContactsList(params = {}, options = {}) {
    return this.request('QueryContactsList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   */
  queryCustInfo(params = {}, options = {}) {
    return this.request('QueryCustInfo', params, options);
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
   * @param {String} TemplateCode - templateCode. optional.
   */
  queryDigitalTemplateDetail(params = {}, options = {}) {
    return this.request('QueryDigitalTemplateDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} TemplateName - templateName. optional.
   * @param {String} BizType - bizType. optional.
   * @param {Integer} Limit - limit. optional.
   */
  queryDigitalTemplateLastRange(params = {}, options = {}) {
    return this.request('QueryDigitalTemplateLastRange', params, options);
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
   * @param {String} TemplateCode - templateCode. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   */
  queryDigitalTemplatePageList(params = {}, options = {}) {
    return this.request('QueryDigitalTemplatePageList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} Status - status. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} Current - current. optional.
   */
  queryDownloadDetail(params = {}, options = {}) {
    return this.request('QueryDownloadDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {Long} TaskId - taskId. required.
   * @param {Long} TaskInstanceId - taskInstanceId. required.
   * @param {String} Status - status. optional.
   */
  queryFailDetailDownload(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'TaskInstanceId')) {
      throw new TypeError('parameter "TaskInstanceId" is required');
    }

    return this.request('QueryFailDetailDownload', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   */
  queryFlowLimit(params = {}, options = {}) {
    return this.request('QueryFlowLimit', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {Long} TaskId - taskId. required.
   * @param {Long} TaskInstanceId - taskInstanceId. required.
   * @param {String} BizType - bizType. required.
   * @param {String} Status - status. optional.
   */
  queryIndexColRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'TaskInstanceId')) {
      throw new TypeError('parameter "TaskInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'BizType')) {
      throw new TypeError('parameter "BizType" is required');
    }

    return this.request('QueryIndexColRecord', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   */
  queryInternationalSmsStatus(params = {}, options = {}) {
    return this.request('QueryInternationalSmsStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} Type - type. optional.
   */
  queryLearningStatus(params = {}, options = {}) {
    return this.request('QueryLearningStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   */
  queryMapping(params = {}, options = {}) {
    return this.request('QueryMapping', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} BizType - bizType. optional.
   * @param {String} TemplateContent - templateContent. optional.
   */
  queryMatchedTemplateCollections(params = {}, options = {}) {
    return this.request('QueryMatchedTemplateCollections', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   */
  queryNoneStatusNotChargeCust(params = {}, options = {}) {
    return this.request('QueryNoneStatusNotChargeCust', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   */
  queryNumberServiceStatus(params = {}, options = {}) {
    return this.request('QueryNumberServiceStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} ProdId - prodId. required.
   * @param {Long} BusOffer - busOffer. optional.
   */
  queryOpenStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProdId')) {
      throw new TypeError('parameter "ProdId" is required');
    }

    return this.request('QueryOpenStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} PhoneNumber - phoneNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   */
  queryPhoneWhiteList(params = {}, options = {}) {
    return this.request('QueryPhoneWhiteList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   */
  queryPkgThreshold(params = {}, options = {}) {
    return this.request('QueryPkgThreshold', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} PhoneNumber - phoneNumber. optional.
   * @param {String} QueryDate - queryDate. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} Current - current. optional. default: 1.
   */
  queryRecordDetail(params = {}, options = {}) {
    return this.request('QueryRecordDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} StartDate - startDate. optional.
   * @param {String} EndDate - endDate. optional.
   */
  queryRecordStatistics(params = {}, options = {}) {
    return this.request('QueryRecordStatistics', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {Long} TaskId - taskId. required.
   * @param {Long} TaskInstanceId - taskInstanceId. required.
   * @param {String} BizType - bizType. optional. default: DIGITAL_SMS.
   * @param {String} IndexCol - indexCol. optional.
   * @param {Long} Result - result. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageNo - pageNo. required.
   */
  querySaasRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'TaskInstanceId')) {
      throw new TypeError('parameter "TaskInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    return this.request('QuerySaasRecord', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} PhoneNum - phoneNum. optional.
   * @param {String} SendDate - sendDate. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   */
  querySendDetailsByPhoneNum(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SendDate')) {
      throw new TypeError('parameter "SendDate" is required');
    }

    return this.request('QuerySendDetailsByPhoneNum', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} ProdId - prodId. optional.
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
   */
  querySmsOverStock(params = {}, options = {}) {
    return this.request('QuerySmsOverStock', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   * @param {Long} PageNo - pageNo. optional. default: 1.
   * @param {String} PackageType - packageType. optional.
   * @param {Integer} Status - status. optional.
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
   * @param {String} BillCycle - billCycle. optional.
   */
  querySmsPackageOrderList(params = {}, options = {}) {
    return this.request('QuerySmsPackageOrderList', params, options);
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
   * @param {Long} TaskId - taskId. optional.
   * @param {Long} TaskInstanceId - taskInstanceId. optional.
   */
  querySmsSaasTaskDetail(params = {}, options = {}) {
    return this.request('QuerySmsSaasTaskDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} TaskName - taskName. optional.
   * @param {String} Status - status. optional.
   * @param {String} BizType - bizType. optional. default: SMS.
   * @param {Integer} PageSize - PageSize. optional.
   * @param {Integer} PageNo - PageNo. optional.
   * @param {String} ServiceType - serviceType. optional.
   */
  querySmsSaasTaskList(params = {}, options = {}) {
    return this.request('QuerySmsSaasTaskList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} SendDate - sendDate. optional.
   * @param {String} ProdId - prodId. optional.
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
   * @param {String} Id - id. required.
   */
  querySmsSignDetailBySignId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('QuerySmsSignDetailBySignId', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} SignName - signName. optional.
   * @param {Integer} Limit - limit. optional. default: 10.
   * @param {String} ServiceType - serviceType. optional. default: 1.
   * @param {String} BizType - bizType. optional.
   */
  querySmsSignLast(params = {}, options = {}) {
    return this.request('QuerySmsSignLast', params, options);
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
   * @param {String} BizType - bizType. optional.
   * @param {Integer} Limit - limit. optional.
   * @param {Boolean} NeedDefaultSign - needDefaultSign. optional.
   * @param {Integer} IsGlobeSign - isGlobeSign. optional.
   */
  querySmsSignLastRange(params = {}, options = {}) {
    return this.request('QuerySmsSignLastRange', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} SignName - signName. optional.
   * @param {String} AuditState - auditState. optional.
   * @param {String} BizType - bizType. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {String} ServiceType - serviceType. optional.
   * @param {Integer} IsGlobeSign - isGlobeSign. optional.
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
   * @param {String} SignName - signName. optional.
   * @param {Integer} ServiceType - serviceType. optional.
   */
  querySmsSignValid(params = {}, options = {}) {
    return this.request('QuerySmsSignValid', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} ProdId - prodId. optional.
   * @param {String} Template - template. optional.
   * @param {String} StartDate - startDate. required.
   * @param {String} EndDate - endDate. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
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
   * @param {String} ProdId - prodId. optional.
   * @param {String} Template - template. optional.
   * @param {String} StartDate - startDate. required.
   * @param {String} EndDate - endDate. required.
   */
  querySmsStatisticsByTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('QuerySmsStatisticsByTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} Template - template. optional.
   * @param {String} StartDate - startDate. required.
   * @param {String} EndDate - endDate. required.
   * @param {String} ProdId - prodId. optional.
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
   * @param {String} BillCycle - billCycle. optional.
   */
  querySmsStep(params = {}, options = {}) {
    return this.request('QuerySmsStep', params, options);
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
   * @param {Integer} Limit - limit. optional.
   * @param {String} TemplateName - templateName. optional.
   * @param {String} ProdId - prodId. optional.
   * @param {String} BizType - bizType. optional.
   * @param {Boolean} NeedDefaultTemplate - needDefaultTemplate. optional.
   */
  querySmsTemplateLastRange(params = {}, options = {}) {
    return this.request('QuerySmsTemplateLastRange', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} TemplateName - templateName. optional.
   * @param {String} AuditState - auditState. optional.
   * @param {String} ProdType - prodType. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {String} BizType - bizType. optional.
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
   */
  querySmsUserTags(params = {}, options = {}) {
    return this.request('QuerySmsUserTags', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} BizType - bizType. optional.
   * @param {String} TemplateContent - templateContent. optional.
   */
  queryStandarTemplateCollections(params = {}, options = {}) {
    return this.request('QueryStandarTemplateCollections', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {Integer} ProtocolType - protocolType. required.
   */
  queryStandardProtocol(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProtocolType')) {
      throw new TypeError('parameter "ProtocolType" is required');
    }

    return this.request('QueryStandardProtocol', params, options);
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
   */
  queryTemplateRuleSwitch(params = {}, options = {}) {
    return this.request('QueryTemplateRuleSwitch', params, options);
  }

  /**
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   * @param {Long} Level - level. optional.
   * @param {String} Url - url. optional.
   * @param {String} Prompt - prompt. optional.
   */
  queryUserDeleteStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('QueryUserDeleteStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {Integer} UsertagPosition - usertagPosition. required.
   */
  queryUsertagExistence(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UsertagPosition')) {
      throw new TypeError('parameter "UsertagPosition" is required');
    }

    return this.request('QueryUsertagExistence', params, options);
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
   * @param {String} OrderId - orderId. optional.
   */
  queryWorkOrdAuditList(params = {}, options = {}) {
    return this.request('QueryWorkOrdAuditList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} Name - name. optional.
   * @param {String} Phone - phone. optional.
   * @param {String} Email - email. optional.
   * @param {String} VerificationCode - verificationCode. optional.
   * @param {Integer} OpenSendWarning - openSendWarning. optional.
   * @param {Integer} OpenPkgWarning - openPkgWarning. optional.
   * @param {Long} Id - id. optional.
   */
  saveContacts(params = {}, options = {}) {
    return this.request('SaveContacts', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} Type - type. optional.
   * @param {String} Value - value. optional.
   */
  saveLearningStatus(params = {}, options = {}) {
    return this.request('SaveLearningStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} TestType - testType. optional.
   * @param {String} SignName - signName. optional.
   * @param {String} TemplateCode - templateCode. optional.
   * @param {String} PhoneNumber - phoneNumber. required.
   * @param {String} TemplateParam - templateParam. optional.
   * @param {String} SessionId - sessionId. optional.
   * @param {String} Sig - sig. optional.
   * @param {String} RemoteIp - remoteIp. optional.
   * @param {String} NcToken - ncToken. optional.
   */
  sendSmsTest(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    return this.request('SendSmsTest', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} VerifyType - verifyType. required.
   * @param {String} BizType - bizType. required.
   * @param {String} Target - target. optional.
   */
  sendVerification(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VerifyType')) {
      throw new TypeError('parameter "VerifyType" is required');
    }

    if (!hasOwnProperty(params, 'BizType')) {
      throw new TypeError('parameter "BizType" is required');
    }

    return this.request('SendVerification', params, options);
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

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} TemplateCode - templateCode. optional.
   * @param {String} TemplateName - templateName. optional.
   */
  updatePartnerTemplate(params = {}, options = {}) {
    return this.request('UpdatePartnerTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
   * @param {String} data - data. required.
   */
  validatYunSmsId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('ValidatYunSmsId', params, options);
  }

}

module.exports = Client;

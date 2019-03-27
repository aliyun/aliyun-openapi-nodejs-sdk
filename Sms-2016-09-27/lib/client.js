
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-09-27';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Data - data. required.
   * @param {String} Region - region. required.
   * @param {String} MessageID - messageID. required.
   * @param {Long} SmsResourceOwnerId - smsResourceOwnerId. optional.
   * @param {String} Version - version. optional.
   */
  batchSendSms(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'MessageID')) {
      throw new TypeError('parameter "MessageID" is required');
    }

    return this.request('BatchSendSms', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  createMarketing(params = {}, options = {}) {
    return this.request('CreateMarketing', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SignName - signName. required.
   * @param {String} Remark - remark. optional.
   * @param {Integer} SignType - signType. optional. default: 1.
   * @param {String} FileNames - fileNames. optional.
   * @param {Integer} FromType - fromType. optional. default: 1.
   * @param {Integer} Type - type. optional. default: 0.
   */
  createSign(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SignName')) {
      throw new TypeError('parameter "SignName" is required');
    }

    return this.request('CreateSign', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} TemplateType - templateType. optional. default: 0.
   * @param {String} TemplateName - templateName. required.
   * @param {Integer} SmsType - smsType. optional.
   * @param {String} SmsContent - smsContent. optional.
   * @param {String} Remark - remark. optional.
   * @param {Integer} FromType - fromType. optional. default: 1.
   */
  createTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateName')) {
      throw new TypeError('parameter "TemplateName" is required');
    }

    return this.request('CreateTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} SignId - signId. required.
   * @param {Integer} FromType - fromType. optional. default: 1.
   */
  deleteSign(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SignId')) {
      throw new TypeError('parameter "SignId" is required');
    }

    return this.request('DeleteSign', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} TemplateId - templateId. required.
   * @param {Integer} FromType - fromType. optional. default: 1.
   */
  deleteTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('DeleteTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Version - version. optional.
   */
  descAccountSummary(params = {}, options = {}) {
    return this.request('DescAccountSummary', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DailyQuota - dailyQuota. optional.
   * @param {String} MonthQuota - monthQuota. optional.
   */
  modifyAccountSummary(params = {}, options = {}) {
    return this.request('ModifyAccountSummary', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  modifyDayu(params = {}, options = {}) {
    return this.request('ModifyDayu', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} KeyWord - keyWord. optional.
   * @param {Integer} FromType - fromType. optional. default: 1.
   */
  querySignByParam(params = {}, options = {}) {
    return this.request('QuerySignByParam', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 31.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   * @param {String} StartDateStr - startDateStr. required.
   * @param {String} EndDateStr - endDateStr. required.
   * @param {String} TemplateType - templateType. optional.
   * @param {String} TemplateCode - templateCode. optional.
   * @param {String} TagCode - tagCode. optional.
   */
  querySmsCurrentStatistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartDateStr')) {
      throw new TypeError('parameter "StartDateStr" is required');
    }

    if (!hasOwnProperty(params, 'EndDateStr')) {
      throw new TypeError('parameter "EndDateStr" is required');
    }

    return this.request('QuerySmsCurrentStatistics', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} QueryTime - queryTime. optional.
   * @param {String} RecNum - recNum. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   */
  querySmsDetailByPage(params = {}, options = {}) {
    return this.request('QuerySmsDetailByPage', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} QueryTime - queryTime. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   * @param {Integer} SmsType - smsType. required.
   */
  querySmsFailByPage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SmsType')) {
      throw new TypeError('parameter "SmsType" is required');
    }

    return this.request('QuerySmsFailByPage', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageSize - pageSize. optional. default: 31.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   * @param {Integer} SmsType - smsType. required.
   */
  querySmsStatistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'SmsType')) {
      throw new TypeError('parameter "SmsType" is required');
    }

    return this.request('QuerySmsStatistics', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  querySmsTemplateInfoList(params = {}, options = {}) {
    return this.request('QuerySmsTemplateInfoList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 40.
   * @param {String} KeyWord - keyWord. optional.
   * @param {Integer} Status - status. optional.
   * @param {Integer} FromType - fromType. optional. default: 1.
   */
  queryTemplateByParam(params = {}, options = {}) {
    return this.request('QueryTemplateByParam', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SignName - signName. required.
   * @param {String} TemplateCode - templateCode. required.
   * @param {String} RecNum - recNum. required.
   * @param {String} ParamString - paramString. required.
   */
  singleSendSms(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SignName')) {
      throw new TypeError('parameter "SignName" is required');
    }

    if (!hasOwnProperty(params, 'TemplateCode')) {
      throw new TypeError('parameter "TemplateCode" is required');
    }

    if (!hasOwnProperty(params, 'RecNum')) {
      throw new TypeError('parameter "RecNum" is required');
    }

    if (!hasOwnProperty(params, 'ParamString')) {
      throw new TypeError('parameter "ParamString" is required');
    }

    return this.request('SingleSendSms', params, options);
  }

}

module.exports = Client;

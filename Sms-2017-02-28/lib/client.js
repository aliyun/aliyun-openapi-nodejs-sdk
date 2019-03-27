
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-02-28';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Version - version. optional.
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
   * @param {String} Version - version. optional.
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
   * @param {String} Version - version. optional.
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
   * @param {String} Version - version. optional.
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
   * @param {String} Version - version. optional.
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
   * @param {String} Version - version. optional.
   */
  migrateMarket(params = {}, options = {}) {
    return this.request('MigrateMarket', params, options);
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
   * @param {String} Version - version. optional.
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
   * @param {String} Version - version. optional.
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
   * @param {String} Version - version. optional.
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
   * @param {String} Version - version. optional.
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
   * @param {String} Version - version. optional.
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
   * @param {String} Version - version. optional.
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
   * @param {String} Version - version. optional.
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
   * @param {String} Version - version. optional.
   */
  queryTemplateByParam(params = {}, options = {}) {
    return this.request('QueryTemplateByParam', params, options);
  }

}

module.exports = Client;

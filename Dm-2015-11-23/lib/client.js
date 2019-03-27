
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-11-23';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} IpAddress - ipAddress. required.
   */
  addIpfilter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IpAddress')) {
      throw new TypeError('parameter "IpAddress" is required');
    }

    return this.request('AddIpfilter', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} TemplateId - templateId. required.
   * @param {Integer} FromType - fromType. optional. default: 1.
   */
  approveMailTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('ApproveMailTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Ticket - ticket. required.
   */
  approveReplyMailAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ticket')) {
      throw new TypeError('parameter "Ticket" is required');
    }

    return this.request('ApproveReplyMailAddress', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} TemplateId - templateId. required.
   * @param {Integer} FromType - fromType. optional. default: 1.
   */
  approveSmsTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('ApproveSmsTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} TemplateId - templateId. required.
   * @param {Integer} FromType - fromType. optional. default: 1.
   */
  approveTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('ApproveTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TemplateName - templateName. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} ReceiversName - receiversName. required.
   * @param {Integer} AddressType - addressType. required.
   * @param {String} TagName - tagName. optional.
   * @param {String} ReplyAddress - replyAddress. optional.
   * @param {String} ReplyAddressAlias - replyAddressAlias. optional.
   * @param {String} ClickTrace - clickTrace. optional.
   */
  batchSendMail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateName')) {
      throw new TypeError('parameter "TemplateName" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'ReceiversName')) {
      throw new TypeError('parameter "ReceiversName" is required');
    }

    if (!hasOwnProperty(params, 'AddressType')) {
      throw new TypeError('parameter "AddressType" is required');
    }

    return this.request('BatchSendMail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} DomainId - domainId. required.
   */
  checkDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainId')) {
      throw new TypeError('parameter "DomainId" is required');
    }

    return this.request('CheckDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ToAddress - toAddress. optional.
   */
  checkInvalidAddress(params = {}, options = {}) {
    return this.request('CheckInvalidAddress', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Region - region. optional.
   * @param {Integer} MailAddressId - mailAddressId. required.
   */
  checkReplyToMailAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MailAddressId')) {
      throw new TypeError('parameter "MailAddressId" is required');
    }

    return this.request('CheckReplyToMailAddress', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} AccountType - accountType. required.
   */
  createDayu(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccountType')) {
      throw new TypeError('parameter "AccountType" is required');
    }

    return this.request('CreateDayu', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DomainName - domainName. required.
   */
  createDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('CreateDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AccountName - accountName. required.
   * @param {String} ReplyAddress - replyAddress. optional.
   * @param {String} Sendtype - sendtype. required.
   */
  createMailAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'Sendtype')) {
      throw new TypeError('parameter "Sendtype" is required');
    }

    return this.request('CreateMailAddress', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ReceiversName - receiversName. required.
   * @param {String} ReceiversAlias - receiversAlias. required.
   * @param {String} Desc - desc. optional.
   */
  createReceiver(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReceiversName')) {
      throw new TypeError('parameter "ReceiversName" is required');
    }

    if (!hasOwnProperty(params, 'ReceiversAlias')) {
      throw new TypeError('parameter "ReceiversAlias" is required');
    }

    return this.request('CreateReceiver', params, options);
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
   * @param {String} TagName - tagName. required.
   */
  createTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TagName')) {
      throw new TypeError('parameter "TagName" is required');
    }

    return this.request('CreateTag', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} TemplateType - templateType. optional. default: 0.
   * @param {String} TemplateName - templateName. required.
   * @param {String} TemplateSubject - templateSubject. optional.
   * @param {String} TemplateNickName - templateNickName. optional.
   * @param {String} TemplateText - templateText. optional.
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
   * @param {Integer} DomainId - domainId. required.
   */
  deleteDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainId')) {
      throw new TypeError('parameter "DomainId" is required');
    }

    return this.request('DeleteDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ToAddress - toAddress. optional.
   */
  deleteInvalidAddress(params = {}, options = {}) {
    return this.request('DeleteInvalidAddress', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} FromType - fromType. optional. default: 1.
   * @param {String} Id - id. optional.
   */
  deleteIpfilterByEdmId(params = {}, options = {}) {
    return this.request('DeleteIpfilterByEdmId', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} MailAddressId - mailAddressId. required.
   */
  deleteMailAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MailAddressId')) {
      throw new TypeError('parameter "MailAddressId" is required');
    }

    return this.request('DeleteMailAddress', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ReceiverId - receiverId. required.
   */
  deleteReceiver(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReceiverId')) {
      throw new TypeError('parameter "ReceiverId" is required');
    }

    return this.request('DeleteReceiver', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ReceiverId - receiverId. required.
   * @param {String} Email - email. optional.
   */
  deleteReceiverDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReceiverId')) {
      throw new TypeError('parameter "ReceiverId" is required');
    }

    return this.request('DeleteReceiverDetail', params, options);
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
   * @param {Integer} TagId - tagId. required.
   */
  deleteTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TagId')) {
      throw new TypeError('parameter "TagId" is required');
    }

    return this.request('DeleteTag', params, options);
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
   */
  descAccountSummary(params = {}, options = {}) {
    return this.request('DescAccountSummary', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} FromType - fromType. optional. default: 1.
   */
  descAccountSummary2(params = {}, options = {}) {
    return this.request('DescAccountSummary2', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} DomainId - domainId. required.
   */
  descDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainId')) {
      throw new TypeError('parameter "DomainId" is required');
    }

    return this.request('DescDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} TemplateId - templateId. required.
   * @param {Integer} FromType - fromType. optional. default: 1.
   */
  descTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('DescTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  enableAccount(params = {}, options = {}) {
    return this.request('EnableAccount', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Total - total. optional.
   * @param {String} Offset - offset. optional.
   * @param {String} PageSize - pageSize. optional.
   * @param {String} OffsetCreateTime - offsetCreateTime. optional.
   * @param {String} OffsetCreateTimeDesc - offsetCreateTimeDesc. optional.
   * @param {String} PageNumber - pageNumber. optional.
   */
  getAccountList(params = {}, options = {}) {
    return this.request('GetAccountList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  getIpProtection(params = {}, options = {}) {
    return this.request('GetIpProtection', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  getIpfilterList(params = {}, options = {}) {
    return this.request('GetIpfilterList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Total - total. optional.
   * @param {String} Offset - offset. optional.
   * @param {String} PageSize - pageSize. optional.
   * @param {String} OffsetCreateTime - offsetCreateTime. optional.
   * @param {String} OffsetCreateTimeDesc - offsetCreateTimeDesc. optional.
   * @param {String} PageNumber - pageNumber. optional.
   */
  getRegionList(params = {}, options = {}) {
    return this.request('GetRegionList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Total - total. optional.
   * @param {String} Offset - offset. optional.
   * @param {String} PageSize - pageSize. optional.
   * @param {String} PageNo - pageNo. optional.
   * @param {String} Keyword - keyword. optional.
   * @param {String} NotifyUrl - notifyUrl. optional.
   */
  getSenderAddressList(params = {}, options = {}) {
    return this.request('GetSenderAddressList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Total - total. optional.
   * @param {String} Offset - offset. optional.
   * @param {String} PageSize - pageSize. optional.
   * @param {String} OffsetCreateTime - offsetCreateTime. optional.
   * @param {String} OffsetCreateTimeDesc - offsetCreateTimeDesc. optional.
   * @param {String} PageNumber - pageNumber. optional.
   */
  getTrackList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('GetTrackList', params, options);
  }

  /**
   * @param {String} Total - total. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} EndTime - endTime. required.
   * @param {String} Offset - offset. optional.
   * @param {String} PageSize - pageSize. optional.
   * @param {String} OffsetCreateTime - offsetCreateTime. optional.
   * @param {String} OffsetCreateTimeDesc - offsetCreateTimeDesc. optional.
   * @param {String} PageNumber - pageNumber. optional.
   * @param {String} AccountName - accountName. optional.
   * @param {String} TagName - tagName. optional.
   */
  getTrackListByMailFromAndTagName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('GetTrackListByMailFromAndTagName', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Version - version. optional.
   * @param {Integer} FromType - fromType. optional. default: 1.
   */
  migrateMarket(params = {}, options = {}) {
    return this.request('MigrateMarket', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Region - region. optional.
   * @param {String} Status - status. required.
   */
  modifyAccountNotification(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('ModifyAccountNotification', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} MailAddressId - mailAddressId. required.
   * @param {String} ReplyAddress - replyAddress. optional.
   * @param {String} Password - password. optional.
   */
  modifyMailAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MailAddressId')) {
      throw new TypeError('parameter "MailAddressId" is required');
    }

    return this.request('ModifyMailAddress', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   * @param {String} Password - password. required.
   * @param {String} ResourceOwnerId - resourceOwnerId. optional.
   */
  modifyPWByDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Password')) {
      throw new TypeError('parameter "Password" is required');
    }

    return this.request('ModifyPWByDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SenderAddressId - senderAddressId. required.
   * @param {String} SenderAddress - senderAddress. required.
   * @param {String} Region - region. required.
   * @param {String} Status - status. required.
   */
  modifySenderAddressNotification(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SenderAddressId')) {
      throw new TypeError('parameter "SenderAddressId" is required');
    }

    if (!hasOwnProperty(params, 'SenderAddress')) {
      throw new TypeError('parameter "SenderAddress" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('ModifySenderAddressNotification', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} TagId - tagId. required.
   * @param {String} TagName - tagName. required.
   */
  modifyTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TagId')) {
      throw new TypeError('parameter "TagId" is required');
    }

    if (!hasOwnProperty(params, 'TagName')) {
      throw new TypeError('parameter "TagName" is required');
    }

    return this.request('ModifyTag', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} TemplateId - templateId. required.
   * @param {String} TemplateName - templateName. required.
   * @param {String} TemplateSubject - templateSubject. optional.
   * @param {String} TemplateNickName - templateNickName. optional.
   * @param {String} TemplateText - templateText. optional.
   * @param {Integer} SmsType - smsType. optional.
   * @param {String} SmsContent - smsContent. optional.
   * @param {String} Remark - remark. optional.
   * @param {Integer} FromType - fromType. optional. default: 1.
   */
  modifyTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    if (!hasOwnProperty(params, 'TemplateName')) {
      throw new TypeError('parameter "TemplateName" is required');
    }

    return this.request('ModifyTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {String} KeyWord - keyWord. optional.
   * @param {Integer} Status - status. optional.
   */
  queryDomainByParam(params = {}, options = {}) {
    return this.request('QueryDomainByParam', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} KeyWord - keyWord. optional.
   * @param {Integer} Length - length. optional. default: 10.
   * @param {String} NextStart - nextStart. optional.
   */
  queryInvalidAddress(params = {}, options = {}) {
    return this.request('QueryInvalidAddress', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 40.
   * @param {String} KeyWord - keyWord. optional.
   * @param {String} Sendtype - sendtype. optional.
   */
  queryMailAddressByParam(params = {}, options = {}) {
    return this.request('QueryMailAddressByParam', params, options);
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
   */
  queryReceiverByParam(params = {}, options = {}) {
    return this.request('QueryReceiverByParam', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ReceiverId - receiverId. required.
   * @param {Integer} PageSize - pageSize. optional. default: 40.
   * @param {String} KeyWord - keyWord. optional.
   * @param {String} NextStart - nextStart. optional.
   */
  queryReceiverDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReceiverId')) {
      throw new TypeError('parameter "ReceiverId" is required');
    }

    return this.request('QueryReceiverDetail', params, options);
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
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} FromType - fromType. optional. default: 1.
   */
  querySmsStatistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('QuerySmsStatistics', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} KeyWord - keyWord. optional.
   */
  queryTagByParam(params = {}, options = {}) {
    return this.request('QueryTagByParam', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} KeyWord - keyWord. optional.
   * @param {Integer} Status - status. optional.
   */
  queryTaskByParam(params = {}, options = {}) {
    return this.request('QueryTaskByParam', params, options);
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
   * @param {String} ReceiverId - receiverId. required.
   * @param {String} Detail - detail. required.
   */
  saveReceiverDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReceiverId')) {
      throw new TypeError('parameter "ReceiverId" is required');
    }

    if (!hasOwnProperty(params, 'Detail')) {
      throw new TypeError('parameter "Detail" is required');
    }

    return this.request('SaveReceiverDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} TemplateId - templateId. required.
   * @param {String} AccountName - accountName. required.
   * @param {String} UserName - userName. optional.
   * @param {String} NickName - nickName. optional.
   * @param {String} Birthday - birthday. optional.
   * @param {String} Gender - gender. optional.
   * @param {String} Mobile - mobile. optional.
   * @param {String} Email - email. required.
   */
  sendTestByTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    return this.request('SendTestByTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AccountName - accountName. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} TagName - tagName. optional.
   */
  senderStatisticsByTagNameAndBatchID(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('SenderStatisticsByTagNameAndBatchID', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AccountName - accountName. optional.
   * @param {String} ToAddress - toAddress. optional.
   * @param {Integer} Status - status. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} TagName - tagName. optional.
   * @param {Integer} Length - length. optional. default: 10.
   * @param {String} NextStart - nextStart. optional.
   */
  senderStatisticsDetailByParam(params = {}, options = {}) {
    return this.request('SenderStatisticsDetailByParam', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MaxQuotaLevel - maxQuotaLevel. required.
   */
  setMaxQuotaLevel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MaxQuotaLevel')) {
      throw new TypeError('parameter "MaxQuotaLevel" is required');
    }

    return this.request('SetMaxQuotaLevel', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AccountName - accountName. required.
   * @param {Integer} AddressType - addressType. required.
   * @param {String} TagName - tagName. optional.
   * @param {Boolean} ReplyToAddress - replyToAddress. required.
   * @param {String} ToAddress - toAddress. required.
   * @param {String} Subject - subject. required.
   * @param {String} HtmlBody - htmlBody. optional.
   * @param {String} TextBody - textBody. optional.
   * @param {String} FromAlias - fromAlias. optional.
   * @param {String} ReplyAddress - replyAddress. optional.
   * @param {String} ReplyAddressAlias - replyAddressAlias. optional.
   * @param {String} ClickTrace - clickTrace. optional.
   */
  singleSendMail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccountName')) {
      throw new TypeError('parameter "AccountName" is required');
    }

    if (!hasOwnProperty(params, 'AddressType')) {
      throw new TypeError('parameter "AddressType" is required');
    }

    if (!hasOwnProperty(params, 'ReplyToAddress')) {
      throw new TypeError('parameter "ReplyToAddress" is required');
    }

    if (!hasOwnProperty(params, 'ToAddress')) {
      throw new TypeError('parameter "ToAddress" is required');
    }

    if (!hasOwnProperty(params, 'Subject')) {
      throw new TypeError('parameter "Subject" is required');
    }

    return this.request('SingleSendMail', params, options);
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
   * @param {String} Version - version. optional.
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

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} DomainId - domainId. required.
   * @param {String} CnameTrackRecord - cnameTrackRecord. required.
   */
  updateDomainTrackName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainId')) {
      throw new TypeError('parameter "DomainId" is required');
    }

    if (!hasOwnProperty(params, 'CnameTrackRecord')) {
      throw new TypeError('parameter "CnameTrackRecord" is required');
    }

    return this.request('UpdateDomainTrackName', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} IpProtection - ipProtection. optional.
   */
  updateIpProtection(params = {}, options = {}) {
    return this.request('UpdateIpProtection', params, options);
  }

}

module.exports = Client;
